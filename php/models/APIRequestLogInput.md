[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIRequestLogInput

A record of an API request and its response.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_request_log_id` | Required | string | Stable identifier of this log entry. Example: `"rlog_01KEZF7C008XJCH6BHA224X46F"`. |
| `caller` | Optional | [ResourceReferenceInput](../models/ResourceReferenceInput.md#resourcereferenceinput) | The public resource that made this request. Absent when Flint cannot attribute the request. A reference to another resource by `resource_type` and `resource_id`. |
| `client_request_id` | Optional | string | The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent none. minLength: `1`. maxLength: `128`. pattern: `^[\x21-\x7E]+$`. Example: `"checkout-1842"`. |
| `client_trace_id` | Optional | string | The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent. pattern: `^[0-9a-f]{32}$`. Example: `"0123456789abcdef0123456789abcdef"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `error_code` | Optional | string | The response's top-level error `code`. Absent for successful requests. |
| `error_summary` | Optional | string | A concise explanation of why the request failed. |
| `error_type` | Optional | string | The error envelope's `type` for this response. Values: [11 declared values](#apirequestloginput-error_type-values). |
| `expand` | Optional | Array of string | Normalized expand paths Flint applied. Absent when the request did not use expand. |
| `http_method` | Required | string | HTTP method of the request. |
| `latency_milliseconds` | Required | integer | Time Flint spent handling the request, in milliseconds. Format: `int64`. |
| `partner_app_id` | Optional | string | The partner app whose partner app token made this request; `caller` is the install. Absent for every other caller. pattern: `^papp_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `path` | Required | string | Request path as sent, with real IDs, such as /v1/orders/ord_123. |
| `recommended_action` | Optional | string | The next step to resolve this failure. |
| `reference_url` | Optional | string | A Flint guide that explains this failure. Absent when no guide applies. Format: `uri`. Example: `"https://example.com/receipt"`. |
| `request_id` | Required | string | Records created before server-minted request IDs keep their original ID. maxLength: `128`. Example: `"req_01KWM6WAHG3N9Q8T2V5XRZ7C4D"`. |
| `requested_api_version` | Optional | string | The API version Flint resolved for the request. |
| `requested_api_version_source` | Optional | string | Where `requested_api_version` came from. Absent when Flint did not record one. Values: `"header"`, `"partner_app"`, `"merchant"`, `"current"`. |
| `resource_id` | Optional | string | The ID of the resource the request is about, when Flint can attribute it to one. A failed create can have a `resource_type` and no ID. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `resource_type` | Optional | string | The kind of resource the request is about, when Flint can attribute it to one. Example: `"order"`. Values: [146 declared values](#apirequestloginput-resource_type-values). |
| `retry` | Optional | string | Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Values: `"same_request"`, `"after_refresh"`, `"none"`. |
| `route_pattern` | Required | string | The matched route as a method and path template, such as `POST /v1/orders`. |
| `served_api_version` | Optional | string | The API version Flint used to encode the response. |
| `status_code` | Required | integer | HTTP status Flint returned. Format: `int32`. |

#### APIRequestLogInput error_type values

- `"authentication_error"`
- `"authorization_error"`
- `"validation_error"`
- `"not_found_error"`
- `"conflict_error"`
- `"rate_limit_error"`
- `"external_service_error"`
- `"timeout_error"`
- `"unavailable_error"`
- `"internal_error"`
- `"protocol_error"`

#### APIRequestLogInput resource_type values

- `"api_key"`
- `"api_request_log"`
- `"balance"`
- `"balance_transaction"`
- `"bundle"`
- `"bundle_component"`
- `"category"`
- `"checkout_session"`
- `"checkout_session_customer_verification"`
- `"credit_note"`
- `"credit_note_allocation"`
- `"custom_domain"`
- `"customer"`
- `"customer_address"`
- `"customer_deletion_request"`
- `"customer_email_preferences"`
- `"customer_session"`
- `"customer_tax_exemption"`
- `"customer_verification"`
- `"delivery_location_set"`
- `"delivery_method"`
- `"delivery_profile"`
- `"delivery_quote"`
- `"delivery_rate"`
- `"delivery_rate_callback"`
- `"delivery_revocation"`
- `"delivery_selection"`
- `"delivery_zone"`
- `"demo_session"`
- `"device"`
- `"discount"`
- `"dispute"`
- `"email_change_request"`
- `"environment_grant"`
- `"feedback_report"`
- `"file"`
- `"flint_wallet"`
- `"flint_wallet_card"`
- `"fraud_warning"`
- `"fulfillment"`
- `"fulfillment_event"`
- `"fulfillment_notification"`
- `"gift_card"`
- `"gift_card_funding_disposition"`
- `"gift_card_load"`
- `"gift_card_notification"`
- `"gift_card_redemption"`
- `"gift_card_transaction"`
- `"image"`
- `"inventory_adjustment"`
- `"inventory_allocation_policy"`
- `"inventory_allocation_policy_revision"`
- `"inventory_count"`
- `"inventory_item"`
- `"inventory_level"`
- `"inventory_movement"`
- `"inventory_receipt"`
- `"inventory_reservation"`
- `"inventory_reservation_line"`
- `"inventory_transfer"`
- `"inventory_transfer_line"`
- `"invoice"`
- `"invoice_delivery_attempt"`
- `"invoice_late_fee"`
- `"invoice_line_item"`
- `"invoice_manual_payment"`
- `"invoice_payment_attempt"`
- `"invoice_payment_term"`
- `"location"`
- `"merchant"`
- `"merchant_billing_balance"`
- `"merchant_billing_entry"`
- `"merchant_billing_invoice"`
- `"modifier"`
- `"modifier_group"`
- `"modifier_set"`
- `"order"`
- `"order_charge"`
- `"order_edit"`
- `"order_line_item"`
- `"order_line_item_modifier"`
- `"order_payment_attempt"`
- `"package"`
- `"package_item"`
- `"partner_app"`
- `"partner_app_credential"`
- `"partner_app_install"`
- `"payment_intent"`
- `"payment_link"`
- `"payment_link_custom_field"`
- `"payment_link_line_item"`
- `"payment_method"`
- `"payment_method_domain"`
- `"payment_review"`
- `"payout"`
- `"payout_destination"`
- `"payout_settings"`
- `"price_list"`
- `"price_list_price"`
- `"product"`
- `"product_option"`
- `"product_option_value"`
- `"product_variant"`
- `"promotion"`
- `"promotion_code"`
- `"purchase_refund_allocation"`
- `"refund"`
- `"refund_allocation"`
- `"refund_line_item_adjustment"`
- `"report"`
- `"report_download"`
- `"return"`
- `"return_activity"`
- `"return_disposition"`
- `"return_inspection"`
- `"return_inspection_line_item"`
- `"return_line_item"`
- `"return_policy"`
- `"return_policy_revision"`
- `"return_reason"`
- `"return_receipt"`
- `"return_receipt_line_item"`
- `"return_resolution"`
- `"risk_list"`
- `"risk_list_item"`
- `"risk_rule"`
- `"sandbox"`
- `"settings"`
- `"shipment"`
- `"subscription"`
- `"subscription_delivery_migration"`
- `"subscription_line_item"`
- `"subscription_offer"`
- `"subscription_payment_retry"`
- `"subscription_plan"`
- `"subscription_plan_line_item"`
- `"tax_calculation_callback"`
- `"tax_connection"`
- `"tax_registration"`
- `"test_clock"`
- `"ticket"`
- `"user"`
- `"webhook_delivery"`
- `"webhook_endpoint"`
- `"webhook_event"`
- `"workload_identity"`

