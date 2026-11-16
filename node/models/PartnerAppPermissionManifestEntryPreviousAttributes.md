[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPermissionManifestEntryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null | What the permission lets the app do, shown to merchants when they approve the install. `description`: [declared alternatives](../models/PartnerAppPermissionManifestEntryPreviousAttributes.md#partnerapppermissionmanifestentrypreviousattributesdescription). |
| `optional` | Optional | boolean or null | Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. `optional`: [declared alternatives](../models/PartnerAppPermissionManifestEntryPreviousAttributes.md#partnerapppermissionmanifestentrypreviousattributesoptional). |
| `permission_id` | Optional | string or null | The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. `permission_id`: [declared alternatives](../models/PartnerAppPermissionManifestEntryPreviousAttributes.md#partnerapppermissionmanifestentrypreviousattributespermission_id). |
| `required_scopes` | Optional | Array of string or null | The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. `required_scopes`: [declared alternatives](../models/PartnerAppPermissionManifestEntryPreviousAttributes.md#partnerapppermissionmanifestentrypreviousattributesrequired_scopes). |
| `title` | Optional | string or null | A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. `title`: [declared alternatives](../models/PartnerAppPermissionManifestEntryPreviousAttributes.md#partnerapppermissionmanifestentrypreviousattributestitle). |

### PartnerAppPermissionManifestEntryPreviousAttributes.description

### PartnerAppPermissionManifestEntryPreviousAttributes.description variant 1

anyOf variant 1: What the permission lets the app do, shown to merchants when they approve the install..

- Value shape: string. What the permission lets the app do, shown to merchants when they approve the install. What the permission lets the app do, shown to merchants when they approve the install. minLength: `1`. 

### PartnerAppPermissionManifestEntryPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. What the permission lets the app do, shown to merchants when they approve the install. 

### PartnerAppPermissionManifestEntryPreviousAttributes.optional

### PartnerAppPermissionManifestEntryPreviousAttributes.optional variant 1

anyOf variant 1: Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted..

- Value shape: boolean. Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. 

### PartnerAppPermissionManifestEntryPreviousAttributes.optional variant 2

anyOf variant 2.

- Value shape: null. Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. 

### PartnerAppPermissionManifestEntryPreviousAttributes.permission_id

### PartnerAppPermissionManifestEntryPreviousAttributes.permission_id variant 1

anyOf variant 1: The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope..

- Value shape: string. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. minLength: `1`. Example: `"manage_orders"`. 

### PartnerAppPermissionManifestEntryPreviousAttributes.permission_id variant 2

anyOf variant 2.

- Value shape: null. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. 

### PartnerAppPermissionManifestEntryPreviousAttributes.required_scopes

### PartnerAppPermissionManifestEntryPreviousAttributes.required_scopes variant 1

anyOf variant 1: The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped..

- Value shape: Array of string. The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. Items: minLength: `1`. 

### PartnerAppPermissionManifestEntryPreviousAttributes.required_scopes variant 2

anyOf variant 2.

- Value shape: null. The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. 

### PartnerAppPermissionManifestEntryPreviousAttributes.title

### PartnerAppPermissionManifestEntryPreviousAttributes.title variant 1

anyOf variant 1: A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address..

- Value shape: string. A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. minLength: `1`. 

### PartnerAppPermissionManifestEntryPreviousAttributes.title variant 2

anyOf variant 2.

- Value shape: null. A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. 

