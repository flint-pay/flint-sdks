[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceReference

A reference to another resource by `resource_type` and `resource_id`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string | Public Flint ID of the referenced resource. |
| `resource_type` | Required | string | Public resource kind identified by resource_id, such as payment_intent for a payment. Values: [153 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |

