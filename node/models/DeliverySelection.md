[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelection

The delivery choice selected for a checkout or order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Delivery charge committed by this selection. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/DeliverySelection.md#deliveryselectionamount_money). |
| `buyer_location` | Optional | [DeliveryBuyerLocationRequest](../models/DeliveryBuyerLocationRequest.md#deliverybuyerlocationrequest) | Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote. `buyer_location`: [declared alternatives](../models/DeliverySelection.md#deliveryselectionbuyer_location). |
| `calculation_expires_at` | Optional | string | Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: `date-time`. |
| `checkout_session_id` | Optional | string | Checkout session that owns the selection. Always present with an API key or dashboard credential. |
| `choices` | Required | Array of [DeliverySelectionChoiceResource](../models/DeliverySelectionChoiceResource.md#deliveryselectionchoiceresource) | One chosen option for each required choice group. |
| `created_at` | Optional | string | Time the selection was created. Always present with an API key or dashboard credential. Format: `date-time`. |
| `delivery_quote_id` | Required | string | Quote from which this selection was made. |
| `delivery_quote_version` | Optional | integer string | Quote version from which this selection was created. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `delivery_selection_id` | Required | string | Stable delivery selection ID. |
| `destination_address` | Optional | [DeliveryAddressRequest](../models/DeliveryAddressRequest.md#deliveryaddressrequest) | Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations. `destination_address`: [field definitions](../models/DeliverySelection.md#deliveryselectiondestination_address). |
| `eligibility_context_version` | Optional | integer string | Checkout eligibility context version evaluated by this selection. Always present with an API key or dashboard credential. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `0`. |
| `expires_at` | Required | string | Deadline after which this provisional selection can no longer be committed. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs this selection still needs before payment: each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. |
| `instructions` | Optional | string | Buyer-provided delivery instructions. Returned with an API key or dashboard credential. |
| `lifecycle_events` | Optional | Array of [DeliverySelectionLifecycleEventResource](../models/DeliverySelectionLifecycleEventResource.md#deliveryselectionlifecycleeventresource) | Ordered lifecycle events recorded for this selection. |
| `lifecycle_updated_at` | Optional | string | Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: `date-time`. |
| `limiting_deadline_reason` | Optional | string | Constraint that determined the selection expiry. Always present with an API key or dashboard credential. Values: [6 declared values](#deliveryselection-limiting_deadline_reason-values). |
| `order_id` | Optional | string | Order affected by the selection. Always present with an API key or dashboard credential. |
| `private_data_status` | Optional | string | Availability state of merchant-private selection evidence. Values: `"available"`, `"redacted"`. |
| `recipient` | Optional | [DeliveryRecipientResource](../models/DeliveryRecipientResource.md#deliveryrecipientresource) | Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The person receiving a delivery selection, with optional `name`, `email`, and `phone`. |
| `redacted_at` | Optional | string | Time merchant-private selection evidence was redacted. Format: `date-time`. |
| `status` | Required | string | Current selection lifecycle status. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. |

#### DeliverySelection limiting_deadline_reason values

- `"selection_guarantee_expiry"`
- `"calculation_expiry"`
- `"selection_maximum_lifetime"`
- `"inventory_reservation_expiry"`
- `"tax_validity_expiry"`
- `"checkout_session_expiry"`

### DeliverySelection.amount_money

Delivery charge committed by this selection. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### DeliverySelection.buyer_location

Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote.

Field definitions: [shared fields](DeliveryPreview.md#deliverypreviewbuyer_location).

### DeliverySelection.buyer_location variant 1: `type` = `"address"`

oneOf variant 1: The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`coordinate`)).
- Required: `address`.
- Optional: `coordinate`.
- Constraints for `type`: Values: `"address"`.

### DeliverySelection.buyer_location variant 2: `type` = `"coordinate"`

oneOf variant 2: The normalized buyer address or coordinate used for this quote..

- Condition: not (present(`address`)).
- Required: `coordinate`.
- Optional: `address`.
- Constraints for `type`: Values: `"coordinate"`.

### DeliverySelection.buyer_location.address

Field definitions: [DeliveryBuyerLocationInputAddress variant 2.address](../models/DeliveryBuyerLocationInputAddress.md#deliverybuyerlocationinputaddress-variant-2address).

### DeliverySelection.buyer_location.coordinate

Field definitions: [CreateCheckoutDeliveryQuoteRequest.buyer_location.coordinate](../models/CreateCheckoutDeliveryQuoteRequest.md#createcheckoutdeliveryquoterequestbuyer_locationcoordinate).

### DeliverySelection.destination_address

Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. An address as returned on delivery quotes, selections, previews, and pickup locations.

Field definitions: [shared fields](DeliveryAddressRequest.md#deliveryaddressrequest).

