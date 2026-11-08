[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceCheckoutSessionResult

The invoice is the primary resource, with its checkout session and any invoice payment attempt. Hosted launches return checkout_session.url; embedded launches return checkout_auth_token.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `checkout_auth_token` | Optional | string | Checkout credential for embedded launches. Send it as Authorization: Bearer &lt;checkout_auth_token>. Omitted for hosted launches, which return checkout_session.url instead. |
| `checkout_session` | Required | [CheckoutSession](../models/CheckoutSession.md#checkoutsession) | The checkout session created to collect the invoice or selected schedule entry. A session in which a buyer completes an order's payment. `checkout_session`: [field definitions](../models/InvoiceCheckoutSessionResult.md#invoicecheckoutsessionresultcheckout_session). |
| `invoice` | Required | [Invoice](../models/Invoice.md#invoice) | The invoice the checkout session collects, with its current balance. A bill issued to a customer. `invoice`: [field definitions](../models/InvoiceCheckoutSessionResult.md#invoicecheckoutsessionresultinvoice). |
| `invoice_payment_attempt` | Optional | [InvoicePaymentAttempt](../models/InvoicePaymentAttempt.md#invoicepaymentattempt) | The invoice payment attempt started for this checkout session. An attempt to collect payment for an invoice. `invoice_payment_attempt`: [field definitions](../models/InvoiceCheckoutSessionResult.md#invoicecheckoutsessionresultinvoice_payment_attempt). |

### InvoiceCheckoutSessionResult.checkout_session

The checkout session created to collect the invoice or selected schedule entry. A session in which a buyer completes an order's payment.

Field definitions: [shared fields](CheckoutSessionResponse.md#checkoutsessionresponsedata).

### InvoiceCheckoutSessionResult.checkout_session.active_payment_attempt

Field definitions: [CheckoutSessionResponse.data.active_payment_attempt](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataactive_payment_attempt).

### InvoiceCheckoutSessionResult.checkout_session.buyer_contact

Field definitions: [CheckoutSessionResponse.data.buyer_contact](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatabuyer_contact).

### InvoiceCheckoutSessionResult.checkout_session.custom_field_answers[]

Declared alternatives: [OrderResponse.data.custom_field_answers[]](../models/OrderResponse.md#orderresponsedatacustom_field_answers).

### InvoiceCheckoutSessionResult.checkout_session.customer

Declared alternatives: [DisputeResponse.data.customer](../models/DisputeResponse.md#disputeresponsedatacustomer).

### InvoiceCheckoutSessionResult.checkout_session.delivery

Field definitions: [CheckoutSessionResponse.data.delivery](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatadelivery).

### InvoiceCheckoutSessionResult.checkout_session.gift_card_challenge

Field definitions: [CheckoutSessionResponse.data.gift_card_challenge](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatagift_card_challenge).

### InvoiceCheckoutSessionResult.checkout_session.invoice

Declared alternatives: [CheckoutSessionResponse.data.invoice](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatainvoice).

### InvoiceCheckoutSessionResult.checkout_session.merchant_support

Field definitions: [CheckoutSessionResponse.data.merchant_support](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatamerchant_support).

### InvoiceCheckoutSessionResult.checkout_session.metadata

Field definitions: [OrderResponse.data.charges[].metadata](../models/OrderResponse.md#orderresponsedatachargesmetadata).

### InvoiceCheckoutSessionResult.checkout_session.order

Declared alternatives: [DisputeResponse.data.order](../models/DisputeResponse.md#disputeresponsedataorder).

### InvoiceCheckoutSessionResult.checkout_session.payment_intents[]

Field definitions: [OrderResponse.data.payment_intents[]](../models/OrderResponse.md#orderresponsedatapayment_intents).

### InvoiceCheckoutSessionResult.checkout_session.payment_link

Declared alternatives: [CheckoutSessionResponse.data.payment_link](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatapayment_link).

### InvoiceCheckoutSessionResult.checkout_session.payment_method_save

Field definitions: [CheckoutSessionResponse.data.payment_method_save](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatapayment_method_save).

### InvoiceCheckoutSessionResult.checkout_session.redirects

Field definitions: [CheckoutSessionResponse.data.redirects](../models/CheckoutSessionResponse.md#checkoutsessionresponsedataredirects).

### InvoiceCheckoutSessionResult.checkout_session.subscription_terms

Field definitions: [CheckoutSessionResponse.data.subscription_terms](../models/CheckoutSessionResponse.md#checkoutsessionresponsedatasubscription_terms).

### InvoiceCheckoutSessionResult.invoice

The invoice the checkout session collects, with its current balance. A bill issued to a customer.

Field definitions: [shared fields](CollectInvoiceResponse.md#collectinvoiceresponsedatainvoice).

### InvoiceCheckoutSessionResult.invoice.collection

Declared alternatives: [CollectInvoiceResponse.data.invoice.collection](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecollection).

### InvoiceCheckoutSessionResult.invoice.customer

Declared alternatives: [CollectInvoiceResponse.data.invoice.customer](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicecustomer).

### InvoiceCheckoutSessionResult.invoice.late_fees[]

Field definitions: [CollectInvoiceResponse.data.invoice.late_fees[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicelate_fees).

### InvoiceCheckoutSessionResult.invoice.metadata

Field definitions: [CollectInvoiceResponse.data.invoice.metadata](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicemetadata).

### InvoiceCheckoutSessionResult.invoice.order

Declared alternatives: [CollectInvoiceResponse.data.invoice.order](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceorder).

### InvoiceCheckoutSessionResult.invoice.payment_due

Declared alternatives: [CollectInvoiceResponse.data.invoice.payment_due](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_due).

### InvoiceCheckoutSessionResult.invoice.payment_terms_snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshot).

### InvoiceCheckoutSessionResult.invoice.remit_to_address

Field definitions: [CollectInvoiceResponse.data.invoice.remit_to_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceremit_to_address).

### InvoiceCheckoutSessionResult.invoice.schedule_entries[]

Field definitions: [CollectInvoiceResponse.data.invoice.schedule_entries[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceschedule_entries).

### InvoiceCheckoutSessionResult.invoice.snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicesnapshot).

### InvoiceCheckoutSessionResult.invoice_payment_attempt

The invoice payment attempt started for this checkout session. An attempt to collect payment for an invoice.

Field definitions: [shared fields](InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedata).

### InvoiceCheckoutSessionResult.invoice_payment_attempt.last_payment_error

Field definitions: [InvoicePaymentAttemptResponse.data.last_payment_error](../models/InvoicePaymentAttemptResponse.md#invoicepaymentattemptresponsedatalast_payment_error).

