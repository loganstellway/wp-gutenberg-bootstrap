/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { InspectorControls, InnerBlocks, MediaUpload, MediaUploadCheck } from '@wordpress/editor';
import { PanelBody, BaseControl, TextControl, RangeControl, ToggleControl, SelectControl, ColorPicker, Button, ButtonGroup } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { getColumnsTemplate, getContainerClass, getRowClass, getBackgroundColor, getBackgroundStyles } from './utils';
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const bgInstructions = <p>{ __( 'To edit the background image, you need permission to upload media.' ) }</p>;

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'loganstellway/bootstrap-column'.
 *
 * @constant
 * @type {string[]}
*/
const ALLOWED_BLOCKS = [ 'loganstellway/bootstrap-column' ];

const ColumnsEdit = function( { attributes, setAttributes, className } ) {
    // Attributes
    const { columns, width, gutter, verticalAlignment, rowClass, bgUrl, bgId, bgAttachment, bgPosition, addBgColor, bgColor, addMaskColor, maskColor, addTextColor, textColor } = attributes;

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
    const gridTitle = (
        <span className="editor-panel-grid-settings__panel-title">
            { __("Grid") }
        </span>
    );
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
                <PanelBody
                    className="editor-panel-columns-settings"
                    title={ gridTitle }
                >
                    <SelectControl
                        label={ __( 'Container Width' ) }
                        value={ width }
                        onChange={ ( newWidth ) => {
                            setAttributes( {
                                width: newWidth,
                            } )
                        } }
                        options={ [
                            { label: 'Fixed', value: 'container' },
                            { label: 'Fluid (Full-Width)', value: 'container-fluid' },
                        ] }
                    />
                    <RangeControl
                        label={ __( 'Columns' ) }
                        value={ columns }
                        onChange={ ( numCols ) => {
                            setAttributes( {
                                columns: parseInt( numCols ),
                            } );
                        } }
                        min={ 1 }
                        max={ 12 }
                    />
                    <ToggleControl
                        label={ __( 'Gutter' ) }
                        checked={ gutter }
                        onChange={ ( useGutter ) => {
                            setAttributes( {
                                gutter: useGutter,
                            } );
                        } }
                    />
                    <SelectControl
                        label={ __( 'Vertical Alignment' ) }
                        value={ verticalAlignment }
                        onChange={ ( alignment ) => {
                            setAttributes( {
                                verticalAlignment: alignment,
                            } )
                        } }
                        options={ [
                            { label: 'Top', value: 'align-items-start' },
                            { label: 'Middle', value: 'align-items-center' },
                            { label: 'Bottom', value: 'align-items-end' },
                        ] }
                    />
                    <TextControl
                        label={ __('Additional Row Classes') }
                        value={ rowClass }
                        onChange={ ( className ) => {
                            setAttributes( {
                                rowClass: className,
                            } );
                        } }
                    />
                </PanelBody>
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
                <PanelBody className="editor-panel-color-settings" title={ colorTitle }>
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
                                } );
                            } }
                            disableAlpha
                        >
                        </ColorPicker>
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
            <div
                className={ getContainerClass( attributes, ( className || "" ) + " overflow-visible" ) }
                style={ getBackgroundStyles( attributes ) }
            >
                <div
                    className="grid-mask--container embed-responsive-item"
                    style={ {
                        backgroundColor: getBackgroundColor( addMaskColor ? maskColor : null ),
                    } }
                />
                <div className={ getRowClass( attributes ) }>
                    <InnerBlocks
                        template={ getColumnsTemplate( columns ) }
                        templateLock='all'
                        allowedBlocks={ ALLOWED_BLOCKS }
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default compose(
    /**
     * Selects the child column Blocks for this parent Column
     */
    withSelect( ( select, { clientId } ) => {
        const { getBlocksByClientId } = select( 'core/editor' );
        const block = getBlocksByClientId( clientId )[ 0 ];

        return {
            childColumns: block ? block.innerBlocks : [],
        };
    } ),
)( ColumnsEdit );
