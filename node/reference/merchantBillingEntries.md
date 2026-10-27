[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# merchantBillingEntries

### merchantBillingEntries.list

Returns immutable merchant billing entries for the authenticated merchant environment, newest occurred_at first. Entries in the same second are ordered by type rank, then merchant_billing_entry_id; all three keys are descending. Type ranks are 10 for event_fee, custom_domain, and invoice; 20 for correction; 30 for credit_issued; 40 for credit_applied and credit_refunded; 50 for collection and custom_domain_collection; and 60 for collection_reversal and write_off. An entry can be recorded after entries that occurred later, such as a collection whose bank outcome arrives late. To pick up new entries, filter on created_after. Re-reading the same entry always returns the same values. To export an interval, use merchant_billing_itemized_v1. It fails with data_unavailable when billing projections or membership history are inconsistent, collection outcome or balance transaction evidence is missing, or an entry is invalid. This list does not run the report interval preflights.

`GET /v1/merchant-billing-entries`

Signature:

```typescript
list(params?: {
  "type"?: InputValue<Array<"event_fee" |
    "invoice" |
    "custom_domain" |
    "custom_domain_collection" |
    "correction" |
    "credit_issued" |
    "credit_applied" |
    "credit_refunded" |
    "collection" |
    "collection_reversal" |
    "write_off">>;
  "currency"?: InputValue<string>;
  "occurred_after"?: InputValue<string | globalThis.Date>;
  "occurred_before"?: InputValue<string | globalThis.Date>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "payment_intent_id"?: InputValue<string>;
  "dispute_id"?: InputValue<string>;
  "merchant_billing_invoice_id"?: InputValue<string>;
  "balance_transaction_id"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `type` | Optional | Array of string | minItems: `1`. Items values: [11 declared values](#merchantbillingentrieslist-input-type--values). |
| `currency` | Optional | string | ISO 4217 currency code. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. |
| `occurred_after` | Optional | string | Format: `date-time`. |
| `occurred_before` | Optional | string | Format: `date-time`. |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `payment_intent_id` | Optional | string |  |
| `dispute_id` | Optional | string |  |
| `merchant_billing_invoice_id` | Optional | string |  |
| `balance_transaction_id` | Optional | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

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

#### Response

Returned payload: [MerchantBillingEntryListResponse](../models/MerchantBillingEntryListResponse.md#merchantbillingentrylistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.merchantBillingEntries.list({}, {  });
```

[Complete runnable example](../examples/merchantBillingEntries-list.mjs)

