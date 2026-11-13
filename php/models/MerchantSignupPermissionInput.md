[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantSignupPermissionInput

A permission the code email asked the owner to approve, as the app's manifest stated it when the signup was created.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Required | string | The permission's description. |
| `permission_id` | Required | string | The manifest permission ID. Example: `"manage_orders"`. |
| `required_scopes` | Required | Array of string | The Flint scopes the permission grants. |
| `title` | Required | string | The permission's title, as the code email showed it. |

