$( function() {
    $( '.nav_menu' ).on( 'click', function() {
      $( '.menu_items , .nav_menu,.wraper , .line , a' ).toggleClass( 'active');
    });
  } );