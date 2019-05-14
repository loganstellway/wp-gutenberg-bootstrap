/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { InspectorControls, BlockControls, AlignmentToolbar, InnerBlocks, MediaUpload, MediaUploadCheck } from '@wordpress/editor';
import { withSelect } from '@wordpress/data';
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import { BaseControl, PanelBody, ToggleControl, SelectControl, ColorPicker, Button, ButtonGroup } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal Dependencies
 */
import { getColumnClass, getBackgroundColor, getBackgroundStyles, getPanelTitle } from '../utils';
import ColumnSizeToolbar from '../../components/column-size-toolbar';
import VerticalAlignToolbar from '../../components/vertical-align-toolbar';
import AlignContentToolbar from '../../components/align-content-toolbar';
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const bgInstructions = <p>{ __( 'To edit the background image, you need permission to upload media.' ) }</p>;
const breakpoints = [ 'xs', 'sm', 'md', 'lg', 'xl' ];

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
    const { bgUrl, bgId, bgAttachment, addBgColor, bgColor, addMaskColor, maskColor, bgPosition, addTextColor, textColor, textAlign } = attributes;

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

    // Edit
    return (
        <Fragment>
            <InspectorControls>
                <PanelBody className="editor-panel-alignment-settings" title={ getPanelTitle( 'alignment', __( 'Alignment' ) ) }>
                    <BaseControl label={ __('Column Size') }>
                        <div style={ { overflowX: 'auto' } }>
                            <table style={ { width: '100%' } }>
                                <tbody>
                                    <tr>
                                        { breakpoints.map( (breakpoint) => {
                                            return (
                                                <td key={ breakpoint }>
                                                    <ColumnSizeToolbar
                                                        breakpoint={ breakpoint }
                                                        value={ attributes[ breakpoint ] }
                                                        onChange={ ( val ) => {
                                                            let data = {};
                                                            data[ breakpoint ] = val;
                                                            setAttributes( data );
                                                        } }
                                                        />
                                                </td>
                                            );
                                        } ) }
                                        <td key="all">
                                            <ColumnSizeToolbar
                                                breakpoint='all'
                                                onChange={ ( val ) => {
                                                    let data = { sm: val, md: val, lg: val, xl: val };
                                                    data[ 'xs' ] = val ? val : 6;
                                                    setAttributes( data );
                                                } }
                                                />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </BaseControl>
                    <BaseControl label={ __('Vertical Align') }>
                        <div style={ { overflowX: 'auto' } }>
                            <table style={ { width: '100%' } }>
                                <tbody>
                                    <tr>
                                        { breakpoints.map( (breakpoint) => {
                                            return (
                                                <td key={ breakpoint }>
                                                    <VerticalAlignToolbar
                                                        breakpoint={ breakpoint }
                                                        value={ attributes[ `${ breakpoint }Align` ] }
                                                        onChange={ ( val ) => {
                                                            let data = {};
                                                            data[ `${ breakpoint }Align` ] = val;
                                                            setAttributes( data );
                                                        } }
                                                        />
                                                </td>
                                            );
                                        } ) }
                                        <td key="all">
                                            <VerticalAlignToolbar
                                                breakpoint='all'
                                                onChange={ ( val ) => {
                                                    setAttributes( {
                                                        xsAlign: val,
                                                        smAlign: val,
                                                        mdAlign: val,
                                                        lgAlign: val,
                                                        xlAlign: val,
                                                    } );
                                                } }
                                                />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </BaseControl>
                    <BaseControl label={ __('Align Content') }>
                        <div style={ { overflowX: 'auto' } }>
                            <table style={ { width: '100%' } }>
                                <tbody>
                                    <tr>
                                        { breakpoints.map( (breakpoint) => {
                                            return (
                                                <td key={ breakpoint }>
                                                    <AlignContentToolbar
                                                        breakpoint={ breakpoint }
                                                        value={ attributes[ `${ breakpoint }Content` ] }
                                                        onChange={ ( val ) => {
                                                            let data = {};
                                                            data[ `${ breakpoint }Content` ] = val;
                                                            setAttributes( data )
                                                        } }
                                                        />
                                                </td>
                                            );
                                        } ) }
                                        <td key="all">
                                            <AlignContentToolbar
                                                breakpoint='all'
                                                onChange={ ( val ) => {
                                                    setAttributes( {
                                                        xsContent: val,
                                                        smContent: val,
                                                        mdContent: val,
                                                        lgContent: val,
                                                        xlContent: val,
                                                    } )
                                                } }
                                                />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </BaseControl>
                </PanelBody>
                <PanelBody className="editor-panel-background-settings" title={ getPanelTitle( 'background', __( 'Background' ) ) }>
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
                                    setAttributes( { bgPosition: behavior } )
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
                                    setAttributes( { bgAttachment: behavior } )
                                } }
                                options={ [
                                    { label: __('Scroll (Default)'), value: 'scroll' },
                                    { label: __('Fixed (Parallax)'), value: 'fixed' },
                                ] }
                            />
                        </Fragment>
                    }
                </PanelBody>
                <PanelBody className="editor-panel-color-settings" title={ getPanelTitle( 'color', __( 'Color' ) ) }>
                    <ToggleControl
                        label={ __( 'Add Text Color?' ) }
                        checked={ addTextColor }
                        onChange={ ( use ) => {
                            setAttributes( { addTextColor: use } );
                        } }
                    />
                    {
                        addTextColor && 
                        <ColorPicker
                            color={ textColor }
                            onChangeComplete={ (color) => {
                                setAttributes( { textColor: color } )
                            } }
                            disableAlpha
                        />
                    }
                    <ToggleControl
                        label={ __( 'Add Background Color?' ) }
                        checked={ addBgColor }
                        onChange={ ( use ) => {
                            setAttributes( { addBgColor: use } );
                        } }
                    />
                    {
                        addBgColor && 
                        <ColorPicker
                            color={ bgColor }
                            onChangeComplete={ (color) => {
                                setAttributes( { bgColor: color } )
                            } }
                        />
                    }
                    <ToggleControl
                        label={ __( 'Add Mask Color?' ) }
                        checked={ addMaskColor }
                        onChange={ ( use ) => {
                            setAttributes( { addMaskColor: use } );
                        } }
                    />
                    {
                        addMaskColor && 
                        <ColorPicker
                            color={ maskColor }
                            onChangeComplete={ (color) => {
                                setAttributes( { maskColor: color } )
                            } }
                        />
                    }
                </PanelBody>
            </InspectorControls>
            <BlockControls>
                <AlignmentToolbar
                    value={ textAlign }
                    onChange={ ( align ) => {
                        align = align === textAlign ? "" : align;
                        setAttributes( { textAlign: align } );
                    } }
                />
            </BlockControls>
            <div className={ getColumnClass( attributes, `${ className } overflow-visible` ) } style={ getBackgroundStyles( attributes ) }>
                <div className="bootstrap-grid--mask" style={ { backgroundColor: getBackgroundColor( addMaskColor ? maskColor : null ) } } />
                <div className="bootstrap-grid--content">
                    <InnerBlocks templateLock={ false } />
                </div>
            </div>
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
