[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## LicenseKeyRestrictionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string or null | When the restriction took effect. `created_at`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributesInput.md#licensekeyrestrictionpreviousattributesinputcreated_at). |
| `dispute_id` | Optional | string or null | The dispute that restricted the key. `dispute_id`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributesInput.md#licensekeyrestrictionpreviousattributesinputdispute_id). |
| `dispute_status` | Optional | string or null | Whether the dispute is open or lost. Values: `"open"`, `"lost"`. `dispute_status`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributesInput.md#licensekeyrestrictionpreviousattributesinputdispute_status). |
| `reason` | Optional | string or null | Reason for a merchant or subscription restriction. `reason`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributesInput.md#licensekeyrestrictionpreviousattributesinputreason). |
| `refund_id` | Optional | string or null | The refund that restricted the key. `refund_id`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributesInput.md#licensekeyrestrictionpreviousattributesinputrefund_id). |
| `subscription_id` | Optional | string or null | The subscription that restricted the key. `subscription_id`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributesInput.md#licensekeyrestrictionpreviousattributesinputsubscription_id). |
| `type` | Optional | string or null | What caused the restriction. Values: `"merchant"`, `"refund"`, `"dispute"`, `"subscription"`. `type`: [declared alternatives](../models/LicenseKeyRestrictionPreviousAttributesInput.md#licensekeyrestrictionpreviousattributesinputtype). |

### LicenseKeyRestrictionPreviousAttributesInput.created_at

### LicenseKeyRestrictionPreviousAttributesInput.created_at variant 1

anyOf variant 1: When the restriction took effect..

- Value shape: string. When the restriction took effect. When the restriction took effect. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### LicenseKeyRestrictionPreviousAttributesInput.created_at variant 2

anyOf variant 2.

- Value shape: null. When the restriction took effect. 

### LicenseKeyRestrictionPreviousAttributesInput.dispute_id

### LicenseKeyRestrictionPreviousAttributesInput.dispute_id variant 1

anyOf variant 1: The dispute that restricted the key..

- Value shape: string. The dispute that restricted the key. The dispute that restricted the key. Example: `"du_01KEZF7C00DEJSF1KTXRT4BBQD"`. 

### LicenseKeyRestrictionPreviousAttributesInput.dispute_id variant 2

anyOf variant 2.

- Value shape: null. The dispute that restricted the key. 

### LicenseKeyRestrictionPreviousAttributesInput.dispute_status

### LicenseKeyRestrictionPreviousAttributesInput.dispute_status variant 1

anyOf variant 1: Whether the dispute is open or lost..

- Value shape: string. Whether the dispute is open or lost. Values: `"open"`, `"lost"`.

### LicenseKeyRestrictionPreviousAttributesInput.dispute_status variant 2

anyOf variant 2.

- Value shape: null. Whether the dispute is open or lost. 

### LicenseKeyRestrictionPreviousAttributesInput.reason

### LicenseKeyRestrictionPreviousAttributesInput.reason variant 1

anyOf variant 1: Reason for a merchant or subscription restriction..

- Value shape: string. Reason for a merchant or subscription restriction. 

### LicenseKeyRestrictionPreviousAttributesInput.reason variant 2

anyOf variant 2.

- Value shape: null. Reason for a merchant or subscription restriction. 

### LicenseKeyRestrictionPreviousAttributesInput.refund_id

### LicenseKeyRestrictionPreviousAttributesInput.refund_id variant 1

anyOf variant 1: The refund that restricted the key..

- Value shape: string. The refund that restricted the key. The refund that restricted the key. Example: `"ref_01KEZF7C003DTD59WKYHEXYQ1K"`. 

### LicenseKeyRestrictionPreviousAttributesInput.refund_id variant 2

anyOf variant 2.

- Value shape: null. The refund that restricted the key. 

### LicenseKeyRestrictionPreviousAttributesInput.subscription_id

### LicenseKeyRestrictionPreviousAttributesInput.subscription_id variant 1

anyOf variant 1: The subscription that restricted the key..

- Value shape: string. The subscription that restricted the key. The subscription that restricted the key. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. 

### LicenseKeyRestrictionPreviousAttributesInput.subscription_id variant 2

anyOf variant 2.

- Value shape: null. The subscription that restricted the key. 

### LicenseKeyRestrictionPreviousAttributesInput.type

### LicenseKeyRestrictionPreviousAttributesInput.type variant 1

anyOf variant 1: What caused the restriction..

- Value shape: string. What caused the restriction. Values: `"merchant"`, `"refund"`, `"dispute"`, `"subscription"`.

### LicenseKeyRestrictionPreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. What caused the restriction. 

