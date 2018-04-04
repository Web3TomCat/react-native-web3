
package com.mobile;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;


import com.reactnativenavigation.NavigationApplication;

import com.bitgo.randombytes.RandomBytesPackage;
public class MainApplication extends NavigationApplication {

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
          new RandomBytesPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }
    @Override
     public void onCreate() {
       super.onCreate();
       SoLoader.init(this, /* native exopackage */ false);
     }
    @Override
    public String getJSMainModuleName() {
        return "index";
    }

}



