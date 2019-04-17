/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { getContainerClass, getRowClass } from './utils';

export default function( { attributes, className } ) {
    return (
        <div className={ getContainerClass( attributes, className ) }>
            <div className={ getRowClass( attributes ) }>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
