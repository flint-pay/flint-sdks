[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPaymentMethodSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Optional | [CardDetailsPreviousAttributes](../models/CardDetailsPreviousAttributes.md#carddetailspreviousattributes) or null | Brand, expiry and last four digits. Present when type is card. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `customer_id` | Optional | string or null | Customer this payment method belongs to. `customer_id`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributes.md#expandedpaymentmethodsummarypreviousattributescustomer_id). |
| `payment_method_id` | Optional | string or null | Unique identifier for this payment method, prefixed `pm_`. `payment_method_id`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributes.md#expandedpaymentmethodsummarypreviousattributespayment_method_id). |
| `status` | Optional | string or null | Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributes.md#expandedpaymentmethodsummarypreviousattributesstatus). |
| `type` | Optional | string or null | Kind of payment method. Values: `"card"`. `type`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributes.md#expandedpaymentmethodsummarypreviousattributestype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |

### ExpandedPaymentMethodSummaryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ExpandedPaymentMethodSummaryPreviousAttributes.customer_id

### ExpandedPaymentMethodSummaryPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer this payment method belongs to..

- Value shape: string. Customer this payment method belongs to. Customer this payment method belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### ExpandedPaymentMethodSummaryPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer this payment method belongs to. 

### ExpandedPaymentMethodSummaryPreviousAttributes.payment_method_id

### ExpandedPaymentMethodSummaryPreviousAttributes.payment_method_id variant 1

anyOf variant 1: Unique identifier for this payment method, prefixed `pm_`..

- Value shape: string. Unique identifier for this payment method, prefixed `pm_`. Unique identifier for this payment method, prefixed `pm_`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### ExpandedPaymentMethodSummaryPreviousAttributes.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment method, prefixed `pm_`. 

### ExpandedPaymentMethodSummaryPreviousAttributes.status

### ExpandedPaymentMethodSummaryPreviousAttributes.status variant 1

anyOf variant 1: Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later..

- Value shape: string. Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`.

### ExpandedPaymentMethodSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. 

### ExpandedPaymentMethodSummaryPreviousAttributes.type

### ExpandedPaymentMethodSummaryPreviousAttributes.type variant 1

anyOf variant 1: Kind of payment method..

- Value shape: string. Kind of payment method. Values: `"card"`.

### ExpandedPaymentMethodSummaryPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Kind of payment method. 

### ExpandedPaymentMethodSummaryPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

