[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkLineItemModifiers

The modifier selections for one payment link line item when resolving a payment link.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifiers` | Optional | Array of [ResolvePaymentLinkLineItemModifierRequest](../models/ResolvePaymentLinkLineItemModifierRequest.md#resolvepaymentlinklineitemmodifierrequest) | The buyer's modifier selections for the line item. Required, and `null` is not accepted. Send an empty array when the buyer chose none. |

