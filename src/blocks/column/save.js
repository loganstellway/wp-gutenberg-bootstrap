/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { getColumnClass } from '../grid/utils';

export default function( { attributes, className } ) {
    return (
        <div className={ getColumnClass( attributes, className ) }>
            <InnerBlocks.Content />
        </div>
    );
}
