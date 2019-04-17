<?php

/**
 * Plugin Name: Logan Stellway - Bootstrap for Gutenberg
 * Plugin URI: www.loganstellway.com
 * Description: Plugin to add Bootstrap blocks for Gutenberg
 * Version: 1.0
 * Author: Logan Stellway
 * Author URI: www.loganstellway.com
 * License: GNU GPL v2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

namespace LoganStellway\Gutenberg\Bootstrap;

// Prevent direct access to script
defined( 'ABSPATH' ) or die();

if ( ! class_exists('\LoganStellway\Gutenberg\Bootstrap\Blocks') ) {
    class Blocks
    {
        public function __construct() {
            add_action( 'init', array( $this, 'registerBlock' ) );
        }

        /**
         * Initialize 
         */
        public function registerBlock()
        {
            // Editor Script
            wp_register_script(
                'loganstellway-bootstrap-editor',
                plugins_url( 'build/index.js', __FILE__ ),
                array( 'wp-editor', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components' ),
                filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
                true
            );

            // Editor Style
            wp_register_style(
                'loganstellway-bootstrap-editor',
                plugins_url( 'build/editor.css', __FILE__ ),
                array( 'wp-edit-blocks' ),
                filemtime( plugin_dir_path( __FILE__ ) . 'build/editor.css' )
            );
        
            // Register block
            register_block_type( 'loganstellway/bootstrap', array(
                'editor_style' => 'loganstellway-bootstrap-editor',
                'editor_script' => 'loganstellway-bootstrap-editor',
            ) );
        }
    }

    new Blocks();
}
