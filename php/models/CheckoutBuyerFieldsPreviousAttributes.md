[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutBuyerFieldsPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `address_autocomplete_enabled` | Optional | boolean or null | Whether checkout offers address suggestions while the buyer enters an address. `address_autocomplete_enabled`: [declared alternatives](../models/CheckoutBuyerFieldsPreviousAttributes.md#checkoutbuyerfieldspreviousattributesaddress_autocomplete_enabled). |
| `require_billing_address` | Optional | boolean or null | Whether checkout requires the buyer's billing address. `require_billing_address`: [declared alternatives](../models/CheckoutBuyerFieldsPreviousAttributes.md#checkoutbuyerfieldspreviousattributesrequire_billing_address). |
| `require_email` | Optional | boolean or null | Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. `require_email`: [declared alternatives](../models/CheckoutBuyerFieldsPreviousAttributes.md#checkoutbuyerfieldspreviousattributesrequire_email). |
| `require_phone` | Optional | boolean or null | Whether checkout requires the buyer's phone number. `require_phone`: [declared alternatives](../models/CheckoutBuyerFieldsPreviousAttributes.md#checkoutbuyerfieldspreviousattributesrequire_phone). |

### CheckoutBuyerFieldsPreviousAttributes.address_autocomplete_enabled

### CheckoutBuyerFieldsPreviousAttributes.address_autocomplete_enabled variant 1

anyOf variant 1: Whether checkout offers address suggestions while the buyer enters an address..

- Value shape: boolean. Whether checkout offers address suggestions while the buyer enters an address. 

### CheckoutBuyerFieldsPreviousAttributes.address_autocomplete_enabled variant 2

anyOf variant 2.

- Value shape: null. Whether checkout offers address suggestions while the buyer enters an address. 

### CheckoutBuyerFieldsPreviousAttributes.require_billing_address

### CheckoutBuyerFieldsPreviousAttributes.require_billing_address variant 1

anyOf variant 1: Whether checkout requires the buyer's billing address..

- Value shape: boolean. Whether checkout requires the buyer's billing address. 

### CheckoutBuyerFieldsPreviousAttributes.require_billing_address variant 2

anyOf variant 2.

- Value shape: null. Whether checkout requires the buyer's billing address. 

### CheckoutBuyerFieldsPreviousAttributes.require_email

### CheckoutBuyerFieldsPreviousAttributes.require_email variant 1

anyOf variant 1: Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan..

- Value shape: boolean. Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. 

### CheckoutBuyerFieldsPreviousAttributes.require_email variant 2

anyOf variant 2.

- Value shape: null. Whether checkout requires the buyer's email address. Subscription plan sessions always require email, so only true is allowed with type: subscription_plan. 

### CheckoutBuyerFieldsPreviousAttributes.require_phone

### CheckoutBuyerFieldsPreviousAttributes.require_phone variant 1

anyOf variant 1: Whether checkout requires the buyer's phone number..

- Value shape: boolean. Whether checkout requires the buyer's phone number. 

### CheckoutBuyerFieldsPreviousAttributes.require_phone variant 2

anyOf variant 2.

- Value shape: null. Whether checkout requires the buyer's phone number. 

