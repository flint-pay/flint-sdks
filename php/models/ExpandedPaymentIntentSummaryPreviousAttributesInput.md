[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedPaymentIntentSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `capture_method` | Optional | string or null | When money is collected. Defaults to automatic. Values: `"automatic"`, `"manual"`. `capture_method`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputcapture_method). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `customer_id` | Optional | string or null | Customer linked to this payment intent. `customer_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputcustomer_id). |
| `dispute_status` | Optional | string or null | Dispute state of this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Values: [10 declared values](#expandedpaymentintentsummarypreviousattributesinput-dispute_status-values). `dispute_status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputdispute_status). |
| `order_id` | Optional | string or null | Order this payment intent belongs to. Create it through the order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent. Order-owned intents accept PATCH for metadata and external_reference_id. `order_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputorder_id). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputpayment_intent_id). |
| `payment_source` | Optional | [PaymentSourceSummaryPreviousAttributesInput](../models/PaymentSourceSummaryPreviousAttributesInput.md#paymentsourcesummarypreviousattributesinput) or null | Summary of the card or bank account used for the payment. Absent until a payment source is attached. |
| `refund_status` | Optional | string or null | How much of captured_money has been refunded, including value issued as store credit, based on refunded_money. Values: `"none"`, `"partially_refunded"`, `"refunded"`. `refund_status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputrefund_status). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputstatus). |
| `supported_actions` | Optional | Array of string or null | Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Always present with merchant credentials. Items values: `"confirm"`, `"capture"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/ExpandedPaymentIntentSummaryPreviousAttributesInput.md#expandedpaymentintentsummarypreviousattributesinputsupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Persisted version of this resource's owned state. Expanded resources and external observations can change independently. `version`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion). |

#### ExpandedPaymentIntentSummaryPreviousAttributesInput dispute_status values

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

### ExpandedPaymentIntentSummaryPreviousAttributesInput.capture_method

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.capture_method](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputcapture_method).

### ExpandedPaymentIntentSummaryPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedPaymentIntentSummaryPreviousAttributesInput.customer_id

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.customer_id](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputcustomer_id).

### ExpandedPaymentIntentSummaryPreviousAttributesInput.dispute_status

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.dispute_status](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputdispute_status).

### ExpandedPaymentIntentSummaryPreviousAttributesInput.order_id

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.order_id](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputorder_id).

### ExpandedPaymentIntentSummaryPreviousAttributesInput.payment_intent_id

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.payment_intent_id](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputpayment_intent_id).

### ExpandedPaymentIntentSummaryPreviousAttributesInput.refund_status

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.refund_status](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputrefund_status).

### ExpandedPaymentIntentSummaryPreviousAttributesInput.status

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.status](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputstatus).

### ExpandedPaymentIntentSummaryPreviousAttributesInput.supported_actions

### ExpandedPaymentIntentSummaryPreviousAttributesInput.supported_actions variant 1

anyOf variant 1: Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Always present with merchant credentials..

- Value shape: Array of string. Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Always present with merchant credentials. Items values: `"confirm"`, `"capture"`, `"cancel"`.

### ExpandedPaymentIntentSummaryPreviousAttributesInput.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Verbs this payment intent accepts now, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. The list includes stored order facts and can change without a payment intent version change. Order legs list confirm when a single leg can pay the order or an open attempt can continue it. Several unpaid legs, selected gift cards, or automatic tax with a leg below the balance require pay_order instead. Invoice payments list only cancel. An unused first-period subscription payment lists cancel once the subscription is canceled. Order edit payments list confirm while awaiting payment details or action. A listed action can still be refused due to an open risk review, an order payment attempt, a closed order, or the merchant account. A managed_by_owner refusal names the owner and its command in remediation.next_actions. The merchant list is credential-independent. Checkout credentials receive that list filtered to confirm and cancel on their own session's intents, never capture. Customer sessions omit this field. New actions may be added. Always present with merchant credentials. 

### ExpandedPaymentIntentSummaryPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ExpandedPaymentIntentSummaryPreviousAttributesInput.version

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.version](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputversion).

