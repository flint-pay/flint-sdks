[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# creditNotes

### creditNotes.create

Creates a draft credit note against an invoice that has been issued and not voided. Include line_items for initial corrections or omit them for an empty draft. The draft uses frozen invoice economics and the remaining pools shared by issued, non-void notes. Drafts reserve no credit. It receives a credit note number when issued.

`POST /v1/credit-notes`

Signature: `create(params: CreditNotesCreateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateCreditNoteRequestInput](../models/CreateCreditNoteRequest.md#createcreditnoterequest) | The request body for: Create credit note. |

Body model: [CreateCreditNoteRequestInput](../models/CreateCreditNoteRequest.md#createcreditnoterequest).

#### creditNotes.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `invoice_id` | Required | string | The invoice to correct. It has to be past draft and not voided. minLength: `1`. |
| `line_items` | Optional | Array of [CreditNoteLineItemRequestInput](../models/CreditNoteLineItemRequest.md#creditnotelineitemrequest) | Initial draft corrections. Omit or send [] to create an empty draft. Null is not accepted. Items: A credit note line you supply when creating or updating a credit note: the invoice line item it credits and how much, or an existing line to keep. |
| `memo` | Optional | string | Free text shown on the credit note, up to 4096 characters. minLength: `1`. maxLength: `4096`. |
| `reason` | Required | string | Why the invoice is being corrected: returned_goods, order_adjustment, billing_error, goodwill, or other. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |

#### Response

Returned payload: [CreditNote](../models/CreditNote.md#creditnote).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.create({invoice_id: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV", reason: "returned_goods"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-create.mjs)

### creditNotes.createAllocation

Applies credit from an issued credit note to its invoice, reducing outstanding_money. The amount cannot exceed the credit note's available_money or the invoice's outstanding balance. Closing the balance with credit sets the invoice to paid when positive net collection remains, or credited when there is no positive net collection. Returns the allocation, the credit note, and the recomputed invoice together. An Idempotency-Key is required and becomes the allocation's identity.

`POST /v1/credit-notes/{credit_note_id}/allocations`

Signature:

```typescript
createAllocation(credit_note_id: InputValue<string>,
 params: CreditNotesCreateAllocationParams,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string | Flint credit note ID. |
| `body` | Required | [CreateCreditNoteAllocationRequestInput](../models/CreateCreditNoteAllocationRequest.md#createcreditnoteallocationrequest) | The request body for: Allocate credit note. |

Body model: [CreateCreditNoteAllocationRequestInput](../models/CreateCreditNoteAllocationRequest.md#createcreditnoteallocationrequest).

#### creditNotes.createAllocation body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credit to apply, no more than the credit note's available_money or the invoice's outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Format: `int64`. minimum: `1`. |

#### Response

Returned payload: [CreditNoteAllocationResult](../models/CreditNoteAllocationResult.md#creditnoteallocationresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.createAllocation("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {amount_money: {amount: "100", currency: "USD"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-createAllocation.mjs)

### creditNotes.createRefund

Creates a refund against an issued credit note on a paid invoice. Omit amount_money to refund all available credit. Refunds use the source invoice's original payments and do not reopen its balance. Idempotency-Key is required and retained for the lifetime of the refund command, scoped to merchant, environment, credit note, and key. Reusing it with another request conflicts. Recover a lost response by listing this note's refunds with idempotency_key. A failed remainder can be requested with a new key after its outcome is definitive.

`POST /v1/credit-notes/{credit_note_id}/refunds`

Signature:

```typescript
createRefund(credit_note_id: InputValue<string>,
 params: CreditNotesCreateRefundParams,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string | Flint credit note ID. |
| `body` | Required | [CreateCreditNoteRefundRequestInput](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest) | The request body for: Refund credit note. |

Body model: [CreateCreditNoteRefundRequestInput](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest).

#### creditNotes.createRefund body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credit to refund. Omit to refund all available credit, which Flint resolves once when it accepts the request. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Why the refund is being made. Values: [12 declared values](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund. minLength: `1`. |

#### Response

Returned payload: [Refund](../models/Refund.md#refund).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.createRefund("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {reason: "duplicate"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-createRefund.mjs)

### creditNotes.get

Returns one credit note with its lines, total, and the credit still available to allocate.

`GET /v1/credit-notes/{credit_note_id}`

Signature: `get(credit_note_id: InputValue<string>, params?: CreditNotesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string | Flint credit note ID. |
| `expand` | Optional | Array of string or string | Supported expansions: invoice. Include the source invoice summary with expand=invoice. Requires commerce.credit_notes.read and commerce.invoices.read. Limits: at most 10 unique expand paths per request. Pass expand=invoice. Items values: `"invoice"`. Values: `"invoice"`. |

#### Response

Returned payload: [CreditNote](../models/CreditNote.md#creditnote).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.creditNotes.get("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/creditNotes-get.mjs)

### creditNotes.getAllocation

Returns one allocation. A non-null reversed_at means the credit was returned to the credit note and the invoice balance reopened.

`GET /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}`

Signature:

```typescript
getAllocation(credit_note_id: InputValue<string>,
 credit_note_allocation_id: InputValue<string>,
 params?: CreditNotesGetAllocationParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string | Flint credit note ID. |
| `credit_note_allocation_id` | Required | string | Flint credit note allocation ID. |

#### Response

Returned payload: [CreditNoteAllocation](../models/CreditNoteAllocation.md#creditnoteallocation).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.creditNotes.getAllocation("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", "cna_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/creditNotes-getAllocation.mjs)

### creditNotes.getPDF

Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and shows the credited lines, totals, and the invoice it corrects. It uses your current branding, so a later download can differ in logo or colors, but not in content.

`GET /v1/credit-notes/{credit_note_id}/pdf`

Signature: `getPDF(credit_note_id: InputValue<string>, params?: CreditNotesGetPDFParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string | Flint credit note ID. |

#### Response

Response body (inside Result.data): Uint8Array.

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.creditNotes.getPDF("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/creditNotes-getPDF.mjs)

### creditNotes.issue

Issues a draft credit note and freezes its number, lines, and totals. Provide allocation to issue and apply credit to its invoice atomically, or refund to initiate a linked refund on a paid invoice. Allocation and refund cannot be combined. Omit allocation.amount_money to apply the smaller of the credit available after issue and the invoice's outstanding balance. An explicit amount must be positive, use the invoice's currency, and fit both balances. The result includes credit_note_allocation when allocation is requested. Idempotency-Key is required and is retained for as long as the issue's effects exist, scoped to merchant, environment, credit note, and key. Reuse the key with the identical request to recover the original credit note and allocation. Recover an allocation after a lost response by listing this note's allocations with idempotency_key=issue:<issue key>. For refunds, list this note's refunds filtered by the original idempotency_key. A pending refund is accepted but has not completed. Without allocation or refund, issuance leaves the invoice balance unchanged. Issue validates the stored preview against current shared creditable pools. A fitting correction whose preview changed returns CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed: replace its existing corrections with PATCH using the current expected_version, review the recalculated amounts, and issue again. A stored correction exceeding the remaining pool returns ACTION_NOT_ALLOWED with reason not_offered. Update the draft lines before issuing again. Affected historical tax allocations return ACTION_NOT_ALLOWED with reason credit_note_tax_reconciliation_required.

`POST /v1/credit-notes/{credit_note_id}/issue`

Signature:

```typescript
issue(credit_note_id: InputValue<string>,
 params: CreditNotesIssueParams |
  undefined,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string | Flint credit note ID. |
| `body` | Optional | [IssueCreditNoteRequestInput](../models/IssueCreditNoteRequest.md#issuecreditnoterequest) | The request body for: Issue credit note. |

Body model: [IssueCreditNoteRequestInput](../models/IssueCreditNoteRequest.md#issuecreditnoterequest).

#### creditNotes.issue body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | [CreditNoteIssueAllocationRequestInput](../models/CreditNoteIssueAllocationRequest.md#creditnoteissueallocationrequest) | Issue the credit note and apply credit to its invoice atomically. If the allocation fails, the note stays a draft. Omit amount_money to apply the smaller of the credit available after issue and the invoice's outstanding balance. Cannot be combined with refund. Credit to apply to the invoice when issuing a credit note. |
| `expected_version` | Optional | integer | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Format: `int64`. minimum: `1`. |
| `refund` | Optional | [CreditNoteRefundRequestInput](../models/CreditNoteRefundRequest.md#creditnoterefundrequest) | Create a linked refund when the credit note is issued. Requires both credit-note and refund write permissions and a paid invoice. Cannot be combined with allocation. Refund details you supply when issuing a credit note: the reason, an optional message, and an optional amount. |

#### Response

Returned payload: [IssueCreditNoteResult](../models/IssueCreditNoteResult.md#issuecreditnoteresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |
| 504 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required, [As long as the command's effects exist. The key is the command's durable identity: save it before the first attempt and reuse it to retry or recover. Never reuse it for a new business intent retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.issue("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-issue.mjs)

### creditNotes.list

Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see everything credited against one invoice. Default order: created_at descending, then credit_note_id descending.

`GET /v1/credit-notes`

Signature: `list(params?: CreditNotesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `invoice_id` | Optional | string | Filter by invoice. |
| `customer_id` | Optional | string | Filter by the source invoice's current customer_id. |
| `reason` | Optional | Array of string or string | Filter by credit note reason. Repeat the parameter or pass comma-separated values to match multiple reasons. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |
| `external_reference_id` | Optional | string | Exact-match filter on the caller-owned external reference ID. minLength: `1`. maxLength: `255`. |
| `query` | Optional | string | Search across credit note ID, credit note number, memo, and external reference ID. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as cn_01. |
| `status` | Optional | Array of string or string | Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"draft"`, `"issued"`, `"void"`. Values: `"draft"`, `"issued"`, `"void"`. |
| `expand` | Optional | Array of string or string | Supported expansions: invoice. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=invoice. Items values: `"invoice"`. Values: `"invoice"`. |

#### Response

Returned payload: [CreditNoteListResponse](../models/CreditNoteListResponse.md#creditnotelistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
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
const result = await client.creditNotes.list({}, {  });
```

[Complete runnable example](../examples/creditNotes-list.mjs)

### creditNotes.listAllocations

Returns every allocation made from a credit note, including reversed ones. Filter by idempotency_key to find the allocation a given request produced. Default order: allocated_at descending, then credit_note_allocation_id descending.

`GET /v1/credit-notes/{credit_note_id}/allocations`

Signature:

```typescript
listAllocations(credit_note_id: InputValue<string>,
 params?: CreditNotesListAllocationsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string | Flint credit note ID. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |

#### Response

Returned payload: [CreditNoteAllocationListResponse](../models/CreditNoteAllocationListResponse.md#creditnoteallocationlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listAllocationsItems`, `listAllocationsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.creditNotes.listAllocations("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/creditNotes-listAllocations.mjs)

### creditNotes.listRefunds

Lists linked refunds, including failed attempts, newest first. Filter by idempotency_key to recover a refund after a lost response. Default order: time each refund was applied to the credit note (descending), then refund_id descending.

`GET /v1/credit-notes/{credit_note_id}/refunds`

Signature:

```typescript
listRefunds(credit_note_id: InputValue<string>,
 params?: CreditNotesListRefundsParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

Field definitions: [shared fields](#request-fields-8).

#### Response

Returned payload: [RefundListResponse](../models/RefundListResponse.md#refundlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listRefundsItems`, `listRefundsPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.creditNotes.listRefunds("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/creditNotes-listRefunds.mjs)

### creditNotes.reverseAllocation

Reverses an allocation and reopens that much of the invoice balance. The original allocation keeps its row and gains reversed_at, so the history stays append-only. Reversing the allocation that closed an invoice moves it from credited back to open or partially_paid. Reversing credit on a paid invoice that also has collected payments moves it to partially_paid.

`POST /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}/reverse`

Signature:

```typescript
reverseAllocation(credit_note_id: InputValue<string>,
 credit_note_allocation_id: InputValue<string>,
 params?: CreditNotesReverseAllocationParams,
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string | Flint credit note ID. |
| `credit_note_allocation_id` | Required | string | Flint credit note allocation ID. |
| `body` | Optional | [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice. |

#### Response

Returned payload: [CreditNoteAllocationResult](../models/CreditNoteAllocationResult.md#creditnoteallocationresult).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.reverseAllocation("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", "cna_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-reverseAllocation.mjs)

### creditNotes.update

Updates draft credit note fields and corrections atomically. Omitted fields are unchanged, a null memo clears it, and line_items requires expected_version. Replacing lines recalculates their amounts from current remaining creditable pools. Scalar edits preserve stored line values. Issued and void credit notes are frozen.

`PATCH /v1/credit-notes/{credit_note_id}`

Signature: `update(credit_note_id: InputValue<string>, params: CreditNotesUpdateParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string | Flint credit note ID. |
| `body` | Required | [UpdateCreditNoteRequestInput](../models/UpdateCreditNoteRequest.md#updatecreditnoterequest) | The request body for: Update credit note. |

Body model: [UpdateCreditNoteRequestInput](../models/UpdateCreditNoteRequest.md#updatecreditnoterequest).

#### creditNotes.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Credit note version last read. Required when line_items is present. Required when any of these fields is present: line_items. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `line_items` | Optional | Array of [CreditNoteLineItemRequestInput](../models/CreditNoteLineItemRequest.md#creditnotelineitemrequest) | Full replacement of the draft's owned line collection; requires expected_version. Recalculates corrections from current remaining creditable pools. After CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed, replace the existing corrections using the credit note's current version, review the new amounts, and issue again. Scalar memo or reason changes do not reprice lines. Items: A credit note line you supply when creating or updating a credit note: the invoice line item it credits and how much, or an existing line to keep. |
| `memo` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `4096`. |
| `reason` | Optional | string | Why the invoice is being corrected: returned_goods, order_adjustment, billing_error, goodwill, or other. Cannot be null; omit it to keep the current reason. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |

#### Response

Returned payload: [CreditNote](../models/CreditNote.md#creditnote).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.update("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", {memo: "Updated credit note memo"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-update.mjs)

### creditNotes.void

Voids an issued credit note. Reverse every allocation first. A credit note with a pending or succeeded refund can't be voided. Blockers return 409 RESOURCE_IN_USE with details[0].blocking_resources listing the allocations and refunds. Void is terminal, and an invoice cannot be voided while an issued credit note stands against it.

`POST /v1/credit-notes/{credit_note_id}/void`

Signature: `void(credit_note_id: InputValue<string>, params?: CreditNotesVoidParams, options?: RequestOptions<"merchant">)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string | Flint credit note ID. |
| `body` | Optional | [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice. |

#### Response

Returned payload: [CreditNote](../models/CreditNote.md#creditnote).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 410 | ApiError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic, [At least 24 hours. A retry with the same key and request within that window returns the original result instead of repeating it; afterwards the key may run as a new request retention](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.void("cn_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-void.mjs)

