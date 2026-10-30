[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppRequestInput

The request body for: Create partner app.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | API version for requests the app makes with its install tokens that send no Flint-Version header. Defaults to the version of this request and can't be newer than it. minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Defaults to false: no client secret is generated. Register a public key, JWKS URL, or workload identity to authenticate with a client assertion. Set true explicitly to issue a client secret at creation. Default: `false`. |
| `default_requested_permissions` | Optional | Array of string | IDs of the permissions requested when an authorization request sends no scope. Each must be in permission_manifest. Defaults to every permission that isn't optional. Items: minLength: `1`. |
| `name` | Required | string | The app's name, shown to merchants on the consent screen. minLength: `1`. |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Permissions the app can request from merchants. At least one is required. Each lists the Flint scopes it grants. |
| `redirect_uris` | Required | Array of string | Redirect URIs the app can use after authorization. Each must be an absolute HTTPS URL, or HTTP on localhost or a loopback address, with no fragment. At least one is required. Items: minLength: `1`. |

