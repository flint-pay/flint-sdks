[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# webhookEvents

### webhookEvents.get

Returns a specific webhook event for the authenticated merchant. Global partner-source records are invisible in sandbox mode; a direct reference returns 404 RESOURCE_NOT_FOUND.

`GET /v1/webhook-events/{webhook_event_id}`

Signature: `get(webhook_event_id: InputValue<string>, params?: WebhookEventsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_event_id` | Required | string | Flint webhook event ID. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### Response

Returned payload: [WebhookEvent](../models/WebhookEvent.md#webhookevent).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.webhookEvents.get("whev_01KEZF7C00362MS3HV970TRZGS", {}, {  });
```

[Complete runnable example](../examples/webhookEvents-get.mjs)

### webhookEvents.list

Returns recent canonical webhook events for the authenticated merchant. Sandbox reads omit global partner-source records. Filters selecting only partner_app or installed_merchants return an empty collection. Direct resource reads of partner-source records return 404 RESOURCE_NOT_FOUND in sandbox mode; exact-ID list filters return an empty collection when no visible records match. Default order: created_at descending, then webhook_event_id descending.

`GET /v1/webhook-events`

Signature: `list(params?: WebhookEventsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error. |
| `webhook_endpoint_id` | Optional | string | Filter to events that have a delivery for this webhook endpoint. pattern: `^whep_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `delivery_status` | Optional | Array of string or string | Filter to events that have a delivery with this status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. Values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. |
| `event_source` | Optional | Array of string or string | Filter by webhook event source. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. Values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `partner_app_id` | Optional | string | Filter by partner app ID for partner-source webhook events. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `event_type` | Optional | Array of string or string | Filter by webhook event type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [291 declared values](../models/CreateWebhookTestEventRequest.md#createwebhooktesteventrequest-event_type-values). Values: [291 declared values](../models/CreateWebhookTestEventRequest.md#createwebhooktesteventrequest-event_type-values). |
| `resource_type` | Optional | Array of string or string | Filter by affected resource type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [79 declared values](#webhookeventslist-input-resource_type--values). Values: [79 declared values](#webhookeventslist-input-resource_type--values). |
| `resource_id` | Optional | string | Filter by affected resource ID. pattern: `^((ad\|afri\|ba\|bag\|bal\|bam\|baoa\|basa\|bav\|bepevt\|betr\|bses\|btxn\|bue\|bun\|bunc\|bup\|busrc\|caddr\|cagr\|capsnap\|catid\|ccaevt\|ccop\|cdel\|cdom\|cecr\|ch\|clg\|clla\|cn\|cna\|cnart\|cnlease\|cnli\|cnmut\|cof\|cpoc\|cpop\|cs\|cscv\|cses\|cslimr\|csrt\|ctex\|ctg\|cus\|cver\|dca\|dcb\|dcbr\|dcgrp\|ddiag\|defc\|deff\|demo\|dev\|dleg\|dls\|dlsr\|dmet\|dmetr\|dms\|dmsevt\|dmslink\|dmsopen\|dopt\|dp\|dprof\|dprofr\|dqt\|drate\|drev\|dreval\|dsel\|dsle\|dti\|du\|dzone\|dzoner\|edat\|edel\|egrt\|fbc\|fbr\|fev\|file\|fnt\|frw\|fsu\|ful\|fw\|fwad\|fwcmd\|fwcon\|fwpm\|fwss\|gc\|gcg\|gcl\|gcn\|gcpra\|gcr\|gct\|gfd\|hat\|hce\|hcr\|hev\|hin\|hlk\|hnt\|hrp\|hsl\|hsr\|hth\|hwm\|iacr\|iaevt\|iksevt\|iksop\|img\|indel\|inevt\|inlf\|inv\|inv_cmd\|invadj\|invapp\|invart\|invc\|invcln\|invi\|invl\|invlease\|invli\|invm\|invp\|invpa\|invpay\|invpv\|invr\|invrea\|invrec\|invrecln\|invrln\|invse\|invt\|invtr\|invtrln\|iomevt\|ipt\|ivat\|key\|li\|loc\|mac\|mace\|mbbal\|mbclaim\|mbe\|mbin\|mbout\|mca\|mcdchg\|mcdsub\|mcfr\|mcr\|mcra\|mcrecon\|mcrve\|menv\|mer\|mfa\|mfce\|mg\|mod\|mpafc\|mpagr\|mpfa\|mpfc\|mre\|mrecv\|mrp\|ms\|msa\|msg\|msinv\|msinvl\|mso\|msu\|mtac\|ntc\|ntf\|oacr\|oact\|oalk\|och\|ocra\|oed\|olim\|olimas\|olra\|omp\|opahold\|opaleg\|opaobs\|opaop\|opard\|oparp\|opasd\|opasgen\|opasm\|opasp\|opat\|opaum\|opcred\|opra\|oprhold\|opsa\|opt\|optv\|ord\|ordisp\|org\|orp\|orr\|otpial\|otra\|ovst\|pac\|pacr\|pact\|paog\|papp\|pasg\|pat\|patok\|pava\|pavc\|pcae\|pcal\|pcb\|pcfg\|pchkr\|pcode\|pcri\|pcrr\|pcsch\|pdest\|peat\|pendact\|pfbal\|pfbt\|pfee\|pfhi\|pfhold\|pfi\|pfinc\|pfloss\|pflrec\|pfpo\|pfr\|pfrb\|pfrf\|pfs\|phold\|pi\|pia\|pilm\|pinst\|piop\|pipf\|pkg\|pki\|pl\|plan\|plcf\|ple\|plli\|plog\|pm\|pmcr\|pmdom\|po\|poe\|polog\|ppac\|ppd\|pppa\|pppr\|ppta\|pra\|pref\|prl\|prlp\|prod\|promo\|prrc\|prt\|prtn\|psact\|pses\|pset\|psetop\|psinc\|psplit\|psrev\|psu\|pvimg\|pvlaunch\|pvscn\|pvses\|pvshare\|pvw\|ra\|rcs\|rdl\|rdr\|rdrcfg\|rdrpres\|recon\|ref\|rep\|ret\|retact\|retadj\|retcmd\|retdsp\|retfx\|retinli\|retins\|retli\|retrc\|retrcli\|retrepli\|retres\|retresli\|retshli\|rev\|rl\|rli\|rlia\|rliar\|rlima\|rlog\|rpoe\|rpol\|rpolv\|rprev\|rra\|rrq\|rrsn\|rta\|rtba\|rule\|sdmig\|sdts\|sdtu\|set\|sfba\|sfpd\|shp\|sli\|smf\|soffer\|spc\|spcc\|spli\|spol\|sppd\|spr\|ssu\|sub\|tac\|tcae\|tcb\|tcbr\|tce\|tclk\|tcn\|test\|tip\|tkt\|trg\|txb\|usr\|var\|watt\|wdel\|whcl\|whep\|whev\|whout\|whrc\|wid\|ws)_[0-9A-HJKMNP-TV-Z]{26}\|fwa_[A-Z2-7]+\|fwc_[A-Z2-7]+\|fwin_[0-9a-f]+\|req_([0-9a-f]+\|caller_supplied_rate\|pickup_distance_loc_[0-9A-HJKMNP-TV-Z]{26}))$`. |
| `api_request_log_id` | Optional | string | Filter by API request log ID associated with the event. pattern: `^rlog_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `request_id` | Optional | string | Filter by request ID associated with the event. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `test` | Optional | boolean | Filter by whether the event is synthetic: true returns only synthetic test events, false excludes them. Omit to return all events. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### webhookEvents.list input resource_type [] values

- `"api_key"`
- `"balance"`
- `"balance_transaction"`
- `"bundle"`
- `"category"`
- `"checkout_session"`
- `"credit_note"`
- `"credit_note_allocation"`
- `"custom_domain"`
- `"customer"`
- `"customer_deletion_request"`
- `"customer_email_preferences"`
- `"delivery_location_set"`
- `"delivery_method"`
- `"delivery_profile"`
- `"delivery_rate_callback"`
- `"delivery_revocation"`
- `"delivery_selection"`
- `"delivery_zone"`
- `"dispute"`
- `"environment_grant"`
- `"fraud_warning"`
- `"fulfillment"`
- `"fulfillment_event"`
- `"gift_card"`
- `"gift_card_load"`
- `"gift_card_notification"`
- `"gift_card_redemption"`
- `"gift_card_transaction"`
- `"inventory_count"`
- `"inventory_level"`
- `"inventory_receipt"`
- `"inventory_reservation"`
- `"inventory_transfer"`
- `"invoice"`
- `"invoice_delivery_attempt"`
- `"invoice_manual_payment"`
- `"invoice_payment_attempt"`
- `"merchant"`
- `"merchant_billing_balance"`
- `"merchant_billing_invoice"`
- `"modifier_group"`
- `"modifier_set"`
- `"order"`
- `"order_edit"`
- `"package"`
- `"partner_app"`
- `"partner_app_install"`
- `"payment_intent"`
- `"payment_link"`
- `"payment_method"`
- `"payment_review"`
- `"payment_split"`
- `"payout"`
- `"payout_destination"`
- `"payout_settings"`
- `"platform_fee"`
- `"platform_fee_payout"`
- `"price_list"`
- `"product"`
- `"product_variant"`
- `"promotion"`
- `"promotion_code"`
- `"reader"`
- `"refund"`
- `"report"`
- `"return"`
- `"return_disposition"`
- `"return_inspection"`
- `"return_receipt"`
- `"return_resolution"`
- `"shipment"`
- `"subscription"`
- `"subscription_delivery_migration"`
- `"subscription_payment_retry"`
- `"tax_calculation_callback"`
- `"tax_connection"`
- `"test_clock"`
- `"ticket"`

#### Response

Returned payload: [WebhookEventListResponse](../models/WebhookEventListResponse.md#webhookeventlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

Pagination: `listItems`, `listPages`. [Canonical pagination example](../RUNTIME.md#pagination-and-polling).

#### Example

```typescript
const result = await client.webhookEvents.list({}, {  });
```

[Complete runnable example](../examples/webhookEvents-list.mjs)

### webhookEvents.stream

Streams canonical merchant webhook events created after the connection opens or after the supplied event ID. SSE event IDs are resumable webhook event IDs. Control records include ready, gap, withheld, and disconnect. Gap records indicate cursor_unavailable or payload_expired; withheld records hide payloads the caller cannot read. Backpressure emits disconnect with reason backpressure and resume_cursor identifying the last sent event, so clients can reconnect without losing events. A partner app token streams the installed merchant's events in the environment its grant covers, and sees a payload only for an event Flint forwards to installed-merchant endpoints whose read scope the grant holds; every other event is a withheld record.

`GET /v1/webhook-events/stream`

Signature: `stream(params?: WebhookEventsStreamParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `event_type` | Optional | Array of string or string | Filter by canonical merchant webhook event type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [284 declared values](#webhookeventsstream-input-event_type--values). Values: [284 declared values](#webhookeventsstream-input-event_type--values). |
| `test` | Optional | boolean | Filter by whether the event is synthetic: true returns only synthetic test events, false excludes them. Omit to return all events. |
| `after_event_id` | Optional | string | Webhook event ID to resume after. Last-Event-ID is preferred when reconnecting. pattern: `^whev_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Last-Event-ID` | Optional | string | Webhook event cursor received from the previous SSE connection. |
| `Flint-Merchant-Id` | Optional | string | Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `Flint-Mode` | Optional | string | Mode of the request context, live or test. Optional; it must match the credential's mode. Values: `"test"`, `"live"`. |
| `Flint-Sandbox-Id` | Optional | string | Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: `^test_[0-9A-HJKMNP-TV-Z]{26}$`. |

#### webhookEvents.stream input event_type [] values

- `"api_key.created"`
- `"api_key.revoked"`
- `"api_key.updated"`
- `"balance.updated"`
- `"balance_transaction.created"`
- `"balance_transaction.updated"`
- `"bundle.archived"`
- `"bundle.created"`
- `"bundle.updated"`
- `"category.created"`
- `"category.deleted"`
- `"category.updated"`
- `"checkout_session.closed"`
- `"checkout_session.created"`
- `"checkout_session.expired"`
- `"checkout_session.invalidated"`
- `"checkout_session.paid"`
- `"checkout_session.partially_paid"`
- `"checkout_session.updated"`
- `"credit_note.created"`
- `"credit_note.issued"`
- `"credit_note.updated"`
- `"credit_note.voided"`
- `"credit_note_allocation.created"`
- `"credit_note_allocation.reversed"`
- `"custom_domain.archived"`
- `"custom_domain.updated"`
- `"customer.created"`
- `"customer.deleted"`
- `"customer.updated"`
- `"customer_deletion_request.completed"`
- `"customer_deletion_request.created"`
- `"customer_deletion_request.failed"`
- `"customer_deletion_request.processing"`
- `"customer_deletion_request.rejected"`
- `"customer_email_preferences.updated"`
- `"delivery_location_set.archived"`
- `"delivery_location_set.created"`
- `"delivery_location_set.updated"`
- `"delivery_method.activated"`
- `"delivery_method.archived"`
- `"delivery_method.created"`
- `"delivery_method.deactivated"`
- `"delivery_method.updated"`
- `"delivery_profile.archived"`
- `"delivery_profile.created"`
- `"delivery_profile.updated"`
- `"delivery_rate_callback.activated"`
- `"delivery_rate_callback.archived"`
- `"delivery_rate_callback.created"`
- `"delivery_rate_callback.deactivated"`
- `"delivery_rate_callback.updated"`
- `"delivery_revocation.created"`
- `"delivery_selection.committed"`
- `"delivery_zone.archived"`
- `"delivery_zone.created"`
- `"delivery_zone.updated"`
- `"dispute.created"`
- `"dispute.inquiry_closed"`
- `"dispute.lost"`
- `"dispute.needs_response"`
- `"dispute.prevented"`
- `"dispute.updated"`
- `"dispute.won"`
- `"fraud_warning.created"`
- `"fraud_warning.updated"`
- `"fulfillment.canceled"`
- `"fulfillment.completed"`
- `"fulfillment.created"`
- `"fulfillment.failed"`
- `"fulfillment.updated"`
- `"fulfillment_event.created"`
- `"gift_card.created"`
- `"gift_card.updated"`
- `"gift_card_load.created"`
- `"gift_card_load.updated"`
- `"gift_card_notification.created"`
- `"gift_card_notification.updated"`
- `"gift_card_redemption.created"`
- `"gift_card_redemption.updated"`
- `"gift_card_transaction.created"`
- `"inventory_count.applied"`
- `"inventory_count.updated"`
- `"inventory_level.shortage_detected"`
- `"inventory_level.updated"`
- `"inventory_receipt.created"`
- `"inventory_reservation.action_required"`
- `"inventory_reservation.at_risk"`
- `"inventory_reservation.closed"`
- `"inventory_reservation.committed"`
- `"inventory_reservation.consumed"`
- `"inventory_reservation.created"`
- `"inventory_reservation.hold_expired"`
- `"inventory_reservation.released"`
- `"inventory_reservation.updated"`
- `"inventory_transfer.closed"`
- `"inventory_transfer.departed"`
- `"inventory_transfer.lost"`
- `"inventory_transfer.received"`
- `"inventory_transfer.returned"`
- `"inventory_transfer.updated"`
- `"invoice.collection_block_resolved"`
- `"invoice.collection_blocked"`
- `"invoice.created"`
- `"invoice.credited"`
- `"invoice.issue_failed"`
- `"invoice.issued"`
- `"invoice.late_fee_assessed"`
- `"invoice.late_fee_due"`
- `"invoice.late_fee_waived"`
- `"invoice.marked_uncollectible"`
- `"invoice.overdue"`
- `"invoice.paid"`
- `"invoice.partially_paid"`
- `"invoice.partially_refunded"`
- `"invoice.refunded"`
- `"invoice.reminder_due"`
- `"invoice.reopened"`
- `"invoice.sent"`
- `"invoice.updated"`
- `"invoice.voided"`
- `"invoice_delivery_attempt.failed"`
- `"invoice_delivery_attempt.sent"`
- `"invoice_delivery_attempt.suppressed"`
- `"invoice_manual_payment.created"`
- `"invoice_manual_payment.reversed"`
- `"invoice_payment_attempt.canceled"`
- `"invoice_payment_attempt.expired"`
- `"invoice_payment_attempt.failed"`
- `"invoice_payment_attempt.processing"`
- `"invoice_payment_attempt.settled"`
- `"merchant.readiness_updated"`
- `"merchant.updated"`
- `"merchant_billing_balance.updated"`
- `"merchant_billing_invoice.issued"`
- `"merchant_billing_invoice.updated"`
- `"modifier_group.archived"`
- `"modifier_group.created"`
- `"modifier_group.updated"`
- `"modifier_set.archived"`
- `"modifier_set.created"`
- `"modifier_set.updated"`
- `"order.closed"`
- `"order.created"`
- `"order.inventory_exception_created"`
- `"order.inventory_exception_resolved"`
- `"order.paid"`
- `"order.partially_paid"`
- `"order.partially_refunded"`
- `"order.refunded"`
- `"order.updated"`
- `"order_edit.created"`
- `"package.created"`
- `"package.updated"`
- `"partner_app.platform_approved"`
- `"partner_app.platform_limited"`
- `"partner_app.platform_rejected"`
- `"partner_app.updated"`
- `"payment_intent.authorization_expiring"`
- `"payment_intent.canceled"`
- `"payment_intent.created"`
- `"payment_intent.expired"`
- `"payment_intent.fulfillment_hold_updated"`
- `"payment_intent.payment_failed"`
- `"payment_intent.processing"`
- `"payment_intent.requires_action"`
- `"payment_intent.requires_capture"`
- `"payment_intent.succeeded"`
- `"payment_intent.updated"`
- `"payment_link.created"`
- `"payment_link.updated"`
- `"payment_method.activated"`
- `"payment_method.archived"`
- `"payment_method.failed"`
- `"payment_method.updated"`
- `"payment_review.closed"`
- `"payment_review.opened"`
- `"payment_review.reopened"`
- `"payment_split.canceled"`
- `"payment_split.created"`
- `"payment_split.failed"`
- `"payment_split.succeeded"`
- `"payment_split.updated"`
- `"payout.canceled"`
- `"payout.created"`
- `"payout.failed"`
- `"payout.reversed"`
- `"payout.succeeded"`
- `"payout.updated"`
- `"payout_destination.archived"`
- `"payout_destination.created"`
- `"payout_destination.disabled"`
- `"payout_destination.updated"`
- `"payout_settings.updated"`
- `"platform_fee.canceled"`
- `"platform_fee.created"`
- `"platform_fee.succeeded"`
- `"platform_fee.updated"`
- `"platform_fee_payout.created"`
- `"platform_fee_payout.failed"`
- `"platform_fee_payout.succeeded"`
- `"price_list.archived"`
- `"price_list.created"`
- `"price_list.updated"`
- `"product.archived"`
- `"product.created"`
- `"product.updated"`
- `"product_variant.archived"`
- `"product_variant.created"`
- `"product_variant.updated"`
- `"promotion.archived"`
- `"promotion.created"`
- `"promotion.updated"`
- `"promotion_code.archived"`
- `"promotion_code.created"`
- `"promotion_code.updated"`
- `"reader.archived"`
- `"reader.created"`
- `"reader.updated"`
- `"refund.created"`
- `"refund.failed"`
- `"refund.partially_succeeded"`
- `"refund.succeeded"`
- `"refund.updated"`
- `"report.failed"`
- `"report.succeeded"`
- `"return.canceled"`
- `"return.completed"`
- `"return.created"`
- `"return.decision_recorded"`
- `"return.reopened"`
- `"return.updated"`
- `"return_disposition.created"`
- `"return_disposition.updated"`
- `"return_inspection.acceptance_decided"`
- `"return_inspection.created"`
- `"return_inspection.superseded"`
- `"return_receipt.created"`
- `"return_receipt.superseded"`
- `"return_receipt.verified"`
- `"return_resolution.created"`
- `"return_resolution.updated"`
- `"shipment.created"`
- `"shipment.updated"`
- `"subscription.activated"`
- `"subscription.canceled"`
- `"subscription.cancellation_scheduled"`
- `"subscription.created"`
- `"subscription.cycle_skipped"`
- `"subscription.delivery_action_required"`
- `"subscription.delivery_pause_upcoming"`
- `"subscription.delivery_updated"`
- `"subscription.dunning_exhausted"`
- `"subscription.end_upcoming"`
- `"subscription.past_due"`
- `"subscription.paused"`
- `"subscription.payment_succeeded"`
- `"subscription.plan_change_canceled"`
- `"subscription.plan_change_scheduled"`
- `"subscription.plan_changed"`
- `"subscription.reactivated"`
- `"subscription.renewal_upcoming"`
- `"subscription.resumed"`
- `"subscription.trial_ending"`
- `"subscription.updated"`
- `"subscription_delivery_migration.completed"`
- `"subscription_payment_retry.created"`
- `"subscription_payment_retry.failed"`
- `"subscription_payment_retry.succeeded"`
- `"tax_calculation_callback.activated"`
- `"tax_calculation_callback.archived"`
- `"tax_calculation_callback.created"`
- `"tax_calculation_callback.deactivated"`
- `"tax_calculation_callback.updated"`
- `"tax_connection.updated"`
- `"test_clock.advancing"`
- `"test_clock.archived"`
- `"test_clock.created"`
- `"test_clock.failed"`
- `"test_clock.ready"`
- `"ticket.checked_in"`
- `"ticket.created"`
- `"ticket.updated"`
- `"ticket.voided"`

#### Response

Response body (inside Result.data): EventStream.

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 409 | ConflictError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: `merchant`. [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.webhookEvents.stream({}, {  });
```

[Complete runnable example](../examples/webhookEvents-stream.mjs)

