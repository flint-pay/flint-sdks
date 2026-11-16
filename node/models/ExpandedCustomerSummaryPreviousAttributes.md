[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedCustomerSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `customer_id` | Optional | string or null | Unique identifier for this customer, prefixed `cus_`. `customer_id`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributescustomer_id). |
| `email` | Optional | string or null or null | Customer email. `null` when the customer has none. Unique among the environment's customers. `email`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesemail). |
| `name` | Optional | string or null or null | Customer name. `null` when none is set. `name`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesname). |
| `phone` | Optional | string or null or null | Customer phone number. `null` when none is set. `phone`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesphone). |
| `status` | Optional | string or null | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. `status`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |

### ExpandedCustomerSummaryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ExpandedCustomerSummaryPreviousAttributes.customer_id

Declared alternatives: [CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.customer_id](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributescustomer_id).

### ExpandedCustomerSummaryPreviousAttributes.email

Declared alternatives: [CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.email](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesemail).

### ExpandedCustomerSummaryPreviousAttributes.name

Declared alternatives: [CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.name](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesname).

### ExpandedCustomerSummaryPreviousAttributes.phone

Declared alternatives: [CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.phone](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesphone).

### ExpandedCustomerSummaryPreviousAttributes.status

Declared alternatives: [CustomerUpdatedInstalledMerchantsEvent.data.previous_attributes.status](../models/CustomerUpdatedInstalledMerchantsEvent.md#customerupdatedinstalledmerchantseventdataprevious_attributesstatus).

### ExpandedCustomerSummaryPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

