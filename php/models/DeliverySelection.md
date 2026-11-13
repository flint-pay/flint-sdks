[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelection

The delivery choice selected for a checkout or order. Poll GET /v1/delivery-selections/{delivery_selection_id} or list delivery selections to read its current status.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Delivery charge committed by this selection. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_location` | Optional | object and Alternative shapes (see declared variants) | Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote. `buyer_location`: [declared alternatives](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatabuyer_location). |
| `calculation_expires_at` | Optional | string | Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: `date-time`. |
| `checkout_session_id` | Optional | string | Checkout session that owns the selection. Always present with an API key or dashboard credential. |
| `choices` | Required | Array of [DeliverySelectionChoiceResource](../models/DeliverySelectionChoiceResource.md#deliveryselectionchoiceresource) | One chosen option for each required choice group. `choices[]`: [field definitions](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatachoices). |
| `created_at` | Optional | string | Time the selection was created. Always present with an API key or dashboard credential. Format: `date-time`. |
| `delivery_quote_id` | Required | string | Quote from which this selection was made. |
| `delivery_selection_id` | Required | string | Stable delivery selection ID. |
| `destination_address` | Optional | [Address](../models/Address.md#address) | Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. `destination_address`: [field definitions](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatadestination_address). |
| `expires_at` | Required | string | Deadline after which this provisional selection can no longer be committed. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirement](../models/DeliveryInputRequirement.md#deliveryinputrequirement) | Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. `input_requirements[]`: [field definitions](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements). |
| `instructions` | Optional | string | Buyer-provided delivery instructions. Returned with an API key or dashboard credential. |
| `lifecycle_events` | Optional | Array of [DeliverySelectionLifecycleEventResource](../models/DeliverySelectionLifecycleEventResource.md#deliveryselectionlifecycleeventresource) | Ordered lifecycle events recorded for this selection. `lifecycle_events[]`: [field definitions](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatalifecycle_events). |
| `lifecycle_updated_at` | Optional | string | Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: `date-time`. |
| `limiting_deadline_reason` | Optional | string | The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created. Values: `"selection_guarantee_expiry"`, `"calculation_expiry"`, `"selection_maximum_lifetime"`. |
| `order_id` | Optional | string | Order affected by the selection. Always present with an API key or dashboard credential. |
| `private_data_status` | Optional | string | Availability state of merchant-private selection evidence. Values: `"available"`, `"redacted"`. |
| `recipient` | Optional | [DeliveryRecipientResource](../models/DeliveryRecipientResource.md#deliveryrecipientresource) | Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The person receiving a delivery selection, with optional `name`, `email`, and `phone`. |
| `redacted_at` | Optional | string | Time merchant-private selection evidence was redacted. Format: `date-time`. |
| `status` | Required | string | Current selection lifecycle status. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. |
| `supported_actions` | Required | Array of string | Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions. Items values: `"release"`. |

### DeliverySelection.buyer_location

Declared alternatives: [DeliverySelectionResponse.data.buyer_location](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatabuyer_location).

### DeliverySelection.choices[]

Field definitions: [DeliverySelectionResponse.data.choices[]](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatachoices).

### DeliverySelection.destination_address

Field definitions: [DeliverySelectionResponse.data.destination_address](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatadestination_address).

### DeliverySelection.input_requirements[]

Field definitions: [CheckoutSessionResponse.data.delivery.choice_groups[].candidate_outcomes{}.input_requirements[]](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadeliverychoice_groupscandidate_outcomesinput_requirements).

### DeliverySelection.lifecycle_events[]

Field definitions: [DeliverySelectionResponse.data.lifecycle_events[]](../models/DeliverySelectionResponse.md#deliveryselectionresponsedatalifecycle_events).

