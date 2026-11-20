[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionUpdatedInstalledMerchantsEventInput

The `return_resolution.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_resolution.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActorInput](../models/ReturnActorInput.md#returnactorinput) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnResolutionCreatedInstalledMerchantsEventInput.md#returnresolutioncreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object and [ReturnResolutionPreviousAttributesInput](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinput) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnResolutionUpdatedInstalledMerchantsEventInput.md#returnresolutionupdatedinstalledmerchantseventinputdataprevious_attributes). |

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.object

Field definitions: [ReturnResolutionCreatedInstalledMerchantsEventInput.data.object](../models/ReturnResolutionCreatedInstalledMerchantsEventInput.md#returnresolutioncreatedinstalledmerchantseventinputdataobject).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinput).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.action_reason

Declared alternatives: [ReturnResolutionPreviousAttributesInput.action_reason](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputaction_reason).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.action_required_by

Declared alternatives: [ReturnResolutionPreviousAttributesInput.action_required_by](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputaction_required_by).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.adjustments

Declared alternatives: [ReturnResolutionPreviousAttributesInput.adjustments](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputadjustments).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason

Declared alternatives: [ReturnResolutionPreviousAttributesInput.cancellation_reason](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputcancellation_reason).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason_message

Declared alternatives: [ReturnCanceledInstalledMerchantsEventInput.data.previous_attributes.cancellation_reason_message](../models/ReturnCanceledInstalledMerchantsEventInput.md#returncanceledinstalledmerchantseventinputdataprevious_attributescancellation_reason_message).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.confirmed_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.corrects_return_resolution_id

Declared alternatives: [ReturnResolutionPreviousAttributesInput.corrects_return_resolution_id](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputcorrects_return_resolution_id).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.execution_blockers

Declared alternatives: [ReturnResolutionPreviousAttributesInput.execution_blockers](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputexecution_blockers).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEventInput.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEventInput.md#bundlearchivedinstalledmerchantseventinputdataprevious_attributesexternal_reference_id).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_code

Declared alternatives: [ReturnResolutionPreviousAttributesInput.failure_code](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputfailure_code).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.failure_message

Declared alternatives: [ReturnResolutionPreviousAttributesInput.failure_message](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputfailure_message).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.fulfilled_at

Declared alternatives: [ReturnResolutionPreviousAttributesInput.fulfilled_at](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputfulfilled_at).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_refund_destination

Declared alternatives: [ReturnResolutionPreviousAttributesInput.gift_card_refund_destination](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputgift_card_refund_destination).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.line_items

Declared alternatives: [ReturnResolutionPreviousAttributesInput.line_items](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputline_items).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_intent_ids

Declared alternatives: [ReturnResolutionPreviousAttributesInput.payment_intent_ids](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputpayment_intent_ids).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.payment_intents

Declared alternatives: [ReturnResolutionPreviousAttributesInput.payment_intents](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputpayment_intents).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.pricing_basis

Declared alternatives: [ReturnResolutionPreviousAttributesInput.pricing_basis](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputpricing_basis).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.refund_ids

Declared alternatives: [ReturnResolutionPreviousAttributesInput.refund_ids](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputrefund_ids).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.refunds

Declared alternatives: [ReturnResolutionPreviousAttributesInput.refunds](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputrefunds).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replacement_line_items

Declared alternatives: [ReturnResolutionPreviousAttributesInput.replacement_line_items](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputreplacement_line_items).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.replacement_order_id

Declared alternatives: [ReturnResolutionPreviousAttributesInput.replacement_order_id](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputreplacement_order_id).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.resolution_type

Declared alternatives: [ReturnResolutionPreviousAttributesInput.resolution_type](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputresolution_type).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_id

Declared alternatives: [ReturnResolutionPreviousAttributesInput.return_id](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputreturn_id).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_policy_id

Declared alternatives: [ReturnResolutionAdjustmentPreviousAttributesInput.return_policy_id](../models/ReturnResolutionAdjustmentPreviousAttributesInput.md#returnresolutionadjustmentpreviousattributesinputreturn_policy_id).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_policy_revision_id

Declared alternatives: [ReturnResolutionPreviousAttributesInput.return_policy_revision_id](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputreturn_policy_revision_id).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.return_resolution_id

Declared alternatives: [ReturnResolutionPreviousAttributesInput.return_resolution_id](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputreturn_resolution_id).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.status

Declared alternatives: [ReturnResolutionPreviousAttributesInput.status](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputstatus).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

Declared alternatives: [ReturnResolutionPreviousAttributesInput.supported_actions](../models/ReturnResolutionPreviousAttributesInput.md#returnresolutionpreviousattributesinputsupported_actions).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [ReturnDispositionPreviousAttributesInput.version](../models/ReturnDispositionPreviousAttributesInput.md#returndispositionpreviousattributesinputversion).

### ReturnResolutionUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

