[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ModifierSetListResponse

A page of `ModifierSet` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [ModifierSet](../models/ModifierSet.md#modifierset) | Modifier sets matching the request filters for this page. `data[]`: [field definitions](../models/ModifierSetListResponse.md#modifiersetlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Response metadata, including API version, trace identifier, and warnings when present. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/ModifierGroupResponse.md#modifiergroupresponsemeta). |
| `next_page_token` | Optional | string | Pass this token as page_token to read the next page with the same filters. Absent when there are no more results. |
| `request_id` | Required | string | Identifier of this API request, useful when contacting Flint support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ModifierSetListResponse.data[]

A reusable collection of customization groups.

Field definitions: [shared fields](ModifierSetResponse.md#modifiersetresponsedata).

### ModifierSetListResponse.data[].metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### ModifierSetListResponse.data[].modifier_groups[]

Field definitions: [BundleResponse.data.modifier_set variant 1.modifier_groups[]](../models/BundleResponse.md#bundleresponsedatamodifier_set-variant-1modifier_groups).

### ModifierSetListResponse.meta

Field definitions: [ModifierGroupResponse.meta](../models/ModifierGroupResponse.md#modifiergroupresponsemeta).

