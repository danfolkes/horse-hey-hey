/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
		playAudio();
		
		$(".listening").hide();
		
		console.log("receivedEvent");
		
		$(".clickable").on('touchend' ,function(){ 
			console.log("touchend");
		  $(".app").removeClass("mousedown").addClass("mouseup");
		});
		$(".clickable").on('touchstart' ,function(){
			console.log("touchstart");
		  $(".app").removeClass("mouseup").addClass("mousedown");
		  playAudio();
		});
		
        console.log('Received Event: ' + id);
    }
};

function playAudio() { 
	var fnames = ["HeyHey", "HeyQuitIt", "Stoooop", "WhatWhat"];
	var fname = fnames[Math.floor(Math.random() * fnames.length)];
	var the_video = document.getElementById("htmlvideo_HeyQuitIt");
	//the_video.load();
    the_video.play();
	console.log("mediaRes.play()" + fname);
}
/*
function success() { console.log("working");} 
function error_error(e) {
	console.log("e.message: " + e);
	console.log("e.message: " + e.message);
}

function playAudio() {
	var fnames = ["HeyHey", "HeyQuitIt", "Stoooop", "WhatWhat"];
	var fname = fnames[Math.floor(Math.random() * fnames.length)];
	fname = "audio/" + fname + ".mp3";
	
    // HTML5 Audio
	//	(typeof Audio != "undefined") { 
    if (typeof Audio != "undefined") { 
		audio = new Audio();
		audio.src = fname;
		if ((typeof device != "undefined")&&(device.platform == 'Android')) {
            fname = '/android_asset/www/' + fname;
        }
		audio.addEventListener('error', function (e) { 
			console.log("error playing audio: " + JSON.stringify(e));
		}, false);
		console.log("fname1: " + fname);
		
		audio.play();
		
		console.log("new Audio(fname).play();");
    } else if (typeof device != "undefined") {
		console.log("Phonegap media");
		console.log("device.platform:" + device.platform);
        // Android needs the search path explicitly specified
        if (device.platform == 'Android') {
            fname = '/android_asset/www/' + fname;
        }
		
        var mediaRes = new Media(fname,
            function onSuccess() {
                // release the media resource once finished playing
                mediaRes.release();
				console.log("mediaRes.release()" );
            },
            function onError(e){
                console.log("error playing sound: " + JSON.stringify(e));
            });
		console.log("fname2: " + fname);
        mediaRes.play();
		console.log("mediaRes.play()");

    } else {
        console.log("no sound API to play: " + fname);
    }
}
*/