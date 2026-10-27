[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SetDefaultCustomerAddressRequest

The request body for: Set a default address for the current buyer; Set a default customer address.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `default_for` | Required | string | Values: `"billing"`, `"shipping"`, `"both"`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

