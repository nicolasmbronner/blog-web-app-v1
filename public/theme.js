function setTheme( theme ) {
    document.body.classList.toggle( 'dark-theme', theme === 'dark' ); // add / remove `dark-theme` class from the body
    localStorage.setItem( 'theme', theme ); // save chosen theme in local storage
}

function toggleTheme( ) {
    // assign "theme" from local storage to "currentTheme". If non existant, set it to "light"
    const currentTheme = localStorage.getItem( 'theme' ) || 'light';

    // set "newTheme" as "dark" if actual is "light", and vice versa
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme( newTheme ); // call setTheme() with "newTheme" as argument (setup above)
}

// Initialize theme
document.addEventListener( 'DOMContentLoaded', ( ) => {
    const savedTheme = localStorage.getItem( 'theme' ) || 'light'; // get saved theme or default to light mode
    setTheme( savedTheme ); // call "setTheme()" with saved theme as argument or "light" if non existant
    
    const themeToggle = document.getElementById( 'theme-toggle' ); // get theme toggle button from the DOM
    if ( themeToggle ) {
        // set an event listener for  the theme toggle button, calling "toggleTheme()" if clicked
        themeToggle.addEventListener( 'click', toggleTheme );
    } else {
        console.warn( "Theme toggle button not found" );
    }
} );