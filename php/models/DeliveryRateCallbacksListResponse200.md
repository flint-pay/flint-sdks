[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbacksListResponse200

A page of `DeliveryRateCallback` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [DeliveryRateCallback](../models/DeliveryRateCallback.md#deliveryratecallback) | `data[]`: [field definitions](../models/DeliveryRateCallbacksCreateResponse201.md#deliveryratecallbackscreateresponse201data). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `next_page_token` | Optional | string |  |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### DeliveryRateCallbacksListResponse200.data[]

Field definitions: [DeliveryRateCallbacksCreateResponse201.data](../models/DeliveryRateCallbacksCreateResponse201.md#deliveryratecallbackscreateresponse201data).

