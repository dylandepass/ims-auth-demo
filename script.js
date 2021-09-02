window.adobeid = {
      client_id: 'hlx-ims-auth-demo-stg',
      scope: 'AdobeID,openid',
      locale: 'en_US',
      environment: 'stg1',
      redirect_uri: 'https://main--ims-auth-demo--dylandepass.hlx3.page/extension.html',
      useLocalStorage: false,
      onAccessToken: function (tokenInformation) {
            console.log('Got AccessToken ' + JSON.stringify(tokenInformation));
            document.querySelector('.token').textContent = JSON.stringify(tokenInformation);
      },
      onReauthAccessToken: function (reauthTokenInformation) {
      },
      onError: function (error) {
            console.log('Got Error');
            document.querySelector('.token').html = JSON.stringify(error);
      },
      onAccessTokenHasExpired: function() {
      },
      onReady: function(appState) {
            console.log('On Ready')
      }
};

function login() {
adobeIMS.signIn({
      test: 1,
      }, { say: 'hello' });
}

function logout() {
      adobeIMS.signOut();
}