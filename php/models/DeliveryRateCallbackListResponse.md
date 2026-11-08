[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackListResponse

A page of `DeliveryRateCallback` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [DeliveryRateCallback](../models/DeliveryRateCallback.md#deliveryratecallback) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/DeliveryRateCallbackListResponse.md#deliveryratecallbacklistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryRateCallbackListResponse.data[]

An endpoint that supplies delivery rates.

Field definitions: [shared fields](DeliveryRateCallbackResponse.md#deliveryratecallbackresponsedata).

### DeliveryRateCallbackListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

