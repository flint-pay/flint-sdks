[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPaymentLinkSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `completed_count` | Optional | integer or null | Number of paid checkout sessions started from this link. `completed_count`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributescompleted_count). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `description` | Optional | string or null | Text about what the link sells, returned to buyers when they open it. `description`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesdescription). |
| `name` | Optional | string or null | Name of the payment link. `name`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesname). |
| `payment_link_id` | Optional | string or null | Unique identifier for this payment link, prefixed `pl_`. `payment_link_id`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributespayment_link_id). |
| `payment_link_type` | Optional | string or null | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. `payment_link_type`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributespayment_link_type). |
| `status` | Optional | string or null | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. `status`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesstatus). |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. `subscription_plan_id`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributessubscription_plan_id). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `url` | Optional | string or null | URL buyers open to use the link. `url`: [declared alternatives](../models/ExpandedPaymentLinkSummaryPreviousAttributes.md#expandedpaymentlinksummarypreviousattributesurl). |

### ExpandedPaymentLinkSummaryPreviousAttributes.completed_count

### ExpandedPaymentLinkSummaryPreviousAttributes.completed_count variant 1

anyOf variant 1: Number of paid checkout sessions started from this link..

- Value shape: integer. Number of paid checkout sessions started from this link. Number of paid checkout sessions started from this link. Format: `int32`. 

### ExpandedPaymentLinkSummaryPreviousAttributes.completed_count variant 2

anyOf variant 2.

- Value shape: null. Number of paid checkout sessions started from this link. 

### ExpandedPaymentLinkSummaryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ExpandedPaymentLinkSummaryPreviousAttributes.description

### ExpandedPaymentLinkSummaryPreviousAttributes.description variant 1

anyOf variant 1: Text about what the link sells, returned to buyers when they open it..

- Value shape: string. Text about what the link sells, returned to buyers when they open it. 

### ExpandedPaymentLinkSummaryPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Text about what the link sells, returned to buyers when they open it. 

### ExpandedPaymentLinkSummaryPreviousAttributes.name

### ExpandedPaymentLinkSummaryPreviousAttributes.name variant 1

anyOf variant 1: Name of the payment link..

- Value shape: string. Name of the payment link. 

### ExpandedPaymentLinkSummaryPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the payment link. 

### ExpandedPaymentLinkSummaryPreviousAttributes.payment_link_id

### ExpandedPaymentLinkSummaryPreviousAttributes.payment_link_id variant 1

anyOf variant 1: Unique identifier for this payment link, prefixed `pl_`..

- Value shape: string. Unique identifier for this payment link, prefixed `pl_`. 

### ExpandedPaymentLinkSummaryPreviousAttributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment link, prefixed `pl_`. 

### ExpandedPaymentLinkSummaryPreviousAttributes.payment_link_type

### ExpandedPaymentLinkSummaryPreviousAttributes.payment_link_type variant 1

anyOf variant 1: What kind of link this is..

- Value shape: string. What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`.

### ExpandedPaymentLinkSummaryPreviousAttributes.payment_link_type variant 2

anyOf variant 2.

- Value shape: null. What kind of link this is. 

### ExpandedPaymentLinkSummaryPreviousAttributes.status

### ExpandedPaymentLinkSummaryPreviousAttributes.status variant 1

anyOf variant 1: Whether the link can start new checkouts..

- Value shape: string. Whether the link can start new checkouts. Values: `"active"`, `"inactive"`.

### ExpandedPaymentLinkSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the link can start new checkouts. 

### ExpandedPaymentLinkSummaryPreviousAttributes.subscription_plan_id

### ExpandedPaymentLinkSummaryPreviousAttributes.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription..

- Value shape: string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. 

### ExpandedPaymentLinkSummaryPreviousAttributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. 

### ExpandedPaymentLinkSummaryPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ExpandedPaymentLinkSummaryPreviousAttributes.url

### ExpandedPaymentLinkSummaryPreviousAttributes.url variant 1

anyOf variant 1: URL buyers open to use the link..

- Value shape: string. URL buyers open to use the link. 

### ExpandedPaymentLinkSummaryPreviousAttributes.url variant 2

anyOf variant 2.

- Value shape: null. URL buyers open to use the link. 

