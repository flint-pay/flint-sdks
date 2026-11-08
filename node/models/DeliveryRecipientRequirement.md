[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryRecipientRequirement







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `field` | Required | string | Values: `"name"`, `"email"`, `"phone"`. |
| `format` | Optional | string | Values: `"text"`, `"email"`, `"e164"`. |
| `required` | Required | boolean |  |

### DeliveryRecipientRequirement variant 1

anyOf variant 1: Declared schema DeliveryRecipientRequirement. Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use..

No additional constraints.

### DeliveryRecipientRequirement variant 2

anyOf variant 2: Declared schema DeliveryRecipientRequirementRequest. Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use..

No additional constraints.

