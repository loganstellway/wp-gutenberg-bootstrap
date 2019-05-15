/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { Component, Fragment, createRef } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { InspectorControls, BlockControls, InnerBlocks, MediaUpload, MediaUploadCheck } from '@wordpress/editor';
import { PanelBody, BaseControl, TextControl, RangeControl, ToggleControl, SelectControl, ColorPicker, Button, ButtonGroup } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { getColumnsTemplate, getContainerClass, getRowClass, getBackgroundColor, getBackgroundStyles, getPanelTitle } from '../utils';
import FlexDirectionToolbar from '../../components/flex-direction-toolbar';
import JustifyContentToolbar from '../../components/justify-content-toolbar';
import VerticalAlignToolbar from '../../components/vertical-align-toolbar';

/**
 * Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const ALLOWED_BLOCKS = [ 'loganstellway/bootstrap-column' ];
const bgInstructions = <p>{ __( 'To edit the background image, you need permission to upload media.' ) }</p>;
const breakpoints = [ 'xs', 'sm', 'md', 'lg', 'xl' ];

/**
 * Grid edit
 */
class GridEdit extends Component {
    constructor() {
        super( ...arguments );
        this.onSelectBackground = this.onSelectBackground.bind( this );
    }

    onSelectBackground( media ) {
        if ( ! media || ! media.url ) {
            this.props.setAttributes( { bgUrl: undefined, bgId: undefined } );
            return;
        }

        // Normalize + validate media type
        let mediaType = media.media_type || media.type;
        if ( ALLOWED_MEDIA_TYPES.indexOf( mediaType ) < 0 ) {
            return;
        }

        this.props.setAttributes( { bgUrl: media.url, bgId: media.id, bgType: mediaType } );
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
            columns,
            width,
            gutter,
            rowClass,
            bgUrl,
            bgId,
            bgAttachment,
            bgPosition,
            addBgColor,
            bgColor,
            addMaskColor,
            maskColor,
            addTextColor,
            textColor
        } = attributes;

        // Edit
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody className="editor-panel-grid-settings" title={ getPanelTitle( 'grid', __( 'Grid' ) ) } initialOpen={ false }>
                        <SelectControl
                            label={ __( 'Container Width' ) }
                            value={ width }
                            onChange={ ( newWidth ) => {
                                setAttributes( { width: newWidth } )
                            } }
                            options={ [
                                { label: 'Fixed', value: 'container' },
                                { label: 'Fluid (Full-Width)', value: 'container-fluid' },
                            ] }
                            />
                        <RangeControl
                            label={ __( 'Columns' ) }
                            value={ columns }
                            min={ 1 }
                            max={ 12 }
                            onChange={ ( numCols ) => {
                                setAttributes( { columns: parseInt( numCols ) } );
                            } }
                            />
                        <ToggleControl
                            label={ __( 'Gutter' ) }
                            checked={ gutter }
                            onChange={ ( useGutter ) => {
                                setAttributes( { gutter: useGutter } );
                            } }
                            />
                        <TextControl
                            label={ __('Additional Row Classes') }
                            value={ rowClass }
                            onChange={ ( className ) => {
                                setAttributes( { rowClass: className } );
                            } }
                            />
                    </PanelBody>
                    <PanelBody className="editor-panel-alignment-settings" title={ getPanelTitle( 'alignment', __( 'Alignment' ) ) } initialOpen={ false }>
                        <BaseControl label={ __('Flex Direction') }>
                            <div style={ { overflowX: 'auto' } }>
                                <table style={ { width: '100%' } }>
                                    <tbody>
                                        <tr>
                                            { breakpoints.map( (breakpoint) => {
                                                return (
                                                    <td key={ breakpoint }>
                                                        <FlexDirectionToolbar
                                                            breakpoint={ breakpoint }
                                                            value={ attributes[ `${ breakpoint }Dir` ] }
                                                            onChange={ ( val ) => {
                                                                let data = {};
                                                                data[ `${ breakpoint }Dir` ] = val;
                                                                setAttributes( data )
                                                            } }
                                                            />
                                                    </td>
                                                );
                                            } ) }
                                            <td key="all">
                                                <FlexDirectionToolbar
                                                    breakpoint='all'
                                                    onChange={ ( val ) => {
                                                        setAttributes( { xsDir: val, smDir: val, mdDir: val, lgDir: val, xlDir: val } )
                                                    } }
                                                    />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </BaseControl>
                        <BaseControl label={ __('Justify Content') }>
                            <div style={ { overflowX: 'auto' } }>
                                <table style={ { width: '100%' } }>
                                    <tbody>
                                        <tr>
                                            { breakpoints.map( (breakpoint) => {
                                                return (
                                                    <td key={ breakpoint }>
                                                        <JustifyContentToolbar
                                                            breakpoint={ breakpoint }
                                                            value={ attributes[ `${ breakpoint }Justify` ] }
                                                            onChange={ ( val ) => {
                                                                let data = {};
                                                                data[ `${ breakpoint }Justify` ] = val;
                                                                setAttributes( data )
                                                            } }
                                                            />
                                                    </td>
                                                );
                                            } ) }
                                            <td key="all">
                                                <JustifyContentToolbar
                                                    breakpoint='all'
                                                    onChange={ ( val ) => {
                                                        setAttributes( { xsJustify: val, smJustify: val, mdJustify: val, lgJustify: val, xlJustify: val } )
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
                                                                setAttributes( data )
                                                            } }
                                                            />
                                                    </td>
                                                );
                                            } ) }
                                            <td key="all">
                                                <VerticalAlignToolbar
                                                    breakpoint='all'
                                                    onChange={ ( val ) => {
                                                        setAttributes( { xsAlign: val, smAlign: val, mdAlign: val, lgAlign: val, xlAlign: val } )
                                                    } }
                                                    />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </BaseControl>
                    </PanelBody>
                    <PanelBody className="editor-panel-background-settings" title={ getPanelTitle( 'background', __( 'Background' ) ) } initialOpen={ false }>
                        <BaseControl label={ __('Background Image') }>
                            <MediaUploadCheck fallback={ bgInstructions }>
                                <MediaUpload
                                    title={ __('Select Background Image') }
                                    onSelect={ this.onSelectBackground }
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
                                                        <Button isDefault onClick={ this.onSelectBackground }>
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
                    <PanelBody className="editor-panel-color-settings" title={ getPanelTitle( 'color', __( 'Color' ) ) } initialOpen={ false }>
                        <ToggleControl
                            label={ __( 'Add Text Color?' ) }
                            checked={ addTextColor }
                            onChange={ ( use ) => {
                                setAttributes( { addTextColor: use } );
                            } }
                        />
                        { addTextColor && (
                            <ColorPicker
                                disableAlpha
                                color={ textColor }
                                onChangeComplete={ (color) => {
                                    setAttributes( { textColor: color } );
                                } }
                                />
                        ) }
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
                    </PanelBody>
                </InspectorControls>
                <div className={ getContainerClass( attributes, `${ className } overflow-visible` ) } style={ getBackgroundStyles( attributes ) }>
                    <div className="bootstrap-grid--mask" style={ { backgroundColor: getBackgroundColor( addMaskColor ? maskColor : null ) } } />
                    <div className={ `bootstrap-grid--column ${getRowClass( attributes )}` }>
                        <InnerBlocks
                            template={ getColumnsTemplate( columns ) }
                            templateLock='all'
                            allowedBlocks={ ALLOWED_BLOCKS }
                        />
                    </div>
                </div>
            </Fragment>
        );
    }
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
)( GridEdit );
