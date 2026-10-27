[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MerchantAccountSessionStripeCollectionOptions

Requirement collection options to apply when mounting one embedded component: field breadth, future requirements, and any targeted requirements.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fields` | Required | string | Requirement collection breadth to pass as fields to setCollectionOptions. Values: `"currently_due"`, `"eventually_due"`. |
| `future_requirements` | Required | string | Whether to collect future requirements. Pass this value as futureRequirements to setCollectionOptions. Values: `"omit"`, `"include"`. |
| `requirements` | Optional | [MerchantAccountSessionStripeRequirements](../models/MerchantAccountSessionStripeRequirements.md#merchantaccountsessionstriperequirements) | Targeted requirement collection restriction to pass as requirements to setCollectionOptions. Omitted when collection is not targeted. The Stripe requirement paths to collect exclusively when a session's targeting is `targeted`. |

