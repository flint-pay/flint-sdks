[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardRedemptionUpdatedInstalledMerchantsEventInput

The `gift_card_redemption.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/GiftCardRedemptionUpdatedInstalledMerchantsEventInput.md#giftcardredemptionupdatedinstalledmerchantseventinputdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"gift_card_redemption.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [PartnerWebhookEnvelopeSourceInput](../models/PartnerWebhookEnvelopeSourceInput.md#partnerwebhookenvelopesourceinput) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/GiftCardRedemptionCreatedInstalledMerchantsEventInput.md#giftcardredemptioncreatedinstalledmerchantseventinputdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/GiftCardRedemptionUpdatedInstalledMerchantsEventInput.md#giftcardredemptionupdatedinstalledmerchantseventinputdataprevious_attributes). |

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.object

Field definitions: [GiftCardRedemptionCreatedInstalledMerchantsEventInput.data.object](../models/GiftCardRedemptionCreatedInstalledMerchantsEventInput.md#giftcardredemptioncreatedinstalledmerchantseventinputdataobject).

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capture_mode` | Optional | string or null | Whether the redemption spends the value now or reserves it to capture later. Values: `"automatic"`, `"manual"`. `capture_mode`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEventInput.md#giftcardredemptionupdatedinstalledmerchantseventinputdataprevious_attributescapture_mode). |
| `captured_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The value captured from the card so far. |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `expires_at` | Optional | string or null or null | When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. `expires_at`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEventInput.md#giftcardredemptionupdatedinstalledmerchantseventinputdataprevious_attributesexpires_at). |
| `gift_card_id` | Optional | string or null | ID of the gift card the value is spent from. `gift_card_id`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEventInput.md#giftcardredemptionupdatedinstalledmerchantseventinputdataprevious_attributesgift_card_id). |
| `gift_card_redemption_id` | Optional | string or null | Unique identifier for this gift card redemption, prefixed `gcr_`. `gift_card_redemption_id`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEventInput.md#giftcardredemptionupdatedinstalledmerchantseventinputdataprevious_attributesgift_card_redemption_id). |
| `idempotency_key` | Optional | string or null or null | Your Idempotency-Key for the command that created this record. `null` when Flint created it or no key was sent. `idempotency_key`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributesidempotency_key). |
| `order_id` | Optional | string or null or null | ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. `order_id`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEventInput.md#giftcardredemptionupdatedinstalledmerchantseventinputdataprevious_attributesorder_id). |
| `order_payment_attempt_id` | Optional | string or null or null | The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. `order_payment_attempt_id`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEventInput.md#giftcardredemptionupdatedinstalledmerchantseventinputdataprevious_attributesorder_payment_attempt_id). |
| `refunded_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`. |
| `remaining_refundable_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired. |
| `requested_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount requested when the redemption was created. |
| `reserved_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The value held on the card for this redemption while it is reserved. |
| `sale_reference` | Optional | string or null or null | Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. `sale_reference`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEventInput.md#giftcardredemptionupdatedinstalledmerchantseventinputdataprevious_attributessale_reference). |
| `source_type` | Optional | string or null | What the redemption pays for: a sale you record, or a Flint order's payment. Values: `"external"`, `"flint_order"`. `source_type`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEventInput.md#giftcardredemptionupdatedinstalledmerchantseventinputdataprevious_attributessource_type). |
| `status` | Optional | string or null | Where the redemption is in its lifecycle. Values: `"reserved"`, `"succeeded"`, `"canceled"`, `"expired"`. `status`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEventInput.md#giftcardredemptionupdatedinstalledmerchantseventinputdataprevious_attributesstatus). |
| `supported_actions` | Optional | Array of string or null | Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions. Items values: `"capture"`, `"cancel"`. `supported_actions`: [declared alternatives](../models/GiftCardRedemptionUpdatedInstalledMerchantsEventInput.md#giftcardredemptionupdatedinstalledmerchantseventinputdataprevious_attributessupported_actions). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinputversion). |

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.capture_mode

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.capture_mode variant 1

anyOf variant 1: Whether the redemption spends the value now or reserves it to capture later..

- Value shape: string. Whether the redemption spends the value now or reserves it to capture later. Values: `"automatic"`, `"manual"`.

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.capture_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the redemption spends the value now or reserves it to capture later. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.expires_at

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.expires_at variant 1

anyOf variant 1: When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately..

- Value shape: (string or null). When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. When an uncaptured manual reservation expires. `null` when `capture_mode` is `automatic`, which posts immediately. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_id

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_id variant 1

anyOf variant 1: ID of the gift card the value is spent from..

- Value shape: string. ID of the gift card the value is spent from. ID of the gift card the value is spent from. Example: `"gc_01KEZF7C00RT1618WYBM1Y94CG"`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_id variant 2

anyOf variant 2.

- Value shape: null. ID of the gift card the value is spent from. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_redemption_id

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_redemption_id variant 1

anyOf variant 1: Unique identifier for this gift card redemption, prefixed `gcr_`..

- Value shape: string. Unique identifier for this gift card redemption, prefixed `gcr_`. Unique identifier for this gift card redemption, prefixed `gcr_`. Example: `"gcr_01KEZF7C002YD2G2J734RRZTWT"`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.gift_card_redemption_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this gift card redemption, prefixed `gcr_`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key

Declared alternatives: [GiftCardLoadUpdatedInstalledMerchantsEventInput.data.previous_attributes.idempotency_key](../models/GiftCardLoadUpdatedInstalledMerchantsEventInput.md#giftcardloadupdatedinstalledmerchantseventinputdataprevious_attributesidempotency_key).

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.order_id

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 1

anyOf variant 1: ID of the Flint order the redemption pays for. `null` when `source_type` is `external`..

- Value shape: (string or null). ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the Flint order the redemption pays for. `null` when `source_type` is `external`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.order_payment_attempt_id

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.order_payment_attempt_id variant 1

anyOf variant 1: The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`..

- Value shape: (string or null). The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. Example: `"opat_01KEZF7C00B5PW9F2R8A4YSH5D"`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.order_payment_attempt_id variant 2

anyOf variant 2.

- Value shape: null. The order payment attempt the redemption belongs to. Set for source_type flint_order. `null` when `source_type` is `external`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.sale_reference

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.sale_reference variant 1

anyOf variant 1: Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`..

- Value shape: (string or null). Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. maxLength: `255`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.sale_reference variant 2

anyOf variant 2.

- Value shape: null. Your reference for the sale the redemption pays for. Set for source_type external. `null` when `source_type` is `flint_order`. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.source_type

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.source_type variant 1

anyOf variant 1: What the redemption pays for: a sale you record, or a Flint order's payment..

- Value shape: string. What the redemption pays for: a sale you record, or a Flint order's payment. Values: `"external"`, `"flint_order"`.

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.source_type variant 2

anyOf variant 2.

- Value shape: null. What the redemption pays for: a sale you record, or a Flint order's payment. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.status

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 1

anyOf variant 1: Where the redemption is in its lifecycle..

- Value shape: string. Where the redemption is in its lifecycle. Values: `"reserved"`, `"succeeded"`, `"canceled"`, `"expired"`.

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Where the redemption is in its lifecycle. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 1

anyOf variant 1: Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions..

- Value shape: Array of string. Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions. Items values: `"capture"`, `"cancel"`.

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.supported_actions variant 2

anyOf variant 2.

- Value shape: null. Lifecycle actions accepted for the stored redemption, independent of the caller's credentials. capture is available only before expires_at; cancel remains available until the reservation is resolved. Reservations for Flint orders are resolved through their payment attempt and list no actions. 

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEventInput.data.previous_attributes.created_at](../models/ApiKeyRevokedEventInput.md#apikeyrevokedeventinputdataprevious_attributescreated_at).

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.data.previous_attributes.version

Declared alternatives: [GiftCardFundingDisputePreviousAttributesInput.version](../models/GiftCardFundingDisputePreviousAttributesInput.md#giftcardfundingdisputepreviousattributesinputversion).

### GiftCardRedemptionUpdatedInstalledMerchantsEventInput.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEventInput.source](../models/BalanceTransactionCreatedInstalledMerchantsEventInput.md#balancetransactioncreatedinstalledmerchantseventinputsource).

