[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAuthorizePreviewPermissionInput

One permission a partner app requests during authorization, with its title, description, and required scopes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Required | string | What the permission lets the app do, from the app's permission manifest. |
| `optional` | Optional | boolean | Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. |
| `permission_id` | Required | string | ID of the permission in the app's permission manifest. Send it in the scope parameter to request this permission. |
| `required_scopes` | Required | Array of string | Flint API scopes this permission grants, sorted. Flint defines them; the title and description come from the partner app. |
| `title` | Required | string | Short name of the permission, from the app's permission manifest. |

