[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SelectableOrderPaymentIntentPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested from the buyer, including any tip_money. Capturing doesn't change it: after a partial capture it still shows the requested amount, and captured_money shows what was collected. On a standalone payment intent, PATCH can change it only before the first confirmation attempt. An amount_money or tip_money change that leaves too little for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. `amount_money`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesamount_money). |
| `last_payment_error` | Optional | [PaymentErrorSummaryPreviousAttributes](../models/PaymentErrorSummaryPreviousAttributes.md#paymenterrorsummarypreviousattributes) or null | Most recent payment failure, when one is recorded. |
| `payment_collection` | Optional | [SetupCollectionPreviousAttributes](../models/SetupCollectionPreviousAttributes.md#setupcollectionpreviousattributes) or null | Client setup details for collecting this payment. `payment_collection`: [declared alternatives](../models/SelectableOrderPaymentIntentPreviousAttributes.md#selectableorderpaymentintentpreviousattributespayment_collection). |
| `payment_intent_id` | Optional | string or null | Flint payment intent ID. `payment_intent_id`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributespayment_intent_id). |
| `status` | Optional | string or null | Lifecycle status. requires_payment_method covers both a new payment intent and one whose last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes never change status. Values: `"requires_payment_method"`, `"requires_confirmation"`, `"requires_action"`, `"processing"`, `"requires_capture"`, `"canceled"`, `"succeeded"`, `"expired"`. `status`: [declared alternatives](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesstatus). |
| `tip_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Portion of this payment's amount allocated to a tip. `tip_money`: [declared alternatives](../models/SelectableOrderPaymentIntentPreviousAttributes.md#selectableorderpaymentintentpreviousattributestip_money). |

### SelectableOrderPaymentIntentPreviousAttributes.amount_money

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.amount_money](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesamount_money).

### SelectableOrderPaymentIntentPreviousAttributes.payment_collection

Client setup details for collecting this payment.

Field definitions: [shared fields](CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_collection).

### SelectableOrderPaymentIntentPreviousAttributes.payment_collection variant 1

anyOf PaymentCollectionPreviousAttributes.

- Optional: `stripe`.

### SelectableOrderPaymentIntentPreviousAttributes.payment_collection variant 2

anyOf variant 2.

- Undeclared: `stripe`.
- Value shape: null. Client setup details for collecting this payment. 

### SelectableOrderPaymentIntentPreviousAttributes.payment_collection variant 1.stripe

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_collection variant 1.stripe](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_collection-variant-1stripe).

### SelectableOrderPaymentIntentPreviousAttributes.payment_intent_id

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.payment_intent_id](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributespayment_intent_id).

### SelectableOrderPaymentIntentPreviousAttributes.status

Declared alternatives: [BuyerExpandedPaymentIntentSummaryPreviousAttributes.status](../models/BuyerExpandedPaymentIntentSummaryPreviousAttributes.md#buyerexpandedpaymentintentsummarypreviousattributesstatus).

### SelectableOrderPaymentIntentPreviousAttributes.tip_money

Portion of this payment's amount allocated to a tip.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### SelectableOrderPaymentIntentPreviousAttributes.tip_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### SelectableOrderPaymentIntentPreviousAttributes.tip_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Portion of this payment's amount allocated to a tip. 

### SelectableOrderPaymentIntentPreviousAttributes.tip_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### SelectableOrderPaymentIntentPreviousAttributes.tip_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

