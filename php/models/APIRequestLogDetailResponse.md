[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIRequestLogDetailResponse

A response containing `APIRequestLogDetail` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [APIRequestLogDetail](../models/APIRequestLogDetail.md#apirequestlogdetail) | Full detail for one logged API request visible to the calling credential: headers, bodies, error summary, and how to reproduce it. `data`: [field definitions](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. |
| `request_id` | Required | string | maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### APIRequestLogDetailResponse.data

Full detail for one logged API request visible to the calling credential: headers, bodies, error summary, and how to reproduce it.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Required | string |  |
| `caller` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | The public resource that made this request. Absent when Flint cannot attribute the request. A reference to another resource by `resource_type` and `resource_id`. |
| `client_request_id` | Optional | string | The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. |
| `client_trace_id` | Optional | string | The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: `^[0-9a-f]{32}$`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `error_code` | Optional | string |  |
| `error_summary` | Optional | string | A concise explanation of why the request failed. |
| `error_type` | Optional | string | The error envelope's `type` for this response. Values: [11 declared values](APIRequestLogInput.md#apirequestloginput-error_type-values). |
| `expand` | Optional | Array of string | Normalized expand paths Flint applied. Absent when the request did not use expand. |
| `http_method` | Required | string |  |
| `ip_address` | Optional | string | The integration caller's IP address. Absent for buyer-side callers. |
| `latency_milliseconds` | Required | integer | Format: `int64`. |
| `path` | Required | string |  |
| `query_params` | Required | Array of [APIRequestLogQueryParam](../models/APIRequestLogQueryParam.md#apirequestlogqueryparam) |  |
| `recommended_action` | Optional | string | The next step to resolve this failure. |
| `reference_url` | Optional | string | A Flint guide that explains this failure. Absent when no guide applies. Format: `uri`. |
| `reproduction` | Required | [APIRequestLogReproduction](../models/APIRequestLogReproduction.md#apirequestlogreproduction) | A reproduction of the captured request. Replaying a non-GET request changes data. Replay with a sandbox key. |
| `request_body` | Optional | Alternative shapes (see declared variants) | The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. `request_body`: [declared alternatives](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatarequest_body). |
| `request_headers` | Optional | Map of string | Request headers as received, keyed by header name. Sensitive values read [REDACTED]. |
| `request_id` | Required | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `requested_api_version` | Optional | string |  |
| `requested_api_version_source` | Optional | string | Values: `"header"`, `"partner_app"`, `"merchant"`, `"current"`. |
| `resource_id` | Optional | string |  |
| `resource_type` | Optional | string | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [141 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). `resource_type`: [field definitions](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedataresource_type). |
| `response_body` | Optional | Alternative shapes (see declared variants) | The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. `response_body`: [declared alternatives](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatarequest_body). |
| `response_content_type` | Optional | string |  |
| `retry` | Optional | string | How to recover: same_request resends the identical request with the same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a new key; none requires correcting the request or following next_steps or next_actions. Values: `"same_request"`, `"after_refresh"`, `"none"`. |
| `route_pattern` | Required | string |  |
| `served_api_version` | Optional | string |  |
| `status_code` | Required | integer | Format: `int32`. |
| `user_agent` | Optional | string | The integration caller's user agent. Absent for buyer-side callers. |

### APIRequestLogDetailResponse.data.request_body

### APIRequestLogDetailResponse.data.request_body variant 1

oneOf variant 1.

- Value shape: object. The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. 

### APIRequestLogDetailResponse.data.request_body variant 2

oneOf variant 2.

- Value shape: Array of any. The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. 

### APIRequestLogDetailResponse.data.request_body variant 3

oneOf variant 3.

- Value shape: string. The captured body. A JSON object or array body is returned as redacted JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string. Absent when there was no body or the route does not capture bodies. 

### APIRequestLogDetailResponse.data.resource_type

Value shape: string. Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: `"api_key"`, `"api_request_log"`, `"balance"`, `"balance_transaction"`, `"bundle"`, `"bundle_component"`, `"category"`, `"checkout_session"`, `"checkout_session_customer_verification"`, `"credit_note"`, `"credit_note_allocation"`, `"custom_domain"`, `"customer"`, `"customer_address"`, `"customer_deletion_request"`, `"customer_email_preferences"`, `"customer_session"`, `"customer_verification"`, `"delivery_location_set"`, `"delivery_method"`, `"delivery_profile"`, `"delivery_quote"`, `"delivery_rate"`, `"delivery_rate_callback"`, `"delivery_revocation"`, `"delivery_selection"`, `"delivery_zone"`, `"demo_session"`, `"device"`, `"discount"`, `"dispute"`, `"email_change_request"`, `"environment_grant"`, `"feedback_report"`, `"file"`, `"flint_wallet"`, `"flint_wallet_card"`, `"fraud_warning"`, `"fulfillment"`, `"fulfillment_event"`, `"fulfillment_notification"`, `"gift_card"`, `"gift_card_funding_disposition"`, `"gift_card_load"`, `"gift_card_notification"`, `"gift_card_redemption"`, `"gift_card_transaction"`, `"image"`, `"inventory_adjustment"`, `"inventory_allocation_policy"`, `"inventory_allocation_policy_revision"`, `"inventory_count"`, `"inventory_item"`, `"inventory_level"`, `"inventory_movement"`, `"inventory_receipt"`, `"inventory_reservation"`, `"inventory_reservation_line"`, `"inventory_transfer"`, `"inventory_transfer_line"`, `"invoice"`, `"invoice_delivery_attempt"`, `"invoice_late_fee"`, `"invoice_line_item"`, `"invoice_manual_payment"`, `"invoice_payment_attempt"`, `"invoice_payment_term"`, `"location"`, `"merchant"`, `"merchant_billing_balance"`, `"merchant_billing_entry"`, `"merchant_billing_invoice"`, `"modifier"`, `"modifier_group"`, `"modifier_set"`, `"order"`, `"order_charge"`, `"order_line_item"`, `"order_line_item_modifier"`, `"order_payment_attempt"`, `"organization"`, `"package"`, `"package_item"`, `"partner_app"`, `"partner_app_credential"`, `"partner_app_install"`, `"payment_intent"`, `"payment_link"`, `"payment_link_custom_field"`, `"payment_link_line_item"`, `"payment_method"`, `"payment_method_domain"`, `"payment_review"`, `"payout"`, `"payout_destination"`, `"payout_settings"`, `"product"`, `"product_option"`, `"product_option_value"`, `"product_variant"`, `"promotion"`, `"promotion_code"`, `"purchase_refund_allocation"`, `"refund"`, `"refund_allocation"`, `"refund_line_item_adjustment"`, `"report"`, `"report_download"`, `"return"`, `"return_activity"`, `"return_disposition"`, `"return_inspection"`, `"return_inspection_line_item"`, `"return_line_item"`, `"return_policy"`, `"return_policy_revision"`, `"return_reason"`, `"return_receipt"`, `"return_receipt_line_item"`, `"return_resolution"`, `"risk_list"`, `"risk_list_item"`, `"risk_rule"`, `"sandbox"`, `"settings"`, `"shipment"`, `"subscription"`, `"subscription_delivery_migration"`, `"subscription_line_item"`, `"subscription_offer"`, `"subscription_payment_retry"`, `"subscription_plan"`, `"subscription_plan_line_item"`, `"tax_connection"`, `"tax_registration"`, `"test_clock"`, `"user"`, `"webhook_delivery"`, `"webhook_endpoint"`, `"webhook_event"`, `"workload_identity"`.

### APIRequestLogDetailResponse.data.response_body

Declared alternatives: [APIRequestLogDetailResponse.data.request_body](../models/APIRequestLogDetailResponse.md#apirequestlogdetailresponsedatarequest_body).

