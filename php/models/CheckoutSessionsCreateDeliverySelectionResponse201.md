[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionsCreateDeliverySelectionResponse201

A response containing `DeliverySelectionResult` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [DeliverySelectionResult](../models/DeliverySelectionResult.md#deliveryselectionresult) | Result of a checkout delivery selection request, returning the checkout session, order, delivery selection, and any inventory reservation summary. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

