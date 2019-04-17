/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { InspectorControls, InnerBlocks } from '@wordpress/editor';
import { PanelBody, RangeControl, ToggleControl, SelectControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { getColumnsTemplate, getContainerClass, getRowClass } from './utils';

/**
 * Allowed blocks constant is passed to InnerBlocks precisely as specified here.
 * The contents of the array should never change.
 * The array should contain the name of each block that is allowed.
 * In columns block, the only block we allow is 'loganstellway/bootstrap-column'.
 *
 * @constant
 * @type {string[]}
*/
const ALLOWED_BLOCKS = [ 'loganstellway/bootstrap-column' ];

const ColumnsEdit = function( { attributes, setAttributes, className } ) {
    const { columns, width, gutter, verticalAlignment } = attributes;

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody>
                    <RangeControl
                        label={ __( 'Columns' ) }
                        value={ columns }
                        onChange={ ( numCols ) => {
                            setAttributes( {
                                columns: parseInt( numCols ),
                            } );
                        } }
                        min={ 2 }
                        max={ 12 }
                    />
                    <SelectControl
                        label={ __( 'Container Width' ) }
                        value={ width }
                        onChange={ ( newWidth ) => {
                            setAttributes( {
                                width: newWidth,
                            } )
                        } }
                        options={ [
                            { label: 'Fixed', value: 'container' },
                            { label: 'Fluid (Full-Width)', value: 'container-fluid' },
                        ] }
                    />
                    <ToggleControl
                        label={ __( 'Gutter' ) }
                        checked={ gutter }
                        onChange={ ( useGutter ) => {
                            setAttributes( {
                                gutter: useGutter,
                            } );
                        } }
                    />
                    <SelectControl
                        label={ __( 'Vertical Alignment' ) }
                        value={ verticalAlignment }
                        onChange={ ( alignment ) => {
                            setAttributes( {
                                verticalAlignment: alignment,
                            } )
                        } }
                        options={ [
                            { label: 'Top', value: 'align-items-start' },
                            { label: 'Middle', value: 'align-items-center' },
                            { label: 'Bottom', value: 'align-items-end' },
                        ] }
                    />
                </PanelBody>
            </InspectorControls>
            <div className={ getContainerClass( attributes, className ) }>
                <div className={ getRowClass( attributes ) }>
                    <InnerBlocks
                        template={ getColumnsTemplate( columns ) }
                        templateLock='all'
                        allowedBlocks={ ALLOWED_BLOCKS }
                    />
                </div>
            </div>
        </Fragment>
    );
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
)( ColumnsEdit );
