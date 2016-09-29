$(document).ready(function () {
    // Array to store freeCodeCamp followers
    var following = [];
    // freeCodeCamp Status
    $.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp/?client_id=stx0vf6630i98it42m35z77qwov5euu', function (data1) {
        if (data1.stream === null) {
            $("#fcc-status").html("<p style='color:red;'>Free Code Camp is currently OFFLINE</p>");
        }
        else {
            $("#fcc-status").html("<p style='color:green;'>Free Code Camp is currently LIVE</p>");
        }
    });
    // API for who freeCodeCamp follows
    $.getJSON('https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/?client_id=stx0vf6630i98it42m35z77qwov5euu', function (data) {
        for (var i = 0; i < data.follows.length; i++) {
            // display names
            var displayName = data.follows[i].channel.display_name;
            var channelURL = data.follows[i].channel.url;
            following.push(displayName);
        }
        // Test Channels pushed to array
        following.push('comster404');
        following.push('brunofin');
        following.push('ESL_SC2');
        following.push('GSL');
        following.push('Cryaotic');
        
        for (var i = 0; i < following.length; i++) {
            var url2 = 'https://api.twitch.tv/kraken/streams/' + following[i] + '/?client_id=stx0vf6630i98it42m35z77qwov5euu&callback=?';
            var channelURL = 'https://www.twitch.tv/';
            $.getJSON(url2).done(function (data2) {
                var logo;
                var name;
                var status;
                if (data2.error) {
                    logo = 'https://lh3.googleusercontent.com/jFPail7ytkrnoNO-Qd9iIzsASZ_lgN89_RYdIeSrQWTRcqgYMrIjJOWfIJOYYU4loB-c3OjhorGPU5ckDriea3zzasPMSotRATKE1Ywj5y7vjiUcKROvpMNY9_F0UzRy-bIjjat4AQpdoK6rt9n8QS_Y7Hde6qb8wBoPvIcU9rWpekRswjS3s-OQpkOp36BsX5HtcTs2yzMfDUDzukiZlVKV6GMGibczh9pJpLk1lGI-AjGFalX3mxv_Ty2NJEXWfbwouxQF8rp7awU4PwWI6T9JszGf-pS33wh8EH1hOcZXpyoR3Sc65bCNc6OQGYv0qK7_eTF-JUKiFzm6lycymC2sRyKWNTghnYoaEgc27aSI-roUlRB3Vkfpk-8Obx6pbtj051zXDxWOw9zXLQaOzb4pWfFndZlHshhRGiRD2p4YiOCtyHk-kn8gP0ydzvjj2vDBiw3pOm1cnQbIi1ai1WBT6RZYQ0rIi0lr6v5NGz5KKr3NZdPAxHFu5VdIIWvwutVEqn7YH5Pb3wfCVB5R5uspvG_G9tHnbz9ycUUw0dBL7BDGWuwA2WBUVAgBagr4kSrffXfTnTsCNs66byWT0w2fGYnasA0=s600-no?.jpg';
                    $(".unavailable-display").append("<div class='user unavailable-user container-fluid'>" + "<div class='grey grey-user'></div>" + "<img src='" + logo + "'>" + ' ' + data2.message + "</div>");
                }
                
                // Channels Offline
                if (data2.stream === null) {
                    $.getJSON(data2._links.channel, function (data3) {
                        var status = "OFFLINE";
                        var logo = data3.logo;
                        var name = data3.display_name;
                        if (logo === null) {
                            logo = 'https://lh3.googleusercontent.com/jFPail7ytkrnoNO-Qd9iIzsASZ_lgN89_RYdIeSrQWTRcqgYMrIjJOWfIJOYYU4loB-c3OjhorGPU5ckDriea3zzasPMSotRATKE1Ywj5y7vjiUcKROvpMNY9_F0UzRy-bIjjat4AQpdoK6rt9n8QS_Y7Hde6qb8wBoPvIcU9rWpekRswjS3s-OQpkOp36BsX5HtcTs2yzMfDUDzukiZlVKV6GMGibczh9pJpLk1lGI-AjGFalX3mxv_Ty2NJEXWfbwouxQF8rp7awU4PwWI6T9JszGf-pS33wh8EH1hOcZXpyoR3Sc65bCNc6OQGYv0qK7_eTF-JUKiFzm6lycymC2sRyKWNTghnYoaEgc27aSI-roUlRB3Vkfpk-8Obx6pbtj051zXDxWOw9zXLQaOzb4pWfFndZlHshhRGiRD2p4YiOCtyHk-kn8gP0ydzvjj2vDBiw3pOm1cnQbIi1ai1WBT6RZYQ0rIi0lr6v5NGz5KKr3NZdPAxHFu5VdIIWvwutVEqn7YH5Pb3wfCVB5R5uspvG_G9tHnbz9ycUUw0dBL7BDGWuwA2WBUVAgBagr4kSrffXfTnTsCNs66byWT0w2fGYnasA0=s600-no?.jpg';
                        }
                        $(".offline-display").append("<a class='channelurl' target='_blank' href=" + channelURL + name + ">" + "<div class='user offline container-fluid'>" + "<div class='red red-user'></div>" + "<img src='" + logo + "'>" + "<h5>" + name + "</h5>" + ' is ' + "<span class='description'>" + status + "</span>" + "</div>"+"</a>");
                    });
                }
                // Channels Online
                else {
                    status = data2.stream.channel.status;
                    logo = data2.stream.channel.logo;
                    name = data2.stream.channel.display_name;
                    
                    // Truncate the channel status
                    if(status.length > 33) {
                        status = status.slice(0, 30) + '...';
                    }
                    
                    // Channels without a logo
                    if (logo === null) {
                        logo = 'https://lh3.googleusercontent.com/jFPail7ytkrnoNO-Qd9iIzsASZ_lgN89_RYdIeSrQWTRcqgYMrIjJOWfIJOYYU4loB-c3OjhorGPU5ckDriea3zzasPMSotRATKE1Ywj5y7vjiUcKROvpMNY9_F0UzRy-bIjjat4AQpdoK6rt9n8QS_Y7Hde6qb8wBoPvIcU9rWpekRswjS3s-OQpkOp36BsX5HtcTs2yzMfDUDzukiZlVKV6GMGibczh9pJpLk1lGI-AjGFalX3mxv_Ty2NJEXWfbwouxQF8rp7awU4PwWI6T9JszGf-pS33wh8EH1hOcZXpyoR3Sc65bCNc6OQGYv0qK7_eTF-JUKiFzm6lycymC2sRyKWNTghnYoaEgc27aSI-roUlRB3Vkfpk-8Obx6pbtj051zXDxWOw9zXLQaOzb4pWfFndZlHshhRGiRD2p4YiOCtyHk-kn8gP0ydzvjj2vDBiw3pOm1cnQbIi1ai1WBT6RZYQ0rIi0lr6v5NGz5KKr3NZdPAxHFu5VdIIWvwutVEqn7YH5Pb3wfCVB5R5uspvG_G9tHnbz9ycUUw0dBL7BDGWuwA2WBUVAgBagr4kSrffXfTnTsCNs66byWT0w2fGYnasA0=s600-no?jpg';
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
            opacity:0
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
        opacity:0
    });
});
