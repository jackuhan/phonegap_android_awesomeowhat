package com.phonegap.owhat;

import android.os.Bundle;
import com.phonegap.*;

public class Sample extends DroidGap {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/index.html");
	}
}
    
