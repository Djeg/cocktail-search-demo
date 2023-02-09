/**
 * Affiche la barre de recherche
 */
export function displaySearchBar(splash, searchBar) {
  // Ajouter la classe mini à mon splash !
  splash.classList.add('mini')
  // Ajouter la class active au search bar
  searchBar.classList.add('active')

  // On supprime le click sur le splash !
  splash.removeEventListener('click', displaySearchBar)
}

/**
 * Initialize the splash screen
 */
export function initSplash(splash, searchBar) {
  splash.addEventListener('click', () => {
    displaySearchBar(splash, searchBar)
  })
}
