[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAuthorizePreviewInput

What a partner app is asking to access, shown to a merchant before they approve it, including requested permissions and the redirect URI.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string |  |
| `mode` | Required | string | Values: `"test"`, `"live"`. |
| `name` | Required | string |  |
| `partner_app_id` | Required | string |  |
| `partner_app_version` | Required | integer string | The app’s version. It changes whenever the app is edited. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `redirect_uri` | Required | string |  |
| `requested_permission_ids` | Required | Array of string |  |
| `requested_permissions` | Required | Array of [PartnerAuthorizePreviewPermissionInput](../models/PartnerAuthorizePreviewPermissionInput.md#partnerauthorizepreviewpermissioninput) |  |

