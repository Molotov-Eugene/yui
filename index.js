import {
  videoCard,
  suggestionCard,
  comment,
  vidos,
  ucomment,
  videoDescription,
} from "./elements.js";

const loadVideoPage = () => {
  $.get( "video.html", ( data ) => {
    $( "#main-content" ).empty().html( data );
    $( "#video-suggestion-box" ).html( suggestionCard( vidos ).repeat( 35 ) );
    $( "#comments-box" ).html( comment( ucomment ).repeat( 11 ) );
    $( "#video-description" ).html( videoDescription( vidos ) );
    window.history.pushState( { html: data, pageTitle: "vidos" }, "", "video.html" );
  } );
};

const loadHomePage = () => {
  $.get( "home.html", ( data ) => {
    $( "#main-content" ).empty().html( data );
    $( "#previews" ).html( $( videoCard( vidos ).repeat( 12 ) ) );
    $( ".card-video" ).click( loadVideoPage );
    $( ".card-video" ).css( "cursor", "pointer" )
    const innerHtml = document.getElementById( "main-content" ).innerHTML;
    window.history.pushState( { html: innerHtml, pageTitle: "home" }, "", "" );
  } );
};

$( document ).ready( () => {
  window.onpopstate = ( e ) => {
    switch ( e.state.pageTitle ) {
      case "home":
        loadHomePage();
        break;
      case "vidos":
        loadVideoPage();
        break;
      default:
        console.warn( "unknown page title" );
    }
  };
  loadHomePage();
} );
