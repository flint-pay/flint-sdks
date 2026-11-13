[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerInvoiceListResponse

A page of `BuyerInvoice` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [BuyerInvoice](../models/BuyerInvoice.md#buyerinvoice) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/BuyerInvoiceListResponse.md#buyerinvoicelistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### BuyerInvoiceListResponse.data[]

A bill issued to a customer.

Field definitions: [shared fields](BuyerInvoiceResponse.md#buyerinvoiceresponsedata).

### BuyerInvoiceListResponse.data[].active_payment_attempt

Field definitions: [BuyerInvoiceResponse.data.active_payment_attempt](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedataactive_payment_attempt).

### BuyerInvoiceListResponse.data[].balance_rows[]

Field definitions: [BuyerInvoiceResponse.data.balance_rows[]](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatabalance_rows).

### BuyerInvoiceListResponse.data[].buyer_actions[]

Field definitions: [SubscriptionResponse.data.buyer_actions[]](../models/SubscriptionResponse.md#subscriptionresponsedatabuyer_actions).

### BuyerInvoiceListResponse.data[].issue_rows[]

Field definitions: [BuyerInvoiceResponse.data.balance_rows[]](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatabalance_rows).

### BuyerInvoiceListResponse.data[].late_fees[]

Field definitions: [BuyerInvoiceResponse.data.late_fees[]](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatalate_fees).

### BuyerInvoiceListResponse.data[].merchant_support

Field definitions: [BuyerInvoiceResponse.data.merchant_support](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatamerchant_support).

### BuyerInvoiceListResponse.data[].payment_terms_snapshot

Field definitions: [CollectInvoiceResponse.data.invoice.payment_terms_snapshot](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoicepayment_terms_snapshot).

### BuyerInvoiceListResponse.data[].remit_to_address

Field definitions: [CollectInvoiceResponse.data.invoice.remit_to_address](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceremit_to_address).

### BuyerInvoiceListResponse.data[].schedule_entries[]

Field definitions: [CollectInvoiceResponse.data.invoice.schedule_entries[]](../models/CollectInvoiceResponse.md#collectinvoiceresponsedatainvoiceschedule_entries).

### BuyerInvoiceListResponse.data[].snapshot

Field definitions: [BuyerInvoiceResponse.data.snapshot](../models/BuyerInvoiceResponse.md#buyerinvoiceresponsedatasnapshot).

### BuyerInvoiceListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

