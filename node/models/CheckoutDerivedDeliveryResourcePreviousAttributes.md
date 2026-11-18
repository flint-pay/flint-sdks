[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutDerivedDeliveryResourcePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_reasons` | Optional | Array of string or null | Buyer-safe reasons a choice group has no available option. Groups with an available option contribute no reasons. `buyer_reasons`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesbuyer_reasons). |
| `choice_groups` | Optional | Array of [DeliveryQuoteChoiceGroupResourcePreviousAttributes](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributes) or null | Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. `choice_groups`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributeschoice_groups). |
| `delivery_quote_id` | Optional | string or null | ID of the checkout's current delivery quote. Omitted until the checkout has one. `delivery_quote_id`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesdelivery_quote_id). |
| `delivery_selection_id` | Optional | string or null | Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. `delivery_selection_id`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesdelivery_selection_id). |
| `evaluation_status` | Optional | string or null | How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`, `"requires_explicit_quote"`. `evaluation_status`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesevaluation_status). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes) or null | Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. `input_requirements`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesinput_requirements). |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnosticPreviousAttributes](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributes) or null | Always present with an API key or dashboard credential. `merchant_diagnostics`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesmerchant_diagnostics). |

### CheckoutDerivedDeliveryResourcePreviousAttributes.buyer_reasons

### CheckoutDerivedDeliveryResourcePreviousAttributes.buyer_reasons variant 1

anyOf variant 1: Buyer-safe reasons a choice group has no available option. Groups with an available option contribute no reasons..

- Value shape: Array of string. Buyer-safe reasons a choice group has no available option. Groups with an available option contribute no reasons. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.buyer_reasons variant 2

anyOf variant 2.

- Value shape: null. Buyer-safe reasons a choice group has no available option. Groups with an available option contribute no reasons. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1

anyOf variant 1: Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote..

- Value shape: Array of [DeliveryQuoteChoiceGroupResourcePreviousAttributes](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributes). Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 2

anyOf variant 2.

- Value shape: null. Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.delivery_quote_id

### CheckoutDerivedDeliveryResourcePreviousAttributes.delivery_quote_id variant 1

anyOf variant 1: ID of the checkout's current delivery quote. Omitted until the checkout has one..

- Value shape: string. ID of the checkout's current delivery quote. Omitted until the checkout has one. ID of the checkout's current delivery quote. Omitted until the checkout has one. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.delivery_quote_id variant 2

anyOf variant 2.

- Value shape: null. ID of the checkout's current delivery quote. Omitted until the checkout has one. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.delivery_selection_id

### CheckoutDerivedDeliveryResourcePreviousAttributes.delivery_selection_id variant 1

anyOf variant 1: Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes..

- Value shape: string. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.evaluation_status

### CheckoutDerivedDeliveryResourcePreviousAttributes.evaluation_status variant 1

anyOf variant 1: How completely Flint evaluated the candidate delivery methods..

- Value shape: string. How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`, `"requires_explicit_quote"`.

### CheckoutDerivedDeliveryResourcePreviousAttributes.evaluation_status variant 2

anyOf variant 2.

- Value shape: null. How completely Flint evaluated the candidate delivery methods. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.expires_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### CheckoutDerivedDeliveryResourcePreviousAttributes.input_requirements

### CheckoutDerivedDeliveryResourcePreviousAttributes.input_requirements variant 1

anyOf variant 1: Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes). Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1

anyOf variant 1: Always present with an API key or dashboard credential..

- Value shape: Array of [DeliveryMerchantDiagnosticPreviousAttributes](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributes). Always present with an API key or dashboard credential. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 2

anyOf variant 2.

- Value shape: null. Always present with an API key or dashboard credential. 

