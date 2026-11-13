[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SignedWebhookEndpointDeliveryResponse

A response containing `SignedWebhookEndpointDelivery` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [SignedWebhookEndpointDelivery](../models/SignedWebhookEndpointDelivery.md#signedwebhookendpointdelivery) | Resource, collection, or operation result returned by this request. A transient signed delivery for the caller's sandbox endpoint. Forward body bytes and headers unchanged; this is not a persisted delivery or HTTP dispatch. `data`: [field definitions](../models/SignedWebhookEndpointDeliveryResponse.md#signedwebhookendpointdeliveryresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### SignedWebhookEndpointDeliveryResponse.data

Resource, collection, or operation result returned by this request. A transient signed delivery for the caller's sandbox endpoint. Forward body bytes and headers unchanged; this is not a persisted delivery or HTTP dispatch.

Field definitions: [shared fields](SignedWebhookEndpointDeliveryInput.md#signedwebhookendpointdeliveryinput).

### SignedWebhookEndpointDeliveryResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

