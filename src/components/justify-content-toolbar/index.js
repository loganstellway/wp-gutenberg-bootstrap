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
    { value: 'start', title: 'Start' },
    { value: 'end', title: 'End' },
    { value: 'center', title: 'Center' },
    { value: 'between', title: 'Between' },
    { value: 'around', title: 'Around' },
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
 * Justify content toolbar
 */
export default class JustifyContentToolbar extends Component {
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
