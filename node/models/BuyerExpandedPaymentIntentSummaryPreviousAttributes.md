[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerExpandedPaymentIntentSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. `amount_money`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesamount_money). |
| `capture_method` | Optional | string or null | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. `capture_method`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributescapture_method). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `customer_id` | Optional | string or null | Customer linked to this payment intent. `customer_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributescustomer_id). |
| `dispute_status` | Optional | string or null | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#buyerexpandedpaymentintentsummarypreviousattributes-dispute_status-values). `dispute_status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesdispute_status). |
| `order_id` | Optional | string or null | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. `order_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesorder_id). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributespayment_intent_id). |
| `payment_source` | Optional | [PaymentSourceSummaryPreviousAttributes](../models/PaymentSourceSummaryPreviousAttributes.md#paymentsourcesummarypreviousattributes) or null | Summary of the card or bank account used for the payment. Absent until a payment source is attached. |
| `refund_status` | Optional | string or null | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesrefund_status). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesversion). |

#### BuyerExpandedPaymentIntentSummaryPreviousAttributes dispute_status values

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

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.amount_money

The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.capture_method

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.capture_method variant 1

anyOf variant 1: When money is collected. Defaults to automatic..

- Value shape: string. When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`.

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.capture_method variant 2

anyOf variant 2.

- Value shape: null. When money is collected. Defaults to automatic. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.customer_id

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.customer_id variant 1

anyOf variant 1: Customer linked to this payment intent..

- Value shape: string. Customer linked to this payment intent. Customer linked to this payment intent. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.customer_id variant 2

anyOf variant 2.

- Value shape: null. Customer linked to this payment intent. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.dispute_status

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.dispute_status variant 1

anyOf variant 1: Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence..

- Value shape: string. Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: `"none"`, `"inquiry_needs_response"`, `"inquiry_under_review"`, `"inquiry_closed"`, `"needs_response"`, `"under_review"`, `"won"`, `"lost"`, `"prevented"`, `"other"`.

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.dispute_status variant 2

anyOf variant 2.

- Value shape: null. Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.order_id

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.order_id variant 1

anyOf variant 1: Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id..

- Value shape: string. Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.payment_intent_id

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: Flint payment intent ID..

- Value shape: string. Flint payment intent ID. Flint payment intent ID. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. Flint payment intent ID. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.refund_status

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.refund_status variant 1

anyOf variant 1: How much of captured_money has been refunded, including value issued as store credit, based on refunded_money..

- Value shape: string. How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`.

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.refund_status variant 2

anyOf variant 2.

- Value shape: null. How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.status

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.status variant 1

anyOf variant 1: Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status..

- Value shape: string. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`.

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.version

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.version variant 1

anyOf variant 1: Persisted version of this resource's owned state. Expanded resources and external observations can change independently..

- Value shape: integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: `uint64`. minimum: `1`. 

### BuyerExpandedPaymentIntentSummaryPreviousAttributes.version variant 2

anyOf variant 2.

- Value shape: null. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. 

