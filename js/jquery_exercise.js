"use strict";

$(function() {
    // alert($('.list-item').html())
    // alert($('#item-2').html())
    // alert($('#item').html())
    // let codeup = $('.codeup');
    // codeup.css("border", "1px solid red")
    let listItems = $('li');
    // listItems.css("font-size", '20px');
    // let mainContents = $('h1, p, li');
    // mainContents.css("background-color", "lightblue")
    // alert($('h1').html())

    $('h1').click(function () {
    $('h1').css('background-color', 'firebrick')
    });

    $('p').dblclick(function () {
        $(this).css('font-size', '18px')
    });

    listItems.hover(
function () {
            listItems.css('color', 'red')
        },
function () {
            listItems.css('color', 'black')
        });
});