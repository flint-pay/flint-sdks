[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchantBillingEntries

### merchantBillingEntries.list

Returns immutable merchant billing entries for the authenticated merchant environment, newest occurred_at first. Entries in the same second are ordered by type rank, then merchant_billing_entry_id; all three keys are descending. Type ranks are 10 for event_fee, custom_domain, and invoice; 20 for correction; 30 for credit_issued; 40 for credit_applied and credit_refunded; 50 for collection and custom_domain_collection; and 60 for collection_reversal and write_off. An entry can be recorded after entries that occurred later, such as a collection whose bank outcome arrives late. To pick up new entries, filter on created_after. Re-reading the same entry always returns the same values. To export an interval, use merchant_billing_itemized_v1. It fails with data_unavailable when billing projections or membership history are inconsistent, collection outcome or balance transaction evidence is missing, or an entry is invalid. This list does not run the report interval preflights. Default order: occurred_at descending, then the entry type's rank (descending), then merchant_billing_entry_id descending.

`GET /v1/merchant-billing-entries`

Signature: `list(params?: MerchantBillingEntriesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Optional | Array of string or string | Filter by one or more merchant billing entry types. Repeat or comma-separate values. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [11 declared values](#merchantbillingentrieslist-input-type--values). Values: [11 declared values](#merchantbillingentrieslist-input-type-values). |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `occurred_after` | Optional | string | Inclusive lower bound on occurred_at. Format: `date-time`. |
| `occurred_before` | Optional | string | Exclusive upper bound on occurred_at. Format: `date-time`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `payment_intent_id` | Optional | string | Filter by Flint payment intent ID. |
| `dispute_id` | Optional | string | Filter by Flint dispute ID. |
| `merchant_billing_invoice_id` | Optional | string | Filter by Flint merchant billing invoice ID. |
| `balance_transaction_id` | Optional | string | Filter by Flint balance transaction ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### merchantBillingEntries.list input type [] values

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

#### merchantBillingEntries.list input type values

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

#### Response

Returned payload: [MerchantBillingEntryListResponse](../models/MerchantBillingEntryListResponse.md#merchantbillingentrylistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.merchantBillingEntries.list({}, {  });
```

[Complete runnable example](../examples/merchantBillingEntries-list.mjs)

