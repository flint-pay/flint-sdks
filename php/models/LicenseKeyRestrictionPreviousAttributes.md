[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyRestrictionPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the restriction took effect. `created_at`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributescreated_at). |
| `dispute_id` | Optional | string or null | The dispute that restricted the key. `dispute_id`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributesdispute_id). |
| `dispute_status` | Optional | string or null | Whether the dispute is open or lost. Values: `"open"`, `"lost"`. `dispute_status`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributesdispute_status). |
| `reason` | Optional | string or null | Reason for a merchant or subscription restriction. `reason`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributesreason). |
| `refund_id` | Optional | string or null | The refund that restricted the key. `refund_id`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributesrefund_id). |
| `subscription_id` | Optional | string or null | The subscription that restricted the key. `subscription_id`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributessubscription_id). |
| `type` | Optional | string or null | What caused the restriction. Values: `"merchant"`, `"refund"`, `"dispute"`, `"subscription"`, `"payment_reversal"`. `type`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributes.md#licensekeyrestrictionpreviousattributestype). |

### LicenseKeyRestrictionPreviousAttributes.created_at

### LicenseKeyRestrictionPreviousAttributes.created_at variant 1

anyOf variant 1: When the restriction took effect..

- Value shape: string. When the restriction took effect. When the restriction took effect. Format: `date-time`. 

### LicenseKeyRestrictionPreviousAttributes.created_at variant 2

anyOf variant 2.

- Value shape: null. When the restriction took effect. 

### LicenseKeyRestrictionPreviousAttributes.dispute_id

### LicenseKeyRestrictionPreviousAttributes.dispute_id variant 1

anyOf variant 1: The dispute that restricted the key..

- Value shape: string. The dispute that restricted the key. 

### LicenseKeyRestrictionPreviousAttributes.dispute_id variant 2

anyOf variant 2.

- Value shape: null. The dispute that restricted the key. 

### LicenseKeyRestrictionPreviousAttributes.dispute_status

### LicenseKeyRestrictionPreviousAttributes.dispute_status variant 1

anyOf variant 1: Whether the dispute is open or lost..

- Value shape: string. Whether the dispute is open or lost. Values: `"open"`, `"lost"`.

### LicenseKeyRestrictionPreviousAttributes.dispute_status variant 2

anyOf variant 2.

- Value shape: null. Whether the dispute is open or lost. 

### LicenseKeyRestrictionPreviousAttributes.reason

### LicenseKeyRestrictionPreviousAttributes.reason variant 1

anyOf variant 1: Reason for a merchant or subscription restriction..

- Value shape: string. Reason for a merchant or subscription restriction. 

### LicenseKeyRestrictionPreviousAttributes.reason variant 2

anyOf variant 2.

- Value shape: null. Reason for a merchant or subscription restriction. 

### LicenseKeyRestrictionPreviousAttributes.refund_id

### LicenseKeyRestrictionPreviousAttributes.refund_id variant 1

anyOf variant 1: The refund that restricted the key..

- Value shape: string. The refund that restricted the key. 

### LicenseKeyRestrictionPreviousAttributes.refund_id variant 2

anyOf variant 2.

- Value shape: null. The refund that restricted the key. 

### LicenseKeyRestrictionPreviousAttributes.subscription_id

### LicenseKeyRestrictionPreviousAttributes.subscription_id variant 1

anyOf variant 1: The subscription that restricted the key..

- Value shape: string. The subscription that restricted the key. 

### LicenseKeyRestrictionPreviousAttributes.subscription_id variant 2

anyOf variant 2.

- Value shape: null. The subscription that restricted the key. 

### LicenseKeyRestrictionPreviousAttributes.type

### LicenseKeyRestrictionPreviousAttributes.type variant 1

anyOf variant 1: What caused the restriction..

- Value shape: string. What caused the restriction. Values: `"merchant"`, `"refund"`, `"dispute"`, `"subscription"`, `"payment_reversal"`.

### LicenseKeyRestrictionPreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. What caused the restriction. 

