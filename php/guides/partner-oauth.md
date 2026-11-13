<!-- Package 8.0.0; API 2026-09-07 -->

# Partner app OAuth

A partner app installs on a merchant's account through Flint's consent screen, then calls the API for that merchant with partner app tokens. The handwritten helpers in `custom/` build the consent URL, check the callback, sign the client assertions that token and revoke requests need, and mint and cache partner app tokens. See [partner app installs](https://developers.withflintpay.com/docs/guides/partner-app-installs) for credentials, lifetimes and errors.

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

The exchange activates the install and returns a partner app token bound to that merchant. It lasts up to 900 seconds and comes with no refresh token. Store the response's IDs as the partner guide describes, and mint new tokens with `partnerAppTokens` from then on.

## Call the API for installed merchants

`partnerAppTokens` mints partner app tokens with `grant_type=client_credentials` and a fresh client assertion, one mode per instance. Each provider caches its token until 60 seconds before expiry (`refreshBeforeSeconds`) and mints once for concurrent requests. If a refresh fails while the token is still valid, it keeps serving that token and tries again 5 seconds later. When a replay-safe request gets a 401, the provider drops the token and the SDK retries once. Set `ambientCredentials: false` so a missing token fails instead of using your own `FLINT_API_KEY`.

A backend that serves many merchants should cache one app-level token per mode per process: pass `app()` as the client's `token` and name the merchant in each call's `Flint-Merchant-Id` param. For a component that serves one merchant, such as a per-tenant worker, `forMerchant(merchantId)` returns a provider for a merchant-bound token, so calls need no `Flint-Merchant-Id`. Providers are kept for each merchant you pass. Each app can mint 600 tokens a minute, so don't create a merchant-bound provider per request or per merchant in a shared backend.

Node:

```js
import { Client } from '@flintpay/node';
import { partnerAppTokens } from '@flintpay/node/custom/partner-oauth.js';
const tokens = partnerAppTokens(new Client({ ambientCredentials: false }), { clientAssertion, mode: 'live' });
const client = new Client({ token: tokens.app(), ambientCredentials: false });
const orders = await client.orders.list({ 'Flint-Merchant-Id': 'mer_01KEZF7C00KPYH1DDFPCCX3B6E' });
// A single-merchant worker can bind its token instead:
const worker = new Client({ token: tokens.forMerchant('mer_01KEZF7C00KPYH1DDFPCCX3B6E'), ambientCredentials: false });
```

PHP:

```php
use Flint\Partner\PartnerAppTokens;
$tokens = new PartnerAppTokens(new \Flint\Client(new \Flint\ClientOptions(ambientCredentials: false)), $clientAssertion, 'live');
$client = new \Flint\Client(new \Flint\ClientOptions(token: $tokens->app(), ambientCredentials: false));
$orders = $client->orders->list(['Flint-Merchant-Id' => 'mer_01KEZF7C00KPYH1DDFPCCX3B6E']);
```

Calling `getCredential()` yourself surfaces a failed mint's API error, such as `invalid_client`. Inside a request, a failed mint is reported as `credential_provider_failed`.

## Other token requests

`clientAuthentication(clientAssertion)` (PHP `OAuth::clientAuthentication($clientAssertion)`) returns `client_id`, `client_assertion_type` and a fresh `client_assertion` to add to any `oauth.exchangeToken` or `oauth.revokeToken` call. `revokeToken` (PHP `OAuth::revokeToken`) revokes a token with a fresh assertion. Each signed assertion works once, so get a new one for every request.

