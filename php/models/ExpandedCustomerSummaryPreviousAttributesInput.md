[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedCustomerSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `customer_id` | Optional | string or null | Unique identifier for this customer, prefixed `cus_`. `customer_id`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEventInput.md#customerupdatedinstalledmerchantseventinputdataprevious_attributescustomer_id). |
| `email` | Optional | string or null or null | Customer email. `null` when the customer has none. Unique among the environment's customers. `email`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEventInput.md#customerupdatedinstalledmerchantseventinputdataprevious_attributesemail). |
| `name` | Optional | string or null or null | Customer name. `null` when none is set. `name`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEventInput.md#customerupdatedinstalledmerchantseventinputdataprevious_attributesname). |
| `phone` | Optional | string or null or null | Customer phone number. `null` when none is set. `phone`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEventInput.md#customerupdatedinstalledmerchantseventinputdataprevious_attributesphone). |
| `status` | Optional | string or null | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. `status`: [declared alternatives](../models/CustomerUpdatedInstalledMerchantsEventInput.md#customerupdatedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### ExpandedCustomerSummaryPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedCustomerSummaryPreviousAttributesInput.customer_id

Declared alternatives: [CustomerUpdatedInstalledMerchantsEventInput.data.previous_attributes.customer_id](../models/CustomerUpdatedInstalledMerchantsEventInput.md#customerupdatedinstalledmerchantseventinputdataprevious_attributescustomer_id).

### ExpandedCustomerSummaryPreviousAttributesInput.email

Declared alternatives: [CustomerUpdatedInstalledMerchantsEventInput.data.previous_attributes.email](../models/CustomerUpdatedInstalledMerchantsEventInput.md#customerupdatedinstalledmerchantseventinputdataprevious_attributesemail).

### ExpandedCustomerSummaryPreviousAttributesInput.name

Declared alternatives: [CustomerUpdatedInstalledMerchantsEventInput.data.previous_attributes.name](../models/CustomerUpdatedInstalledMerchantsEventInput.md#customerupdatedinstalledmerchantseventinputdataprevious_attributesname).

### ExpandedCustomerSummaryPreviousAttributesInput.phone

Declared alternatives: [CustomerUpdatedInstalledMerchantsEventInput.data.previous_attributes.phone](../models/CustomerUpdatedInstalledMerchantsEventInput.md#customerupdatedinstalledmerchantseventinputdataprevious_attributesphone).

### ExpandedCustomerSummaryPreviousAttributesInput.status

Declared alternatives: [CustomerUpdatedInstalledMerchantsEventInput.data.previous_attributes.status](../models/CustomerUpdatedInstalledMerchantsEventInput.md#customerupdatedinstalledmerchantseventinputdataprevious_attributesstatus).

### ExpandedCustomerSummaryPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

