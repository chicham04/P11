
 /* Attache des événements aux images pour activer la lightbox lorsqu'elles sont cliquées. */

function attachEventsToImages() {
  console.log("Les photos se chargent");
  const images = document.querySelectorAll(".icon-fullscreen");
  images.forEach((image) => {
    image.removeEventListener("click", imageClickHandler); 
    image.addEventListener("click", imageClickHandler); 
  });
}

//Traite la réponse AJAX pour ajouter des photos et mettre à jour l'interface.
// @param {Object} response - La réponse du serveur.
// @param {number} initialOffset - L'offset initial avant le chargement des nouvelles photos.

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