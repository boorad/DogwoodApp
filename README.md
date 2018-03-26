# The Dogwood Invitational App

This is the open source code for the Dogwood mobile application.

## Development

### Mac OS X

#### iOS

 * start up an Apple simulator, choose a device
 * in top level of this project, type `react-native run-ios`

#### Android

 * run Android Studio, Tools | Android | AVD Manager, start up an Android emulator
 * in top level of this project, type `react-native run-android`

## Deployment

If ready for deploy, perform a version bump commit:

    npm version [ major | minor | patch ]

### Android

After version bump, follow instructions here: [https://facebook.github.io/react-native/docs/signed-apk-android.html](https://facebook.github.io/react-native/docs/signed-apk-android.html).  Basically, when everything is set up, do:

    cd android && ./gradlew assembleRelease

Then go to [App Releases](https://play.google.com/apps/publish/?dev_acc=00137341438711124394#ManageReleasesPlace:p=com.dogwood) in the Play Store.
### iOS

After version bump, in the root of this project, type:

    npm run build:ios

In XCode, select Product -> Archive

 * Validate
 * Upload to App Store

In [iTunes Connect](itunesconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/app/1250184426), under My Apps, Dogwood, select "+ Version or Platform", type new version number in, and continue through to submit for review.