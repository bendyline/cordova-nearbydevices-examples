pushd bld\debug\
call cordova plugin remove com.Bendyline.NearbyDevices
call cordova plugin add ..\..\..\..\cordova-nearbydevices\
popd
call run_android.cmd