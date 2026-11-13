[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePaymentMethodDomainRequest

The request body for: Register payment method domain.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `domain_name` | Required | string | Exact fully-qualified hostname to register. Limited to 253 characters (Unicode code points) before trimming whitespace and lowercasing. The resulting hostname uses ASCII characters only. Do not include a scheme, path, port, IP address, or wildcard. minLength: `1`. maxLength: `253`. pattern: `^[\t\n\v\f\r ]*(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?[\t\n\v\f\r ]*$`. |

