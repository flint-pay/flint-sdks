[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionUpdatedInstalledMerchantsEvent

The `gift_card_redemption.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card_redemption.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardRedemptionCreatedInstalledMerchantsEvent.md#giftcardredemptioncreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributes). |

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.object

Field definitions: [GiftCardRedemptionCreatedInstalledMerchantsEvent.data.object](../models/GiftCardRedemptionCreatedInstalledMerchantsEvent.md#giftcardredemptioncreatedinstalledmerchantseventdataobject).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capture_mode` | Optional | string or null | Whether the redemption spends the value now or reserves it to capture later. Values: `"automatic"`, `"manual"`. `capture_mode`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributescapture_mode). |
| `captured_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value captured from the card so far. `captured_money`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributescaptured_money). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `expires_at` | Optional | string or null or null | When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. `expires_at`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributesexpires_at). |
| `gift_card_id` | Optional | string or null | ID of the gift card the value is spent from. `gift_card_id`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributesgift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | Unique identifier for this gift card redemption, prefixed `gcr_`. `gift_card_redemption_id`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributesgift_card_redemption_id). |
| `idempotency_key` | Optional | string or null or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. `idempotency_key`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesidempotency_key). |
| `order_id` | Optional | string or null or null | ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. `order_id`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributesorder_id). |
| `order_payment_attempt_id` | Optional | string or null or null | The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. `order_payment_attempt_id`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributesorder_payment_attempt_id). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`. `refunded_money`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributesrefunded_money). |
| `remaining_refundable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired. `remaining_refundable_money`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributesremaining_refundable_money). |
| `requested_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount requested when the redemption was created. `requested_money`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributesrequested_money). |
| `reserved_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The value held on the card for this redemption while it is reserved. `reserved_money`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributesreserved_money). |
| `sale_reference` | Optional | string or null or null | Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. `sale_reference`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributessale_reference). |
| `source_type` | Optional | string or null | What the redemption pays for: a sale you record, or a Flint order's payment. Values: `"external"`, `"flint_order"`. `source_type`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributessource_type). |
| `status` | Optional | string or null | Where the redemption is in its lifecycle. Values: `"reserved"`, `"succeeded"`, `"canceled"`, `"expired"`. `status`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions. Items values: `"capture"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEvent.md#giftcardredemptionupdatedinstalledmerchantseventdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesversion). |

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.capture_mode

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.capture_mode variant 1

anyOf variant 1: Whether the redemption spends the value now or reserves it to capture later..

- Value shape: string. Whether the redemption spends the value now or reserves it to capture later. Values: `"automatic"`, `"manual"`.

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.capture_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the redemption spends the value now or reserves it to capture later. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.captured_money

The value captured from the card so far.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.captured_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.captured_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The value captured from the card so far. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.captured_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.captured_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.expires_at

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.expires_at variant 1

anyOf variant 1: When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately..

- Value shape: (string or null). When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_id

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the value is spent from..

- Value shape: string. ID of the gift card the value is spent from. ID of the gift card the value is spent from. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the value is spent from. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_redemption_id

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_redemption_id variant 1

anyOf variant 1: Unique identifier for this gift card redemption, prefixed `gcr_`..

- Value shape: string. Unique identifier for this gift card redemption, prefixed `gcr_`. Unique identifier for this gift card redemption, prefixed `gcr_`. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card redemption, prefixed `gcr_`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.idempotency_key

Declared alternatives: [GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.idempotency_key](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesidempotency_key).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.order_id

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.order_id variant 1

anyOf variant 1: ID of the Flint order the redemption pays for. `null` when `source_type` is `external`..

- Value shape: (string or null). ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.order_payment_attempt_id

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.order_payment_attempt_id variant 1

anyOf variant 1: The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`..

- Value shape: (string or null). The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.order_payment_attempt_id variant 2

anyOf variant 2.

- Value shape: null. The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.refunded_money

Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.refunded_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.refunded_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.refunded_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.refunded_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.remaining_refundable_money

Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.remaining_refundable_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.remaining_refundable_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.remaining_refundable_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.remaining_refundable_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.requested_money

The amount requested when the redemption was created.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.requested_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.requested_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount requested when the redemption was created. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.requested_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.requested_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.reserved_money

The value held on the card for this redemption while it is reserved.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.reserved_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.reserved_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The value held on the card for this redemption while it is reserved. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.reserved_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.reserved_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.sale_reference

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.sale_reference variant 1

anyOf variant 1: Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`..

- Value shape: (string or null). Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. maxLength: `255`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.sale_reference variant 2

anyOf variant 2.

- Value shape: null. Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.source_type

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.source_type variant 1

anyOf variant 1: What the redemption pays for: a sale you record, or a Flint order's payment..

- Value shape: string. What the redemption pays for: a sale you record, or a Flint order's payment. Values: `"external"`, `"flint_order"`.

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.source_type variant 2

anyOf variant 2.

- Value shape: null. What the redemption pays for: a sale you record, or a Flint order's payment. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.status

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Where the redemption is in its lifecycle..

- Value shape: string. Where the redemption is in its lifecycle. Values: `"reserved"`, `"succeeded"`, `"canceled"`, `"expired"`.

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the redemption is in its lifecycle. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions..

- Value shape: Array of string. Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions. Items values: `"capture"`, `"cancel"`.

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions. 

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [GiftCardFundingDisputePreviousAttributes.version](../models/GiftCardFundingDisputePreviousAttributes.md#giftcardfundingdisputepreviousattributesversion).

### GiftCardRedemptionUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

