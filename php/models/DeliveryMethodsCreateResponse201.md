[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodsCreateResponse201

A response containing `DeliveryMethod` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliveryMethod](../models/DeliveryMethod.md#deliverymethod) | A configured shipping, pickup, local delivery, or service option. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

