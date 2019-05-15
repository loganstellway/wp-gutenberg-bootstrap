/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { Toolbar } from '@wordpress/components';

/**
 * Constants
 */
const DEFAULT_OFFSET_CONTROLS = [
    { size: 0, title: 'None' },
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

/**
 * Column offset toolbar
 */
export default class ColumnOffsetToolbar extends Component {
    render() {
        // Props
        const {
            value,
            onChange,
            breakpoint,
            icon = false,
            isCollapsed = true,
            options = DEFAULT_OFFSET_CONTROLS,
        } = this.props;

        return (
            <Toolbar
                isCollapsed={ isCollapsed }
                icon={ icon ? icon : ColumnIcons[breakpoint] }
                label={ ColumnLabels[breakpoint] }
                controls={ options.map( ( option ) => {
                    const active = value == option.size;

                    return {
                        ...option,
                        icon: active ? 'yes-alt' : 'marker',
                        isActive: active,
                        onClick: () => {
                            onChange( option.size );
                        },
                    };
                } ) }
                />
        );
    }
}
