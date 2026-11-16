[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryDistancePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `unit` | Optional | string or null | Unit of `value`. Values: `"meter"`, `"kilometer"`, `"mile"`. `unit`: [declared alternatives](../models/DeliveryDistancePreviousAttributesInput.md#deliverydistancepreviousattributesinputunit). |
| `value` | Optional | number or null | Distance, in `unit`. `value`: [declared alternatives](../models/DeliveryDistancePreviousAttributesInput.md#deliverydistancepreviousattributesinputvalue). |

### DeliveryDistancePreviousAttributesInput.unit

### DeliveryDistancePreviousAttributesInput.unit variant 1

anyOf variant 1: Unit of `value`..

- Value shape: string. Unit of `value`. Values: `"meter"`, `"kilometer"`, `"mile"`.

### DeliveryDistancePreviousAttributesInput.unit variant 2

anyOf variant 2.

- Value shape: null. Unit of `value`. 

### DeliveryDistancePreviousAttributesInput.value

### DeliveryDistancePreviousAttributesInput.value variant 1

anyOf variant 1: Distance, in `unit`..

- Value shape: number. Distance, in `unit`. 

### DeliveryDistancePreviousAttributesInput.value variant 2

anyOf variant 2.

- Value shape: null. Distance, in `unit`. 

