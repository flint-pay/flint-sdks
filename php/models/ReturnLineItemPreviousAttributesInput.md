[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineItemPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_quantity` | Optional | integer or null | Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. `accepted_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputaccepted_quantity). |
| `allowed_resolution_types` | Optional | Array of string or null | Resolution types that can settle this line's approved quantity. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputallowed_resolution_types). |
| `approved_quantity` | Optional | integer or null | Units the decision approved. Whole-number quantity; fractional quantities are not supported. `approved_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputapproved_quantity). |
| `automatic_resolution_type` | Optional | string or null | The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. `automatic_resolution_type`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputautomatic_resolution_type). |
| `available_resolution_quantity` | Optional | integer or null | Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. `available_resolution_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputavailable_resolution_quantity). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput) or null | Components of the bundle the line was sold from. `bundle_components`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputbundle_id). |
| `buyer_note` | Optional | string or null | Note the buyer gave about this line. Some return reasons require one. `buyer_note`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputbuyer_note). |
| `canceled_quantity` | Optional | integer or null | Approved units canceled later. Whole-number quantity; fractional quantities are not supported. `canceled_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputcanceled_quantity). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `decided_by` | Optional | [ReturnActorPreviousAttributesInput](../models/ReturnActorPreviousAttributesInput.md#returnactorpreviousattributesinput) or null | Who recorded the decision on this line. |
| `decision_at` | Optional | string or null | RFC3339 timestamp. `decision_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `decline_reason` | Optional | string or null | Why the line's declined quantity was declined. Values: `"not_eligible"`, `"quantity_unavailable"`, `"evidence_missing"`, `"suspected_abuse"`, `"merchant_discretion"`, `"other"`. `decline_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputdecline_reason). |
| `decline_reason_message` | Optional | string or null | Detail sent with the decline. `decline_reason_message`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputdecline_reason_message). |
| `declined_quantity` | Optional | integer or null | Units the decision declined. Whole-number quantity; fractional quantities are not supported. `declined_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputdeclined_quantity). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputdescription). |
| `dispositioned_quantity` | Optional | integer or null | Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. `dispositioned_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputdispositioned_quantity). |
| `eligibility` | Optional | [ReturnLineItemEligibilityPreviousAttributesInput](../models/ReturnLineItemEligibilityPreviousAttributesInput.md#returnlineitemeligibilitypreviousattributesinput) or null | How the pinned return policy judged this line when the Return was created, with the policy revision it used. |
| `fulfillment` | Optional | [FulfillmentPreviousAttributesInput](../models/FulfillmentPreviousAttributesInput.md#fulfillmentpreviousattributesinput) or null | Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment. |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment the units were delivered in. `fulfillment_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputfulfillment_id). |
| `handed_off_quantity` | Optional | integer or null | Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. `handed_off_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputhanded_off_quantity). |
| `image` | Optional | [ImagePreviousAttributesInput](../models/ImagePreviousAttributesInput.md#imagepreviousattributesinput) or null | Image of the item as sold. |
| `inspected_quantity` | Optional | integer or null | Units that have been inspected. Whole-number quantity; fractional quantities are not supported. `inspected_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputinspected_quantity). |
| `inspection_waived_at` | Optional | string or null | RFC3339 timestamp. `inspection_waived_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `inspection_waived_by` | Optional | [ReturnActorPreviousAttributesInput](../models/ReturnActorPreviousAttributesInput.md#returnactorpreviousattributesinput) or null | Who waived inspection for this line. |
| `inspection_waiver_reason` | Optional | string or null | Why inspection was waived for this line. Values: `"policy_override"`, `"trusted_in_store_handoff"`, `"merchant_review"`, `"other"`. `inspection_waiver_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputinspection_waiver_reason). |
| `inspection_waiver_reason_message` | Optional | string or null | Detail sent when inspection was waived. `inspection_waiver_reason_message`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputinspection_waiver_reason_message). |
| `is_inspection_required` | Optional | boolean or null | Whether returned units of this line must be inspected. `is_inspection_required`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputis_inspection_required). |
| `is_policy_overridden` | Optional | boolean or null | Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. `is_policy_overridden`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputis_policy_overridden). |
| `merchandise_status` | Optional | string or null | Where this line's merchandise stands, from handoff through disposition. Values: [9 declared values](#returnlineitempreviousattributesinput-merchandise_status-values). `merchandise_status`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputmerchandise_status). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributesInput](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinput) or null | Modifiers selected on the order line, with their prices. `modifiers`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputname). |
| `order_id` | Optional | string or null | Order that owns order_line_item_id. `order_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item the units come from. `order_line_item_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputorder_line_item_id). |
| `overridden_at` | Optional | string or null | RFC3339 timestamp. `overridden_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `overridden_by` | Optional | [ReturnActorPreviousAttributesInput](../models/ReturnActorPreviousAttributesInput.md#returnactorpreviousattributesinput) or null | Who recorded the override. |
| `override_reason` | Optional | string or null | Why the decision overrode the pinned return policy's proposal. Values: `"customer_service_exception"`, `"policy_correction"`, `"risk_review"`, `"merchant_discretion"`, `"other"`. `override_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputoverride_reason). |
| `override_reason_message` | Optional | string or null | Detail sent with the override. `override_reason_message`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputoverride_reason_message). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. `product_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputproduct_id). |
| `received_quantity` | Optional | integer or null | Units that arrived. Whole-number quantity; fractional quantities are not supported. `received_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputreceived_quantity). |
| `receiving_location_id` | Optional | string or null | ID of the Location the buyer sends the merchandise to. Absent when none has to come back. `receiving_location_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputreceiving_location_id). |
| `rejected_quantity` | Optional | integer or null | Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. `rejected_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputrejected_quantity). |
| `release_timing` | Optional | string or null | Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. `release_timing`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputrelease_timing). |
| `requested_quantity` | Optional | integer or null | Units the request asked to return. Whole-number quantity; fractional quantities are not supported. `requested_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputrequested_quantity). |
| `requested_resolution_type` | Optional | string or null | Outcome requested for this line when it was created. Absent when none was requested. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `requested_resolution_type`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputrequested_resolution_type). |
| `resolution_status` | Optional | string or null | Whether the value for this line's approved quantity has been delivered. Values: `"not_selected"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`. `resolution_status`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputresolution_status). |
| `resolved_quantity` | Optional | integer or null | Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. `resolved_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputresolved_quantity). |
| `return_id` | Optional | string or null | ID of the Return this line belongs to. `return_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputreturn_id). |
| `return_line_item_id` | Optional | string or null | Unique identifier for this return line item, prefixed `retli_`. `return_line_item_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputreturn_line_item_id). |
| `return_reason` | Optional | [ReturnReasonPreviousAttributesInput](../models/ReturnReasonPreviousAttributesInput.md#returnreasonpreviousattributesinput) or null | Present only when `expand` includes `line_items.return_reason`; `null` when expanded and there is no related return reason. |
| `return_reason_handle` | Optional | string or null | Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. `return_reason_handle`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputreturn_reason_handle). |
| `return_reason_id` | Optional | string or null | ID of the reason chosen for this line. `return_reason_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputreturn_reason_id). |
| `return_reason_name` | Optional | string or null | Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. `return_reason_name`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputreturn_reason_name). |
| `return_required_quantity` | Optional | integer or null | How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. `return_required_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputreturn_required_quantity). |
| `return_resolution_ids` | Optional | Array of string or null | IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. `return_resolution_ids`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputreturn_resolution_ids). |
| `return_value` | Optional | [ReturnLineItemValuePreviousAttributesInput](../models/ReturnLineItemValuePreviousAttributesInput.md#returnlineitemvaluepreviousattributesinput) or null | Value of the line's units, fixed when the line was created: what the buyer paid for them, less what was already refunded or returned. |
| `review_required_quantity` | Optional | integer or null | Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. `review_required_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputreview_required_quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputsku). |
| `status` | Optional | string or null | Where this line stands. Same values and meanings as the Return's `status`, applied to the line. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. Items values: `"cancel"`, `"waive_inspection"`. `supported_actions`: [declared alternatives](../models/ReturnLineItemPreviousAttributesInput.md#returnlineitempreviousattributesinputsupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `variant_id` | Optional | string or null | ID of the catalog variant the item was sold from. `variant_id`: [declared alternatives](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputvariant_id). |

#### ReturnLineItemPreviousAttributesInput merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`

### ReturnLineItemPreviousAttributesInput.accepted_quantity

### ReturnLineItemPreviousAttributesInput.accepted_quantity variant 1

anyOf variant 1: Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.accepted_quantity variant 2

anyOf variant 2.

- Value shape: null. Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.allowed_resolution_types

### ReturnLineItemPreviousAttributesInput.allowed_resolution_types variant 1

anyOf variant 1: Resolution types that can settle this line's approved quantity..

- Value shape: Array of string. Resolution types that can settle this line's approved quantity. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`.

### ReturnLineItemPreviousAttributesInput.allowed_resolution_types variant 2

anyOf variant 2.

- Value shape: null. Resolution types that can settle this line's approved quantity. 

### ReturnLineItemPreviousAttributesInput.approved_quantity

### ReturnLineItemPreviousAttributesInput.approved_quantity variant 1

anyOf variant 1: Units the decision approved. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units the decision approved. Whole-number quantity; fractional quantities are not supported. Units the decision approved. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.approved_quantity variant 2

anyOf variant 2.

- Value shape: null. Units the decision approved. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.automatic_resolution_type

### ReturnLineItemPreviousAttributesInput.automatic_resolution_type variant 1

anyOf variant 1: The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually..

- Value shape: string. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Example: `"refund"`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`.

### ReturnLineItemPreviousAttributesInput.automatic_resolution_type variant 2

anyOf variant 2.

- Value shape: null. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. 

### ReturnLineItemPreviousAttributesInput.available_resolution_quantity

### ReturnLineItemPreviousAttributesInput.available_resolution_quantity variant 1

anyOf variant 1: Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.available_resolution_quantity variant 2

anyOf variant 2.

- Value shape: null. Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.bundle_components

### ReturnLineItemPreviousAttributesInput.bundle_components variant 1

anyOf variant 1: Components of the bundle the line was sold from..

- Value shape: Array of [BundleComponentPreviousAttributesInput](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinput). Components of the bundle the line was sold from. 

### ReturnLineItemPreviousAttributesInput.bundle_components variant 2

anyOf variant 2.

- Value shape: null. Components of the bundle the line was sold from. 

### ReturnLineItemPreviousAttributesInput.bundle_id

Declared alternatives: [OrderLineItemPreviousAttributesInput.bundle_id](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputbundle_id).

### ReturnLineItemPreviousAttributesInput.buyer_note

### ReturnLineItemPreviousAttributesInput.buyer_note variant 1

anyOf variant 1: Note the buyer gave about this line. Some return reasons require one..

- Value shape: string. Note the buyer gave about this line. Some return reasons require one. 

### ReturnLineItemPreviousAttributesInput.buyer_note variant 2

anyOf variant 2.

- Value shape: null. Note the buyer gave about this line. Some return reasons require one. 

### ReturnLineItemPreviousAttributesInput.canceled_quantity

### ReturnLineItemPreviousAttributesInput.canceled_quantity variant 1

anyOf variant 1: Approved units canceled later. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Approved units canceled later. Whole-number quantity; fractional quantities are not supported. Approved units canceled later. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.canceled_quantity variant 2

anyOf variant 2.

- Value shape: null. Approved units canceled later. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnLineItemPreviousAttributesInput.decision_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnLineItemPreviousAttributesInput.decline_reason

### ReturnLineItemPreviousAttributesInput.decline_reason variant 1

anyOf variant 1: Why the line's declined quantity was declined..

- Value shape: string. Why the line's declined quantity was declined. Values: `"not_eligible"`, `"quantity_unavailable"`, `"evidence_missing"`, `"suspected_abuse"`, `"merchant_discretion"`, `"other"`.

### ReturnLineItemPreviousAttributesInput.decline_reason variant 2

anyOf variant 2.

- Value shape: null. Why the line's declined quantity was declined. 

### ReturnLineItemPreviousAttributesInput.decline_reason_message

### ReturnLineItemPreviousAttributesInput.decline_reason_message variant 1

anyOf variant 1: Detail sent with the decline..

- Value shape: string. Detail sent with the decline. 

### ReturnLineItemPreviousAttributesInput.decline_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail sent with the decline. 

### ReturnLineItemPreviousAttributesInput.declined_quantity

### ReturnLineItemPreviousAttributesInput.declined_quantity variant 1

anyOf variant 1: Units the decision declined. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units the decision declined. Whole-number quantity; fractional quantities are not supported. Units the decision declined. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.declined_quantity variant 2

anyOf variant 2.

- Value shape: null. Units the decision declined. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.description

Declared alternatives: [OrderLineItemPreviousAttributesInput.description](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputdescription).

### ReturnLineItemPreviousAttributesInput.dispositioned_quantity

### ReturnLineItemPreviousAttributesInput.dispositioned_quantity variant 1

anyOf variant 1: Units with a successful disposition. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.dispositioned_quantity variant 2

anyOf variant 2.

- Value shape: null. Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.fulfillment_id

### ReturnLineItemPreviousAttributesInput.fulfillment_id variant 1

anyOf variant 1: ID of the fulfillment the units were delivered in..

- Value shape: string. ID of the fulfillment the units were delivered in. ID of the fulfillment the units were delivered in. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### ReturnLineItemPreviousAttributesInput.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fulfillment the units were delivered in. 

### ReturnLineItemPreviousAttributesInput.handed_off_quantity

### ReturnLineItemPreviousAttributesInput.handed_off_quantity variant 1

anyOf variant 1: Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.handed_off_quantity variant 2

anyOf variant 2.

- Value shape: null. Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.inspected_quantity

### ReturnLineItemPreviousAttributesInput.inspected_quantity variant 1

anyOf variant 1: Units that have been inspected. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units that have been inspected. Whole-number quantity; fractional quantities are not supported. Units that have been inspected. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.inspected_quantity variant 2

anyOf variant 2.

- Value shape: null. Units that have been inspected. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.inspection_waived_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnLineItemPreviousAttributesInput.inspection_waiver_reason

### ReturnLineItemPreviousAttributesInput.inspection_waiver_reason variant 1

anyOf variant 1: Why inspection was waived for this line..

- Value shape: string. Why inspection was waived for this line. Values: `"policy_override"`, `"trusted_in_store_handoff"`, `"merchant_review"`, `"other"`.

### ReturnLineItemPreviousAttributesInput.inspection_waiver_reason variant 2

anyOf variant 2.

- Value shape: null. Why inspection was waived for this line. 

### ReturnLineItemPreviousAttributesInput.inspection_waiver_reason_message

### ReturnLineItemPreviousAttributesInput.inspection_waiver_reason_message variant 1

anyOf variant 1: Detail sent when inspection was waived..

- Value shape: string. Detail sent when inspection was waived. 

### ReturnLineItemPreviousAttributesInput.inspection_waiver_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail sent when inspection was waived. 

### ReturnLineItemPreviousAttributesInput.is_inspection_required

### ReturnLineItemPreviousAttributesInput.is_inspection_required variant 1

anyOf variant 1: Whether returned units of this line must be inspected..

- Value shape: boolean. Whether returned units of this line must be inspected. 

### ReturnLineItemPreviousAttributesInput.is_inspection_required variant 2

anyOf variant 2.

- Value shape: null. Whether returned units of this line must be inspected. 

### ReturnLineItemPreviousAttributesInput.is_policy_overridden

### ReturnLineItemPreviousAttributesInput.is_policy_overridden variant 1

anyOf variant 1: Whether the decision overrode the pinned return policy's proposal. `override_reason` says why..

- Value shape: boolean. Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. 

### ReturnLineItemPreviousAttributesInput.is_policy_overridden variant 2

anyOf variant 2.

- Value shape: null. Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. 

### ReturnLineItemPreviousAttributesInput.merchandise_status

### ReturnLineItemPreviousAttributesInput.merchandise_status variant 1

anyOf variant 1: Where this line's merchandise stands, from handoff through disposition..

- Value shape: string. Where this line's merchandise stands, from handoff through disposition. Values: `"not_required"`, `"awaiting_handoff"`, `"in_transit"`, `"partially_received"`, `"inspection_required"`, `"partially_inspected"`, `"inspection_review_required"`, `"disposition_required"`, `"resolved"`.

### ReturnLineItemPreviousAttributesInput.merchandise_status variant 2

anyOf variant 2.

- Value shape: null. Where this line's merchandise stands, from handoff through disposition. 

### ReturnLineItemPreviousAttributesInput.modifiers

### ReturnLineItemPreviousAttributesInput.modifiers variant 1

anyOf variant 1: Modifiers selected on the order line, with their prices..

- Value shape: Array of [OrderLineItemModifierPreviousAttributesInput](../models/OrderLineItemModifierPreviousAttributesInput.md#orderlineitemmodifierpreviousattributesinput). Modifiers selected on the order line, with their prices. 

### ReturnLineItemPreviousAttributesInput.modifiers variant 2

anyOf variant 2.

- Value shape: null. Modifiers selected on the order line, with their prices. 

### ReturnLineItemPreviousAttributesInput.name

Declared alternatives: [OrderLineItemPreviousAttributesInput.name](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputname).

### ReturnLineItemPreviousAttributesInput.order_id

### ReturnLineItemPreviousAttributesInput.order_id variant 1

anyOf variant 1: Order that owns order_line_item_id..

- Value shape: string. Order that owns order_line_item_id. Order that owns order_line_item_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### ReturnLineItemPreviousAttributesInput.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns order_line_item_id. 

### ReturnLineItemPreviousAttributesInput.order_line_item_id

### ReturnLineItemPreviousAttributesInput.order_line_item_id variant 1

anyOf variant 1: ID of the order line item the units come from..

- Value shape: string. ID of the order line item the units come from. ID of the order line item the units come from. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### ReturnLineItemPreviousAttributesInput.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item the units come from. 

### ReturnLineItemPreviousAttributesInput.overridden_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnLineItemPreviousAttributesInput.override_reason

### ReturnLineItemPreviousAttributesInput.override_reason variant 1

anyOf variant 1: Why the decision overrode the pinned return policy's proposal..

- Value shape: string. Why the decision overrode the pinned return policy's proposal. Values: `"customer_service_exception"`, `"policy_correction"`, `"risk_review"`, `"merchant_discretion"`, `"other"`.

### ReturnLineItemPreviousAttributesInput.override_reason variant 2

anyOf variant 2.

- Value shape: null. Why the decision overrode the pinned return policy's proposal. 

### ReturnLineItemPreviousAttributesInput.override_reason_message

### ReturnLineItemPreviousAttributesInput.override_reason_message variant 1

anyOf variant 1: Detail sent with the override..

- Value shape: string. Detail sent with the override. 

### ReturnLineItemPreviousAttributesInput.override_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail sent with the override. 

### ReturnLineItemPreviousAttributesInput.product_id

### ReturnLineItemPreviousAttributesInput.product_id variant 1

anyOf variant 1: ID of the catalog product the item was sold from..

- Value shape: string. ID of the catalog product the item was sold from. ID of the catalog product the item was sold from. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ReturnLineItemPreviousAttributesInput.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the item was sold from. 

### ReturnLineItemPreviousAttributesInput.received_quantity

### ReturnLineItemPreviousAttributesInput.received_quantity variant 1

anyOf variant 1: Units that arrived. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units that arrived. Whole-number quantity; fractional quantities are not supported. Units that arrived. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.received_quantity variant 2

anyOf variant 2.

- Value shape: null. Units that arrived. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.receiving_location_id

### ReturnLineItemPreviousAttributesInput.receiving_location_id variant 1

anyOf variant 1: ID of the Location the buyer sends the merchandise to. Absent when none has to come back..

- Value shape: string. ID of the Location the buyer sends the merchandise to. Absent when none has to come back. ID of the Location the buyer sends the merchandise to. Absent when none has to come back. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnLineItemPreviousAttributesInput.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the buyer sends the merchandise to. Absent when none has to come back. 

### ReturnLineItemPreviousAttributesInput.rejected_quantity

### ReturnLineItemPreviousAttributesInput.rejected_quantity variant 1

anyOf variant 1: Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.rejected_quantity variant 2

anyOf variant 2.

- Value shape: null. Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.release_timing

### ReturnLineItemPreviousAttributesInput.release_timing variant 1

anyOf variant 1: Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release..

- Value shape: string. Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`.

### ReturnLineItemPreviousAttributesInput.release_timing variant 2

anyOf variant 2.

- Value shape: null. Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. 

### ReturnLineItemPreviousAttributesInput.requested_quantity

### ReturnLineItemPreviousAttributesInput.requested_quantity variant 1

anyOf variant 1: Units the request asked to return. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units the request asked to return. Whole-number quantity; fractional quantities are not supported. Units the request asked to return. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.requested_quantity variant 2

anyOf variant 2.

- Value shape: null. Units the request asked to return. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.requested_resolution_type

### ReturnLineItemPreviousAttributesInput.requested_resolution_type variant 1

anyOf variant 1: Outcome requested for this line when it was created. Absent when none was requested..

- Value shape: string. Outcome requested for this line when it was created. Absent when none was requested. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`.

### ReturnLineItemPreviousAttributesInput.requested_resolution_type variant 2

anyOf variant 2.

- Value shape: null. Outcome requested for this line when it was created. Absent when none was requested. 

### ReturnLineItemPreviousAttributesInput.resolution_status

### ReturnLineItemPreviousAttributesInput.resolution_status variant 1

anyOf variant 1: Whether the value for this line's approved quantity has been delivered..

- Value shape: string. Whether the value for this line's approved quantity has been delivered. Values: `"not_selected"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`.

### ReturnLineItemPreviousAttributesInput.resolution_status variant 2

anyOf variant 2.

- Value shape: null. Whether the value for this line's approved quantity has been delivered. 

### ReturnLineItemPreviousAttributesInput.resolved_quantity

### ReturnLineItemPreviousAttributesInput.resolved_quantity variant 1

anyOf variant 1: Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.resolved_quantity variant 2

anyOf variant 2.

- Value shape: null. Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.return_id

### ReturnLineItemPreviousAttributesInput.return_id variant 1

anyOf variant 1: ID of the Return this line belongs to..

- Value shape: string. ID of the Return this line belongs to. ID of the Return this line belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnLineItemPreviousAttributesInput.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return this line belongs to. 

### ReturnLineItemPreviousAttributesInput.return_line_item_id

### ReturnLineItemPreviousAttributesInput.return_line_item_id variant 1

anyOf variant 1: Unique identifier for this return line item, prefixed `retli_`..

- Value shape: string. Unique identifier for this return line item, prefixed `retli_`. Unique identifier for this return line item, prefixed `retli_`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnLineItemPreviousAttributesInput.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return line item, prefixed `retli_`. 

### ReturnLineItemPreviousAttributesInput.return_reason_handle

### ReturnLineItemPreviousAttributesInput.return_reason_handle variant 1

anyOf variant 1: Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it..

- Value shape: string. Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. 

### ReturnLineItemPreviousAttributesInput.return_reason_handle variant 2

anyOf variant 2.

- Value shape: null. Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. 

### ReturnLineItemPreviousAttributesInput.return_reason_id

### ReturnLineItemPreviousAttributesInput.return_reason_id variant 1

anyOf variant 1: ID of the reason chosen for this line..

- Value shape: string. ID of the reason chosen for this line. ID of the reason chosen for this line. Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. 

### ReturnLineItemPreviousAttributesInput.return_reason_id variant 2

anyOf variant 2.

- Value shape: null. ID of the reason chosen for this line. 

### ReturnLineItemPreviousAttributesInput.return_reason_name

### ReturnLineItemPreviousAttributesInput.return_reason_name variant 1

anyOf variant 1: Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it..

- Value shape: string. Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. 

### ReturnLineItemPreviousAttributesInput.return_reason_name variant 2

anyOf variant 2.

- Value shape: null. Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. 

### ReturnLineItemPreviousAttributesInput.return_required_quantity

### ReturnLineItemPreviousAttributesInput.return_required_quantity variant 1

anyOf variant 1: How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money..

- Value shape: integer. How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.return_required_quantity variant 2

anyOf variant 2.

- Value shape: null. How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. 

### ReturnLineItemPreviousAttributesInput.return_resolution_ids

### ReturnLineItemPreviousAttributesInput.return_resolution_ids variant 1

anyOf variant 1: IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions..

- Value shape: Array of string. IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. Items: Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnLineItemPreviousAttributesInput.return_resolution_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. 

### ReturnLineItemPreviousAttributesInput.review_required_quantity

### ReturnLineItemPreviousAttributesInput.review_required_quantity variant 1

anyOf variant 1: Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributesInput.review_required_quantity variant 2

anyOf variant 2.

- Value shape: null. Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributesInput.selected_options

Declared alternatives: [OrderLineItemPreviousAttributesInput.selected_options](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputselected_options).

### ReturnLineItemPreviousAttributesInput.sku

Declared alternatives: [OrderLineItemPreviousAttributesInput.sku](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputsku).

### ReturnLineItemPreviousAttributesInput.status

### ReturnLineItemPreviousAttributesInput.status variant 1

anyOf variant 1: Where this line stands. Same values and meanings as the Return's `status`, applied to the line..

- Value shape: string. Where this line stands. Same values and meanings as the Return's `status`, applied to the line. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`.

### ReturnLineItemPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Where this line stands. Same values and meanings as the Return's `status`, applied to the line. 

### ReturnLineItemPreviousAttributesInput.supported_actions

### ReturnLineItemPreviousAttributesInput.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected..

- Value shape: Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. Items values: `"cancel"`, `"waive_inspection"`.

### ReturnLineItemPreviousAttributesInput.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. 

### ReturnLineItemPreviousAttributesInput.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnLineItemPreviousAttributesInput.variant_id

Declared alternatives: [OrderLineItemPreviousAttributesInput.variant_id](../models/OrderLineItemPreviousAttributesInput.md#orderlineitempreviousattributesinputvariant_id).

