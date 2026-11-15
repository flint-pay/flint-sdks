[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CLIContextsResponse

The response for: List authorized CLI contexts.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contexts` | Required | Array of [ContextSummary](../models/ContextSummary.md#contextsummary) | The contexts the user can use in this session, each a merchant and environment they approved. Contexts that were removed or that the user can no longer access are left out. At most 100. maxItems: `100`. `contexts[]`: [field definitions](../models/CLIContextsResponse.md#clicontextsresponsecontexts). |
| `oauth_session_id` | Required | string | ID of the CLI session that holds these contexts. Token responses for the session carry the same ID. |

### CLIContextsResponse.contexts[]

A context the CLI is authorized to use: a sandbox or live account, with its ID, merchant ID, and name.

Field definitions: [shared fields](ContextSummaryInput.md#contextsummaryinput).

