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
