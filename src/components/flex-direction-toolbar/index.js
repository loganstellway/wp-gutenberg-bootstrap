/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { Toolbar } from '@wordpress/components';

/**
 * Constants
 */
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

/**
 * Flex direction toolbar
 */
export default class FlexDirectionToolbar extends Component {
    render() {
        // Props
        const {
            value,
            onChange,
            breakpoint,
            icon = false,
            isCollapsed = true,
            options = DEFAULT_OPTIONS,
        } = this.props;

        return (
            <Toolbar
                isCollapsed={ isCollapsed }
                icon={ icon ? icon : ColumnIcons[breakpoint] }
                label={ ColumnLabels[breakpoint] }
                controls={ options.map( ( option ) => {
                    const active = value == option.value;

                    return {
                        ...option,
                        icon: active ? 'yes-alt' : 'marker',
                        isActive: active,
                        onClick: () => {
                            onChange( option.value );
                        },
                    };
                } ) }
                />
        );
    }
}
