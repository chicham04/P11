</main>
<footer  id="site-footer">
<div class="footer-content">
        <hr class="custom-line">
            <nav class="footer-navigation">
                <ul class="footer-menu">

                    <!-- Lien vers la page Mentions légales -->
                    <li><a href="<?php echo get_permalink(get_page_by_path('mentions-legales')); ?>">Mentions légales</a></li>
                    
                    <!-- Lien vers la page de vie privée (Politique de confidentialité) -->
                    <li><a href="<?php echo esc_url(get_privacy_policy_url()); ?>">Vie privée</a></li>
                    
                    <!-- Copyright ou autre contenu du pied de page -->
                    <li><p>Tous droits réservés</p></li>

                </ul>

                <?php
        // Fonction pour le menu footer
        wp_nav_menu( array(
            'theme_location' => 'footer-menu',
            'container'      => 'false',
            'menu_class'     => 'footer-menu',
        ) );
        ?>


<!-- Fonction pour appeler le template contact-modal.php -->
<?php get_template_part('templates-part/contact-modal'); ?>


            </nav>

</div>