[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SelectableOrderPaymentIntentPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributesInput](../models/PaymentErrorSummaryPreviousAttributesInput.md#paymenterrorsummarypreviousattributesinput) or null | Most recent payment failure, when one is recorded. |
| `payment_collection` | Optional | [PaymentCollectionPreviousAttributesInput](../models/PaymentCollectionPreviousAttributesInput.md#paymentcollectionpreviousattributesinput) or null | Client setup details for collecting this payment. |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputpayment_intent_id). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputstatus). |
| `tip_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Portion of this payment's amount allocated to a tip. |

### SelectableOrderPaymentIntentPreviousAttributesInput.payment_intent_id

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.payment_intent_id](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputpayment_intent_id).

### SelectableOrderPaymentIntentPreviousAttributesInput.status

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.status](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributesInput.md#buyerexpandedpaymentintentsummarypreviousattributesinputstatus).

