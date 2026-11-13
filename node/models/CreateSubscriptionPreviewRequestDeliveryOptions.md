[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestDeliveryOptions







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `destination` | Required | [SubscriptionServiceLocationRequest](../models/SubscriptionServiceLocationRequest.md#subscriptionservicelocationrequest) | Address to evaluate each method against: one of the customer's saved addresses or a new address. Where to deliver a subscription: a saved customer address by ID, or a new address. `destination`: [declared alternatives](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest-variant-1destination). |
| `mode` | Required | string | Selects the delivery options preview. Values: `"delivery_options"`. |
| `subscription_id` | Required | string | ID of the subscription to list delivery methods for. minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |

### CreateSubscriptionPreviewRequestDeliveryOptions variant 1: `mode` = `"delivery_options"`

anyOf CreateMeSubscriptionPreviewRequestDeliveryOptions: Declared schema CreateMeSubscriptionPreviewRequestDeliveryOptions. The `delivery_options` variant of `CreateMeSubscriptionPreviewRequest`..

No additional constraints.

### CreateSubscriptionPreviewRequestDeliveryOptions variant 2: `mode` = `"delivery_options"`

anyOf CreateSubscriptionPreviewRequestDeliveryOptions: Declared schema CreateSubscriptionPreviewRequestDeliveryOptions. The `delivery_options` variant of `CreateSubscriptionPreviewRequest`..

No additional constraints.

### CreateSubscriptionPreviewRequestDeliveryOptions.destination

Declared alternatives: [CreateMeSubscriptionPreviewRequest variant 1.destination](../models/CreateMeSubscriptionPreviewRequest.md#createmesubscriptionpreviewrequest-variant-1destination).

