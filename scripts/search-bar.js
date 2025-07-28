export default function addSearchBarFunctionality() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.addEventListener('keydown', event => {
        if(event.key === 'Enter') {
            window.location.href = `index.html?searchValue=${searchBar.value}`
        }
    })
};