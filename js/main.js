/* popUpWindow in main */
function popWin(url) {
    popWin = window.open(
        url, 'popWin', 'height=350,width=500,left=380,top=100')
}




/* exercise: drag and drop*/

$('#dragAns img').mouseover(function() {
    $(this).draggable(); // allow items to be draggable.
});

var q1Dragged, q2Dropped; // assgin global variable to "draggedAnswer" to get the value

$('#dropAns1,#dropAns2,#dropAns3,#dropAns4').droppable({
    drop: function(event, ui) {

        var dragEl = ui.draggable;
        var dropEl = $(this);

        var draggedAnswer = dragEl.attr('data-answer')
        var droppedAnswer = dropEl.attr('data-answer')

        q1Dragged = draggedAnswer;
        q2Dropped = droppedAnswer;
    }
});

// click the button to check answer and change drop are color
$('.checkAns').click(function() {
    if (q1Dragged === q2Dropped) {
        $(this).siblings('div').css('background-color', '#00CC66');
    } else {
        $(this).siblings('div').css('background-color', '#FF0033')
    };
})
// $('.checkAns').click(function() {
// if (q1Dragged === q2Dropped) {
//     $(".color").css('background-color', '#00CC66');
// else{
//     $(".color").css('background-color', '#FF0033')};

/*Practice Tips*/
$('[data-toggle="popover"]').popover()


// /*search box*/ 
// (function() {
//   var cx = '017643444788069204610:4gvhea_mvga'; // Insert your own Custom Search Engine ID here
//   var gcse = document.createElement('script'); gcse.type = 'text/javascript'; gcse.async = true;
//   gcse.src = (document.location.protocol == 'https' ? 'https:' : 'http:') +
//       '//www.google.com/cse/cse.js?cx=' + cx;
//   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
// })();



