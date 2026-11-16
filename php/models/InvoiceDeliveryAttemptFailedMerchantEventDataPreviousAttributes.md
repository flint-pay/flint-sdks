[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string or null | Addresses copied on this email. Absent when none were copied. `cc_emails`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributescc_emails). |
| `channel` | Optional | string or null | How Flint delivered the invoice. Values: `"email"`. `channel`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributeschannel). |
| `created_at` | Optional | string or null | When the attempt was created. `created_at`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributescreated_at). |
| `delivery_type` | Optional | string or null | Whether this attempt is the invoice email sent at issue or a reminder. Values: `"send"`, `"reminder"`. `delivery_type`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributesdelivery_type). |
| `failure_reason` | Optional | string or null | Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Values: `"rejected"`, `"delivery_unknown"`, `"canceled"`. `failure_reason`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributesfailure_reason). |
| `invoice_delivery_attempt_id` | Optional | string or null | Flint invoice delivery attempt ID. `invoice_delivery_attempt_id`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributesinvoice_delivery_attempt_id). |
| `invoice_id` | Optional | string or null | ID of the invoice this delivery attempt belongs to. `invoice_id`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributesinvoice_id). |
| `sent_at` | Optional | string or null | When the email service accepted the message. Absent until it does. `sent_at`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributessent_at). |
| `status` | Optional | string or null | The outcome of this attempt. sent means the email service accepted the message. Values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`. `status`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributesstatus). |
| `suppression_reason` | Optional | string or null | Present only when status is suppressed. Values: `"merchant_managed_email"`, `"recipient_unsubscribed"`, `"sandbox_daily_limit_reached"`. `suppression_reason`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributessuppression_reason). |
| `to_email` | Optional | string or null or null | Address the invoice was sent to. `null` when the customer was deleted. `to_email`: [declared alternatives](../models/InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.md#invoicedeliveryattemptfailedmerchanteventdatapreviousattributesto_email). |

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.cc_emails

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.cc_emails variant 1

anyOf variant 1: Addresses copied on this email. Absent when none were copied..

- Value shape: Array of string. Addresses copied on this email. Absent when none were copied. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.cc_emails variant 2

anyOf variant 2.

- Value shape: null. Addresses copied on this email. Absent when none were copied. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.channel

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.channel variant 1

anyOf variant 1: How Flint delivered the invoice..

- Value shape: string. How Flint delivered the invoice. Values: `"email"`.

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.channel variant 2

anyOf variant 2.

- Value shape: null. How Flint delivered the invoice. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.created_at

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.created_at variant 1

anyOf variant 1: When the attempt was created..

- Value shape: string. When the attempt was created. When the attempt was created. Format: `date-time`. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the attempt was created. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.delivery_type

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.delivery_type variant 1

anyOf variant 1: Whether this attempt is the invoice email sent at issue or a reminder..

- Value shape: string. Whether this attempt is the invoice email sent at issue or a reminder. Values: `"send"`, `"reminder"`.

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.delivery_type variant 2

anyOf variant 2.

- Value shape: null. Whether this attempt is the invoice email sent at issue or a reminder. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.failure_reason

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.failure_reason variant 1

anyOf variant 1: Present only when status is failed. Legacy failed attempts without a stored reason return rejected..

- Value shape: string. Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Values: `"rejected"`, `"delivery_unknown"`, `"canceled"`.

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.failure_reason variant 2

anyOf variant 2.

- Value shape: null. Present only when status is failed. Legacy failed attempts without a stored reason return rejected. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.invoice_delivery_attempt_id

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.invoice_delivery_attempt_id variant 1

anyOf variant 1: Flint invoice delivery attempt ID..

- Value shape: string. Flint invoice delivery attempt ID. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.invoice_delivery_attempt_id variant 2

anyOf variant 2.

- Value shape: null. Flint invoice delivery attempt ID. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.invoice_id

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.invoice_id variant 1

anyOf variant 1: ID of the invoice this delivery attempt belongs to..

- Value shape: string. ID of the invoice this delivery attempt belongs to. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.invoice_id variant 2

anyOf variant 2.

- Value shape: null. ID of the invoice this delivery attempt belongs to. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.sent_at

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.sent_at variant 1

anyOf variant 1: When the email service accepted the message. Absent until it does..

- Value shape: string. When the email service accepted the message. Absent until it does. When the email service accepted the message. Absent until it does. Format: `date-time`. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.sent_at variant 2

anyOf variant 2.

- Value shape: null. When the email service accepted the message. Absent until it does. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.status

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: The outcome of this attempt. sent means the email service accepted the message..

- Value shape: string. The outcome of this attempt. sent means the email service accepted the message. Values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`.

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. The outcome of this attempt. sent means the email service accepted the message. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.suppression_reason

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.suppression_reason variant 1

anyOf variant 1: Present only when status is suppressed..

- Value shape: string. Present only when status is suppressed. Values: `"merchant_managed_email"`, `"recipient_unsubscribed"`, `"sandbox_daily_limit_reached"`.

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.suppression_reason variant 2

anyOf variant 2.

- Value shape: null. Present only when status is suppressed. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.to_email

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.to_email variant 1

anyOf variant 1: Address the invoice was sent to. `null` when the customer was deleted..

- Value shape: (string or null). Address the invoice was sent to. `null` when the customer was deleted. 

### InvoiceDeliveryAttemptFailedMerchantEventDataPreviousAttributes.to_email variant 2

anyOf variant 2.

- Value shape: null. Address the invoice was sent to. `null` when the customer was deleted. 

