[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Fixed tip amount, when the tip is set as an amount. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `description` | Optional | string or null | Optional description that stays on the tip for your reporting. `description`: [declared alternatives](../models/InvoiceTipPreviousAttributesInput.md#invoicetippreviousattributesinputdescription). |
| `effective_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The tip amount the order collects. For a percent tip, the resolved amount. |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `name` | Optional | string or null | Optional name that stays on the tip for your reporting. `name`: [declared alternatives](../models/InvoiceTipPreviousAttributesInput.md#invoicetippreviousattributesinputname). |
| `order_tip_id` | Optional | string or null | ID of the tip, prefixed `tip_`. `order_tip_id`: [declared alternatives](../models/TipPreviousAttributesInput.md#tippreviousattributesinputorder_tip_id). |
| `payment_intent_allocations` | Optional | Array of [TipPaymentIntentAllocationPreviousAttributesInput](../models/TipPaymentIntentAllocationPreviousAttributesInput.md#tippaymentintentallocationpreviousattributesinput) or null | How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. `payment_intent_allocations`: [declared alternatives](../models/TipPreviousAttributesInput.md#tippreviousattributesinputpayment_intent_allocations). |
| `percent` | Optional | number or null | Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent. `percent`: [declared alternatives](../models/InvoiceTipPreviousAttributesInput.md#invoicetippreviousattributesinputpercent). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | How much of the tip has been refunded. |
| `settled_amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | How much of the tip has been paid. |
| `status` | Optional | string or null | Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Values: `"requested"`, `"paid"`, `"partially_refunded"`, `"refunded"`, `"canceled"`. `status`: [declared alternatives](../models/TipPreviousAttributesInput.md#tippreviousattributesinputstatus). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `value_settlement_allocations` | Optional | Array of [TipValueSettlementAllocationPreviousAttributesInput](../models/TipValueSettlementAllocationPreviousAttributesInput.md#tipvaluesettlementallocationpreviousattributesinput) or null | How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. `value_settlement_allocations`: [declared alternatives](../models/TipPreviousAttributesInput.md#tippreviousattributesinputvalue_settlement_allocations). |

### TipPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### TipPreviousAttributesInput.description

Declared alternatives: [InvoiceTipPreviousAttributesInput.description](../models/InvoiceTipPreviousAttributesInput.md#invoicetippreviousattributesinputdescription).

### TipPreviousAttributesInput.name

Declared alternatives: [InvoiceTipPreviousAttributesInput.name](../models/InvoiceTipPreviousAttributesInput.md#invoicetippreviousattributesinputname).

### TipPreviousAttributesInput.order_tip_id

### TipPreviousAttributesInput.order_tip_id variant 1

anyOf variant 1: ID of the tip, prefixed `tip_`..

- Value shape: string. ID of the tip, prefixed `tip_`. ID of the tip, prefixed `tip_`. Example: `"tip_01KEZF7C00JRPYP11RTMB97MYH"`. 

### TipPreviousAttributesInput.order_tip_id variant 2

anyOf variant 2.

- Value shape: null. ID of the tip, prefixed `tip_`. 

### TipPreviousAttributesInput.payment_intent_allocations

### TipPreviousAttributesInput.payment_intent_allocations variant 1

anyOf variant 1: How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order..

- Value shape: Array of [TipPaymentIntentAllocationPreviousAttributesInput](../models/TipPaymentIntentAllocationPreviousAttributesInput.md#tippaymentintentallocationpreviousattributesinput). How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. 

### TipPreviousAttributesInput.payment_intent_allocations variant 2

anyOf variant 2.

- Value shape: null. How much of the tip each payment intent paid, one entry per payment intent. Flint adds an entry when it records that payment's tip on the order. 

### TipPreviousAttributesInput.percent

Declared alternatives: [InvoiceTipPreviousAttributesInput.percent](../models/InvoiceTipPreviousAttributesInput.md#invoicetippreviousattributesinputpercent).

### TipPreviousAttributesInput.status

### TipPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection..

- Value shape: string. Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. Values: `"requested"`, `"paid"`, `"partially_refunded"`, `"refunded"`, `"canceled"`.

### TipPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled before collection. 

### TipPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### TipPreviousAttributesInput.value_settlement_allocations

### TipPreviousAttributesInput.value_settlement_allocations variant 1

anyOf variant 1: How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip..

- Value shape: Array of [TipValueSettlementAllocationPreviousAttributesInput](../models/TipValueSettlementAllocationPreviousAttributesInput.md#tipvaluesettlementallocationpreviousattributesinput). How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. 

### TipPreviousAttributesInput.value_settlement_allocations variant 2

anyOf variant 2.

- Value shape: null. How much of the tip gift cards paid, one entry per gift card redemption that included tip money. Empty when no gift card paid any of the tip. 

