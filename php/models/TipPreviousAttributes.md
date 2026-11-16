[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed tip amount, when the tip is set as an amount. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `description` | Optional | string or null | Optional description that stays on the tip for your reporting. `description`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesdescription). |
| `effective_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The tip amount the order collects. For a percent tip, the resolved amount. |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | Optional name that stays on the tip for your reporting. `name`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesname). |
| `order_tip_id` | Optional | string or null | ID of the tip, prefixed `tip_`. `order_tip_id`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributesorder_tip_id). |
| `payment_intent_allocations` | Optional | Array of [TipPaymentIntentAllocationPreviousAttributes](../models/TipPaymentIntentAllocationPreviousAttributes.md#tippaymentintentallocationpreviousattributes) or null | How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. `payment_intent_allocations`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributespayment_intent_allocations). |
| `percent` | Optional | number or null | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. `percent`: [declared alternatives](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributespercent). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | How much of the tip has been refunded. |
| `settled_amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | How much of the tip has been paid. |
| `status` | Optional | string or null | Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Values: `"requested"`, `"paid"`, `"partially_refunded"`, `"refunded"`, `"canceled"`. `status`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributesstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `value_settlement_allocations` | Optional | Array of [TipValueSettlementAllocationPreviousAttributes](../models/TipValueSettlementAllocationPreviousAttributes.md#tipvaluesettlementallocationpreviousattributes) or null | How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. `value_settlement_allocations`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributesvalue_settlement_allocations). |

### TipPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### TipPreviousAttributes.description

Declared alternatives: [InvoiceTipPreviousAttributes.description](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesdescription).

### TipPreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### TipPreviousAttributes.name

Declared alternatives: [InvoiceTipPreviousAttributes.name](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributesname).

### TipPreviousAttributes.order_tip_id

### TipPreviousAttributes.order_tip_id variant 1

anyOf variant 1: ID of the tip, prefixed `tip_`..

- Value shape: string. ID of the tip, prefixed `tip_`. 

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

### TipPreviousAttributes.payment_intent_allocations variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the tip this payment intent paid. |
| `payment_intent_id` | Optional | string or null | ID of the payment intent that paid this part of the tip. `payment_intent_id`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributespayment_intent_allocations-variant-1-fields-1payment_intent_id). |

### TipPreviousAttributes.payment_intent_allocations variant 1.[] fields 1.payment_intent_id

### TipPreviousAttributes.payment_intent_allocations variant 1.[] fields 1.payment_intent_id variant 1

anyOf variant 1: ID of the payment intent that paid this part of the tip..

- Value shape: string. ID of the payment intent that paid this part of the tip. ID of the payment intent that paid this part of the tip. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### TipPreviousAttributes.payment_intent_allocations variant 1.[] fields 1.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment intent that paid this part of the tip. 

### TipPreviousAttributes.percent

Declared alternatives: [InvoiceTipPreviousAttributes.percent](../models/InvoiceTipPreviousAttributes.md#invoicetippreviousattributespercent).

### TipPreviousAttributes.status

### TipPreviousAttributes.status variant 1

anyOf variant 1: Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection..

- Value shape: string. Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Values: `"requested"`, `"paid"`, `"partially_refunded"`, `"refunded"`, `"canceled"`.

### TipPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. 

### TipPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### TipPreviousAttributes.value_settlement_allocations

### TipPreviousAttributes.value_settlement_allocations variant 1

anyOf variant 1: How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip..

- Value shape: Array of [TipValueSettlementAllocationPreviousAttributes](../models/TipValueSettlementAllocationPreviousAttributes.md#tipvaluesettlementallocationpreviousattributes). How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. 

### TipPreviousAttributes.value_settlement_allocations variant 2

anyOf variant 2.

- Value shape: null. How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. 

### TipPreviousAttributes.value_settlement_allocations variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the tip this gift card redemption paid. |
| `value_settlement_id` | Optional | string or null | ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. `value_settlement_id`: [declared alternatives](../models/TipPreviousAttributes.md#tippreviousattributesvalue_settlement_allocations-variant-1-fields-1value_settlement_id). |

### TipPreviousAttributes.value_settlement_allocations variant 1.[] fields 1.value_settlement_id

### TipPreviousAttributes.value_settlement_allocations variant 1.[] fields 1.value_settlement_id variant 1

anyOf variant 1: ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip..

- Value shape: string. ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. Example: `"ovst_01KEZF7C00EMVZ016PM34KKFGY"`. 

### TipPreviousAttributes.value_settlement_allocations variant 1.[] fields 1.value_settlement_id variant 2

anyOf variant 2.

- Value shape: null. ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. 

