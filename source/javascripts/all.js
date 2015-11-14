//= require_tree .

window.onload = function() {
    var $comments = document.getElementsByClassName('m-comments__trophy'),
        // converts NodeList to iterable array
        commentsArray = Array.prototype.slice.call( $comments );

    function trophyIt() {
        this.className += ' active';
    }

    commentsArray.forEach( function( el ) {
        el.addEventListener('click', trophyIt);
    });
}
