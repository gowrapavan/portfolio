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

1\. Install Required Tools
--------------------------

### a. Install Java 21

#### Download and Install Java 21:

*   Visit the [Eclipse Adoptium Java 21 Download Page](https://adoptium.net/releases.html?variant=openjdk21) and download the installer.
*   Run the installer and follow the on-screen instructions to install Java 21.

#### Set JAVA\_HOME Environment Variable:

After installing Java 21, you need to set the JAVA\_HOME environment variable:

**Windows:**

*   Open Control Panel and go to System and Security > System > Advanced system settings.
*   Click on Environment Variables, then click New under System variables.
*   Set the variable name to `JAVA_HOME` and the variable value to the path of your Java installation, for example: `C:\Program Files\Eclipse Adoptium\jdk-21.0.3.9-hotspot`.
*   Click OK, then find the Path variable in the System variables section, select it, and click Edit.
*   Click New and add `%JAVA_HOME%\bin` to the list. Click OK to save.
`Control Panel > System > Advanced System Settings > Environment Variables`

         setx JAVA_HOME "C:\Program Files\Eclipse Adoptium\jdk-21.0.3.9-hotspot"
         setx PATH "%JAVA_HOME%\bin;%PATH%"
    

    

### b. Install Android Studio

#### Download Android Studio:

*   Visit the [Android Studio Download Page](https://developer.android.com/studio) and download the installer.
*   Run the installer and follow the on-screen instructions to install Android Studio.

#### Configure Android SDK:

*   Open Android Studio, click on `Configure > SDK Manager`.
*   Ensure that the required SDK packages are installed. At a minimum, you should install the SDK Platform for the latest Android version, Android SDK Build-Tools, and Android SDK Tools.

#### Set ANDROID\_HOME and ANDROID\_SDK\_ROOT Environment Variables:

**Windows:**

*   Open Control Panel and go to System and Security > System > Advanced system settings.
*   Click on Environment Variables, then click New under System variables.
*   Set the variable name to `ANDROID_HOME` and the variable value to the path of your Android SDK installation, for example: `C:\Path\To\Android\sdk`.
*   Click OK, then create another new variable with the name `ANDROID_SDK_ROOT` and the same value as `ANDROID_HOME`.
*   Click OK, then find the Path variable in the System variables section, select it, and click Edit.
*   Click New and add `%ANDROID_HOME%\tools` and `%ANDROID_HOME%\platform-tools` to the list. Click OK to save.

          setx ANDROID_HOME "C:\Path\To\Android\sdk"
          setx ANDROID_SDK_ROOT "C:\Path\To\Android\sdk"
          setx PATH "%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;%PATH%"
    

### c. Install Gradle

#### Download and Install Gradle:

*   Visit the [Gradle Releases Page](https://gradle.org/releases/) and download the latest version of Gradle.
*   Extract the downloaded zip file to a directory (e.g., `C:\Gradle`).

#### Set GRADLE\_HOME Environment Variable:

**Windows:**

*   Open Control Panel and go to System and Security > System > Advanced system settings.
*   Click on Environment Variables, then click New under System variables.
*   Set the variable name to `GRADLE_HOME` and the variable value to the path of your Gradle installation, for example: `C:\Gradle`.
*   Click OK, then find the Path variable in the System variables section, select it, and click Edit.
*   Click New and add `%GRADLE_HOME%\bin` to the list. Click OK to save.

         setx GRADLE_HOME "C:\Gradle"
         setx PATH "%GRADLE_HOME%\bin;%PATH%"
    

#### Verify Gradle Installation:

    gradle -v
    

2\. Install Cordova and Create Project
--------------------------------------

### a. Install Cordova CLI

Open a command prompt and run the following command to install Cordova globally:

    npm install -g cordova
    

### b. Create a New Cordova Project

Create a new Cordova project named "Gowra" by running the following command:

    cordova create Gowra com.example.gowra Gowra
    

### c. Navigate to Project Directory

Change to the project directory:

    cd Gowra
    

### d. Add Android Platform(do step 3)

Add the Android platform to your Cordova project:

    cordova platform add android
    
3\. Service Worker and Manifest
-------------------------------

### Service Worker (`service-worker.js`)

Create a file named `service-worker.js` in your project root and add the following code to cache resources for offline use:

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

Create a file named `manifest.json` in your `/static` directory and add the following code to define the app's metadata and icons:

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
   

4\. Configure Project Settings
------------------------------

### a. Update minSdkVersion to 21

#### Update `config.xml`

Open the `config.xml` file in your project and add the following within the `<preference name="android-minSdkVersion" value="21" />
` section:

    <?xml version='1.0' encoding='utf-8'?>
    <widget id="netlify.app.gowra" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
        <name>Gowra</name>
        <description>A Hugo PWA wrapped as a native app</description>
        <author email="gowrapavankumar2004@example.com" href="https://gowra.netlify.app">Your Name</author>
        <content src="https://gowra.netlify.app" />
        <preference name="DisallowOverscroll" value="true" />
        <preference name="android-minSdkVersion" value="21" />
        <preference name="BackupWebStorage" value="none" />
        <preference name="SplashScreenDelay" value="3000" />
        <platform name="android">
            <icon src="www/img/r-favicon-r2.png" />
        </platform>
        <platform name="ios">
            <icon src="www/img/r-favicon-r2.png" />
        </platform>
    </widget>

    

#### Update `build.gradle`

Navigate to `platforms/android/app/build.gradle` and update the `minSdkVersion` to 21:

    android {
        ...
        defaultConfig {
            ...
            minSdkVersion 21
            ...
        }
        ...
    }

#### IMPORTANT `UPDATE` 

Copy every thing in the public directory to the `www` in the `Project Directory` :

     public/    ---->    Gowra/www/

if you using hugo than Add `baseof.html` in both `public` and `www`
#### ``baseof.html`` :
           <!DOCTYPE html>
           <html lang="en">
           <head>
             <!-- Other head elements -->
             <link rel="manifest" href="/manifest.json">
           </head>
           <body>
             {{ block "main" . }}{{ end }}
             <script>
               if ('serviceWorker' in navigator) {
                 navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
                   console.log('ServiceWorker registration successful with scope: ', registration.scope);
                 }, function(error) {
                   console.log('ServiceWorker registration failed: ', error);
                 });
               }
             </script>
           </body>
           </html>

Also change the `index.html` in the `www`:

              <!DOCTYPE html>
                   <!--
             Licensed to the Apache Software Foundation (ASF) under one
              or more contributor license agreements.  See the NOTICE file
            distributed with this work for additional information
            regarding copyright ownership.  The ASF licenses this file
            to you under the Apache License, Version 2.0 (the
            "License"); you may not use this file except in compliance
            with the License.  You may obtain a copy of the License at
                http://www.apache.org/licenses/LICENSE-2.0
            Unless required by applicable law or agreed to in writing,
            software distributed under the License is distributed on an
            "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
             KIND, either express or implied.  See the License for the
            specific language governing permissions and limitations
            under the License. -->
                 <html>
            <head>
                <meta charset="utf-8">
                <!--
                Customize this policy to fit your own app's needs. For more guidance, please refer to the docs:
                    https://cordova.apache.org/docs/en/latest/
                Some notes:
                    * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
                    * Disables use of inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
                * Enable inline JS: add 'unsafe-inline' to default-src
                -->
                <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;">
                <meta name="format-detection" content="telephone=no">
                <meta name="msapplication-tap-highlight" content="no">
                <meta name="viewport" content="initial-scale=1, width=device-width, viewport-fit=cover">
                <meta name="color-scheme" content="light dark">
                <link rel="stylesheet" href="css/index.css">
                <title>Hello World</title>
            </head>
            <body>
                <div class="app">
                    <h1>Apache Cordova</h1>
                    <div id="deviceready" class="blink">
                        <p class="event listening">Connecting to Device</p>
                        <p class="event received">Device is Ready</p>
                    </div>
                </div>
                <script src="cordova.js"></script>
                <script src="js/index.js"></script>
            </body>
         </html>



5\. Build Your Cordova Project
------------------------------

Clean and build your Cordova project by running the following commands:

    cordova clean android
    cordova build android
    

6\. Find Your APK
-----------------

Once the build completes successfully, your APK will be located at:

    Gowra/platforms/android/app/build/outputs/apk/debug/app-debug.apk
    

 

This guide provides step-by-step instructions to set up your environment, create a Cordova project, configure it for Android, and build an APK. Adjust paths and specifics according to your environment as needed.