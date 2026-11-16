[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerExpandedPaymentIntentSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `capture_method` | Optional | string or null | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. `capture_method`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputcapture_method). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `customer_id` | Optional | string or null | Customer linked to this payment intent. `customer_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputcustomer_id). |
| `dispute_status` | Optional | string or null | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#buyerexpandedpaymentintentsummarypreviousattributesinput-dispute_status-values). `dispute_status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputdispute_status). |
| `order_id` | Optional | string or null | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. `order_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputorder_id). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputpayment_intent_id). |
| `payment_source` | Optional | [PaymentSourceSummaryPreviousAttributesInput](../models/PaymentSourceSummaryPreviousAttributesInput.md#paymentsourcesummarypreviousattributesinput) or null | Summary of the card or bank account used for the payment. Absent until a payment source is attached. |
| `refund_status` | Optional | string or null | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputrefund_status). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion). |

#### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput dispute_status values

- `"none"`
- `"inquiry_needs_response"`
- `"inquiry_under_review"`
- `"inquiry_closed"`
- `"needs_response"`
- `"under_review"`
- `"won"`
- `"lost"`
- `"prevented"`
- `"other"`

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.capture_method

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.capture_method variant 1

anyOf variant 1: When money is collected. Defaults to automatic..

- Value shape: string. When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`.

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.capture_method variant 2

anyOf variant 2.

- Value shape: null. When money is collected. Defaults to automatic. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.customer_id

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.customer_id variant 1

anyOf variant 1: Customer linked to this payment intent..

- Value shape: string. Customer linked to this payment intent. Customer linked to this payment intent. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer linked to this payment intent. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.dispute_status

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.dispute_status variant 1

anyOf variant 1: Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence..

- Value shape: string. Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: `"none"`, `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`.

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.dispute_status variant 2

anyOf variant 2.

- Value shape: null. Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.order_id

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.order_id variant 1

anyOf variant 1: Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id..

- Value shape: string. Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.payment_intent_id

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.payment_intent_id variant 1

anyOf variant 1: Flint payment intent ID..

- Value shape: string. Flint payment intent ID. Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. Flint payment intent ID. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.refund_status

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.refund_status variant 1

anyOf variant 1: How much of captured_money has been refunded, including value issued as store credit, based on refunded_money..

- Value shape: string. How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`.

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.refund_status variant 2

anyOf variant 2.

- Value shape: null. How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.status

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.status variant 1

anyOf variant 1: Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status..

- Value shape: string. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`.

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version variant 1

anyOf variant 1: Persisted version of this resource's owned state. Expanded resources and external observations can change independently..

- Value shape: integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version variant 2

anyOf variant 2.

- Value shape: null. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. 

