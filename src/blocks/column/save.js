/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { getColumnClass, getBackgroundColor, getBackgroundStyles } from '../utils';

export default function( { attributes, className } ) {
    const { addMaskColor, maskColor } = attributes;

    return (
        <div className={ getColumnClass( attributes, className ) } style={ getBackgroundStyles( attributes ) }>
            <div className="bootstrap-grid--mask" style={ { backgroundColor: getBackgroundColor( addMaskColor ? maskColor : null ) } } />
            <div className="bootstrap-grid--content">
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
