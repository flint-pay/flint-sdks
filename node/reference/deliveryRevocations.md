[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# deliveryRevocations

### deliveryRevocations.get

Returns one permanent delivery revocation and its estimated impact at creation time.

`GET /v1/delivery-revocations/{delivery_revocation_id}`

Signature: `get(delivery_revocation_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_revocation_id` | Required | string |  |

#### Response

Returned payload: [DeliveryRevocation](../models/DeliveryRevocation.md#deliveryrevocation).

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
const result = await client.deliveryRevocations.get("example", {}, {  });
```

[Complete runnable example](../examples/deliveryRevocations-get.mjs)

### deliveryRevocations.revokeDeliveryDependency

Permanently fences one exact method, endpoint, signing key, revision, or Location geography version. Issued quotes are revoked immediately. Current selections are released the next time they are read. Stable method and callback-endpoint targets require expected_version so a concurrent publication cannot broaden the revocation.

`POST /v1/delivery-revocations`

Signature:

```typescript
revokeDeliveryDependency(params: (InputValue<RevokeDeliveryDependencyRequestInput>) & {
  "Idempotency-Key"?: InputValue<string>
},
 options?: RequestOptions<"merchant">)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Idempotency-Key` | Optional | string | maxLength: `255`. |
| `body` | Required | [RevokeDeliveryDependencyRequestInput](../models/RevokeDeliveryDependencyRequest.md#revokedeliverydependencyrequest) | The request body for: Revoke delivery dependency. |

Body model: [RevokeDeliveryDependencyRequestInput](../models/RevokeDeliveryDependencyRequest.md#revokedeliverydependencyrequest).

#### deliveryRevocations.revokeDeliveryDependency body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Required when target.target_type is delivery_method or delivery_rate_callback. The version of the stable resource whose current revision will be revoked. Omit it for exact revision, geography, and signing-key targets. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `merchant_note` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `reason` | Required | string | Values: `"unsafe_configuration"`, `"location_unavailable"`, `"credential_compromise"`, `"legal_requirement"`, `"other"`. |
| `target` | Required | [RevokeDeliveryDependencyTargetInput](../models/RevokeDeliveryDependencyTarget.md#revokedeliverydependencytarget) | A typed revocation target. Each target_type accepts only its resource-specific fields. |

#### Response

Returned payload: [DeliveryRevocation](../models/DeliveryRevocation.md#deliveryrevocation).

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

Complete body and metadata: `revokeDeliveryDependencyWithResponse`. See [response modes](../RUNTIME.md#responses-and-errors).

Idempotent: key automatic — [policy 2](../RUNTIME.md#idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.deliveryRevocations.revokeDeliveryDependency({reason: "unsafe_configuration", target: {target_type: "location_geography", location_id: "example", location_geography_version: "1"}}, { idempotencyKey: idempotencyKey });
```

[Complete runnable example](../examples/deliveryRevocations-revokeDeliveryDependency.mjs)

