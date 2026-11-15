[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionPlanTermsRequest

The `subscription_plan` variant of `SubscriptionTermsInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_interval` | Optional | string | Unit of the billing period to subscribe on. Send it with `billing_interval_count`, and only a pair the plan offers in `billing_interval_options`; omit both to use the plan's default pair. Values: `"daily"`, `"weekly"`, `"monthly"`, `"yearly"`. |
| `billing_interval_count` | Optional | integer | Number of `billing_interval` units between charges. Send it with `billing_interval`. Format: `int32`. minimum: `1`. maximum: `365`. |
| `line_items` | Optional | Array of [SubscriptionPlanChangeLineItemRequest](../models/SubscriptionPlanChangeLineItemRequest.md#subscriptionplanchangelineitemrequest) | Optional quantities for distinct lines in this plan. Omitted lines keep their plan defaults. Merchants may set any line to 1 through 9,999, regardless of its buyer quantity policy. maxItems: `50`. |
| `subscription_plan_id` | Required | string | ID of the plan to subscribe to. The plan must be active. minLength: `1`. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. |
| `type` | Required | string | Start the subscription from a subscription plan. Values: `"subscription_plan"`. |

