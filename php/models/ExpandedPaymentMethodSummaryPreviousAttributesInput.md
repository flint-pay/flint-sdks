[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPaymentMethodSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Optional | [CardDetailsPreviousAttributesInput](../models/CardDetailsPreviousAttributesInput.md#carddetailspreviousattributesinput) or null | Brand, expiry and last four digits. Present when type is card. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `customer_id` | Optional | string or null | Customer this payment method belongs to. `customer_id`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributesInput.md#expandedpaymentmethodsummarypreviousattributesinputcustomer_id). |
| `payment_method_id` | Optional | string or null | Unique identifier for this payment method, prefixed `pm_`. `payment_method_id`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributesInput.md#expandedpaymentmethodsummarypreviousattributesinputpayment_method_id). |
| `status` | Optional | string or null | Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. `status`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributesInput.md#expandedpaymentmethodsummarypreviousattributesinputstatus). |
| `type` | Optional | string or null | Kind of payment method. Values: `"card"`. `type`: [declared alternatives](../models/ExpandedPaymentMethodSummaryPreviousAttributesInput.md#expandedpaymentmethodsummarypreviousattributesinputtype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### ExpandedPaymentMethodSummaryPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedPaymentMethodSummaryPreviousAttributesInput.customer_id

### ExpandedPaymentMethodSummaryPreviousAttributesInput.customer_id variant 1

anyOf variant 1: Customer this payment method belongs to..

- Value shape: string. Customer this payment method belongs to. Customer this payment method belongs to. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### ExpandedPaymentMethodSummaryPreviousAttributesInput.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer this payment method belongs to. 

### ExpandedPaymentMethodSummaryPreviousAttributesInput.payment_method_id

### ExpandedPaymentMethodSummaryPreviousAttributesInput.payment_method_id variant 1

anyOf variant 1: Unique identifier for this payment method, prefixed `pm_`..

- Value shape: string. Unique identifier for this payment method, prefixed `pm_`. Unique identifier for this payment method, prefixed `pm_`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. 

### ExpandedPaymentMethodSummaryPreviousAttributesInput.payment_method_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment method, prefixed `pm_`. 

### ExpandedPaymentMethodSummaryPreviousAttributesInput.status

### ExpandedPaymentMethodSummaryPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later..

- Value shape: string. Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`.

### ExpandedPaymentMethodSummaryPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. 

### ExpandedPaymentMethodSummaryPreviousAttributesInput.type

### ExpandedPaymentMethodSummaryPreviousAttributesInput.type variant 1

anyOf variant 1: Kind of payment method..

- Value shape: string. Kind of payment method. Values: `"card"`.

### ExpandedPaymentMethodSummaryPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. Kind of payment method. 

### ExpandedPaymentMethodSummaryPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

