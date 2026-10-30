[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# promotionCodes

### promotionCodes.list

Returns a paginated list of promotion codes in every status, ordered by created_at descending, then promotion_code_id descending. Archived codes are excluded unless status=archived. Default order: created_at descending, then promotion_code_id descending.

`GET /v1/promotion-codes`

Signature: `list(params?: PromotionCodesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `promotion_id` | Optional | string | Exact match on the parent promotion ID. |
| `code` | Optional | string | Exact match that ignores case and accents: CAFÉ matches cafe. This is the same rule that makes promotion codes unique. Codes preserve their original spelling. Leading and trailing whitespace are rejected, not trimmed. minLength: `1`. maxLength: `100`. |
| `status` | Optional | Array of string or string | Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"active"`, `"inactive"`, `"archived"`. Values: `"active"`, `"inactive"`, `"archived"`. |
| `availability` | Optional | Array of string or string | Filter by whether a code can be redeemed now or why it cannot. available matches available: true; every other value matches unavailable_reason. Values are ORed and ANDed with status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"available"`, `"inactive"`, `"expired"`, `"exhausted"`, `"promotion_unavailable"`. Values: `"available"`, `"inactive"`, `"expired"`, `"exhausted"`, `"promotion_unavailable"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `sort_by` | Optional | string | Field to sort by. Defaults to created_at; ties are broken by promotion_code_id. Default: `"created_at"`. Values: `"created_at"`, `"updated_at"`. |
| `sort_direction` | Optional | string | Sort direction. Defaults to desc. Default: `"desc"`. Values: `"asc"`, `"desc"`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `updated_after` | Optional | string | Inclusive lower bound on updated_at. Format: `date-time`. |
| `updated_before` | Optional | string | Exclusive upper bound on updated_at. Format: `date-time`. |
| `expand` | Optional | Array of string or string | Supported expansions: promotion. Expand each code's parent promotion. Expansion requires commerce.promotions.read. Limits: at most 10 unique expand paths per request. Pass expand=promotion. Items values: `"promotion"`. Values: `"promotion"`. |

#### Response

Returned payload: [PromotionCodeListResponse](../models/PromotionCodeListResponse.md#promotioncodelistresponse).

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
const result = await client.promotionCodes.list({}, {  });
```

[Complete runnable example](../examples/promotionCodes-list.mjs)

