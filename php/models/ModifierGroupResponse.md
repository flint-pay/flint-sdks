[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierGroupResponse

A response containing `ModifierGroup` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [ModifierGroup](../models/ModifierGroup.md#modifiergroup) | The modifier group returned by this operation. A group of choices that customize an item. `data`: [field definitions](../models/ModifierGroupResponse.md#modifiergroupresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Response metadata, including API version, trace identifier, and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/ModifierGroupResponse.md#modifiergroupresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, useful when contacting Flint support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ModifierGroupResponse.data

The modifier group returned by this operation. A group of choices that customize an item.

Field definitions: [shared fields](BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groupsmodifier_group).

### ModifierGroupResponse.data.metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### ModifierGroupResponse.data.modifiers[]

Field definitions: [BundleResponse.data.modifier_set variant 1.modifier_groups[].modifier_group.modifiers[]](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groupsmodifier_groupmodifiers).

### ModifierGroupResponse.meta

Response metadata, including API version, trace identifier, and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.

Field definitions: [shared fields](DisputeResponse.md#disputeresponsemeta).

### ModifierGroupResponse.meta.warnings[]

Field definitions: [DisputeResponse.meta.warnings[]](../models/DisputeResponse.md#disputeresponsemetawarnings).

