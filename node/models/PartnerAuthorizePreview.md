[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAuthorizePreview

What a partner app is asking to access, shown to a merchant before they approve it, including requested permissions and the redirect URI.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `name` | Required | string |  |
| `partner_app_id` | Required | string |  |
| `partner_app_version` | Required | integer string | The app’s version. It changes whenever the app is edited. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `redirect_uri` | Required | string |  |
| `requested_permission_ids` | Required | Array of string |  |
| `requested_permissions` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | `requested_permissions[]`: [field definitions](../models/PartnerAuthorizePreview.md#partnerauthorizepreviewrequested_permissions). |

### PartnerAuthorizePreview.requested_permissions[]

One permission a partner app requests during authorization, with its title, description, and required scopes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Required | string |  |
| `optional` | Optional | boolean |  |
| `permission_id` | Required | string |  |
| `required_scopes` | Required | Array of string | Flint API scopes this permission grants. Flint defines them; the title and description come from the partner app. |
| `title` | Required | string |  |

