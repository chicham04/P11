<?php
// Définition des taxonomies et de leurs libellés
$taxonomy_labels = [
    'categorie' => 'CATÉGORIES',
    'format' => 'FORMATS',
    'annees' => 'TRIER PAR',
];
// Récupération des termes des taxonomies
$terms_by_taxonomy = [
    'categorie' => get_terms(['taxonomy' => 'categorie', 'hide_empty' => false]),
    'format' => get_terms(['taxonomy' => 'format', 'hide_empty' => true]),
    'order' => [
        (object)['slug' => 'ASC', 'name' => 'Plus anciennes'],
        (object)['slug' => 'DESC', 'name' => 'Plus récentes']
    ]
];
// Début du conteneur des filtres
echo "<div class='filtres-container'>";

// Section des filtres catégorie et format à gauche
echo "<div class='filters-left'>";

// Boucle sur les taxonomies pour la section gauche (catégorie et format)
foreach ($taxonomy_labels as $taxonomy_slug => $label) {
    if ($taxonomy_slug !== 'annees') {
        $terms = get_terms($taxonomy_slug);
        if ($terms && !is_wp_error($terms)) {
            $select_class = 'custom-select ' . $taxonomy_slug . '-select';
            echo "<div class='taxonomy-container'>";
            echo "<select id='$taxonomy_slug' class='$select_class'>";
            echo "<option value=''>$label</option>";
            foreach ($terms as $term) {
                echo "<option value='$term->slug'>$term->name</option>";
            }
            echo "</select>";
            echo "</label>";
            echo "</div>";
        }
    }
}
echo "</div>";
echo "<div class='filters-right'>";
        $terms = $terms_by_taxonomy['order'];
        echo "<div class='taxonomy-container'>";
            echo "<select id='annees' class='custom-select annees-select'>";
            echo "<option value=''>{$taxonomy_labels['annees']}</option>";
            echo "<option value='DES'>A partir des plus récentes</option>";
            echo "<option value='ASC'>A partir des plus anciennes</option>";
            echo "</select>";
        echo "</div>";
    echo "</div>";
echo "</div>";
