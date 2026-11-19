[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityCreator

The user or credential that created a workload identity, identified by resource type and ID.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string | ID of the creating user, API key, or workload identity. |
| `resource_type` | Required | string | What kind of caller created the identity: a `user` through the Dashboard or a CLI login, an `api_key`, or a `workload_identity` acting with its own access token. Values: [158 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |

