// ==UserScript==
// @name     SuperHubScript
// @version  1.0
// @grant    none
// @include http://192.168.0.1/
// @include http://192.168.0.1/VmLogin.asp
// @include http://192.168.0.1/home.asp
// @include http://192.168.0.1/VmRgRebootRestoreDevice.asp
// @include http://192.168.0.1/goform/*
// ==/UserScript==

console.log('SuperHubScript V1.0 is Running.');

const browserIsChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

const windowLocation = window.location.href;

(function() {

    // If the browser is not Chrome (Chrome is not compatible with the autologin feature), sign into the SuperHub using auto filled details from the browser.
    if (browserIsChrome == false) {
        setTimeout(signIn, 1000);
    }

    // Creates a reboot button on the homepage.
    createRebootButton();

})();

function signIn() {

    // If it isn't a login page, don't sign in.
    if ((windowLocation != "http://192.168.0.1/") && (windowLocation != "http://192.168.0.1/VmLogin.asp") && (windowLocation != "http://192.168.0.1/home.asp")) {
        return;
    }

    var singleUserDialogBox = document.getElementsByClassName('ui-dialog ui-widget ui-widget-content ui-corner-all')[1];
  	
    // Checking if the display property is set to 'block' to prevent any further login attempts in the event another user is already signed in.
  	if(singleUserDialogBox.style.display == 'block') {
    		return;
  	}
  
    var invalidPasswordDialogBox = document.getElementsByClassName('ui-dialog ui-widget ui-widget-content ui-corner-all')[2];

    // Checking if the display property is set to 'none' to ensure there's no error being displayed for invalid password.
    if ((invalidPasswordDialogBox.style.display == 'none')) {
        var ff = window.document.VmLogin;
        ff.submit();
        return true;
    } else {
        console.log('%cSuperHubScript Error Message: %cSuperHubScript is unable to log you in. Please check that the username and password entered is correct and that the username and password fields are being autofilled by the browser.', 'color: #6b19ef', 'color: #ef1a1a');
    }
}

function createRebootButton() {
    
    // Checks if the current page is the homepage.
    if (windowLocation.includes("home.asp") && (document.getElementsByClassName('signOut')[0] != undefined)) {

        var advancedSettingsText = document.getElementById('advancedSettings').innerHTML;

        // Checking to see if advanced settings already has a reboot option. If there isn't one, run the following code.
        if (!advancedSettingsText.includes('Reboot Device')) {

            document.getElementById('advancedSettings').style.paddingBottom = "20px";
            document.getElementById('advancedSettings').style.height = "55px";

            var button = document.createElement("button");
            button.setAttribute("id", "reboot-button");

            var node = document.createTextNode("Reboot Device");
            button.appendChild(node);
            button.onclick = function () { window.location.href = "http://192.168.0.1/VmRgRebootRestoreDevice.asp" };

            var element = document.getElementById("advancedSettings");
            element.appendChild(button);

            document.getElementById('reboot-button').style.marginLeft = "20px";
        }
    }
}
