[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LookupLicenseKeyRequestInput

The full key to look up.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `key` | Required | string | The full bearer key. Generated keys ignore case, spaces and hyphens and use the last 25 characters after normalization. Pool keys match exactly after surrounding whitespace is trimmed. minLength: `1`. |

