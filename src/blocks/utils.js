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
 * Vertical align to flex align
 */
export const verticalAlignToFlex = ( align ) => {
    const aligns = {
        'top': 'align-items-start',
        'middle': 'align-items-center',
        'bottom': 'align-items-end',
    };

    return aligns[ align ] || '';
};

/**
 * Get vertical align class
 * 
 * @param  {object} attributes
 * @param  {string} prefix used in class
 * @param  {string} used to create the key to access attribute values
 * @return {array}
 */
export const getResponsiveAttribute = ( attributes, prefix, suffix ) => {
    const breakpoints = [ 'xs', 'sm', 'md', 'lg', 'xl' ],
          vals = [];

    breakpoints.forEach( ( breakpoint, val ) => {
        val = attributes[ `${ breakpoint }${ suffix || '' }` ] || 0;

        if ( val && ( val.length || !isNaN( val ) ) ) {
            vals.push( `${ prefix }-${ breakpoint == 'xs' ? '' : `${ breakpoint }-` }${ val }` );
        }
    } );

    return vals;
};

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
    const { gutter, rowClass } = attributes;

    const dir = getResponsiveAttribute( attributes, 'flex', 'Dir' ),
          align = getResponsiveAttribute( attributes, 'align-items', 'Align' ),
          justify = getResponsiveAttribute( attributes, 'justify-content', 'Justify' );

    return classnames( 'row', className, rowClass, dir, align, justify, ( gutter ? '' : 'no-gutters' ) );
};

/**
 * Returns the column class
 *
 * @param  {object} Attributes
 * @param  {string} HTML class name
 * @return {string} HTML classes
 */
export const getColumnClass = ( attributes, className = null ) => {
    const { textAlign } = attributes;

    const align = getResponsiveAttribute( attributes, 'align-items', 'Align' ),
          content = getResponsiveAttribute( attributes, 'align-content', 'Content' ),
          columns = getResponsiveAttribute( attributes, 'col', '' ),
          offsets = getResponsiveAttribute( attributes, 'offset', 'Offset' ).map( (offset) => {
            return offset || undefined;
          });

    return classnames( className, align, content, columns, offsets, 'position-relative', ( textAlign ? `text-${ textAlign }` : null ) );
};

/**
 * Get embed responsive class
 * 
 * @param  {object}
 * @param  {string}
 * @return {string}
 */
export const getEmbedResponsiveClass = ( attributes, className ) => {
    const { ratio } = attributes;

    let val = ratio || 'custom';
    if ( val == 'custom' ) {
        val = `${ attributes.customX }by${ attributes.customY }`;
    }

    return classnames( className, 'embed-responsive', ( ratio == 'custom' ? '' : `embed-responsive-${ val }` ) );
};

/**
 * Get embed responsive custom element
 * 
 * @param  {object}
 * @return {object}
 */
export const getEmbedResponsiveCustom = ( attributes ) => {
    const { ratio, customX, customY } = attributes;

    if ( ratio == 'custom' ) {
        return (
            <div style={ {
                paddingTop: `${ customY / customX * 100 }%`
            } }></div>
        );
    }
};

/**
 * Get background color (rgba)
 * 
 * @param  {object} bg 
 * @return {string}
 */
export const getRGBColor = ( bg ) => {
    if (bg && bg.rgb) {
        return `rgba(${ [ bg.rgb.r, bg.rgb.g, bg.rgb.b, bg.rgb.a ].join(',') })`;
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
        backgroundImage: bgUrl ? `url(${ bgUrl })` : null,
        backgroundColor: addBgColor && bgColor ? getRGBColor( bgColor ) : null,
        backgroundPosition: bgPosition,
    };
};

/**
 * Get panel title
 */
export const getPanelTitle = ( id, title ) => {
    return (
        <span className={ `editor-panel-${ id }-settings__panel-title` }>
            { title }
        </span>
    )
};

/**
 * Get button class
 * 
 * @param  {Object} attributes
 * @return {String}
 */
export const getButtonClass = ( attributes ) => {
    const { size, type, style, btnClass } = attributes;
    let typeClass = type != 'custom' ? type : '';
    if ( style == 'outline' ) {
        typeClass = typeClass.replace( '-', '-outline-' );
    }
    return `btn ${ typeClass } ${ size } ${ type == '' ? btnClass : '' }`;
}

/**
 * Get button style
 * 
 * @param  {Object} attributes
 * @return {Object}
 */
export const getButtonStyle = ( attributes ) => {
    const { fullWidth, type, style, btnColor, textColor, borderRadius, borderRadiusUnit, edit } = attributes;
    let bg, text, border;

    if ( type == 'custom' ) {
        if ( style == 'solid' ) {
            bg = border = btnColor ? getRGBColor( btnColor ) : undefined;
            text = textColor ? getRGBColor( textColor ) : undefined;
        } else {
            bg = 'transparent';
            text = border = btnColor ? getRGBColor( btnColor ) : undefined;
        }
    }

    if ( edit && type == '' ) {
        bg = 'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)';
        text = border = '#fff';
    }

    return {
        width: fullWidth ? '100%' : undefined,
        color: text,
        borderColor: border,
        background: bg,
        borderRadius: `${ borderRadius }${ borderRadiusUnit }`,
    };
}
