[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# returnPreviews

### returnPreviews.create

Preview return eligibility or resolution amounts without creating a Return or reserving quantity. Set mode to eligibility or resolution and send the matching input object.

`POST /v1/return-previews`

Signature: `create(params: ReturnPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

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

#### returnPreviews.create with `mode: "eligibility"`

The `eligibility` variant of `CreateReturnPreviewRequest`.

Body model: [CreateReturnPreviewRequestEligibilityInput](../models/CreateReturnPreviewRequestEligibility.md#createreturnpreviewrequesteligibility).

#### returnPreviews.create with `mode: "resolution"`

The `resolution` variant of `CreateReturnPreviewRequest`.

Body model: [CreateReturnPreviewRequestResolutionInput](../models/CreateReturnPreviewRequestResolution.md#createreturnpreviewrequestresolution).

#### Response

Returned payload: [CreateReturnPreviewData](../models/CreateReturnPreviewData.md#createreturnpreviewdata).

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

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.returnPreviews.create({mode: "eligibility", eligibility: {order_id: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV", selection: {selection_type: "all_remaining_fulfilled"}}}, {  });
```

[Complete runnable example](../examples/returnPreviews-create.mjs)

