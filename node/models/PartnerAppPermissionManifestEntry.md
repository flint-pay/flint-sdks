[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPermissionManifestEntry







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Required | string |  |
| `optional` | Optional | boolean |  |
| `permission_id` | Required | string |  |
| `required_scopes` | Required | Array of string |  |
| `title` | Required | string |  |

### PartnerAppPermissionManifestEntry variant 1

anyOf variant 1: Declared schema PartnerAppPermissionManifestEntry. One permission a partner app can request, with a title, a description, and the Flint scopes it grants..

- Constraints for `description`: minLength: `1`.
- Constraints for `permission_id`: minLength: `1`.
- Constraints for `required_scopes`: Items: minLength: `1`.
- Constraints for `title`: minLength: `1`.

### PartnerAppPermissionManifestEntry variant 2

anyOf variant 2: Declared schema PartnerAppPermissionManifestEntryRequestRequest. One permission a partner app can request, with a title, a description, and the Flint scopes it grants..

- Constraints for `description`: minLength: `1`.
- Constraints for `permission_id`: minLength: `1`.
- Constraints for `required_scopes`: Items: minLength: `1`.
- Constraints for `title`: minLength: `1`.

### PartnerAppPermissionManifestEntry variant 3

anyOf variant 3: Declared schema PartnerAuthorizePreviewPermission. One permission a partner app requests during authorization, with its title, description, and required scopes..

- Constraints for `required_scopes`: Flint API scopes this permission grants. Flint defines them; the title and description come from the partner app.

