[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppRequest

The request body for: Create partner app.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `client_secret_enabled` | Optional | boolean | Defaults to false: no client secret is generated. Register a public key, JWKS URL, or workload identity to authenticate with a client assertion. Set true explicitly to issue a client secret at creation. Default: `false`. |
| `default_requested_permissions` | Optional | Array of string | Items: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | `permission_manifest[]`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestpermission_manifest). |
| `redirect_uris` | Required | Array of string | Items: minLength: `1`. |

### CreatePartnerAppRequest.permission_manifest[]

One permission a partner app can request, with a title, a description, and the Flint scopes it grants.

Field definitions: [shared fields](PartnerAppPermissionManifestEntryRequestRequestInput.md#partnerapppermissionmanifestentryrequestrequestinput).

