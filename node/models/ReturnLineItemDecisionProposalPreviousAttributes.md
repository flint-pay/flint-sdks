[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnLineItemDecisionProposalPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_resolution_types` | Optional | Array of string or null | Resolution types the proposal allows. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`. `allowed_resolution_types`: [declared alternatives](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributesallowed_resolution_types). |
| `automatic_resolution_type` | Optional | string or null | The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`. `automatic_resolution_type`: [declared alternatives](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributesautomatic_resolution_type). |
| `based_on_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `based_on_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |
| `is_inspection_required` | Optional | boolean or null | Whether the proposal requires inspection of the returned units. `is_inspection_required`: [declared alternatives](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributesis_inspection_required). |
| `receiving_location_id` | Optional | string or null | ID of the Location the proposal sends returned merchandise to. `receiving_location_id`: [declared alternatives](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributesreceiving_location_id). |
| `release_timing` | Optional | string or null | The policy timing, or after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. This fill never counts as a policy deviation. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`. `release_timing`: [declared alternatives](../models/ReturnLineItemDecisionProposalPreviousAttributes.md#returnlineitemdecisionproposalpreviousattributesrelease_timing). |
| `return_required_quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `return_required_quantity`: [declared alternatives](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity). |

### ReturnLineItemDecisionProposalPreviousAttributes.allowed_resolution_types

### ReturnLineItemDecisionProposalPreviousAttributes.allowed_resolution_types variant 1

anyOf variant 1: Resolution types the proposal allows..

- Value shape: Array of string. Resolution types the proposal allows. Items values: `"refund"`, `"exchange"`, `"replacement"`, `"no_monetary_action"`, `"store_credit"`.

### ReturnLineItemDecisionProposalPreviousAttributes.allowed_resolution_types variant 2

anyOf variant 2.

- Value shape: null. Resolution types the proposal allows. 

### ReturnLineItemDecisionProposalPreviousAttributes.automatic_resolution_type

### ReturnLineItemDecisionProposalPreviousAttributes.automatic_resolution_type variant 1

anyOf variant 1: The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type..

- Value shape: string. The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. Example: `"refund"`. Values: `"refund"`, `"store_credit"`, `"no_monetary_action"`.

### ReturnLineItemDecisionProposalPreviousAttributes.automatic_resolution_type variant 2

anyOf variant 2.

- Value shape: null. The refund, store_credit, or no_monetary_action that Flint creates and confirms automatically, using the policy default or buyer request according to the policy selection mode. Absent for manual resolution, including buyer_requested when the line has no requested_resolution_type. 

### ReturnLineItemDecisionProposalPreviousAttributes.based_on_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

### ReturnLineItemDecisionProposalPreviousAttributes.is_inspection_required

### ReturnLineItemDecisionProposalPreviousAttributes.is_inspection_required variant 1

anyOf variant 1: Whether the proposal requires inspection of the returned units..

- Value shape: boolean. Whether the proposal requires inspection of the returned units. 

### ReturnLineItemDecisionProposalPreviousAttributes.is_inspection_required variant 2

anyOf variant 2.

- Value shape: null. Whether the proposal requires inspection of the returned units. 

### ReturnLineItemDecisionProposalPreviousAttributes.receiving_location_id

### ReturnLineItemDecisionProposalPreviousAttributes.receiving_location_id variant 1

anyOf variant 1: ID of the Location the proposal sends returned merchandise to..

- Value shape: string. ID of the Location the proposal sends returned merchandise to. ID of the Location the proposal sends returned merchandise to. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### ReturnLineItemDecisionProposalPreviousAttributes.receiving_location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Location the proposal sends returned merchandise to. 

### ReturnLineItemDecisionProposalPreviousAttributes.release_timing

### ReturnLineItemDecisionProposalPreviousAttributes.release_timing variant 1

anyOf variant 1: The policy timing, or after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. This fill never counts as a policy deviation. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release..

- Value shape: string. The policy timing, or after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. This fill never counts as a policy deviation. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Values: `"after_approval"`, `"after_handoff"`, `"after_receipt"`, `"after_inspection"`, `"manual"`.

### ReturnLineItemDecisionProposalPreviousAttributes.release_timing variant 2

anyOf variant 2.

- Value shape: null. The policy timing, or after_inspection when merchandise and inspection are required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. This fill never counts as a policy deviation. Applies to every resolution type, including exchanges and replacements. manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. 

### ReturnLineItemDecisionProposalPreviousAttributes.return_required_quantity

Declared alternatives: [DeliveryQuoteLineItemResourcePreviousAttributes.quantity](../models/DeliveryQuoteLineItemResourcePreviousAttributes.md#deliveryquotelineitemresourcepreviousattributesquantity).

