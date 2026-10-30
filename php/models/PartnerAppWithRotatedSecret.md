[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppWithRotatedSecret

A partner app returned with its newly issued client secret after rotation.

An application that merchants can authorize to access their accounts.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_scopes` | Required | Array of string | Every Flint scope the app can hold: the union of required_scopes across the manifest. An install grants only the scopes of the permissions the merchant approves. |
| `api_version` | Required | string | API version for requests the app makes with its install tokens that send no Flint-Version header. |
| `api_version_changed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `api_version_previous` | Optional | string | Version the app used before its last upgrade. Present while a rollback is available. To roll back, send it as api_version. |
| `client_id` | Required | string | Public identifier the app sends as client_id in OAuth authorization and token requests. Doesn't change. |
| `client_secret_enabled` | Required | boolean | Whether the app can authenticate with a client secret. When false, it authenticates with a registered credential. |
| `client_secret_last_used_at` | Required | string or null | RFC3339 timestamp. Format: `date-time`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `default_requested_permissions` | Required | Array of string | IDs of the permissions requested when an authorization request sends no scope. Defaults to every permission in the manifest that isn't optional. |
| `name` | Required | string | The app's name, shown to merchants on the consent screen. |
| `partner_app_id` | Required | string |  |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | Permissions the app can request from merchants. Each lists the Flint scopes it grants. |
| `previous_secret_expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `redirect_uris` | Required | Array of string | Redirect URIs the app can use after authorization. Each is an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. |
| `status` | Required | string | Values: `"active"`, `"archived"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `version` | Required | integer | Starts at 1 and increases by 1 each time the app is updated, its client secret is rotated, or it is deleted. Send it as expected_version to apply an update only to the version you read. Format: `uint64`. minimum: `1`. |
| `client_secret` | Required | string | Newly issued client secret, returned only once after rotation. |

