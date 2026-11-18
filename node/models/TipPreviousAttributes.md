[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed tip amount, when the tip is set as an amount. `amount_money`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesamount_money). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `description` | Optional | string or null | Optional description that stays on the tip for your reporting. `description`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesdescription). |
| `effective_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The tip amount the order collects. For a percent tip, the resolved amount. `effective_amount_money`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributeseffective_amount_money). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null | Optional name that stays on the tip for your reporting. `name`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesname). |
| `order_tip_id` | Optional | string or null | ID of the tip, prefixed `tip_`. `order_tip_id`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributesorder_tip_id). |
| `payment_intent_allocations` | Optional | Array of [TipPaymentIntentAllocationPreviousAttributes](../models/TipPaymentIntentAllocationPreviousAttributes.md#tippaymentintentallocationpreviousattributes) or null | How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. `payment_intent_allocations`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributespayment_intent_allocations). |
| `percent` | Optional | number or null | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. `percent`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributespercent). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | How much of the tip has been refunded. `refunded_money`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributesrefunded_money). |
| `settled_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | How much of the tip has been paid. `settled_amount_money`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributessettled_amount_money). |
| `status` | Optional | string or null | Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Values: `"requested"`, `"paid"`, `"partially_refunded"`, `"refunded"`, `"canceled"`. `status`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `value_settlement_allocations` | Optional | Array of [TipValueSettlementAllocationPreviousAttributes](../models/TipValueSettlementAllocationPreviousAttributes.md#tipvaluesettlementallocationpreviousattributes) or null | How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. `value_settlement_allocations`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributesvalue_settlement_allocations). |

### TipPreviousAttributes.amount_money

Declared alternatives: [InvoiceTipPreviousAttributes.amount_money](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesamount_money).

### TipPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### TipPreviousAttributes.description

Declared alternatives: [InvoiceTipPreviousAttributes.description](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesdescription).

### TipPreviousAttributes.effective_amount_money

The tip amount the order collects. For a percent tip, the resolved amount.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### TipPreviousAttributes.effective_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### TipPreviousAttributes.effective_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The tip amount the order collects. For a percent tip, the resolved amount. 

### TipPreviousAttributes.effective_amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### TipPreviousAttributes.effective_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### TipPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### TipPreviousAttributes.name

Declared alternatives: [InvoiceTipPreviousAttributes.name](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesname).

### TipPreviousAttributes.order_tip_id

### TipPreviousAttributes.order_tip_id variant 1

anyOf variant 1: ID of the tip, prefixed `tip_`..

- Value shape: string. ID of the tip, prefixed `tip_`. ID of the tip, prefixed `tip_`. Example: `"tip_01KEZF7C00JRPYP11RTMB97MYH"`. 

### TipPreviousAttributes.order_tip_id variant 2

anyOf variant 2.

- Value shape: null. ID of the tip, prefixed `tip_`. 

### TipPreviousAttributes.payment_intent_allocations

### TipPreviousAttributes.payment_intent_allocations variant 1

anyOf variant 1: How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order..

- Value shape: Array of [TipPaymentIntentAllocationPreviousAttributes](../models/TipPaymentIntentAllocationPreviousAttributes.md#tippaymentintentallocationpreviousattributes). How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. 

### TipPreviousAttributes.payment_intent_allocations variant 2

anyOf variant 2.

- Value shape: null. How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. 

### TipPreviousAttributes.percent

Declared alternatives: [InvoiceTipPreviousAttributes.percent](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributespercent).

### TipPreviousAttributes.refunded_money

How much of the tip has been refunded.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### TipPreviousAttributes.refunded_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### TipPreviousAttributes.refunded_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. How much of the tip has been refunded. 

### TipPreviousAttributes.refunded_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### TipPreviousAttributes.refunded_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### TipPreviousAttributes.settled_amount_money

How much of the tip has been paid.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### TipPreviousAttributes.settled_amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### TipPreviousAttributes.settled_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. How much of the tip has been paid. 

### TipPreviousAttributes.settled_amount_money variant 1.amount

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.amount](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1amount).

### TipPreviousAttributes.settled_amount_money variant 1.currency

Declared alternatives: [BalanceTransactionFeeDetailPreviousAttributes.amount_money variant 1.currency](../models/BalanceTransactionFeeDetailPreviousAttributes.md#balancetransactionfeedetailpreviousattributesamount_money-variant-1currency).

### TipPreviousAttributes.status

### TipPreviousAttributes.status variant 1

anyOf variant 1: Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection..

- Value shape: string. Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Values: `"requested"`, `"paid"`, `"partially_refunded"`, `"refunded"`, `"canceled"`.

### TipPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. 

### TipPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### TipPreviousAttributes.value_settlement_allocations

### TipPreviousAttributes.value_settlement_allocations variant 1

anyOf variant 1: How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip..

- Value shape: Array of [TipValueSettlementAllocationPreviousAttributes](../models/TipValueSettlementAllocationPreviousAttributes.md#tipvaluesettlementallocationpreviousattributes). How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. 

### TipPreviousAttributes.value_settlement_allocations variant 2

anyOf variant 2.

- Value shape: null. How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. 

