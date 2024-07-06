---
title: Creating APK
menu:
  sidebar:
    name: APK
    identifier: apk
    weight: 20
---


Setting Up Your Cordova Project for Android
===========================================

Step 1\. Install Required Tools
--------------------------

### a. Install Java 21

##### Download Java 21:

*   [Download from Eclipse Adoptium](https://adoptium.net/releases.html?variant=openjdk21)

##### Set JAVA\_HOME:

**Windows:** `Control Panel > System > Advanced System Settings > Environment Variables`

    setx JAVA_HOME "C:\Program Files\Eclipse Adoptium\jdk-21.0.3.9-hotspot"
    setx PATH "%JAVA_HOME%\bin;%PATH%"
    

### b. Install Android Studio

#### Download Android Studio:

*   [Download from Android Studio Download Page](https://developer.android.com/studio)

#### Configure Android SDK:

*   Open Android Studio, go to `Configure > SDK Manager`.
*   Install necessary SDK packages.

#### Set ANDROID\_HOME and ANDROID\_SDK\_ROOT:

**Windows:** Control Panel > System > Advanced System Settings > Environment Variables

    setx ANDROID_HOME "C:\Path\To\Android\sdk"
    setx ANDROID_SDK_ROOT "C:\Path\To\Android\sdk"
    setx PATH "%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;%PATH%"
    

### c. Install Gradle

#### Download Gradle:

*   [Download from Gradle Download Page](https://gradle.org/releases/)

#### Set GRADLE\_HOME:

Extract Gradle to a directory (e.g., `C:\Gradle` on Windows).

    setx GRADLE_HOME "C:\Gradle"
    setx PATH "%GRADLE_HOME%\bin;%PATH%"
    

#### Verify Installation:

    gradle -v
    

Step 2\. Install Cordova and Create Project
--------------------------------------

### a. Install Cordova CLI

Install Cordova globally:

    npm install -g cordova
    

### b. Create a New Cordova Project

Create a new project named "Gowra":

    cordova create Gowra com.example.gowra Gowra
    

### c. Navigate to Project Directory

    cd Gowra
    

### d. Add Android Platform

Add Android platform(Complete step 3 before):

    cordova platform add android
    
Step 3\. Files in Static Folder
-------------------------------

### Service Worker (`service-worker.js`)

This service worker caches resources for offline use:

    self.addEventListener('install', function(event) {
        event.waitUntil(
          caches.open('gowra-cache').then(function(cache) {
            return cache.addAll([
              '/',
              '/index.html',
              '/styles.css',
              '/script.js',
              '/icon-192x192.png',
              '/icon-512x512.png'
            ]);
          })
        );
    });
    
    self.addEventListener('fetch', function(event) {
        event.respondWith(
          caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
          })
        );
    });
    

### Manifest (`manifest.json`)

This manifest file defines the app's metadata and icons:

    {
        "name": "Gowra",
        "short_name": "Gowra",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#000000",
        "icons": [
            {
                "src": "/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
    }

### params (config.yaml or hugo.yaml)
On params:
```
 params:
    enableServiceWorker: true
    enableManifest: true
    serviceWorkerScope: "/"
    manifest: "/manifest.json"
```


Step 4\. Configure Project Settings
------------------------------

### a. Update minSdkVersion to 21

#### Update `config.xml`

    <platform name="android">
        <preference name="android-minSdkVersion" value="21" />
        <!-- Other preferences and configurations -->
    </platform>
    

#### Update `build.gradle`

Navigate to `platforms/android/app/build.gradle`:

    android {
        ...
        defaultConfig {
            ...
            minSdkVersion 21
            ...
        }
        ...
    }
    

Step 5\. Build Your Cordova Project
------------------------------

Clean and build your project:

    cordova clean android
    cordova build android
    

Step 6\. Find Your APK
-----------------

Once build completes successfully, APK location:

    Gowra/platforms/android/app/build/outputs/apk/debug/app-debug.apk
    



This guide provides step-by-step instructions to set up your environment, create a Cordova project, configure it for Android, and build an APK. Adjust paths and specifics according to your environment as needed.