[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRateCallbackConnectionCheckRequestInput

The body of a connection check, which Flint sends to a delivery rate callback's URL to confirm it is reachable and verifies signatures. Return any 2xx status; Flint doesn't read the response body.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Required | string | Always `connection_check`. Values: `"connection_check"`. |

