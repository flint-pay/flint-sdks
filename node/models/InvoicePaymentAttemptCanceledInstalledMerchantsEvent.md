[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoicePaymentAttemptCanceledInstalledMerchantsEvent

The `invoice_payment_attempt.canceled` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"invoice_payment_attempt.canceled"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributes). |

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](InvoicePaymentAttempt.md#invoicepaymentattempt).

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.object.expected_amount_money

Field definitions: [BuyerInvoicePaymentAttempt.expected_amount_money](../models/BuyerInvoicePaymentAttempt.md#buyerinvoicepaymentattemptexpected_amount_money).

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Optional | string or null | When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. `canceled_at`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributescanceled_at). |
| `cancellation_requested_at` | Optional | string or null | When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. `cancellation_requested_at`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributescancellation_requested_at). |
| `checkout_session_id` | Optional | string or null | The hosted or headless checkout session the buyer pays through. Absent for automatic charges. `checkout_session_id`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributescheckout_session_id). |
| `expected_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. `expected_amount_money`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributesexpected_amount_money). |
| `expires_at` | Optional | string or null | When a checkout attempt expires, matching its checkout session. Absent for automatic charges. `expires_at`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributesexpires_at). |
| `invoice_id` | Optional | string or null | The invoice this attempt collects. `invoice_id`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributesinvoice_id). |
| `invoice_payment_attempt_id` | Optional | string or null | Flint invoice payment attempt ID. `invoice_payment_attempt_id`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributesinvoice_payment_attempt_id). |
| `invoice_schedule_entry_id` | Optional | string or null | The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. `invoice_schedule_entry_id`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributesinvoice_schedule_entry_id). |
| `last_payment_error` | Optional | [PaymentErrorSummary](../models/PaymentErrorSummary.md#paymenterrorsummary) or null | Why the payment failed. Present only when status is failed. |
| `payment_intent_id` | Optional | string or null | The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. `payment_intent_id`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributespayment_intent_id). |
| `rail` | Optional | string or null | How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Values: `"card"`, `"ach_debit"`. `rail`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributesrail). |
| `settled_at` | Optional | string or null | When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. `settled_at`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributessettled_at). |
| `started_at` | Optional | string or null | When the attempt was created. `started_at`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributescreated_at). |
| `status` | Optional | string or null | Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion. Values: `"open"`, `"succeeded"`, `"failed"`, `"canceled"`, `"expired"`, `"processing"`. `status`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted now. An open or processing attempt can be canceled; the payment processor can still refuse cancellation. Items values: `"cancel"`. `supported_actions`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | When this attempt last changed. Duplicate payment notifications preserve this timestamp. `updated_at`: [declared alternatives](../models/InvoicePaymentAttemptCanceledInstalledMerchantsEvent.md#invoicepaymentattemptcanceledinstalledmerchantseventdataprevious_attributesupdated_at). |

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.canceled_at

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.canceled_at variant 1

anyOf variant 1: When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it..

- Value shape: string. When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.canceled_at variant 2

anyOf variant 2.

- Value shape: null. When the attempt was canceled. An attempt canceled with its checkout session before payment started may not have it. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.cancellation_requested_at

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.cancellation_requested_at variant 1

anyOf variant 1: When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome..

- Value shape: string. When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.cancellation_requested_at variant 2

anyOf variant 2.

- Value shape: null. When cancellation of this attempt was last requested. It stays set when the payment processor refuses the cancellation or the payment settles first, so read status and canceled_at for the outcome. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.checkout_session_id

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.checkout_session_id variant 1

anyOf variant 1: The hosted or headless checkout session the buyer pays through. Absent for automatic charges..

- Value shape: string. The hosted or headless checkout session the buyer pays through. Absent for automatic charges. The hosted or headless checkout session the buyer pays through. Absent for automatic charges. Example: `"cs_01KEZF7C004JRWFW43H037MQRN"`. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.checkout_session_id variant 2

anyOf variant 2.

- Value shape: null. The hosted or headless checkout session the buyer pays through. Absent for automatic charges. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.expected_amount_money

The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.expected_amount_money variant 1

anyOf MoneyValue: The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount..

- Required: `amount`, `currency`.

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.expected_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount this attempt collects: the outstanding balance, or the targeted schedule entry's outstanding amount. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.expires_at

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.expires_at variant 1

anyOf variant 1: When a checkout attempt expires, matching its checkout session. Absent for automatic charges..

- Value shape: string. When a checkout attempt expires, matching its checkout session. Absent for automatic charges. When a checkout attempt expires, matching its checkout session. Absent for automatic charges. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When a checkout attempt expires, matching its checkout session. Absent for automatic charges. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.invoice_id

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.invoice_id variant 1

anyOf variant 1: The invoice this attempt collects..

- Value shape: string. The invoice this attempt collects. The invoice this attempt collects. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. The invoice this attempt collects. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.invoice_payment_attempt_id

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.invoice_payment_attempt_id variant 1

anyOf variant 1: Flint invoice payment attempt ID..

- Value shape: string. Flint invoice payment attempt ID. Flint invoice payment attempt ID. Example: `"invpa_01KEZF7C00PMWEDPAYYEKDTPBX"`. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.invoice_payment_attempt_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice payment attempt ID. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.invoice_schedule_entry_id

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.invoice_schedule_entry_id variant 1

anyOf variant 1: The schedule entry this attempt collects. Absent when the attempt collects the invoice balance..

- Value shape: string. The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. Example: `"invse_01KEZF7C006JCPQBD8VZ0RNT6R"`. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.invoice_schedule_entry_id variant 2

anyOf variant 2.

- Value shape: null. The schedule entry this attempt collects. Absent when the attempt collects the invoice balance. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.payment_intent_id

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.payment_intent_id variant 1

anyOf variant 1: The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet..

- Value shape: string. The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. The payment intent behind this attempt. Absent until payment starts, such as a hosted attempt the buyer hasn't paid yet. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.rail

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.rail variant 1

anyOf variant 1: How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit..

- Value shape: string. How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. Values: `"card"`, `"ach_debit"`.

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.rail variant 2

anyOf variant 2.

- Value shape: null. How the attempt collects: card, including Apple Pay, Google Pay, and Affirm, or ACH debit. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.settled_at

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.settled_at variant 1

anyOf variant 1: When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp..

- Value shape: string. When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.settled_at variant 2

anyOf variant 2.

- Value shape: null. When this attempt first settled successfully. Duplicate payment notifications preserve this timestamp. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.started_at

Declared alternatives: [InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.created_at](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributescreated_at).

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.status

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion..

- Value shape: string. Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion. Values: `"open"`, `"succeeded"`, `"failed"`, `"canceled"`, `"expired"`, `"processing"`.

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Current payment attempt status. succeeded means this attempt completed successfully, even if the invoice still has an outstanding balance. invoice_payment_attempt.succeeded reports that completion. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.supported_actions

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted now. An open or processing attempt can be canceled; the payment processor can still refuse cancellation..

- Value shape: Array of string. Lifecycle actions accepted now. An open or processing attempt can be canceled; the payment processor can still refuse cancellation. Items values: `"cancel"`.

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted now. An open or processing attempt can be canceled; the payment processor can still refuse cancellation. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.updated_at

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.updated_at variant 1

anyOf variant 1: When this attempt last changed. Duplicate payment notifications preserve this timestamp..

- Value shape: string. When this attempt last changed. Duplicate payment notifications preserve this timestamp. When this attempt last changed. Duplicate payment notifications preserve this timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.data.previous_attributes.updated_at variant 2

anyOf variant 2.

- Value shape: null. When this attempt last changed. Duplicate payment notifications preserve this timestamp. 

### InvoicePaymentAttemptCanceledInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

