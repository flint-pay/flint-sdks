[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionRecipientRequirementsItem

Says whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the format it must use.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `field` | Required | string | Recipient field the method asks for. Values: `"name"`, `"email"`, `"phone"`. |
| `format` | Optional | string | Format the value must follow. Values: `"text"`, `"email"`, `"e164"`. |
| `required` | Required | boolean | Whether payment needs this field. |

