/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import { Component, Fragment, createRef } from '@wordpress/element';
import { select, dispatch, withSelect } from '@wordpress/data';
import { InspectorControls, BlockControls, InnerBlocks, MediaUpload, MediaUploadCheck } from '@wordpress/editor';
import { PanelBody, PanelRow, BaseControl, TextControl, RangeControl, ToggleControl, SelectControl, ColorPicker, Button, ButtonGroup } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import { getColumnsTemplate, getContainerClass, getRowClass, getBackgroundColor, getBackgroundStyles, getPanelTitle } from '../utils';
import AlignContentToolbar from '../../components/align-content-toolbar';
import ColumnOffsetToolbar from '../../components/column-offset-toolbar';
import ColumnSizeToolbar from '../../components/column-size-toolbar';
import FlexDirectionToolbar from '../../components/flex-direction-toolbar';
import JustifyContentToolbar from '../../components/justify-content-toolbar';
import VerticalAlignToolbar from '../../components/vertical-align-toolbar';

/**
 * Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image' ];
const ALLOWED_BLOCKS = [ 'loganstellway/bootstrap-column' ];
const breakpoints = [ 'xs', 'sm', 'md', 'lg', 'xl' ];

/**
 * Grid edit
 */
class GridEdit extends Component {
    /**
     * Constructor
     */
    constructor() {
        super( ...arguments );
        this.onSelectBackground = this.onSelectBackground.bind( this );
        this.updateColumnAttribute = this.updateColumnAttribute.bind( this );
    }

    /**
     * On background select - format media data
     * 
     * @param  {Object} media
     */
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

    /**
     * Update column attribute
     * 
     * @param  {String} options.breakpoint
     * @param  {mixed} options.val
     * @param  {String} options.name
     */
    updateColumnAttribute( { breakpoint, val, name = '' } ) {
        let children = select('core/editor').getBlocksByClientId( this.props.clientId )[0].innerBlocks,
            data = {};

        if ( children.length ) {
            if ( breakpoint == 'all' ) {
                breakpoints.forEach( (breakpoint) => {
                    data[ `${ breakpoint }${ name }` ] = val;
                } );
            } else {
                data[ `${ breakpoint }${ name }` ] = val;
            }

            children.forEach( ( child ) => {
                dispatch('core/editor').updateBlockAttributes(child.clientId, data);
            } );
        }
    }

    /**
     * Render component
     * 
     * @return {Object} Component
     */
    render() {
        // Props
        const {
            attributes,
            setAttributes,
            className,
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
                        <TextControl
                            label={ (
                                <Fragment>
                                    { __('Additional') }&nbsp;
                                    <code>.row</code>&nbsp;
                                    { __('Class') }
                                </Fragment>
                            ) }
                            value={ rowClass }
                            onChange={ ( className ) => {
                                setAttributes( { rowClass: className } );
                            } }
                            />
                        <ToggleControl
                            label={ __( 'Gutter' ) }
                            checked={ gutter }
                            onChange={ ( useGutter ) => {
                                setAttributes( { gutter: useGutter } );
                            } }
                            />
                    </PanelBody>
                    <PanelBody className="editor-panel-column-settings" title={ getPanelTitle( 'column', __( 'Columns' ) ) } initialOpen={ false }>
                        <RangeControl
                            label={ __( 'Columns' ) }
                            value={ columns }
                            min={ 1 }
                            max={ 12 }
                            onChange={ ( numCols ) => {
                                setAttributes( { columns: parseInt( numCols ) } );
                            } }
                            />
                        <BaseControl label={ __('Column Size') }>
                            <div style={ { overflowX: 'auto' } }>
                                <PanelRow className="align-items-start">
                                    { breakpoints.map( (breakpoint) => {
                                        return (
                                            <ColumnSizeToolbar
                                                key={ breakpoint }
                                                breakpoint={ breakpoint }
                                                onChange={ ( val ) => {
                                                    this.updateColumnAttribute( { breakpoint, val } );
                                                } }
                                                />
                                        );
                                    } ) }
                                    <ColumnSizeToolbar
                                        key='all'
                                        breakpoint='all'
                                        onChange={ ( val ) => {
                                            this.updateColumnAttribute( { breakpoint: 'all', val } );
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
                                                onChange={ ( val ) => {
                                                    this.updateColumnAttribute( { breakpoint, val, name: 'Offset' } );
                                                } }
                                                />
                                        );
                                    } ) }
                                    <ColumnOffsetToolbar
                                        key='all'
                                        breakpoint='all'
                                        onChange={ ( val ) => {
                                            this.updateColumnAttribute( { breakpoint: 'all', val, name: 'Offset' } );
                                        } }
                                        />
                                </PanelRow>
                            </div>
                        </BaseControl>
                    </PanelBody>
                    <PanelBody className="editor-panel-alignment-settings" title={ getPanelTitle( 'alignment', __( 'Column Alignment' ) ) } initialOpen={ false }>
                        <BaseControl label={ __('Flex Direction') }>
                            <div style={ { overflowX: 'auto' } }>
                                <PanelRow className="align-items-start">
                                    { breakpoints.map( (breakpoint) => {
                                        return (
                                            <FlexDirectionToolbar
                                                key={ breakpoint }
                                                breakpoint={ breakpoint }
                                                value={ attributes[ `${ breakpoint }Dir` ] }
                                                onChange={ ( val ) => {
                                                    let data = {};
                                                    data[ `${ breakpoint }Dir` ] = val;
                                                    setAttributes( data )
                                                } }
                                                />
                                        );
                                    } ) }
                                    <FlexDirectionToolbar
                                        key='all'
                                        onChange={ ( val ) => {
                                            setAttributes( { xsDir: val, smDir: val, mdDir: val, lgDir: val, xlDir: val } )
                                        } }
                                        />
                                </PanelRow>
                            </div>
                        </BaseControl>
                        <BaseControl label={ __('Justify Content') }>
                            <div style={ { overflowX: 'auto' } }>
                                <PanelRow className="align-items-start">
                                    { breakpoints.map( (breakpoint) => {
                                        return (
                                            <JustifyContentToolbar
                                                key={ breakpoint }
                                                breakpoint={ breakpoint }
                                                value={ attributes[ `${ breakpoint }Justify` ] }
                                                onChange={ ( val ) => {
                                                    let data = {};
                                                    data[ `${ breakpoint }Justify` ] = val;
                                                    setAttributes( data )
                                                } }
                                                />
                                        );
                                    } ) }
                                    <JustifyContentToolbar
                                        key='all'
                                        breakpoint='all'
                                        onChange={ ( val ) => {
                                            setAttributes( { xsJustify: val, smJustify: val, mdJustify: val, lgJustify: val, xlJustify: val } )
                                        } }
                                        />
                                </PanelRow>
                            </div>
                        </BaseControl>
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
                                                    setAttributes( data )
                                                } }
                                                />
                                        );
                                    } ) }
                                    <VerticalAlignToolbar
                                        key='all'
                                        breakpoint='all'
                                        onChange={ ( val ) => {
                                            setAttributes( { xsAlign: val, smAlign: val, mdAlign: val, lgAlign: val, xlAlign: val } )
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
