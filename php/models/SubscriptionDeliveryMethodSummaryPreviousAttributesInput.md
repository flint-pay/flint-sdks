[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionDeliveryMethodSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `description` | Optional | string or null | Buyer-facing description of the delivery method. Omitted when the method has none. `description`: [declared alternatives](../models/SubscriptionDeliveryMethodSummaryPreviousAttributesInput.md#subscriptiondeliverymethodsummarypreviousattributesinputdescription). |
| `name` | Optional | string or null | Buyer-facing name of the delivery method. `name`: [declared alternatives](../models/SubscriptionDeliveryMethodSummaryPreviousAttributesInput.md#subscriptiondeliverymethodsummarypreviousattributesinputname). |
| `price_type` | Optional | string or null | Whether the method charges a flat price or Flint works the price out for each delivery. Values: `"fixed"`, `"quoted"`. `price_type`: [declared alternatives](../models/SubscriptionDeliveryMethodSummaryPreviousAttributesInput.md#subscriptiondeliverymethodsummarypreviousattributesinputprice_type). |
| `type` | Optional | string or null | How the method delivers the items. Values: `"shipment"`, `"local_delivery"`. `type`: [declared alternatives](../models/SubscriptionDeliveryMethodSummaryPreviousAttributesInput.md#subscriptiondeliverymethodsummarypreviousattributesinputtype). |

### SubscriptionDeliveryMethodSummaryPreviousAttributesInput.description

### SubscriptionDeliveryMethodSummaryPreviousAttributesInput.description variant 1

anyOf variant 1: Buyer-facing description of the delivery method. Omitted when the method has none..

- Value shape: string. Buyer-facing description of the delivery method. Omitted when the method has none. 

### SubscriptionDeliveryMethodSummaryPreviousAttributesInput.description variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing description of the delivery method. Omitted when the method has none. 

### SubscriptionDeliveryMethodSummaryPreviousAttributesInput.name

### SubscriptionDeliveryMethodSummaryPreviousAttributesInput.name variant 1

anyOf variant 1: Buyer-facing name of the delivery method..

- Value shape: string. Buyer-facing name of the delivery method. 

### SubscriptionDeliveryMethodSummaryPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Buyer-facing name of the delivery method. 

### SubscriptionDeliveryMethodSummaryPreviousAttributesInput.price_type

### SubscriptionDeliveryMethodSummaryPreviousAttributesInput.price_type variant 1

anyOf variant 1: Whether the method charges a flat price or Flint works the price out for each delivery..

- Value shape: string. Whether the method charges a flat price or Flint works the price out for each delivery. Values: `"fixed"`, `"quoted"`.

### SubscriptionDeliveryMethodSummaryPreviousAttributesInput.price_type variant 2

anyOf variant 2.

- Value shape: null. Whether the method charges a flat price or Flint works the price out for each delivery. 

### SubscriptionDeliveryMethodSummaryPreviousAttributesInput.type

### SubscriptionDeliveryMethodSummaryPreviousAttributesInput.type variant 1

anyOf variant 1: How the method delivers the items..

- Value shape: string. How the method delivers the items. Values: `"shipment"`, `"local_delivery"`.

### SubscriptionDeliveryMethodSummaryPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. How the method delivers the items. 

