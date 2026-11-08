[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WebhookEndpointListResponse

A page of `WebhookEndpoint` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [WebhookEndpoint](../models/WebhookEndpoint.md#webhookendpoint) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/WebhookEndpointListResponse.md#webhookendpointlistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### WebhookEndpointListResponse.data[]

A merchant webhook endpoint belongs to the live mode or sandbox of the credential that created it and receives only that environment's events. Partner endpoints select sources with event_sources and installed_merchant_modes.

Field definitions: [shared fields](WebhookEndpointResponse.md#webhookendpointresponsedata).

### WebhookEndpointListResponse.data[].created_by

Field definitions: [WebhookEndpointWithSecretResponse.data.created_by](../models/WebhookEndpointWithSecretResponse.md#webhookendpointwithsecretresponsedatacreated_by).

### WebhookEndpointListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

