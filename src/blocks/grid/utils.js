/**
 * External dependencies
 */
import classnames from 'classnames';
import memoize from 'memize';
import { times } from 'lodash';

/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param {number} columns Number of columns.
 *
 * @return {Object[]} Columns layout configuration.
 */
export const getColumnsTemplate = memoize( ( columns ) => {
    return times( columns, () => [ 'loganstellway/bootstrap-column' ] );
} );

/**
 * Returns the container class
 *
 * @param {object} Attributes
 * @param {string} HTML class name
 * @return {string} HTML classes
 */
export const getContainerClass = ( attributes, className = null ) => {
    const { width, columns } = attributes;
    return classnames( className, `has-${ columns }-columns`, width );
};

/**
 * Returns the row class
 *
 * @param {object} Attributes
 * @return {string} HTML classes
 */
export const getRowClass = ( attributes, className = null ) => {
    const { verticalAlignment, gutter } = attributes;
    return classnames( 'row', className, verticalAlignment, ( gutter ? '' : 'no-gutters' ) );
};

/**
 * Returns the column class
 *
 * @param {object} Attributes
 * @param {string} HTML class name
 * @return {string} HTML classes
 */
export const getColumnClass = ( attributes, className = null ) => {
    const { xs, sm, md, lg, xl } = attributes;
    return classnames( className, 'col', {
        [ `col-xs-${ xs }` ]: xs,
        [ `col-sm-${ sm }` ]: sm,
        [ `col-md-${ md }` ]: md,
        [ `col-lg-${ lg }` ]: lg,
        [ `col-xl-${ xl }` ]: xl,
    } );
};
