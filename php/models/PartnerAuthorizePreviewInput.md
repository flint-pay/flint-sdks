[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAuthorizePreviewInput

What a partner app is asking to access, shown to a merchant before they approve it, including requested permissions and the redirect URI.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | The app's client ID, as sent in the authorization request. |
| `mode` | Required | string | Whether the install is for test or live mode. Values: `"test"`, `"live"`. |
| `name` | Required | string | The app's current name. |
| `partner_app_id` | Required | string | ID of the partner app asking for access. |
| `partner_app_version` | Required | integer | The app’s version. It changes whenever the app is edited. Format: `int64`. |
| `redirect_uri` | Required | string | The registered redirect URI Flint sends the merchant back to after they approve or deny. |
| `requested_permission_ids` | Required | Array of string | IDs of the requested permissions, sorted. They are the permissions named in scope, or the app's default requested permissions when scope is omitted, plus every required permission. |
| `requested_permissions` | Required | Array of [PartnerAuthorizePreviewPermissionInput](../models/PartnerAuthorizePreviewPermissionInput.md#partnerauthorizepreviewpermissioninput) | The requested permissions with the title, description, and scopes the consent screen shows, in the same order as requested_permission_ids. |

