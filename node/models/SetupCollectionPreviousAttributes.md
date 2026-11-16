[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SetupCollectionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `stripe` | Optional | [SetupCollectionStripePreviousAttributes](../models/SetupCollectionStripePreviousAttributes.md#setupcollectionstripepreviousattributes) or null | `stripe`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_collection-variant-1stripe), [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributessetup_collection-variant-1stripe). |

### SetupCollectionPreviousAttributes variant 1

anyOf variant 1: Declared schema PaymentCollectionPreviousAttributes. .

- Constraints for `stripe`: Client configuration for collecting the payment through Stripe.

### SetupCollectionPreviousAttributes variant 2

anyOf variant 2: Declared schema SetupCollectionPreviousAttributes. .

- Constraints for `stripe`: Client configuration for saving a payment method through Stripe on the merchant's connected account.

### SetupCollectionPreviousAttributes variant 1.stripe

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.payment_collection variant 1.stripe](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayment_collection-variant-1stripe).

### SetupCollectionPreviousAttributes variant 2.stripe

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.setup_collection variant 1.stripe](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributessetup_collection-variant-1stripe).

