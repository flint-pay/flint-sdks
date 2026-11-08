[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkRequest

The request body for: Resolve payment link.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attendee_names` | Optional | Array of string | One attendee name per ticket on an event payment link, in line_items order: each tier's tickets in turn, skipping tiers with quantity 0. The count must equal the tickets being bought. Required when event_config.collect_attendee_names is true, and optional otherwise. Flint trims each name, which must then be 1 to 200 characters. Duplicate names are allowed. Flint copies the names onto the tickets when the order is paid, as each ticket's attendee_name, and never stores them in metadata. minItems: `1`. Items: minLength: `1`. |
| `client_reference` | Optional | string | Your reference for the buyer or cart this checkout is for, such as your user ID. It cannot contain the NUL character. Copied to the checkout session and order, preserving all characters exactly. Anyone with the link can change it, so do not use it as proof of who paid. minLength: `1`. maxLength: `255`. |
| `custom_field_values` | Optional | Map of string | Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as strings, and a required checkbox must be true. Flint records the answers on the order and checkout session in `custom_field_answers`; omitted and empty answers to optional fields are not recorded. Map values: minLength: `1`. |
| `modifiers` | Optional | Map of [ResolvePaymentLinkLineItemModifiers](../models/ResolvePaymentLinkLineItemModifiers.md#resolvepaymentlinklineitemmodifiers) | Modifier choices keyed by line item key, for catalog items. |
| `prefill` | Optional | [SendOrderReceiptRequest](../models/SendOrderReceiptRequest.md#sendorderreceiptrequest) | Email to fill in on the next checkout step. The buyer can change it; it never links an existing customer. Buyer-editable email prefill for payment-link checkout. It never identifies a customer. `prefill`: [field definitions](../models/ResolvePaymentLinkRequest.md#resolvepaymentlinkrequestprefill). |
| `quantity_overrides` | Optional | Map of integer | Quantities keyed by line item key (line_items[].key), each within that item's min_quantity and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are not supported. Map values: Whole-number quantity value; fractional quantities are not supported. Format: `int32`. |
| `resolution_context` | Required | string | Private resolution context returned by GET /v1/payment-links/{payment_link_id}/public. Send it unchanged when resolving the same link; read the link again after checkout_start_due_at. minLength: `1`. |
| `unit_price_overrides` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | Prices keyed by line item key, for items with allow_unit_price_adjustment, between min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed donation. `unit_price_overrides{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `variant_selections` | Optional | Map of string | Variant IDs keyed by line item key (line_items[].key), for lines with variant_ids. Each selection must be offered by that line and priced in its current currency. Omit a key to use default_variant_id; a line without a default requires a selection. Null is not accepted. Map values: minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

### ResolvePaymentLinkRequest.prefill

Email to fill in on the next checkout step. The buyer can change it; it never links an existing customer. Buyer-editable email prefill for payment-link checkout. It never identifies a customer.

Field definitions: [shared fields](PaymentLinkResolvePrefillRequestInput.md#paymentlinkresolveprefillrequestinput).

### ResolvePaymentLinkRequest.unit_price_overrides{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

