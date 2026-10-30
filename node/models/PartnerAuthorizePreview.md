[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAuthorizePreview

What a partner app is asking to access, shown to a merchant before they approve it, including requested permissions and the redirect URI.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | The app's client ID, as sent in the authorization request. |
| `mode` | Required | string | Whether the install is for test or live mode. Values: `"test"`, `"live"`. |
| `name` | Required | string | The app's current name. |
| `partner_app_id` | Required | string | ID of the partner app asking for access. |
| `partner_app_version` | Required | integer | The app’s version. It changes whenever the app is edited. Format: `int64`. |
| `redirect_uri` | Required | string | The registered redirect URI Flint sends the merchant back to after they approve or deny. |
| `requested_permission_ids` | Required | Array of string | IDs of the requested permissions, sorted. They are the permissions named in scope, or the app's default requested permissions when scope is omitted, plus every required permission. |
| `requested_permissions` | Required | Array of [PartnerAppPermissionManifestEntry](../models/PartnerAppPermissionManifestEntry.md#partnerapppermissionmanifestentry) | The requested permissions with the title, description, and scopes the consent screen shows, in the same order as requested_permission_ids. `requested_permissions[]`: [field definitions](../models/PartnerAuthorizePreview.md#partnerauthorizepreviewrequested_permissions). |

### PartnerAuthorizePreview.requested_permissions[]

One permission a partner app requests during authorization, with its title, description, and required scopes.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Required | string | What the permission lets the app do, from the app's permission manifest. |
| `optional` | Optional | boolean | Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. |
| `permission_id` | Required | string | ID of the permission in the app's permission manifest. Send it in the scope parameter to request this permission. |
| `required_scopes` | Required | Array of string | Flint API scopes this permission grants, sorted. Flint defines them; the title and description come from the partner app. |
| `title` | Required | string | Short name of the permission, from the app's permission manifest. |

