/ * Fonction pour mettre à jour les photos sur la page en fonction des filtres ou de la demande de chargement supplémentaire. */
const updatePhotos = () => {
    const formData = new FormData();
    formData.append("action", "load_more_photos");
    formData.append("categorie", jQuery("#categorie").val());
    formData.append("format", jQuery("#format").val());
    formData.append("order", jQuery("#annees").val());
    formData.append("offset", 0); 
    formData.append("nonce", ajax_filtres.ajax_nonce);
  
    // Envoie la requête AJAX à WordPress
    fetch(ajax_filtres.ajax_url, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json", 
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const listePhotos = document.getElementById("liste__photo");
        if (data.success && data.data) {
          listePhotos.innerHTML = data.data.html;
          manageLoadMoreButton(data.data.has_more_photos);
          const newOffset = document.querySelectorAll(".block__photo").length;
          jQuery("#load-more-btn").data("offset", newOffset);
        } else {
          console.error("Aucune donnée de photo reçue du serveur.");
          listePhotos.innerHTML = "<p>Aucune photo trouvée.</p>";
          manageLoadMoreButton(false);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  };
  
  /**
   * Gère l'affichage du bouton "Charger plus" en fonction de la disponibilité de plus de photos.
   * @param {boolean} hasMore 
   */
  const manageLoadMoreButton = (hasMore) => {
    const loadMoreButton = document.getElementById("load-more-btn");
    loadMoreButton.style.display = hasMore ? "block" : "none";
  };
  
  jQuery(document).ready(function ($) {
    // Initialisation de Select2 pour les éléments de sélection.
    $("#categorie, #format, #annees").select2();

    $("#categorie, #format, #annees").on("select2:select", function () {
      console.log("Mise à jour des photos pour : ", this.id, $(this).val());
      updatePhotos();
    });
  });
