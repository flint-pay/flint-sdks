[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capture_mode` | Optional | string or null | Whether the redemption spends the value now or reserves it to capture later. Values: `"automatic"`, `"manual"`. `capture_mode`: [declared alternatives](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributescapture_mode). |
| `captured_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The value captured from the card so far. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `expires_at` | Optional | string or null or null | When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. `expires_at`: [declared alternatives](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributesexpires_at). |
| `gift_card_id` | Optional | string or null | ID of the gift card the value is spent from. `gift_card_id`: [declared alternatives](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributesgift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | Unique identifier for this gift card redemption, prefixed `gcr_`. `gift_card_redemption_id`: [declared alternatives](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributesgift_card_redemption_id). |
| `idempotency_key` | Optional | string or null or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. `idempotency_key`: [declared alternatives](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesidempotency_key). |
| `order_id` | Optional | string or null or null | ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. `order_id`: [declared alternatives](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributesorder_id). |
| `order_payment_attempt_id` | Optional | string or null or null | The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. `order_payment_attempt_id`: [declared alternatives](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributesorder_payment_attempt_id). |
| `refunded_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`. |
| `remaining_refundable_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired. |
| `requested_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The amount requested when the redemption was created. |
| `reserved_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | The value held on the card for this redemption while it is reserved. |
| `sale_reference` | Optional | string or null or null | Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. `sale_reference`: [declared alternatives](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributessale_reference). |
| `source_type` | Optional | string or null | What the redemption pays for: a sale you record, or a Flint order's payment. Values: `"external"`, `"flint_order"`. `source_type`: [declared alternatives](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributessource_type). |
| `status` | Optional | string or null | Where the redemption is in its lifecycle. Values: `"reserved"`, `"succeeded"`, `"canceled"`, `"expired"`. `status`: [declared alternatives](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions. Items values: `"capture"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.md#giftcardredemptionupdatedmerchanteventdatapreviousattributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion). |

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.capture_mode

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.capture_mode variant 1

anyOf variant 1: Whether the redemption spends the value now or reserves it to capture later..

- Value shape: string. Whether the redemption spends the value now or reserves it to capture later. Values: `"automatic"`, `"manual"`.

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.capture_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the redemption spends the value now or reserves it to capture later. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.expires_at

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.expires_at variant 1

anyOf variant 1: When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately..

- Value shape: (string or null). When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. Format: `date-time`. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.gift_card_id

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the value is spent from..

- Value shape: string. ID of the gift card the value is spent from. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the value is spent from. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.gift_card_redemption_id

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.gift_card_redemption_id variant 1

anyOf variant 1: Unique identifier for this gift card redemption, prefixed `gcr_`..

- Value shape: string. Unique identifier for this gift card redemption, prefixed `gcr_`. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card redemption, prefixed `gcr_`. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.idempotency_key

Declared alternatives: [GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.idempotency_key](../models/GiftCardLoadUpdatedMerchantEventDataPreviousAttributes.md#giftcardloadupdatedmerchanteventdatapreviousattributesidempotency_key).

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.order_id

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the Flint order the redemption pays for. `null` when `source_type` is `external`..

- Value shape: (string or null). ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.order_payment_attempt_id

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.order_payment_attempt_id variant 1

anyOf variant 1: The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`..

- Value shape: (string or null). The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.order_payment_attempt_id variant 2

anyOf variant 2.

- Value shape: null. The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.sale_reference

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.sale_reference variant 1

anyOf variant 1: Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`..

- Value shape: (string or null). Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. maxLength: `255`. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.sale_reference variant 2

anyOf variant 2.

- Value shape: null. Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.source_type

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.source_type variant 1

anyOf variant 1: What the redemption pays for: a sale you record, or a Flint order's payment..

- Value shape: string. What the redemption pays for: a sale you record, or a Flint order's payment. Values: `"external"`, `"flint_order"`.

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.source_type variant 2

anyOf variant 2.

- Value shape: null. What the redemption pays for: a sale you record, or a Flint order's payment. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.status

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.status variant 1

anyOf variant 1: Where the redemption is in its lifecycle..

- Value shape: string. Where the redemption is in its lifecycle. Values: `"reserved"`, `"succeeded"`, `"canceled"`, `"expired"`.

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the redemption is in its lifecycle. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.supported_actions

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions..

- Value shape: Array of string. Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions. Items values: `"capture"`, `"cancel"`.

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions. 

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data fields 1.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdata-fields-1previous_attributescreated_at).

### GiftCardRedemptionUpdatedMerchantEventDataPreviousAttributes.version

Declared alternatives: [GiftCardUpdatedMerchantEventDataPreviousAttributes.version](../models/GiftCardUpdatedMerchantEventDataPreviousAttributes.md#giftcardupdatedmerchanteventdatapreviousattributesversion).

