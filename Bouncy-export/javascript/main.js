$( function() {
    $( '.burger_line' ).on( 'click', function() {
      $( '#link ,.content,.logo__nav ' ).toggleClass( 'active');
    });
  } );