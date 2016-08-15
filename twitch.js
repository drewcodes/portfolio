$(document).ready(function () {
    // Array to store freeCodeCamp followers
    var following = [];
    // freeCodeCamp Status
    $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp', function (data1) {
        if (data1.stream === null) {
            $("#fcc-status").html("<p style='color:red;'>Free Code Camp is currently OFFLINE</p>");
        }
        else {
            $("#fcc-status").html("<p style='color:green;'>Free Code Camp is currently LIVE</p>");
        }
    });
    // API for who freeCodeCamp follows
    $.getJSON('https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/', function (data) {
        for (var i = 0; i < data.follows.length; i++) {
            // display names
            var displayName = data.follows[i].channel.display_name;
            following.push(displayName);
        }
        // 3 Test Users pushed to array
        following.push('comster404');
        following.push('brunofin');
        following.push('ESL_SC2');
        for (var i = 0; i < following.length; i++) {
            var url2 = 'https://api.twitch.tv/kraken/streams/' + following[i] + '/?callback=?';
            var channelURL = 'https://www.twitch.tv/';
            $.getJSON(url2).done(function (data2) {
                var logo;
                var name;
                var status;
                if (data2.error) {
                    logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g';
                    $(".unavailable-display").append("<div class='user unavailable-user container-fluid'>" + "<div class='grey grey-user'></div>" + "<img src='" + logo + "'>" + ' ' + data2.message + "</div>");
                }
                // Channels Offline
                if (data2.stream === null) {
                    $.getJSON(data2._links.channel, function (data3) {
                        var status = "OFFLINE";
                        var logo = data3.logo;
                        var name = data3.display_name;
                        if (logo === null) {
                            logo = 'http://web.vmc3.com/projects/bufs/branch/marines/logos/NoLogo.jpg';
                        }
                        $(".offline-display").append("<a class='channelurl' target='_blank' href=" + channelURL + name + ">" + "<div class='user offline container-fluid'>" + "<div class='red red-user'></div>" + "<img src='" + logo + "'>" + "<h5>" + name + "</h5>" + ' is ' + "<span class='description'>" + status + "</span>" + "</div>"+"</a>");
                    });
                }
                // Channels Online
                else {
                    status = data2.stream.channel.status;
                    logo = data2.stream.channel.logo;
                    name = data2.stream.channel.display_name;
                    // Channels without a logo
                    if (logo === null) {
                        logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g';
                    }
                    // Channels online with or without logo
                    $(".online-display").append("<a class='channelurl' target='_blank' href=" + channelURL + name + ">" + "<div class='user online container-fluid'>" + "<div class='green green-user'></div>" + "<img src='" + logo + "'>" + "<h5>" + name + "</h5>" + "<span class='description'>" + status + "</span>" + "</div>"+"</a>");
                }
            });
        }
    });
    // Show Online Users
    $('#online').click(function () {
        $('.offline').addClass('turn-off');
        $('.online').removeClass('turn-off');
        $('.unavailable-user').addClass('turn-off');
        TweenMax.staggerFrom('.online', 0.5, {
            opacity: 0
            , x: -50
            , delay: 0.5
        }, 0.3);
    });
    // Show Offline Users
    $('#offline').click(function () {
        $('.online').addClass('turn-off');
        $('.offline').removeClass('turn-off');
        $('.unavailable-user').addClass('turn-off');
        TweenMax.staggerFrom('.offline', 0.5, {
            opacity: 0
            , x: -50
            , delay: 0.5
        }, 0.3);
    });
    // Show All Users
    $('#all-online').click(function () {
        $('.online').removeClass('turn-off');
        $('.offline').removeClass('turn-off');
        $('.unavailable-user').removeClass('turn-off');
        TweenMax.from('.user-results', 2, {
            opacity: 0
        });
    });
    // Tweens
    TweenMax.from('.user-results', 2, {
        opacity: 0
    });
});
