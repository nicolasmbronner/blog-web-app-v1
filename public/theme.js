function setTheme( theme ) {
    document.body.classList.toggle( 'dark-theme', theme === 'dark' );
    localStorage.setItem( 'theme', theme );
}

function toggleTheme( ) {
    const currentTheme = localStorage.getItem( 'theme' ) || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme( newTheme );
}

// Initialize theme
document.addEventListener( 'DOMContentLoaded', ( ) => {
    const savedTheme = localStorage.getItem( 'theme' ) || 'light';
    setTheme( savedTheme );
    
    const themeToggle = document.getElementById( 'theme-toggle' );
    if ( themeToggle ) {
        themeToggle.addEventListener( 'click', toggleTheme );
    } else {
        console.warn( "Theme toggle button not found" );
    }
} );