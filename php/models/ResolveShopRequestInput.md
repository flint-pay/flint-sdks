[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolveShopRequestInput

A cart to turn into a hosted checkout.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_reference` | Optional | string | Buyer or cart reference copied to the order and checkout session. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [ResolveShopLineItemRequestInput](../models/ResolveShopLineItemRequestInput.md#resolveshoplineitemrequestinput) | Cart lines in order. Lines may repeat a listing. minItems: `1`. maxItems: `50`. |
| `prefill` | Optional | [PaymentLinkResolvePrefillRequestInput](../models/PaymentLinkResolvePrefillRequestInput.md#paymentlinkresolveprefillrequestinput) | Buyer-editable email prefill. Buyer-editable email prefill for payment-link checkout. It never identifies a customer. |
| `resolution_context` | Required | string | Private resolution context from the public shop read. minLength: `1`. |

