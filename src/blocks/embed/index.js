/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import edit from './edit';
import save from './save';
import metadata from './block.json';

const { name, attributes } = metadata;
const settings = {
    title: __( 'Bootstrap Embed' ),
    icon: 'editor-contract',
    category: 'embed',
    description: __( 'Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.' ),
    attributes,
    edit,
    save,
};

export { metadata, name, settings };
