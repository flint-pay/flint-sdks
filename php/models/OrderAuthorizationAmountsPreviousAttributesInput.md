[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderAuthorizationAmountsPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `authorized_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount authorized on the order's payments. |
| `capturable_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of the authorized amount that can still be captured. |
| `expires_at` | Optional | string or null | Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. `expires_at`: [declared alternatives](../models/OrderAuthorizationAmountsPreviousAttributesInput.md#orderauthorizationamountspreviousattributesinputexpires_at). |

### OrderAuthorizationAmountsPreviousAttributesInput.expires_at

### OrderAuthorizationAmountsPreviousAttributesInput.expires_at variant 1

anyOf variant 1: Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline..

- Value shape: string. Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderAuthorizationAmountsPreviousAttributesInput.expires_at variant 2

anyOf variant 2.

- Value shape: null. Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. 

