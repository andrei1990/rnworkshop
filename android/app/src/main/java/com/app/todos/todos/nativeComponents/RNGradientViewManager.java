package com.app.todos.todos.nativeComponents;

import androidx.annotation.Nullable;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
public class RNGradientViewManager extends SimpleViewManager<RNGradientView> {
    @Override
    public String getName() {
        return "RNGradientView";
    }
    @Override
    protected RNGradientView createViewInstance(ThemedReactContext reactContext) {
        return new RNGradientView(reactContext);
    }
    // Properties
    @ReactProp(name = "progress")
    public void setProgress(RNGradientView view, @Nullable float progress) {
        view.setProgress(progress);
    }
    @ReactProp(name = "cornerRadius")
    public void setCornerRadius(RNGradientView view, @Nullable float cornerRadius) {
        view.setCornerRadius(cornerRadius);
    }
    @ReactProp(name = "fromColor", customType = "Color")
    public void setFromColor(RNGradientView view, @Nullable int color) {
        view.setFromColor(color);
    }
    @ReactProp(name = "toColor", customType = "Color")
    public void setToColor(RNGradientView view, @Nullable int color) {
        view.setToColor(color);
    }
}