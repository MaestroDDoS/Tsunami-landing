"use strict";
(function() { $(function()
{
	// simple slider
	$( '.items-swiper' ).each( function( idx ) {

		let c = $(this);

		c.slick(
			{
				dots: false,
				arrows: false,
				variableWidth: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		);
	} );

	let $aside_button = $( ".burger-button" ),
		$aside_nav	  = $( ".header__navbar" );

	$aside_button.on( 'click', ( e ) =>
		{
			$aside_button.toggleClass( "active" );
			$aside_nav	 .toggleClass( "active" );
		}
	);
}
)}());
