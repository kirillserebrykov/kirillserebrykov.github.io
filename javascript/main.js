$( function() {
    $( '.nav_bar' ).on( 'click', function() {
      $( '.nav_elemet ,.content,.logo__nav ' ).toggleClass( 'active');
    });
  } );