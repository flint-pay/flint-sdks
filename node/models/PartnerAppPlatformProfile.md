[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformProfile







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `estimated_merchant_count` | Required | integer | Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Format: `int64`. minimum: `1`. maximum: `1000000`. |
| `estimated_monthly_volume_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `estimated_monthly_volume_money`: [field definitions](../models/CreatePartnerAppRequest.md#createpartnerapprequestplatform_profileestimated_monthly_volume_money). |
| `merchant_description` | Required | string | The kinds of merchants the platform serves, in 1 to 500 characters. minLength: `1`. maxLength: `500`. |
| `merchant_onboarding_description` | Required | string | How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength: `1`. maxLength: `2000`. |
| `product_description` | Required | string | What the platform's product does, in 1 to 1,000 characters. minLength: `1`. maxLength: `1000`. |
| `support_email` | Required | string | Where the platform's merchants get support. Format: `email`. Example: `"buyer@example.com"`. |
| `support_phone` | Optional | string | Support phone number in E.164 format, such as +14155550123. Optional. |
| `website_url` | Required | string | The platform's website, as an https URL. Format: `uri`. Example: `"https://example.com/receipt"`. |

### PartnerAppPlatformProfile variant 1

anyOf variant 1: Declared schema PartnerAppPlatformProfile. What the platform tells Flint for its review. It is one value: a write replaces it whole..

- Constraints for `support_email`: maxLength: `320`.
- Constraints for `support_phone`: pattern: `^\+[1-9][0-9]{1,14}$`.
- Constraints for `website_url`: maxLength: `2048`.

### PartnerAppPlatformProfile variant 2

anyOf variant 2: Declared schema PartnerAppPlatformProfileRequest. The whole platform profile. Every field is required except support_phone, and a write replaces the profile whole..

- Constraints for `support_email`: minLength: `1`. maxLength: `320`.
- Constraints for `support_phone`: minLength: `1`. pattern: `^\+[1-9][0-9]{1,14}$`.
- Constraints for `website_url`: minLength: `1`. maxLength: `2048`.

### PartnerAppPlatformProfile.estimated_monthly_volume_money

Field definitions: [CreatePartnerAppRequest.platform_profile.estimated_monthly_volume_money](../models/CreatePartnerAppRequest.md#createpartnerapprequestplatform_profileestimated_monthly_volume_money).

