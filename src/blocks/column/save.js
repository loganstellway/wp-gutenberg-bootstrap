/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { getColumnClass, getBackgroundColor, getBackgroundStyles } from '../grid/utils';

export default function( { attributes, className } ) {
    const { addMaskColor, maskColor } = attributes;

    return (
        <div className={ getColumnClass( attributes, className ) } style={ getBackgroundStyles( attributes ) }>
            <div
                className="grid-mask--column embed-responsive-item"
                style={ {
                    backgroundColor: getBackgroundColor( addMaskColor ? maskColor : null ),
                } }
            />
            <InnerBlocks.Content />
        </div>
    );
}
