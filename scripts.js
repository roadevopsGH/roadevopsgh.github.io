document.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.getItem('pageRefreshed')) {
        sessionStorage.setItem('pageRefreshed', 'true');
        window.location.reload();
    }
});
