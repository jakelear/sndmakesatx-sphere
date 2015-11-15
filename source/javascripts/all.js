/**
 *
 * This sets up after window onload() fires to listen
 * when trophies are clicked and give UI feedback.
 *
 */

window.onload = function() {
    var $comments = document.getElementsByClassName('m-comments__trophy'),
        // converts NodeList to iterable array
        commentsArray = Array.prototype.slice.call( $comments ),
        $commentsActions = document.getElementsByClassName('m-comment-actions'),
        actionsArray = Array.prototype.slice.call( $commentsActions ),
        $adminSwitch = document.getElementsByClassName('m-switch');

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

    function makeTheQuote() {
        var action = this.childNodes[1].className;

        if ( action === 'fi-quote' ) {
            var content = this.parentNode.parentNode.parentNode;
            console.log(content);
        }
    }

    commentsArray.forEach( function( el ) {
        el.addEventListener('click', trophyIt);
    });

    $adminSwitch[0].addEventListener('change', function() {
        var b = document.getElementsByTagName('body')[0];

        if ( b.classList.contains('admin') ) {
            return b.className = b.className.replace( ' admin', ' ' );
        }

        return b.className += ' admin';
    });

    actionsArray.forEach( function( el ) {
        Array.prototype.forEach.call(el.children[0].children, function( button ) {
            button.addEventListener('click', makeTheQuote);
        });
    });
}
