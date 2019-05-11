/**
 * External dependencies
 */
import classnames from 'classnames';
import memoize from 'memize';

/**
 * Returns the layouts configuration for a given number of columns.
 *
 * @param  {number}   Number of columns.
 * @return {Object[]} Columns layout configuration.
 */
export const getColumnsTemplate = memoize( ( cols ) => {
    let data = [];
    while ( cols > 0 ) {
        data.push( [ 'loganstellway/bootstrap-column' ] );
        cols--;
    }
    return data;
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
    return classnames( className, `position-relative has-${ columns }-columns`, width );
};

/**
 * Returns the row class
 *
 * @param  {object} Attributes
 * @return {string} HTML classes
 */
export const getRowClass = ( attributes, className = null ) => {
    const { gutter, rowClass, xsDir, smDir, mdDir, lgDir, xlDir, xsAlign, smAlign, mdAlign, lgAlign, xlAlign, xsJustify, smJustify, mdJustify, lgJustify, xlJustify, } = attributes;

    const dirs = { xs: xsDir, sm: smDir, md: mdDir, lg: lgDir, xl: xlDir };
    const dir = [];
    for ( var i in dirs ) {
        if ( dirs[i] && dirs[i].length ) {
            dir.push( 'flex-' + ( i == 'xs' ? '' : i + '-' ) + dirs[i] );
        }
    }

    const aligns = { xs: xsAlign, sm: smAlign, md: mdAlign, lg: lgAlign, xl: xlAlign };
    const align = [];
    for ( var i in aligns ) {
        if ( aligns[i] && aligns[i].length ) {
            align.push( 'align-items-' + ( i == 'xs' ? '' : i + '-' ) + aligns[i] );
        }
    }

    const justifys = { xs: xsJustify, sm: smJustify, md: mdJustify, lg: lgJustify, xl: xlJustify };
    const justify = [];
    for ( var i in justifys ) {
        if ( justifys[i] && justifys[i].length ) {
            justify.push( 'justify-content-' + ( i == 'xs' ? '' : i + '-' ) + justifys[i] );
        }
    }

    return classnames( 'row', className, dir, align, justify, rowClass, ( gutter ? '' : 'no-gutters' ) );
};

/**
 * Returns the column class
 *
 * @param  {object} Attributes
 * @param  {string} HTML class name
 * @return {string} HTML classes
 */
export const getColumnClass = ( attributes, className = null ) => {
    const { xs, sm, md, lg, xl, xsAlign, smAlign, mdAlign, lgAlign, xlAlign, xsContent, smContent, mdContent, lgContent, xlContent } = attributes;

    const aligns = { xs: xsAlign, sm: smAlign, md: mdAlign, lg: lgAlign, xl: xlAlign };
    const align = [];
    for ( var i in aligns ) {
        if ( aligns[i] && aligns[i].length ) {
            align.push( 'align-self-' + ( i == 'xs' ? '' : i + '-' ) + aligns[i] );
        }
    }

    const contents = { xs: xsContent, sm: smContent, md: mdContent, lg: lgContent, xl: xlContent };
    const content = [];
    for ( var i in contents ) {
        if ( contents[i] && contents[i].length ) {
            content.push( 'align-content-' + ( i == 'xs' ? '' : i + '-' ) + contents[i] );
        }
    }

    return classnames( className, align, content, 'position-relative', [
        `col-${ xs }`,
        ( sm ? `col-sm-${ sm }` : ''),
        ( md ? `col-md-${ md }` : ''),
        ( lg ? `col-lg-${ lg }` : ''),
        ( xl ? `col-xl-${ xl }` : ''),
    ] );
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
