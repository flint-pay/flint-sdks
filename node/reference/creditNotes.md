[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# creditNotes

### creditNotes.create

Creates a draft credit note against an invoice that has been issued and not voided. Include line_items for initial corrections or omit them for an empty draft. The draft uses frozen invoice economics and the remaining pools shared by issued, non-void notes. Drafts reserve no credit. It receives a credit note number when issued.

`POST /v1/credit-notes`

Signature:

```typescript
create(params: (InputValue<CreateCreditNoteRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCreditNoteRequestInput](../models/CreateCreditNoteRequest.md#createcreditnoterequest) | The request body for: Create credit note. |

Body model: [CreateCreditNoteRequestInput](../models/CreateCreditNoteRequest.md#createcreditnoterequest).

#### creditNotes.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. minLength: `1`. maxLength: `255`. |
| `invoice_id` | Required | string | The invoice to correct. It has to be past draft and not voided. minLength: `1`. |
| `line_items` | Optional | Array of [CreditNoteLineItemRequestInput](../models/CreditNoteLineItemRequest.md#creditnotelineitemrequest) | Initial draft corrections. Omit or send [] to create an empty draft. Null is not accepted. |
| `memo` | Optional | string | Free text shown on the credit note, up to 4096 characters. minLength: `1`. maxLength: `4096`. |
| `reason` | Required | string | Why the invoice is being corrected: returned_goods, order_adjustment, billing_error, goodwill, or other. Shown on the credit note document. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |

#### Response

Returned payload: [CreditNote](../models/CreditNote.md#creditnote).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.create({invoice_id: "example", reason: "returned_goods"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-create.mjs)

### creditNotes.createAllocation

Applies credit from an issued credit note to its invoice, reducing outstanding_money. The amount cannot exceed the credit note's available_money or the invoice's outstanding balance. Closing the balance with credit sets the invoice to paid when positive net collection remains, or credited when there is no positive net collection. Returns the allocation, the credit note, and the recomputed invoice together. An Idempotency-Key is required and becomes the allocation's identity.

`POST /v1/credit-notes/{credit_note_id}/allocations`

Signature:

```typescript
createAllocation(credit_note_id: InputValue<string>,
 params: (InputValue<CreateCreditNoteAllocationRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCreditNoteAllocationRequestInput](../models/CreateCreditNoteAllocationRequest.md#createcreditnoteallocationrequest) | The request body for: Allocate credit note. |

Body model: [CreateCreditNoteAllocationRequestInput](../models/CreateCreditNoteAllocationRequest.md#createcreditnoteallocationrequest).

#### creditNotes.createAllocation body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credit to apply, no more than the credit note's available_money or the invoice's outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer string | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

#### Response

Returned payload: [CreditNoteAllocationResult](../models/CreditNoteAllocationResult.md#creditnoteallocationresult).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createAllocationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.createAllocation("example", {amount_money: {amount: "100", currency: "USD"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-createAllocation.mjs)

### creditNotes.createRefund

Creates a refund against an issued credit note on a paid invoice. Omit amount_money to refund all available credit. Refunds use the source invoice's original payments and do not reopen its balance. Idempotency-Key is required and retained for the lifetime of the refund command, scoped to merchant, environment, credit note, and key. Reusing it with another request conflicts. Recover a lost response by listing this note's refunds with idempotency_key. A failed remainder can be requested with a new key after its outcome is definitive.

`POST /v1/credit-notes/{credit_note_id}/refunds`

Signature:

```typescript
createRefund(credit_note_id: InputValue<string>,
 params: (InputValue<CreateCreditNoteRefundRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCreditNoteRefundRequestInput](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest) | The request body for: Refund credit note. |

Body model: [CreateCreditNoteRefundRequestInput](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest).

#### creditNotes.createRefund body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Credit to refund. Omit to refund all available credit, which Flint resolves once when it accepts the request. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer string | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Why the refund is being made. Values: [12 declared values](../models/CreateCreditNoteRefundRequest.md#createcreditnoterefundrequest-reason-values). |
| `reason_message` | Optional | string | Optional note explaining the refund. minLength: `1`. |

#### Response

Returned payload: [Refund](../models/Refund.md#refund).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createRefundWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.createRefund("example", {reason: "duplicate"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-createRefund.mjs)

### creditNotes.get

Returns one credit note with its lines, total, and the credit still available to allocate.

`GET /v1/credit-notes/{credit_note_id}`

Signature:

```typescript
get(credit_note_id: InputValue<string>,
 params?: {
  "expand"?: InputValue<Array<"invoice">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `expand` | Optional | Array of string | Items values: `"invoice"`. |

#### Response

Returned payload: [CreditNote](../models/CreditNote.md#creditnote).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.creditNotes.get("example", {}, {  });
```

[Complete runnable example](../examples/creditNotes-get.mjs)

### creditNotes.getAllocation

Returns one allocation. A non-null reversed_at means the credit was returned to the credit note and the invoice balance reopened.

`GET /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}`

Signature:

```typescript
getAllocation(credit_note_id: InputValue<string>,
 credit_note_allocation_id: InputValue<string>,
 params?: {
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `credit_note_allocation_id` | Required | string |  |

#### Response

Returned payload: [CreditNoteAllocation](../models/CreditNoteAllocation.md#creditnoteallocation).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getAllocationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.creditNotes.getAllocation("example", "example", {}, {  });
```

[Complete runnable example](../examples/creditNotes-getAllocation.mjs)

### creditNotes.getPDF

Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and carries your branding, the credited lines, and the invoice it corrects.

`GET /v1/credit-notes/{credit_note_id}/pdf`

Signature: `getPDF(credit_note_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |

#### Response

Response body (inside Result.data): Uint8Array.

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.creditNotes.getPDF("example", {}, {  });
```

[Complete runnable example](../examples/creditNotes-getPDF.mjs)

### creditNotes.issue

Issues a draft credit note and freezes its PDF. Provide allocation to issue and apply credit to its invoice atomically, or refund to initiate a linked refund on a paid invoice. Allocation and refund cannot be combined. Omit allocation.amount_money to apply the smaller of the credit available after issue and the invoice's outstanding balance. An explicit amount must be positive, use the invoice's currency, and fit both balances. The result includes credit_note_allocation when allocation is requested. Idempotency-Key is required and is retained for as long as the issue's effects exist, scoped to merchant, environment, credit note, and key. Reuse the key with the identical request to recover the original credit note and allocation. Recover an allocation after a lost response by listing this note's allocations with idempotency_key=issue:<issue key>. For refunds, list this note's refunds filtered by the original idempotency_key. A pending refund is accepted but has not completed. Without allocation or refund, issuance leaves the invoice balance unchanged. Issue validates the stored preview against current shared creditable pools. A fitting correction whose preview changed returns CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed: replace its existing corrections with PATCH using the current expected_version, review the recalculated amounts, and issue again. A stored correction exceeding the remaining pool returns ACTION_NOT_ALLOWED with reason not_offered. Update the draft lines before issuing again. Affected historical tax allocations return ACTION_NOT_ALLOWED with reason credit_note_tax_reconciliation_required.

`POST /v1/credit-notes/{credit_note_id}/issue`

Signature:

```typescript
issue(credit_note_id: InputValue<string>,
 params: (InputValue<IssueCreditNoteRequestInput> | {
  "allocation"?: never;
  "expected_version"?: never;
  "refund"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
} | undefined,
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [IssueCreditNoteRequestInput](../models/IssueCreditNoteRequest.md#issuecreditnoterequest) | The request body for: Issue credit note. |

Body model: [IssueCreditNoteRequestInput](../models/IssueCreditNoteRequest.md#issuecreditnoterequest).

#### creditNotes.issue body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allocation` | Optional | [CreditNoteIssueAllocationRequestInput](../models/CreditNoteIssueAllocationRequest.md#creditnoteissueallocationrequest) | Issue the credit note and apply credit to its invoice atomically. If the allocation fails, the note stays a draft. Omit amount_money to apply the smaller of the credit available after issue and the invoice's outstanding balance. Cannot be combined with refund. Credit to apply to the invoice when issuing a credit note. |
| `expected_version` | Optional | integer string | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `refund` | Optional | [CreditNoteRefundRequestInput](../models/CreditNoteRefundRequest.md#creditnoterefundrequest) | Create a linked refund when the credit note is issued. Requires both credit-note and refund write permissions and a paid invoice. Cannot be combined with allocation. Refund details you supply when issuing a credit note: the reason, an optional message, and an optional amount. |

#### Response

Returned payload: [IssueCreditNoteResult](../models/IssueCreditNoteResult.md#issuecreditnoteresult).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |
| 504 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `issueWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.issue("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-issue.mjs)

### creditNotes.list

Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see everything credited against one invoice. Default order: created_at descending, then credit_note_id descending.

`GET /v1/credit-notes`

Signature:

```typescript
list(params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "invoice_id"?: InputValue<string>;
  "customer_id"?: InputValue<string>;
  "reason"?: InputValue<Array<"returned_goods" |
    "order_adjustment" |
    "billing_error" |
    "goodwill" |
    "other">>;
  "external_reference_id"?: InputValue<string>;
  "query"?: InputValue<string>;
  "status"?: InputValue<Array<"draft" | "issued" | "void">>;
  "expand"?: InputValue<Array<"invoice">>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `invoice_id` | Optional | string |  |
| `customer_id` | Optional | string |  |
| `reason` | Optional | Array of string | minItems: `1`. Items values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |
| `external_reference_id` | Optional | string | minLength: `1`. maxLength: `255`. |
| `query` | Optional | string |  |
| `status` | Optional | Array of string | minItems: `1`. Items values: `"draft"`, `"issued"`, `"void"`. |
| `expand` | Optional | Array of string | Items values: `"invoice"`. |

#### Response

Returned payload: [CreditNoteListResponse](../models/CreditNoteListResponse.md#creditnotelistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

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
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "idempotency_key"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |

#### Response

Returned payload: [CreditNoteAllocationListResponse](../models/CreditNoteAllocationListResponse.md#creditnoteallocationlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listAllocationsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listAllocationsItems`, `listAllocationsPages`, `listAllocationsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.creditNotes.listAllocations("example", {}, {  });
```

[Complete runnable example](../examples/creditNotes-listAllocations.mjs)

### creditNotes.listRefunds

Lists linked refunds, including failed attempts, newest first. Filter by idempotency_key to recover a refund after a lost response. Default order: time each refund was applied to the credit note (descending), then refund_id descending.

`GET /v1/credit-notes/{credit_note_id}/refunds`

Signature:

```typescript
listRefunds(credit_note_id: InputValue<string>,
 params?: {
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>;
  "idempotency_key"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

Field definitions: [shared fields](#request-fields-8).

#### Response

Returned payload: [RefundListResponse](../models/RefundListResponse.md#refundlistresponse).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 410 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listRefundsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listRefundsItems`, `listRefundsPages`, `listRefundsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.creditNotes.listRefunds("example", {}, {  });
```

[Complete runnable example](../examples/creditNotes-listRefunds.mjs)

### creditNotes.reverseAllocation

Reverses an allocation and reopens that much of the invoice balance. The original allocation keeps its row and gains reversed_at, so the history stays append-only. Reversing the allocation that closed an invoice moves it from credited back to open or partially_paid.

`POST /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}/reverse`

Signature:

```typescript
reverseAllocation(credit_note_id: InputValue<string>,
 credit_note_allocation_id: InputValue<string>,
 params?: (InputValue<ResourceVersionRequestInput> |
  {
  "expected_version"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `credit_note_allocation_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice. |

#### Response

Returned payload: [CreditNoteAllocationResult](../models/CreditNoteAllocationResult.md#creditnoteallocationresult).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `reverseAllocationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.reverseAllocation("example", "example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-reverseAllocation.mjs)

### creditNotes.update

Updates draft credit note fields and corrections atomically. Omitted fields are unchanged, a null memo clears it, and line_items requires expected_version. Replacing lines recalculates their amounts from current remaining creditable pools. Scalar edits preserve stored line values. Issued and void credit notes are frozen.

`PATCH /v1/credit-notes/{credit_note_id}`

Signature:

```typescript
update(credit_note_id: InputValue<string>,
 params: (InputValue<UpdateCreditNoteRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateCreditNoteRequestInput](../models/UpdateCreditNoteRequest.md#updatecreditnoterequest) | The request body for: Update credit note. |

Body model: [UpdateCreditNoteRequestInput](../models/UpdateCreditNoteRequest.md#updatecreditnoterequest).

#### creditNotes.update body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Credit note version last read. Required when line_items is present. Required when any of these fields is present: line_items. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: `1`. maxLength: `255`. |
| `line_items` | Optional | Array of [CreditNoteLineItemRequestInput](../models/CreditNoteLineItemRequest.md#creditnotelineitemrequest) | Full replacement of the draft's owned line collection; requires expected_version. Recalculates corrections from current remaining creditable pools. After CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed, replace the existing corrections using the credit note's current version, review the new amounts, and issue again. Scalar memo or reason changes do not reprice lines. |
| `memo` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `4096`. |
| `reason` | Optional | string | Why the invoice is being corrected: returned_goods, order_adjustment, billing_error, goodwill, or other. Cannot be null; omit it to keep the current reason. Values: `"returned_goods"`, `"order_adjustment"`, `"billing_error"`, `"goodwill"`, `"other"`. |

#### Response

Returned payload: [CreditNote](../models/CreditNote.md#creditnote).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.update("example", {}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-update.mjs)

### creditNotes.voidResource

Voids an issued credit note. Every allocation has to be reversed first. Void is terminal, and an invoice cannot be voided while an issued credit note stands against it.

`POST /v1/credit-notes/{credit_note_id}/void`

Signature:

```typescript
voidResource(credit_note_id: InputValue<string>,
 params?: (InputValue<ResourceVersionRequestInput> |
  {
  "expected_version"?: never
}) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice. |

#### Response

Returned payload: [CreditNote](../models/CreditNote.md#creditnote).

#### Errors

| Status | Error class | Kind |
| --- | --- | --- |
| 400 | ValidationError | validation |
| 401 | AuthenticationError | authentication |
| 403 | AuthenticationError | authentication |
| 404 | NotFoundError | not_found |
| 409 | ConflictError | conflict |
| 410 | ApiError | api |
| 413 | ApiError | api |
| 415 | ApiError | api |
| 429 | RateLimitError | rate_limit |
| 500 | ServerError | server |
| 503 | ServerError | server |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `voidResourceWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.creditNotes.voidResource("example", undefined, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/creditNotes-voidResource.mjs)

