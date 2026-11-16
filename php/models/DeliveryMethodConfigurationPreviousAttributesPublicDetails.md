[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPreviousAttributesPublicDetails

Buyer-visible structured details supplied by the merchant.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Optional | string or null | Buyer-visible instructions for this method. `instructions`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesPublicDetails.md#deliverymethodconfigurationpreviousattributespublicdetailsinstructions). |
| `pickup_mode` | Optional | string or null | Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. `pickup_mode`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesPublicDetails.md#deliverymethodconfigurationpreviousattributespublicdetailspickup_mode). |
| `service_level` | Optional | string or null | Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`, `"on_demand"`, `"scheduled"`. `service_level`: [declared alternatives](../models/DeliveryMethodConfigurationPreviousAttributesPublicDetails.md#deliverymethodconfigurationpreviousattributespublicdetailsservice_level). |

### DeliveryMethodConfigurationPreviousAttributesPublicDetails.instructions

### DeliveryMethodConfigurationPreviousAttributesPublicDetails.instructions variant 1

anyOf variant 1: Buyer-visible instructions for this method..

- Value shape: string. Buyer-visible instructions for this method. Buyer-visible instructions for this method. maxLength: `2048`. 

### DeliveryMethodConfigurationPreviousAttributesPublicDetails.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible instructions for this method. 

### DeliveryMethodConfigurationPreviousAttributesPublicDetails.pickup_mode

### DeliveryMethodConfigurationPreviousAttributesPublicDetails.pickup_mode variant 1

anyOf variant 1: Required for pickup methods and rejected for other method types..

- Value shape: string. Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`.

### DeliveryMethodConfigurationPreviousAttributesPublicDetails.pickup_mode variant 2

anyOf variant 2.

- Value shape: null. Required for pickup methods and rejected for other method types. 

### DeliveryMethodConfigurationPreviousAttributesPublicDetails.service_level

### DeliveryMethodConfigurationPreviousAttributesPublicDetails.service_level variant 1

anyOf variant 1: Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled..

- Value shape: string. Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`, `"on_demand"`, `"scheduled"`.

### DeliveryMethodConfigurationPreviousAttributesPublicDetails.service_level variant 2

anyOf variant 2.

- Value shape: null. Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. 

