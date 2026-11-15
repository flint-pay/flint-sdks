[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CLIContextsResponse

The response for: List authorized CLI contexts.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `contexts` | Required | Array of [ContextSummary](../models/ContextSummary.md#contextsummary) | The contexts the user can use in this session, each a merchant and environment they approved. Contexts that were removed or that the user can no longer access are left out. At most 100. maxItems: `100`. |
| `oauth_session_id` | Required | string | ID of the CLI session that holds these contexts. Token responses for the session carry the same ID. Example: `"session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"`. |

