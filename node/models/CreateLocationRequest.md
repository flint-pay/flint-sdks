[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateLocationRequest

The request body for: Create location.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Required | [LocationAddressRequest](../models/LocationAddressRequest.md#locationaddressrequest) | The street address you supply when creating or updating a merchant location. Send null on an optional field to clear it. |
| `coordinate` | Optional | [LocationCoordinate](../models/LocationCoordinate.md#locationcoordinate) | A latitude and longitude for a merchant location. `coordinate`: [field definitions](../models/CreateLocationRequest.md#createlocationrequestcoordinate). |
| `coordinate_source` | Optional | string or null | Send null to clear it. Values: `"merchant_supplied"`, `"geocoded"`, `null`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `inventory_allocation_enabled` | Optional | boolean | Whether this Location accepts inventory allocation. Sending this field requires commerce.inventory_locations.write in addition to the route scope. Default: `false`. |
| `metadata` | Optional | Map of string | Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. maxProperties: `50`. Map values: minLength: `1`. maxLength: `4096`. |
| `name` | Required | string | minLength: `1`. maxLength: `255`. |
| `status` | Optional | string | Default: `"active"`. Values: `"active"`, `"inactive"`. |
| `timezone` | Required | string | minLength: `1`. |

### CreateLocationRequest.coordinate

A latitude and longitude for a merchant location.

Field definitions: [shared fields](LocationCoordinateInput.md#locationcoordinateinput).

