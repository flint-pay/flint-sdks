[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineItemPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_quantity` | Optional | integer or null | Inspected units that were accepted. Whole-number quantity; fractional quantities are not supported. `accepted_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesaccepted_quantity). |
| `allowed_resolution_types` | Optional | Array of string or null | Resolution types that can settle this line's approved quantity. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesallowed_resolution_types). |
| `approved_quantity` | Optional | integer or null | Units the decision approved. Whole-number quantity; fractional quantities are not supported. `approved_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesapproved_quantity). |
| `automatic_resolution_type` | Optional | string or null | The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. `automatic_resolution_type`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesautomatic_resolution_type). |
| `available_resolution_quantity` | Optional | integer or null | Approved quantity that can still be assigned to a new resolution. Every non-canceled resolution reserves its line quantity, including proposed, pending, action-required, failed, and completed resolutions. Whole-number quantity; fractional quantities are not supported. `available_resolution_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesavailable_resolution_quantity). |
| `bundle_components` | Optional | Array of [BundleComponentPreviousAttributes](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributes) or null | Components of the bundle the line was sold from. `bundle_components`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesbundle_components). |
| `bundle_id` | Optional | string or null | ID of the bundle the line was sold from. `bundle_id`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesbundle_id). |
| `buyer_note` | Optional | string or null | Note the buyer gave about this line. Some return reasons require one. `buyer_note`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesbuyer_note). |
| `canceled_quantity` | Optional | integer or null | Approved units canceled later. Whole-number quantity; fractional quantities are not supported. `canceled_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributescanceled_quantity). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `decided_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who recorded the decision on this line. `decided_by`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by). |
| `decision_at` | Optional | string or null | RFC3339 timestamp. `decision_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `decline_reason` | Optional | string or null | Why the line's declined quantity was declined. Values: `"not_eligible"`, `"quantity_unavailable"`, `"evidence_missing"`, `"suspected_abuse"`, `"merchant_discretion"`, `"other"`. `decline_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecline_reason). |
| `decline_reason_message` | Optional | string or null | Detail sent with the decline. `decline_reason_message`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecline_reason_message). |
| `declined_quantity` | Optional | integer or null | Units the decision declined. Whole-number quantity; fractional quantities are not supported. `declined_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdeclined_quantity). |
| `description` | Optional | string or null | Description of the item as sold. `description`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesdescription). |
| `dispositioned_quantity` | Optional | integer or null | Units with a successful disposition. Whole-number quantity; fractional quantities are not supported. `dispositioned_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdispositioned_quantity). |
| `eligibility` | Optional | [ReturnLineItemEligibilityPreviousAttributes](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributes) or null | How the pinned return policy judged this line when the Return was created, with the policy revision it used. `eligibility`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributeseligibility). |
| `fulfillment` | Optional | [FulfillmentPreviousAttributes](../models/FulfillmentPreviousAttributes.md#fulfillmentpreviousattributes) or null | Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment. `fulfillment`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesfulfillment). |
| `fulfillment_id` | Optional | string or null | ID of the fulfillment the units were delivered in. `fulfillment_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesfulfillment_id). |
| `handed_off_quantity` | Optional | integer or null | Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities are not supported. `handed_off_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributeshanded_off_quantity). |
| `image` | Optional | [ImagePreviousAttributes](../models/ImagePreviousAttributes.md#imagepreviousattributes) or null | Image of the item as sold. |
| `inspected_quantity` | Optional | integer or null | Units that have been inspected. Whole-number quantity; fractional quantities are not supported. `inspected_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspected_quantity). |
| `inspection_waived_at` | Optional | string or null | RFC3339 timestamp. `inspection_waived_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `inspection_waived_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who waived inspection for this line. `inspection_waived_by`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspection_waived_by). |
| `inspection_waiver_reason` | Optional | string or null | Why inspection was waived for this line. Values: `"policy_override"`, `"trusted_in_store_handoff"`, `"merchant_review"`, `"other"`. `inspection_waiver_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspection_waiver_reason). |
| `inspection_waiver_reason_message` | Optional | string or null | Detail sent when inspection was waived. `inspection_waiver_reason_message`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesinspection_waiver_reason_message). |
| `is_inspection_required` | Optional | boolean or null | Whether returned units of this line must be inspected. `is_inspection_required`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesis_inspection_required). |
| `is_policy_overridden` | Optional | boolean or null | Whether the decision overrode the pinned return policy's proposal. `override_reason` says why. `is_policy_overridden`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesis_policy_overridden). |
| `merchandise_status` | Optional | string or null | Where this line's merchandise stands, from handoff through disposition. Values: [9 declared values](#returnlineitempreviousattributes-merchandise_status-values). `merchandise_status`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesmerchandise_status). |
| `modifiers` | Optional | Array of [OrderLineItemModifierPreviousAttributes](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributes) or null | Modifiers selected on the order line, with their prices. `modifiers`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesmodifiers). |
| `name` | Optional | string or null | Name of the item as sold. `name`: [declared alternatives](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname). |
| `order_id` | Optional | string or null | Order that owns order_line_item_id. `order_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item the units come from. `order_line_item_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesorder_line_item_id). |
| `overridden_at` | Optional | string or null | RFC3339 timestamp. `overridden_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `overridden_by` | Optional | [ReturnActorPreviousAttributes](../models/ReturnActorPreviousAttributes.md#returnactorpreviousattributes) or null | Who recorded the override. `overridden_by`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesoverridden_by). |
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
| `return_reason` | Optional | [ReturnReasonPreviousAttributes](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributes) or null | Present only when `expand` includes `line_items.return_reason`; `null` when expanded and there is no related return reason. `return_reason`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason). |
| `return_reason_handle` | Optional | string or null | Handle of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. `return_reason_handle`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason_handle). |
| `return_reason_id` | Optional | string or null | ID of the reason chosen for this line. `return_reason_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason_id). |
| `return_reason_name` | Optional | string or null | Name of the chosen reason, captured when the line is created or its reason changes. Later renames, deactivation or archiving don't change it. `return_reason_name`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason_name). |
| `return_required_quantity` | Optional | integer or null | How much of the approved quantity the buyer must physically send back; fractional quantities are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and the Return still settles the money. `return_required_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_required_quantity). |
| `return_resolution_ids` | Optional | Array of string or null | IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. `return_resolution_ids`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_resolution_ids). |
| `return_value` | Optional | [ReturnLineItemValuePreviousAttributes](../models/ReturnLineItemValuePreviousAttributes.md#returnlineitemvaluepreviousattributes) or null | Value of the line's units, fixed when the line was created: what the buyer paid for them, less what was already refunded or returned. |
| `review_required_quantity` | Optional | integer or null | Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional quantities are not supported. `review_required_quantity`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreview_required_quantity). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Variant options selected for the item, such as size and color. `selected_options`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options). |
| `sku` | Optional | string or null | SKU of the item as sold. `sku`: [declared alternatives](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku). |
| `status` | Optional | string or null | Where this line stands. Same values and meanings as the Return's `status`, applied to the line. Values: `"requested"`, `"open"`, `"completed"`, `"declined"`, `"canceled"`. `status`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. For an open line with uncanceled approved quantity, `cancel` is listed while approved quantity remains after accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is listed while inspection is required and no unit has been inspected. Items values: `"cancel"`, `"waive_inspection"`. `supported_actions`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
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

- Value shape: string. The refund, store_credit, or no_monetary_action resolution Flint creates and confirms automatically. Absent when the merchant resolves manually. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`.

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

### ReturnLineItemPreviousAttributes.bundle_components variant 1.[] fields 1

Field definitions: [BundleArchivedMerchantEventDataPreviousAttributes.components variant 1.[] fields 1](../models/BundleArchivedMerchantEventDataPreviousAttributes.md#bundlearchivedmerchanteventdatapreviousattributescomponents-variant-1-fields-1).

### ReturnLineItemPreviousAttributes.bundle_id

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.bundle_id](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesbundle_id).

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

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnLineItemPreviousAttributes.decided_by

Who recorded the decision on this line.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor_id` | Conditional | string or null | ID of the actor, when one exists. Merchant reads only. `actor_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_id). |
| `actor_type` | Conditional | string or null | What kind of actor acted. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`. `actor_type`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_type). |

### ReturnLineItemPreviousAttributes.decided_by variant 1

anyOf ReturnActorPreviousAttributes.

- Optional: `actor_id`, `actor_type`.

### ReturnLineItemPreviousAttributes.decided_by variant 2

anyOf variant 2.

- Undeclared: `actor_id`, `actor_type`.
- Value shape: null. Who recorded the decision on this line. 

### ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id

### ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id variant 1

anyOf variant 1: ID of the actor, when one exists. Merchant reads only..

- Value shape: string. ID of the actor, when one exists. Merchant reads only. ID of the actor, when one exists. Merchant reads only. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. 

### ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id variant 2

anyOf variant 2.

- Value shape: null. ID of the actor, when one exists. Merchant reads only. 

### ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type

### ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type variant 1

anyOf variant 1: What kind of actor acted..

- Value shape: string. What kind of actor acted. What kind of actor acted. Example: `"merchant"`. Values: `"buyer"`, `"merchant"`, `"integration"`, `"system"`.

### ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type variant 2

anyOf variant 2.

- Value shape: null. What kind of actor acted. 

### ReturnLineItemPreviousAttributes.decision_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

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

### ReturnLineItemPreviousAttributes.eligibility

How the pinned return policy judged this line when the Return was created, with the policy revision it used.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Conditional | Array of string or null | Resolution types the policy allows for this line. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesallowed_resolution_types). |
| `decision_proposal` | Conditional | [ReturnLineItemDecisionProposalPreviousAttributes](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributes) or null | Terms the policy proposes if the line is approved. Absent when the policy can't propose any. `decision_proposal`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesdecision_proposal). |
| `eligible_quantity` | Conditional | integer or null | Whole-number quantity; fractional quantities are not supported. `eligible_quantity`: [declared alternatives](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity). |
| `evaluated_at` | Conditional | string or null | RFC3339 timestamp. `evaluated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `expires_at` | Conditional | string or null | RFC3339 timestamp. `expires_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `ineligibility_reason` | Conditional | string or null | The matched policy's declared exclusion reason. Present exactly when reason is policy_ineligible. Values: `"final_sale"`, `"product_excluded"`, `"category_excluded"`, `"market_restricted"`, `"channel_restricted"`, `"outside_return_window"`, `"other"`. `ineligibility_reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesineligibility_reason). |
| `policy_adjustment_proposals` | Conditional | Array of [ReturnPolicyAdjustmentProposalPreviousAttributes](../models/ReturnPolicyAdjustmentProposalPreviousAttributes.md#returnpolicyadjustmentproposalpreviousattributes) or null | Fees or credits the policy proposes for this line, to add to a resolution as adjustments. `policy_adjustment_proposals`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributespolicy_adjustment_proposals). |
| `reason` | Conditional | string or null | Why the line got this result. Values: [9 declared values](#returnlineitempreviousattributeseligibility-reason-values). `reason`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason). |
| `reason_message` | Conditional | string or null | Explanation of `reason`. `reason_message`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason_message). |
| `return_policy_id` | Conditional | string or null | ID of the policy that judged the line. Absent when none matched. `return_policy_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributeseligibility-variant-1return_policy_id). |
| `return_policy_revision_id` | Conditional | string or null | ID of the policy revision that judged the line. Absent when none matched. `return_policy_revision_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributeseligibility-variant-1return_policy_revision_id). |
| `return_shipping_payer` | Conditional | string or null | Who pays return shipping under the policy. Null when the line is not eligible, requires no merchandise return, or the policy does not specify a payer. This field does not promise a prepaid label. Values: `"merchant"`, `"buyer"`, `null`. `return_shipping_payer`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreturn_shipping_payer). |
| `status` | Conditional | string or null | Whether the policy lets the buyer return this. `review_required` means the merchant decides. Values: `"eligible"`, `"ineligible"`, `"review_required"`. `status`: [declared alternatives](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesstatus). |

#### ReturnLineItemPreviousAttributes.eligibility reason values

- `"eligible_under_policy"`
- `"manual_review_required"`
- `"return_window_expired"`
- `"quantity_unavailable"`
- `"policy_ineligible"`
- `"resolution_not_allowed"`
- `"reason_not_allowed"`
- `"policy_conflict"`
- `"no_matching_policy"`

### ReturnLineItemPreviousAttributes.eligibility variant 1

anyOf ReturnLineItemEligibilityPreviousAttributes.

- Optional: `allowed_resolution_types`, `decision_proposal`, `eligible_quantity`, `evaluated_at`, `expires_at`, `ineligibility_reason`, `policy_adjustment_proposals`, `reason`, `reason_message`, `return_policy_id`, `return_policy_revision_id`, `return_shipping_payer`, `status`.

### ReturnLineItemPreviousAttributes.eligibility variant 2

anyOf variant 2.

- Undeclared: `allowed_resolution_types`, `decision_proposal`, `eligible_quantity`, `evaluated_at`, `expires_at`, `ineligibility_reason`, `policy_adjustment_proposals`, `reason`, `reason_message`, `return_policy_id`, `return_policy_revision_id`, `return_shipping_payer`, `status`.
- Value shape: null. How the pinned return policy judged this line when the Return was created, with the policy revision it used. 

### ReturnLineItemPreviousAttributes.eligibility variant 1.allowed_resolution_types

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.allowed_resolution_types](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesallowed_resolution_types).

### ReturnLineItemPreviousAttributes.eligibility variant 1.decision_proposal

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.decision_proposal](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesdecision_proposal).

### ReturnLineItemPreviousAttributes.eligibility variant 1.eligible_quantity

Declared alternatives: [MerchantBillingInvoiceIssuedEvent.data fields 1.previous_attributes.line_items variant 1.[] fields 1.quantity](../models/MerchantBillingInvoiceIssuedEvent.md#merchantbillinginvoiceissuedeventdata-fields-1previous_attributesline_items-variant-1-fields-1quantity).

### ReturnLineItemPreviousAttributes.eligibility variant 1.evaluated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnLineItemPreviousAttributes.eligibility variant 1.expires_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnLineItemPreviousAttributes.eligibility variant 1.ineligibility_reason

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.ineligibility_reason](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesineligibility_reason).

### ReturnLineItemPreviousAttributes.eligibility variant 1.policy_adjustment_proposals

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.policy_adjustment_proposals](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributespolicy_adjustment_proposals).

### ReturnLineItemPreviousAttributes.eligibility variant 1.reason

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.reason](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason).

### ReturnLineItemPreviousAttributes.eligibility variant 1.reason_message

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.reason_message](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreason_message).

### ReturnLineItemPreviousAttributes.eligibility variant 1.return_policy_id

### ReturnLineItemPreviousAttributes.eligibility variant 1.return_policy_id variant 1

anyOf variant 1: ID of the policy that judged the line. Absent when none matched..

- Value shape: string. ID of the policy that judged the line. Absent when none matched. ID of the policy that judged the line. Absent when none matched. Example: `"rpol_01KEZF7C00H8C042BEK6HBRANX"`. 

### ReturnLineItemPreviousAttributes.eligibility variant 1.return_policy_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy that judged the line. Absent when none matched. 

### ReturnLineItemPreviousAttributes.eligibility variant 1.return_policy_revision_id

### ReturnLineItemPreviousAttributes.eligibility variant 1.return_policy_revision_id variant 1

anyOf variant 1: ID of the policy revision that judged the line. Absent when none matched..

- Value shape: string. ID of the policy revision that judged the line. Absent when none matched. ID of the policy revision that judged the line. Absent when none matched. Example: `"rpolv_01KEZF7C007AWH6P4QC14Q25TC"`. 

### ReturnLineItemPreviousAttributes.eligibility variant 1.return_policy_revision_id variant 2

anyOf variant 2.

- Value shape: null. ID of the policy revision that judged the line. Absent when none matched. 

### ReturnLineItemPreviousAttributes.eligibility variant 1.return_shipping_payer

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.return_shipping_payer](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesreturn_shipping_payer).

### ReturnLineItemPreviousAttributes.eligibility variant 1.status

Declared alternatives: [ReturnLineItemEligibilityPreviousAttributes.status](../models/ReturnLineItemEligibilityPreviousAttributes.md#returnlineitemeligibilitypreviousattributesstatus).

### ReturnLineItemPreviousAttributes.fulfillment

Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `active_hold` | Conditional | [FulfillmentHoldPreviousAttributes](../models/FulfillmentHoldPreviousAttributes.md#fulfillmentholdpreviousattributes) or null | Current hold details. Present exactly when status is on_hold. `active_hold`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesactive_hold). |
| `charges` | Conditional | Array of [FulfillmentChargeLinkPreviousAttributes](../models/FulfillmentChargeLinkPreviousAttributes.md#fulfillmentchargelinkpreviousattributes) or null | Order charges associated with this fulfillment. `charges`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges). |
| `completed_at` | Conditional | string or null | When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at for service fulfillments, and the order's paid_at for handovers completed at payment. Omitted until a completion time is recorded. `completed_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1completed_at). |
| `created_at` | Conditional | string or null | When the fulfillment was created, in RFC3339 format. `created_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1created_at). |
| `customer_id` | Conditional | string or null | Customer receiving this fulfillment, when one is set. `customer_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1customer_id). |
| `delivery_choice_group_id` | Conditional | string or null | Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_choice_group_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_choice_group_id). |
| `delivery_execution_leg_id` | Conditional | string or null | Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_execution_leg_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_execution_leg_id). |
| `delivery_method_id` | Conditional | string or null | Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. `delivery_method_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_method_id). |
| `delivery_selection_id` | Conditional | string or null | Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. `delivery_selection_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_selection_id). |
| `device_id` | Conditional | string or null | Device associated with the fulfillment, when one is recorded. `device_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1device_id). |
| `digital_details` | Conditional | [DigitalFulfillmentDetailsPreviousAttributes](../models/DigitalFulfillmentDetailsPreviousAttributes.md#digitalfulfillmentdetailspreviousattributes) or null | Delivery URL and completion time for a digital fulfillment. `digital_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdigital_details). |
| `dispatched_at` | Conditional | string or null | First time this fulfillment reached dispatched. `dispatched_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1dispatched_at). |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `fulfillment_id` | Conditional | string or null | Stable identifier of the fulfillment. `fulfillment_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1fulfillment_id). |
| `idempotency_key` | Conditional | string or null | The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. `idempotency_key`: [declared alternatives](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesidempotency_key). |
| `line_items` | Conditional | Array of [FulfillmentLineItemPreviousAttributes](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributes) or null | Order lines and quantities allocated to this fulfillment. `line_items`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items). |
| `local_delivery_details` | Conditional | [DeliveryFulfillmentDetailsPreviousAttributes](../models/DeliveryFulfillmentDetailsPreviousAttributes.md#deliveryfulfillmentdetailspreviousattributes) or null | Courier, delivery window, and handoff details for a local delivery fulfillment. `local_delivery_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details). |
| `location_id` | Conditional | string or null | Merchant location responsible for this fulfillment. `location_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1location_id). |
| `metadata` | Conditional | Map of string or null | Caller-owned key-value metadata associated with the fulfillment. `metadata`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesmetadata). |
| `order` | Conditional | [ExpandedOrderSummaryPreviousAttributes](../models/ExpandedOrderSummaryPreviousAttributes.md#expandedordersummarypreviousattributes) or null | Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. `order`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder). |
| `order_id` | Conditional | string or null | Order whose items this fulfillment delivers. `order_id`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1order_id). |
| `order_number` | Conditional | string or null | Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. `order_number`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_number). |
| `outcome` | Conditional | [FulfillmentOutcomePreviousAttributes](../models/FulfillmentOutcomePreviousAttributes.md#fulfillmentoutcomepreviousattributes) or null | Terminal outcome details. Present exactly when status is no_show. `outcome`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesoutcome). |
| `packages` | Conditional | Array of [ExpandedPackageSummaryPreviousAttributes](../models/ExpandedPackageSummaryPreviousAttributes.md#expandedpackagesummarypreviousattributes) or null | Packages associated with this fulfillment. `packages`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages). |
| `packed_at` | Conditional | string or null | First time this fulfillment reached packed. `packed_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1packed_at). |
| `picked_at` | Conditional | string or null | First time this fulfillment reached picked. `picked_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1picked_at). |
| `pickup_details` | Conditional | [PickupFulfillmentDetailsPreviousAttributes](../models/PickupFulfillmentDetailsPreviousAttributes.md#pickupfulfillmentdetailspreviousattributes) or null | Pickup window, pickup mode, and handoff times for a pickup fulfillment. `pickup_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details). |
| `recipient` | Conditional | [FulfillmentRecipientPreviousAttributes](../models/FulfillmentRecipientPreviousAttributes.md#fulfillmentrecipientpreviousattributes) or null | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `scheduled_start_at` | Conditional | string or null | Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. `scheduled_start_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1scheduled_start_at). |
| `service_details` | Conditional | [ServiceFulfillmentDetailsPreviousAttributes](../models/ServiceFulfillmentDetailsPreviousAttributes.md#servicefulfillmentdetailspreviousattributes) or null | Schedule and completion details for a service fulfillment. `service_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesservice_details). |
| `shipment_details` | Conditional | [ShipmentFulfillmentDetailsPreviousAttributes](../models/ShipmentFulfillmentDetailsPreviousAttributes.md#shipmentfulfillmentdetailspreviousattributes) or null | Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. `shipment_details`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipment_details). |
| `shipments` | Conditional | Array of [ExpandedShipmentSummaryPreviousAttributes](../models/ExpandedShipmentSummaryPreviousAttributes.md#expandedshipmentsummarypreviousattributes) or null | Shipments associated with this fulfillment. `shipments`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments). |
| `status` | Conditional | string or null | Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Values: [14 declared values](#returnlineitempreviousattributesfulfillment-status-values). `status`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Conditional | Array of string or null | Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. Items values: [14 declared values](#returnlineitempreviousattributesfulfillment-supported_actions--values). `supported_actions`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributessupported_actions). |
| `terminal_at` | Conditional | string or null | When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. `terminal_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1terminal_at). |
| `type` | Conditional | string or null | How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`, `"handover"`. `type`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributestype). |
| `updated_at` | Conditional | string or null | When the fulfillment was last updated, in RFC3339 format. `updated_at`: [declared alternatives](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1updated_at). |
| `version` | Conditional | integer or null | Monotonic fulfillment version for expected_version checks. `version`: [declared alternatives](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesversion). |

#### ReturnLineItemPreviousAttributes.fulfillment status values

- `"pending"`
- `"accepted"`
- `"on_hold"`
- `"in_progress"`
- `"ready"`
- `"completed"`
- `"canceled"`
- `"failed"`
- `"scheduled"`
- `"preparing"`
- `"picked"`
- `"packed"`
- `"dispatched"`
- `"no_show"`

#### ReturnLineItemPreviousAttributes.fulfillment supported_actions [] values

- `"accept"`
- `"cancel"`
- `"complete"`
- `"dispatch"`
- `"fail"`
- `"hold"`
- `"mark_no_show"`
- `"mark_packed"`
- `"mark_picked"`
- `"mark_preparing"`
- `"mark_ready"`
- `"release_hold"`
- `"schedule"`
- `"start"`

### ReturnLineItemPreviousAttributes.fulfillment variant 1

anyOf FulfillmentPreviousAttributes.

- Optional: `active_hold`, `charges`, `completed_at`, `created_at`, `customer_id`, `delivery_choice_group_id`, `delivery_execution_leg_id`, `delivery_method_id`, `delivery_selection_id`, `device_id`, `digital_details`, `dispatched_at`, `external_reference_id`, `fulfillment_id`, `idempotency_key`, `line_items`, `local_delivery_details`, `location_id`, `metadata`, `order`, `order_id`, `order_number`, `outcome`, `packages`, `packed_at`, `picked_at`, `pickup_details`, `recipient`, `scheduled_start_at`, `service_details`, `shipment_details`, `shipments`, `status`, `supported_actions`, `terminal_at`, `type`, `updated_at`, `version`.

### ReturnLineItemPreviousAttributes.fulfillment variant 2

anyOf variant 2.

- Undeclared: `active_hold`, `charges`, `completed_at`, `created_at`, `customer_id`, `delivery_choice_group_id`, `delivery_execution_leg_id`, `delivery_method_id`, `delivery_selection_id`, `device_id`, `digital_details`, `dispatched_at`, `external_reference_id`, `fulfillment_id`, `idempotency_key`, `line_items`, `local_delivery_details`, `location_id`, `metadata`, `order`, `order_id`, `order_number`, `outcome`, `packages`, `packed_at`, `picked_at`, `pickup_details`, `recipient`, `scheduled_start_at`, `service_details`, `shipment_details`, `shipments`, `status`, `supported_actions`, `terminal_at`, `type`, `updated_at`, `version`.
- Value shape: null. Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there is no related fulfillment. 

### ReturnLineItemPreviousAttributes.fulfillment variant 1.active_hold

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.active_hold](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesactive_hold).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.charges

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.charges](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributescharges).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.completed_at

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.completed_at](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1completed_at).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.created_at

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.created_at](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1created_at).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.customer_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.customer_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1customer_id).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.delivery_choice_group_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_choice_group_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_choice_group_id).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.delivery_execution_leg_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_execution_leg_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_execution_leg_id).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.delivery_method_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_method_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_method_id).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.delivery_selection_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.delivery_selection_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1delivery_selection_id).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.device_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.device_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1device_id).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.digital_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.digital_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesdigital_details).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.dispatched_at

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.dispatched_at](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1dispatched_at).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.fulfillment_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.fulfillment_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1fulfillment_id).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.idempotency_key

Declared alternatives: [WebhookSnapshotOrderPaymentAttemptPreviousAttributes.idempotency_key](../models/WebhookSnapshotOrderPaymentAttemptPreviousAttributes.md#webhooksnapshotorderpaymentattemptpreviousattributesidempotency_key).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.line_items

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.line_items](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesline_items).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.local_delivery_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.local_delivery_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributeslocal_delivery_details).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.location_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.location_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1location_id).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.metadata

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.metadata](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesmetadata).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.order

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.order_id

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.order_id](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1order_id).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.order_number

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.order_number](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesorder_number).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.outcome

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.outcome](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesoutcome).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.packages

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.packages](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespackages).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.packed_at

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.packed_at](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1packed_at).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.picked_at

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.picked_at](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1picked_at).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.pickup_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.pickup_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributespickup_details).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.scheduled_start_at

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.scheduled_start_at](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1scheduled_start_at).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.service_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.service_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesservice_details).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.shipment_details

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.shipment_details](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipment_details).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.shipments

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.shipments](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesshipments).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.status

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.status](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesstatus).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.supported_actions

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.supported_actions](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributessupported_actions).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.terminal_at

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.terminal_at](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1terminal_at).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.type

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.type](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributestype).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.updated_at

Declared alternatives: [OrderClosedMerchantEventDataPreviousAttributes.fulfillments variant 1.[] fields 1.updated_at](../models/OrderClosedMerchantEventDataPreviousAttributes.md#orderclosedmerchanteventdatapreviousattributesfulfillments-variant-1-fields-1updated_at).

### ReturnLineItemPreviousAttributes.fulfillment variant 1.version

Declared alternatives: [FulfillmentCanceledMerchantEventDataPreviousAttributes.version](../models/FulfillmentCanceledMerchantEventDataPreviousAttributes.md#fulfillmentcanceledmerchanteventdatapreviousattributesversion).

### ReturnLineItemPreviousAttributes.fulfillment_id

### ReturnLineItemPreviousAttributes.fulfillment_id variant 1

anyOf variant 1: ID of the fulfillment the units were delivered in..

- Value shape: string. ID of the fulfillment the units were delivered in. 

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

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnLineItemPreviousAttributes.inspection_waived_by

Who waived inspection for this line.

Field definitions: [shared fields](#returnlineitempreviousattributesdecided_by).

### ReturnLineItemPreviousAttributes.inspection_waived_by variant 1

anyOf ReturnActorPreviousAttributes.

- Optional: `actor_id`, `actor_type`.

### ReturnLineItemPreviousAttributes.inspection_waived_by variant 2

anyOf variant 2.

- Undeclared: `actor_id`, `actor_type`.
- Value shape: null. Who waived inspection for this line. 

### ReturnLineItemPreviousAttributes.inspection_waived_by variant 1.actor_id

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_id).

### ReturnLineItemPreviousAttributes.inspection_waived_by variant 1.actor_type

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_type).

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

### ReturnLineItemPreviousAttributes.modifiers variant 1.[] fields 1

Field definitions: [FulfillmentLineItemPreviousAttributes.modifiers variant 1.[] fields 1](../models/FulfillmentLineItemPreviousAttributes.md#fulfillmentlineitempreviousattributesmodifiers-variant-1-fields-1).

### ReturnLineItemPreviousAttributes.name

Declared alternatives: [OrderLineItemPreviousAttributes.name](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesname).

### ReturnLineItemPreviousAttributes.order_id

### ReturnLineItemPreviousAttributes.order_id variant 1

anyOf variant 1: Order that owns order_line_item_id..

- Value shape: string. Order that owns order_line_item_id. 

### ReturnLineItemPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order that owns order_line_item_id. 

### ReturnLineItemPreviousAttributes.order_line_item_id

### ReturnLineItemPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: ID of the order line item the units come from..

- Value shape: string. ID of the order line item the units come from. 

### ReturnLineItemPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item the units come from. 

### ReturnLineItemPreviousAttributes.overridden_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnLineItemPreviousAttributes.overridden_by

Who recorded the override.

Field definitions: [shared fields](#returnlineitempreviousattributesdecided_by).

### ReturnLineItemPreviousAttributes.overridden_by variant 1

anyOf ReturnActorPreviousAttributes.

- Optional: `actor_id`, `actor_type`.

### ReturnLineItemPreviousAttributes.overridden_by variant 2

anyOf variant 2.

- Undeclared: `actor_id`, `actor_type`.
- Value shape: null. Who recorded the override. 

### ReturnLineItemPreviousAttributes.overridden_by variant 1.actor_id

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_id](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_id).

### ReturnLineItemPreviousAttributes.overridden_by variant 1.actor_type

Declared alternatives: [ReturnLineItemPreviousAttributes.decided_by variant 1.actor_type](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesdecided_by-variant-1actor_type).

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

- Value shape: string. ID of the catalog product the item was sold from. 

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

- Value shape: string. ID of the Location the buyer sends the merchandise to. Absent when none has to come back. 

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

- Value shape: string. ID of the Return this line belongs to. 

### ReturnLineItemPreviousAttributes.return_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Return this line belongs to. 

### ReturnLineItemPreviousAttributes.return_line_item_id

### ReturnLineItemPreviousAttributes.return_line_item_id variant 1

anyOf variant 1: Unique identifier for this return line item, prefixed `retli_`..

- Value shape: string. Unique identifier for this return line item, prefixed `retli_`. 

### ReturnLineItemPreviousAttributes.return_line_item_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this return line item, prefixed `retli_`. 

### ReturnLineItemPreviousAttributes.return_reason

Present only when `expand` includes `line_items.return_reason`; `null` when expanded and there is no related return reason.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `category_handles` | Conditional | Array of string or null | Catalog category handles this reason applies to. A reason with categories is suggested, and accepted from a customer session, only for order lines whose product is in one of them. A reason with no categories applies to every line. Not product types or tags: use handles from GET /v1/categories. `category_handles`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributescategory_handles). |
| `created_at` | Conditional | string or null | When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. `created_at`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason-variant-1created_at). |
| `description` | Conditional | string or null | Longer explanation of when to use the reason. `description`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesdescription). |
| `external_reference_id` | Conditional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id). |
| `handle` | Conditional | string or null | Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed handles. Can't be changed after create, and an archived reason keeps its handle reserved. `handle`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributeshandle). |
| `is_note_required` | Conditional | boolean or null | Whether a Return line with this reason needs a buyer_note. `is_note_required`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesis_note_required). |
| `name` | Conditional | string or null | Name buyers and staff see. `name`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesname). |
| `return_reason_id` | Conditional | string or null | Flint's ID for the reason. Send it as return_reason_id on a Return line. `return_reason_id`: [declared alternatives](../models/ReturnLineItemPreviousAttributes.md#returnlineitempreviousattributesreturn_reason-variant-1return_reason_id). |
| `source` | Conditional | string or null | Whether Flint provides the reason or you created it. Values: `"flint"`, `"merchant"`. `source`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributessource). |
| `status` | Conditional | string or null | Whether the reason is offered. An active reason is offered and accepted on new Return lines. An inactive reason is not offered or accepted until you set it back to active. An archived reason is retired for good and stays readable on Returns that recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be deleted, but you can set them inactive. Values: `"active"`, `"archived"`, `"inactive"`. `status`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesstatus). |
| `updated_at` | Conditional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at). |
| `version` | Conditional | integer or null | Increases whenever the reason changes. Send it as expected_version to update or archive the reason only if it hasn't changed since you read it. `version`: [declared alternatives](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesversion). |

### ReturnLineItemPreviousAttributes.return_reason variant 1

anyOf ReturnReasonPreviousAttributes.

- Optional: `category_handles`, `created_at`, `description`, `external_reference_id`, `handle`, `is_note_required`, `name`, `return_reason_id`, `source`, `status`, `updated_at`, `version`.

### ReturnLineItemPreviousAttributes.return_reason variant 2

anyOf variant 2.

- Undeclared: `category_handles`, `created_at`, `description`, `external_reference_id`, `handle`, `is_note_required`, `name`, `return_reason_id`, `source`, `status`, `updated_at`, `version`.
- Value shape: null. Present only when `expand` includes `line_items.return_reason`; `null` when expanded and there is no related return reason. 

### ReturnLineItemPreviousAttributes.return_reason variant 1.category_handles

Declared alternatives: [ReturnReasonPreviousAttributes.category_handles](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributescategory_handles).

### ReturnLineItemPreviousAttributes.return_reason variant 1.created_at

### ReturnLineItemPreviousAttributes.return_reason variant 1.created_at variant 1

anyOf variant 1: When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged..

- Value shape: string. When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### ReturnLineItemPreviousAttributes.return_reason variant 1.created_at variant 2

anyOf variant 2.

- Value shape: null. When the reason was created. Built-in Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same release time if unchanged. 

### ReturnLineItemPreviousAttributes.return_reason variant 1.description

Declared alternatives: [ReturnReasonPreviousAttributes.description](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesdescription).

### ReturnLineItemPreviousAttributes.return_reason variant 1.external_reference_id

Declared alternatives: [InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.inventory_item variant 1.external_reference_id](../models/InventoryLevelShortageDetectedMerchantEventDataPreviousAttributes.md#inventorylevelshortagedetectedmerchanteventdatapreviousattributesinventory_item-variant-1external_reference_id).

### ReturnLineItemPreviousAttributes.return_reason variant 1.handle

Declared alternatives: [ReturnReasonPreviousAttributes.handle](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributeshandle).

### ReturnLineItemPreviousAttributes.return_reason variant 1.is_note_required

Declared alternatives: [ReturnReasonPreviousAttributes.is_note_required](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesis_note_required).

### ReturnLineItemPreviousAttributes.return_reason variant 1.name

Declared alternatives: [ReturnReasonPreviousAttributes.name](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesname).

### ReturnLineItemPreviousAttributes.return_reason variant 1.return_reason_id

### ReturnLineItemPreviousAttributes.return_reason variant 1.return_reason_id variant 1

anyOf variant 1: Flint's ID for the reason. Send it as return_reason_id on a Return line..

- Value shape: string. Flint's ID for the reason. Send it as return_reason_id on a Return line. Flint's ID for the reason. Send it as return_reason_id on a Return line. Example: `"rrsn_01KEZF7C00SEE2T4EYP1NXAH3E"`. 

### ReturnLineItemPreviousAttributes.return_reason variant 1.return_reason_id variant 2

anyOf variant 2.

- Value shape: null. Flint's ID for the reason. Send it as return_reason_id on a Return line. 

### ReturnLineItemPreviousAttributes.return_reason variant 1.source

Declared alternatives: [ReturnReasonPreviousAttributes.source](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributessource).

### ReturnLineItemPreviousAttributes.return_reason variant 1.status

Declared alternatives: [ReturnReasonPreviousAttributes.status](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesstatus).

### ReturnLineItemPreviousAttributes.return_reason variant 1.updated_at

Declared alternatives: [PartnerAppInstallPermissionsUpdatedEvent.data fields 1.previous_attributes.environment_grants variant 1.[] fields 1.created_at](../models/PartnerAppInstallPermissionsUpdatedEvent.md#partnerappinstallpermissionsupdatedeventdata-fields-1previous_attributesenvironment_grants-variant-1-fields-1created_at).

### ReturnLineItemPreviousAttributes.return_reason variant 1.version

Declared alternatives: [ReturnReasonPreviousAttributes.version](../models/ReturnReasonPreviousAttributes.md#returnreasonpreviousattributesversion).

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

- Value shape: string. ID of the reason chosen for this line. 

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

- Value shape: Array of string. IDs of the resolutions that include this line, oldest first, including failed and canceled resolutions. 

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

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.selected_options](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributesselected_options).

### ReturnLineItemPreviousAttributes.sku

Declared alternatives: [RefundLineItemAllocationPreviousAttributes.sku](../models/RefundLineItemAllocationPreviousAttributes.md#refundlineitemallocationpreviousattributessku).

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

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### ReturnLineItemPreviousAttributes.variant_id

Declared alternatives: [OrderLineItemPreviousAttributes.variant_id](../models/OrderLineItemPreviousAttributes.md#orderlineitempreviousattributesvariant_id).

