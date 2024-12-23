// Attache des événements aux images pour activer la lightbox lorsqu'elles sont cliquées.

function attachEventsToImages() {
  console.log("Les photos se chargent");
  const images = document.querySelectorAll(".icon-fullscreen");
  images.forEach((image) => {
    image.removeEventListener("click", imageClickHandler); // Supprimer l'ancien gestionnaire pour éviter les doublons
    image.addEventListener("click", imageClickHandler); // Attacher le nouvel gestionnaire
  });
}

//  Traite la réponse AJAX pour ajouter des photos et mettre à jour l'interface.
//  @param {Object} response - La réponse du serveur.
//  @param {number} initialOffset - L'offset initial avant le chargement des nouvelles photos.

function handleLoadResponse(response, initialOffset) {
  console.log("Response from AJAX request: ", response);
  if (response.success && response.data) {
      appendPhotos(response.data.html);
      const newOffset = initialOffset + 8;
      jQuery("#load-more-btn").data("offset", newOffset); 
      attachEventsToImages(); 

      if (!response.data.has_more_photos) {
          handleNoPhotos();
      }
  } else {
      handleNoPhotos();
      console.error("Erreur: Aucune donnée reçue.");
  }
}


/**
 * Ajoute les nouvelles photos chargées au conteneur de la liste des photos.
 * @param {string} html - Le HTML des nouvelles photos.
 */
function appendPhotos(html) {
  jQuery("#liste__photo").append(html);
}

/**
* Cache le bouton "Charger plus" si aucune photo supplémentaire n'est disponible.
*/
function handleNoPhotos() {
  jQuery("#load-more-btn").hide();
  console.log("Aucune photo n'est disponible.");
}

// Configuration de l'événement de clic pour le bouton de chargement supplémentaire.
jQuery(document)
  .off("click", "#load-more-container #load-more-btn")
  .on("click", "#load-more-container #load-more-btn", function () {
      const currentOffset = jQuery("#load-more-btn").data("offset") || 0;
      console.log("Bouton cliqué avec offset : " + currentOffset);
      loadMoreContent(currentOffset);
  });

/**
* Charge plus de contenu en utilisant AJAX en fonction de l'offset actuel et des filtres actifs.
*/
function loadMoreContent(offset) {
  const ajaxurl = ajax_filtres.ajax_url;
  const nonce = ajax_filtres.ajax_nonce;

  // Récupérer les filtres actifs
  const categorie = jQuery("#categorie").val();
  const format = jQuery("#format").val();
  const annees = jQuery("#annees").val();

  // Utilisation d'AJAX pour charger plus de contenu
  jQuery.ajax({
      url: ajaxurl,
      type: "post",
      data: {
          action: "load_more_photos",
          offset: offset,
          nonce: nonce,
          categorie: categorie, 
          format: format, 
          order: annees 
      },
      success: function (response) {
          handleLoadResponse(response, offset);
      },
      error: function (xhr, status, error) {
          console.error("Erreur AJAX : " + status + ", détails : " + error);
          console.error("Réponse du serveur : ", xhr.responseText);
      }
  });
}

// Message pour indiquer que le script a été chargé correctement.
console.log("Le JS du bouton charger plus s'est correctement chargé");