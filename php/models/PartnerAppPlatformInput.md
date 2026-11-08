[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppPlatformInput

The app's platform onboarding. Platform capabilities apply in live mode only; test mode never checks them. requirements and capability readiness that depend on the owning merchant's live onboarding are read when Flint serves the app, so a change there alone doesn't advance the app's version or send a partner_app event.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Required | Array of [PartnerAppPlatformCapabilityInput](../models/PartnerAppPlatformCapabilityInput.md#partnerappplatformcapabilityinput) | One entry per platform capability, in the same order for every app. |
| `limits` | Optional | [PartnerAppPlatformLimitsInput](../models/PartnerAppPlatformLimitsInput.md#partnerappplatformlimitsinput) | The platform's live merchant and monthly volume limits, present once Flint has approved or limited the app. Limits are soft: crossing one never refuses or interrupts a payment or an onboarding step. Flint staff are alerted and may limit or pause the app. Soft limits on the platform's live use, and its usage against them. |
| `requirements` | Required | Array of string | What's outstanding before Flint can review the app, `[]` when nothing is. Flint moves the app to pending_review when the last one is met. Items values: `"owner_merchant_onboarding"`, `"platform_profile"`, `"platform_terms"`. |
| `reserve` | Optional | [PartnerAppPlatformReserveInput](../models/PartnerAppPlatformReserveInput.md#partnerappplatformreserveinput) | The share of each platform fee Flint holds as a reserve and how long it holds it, present once Flint has approved or limited the app. A change applies to fees collected afterwards. The platform's reserve terms. |
| `status` | Required | string | Where the app is in platform onboarding. No value is final. Values: `"not_started"`, `"pending_review"`, `"approved"`, `"limited"`, `"rejected"`. |
| `terms_acceptance` | Required | [PartnerAppPlatformTermsAcceptanceInput](../models/PartnerAppPlatformTermsAcceptanceInput.md#partnerappplatformtermsacceptanceinput) or null | The latest acceptance of Flint's platform terms. `null` when the app hasn't accepted any version. |

