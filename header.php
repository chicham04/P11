<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <?php wp_head(); ?>
</head>

<body>
    <?php 
    // Fonction pour injecter du code après la balise d'ouverture du body
    wp_body_open(); ?>
    
<header id="site-header">
       
            <!-- Logo -->
            <div id="site-logo">
                <a href="<?php echo esc_url( home_url( '/')); ?>">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logo.png" alt="Logo" class="site-logo">
                </a>
            </div>
            
           

            <!-- Menu principal -->
            <nav id="site-navigation">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'main-menu',
                'menu_class'     => 'main-menu', // Classe CSS pour le menu
            ) );
            ?>
        </nav>
           
 
    </header>