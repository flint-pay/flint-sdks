[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# webhookEvents

### webhookEvents.get

Returns a specific webhook event for the authenticated merchant.

`GET /v1/webhook-events/{webhook_event_id}`

Signature: `get(webhook_event_id: InputValue<string>, params?: WebhookEventsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `webhook_event_id` | Required | string | Flint webhook event ID. |

#### Response

Returned payload: [WebhookEvent](../models/WebhookEvent.md#webhookevent).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 404 | NotFoundError |
| 410 | ApiError |
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
const result = await client.webhookEvents.get("whev_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, {  });
```

[Complete runnable example](../examples/webhookEvents-get.mjs)

### webhookEvents.list

Returns recent canonical webhook events for the authenticated merchant. Default order: created_at descending, then webhook_event_id descending.

`GET /v1/webhook-events`

Signature: `list(params?: WebhookEventsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `webhook_endpoint_id` | Optional | string | Filter to events that have a delivery for this webhook endpoint. |
| `delivery_status` | Optional | Array of string or string | Filter to events that have a delivery with this status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. Values: `"pending"`, `"delivered"`, `"failed"`, `"suppressed"`. |
| `event_source` | Optional | Array of string or string | Filter by webhook event source. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. Values: `"merchant"`, `"partner_app"`, `"installed_merchants"`. |
| `partner_app_id` | Optional | string | Filter by partner app ID for partner-source webhook events. |
| `event_type` | Optional | Array of string or string | Filter by webhook event type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [251 declared values](../models/CreateWebhookTestEventRequest.md#createwebhooktesteventrequest-event_type-values). Values: [251 declared values](../models/CreateWebhookTestEventRequest.md#createwebhooktesteventrequest-event_type-values). |
| `resource_type` | Optional | Array of string or string | Filter by affected resource type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [68 declared values](#webhookeventslist-input-resource_type--values). Values: [68 declared values](#webhookeventslist-input-resource_type--values). |
| `resource_id` | Optional | string | Filter by affected resource ID. |
| `api_request_log_id` | Optional | string | Filter by API request log ID associated with the event. |
| `request_id` | Optional | string | Filter by request ID associated with the event. |
| `created_after` | Optional | string | Inclusive lower bound on created_at. Format: `date-time`. |
| `created_before` | Optional | string | Exclusive upper bound on created_at. Format: `date-time`. |
| `include` | Optional | Array of string | Optional comma-separated expansions. Use test_events to include synthetic webhook test events. Items values: `"test_events"`. |

#### webhookEvents.list input resource_type [] values

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
- `"package"`
- `"partner_app_install"`
- `"payment_intent"`
- `"payment_link"`
- `"payment_method"`
- `"payment_review"`
- `"payout"`
- `"payout_destination"`
- `"payout_settings"`
- `"product"`
- `"product_variant"`
- `"promotion"`
- `"promotion_code"`
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
- `"tax_connection"`
- `"test_clock"`

#### Response

Returned payload: [WebhookEventListResponse](../models/WebhookEventListResponse.md#webhookeventlistresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 410 | ApiError |
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

Streams canonical merchant webhook events created after the connection opens or after the supplied event ID. SSE event IDs are resumable webhook event IDs. Control records include ready, gap, withheld, and disconnect. Gap records indicate cursor_unavailable or payload_expired; withheld records hide payloads the caller cannot read. Backpressure emits disconnect with reason backpressure and resume_cursor identifying the last sent event, so clients can reconnect without losing events.

`GET /v1/webhook-events/stream`

Signature: `stream(params?: WebhookEventsStreamParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `event_type` | Optional | Array of string or string | Filter by canonical merchant webhook event type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. Items values: [245 declared values](#webhookeventsstream-input-event_type--values). Values: [245 declared values](#webhookeventsstream-input-event_type--values). |
| `after_event_id` | Optional | string | Webhook event ID to resume after. Last-Event-ID is preferred when reconnecting. |
| `Last-Event-ID` | Optional | string | Webhook event cursor received from the previous SSE connection. |

#### webhookEvents.stream input event_type [] values

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
- `"delivery_location_set.activated"`
- `"delivery_location_set.archived"`
- `"delivery_location_set.created"`
- `"delivery_location_set.deactivated"`
- `"delivery_location_set.updated"`
- `"delivery_method.activated"`
- `"delivery_method.archived"`
- `"delivery_method.created"`
- `"delivery_method.deactivated"`
- `"delivery_method.updated"`
- `"delivery_profile.activated"`
- `"delivery_profile.archived"`
- `"delivery_profile.created"`
- `"delivery_profile.deactivated"`
- `"delivery_profile.updated"`
- `"delivery_rate_callback.activated"`
- `"delivery_rate_callback.archived"`
- `"delivery_rate_callback.created"`
- `"delivery_rate_callback.deactivated"`
- `"delivery_rate_callback.updated"`
- `"delivery_revocation.created"`
- `"delivery_selection.committed"`
- `"delivery_zone.activated"`
- `"delivery_zone.archived"`
- `"delivery_zone.created"`
- `"delivery_zone.deactivated"`
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
- `"inventory_transfer.closed"`
- `"inventory_transfer.departed"`
- `"inventory_transfer.lost"`
- `"inventory_transfer.received"`
- `"inventory_transfer.returned"`
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
- `"package.created"`
- `"package.updated"`
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
- `"payment_review.closed"`
- `"payment_review.opened"`
- `"payment_review.reopened"`
- `"payout.canceled"`
- `"payout.created"`
- `"payout.failed"`
- `"payout.paid"`
- `"payout.reversed"`
- `"payout.updated"`
- `"payout_destination.archived"`
- `"payout_destination.created"`
- `"payout_destination.disabled"`
- `"payout_destination.updated"`
- `"payout_settings.updated"`
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
- `"subscription.past_due"`
- `"subscription.paused"`
- `"subscription.payment_succeeded"`
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
- `"tax_connection.updated"`
- `"test_clock.advancing"`
- `"test_clock.archived"`
- `"test_clock.created"`
- `"test_clock.failed"`
- `"test_clock.ready"`

#### Response

Response body (inside Result.data): EventStream.

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 403 | PermissionError |
| 410 | ApiError |
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

