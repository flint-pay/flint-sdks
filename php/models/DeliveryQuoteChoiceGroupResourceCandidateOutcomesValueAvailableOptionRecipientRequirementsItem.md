[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionRecipientRequirementsItem

Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `field` | Required | string | Values: `"name"`, `"email"`, `"phone"`. |
| `format` | Optional | string | Values: `"text"`, `"email"`, `"e164"`. |
| `required` | Required | boolean |  |

