
// Fonction pour mettre à jour les photos sur la page en fonction des filtres ou de la demande de chargement supplémentaire.

const updatePhotos = () => {
  // Préparation des données à envoyer via POST.
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



}