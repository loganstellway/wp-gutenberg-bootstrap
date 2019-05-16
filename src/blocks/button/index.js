/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name, attributes, category } = metadata;
const settings = {
    title: __( 'Bootstrap Button' ),
    icon: 'admin-links',
    category,
    description: __( 'A single Twitter Bootstrap column within a grid block.' ),
    attributes,
    edit,
    save,
};

export { metadata, name, settings };
