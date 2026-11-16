[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderChargePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. |
| `applied_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Resolved charge amount after charge discounts and before additive tax. |
| `calculation_basis` | Optional | string or null | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. `calculation_basis`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1calculation_basis). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `description` | Optional | string or null | Optional description of the charge. `description`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1description). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. `fulfillment_id`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesfulfillment_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | What the buyer sees for this charge at checkout and on receipts. `name`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1name). |
| `order_charge_id` | Optional | string or null | Unique identifier for this order charge, prefixed `och_`. `order_charge_id`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesorder_charge_id). |
| `order_id` | Optional | string or null | Order that owns this charge, including the source order of an invoice snapshot. `order_id`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesorder_id). |
| `percent` | Optional | number or null | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. `percent`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1percent). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Charge amount already refunded. |
| `tax` | Optional | Alternative shapes (see declared variants) | How tax applies to this charge. `tax`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax calculated for the charge, including any tax already included in its price. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Applied charge amount plus tax that is not already included in the price. |
| `type` | Optional | string or null | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). `type`: [declared alternatives](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1type). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### OrderChargePreviousAttributes.calculation_basis

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.calculation_basis](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1calculation_basis).

### OrderChargePreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### OrderChargePreviousAttributes.description

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.description](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1description).

### OrderChargePreviousAttributes.fulfillment_id

### OrderChargePreviousAttributes.fulfillment_id variant 1

anyOf variant 1: ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment..

- Value shape: string. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. 

### OrderChargePreviousAttributes.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. 

### OrderChargePreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedMerchantEventDataPreviousAttributes.metadata](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata).

### OrderChargePreviousAttributes.name

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.name](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1name).

### OrderChargePreviousAttributes.order_charge_id

### OrderChargePreviousAttributes.order_charge_id variant 1

anyOf variant 1: Unique identifier for this order charge, prefixed `och_`..

- Value shape: string. Unique identifier for this order charge, prefixed `och_`. 

### OrderChargePreviousAttributes.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order charge, prefixed `och_`. 

### OrderChargePreviousAttributes.order_id

### OrderChargePreviousAttributes.order_id variant 1

anyOf variant 1: Order that owns this charge, including the source order of an invoice snapshot..

- Value shape: string. Order that owns this charge, including the source order of an invoice snapshot. 

### OrderChargePreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns this charge, including the source order of an invoice snapshot. 

### OrderChargePreviousAttributes.percent

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.percent](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1percent).

### OrderChargePreviousAttributes.tax

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.tax](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1tax).

### OrderChargePreviousAttributes.type

Declared alternatives: [InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.snapshot variant 1.charges variant 1.[] fields 1.type](../models/InvoiceCollectionBlockResolvedMerchantEventDataPreviousAttributes.md#invoicecollectionblockresolvedmerchanteventdatapreviousattributessnapshot-variant-1charges-variant-1-fields-1type).

### OrderChargePreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

