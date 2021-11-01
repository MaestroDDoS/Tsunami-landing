"use strict";
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function ($) {

	$.fn.extend( 
	{
		textNiceNumber: function( num ) 
		{
			return this.each( function() 
				{ 
					this.textContent = num.toLocaleString() 
				} 
			);
		} ,

		changeVal: function( val ) 
		{
			return this.val( val ).trigger( 'change' ); 
		} ,

		attrs: function( attr ) 
		{
			let results = [];

				this.each( function( i, item ) { results.push( item.getAttribute( attr ) ) } );

			return results;
		},

		values: function() 
		{
			let results = [];

				this.each( function( i, item ) { results.push( item.value) } );

			return results;
		},

		initializeNumberInput: function() 
		{
			this.on( "blur input focusout", function( e ) 
				{ 
					$(this).inputNumberStepByMul( 0 );
				} 
			) ;

			this.on( "keypress", function( e ) 
				{
					let key = e.which || e.keyCode ;

					if( !key || key < 48 || key > 57 )
					{
						return	false;
					}
				} 
			);

			return	this.focusout();
		},

		inputNumberStepByMul: function( mul ) 
		{
			let minval = parseInt( this.attr( "min" )  );
			let maxval = parseInt( this.attr( "max" )  );
			let step   = parseInt( this.attr( "step" ) );	

			this.changeVal( Math.max( Math.min( parseInt( ( this.val() ) || 0 ) + step * ( mul != null ? mul : 1 ) , maxval ) , minval ) );

			return	this;
		}
		
	});	
}));
