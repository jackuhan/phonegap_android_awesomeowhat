cordova.define("com.ohh2ahh.plugins.appavailability.AppAvailability", function(require, exports, module) { var appAvailability = {

    check: function(urlScheme, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "AppAvailability",
            "checkAvailability",
            [urlScheme]
        );
    },

    share: function(text, image, url, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "AppAvailability",
            "share",
            [text, image, url]
        );
    },

    weiboLogin: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "AppAvailability",
            "weiboLogin",
            []
        );
    },

    qqLogin: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "AppAvailability",
            "qqLogin",
            []
        );
    },

    feedback: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "AppAvailability",
            "feedback",
            []
        );
    },

    checkUpdate: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            "AppAvailability",
            "checkUpdate",
            []
        );
    },

    checkBool: function(urlScheme, callback) {
        cordova.exec(
            function(success) { callback(success); },
            function(error) { callback(error); },
            "AppAvailability",
            "checkAvailability",
            [urlScheme]
        );
    }

};

module.exports = appAvailability;

});
