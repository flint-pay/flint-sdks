[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPermissionManifestEntryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null | What the permission lets the app do, shown to merchants when they approve the install. `description`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1description). |
| `optional` | Optional | boolean or null | Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted. `optional`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1optional). |
| `permission_id` | Optional | string or null | The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. `permission_id`: [declared alternatives](../models/PartnerAppPermissionManifestEntryPreviousAttributes.md#partnerapppermissionmanifestentrypreviousattributespermission_id). |
| `required_scopes` | Optional | Array of string or null | The Flint API scopes the permission grants, at least one. Each must be a scope partner installs allow; the scope catalog lists them. Duplicates are dropped. `required_scopes`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1required_scopes). |
| `title` | Optional | string or null | A short name for the permission, shown to merchants when they approve the install. It can't contain a link or an email address. `title`: [declared alternatives](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1title). |

### PartnerAppPermissionManifestEntryPreviousAttributes.description

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.description](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1description).

### PartnerAppPermissionManifestEntryPreviousAttributes.optional

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.optional](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1optional).

### PartnerAppPermissionManifestEntryPreviousAttributes.permission_id

### PartnerAppPermissionManifestEntryPreviousAttributes.permission_id variant 1

anyOf variant 1: The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope..

- Value shape: string. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. minLength: `1`. 

### PartnerAppPermissionManifestEntryPreviousAttributes.permission_id variant 2

anyOf variant 2.

- Value shape: null. The permission's ID, which you choose and which must be unique within the manifest. Authorization requests name permissions by this ID in scope, and the code exchange returns the granted IDs as its scope. 

### PartnerAppPermissionManifestEntryPreviousAttributes.required_scopes

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.required_scopes](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1required_scopes).

### PartnerAppPermissionManifestEntryPreviousAttributes.title

Declared alternatives: [EnvironmentGrantRevokedEvent.data fields 1.previous_attributes.granted_permissions variant 1.[] fields 1.title](../models/EnvironmentGrantRevokedEvent.md#environmentgrantrevokedeventdata-fields-1previous_attributesgranted_permissions-variant-1-fields-1title).

