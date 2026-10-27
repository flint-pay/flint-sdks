[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomDomainDNSRecord

A DNS record for configuring or verifying a custom hostname.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Required | string | DNS name at which to publish this record. |
| `type` | Required | string | DNS record type to publish, such as cname or txt. Values: `"cname"`, `"txt"`. |
| `value` | Required | string | DNS record value to publish at name. |

