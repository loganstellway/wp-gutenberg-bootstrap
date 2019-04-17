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

const { name, attributes } = metadata;
const settings = {
    title: __( 'Bootstrap Grid' ),
    icon: 'layout',
    category: 'layout',
    description: __( 'Create a Twitter Bootstrap grid.' ),
    attributes,
    edit,
    save,
};

export { metadata, name, settings };
