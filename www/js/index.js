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
		var fnames = ["HeyHey", "HeyQuitIt", "Stoooop", "WhatWhat"];
		var fname = fnames[Math.floor(Math.random() * fnames.length)];
		var my_media = new Media();
		my_media = pickNew(my_media);
		
		//my_media.play();
		$(".listening").hide();
		
		
		$(".clickable").on('mouseup, touchend' ,function(){ 
		  $(".app").removeClass("mousedown").addClass("mouseup");
		  my_media.stop();
		  my_media = pickNew(my_media);
		});
		$(".clickable").on('mousedown, touchstart' ,function(){
		  $(".app").removeClass("mouseup").addClass("mousedown");
		  my_media.play();
		});
		
        console.log('Received Event: ' + id);
    }
};
function onSuccess() {
	console.log("playAudio():Audio Success");
}
function onError(error) {
	//alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
}
function pickNew(my_media) {
	var fnames = ["HeyHey", "HeyQuitIt", "Stoooop", "WhatWhat"];
	var fname = fnames[Math.floor(Math.random() * fnames.length)];
	my_media = new Media("audio/" + fname + ".mp3", onSuccess, onError);
	return my_media;
}