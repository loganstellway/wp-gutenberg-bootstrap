/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { InspectorControls, InnerBlocks, BlockControls, MediaUpload, MediaUploadCheck } from '@wordpress/editor';
import { withSelect } from '@wordpress/data';
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import { BaseControl, PanelBody, ToggleControl, SelectControl, ColorPicker, Button, ButtonGroup } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal Dependencies
 */
import { getColumnClass, getBackgroundColor, getBackgroundStyles } from '../grid/utils';
import BootstrapColumnToolbar from '../../components/column-toolbar';
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const bgInstructions = <p>{ __( 'To edit the background image, you need permission to upload media.' ) }</p>;

/**
 * Add column class to containers
 */
addFilter( 'editor.BlockListBlock', 'loganstellway/bootstrap-column-edit-classes', createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
        const { block } = props;
        const { attributes, name } = block;

        if ( name == 'loganstellway/bootstrap-column' ) {
            const { className, addMaskColor, maskColor } = attributes;
            return (
                <div
                    className={ getColumnClass( attributes, (className || "") + " overflow-visible" ) }
                    style={ getBackgroundStyles( attributes ) }
                >
                    <div
                        className="grid-mask--column embed-responsive-item"
                        style={ {
                            backgroundColor: getBackgroundColor( addMaskColor ? maskColor : null ),
                        } }
                    />
                    <BlockListBlock { ...props } />
                </div>
            );
        }

        return ( <BlockListBlock { ...props } /> );
    };
} ) );

/**
 * Column edit
 * 
 * @param  {object}   attributes
 * @param  {function} setAttributes
 * @param  {string}   className
 * @return {object}   React component
 */
const ColumnEdit = ( { attributes, setAttributes, className } ) => {
    // Attributes
    const { xs, sm, md, lg, xl, bgUrl, bgId, bgAttachment, addBgColor, bgColor, addMaskColor, maskColor, bgPosition, addTextColor, textColor } = attributes;

    // Background Media
    const onSelectBackground = ( media ) => {
        if ( ! media || ! media.url ) {
            setAttributes( { bgUrl: undefined, bgId: undefined } );
            return;
        }

        // Normalize + validate media type
        let mediaType = media.media_type || media.type;
        if ( ALLOWED_MEDIA_TYPES.indexOf( mediaType ) < 0 ) {
            return;
        }

        setAttributes( {
            bgUrl: media.url,
            bgId: media.id,
            bgType: mediaType,
        } );
    };

    // Titles
    const bgTitle = (
        <span className="editor-panel-background-settings__panel-title">
            { __("Background") }
        </span>
    );
    const colorTitle = (
        <span className="editor-panel-color-settings__panel-title">
            { __("Colors") }
        </span>
    );

    // Edit
    return (
        <Fragment>
            <InspectorControls>
                <PanelBody className="editor-panel-background-settings" title={ bgTitle }>
                    <BaseControl label={ __('Background Image') }>
                        <MediaUploadCheck fallback={ bgInstructions }>
                            <MediaUpload
                                title={ __('Select Background Image') }
                                onSelect={ onSelectBackground }
                                allowedTypes={ ALLOWED_MEDIA_TYPES }
                                value={ bgId }
                                render={ ( { open } ) => (
                                    <Fragment>
                                        { ! bgUrl && 
                                            <Button isDefault onClick={ open }>
                                                <span>{ __('Select Background Image') }</span>
                                            </Button>
                                        }
                                        { bgUrl && 
                                            <Fragment>
                                                <Button isLink onClick={ open }>
                                                    <img src={ bgUrl } alt="" />
                                                </Button>
                                                <ButtonGroup>
                                                    <Button isDefault onClick={ onSelectBackground }>
                                                        { __('Remove') }
                                                    </Button>
                                                    &nbsp;
                                                    <Button isPrimary onClick={ open }>
                                                        { __('Change') }
                                                    </Button>
                                                </ButtonGroup>
                                            </Fragment>
                                        }
                                    </Fragment>
                                ) }
                            />
                        </MediaUploadCheck>
                    </BaseControl>
                    { bgUrl &&
                        <Fragment>
                            <SelectControl
                                label={ __( 'Background Position' ) }
                                value={ bgPosition }
                                onChange={ ( behavior ) => {
                                    setAttributes( {
                                        bgPosition: behavior,
                                    } )
                                } }
                                options={ [
                                    { label: __('Left Top'), value: '0 0' },
                                    { label: __('Left Middle'), value: '0 50%' },
                                    { label: __('Left Bottom'), value: '0 100%' },
                                    { label: __('Center Top'), value: '50% 0' },
                                    { label: __('Center Middle'), value: '50% 50%' },
                                    { label: __('Center Bottom'), value: '50% 100%' },
                                    { label: __('Right Top'), value: '100% 0' },
                                    { label: __('Right Middle'), value: '100% 50%' },
                                    { label: __('Right Bottom'), value: '100% 100%' },
                                ] }
                            />
                            <SelectControl
                                label={ __( 'Background Scroll Behavior' ) }
                                value={ bgAttachment }
                                onChange={ ( behavior ) => {
                                    setAttributes( {
                                        bgAttachment: behavior,
                                    } )
                                } }
                                options={ [
                                    { label: __('Scroll (Default)'), value: 'scroll' },
                                    { label: __('Fixed (Parallax)'), value: 'fixed' },
                                ] }
                            />
                        </Fragment>
                    }
                </PanelBody>
                <PanelBody className="editor-panel-background-settings" title={ colorTitle }>
                    <ToggleControl
                        label={ __( 'Add Text Color?' ) }
                        checked={ addTextColor }
                        onChange={ ( use ) => {
                            setAttributes( {
                                addTextColor: use,
                            } );
                        } }
                    />
                    {
                        addTextColor && 
                        <ColorPicker
                            color={ textColor }
                            onChangeComplete={ (color) => {
                                setAttributes( {
                                    textColor: color,
                                } )
                            } }
                            disableAlpha
                        />
                    }
                    <ToggleControl
                        label={ __( 'Add Background Color?' ) }
                        checked={ addBgColor }
                        onChange={ ( use ) => {
                            setAttributes( {
                                addBgColor: use,
                            } );
                        } }
                    />
                    {
                        addBgColor && 
                        <ColorPicker
                            color={ bgColor }
                            onChangeComplete={ (color) => {
                                setAttributes( {
                                    bgColor: color,
                                } )
                            } }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Add Mask Color?' ) }
                        checked={ addMaskColor }
                        onChange={ ( use ) => {
                            setAttributes( {
                                addMaskColor: use,
                            } );
                        } }
                    />
                    {
                        addMaskColor && 
                        <ColorPicker
                            color={ maskColor }
                            onChangeComplete={ (color) => {
                                setAttributes( {
                                    maskColor: color,
                                } )
                            } }
                        />
                    }
                </PanelBody>
            </InspectorControls>
            <BlockControls>
                <BootstrapColumnToolbar
                    breakpoint='xs'
                    value={ xs }
                    onChange={ ( size ) => {
                        setAttributes( { xs: size } )
                    } }
                    />
                <BootstrapColumnToolbar
                    breakpoint='sm'
                    value={ sm }
                    onChange={ ( size ) => {
                        setAttributes( { sm: size } )
                    } }
                    />
                <BootstrapColumnToolbar
                    breakpoint='md'
                    value={ md }
                    onChange={ ( size ) => {
                        setAttributes( { md: size } )
                    } }
                    />
                <BootstrapColumnToolbar
                    breakpoint='lg'
                    value={ lg }
                    onChange={ ( size ) => {
                        setAttributes( { lg: size } )
                    } }
                    />
                <BootstrapColumnToolbar
                    breakpoint='xl'
                    value={ xl }
                    onChange={ ( size ) => {
                        setAttributes( { xl: size } )
                    } }
                    />
                <BootstrapColumnToolbar
                    breakpoint='all'
                    onChange={ ( size ) => {
                        setAttributes( {
                            xs: size,
                            sm: size,
                            md: size,
                            lg: size,
                            xl: size,
                        } )
                    } }
                    />
            </BlockControls>
            <InnerBlocks templateLock={ false } style={ getBackgroundStyles( attributes ) } />
        </Fragment>
    );
};

export default compose(
    withSelect( ( select, { clientId } ) => {
        const coreEditor = select( 'core/editor' );
        const { getBlocksByClientId, getBlockRootClientId } = select( 'core/editor' );

        return {
            parentColumnsBlockClientId: getBlockRootClientId( clientId ),
        };
    } ),
)( ColumnEdit );
