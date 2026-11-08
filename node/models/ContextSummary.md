[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ContextSummary

A context the CLI is authorized to use: a sandbox or live account, with its ID, merchant ID, and name.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `environment` | Required | string | Values: `"sandbox"`, `"live"`. |
| `id` | Required | string |  |
| `merchant_id` | Required | string |  |
| `name` | Required | string |  |
| `sandbox_id` | Optional | string |  |

