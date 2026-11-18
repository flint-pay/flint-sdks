[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReadinessRequirementError

A verification failure with a suggested correction.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Flint verification failure code. New codes may be added; use message and resolution for unknown codes. Values: [11 declared values](#readinessrequirementerror-code-values). |
| `message` | Required | string | What could not be verified. |
| `requirement` | Required | string | Flint requirement codes. New codes can appear; treat an unknown code as additional_account_information. Values: [36 declared values](MerchantAccountSessionCreateRequest.md#merchantaccountsessioncreaterequest-targeted_requirements--values). |
| `resolution` | Required | string | What the merchant should do to resolve the requirement. |

#### ReadinessRequirementError code values

- `"statement_descriptor_mismatch"`
- `"statement_descriptor_rejected"`
- `"tax_id_mismatch"`
- `"identity_mismatch"`
- `"document_unreadable"`
- `"document_expired"`
- `"document_mismatch"`
- `"document_rejected"`
- `"invalid_value"`
- `"profile_field_rejected"`
- `"verification_failed"`

