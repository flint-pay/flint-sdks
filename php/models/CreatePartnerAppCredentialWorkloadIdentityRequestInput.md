[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppCredentialWorkloadIdentityRequestInput

The `workload_identity` variant of `CreatePartnerAppCredentialRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modes` | Optional | Array of string | Modes this credential can mint partner app tokens for, with grant_type=client_credentials or an authorization code exchange. Defaults to ["live", "test"]. Send ["test"] for a staging or CI deployment so its key can't mint live tokens. A mint for another mode returns 400 unauthorized_client. Can't be changed after creation. minItems: `1`. maxItems: `2`. uniqueItems: `true`. Items values: `"live"`, `"test"`. |
| `name` | Optional | string | Optional name to identify this credential. minLength: `1`. maxLength: `100`. |
| `type` | Required | string | Credential type. Values: `"workload_identity"`. |
| `workload_identity` | Required | [PartnerAppCredentialWorkloadIdentityRequestInput](../models/PartnerAppCredentialWorkloadIdentityRequestInput.md#partnerappcredentialworkloadidentityrequestinput) | An external OIDC identity whose subject and claim conditions must match exactly the registered policy. |

