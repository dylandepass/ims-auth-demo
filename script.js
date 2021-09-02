window.adobeid = {
      client_id: 'hlx-ims-auth-demo-stg',
      scope: 'AdobeID,openid',
      locale: 'en_US',
      environment: 'stg1',
      useLocalStorage: false,
      onAccessToken: function (tokenInformation) {
        document.querySelector('.token').html = JSON.stringify(tokenInformation);
      },
      onReauthAccessToken: function (reauthTokenInformation) {
      },
      onError: function (error) {
        document.querySelector('.token').html = JSON.stringify(error);
      },
      onAccessTokenHasExpired: function() {
      },
      onReady: function(appState) {
            console.log('On Ready')
      }
};
