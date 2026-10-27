[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAddressAdvisoryResourceInput

An address verification result for a delivery address or buyer location. `suggested_address` may offer a correction.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `role` | Required | string | Values: `"destination_address"`, `"buyer_location"`. |
| `suggested_address` | Optional | [DeliveryAddressRequestInput](../models/DeliveryAddressRequestInput.md#deliveryaddressrequestinput) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address you supply for delivery quotes, previews, and selections. |
| `verification_state` | Required | string | Values: `"needs_review"`, `"unverifiable"`. |

