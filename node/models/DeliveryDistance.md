[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryDistance







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Required | string | Values: `"meter"`, `"kilometer"`, `"mile"`. |
| `value` | Required | number |  |

### DeliveryDistance variant 1

anyOf variant 1: Declared schema DeliveryDistance. A distance as a `value` in meters, kilometers, or miles..

No additional constraints.

### DeliveryDistance variant 2

anyOf variant 2: Declared schema DeliveryPickupAvailabilityMaximumDistanceRequest. A maximum distance from the buyer location, as a value and unit, that limits which pickup locations a preview returns..

- Constraints for `value`: Maximum distance from the buyer location, greater than zero, in the selected unit. exclusiveMinimum: `0`.

