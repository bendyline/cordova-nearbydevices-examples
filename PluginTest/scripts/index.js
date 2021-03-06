﻿// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );        

        document.getElementById("app").innerHTML = "Plugin initiated.";

        if (window.nearbyDevices != null)
        {
            window.nearbyDevices.listenForBeacons(virtualBeaconDiscovered, virtualBeaconDiscoveryFailed);
        }
        else
        {
            document.getElementById("app").innerHTML = "Plugin not found.";
        }
 
    };

    function virtualBeaconDiscovered(reason)
    {
        document.getElementById("app").innerHTML += "<br/>Virtual Beacon Started: " + reason;

    }

    function virtualBeaconDiscoveryFailed(reason)
    {
        document.getElementById("app").innerHTML += "<br/>Virtual Beacon Ended: " + reason;

    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();



function updateHandler(data) {
    if (data.LatestResult != null) {
        try {
            var resultMessage = document.getElementById("resultMessage");
            resultMessage.innerHTML = data.LatestResult.Message;
        } catch (err) {
        }
    }
}
