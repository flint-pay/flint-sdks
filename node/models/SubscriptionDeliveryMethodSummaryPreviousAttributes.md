[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMethodSummaryPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null | Buyer-facing description of the delivery method. Omitted when the method has none. `description`: [declared alternatives](../models/SubscriptionDeliveryMethodSummaryPreviousAttributes.md#subscriptiondeliverymethodsummarypreviousattributesdescription). |
| `name` | Optional | string or null | Buyer-facing name of the delivery method. `name`: [declared alternatives](../models/SubscriptionDeliveryMethodSummaryPreviousAttributes.md#subscriptiondeliverymethodsummarypreviousattributesname). |
| `price_type` | Optional | string or null | Whether the method charges a flat price or Flint works the price out for each delivery. Values: `"fixed"`, `"quoted"`. `price_type`: [declared alternatives](../models/SubscriptionDeliveryMethodSummaryPreviousAttributes.md#subscriptiondeliverymethodsummarypreviousattributesprice_type). |
| `type` | Optional | string or null | How the method delivers the items. Values: `"shipment"`, `"local_delivery"`. `type`: [declared alternatives](../models/SubscriptionDeliveryMethodSummaryPreviousAttributes.md#subscriptiondeliverymethodsummarypreviousattributestype). |

### SubscriptionDeliveryMethodSummaryPreviousAttributes.description

### SubscriptionDeliveryMethodSummaryPreviousAttributes.description variant 1

anyOf variant 1: Buyer-facing description of the delivery method. Omitted when the method has none..

- Value shape: string. Buyer-facing description of the delivery method. Omitted when the method has none. 

### SubscriptionDeliveryMethodSummaryPreviousAttributes.description variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing description of the delivery method. Omitted when the method has none. 

### SubscriptionDeliveryMethodSummaryPreviousAttributes.name

### SubscriptionDeliveryMethodSummaryPreviousAttributes.name variant 1

anyOf variant 1: Buyer-facing name of the delivery method..

- Value shape: string. Buyer-facing name of the delivery method. 

### SubscriptionDeliveryMethodSummaryPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing name of the delivery method. 

### SubscriptionDeliveryMethodSummaryPreviousAttributes.price_type

### SubscriptionDeliveryMethodSummaryPreviousAttributes.price_type variant 1

anyOf variant 1: Whether the method charges a flat price or Flint works the price out for each delivery..

- Value shape: string. Whether the method charges a flat price or Flint works the price out for each delivery. Values: `"fixed"`, `"quoted"`.

### SubscriptionDeliveryMethodSummaryPreviousAttributes.price_type variant 2

anyOf variant 2.

- Value shape: null. Whether the method charges a flat price or Flint works the price out for each delivery. 

### SubscriptionDeliveryMethodSummaryPreviousAttributes.type

### SubscriptionDeliveryMethodSummaryPreviousAttributes.type variant 1

anyOf variant 1: How the method delivers the items..

- Value shape: string. How the method delivers the items. Values: `"shipment"`, `"local_delivery"`.

### SubscriptionDeliveryMethodSummaryPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. How the method delivers the items. 

