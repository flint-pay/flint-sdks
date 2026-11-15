[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# rememberedBuyers

### rememberedBuyers.lookup

Resolves a remembered buyer token without sending a code. Only a checkout credential can call this route, including after the checkout ends. A merchant key is refused. The email is always masked. code_channel is sms or email when this checkout can request a recognition code for the buyer, and null otherwise; it does not consider code caps. An unknown, expired, ended, replaced, other business's, or other sandbox's token returns the same 404 RESOURCE_NOT_FOUND.

`POST /v1/remembered-buyers/lookup`

Signature: `lookup(params: RememberedBuyersLookupParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [RememberedBuyerTokenRequestInput](../models/RememberedBuyerTokenRequest.md#rememberedbuyertokenrequest) | An identity token held by this checkout's backend. A token identifies the buyer and never authorizes saved cards. |

#### Response

Returned payload: [RememberedBuyer](../models/RememberedBuyer.md#rememberedbuyer).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 413 | ApiError |
| 415 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.rememberedBuyers.lookup({remembered_buyer_token: "rbt_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}, {  });
```

[Complete runnable example](../examples/rememberedBuyers-lookup.mjs)

### rememberedBuyers.revoke

Ends the remembered identity named by the body token and returns its final masked resource with no supported actions. Only a checkout credential can call this route, including after the checkout ends. A repeat without an idempotency replay returns 404 RESOURCE_NOT_FOUND. Forgetting never changes saved cards.

`POST /v1/remembered-buyers/revoke`

Signature: `revoke(params: RememberedBuyersRevokeParams, options?: RequestOptions<"checkout">)`

#### Request fields

Field definitions: [shared fields](#request-fields). Models: [RememberedBuyerTokenRequestInput](../models/RememberedBuyerTokenRequest.md#rememberedbuyertokenrequest).

#### Response

Returned payload: [RememberedBuyer](../models/RememberedBuyer.md#rememberedbuyer).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
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

Authentication modes: `checkout`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.rememberedBuyers.revoke({remembered_buyer_token: "rbt_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/rememberedBuyers-revoke.mjs)

