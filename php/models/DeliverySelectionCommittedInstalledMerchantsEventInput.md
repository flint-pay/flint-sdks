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
| `actor` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributes). |

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](DeliverySelectionInput.md#deliveryselectioninput).

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Delivery charge committed by this selection. |
| `buyer_location` | Optional | [DeliveryBuyerLocationResourcePreviousAttributesInput](../models/DeliveryBuyerLocationResourcePreviousAttributesInput.md#deliverybuyerlocationresourcepreviousattributesinput) or null | Buyer location snapshot used to evaluate pickup proximity. Returned with an API key or dashboard credential. |
| `calculation_expires_at` | Optional | string or null | Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. `calculation_expires_at`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributescalculation_expires_at). |
| `checkout_session_id` | Optional | string or null | Checkout session that owns the selection. Always present with an API key or dashboard credential. `checkout_session_id`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributescheckout_session_id). |
| `choices` | Optional | Array of [DeliverySelectionChoiceResourcePreviousAttributesInput](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinput) or null | One chosen option for each required choice group. `choices`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributeschoices). |
| `created_at` | Optional | string or null | Time the selection was created. Always present with an API key or dashboard credential. `created_at`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `delivery_quote_id` | Optional | string or null | Quote from which this selection was made. `delivery_quote_id`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributesdelivery_quote_id). |
| `delivery_selection_id` | Optional | string or null | Stable delivery selection ID. `delivery_selection_id`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributesdelivery_selection_id). |
| `destination_address` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | Destination address snapshot used for delivery evaluation. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `expires_at` | Optional | string or null | Deadline after which this provisional selection can no longer be committed. `expires_at`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributesexpires_at). |
| `input_requirements` | Optional | Array of [DeliveryInputRequirementPreviousAttributesInput](../models/DeliveryInputRequirementPreviousAttributesInput.md#deliveryinputrequirementpreviousattributesinput) or null | Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. `input_requirements`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributesinput_requirements). |
| `instructions` | Optional | string or null | Buyer-provided delivery instructions. Returned with an API key or dashboard credential. `instructions`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributesinstructions). |
| `lifecycle_events` | Optional | Array of [DeliverySelectionLifecycleEventResourcePreviousAttributesInput](../models/DeliverySelectionLifecycleEventResourcePreviousAttributesInput.md#deliveryselectionlifecycleeventresourcepreviousattributesinput) or null | Ordered lifecycle events recorded for this selection. `lifecycle_events`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributeslifecycle_events). |
| `lifecycle_updated_at` | Optional | string or null | Time the selection lifecycle last changed. Always present with an API key or dashboard credential. `lifecycle_updated_at`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributeslifecycle_updated_at). |
| `limiting_deadline_reason` | Optional | string or null | The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created. Values: `"selection_guarantee_expiry"`, `"calculation_expiry"`, `"selection_maximum_lifetime"`. `limiting_deadline_reason`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributeslimiting_deadline_reason). |
| `order_id` | Optional | string or null | Order affected by the selection. Always present with an API key or dashboard credential. `order_id`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributesorder_id). |
| `private_data_status` | Optional | string or null | Availability state of merchant-private selection evidence. Values: `"available"`, `"redacted"`. `private_data_status`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributesprivate_data_status). |
| `recipient` | Optional | [DeliveryRecipientResourcePreviousAttributesInput](../models/DeliveryRecipientResourcePreviousAttributesInput.md#deliveryrecipientresourcepreviousattributesinput) or null | Recipient details captured with the selection. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. |
| `redacted_at` | Optional | string or null | Time merchant-private selection evidence was redacted. `redacted_at`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributesredacted_at). |
| `status` | Optional | string or null | Current selection lifecycle status. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`. `status`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions. Items values: `"release"`. `supported_actions`: [declared alternatives](../models/DeliverySelectionCommittedInstalledMerchantsEventInput.md#deliveryselectioncommittedinstalledmerchantseventinputdataprevious_attributessupported_actions). |

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.calculation_expires_at

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.calculation_expires_at variant 1

anyOf variant 1: Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential..

- Value shape: string. Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.calculation_expires_at variant 2

anyOf variant 2.

- Value shape: null. Deadline after which calculated pricing evidence is no longer valid. Always present with an API key or dashboard credential. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.checkout_session_id

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.checkout_session_id variant 1

anyOf variant 1: Checkout session that owns the selection. Always present with an API key or dashboard credential..

- Value shape: string. Checkout session that owns the selection. Always present with an API key or dashboard credential. Checkout session that owns the selection. Always present with an API key or dashboard credential. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. Checkout session that owns the selection. Always present with an API key or dashboard credential. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.choices

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.choices variant 1

anyOf variant 1: One chosen option for each required choice group..

- Value shape: Array of [DeliverySelectionChoiceResourcePreviousAttributesInput](../models/DeliverySelectionChoiceResourcePreviousAttributesInput.md#deliveryselectionchoiceresourcepreviousattributesinput). One chosen option for each required choice group. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.choices variant 2

anyOf variant 2.

- Value shape: null. One chosen option for each required choice group. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.created_at

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: Time the selection was created. Always present with an API key or dashboard credential..

- Value shape: string. Time the selection was created. Always present with an API key or dashboard credential. Time the selection was created. Always present with an API key or dashboard credential. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. Time the selection was created. Always present with an API key or dashboard credential. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.delivery_quote_id

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.delivery_quote_id variant 1

anyOf variant 1: Quote from which this selection was made..

- Value shape: string. Quote from which this selection was made. Quote from which this selection was made. Example: `"dqt_01KEZF7C009EB1AVCDJBN4BBVV"`. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.delivery_quote_id variant 2

anyOf variant 2.

- Value shape: null. Quote from which this selection was made. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.delivery_selection_id

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.delivery_selection_id variant 1

anyOf variant 1: Stable delivery selection ID..

- Value shape: string. Stable delivery selection ID. Stable delivery selection ID. Example: `"dsel_01KEZF7C00QC35XBXVXQSCEB2D"`. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.delivery_selection_id variant 2

anyOf variant 2.

- Value shape: null. Stable delivery selection ID. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.expires_at

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.expires_at variant 1

anyOf variant 1: Deadline after which this provisional selection can no longer be committed..

- Value shape: string. Deadline after which this provisional selection can no longer be committed. Deadline after which this provisional selection can no longer be committed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. Deadline after which this provisional selection can no longer be committed. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.input_requirements

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.input_requirements variant 1

anyOf variant 1: Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected..

- Value shape: Array of [DeliveryInputRequirementPreviousAttributesInput](../models/DeliveryInputRequirementPreviousAttributesInput.md#deliveryinputrequirementpreviousattributesinput). Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.input_requirements variant 2

anyOf variant 2.

- Value shape: null. Inputs this selection still needs before payment: each destination_address member a chosen shipment or local delivery needs that the stored address lacks (line1, city, and country, plus state and postal_code in the US), and each recipient field a chosen option requires that the selection does not include. Each entry repeats the quote's requirement for that option, with the same delivery_input_requirement_id. Payment fails with ACTION_NOT_ALLOWED, reason configuration_required, and the delivery_selection reference until a new delivery selection includes them. Empty when nothing is missing, and always empty unless status is selected. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.instructions

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.instructions variant 1

anyOf variant 1: Buyer-provided delivery instructions. Returned with an API key or dashboard credential..

- Value shape: string. Buyer-provided delivery instructions. Returned with an API key or dashboard credential. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.instructions variant 2

anyOf variant 2.

- Value shape: null. Buyer-provided delivery instructions. Returned with an API key or dashboard credential. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.lifecycle_events

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.lifecycle_events variant 1

anyOf variant 1: Ordered lifecycle events recorded for this selection..

- Value shape: Array of [DeliverySelectionLifecycleEventResourcePreviousAttributesInput](../models/DeliverySelectionLifecycleEventResourcePreviousAttributesInput.md#deliveryselectionlifecycleeventresourcepreviousattributesinput). Ordered lifecycle events recorded for this selection. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.lifecycle_events variant 2

anyOf variant 2.

- Value shape: null. Ordered lifecycle events recorded for this selection. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.lifecycle_updated_at

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.lifecycle_updated_at variant 1

anyOf variant 1: Time the selection lifecycle last changed. Always present with an API key or dashboard credential..

- Value shape: string. Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Time the selection lifecycle last changed. Always present with an API key or dashboard credential. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.lifecycle_updated_at variant 2

anyOf variant 2.

- Value shape: null. Time the selection lifecycle last changed. Always present with an API key or dashboard credential. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.limiting_deadline_reason

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.limiting_deadline_reason variant 1

anyOf variant 1: The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential.
- `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too.
- `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first.
- `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created..

- Value shape: string. The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created. Values: `"selection_guarantee_expiry"`, `"calculation_expiry"`, `"selection_maximum_lifetime"`.

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.limiting_deadline_reason variant 2

anyOf variant 2.

- Value shape: null. The deadline that set expires_at: the earliest of the chosen options' guarantee, the calculation expiry, and the maximum selection lifetime. A tie between the calculation and the guarantee reports calculation_expiry. Always present with an API key or dashboard credential. - `selection_guarantee_expiry`: The earliest guarantee among the chosen options and delivery windows comes first. When the selection holds stock, the hold ends at this deadline too. - `calculation_expiry`: The calculation the selection was priced against expires first. It ends no later than the checkout session's expires_at, and earlier when an applied promotion ends first. - `selection_maximum_lifetime`: The selection reaches the longest a provisional selection can last, 24 hours after it was created. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.order_id

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 1

anyOf variant 1: Order affected by the selection. Always present with an API key or dashboard credential..

- Value shape: string. Order affected by the selection. Always present with an API key or dashboard credential. Order affected by the selection. Always present with an API key or dashboard credential. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. Order affected by the selection. Always present with an API key or dashboard credential. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.private_data_status

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.private_data_status variant 1

anyOf variant 1: Availability state of merchant-private selection evidence..

- Value shape: string. Availability state of merchant-private selection evidence. Values: `"available"`, `"redacted"`.

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.private_data_status variant 2

anyOf variant 2.

- Value shape: null. Availability state of merchant-private selection evidence. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.redacted_at

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.redacted_at variant 1

anyOf variant 1: Time merchant-private selection evidence was redacted..

- Value shape: string. Time merchant-private selection evidence was redacted. Time merchant-private selection evidence was redacted. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.redacted_at variant 2

anyOf variant 2.

- Value shape: null. Time merchant-private selection evidence was redacted. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.status

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Current selection lifecycle status.
- `selected`: These choices are provisional and can be replaced before payment.
- `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes.
- `committed`: Payment fixed these choices on the order.
- `superseded`: A newer selection replaced these choices.
- `expired`: The selection is no longer usable because its deadline passed.
- `released`: These choices were withdrawn. Create a new selection before paying for delivery..

- Value shape: string. Current selection lifecycle status. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. Values: `"selected"`, `"locked_for_payment"`, `"committed"`, `"superseded"`, `"expired"`, `"released"`.

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Current selection lifecycle status. - `selected`: These choices are provisional and can be replaced before payment. - `locked_for_payment`: A payment attempt owns these choices. They are frozen until payment finishes. - `committed`: Payment fixed these choices on the order. - `superseded`: A newer selection replaced these choices. - `expired`: The selection is no longer usable because its deadline passed. - `released`: These choices were withdrawn. Create a new selection before paying for delivery. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions..

- Value shape: Array of string. Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions. Items values: `"release"`.

### DeliverySelectionCommittedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Contains release while status is selected and the selection belongs to a checkout session: POST /v1/delivery-selections/{delivery_selection_id}/release clears it from the checkout. Empty in every other status. Independent of caller permissions. 

### DeliverySelectionCommittedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

