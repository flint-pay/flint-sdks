[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkUpdatedInstalledMerchantsEvent

The `payment_link.updated` webhook payload for the `installed_merchants` event source.

Fields shared by partner webhook payloads.



| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_version` | Required | string | API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: `date`. Example: `"2026-08-02"`. |
| `created_at` | Required | string | When Flint recorded the event. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `data` | Required | object | The resource snapshot recorded for this event and rendered at the delivery API version. `data`: [field definitions](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdata). |
| `event_source` | Required | string | The origin of the event. Selects the webhook envelope and the fields in source. Values: `"installed_merchants"`. |
| `event_type` | Required | string | The resource change or condition this event announces. Values: `"payment_link.updated"`. |
| `partner_app_id` | Required | string | ID of the partner app that owns the receiving endpoint. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `payload_version` | Required | integer | 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Values: `1`, `2`. |
| `source` | Required | [WebhookEventSource](../models/WebhookEventSource.md#webhookeventsource) and object | The merchant and partner app install this event concerns, with environment details for installed-merchant events. The merchant and partner app install the event concerns. Environment fields are present for installed-merchant events. `source`: [field definitions](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource). |
| `test` | Required | boolean | true for a synthetic event sent from the test-events endpoint, false otherwise. |
| `webhook_event_id` | Required | string | Stable ID of the recorded webhook event, shared by its delivery attempts. Example: `"whev_01KEZF7C00362MS3HV970TRZGS"`. |

### PaymentLinkUpdatedInstalledMerchantsEvent.data

The resource snapshot recorded for this event and rendered at the delivery API version.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `object` | Required | object | The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. The resource snapshot, without expansions. Webhooks omit no additional fields. `object`: [field definitions](../models/PaymentLinkCreatedInstalledMerchantsEvent.md#paymentlinkcreatedinstalledmerchantseventdataobject). |
| `previous_attributes` | Optional | object | Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events. `previous_attributes`: [field definitions](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributes). |

### PaymentLinkUpdatedInstalledMerchantsEvent.data.object

Field definitions: [PaymentLinkCreatedInstalledMerchantsEvent.data.object](../models/PaymentLinkCreatedInstalledMerchantsEvent.md#paymentlinkcreatedinstalledmerchantseventdataobject).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes

Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_fields` | Optional | [CheckoutBuyerFields](../models/CheckoutBuyerFields.md#checkoutbuyerfields) or null | What checkout asks the buyer for. Each field you leave out uses your checkout settings. `buyer_fields`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesbuyer_fields). |
| `checkout_session_expires_in_seconds` | Optional | integer or null | Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. `checkout_session_expires_in_seconds`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributescheckout_session_expires_in_seconds). |
| `completed_count` | Optional | integer or null | Number of paid checkout sessions started from this link. `completed_count`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributescompleted_count). |
| `created_at` | Optional | string or null | RFC3339 timestamp. `created_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `custom_fields` | Optional | Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield) or null | Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. `custom_fields`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributescustom_fields). |
| `custom_text` | Optional | [CheckoutCustomTextConfig](../models/CheckoutCustomTextConfig.md#checkoutcustomtextconfig) or null | Custom text for checkouts started from this link. `custom_text`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributescustom_text). |
| `delivery_method_ids` | Optional | Array of string or null | Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. `delivery_method_ids`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesdelivery_method_ids). |
| `description` | Optional | string or null | Text about what the link sells, returned to buyers when they open it. `description`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesdescription). |
| `donation_max_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Largest amount a buyer can give on a donation link. `donation_max_amount_money`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesdonation_max_amount_money). |
| `donation_min_amount_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Smallest amount a buyer can give on a donation link. `donation_min_amount_money`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesdonation_min_amount_money). |
| `donation_suggested_amount_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) or null | Amounts a donation link offers as one-tap choices. `donation_suggested_amount_money_options`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesdonation_suggested_amount_money_options). |
| `event_config` | Optional | [PaymentLinkEventConfig](../models/PaymentLinkEventConfig.md#paymentlinkeventconfig) or null | Event details for an `event` link: when and where it takes place and how many tickets it sells. `event_config`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesevent_config). |
| `external_reference_id` | Optional | string or null | Caller-owned identifier for this resource in an external system. `external_reference_id`: [declared alternatives](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id). |
| `image` | Optional | [ImageAttachment](../models/ImageAttachment.md#imageattachment) or null | Image shown to buyers with the link. |
| `inactive_message` | Optional | string or null | Message to show the buyer when the link is inactive. `inactive_message`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesinactive_message). |
| `inventory_routing_source` | Optional | [InventoryRoutingSource](../models/InventoryRoutingSource.md#inventoryroutingsource) or null | The inventory location or routing policy that supplies stock for the link's catalog lines. |
| `legal` | Optional | [LegalSettings](../models/LegalSettings.md#legalsettings) or null | The terms and policy links checkouts started from this link show the buyer. `legal`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributeslegal). |
| `line_items` | Optional | Array of [PaymentLinkLineItem](../models/PaymentLinkLineItem.md#paymentlinklineitem) or null | What the link sells. `line_items`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesline_items). |
| `max_completions` | Optional | integer or null | Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. `max_completions`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesmax_completions). |
| `merchant_id` | Optional | string or null | ID of the merchant this resource belongs to. `merchant_id`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id). |
| `metadata` | Optional | [MetadataMap](../models/MetadataMap.md#metadatamap) or null | Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. `metadata`: [declared alternatives](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata). |
| `name` | Optional | string or null | Name of the payment link. `name`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesname). |
| `payment_link_id` | Optional | string or null | Unique identifier for this payment link, prefixed `pl_`. `payment_link_id`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributespayment_link_id). |
| `payment_link_type` | Optional | string or null | What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`. `payment_link_type`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributespayment_link_type). |
| `payments` | Optional | [CheckoutPaymentConfig](../models/CheckoutPaymentConfig.md#checkoutpaymentconfig) or null | Payment options for checkouts started from this link. `payments`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributespayments). |
| `promotion_config` | Optional | [CheckoutPromotionConfig](../models/CheckoutPromotionConfig.md#checkoutpromotionconfig) or null | Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. `promotion_config`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributespromotion_config). |
| `redirects` | Optional | [CheckoutRedirects](../models/CheckoutRedirects.md#checkoutredirects) or null | Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. `redirects`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesredirects). |
| `sales_end_at` | Optional | string or null | RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. `sales_end_at`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributessales_end_at). |
| `sales_summary` | Optional | [PaymentLinkSalesSummary](../models/PaymentLinkSalesSummary.md#paymentlinksalessummary) or null | Present only with expand=sales_summary on GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses the same paid-order definition as the merchant sales summary. |
| `status` | Optional | string or null | Whether the link can start new checkouts. Values: `"active"`, `"inactive"`. `status`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesstatus). |
| `subscription_plan` | Optional | [ExpandedSubscriptionPlanSummary](../models/ExpandedSubscriptionPlanSummary.md#expandedsubscriptionplansummary) or null or null | Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. |
| `subscription_plan_id` | Optional | string or null | ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. `subscription_plan_id`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributessubscription_plan_id). |
| `tax` | Optional | [CheckoutTaxConfig](../models/CheckoutTaxConfig.md#checkouttaxconfig) or null | Tax settings for checkouts started from this link. `tax`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestax). |
| `theme` | Optional | [ThemeConfig](../models/ThemeConfig.md#themeconfig) or null | The title and colors for checkouts started from this link, over your branding settings. `theme`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestheme). |
| `tip` | Optional | [CheckoutTipConfig](../models/CheckoutTipConfig.md#checkouttipconfig) or null | Tip options for checkouts started from this link. `tip`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestip). |
| `total_quantity_sold` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `total_quantity_sold`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributestotal_quantity_sold). |
| `updated_at` | Optional | string or null | RFC3339 timestamp. `updated_at`: [declared alternatives](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at). |
| `url` | Optional | string or null | URL buyers open to use the link. `url`: [declared alternatives](../models/PaymentLinkUpdatedInstalledMerchantsEvent.md#paymentlinkupdatedinstalledmerchantseventdataprevious_attributesurl). |
| `version` | Optional | integer or null | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. `version`: [declared alternatives](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesversion). |

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.buyer_fields

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.buyer_fields](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesbuyer_fields).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.checkout_session_expires_in_seconds

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.checkout_session_expires_in_seconds variant 1

anyOf variant 1: Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that..

- Value shape: integer. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Format: `int64`. minimum: `60`. maximum: `86400`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.checkout_session_expires_in_seconds variant 2

anyOf variant 2.

- Value shape: null. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.completed_count

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.completed_count variant 1

anyOf variant 1: Number of paid checkout sessions started from this link..

- Value shape: integer. Number of paid checkout sessions started from this link. Number of paid checkout sessions started from this link. Format: `int32`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.completed_count variant 2

anyOf variant 2.

- Value shape: null. Number of paid checkout sessions started from this link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.created_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.custom_fields

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.custom_fields variant 1

anyOf variant 1: Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`..

- Value shape: Array of [PaymentLinkCustomField](../models/PaymentLinkCustomField.md#paymentlinkcustomfield). Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.custom_fields variant 2

anyOf variant 2.

- Value shape: null. Questions buyers answer before paying. Answers are recorded on the order and checkout session in `custom_field_answers`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.custom_text

Custom text for checkouts started from this link.

Field definitions: [shared fields](CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributescustom_text).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.custom_text variant 1

anyOf CheckoutCustomTextConfig: Custom text for checkouts started from this link..

- Optional: `order_summary_message`, `shipping_address_label`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.custom_text variant 2

anyOf variant 2.

- Undeclared: `order_summary_message`, `shipping_address_label`.
- Value shape: null. Custom text for checkouts started from this link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.delivery_method_ids

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.delivery_method_ids variant 1

anyOf variant 1: Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver..

- Value shape: Array of string. Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. Items: Example: `"dmet_01KEZF7C00YSG3X2D1TZJ36TM0"`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.delivery_method_ids variant 2

anyOf variant 2.

- Value shape: null. Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.description

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.description variant 1

anyOf variant 1: Text about what the link sells, returned to buyers when they open it..

- Value shape: string. Text about what the link sells, returned to buyers when they open it. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.description variant 2

anyOf variant 2.

- Value shape: null. Text about what the link sells, returned to buyers when they open it. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_max_amount_money

Largest amount a buyer can give on a donation link.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_max_amount_money variant 1

anyOf MoneyValue: Largest amount a buyer can give on a donation link..

- Required: `amount`, `currency`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_max_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Largest amount a buyer can give on a donation link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_min_amount_money

Smallest amount a buyer can give on a donation link.

Field definitions: [shared fields](PromotionRuleValue.md#promotionrulevalue).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_min_amount_money variant 1

anyOf MoneyValue: Smallest amount a buyer can give on a donation link..

- Required: `amount`, `currency`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_min_amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Smallest amount a buyer can give on a donation link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_suggested_amount_money_options

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_suggested_amount_money_options variant 1

anyOf variant 1: Amounts a donation link offers as one-tap choices..

- Value shape: Array of [MoneyValue](../models/MoneyValue.md#moneyvalue). Amounts a donation link offers as one-tap choices. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_suggested_amount_money_options variant 2

anyOf variant 2.

- Value shape: null. Amounts a donation link offers as one-tap choices. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.donation_suggested_amount_money_options variant 1.[] fields 1

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.event_config

Event details for an `event` link: when and where it takes place and how many tickets it sells.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `collect_attendee_names` | Conditional | boolean | Whether resolving the link requires `attendee_names`, one name per ticket. Flint copies the names onto the tickets when the order is paid. Defaults to false. |
| `event_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `max_total_quantity` | Conditional | integer or null | Most tickets the event sells across all orders. `null` when the event has no ticket limit. On update, send null to remove the limit; a value below the tickets already sold or held by payments in progress fails with `LIMIT_EXCEEDED`. Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `send_ticket_emails` | Conditional | boolean | Whether Flint emails tickets to buyers after they pay. |
| `ticket_prefix` | Conditional | string | Prefix for ticket numbers, up to 5 characters. It cannot change after the event has issued tickets. maxLength: `5`. |
| `timezone` | Conditional | string | IANA time zone of the event venue, used to show `event_at` as venue time. |
| `venue` | Conditional | string | Where the event takes place. maxLength: `500`. |

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.event_config variant 1

anyOf PaymentLinkEventConfig: Event details for an `event` link: when and where it takes place and how many tickets it sells..

- Optional: `collect_attendee_names`, `event_at`, `max_total_quantity`, `send_ticket_emails`, `ticket_prefix`, `timezone`, `venue`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.event_config variant 2

anyOf variant 2.

- Undeclared: `collect_attendee_names`, `event_at`, `max_total_quantity`, `send_ticket_emails`, `ticket_prefix`, `timezone`, `venue`.
- Value shape: null. Event details for an `event` link: when and where it takes place and how many tickets it sells. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.external_reference_id

Declared alternatives: [BundleArchivedInstalledMerchantsEvent.data.previous_attributes.external_reference_id](../models/BundleArchivedInstalledMerchantsEvent.md#bundlearchivedinstalledmerchantseventdataprevious_attributesexternal_reference_id).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.inactive_message

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.inactive_message variant 1

anyOf variant 1: Message to show the buyer when the link is inactive..

- Value shape: string. Message to show the buyer when the link is inactive. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.inactive_message variant 2

anyOf variant 2.

- Value shape: null. Message to show the buyer when the link is inactive. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.legal

The terms and policy links checkouts started from this link show the buyer.

Field definitions: [shared fields](CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributeslegal).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.legal variant 1

anyOf CheckoutLegalConfig: The terms and policy links checkouts started from this link show the buyer..

- Optional: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.legal variant 2

anyOf variant 2.

- Undeclared: `contract_url`, `refund_policy_url`, `require_terms_of_service`, `shipping_policy_url`, `terms_of_service_url`.
- Value shape: null. The terms and policy links checkouts started from this link show the buyer. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.line_items

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.line_items variant 1

anyOf variant 1: What the link sells..

- Value shape: Array of [PaymentLinkLineItem](../models/PaymentLinkLineItem.md#paymentlinklineitem). What the link sells. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.line_items variant 2

anyOf variant 2.

- Value shape: null. What the link sells. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.max_completions

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.max_completions variant 1

anyOf variant 1: Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`..

- Value shape: integer. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. Format: `int32`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.max_completions variant 2

anyOf variant 2.

- Value shape: null. Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once the limit is reached, resolving the link fails with a request error. It can't be set below `completed_count`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.merchant_id

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.merchant_id](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributesmerchant_id).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.metadata

Declared alternatives: [CheckoutSessionClosedInstalledMerchantsEvent.data.previous_attributes.metadata](../models/CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesmetadata).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.name

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.name variant 1

anyOf variant 1: Name of the payment link..

- Value shape: string. Name of the payment link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the payment link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.payment_link_id

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.payment_link_id variant 1

anyOf variant 1: Unique identifier for this payment link, prefixed `pl_`..

- Value shape: string. Unique identifier for this payment link, prefixed `pl_`. Unique identifier for this payment link, prefixed `pl_`. Example: `"pl_01KEZF7C007WDMA5P9BPZ8J2AM"`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.payment_link_id variant 2

anyOf variant 2.

- Value shape: null. Unique identifier for this payment link, prefixed `pl_`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.payment_link_type

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.payment_link_type variant 1

anyOf variant 1: What kind of link this is..

- Value shape: string. What kind of link this is. Values: `"standard"`, `"donation"`, `"event"`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.payment_link_type variant 2

anyOf variant 2.

- Value shape: null. What kind of link this is. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.payments

Payment options for checkouts started from this link.

Field definitions: [shared fields](CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespayments).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.payments variant 1

anyOf CheckoutPaymentConfig: Payment options for checkouts started from this link..

- Optional: `enabled_payment_options`, `payment_note`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.payments variant 2

anyOf variant 2.

- Undeclared: `enabled_payment_options`, `payment_note`.
- Value shape: null. Payment options for checkouts started from this link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.promotion_config

Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes.

Field definitions: [shared fields](CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributespromotion_config).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.promotion_config variant 1

anyOf CheckoutPromotionConfig: Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes..

- Optional: `automatic_enabled`, `codes_enabled`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.promotion_config variant 2

anyOf variant 2.

- Undeclared: `automatic_enabled`, `codes_enabled`.
- Value shape: null. Whether automatic promotions apply to checkouts started from this link and whether buyers can enter promotion codes. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.redirects

Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration.

Field definitions: [shared fields](CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributesredirects).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.redirects variant 1

anyOf CheckoutRedirects: Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration..

- Optional: `cancel_url`, `expired_url`, `success_url`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.redirects variant 2

anyOf variant 2.

- Undeclared: `cancel_url`, `expired_url`, `success_url`.
- Value shape: null. Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.sales_end_at

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.sales_end_at variant 1

anyOf variant 1: RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it..

- Value shape: string. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.sales_end_at variant 2

anyOf variant 2.

- Value shape: null. RFC3339 timestamp after which the link stops starting checkouts and resolve fails with `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.status

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 1

anyOf variant 1: Whether the link can start new checkouts..

- Value shape: string. Whether the link can start new checkouts. Values: `"active"`, `"inactive"`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the link can start new checkouts. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.subscription_plan_id

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.subscription_plan_id variant 1

anyOf variant 1: ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription..

- Value shape: string. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. Example: `"plan_01KEZF7C004CY5ZR33XST2AASV"`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.subscription_plan_id variant 2

anyOf variant 2.

- Value shape: null. ID of the subscription plan the link sells. Absent for a link that doesn't sell a subscription. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax

Tax settings for checkouts started from this link.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Conditional | [CheckoutTaxCalculation](../models/CheckoutTaxCalculation.md#checkouttaxcalculation) | How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. The calculation the order Flint creates uses while tax is enabled. Replaced as a whole: send every field you want to keep. Omit it to use `tax.default_calculation` from your settings; a `provided` default applies only to orders you create, so it means automatic here. `calculation`: [field definitions](../models/CheckoutTaxConfig.md#checkouttaxconfig-variant-1calculation). |
| `enabled` | Conditional | boolean | Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. |

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1

anyOf CheckoutTaxConfig: Tax settings for checkouts started from this link..

- Optional: `calculation`, `enabled`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 2

anyOf variant 2.

- Undeclared: `calculation`, `enabled`.
- Value shape: null. Tax settings for checkouts started from this link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tax variant 1.calculation

Field definitions: [CheckoutTaxConfig variant 1.calculation](../models/CheckoutTaxConfig.md#checkouttaxconfig-variant-1calculation).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.theme

The title and colors for checkouts started from this link, over your branding settings.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accent_color` | Conditional | string | Accent color of the checkout, such as #1A73E8. |
| `primary_color` | Conditional | string | Primary color of the checkout, such as #1A73E8. |
| `title` | Conditional | string | Title shown in place of the merchant's business name. |

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.theme variant 1

anyOf ThemeConfig: The title and colors for checkouts started from this link, over your branding settings..

- Optional: `accent_color`, `primary_color`, `title`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.theme variant 2

anyOf variant 2.

- Undeclared: `accent_color`, `primary_color`, `title`.
- Value shape: null. The title and colors for checkouts started from this link, over your branding settings. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tip

Tip options for checkouts started from this link.

Field definitions: [shared fields](CheckoutSessionClosedInstalledMerchantsEvent.md#checkoutsessionclosedinstalledmerchantseventdataprevious_attributestip).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tip variant 1

anyOf CheckoutTipConfig: Tip options for checkouts started from this link..

- Optional: `custom_tip_enabled`, `default_smart_tip_money`, `default_tip_percent`, `enabled`, `smart_tip_money_options`, `smart_tips_enabled`, `tip_percent_options`.

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tip variant 2

anyOf variant 2.

- Undeclared: `custom_tip_enabled`, `default_smart_tip_money`, `default_tip_percent`, `enabled`, `smart_tip_money_options`, `smart_tips_enabled`, `tip_percent_options`.
- Value shape: null. Tip options for checkouts started from this link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tip variant 1.default_smart_tip_money

Field definitions: [BuyerCheckoutSession.tip.default_smart_tip_money](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipdefault_smart_tip_money).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.tip variant 1.smart_tip_money_options[]

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.total_quantity_sold

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.total_quantity_sold variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole-number quantity; fractional quantities are not supported. Format: `int32`. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.total_quantity_sold variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.updated_at

Declared alternatives: [ApiKeyRevokedEvent.data.previous_attributes.created_at](../models/ApiKeyRevokedEvent.md#apikeyrevokedeventdataprevious_attributescreated_at).

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.url

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.url variant 1

anyOf variant 1: URL buyers open to use the link..

- Value shape: string. URL buyers open to use the link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.url variant 2

anyOf variant 2.

- Value shape: null. URL buyers open to use the link. 

### PaymentLinkUpdatedInstalledMerchantsEvent.data.previous_attributes.version

Declared alternatives: [GiftCardLoadUpdatedInstalledMerchantsEvent.data.previous_attributes.version](../models/GiftCardLoadUpdatedInstalledMerchantsEvent.md#giftcardloadupdatedinstalledmerchantseventdataprevious_attributesversion).

### PaymentLinkUpdatedInstalledMerchantsEvent.source

Field definitions: [BalanceTransactionCreatedInstalledMerchantsEvent.source](../models/BalanceTransactionCreatedInstalledMerchantsEvent.md#balancetransactioncreatedinstalledmerchantseventsource).

