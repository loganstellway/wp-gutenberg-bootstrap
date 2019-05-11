/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Toolbar } from '@wordpress/components';
import { withState } from '@wordpress/compose';

const DEFAULT_OPTIONS = [
    { value: '', title: 'Default' },
    { value: 'row', title: 'Row' },
    { value: 'row-reverse', title: 'Row Reverse' },
    { value: 'column', title: 'Column' },
    { value: 'column-reverse', title: 'Column Reverse' },
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
    value: '',
} )( ( { icon = false, breakpoint, isCollapsed = true, value, onChange, dirOptions = DEFAULT_OPTIONS } ) => {
    return (
        <Toolbar
            isCollapsed={ isCollapsed }
            icon={ icon ? icon : ColumnIcons[breakpoint] }
            label={ ColumnLabels[breakpoint] }
            controls={ dirOptions.map( ( control ) => {
                const { value } = control;
                return {
                    ...control,
                    isActive: value === value,
                    onClick: () => {
                        onChange( value );
                    },
                };
            } ) }
        />
    );
} );
