[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppRequestInput

The request body for: Create partner app.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Optional | string | minLength: `1`. |
| `default_requested_permissions` | Optional | Array of string | Items: minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `permission_manifest` | Required | Array of [PartnerAppPermissionManifestEntryInput](../models/PartnerAppPermissionManifestEntryInput.md#partnerapppermissionmanifestentryinput) |  |
| `redirect_uris` | Required | Array of string | Items: minLength: `1`. |

