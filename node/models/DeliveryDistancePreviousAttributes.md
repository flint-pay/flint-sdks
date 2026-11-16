[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryDistancePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Optional | string or null | Unit of `value`. Values: `"meter"`, `"kilometer"`, `"mile"`. `unit`: [declared alternatives](../models/DeliveryDistancePreviousAttributes.md#deliverydistancepreviousattributesunit). |
| `value` | Optional | number or null | Distance, in `unit`. `value`: [declared alternatives](../models/DeliveryDistancePreviousAttributes.md#deliverydistancepreviousattributesvalue). |

### DeliveryDistancePreviousAttributes.unit

### DeliveryDistancePreviousAttributes.unit variant 1

anyOf variant 1: Unit of `value`..

- Value shape: string. Unit of `value`. Values: `"meter"`, `"kilometer"`, `"mile"`.

### DeliveryDistancePreviousAttributes.unit variant 2

anyOf variant 2.

- Value shape: null. Unit of `value`. 

### DeliveryDistancePreviousAttributes.value

### DeliveryDistancePreviousAttributes.value variant 1

anyOf variant 1: Distance, in `unit`..

- Value shape: number. Distance, in `unit`. 

### DeliveryDistancePreviousAttributes.value variant 2

anyOf variant 2.

- Value shape: null. Distance, in `unit`. 

