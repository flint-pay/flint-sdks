[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionChoiceResourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Delivery price before discounts and tax. |
| `delivery_choice_group_id` | Optional | string or null | ID of the quote choice group these items belong to. `delivery_choice_group_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinputdelivery_choice_group_id). |
| `delivery_method_id` | Optional | string or null | ID of the delivery method providing this choice. `delivery_method_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinputdelivery_method_id). |
| `delivery_option_id` | Optional | string or null | ID of the option chosen from the quote. `delivery_option_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinputdelivery_option_id). |
| `delivery_plan` | Optional | [DeliveryPlanPreviousAttributesInput](../models/DeliveryPlanPreviousAttributesInput.md#deliveryplanpreviousattributesinput) or null | Whether this choice delivers the items together or in separate shipments. |
| `delivery_window_id` | Optional | string or null | ID of the chosen offered window. Omitted when no offered window was chosen. `delivery_window_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinputdelivery_window_id). |
| `description` | Optional | string or null | Buyer-facing description captured from the chosen method. Omitted when the method had none. `description`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinputdescription). |
| `discount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Always present with an API key or dashboard credential. |
| `input` | Optional | [DeliverySelectionInstructionsRequestPreviousAttributesInput](../models/DeliverySelectionInstructionsRequestPreviousAttributesInput.md#deliveryselectioninstructionsrequestpreviousattributesinput) or null | Window choice and buyer instructions stored with this selection. Omitted when neither was supplied. |
| `local_delivery` | Optional | [DeliveryLocalDeliveryDetailsPreviousAttributesInput](../models/DeliveryLocalDeliveryDetailsPreviousAttributesInput.md#deliverylocaldeliverydetailspreviousattributesinput) or null | Local delivery service details, present for local_delivery choices. |
| `merchant_reference` | Optional | string or null | Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. `merchant_reference`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinputmerchant_reference). |
| `name` | Optional | string or null | Buyer-facing name captured from the chosen method. `name`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinputname). |
| `order_charge_id` | Optional | string or null or null | Always present with an API key or dashboard credential. Null when the choice has no order charge. `order_charge_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinputorder_charge_id). |
| `order_id` | Optional | string or null | ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. `order_id`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinputorder_id). |
| `pickup` | Optional | [DeliveryPickupDetailsPreviousAttributesInput](../models/DeliveryPickupDetailsPreviousAttributesInput.md#deliverypickupdetailspreviousattributesinput) or null | Pickup Location and collection details, present for pickup choices. |
| `shipment` | Optional | [DeliveryShipmentDetailsPreviousAttributesInput](../models/DeliveryShipmentDetailsPreviousAttributesInput.md#deliveryshipmentdetailspreviousattributesinput) or null | Shipping service details, present for shipment choices. |
| `stable_key` | Optional | string or null | Key identifying the same items and allowed delivery types across quotes. `stable_key`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinputstable_key). |
| `tax_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Always present with an API key or dashboard credential. |
| `timezone` | Optional | string or null | IANA timezone for displaying window_start_at and window_end_at. `timezone`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinputtimezone). |
| `total_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Delivery price after discounts and tax. |
| `type` | Optional | string or null | How this choice delivers the items. Values: `"shipment"`, `"pickup"`, `"local_delivery"`. `type`: [declared alternatives](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinputtype). |
| `window_end_at` | Optional | string or null | RFC3339 timestamp. `window_end_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `window_start_at` | Optional | string or null | RFC3339 timestamp. `window_start_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |

### DeliverySelectionChoiceResourcePreviousAttributesInput.delivery_choice_group_id

### DeliverySelectionChoiceResourcePreviousAttributesInput.delivery_choice_group_id variant 1

anyOf variant 1: ID of the quote choice group these items belong to..

- Value shape: string. ID of the quote choice group these items belong to. ID of the quote choice group these items belong to. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. ID of the quote choice group these items belong to. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.delivery_method_id

### DeliverySelectionChoiceResourcePreviousAttributesInput.delivery_method_id variant 1

anyOf variant 1: ID of the delivery method providing this choice..

- Value shape: string. ID of the delivery method providing this choice. ID of the delivery method providing this choice. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery method providing this choice. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.delivery_option_id

### DeliverySelectionChoiceResourcePreviousAttributesInput.delivery_option_id variant 1

anyOf variant 1: ID of the option chosen from the quote..

- Value shape: string. ID of the option chosen from the quote. ID of the option chosen from the quote. Example: `"dopt_01KEZF7C00JM9TDZQZ5KQJ6923"`. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.delivery_option_id variant 2

anyOf variant 2.

- Value shape: null. ID of the option chosen from the quote. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.delivery_window_id

### DeliverySelectionChoiceResourcePreviousAttributesInput.delivery_window_id variant 1

anyOf variant 1: ID of the chosen offered window. Omitted when no offered window was chosen..

- Value shape: string. ID of the chosen offered window. Omitted when no offered window was chosen. ID of the chosen offered window. Omitted when no offered window was chosen. Example: `"fwin_f3539d59e7d8e9ea803c681d0d155ecdce9de54aa27b90aec630cae8f086b31d"`. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.delivery_window_id variant 2

anyOf variant 2.

- Value shape: null. ID of the chosen offered window. Omitted when no offered window was chosen. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.description

### DeliverySelectionChoiceResourcePreviousAttributesInput.description variant 1

anyOf variant 1: Buyer-facing description captured from the chosen method. Omitted when the method had none..

- Value shape: string. Buyer-facing description captured from the chosen method. Omitted when the method had none. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing description captured from the chosen method. Omitted when the method had none. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.merchant_reference

### DeliverySelectionChoiceResourcePreviousAttributesInput.merchant_reference variant 1

anyOf variant 1: Reference supplied by the merchant's rate service for this option. Omitted when none was supplied..

- Value shape: string. Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.merchant_reference variant 2

anyOf variant 2.

- Value shape: null. Reference supplied by the merchant's rate service for this option. Omitted when none was supplied. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.name

### DeliverySelectionChoiceResourcePreviousAttributesInput.name variant 1

anyOf variant 1: Buyer-facing name captured from the chosen method..

- Value shape: string. Buyer-facing name captured from the chosen method. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing name captured from the chosen method. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.order_charge_id

### DeliverySelectionChoiceResourcePreviousAttributesInput.order_charge_id variant 1

anyOf variant 1: Always present with an API key or dashboard credential. Null when the choice has no order charge..

- Value shape: (string or null). Always present with an API key or dashboard credential. Null when the choice has no order charge. Always present with an API key or dashboard credential. Null when the choice has no order charge. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. Always present with an API key or dashboard credential. Null when the choice has no order charge. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.order_id

### DeliverySelectionChoiceResourcePreviousAttributesInput.order_id variant 1

anyOf variant 1: ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies..

- Value shape: string. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order this delivery choice belongs to, including the parent of order_charge_id when a charge applies. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.stable_key

### DeliverySelectionChoiceResourcePreviousAttributesInput.stable_key variant 1

anyOf variant 1: Key identifying the same items and allowed delivery types across quotes..

- Value shape: string. Key identifying the same items and allowed delivery types across quotes. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.stable_key variant 2

anyOf variant 2.

- Value shape: null. Key identifying the same items and allowed delivery types across quotes. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.timezone

### DeliverySelectionChoiceResourcePreviousAttributesInput.timezone variant 1

anyOf variant 1: IANA timezone for displaying window_start_at and window_end_at..

- Value shape: string. IANA timezone for displaying window_start_at and window_end_at. IANA timezone for displaying window_start_at and window_end_at. Example: `"America/New_York"`. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.timezone variant 2

anyOf variant 2.

- Value shape: null. IANA timezone for displaying window_start_at and window_end_at. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.type

### DeliverySelectionChoiceResourcePreviousAttributesInput.type variant 1

anyOf variant 1: How this choice delivers the items..

- Value shape: string. How this choice delivers the items. Values: `"shipment"`, `"pickup"`, `"local_delivery"`.

### DeliverySelectionChoiceResourcePreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. How this choice delivers the items. 

### DeliverySelectionChoiceResourcePreviousAttributesInput.window_end_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### DeliverySelectionChoiceResourcePreviousAttributesInput.window_start_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

