[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPermissionManifestEntryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null | What the permission lets the app do, shown to merchants when they approve the install. `description`: [declared alternatives](../models/PartnerAppPermissionManifestEntryPreviousAttributesInput.md#partnerapppermissionmanifestentrypreviousattributesinputdescription). |
| `optional` | Optional | boolean or null | Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. `optional`: [declared alternatives](../models/PartnerAppPermissionManifestEntryPreviousAttributesInput.md#partnerapppermissionmanifestentrypreviousattributesinputoptional). |
| `permission_id` | Optional | string or null | The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. `permission_id`: [declared alternatives](../models/PartnerAppPermissionManifestEntryPreviousAttributesInput.md#partnerapppermissionmanifestentrypreviousattributesinputpermission_id). |
| `required_scopes` | Optional | Array of string or null | The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. `required_scopes`: [declared alternatives](../models/PartnerAppPermissionManifestEntryPreviousAttributesInput.md#partnerapppermissionmanifestentrypreviousattributesinputrequired_scopes). |
| `title` | Optional | string or null | A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. `title`: [declared alternatives](../models/PartnerAppPermissionManifestEntryPreviousAttributesInput.md#partnerapppermissionmanifestentrypreviousattributesinputtitle). |

### PartnerAppPermissionManifestEntryPreviousAttributesInput.description

### PartnerAppPermissionManifestEntryPreviousAttributesInput.description variant 1

anyOf variant 1: What the permission lets the app do, shown to merchants when they approve the install..

- Value shape: string. What the permission lets the app do, shown to merchants when they approve the install. What the permission lets the app do, shown to merchants when they approve the install. minLength: `1`. 

### PartnerAppPermissionManifestEntryPreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. What the permission lets the app do, shown to merchants when they approve the install. 

### PartnerAppPermissionManifestEntryPreviousAttributesInput.optional

### PartnerAppPermissionManifestEntryPreviousAttributesInput.optional variant 1

anyOf variant 1: Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted..

- Value shape: boolean. Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. 

### PartnerAppPermissionManifestEntryPreviousAttributesInput.optional variant 2

anyOf variant 2.

- Value shape: null. Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. 

### PartnerAppPermissionManifestEntryPreviousAttributesInput.permission_id

### PartnerAppPermissionManifestEntryPreviousAttributesInput.permission_id variant 1

anyOf variant 1: The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope..

- Value shape: string. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. minLength: `1`. Example: `"manage_orders"`. 

### PartnerAppPermissionManifestEntryPreviousAttributesInput.permission_id variant 2

anyOf variant 2.

- Value shape: null. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. 

### PartnerAppPermissionManifestEntryPreviousAttributesInput.required_scopes

### PartnerAppPermissionManifestEntryPreviousAttributesInput.required_scopes variant 1

anyOf variant 1: The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped..

- Value shape: Array of string. The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. Items: minLength: `1`. 

### PartnerAppPermissionManifestEntryPreviousAttributesInput.required_scopes variant 2

anyOf variant 2.

- Value shape: null. The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. 

### PartnerAppPermissionManifestEntryPreviousAttributesInput.title

### PartnerAppPermissionManifestEntryPreviousAttributesInput.title variant 1

anyOf variant 1: A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address..

- Value shape: string. A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. minLength: `1`. 

### PartnerAppPermissionManifestEntryPreviousAttributesInput.title variant 2

anyOf variant 2.

- Value shape: null. A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. 

