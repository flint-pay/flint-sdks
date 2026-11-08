[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CLIContextsResponse

The response for: List authorized CLI contexts.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contexts` | Required | Array of [ContextSummary](../models/ContextSummary.md#contextsummary) | maxItems: `100`. `contexts[]`: [field definitions](../models/CLIContextsResponse.md#clicontextsresponsecontexts). |
| `oauth_session_id` | Required | string |  |

### CLIContextsResponse.contexts[]

A context the CLI is authorized to use: a sandbox or live account, with its ID, merchant ID, and name.

Field definitions: [shared fields](ContextSummaryInput.md#contextsummaryinput).

