<!-- Package 8.0.0; API 2026-09-07 -->

# Default credentials

The client discovers merchant credentials only when no credential option is passed on the client or request. Passing an empty credential, including `undefined` or `null`, fails with `ConfigurationError` (`credential_missing`) before sending. Set `FLINT_API_KEY` or `FLINT_ACCESS_TOKEN`, use workload identity, or sign in with `flint auth login` for the saved CLI session. Setting both credential variables fails with `credential_conflict`. Explicit credentials take precedence. Anonymous and buyer-scoped calls retain their existing authentication rules.

## GitHub Actions

Configure a Flint workload identity that trusts the repository and job subject, and grant the job `permissions: id-token: write`. Set the non-secret `FLINT_WORKLOAD_IDENTITY_ID`. The SDK requests a GitHub subject token and exchanges it with Flint automatically. Set `FLINT_OIDC_AUDIENCE` when your trusted audience differs from the API origin, and `FLINT_OIDC_SCOPE` to narrow permissions.

Node:

```js
import { Client } from '@flintpay/node';
const client = new Client();
const context = await client.authContext.get();
```

PHP:

```php
$client = new \Flint\Client(new \Flint\ClientOptions());
$context = $client->authContext->get();
```

The default API URL serves sandbox and live mode. Use a `flint_test_` key for your sandbox and a `flint_live_` key for live mode.

## Workload identity sources

Set `FLINT_WORKLOAD_IDENTITY_ID` to your Flint workload identity. `FLINT_OIDC_SOURCE` accepts `auto`, `none`, `token`, `token_file`, `github_actions`, `gitlab_ci`, `kubernetes`, `gcp`, `azure` and `aws`. Source options passed to `workloadIdentityCredentials` override environment settings. Auto discovery selects the first matching source:

1. `FLINT_OIDC_TOKEN`, then `FLINT_OIDC_TOKEN_FILE`.
2. GitHub Actions when `GITHUB_ACTIONS=true`, with `permissions: id-token: write`.
3. GitLab CI when `GITLAB_CI=true`. Configure `id_tokens:` to supply `FLINT_OIDC_TOKEN` with the trusted audience. A missing token error includes the configuration to add.
4. Kubernetes when `KUBERNETES_SERVICE_HOST` is set. Project a token for Flint's audience at `/var/run/secrets/flint/token`, or set `FLINT_OIDC_TOKEN_FILE` to your separate projected token.
5. GCP when `K_SERVICE`, `FUNCTION_TARGET` or `GCE_METADATA_HOST` is set. The SDK requests a metadata identity token for the configured audience; `GCE_METADATA_HOST` overrides the metadata host.
6. Azure when both `IDENTITY_ENDPOINT` and `IDENTITY_HEADER` are set. Set `FLINT_OIDC_AUDIENCE` to your Entra app ID URI; `FLINT_AZURE_CLIENT_ID` selects a user-assigned identity. Explicit Azure selection uses that endpoint pair when present and IMDS otherwise.
7. AWS when `AWS_EXECUTION_ENV` starts with `AWS_Lambda_` or `AWS_ECS_`, or `AWS_LAMBDA_FUNCTION_NAME`, `ECS_CONTAINER_METADATA_URI` or `ECS_CONTAINER_METADATA_URI_V4` is set.

Cloud metadata is not probed without these markers in auto mode. Explicit `kubernetes`, `gcp`, `azure` and `aws` sources work without markers. Token files are reread on every exchange. Neither runtime reads `AWS_WEB_IDENTITY_TOKEN_FILE`, `AZURE_FEDERATED_TOKEN_FILE` or Kubernetes' default service account token, including when a configured file resolves to one of them. `FLINT_OIDC_AUDIENCE` otherwise defaults to the API origin; `FLINT_OIDC_SCOPE` narrows permissions. Set source `none` to disable federation.

### AWS setup

AWS support is optional. Install its SDK only when using source `aws`:

```sh
npm install @aws-sdk/client-sts@^3.1161.0
composer require aws/aws-sdk-php:^3.402.5
```

Node declares an optional peer dependency; PHP lists a Composer suggestion. Without the package, selecting `aws` throws `ConfigurationError` with code `workload_identity_failed`, `workloadIdentity.reason` set to `source_unavailable` and whose description names `@aws-sdk/client-sts` or `aws/aws-sdk-php`.

Configure an AWS region and grant the workload role `sts:GetWebIdentityToken`. The source requests an ES384 subject token using AWS's standard credential chain, including shared profiles, assumed roles, SSO, ECS, EKS Pod Identity and EC2 IMDS. AWS manages credential precedence and refresh. Unset `AWS_WEB_IDENTITY_TOKEN_FILE` and remove `web_identity_token_file` from shared configuration and credentials files, including unused profiles: inbound web identity is refused before invoking the chain. The PHP AWS SDK also requires SimpleXML, which Composer checks during installation.

Direct GCP, Azure and AWS metadata requests bypass environment proxies, refuse redirects and use short timeouts bounded by the request deadline. STS GetWebIdentityToken uses a regional endpoint with proxies and redirects disabled. Node AWS refuses `NODE_USE_ENV_PROXY=1`, `--use-env-proxy` (including `NODE_OPTIONS`) and proxy-configured global HTTP agents; its protected STS handler also reaches nested role and SSO clients.

PHP protects the standard chain's direct ECS/IMDS providers and STS requests. Internal profile-based metadata, assume-role, SSO and login clients do not consistently inherit that protection: their requests can honor environment proxies and follow redirects; nested ECS bypasses proxies but can follow redirects. Use those profile paths only where that AWS SDK behavior is acceptable. Profile subprocesses and internally created clients retain AWS's timeout behavior.

## Saved CLI session

When neither credential environment variable nor a workload identity ID is set, `defaultCredentials()` runs exactly `flint auth token --output json` without a shell. Run `flint auth login` first. Imported API keys cannot be exported and produce `API_KEY_NOT_EXPORTABLE`. Set `FLINT_CLI_CREDENTIALS=0` to disable the CLI process. Output is bounded to 64 KiB per stream and the process to five seconds, within the request deadline. Tokens with `expires_at` share the refresh cache; tokens without expiry are exported for each resolution.

A configured workload identity that fails never falls back to the CLI session. `ambientCredentials: false` disables all implicit discovery, including the CLI process.

The SDK validates the subject token audience and expiry before exchange. Access tokens are cached by origin, workload identity, audience, scope and source, refreshed before expiry, and invalidated for one retry after a 401. No refresh token is stored.

## Explicit providers and tenant isolation

Node exports `defaultCredentials()` and `workloadIdentityCredentials({ workloadIdentityId, source, audience, scope })`. PHP exposes the same functions in the `Flint` namespace and accepts an options array for `workloadIdentityCredentials`. Pass a provider through `apiKey` or a named bearer credential.

For an app that serves multiple merchants, set `ambientCredentials: false` and pass each merchant's credentials explicitly. This prevents missing tenant credentials from using the app's own environment. The option disables automatic discovery; an explicitly supplied provider still runs.

```js
const client = new Client({ ambientCredentials: false });
await client.orders.list(undefined, { apiKey: tenant.flintKey });
```

```php
$client = new \Flint\Client(new \Flint\ClientOptions(ambientCredentials: false));
$client->orders->list(null, new \Flint\RequestOptions(apiKey: $tenant->flintKey));
```

