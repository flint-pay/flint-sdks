[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateLineItemRequest

The request body for: Update line item. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null |  Send null to clear description. minLength: `1`. |
| `expected_ship_date` | Optional | string or null | Expected ship date in YYYY-MM-DD format. Send null to clear it. Omission preserves it. Accepted on paid orders as the only field apart from expected_version. Repeating the current date or clearing an already-null date leaves the order version unchanged. Format: `date`. minLength: `1`. Example: `"2026-08-02"`. |
| `expected_version` | Optional | integer | Order version from the last order read, returned in data.version. Required when any of these fields is present: modifiers, gift_card_recipient, gift_card_face_value_money, subscription. Format: `int64`. minimum: `1`. |
| `gift_card_face_value_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Selects the face value of an unpaid, unfunded gift card line within its frozen offer's custom_amount_bounds and reprices the order. Fixed-denomination offers accept only their current value. Omission preserves the value; null is not allowed. Requires expected_version from the order. Checkout credentials may send this field alone or together with gift_card_recipient. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `gift_card_face_value_money`: [field definitions](../models/UpdateLineItemRequest.md#updatelineitemrequestgift_card_face_value_money). |
| `gift_card_recipient` | Optional | [GiftCardPurchaseRecipientPatchRequest](../models/GiftCardPurchaseRecipientPatchRequest.md#giftcardpurchaserecipientpatchrequest) or null | Replaces the recipient of an unfunded gift card purchase. Omission preserves it; null clears it. Send expected_version from the order. Send null to clear gift_card_recipient. Requires expected_version. |
| `metadata` | Optional | [MetadataPatchRequest](../models/MetadataPatchRequest.md#metadatapatchrequest) or null | Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. |
| `modifiers` | Optional | Array of [OrderLineItemModifierRequest](../models/OrderLineItemModifierRequest.md#orderlineitemmodifierrequest) | `modifiers[]`: [declared alternatives](../models/UpdateLineItemRequest.md#updatelineitemrequestmodifiers). |
| `name` | Optional | string | Name of the line item. minLength: `1`. |
| `product_type` | Optional | string | Classification of a custom line for ACH debit: physical, digital, service, or fee. Omit to leave it unclassified; no default is inferred from fulfillment. Null is not accepted. Does not change tax, delivery, or inventory. On an order line PATCH, omission preserves the classification. Catalog lines use their product's type and reject this input. Values: `"physical"`, `"service"`, `"fee"`, `"digital"`. |
| `quantity` | Optional | integer | Replacement quantity, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: `int64`. minimum: `1`. maximum: `9999`. |
| `subscription` | Optional | [SubscribedLineRequest](../models/SubscribedLineRequest.md#subscribedlinerequest) or null | Selects an active subscription offer and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the selection. Requires expected_version from the order and clears the delivery selection when terms change. Send null to clear subscription. Requires expected_version. `subscription`: [declared alternatives](../models/UpdateLineItemRequest.md#updatelineitemrequestsubscription). |
| `tax` | Optional | [OrderCalculatedLineItemTax](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax) | Tax settings for the line item. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable. `tax`: [field definitions](../models/UpdateLineItemRequest.md#updatelineitemrequesttax). |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/CreateOrderLineItem.md#createorderlineitemunit_price_money). |

### UpdateLineItemRequest.gift_card_face_value_money

Selects the face value of an unpaid, unfunded gift card line within its frozen offer's custom_amount_bounds and reprices the order. Fixed-denomination offers accept only their current value. Omission preserves the value; null is not allowed. Requires expected_version from the order. Checkout credentials may send this field alone or together with gift_card_recipient. Currency must be USD. Amount must be between 1 and 200000 minor units, inclusive. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### UpdateLineItemRequest.modifiers[]

A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.

Field definitions: [shared fields](OrderLineItemModifierRequest.md#orderlineitemmodifierrequest).

### UpdateLineItemRequest.modifiers[] variant 1: `type` = `"catalog"`

oneOf with type: "catalog": The `catalog` variant of `OrderLineItemModifierInput`..

- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.
- Constraints for `type`: Values: `"catalog"`.

### UpdateLineItemRequest.modifiers[] variant 2: `type` = `"text"`

oneOf with type: "text": The `text` variant of `OrderLineItemModifierInput`..

- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.
- Constraints for `type`: Values: `"text"`.

### UpdateLineItemRequest.modifiers[].metadata

Field definitions: [CreateOrderLineItem.modifiers[].metadata](../models/CreateOrderLineItem.md#createorderlineitemmodifiersmetadata).

### UpdateLineItemRequest.modifiers[].text

Field definitions: [CreateOrderLineItem.modifiers[].text](../models/CreateOrderLineItem.md#createorderlineitemmodifierstext).

### UpdateLineItemRequest.subscription

Selects an active subscription offer and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the selection. Requires expected_version from the order and clears the delivery selection when terms change. Send null to clear subscription. Requires expected_version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Conditional | string | Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Conditional | integer | Format: `int32`. minimum: `1`. maximum: `365`. |
| `subscription_offer_id` | Conditional | string | Active subscription offer for this catalog variant. minLength: `1`. Example: `"soffer_01KEZF7C00KAA9Y1X1KM70YFAA"`. |

### UpdateLineItemRequest.subscription variant 1

anyOf SubscribedLineRequestModel: Makes an order line a subscription purchase, with the subscription offer and billing interval..

- Required: `billing_interval`, `billing_interval_count`, `subscription_offer_id`.

### UpdateLineItemRequest.subscription variant 2

anyOf variant 2.

- Undeclared: `billing_interval`, `billing_interval_count`, `subscription_offer_id`.
- Value shape: null. Selects an active subscription offer and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the selection. Requires expected_version from the order and clears the delivery selection when terms change. Send null to clear subscription. Requires expected_version. 

### UpdateLineItemRequest.tax

Tax settings for the line item. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequest](../models/TaxCalculationRequest.md#taxcalculationrequest) | The tax you supply for this line item. Used when the order's tax `mode` is `external`. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. `calculation`: [field definitions](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax-variant-2calculation). |
| `line_item_tax_category` | Optional | string | Flint line-item tax category. Values: [12 declared values](#updatelineitemrequesttax-line_item_tax_category-values). |
| `taxable` | Optional | boolean | Whether the line item is subject to tax. |

#### UpdateLineItemRequest.tax line_item_tax_category values

- `"general"`
- `"physical_goods"`
- `"digital_goods"`
- `"software"`
- `"saas"`
- `"services"`
- `"professional_services"`
- `"food"`
- `"prepared_food"`
- `"clothing"`
- `"medical_goods"`
- `"admission"`

### UpdateLineItemRequest.tax.calculation

Field definitions: [OrderCalculatedLineItemTax variant 2.calculation](../models/OrderCalculatedLineItemTax.md#ordercalculatedlineitemtax-variant-2calculation).

### UpdateLineItemRequest.unit_price_money

Field definitions: [CreateOrderLineItem.unit_price_money](../models/CreateOrderLineItem.md#createorderlineitemunit_price_money).

