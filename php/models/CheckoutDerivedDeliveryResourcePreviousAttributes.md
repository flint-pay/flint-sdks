[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutDerivedDeliveryResourcePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_reasons` | Optional | Array of string or null | Buyer-safe reasons candidate methods did not produce an option. These can be present even when another method is available. `buyer_reasons`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesbuyer_reasons). |
| `choice_groups` | Optional | Array of [DeliveryQuoteChoiceGroupResourcePreviousAttributes](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributes) or null | Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. `choice_groups`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributeschoice_groups). |
| `delivery_quote_id` | Optional | string or null | ID of the checkout's current delivery quote. Omitted until the checkout has one. `delivery_quote_id`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesdelivery_quote_id). |
| `delivery_selection_id` | Optional | string or null | Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. `delivery_selection_id`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesdelivery_selection_id). |
| `evaluation_status` | Optional | string or null | How completely Flint evaluated the candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`, `"requires_explicit_quote"`. `evaluation_status`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesevaluation_status). |
| `expires_at` | Optional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes) or null | Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. `input_requirements`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesinput_requirements). |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnosticPreviousAttributes](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributes) or null | Always present with an API key or dashboard credential. `merchant_diagnostics`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesmerchant_diagnostics). |

### CheckoutDerivedDeliveryResourcePreviousAttributes.buyer_reasons

### CheckoutDerivedDeliveryResourcePreviousAttributes.buyer_reasons variant 1

anyOf variant 1: Buyer-safe reasons candidate methods did not produce an option. These can be present even when another method is available..

- Value shape: Array of string. Buyer-safe reasons candidate methods did not produce an option. These can be present even when another method is available. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.buyer_reasons variant 2

anyOf variant 2.

- Value shape: null. Buyer-safe reasons candidate methods did not produce an option. These can be present even when another method is available. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1

anyOf variant 1: Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote..

- Value shape: Array of [DeliveryQuoteChoiceGroupResourcePreviousAttributes](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributes). Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 2

anyOf variant 2.

- Value shape: null. Groups of order items that each choose their own delivery option. Empty until the checkout has a delivery quote. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_advisories` | Optional | Array of [DeliveryAddressAdvisoryResourcePreviousAttributes](../models/DeliveryAddressAdvisoryResourcePreviousAttributes.md#deliveryaddressadvisoryresourcepreviousattributes) or null | Buyer-actionable address verification results that affected this choice group. A suggested_address is an explicit correction the buyer may confirm; Flint does not apply it silently. `address_advisories`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesaddress_advisories). |
| `allowed_types` | Optional | Array of string or null | Delivery types permitted by this group's items. `allowed_types`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesallowed_types). |
| `availability_status` | Optional | string or null | Whether this group has a delivery option the buyer can choose. Values: `"ready"`, `"needs_input"`, `"unavailable"`. `availability_status`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesavailability_status). |
| `candidate_outcomes` | Optional | Map of (object and Alternative shapes (see declared variants)) or null | Evaluation result for each candidate delivery method, keyed by its method ID. `candidate_outcomes`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes). |
| `delivery_choice_group_id` | Optional | string or null | Identifier used to choose one option for this group. `delivery_choice_group_id`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributeschoice_groups-variant-1-fields-1delivery_choice_group_id). |
| `evaluation_status` | Optional | string or null | How completely Flint evaluated the group's candidate delivery methods. Values: `"complete"`, `"incomplete"`, `"degraded"`. `evaluation_status`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesevaluation_status). |
| `execution_legs` | Optional | Array of [DeliveryQuoteExecutionLegResourcePreviousAttributes](../models/DeliveryQuoteExecutionLegResourcePreviousAttributes.md#deliveryquoteexecutionlegresourcepreviousattributes) or null | Where the group's items leave from, one leg per origin Location, when all of its methods leave from the same Locations. Omitted when the origin depends on the chosen method, such as shipping from a warehouse or picking up at a store. Each option then lists its own execution_legs. `execution_legs`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesexecution_legs). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes) or null | Inputs this group's delivery methods need before they can be priced or selected. `input_requirements`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesinput_requirements). |
| `line_items` | Optional | Array of [DeliveryQuoteLineItemResourcePreviousAttributes](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributes) or null | Order line items, or bundle components, this group covers, with the quantity covered. `line_items`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesline_items). |
| `method_types` | Optional | Array of string or null | Types of the delivery methods that can serve this group's items, each listed once, in the order the methods display. A type is listed before its options are priced, such as a local delivery that waits for the buyer's address, and stays listed while its methods need more input or cannot serve the current input. options lists what the buyer can choose now. A method whose type these items do not allow is left out, and the list is empty when no method can serve them. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`. `method_types`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesmethod_types). |
| `options` | Optional | Array of object or null | Delivery options the buyer can choose now. `options`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributeschoice_groups-variant-1-fields-1options). |
| `previously_selected_delivery_method_id` | Optional | string or null | Method chosen for this group in the previous selection. Omitted when there is none. `previously_selected_delivery_method_id`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributeschoice_groups-variant-1-fields-1previously_selected_delivery_method_id). |
| `stable_key` | Optional | string or null | Identifies the same group across quotes for the same delivery demands and compatible delivery types. It can change when the grouping inputs change. `stable_key`: [declared alternatives](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesstable_key). |

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.address_advisories

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.address_advisories](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesaddress_advisories).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.allowed_types

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.allowed_types](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesallowed_types).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.availability_status

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.availability_status](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesavailability_status).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.candidate_outcomes

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.delivery_choice_group_id

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.delivery_choice_group_id variant 1

anyOf variant 1: Identifier used to choose one option for this group..

- Value shape: string. Identifier used to choose one option for this group. Identifier used to choose one option for this group. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.delivery_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. Identifier used to choose one option for this group. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.evaluation_status

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.evaluation_status](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesevaluation_status).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.execution_legs

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.execution_legs](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesexecution_legs).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.input_requirements

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.input_requirements](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesinput_requirements).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.line_items

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.line_items](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesline_items).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.method_types

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.method_types](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesmethod_types).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1

anyOf variant 1: Delivery options the buyer can choose now..

- Value shape: Array of object. Delivery options the buyer can choose now. Items: A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 2

anyOf variant 2.

- Value shape: null. Delivery options the buyer can choose now. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1

A delivery option in a quote or preview: its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local delivery details.

Field definitions: [shared fields](DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesoptions-variant-1-fields-1).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.arrival_estimate

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.arrival_estimate](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemarrival_estimate).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.charge_tax_category

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.charge_tax_category](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemcharge_tax_category).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.consumed_by_delivery_selection_id

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.consumed_by_delivery_selection_id](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1consumed_by_delivery_selection_id).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.delivery_method_id

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_id](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1delivery_method_id).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.delivery_method_revision_id

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_method_revision_id](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1delivery_method_revision_id).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.delivery_option_id

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.delivery_option_id](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1delivery_option_id).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.delivery_plan

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.delivery_plan](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdelivery_plan).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.description

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.description](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdescription).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.display_position

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.display_position](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemdisplay_position).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.execution_legs

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.execution_legs](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemexecution_legs).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.expires_at

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.expires_at](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1expires_at).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.name

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.name](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemname).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.offered_windows

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.offered_windows](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemoffered_windows).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.recipient_requirements

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.recipient_requirements](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemrecipient_requirements).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.recommended

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.recommended](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemrecommended).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.taxable

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.taxable](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtaxable).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.timezone

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.timezone](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1timezone).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.type

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.type](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemtype).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.window_end_at

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.window_end_at](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1window_end_at).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.window_pricing

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_pricing](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_pricing).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.window_selection

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.window_selection](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributesOptionsItem.md#deliveryquotechoicegroupresourcepreviousattributesoptionsitemwindow_selection).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.options variant 1.[] fields 1.window_start_at

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.option variant 1.window_start_at](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1option-variant-1window_start_at).

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.previously_selected_delivery_method_id

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.previously_selected_delivery_method_id variant 1

anyOf variant 1: Method chosen for this group in the previous selection. Omitted when there is none..

- Value shape: string. Method chosen for this group in the previous selection. Omitted when there is none. Method chosen for this group in the previous selection. Omitted when there is none. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.previously_selected_delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. Method chosen for this group in the previous selection. Omitted when there is none. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.choice_groups variant 1.[] fields 1.stable_key

Declared alternatives: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.stable_key](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributesstable_key).

### CheckoutDerivedDeliveryResourcePreviousAttributes.delivery_quote_id

### CheckoutDerivedDeliveryResourcePreviousAttributes.delivery_quote_id variant 1

anyOf variant 1: ID of the checkout's current delivery quote. Omitted until the checkout has one..

- Value shape: string. ID of the checkout's current delivery quote. Omitted until the checkout has one. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.delivery_quote_id variant 2

anyOf variant 2.

- Value shape: null. ID of the checkout's current delivery quote. Omitted until the checkout has one. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.delivery_selection_id

### CheckoutDerivedDeliveryResourcePreviousAttributes.delivery_selection_id variant 1

anyOf variant 1: Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes..

- Value shape: string. Current delivery selection ID after reconciliation. `null` when no selection is current. Assert this value with expected_delivery_selection_id on checkout delivery writes. 

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

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### CheckoutDerivedDeliveryResourcePreviousAttributes.input_requirements

### CheckoutDerivedDeliveryResourcePreviousAttributes.input_requirements variant 1

anyOf variant 1: Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributes](../models/DeliveryInputRequirementPreviousAttributes.md#deliveryinputrequirementpreviousattributes). Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs the checkout's delivery methods need. Once the checkout has a delivery quote, these are the quote's input_requirements. Before that, they come from the methods alone and name no choice group: the fields in each method's quote_input_fields, and each recipient field a method requires. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.input_requirements variant 1.[] fields 1

Field definitions: [DeliveryQuoteChoiceGroupResourcePreviousAttributes.candidate_outcomes variant 1.{} fields 1.input_requirements variant 1.[] fields 1](../models/DeliveryQuoteChoiceGroupResourcePreviousAttributes.md#deliveryquotechoicegroupresourcepreviousattributescandidate_outcomes-variant-1-fields-1input_requirements-variant-1-fields-1).

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1

anyOf variant 1: Always present with an API key or dashboard credential..

- Value shape: Array of [DeliveryMerchantDiagnosticPreviousAttributes](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributes). Always present with an API key or dashboard credential. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 2

anyOf variant 2.

- Value shape: null. Always present with an API key or dashboard credential. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Optional | string or null | Stable reason the method did not produce an option. - `eligibility_no_match`: The configured eligibility expression excluded the method. - `method_unavailable`: The method was unavailable for this evaluation. - `input_required`: The buyer or caller must provide more information to evaluate the method. - `checkout_context_required`: A checkout session is required to evaluate the method. - `dependency_failure`: Flint could not check whether the method is available. - `dependency_revoked`: The method revision or a dependency was revoked. Publish a corrected revision, rotate the callback signing secret, or choose another method. Values: `"eligibility_no_match"`, `"method_unavailable"`, `"input_required"`, `"checkout_context_required"`, `"dependency_failure"`, `"dependency_revoked"`. `code`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributescode). |
| `delivery_method_id` | Optional | string or null | ID of the method that was evaluated. Omitted when the diagnostic is about a Location. `delivery_method_id`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesmerchant_diagnostics-variant-1-fields-1delivery_method_id). |
| `delivery_method_revision_id` | Optional | string or null | ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. `delivery_method_revision_id`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesmerchant_diagnostics-variant-1-fields-1delivery_method_revision_id). |
| `diagnostic_id` | Optional | string or null | ID to quote when you ask Flint about this diagnostic. `diagnostic_id`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesmerchant_diagnostics-variant-1-fields-1diagnostic_id). |
| `eligibility_mismatches` | Optional | Array of [DeliveryEligibilityMismatchPreviousAttributes](../models/DeliveryEligibilityMismatchPreviousAttributes.md#deliveryeligibilitymismatchpreviousattributes) or null | Configured eligibility predicates that conclusively rejected the method. Present only for eligibility_no_match. `eligibility_mismatches`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributeseligibility_mismatches). |
| `occurred_at` | Optional | string or null | Time Flint recorded this diagnostic. `occurred_at`: [declared alternatives](../models/CheckoutDerivedDeliveryResourcePreviousAttributes.md#checkoutderiveddeliveryresourcepreviousattributesmerchant_diagnostics-variant-1-fields-1occurred_at). |
| `outcome` | Optional | string or null | What happened when Flint evaluated the method or Location. Values: `"unavailable"`, `"input_required"`, `"cannot_calculate"`, `"requires_checkout_context"`. `outcome`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesoutcome). |
| `recommended_action` | Optional | string or null | What the merchant can do to get an option. Values: `"review_configuration"`, `"provide_input"`, `"create_checkout"`, `"retry"`. `recommended_action`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesrecommended_action). |
| `retryable` | Optional | boolean or null | Whether trying again later can succeed. `retryable`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesretryable). |
| `scope` | Optional | string or null | What the diagnostic is about. Values: `"method"`. `scope`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesscope). |
| `summary` | Optional | string or null | Plain-language explanation for the merchant. `summary`: [declared alternatives](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributessummary). |

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.code

Declared alternatives: [DeliveryMerchantDiagnosticPreviousAttributes.code](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributescode).

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.delivery_method_id

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.delivery_method_id variant 1

anyOf variant 1: ID of the method that was evaluated. Omitted when the diagnostic is about a Location..

- Value shape: string. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.delivery_method_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method that was evaluated. Omitted when the diagnostic is about a Location. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.delivery_method_revision_id

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.delivery_method_revision_id variant 1

anyOf variant 1: ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location..

- Value shape: string. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. Example: `"dmetr_01KEZF7C001ZF9D92DY1G51GV9"`. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.delivery_method_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the method revision that was evaluated. Omitted when the diagnostic is about a Location. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.diagnostic_id

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.diagnostic_id variant 1

anyOf variant 1: ID to quote when you ask Flint about this diagnostic..

- Value shape: string. ID to quote when you ask Flint about this diagnostic. ID to quote when you ask Flint about this diagnostic. Example: `"ddiag_01KEZF7C002JPVD08857RGDGPC"`. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.diagnostic_id variant 2

anyOf variant 2.

- Value shape: null. ID to quote when you ask Flint about this diagnostic. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.eligibility_mismatches

Declared alternatives: [DeliveryMerchantDiagnosticPreviousAttributes.eligibility_mismatches](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributeseligibility_mismatches).

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.occurred_at

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.occurred_at variant 1

anyOf variant 1: Time Flint recorded this diagnostic..

- Value shape: string. Time Flint recorded this diagnostic. Time Flint recorded this diagnostic. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.occurred_at variant 2

anyOf variant 2.

- Value shape: null. Time Flint recorded this diagnostic. 

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.outcome

Declared alternatives: [DeliveryMerchantDiagnosticPreviousAttributes.outcome](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesoutcome).

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.recommended_action

Declared alternatives: [DeliveryMerchantDiagnosticPreviousAttributes.recommended_action](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesrecommended_action).

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.retryable

Declared alternatives: [DeliveryMerchantDiagnosticPreviousAttributes.retryable](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesretryable).

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.scope

Declared alternatives: [DeliveryMerchantDiagnosticPreviousAttributes.scope](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributesscope).

### CheckoutDerivedDeliveryResourcePreviousAttributes.merchant_diagnostics variant 1.[] fields 1.summary

Declared alternatives: [DeliveryMerchantDiagnosticPreviousAttributes.summary](../models/DeliveryMerchantDiagnosticPreviousAttributes.md#deliverymerchantdiagnosticpreviousattributessummary).

