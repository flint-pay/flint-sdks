[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SignWebhookEndpointDeliveryRequest

The request body for: Sign a sandbox webhook delivery.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_event_id` | Required | string | Retained merchant event in the endpoint's sandbox. The endpoint must subscribe to its event type. minLength: `1`. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

