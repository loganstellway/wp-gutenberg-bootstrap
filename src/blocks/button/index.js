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

const { name } = metadata;
export { metadata, name };

export const settings = {
	title: __( 'Bootstrap Button' ),
	description: __( 'Prompt visitors to take action with a button-style link.' ),
	icon: "editor-removeformatting",
	keywords: [ __( 'link' ), __( 'button' ) ],
	supports: {
		align: true,
		alignWide: false,
	},
	edit,
	save,
};
