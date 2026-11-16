[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryShipmentDetailsPreviousAttributes

Declared schema DeliveryLocalDeliveryDetailsPreviousAttributes: 

Declared schema DeliveryShipmentDetailsPreviousAttributes: 





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Optional | string or null | Buyer-facing instructions for this delivery service. `instructions`: [declared alternatives](../models/DeliveryShipmentDetailsPreviousAttributes.md#deliveryshipmentdetailspreviousattributesinstructions). |
| `service_level` | Optional | string or null | Merchant's service-level label. Flint does not enforce the timing implied by the label. `service_level`: [declared alternatives](../models/DeliveryShipmentDetailsPreviousAttributes.md#deliveryshipmentdetailspreviousattributesservice_level). |

### DeliveryShipmentDetailsPreviousAttributes.instructions

### DeliveryShipmentDetailsPreviousAttributes.instructions variant 1

anyOf variant 1: Buyer-facing instructions for this delivery service..

- Value shape: string. Buyer-facing instructions for this delivery service. 

### DeliveryShipmentDetailsPreviousAttributes.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing instructions for this delivery service. 

### DeliveryShipmentDetailsPreviousAttributes.service_level

### DeliveryShipmentDetailsPreviousAttributes.service_level variant 1

anyOf variant 1: Merchant's service-level label. Flint does not enforce the timing implied by the label..

- Value shape: string. Merchant's service-level label. Flint does not enforce the timing implied by the label. 

### DeliveryShipmentDetailsPreviousAttributes.service_level variant 2

anyOf variant 2.

- Value shape: null. Merchant's service-level label. Flint does not enforce the timing implied by the label. 

