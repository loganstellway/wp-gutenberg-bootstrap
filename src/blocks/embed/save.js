/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/editor';

/**
 * External dependencies
 */
import { Fragment } from 'react';

/**
 * Internal dependencies
 */
import { verticalAlignToFlex, getEmbedResponsiveClass, getEmbedResponsiveCustom, getBackgroundColor, getBackgroundStyles } from '../utils';

export default function( { attributes, className } ) {
    const { addMaskColor, maskColor, grow, textAlign, verticalAlign } = attributes;

    return (
        <Fragment>
            { grow && 
                <div className={ `tallest embed-responsive ${ className } ${ verticalAlign ? `align-${ verticalAlign }` : '' }` } style={ getBackgroundStyles( attributes ) }>
                    <div className="bootstrap-grid--mask" style={ { backgroundColor: getBackgroundColor( addMaskColor ? maskColor : null ) } } />
                    <div className={ `tallest-item ${ getEmbedResponsiveClass( attributes ) }` }>
                        { getEmbedResponsiveCustom( attributes ) }
                    </div>
                    <div className={ `tallest-item bootstrap-grid--content ${ textAlign ? `text-${ textAlign }` : '' }` }>
                        <InnerBlocks.Content />
                    </div>
                </div>
            }
            { !grow && 
                <div className={ getEmbedResponsiveClass( attributes, className ) } style={ getBackgroundStyles( attributes ) }>
                    { getEmbedResponsiveCustom( attributes ) }
                    <div className={ `embed-responsive-item d-flex ${ verticalAlignToFlex( verticalAlign ) } ${ textAlign ? `text-${ textAlign }` : '' }` } style={ { backgroundColor: getBackgroundColor( addMaskColor ? maskColor : null ) } }>
                        <div style={ { width: '100%' } }>
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    );
}
