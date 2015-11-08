// ==UserScript==
// @name         I don't like riddles
// @namespace    http://hasky.me/
// @version      0.1
// @description  Never play with riddles again!
// @author       You
// @match        https://hackerexperience.com/internet?view=software&cmd=riddle
// @grant        none
// ==/UserScript==


$.ajax({
            type: "POST",
            url: 'riddle.php',
            dataType: "json",
            data: {
                func: 'minesweeper'
            },
            success: function(data) {
                if (data.status == 'OK') {
                    result = $.parseJSON(data.msg);
                    $('#puzzle-header').html(result[0].header);
                    $('#puzzle-status').html(result[0].result);
                    $('#puzzle-next').html(result[0].next);
                    $('#puzzle-isSolved').attr('value', result[0].isSolved);
                    $('#puzzle-solve').hide();
                }
            }
