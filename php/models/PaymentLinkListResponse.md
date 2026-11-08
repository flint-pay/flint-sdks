[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkListResponse

A page of `PaymentLink` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [PaymentLink](../models/PaymentLink.md#paymentlink) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/PaymentLinkListResponse.md#paymentlinklistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PaymentLinkListResponse.data[]

A reusable link that opens checkout.

Field definitions: [shared fields](PaymentLinkResponse.md#paymentlinkresponsedata).

### PaymentLinkListResponse.data[].custom_fields[]

Field definitions: [PaymentLinkResponse.data.custom_fields[]](../models/PaymentLinkResponse.md#paymentlinkresponsedatacustom_fields).

### PaymentLinkListResponse.data[].event_config

Field definitions: [PaymentLinkResponse.data.event_config](../models/PaymentLinkResponse.md#paymentlinkresponsedataevent_config).

### PaymentLinkListResponse.data[].image

Field definitions: [PaymentLinkResponse.data.image](../models/PaymentLinkResponse.md#paymentlinkresponsedataimage).

### PaymentLinkListResponse.data[].inventory_routing_source

Field definitions: [PaymentLinkResponse.data.inventory_routing_source](../models/PaymentLinkResponse.md#paymentlinkresponsedatainventory_routing_source).

### PaymentLinkListResponse.data[].line_items[]

Declared alternatives: [PaymentLinkResponse.data.line_items[]](../models/PaymentLinkResponse.md#paymentlinkresponsedataline_items).

### PaymentLinkListResponse.data[].metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### PaymentLinkListResponse.data[].redirects

Field definitions: [PaymentLinkResponse.data.redirects](../models/PaymentLinkResponse.md#paymentlinkresponsedataredirects).

### PaymentLinkListResponse.data[].sales_summary

Field definitions: [PaymentLinkResponse.data.sales_summary](../models/PaymentLinkResponse.md#paymentlinkresponsedatasales_summary).

### PaymentLinkListResponse.data[].subscription_plan

Declared alternatives: [SubscriptionResponse.data.subscription_plan](../models/SubscriptionResponse.md#subscriptionresponsedatasubscription_plan).

### PaymentLinkListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

