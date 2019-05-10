/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { getContainerClass, getRowClass, getBackgroundColor, getBackgroundStyles } from './utils';

export default function( { attributes, className } ) {
    return (
        <div
            className={ getContainerClass( attributes, className ) }
            style={ getBackgroundStyles( attributes ) }
        >
            <div
                className="grid-mask--container embed-responsive-item"
                style={ {
                    backgroundColor: getBackgroundColor( attributes.maskColor ),
                } }
            />
            <div className={ getRowClass( attributes ) }>
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
