$(document).ready(function () {
    //Hide reset buttons until is up.
    $('.reset').hide();
    // vars for actual time
    var time = parseInt($('#num').html());
    var breakTime = parseInt($('#breakNum').html());
    //Start button
    $('#start').click(function () {
        var countdown = setInterval(seconds, 1000);
        time *= 60;

        function seconds() {
            // Hide buttons
            $('#start, #pomodoro-minus-five, #pomodoro-plus-five, #break-minus-five, #break-plus-five, #breakNum, #pomodoro-time, #break-time').hide();
            // Enlarge Timer
            $('#num').addClass('enlarge');
            $('#active-time').show();
            $('#active-time').html('Time Left:');
            time -= 1;
            if (time === 0) {
                alert("Time's up!");
                clearInterval(countdown);
                var startBreak = setInterval(breakTimer, 1000);
                breakTime *= 60;
                $('#num').hide();
            }
            // Seconds to Mins Conversion
            if (time % 60 >= 10) {
                $('#num').html(Math.floor(time / 60) + ":" + time % 60);
            }
            else {
                // need this statement to correctly display numbers
                $('#num').html(Math.floor(time / 60) + ":" + '0' + time % 60);
            }
            //Break Timer
            function breakTimer() {
                $('#active-time').show();
                $('#active-time').html('Break time left:');
                $('#breakNum').show();
                breakTime -= 1;
                if (breakTime === 0) {
                    clearInterval(startBreak);
                    $('#reset-pomo').show();
                    $('#breakNum, #active-time').hide();
                }
                // Seconds to Mins Conversion
                if (breakTime % 60 >= 10) {
                    $('#breakNum').html(Math.floor(breakTime / 60) + ":" + breakTime % 60);
                }
                else {
                    // need this statement to correctly display numbers
                    $('#breakNum').html(Math.floor(breakTime / 60) + ":" + '0' + breakTime % 60);
                }
            }
        }
    });
    //Reset Button
    $('#reset-pomo').click(function () {
        time = 25;
        breakTime = 5;
        $('#num').html(time);
        $('#breakNum').html(breakTime);
        $('#pomodoro-time, #break-time, #num, #breakNum, #pomodoro-minus-five, #pomodoro-plus-five, #break-minus-five, #break-plus-five, #start').show();
        $('#num').removeClass('enlarge');
        $('#reset-pomo').hide();
    });
    // Pomodoro Clock Session Increment & Decrement Buttons
    $('#pomodoro-minus-five').click(function () {
        if (time > 5) {
            time -= 5;
            $('#num').html(time);
        }
    });
    $('#pomodoro-plus-five').click(function () {
        if (time >= 5) {
            time += 5;
            $('#num').html(time);
        }
    });
    // Break Buttons
    $('#break-minus-five').click(function () {
        if (breakTime > 5) {
            breakTime -= 5;
            $('#breakNum').html(breakTime);
        }
    });
    $('#break-plus-five').click(function () {
        breakTime += 5;
        $('#breakNum').html(breakTime);
        console.log(breakTime);
    });
});
