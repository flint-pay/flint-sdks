[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionUpdatedInstalledMerchantsEvent

The `return_resolution.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/ReturnResolutionUpdatedInstalledMerchantsEvent.md#returnresolutionupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"return_resolution.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### ReturnResolutionUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/ReturnResolutionCreatedInstalledMerchantsEvent.md#returnresolutioncreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object and [ReturnResolutionPreviousAttributes](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributes) | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/ReturnResolutionUpdatedInstalledMerchantsEvent.md#returnresolutionupdatedinstalledmerchantseventdataprevious_attributes). |

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.object

Field definitions: [ReturnResolutionCreatedInstalledMerchantsEvent.data.object](../models/ReturnResolutionCreatedInstalledMerchantsEvent.md#returnresolutioncreatedinstalledmerchantseventdataobject).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Field definitions: [shared fields](ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributes).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.action_reason

Declared alternatives: [ReturnResolutionPreviousAttributes.action_reason](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesaction_reason).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.action_required_by

Declared alternatives: [ReturnResolutionPreviousAttributes.action_required_by](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesaction_required_by).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.adjustments

Declared alternatives: [ReturnResolutionPreviousAttributes.adjustments](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesadjustments).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.buyer_payment_amount_money

Declared alternatives: [ReturnResolutionPreviousAttributes.buyer_payment_amount_money](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesbuyer_payment_amount_money).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.buyer_refund_amount_money

Declared alternatives: [ReturnResolutionPreviousAttributes.buyer_refund_amount_money](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesbuyer_refund_amount_money).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.canceled_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.cancellation_reason

Declared alternatives: [ReturnResolutionPreviousAttributes.cancellation_reason](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescancellation_reason).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.cancellation_reason_message

Declared alternatives: [ReturnCanceledInstalledMerchantsEvent.data.previous_attributes.cancellation_reason_message](../models/ReturnCanceledInstalledMerchantsEvent.md#returncanceledinstalledmerchantseventdataprevious_attributescancellation_reason_message).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.confirmed_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.corrects_return_resolution_id

Declared alternatives: [ReturnResolutionPreviousAttributes.corrects_return_resolution_id](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescorrects_return_resolution_id).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.credit_adjustment_money

Declared alternatives: [ReturnResolutionPreviousAttributes.credit_adjustment_money](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributescredit_adjustment_money).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.deduction_money

Declared alternatives: [ReturnResolutionPreviousAttributes.deduction_money](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesdeduction_money).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.execution_blockers

Declared alternatives: [ReturnResolutionPreviousAttributes.execution_blockers](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesexecution_blockers).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.failure_code

Declared alternatives: [ReturnResolutionPreviousAttributes.failure_code](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfailure_code).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.failure_message

Declared alternatives: [ReturnResolutionPreviousAttributes.failure_message](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfailure_message).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.fulfilled_at

Declared alternatives: [ReturnResolutionPreviousAttributes.fulfilled_at](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesfulfilled_at).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_refund_destination

Declared alternatives: [ReturnResolutionPreviousAttributes.gift_card_refund_destination](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesgift_card_refund_destination).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.line_items

Declared alternatives: [ReturnResolutionPreviousAttributes.line_items](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesline_items).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.payment_intent_ids

Declared alternatives: [ReturnResolutionPreviousAttributes.payment_intent_ids](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespayment_intent_ids).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.payment_intents

Declared alternatives: [ReturnResolutionPreviousAttributes.payment_intents](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespayment_intents).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.pricing_basis

Declared alternatives: [ReturnResolutionPreviousAttributes.pricing_basis](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributespricing_basis).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.refund_ids

Declared alternatives: [ReturnResolutionPreviousAttributes.refund_ids](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesrefund_ids).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.refunds

Declared alternatives: [ReturnResolutionPreviousAttributes.refunds](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesrefunds).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.replacement_line_items

Declared alternatives: [ReturnResolutionPreviousAttributes.replacement_line_items](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_line_items).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.replacement_order_id

Declared alternatives: [ReturnResolutionPreviousAttributes.replacement_order_id](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_order_id).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.replacement_total_money

Declared alternatives: [ReturnResolutionPreviousAttributes.replacement_total_money](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreplacement_total_money).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.resolution_type

Declared alternatives: [ReturnResolutionPreviousAttributes.resolution_type](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesresolution_type).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.return_id

Declared alternatives: [ReturnResolutionPreviousAttributes.return_id](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturn_id).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.return_policy_id

Declared alternatives: [ReturnResolutionAdjustmentPreviousAttributes.return_policy_id](../models/ReturnResolutionAdjustmentPreviousAttributes.md#returnresolutionadjustmentpreviousattributesreturn_policy_id).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.return_policy_revision_id

Declared alternatives: [ReturnResolutionPreviousAttributes.return_policy_revision_id](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturn_policy_revision_id).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.return_resolution_id

Declared alternatives: [ReturnResolutionPreviousAttributes.return_resolution_id](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturn_resolution_id).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.returned_total_money

Declared alternatives: [ReturnResolutionPreviousAttributes.returned_total_money](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesreturned_total_money).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.status

Declared alternatives: [ReturnResolutionPreviousAttributes.status](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributesstatus).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions

Declared alternatives: [ReturnResolutionPreviousAttributes.supported_actions](../models/ReturnResolutionPreviousAttributes.md#returnresolutionpreviousattributessupported_actions).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### ReturnResolutionUpdatedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [ReturnDispositionPreviousAttributes.version](../models/ReturnDispositionPreviousAttributes.md#returndispositionpreviousattributesversion).

### ReturnResolutionUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

