[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppRequestInput

The request body for: Create partner app.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Defaults to false: no client secret is generated. Register a public key, JWKS URL, or workload identity to authenticate with a client assertion. Set true explicitly to issue a client secret at creation. Default: `false`. |
| `default_requested_permissions` | Optional | Array of string | Items: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntryRequestRequestInput](../models/PartnerAppPermissionManifestEntryRequestRequestInput.md#partnerapppermissionmanifestentryrequestrequestinput) |  |
| `redirect_uris` | Required | Array of string | Items: minLength: `1`. |

