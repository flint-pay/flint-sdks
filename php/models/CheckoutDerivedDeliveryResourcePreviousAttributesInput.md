[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutDerivedDeliveryResourcePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_reasons` | Optional | Array of string or null | Buyer-safe reasons a choice group has no available option. Groups with an available option contribute no reasons. `buyer_reasons`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributesInput.md#checkoutderiveddeliveryresourcepreviousattributesinputbuyer_reasons). |
| `choice_groups` | Optional | Array of [DeliveryQuoteChoiceGroupResourcePreviousAttributesInput](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinput) or null | Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. `choice_groups`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributesInput.md#checkoutderiveddeliveryresourcepreviousattributesinputchoice_groups). |
| `delivery_quote_id` | Optional | string or null | ID of the checkout's current delivery quote. Omitted until the checkout has one. `delivery_quote_id`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributesInput.md#checkoutderiveddeliveryresourcepreviousattributesinputdelivery_quote_id). |
| `delivery_selection_id` | Optional | string or null | Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. `delivery_selection_id`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributesInput.md#checkoutderiveddeliveryresourcepreviousattributesinputdelivery_selection_id). |
| `evaluation_status` | Optional | string or null | How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`, `"requires_explicit_quote"`. `evaluation_status`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributesInput.md#checkoutderiveddeliveryresourcepreviousattributesinputevaluation_status). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributesInput](../models/DeliveryInputRequirementPreviousAttributesInput.md#deliveryinputrequirementpreviousattributesinput) or null | Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. `input_requirements`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributesInput.md#checkoutderiveddeliveryresourcepreviousattributesinputinput_requirements). |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnosticPreviousAttributesInput](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinput) or null | Always present with an API key or dashboard credential. `merchant_diagnostics`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributesInput.md#checkoutderiveddeliveryresourcepreviousattributesinputmerchant_diagnostics). |

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.buyer_reasons

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.buyer_reasons variant 1

anyOf variant 1: Buyer-safe reasons a choice group has no available option. Groups with an available option contribute no reasons..

- Value shape: Array of string. Buyer-safe reasons a choice group has no available option. Groups with an available option contribute no reasons. 

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.buyer_reasons variant 2

anyOf variant 2.

- Value shape: null. Buyer-safe reasons a choice group has no available option. Groups with an available option contribute no reasons. 

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.choice_groups

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.choice_groups variant 1

anyOf variant 1: Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote..

- Value shape: Array of [DeliveryQuoteChoiceGroupResourcePreviousAttributesInput](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesInput.md#deliveryquotechoicegroupresourcepreviousattributesinput). Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. 

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.choice_groups variant 2

anyOf variant 2.

- Value shape: null. Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. 

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.delivery_quote_id

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.delivery_quote_id variant 1

anyOf variant 1: ID of the checkout's current delivery quote. Omitted until the checkout has one..

- Value shape: string. ID of the checkout's current delivery quote. Omitted until the checkout has one. ID of the checkout's current delivery quote. Omitted until the checkout has one. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. 

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.delivery_quote_id variant 2

anyOf variant 2.

- Value shape: null. ID of the checkout's current delivery quote. Omitted until the checkout has one. 

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.delivery_selection_id

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.delivery_selection_id variant 1

anyOf variant 1: Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes..

- Value shape: string. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. 

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.evaluation_status

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.evaluation_status variant 1

anyOf variant 1: How completely Flint evaluated the candidate delivery methods..

- Value shape: string. How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`, `"requires_explicit_quote"`.

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.evaluation_status variant 2

anyOf variant 2.

- Value shape: null. How completely Flint evaluated the candidate delivery methods. 

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.expires_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.input_requirements

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.input_requirements variant 1

anyOf variant 1: Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributesInput](../models/DeliveryInputRequirementPreviousAttributesInput.md#deliveryinputrequirementpreviousattributesinput). Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. 

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. 

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.merchant_diagnostics

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.merchant_diagnostics variant 1

anyOf variant 1: Always present with an API key or dashboard credential..

- Value shape: Array of [DeliveryMerchantDiagnosticPreviousAttributesInput](../models/DeliveryMerchantDiagnosticPreviousAttributesInput.md#deliverymerchantdiagnosticpreviousattributesinput). Always present with an API key or dashboard credential. 

### CheckoutDerivedDeliveryResourcePreviousAttributesInput.merchant_diagnostics variant 2

anyOf variant 2.

- Value shape: null. Always present with an API key or dashboard credential. 

