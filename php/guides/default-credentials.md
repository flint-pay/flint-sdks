<!-- Package 6.0.0; API 2026-09-07 -->

# Default credentials

The client discovers merchant credentials when no explicit credential is supplied. Set `FLINT_API_KEY` or `FLINT_ACCESS_TOKEN`, or use workload identity. Setting both credential variables fails with `ambiguous_credentials`. Explicit credentials take precedence. Anonymous and buyer-scoped calls retain their existing authentication rules.

## GitHub Actions

Configure a Flint workload identity that trusts the repository and job subject, and grant the job `permissions: id-token: write`. Set the non-secret `FLINT_WORKLOAD_IDENTITY_ID`. The SDK requests a GitHub subject token and exchanges it with Flint automatically. Set `FLINT_OIDC_AUDIENCE` when your trusted audience differs from the API origin, and `FLINT_OIDC_SCOPE` to narrow permissions.

Node:

```js
import { Client } from '@flintpay/node';
const client = new Client({ baseUrl: 'https://api.staging.withflintpay.com' });
const context = await client.developer.getAuthContext();
```

PHP:

```php
$client = new \Flint\Client(new \Flint\ClientOptions(
    baseUrl: 'https://api.staging.withflintpay.com',
));
$context = $client->developer->getAuthContext();
```

The default API URL is production. Choose staging explicitly when testing.

## Other token sources

`FLINT_OIDC_SOURCE` accepts `auto`, `none`, `token`, `token_file` and `github_actions`. Auto discovery checks `FLINT_OIDC_TOKEN`, then `FLINT_OIDC_TOKEN_FILE`, then the GitHub Actions endpoint when `GITHUB_ACTIONS=true`. For GitLab, map an `id_tokens` JWT with the API origin as its audience to `FLINT_OIDC_TOKEN`. For Kubernetes, set `FLINT_OIDC_TOKEN_FILE` to a projected token whose audience matches the API origin. Files are reread on exchange. Cloud metadata and CLI login sessions are not read automatically in this release.

The SDK validates the subject token audience and expiry before exchange. Access tokens are cached by origin, workload identity, audience, scope and source, refreshed before expiry, and invalidated for one retry after a 401. No refresh token is stored.

## Explicit providers and tenant isolation

Node exports `defaultCredentials()` and `workloadIdentityCredentials({ workloadIdentityId, source, audience, scope })`. PHP exposes the same functions in the `Flint` namespace and accepts an options array for `workloadIdentityCredentials`. Pass a provider through `apiKey` or a named bearer credential.

For an app that serves multiple merchants, set `ambientCredentials: false` and pass each merchant's credentials explicitly. This prevents missing tenant credentials from using the app's own environment. The option disables automatic discovery; an explicitly supplied provider still runs.
