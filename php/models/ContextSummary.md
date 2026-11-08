[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ContextSummary

A context the CLI is authorized to use: a sandbox or live account, with its ID, merchant ID, and name.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `environment` | Required | string | Whether the context is a sandbox or a live account. Values: `"sandbox"`, `"live"`. |
| `id` | Required | string | ID of the context. Name it as `context_id` when you refresh a token. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `name` | Required | string | Name of the context. |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. |

