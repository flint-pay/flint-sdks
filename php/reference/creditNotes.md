[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# creditNotes

### creditNotes.create

Creates a draft credit note against an invoice that has been issued and not voided. Include line_items for initial corrections or omit them for an empty draft. The draft uses frozen invoice economics and the remaining pools shared by issued, non-void notes. Drafts reserve no credit. It receives a credit note number when issued.

`POST /v1/credit-notes`

Signature: `create(array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCreditNoteRequestInput](../models/CreateCreditNoteRequestInput.md#createcreditnoterequestinput) | The request body for: Create credit note. |

Body model: [CreateCreditNoteRequestInput](../models/CreateCreditNoteRequestInput.md#createcreditnoterequestinput).

#### creditNotes.create body fields

Field definitions: [shared fields](../models/CreateCreditNoteRequestInput.md#createcreditnoterequestinput). Models: [CreditNoteLineItemRequestInput](../models/CreditNoteLineItemRequestInput.md#creditnotelineitemrequestinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->creditNotes->create([
  'invoice_id' => 'example',
  'reason' => 'returned_goods',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/creditNotes-create.php)

### creditNotes.createAllocation

Applies credit from an issued credit note to its invoice, reducing outstanding_money. The amount cannot exceed the credit note's available_money or the invoice's outstanding balance. Closing the balance with credit sets the invoice to paid when positive net collection remains, or credited when there is no positive net collection. Returns the allocation, the credit note, and the recomputed invoice together. An Idempotency-Key is required and becomes the allocation's identity.

`POST /v1/credit-notes/{credit_note_id}/allocations`

Signature: `createAllocation(string|Model $credit_note_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCreditNoteAllocationRequestInput](../models/CreateCreditNoteAllocationRequestInput.md#createcreditnoteallocationrequestinput) | The request body for: Allocate credit note. |

Body model: [CreateCreditNoteAllocationRequestInput](../models/CreateCreditNoteAllocationRequestInput.md#createcreditnoteallocationrequestinput).

#### creditNotes.createAllocation body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Credit to apply, no more than the credit note's available_money or the invoice's outstanding balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createAllocationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->creditNotes->createAllocation('example', [
  'amount_money' => (object) [
    'amount' => '100',
    'currency' => 'USD',
  ],
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/creditNotes-createAllocation.php)

### creditNotes.createRefund

Creates a refund against an issued credit note on a paid invoice. Omit amount_money to refund all available credit. Refunds use the source invoice's original payments and do not reopen its balance. Idempotency-Key is required and retained for the lifetime of the refund command, scoped to merchant, environment, credit note, and key. Reusing it with another request conflicts. Recover a lost response by listing this note's refunds with idempotency_key. A failed remainder can be requested with a new key after its outcome is definitive.

`POST /v1/credit-notes/{credit_note_id}/refunds`

Signature: `createRefund(string|Model $credit_note_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateCreditNoteRefundRequestInput](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput) | The request body for: Refund credit note. |

Body model: [CreateCreditNoteRefundRequestInput](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput).

#### creditNotes.createRefund body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValueInput](../models/CreditNoteLineItemCorrectionQuantityAmountMoney.md#creditnotelineitemcorrectionquantityamountmoney) | Credit to refund. Omit to refund all available credit, which Flint resolves once when it accepts the request. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer string | Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Required | string | Why the refund is being made. Values: [12 declared values](../models/CreateCreditNoteRefundRequestInput.md#createcreditnoterefundrequestinput-reason-values). |
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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `createRefundWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->creditNotes->createRefund('example', [
  'reason' => 'duplicate',
], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/creditNotes-createRefund.php)

### creditNotes.get

Returns one credit note with its lines, total, and the credit still available to allocate.

`GET /v1/credit-notes/{credit_note_id}`

Signature: `get(string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->creditNotes->get('example', [], new RequestOptions());
```

[Complete runnable example](../examples/creditNotes-get.php)

### creditNotes.getAllocation

Returns one allocation. A non-null reversed_at means the credit was returned to the credit note and the invoice balance reopened.

`GET /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}`

Signature:

```text
getAllocation(string|
  Model $credit_note_id,
 string|
  Model $credit_note_allocation_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `getAllocationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->creditNotes->getAllocation('example', 'example', [], new RequestOptions());
```

[Complete runnable example](../examples/creditNotes-getAllocation.php)

### creditNotes.getPDF

Returns the credit note document as application/pdf rather than a JSON envelope. The PDF exists from issue onward and carries your branding, the credited lines, and the invoice it corrects.

`GET /v1/credit-notes/{credit_note_id}/pdf`

Signature: `getPDF(string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |

#### Response

Response body (inside Result.data): null.

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
$result = $client->creditNotes->getPDF('example', [], new RequestOptions());
```

[Complete runnable example](../examples/creditNotes-getPDF.php)

### creditNotes.issue

Issues a draft credit note and freezes its PDF. Provide allocation to issue and apply credit to its invoice atomically, or refund to initiate a linked refund on a paid invoice. Allocation and refund cannot be combined. Omit allocation.amount_money to apply the smaller of the credit available after issue and the invoice's outstanding balance. An explicit amount must be positive, use the invoice's currency, and fit both balances. The result includes credit_note_allocation when allocation is requested. Idempotency-Key is required and is retained for as long as the issue's effects exist, scoped to merchant, environment, credit note, and key. Reuse the key with the identical request to recover the original credit note and allocation. Recover an allocation after a lost response by listing this note's allocations with idempotency_key=issue:<issue key>. For refunds, list this note's refunds filtered by the original idempotency_key. A pending refund is accepted but has not completed. Without allocation or refund, issuance leaves the invoice balance unchanged. Issue validates the stored preview against current shared creditable pools. A fitting correction whose preview changed returns CONCURRENT_MODIFICATION with reason credit_note_creditable_value_changed: replace its existing corrections with PATCH using the current expected_version, review the recalculated amounts, and issue again. A correction exceeding the remaining pool returns CREDIT_NOTE_AMOUNT_EXCEEDS_CREDITABLE. Affected historical tax allocations return ACTION_NOT_ALLOWED with reason credit_note_tax_reconciliation_required.

`POST /v1/credit-notes/{credit_note_id}/issue`

Signature: `issue(string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [IssueCreditNoteRequestInput](../models/IssueCreditNoteRequestInput.md#issuecreditnoterequestinput) | The request body for: Issue credit note. |

Body model: [IssueCreditNoteRequestInput](../models/IssueCreditNoteRequestInput.md#issuecreditnoterequestinput).

#### creditNotes.issue body fields

Field definitions: [shared fields](../models/IssueCreditNoteRequestInput.md#issuecreditnoterequestinput). Models: [CreditNoteIssueAllocationRequestInput](../models/CreditNoteIssueAllocationRequestInput.md#creditnoteissueallocationrequestinput), [CreditNoteRefundRequestInput](../models/CreditNoteRefundRequestInput.md#creditnoterefundrequestinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `issueWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key required — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->creditNotes->issue('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/creditNotes-issue.php)

### creditNotes.list

Returns credit notes for the authenticated merchant, newest first. Filter by invoice_id to see everything credited against one invoice.

`GET /v1/credit-notes`

Signature: `list(array|Model|null $params = null, ?RequestOptions $options = null)`

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

Returned payload: [CreditNotesListResponse200](../models/CreditNotesListResponse200.md#creditnoteslistresponse200).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->creditNotes->list([], new RequestOptions());
```

[Complete runnable example](../examples/creditNotes-list.php)

### creditNotes.listAllocations

Returns every allocation made from a credit note, including reversed ones. Filter by idempotency_key to find the allocation a given request produced.

`GET /v1/credit-notes/{credit_note_id}/allocations`

Signature: `listAllocations(string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |

#### Response

Returned payload: [CreditNotesListAllocationsResponse200](../models/CreditNotesListAllocationsResponse200.md#creditnoteslistallocationsresponse200).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listAllocationsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listAllocationsItems`, `listAllocationsPages`, `listAllocationsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->creditNotes->listAllocations('example', [], new RequestOptions());
```

[Complete runnable example](../examples/creditNotes-listAllocations.php)

### creditNotes.listRefunds

Lists linked refunds, including failed attempts, newest first. Filter by idempotency_key to recover a refund after a lost response.

`GET /v1/credit-notes/{credit_note_id}/refunds`

Signature: `listRefunds(string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

Field definitions: [shared fields](#request-fields-8).

#### Response

Returned payload: [CreditNotesListRefundsResponse200](../models/CreditNotesListRefundsResponse200.md#creditnoteslistrefundsresponse200).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listRefundsWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listRefundsItems`, `listRefundsPages`, `listRefundsPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```php
$result = $client->creditNotes->listRefunds('example', [], new RequestOptions());
```

[Complete runnable example](../examples/creditNotes-listRefunds.php)

### creditNotes.reverseAllocation

Reverses an allocation and reopens that much of the invoice balance. The original allocation keeps its row and gains reversed_at, so the history stays append-only. Reversing the allocation that closed an invoice moves it from credited back to open or partially_paid.

`POST /v1/credit-notes/{credit_note_id}/allocations/{credit_note_allocation_id}/reverse`

Signature:

```text
reverseAllocation(string|
  Model $credit_note_id,
 string|
  Model $credit_note_allocation_id,
 array|
  Model|
  null $params = null,
 ?RequestOptions $options = null)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `credit_note_allocation_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Mark invoice uncollectible; Reactivate a subscription; Reactivate one of the current buyer's subscriptions; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice. |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `reverseAllocationWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->creditNotes->reverseAllocation('example', 'example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/creditNotes-reverseAllocation.php)

### creditNotes.update

Updates draft credit note fields and corrections atomically. Omitted fields are unchanged, a null memo clears it, and line_items requires expected_version. Replacing lines recalculates their amounts from current remaining creditable pools. Scalar edits preserve stored line values. Issued and void credit notes are frozen.

`PATCH /v1/credit-notes/{credit_note_id}`

Signature: `update(string|Model $credit_note_id, array|Model $params, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [UpdateCreditNoteRequestInput](../models/UpdateCreditNoteRequestInput.md#updatecreditnoterequestinput) | The request body for: Update credit note. |

Body model: [UpdateCreditNoteRequestInput](../models/UpdateCreditNoteRequestInput.md#updatecreditnoterequestinput).

#### creditNotes.update body fields

Field definitions: [shared fields](../models/UpdateCreditNoteRequestInput.md#updatecreditnoterequestinput). Models: [CreditNoteLineItemRequestInput](../models/CreditNoteLineItemRequestInput.md#creditnotelineitemrequestinput).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `updateWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->creditNotes->update('example', [], new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/creditNotes-update.php)

### creditNotes.voidResource

Voids an issued credit note. Every allocation has to be reversed first. Void is terminal, and an invoice cannot be voided while an issued credit note stands against it.

`POST /v1/credit-notes/{credit_note_id}/void`

Signature: `voidResource(string|Model $credit_note_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credit_note_id` | Required | string |  |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Optional | [ResourceVersionRequestInput](../models/ResourceVersionRequestInput.md#resourceversionrequestinput) | The request body for: Mark invoice uncollectible; Reactivate a subscription; Reactivate one of the current buyer's subscriptions; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice. |

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `voidResourceWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key optional — [policy 1](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```php
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->creditNotes->voidResource('example', null, new RequestOptions(idempotencyKey: $idempotencyKey));
```

[Complete runnable example](../examples/creditNotes-voidResource.php)

