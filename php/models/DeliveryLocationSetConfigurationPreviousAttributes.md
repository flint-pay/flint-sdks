[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryLocationSetConfigurationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `location_ids` | Optional | Array of string or null | IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most 25. `location_ids`: [declared alternatives](../models/DeliveryLocationSetConfigurationPreviousAttributes.md#deliverylocationsetconfigurationpreviousattributeslocation_ids). |

### DeliveryLocationSetConfigurationPreviousAttributes.location_ids

### DeliveryLocationSetConfigurationPreviousAttributes.location_ids variant 1

anyOf variant 1: IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most 25..

- Value shape: Array of string. IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most 25. Items: minLength: `1`. 

### DeliveryLocationSetConfigurationPreviousAttributes.location_ids variant 2

anyOf variant 2.

- Value shape: null. IDs of the Locations in the set, from 1 to 1,000. An allocated origin group accepts at most 25. 

