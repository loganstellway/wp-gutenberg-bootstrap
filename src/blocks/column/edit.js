/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment, createRef } from '@wordpress/element';
import { InspectorControls, BlockControls, AlignmentToolbar, InnerBlocks, MediaUpload, MediaUploadCheck } from '@wordpress/editor';
import { withSelect } from '@wordpress/data';
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import { BaseControl, PanelBody, PanelRow, ToggleControl, SelectControl, ColorPicker, Button, ButtonGroup } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal Dependencies
 */
import { getColumnClass, getRGBColor, getBackgroundStyles, getPanelTitle } from '../utils';
import ColumnSizeToolbar from '../../components/column-size-toolbar';
import ColumnOffsetToolbar from '../../components/column-offset-toolbar';
import VerticalAlignToolbar from '../../components/vertical-align-toolbar';
import AlignContentToolbar from '../../components/align-content-toolbar';

/**
 * Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const breakpoints = [ 'xs', 'sm', 'md', 'lg', 'xl' ];

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
                <div className={ getColumnClass( attributes, `${ className || '' } overflow-visible` ) } style={ getBackgroundStyles( attributes ) }>
                    <div className="bootstrap-grid--mask" style={ { backgroundColor: getRGBColor( addMaskColor ? maskColor : null ) } } />
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
class ColumnEdit extends Component {
    constructor() {
        super( ...arguments );
    }

    render() {
        // Props
        const {
            attributes,
            setAttributes,
            className
        } = this.props;

        // Attributes
        const {
            bgUrl,
            bgId,
            bgAttachment,
            addBgColor,
            bgColor,
            addMaskColor,
            maskColor,
            bgPosition,
            addTextColor,
            textColor,
            textAlign
        } = attributes;

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
                    <PanelBody className="editor-panel-size-settings" title={ getPanelTitle( 'size', __( 'Size & Offset' ) ) } initialOpen={ false }>
                        <BaseControl label={ __('Column Size') }>
                            <div style={ { overflowX: 'auto' } }>
                                <PanelRow className="align-items-start">
                                    { breakpoints.map( (breakpoint) => {
                                        return (
                                            <ColumnSizeToolbar
                                                key={ breakpoint }
                                                breakpoint={ breakpoint }
                                                value={ attributes[ breakpoint ] }
                                                onChange={ ( val ) => {
                                                    let data = {};
                                                    data[ breakpoint ] = val;
                                                    setAttributes( data );
                                                } }
                                                />
                                        );
                                    } ) }
                                    <ColumnSizeToolbar
                                        key='all'
                                        breakpoint='all'
                                        onChange={ ( val ) => {
                                            let data = { sm: val, md: val, lg: val, xl: val };
                                            data[ 'xs' ] = val ? val : 6;
                                            setAttributes( data );
                                        } }
                                        />
                                </PanelRow>
                            </div>
                        </BaseControl>
                        <BaseControl label={ __('Column Offset') }>
                            <div style={ { overflowX: 'auto' } }>
                                <PanelRow className="align-items-start">
                                    { breakpoints.map( (breakpoint) => {
                                        return (
                                            <ColumnOffsetToolbar
                                                key={ breakpoint }
                                                breakpoint={ breakpoint }
                                                value={ attributes[ `${breakpoint}Offset` ] }
                                                onChange={ ( val ) => {
                                                    let data = {};
                                                    data[ `${breakpoint}Offset` ] = val;
                                                    setAttributes( data );
                                                } }
                                                />
                                        );
                                    } ) }
                                    <ColumnOffsetToolbar
                                        key='all'
                                        breakpoint='all'
                                        onChange={ ( val ) => {
                                            setAttributes( { xsOffset: val, smOffset: val, mdOffset: val, lgOffset: val, xlOffset: val } );
                                        } }
                                        />
                                </PanelRow>
                            </div>
                        </BaseControl>
                    </PanelBody>
                    <PanelBody className="editor-panel-alignment-settings" title={ getPanelTitle( 'alignment', __( 'Alignment' ) ) } initialOpen={ false }>
                        <BaseControl label={ __('Vertical Align') }>
                            <div style={ { overflowX: 'auto' } }>
                                <PanelRow className="align-items-start">
                                    { breakpoints.map( (breakpoint) => {
                                        return (
                                            <VerticalAlignToolbar
                                                key={ breakpoint }
                                                breakpoint={ breakpoint }
                                                value={ attributes[ `${ breakpoint }Align` ] }
                                                onChange={ ( val ) => {
                                                    let data = {};
                                                    data[ `${ breakpoint }Align` ] = val;
                                                    setAttributes( data );
                                                } }
                                                />
                                        );
                                    } ) }
                                    <VerticalAlignToolbar
                                        key='all'
                                        breakpoint='all'
                                        onChange={ ( val ) => {
                                            setAttributes( { xsAlign: val, smAlign: val, mdAlign: val, lgAlign: val, xlAlign: val } );
                                        } }
                                        />
                                </PanelRow>
                            </div>
                        </BaseControl>
                        <BaseControl label={ __('Horizontal Align') }>
                            <div style={ { overflowX: 'auto' } }>
                                <PanelRow className="align-items-start">
                                    { breakpoints.map( (breakpoint) => {
                                        return (
                                            <AlignContentToolbar
                                                key={ breakpoint }
                                                breakpoint={ breakpoint }
                                                value={ attributes[ `${ breakpoint }Content` ] }
                                                onChange={ ( val ) => {
                                                    let data = {};
                                                    data[ `${ breakpoint }Content` ] = val;
                                                    setAttributes( data )
                                                } }
                                                />
                                        );
                                    } ) }
                                    <AlignContentToolbar
                                        key='all'
                                        breakpoint='all'
                                        onChange={ ( val ) => {
                                            setAttributes( { xsContent: val, smContent: val, mdContent: val, lgContent: val, xlContent: val } )
                                        } }
                                        />
                                </PanelRow>
                            </div>
                        </BaseControl>
                    </PanelBody>
                    <PanelBody className="editor-panel-background-settings" title={ getPanelTitle( 'background', __( 'Background' ) ) } initialOpen={ false }>
                        <BaseControl label={ __('Background Image') }>
                            <MediaUploadCheck fallback={ (
                                <p>{ __( 'To edit the background image, you need permission to upload media.' ) }</p>
                            ) }>
                                <MediaUpload
                                    title={ __('Select Background Image') }
                                    onSelect={ onSelectBackground }
                                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                                    value={ bgId }
                                    render={ ( { open } ) => (
                                        <Fragment>
                                            { ! bgUrl && (
                                                <Button isDefault onClick={ open }>
                                                    <span>{ __('Select Background Image') }</span>
                                                </Button>
                                            ) }
                                            { bgUrl && (
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
                                            ) }
                                        </Fragment>
                                    ) }
                                    />
                            </MediaUploadCheck>
                        </BaseControl>
                        { bgUrl && (
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
                        ) }
                    </PanelBody>
                    <PanelBody className="editor-panel-colors-settings" title={ getPanelTitle( 'colors', __( 'Colors' ) ) } initialOpen={ false }>
                        <ToggleControl
                            label={ __( 'Add Background Color?' ) }
                            checked={ addBgColor }
                            onChange={ ( use ) => {
                                setAttributes( { addBgColor: use } );
                            } }
                            />
                        { addBgColor && (
                            <ColorPicker
                                color={ bgColor }
                                onChangeComplete={ (color) => {
                                    setAttributes( { bgColor: color } )
                                } }
                                />
                        ) }
                        <ToggleControl
                            label={ __( 'Add Mask Color?' ) }
                            checked={ addMaskColor }
                            onChange={ ( use ) => {
                                setAttributes( { addMaskColor: use } );
                            } }
                            />
                        { addMaskColor && (
                            <ColorPicker
                                color={ maskColor }
                                onChangeComplete={ (color) => {
                                    setAttributes( { maskColor: color } )
                                } }
                                />
                        ) }
                        <ToggleControl
                            label={ __( 'Add Text Color?' ) }
                            checked={ addTextColor }
                            onChange={ ( use ) => {
                                setAttributes( { addTextColor: use } );
                            } }
                            />
                        { addTextColor && (
                            <ColorPicker
                                color={ textColor }
                                onChangeComplete={ (color) => {
                                    setAttributes( { textColor: color } )
                                } }
                                disableAlpha
                                />
                        ) }
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
                <InnerBlocks templateLock={ false } />
            </Fragment>
        );
    }
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
