[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionChoiceResourcePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery price before discounts and tax. `amount_money`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesamount_money). |
| `delivery_choice_group_id` | Optional | string or null | ID of the quote choice group these items belong to. `delivery_choice_group_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdelivery_choice_group_id). |
| `delivery_method_id` | Optional | string or null | ID of the delivery method providing this choice. `delivery_method_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdelivery_method_id). |
| `delivery_option_id` | Optional | string or null | ID of the option chosen from the quote. `delivery_option_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdelivery_option_id). |
| `delivery_plan` | Optional | [DeliveryPlanPreviousAttributes](../models/DeliveryPlanPreviousAttributes.md#deliveryplanpreviousattributes) or null | Whether this choice delivers the items together or in separate shipments. |
| `delivery_window_id` | Optional | string or null | ID of the chosen offered window. Omitted when no offered window was chosen. `delivery_window_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdelivery_window_id). |
| `description` | Optional | string or null | Buyer-facing description captured from the chosen method. Omitted when the method had none. `description`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Always present with an API key or dashboard credential. `discount_money`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdiscount_money). |
| `input` | Optional | [DeliverySelectionInstructionsRequestPreviousAttributes](../models/DeliverySelectionInstructionsRequestPreviousAttributes.md#deliveryselectioninstructionsrequestpreviousattributes) or null | Window choice and buyer instructions stored with this selection. Omitted when neither was supplied. |
| `local_delivery` | Optional | [DeliveryShipmentDetailsPreviousAttributes](../models/DeliveryShipmentDetailsPreviousAttributes.md#deliveryshipmentdetailspreviousattributes) or null | Local delivery service details, present for local_delivery choices. |
| `merchant_reference` | Optional | string or null | Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. `merchant_reference`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesmerchant_reference). |
| `name` | Optional | string or null | Buyer-facing name captured from the chosen method. `name`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesname). |
| `order_charge_id` | Optional | string or null | Always present with an API key or dashboard credential. Null when the choice has no order charge. `order_charge_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesorder_charge_id). |
| `order_id` | Optional | string or null | ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. `order_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesorder_id). |
| `pickup` | Optional | [DeliveryPickupDetailsPreviousAttributes](../models/DeliveryPickupDetailsPreviousAttributes.md#deliverypickupdetailspreviousattributes) or null | Pickup Location and collection details, present for pickup choices. |
| `shipment` | Optional | [DeliveryShipmentDetailsPreviousAttributes](../models/DeliveryShipmentDetailsPreviousAttributes.md#deliveryshipmentdetailspreviousattributes) or null | Shipping service details, present for shipment choices. |
| `stable_key` | Optional | string or null | Key identifying the same items and allowed delivery types across quotes. `stable_key`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesstable_key). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Always present with an API key or dashboard credential. `tax_money`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdiscount_money). |
| `timezone` | Optional | string or null | IANA timezone for displaying window_start_at and window_end_at. `timezone`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributestimezone). |
| `total_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Delivery price after discounts and tax. `total_money`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributestotal_money). |
| `type` | Optional | string or null | How this choice delivers the items. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. `type`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributestype). |
| `window_end_at` | Optional | string or null | RFC3339 timestamp. `window_end_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `window_start_at` | Optional | string or null | RFC3339 timestamp. `window_start_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |

### DeliverySelectionChoiceResourcePreviousAttributes.amount_money

Delivery price before discounts and tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### DeliverySelectionChoiceResourcePreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### DeliverySelectionChoiceResourcePreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Delivery price before discounts and tax. 

### DeliverySelectionChoiceResourcePreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### DeliverySelectionChoiceResourcePreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_choice_group_id

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_choice_group_id variant 1

anyOf variant 1: ID of the quote choice group these items belong to..

- Value shape: string. ID of the quote choice group these items belong to. ID of the quote choice group these items belong to. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. ID of the quote choice group these items belong to. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_method_id

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method providing this choice..

- Value shape: string. ID of the delivery method providing this choice. ID of the delivery method providing this choice. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method providing this choice. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_option_id

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_option_id variant 1

anyOf variant 1: ID of the option chosen from the quote..

- Value shape: string. ID of the option chosen from the quote. ID of the option chosen from the quote. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_option_id variant 2

anyOf variant 2.

- Value shape: null. ID of the option chosen from the quote. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_window_id

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_window_id variant 1

anyOf variant 1: ID of the chosen offered window. Omitted when no offered window was chosen..

- Value shape: string. ID of the chosen offered window. Omitted when no offered window was chosen. ID of the chosen offered window. Omitted when no offered window was chosen. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. 

### DeliverySelectionChoiceResourcePreviousAttributes.delivery_window_id variant 2

anyOf variant 2.

- Value shape: null. ID of the chosen offered window. Omitted when no offered window was chosen. 

### DeliverySelectionChoiceResourcePreviousAttributes.description

### DeliverySelectionChoiceResourcePreviousAttributes.description variant 1

anyOf variant 1: Buyer-facing description captured from the chosen method. Omitted when the method had none..

- Value shape: string. Buyer-facing description captured from the chosen method. Omitted when the method had none. 

### DeliverySelectionChoiceResourcePreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing description captured from the chosen method. Omitted when the method had none. 

### DeliverySelectionChoiceResourcePreviousAttributes.discount_money

Always present with an API key or dashboard credential.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### DeliverySelectionChoiceResourcePreviousAttributes.discount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### DeliverySelectionChoiceResourcePreviousAttributes.discount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Always present with an API key or dashboard credential. 

### DeliverySelectionChoiceResourcePreviousAttributes.discount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### DeliverySelectionChoiceResourcePreviousAttributes.discount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### DeliverySelectionChoiceResourcePreviousAttributes.merchant_reference

### DeliverySelectionChoiceResourcePreviousAttributes.merchant_reference variant 1

anyOf variant 1: Reference supplied by the merchant's rate service for this option. Omitted when none was supplied..

- Value shape: string. Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. 

### DeliverySelectionChoiceResourcePreviousAttributes.merchant_reference variant 2

anyOf variant 2.

- Value shape: null. Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. 

### DeliverySelectionChoiceResourcePreviousAttributes.name

### DeliverySelectionChoiceResourcePreviousAttributes.name variant 1

anyOf variant 1: Buyer-facing name captured from the chosen method..

- Value shape: string. Buyer-facing name captured from the chosen method. 

### DeliverySelectionChoiceResourcePreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing name captured from the chosen method. 

### DeliverySelectionChoiceResourcePreviousAttributes.order_charge_id

### DeliverySelectionChoiceResourcePreviousAttributes.order_charge_id variant 1

anyOf variant 1: Always present with an API key or dashboard credential. Null when the choice has no order charge..

- Value shape: string. Always present with an API key or dashboard credential. Null when the choice has no order charge. Always present with an API key or dashboard credential. Null when the choice has no order charge. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### DeliverySelectionChoiceResourcePreviousAttributes.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. Always present with an API key or dashboard credential. Null when the choice has no order charge. 

### DeliverySelectionChoiceResourcePreviousAttributes.order_id

### DeliverySelectionChoiceResourcePreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies..

- Value shape: string. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### DeliverySelectionChoiceResourcePreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. 

### DeliverySelectionChoiceResourcePreviousAttributes.stable_key

### DeliverySelectionChoiceResourcePreviousAttributes.stable_key variant 1

anyOf variant 1: Key identifying the same items and allowed delivery types across quotes..

- Value shape: string. Key identifying the same items and allowed delivery types across quotes. 

### DeliverySelectionChoiceResourcePreviousAttributes.stable_key variant 2

anyOf variant 2.

- Value shape: null. Key identifying the same items and allowed delivery types across quotes. 

### DeliverySelectionChoiceResourcePreviousAttributes.tax_money

Declared alternatives: [DeliverySelectionChoiceResourcePreviousAttributes.discount_money](../models/DeliverySelectionChoiceResourcePreviousAttributes.md#deliveryselectionchoiceresourcepreviousattributesdiscount_money).

### DeliverySelectionChoiceResourcePreviousAttributes.timezone

### DeliverySelectionChoiceResourcePreviousAttributes.timezone variant 1

anyOf variant 1: IANA timezone for displaying window_start_at and window_end_at..

- Value shape: string. IANA timezone for displaying window_start_at and window_end_at. IANA timezone for displaying window_start_at and window_end_at. Example: `"America/New_York"`. 

### DeliverySelectionChoiceResourcePreviousAttributes.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone for displaying window_start_at and window_end_at. 

### DeliverySelectionChoiceResourcePreviousAttributes.total_money

Delivery price after discounts and tax.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### DeliverySelectionChoiceResourcePreviousAttributes.total_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### DeliverySelectionChoiceResourcePreviousAttributes.total_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Delivery price after discounts and tax. 

### DeliverySelectionChoiceResourcePreviousAttributes.total_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### DeliverySelectionChoiceResourcePreviousAttributes.total_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### DeliverySelectionChoiceResourcePreviousAttributes.type

### DeliverySelectionChoiceResourcePreviousAttributes.type variant 1

anyOf variant 1: How this choice delivers the items..

- Value shape: string. How this choice delivers the items. Values: `"shipment"`, `"pickup"`, `"local_delivery"`.

### DeliverySelectionChoiceResourcePreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. How this choice delivers the items. 

### DeliverySelectionChoiceResourcePreviousAttributes.window_end_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### DeliverySelectionChoiceResourcePreviousAttributes.window_start_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

