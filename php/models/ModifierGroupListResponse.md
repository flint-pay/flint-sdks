[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierGroupListResponse

A page of `ModifierGroup` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ModifierGroup](../models/ModifierGroup.md#modifiergroup) | Modifier groups matching the request filters for this page. `data[]`: [field definitions](../models/ModifierGroupListResponse.md#modifiergrouplistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Response metadata, including API version, trace identifier, and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/ModifierGroupResponse.md#modifiergroupresponsemeta). |
| `next_page_token` | Optional | string | Pass this token as page_token to read the next page with the same filters. Absent when there are no more results. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting Flint support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ModifierGroupListResponse.data[]

A group of choices that customize an item.

Field definitions: [shared fields](BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groupsmodifier_group).

### ModifierGroupListResponse.data[].metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### ModifierGroupListResponse.data[].modifiers[]

Field definitions: [BundleResponse.data.modifier_set variant 1.modifier_groups[].modifier_group.modifiers[]](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groupsmodifier_groupmodifiers).

### ModifierGroupListResponse.meta

Field definitions: [ModifierGroupResponse.meta](../models/ModifierGroupResponse.md#modifiergroupresponsemeta).

