#!/bin/bash

APP="PsicHelp"

echo "Lembrou de atualizar a version no config.xml?"

echo "Gerando versão de Release para $APP"

ionic cordova build android --prod

if [ "$(hostname)" == 'dg' ]; then
  echo "Primeiro teste no seu celular! $APP"
  ionic run android
fi

cordova build --release android
# cordova plugin add cordova-plugin-console

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk alias_name
rm -f $APP.apk

~/Android/Sdk/build-tools/26.0.2/zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk $APP.apk
