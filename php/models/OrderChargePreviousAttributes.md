[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderChargePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. |
| `applied_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Resolved charge amount after charge discounts and before additive tax. |
| `calculation_basis` | Optional | string or null | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. `calculation_basis`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributescalculation_basis). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `description` | Optional | string or null | Optional description of the charge. `description`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesdescription). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. `fulfillment_id`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesfulfillment_id). |
| `metadata` | Optional | Map of string or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedMerchantEventDataPreviousAttributes.md#checkoutsessionclosedmerchanteventdatapreviousattributesmetadata). |
| `name` | Optional | string or null | What the buyer sees for this charge at checkout and on receipts. `name`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesname). |
| `order_charge_id` | Optional | string or null | Unique identifier for this order charge, prefixed `och_`. `order_charge_id`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesorder_charge_id). |
| `order_id` | Optional | string or null | Order that owns this charge, including the source order of an invoice snapshot. `order_id`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesorder_id). |
| `percent` | Optional | number or null | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. `percent`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributespercent). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Charge amount already refunded. |
| `tax` | Optional | [OrderCalculatedChargeTaxPreviousAttributes](../models/OrderCalculatedChargeTaxPreviousAttributes.md#ordercalculatedchargetaxpreviousattributes) or null | How tax applies to this charge. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax calculated for the charge, including any tax already included in its price. |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Applied charge amount plus tax that is not already included in the price. |
| `type` | Optional | string or null | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). `type`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributestype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |

### OrderChargePreviousAttributes.calculation_basis

### OrderChargePreviousAttributes.calculation_basis variant 1

anyOf variant 1: The amount a percent charge is calculated from..

- Value shape: string. The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`.

### OrderChargePreviousAttributes.calculation_basis variant 2

anyOf variant 2.

- Value shape: null. The amount a percent charge is calculated from. 

### OrderChargePreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### OrderChargePreviousAttributes.description

### OrderChargePreviousAttributes.description variant 1

anyOf variant 1: Optional description of the charge..

- Value shape: string. Optional description of the charge. 

### OrderChargePreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Optional description of the charge. 

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

### OrderChargePreviousAttributes.name variant 1

anyOf variant 1: What the buyer sees for this charge at checkout and on receipts..

- Value shape: string. What the buyer sees for this charge at checkout and on receipts. 

### OrderChargePreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. What the buyer sees for this charge at checkout and on receipts. 

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

### OrderChargePreviousAttributes.percent variant 1

anyOf variant 1: Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead..

- Value shape: number. Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: `0.0001`. 

### OrderChargePreviousAttributes.percent variant 2

anyOf variant 2.

- Value shape: null. Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. 

### OrderChargePreviousAttributes.type

### OrderChargePreviousAttributes.type variant 1

anyOf variant 1: What the charge is for. It classifies the charge in reporting and sets its default tax category..

- Value shape: string. What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: `"service_fee"`, `"delivery_fee"`, `"shipping_fee"`, `"handling_fee"`, `"packaging_fee"`, `"small_order_fee"`, `"service_area_fee"`, `"setup_fee"`, `"installation_fee"`, `"cleaning_fee"`, `"booking_fee"`, `"reservation_fee"`, `"ticket_fee"`, `"fulfillment_fee"`, `"restocking_fee"`, `"rush_fee"`, `"other"`.

### OrderChargePreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. What the charge is for. It classifies the charge in reporting and sets its default tax category. 

### OrderChargePreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

