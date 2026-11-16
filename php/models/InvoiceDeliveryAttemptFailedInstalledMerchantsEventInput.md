[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput

The `invoice_delivery_attempt.failed` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"invoice_delivery_attempt.failed"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataprevious_attributes). |

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.object

The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields.

Field definitions: [shared fields](InvoiceDeliveryAttemptInput.md#invoicedeliveryattemptinput).

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string or null | Addresses copied on this email. Absent when none were copied. `cc_emails`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataprevious_attributescc_emails). |
| `channel` | Optional | string or null | How Flint delivered the invoice. Values: `"email"`. `channel`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataprevious_attributeschannel). |
| `created_at` | Optional | string or null | When the attempt was created. `created_at`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataprevious_attributescreated_at). |
| `delivery_type` | Optional | string or null | Whether this attempt is the invoice email sent at issue or a reminder. Values: `"send"`, `"reminder"`. `delivery_type`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataprevious_attributesdelivery_type). |
| `failure_reason` | Optional | string or null | Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Values: `"rejected"`, `"delivery_unknown"`, `"canceled"`. `failure_reason`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataprevious_attributesfailure_reason). |
| `invoice_delivery_attempt_id` | Optional | string or null | Flint invoice delivery attempt ID. `invoice_delivery_attempt_id`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataprevious_attributesinvoice_delivery_attempt_id). |
| `invoice_id` | Optional | string or null | ID of the invoice this delivery attempt belongs to. `invoice_id`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataprevious_attributesinvoice_id). |
| `sent_at` | Optional | string or null | When the email service accepted the message. Absent until it does. `sent_at`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataprevious_attributessent_at). |
| `status` | Optional | string or null | The outcome of this attempt. sent means the email service accepted the message. Values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`. `status`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `suppression_reason` | Optional | string or null | Present only when status is suppressed. Values: `"merchant_managed_email"`, `"recipient_unsubscribed"`, `"sandbox_daily_limit_reached"`. `suppression_reason`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataprevious_attributessuppression_reason). |
| `to_email` | Optional | string or null | Address the invoice was sent to. `null` when the customer was deleted. `to_email`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.md#invoicedeliveryattemptfailedinstalledmerchantseventinputdataprevious_attributesto_email). |

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.cc_emails

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.cc_emails variant 1

anyOf variant 1: Addresses copied on this email. Absent when none were copied..

- Value shape: Array of string. Addresses copied on this email. Absent when none were copied. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.cc_emails variant 2

anyOf variant 2.

- Value shape: null. Addresses copied on this email. Absent when none were copied. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.channel

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.channel variant 1

anyOf variant 1: How Flint delivered the invoice..

- Value shape: string. How Flint delivered the invoice. Values: `"email"`.

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.channel variant 2

anyOf variant 2.

- Value shape: null. How Flint delivered the invoice. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.created_at

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 1

anyOf variant 1: When the attempt was created..

- Value shape: string. When the attempt was created. When the attempt was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the attempt was created. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.delivery_type

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.delivery_type variant 1

anyOf variant 1: Whether this attempt is the invoice email sent at issue or a reminder..

- Value shape: string. Whether this attempt is the invoice email sent at issue or a reminder. Values: `"send"`, `"reminder"`.

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.delivery_type variant 2

anyOf variant 2.

- Value shape: null. Whether this attempt is the invoice email sent at issue or a reminder. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.failure_reason

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.failure_reason variant 1

anyOf variant 1: Present only when status is failed. Legacy failed attempts without a stored reason return rejected..

- Value shape: string. Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Values: `"rejected"`, `"delivery_unknown"`, `"canceled"`.

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. Present only when status is failed. Legacy failed attempts without a stored reason return rejected. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.invoice_delivery_attempt_id

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.invoice_delivery_attempt_id variant 1

anyOf variant 1: Flint invoice delivery attempt ID..

- Value shape: string. Flint invoice delivery attempt ID. Flint invoice delivery attempt ID. Example: `"indel_01KEZF7C001BBS41T0ZVY8VMEQ"`. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.invoice_delivery_attempt_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice delivery attempt ID. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.invoice_id

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 1

anyOf variant 1: ID of the invoice this delivery attempt belongs to..

- Value shape: string. ID of the invoice this delivery attempt belongs to. ID of the invoice this delivery attempt belongs to. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice this delivery attempt belongs to. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.sent_at

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.sent_at variant 1

anyOf variant 1: When the email service accepted the message. Absent until it does..

- Value shape: string. When the email service accepted the message. Absent until it does. When the email service accepted the message. Absent until it does. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.sent_at variant 2

anyOf variant 2.

- Value shape: null. When the email service accepted the message. Absent until it does. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.status

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: The outcome of this attempt. sent means the email service accepted the message..

- Value shape: string. The outcome of this attempt. sent means the email service accepted the message. Values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`.

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. The outcome of this attempt. sent means the email service accepted the message. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.suppression_reason

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.suppression_reason variant 1

anyOf variant 1: Present only when status is suppressed..

- Value shape: string. Present only when status is suppressed. Values: `"merchant_managed_email"`, `"recipient_unsubscribed"`, `"sandbox_daily_limit_reached"`.

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.suppression_reason variant 2

anyOf variant 2.

- Value shape: null. Present only when status is suppressed. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.to_email

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.to_email variant 1

anyOf variant 1: Address the invoice was sent to. `null` when the customer was deleted..

- Value shape: string. Address the invoice was sent to. `null` when the customer was deleted. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.data.previous_attributes.to_email variant 2

anyOf variant 2.

- Value shape: null. Address the invoice was sent to. `null` when the customer was deleted. 

### InvoiceDeliveryAttemptFailedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

