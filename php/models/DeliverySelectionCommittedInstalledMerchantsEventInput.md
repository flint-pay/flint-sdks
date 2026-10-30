[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionCommittedInstalledMerchantsEventInput

The `delivery_selection.committed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | Format: `date`. |
| `created_at` | Required | string | Format: `date-time`. |
| `data` | Required | object | `data`: [field definitions](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdata). |
| `event_type` | Required | string | Values: `"delivery_selection.committed"`. |
| `partner_app_id` | Required | string |  |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The source of a partner webhook event, selected by type. `source`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string |  |

### DeliverySelectionCommittedInstalledMerchantsEventInput.data

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object and [DeliverySelectionInput](../models/DeliverySelectionInput.md#deliveryselectioninput) | The delivery choice selected for a checkout or order. `object`: [field definitions](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataobject). |

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.object

The delivery choice selected for a checkout or order.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Delivery charge committed by this selection. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_location` | Optional | [DeliveryBuyerLocationResourceInput](../models/DeliveryBuyerLocationResourceInput.md#deliverybuyerlocationresourceinput) | Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote. |
| `calculation_expires_at` | Optional | string | Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: `date-time`. |
| `checkout_session_id` | Optional | string | Checkout session that owns the selection. Always present with an API key or dashboard credential. |
| `choices` | Required | Array of [DeliverySelectionChoiceResourceInput](../models/DeliverySelectionChoiceResourceInput.md#deliveryselectionchoiceresourceinput) | One chosen option for each required choice group. |
| `created_at` | Optional | string | Time the selection was created. Always present with an API key or dashboard credential. Format: `date-time`. |
| `delivery_quote_id` | Required | string | Quote from which this selection was made. |
| `delivery_quote_version` | Optional | integer | Quote version from which this selection was created. Always present with an API key or dashboard credential. Format: `uint64`. minimum: `0`. |
| `delivery_selection_id` | Required | string | Stable delivery selection ID. |
| `destination_address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `eligibility_context_version` | Optional | integer | Checkout eligibility context version evaluated by this selection. Always present with an API key or dashboard credential. Format: `uint64`. minimum: `0`. |
| `expires_at` | Required | string | Deadline after which this provisional selection can no longer be committed. Format: `date-time`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirementInput](../models/DeliveryInputRequirementInput.md#deliveryinputrequirementinput) | Inputs this selection still needs before payment: each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. |
| `instructions` | Optional | string | Buyer-provided delivery instructions. Returned with an API key or dashboard credential. |
| `lifecycle_events` | Optional | Array of [DeliverySelectionLifecycleEventResourceInput](../models/DeliverySelectionLifecycleEventResourceInput.md#deliveryselectionlifecycleeventresourceinput) | Ordered lifecycle events recorded for this selection. |
| `lifecycle_updated_at` | Optional | string | Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: `date-time`. |
| `limiting_deadline_reason` | Optional | string | Constraint that determined the selection expiry. Always present with an API key or dashboard credential. Values: [6 declared values](#deliveryselectioncommittedinstalledmerchantseventinputdataobject-limiting_deadline_reason-values). |
| `order_id` | Optional | string | Order affected by the selection. Always present with an API key or dashboard credential. |
| `private_data_status` | Optional | string | Availability state of merchant-private selection evidence. Values: `"available"`, `"redacted"`. |
| `recipient` | Optional | [DeliveryRecipientResourceInput](../models/DeliveryRecipientResourceInput.md#deliveryrecipientresourceinput) | Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The person receiving a delivery selection, with optional `name`, `email`, and `phone`. |
| `redacted_at` | Optional | string | Time merchant-private selection evidence was redacted. Format: `date-time`. |
| `status` | Required | string | Current selection lifecycle status. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. |

#### DeliverySelectionCommittedInstalledMerchantsEventInput.data.object limiting_deadline_reason values

- `"selection_guarantee_expiry"`
- `"calculation_expiry"`
- `"selection_maximum_lifetime"`
- `"inventory_reservation_expiry"`
- `"tax_validity_expiry"`
- `"checkout_session_expiry"`

### DeliverySelectionCommittedInstalledMerchantsEventInput.source

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.source](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputsource).

