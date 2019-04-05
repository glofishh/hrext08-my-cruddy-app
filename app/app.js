

var updateStatusLabel = function(message) {
	$('#statusLabel').text(message);
}

 //jQuery document ready initialization stuff
 ////button and form event handlers
 // logic for determining action probably needs to go in the event handler
$(document).ready(function () {

	var shoppingArr = [];
	var listObj = JSON.parse(localStorage.getItem('key'));


	if (localStorage.getItem('key')) { 
		shoppingArr = listObj;
	}


	$('.btn-create').on('click', function(e) { 
		shoppingArr.push($('.key').val());
		localStorage.setItem('key', JSON.stringify(shoppingArr));

		$('.list-container').append("<li>" + shoppingArr.slice(-1) + "</li>");
		$('.key').val('');
		updateStatusLabel(' ' + '"' + (shoppingArr.slice(-1)).toString().toUpperCase() + '"' + ' HAS BEEN ADDED TO YOUR LIST')
	});


	$('.body').ready(function(e) {
		if (shoppingArr.length > 0) {
			for(var i = 0; i < listObj.length; i++) {
				$('.list-container').append("<li>" + listObj[i] + "</li>");
			}
		}
	});

	//CANNOT GET TO WORK ROAR
	$('.btn-delete-item').on('click', function(e) {
		var key = $('.key').val();
		// var keyExists = localStorage.getItem(key) !== null;
		

		for(var i = 0; i < listObj.length; i++) {
			if(key === listObj[i]) {
				window.localStorage.removeItem('key');	
				// $('li').remove(); 
				updateStatusLabel('item "' + key + '" removed');	
			} else if (key === '') {
				updateStatusLabel('pick something to delete')
			} else {
				updateStatusLabel('can only delete last item');
			}
		}
	});	

	// $('.btn-delete-item').on('click', function(e) {
	// 	var key = $('#key').val();
	// 	var keyExists = localStorage.getItem(key) !== null;

	// 	if (keyExists) {
	// 		removeEntry(key);
	// 		updateStatusLabel('key removed - ' + key);
	// 	} else if (key === '') {
	// 		$('li').remove(); 
	// 		updateStatusLabel('deleted')
	// 	} else {
	// 		updateStatusLabel('nothing to delete');
	// 	}
	// });	

	function randomizeMessage() {
  		var shoppingTagline = ['shop till you drop', 'honey we\'re out of milk again', 'it\'s all fun and games until you\'re out of toilet paper', 'the best part of grocery shopping with kids is staying home and starving instead', 'there\'s no way to look cool trying to pull two shopping baskets apart', 'are you an ikea shopping cart because i have no way of predicting what you\'re going to do next', '(don\'t forget the ice cream)', 'shopshopshop'];
  		var randomSelect = Math.floor(Math.random() * shoppingTagline.length);
    	return shoppingTagline[randomSelect];
    }

	$('.btn-delete-all').on('click', function(e){
		localStorage.clear();
		$('li').remove();
		updateStatusLabel(' ' + (randomizeMessage().toUpperCase()));
	});
});


/*
PAGE CONTENT STUFF
*/
//something to update the table every time localStorage changes

// //localStorage stuff
// //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

// ////create new entry
// //localStorage.setItem(key, value)
// var createEntry = function(key, value) {
// 	return localStorage.setItem(key, value);
// }

// ////Update existing entry
// //localStorage.setItem(key, value)
// var updateEntry = function(key, value) {
// 	return localStorage.setItem(key, value);
// }

// ////delete existing entry
// //localStorage.removeItem(key)
// var removeEntry = function(key) {
// 	return localStorage.removeItem(key);
// }
