[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryBlackoutIntervalRequestRequestInput

A local start and end time during which a delivery schedule offers no windows.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `end_local` | Required | string | minLength: `1`. |
| `start_local` | Required | string | minLength: `1`. |

