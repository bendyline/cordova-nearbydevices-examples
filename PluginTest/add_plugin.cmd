@echo off 
pushd bld\debug\
call cordova plugin add https://github.com/Initsogar/cordova-webintent.git
call cordova plugin add https://github.com/Red-Folder/bgs-core.git
call cordova plugin add ..\..\..\..\cordova-nearbydevices\
popd