[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPermissionManifestEntry







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Required | string |  |
| `optional` | Optional | boolean | Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. |
| `permission_id` | Required | string | Example: `"manage_orders"`. |
| `required_scopes` | Required | Array of string |  |
| `title` | Required | string |  |

### PartnerAppPermissionManifestEntry variant 1

anyOf variant 1: Declared schema PartnerAppPermissionManifestEntry. One permission a partner app can request, with a title, a description, and the Flint scopes it grants..

- Constraints for `description`: What the permission lets the app do, shown to merchants when they approve the install. minLength: `1`.
- Constraints for `permission_id`: The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. minLength: `1`.
- Constraints for `required_scopes`: The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. Items: minLength: `1`.
- Constraints for `title`: A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. minLength: `1`.

### PartnerAppPermissionManifestEntry variant 2

anyOf variant 2: Declared schema PartnerAppPermissionManifestEntryRequest. One permission a partner app can request, with a title, a description, and the Flint scopes it grants..

- Constraints for `description`: What the permission lets the app do, shown to merchants when they approve the install. minLength: `1`.
- Constraints for `permission_id`: The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. minLength: `1`.
- Constraints for `required_scopes`: The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. Items: minLength: `1`.
- Constraints for `title`: A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. minLength: `1`.

### PartnerAppPermissionManifestEntry variant 3

anyOf variant 3: Declared schema PartnerAuthorizePreviewPermission. One permission a partner app requests during authorization, with its title, description, and required scopes..

- Constraints for `description`: What the permission lets the app do, from the app's permission manifest.
- Constraints for `permission_id`: ID of the permission in the app's permission manifest. Send it in the scope parameter to request this permission.
- Constraints for `required_scopes`: Flint API scopes this permission grants, sorted. Flint defines them; the title and description come from the partner app.
- Constraints for `title`: Short name of the permission, from the app's permission manifest.

