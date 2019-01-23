# SuperHubScript V1.0

![Picture of the SuperHubScript]( https://i.imgur.com/GkrVF2V.png)

## Script Requirements
* Virgin Super hub V1.
* Virgin Super hub V2 or V2AC (Untested).
* Firefox with the Greasemonkey addon installed.
* Chrome with the Tampermonkey extension installed.

You can get Greasemonkey [here](https://addons.mozilla.org/en-GB/firefox/addon/greasemonkey/).

You can get Tampermonkey [here](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).

## Features
* Autologin using saved browser credentials (only works on Firefox, on Chrome you will still need to click on the field to be given option the option to fill in the password).
* A Reboot Device button on the homepage allowing for quicker navigation if the user needs to reboot the device.

## Developer Information
Many of the error checking the script does involves checking if the element’s display property has been altered. This is because Virgin made it so that the error dialog is created regardless if there's an error or not. In the event of an error, one of the classes relating to that error type will be made visible to the user. This is done by changing the display property from `display: none;` to `display: block;`
