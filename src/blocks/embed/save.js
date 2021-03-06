/**
 * WordPress dependencies
 */
import { Component, Fragment } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { verticalAlignToFlex, getEmbedResponsiveClass, getEmbedResponsiveCustom, getRGBColor, getBackgroundStyles } from '../utils';

/**
 * Embed responsive save
 */
export default class EmbedResponsiveSave extends Component {
    render() {
        // Props
        const {
            attributes,
            className
        } = this.props;

        // Attributes
        const {
            addMaskColor,
            maskColor,
            grow,
            textAlign,
            verticalAlign
        } = attributes;

        return (
            <Fragment>
                { grow && (
                    <div className={ `tallest embed-responsive overflow-visible ${ className || '' } ${ verticalAlign ? `align-${ verticalAlign }` : '' }` } style={ getBackgroundStyles( attributes ) }>
                        <div className="bootstrap-grid--mask" style={ { backgroundColor: getRGBColor( addMaskColor ? maskColor : null ) } } />
                        <div className={ `tallest-item ${ getEmbedResponsiveClass( attributes ) }` }>
                            { getEmbedResponsiveCustom( attributes ) }
                        </div>
                        <div className={ `tallest-item bootstrap-grid--content ${ textAlign ? `text-${ textAlign }` : '' }` }>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                ) }
                { !grow && (
                    <div className={ `${ getEmbedResponsiveClass( attributes, className ) } overflow-visible` } style={ getBackgroundStyles( attributes ) }>
                        { getEmbedResponsiveCustom( attributes ) }
                        <div className={ `embed-responsive-item d-flex ${ verticalAlignToFlex( verticalAlign ) } ${ textAlign ? `text-${ textAlign }` : '' }` } style={ { backgroundColor: getRGBColor( addMaskColor ? maskColor : null ) } }>
                            <div style={ { width: '100%' } }>
                                <InnerBlocks.Content />
                            </div>
                        </div>
                    </div>
                ) }
            </Fragment>
        );
    }
}
