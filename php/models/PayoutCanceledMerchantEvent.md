[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayoutCanceledMerchantEvent

The `payout.canceled` webhook payload for the `merchant` event source.

Fields shared by merchant webhook payloads.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. |
| `data` | Required | [PayoutCanceledMerchantEventData](../models/PayoutCanceledMerchantEventData.md#payoutcanceledmerchanteventdata) | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PayoutCanceledMerchantEvent.md#payoutcanceledmerchanteventdata-fields-1). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"merchant"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payout.canceled"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `request` | Required | [PayoutCanceledMerchantEventRequest](../models/PayoutCanceledMerchantEventRequest.md#payoutcanceledmerchanteventrequest) or null | The originating request. `null` when the event has no originating request ID. |
| `sandbox_id` | Optional | string | Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. |

### PayoutCanceledMerchantEvent.data fields 1

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. `actor`: [field definitions](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor). |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PayoutCanceledMerchantEvent.md#payoutcanceledmerchanteventdata-fields-1object). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PayoutCanceledMerchantEvent.md#payoutcanceledmerchanteventdata-fields-1previous_attributes). |

### PayoutCanceledMerchantEvent.data fields 1.actor

Field definitions: [ApiKeyCreatedEvent.data fields 1.actor](../models/ApiKeyCreatedEvent.md#apikeycreatedeventdata-fields-1actor).

### PayoutCanceledMerchantEvent.data fields 1.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](PayoutCanceledMerchantEventDataObject.md#payoutcanceledmerchanteventdataobject).

### PayoutCanceledMerchantEvent.data fields 1.object.metadata

Field definitions: [FulfillmentResponse.data.line_items[].modifiers[].metadata](../models/FulfillmentResponse.md#fulfillmentresponsedataline_itemsmodifiersmetadata).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributes).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.arrival_date

Declared alternatives: [ExpandedPayoutSummaryPreviousAttributes.arrival_date](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesarrival_date).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.balance_source_type

Declared alternatives: [ExpandedPayoutSummaryPreviousAttributes.balance_source_type](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesbalance_source_type).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.created_at

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.created_at](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributescreated_at).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.currency

Declared alternatives: [MerchantBillingBalanceUpdatedEvent.data fields 1.previous_attributes.currency](../models/MerchantBillingBalanceUpdatedEvent.md#merchantbillingbalanceupdatedeventdata-fields-1previous_attributescurrency).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.description

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.description](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesdescription).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.direction

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.direction](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesdirection).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.external_reference_id

Declared alternatives: [TaxCalculationCallbackActivatedEvent.data fields 1.previous_attributes.external_reference_id](../models/TaxCalculationCallbackActivatedEvent.md#taxcalculationcallbackactivatedeventdata-fields-1previous_attributesexternal_reference_id).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.failure_code

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.failure_code](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesfailure_code).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.failure_message

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.failure_message](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesfailure_message).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.fee_amount_status

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.fee_amount_status](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesfee_amount_status).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.idempotency_key

Declared alternatives: [CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.idempotency_key](../models/CreditNoteAllocationReversedMerchantEventDataPreviousAttributes.md#creditnoteallocationreversedmerchanteventdatapreviousattributesidempotency_key).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.initiated_by

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.initiated_by](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesinitiated_by).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.merchant_id

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.merchant_id](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesmerchant_id).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.metadata

Declared alternatives: [OrderLineItemModifierPreviousAttributes.metadata](../models/OrderLineItemModifierPreviousAttributes.md#orderlineitemmodifierpreviousattributesmetadata).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.method

Declared alternatives: [ExpandedPayoutSummaryPreviousAttributes.method](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesmethod).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.original_payout

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.original_payout](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesoriginal_payout).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.original_payout_id

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.original_payout_id](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesoriginal_payout_id).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.payout_destination

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.payout_destination](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_destination).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.payout_destination_id

Declared alternatives: [ExpandedPayoutSummaryPreviousAttributes.payout_destination_id](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributespayout_destination_id).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.payout_id

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.payout_id](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributespayout_id).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.reversal_status

Declared alternatives: [ExpandedPayoutSummaryPreviousAttributes.reversal_status](../models/ExpandedPayoutSummaryPreviousAttributes.md#expandedpayoutsummarypreviousattributesreversal_status).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.reversed_by_payout

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.reversed_by_payout](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesreversed_by_payout).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.reversed_by_payout_id

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.reversed_by_payout_id](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesreversed_by_payout_id).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.statement_descriptor

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.statement_descriptor](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesstatement_descriptor).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.status

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.status](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesstatus).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.supported_actions

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.supported_actions](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributessupported_actions).

### PayoutCanceledMerchantEvent.data fields 1.previous_attributes.updated_at

Declared alternatives: [PayoutCanceledMerchantEventDataPreviousAttributes.updated_at](../models/PayoutCanceledMerchantEventDataPreviousAttributes.md#payoutcanceledmerchanteventdatapreviousattributesupdated_at).

