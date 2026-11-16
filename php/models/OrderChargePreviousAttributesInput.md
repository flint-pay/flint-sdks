[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderChargePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. |
| `applied_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Resolved charge amount after charge discounts and before additive tax. |
| `calculation_basis` | Optional | string or null | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. `calculation_basis`: [declared alternatives](../models/OrderChargePreviousAttributesInput.md#orderchargepreviousattributesinputcalculation_basis). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `description` | Optional | string or null | Optional description of the charge. `description`: [declared alternatives](../models/OrderChargePreviousAttributesInput.md#orderchargepreviousattributesinputdescription). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. `fulfillment_id`: [declared alternatives](../models/OrderChargePreviousAttributesInput.md#orderchargepreviousattributesinputfulfillment_id). |
| `metadata` | Optional | [MetadataMapPreviousAttributesInput](../models/MetadataMapPreviousAttributesInput.md#metadatamappreviousattributesinput) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. |
| `name` | Optional | string or null | What the buyer sees for this charge at checkout and on receipts. `name`: [declared alternatives](../models/OrderChargePreviousAttributesInput.md#orderchargepreviousattributesinputname). |
| `order_charge_id` | Optional | string or null | Unique identifier for this order charge, prefixed `och_`. `order_charge_id`: [declared alternatives](../models/OrderChargePreviousAttributesInput.md#orderchargepreviousattributesinputorder_charge_id). |
| `order_id` | Optional | string or null | Order that owns this charge, including the source order of an invoice snapshot. `order_id`: [declared alternatives](../models/OrderChargePreviousAttributesInput.md#orderchargepreviousattributesinputorder_id). |
| `percent` | Optional | number or null | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. `percent`: [declared alternatives](../models/OrderChargePreviousAttributesInput.md#orderchargepreviousattributesinputpercent). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Charge amount already refunded. |
| `tax` | Optional | [OrderCalculatedChargeTaxPreviousAttributesInput](../models/OrderCalculatedChargeTaxPreviousAttributesInput.md#ordercalculatedchargetaxpreviousattributesinput) or null | How tax applies to this charge. |
| `tax_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Tax calculated for the charge, including any tax already included in its price. |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Applied charge amount plus tax that is not already included in the price. |
| `type` | Optional | string or null | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](BuyerOrderChargeInput.md#buyerorderchargeinput-type-values). `type`: [declared alternatives](../models/OrderChargePreviousAttributesInput.md#orderchargepreviousattributesinputtype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### OrderChargePreviousAttributesInput.calculation_basis

### OrderChargePreviousAttributesInput.calculation_basis variant 1

anyOf variant 1: The amount a percent charge is calculated from..

- Value shape: string. The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`.

### OrderChargePreviousAttributesInput.calculation_basis variant 2

anyOf variant 2.

- Value shape: null. The amount a percent charge is calculated from. 

### OrderChargePreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### OrderChargePreviousAttributesInput.description

### OrderChargePreviousAttributesInput.description variant 1

anyOf variant 1: Optional description of the charge..

- Value shape: string. Optional description of the charge. 

### OrderChargePreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Optional description of the charge. 

### OrderChargePreviousAttributesInput.fulfillment_id

### OrderChargePreviousAttributesInput.fulfillment_id variant 1

anyOf variant 1: ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment..

- Value shape: string. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### OrderChargePreviousAttributesInput.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. 

### OrderChargePreviousAttributesInput.name

### OrderChargePreviousAttributesInput.name variant 1

anyOf variant 1: What the buyer sees for this charge at checkout and on receipts..

- Value shape: string. What the buyer sees for this charge at checkout and on receipts. 

### OrderChargePreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. What the buyer sees for this charge at checkout and on receipts. 

### OrderChargePreviousAttributesInput.order_charge_id

### OrderChargePreviousAttributesInput.order_charge_id variant 1

anyOf variant 1: Unique identifier for this order charge, prefixed `och_`..

- Value shape: string. Unique identifier for this order charge, prefixed `och_`. Unique identifier for this order charge, prefixed `och_`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### OrderChargePreviousAttributesInput.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order charge, prefixed `och_`. 

### OrderChargePreviousAttributesInput.order_id

### OrderChargePreviousAttributesInput.order_id variant 1

anyOf variant 1: Order that owns this charge, including the source order of an invoice snapshot..

- Value shape: string. Order that owns this charge, including the source order of an invoice snapshot. Order that owns this charge, including the source order of an invoice snapshot. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### OrderChargePreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns this charge, including the source order of an invoice snapshot. 

### OrderChargePreviousAttributesInput.percent

### OrderChargePreviousAttributesInput.percent variant 1

anyOf variant 1: Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead..

- Value shape: number. Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. multipleOf: `0.0001`. 

### OrderChargePreviousAttributesInput.percent variant 2

anyOf variant 2.

- Value shape: null. Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. 

### OrderChargePreviousAttributesInput.type

### OrderChargePreviousAttributesInput.type variant 1

anyOf variant 1: What the charge is for. It classifies the charge in reporting and sets its default tax category..

- Value shape: string. What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: `"service_fee"`, `"delivery_fee"`, `"shipping_fee"`, `"handling_fee"`, `"packaging_fee"`, `"small_order_fee"`, `"service_area_fee"`, `"setup_fee"`, `"installation_fee"`, `"cleaning_fee"`, `"booking_fee"`, `"reservation_fee"`, `"ticket_fee"`, `"fulfillment_fee"`, `"restocking_fee"`, `"rush_fee"`, `"other"`.

### OrderChargePreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. What the charge is for. It classifies the charge in reporting and sets its default tax category. 

### OrderChargePreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

