[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LookupTicketRequest

Look up a ticket using its bearer admission credential.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `admission_code` | Required | string | The 16-character Crockford base32 admission code. Spaces, hyphens and ASCII lowercase are normalized. minLength: `16`. |

