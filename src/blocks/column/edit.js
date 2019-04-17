/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';
import { InnerBlocks, BlockControls } from '@wordpress/editor';
import { withSelect } from '@wordpress/data';
import { compose, createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal Dependencies
 */
import { getColumnClass } from '../grid/utils';
import BootstrapColumnToolbar from '../../components/column-toolbar';

/**
 * Add column class to containers
 */
addFilter( 'editor.BlockListBlock', 'loganstellway/bootstrap-column-edit-classes', createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {
        const { block } = props;
        const { attributes, name } = block;

        if ( name !== 'loganstellway/bootstrap-column' ) {
            return ( <BlockListBlock { ...props } /> );
        }

        return ( <BlockListBlock { ...props } className={ getColumnClass( attributes, attributes.className || null ) } /> );
    };
} ) );

/**
 * Column edit
 * 
 * @param  {object}   attributes
 * @param  {function} setAttributes
 * @param  {string}   className
 * @return {object}   React component
 */
const ColumnEdit = ( { attributes, setAttributes, className } ) => {
    const { xs, sm, md, lg, xl } = attributes;

    return (
        <Fragment>
            <BlockControls>
                <BootstrapColumnToolbar
                    breakpoint='xs'
                    value={ xs }
                    onChange={ ( size ) => {
                        setAttributes( { xs: size } )
                    } }
                    />
                <BootstrapColumnToolbar
                    breakpoint='sm'
                    value={ sm }
                    onChange={ ( size ) => {
                        setAttributes( { sm: size } )
                    } }
                    />
                <BootstrapColumnToolbar
                    breakpoint='md'
                    value={ md }
                    onChange={ ( size ) => {
                        setAttributes( { md: size } )
                    } }
                    />
                <BootstrapColumnToolbar
                    breakpoint='lg'
                    value={ lg }
                    onChange={ ( size ) => {
                        setAttributes( { lg: size } )
                    } }
                    />
                <BootstrapColumnToolbar
                    breakpoint='xl'
                    value={ xl }
                    onChange={ ( size ) => {
                        setAttributes( { xl: size } )
                    } }
                    />
            </BlockControls>
            <InnerBlocks templateLock={ false } />
        </Fragment>
    );
};

export default compose(
    withSelect( ( select, { clientId } ) => {
        const coreEditor = select( 'core/editor' );
        const { getBlocksByClientId, getBlockRootClientId } = select( 'core/editor' );

        return {
            parentColumnsBlockClientId: getBlockRootClientId( clientId ),
        };
    } ),
)( ColumnEdit );
