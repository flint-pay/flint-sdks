[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineItemPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_quantity` | Optional | integer or null | Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. `accepted_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesaccepted_quantity). |
| `allowed_resolution_types` | Optional | Array of string or null | Resolution types that can settle this line's approved quantity. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesallowed_resolution_types). |
| `approved_quantity` | Optional | integer or null | Units the decision approved. Whole-number quantity; fractional quantities are not supported. `approved_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesapproved_quantity). |
| `automatic_resolution_type` | Optional | string or null | The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. `automatic_resolution_type`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesautomatic_resolution_type). |
| `available_resolution_quantity` | Optional | integer or null | Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. `available_resolution_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesavailable_resolution_quantity). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components of the bundle the line was sold from. `bundle_components`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbundle_id). |
| `buyer_note` | Optional | string or null | Note the buyer gave about this line. Some return reasons require one. `buyer_note`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesbuyer_note). |
| `canceled_quantity` | Optional | integer or null | Approved units canceled later. Whole-number quantity; fractional quantities are not supported. `canceled_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributescanceled_quantity). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `decided_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who recorded the decision on this line. |
| `decision_at` | Optional | string or null | RFC3339 timestamp. `decision_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `decline_reason` | Optional | string or null | Why the line's declined quantity was declined. Values: `"not_eligible"`, `"quantity_unavailable"`, `"evidence_missing"`, `"suspected_abuse"`, `"merchant_discretion"`, `"other"`. `decline_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecline_reason). |
| `decline_reason_message` | Optional | string or null | Detail sent with the decline. `decline_reason_message`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecline_reason_message). |
| `declined_quantity` | Optional | integer or null | Units the decision declined. Whole-number quantity; fractional quantities are not supported. `declined_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdeclined_quantity). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription). |
| `dispositioned_quantity` | Optional | integer or null | Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. `dispositioned_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdispositioned_quantity). |
| `eligibility` | Optional | [ReturnLineItemEligibilityPreviousAttributes](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributes) or null | How the pinned return policy judged this line when the Return was created, with the policy revision it used. |
| `fulfillment` | Optional | ([FulfillmentPreviousAttributes](../models/FulfillmentPreviousAttributes.md#fulfillmentpreviousattributes) or null) or null | Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment. |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment the units were delivered in. `fulfillment_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesfulfillment_id). |
| `handed_off_quantity` | Optional | integer or null | Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. `handed_off_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributeshanded_off_quantity). |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Image of the item as sold. |
| `inspected_quantity` | Optional | integer or null | Units that have been inspected. Whole-number quantity; fractional quantities are not supported. `inspected_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspected_quantity). |
| `inspection_waived_at` | Optional | string or null | RFC3339 timestamp. `inspection_waived_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `inspection_waived_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who waived inspection for this line. |
| `inspection_waiver_reason` | Optional | string or null | Why inspection was waived for this line. Values: `"policy_override"`, `"trusted_in_store_handoff"`, `"merchant_review"`, `"other"`. `inspection_waiver_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspection_waiver_reason). |
| `inspection_waiver_reason_message` | Optional | string or null | Detail sent when inspection was waived. `inspection_waiver_reason_message`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspection_waiver_reason_message). |
| `is_inspection_required` | Optional | boolean or null | Whether returned units of this line must be inspected. `is_inspection_required`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesis_inspection_required). |
| `is_policy_overridden` | Optional | boolean or null | Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. `is_policy_overridden`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesis_policy_overridden). |
| `merchandise_status` | Optional | string or null | Where this line's merchandise stands, from handoff through disposition. Values: [9 declared values](#returnlineitempreviousattributes-merchandise_status-values). `merchandise_status`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesmerchandise_status). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the order line, with their prices. `modifiers`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname). |
| `order_id` | Optional | string or null | Order that owns order_line_item_id. `order_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item the units come from. `order_line_item_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesorder_line_item_id). |
| `overridden_at` | Optional | string or null | RFC3339 timestamp. `overridden_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `overridden_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who recorded the override. |
| `override_reason` | Optional | string or null | Why the decision overrode the pinned return policy's proposal. Values: `"customer_service_exception"`, `"policy_correction"`, `"risk_review"`, `"merchant_discretion"`, `"other"`. `override_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesoverride_reason). |
| `override_reason_message` | Optional | string or null | Detail sent with the override. `override_reason_message`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesoverride_reason_message). |
| `product_id` | Optional | string or null | ID of the catalog product the item was sold from. `product_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesproduct_id). |
| `received_quantity` | Optional | integer or null | Units that arrived. Whole-number quantity; fractional quantities are not supported. `received_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreceived_quantity). |
| `receiving_location_id` | Optional | string or null | ID of the Location the buyer sends the merchandise to. Absent when none has to come back. `receiving_location_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreceiving_location_id). |
| `rejected_quantity` | Optional | integer or null | Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. `rejected_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesrejected_quantity). |
| `release_timing` | Optional | string or null | Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. `release_timing`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesrelease_timing). |
| `requested_quantity` | Optional | integer or null | Units the request asked to return. Whole-number quantity; fractional quantities are not supported. `requested_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesrequested_quantity). |
| `requested_resolution_type` | Optional | string or null | Outcome requested for this line when it was created. Absent when none was requested. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `requested_resolution_type`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesrequested_resolution_type). |
| `resolution_status` | Optional | string or null | Whether the value for this line's approved quantity has been delivered. Values: `"not_selected"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`. `resolution_status`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesresolution_status). |
| `resolved_quantity` | Optional | integer or null | Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. `resolved_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesresolved_quantity). |
| `return_id` | Optional | string or null | ID of the Return this line belongs to. `return_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_id). |
| `return_line_item_id` | Optional | string or null | Unique identifier for this return line item, prefixed `retli_`. `return_line_item_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_line_item_id). |
| `return_reason` | Optional | ([ReturnReasonPreviousAttributes](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributes) or null) or null | Present only when `expand` includes `line_items.return_reason`; `null` when expanded and there is no related return reason. |
| `return_reason_handle` | Optional | string or null | Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. `return_reason_handle`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason_handle). |
| `return_reason_id` | Optional | string or null | ID of the reason chosen for this line. `return_reason_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason_id). |
| `return_reason_name` | Optional | string or null | Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. `return_reason_name`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason_name). |
| `return_required_quantity` | Optional | integer or null | How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. `return_required_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_required_quantity). |
| `return_resolution_ids` | Optional | Array of string or null | IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. `return_resolution_ids`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_resolution_ids). |
| `return_value` | Optional | [ReturnLineItemValuePreviousAttributes](../models/ReturnLineItemValuePreviousAttributes.md#returnlineitemvaluepreviousattributes) or null | Value of the line's units, fixed when the line was created: what the buyer paid for them, less what was already refunded or returned. |
| `review_required_quantity` | Optional | integer or null | Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. `review_required_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreview_required_quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessku). |
| `status` | Optional | string or null | Where this line stands. Same values and meanings as the Return's `status`, applied to the line. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. Items values: `"cancel"`, `"waive_inspection"`. `supported_actions`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `variant_id` | Optional | string or null | ID of the catalog variant the item was sold from. `variant_id`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesvariant_id). |

#### ReturnLineItemPreviousAttributes merchandise_status values

- `"not_required"`
- `"awaiting_handoff"`
- `"in_transit"`
- `"partially_received"`
- `"inspection_required"`
- `"partially_inspected"`
- `"inspection_review_required"`
- `"disposition_required"`
- `"resolved"`

### ReturnLineItemPreviousAttributes.accepted_quantity

### ReturnLineItemPreviousAttributes.accepted_quantity variant 1

anyOf variant 1: Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.accepted_quantity variant 2

anyOf variant 2.

- Value shape: null. Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.allowed_resolution_types

### ReturnLineItemPreviousAttributes.allowed_resolution_types variant 1

anyOf variant 1: Resolution types that can settle this line's approved quantity..

- Value shape: Array of string. Resolution types that can settle this line's approved quantity. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`.

### ReturnLineItemPreviousAttributes.allowed_resolution_types variant 2

anyOf variant 2.

- Value shape: null. Resolution types that can settle this line's approved quantity. 

### ReturnLineItemPreviousAttributes.approved_quantity

### ReturnLineItemPreviousAttributes.approved_quantity variant 1

anyOf variant 1: Units the decision approved. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units the decision approved. Whole-number quantity; fractional quantities are not supported. Units the decision approved. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.approved_quantity variant 2

anyOf variant 2.

- Value shape: null. Units the decision approved. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.automatic_resolution_type

### ReturnLineItemPreviousAttributes.automatic_resolution_type variant 1

anyOf variant 1: The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually..

- Value shape: string. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Example: `"refund"`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`.

### ReturnLineItemPreviousAttributes.automatic_resolution_type variant 2

anyOf variant 2.

- Value shape: null. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. 

### ReturnLineItemPreviousAttributes.available_resolution_quantity

### ReturnLineItemPreviousAttributes.available_resolution_quantity variant 1

anyOf variant 1: Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.available_resolution_quantity variant 2

anyOf variant 2.

- Value shape: null. Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.bundle_components

### ReturnLineItemPreviousAttributes.bundle_components variant 1

anyOf variant 1: Components of the bundle the line was sold from..

- Value shape: Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes). Components of the bundle the line was sold from. 

### ReturnLineItemPreviousAttributes.bundle_components variant 2

anyOf variant 2.

- Value shape: null. Components of the bundle the line was sold from. 

### ReturnLineItemPreviousAttributes.bundle_id

Declared alternatives: [OrderLineItemPreviousAttributes.bundle_id](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesbundle_id).

### ReturnLineItemPreviousAttributes.buyer_note

### ReturnLineItemPreviousAttributes.buyer_note variant 1

anyOf variant 1: Note the buyer gave about this line. Some return reasons require one..

- Value shape: string. Note the buyer gave about this line. Some return reasons require one. 

### ReturnLineItemPreviousAttributes.buyer_note variant 2

anyOf variant 2.

- Value shape: null. Note the buyer gave about this line. Some return reasons require one. 

### ReturnLineItemPreviousAttributes.canceled_quantity

### ReturnLineItemPreviousAttributes.canceled_quantity variant 1

anyOf variant 1: Approved units canceled later. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Approved units canceled later. Whole-number quantity; fractional quantities are not supported. Approved units canceled later. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.canceled_quantity variant 2

anyOf variant 2.

- Value shape: null. Approved units canceled later. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnLineItemPreviousAttributes.decision_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnLineItemPreviousAttributes.decline_reason

### ReturnLineItemPreviousAttributes.decline_reason variant 1

anyOf variant 1: Why the line's declined quantity was declined..

- Value shape: string. Why the line's declined quantity was declined. Values: `"not_eligible"`, `"quantity_unavailable"`, `"evidence_missing"`, `"suspected_abuse"`, `"merchant_discretion"`, `"other"`.

### ReturnLineItemPreviousAttributes.decline_reason variant 2

anyOf variant 2.

- Value shape: null. Why the line's declined quantity was declined. 

### ReturnLineItemPreviousAttributes.decline_reason_message

### ReturnLineItemPreviousAttributes.decline_reason_message variant 1

anyOf variant 1: Detail sent with the decline..

- Value shape: string. Detail sent with the decline. 

### ReturnLineItemPreviousAttributes.decline_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail sent with the decline. 

### ReturnLineItemPreviousAttributes.declined_quantity

### ReturnLineItemPreviousAttributes.declined_quantity variant 1

anyOf variant 1: Units the decision declined. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units the decision declined. Whole-number quantity; fractional quantities are not supported. Units the decision declined. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.declined_quantity variant 2

anyOf variant 2.

- Value shape: null. Units the decision declined. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.description

Declared alternatives: [OrderLineItemPreviousAttributes.description](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription).

### ReturnLineItemPreviousAttributes.dispositioned_quantity

### ReturnLineItemPreviousAttributes.dispositioned_quantity variant 1

anyOf variant 1: Units with a successful disposition. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.dispositioned_quantity variant 2

anyOf variant 2.

- Value shape: null. Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.fulfillment_id

### ReturnLineItemPreviousAttributes.fulfillment_id variant 1

anyOf variant 1: ID of the fulfillment the units were delivered in..

- Value shape: string. ID of the fulfillment the units were delivered in. ID of the fulfillment the units were delivered in. Example: `"ful_01KEZF7C00F24WVSTTWR1FQX5T"`. 

### ReturnLineItemPreviousAttributes.fulfillment_id variant 2

anyOf variant 2.

- Value shape: null. ID of the fulfillment the units were delivered in. 

### ReturnLineItemPreviousAttributes.handed_off_quantity

### ReturnLineItemPreviousAttributes.handed_off_quantity variant 1

anyOf variant 1: Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.handed_off_quantity variant 2

anyOf variant 2.

- Value shape: null. Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.inspected_quantity

### ReturnLineItemPreviousAttributes.inspected_quantity variant 1

anyOf variant 1: Units that have been inspected. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units that have been inspected. Whole-number quantity; fractional quantities are not supported. Units that have been inspected. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.inspected_quantity variant 2

anyOf variant 2.

- Value shape: null. Units that have been inspected. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.inspection_waived_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnLineItemPreviousAttributes.inspection_waiver_reason

### ReturnLineItemPreviousAttributes.inspection_waiver_reason variant 1

anyOf variant 1: Why inspection was waived for this line..

- Value shape: string. Why inspection was waived for this line. Values: `"policy_override"`, `"trusted_in_store_handoff"`, `"merchant_review"`, `"other"`.

### ReturnLineItemPreviousAttributes.inspection_waiver_reason variant 2

anyOf variant 2.

- Value shape: null. Why inspection was waived for this line. 

### ReturnLineItemPreviousAttributes.inspection_waiver_reason_message

### ReturnLineItemPreviousAttributes.inspection_waiver_reason_message variant 1

anyOf variant 1: Detail sent when inspection was waived..

- Value shape: string. Detail sent when inspection was waived. 

### ReturnLineItemPreviousAttributes.inspection_waiver_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail sent when inspection was waived. 

### ReturnLineItemPreviousAttributes.is_inspection_required

### ReturnLineItemPreviousAttributes.is_inspection_required variant 1

anyOf variant 1: Whether returned units of this line must be inspected..

- Value shape: boolean. Whether returned units of this line must be inspected. 

### ReturnLineItemPreviousAttributes.is_inspection_required variant 2

anyOf variant 2.

- Value shape: null. Whether returned units of this line must be inspected. 

### ReturnLineItemPreviousAttributes.is_policy_overridden

### ReturnLineItemPreviousAttributes.is_policy_overridden variant 1

anyOf variant 1: Whether the decision overrode the pinned return policy's proposal. `override_reason` says why..

- Value shape: boolean. Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. 

### ReturnLineItemPreviousAttributes.is_policy_overridden variant 2

anyOf variant 2.

- Value shape: null. Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. 

### ReturnLineItemPreviousAttributes.merchandise_status

### ReturnLineItemPreviousAttributes.merchandise_status variant 1

anyOf variant 1: Where this line's merchandise stands, from handoff through disposition..

- Value shape: string. Where this line's merchandise stands, from handoff through disposition. Values: `"not_required"`, `"awaiting_handoff"`, `"in_transit"`, `"partially_received"`, `"inspection_required"`, `"partially_inspected"`, `"inspection_review_required"`, `"disposition_required"`, `"resolved"`.

### ReturnLineItemPreviousAttributes.merchandise_status variant 2

anyOf variant 2.

- Value shape: null. Where this line's merchandise stands, from handoff through disposition. 

### ReturnLineItemPreviousAttributes.modifiers

### ReturnLineItemPreviousAttributes.modifiers variant 1

anyOf variant 1: Modifiers selected on the order line, with their prices..

- Value shape: Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes). Modifiers selected on the order line, with their prices. 

### ReturnLineItemPreviousAttributes.modifiers variant 2

anyOf variant 2.

- Value shape: null. Modifiers selected on the order line, with their prices. 

### ReturnLineItemPreviousAttributes.name

Declared alternatives: [OrderLineItemPreviousAttributes.name](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname).

### ReturnLineItemPreviousAttributes.order_id

### ReturnLineItemPreviousAttributes.order_id variant 1

anyOf variant 1: Order that owns order_line_item_id..

- Value shape: string. Order that owns order_line_item_id. Order that owns order_line_item_id. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### ReturnLineItemPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns order_line_item_id. 

### ReturnLineItemPreviousAttributes.order_line_item_id

### ReturnLineItemPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: ID of the order line item the units come from..

- Value shape: string. ID of the order line item the units come from. ID of the order line item the units come from. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### ReturnLineItemPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item the units come from. 

### ReturnLineItemPreviousAttributes.overridden_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnLineItemPreviousAttributes.override_reason

### ReturnLineItemPreviousAttributes.override_reason variant 1

anyOf variant 1: Why the decision overrode the pinned return policy's proposal..

- Value shape: string. Why the decision overrode the pinned return policy's proposal. Values: `"customer_service_exception"`, `"policy_correction"`, `"risk_review"`, `"merchant_discretion"`, `"other"`.

### ReturnLineItemPreviousAttributes.override_reason variant 2

anyOf variant 2.

- Value shape: null. Why the decision overrode the pinned return policy's proposal. 

### ReturnLineItemPreviousAttributes.override_reason_message

### ReturnLineItemPreviousAttributes.override_reason_message variant 1

anyOf variant 1: Detail sent with the override..

- Value shape: string. Detail sent with the override. 

### ReturnLineItemPreviousAttributes.override_reason_message variant 2

anyOf variant 2.

- Value shape: null. Detail sent with the override. 

### ReturnLineItemPreviousAttributes.product_id

### ReturnLineItemPreviousAttributes.product_id variant 1

anyOf variant 1: ID of the catalog product the item was sold from..

- Value shape: string. ID of the catalog product the item was sold from. ID of the catalog product the item was sold from. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### ReturnLineItemPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. ID of the catalog product the item was sold from. 

### ReturnLineItemPreviousAttributes.received_quantity

### ReturnLineItemPreviousAttributes.received_quantity variant 1

anyOf variant 1: Units that arrived. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units that arrived. Whole-number quantity; fractional quantities are not supported. Units that arrived. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.received_quantity variant 2

anyOf variant 2.

- Value shape: null. Units that arrived. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.receiving_location_id

### ReturnLineItemPreviousAttributes.receiving_location_id variant 1

anyOf variant 1: ID of the Location the buyer sends the merchandise to. Absent when none has to come back..

- Value shape: string. ID of the Location the buyer sends the merchandise to. Absent when none has to come back. ID of the Location the buyer sends the merchandise to. Absent when none has to come back. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnLineItemPreviousAttributes.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the buyer sends the merchandise to. Absent when none has to come back. 

### ReturnLineItemPreviousAttributes.rejected_quantity

### ReturnLineItemPreviousAttributes.rejected_quantity variant 1

anyOf variant 1: Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.rejected_quantity variant 2

anyOf variant 2.

- Value shape: null. Inspected units that were rejected. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.release_timing

### ReturnLineItemPreviousAttributes.release_timing variant 1

anyOf variant 1: Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release..

- Value shape: string. Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`.

### ReturnLineItemPreviousAttributes.release_timing variant 2

anyOf variant 2.

- Value shape: null. Committed resolution execution gate, filled for every approved line: after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when merchandise is not required, unless the policy or decision sets a timing explicitly. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. 

### ReturnLineItemPreviousAttributes.requested_quantity

### ReturnLineItemPreviousAttributes.requested_quantity variant 1

anyOf variant 1: Units the request asked to return. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units the request asked to return. Whole-number quantity; fractional quantities are not supported. Units the request asked to return. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.requested_quantity variant 2

anyOf variant 2.

- Value shape: null. Units the request asked to return. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.requested_resolution_type

### ReturnLineItemPreviousAttributes.requested_resolution_type variant 1

anyOf variant 1: Outcome requested for this line when it was created. Absent when none was requested..

- Value shape: string. Outcome requested for this line when it was created. Absent when none was requested. Values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`.

### ReturnLineItemPreviousAttributes.requested_resolution_type variant 2

anyOf variant 2.

- Value shape: null. Outcome requested for this line when it was created. Absent when none was requested. 

### ReturnLineItemPreviousAttributes.resolution_status

### ReturnLineItemPreviousAttributes.resolution_status variant 1

anyOf variant 1: Whether the value for this line's approved quantity has been delivered..

- Value shape: string. Whether the value for this line's approved quantity has been delivered. Values: `"not_selected"`, `"pending"`, `"requires_action"`, `"completed"`, `"failed"`.

### ReturnLineItemPreviousAttributes.resolution_status variant 2

anyOf variant 2.

- Value shape: null. Whether the value for this line's approved quantity has been delivered. 

### ReturnLineItemPreviousAttributes.resolved_quantity

### ReturnLineItemPreviousAttributes.resolved_quantity variant 1

anyOf variant 1: Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.resolved_quantity variant 2

anyOf variant 2.

- Value shape: null. Units whose resolution has finished. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.return_id

### ReturnLineItemPreviousAttributes.return_id variant 1

anyOf variant 1: ID of the Return this line belongs to..

- Value shape: string. ID of the Return this line belongs to. ID of the Return this line belongs to. Example: `"ret_01KEZF7C00PG93650ZKVQNGF7X"`. 

### ReturnLineItemPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return this line belongs to. 

### ReturnLineItemPreviousAttributes.return_line_item_id

### ReturnLineItemPreviousAttributes.return_line_item_id variant 1

anyOf variant 1: Unique identifier for this return line item, prefixed `retli_`..

- Value shape: string. Unique identifier for this return line item, prefixed `retli_`. Unique identifier for this return line item, prefixed `retli_`. Example: `"retli_01KEZF7C00R813VR7ECXS062QG"`. 

### ReturnLineItemPreviousAttributes.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return line item, prefixed `retli_`. 

### ReturnLineItemPreviousAttributes.return_reason_handle

### ReturnLineItemPreviousAttributes.return_reason_handle variant 1

anyOf variant 1: Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it..

- Value shape: string. Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. 

### ReturnLineItemPreviousAttributes.return_reason_handle variant 2

anyOf variant 2.

- Value shape: null. Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. 

### ReturnLineItemPreviousAttributes.return_reason_id

### ReturnLineItemPreviousAttributes.return_reason_id variant 1

anyOf variant 1: ID of the reason chosen for this line..

- Value shape: string. ID of the reason chosen for this line. ID of the reason chosen for this line. Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. 

### ReturnLineItemPreviousAttributes.return_reason_id variant 2

anyOf variant 2.

- Value shape: null. ID of the reason chosen for this line. 

### ReturnLineItemPreviousAttributes.return_reason_name

### ReturnLineItemPreviousAttributes.return_reason_name variant 1

anyOf variant 1: Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it..

- Value shape: string. Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. 

### ReturnLineItemPreviousAttributes.return_reason_name variant 2

anyOf variant 2.

- Value shape: null. Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. 

### ReturnLineItemPreviousAttributes.return_required_quantity

### ReturnLineItemPreviousAttributes.return_required_quantity variant 1

anyOf variant 1: How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money..

- Value shape: integer. How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. Format: `int64`. 

### ReturnLineItemPreviousAttributes.return_required_quantity variant 2

anyOf variant 2.

- Value shape: null. How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. 

### ReturnLineItemPreviousAttributes.return_resolution_ids

### ReturnLineItemPreviousAttributes.return_resolution_ids variant 1

anyOf variant 1: IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions..

- Value shape: Array of string. IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. Items: Example: `"retres_01KEZF7C00C7RZJN31W9SGMEQ3"`. 

### ReturnLineItemPreviousAttributes.return_resolution_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. 

### ReturnLineItemPreviousAttributes.review_required_quantity

### ReturnLineItemPreviousAttributes.review_required_quantity variant 1

anyOf variant 1: Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. Format: `int64`. 

### ReturnLineItemPreviousAttributes.review_required_quantity variant 2

anyOf variant 2.

- Value shape: null. Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. 

### ReturnLineItemPreviousAttributes.selected_options

Declared alternatives: [OrderLineItemPreviousAttributes.selected_options](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesselected_options).

### ReturnLineItemPreviousAttributes.sku

Declared alternatives: [OrderLineItemPreviousAttributes.sku](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributessku).

### ReturnLineItemPreviousAttributes.status

### ReturnLineItemPreviousAttributes.status variant 1

anyOf variant 1: Where this line stands. Same values and meanings as the Return's `status`, applied to the line..

- Value shape: string. Where this line stands. Same values and meanings as the Return's `status`, applied to the line. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`.

### ReturnLineItemPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where this line stands. Same values and meanings as the Return's `status`, applied to the line. 

### ReturnLineItemPreviousAttributes.supported_actions

### ReturnLineItemPreviousAttributes.supported_actions variant 1

anyOf variant 1: Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected..

- Value shape: Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. Items values: `"cancel"`, `"waive_inspection"`.

### ReturnLineItemPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. 

### ReturnLineItemPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnLineItemPreviousAttributes.variant_id

Declared alternatives: [OrderLineItemPreviousAttributes.variant_id](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesvariant_id).

