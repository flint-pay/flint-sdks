[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceReferenceInput

A reference to another resource by `resource_type` and `resource_id`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string | Public Flint ID of the referenced resource. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Required | string | Public resource kind identified by resource_id, such as payment_intent for a payment. Example: `"order"`. Values: [146 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |

