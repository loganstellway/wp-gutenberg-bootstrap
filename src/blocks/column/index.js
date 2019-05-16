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
    title: __( 'Bootstrap Column' ),
    parent: [ 'loganstellway/bootstrap-grid' ],
    category,
    description: __( 'A single Twitter Bootstrap column within a grid block.' ),
    supports: {
        inserter: false,
        reusable: false,
        html: false,
    },
    attributes,
    edit,
    save,
};

export { metadata, name, settings };
