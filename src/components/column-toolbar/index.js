/**
 * External dependencies
 */
import { find } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Toolbar } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const DEFAULT_SIZE_CONTROLS = [
    { size: 1, title: '1/12' },
    { size: 2, title: '1/6' },
    { size: 3, title: '1/4' },
    { size: 4, title: '1/3' },
    { size: 5, title: '5/12' },
    { size: 6, title: '1/2' },
    { size: 7, title: '7/12' },
    { size: 8, title: '2/3' },
    { size: 9, title: '3/4' },
    { size: 10, title: '5/6' },
    { size: 11, title: '11/12' },
    { size: 12, title: __( 'Full Width' ) },
];

const ColumnIcons = {
    xs: 'smartphone',
    sm: 'image-rotate-right',
    md: 'tablet',
    lg: 'laptop',
    xl: 'desktop',
    all: 'welcome-view-site',
};

const ColumnLabels = {
    xs: __( 'Smart Phone' ),
    sm: __( 'Landscape Smart Phone' ),
    md: __( 'Tablet' ),
    lg: __( 'Laptop' ),
    xl: __( 'Desktop' ),
    all: __( 'All Breakpoints' ),
};

export default withState( {
    size: 1,
} )( ( { icon = false, breakpoint, isCollapsed = true, value, onChange, sizeControls = DEFAULT_SIZE_CONTROLS } ) => {
    return (
        <Toolbar
            isCollapsed={ isCollapsed }
            icon={ icon ? icon : ColumnIcons[breakpoint] }
            label={ ColumnLabels[breakpoint] }
            controls={ sizeControls.map( ( control ) => {
                const { size } = control;
                return {
                    ...control,
                    isActive: value === size,
                    onClick: () => {
                        onChange( size );
                    },
                };
            } ) }
        />
    );
} );
