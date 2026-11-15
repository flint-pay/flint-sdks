[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPermissionManifestEntryRequestInput

One permission a partner app can request, with a title, a description, and the Flint scopes it grants.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Required | string | What the permission lets the app do, shown to merchants when they approve the install. minLength: `1`. |
| `optional` | Optional | boolean | Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. |
| `permission_id` | Required | string | The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. minLength: `1`. Example: `"manage_orders"`. |
| `required_scopes` | Required | Array of string | The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. Items: minLength: `1`. |
| `title` | Required | string | A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. minLength: `1`. |

