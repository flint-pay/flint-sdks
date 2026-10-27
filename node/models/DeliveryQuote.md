[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuote

An estimate of available delivery options and their prices.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `basis_delivery_quote_id` | Optional | string |  |
| `basis_delivery_selection_id` | Optional | string |  |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequest](../models/DeliveryBuyerLocationRequest.md#deliverybuyerlocationrequest) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The normalized buyer address or coordinate used for this quote. `buyer_location`: [declared alternatives](../models/DeliveryPreview.md#deliverypreviewbuyer_location). |
| `buyer_reasons` | Required | Array of string | Buyer-safe reasons no delivery option was available. Merchant configuration details are never included. Items values: [6 declared values](#deliveryquote-buyer_reasons--values). |
| `checkout_session_id` | Optional | string | Always present with an API key or dashboard credential. |
| `choice_groups` | Required | Array of [DeliveryQuoteChoiceGroupResource](../models/DeliveryQuoteChoiceGroupResource.md#deliveryquotechoicegroupresource) |  |
| `consumed_by_delivery_selection_id` | Optional | string |  |
| `delivery_quote_id` | Required | string |  |
| `delivery_quote_version` | Optional | integer string | Version of the order's delivery details evaluated by this quote. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `destination_address` | Optional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations. `destination_address`: [field definitions](../models/DeliveryPreview.md#deliverypreviewdestination_address). |
| `eligibility_context_version` | Optional | integer string | Version of the checkout eligibility context evaluated by this quote. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `evaluated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `evaluation_status` | Required | string | Values: `"complete"`, `"incomplete"`, `"degraded"`. |
| `expires_at` | Required | string | Authoritative expiry for this quote: 24 hours when every method uses fixed, tiered, or rate_table pricing, and at most 15 minutes otherwise. A cart with tracked inventory shortens it to the 5 minutes its stock check stays valid. Read this value from every response. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs the delivery methods need. A quote requirement, such as the destination address, is input a method needs before Flint can price it. A selection requirement is input a delivery selection needs before payment, such as a recipient field or delivery window an option requires. A method that waits on the buyer's address or store, or on an address the buyer must correct, already lists the recipient fields it requires. Those requirements name the method's choice group and have no delivery_option_ids. |
| `merchant_diagnostics` | Optional | Array of [DeliveryMerchantDiagnostic](../models/DeliveryMerchantDiagnostic.md#deliverymerchantdiagnostic) | Always present with an API key or dashboard credential. |
| `methods` | Optional | Array of [DeliveryQuoteMethodResource](../models/DeliveryQuoteMethodResource.md#deliveryquotemethodresource) |  |
| `order_id` | Optional | string | Always present with an API key or dashboard credential. |
| `pending_caller_rate_requests` | Optional | Array of [DeliveryPendingCallerRateRequest](../models/DeliveryPendingCallerRateRequest.md#deliverypendingcallerraterequest) |  |
| `revocation_reason` | Optional | string | Why the quote was revoked: the reason on the delivery revocation that fenced a dependency this quote used. Present when status is revoked. Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `revoked_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `selection_required` | Required | boolean |  |
| `stale_reason` | Optional | string | Values: `"checkout_changed"`, `"selection_changed"`, `"eligibility_changed"`, `"inventory_changed"`, `"authority_changed"`, `"consumed_by_priced_quote"`. |
| `status` | Required | string | Values: `"active"`, `"consumed"`, `"stale"`, `"expired"`, `"revoked"`. |

#### DeliveryQuote buyer_reasons [] values

- `"address_required"`
- `"address_incomplete"`
- `"outside_delivery_area"`
- `"no_pickup_location_nearby"`
- `"unavailable_for_these_items"`
- `"temporarily_unavailable"`

### DeliveryQuote.buyer_location

Declared alternatives: [DeliveryPreview.buyer_location](../models/DeliveryPreview.md#deliverypreviewbuyer_location).

### DeliveryQuote.destination_address

Field definitions: [DeliveryPreview.destination_address](../models/DeliveryPreview.md#deliverypreviewdestination_address).

