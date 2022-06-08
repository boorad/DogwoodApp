# The Dogwood Invitational App

This is the open source code for the Dogwood mobile application.

## Development

### Mac OS X

#### iOS

 * start up an Apple simulator, choose a device
 * in top level of this project, type `yarn run ios`
 * build problems like [here](https://github.com/facebook/react-native/issues/19529)?  try:

        cd ./node_modules/react-native && scripts/ios-install-third-party.sh && cd third-party && cd $(ls | grep 'glog' | awk '{print $1}') && ./configure`
        cd ../../../../  {back to base dir}
        cp ios/build/Build/Products/Debug-iphonesimulator/libfishhook.a node_modules/react-native/Libraries/WebSocket/

#### Android

 * run Android Studio, Tools | Android | AVD Manager, start up an Android emulator
 * in top level of this project, type `yarn run android`

## Deployment

If ready for deploy, perform a version bump commit:

    npm version [ major | minor | patch ]

### Android

After version bump, follow instructions here: [https://reactnative.dev/docs/signed-apk-android](https://reactnative.dev/docs/signed-apk-android).

Make sure ~/.gradle/gradle.properties has the following (get pwd from 1password):

    DOGWOODAPP_RELEASE_STORE_FILE=dogwood-release-key.keystore
    DOGWOODAPP_RELEASE_KEY_ALIAS=dogwood-key-alias
    DOGWOODAPP_RELEASE_STORE_PASSWORD=************
    DOGWOODAPP_RELEASE_KEY_PASSWORD==************

Basically, when everything is set up, do:

    yarn run build:android
    cd android && ./gradlew bundleRelease

Then go to [App Releases](https://play.google.com/apps/publish/?dev_acc=00137341438711124394#ManageReleasesPlace:p=com.thedogwood) in the Play Store.  Upload the AAB file found at ```./android/app/build/outputs/bundle/release/app-release.aab```

### iOS

After version bump, in the root of this project, type:

    yarn run build:ios

In XCode:
 * choose "Any iOS Device" for build target
 * select Product -> Archive

    * Validate
    * Upload to App Store

In [App Store Connect](https://appstoreconnect.apple.com/apps/1250184426/appstore/ios/version/inflight), under My Apps, Dogwood, select "+ Version or Platform", type new version number in, and continue through to submit for review.