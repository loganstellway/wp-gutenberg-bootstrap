/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { InspectorControls, BlockControls, AlignmentToolbar, InnerBlocks, MediaUpload, MediaUploadCheck } from '@wordpress/editor';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { BaseControl, PanelBody, PanelRow, TextControl, ToggleControl, SelectControl, ColorPicker, Button, ButtonGroup } from '@wordpress/components';

/**
 * Internal Dependencies
 */
import { verticalAlignToFlex, getEmbedResponsiveClass, getEmbedResponsiveCustom, getBackgroundColor, getBackgroundStyles, getPanelTitle } from '../utils';

/**
 * Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image' ];

/**
 * Column edit
 * 
 * @param  {object}   attributes
 * @param  {function} setAttributes
 * @param  {string}   className
 * @return {object}   React component
 */
class EmbedResponsiveEdit extends Component {
    constructor() {
        super( ...arguments );
        this.onSelectBackground = this.onSelectBackground.bind( this );
    }

    // Background Media
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

        this.props.setAttributes( {
            bgUrl: media.url,
            bgId: media.id,
            bgType: mediaType,
        } );
    };

    render() {
        // Props
        const {
            attributes,
            setAttributes,
            className,
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
            textAlign,
            ratio,
            customX,
            customY,
            grow,
            verticalAlign,
        } = attributes;

        // Edit
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody className="editor-panel-embed-settings" title={ getPanelTitle( 'embed', __( 'Embed' ) ) } initialOpen={ false }>
                        <SelectControl
                            label={ __( 'Ratio' ) }
                            value={ ratio }
                            onChange={ ( r ) => {
                                setAttributes( { ratio: r } )
                            } }
                            options={ [
                                { label: '21by9', value: '21by9' },
                                { label: '16by9', value: '16by9' },
                                { label: '4by3', value: '4by3' },
                                { label: '1by1', value: '1by1' },
                                { label: __( 'Custom' ), value: 'custom' },
                            ] }
                            />
                        { ratio == 'custom' && (
                            <PanelRow className="align-items-start">
                                <TextControl
                                    type='number'
                                    value={ customX }
                                    onChange={ ( x ) => {
                                        setAttributes( { customX: parseInt( x ) } );
                                    } }
                                    />
                                <div className="p-2"> by </div>
                                <TextControl
                                    type='number'
                                    value={ customY }
                                    onChange={ ( y ) => {
                                        setAttributes( { customY: parseInt( y ) } );
                                    } }
                                    />
                            </PanelRow>
                        ) }
                        <SelectControl
                            label={ __( 'Vertical Align' ) }
                            value={ verticalAlign }
                            onChange={ ( align ) => {
                                setAttributes( { verticalAlign: align } )
                            } }
                            options={ [
                                { label: 'Default', value: '' },
                                { label: 'Top', value: 'top' },
                                { label: 'Middle', value: 'middle' },
                                { label: 'Bottom', value: 'bottom' },
                            ] }
                            />
                        <ToggleControl
                            label={ __( 'Container grows with content (beyond ratio)?' ) }
                            checked={ grow }
                            onChange={ ( g ) => {
                                setAttributes( { grow: g } );
                            } }
                            />
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
                                    setAttributes( { textColor: color } )
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
                <BlockControls>
                    <AlignmentToolbar
                        value={ textAlign }
                        onChange={ ( align ) => {
                            align = align === textAlign ? "" : align;
                            setAttributes( { textAlign: align } );
                        } }
                        />
                </BlockControls>
                <div style={ { background: 'rgba(0, 0, 0, 0.03)' } }>
                    { grow && (
                        <div className={ `tallest embed-responsive overflow-visible ${ className || '' } ${ verticalAlign ? `align-${ verticalAlign }` : '' }` } style={ getBackgroundStyles( attributes ) }>
                            <div className="bootstrap-grid--mask" style={ { backgroundColor: getBackgroundColor( addMaskColor ? maskColor : null ) } } />
                            <div className={ `tallest-item ${ getEmbedResponsiveClass( attributes ) }` }>
                                { getEmbedResponsiveCustom( attributes ) }
                            </div>
                            <div className={ `tallest-item bootstrap-grid--content ${ textAlign ? `text-${ textAlign }` : '' }` }>
                                <InnerBlocks templateLock={ false } />
                            </div>
                        </div>
                    ) }
                    { !grow && (
                        <div className={ `${ getEmbedResponsiveClass( attributes, className ) } overflow-visible` } style={ getBackgroundStyles( attributes ) }>
                            { getEmbedResponsiveCustom( attributes ) }
                            <div className={ `embed-responsive-item d-flex ${ verticalAlignToFlex( verticalAlign ) } ${ textAlign ? `text-${ textAlign }` : '' }` } style={ { backgroundColor: getBackgroundColor( addMaskColor ? maskColor : null ) } }>
                                <div style={ { width: '100%' } }>
                                    <InnerBlocks templateLock={ false } />
                                </div>
                            </div>
                        </div>
                    ) }
                </div>
            </Fragment>
        );
    }
};

export default compose(
    withSelect( ( select, { clientId } ) => {
        const coreEditor = select( 'core/editor' );
        const { getBlocksByClientId, getBlockRootClientId } = select( 'core/editor' );
        return { parentColumnsBlockClientId: getBlockRootClientId( clientId ) };
    } ),
)( EmbedResponsiveEdit );
