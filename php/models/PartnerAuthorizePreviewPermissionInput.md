[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAuthorizePreviewPermissionInput

One permission a partner app requests during authorization, with its title, description, and required scopes.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Required | string |  |
| `optional` | Optional | boolean |  |
| `permission_id` | Required | string |  |
| `required_scopes` | Required | Array of string | Flint API scopes this permission grants. Flint defines them; the title and description come from the partner app. |
| `title` | Required | string |  |

