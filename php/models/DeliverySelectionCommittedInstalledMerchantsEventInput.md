[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliverySelectionCommittedInstalledMerchantsEventInput

The `delivery_selection.committed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"delivery_selection.committed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### DeliverySelectionCommittedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. |

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Delivery charge committed by this selection. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `buyer_location` | Optional | [DeliveryBuyerLocationResourceInput](../models/DeliveryBuyerLocationResourceInput.md#deliverybuyerlocationresourceinput) | Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. The normalized buyer address or coordinate used for this quote. |
| `calculation_expires_at` | Optional | string | Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `checkout_session_id` | Optional | string | Checkout session that owns the selection. Always present with an API key or dashboard credential. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. |
| `choices` | Required | Array of [DeliverySelectionChoiceResourceInput](../models/DeliverySelectionChoiceResourceInput.md#deliveryselectionchoiceresourceinput) | One chosen option for each required choice group. |
| `created_at` | Optional | string | Time the selection was created. Always present with an API key or dashboard credential. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_quote_id` | Required | string | Quote from which this selection was made. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. |
| `delivery_quote_version` | Optional | integer | Quote version from which this selection was created. Always present with an API key or dashboard credential. Format: `uint64`. minimum: `0`. |
| `delivery_selection_id` | Required | string | Stable delivery selection ID. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. |
| `destination_address` | Optional | [AddressInput](../models/AddressInput.md#addressinput) | Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. |
| `eligibility_context_version` | Optional | integer | Checkout eligibility context version evaluated by this selection. Always present with an API key or dashboard credential. Format: `uint64`. minimum: `0`. |
| `expires_at` | Required | string | Deadline after which this provisional selection can no longer be committed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `input_requirements` | Required | Array of [DeliveryInputRequirementInput](../models/DeliveryInputRequirementInput.md#deliveryinputrequirementinput) | Inputs this selection still needs before payment: each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. |
| `instructions` | Optional | string | Buyer-provided delivery instructions. Returned with an API key or dashboard credential. |
| `lifecycle_events` | Optional | Array of [DeliverySelectionLifecycleEventResourceInput](../models/DeliverySelectionLifecycleEventResourceInput.md#deliveryselectionlifecycleeventresourceinput) | Ordered lifecycle events recorded for this selection. |
| `lifecycle_updated_at` | Optional | string | Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `limiting_deadline_reason` | Optional | string | Constraint that determined the selection expiry. Always present with an API key or dashboard credential. Values: [6 declared values](#deliveryselectioncommittedinstalledmerchantseventinputdataobject-limiting_deadline_reason-values). |
| `order_id` | Optional | string | Order affected by the selection. Always present with an API key or dashboard credential. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `private_data_status` | Optional | string | Availability state of merchant-private selection evidence. Values: `"available"`, `"redacted"`. |
| `recipient` | Optional | [DeliveryRecipientResourceInput](../models/DeliveryRecipientResourceInput.md#deliveryrecipientresourceinput) | Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The person receiving a delivery selection, with optional `name`, `email`, and `phone`. |
| `redacted_at` | Optional | string | Time merchant-private selection evidence was redacted. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Current selection lifecycle status. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. |

#### DeliverySelectionCommittedInstalledMerchantsEventInput.data.object limiting_deadline_reason values

- `"selection_guarantee_expiry"`
- `"calculation_expiry"`
- `"selection_maximum_lifetime"`
- `"inventory_reservation_expiry"`
- `"tax_validity_expiry"`
- `"checkout_session_expiry"`

### DeliverySelectionCommittedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

