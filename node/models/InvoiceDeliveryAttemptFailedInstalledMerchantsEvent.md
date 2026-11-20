[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDeliveryAttemptFailedInstalledMerchantsEvent

The `invoice_delivery_attempt.failed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"invoice_delivery_attempt.failed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `actor` | Optional | [ReturnActor](../models/ReturnActor.md#returnactor) | Who caused this event, captured when the change commits. Omitted when the event predates actor attribution or attribution is unavailable. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID. |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributes). |

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](InvoiceDeliveryAttempt.md#invoicedeliveryattempt).

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string or null | Addresses copied on this email. Absent when none were copied. `cc_emails`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributescc_emails). |
| `channel` | Optional | string or null | How Flint delivered the invoice. Values: `"email"`. `channel`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributeschannel). |
| `created_at` | Optional | string or null | When the attempt was created. `created_at`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributescreated_at). |
| `delivery_type` | Optional | string or null | Whether this attempt is the invoice email sent at issue or a reminder. Values: `"send"`, `"reminder"`. `delivery_type`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributesdelivery_type). |
| `failure_reason` | Optional | string or null | Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Values: `"rejected"`, `"delivery_unknown"`, `"canceled"`. `failure_reason`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributesfailure_reason). |
| `invoice_delivery_attempt_id` | Optional | string or null | Flint invoice delivery attempt ID. `invoice_delivery_attempt_id`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributesinvoice_delivery_attempt_id). |
| `invoice_id` | Optional | string or null | ID of the invoice this delivery attempt belongs to. `invoice_id`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributesinvoice_id). |
| `sent_at` | Optional | string or null | When the email service accepted the message. Absent until it does. `sent_at`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributessent_at). |
| `status` | Optional | string or null | The outcome of this attempt. sent means the email service accepted the message. Values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`. `status`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributesstatus). |
| `suppression_reason` | Optional | string or null | Present only when status is suppressed. Values: `"merchant_managed_email"`, `"recipient_unsubscribed"`, `"sandbox_daily_limit_reached"`. `suppression_reason`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributessuppression_reason). |
| `to_email` | Optional | string or null | Address the invoice was sent to. `null` when the customer was deleted. `to_email`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.md#invoicedeliveryattemptfailedinstalledmerchantseventdataprevious_attributesto_email). |

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.cc_emails

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.cc_emails variant 1

anyOf variant 1: Addresses copied on this email. Absent when none were copied..

- Value shape: Array of string. Addresses copied on this email. Absent when none were copied. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.cc_emails variant 2

anyOf variant 2.

- Value shape: null. Addresses copied on this email. Absent when none were copied. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.channel

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.channel variant 1

anyOf variant 1: How Flint delivered the invoice..

- Value shape: string. How Flint delivered the invoice. Values: `"email"`.

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.channel variant 2

anyOf variant 2.

- Value shape: null. How Flint delivered the invoice. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.created_at

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.created_at variant 1

anyOf variant 1: When the attempt was created..

- Value shape: string. When the attempt was created. When the attempt was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the attempt was created. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.delivery_type

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.delivery_type variant 1

anyOf variant 1: Whether this attempt is the invoice email sent at issue or a reminder..

- Value shape: string. Whether this attempt is the invoice email sent at issue or a reminder. Values: `"send"`, `"reminder"`.

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.delivery_type variant 2

anyOf variant 2.

- Value shape: null. Whether this attempt is the invoice email sent at issue or a reminder. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.failure_reason

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.failure_reason variant 1

anyOf variant 1: Present only when status is failed. Legacy failed attempts without a stored reason return rejected..

- Value shape: string. Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Values: `"rejected"`, `"delivery_unknown"`, `"canceled"`.

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. Present only when status is failed. Legacy failed attempts without a stored reason return rejected. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.invoice_delivery_attempt_id

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.invoice_delivery_attempt_id variant 1

anyOf variant 1: Flint invoice delivery attempt ID..

- Value shape: string. Flint invoice delivery attempt ID. Flint invoice delivery attempt ID. Example: `"indel_01KEZF7C001BBS41T0ZVY8VMEQ"`. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.invoice_delivery_attempt_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice delivery attempt ID. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.invoice_id

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.invoice_id variant 1

anyOf variant 1: ID of the invoice this delivery attempt belongs to..

- Value shape: string. ID of the invoice this delivery attempt belongs to. ID of the invoice this delivery attempt belongs to. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice this delivery attempt belongs to. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.sent_at

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.sent_at variant 1

anyOf variant 1: When the email service accepted the message. Absent until it does..

- Value shape: string. When the email service accepted the message. Absent until it does. When the email service accepted the message. Absent until it does. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.sent_at variant 2

anyOf variant 2.

- Value shape: null. When the email service accepted the message. Absent until it does. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.status

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: The outcome of this attempt. sent means the email service accepted the message..

- Value shape: string. The outcome of this attempt. sent means the email service accepted the message. Values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`.

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. The outcome of this attempt. sent means the email service accepted the message. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.suppression_reason

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.suppression_reason variant 1

anyOf variant 1: Present only when status is suppressed..

- Value shape: string. Present only when status is suppressed. Values: `"merchant_managed_email"`, `"recipient_unsubscribed"`, `"sandbox_daily_limit_reached"`.

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.suppression_reason variant 2

anyOf variant 2.

- Value shape: null. Present only when status is suppressed. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.to_email

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.to_email variant 1

anyOf variant 1: Address the invoice was sent to. `null` when the customer was deleted..

- Value shape: string. Address the invoice was sent to. `null` when the customer was deleted. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.data.previous_attributes.to_email variant 2

anyOf variant 2.

- Value shape: null. Address the invoice was sent to. `null` when the customer was deleted. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

