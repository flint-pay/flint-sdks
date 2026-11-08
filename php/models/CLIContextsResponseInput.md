[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CLIContextsResponseInput

The response for: List authorized CLI contexts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contexts` | Required | Array of [ContextSummaryInput](../models/ContextSummaryInput.md#contextsummaryinput) | maxItems: `100`. |
| `oauth_session_id` | Required | string | Example: `"session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"`. |

