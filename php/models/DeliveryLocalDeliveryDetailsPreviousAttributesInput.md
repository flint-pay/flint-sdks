[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocalDeliveryDetailsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Optional | string or null | Buyer-facing instructions for this delivery service. `instructions`: [declared alternatives](../models/DeliveryLocalDeliveryDetailsPreviousAttributesInput.md#deliverylocaldeliverydetailspreviousattributesinputinstructions). |
| `service_level` | Optional | string or null | Merchant's service-level label. Flint does not enforce the timing implied by the label. `service_level`: [declared alternatives](../models/DeliveryLocalDeliveryDetailsPreviousAttributesInput.md#deliverylocaldeliverydetailspreviousattributesinputservice_level). |

### DeliveryLocalDeliveryDetailsPreviousAttributesInput.instructions

### DeliveryLocalDeliveryDetailsPreviousAttributesInput.instructions variant 1

anyOf variant 1: Buyer-facing instructions for this delivery service..

- Value shape: string. Buyer-facing instructions for this delivery service. 

### DeliveryLocalDeliveryDetailsPreviousAttributesInput.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing instructions for this delivery service. 

### DeliveryLocalDeliveryDetailsPreviousAttributesInput.service_level

### DeliveryLocalDeliveryDetailsPreviousAttributesInput.service_level variant 1

anyOf variant 1: Merchant's service-level label. Flint does not enforce the timing implied by the label..

- Value shape: string. Merchant's service-level label. Flint does not enforce the timing implied by the label. 

### DeliveryLocalDeliveryDetailsPreviousAttributesInput.service_level variant 2

anyOf variant 2.

- Value shape: null. Merchant's service-level label. Flint does not enforce the timing implied by the label. 

