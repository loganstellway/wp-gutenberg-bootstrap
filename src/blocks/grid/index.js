/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';

const { name, attributes, category } = metadata;
const settings = {
    title: __( 'Bootstrap Grid' ),
    icon: 'layout',
    category,
    description: __( 'Create a Twitter Bootstrap grid.' ),
    keywords: [ __( 'bootstrap' ), __( 'grid' ), __( 'columns' ) ],
    attributes,
    edit,
    save,
};

export { metadata, name, settings };
