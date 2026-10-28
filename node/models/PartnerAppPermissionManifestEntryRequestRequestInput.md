[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPermissionManifestEntryRequestRequestInput

Request input. Response: [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry).

One permission a partner app can request, with a title, a description, and the Flint scopes it grants.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Required | string | minLength: `1`. |
| `optional` | Optional | boolean |  |
| `permission_id` | Required | string | minLength: `1`. |
| `required_scopes` | Required | Array of string | Items: minLength: `1`. |
| `title` | Required | string | minLength: `1`. |

