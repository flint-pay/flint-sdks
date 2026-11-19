[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionGiftRecipientPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | string or null | The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. `email`: [declared alternatives](../models/SubscriptionGiftRecipientPreviousAttributesInput.md#subscriptiongiftrecipientpreviousattributesinputemail). |
| `message` | Optional | string or null | A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. `message`: [declared alternatives](../models/SubscriptionGiftRecipientPreviousAttributesInput.md#subscriptiongiftrecipientpreviousattributesinputmessage). |
| `name` | Optional | string or null | The recipient's name, shown in their gift emails. Null when no name was given. `name`: [declared alternatives](../models/SubscriptionGiftRecipientPreviousAttributesInput.md#subscriptiongiftrecipientpreviousattributesinputname). |
| `sender_name` | Optional | string or null | Name to show as the sender in gift emails, when provided. `sender_name`: [declared alternatives](../models/SubscriptionGiftRecipientPreviousAttributesInput.md#subscriptiongiftrecipientpreviousattributesinputsender_name). |

### SubscriptionGiftRecipientPreviousAttributesInput.email

### SubscriptionGiftRecipientPreviousAttributesInput.email variant 1

anyOf variant 1: The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email..

- Value shape: string. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. Format: `email`. Example: `"buyer@example.com"`. 

### SubscriptionGiftRecipientPreviousAttributesInput.email variant 2

anyOf variant 2.

- Value shape: null. The recipient's email address. Flint sends the recipient's gift and final notices here, and shipment notices when delivery.recipient has no email. 

### SubscriptionGiftRecipientPreviousAttributesInput.message

### SubscriptionGiftRecipientPreviousAttributesInput.message variant 1

anyOf variant 1: A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note..

- Value shape: string. A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. 

### SubscriptionGiftRecipientPreviousAttributesInput.message variant 2

anyOf variant 2.

- Value shape: null. A note from the purchaser, shown in the recipient's gift notice. Up to 200 characters. Null when there is no note. 

### SubscriptionGiftRecipientPreviousAttributesInput.name

### SubscriptionGiftRecipientPreviousAttributesInput.name variant 1

anyOf variant 1: The recipient's name, shown in their gift emails. Null when no name was given..

- Value shape: string. The recipient's name, shown in their gift emails. Null when no name was given. 

### SubscriptionGiftRecipientPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. The recipient's name, shown in their gift emails. Null when no name was given. 

### SubscriptionGiftRecipientPreviousAttributesInput.sender_name

### SubscriptionGiftRecipientPreviousAttributesInput.sender_name variant 1

anyOf variant 1: Name to show as the sender in gift emails, when provided..

- Value shape: string. Name to show as the sender in gift emails, when provided. Name to show as the sender in gift emails, when provided. maxLength: `255`. 

### SubscriptionGiftRecipientPreviousAttributesInput.sender_name variant 2

anyOf variant 2.

- Value shape: null. Name to show as the sender in gift emails, when provided. 

