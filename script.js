const status = document.querySelector('.status');
const token = document.querySelector('.token');

window.adobeid = {
      client_id: 'hlx-ims-auth-demo-stg',
      scope: 'AdobeID,openid',
      locale: 'en_US',
      environment: 'stg1',
      redirect_uri: 'https://main--ims-auth-demo--dylandepass.hlx3.page/index.html',
      useLocalStorage: false,
      onAccessToken: function (tokenResponse) {
            status.textContent = "Status: Logged In";
            token.textContent = `Token: ${adobeIMS.getAccessToken().token}`;
      },
      onReauthAccessToken: function (reauthTokenInformation) {
      },
      onError: function (error) {
            status.textContent = "Status: Error";
            token.textContent = JSON.stringify(error);
      },
      onAccessTokenHasExpired: function() {
            status.textContent = "Status: Expired";
      },
      onReady: function(appState) {
            token.textContent = `Token: ${adobeIMS.getAccessToken().token}`;
      }
};

function login() {
      adobeIMS.signIn();
}

function logout() {
      adobeIMS.signOut();
      status.textContent = "Status: Logged Out";
}
