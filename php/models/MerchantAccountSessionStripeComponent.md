[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionStripeComponent

One embedded component a merchant account session authorizes, with the collection options to apply to it.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collection_options` | Optional | [MerchantAccountSessionStripeCollectionOptions](../models/MerchantAccountSessionStripeCollectionOptions.md#merchantaccountsessionstripecollectionoptions) | Collection instructions for a policy-aware component. Omitted for other components. Map future_requirements to futureRequirements when calling setCollectionOptions. Requirement collection options to apply when mounting one embedded component: field breadth, future requirements, and any targeted requirements. |
| `component` | Required | string | Stripe component name authorized by this session. tax_documents uses the Stripe name documents. Convert underscores to hyphens when calling Connect.create. Values: `"account_onboarding"`, `"account_management"`, `"payouts"`, `"balances"`, `"documents"`, `"notification_banner"`. |

