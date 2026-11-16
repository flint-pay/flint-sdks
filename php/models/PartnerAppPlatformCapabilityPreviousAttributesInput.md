[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformCapabilityPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capability` | Optional | string or null | The platform capability. Values: `"platform_fees"`, `"merchant_onboarding"`, `"create_merchants"`, `"payment_splits"`. `capability`: [declared alternatives](../models/PartnerAppPlatformCapabilityPreviousAttributesInput.md#partnerappplatformcapabilitypreviousattributesinputcapability). |
| `inactive_reason` | Optional | string or null | Why the capability is inactive. Present only while status is inactive. Values: `"requirements_due"`, `"pending_review"`, `"not_approved"`, `"rejected"`, `"paused"`. `inactive_reason`: [declared alternatives](../models/PartnerAppPlatformCapabilityPreviousAttributesInput.md#partnerappplatformcapabilitypreviousattributesinputinactive_reason). |
| `status` | Optional | string or null | Whether the capability works in live mode. Values: `"active"`, `"inactive"`. `status`: [declared alternatives](../models/PartnerAppPlatformCapabilityPreviousAttributesInput.md#partnerappplatformcapabilitypreviousattributesinputstatus). |

### PartnerAppPlatformCapabilityPreviousAttributesInput.capability

### PartnerAppPlatformCapabilityPreviousAttributesInput.capability variant 1

anyOf variant 1: The platform capability..

- Value shape: string. The platform capability. Values: `"platform_fees"`, `"merchant_onboarding"`, `"create_merchants"`, `"payment_splits"`.

### PartnerAppPlatformCapabilityPreviousAttributesInput.capability variant 2

anyOf variant 2.

- Value shape: null. The platform capability. 

### PartnerAppPlatformCapabilityPreviousAttributesInput.inactive_reason

### PartnerAppPlatformCapabilityPreviousAttributesInput.inactive_reason variant 1

anyOf variant 1: Why the capability is inactive. Present only while status is inactive..

- Value shape: string. Why the capability is inactive. Present only while status is inactive. Values: `"requirements_due"`, `"pending_review"`, `"not_approved"`, `"rejected"`, `"paused"`.

### PartnerAppPlatformCapabilityPreviousAttributesInput.inactive_reason variant 2

anyOf variant 2.

- Value shape: null. Why the capability is inactive. Present only while status is inactive. 

### PartnerAppPlatformCapabilityPreviousAttributesInput.status

### PartnerAppPlatformCapabilityPreviousAttributesInput.status variant 1

anyOf variant 1: Whether the capability works in live mode..

- Value shape: string. Whether the capability works in live mode. Values: `"active"`, `"inactive"`.

### PartnerAppPlatformCapabilityPreviousAttributesInput.status variant 2

anyOf variant 2.

- Value shape: null. Whether the capability works in live mode. 

