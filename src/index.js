/**
 * WordPress Dependencies
 */
import { registerBlockType } from "@wordpress/blocks";
import { Fragment } from "@wordpress/element";
import {
  InspectorControls,
  PanelColorSettings,
  RichText
} from "@wordpress/editor";

/**
 * Blocks
 */
import * as column from './blocks/column';
import * as grid from './blocks/grid';
import * as embed from './blocks/embed';
import * as button from './blocks/button';

[
    column,
    grid,
    embed,
    button,
].forEach( block => {
    if ( ! block ) return;
    const { metadata, settings, name } = block;
    registerBlockType( name, settings );
} );
