[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderChargePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. `amount_money`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesamount_money). |
| `applied_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Resolved charge amount after charge discounts and before additive tax. `applied_money`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesapplied_money). |
| `calculation_basis` | Optional | string or null | The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`. `calculation_basis`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributescalculation_basis). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `description` | Optional | string or null | Optional description of the charge. `description`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesdescription). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. `fulfillment_id`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesfulfillment_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null | What the buyer sees for this charge at checkout and on receipts. `name`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesname). |
| `order_charge_id` | Optional | string or null | Unique identifier for this order charge, prefixed `och_`. `order_charge_id`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesorder_charge_id). |
| `order_id` | Optional | string or null | Order that owns this charge, including the source order of an invoice snapshot. `order_id`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesorder_id). |
| `percent` | Optional | number or null | Percentage points of the base `calculation_basis` names, such as `3` for 3%. Fixed charges use `amount_money` instead. `percent`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributespercent). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Charge amount already refunded. `refunded_money`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributesrefunded_money). |
| `tax` | Optional | [OrderCalculatedChargeTaxPreviousAttributes](../models/OrderCalculatedChargeTaxPreviousAttributes.md#ordercalculatedchargetaxpreviousattributes) or null | How tax applies to this charge. |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Tax calculated for the charge, including any tax already included in its price. `tax_money`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributestax_money). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Applied charge amount plus tax that is not already included in the price. `total_money`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributestotal_money). |
| `type` | Optional | string or null | What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: [17 declared values](BuyerOrderCharge.md#buyerordercharge-type-values). `type`: [declared alternatives](../models/OrderChargePreviousAttributes.md#orderchargepreviousattributestype). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |

### OrderChargePreviousAttributes.amount_money

Fixed charge amount before charge discounts and tax. Percentage charges use percent instead.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderChargePreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderChargePreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Fixed charge amount before charge discounts and tax. Percentage charges use percent instead. 

### OrderChargePreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderChargePreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderChargePreviousAttributes.applied_money

Resolved charge amount after charge discounts and before additive tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderChargePreviousAttributes.applied_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderChargePreviousAttributes.applied_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Resolved charge amount after charge discounts and before additive tax. 

### OrderChargePreviousAttributes.applied_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderChargePreviousAttributes.applied_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderChargePreviousAttributes.calculation_basis

### OrderChargePreviousAttributes.calculation_basis variant 1

anyOf variant 1: The amount a percent charge is calculated from..

- Value shape: string. The amount a percent charge is calculated from. Values: `"subtotal_pre_discount"`, `"subtotal_post_discount"`.

### OrderChargePreviousAttributes.calculation_basis variant 2

anyOf variant 2.

- Value shape: null. The amount a percent charge is calculated from. 

### OrderChargePreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

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

- Value shape: string. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### OrderChargePreviousAttributes.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fulfillment this charge belongs to, such as a shipping fee on its shipment. 

### OrderChargePreviousAttributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

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

- Value shape: string. Unique identifier for this order charge, prefixed `och_`. Unique identifier for this order charge, prefixed `och_`. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### OrderChargePreviousAttributes.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this order charge, prefixed `och_`. 

### OrderChargePreviousAttributes.order_id

### OrderChargePreviousAttributes.order_id variant 1

anyOf variant 1: Order that owns this charge, including the source order of an invoice snapshot..

- Value shape: string. Order that owns this charge, including the source order of an invoice snapshot. Order that owns this charge, including the source order of an invoice snapshot. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

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

### OrderChargePreviousAttributes.refunded_money

Charge amount already refunded.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderChargePreviousAttributes.refunded_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderChargePreviousAttributes.refunded_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Charge amount already refunded. 

### OrderChargePreviousAttributes.refunded_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderChargePreviousAttributes.refunded_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderChargePreviousAttributes.tax_money

Tax calculated for the charge, including any tax already included in its price.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderChargePreviousAttributes.tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderChargePreviousAttributes.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Tax calculated for the charge, including any tax already included in its price. 

### OrderChargePreviousAttributes.tax_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderChargePreviousAttributes.tax_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderChargePreviousAttributes.total_money

Applied charge amount plus tax that is not already included in the price.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderChargePreviousAttributes.total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderChargePreviousAttributes.total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Applied charge amount plus tax that is not already included in the price. 

### OrderChargePreviousAttributes.total_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderChargePreviousAttributes.total_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderChargePreviousAttributes.type

### OrderChargePreviousAttributes.type variant 1

anyOf variant 1: What the charge is for. It classifies the charge in reporting and sets its default tax category..

- Value shape: string. What the charge is for. It classifies the charge in reporting and sets its default tax category. Values: `"service_fee"`, `"delivery_fee"`, `"shipping_fee"`, `"handling_fee"`, `"packaging_fee"`, `"small_order_fee"`, `"service_area_fee"`, `"setup_fee"`, `"installation_fee"`, `"cleaning_fee"`, `"booking_fee"`, `"reservation_fee"`, `"ticket_fee"`, `"fulfillment_fee"`, `"restocking_fee"`, `"rush_fee"`, `"other"`.

### OrderChargePreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. What the charge is for. It classifies the charge in reporting and sets its default tax category. 

### OrderChargePreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

