[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAddressAdvisoryResource

An address verification result for a delivery address or buyer location. `suggested_address` may offer a correction.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `role` | Required | string | Values: `"destination_address"`, `"buyer_location"`. |
| `suggested_address` | Optional | [Address](../models/Address.md#address) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `suggested_address`: [field definitions](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1destination_address). |
| `verification_state` | Required | string | Values: `"needs_review"`, `"unverifiable"`. |

### DeliveryAddressAdvisoryResource.suggested_address

Field definitions: [DeliveryPreviewResponse.data variant 1.destination_address](../models/DeliveryPreviewResponse.md#deliverypreviewresponsedata-variant-1destination_address).

