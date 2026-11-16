[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPaymentLinkSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_count` | Optional | integer or null | Number of paid checkout sessions started from this link. `completed_count`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributesInput.md#expandedpaymentlinksummarypreviousattributesinputcompleted_count). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `description` | Optional | string or null | Text about what the link sells, returned to buyers when they open it. `description`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributesInput.md#expandedpaymentlinksummarypreviousattributesinputdescription). |
| `name` | Optional | string or null | Name of the payment link. `name`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributesInput.md#expandedpaymentlinksummarypreviousattributesinputname). |
| `payment_link_id` | Optional | string or null | Unique identifier for this payment link, prefixed `pl_`. `payment_link_id`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributesInput.md#expandedpaymentlinksummarypreviousattributesinputpayment_link_id). |
| `payment_link_type` | Optional | string or null | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. `payment_link_type`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributesInput.md#expandedpaymentlinksummarypreviousattributesinputpayment_link_type). |
| `status` | Optional | string or null | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. `status`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributesInput.md#expandedpaymentlinksummarypreviousattributesinputstatus). |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. `subscription_plan_id`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributesInput.md#expandedpaymentlinksummarypreviousattributesinputsubscription_plan_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `url` | Optional | string or null | URL buyers open to use the link. `url`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributesInput.md#expandedpaymentlinksummarypreviousattributesinputurl). |

### ExpandedPaymentLinkSummaryPreviousAttributesInput.completed_count

### ExpandedPaymentLinkSummaryPreviousAttributesInput.completed_count variant 1

anyOf variant 1: Number of paid checkout sessions started from this link..

- Value shape: integer. Number of paid checkout sessions started from this link. Number of paid checkout sessions started from this link. Format: `int32`. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.completed_count variant 2

anyOf variant 2.

- Value shape: null. Number of paid checkout sessions started from this link. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedPaymentLinkSummaryPreviousAttributesInput.description

### ExpandedPaymentLinkSummaryPreviousAttributesInput.description variant 1

anyOf variant 1: Text about what the link sells, returned to buyers when they open it..

- Value shape: string. Text about what the link sells, returned to buyers when they open it. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Text about what the link sells, returned to buyers when they open it. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.name

### ExpandedPaymentLinkSummaryPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the payment link..

- Value shape: string. Name of the payment link. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the payment link. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.payment_link_id

### ExpandedPaymentLinkSummaryPreviousAttributesInput.payment_link_id variant 1

anyOf variant 1: Unique identifier for this payment link, prefixed `pl_`..

- Value shape: string. Unique identifier for this payment link, prefixed `pl_`. Unique identifier for this payment link, prefixed `pl_`. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment link, prefixed `pl_`. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.payment_link_type

### ExpandedPaymentLinkSummaryPreviousAttributesInput.payment_link_type variant 1

anyOf variant 1: What kind of link this is..

- Value shape: string. What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`.

### ExpandedPaymentLinkSummaryPreviousAttributesInput.payment_link_type variant 2

anyOf variant 2.

- Value shape: null. What kind of link this is. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.status

### ExpandedPaymentLinkSummaryPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the link can start new checkouts..

- Value shape: string. Whether the link can start new checkouts. Values: `"active"`, `"inactive"`.

### ExpandedPaymentLinkSummaryPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the link can start new checkouts. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.subscription_plan_id

### ExpandedPaymentLinkSummaryPreviousAttributesInput.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription..

- Value shape: string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedPaymentLinkSummaryPreviousAttributesInput.url

### ExpandedPaymentLinkSummaryPreviousAttributesInput.url variant 1

anyOf variant 1: URL buyers open to use the link..

- Value shape: string. URL buyers open to use the link. 

### ExpandedPaymentLinkSummaryPreviousAttributesInput.url variant 2

anyOf variant 2.

- Value shape: null. URL buyers open to use the link. 

