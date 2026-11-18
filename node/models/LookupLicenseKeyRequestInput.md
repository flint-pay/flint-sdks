[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LookupLicenseKeyRequestInput

Request input. Response: [LookupLicenseKeyRequest](../models/LookupLicenseKeyRequest.md#lookuplicensekeyrequest).

The full key to look up.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Required | string | The full bearer key. Generated keys ignore case, spaces and hyphens and use the last 25 characters after normalization. Pool keys match exactly after surrounding whitespace is trimmed. minLength: `1`. |

