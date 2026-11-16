[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionGiftRecipientPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string or null | The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. `email`: [declared alternatives](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributesemail). |
| `message` | Optional | string or null | A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. `message`: [declared alternatives](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributesmessage). |
| `name` | Optional | string or null | The recipient's name, shown in their gift emails. Null when no name was given. `name`: [declared alternatives](../models/SubscriptionGiftRecipientPreviousAttributes.md#subscriptiongiftrecipientpreviousattributesname). |

### SubscriptionGiftRecipientPreviousAttributes.email

### SubscriptionGiftRecipientPreviousAttributes.email variant 1

anyOf variant 1: The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email..

- Value shape: string. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. Format: `email`. Example: `"buyer@example.com"`. 

### SubscriptionGiftRecipientPreviousAttributes.email variant 2

anyOf variant 2.

- Value shape: null. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. 

### SubscriptionGiftRecipientPreviousAttributes.message

### SubscriptionGiftRecipientPreviousAttributes.message variant 1

anyOf variant 1: A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note..

- Value shape: string. A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. 

### SubscriptionGiftRecipientPreviousAttributes.message variant 2

anyOf variant 2.

- Value shape: null. A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. 

### SubscriptionGiftRecipientPreviousAttributes.name

### SubscriptionGiftRecipientPreviousAttributes.name variant 1

anyOf variant 1: The recipient's name, shown in their gift emails. Null when no name was given..

- Value shape: string. The recipient's name, shown in their gift emails. Null when no name was given. 

### SubscriptionGiftRecipientPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. The recipient's name, shown in their gift emails. Null when no name was given. 

