[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# giftCardFundingDispositions

### giftCardFundingDispositions.create

Accepts a confirmed funding dispute loss and honors all gift card value funded by that payment, including value restored to replacement cards. Records the dispute amount, original gift card consideration, honored value and preserved reservations. Clears only this dispute restriction; balances, unrelated restrictions and unresolved payment reservations remain intact. Requires gift card adjustment authority and a durable Idempotency-Key.

`POST /v1/gift-card-funding-dispositions`

Signature:

```typescript
create(params: (InputValue<CreateGiftCardFundingDispositionRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options: _SdkRequiredIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [CreateGiftCardFundingDispositionRequestInput](../models/CreateGiftCardFundingDispositionRequest.md#creategiftcardfundingdispositionrequest) | The request body for: Create a gift card funding disposition. |

Body model: [CreateGiftCardFundingDispositionRequestInput](../models/CreateGiftCardFundingDispositionRequest.md#creategiftcardfundingdispositionrequest).

#### giftCardFundingDispositions.create body fields

Field definitions: [shared fields](../models/CreateGiftCardFundingDispositionRequest.md#creategiftcardfundingdispositionrequest).

#### Response

Returned payload: [GiftCardFundingDisposition](../models/GiftCardFundingDisposition.md#giftcardfundingdisposition).

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

Idempotent: key required — [policy 2](../RUNTIME.md#idempotency).

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

Signature: `get(gift_card_funding_disposition_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_funding_disposition_id` | Required | string |  |

#### Response

Returned payload: [GiftCardFundingDisposition](../models/GiftCardFundingDisposition.md#giftcardfundingdisposition).

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

Complete body and metadata: `getWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.giftCardFundingDispositions.get("example", {}, {  });
```

[Complete runnable example](../examples/giftCardFundingDispositions-get.mjs)

### giftCardFundingDispositions.list

Lists funding dispositions in descending ID order within the authenticated merchant and environment. Filter by idempotency_key to recover a committed command. Default order: gift_card_funding_disposition_id descending; this key uniquely orders the results.

`GET /v1/gift-card-funding-dispositions`

Signature:

```typescript
list(params?: {
  "created_after"?: InputValue<string | globalThis.Date>;
  "created_before"?: InputValue<string | globalThis.Date>;
  "dispute_id"?: InputValue<string>;
  "idempotency_key"?: InputValue<string>;
  "page_size"?: InputValue<number>;
  "page_token"?: InputValue<string>
},
 options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_after` | Optional | string | Format: `date-time`. |
| `created_before` | Optional | string | Format: `date-time`. |
| `dispute_id` | Optional | string | maxLength: `255`. |
| `idempotency_key` | Optional | string | minLength: `1`. maxLength: `255`. |
| `page_size` | Optional | integer | minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string |  |

#### Response

Returned payload: [GiftCardFundingDispositionListResponse](../models/GiftCardFundingDispositionListResponse.md#giftcardfundingdispositionlistresponse).

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

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: `listWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`, `listPagesWithResponse`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.giftCardFundingDispositions.list({}, {  });
```

[Complete runnable example](../examples/giftCardFundingDispositions-list.mjs)

