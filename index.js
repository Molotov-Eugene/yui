import {
  videoCard,
  suggestionCard,
  comment,
  vidos,
  ucomment
} from "./elements.js";

const loadVideoPage = () => {
  $.get( "video.html", ( data ) => {
    $( "#main-content" ).empty().append( data );
    $( "#video-suggestion-box" ).append( suggestionCard( vidos ).repeat( 35 ) );
    $( "#comment-section" ).append( comment( ucomment ).repeat( 11 ) );
    window.history.pushState( { html: data, pageTitle: "vidos" }, "", "video.html" );
  } );
};

const loadHomePage = () => {
  $.get( "home.html", ( data ) => {
    $( "#main-content" ).empty().append( data );
    $( "#previews" ).append( $( videoCard( vidos ).repeat( 12 ) ) );
    $( ".card-video" ).click( loadVideoPage );
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
