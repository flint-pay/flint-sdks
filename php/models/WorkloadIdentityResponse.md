[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityResponse

A response containing `WorkloadIdentity` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [WorkloadIdentity](../models/WorkloadIdentity.md#workloadidentity) | Resource, collection, or operation result returned by this request. A policy that grants API access to a workload authenticated by an external identity provider. `data`: [field definitions](../models/WorkloadIdentityResponse.md#workloadidentityresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### WorkloadIdentityResponse.data

Resource, collection, or operation result returned by this request. A policy that grants API access to a workload authenticated by an external identity provider.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `archived_at` | Optional | string | Time the identity was archived. Omitted before archival. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `audience` | Required | string |  |
| `claim_conditions` | Required | Array of [WorkloadIdentityClaimCondition](../models/WorkloadIdentityClaimCondition.md#workloadidentityclaimcondition) | Bounded value array of top-level scalar claim conditions. Replaced as a whole on PATCH; [] clears it when the remaining policy is valid. |
| `created_at` | Required | string | Time the identity was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Required | [WorkloadIdentityCreator](../models/WorkloadIdentityCreator.md#workloadidentitycreator) | The user or credential that created a workload identity, identified by resource type and ID. `created_by`: [field definitions](../models/WorkloadIdentityResponse.md#workloadidentityresponsedatacreated_by). |
| `issuer` | Required | string |  |
| `last_used_at` | Optional | string | Most recent use. Omitted before the first use. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `mode` | Required | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `name` | Required | string |  |
| `platform` | Required | string | Computed from the issuer. New platform values may be added. Values: `"generic"`, `"github_actions"`, `"gitlab_ci"`, `"google_cloud"`, `"aws"`, `"azure"`, `"kubernetes"`, `"circleci"`, `"buildkite"`, `"vercel"`, `"fly_io"`. |
| `sandbox_id` | Optional | string | The sandbox containing this identity. Present only in test mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scopes` | Required | Array of string | Complete scope set granted to this identity. Replaced as a whole on PATCH. |
| `status` | Required | string | Values: `"active"`, `"inactive"`, `"archived"`. |
| `subject` | Required | string |  |
| `subject_match` | Required | string | Values: `"exact"`, `"glob"`. |
| `updated_at` | Required | string | Time the identity last changed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Positive concurrency version. Increases on policy and lifecycle changes. Format: `int64`. minimum: `1`. |
| `workload_identity_id` | Required | string | Unique identifier for this workload identity, prefixed `wid_`. Example: `"wid_01KEZF7C00GKCN7Y1482VY8TWP"`. |

### WorkloadIdentityResponse.data.created_by

The user or credential that created a workload identity, identified by resource type and ID.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `resource_id` | Required | string | Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |
| `resource_type` | Required | string | Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Example: `"user"`. Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: [146 declared values](APIRequestLogInput.md#apirequestloginput-resource_type-values). `resource_type`: [field definitions](../models/WorkloadIdentityResponse.md#workloadidentityresponsedatacreated_byresource_type). |

### WorkloadIdentityResponse.data.created_by.resource_type

Value shape: string. Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Example: `"user"`. Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Values: `"api_key"`, `"api_request_log"`, `"balance"`, `"balance_transaction"`, `"bundle"`, `"bundle_component"`, `"category"`, `"checkout_session"`, `"checkout_session_customer_verification"`, `"credit_note"`, `"credit_note_allocation"`, `"custom_domain"`, `"customer"`, `"customer_address"`, `"customer_deletion_request"`, `"customer_email_preferences"`, `"customer_session"`, `"customer_tax_exemption"`, `"customer_verification"`, `"delivery_location_set"`, `"delivery_method"`, `"delivery_profile"`, `"delivery_quote"`, `"delivery_rate"`, `"delivery_rate_callback"`, `"delivery_revocation"`, `"delivery_selection"`, `"delivery_zone"`, `"demo_session"`, `"device"`, `"discount"`, `"dispute"`, `"email_change_request"`, `"environment_grant"`, `"feedback_report"`, `"file"`, `"flint_wallet"`, `"flint_wallet_card"`, `"fraud_warning"`, `"fulfillment"`, `"fulfillment_event"`, `"fulfillment_notification"`, `"gift_card"`, `"gift_card_funding_disposition"`, `"gift_card_load"`, `"gift_card_notification"`, `"gift_card_redemption"`, `"gift_card_transaction"`, `"image"`, `"inventory_adjustment"`, `"inventory_allocation_policy"`, `"inventory_allocation_policy_revision"`, `"inventory_count"`, `"inventory_item"`, `"inventory_level"`, `"inventory_movement"`, `"inventory_receipt"`, `"inventory_reservation"`, `"inventory_reservation_line"`, `"inventory_transfer"`, `"inventory_transfer_line"`, `"invoice"`, `"invoice_delivery_attempt"`, `"invoice_late_fee"`, `"invoice_line_item"`, `"invoice_manual_payment"`, `"invoice_payment_attempt"`, `"invoice_payment_term"`, `"location"`, `"merchant"`, `"merchant_billing_balance"`, `"merchant_billing_entry"`, `"merchant_billing_invoice"`, `"modifier"`, `"modifier_group"`, `"modifier_set"`, `"order"`, `"order_charge"`, `"order_edit"`, `"order_line_item"`, `"order_line_item_modifier"`, `"order_payment_attempt"`, `"package"`, `"package_item"`, `"partner_app"`, `"partner_app_credential"`, `"partner_app_install"`, `"payment_intent"`, `"payment_link"`, `"payment_link_custom_field"`, `"payment_link_line_item"`, `"payment_method"`, `"payment_method_domain"`, `"payment_review"`, `"payout"`, `"payout_destination"`, `"payout_settings"`, `"price_list"`, `"price_list_price"`, `"product"`, `"product_option"`, `"product_option_value"`, `"product_variant"`, `"promotion"`, `"promotion_code"`, `"purchase_refund_allocation"`, `"refund"`, `"refund_allocation"`, `"refund_line_item_adjustment"`, `"report"`, `"report_download"`, `"return"`, `"return_activity"`, `"return_disposition"`, `"return_inspection"`, `"return_inspection_line_item"`, `"return_line_item"`, `"return_policy"`, `"return_policy_revision"`, `"return_reason"`, `"return_receipt"`, `"return_receipt_line_item"`, `"return_resolution"`, `"risk_list"`, `"risk_list_item"`, `"risk_rule"`, `"sandbox"`, `"settings"`, `"shipment"`, `"subscription"`, `"subscription_delivery_migration"`, `"subscription_line_item"`, `"subscription_offer"`, `"subscription_payment_retry"`, `"subscription_plan"`, `"subscription_plan_line_item"`, `"tax_calculation_callback"`, `"tax_connection"`, `"tax_registration"`, `"test_clock"`, `"ticket"`, `"user"`, `"webhook_delivery"`, `"webhook_endpoint"`, `"webhook_event"`, `"workload_identity"`.

### WorkloadIdentityResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).

