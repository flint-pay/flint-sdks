[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocalDeliveryDetailsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Optional | string or null | Buyer-facing instructions for this delivery service. `instructions`: [declared alternatives](../models/DeliveryLocalDeliveryDetailsPreviousAttributes.md#deliverylocaldeliverydetailspreviousattributesinstructions). |
| `service_level` | Optional | string or null | Merchant's service-level label. Flint does not enforce the timing implied by the label. `service_level`: [declared alternatives](../models/DeliveryLocalDeliveryDetailsPreviousAttributes.md#deliverylocaldeliverydetailspreviousattributesservice_level). |

### DeliveryLocalDeliveryDetailsPreviousAttributes.instructions

### DeliveryLocalDeliveryDetailsPreviousAttributes.instructions variant 1

anyOf variant 1: Buyer-facing instructions for this delivery service..

- Value shape: string. Buyer-facing instructions for this delivery service. 

### DeliveryLocalDeliveryDetailsPreviousAttributes.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing instructions for this delivery service. 

### DeliveryLocalDeliveryDetailsPreviousAttributes.service_level

### DeliveryLocalDeliveryDetailsPreviousAttributes.service_level variant 1

anyOf variant 1: Merchant's service-level label. Flint does not enforce the timing implied by the label..

- Value shape: string. Merchant's service-level label. Flint does not enforce the timing implied by the label. 

### DeliveryLocalDeliveryDetailsPreviousAttributes.service_level variant 2

anyOf variant 2.

- Value shape: null. Merchant's service-level label. Flint does not enforce the timing implied by the label. 

