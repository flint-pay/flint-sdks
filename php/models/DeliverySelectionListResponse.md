[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionListResponse

A page of `DeliverySelection` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [DeliverySelection](../models/DeliverySelection.md#deliveryselection) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/DeliverySelectionListResponse.md#deliveryselectionlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliverySelectionListResponse.data[]

The delivery choice selected for a checkout or order. Poll GET /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its current status.

Field definitions: [shared fields](DeliverySelectionResponse.md#deliveryselectionresponsedata).

### DeliverySelectionListResponse.data[].buyer_location

Declared alternatives: [DeliverySelectionResponse.data.buyer_location](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatabuyer_location).

### DeliverySelectionListResponse.data[].choices[]

Field definitions: [DeliverySelectionResponse.data.choices[]](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatachoices).

### DeliverySelectionListResponse.data[].destination_address

Field definitions: [DeliverySelectionResponse.data.destination_address](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatadestination_address).

### DeliverySelectionListResponse.data[].input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### DeliverySelectionListResponse.data[].lifecycle_events[]

Field definitions: [DeliverySelectionResponse.data.lifecycle_events[]](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatalifecycle_events).

### DeliverySelectionListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

