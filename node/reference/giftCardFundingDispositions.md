[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardFundingDispositions

### giftCardFundingDispositions.create

Accepts a confirmed funding dispute loss and honors all gift card value funded by that payment, including value restored to replacement cards. Records the dispute amount, original gift card consideration, honored value and preserved reservations. Clears only this dispute restriction; balances, unrelated restrictions and unresolved payment reservations remain intact. Requires gift card adjustment authority and a durable Idempotency-Key.

`POST /v1/gift-card-funding-dispositions`

Signature: `create(params: GiftCardFundingDispositionsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateGiftCardFundingDispositionRequestInput](../models/CreateGiftCardFundingDispositionRequest.md#creategiftcardfundingdispositionrequest) | The request body for: Create a gift card funding disposition. |

Body model: [CreateGiftCardFundingDispositionRequestInput](../models/CreateGiftCardFundingDispositionRequest.md#creategiftcardfundingdispositionrequest).

#### giftCardFundingDispositions.create body fields

Field definitions: [shared fields](../models/CreateGiftCardFundingDispositionRequest.md#creategiftcardfundingdispositionrequest).

#### Response

Returned payload: [GiftCardFundingDisposition](../models/GiftCardFundingDisposition.md#giftcardfundingdisposition).

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

const result = await client.giftCardFundingDispositions.create({dispute_id: "du_00000000000000000000000000", reason_message: "example"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/giftCardFundingDispositions-create.mjs)

### giftCardFundingDispositions.get

Retrieves a committed funding disposition within the authenticated merchant and environment.

`GET /v1/gift-card-funding-dispositions/{gift_card_funding_disposition_id}`

Signature:

```typescript
get(gift_card_funding_disposition_id: InputValue<string>,
 params?: GiftCardFundingDispositionsGetParams,
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_funding_disposition_id` | Required | string | Flint resource ID. |

#### Response

Returned payload: [GiftCardFundingDisposition](../models/GiftCardFundingDisposition.md#giftcardfundingdisposition).

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

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.giftCardFundingDispositions.get("gfd_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/giftCardFundingDispositions-get.mjs)

### giftCardFundingDispositions.list

Lists funding dispositions in descending ID order within the authenticated merchant and environment. Filter by idempotency_key to recover a committed command. Default order: gift_card_funding_disposition_id descending; this key uniquely orders the results.

`GET /v1/gift-card-funding-dispositions`

Signature: `list(params?: GiftCardFundingDispositionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `dispute_id` | Optional | string | Exact, case-sensitive filter. maxLength: `255`. |
| `idempotency_key` | Optional | string | Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |

#### Response

Returned payload: [GiftCardFundingDispositionListResponse](../models/GiftCardFundingDispositionListResponse.md#giftcardfundingdispositionlistresponse).

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
const result = await client.giftCardFundingDispositions.list({}, {  });
```

[Complete runnable example](../examples/giftCardFundingDispositions-list.mjs)

