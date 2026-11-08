[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# orderEditPreviews

### orderEditPreviews.create

Calculates a removal from a paid order without changing it. Only whole unassigned units are removable; bundle components must all be unassigned. Original line quantity and pricing stay unchanged. Each removed unit's refund includes its share of discounts and tax. Charges are refunded only when you list them in charge_refunds. Invoice-collected, subscription-owned, return-owned, and disputed orders, and orders with an unresolved inventory exception, cannot be edited. Refund a line without fulfillment quantities, such as a digital item or service, with POST /v1/refunds. This calculation holds no stock and sets aside no refundable amount.

`POST /v1/order-edit-previews`

Signature: `create(params: OrderEditPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `body` | Required | [OrderEditPreviewRequestInput](../models/OrderEditPreviewRequest.md#ordereditpreviewrequest) | Compute a paid-order removal without reserving quantities or refund capacity. |

Body model: [OrderEditPreviewRequestInput](../models/OrderEditPreviewRequest.md#ordereditpreviewrequest).

#### orderEditPreviews.create body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `charge_refunds` | Optional | Array of [RefundChargeInput](../models/RefundCharge.md#refundcharge) | Explicit charge refunds. Omitting amount_money refunds the charge's remaining refundable amount. Charges you don't list are unchanged. |
| `destinations` | Optional | [RefundDestinationsInput](../models/RefundDestinations.md#refunddestinations) | Where each original payment is refunded to, with the same defaults as a refund. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted. |
| `order_id` | Required | string | The paid order to edit. minLength: `1`. pattern: `^ord_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `reason` | Optional | string | Reason for removing the items. Values: [13 declared values](../models/CreateOrderEditRequest.md#createordereditrequest-reason-values). |
| `remove_line_items` | Required | Array of [OrderEditRemovalRequestInput](../models/OrderEditRemovalRequestInput.md#ordereditremovalrequestinput) | Original line units to remove. Each line can appear only once. minItems: `1`. maxItems: `100`. |

#### Response

Returned payload: [OrderEditPreview](../models/OrderEditPreview.md#ordereditpreview).

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

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.orderEditPreviews.create({order_id: "ord_01KEZF7C0054GQKJ142A8X367A", remove_line_items: [{order_line_item_id: "li_01KEZF7C008YPRCK7VDKTGWR31", quantity: 1}]}, {  });
```

[Complete runnable example](../examples/orderEditPreviews-create.mjs)

