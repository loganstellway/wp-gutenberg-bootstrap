/**
 * External dependencies
 */
import classnames from 'classnames';
import memoize from 'memize';
import { times } from 'lodash';

/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param  {number}   Number of columns.
 * @return {Object[]} Columns layout configuration.
 */
export const getColumnsTemplate = memoize( ( columns ) => {
    return times( columns, () => [ 'loganstellway/bootstrap-column' ] );
} );

/**
 * Returns the container class
 *
 * @param  {object} Attributes
 * @param  {string} HTML class name
 * @return {string} HTML classes
 */
export const getContainerClass = ( attributes, className = null ) => {
    const { width, columns } = attributes;
    return classnames( className, `embed-responsive has-${ columns }-columns`, width );
};

/**
 * Returns the row class
 *
 * @param  {object} Attributes
 * @return {string} HTML classes
 */
export const getRowClass = ( attributes, className = null ) => {
    const { verticalAlignment, gutter, rowClass } = attributes;
    return classnames( 'row', className, verticalAlignment, rowClass, ( gutter ? '' : 'no-gutters' ) );
};

/**
 * Returns the column class
 *
 * @param  {object} Attributes
 * @param  {string} HTML class name
 * @return {string} HTML classes
 */
export const getColumnClass = ( attributes, className = null ) => {
    const { xs, sm, md, lg, xl } = attributes;
    return classnames( className, 'embed-responsive', {
        [ `col-${ xs }` ]: xs,
        [ `col-sm-${ sm }` ]: sm,
        [ `col-md-${ md }` ]: md,
        [ `col-lg-${ lg }` ]: lg,
        [ `col-xl-${ xl }` ]: xl,
    } );
};

/**
 * Get background color (rgba)
 * 
 * @param  {object} bg 
 * @return {string}
 */
export const getBackgroundColor = ( bg ) => {
    if (bg && bg.rgb) {
        return 'rgba(' + [ bg.rgb.r, bg.rgb.g, bg.rgb.b, bg.rgb.a ].join(',') + ')';
    }
    return 'transparent';
};

/**
 * Get background styles
 */
export const getBackgroundStyles = ( attributes ) => {
    const {addTextColor, textColor, bgAttachment, bgUrl, addBgColor, bgColor, bgPosition} = attributes;

    return {
        color: (addTextColor && textColor ? textColor.hex : null),
        backgroundSize: "cover",
        backgroundAttachment: bgAttachment,
        backgroundImage: bgUrl ? 'url(' + bgUrl + ')' : '',
        backgroundColor: addBgColor && bgColor ? getBackgroundColor( bgColor ) : null,
        backgroundPosition: bgPosition,
    };
};
