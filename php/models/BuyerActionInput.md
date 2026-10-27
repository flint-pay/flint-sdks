[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerActionInput

One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cancel` | Optional | [BuyerCancelActionOptionsInput](../models/BuyerCancelActionOptionsInput.md#buyercancelactionoptionsinput) | Present only on an available cancel action. The cancellation choices this subscription accepts from its buyer. |
| `due_at` | Optional | string | When the buyer needs to act by. Omitted when the action has no deadline, or when the resource's state or the store's policy doesn't allow it. Format: `date-time`. |
| `is_available` | Required | boolean | Whether this session can take the action now. |
| `is_required` | Required | boolean | Whether the store needs the buyer to take the action, such as paying a due invoice. It stays true when the only thing in the way is signing in. |
| `kind` | Required | string | What the action is. Each resource lists its own kinds in a fixed order. New kinds may be added; ignore kinds you don't recognize. Values: [18 declared values](#buyeractioninput-kind-values). |
| `pause` | Optional | [BuyerPauseActionOptionsInput](../models/BuyerPauseActionOptionsInput.md#buyerpauseactionoptionsinput) | Present only on an available pause action. The pause lengths this subscription accepts from its buyer. |
| `pay_balance` | Optional | [BuyerPayBalanceActionOptionsInput](../models/BuyerPayBalanceActionOptionsInput.md#buyerpaybalanceactionoptionsinput) | Present only on an available pay_balance action. The return resolutions the buyer can pay now. |
| `unavailable_reason` | Optional | string | Why the action can't be taken now. Present exactly when is_available is false. New reasons may be added; show a general message for a reason you don't recognize. Values: `"sign_in_required"`, `"store_policy"`, `"not_in_state"`, `"window_closed"`, `"nothing_to_return"`, `"collection_unavailable"`, `"limit_reached"`. |

#### BuyerActionInput kind values

- `"start_return"`
- `"resend_receipt"`
- `"cancel"`
- `"pause"`
- `"resume"`
- `"reactivate"`
- `"update_payment_method"`
- `"pay"`
- `"withdraw"`
- `"ship_items"`
- `"pay_balance"`
- `"retry_payment"`
- `"update_delivery"`
- `"skip"`
- `"update_billing_interval"`
- `"update_quantity"`
- `"swap_items"`
- `"renew"`

