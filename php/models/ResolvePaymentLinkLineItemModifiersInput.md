[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkLineItemModifiersInput

The modifier selections for one payment link line item when resolving a payment link.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifiers` | Optional | Array of [ResolvePaymentLinkLineItemModifierRequestInput](../models/ResolvePaymentLinkLineItemModifierRequestInput.md#resolvepaymentlinklineitemmodifierrequestinput) | The buyer's modifier selections for the line item. Required, and `null` is not accepted. Send an empty array when the buyer chose none. |

