[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantBillingEntryListResponse

A page of `MerchantBillingEntry` objects.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | Array of [MerchantBillingEntry](../models/MerchantBillingEntry.md#merchantbillingentry) | Resource, collection, or operation result returned by this request. `data[]`: [field definitions](../models/MerchantBillingEntryListResponse.md#merchantbillingentrylistresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `next_page_token` | Optional | string | Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page. |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### MerchantBillingEntryListResponse.data[]

An immutable merchant billing charge, credit, collection, correction, or write-off.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_credit_effect_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed change in available billing credit. credit_issued increases it; credit_applied and credit_refunded decrease it. Other entry types do not change it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `balance_transaction_id` | Optional | string | Balance transaction for this collection or collection reversal, when present. Example: `"btxn_01KEZF7C00H1Z82CMFWWXMZGHZ"`. |
| `created_at` | Required | string | When Flint inserted the entry. Never changes and is never backdated from occurred_at. Overlap created_after passes by a few minutes and deduplicate by merchant_billing_entry_id to pick up late commits. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `description` | Required | string | Human-readable description of the billing event. |
| `dispute_id` | Optional | string | Related dispute, when the entry is associated with a dispute. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. |
| `event_fee_type` | Optional | string | Event fee category. Present only for event_fee entries. card_dispute applies only when Flint paid the processor's dispute fee; a fee already deducted from your balance is recorded on the dispute balance transaction instead. Values: `"bank_verification"`, `"failed_ach_payment"`, `"ach_dispute"`, `"card_dispute"`, `"external_paid_order_overage"`. |
| `merchant_billing_entry_id` | Required | string | Stable entry ID. Re-reading an entry returns the same values. Example: `"mbe_01KEZF7C00S06A5G1B4867TF78"`. |
| `merchant_billing_invoice_id` | Optional | string | Related invoice issued by Flint, when applicable. Example: `"msinv_01KEZF7C00MB754KPEPACGRMNP"`. |
| `net_billing_effect_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed outstanding effect minus the available credit effect. Charges and collection_reversal are positive; credit_issued, collection, custom_domain_collection, and write_off are negative; credit_refunded is positive; credit_applied is zero; correction may be positive or negative. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `occurred_at` | Required | string | When the billing event happened. An entry can be recorded after entries that occurred later. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `outstanding_effect_money` | Required | [SignedMoney](../models/SignedMoney.md#signedmoney) | Signed change in the amount owed Flint. Charges (event_fee, invoice, custom_domain) and collection_reversal increase it; credit_applied, collection, custom_domain_collection, and write_off decrease it; correction may increase or decrease it. Credit issuance and refund do not change it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `payment_intent_id` | Optional | string | Related payment intent, when the entry is associated with a payment. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `related_merchant_billing_entry_id` | Optional | string | Entry corrected, credited, collected, reversed, or written off by this entry, when applicable. Example: `"mbe_01KEZF7C00S06A5G1B4867TF78"`. |
| `type` | Required | string | The billing event represented by this entry. Values: [11 declared values](#merchantbillingentrylistresponsedata-type-values). |

#### MerchantBillingEntryListResponse.data[] type values

- `"event_fee"`
- `"invoice"`
- `"custom_domain"`
- `"custom_domain_collection"`
- `"correction"`
- `"credit_issued"`
- `"credit_applied"`
- `"credit_refunded"`
- `"collection"`
- `"collection_reversal"`
- `"write_off"`

### MerchantBillingEntryListResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

