[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PromotionsCreateResponse201

A response containing `Promotion` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [Promotion](../models/Promotion.md#promotion) | The requested promotion. Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes being applied, existing promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its highest-priority member, then the larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and lower promotion_id; each is admitted unless max_promotions_per_order is reached or both promotions do not allow each other's discount class. Admitted promotions price line item first, then order, then service charge. A zero-value promotion is dropped and selection runs again. |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Optional | string | Identifier of this API request, useful when contacting support. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

