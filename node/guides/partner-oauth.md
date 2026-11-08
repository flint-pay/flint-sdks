<!-- Package 8.0.0-beta.2; API 2026-09-07 -->

# Partner app OAuth

A partner app installs on a merchant's account through Flint's consent screen, then calls the API with the install's access token. The handwritten helpers in `custom/` build the consent URL, check the callback, and sign the client assertions that token and revoke requests need. See [partner app installs](https://developers.withflintpay.com/docs/guides/partner-app-installs) for credentials, lifetimes and errors.

## Send the merchant to install

`buildAuthorizeUrl` makes no request. It returns the URL to send the merchant's browser to, a random `state`, and the PKCE `codeVerifier` behind its S256 `code_challenge`. Store `state` and `codeVerifier` with this attempt on your server.

Node:

```js
import { buildAuthorizeUrl } from '@flintpay/node/custom/partner-oauth.js';
const { url, state, codeVerifier } = buildAuthorizeUrl({
  clientId: 'fpc_0123456789abcdef',
  redirectUri: 'https://example.com/flint/oauth/callback',
  mode: 'test',
  scope: ['manage_orders', 'read_customers'],
});
// Save state and codeVerifier, then redirect the browser to url.
```

PHP:

```php
use Flint\Partner\OAuth;
$authorize = OAuth::buildAuthorizeUrl([
    'clientId' => 'fpc_0123456789abcdef',
    'redirectUri' => 'https://example.com/flint/oauth/callback',
    'mode' => 'test',
    'scope' => ['manage_orders', 'read_customers'],
]);
// Save $authorize->state and $authorize->codeVerifier, then redirect to $authorize->url.
```

Omit `scope` to request the app's default permissions. `sandboxId` (test mode only), `merchantId` and `baseUrl` are optional. This replaces `oauth.authorizePartnerInstall`, which 8.0.0 removed: `GET /v1/oauth/authorize` redirects a browser to the consent screen, so a call from your server can't complete it.

## Sign client assertions

`privateKeyJwt` signs a new RFC 7523 JWT for every request: `iss` and `sub` are your client ID, `aud` is `https://api.withflintpay.com`, `jti` is unique, and the assertion expires after 120 seconds. It omits the optional `iat`, which Flint rejects when it's ahead of Flint's clock. Use the key registered as a `public_key` credential or published at your `jwks_url`, and pass its `kid` as `keyId`. Node signs ES256, ES384, PS256, RS256 and EdDSA. PHP signs ES256, ES384 and RS256 with ext-openssl, and EdDSA with ext-sodium.

Node:

```js
import { privateKeyJwt } from '@flintpay/node/custom/partner-oauth.js';
const clientAssertion = privateKeyJwt({
  clientId: 'fpc_0123456789abcdef',
  privateKey: process.env.FLINT_PRIVATE_KEY_PEM,
  algorithm: 'ES256',
  keyId: 'backend-2026-10',
});
```

PHP:

```php
use Flint\Partner\PrivateKeyJwt;
$clientAssertion = new PrivateKeyJwt('fpc_0123456789abcdef', getenv('FLINT_PRIVATE_KEY_PEM'), 'ES256', 'backend-2026-10');
```

With a `workload_identity` credential, your OIDC provider's token is the assertion. Request it with `https://api.withflintpay.com` as the audience and return it from your own provider: in Node, an object with `clientId` and `getAssertion()`; in PHP, a class implementing `Flint\Partner\ClientAssertionProvider`.

## Handle the callback

`parseAuthorizeCallback` compares the callback's `state` with the one you stored before reading anything else. It throws `AuthorizeCallbackError` with `error` set to `state_mismatch`, to the callback's OAuth error such as `access_denied`, or to `invalid_request` for a repeated or missing parameter. Exchange the code right away: it expires after 5 minutes and works once.

Node:

```js
import { Client } from '@flintpay/node';
import { exchangeCode, parseAuthorizeCallback } from '@flintpay/node/custom/partner-oauth.js';
const { code } = parseAuthorizeCallback(request.url, { state: saved.state });
const client = new Client({ ambientCredentials: false });
const token = await exchangeCode(client, {
  code,
  redirectUri: 'https://example.com/flint/oauth/callback',
  codeVerifier: saved.codeVerifier,
  clientAssertion,
});
```

PHP:

```php
$callback = OAuth::parseAuthorizeCallback($_SERVER['REQUEST_URI'], $saved['state']);
$client = new \Flint\Client(new \Flint\ClientOptions(ambientCredentials: false));
$token = OAuth::exchangeCode($client, [
    'code' => $callback['code'],
    'redirectUri' => 'https://example.com/flint/oauth/callback',
    'codeVerifier' => $saved['codeVerifier'],
    'clientAssertion' => $clientAssertion,
]);
```

Store the token response as the partner guide describes. Call the API for that merchant with a client whose `token` is the access token and with `ambientCredentials: false`, so a missing token fails instead of using your own `FLINT_API_KEY`.

## Other token requests

`clientAuthentication(clientAssertion)` (PHP `OAuth::clientAuthentication($clientAssertion)`) returns `client_id`, `client_assertion_type` and a fresh `client_assertion` to add to any `oauth.exchangeToken` or `oauth.revokeToken` call. `revokeToken` (PHP `OAuth::revokeToken`) revokes a token with a fresh assertion. Each signed assertion works once, so get a new one for every request.

