// jQuery Curso: CodeCademy

/* 1) jQuery: Introduction */

// Vanilla JS
const menu = document.getElementById('menu');
const closeMenuButton = document.getElementById('close-menu-button');
closeMenuButton.addEventListener('click', () => {
    menu.style.display = 'none';
})

// jQuery
$('#close-menu-button').on('click', () => {
    $('#list').hide();
})

// jQuery document ready
//  .ready(): waits until DOM is fully rendered
$(document).ready(function() {
    // alert('DOM fully loaded!');
    console.log('DOM fully loaded!');
})

// Variables starts with $
const $myButton = $('#my-button');

// CDN (Content Delivery Network) Import 
//  the jQuery library must be listed before any other javascript file that uses it <script>

/* 2) jQuery: effects */

// slideToggle method
//  elements appear sliding down and sliding up
$('#slideToggle').on('click', () => {
    $('#menu').slideToggle(2000);
});

// fadeOut effect: element will gradually disappear
$('#fadeOut').on('click', () => {
    // $('#menu').fadeOut(400, 'swing');
    $('#menu').fadeOut();
})

// fadeIn effect: element will gradually appear
$('#fadeIn').on('click', () => {
    // $('#menu').fadeIn(400, 'swing');
    // 400: duration fading effect
    // swing: speed fading effect
    $('#menu').fadeIn();
})

// show: instantly will appear
$('#show').on('click', () => {
    $('#menu').show();
})

// toggle:  combines hide() and show()
$('#toggle').on('click', () => {
    $('#menu').toggle();
})

// fadeToggle:  combines fadein() and fadeOut()
$('#fadeToggle').on('click', () => {
    $('#menu').fadeToggle();
})

// slideUp:  element will gradually disappear sliding up
$('#slideUp').on('click', () => {
    $('#menu').slideUp();
})

// slideDown:  element will gradually appear sliding down
$('#slideDown').on('click', () => {
    $('#menu').slideDown();
})

// hide: element will disappear
$('#hide').on('click', () => {
    $('#menu').hide();
});

/* 3) Event handlers */

// Event listeners
// click event 
$('#click').on('click', () => {
    $('#lorem').hide();
});
// 'keyup' event: when the user releases a key on the keyboard. 
$('#textbox').on('keyup', () => {
    $('#lorem').show();
});
    // example of the html
    $( "#target" ).on('keyup', () => {
        alert( "Handler for .keyup() called." );
    });
    
// 'scroll' event
$('#scroll').on('scroll', () => {
    $('#lorem').show();
});
    // example of the html
    $( "#target" ).scroll(function() {
        $( "#log" ).append( "<div>Handler for .scroll() called.</div>" );
    });

// Event object
//  event type
//  currentTarget: DOM element upon wich the event ocurred
$('#button-lorem').on('click', event => {
    // event.currentTarget: refers to '#menu
    $(event.currentTarget).hide();
});

// event.currentTarget attribute
// event will trigger on the clicked element, even if there are many elements with the same class
$('.blue-button').on('click', event => {
    $(event.currentTarget).hide();
});

// on method chaining
//  .on chains event listener to add multiple events to the same element
$('#lorem-button').on('mouseenter', () => {
    $('#lorem').show();
}).on('mouseleave', () => {
    $('#lorem').hide();
});

// on method
$('#login').on('click', () => {
    $('#login-form').toggle();
});

/* 4) Style methods */

// .animate
$("#green").click(function(){
    $("div").animate({left: '250px'});
});

// $('#title').on('mouseenter', () => {
//     $('#title-text').animate({
//         color: '#FFFFFF', 
//         backgroundColor: '#000000'
//     }, 300); // 300 milliseconds
// })


// .css method
$('.button').on('mouseenter', event => {
    $('.text').css('color','red');
});

// toggleClass(): combines the effects of addClass() and removeClass()
$("button").click(function(){
    $(".p").toggleClass("main");    // add class .main
});     

// .css modify multiple properties
$('#titleH2').css({
    color: 'blue', 
    backgroundColor: 'gray',
    fontSize: '24px'
});

// addClass()
$('.button1').on('mouseleave', () => {
    $('.button1').addClass('button-active');
});

// removeClass()
$('.button2').on('mouseleave', () => {
    // event.currentTarget.removeClass('button-active');
    $('.button2').removeClass('button-active');
});

/* 5) Style methods */

// .children(): example will select the item elements
$('.parent').children()

// .parent(): will return the parent element
.parent();

// .next(): targets the next element
$('.two').next() // will be class: three

// find()
const listItems = $('#shopping-list').find('.list-item');

// siblings()
//  targets all the sibling element of a particular element
$('#choice').on('click', event => {
    // remove selected class from any siblings
    $(event.currentTarget).siblings().removeClass('selected');
    // add selected class to that element
    $(event.currentTarget).addClass('selected');
})

// closest() 
//  find the first and closest ancestor element