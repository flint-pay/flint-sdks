[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityCreatorInput

The user or credential that created a workload identity, identified by resource type and ID.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string | ID of the creating user, API key, or workload identity. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `resource_type` | Required | string | What kind of caller created the identity: a `user` through the Dashboard or a CLI login, an `api_key`, or a `workload_identity` acting with its own access token. Example: `"user"`. Values: [157 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). |

