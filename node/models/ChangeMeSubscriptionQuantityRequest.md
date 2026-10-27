[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ChangeMeSubscriptionQuantityRequest

The request body for: Change subscription quantity.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `100`. |

