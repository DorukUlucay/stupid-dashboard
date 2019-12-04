var defaults = {

    links: [


    ]

}

$(function () {
    update();

    $(".draggable").draggable({
        start: function () {

        },
        drag: function () {

        },
        stop: function () {

        }
    });
})


function update() {
    setTimeout(() => {

        $("#systemdate").text(getsystemdate());
        $("#utcdate").text(getutcdate());
        update();
    }, 1000);
}

function getsystemdate() {
    return new Date();
}

function getutcdate() {
    return new Date().toUTCString();
}


