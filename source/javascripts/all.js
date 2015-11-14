/**
 *
 * This sets up after window onload() fires to listen
 * when trophies are clicked and give UI feedback.
 *
 */

window.onload = function() {
    var $comments = document.getElementsByClassName('m-comments__trophy'),
        // converts NodeList to iterable array
        commentsArray = Array.prototype.slice.call( $comments );

    /**
     * This looks at the element that triggers the event and will
     * add an active class, if one doesn't exist.
     *
     * @returns {object} - clicked element modified className prop
     */
    function trophyIt() {
        /**
         * Find the counter element for the trophy that was clicked
         *
         * @param {object} parentEl - pointer reference for 'this'
         * @returns {object} clickedCounter - element to be changed
         */
        function counterEl( parentEl ) {
            for ( var i = 0; i < parentEl.children.length; i++ ) {
                if ( parentEl.children[i].className === 'm-comments__trophy-count' ) {
                    var clickedCounter = parentEl.children[i];

                    return clickedCounter;
                }
            }
        }

        var clicked = counterEl( this ),
        counter = parseInt(clicked.innerHTML, 10);

        if ( this.classList.contains('active') ) {
            counter--;
            clicked.innerHTML = counter;

            return this.className = this.className.replace( ' active', ' ' );
        }

        counter++;
        clicked.innerHTML = counter;

        return this.className += ' active';
    }

    commentsArray.forEach( function( el ) {
        el.addEventListener('click', trophyIt);
    });
}
