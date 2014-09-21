@echo off 
pushd bld\debug\
call cordova plugin remove com.Bendyline.NearbyDevices
call cordova plugin remove com.borismus.webintent
call cordova plugin remove com.red_folder.phonegap.plugin.backgroundservice
popd