[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnPreviews

### returnPreviews.create

Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/return-previews`

Signature: `create(params: (InputValue<CreateReturnPreviewRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CreateReturnPreviewRequestInput](../models/CreateReturnPreviewRequest.md#createreturnpreviewrequest) | The request body for: Create return preview. |

Body model: [CreateReturnPreviewRequestInput](../models/CreateReturnPreviewRequest.md#createreturnpreviewrequest).

#### returnPreviews.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequest) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"eligibility"`, `"resolution"`. |
| `resolution` | Optional | [CreateReturnResolutionPreviewRequestInput](../models/CreateReturnResolutionPreviewRequest.md#createreturnresolutionpreviewrequest) | A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction. |

#### returnPreviews.create body oneOf variant 1

The `eligibility` variant of `CreateReturnPreviewRequest`.

Body model: [CreateReturnPreviewRequestEligibilityInput](../models/CreateReturnPreviewRequestEligibility.md#createreturnpreviewrequesteligibility).

#### returnPreviews.create body oneOf variant 1 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Required | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequest) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"eligibility"`. |
| `resolution` | Optional | [CreateReturnResolutionPreviewRequestInput](../models/CreateReturnResolutionPreviewRequest.md#createreturnresolutionpreviewrequest) | A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction. |

#### returnPreviews.create body oneOf variant 2

The `resolution` variant of `CreateReturnPreviewRequest`.

Body model: [CreateReturnPreviewRequestResolutionInput](../models/CreateReturnPreviewRequestResolution.md#createreturnpreviewrequestresolution).

#### returnPreviews.create body oneOf variant 2 fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `eligibility` | Optional | [CreateReturnEligibilityPreviewRequestInput](../models/CreateReturnEligibilityPreviewRequest.md#createreturneligibilitypreviewrequest) | A request to preview which items of an order can be returned, given an order and a selection. |
| `mode` | Required | string | Values: `"resolution"`. |
| `resolution` | Required | [CreateReturnResolutionPreviewRequestInput](../models/CreateReturnResolutionPreviewRequest.md#createreturnresolutionpreviewrequest) | A request to preview the amounts of a return resolution for a return, selected by `resolution_type`: refund, exchange, replacement, no monetary action, or correction. |

#### Response

Returned payload: [CreateReturnPreviewData](../models/CreateReturnPreviewData.md#createreturnpreviewdata).

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

Authentication modes: `merchant`, `merchantKey`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.returnPreviews.create({mode: "eligibility", eligibility: {order_id: "example", selection: {selection_type: "all_remaining_fulfilled"}}}, {  });
```

[Complete runnable example](../examples/returnPreviews-create.mjs)

