[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIRequestLogQueryParam

A query string parameter from a logged API request, as a name and value.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string | Query parameter name, decoded. |
| `value` | Required | string | Query parameter value, decoded. Flint replaces the value of a sensitive parameter with a placeholder. |

