[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedCustomerSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `customer_id` | Optional | string or null | Unique identifier for this customer, prefixed `cus_`. `customer_id`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributescustomer_id). |
| `email` | Optional | string or null | Customer email. `null` when the customer has none. Unique among the environment's customers. `email`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesemail). |
| `name` | Optional | string or null | Customer name. `null` when none is set. `name`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesname). |
| `phone` | Optional | string or null | Customer phone number. `null` when none is set. `phone`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesphone). |
| `status` | Optional | string or null | Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`. `status`: [declared alternatives](../models/ExpandedCustomerSummaryPreviousAttributes.md#expandedcustomersummarypreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### ExpandedCustomerSummaryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ExpandedCustomerSummaryPreviousAttributes.customer_id

### ExpandedCustomerSummaryPreviousAttributes.customer_id variant 1

anyOf variant 1: Unique identifier for this customer, prefixed `cus_`..

- Value shape: string. Unique identifier for this customer, prefixed `cus_`. 

### ExpandedCustomerSummaryPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this customer, prefixed `cus_`. 

### ExpandedCustomerSummaryPreviousAttributes.email

### ExpandedCustomerSummaryPreviousAttributes.email variant 1

anyOf variant 1: Customer email. `null` when the customer has none. Unique among the environment's customers..

- Value shape: string. Customer email. `null` when the customer has none. Unique among the environment's customers. 

### ExpandedCustomerSummaryPreviousAttributes.email variant 2

anyOf variant 2.

- Value shape: null. Customer email. `null` when the customer has none. Unique among the environment's customers. 

### ExpandedCustomerSummaryPreviousAttributes.name

### ExpandedCustomerSummaryPreviousAttributes.name variant 1

anyOf variant 1: Customer name. `null` when none is set..

- Value shape: string. Customer name. `null` when none is set. 

### ExpandedCustomerSummaryPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Customer name. `null` when none is set. 

### ExpandedCustomerSummaryPreviousAttributes.phone

### ExpandedCustomerSummaryPreviousAttributes.phone variant 1

anyOf variant 1: Customer phone number. `null` when none is set..

- Value shape: string. Customer phone number. `null` when none is set. 

### ExpandedCustomerSummaryPreviousAttributes.phone variant 2

anyOf variant 2.

- Value shape: null. Customer phone number. `null` when none is set. 

### ExpandedCustomerSummaryPreviousAttributes.status

### ExpandedCustomerSummaryPreviousAttributes.status variant 1

anyOf variant 1: Where the customer is in the deletion lifecycle..

- Value shape: string. Where the customer is in the deletion lifecycle. Values: `"active"`, `"deletion_processing"`, `"deleted"`.

### ExpandedCustomerSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the customer is in the deletion lifecycle. 

### ExpandedCustomerSummaryPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

