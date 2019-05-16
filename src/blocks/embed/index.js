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

const { name, attributes, category } = metadata;
const settings = {
    title: __( 'Bootstrap Embed' ),
    icon: 'editor-expand',
    category,
    description: __( 'Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic ratio that scales on any device.' ),
    keywords: [ __( 'bootstrap' ), __( 'embed' ), __( 'responsive' ) ],
    attributes,
    edit,
    save,
};

export { metadata, name, settings };
