function highlightNavItem(event, element) {
    event.preventDefault();
  
    const navItems = document.querySelectorAll('.navbar-nav .nav-link');
    navItems.forEach(item => {
      item.classList.remove('active');
    });
  
    element.classList.add('active');
}
