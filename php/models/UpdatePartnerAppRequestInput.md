[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdatePartnerAppRequestInput

The request body for: Update partner app.

minProperties: `1`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Conditional | string | minLength: `1`. |
| `client_secret_enabled` | Conditional | boolean |  |
| `default_requested_permissions` | Conditional | Array of string | Replaces the default requested permission IDs. Each ID must exist in the manifest. Items: minLength: `1`. |
| `expected_api_version` | Optional | string | Apply api_version only if this matches the resource's current api_version. A mismatch returns HTTP 409. Requires api_version; null is not accepted. minLength: `1`. |
| `expected_version` | Optional | integer | Apply only if this matches the app’s current version. Required with permission_manifest; a mismatch returns HTTP 409 VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `name` | Conditional | string | minLength: `1`. |
| `permission_manifest` | Conditional | Array of [PartnerAppPermissionManifestEntryRequestInput](../models/PartnerAppPermissionManifestEntryRequestInput.md#partnerapppermissionmanifestentryrequestinput) | Replaces the whole manifest. Existing permissions can drop scopes but cannot gain them; existing grants narrow immediately. Requires expected_version. |
| `redirect_uris` | Conditional | Array of string | Replaces the entire list of registered redirect URIs. Items: minLength: `1`. |

### UpdatePartnerAppRequestInput variant 1

anyOf variant 1.

- Required: `client_secret_enabled`.
- Optional: `api_version`, `default_requested_permissions`, `name`, `permission_manifest`, `redirect_uris`.

### UpdatePartnerAppRequestInput variant 2

anyOf variant 2.

- Required: `name`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `permission_manifest`, `redirect_uris`.

### UpdatePartnerAppRequestInput variant 3

anyOf variant 3.

- Required: `redirect_uris`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `name`, `permission_manifest`.

### UpdatePartnerAppRequestInput variant 4

anyOf variant 4.

- Required: `permission_manifest`.
- Optional: `api_version`, `client_secret_enabled`, `default_requested_permissions`, `name`, `redirect_uris`.

### UpdatePartnerAppRequestInput variant 5

anyOf variant 5.

- Required: `default_requested_permissions`.
- Optional: `api_version`, `client_secret_enabled`, `name`, `permission_manifest`, `redirect_uris`.

### UpdatePartnerAppRequestInput variant 6

anyOf variant 6.

- Required: `api_version`.
- Optional: `client_secret_enabled`, `default_requested_permissions`, `name`, `permission_manifest`, `redirect_uris`.

