/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { Fragment, Component } from '@wordpress/element';
import { RichText, URLInput } from '@wordpress/editor';
import { PanelBody, PanelRow, BaseControl, ToggleControl, SelectControl, RangeControl, TextControl, ColorPicker, Button, ButtonGroup, Dashicon } from '@wordpress/components';
import { InspectorControls, BlockControls, AlignmentToolbar, InnerBlocks } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { getPanelTitle, getButtonClass, getButtonStyle } from '../utils';

/**
 * Button edit
 */
class ButtonEdit extends Component {
    constructor() {
        super( ...arguments );
        this.setButtonSize = this.setButtonSize.bind( this );
    }

    setButtonSize( val ) {
        this.props.setAttributes( { size: val } );
    }

    render() {
        const {
            attributes,
            setAttributes,
            isSelected,
            className,
        } = this.props;

        const {
            text,
            url,
            newTab,
            title,
            btnClass,
            type,
            style,
            size,
            textAlign,
            btnColor,
            textColor,
            borderRadius,
            borderRadiusUnit,
        } = attributes;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody className='editor-panel-button-settings' title={ getPanelTitle( 'button', __( 'Button' ) ) } initialOpen={ false }>
                        <TextControl
                            label={ __('Title') }
                            value={ title || '' }
                            onChange={ ( val ) => { setAttributes( { title: val } ) } }
                            />
                    </PanelBody>
                    <PanelBody className='editor-panel-style-settings' title={ getPanelTitle( 'style', __( 'Style' ) ) } initialOpen={ false }>
                        <SelectControl
                            label={ __( 'Style' ) }
                            value={ style }
                            onChange={ ( val ) => { setAttributes( { style: val } ) } }
                            options={ [
                                { label: __('Solid'), value: 'solid' },
                                { label: __('Outline'), value: 'outline' },
                            ] }
                            />
                        <SelectControl
                            label={ __( 'Size' ) }
                            value={ size }
                            onChange={ ( val ) => { setAttributes( { size: val } ) } }
                            options={ [
                                { label: __('Small'), value: 'btn-sm' },
                                { label: __('Normal'), value: '' },
                                { label: __('Large'), value: 'btn-lg' },
                            ] }
                            />
                        <SelectControl
                            label={ __( 'Type' ) }
                            value={ type }
                            onChange={ ( val ) => { setAttributes( { type: val } ) } }
                            options={ [
                                { label: __('Primary'), value: 'btn-primary' },
                                { label: __('Secondary'), value: 'btn-secondary' },
                                { label: __('Success'), value: 'btn-success' },
                                { label: __('Danger'), value: 'btn-danger' },
                                { label: __('Warning'), value: 'btn-warning' },
                                { label: __('Info'), value: 'btn-info' },
                                { label: __('Light'), value: 'btn-light' },
                                { label: __('Dark'), value: 'btn-dark' },
                                { label: __('Custom Colors...'), value: 'custom' },
                                { label: __('Custom Class...'), value: '' },
                            ] }
                            />
                        { type == 'custom' && (
                            <Fragment>
                                <BaseControl label={ __('Button Color') }>
                                    <ColorPicker
                                        color={ btnColor }
                                        onChangeComplete={ (val) => { setAttributes( { btnColor: val } ) } }
                                        />
                                </BaseControl>
                                { style != 'outline' && (
                                    <BaseControl label={ __('Text Color') }>
                                        <ColorPicker
                                            color={ textColor }
                                            onChangeComplete={ (val) => { setAttributes( { textColor: val } ) } }
                                            />
                                    </BaseControl>
                                ) }
                            </Fragment>
                        ) }
                        { type == '' && (
                            <TextControl
                                value={ btnClass || '' }
                                onChange={ ( val ) => { setAttributes( { btnClass: val } ) } }
                                />
                        ) }
                        <BaseControl label={ __('Border Radius') }>
                            <PanelRow className='align-items-start'>
                                <RangeControl
                                    value={ borderRadius }
                                    min={ 0 }
                                    max={ 100 }
                                    onChange={ ( val ) => { setAttributes( { borderRadius: parseInt( val ) } ) } }
                                    />
                                <SelectControl
                                    value={ borderRadiusUnit }
                                    onChange={ ( val ) => { setAttributes( { borderRadiusUnit: val } ) } }
                                    options={ [
                                        { label: __('px'), value: 'px' },
                                        { label: __('em'), value: 'em' },
                                        { label: __('%'), value: '%' },
                                    ] }
                                    />
                            </PanelRow>
                        </BaseControl>
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    <AlignmentToolbar
                        value={ textAlign }
                        onChange={ ( val ) => { setAttributes( { textAlign: ( val === textAlign ? '' : val ) } ) } }
                        />
                </BlockControls>
                <div className={ className } style={ { textAlign } }>
                    <RichText
                        placeholder={ __( 'Add text…' ) }
                        value={ text }
                        onChange={ ( val ) => setAttributes( { text: val } ) }
                        formattingControls={ [ 'bold', 'italic', 'strikethrough' ] }
                        className={ getButtonClass( attributes ) }
                        style={ getButtonStyle( attributes, true ) }
                        keepPlaceholderOnFocus
                    />
                </div>
                { isSelected && (
                    <form
                        className='block-library-button__inline-link'
                        onSubmit={ ( event ) => event.preventDefault() }>
                        <PanelRow>
                            <Dashicon icon='admin-links' />
                            <URLInput
                                value={ url }
                                onChange={ ( val ) => setAttributes( { url: val } ) }
                            />
                            <ToggleControl
                                label={ __( 'New Tab' ) }
                                checked={ newTab }
                                onChange={ ( val ) => { setAttributes( { newTab: val } ) } }
                                />
                        </PanelRow>
                    </form>
                ) }
            </Fragment>
        );
    }
}

export default compose(
    withSelect( ( select, { clientId } ) => {
        const coreEditor = select( 'core/editor' );
        const { getBlocksByClientId, getBlockRootClientId } = select( 'core/editor' );
        return { parentColumnsBlockClientId: getBlockRootClientId( clientId ) };
    } ),
)( ButtonEdit );
