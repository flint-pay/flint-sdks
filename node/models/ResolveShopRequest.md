[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolveShopRequest

A cart to turn into a hosted checkout.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_reference` | Optional | string | Buyer or cart reference copied to the order and checkout session. minLength: `1`. maxLength: `255`. |
| `line_items` | Required | Array of [ResolveShopLineItemRequest](../models/ResolveShopLineItemRequest.md#resolveshoplineitemrequest) | Cart lines in order. Lines may repeat a listing. minItems: `1`. maxItems: `50`. |
| `prefill` | Optional | [SendOrderReceiptRequest](../models/SendOrderReceiptRequest.md#sendorderreceiptrequest) | Buyer-editable email prefill. Buyer-editable email prefill for payment-link checkout. It never identifies a customer. `prefill`: [field definitions](../models/ResolveShopRequest.md#resolveshoprequestprefill). |
| `resolution_context` | Required | string | Private resolution context from the public shop read. minLength: `1`. |

### ResolveShopRequest.prefill

Buyer-editable email prefill. Buyer-editable email prefill for payment-link checkout. It never identifies a customer.

Field definitions: [shared fields](PaymentLinkResolvePrefillRequestInput.md#paymentlinkresolveprefillrequestinput).

