[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# resourceTimelines

### resourceTimelines.get

Returns summary-only API request, webhook event, webhook delivery attempt, and image mutation entries for a single public API resource. The caller must have developer.resource_timelines.read and the matching read scope for the requested resource type. Default order: occurred_at descending, then resource_timeline_entry_id descending.

`GET /v1/resource-timelines/{resource_id}`

Signature: `get(string|Model $resource_id, array|Model|null $params = null, ?RequestOptions $options = null)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string | Flint public API resource ID. |
| `resource_type` | Optional | string | Optional resource type. Must match the resource_id prefix when present. Values: [49 declared values](#resourcetimelinesget-input-resource_type-values). |
| `include` | Optional | Array of string | Optional comma-separated timeline entry groups. Defaults to all four groups: requests,webhooks,attempts,image_mutations. Items values: `"requests"`, `"webhooks"`, `"attempts"`, `"image_mutations"`. |
| `page_size` | Optional | integer | Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: `1`. maximum: `100`. Default: `20`. |
| `page_token` | Optional | string | Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error. |
| `occurred_after` | Optional | string | Inclusive lower bound on occurred_at. Format: `date-time`. |
| `occurred_before` | Optional | string | Exclusive upper bound on occurred_at. Format: `date-time`. |

#### resourceTimelines.get input resource_type values

- `"balance"`
- `"balance_transaction"`
- `"bundle"`
- `"category"`
- `"checkout_session"`
- `"credit_note"`
- `"credit_note_allocation"`
- `"customer"`
- `"dispute"`
- `"fraud_warning"`
- `"inventory_count"`
- `"inventory_level"`
- `"inventory_receipt"`
- `"inventory_reservation"`
- `"inventory_reservation_line"`
- `"inventory_transfer"`
- `"invoice"`
- `"invoice_payment_term"`
- `"merchant_billing_balance"`
- `"merchant_billing_invoice"`
- `"modifier"`
- `"modifier_group"`
- `"modifier_set"`
- `"order"`
- `"payment_intent"`
- `"payment_link"`
- `"payment_method"`
- `"payment_method_domain"`
- `"payment_review"`
- `"payout"`
- `"payout_destination"`
- `"payout_settings"`
- `"product"`
- `"product_variant"`
- `"promotion"`
- `"promotion_code"`
- `"refund"`
- `"return"`
- `"return_activity"`
- `"return_disposition"`
- `"return_inspection"`
- `"return_receipt"`
- `"return_resolution"`
- `"risk_list"`
- `"risk_list_item"`
- `"risk_rule"`
- `"subscription"`
- `"subscription_plan"`
- `"test_clock"`

#### Response

Returned payload: [ResourceTimeline](../models/ResourceTimeline.md#resourcetimeline).

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

```php
$result = $client->resourceTimelines->get('ord_01ARZ3NDEKTSV4RRFFQ69G5FAV', [], new RequestOptions());
```

[Complete runnable example](../examples/resourceTimelines-get.php)

