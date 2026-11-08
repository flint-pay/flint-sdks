[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateWebhookDeliveryRequest

The request body for: Create webhook delivery.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason_message` | Optional | string | Your note explaining this action. minLength: `1`. maxLength: `500`. |
| `webhook_endpoint_id` | Required | string | Active endpoint that currently subscribes to the event. minLength: `1`. Example: `"whep_01KEZF7C006FXYTAJRZCGCBJTN"`. |
| `webhook_event_id` | Required | string | Retained webhook event to deliver. minLength: `1`. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

