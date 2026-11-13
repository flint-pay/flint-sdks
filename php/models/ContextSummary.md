[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ContextSummary

A context the CLI is authorized to use: a sandbox or live account, with its ID, merchant ID, and name.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `environment` | Required | string | Deprecated: use mode. sandbox corresponds to test, and live corresponds to live. Values: `"sandbox"`, `"live"`. |
| `id` | Required | string | ID of the context. Name it as `context_id` when you refresh a token. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Whether this context uses test or live data. Values: `"test"`, `"live"`. |
| `name` | Required | string | Name of the context. |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. |

