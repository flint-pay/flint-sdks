[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppCredentialWorkloadIdentityRequest

The `workload_identity` variant of `CreatePartnerAppCredentialRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string | Optional name to identify this credential. minLength: `1`. maxLength: `100`. |
| `type` | Required | string | Credential type. Values: `"workload_identity"`. |
| `workload_identity` | Required | [PartnerAppCredentialWorkloadIdentityRequest](../models/PartnerAppCredentialWorkloadIdentityRequest.md#partnerappcredentialworkloadidentityrequest) | An external OIDC identity whose subject and claim conditions must match exactly the registered policy. |

