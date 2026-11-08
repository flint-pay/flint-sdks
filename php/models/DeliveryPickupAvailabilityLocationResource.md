[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPickupAvailabilityLocationResource

One pickup location in a pickup locations preview, with its outcome, distance, compatible methods, and applicable quantities.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `applicable_quantities` | Required | Array of [DeliveryPickupAvailabilityQuantityResource](../models/DeliveryPickupAvailabilityQuantityResource.md#deliverypickupavailabilityquantityresource) | `applicable_quantities[]`: [field definitions](../models/DeliveryPickupAvailabilityLocationResource.md#deliverypickupavailabilitylocationresourceapplicable_quantities). |
| `candidate_outcome` | Required | [DeliveryPickupAvailabilityCandidateOutcome](../models/DeliveryPickupAvailabilityCandidateOutcome.md#deliverypickupavailabilitycandidateoutcome) | Whether pickup is available at one location, chosen by `type`, with the reason when it is unavailable or cannot be calculated. |
| `compatible_methods` | Required | Array of [DeliveryPickupAvailabilityMethodResource](../models/DeliveryPickupAvailabilityMethodResource.md#deliverypickupavailabilitymethodresource) | `compatible_methods[]`: [field definitions](../models/DeliveryPickupAvailabilityLocationResource.md#deliverypickupavailabilitylocationresourcecompatible_methods). |
| `distance_meters` | Optional | number | Straight-line distance in meters from the buyer location. A buyer location with only a postal code is measured from the postal code's center. Omitted when Flint cannot place the buyer location or the store. |
| `location` | Required | [DeliveryPickupAvailabilityLocationSummary](../models/DeliveryPickupAvailabilityLocationSummary.md#deliverypickupavailabilitylocationsummary) | The ID, name, and address of a pickup location in a pickup locations preview. `location`: [field definitions](../models/DeliveryPickupAvailabilityLocationResource.md#deliverypickupavailabilitylocationresourcelocation). |

### DeliveryPickupAvailabilityLocationResource.applicable_quantities[]

The quantity of an order line item, or of one of its bundle components, that a pickup location applies to.

Field definitions: [shared fields](DeliveryPickupAvailabilityQuantityResourceInput.md#deliverypickupavailabilityquantityresourceinput).

### DeliveryPickupAvailabilityLocationResource.compatible_methods[]

A pickup delivery method, with its revision, that can serve a pickup location.

Field definitions: [shared fields](DeliveryPickupAvailabilityMethodResourceInput.md#deliverypickupavailabilitymethodresourceinput).

### DeliveryPickupAvailabilityLocationResource.location

The ID, name, and address of a pickup location in a pickup locations preview.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address` | Optional | [Address](../models/Address.md#address) | A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `address`: [field definitions](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress). |
| `location_id` | Required | string | Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `name` | Required | string |  |

### DeliveryPickupAvailabilityLocationResource.location.address

Field definitions: [OrderResponse.data.delivery_destination.address](../models/OrderResponse.md#orderresponsedatadelivery_destinationaddress).

