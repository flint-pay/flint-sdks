[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestDeliveryOptions







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [SubscriptionServiceLocationRequest](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest) | Where to deliver a subscription: a saved customer address by ID, or a new address. `destination`: [declared alternatives](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest-variant-1destination). |
| `mode` | Required | string | Values: `"delivery_options"`. |
| `subscription_id` | Required | string | minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateSubscriptionPreviewRequestDeliveryOptions variant 1: `mode` = `"delivery_options"`

anyOf variant 1: Declared schema CreateMeSubscriptionPreviewRequestDeliveryOptions. The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`..

No additional constraints.

### CreateSubscriptionPreviewRequestDeliveryOptions variant 2: `mode` = `"delivery_options"`

anyOf variant 2: Declared schema CreateSubscriptionPreviewRequestDeliveryOptions. The `delivery_options` variant of `CreateSubscriptionPreviewRequest`..

No additional constraints.

### CreateSubscriptionPreviewRequestDeliveryOptions.destination

Declared alternatives: [CreateMeSubscriptionPreviewRequest variant 1.destination](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest-variant-1destination).

