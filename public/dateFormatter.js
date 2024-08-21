const dateFormatter = {
    // WIKI documenter les fonctions dans des objets
    formatYear: ( dateString ) => { // Format used for mobile index page
        // WIKI documenter Date().getFullYear(), et réviser toString()
        return new Date( dateString ).getFullYear( ).toString( );
    },

    formatYearMonth: ( dateString ) => { // Format used for tablet and desktop index page
        const date = new Date( dateString );
        const year = date.getFullYear( );
        const month = date.toLocaleString( 'en-US', { month: 'short' } ).slice( 0, 3 ); // WIKI documenter Date().toLocaleString()
        return `${ year } • ${ month }`;
    },

    formatFull: ( dateString ) => {
        const date = new Date( dateString );
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; // WIKI ajouter cette option à Date().toLocaleString()
        return date.toLocaleString( 'en-US', options );
    }
};

module.exports = dateFormatter; // WIKI documenter ça