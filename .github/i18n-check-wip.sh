#!/bin/bash
set -e # abort on errors

check_locales() {
  rootDir=$1
  defaultLocale=$2

  for localeDir in "$1"/*;do
    if [ -d "$localeDir" ];then
      locale=$(sed "s/^$1\\///" <(echo "$localeDir"))
      if [ "$locale" != "$defaultLocale" ]; then
        check_locale "$rootDir" "$defaultLocale" "$locale" "$rootDir/$locale"
      fi
    fi
  done
}

check_locale() {
  rootDir=$1
  defaultLocale=$2
  locale=$3
  dir=$4

  for target in "$dir"/*;do
    if [ -d "$target" ];then
      check_locale "$rootDir" "$defaultLocale" "$locale" "$target"
    elif [ -f "$target" ] && [[ $target == *.json ]]; then
      src=$(sed "s/^$rootDir\\/$locale/$rootDir\\/$defaultLocale/" <(echo "$target"))
      npx attranslate --srcLng=$defaultLocale --targetLng=$defaultLocale --srcFile=$src --targetFile=$target --srcFormat=nested-json --targetFormat=nested-json --service=sync-without-translate
    fi
  done
}

# TODO:FIXME: use remote repo or move this script there
check_locales "locales" "en"
