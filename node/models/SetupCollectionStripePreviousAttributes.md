[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SetupCollectionStripePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `account_id` | Optional | string or null | `account_id`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_collection-variant-1stripe-variant-1account_id), [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributessetup_collection-variant-1stripe-variant-1account_id). |
| `elements` | Optional | [PaymentCollectionStripeElementsPreviousAttributes](../models/PaymentCollectionStripeElementsPreviousAttributes.md#paymentcollectionstripeelementspreviousattributes) or null | Stripe Elements configuration for the available payment methods and amounts. |
| `publishable_key` | Optional | string or null | Publishable Stripe key for initializing the payment client. `publishable_key`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_collection-variant-1stripe-variant-1publishable_key). |
| `return_url` | Optional | string or null | URL the buyer returns to after a redirect payment step. `return_url`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_collection-variant-1stripe-variant-1return_url). |

### SetupCollectionStripePreviousAttributes variant 1

anyOf variant 1: Declared schema PaymentCollectionStripePreviousAttributes. .

- Constraints for `account_id`: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when the payment has splits: initialize Stripe.js with publishable_key alone and omit stripeAccount.

### SetupCollectionStripePreviousAttributes variant 2

anyOf variant 2: Declared schema SetupCollectionStripePreviousAttributes. .

- Constraints for `account_id`: Stripe connected account ID to pass as stripeAccount when initializing Stripe.js.

### SetupCollectionStripePreviousAttributes variant 1.account_id

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_collection variant 1.stripe variant 1.account_id](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_collection-variant-1stripe-variant-1account_id).

### SetupCollectionStripePreviousAttributes.publishable_key

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_collection variant 1.stripe variant 1.publishable_key](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_collection-variant-1stripe-variant-1publishable_key).

### SetupCollectionStripePreviousAttributes.return_url

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_collection variant 1.stripe variant 1.return_url](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_collection-variant-1stripe-variant-1return_url).

### SetupCollectionStripePreviousAttributes variant 2.account_id

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.setup_collection variant 1.stripe variant 1.account_id](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributessetup_collection-variant-1stripe-variant-1account_id).

