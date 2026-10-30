import type { ResourceReference } from './types-47.js';
import type { InputValue } from '../runtime.js';
import type { ConfirmReturnResolutionRequestInput } from './types-6.js';
import type { MoneyValue, NextAction } from './types-35.js';
import type { GetReturnDispositionResponse, GetReturnResolutionResponse } from './types-23.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ReturnResource, ReturnResolutionLineItemRequest, ReturnSourceSystem } from './types-50.js';
import type { CancelReturnDispositionRequestInput } from './types-3.js';
import type { ReturnPolicyEvaluation, ReturnLineItemEligibility, ReturnReasonSummary, ReturnInspectionLineItem } from './types-49.js';
import type { BundleComponent } from './types-1.js';
import type { Image } from './types-25.js';
import type { OrderLineItemModifier } from './types-37.js';
import type { SelectedProductOption } from './types-53.js';
import type { Address } from './types-0.js';
/**
 * The activity timeline for one resource, such as API requests, webhook events and deliveries, and
 * image changes.
 */
export type ResourceTimeline = {
    /**
     *  [] (Value): {@link ResourceTimelineEntry}. One entry in a resource timeline. The
     * `entry_type` selects which of the request, webhook, or image fields are present.
     */
    "entries": Array<ResourceTimelineEntry>;
    "resource_id": string;
    /**
     * Public resource type: the resource's ID field name without `_id`. Clients must accept values
     * added in future releases. Value enum: "api_key", "api_request_log", "balance",
     * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_verification",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
     * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "demo_session", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
     * "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_connection", "tax_registration", "test_clock", "user", "webhook_delivery",
     * "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": ResourceType;
    "test": boolean;
};
/** An API request recorded in this resource's timeline. */
export type ResourceTimelineAPIRequestEntry = {
    "api_request_log_id": string;
    /**
     * The public resource that made this request. Absent when Flint cannot attribute the caller. A
     * reference to another resource by `resource_type` and `resource_id`.
     */
    "caller"?: ResourceReference;
    /**
     * The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent
     * none. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$.
     */
    "client_request_id"?: string;
    /**
     * The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint
     * starts its own trace. Absent when no valid traceparent was sent. pattern: ^[0-9a-f]{32}$.
     */
    "client_trace_id"?: string;
    /** Value enum: "api_request". */
    "entry_type": "api_request" | (string & {});
    "error_code"?: string;
    /** A short explanation of why the request failed. Absent for successful requests. */
    "error_summary"?: string;
    /**
     * The error envelope's `type` for this response. Value enum: "authentication_error",
     * "authorization_error", "validation_error", "not_found_error", "conflict_error",
     * "rate_limit_error", "external_service_error", "timeout_error", "unavailable_error",
     * "internal_error", "protocol_error".
     */
    "error_type"?: "authentication_error"
        | "authorization_error"
        | "validation_error"
        | "not_found_error"
        | "conflict_error"
        | "rate_limit_error"
        | "external_service_error"
        | "timeout_error"
        | "unavailable_error"
        | "internal_error"
        | "protocol_error"
        | (string & {});
    "http_method": string;
    /** Format: int64. */
    "latency_milliseconds": number;
    /** RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    "path": string;
    /** The next action to resolve the failure. Absent when no action applies. */
    "recommended_action"?: string;
    /** A Flint guide that explains this failure. Absent when no guide applies. */
    "reference_url"?: string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
    "resource_timeline_entry_id": string;
    /**
     * How to recover: same_request resends the identical request with the same Idempotency-Key;
     * after_refresh re-reads the resource and rebuilds the request with a new key; none requires
     * correcting the request or following next_steps or next_actions. Value enum: "same_request",
     * "after_refresh", "none".
     */
    "retry"?: "same_request" | "after_refresh" | "none" | (string & {});
    "route_pattern": string;
    /** Format: int32. */
    "status_code": number;
};
/**
 * One entry in a resource timeline. The `entry_type` selects which of the request, webhook, or
 * image fields are present.
 */
export type ResourceTimelineEntry = ((ResourceTimelineAPIRequestEntry)
    | (ResourceTimelineWebhookEventEntry)
    | (ResourceTimelineWebhookDeliveryAttemptEntry)
    | (ResourceTimelineImageMutationEntry)
    | (Record<string, unknown>));
/** A change to this resource's image attachments recorded in its timeline. */
export type ResourceTimelineImageMutationEntry = {
    /** Value enum: "image_mutation". */
    "entry_type": "image_mutation" | (string & {});
    /** Version of the resource's image attachments after this change. Format: int64. */
    "image_version": number;
    /** The change made to the resource's images. Value enum: "replaced". */
    "mutation_kind": "replaced" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    "resource_timeline_entry_id": string;
};
/** A response containing `ResourceTimeline` data. */
export type ResourceTimelineResponse = {
    /**
     * The activity timeline for one resource, such as API requests, webhook events and deliveries,
     * and image changes.
     */
    "data": ResourceTimeline;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A webhook delivery attempt recorded in this resource's timeline. */
export type ResourceTimelineWebhookDeliveryAttemptEntry = {
    "api_request_log_id"?: string;
    /** Format: int32. */
    "attempt_number": number;
    /** RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** Value enum: "automatic_delivery", "automatic_retry", "manual_resend", "manual_delivery". */
    "delivery_trigger": "automatic_delivery" | "automatic_retry" | "manual_resend" | "manual_delivery" | (string & {});
    /** Format: int64. */
    "duration_milliseconds"?: number;
    /** Value enum: "webhook_delivery_attempt". */
    "entry_type": "webhook_delivery_attempt" | (string & {});
    /**
     * The kind of failure on the most recent failed attempt. Absent before any attempt, and when
     * delivered or suppressed. Value enum: "webhook_timeout", "webhook_dns", "webhook_tls",
     * "webhook_connection", "webhook_blocked_target", "webhook_request", "webhook_redirect",
     * "webhook_http_4xx", "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
     */
    "error_category"?: "webhook_timeout"
        | "webhook_dns"
        | "webhook_tls"
        | "webhook_connection"
        | "webhook_blocked_target"
        | "webhook_request"
        | "webhook_redirect"
        | "webhook_http_4xx"
        | "webhook_http_5xx"
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failed attempt. Absent before any attempt, and when delivered
     * or suppressed.
     */
    "error_summary"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** The note supplied when this action was requested. */
    "reason_message"?: string;
    /** The next step to resolve the failed delivery attempt. */
    "recommended_action"?: string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    "resource_timeline_entry_id": string;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * While the delivery is pending, Flint retries automatically either way.
     */
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /** Value enum: "delivered", "failed", "pending", "queued", "sending". */
    "status": "delivered" | "failed" | "pending" | "queued" | "sending" | (string & {});
    /** Format: int32. */
    "status_code"?: number;
    "webhook_delivery_attempt_id": string;
    "webhook_delivery_id": string;
    "webhook_endpoint_id": string;
    "webhook_event_id": string;
};
/** A webhook event recorded in this resource's timeline. */
export type ResourceTimelineWebhookEventEntry = {
    "api_request_log_id"?: string;
    /** Value enum: "webhook_event". */
    "entry_type": "webhook_event" | (string & {});
    /**
     * Value enum: "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "bundle.archived", "bundle.created", "bundle.updated", "category.created",
     * "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "delivery_location_set.activated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.deactivated",
     * "delivery_location_set.updated", "delivery_method.activated", "delivery_method.archived",
     * "delivery_method.created", "delivery_method.deactivated", "delivery_method.updated",
     * "delivery_profile.activated", "delivery_profile.archived", "delivery_profile.created",
     * "delivery_profile.deactivated", "delivery_profile.updated",
     * "delivery_rate_callback.activated", "delivery_rate_callback.archived",
     * "delivery_rate_callback.created", "delivery_rate_callback.deactivated",
     * "delivery_rate_callback.updated", "delivery_revocation.created",
     * "delivery_selection.committed", "delivery_zone.activated", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.deactivated", "delivery_zone.updated",
     * "dispute.created", "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response",
     * "dispute.prevented", "dispute.updated", "dispute.won", "environment_grant.created",
     * "environment_grant.revoked", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_level.shortage_detected", "inventory_level.updated", "inventory_receipt.created",
     * "inventory_reservation.action_required", "inventory_reservation.at_risk",
     * "inventory_reservation.closed", "inventory_reservation.committed",
     * "inventory_reservation.consumed", "inventory_reservation.created",
     * "inventory_reservation.hold_expired", "inventory_reservation.released",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned",
     * "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.created",
     * "invoice.credited", "invoice.issue_failed", "invoice.issued", "invoice.late_fee_assessed",
     * "invoice.late_fee_due", "invoice.late_fee_waived", "invoice.marked_uncollectible",
     * "invoice.overdue", "invoice.paid", "invoice.partially_paid", "invoice.partially_refunded",
     * "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent",
     * "invoice.updated", "invoice.voided", "invoice_delivery_attempt.failed",
     * "invoice_delivery_attempt.sent", "invoice_delivery_attempt.suppressed",
     * "invoice_manual_payment.created", "invoice_manual_payment.reversed",
     * "invoice_payment_attempt.canceled", "invoice_payment_attempt.expired",
     * "invoice_payment_attempt.failed", "invoice_payment_attempt.processing",
     * "invoice_payment_attempt.settled", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "package.created", "package.updated", "partner_app_install.created",
     * "partner_app_install.permissions_updated", "partner_app_install.revoked",
     * "partner_app_install.updated", "payment_intent.canceled", "payment_intent.created",
     * "payment_intent.expired", "payment_intent.fulfillment_hold_updated",
     * "payment_intent.payment_failed", "payment_intent.processing",
     * "payment_intent.requires_action", "payment_intent.requires_capture",
     * "payment_intent.succeeded", "payment_intent.updated", "payment_link.created",
     * "payment_link.updated", "payment_method.activated", "payment_method.archived",
     * "payment_method.failed", "payment_review.closed", "payment_review.opened",
     * "payment_review.reopened", "payout.canceled", "payout.created", "payout.failed",
     * "payout.paid", "payout.reversed", "payout.updated", "payout_destination.archived",
     * "payout_destination.created", "payout_destination.disabled", "payout_destination.updated",
     * "payout_settings.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "refund.created", "refund.failed",
     * "refund.partially_succeeded", "refund.succeeded", "refund.updated", "report.failed",
     * "report.succeeded", "return.canceled", "return.completed", "return.created",
     * "return.decision_recorded", "return.reopened", "return.updated",
     * "return_disposition.created", "return_disposition.updated",
     * "return_inspection.acceptance_decided", "return_inspection.created",
     * "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded",
     * "return_receipt.verified", "return_resolution.created", "return_resolution.updated",
     * "shipment.created", "shipment.updated", "subscription.activated", "subscription.canceled",
     * "subscription.cancellation_scheduled", "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted", "subscription.past_due",
     * "subscription.paused", "subscription.payment_succeeded", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_connection.updated", "test_clock.advancing", "test_clock.archived",
     * "test_clock.created", "test_clock.failed", "test_clock.ready".
     */
    "event_type": "balance.updated"
        | "balance_transaction.created"
        | "balance_transaction.updated"
        | "bundle.archived"
        | "bundle.created"
        | "bundle.updated"
        | "category.created"
        | "category.deleted"
        | "category.updated"
        | "checkout_session.closed"
        | "checkout_session.created"
        | "checkout_session.expired"
        | "checkout_session.invalidated"
        | "checkout_session.paid"
        | "checkout_session.partially_paid"
        | "credit_note.created"
        | "credit_note.issued"
        | "credit_note.updated"
        | "credit_note.voided"
        | "credit_note_allocation.created"
        | "credit_note_allocation.reversed"
        | "custom_domain.archived"
        | "custom_domain.updated"
        | "customer.created"
        | "customer.deleted"
        | "customer.updated"
        | "customer_deletion_request.completed"
        | "customer_deletion_request.created"
        | "customer_deletion_request.failed"
        | "customer_deletion_request.processing"
        | "customer_deletion_request.rejected"
        | "delivery_location_set.activated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.deactivated"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.activated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.deactivated"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.activated"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.deactivated"
        | "delivery_zone.updated"
        | "dispute.created"
        | "dispute.inquiry_closed"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.won"
        | "environment_grant.created"
        | "environment_grant.revoked"
        | "fraud_warning.created"
        | "fraud_warning.updated"
        | "fulfillment.canceled"
        | "fulfillment.completed"
        | "fulfillment.created"
        | "fulfillment.failed"
        | "fulfillment.updated"
        | "fulfillment_event.created"
        | "gift_card.created"
        | "gift_card.updated"
        | "gift_card_load.created"
        | "gift_card_load.updated"
        | "gift_card_notification.created"
        | "gift_card_notification.updated"
        | "gift_card_redemption.created"
        | "gift_card_redemption.updated"
        | "gift_card_transaction.created"
        | "inventory_count.applied"
        | "inventory_level.shortage_detected"
        | "inventory_level.updated"
        | "inventory_receipt.created"
        | "inventory_reservation.action_required"
        | "inventory_reservation.at_risk"
        | "inventory_reservation.closed"
        | "inventory_reservation.committed"
        | "inventory_reservation.consumed"
        | "inventory_reservation.created"
        | "inventory_reservation.hold_expired"
        | "inventory_reservation.released"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "invoice.collection_block_resolved"
        | "invoice.collection_blocked"
        | "invoice.created"
        | "invoice.credited"
        | "invoice.issue_failed"
        | "invoice.issued"
        | "invoice.late_fee_assessed"
        | "invoice.late_fee_due"
        | "invoice.late_fee_waived"
        | "invoice.marked_uncollectible"
        | "invoice.overdue"
        | "invoice.paid"
        | "invoice.partially_paid"
        | "invoice.partially_refunded"
        | "invoice.refunded"
        | "invoice.reminder_due"
        | "invoice.reopened"
        | "invoice.sent"
        | "invoice.updated"
        | "invoice.voided"
        | "invoice_delivery_attempt.failed"
        | "invoice_delivery_attempt.sent"
        | "invoice_delivery_attempt.suppressed"
        | "invoice_manual_payment.created"
        | "invoice_manual_payment.reversed"
        | "invoice_payment_attempt.canceled"
        | "invoice_payment_attempt.expired"
        | "invoice_payment_attempt.failed"
        | "invoice_payment_attempt.processing"
        | "invoice_payment_attempt.settled"
        | "merchant.readiness_updated"
        | "merchant.updated"
        | "merchant_billing_balance.updated"
        | "merchant_billing_invoice.issued"
        | "merchant_billing_invoice.updated"
        | "modifier_group.archived"
        | "modifier_group.created"
        | "modifier_group.updated"
        | "modifier_set.archived"
        | "modifier_set.created"
        | "modifier_set.updated"
        | "order.closed"
        | "order.created"
        | "order.inventory_exception_created"
        | "order.inventory_exception_resolved"
        | "order.paid"
        | "order.partially_paid"
        | "order.partially_refunded"
        | "order.refunded"
        | "order.updated"
        | "package.created"
        | "package.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.canceled"
        | "payment_intent.created"
        | "payment_intent.expired"
        | "payment_intent.fulfillment_hold_updated"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.requires_capture"
        | "payment_intent.succeeded"
        | "payment_intent.updated"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.activated"
        | "payment_method.archived"
        | "payment_method.failed"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.paid"
        | "payout.reversed"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "product.archived"
        | "product.created"
        | "product.updated"
        | "product_variant.archived"
        | "product_variant.created"
        | "product_variant.updated"
        | "promotion.archived"
        | "promotion.created"
        | "promotion.updated"
        | "promotion_code.archived"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "refund.created"
        | "refund.failed"
        | "refund.partially_succeeded"
        | "refund.succeeded"
        | "refund.updated"
        | "report.failed"
        | "report.succeeded"
        | "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.updated"
        | "return_disposition.created"
        | "return_disposition.updated"
        | "return_inspection.acceptance_decided"
        | "return_inspection.created"
        | "return_inspection.superseded"
        | "return_receipt.created"
        | "return_receipt.superseded"
        | "return_receipt.verified"
        | "return_resolution.created"
        | "return_resolution.updated"
        | "shipment.created"
        | "shipment.updated"
        | "subscription.activated"
        | "subscription.canceled"
        | "subscription.cancellation_scheduled"
        | "subscription.created"
        | "subscription.cycle_skipped"
        | "subscription.delivery_action_required"
        | "subscription.delivery_pause_upcoming"
        | "subscription.delivery_updated"
        | "subscription.dunning_exhausted"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_changed"
        | "subscription.reactivated"
        | "subscription.renewal_upcoming"
        | "subscription.resumed"
        | "subscription.trial_ending"
        | "subscription.updated"
        | "subscription_delivery_migration.completed"
        | "subscription_payment_retry.created"
        | "subscription_payment_retry.failed"
        | "subscription_payment_retry.succeeded"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    "resource_timeline_entry_id": string;
    "webhook_event_id": string;
};
export type ResourceTimelinesGetParams = {
    /**
     * Optional resource type. Must match the resource_id prefix when present. Value enum:
     * "balance", "balance_transaction", "bundle", "category", "checkout_session", "credit_note",
     * "credit_note_allocation", "customer", "dispute", "fraud_warning", "inventory_count",
     * "inventory_level", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "invoice", "invoice_payment_term",
     * "merchant_billing_balance", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "payment_intent", "payment_link", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_variant", "promotion", "promotion_code", "refund",
     * "return", "return_activity", "return_disposition", "return_inspection", "return_receipt",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "subscription",
     * "subscription_plan", "test_clock".
     */
    "resource_type"?: InputValue<"balance"
        | "balance_transaction"
        | "bundle"
        | "category"
        | "checkout_session"
        | "credit_note"
        | "credit_note_allocation"
        | "customer"
        | "dispute"
        | "fraud_warning"
        | "inventory_count"
        | "inventory_level"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "invoice"
        | "invoice_payment_term"
        | "merchant_billing_balance"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "payment_intent"
        | "payment_link"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "product"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "refund"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_receipt"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "subscription"
        | "subscription_plan"
        | "test_clock">;
    /**
     * Optional comma-separated timeline entry groups. Defaults to all four groups:
     * requests,webhooks,attempts,image_mutations. [] enum: "requests", "webhooks", "attempts",
     * "image_mutations". [] (Value): string. Value enum: "requests", "webhooks", "attempts",
     * "image_mutations".
     */
    "include"?: InputValue<Array<"requests" | "webhooks" | "attempts" | "image_mutations">>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
};
/**
 * Public resource type: the resource's ID field name without `_id`. Clients must accept values
 * added in future releases. Value enum: "api_key", "api_request_log", "balance",
 * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
 * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
 * "custom_domain", "customer", "customer_address", "customer_deletion_request",
 * "customer_email_preferences", "customer_session", "customer_verification",
 * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
 * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
 * "delivery_zone", "demo_session", "device", "discount", "dispute", "email_change_request",
 * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
 * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card",
 * "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
 * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
 * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
 * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
 * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
 * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
 * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
 * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
 * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
 * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
 * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
 * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
 * "payment_link_custom_field", "payment_link_line_item", "payment_method",
 * "payment_method_domain", "payment_review", "payout", "payout_destination", "payout_settings",
 * "product", "product_option", "product_option_value", "product_variant", "promotion",
 * "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
 * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
 * "return_disposition", "return_inspection", "return_inspection_line_item", "return_line_item",
 * "return_policy", "return_policy_revision", "return_reason", "return_receipt",
 * "return_receipt_line_item", "return_resolution", "risk_list", "risk_list_item", "risk_rule",
 * "sandbox", "settings", "shipment", "subscription", "subscription_delivery_migration",
 * "subscription_line_item", "subscription_offer", "subscription_payment_retry",
 * "subscription_plan", "subscription_plan_line_item", "tax_connection", "tax_registration",
 * "test_clock", "user", "webhook_delivery", "webhook_endpoint", "webhook_event",
 * "workload_identity".
 */
export type ResourceType = "api_key"
    | "api_request_log"
    | "balance"
    | "balance_transaction"
    | "bundle"
    | "bundle_component"
    | "category"
    | "checkout_session"
    | "checkout_session_customer_verification"
    | "credit_note"
    | "credit_note_allocation"
    | "custom_domain"
    | "customer"
    | "customer_address"
    | "customer_deletion_request"
    | "customer_email_preferences"
    | "customer_session"
    | "customer_verification"
    | "delivery_location_set"
    | "delivery_method"
    | "delivery_profile"
    | "delivery_quote"
    | "delivery_rate"
    | "delivery_rate_callback"
    | "delivery_revocation"
    | "delivery_selection"
    | "delivery_zone"
    | "demo_session"
    | "device"
    | "discount"
    | "dispute"
    | "email_change_request"
    | "environment_grant"
    | "feedback_report"
    | "file"
    | "flint_wallet"
    | "flint_wallet_card"
    | "fraud_warning"
    | "fulfillment"
    | "fulfillment_event"
    | "fulfillment_notification"
    | "gift_card"
    | "gift_card_funding_disposition"
    | "gift_card_load"
    | "gift_card_notification"
    | "gift_card_redemption"
    | "gift_card_transaction"
    | "image"
    | "inventory_adjustment"
    | "inventory_allocation_policy"
    | "inventory_allocation_policy_revision"
    | "inventory_count"
    | "inventory_item"
    | "inventory_level"
    | "inventory_movement"
    | "inventory_receipt"
    | "inventory_reservation"
    | "inventory_reservation_line"
    | "inventory_transfer"
    | "inventory_transfer_line"
    | "invoice"
    | "invoice_delivery_attempt"
    | "invoice_late_fee"
    | "invoice_line_item"
    | "invoice_manual_payment"
    | "invoice_payment_attempt"
    | "invoice_payment_term"
    | "location"
    | "merchant"
    | "merchant_billing_balance"
    | "merchant_billing_entry"
    | "merchant_billing_invoice"
    | "modifier"
    | "modifier_group"
    | "modifier_set"
    | "order"
    | "order_charge"
    | "order_line_item"
    | "order_line_item_modifier"
    | "order_payment_attempt"
    | "organization"
    | "package"
    | "package_item"
    | "partner_app"
    | "partner_app_credential"
    | "partner_app_install"
    | "payment_intent"
    | "payment_link"
    | "payment_link_custom_field"
    | "payment_link_line_item"
    | "payment_method"
    | "payment_method_domain"
    | "payment_review"
    | "payout"
    | "payout_destination"
    | "payout_settings"
    | "product"
    | "product_option"
    | "product_option_value"
    | "product_variant"
    | "promotion"
    | "promotion_code"
    | "purchase_refund_allocation"
    | "refund"
    | "refund_allocation"
    | "refund_line_item_adjustment"
    | "report"
    | "report_download"
    | "return"
    | "return_activity"
    | "return_disposition"
    | "return_inspection"
    | "return_inspection_line_item"
    | "return_line_item"
    | "return_policy"
    | "return_policy_revision"
    | "return_reason"
    | "return_receipt"
    | "return_receipt_line_item"
    | "return_resolution"
    | "risk_list"
    | "risk_list_item"
    | "risk_rule"
    | "sandbox"
    | "settings"
    | "shipment"
    | "subscription"
    | "subscription_delivery_migration"
    | "subscription_line_item"
    | "subscription_offer"
    | "subscription_payment_retry"
    | "subscription_plan"
    | "subscription_plan_line_item"
    | "tax_connection"
    | "tax_registration"
    | "test_clock"
    | "user"
    | "webhook_delivery"
    | "webhook_endpoint"
    | "webhook_event"
    | "workload_identity"
    | (string & {});
/**
 * The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of
 * the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void
 * credit note; Void invoice.
 */
export type ResourceVersionRequestInput = ConfirmReturnResolutionRequestInput;
/**
 * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request
 * was replayed, and any warnings.
 */
export type ResponseMeta = {
    /** API version used to produce this response. */
    "api_version"?: string;
    /** Whether this response replays a stored result for the supplied Idempotency-Key. */
    "idempotency_replayed"?: boolean;
    /** Trace identifier to include when contacting Flint about this request. */
    "trace_id"?: string;
    /**
     * Conditions that need attention even though the request succeeded. [] (Value): {@link
     * ResponseWarning}. A non-blocking condition reported with a response. The `code` identifies
     * the condition and `severity` says how urgent it is.
     */
    "warnings"?: Array<ResponseWarning>;
};
/**
 * A non-blocking condition reported with a response. The `code` identifies the condition and
 * `severity` says how urgent it is.
 */
export type ResponseWarning = {
    /**
     * Merchant capability for merchant_onboarding_deadline, merchant_capability_pending, or
     * merchant_capability_inactive. Value enum: "accept_card_payments", "save_payment_methods",
     * "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts",
     * "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings".
     */
    "capability"?: "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | (string & {});
    /**
     * Warning code. Clients must accept values added in future releases. Value enum:
     * "merchant_onboarding_past_due", "merchant_onboarding_deadline",
     * "merchant_capability_pending", "merchant_capability_inactive",
     * "payout_settings_reconciling", "promotion_declined", "promotion_removed",
     * "risk_rule_limit_reached", "rule_evaluation_stage_changed", "api_key_scopes_reduced".
     */
    "code": "merchant_onboarding_past_due"
        | "merchant_onboarding_deadline"
        | "merchant_capability_pending"
        | "merchant_capability_inactive"
        | "payout_settings_reconciling"
        | "promotion_declined"
        | "promotion_removed"
        | "risk_rule_limit_reached"
        | "rule_evaluation_stage_changed"
        | "api_key_scopes_reduced"
        | (string & {});
    /**
     * Onboarding requirements deadline for merchant_onboarding_deadline, or
     * merchant_onboarding_past_due when a deadline is set. Format: date-time.
     */
    "current_deadline_at"?: string;
    /** Description of the non-blocking condition. */
    "message": string;
    /**
     * Suggested actions for addressing the warning. [] (Value): {@link NextAction}. A suggested
     * next step for resolving an error, warning, or blocked state, such as the API operation to
     * call or the scope it needs.
     */
    "next_actions"?: Array<NextAction>;
    /**
     * Last synchronization time for merchant_onboarding_past_due, merchant_onboarding_deadline,
     * merchant_capability_pending, or merchant_capability_inactive, when available. Format:
     * date-time.
     */
    "observed_at"?: string;
    /**
     * Previous risk rule evaluation stage for rule_evaluation_stage_changed. Value enum:
     * "pre_authorization", "post_authorization".
     */
    "previous_stage"?: "pre_authorization" | "post_authorization" | (string & {});
    /**
     * Promotion code that was accepted but did not apply, on a promotion_declined warning, or the
     * code of a removed promotion discount, on a promotion_removed warning.
     */
    "promotion_code"?: string;
    /**
     * Stable Flint reason code. On a promotion_declined or promotion_removed warning this is the
     * promotion decline reason (for example superseded_by_better_offer); an unrecognized value
     * falls back to not_eligible. See the Promotions reference for the full list. Value enum:
     * "already_applied", "automatic_disabled", "buy_item_missing", "code_invalid",
     * "code_required", "codes_disabled", "currency_mismatch", "exhausted", "expired", "inactive",
     * "max_promotions_reached", "minimum_not_met", "no_discountable_balance", "not_combinable",
     * "not_eligible", "not_yet_started", "superseded", "superseded_by_better_offer",
     * "superseded_by_higher_priority", "unknown_type".
     */
    "reason"?: "already_applied"
        | "automatic_disabled"
        | "buy_item_missing"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "currency_mismatch"
        | "exhausted"
        | "expired"
        | "inactive"
        | "max_promotions_reached"
        | "minimum_not_met"
        | "no_discountable_balance"
        | "not_combinable"
        | "not_eligible"
        | "not_yet_started"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "unknown_type"
        | (string & {});
    /**
     * Requested scopes excluded from the issued API key for api_key_scopes_reduced. [] enum:
     * "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read",
     * "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.organizations.read", "accounts.organizations.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "removed_scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.organizations.read"
        | "accounts.organizations.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
    /** Resource ID, paired with resource_type when the warning identifies a resource. */
    "resource_id"?: string;
    /**
     * Type of the resource identified by resource_id. Value enum: "api_key", "api_request_log",
     * "balance", "balance_transaction", "bundle", "bundle_component", "category",
     * "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt",
     * "organization", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "tax_connection", "tax_registration", "test_clock", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type"?: "api_key"
        | "api_request_log"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "bundle_component"
        | "category"
        | "checkout_session"
        | "checkout_session_customer_verification"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_address"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "customer_session"
        | "customer_verification"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_quote"
        | "delivery_rate"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "demo_session"
        | "device"
        | "discount"
        | "dispute"
        | "email_change_request"
        | "environment_grant"
        | "feedback_report"
        | "file"
        | "flint_wallet"
        | "flint_wallet_card"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "fulfillment_notification"
        | "gift_card"
        | "gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "image"
        | "inventory_adjustment"
        | "inventory_allocation_policy"
        | "inventory_allocation_policy_revision"
        | "inventory_count"
        | "inventory_item"
        | "inventory_level"
        | "inventory_movement"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "inventory_transfer_line"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_late_fee"
        | "invoice_line_item"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "invoice_payment_term"
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "organization"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_credential"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "report"
        | "report_download"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_inspection_line_item"
        | "return_line_item"
        | "return_policy"
        | "return_policy_revision"
        | "return_reason"
        | "return_receipt"
        | "return_receipt_line_item"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "sandbox"
        | "settings"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_line_item"
        | "subscription_offer"
        | "subscription_payment_retry"
        | "subscription_plan"
        | "subscription_plan_line_item"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
    /** Warning severity. Value enum: "warning", "critical". */
    "severity": "warning" | "critical" | (string & {});
    /**
     * New risk rule evaluation stage for rule_evaluation_stage_changed. Value enum:
     * "pre_authorization", "post_authorization".
     */
    "stage"?: "pre_authorization" | "post_authorization" | (string & {});
    /**
     * Discount amount this promotion would have applied had it won, on a promotion_declined
     * warning, or the amount a removed promotion discount applied before removal, on a
     * promotion_removed warning. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "would_have_applied_money"?: MoneyValue;
};
/** The request body for: Retry return disposition. */
export type RetryReturnDispositionRequest = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "dependency_recovered", "mapping_corrected", "operator_retry", "other". */
    "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other" | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Retry return disposition. */
export type RetryReturnDispositionRequestInput = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** Value enum: "dependency_recovered", "mapping_corrected", "operator_retry", "other". */
    "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
};
export type RetryReturnDispositionResponse = GetReturnDispositionResponse;
/** The request body for: Retry return resolution. */
export type RetryReturnResolutionRequest = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /** Value enum: "dependency_recovered", "payment_method_updated", "operator_retry", "other". */
    "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other" | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Retry return resolution. */
export type RetryReturnResolutionRequestInput = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /** Value enum: "dependency_recovered", "payment_method_updated", "operator_retry", "other". */
    "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
};
export type RetryReturnResolutionResponse = GetReturnResolutionResponse;
/** One entry in a Return's merchant activity history. */
export type ReturnActivity = {
    /**
     * Value enum: "return.canceled", "return.completed", "return.created",
     * "return.decision_recorded", "return.reopened", "return.shipment_handoff_converged",
     * "return.updated", "return_disposition.canceled", "return_disposition.created",
     * "return_disposition.failed", "return_disposition.retried", "return_disposition.succeeded",
     * "return_inspection.corrected", "return_inspection.created",
     * "return_inspection_line_item.acceptance_decided", "return_line_item.deleted",
     * "return_line_item.inspection_waived", "return_line_item.line_item_added",
     * "return_line_item.quantity_canceled", "return_line_item.updated",
     * "return_receipt.corrected", "return_receipt.created", "return_receipt_line_item.verified",
     * "return_resolution.buyer_payment_required", "return_resolution.canceled",
     * "return_resolution.confirmed", "return_resolution.created",
     * "return_resolution.effect_failed", "return_resolution.payment_failed",
     * "return_resolution.payment_intent_updated", "return_resolution.payment_succeeded",
     * "return_resolution.refund_failed", "return_resolution.refund_succeeded",
     * "return_resolution.released", "return_resolution.replacement_fulfilled",
     * "return_resolution.replacement_fulfillment_canceled",
     * "return_resolution.replacement_order_created", "return_resolution.retried",
     * "return_resolution.updated".
     */
    "activity_type": "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.shipment_handoff_converged"
        | "return.updated"
        | "return_disposition.canceled"
        | "return_disposition.created"
        | "return_disposition.failed"
        | "return_disposition.retried"
        | "return_disposition.succeeded"
        | "return_inspection.corrected"
        | "return_inspection.created"
        | "return_inspection_line_item.acceptance_decided"
        | "return_line_item.deleted"
        | "return_line_item.inspection_waived"
        | "return_line_item.line_item_added"
        | "return_line_item.quantity_canceled"
        | "return_line_item.updated"
        | "return_receipt.corrected"
        | "return_receipt.created"
        | "return_receipt_line_item.verified"
        | "return_resolution.buyer_payment_required"
        | "return_resolution.canceled"
        | "return_resolution.confirmed"
        | "return_resolution.created"
        | "return_resolution.effect_failed"
        | "return_resolution.payment_failed"
        | "return_resolution.payment_intent_updated"
        | "return_resolution.payment_succeeded"
        | "return_resolution.refund_failed"
        | "return_resolution.refund_succeeded"
        | "return_resolution.released"
        | "return_resolution.replacement_fulfilled"
        | "return_resolution.replacement_fulfillment_canceled"
        | "return_resolution.replacement_order_created"
        | "return_resolution.retried"
        | "return_resolution.updated"
        | (string & {});
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "actor": ReturnActor;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Canceled whole-number quantity; fractional quantities are not supported. Present only for
     * return_line_item.quantity_canceled. Format: int64.
     */
    "quantity"?: number;
    /**
     * Value enum: "additional_merchandise_received", "automatic_receipt", "buyer_payment",
     * "buyer_request", "buyer_selection", "changed_disposition", "correction_required",
     * "created_in_error", "customer_service", "customer_service_exception",
     * "dependency_recovered", "duplicate", "duplicate_observation", "entry_error",
     * "evidence_missing", "exception_resolved", "exception_waived", "expired",
     * "inspection_confirmed", "inspection_result", "inventory_effect_failed",
     * "inventory_item_unmapped", "linked_effect_changed", "linked_effect_retry",
     * "manual_completion", "manual_correction", "manual_release", "manual_review",
     * "mapping_corrected", "merchant_approved", "merchant_discretion", "merchant_request",
     * "merchant_review", "not_eligible", "operator_retry", "order_match_confirmed", "other",
     * "payment_intent_creation_failed", "payment_method_updated", "policy_correction",
     * "policy_override", "quantity_unavailable", "reconciliation_correction",
     * "refund_creation_failed", "refund_line_value_unavailable",
     * "replacement_order_creation_failed", "resolution_effect_failed", "return_policy",
     * "return_shipping_cost", "risk_review", "safety_requirement", "sku_match_confirmed",
     * "source_correction", "suspected_abuse", "trusted_in_store_handoff", "warehouse_override".
     */
    "reason"?: "additional_merchandise_received"
        | "automatic_receipt"
        | "buyer_payment"
        | "buyer_request"
        | "buyer_selection"
        | "changed_disposition"
        | "correction_required"
        | "created_in_error"
        | "customer_service"
        | "customer_service_exception"
        | "dependency_recovered"
        | "duplicate"
        | "duplicate_observation"
        | "entry_error"
        | "evidence_missing"
        | "exception_resolved"
        | "exception_waived"
        | "expired"
        | "inspection_confirmed"
        | "inspection_result"
        | "inventory_effect_failed"
        | "inventory_item_unmapped"
        | "linked_effect_changed"
        | "linked_effect_retry"
        | "manual_completion"
        | "manual_correction"
        | "manual_release"
        | "manual_review"
        | "mapping_corrected"
        | "merchant_approved"
        | "merchant_discretion"
        | "merchant_request"
        | "merchant_review"
        | "not_eligible"
        | "operator_retry"
        | "order_match_confirmed"
        | "other"
        | "payment_intent_creation_failed"
        | "payment_method_updated"
        | "policy_correction"
        | "policy_override"
        | "quantity_unavailable"
        | "reconciliation_correction"
        | "refund_creation_failed"
        | "refund_line_value_unavailable"
        | "replacement_order_creation_failed"
        | "resolution_effect_failed"
        | "return_policy"
        | "return_shipping_cost"
        | "risk_review"
        | "safety_requirement"
        | "sku_match_confirmed"
        | "source_correction"
        | "suspected_abuse"
        | "trusted_in_store_handoff"
        | "warehouse_override"
        | (string & {});
    "reason_message"?: string;
    "resource_id": string;
    /**
     * Public resource type: the resource's ID field name without `_id`. Clients must accept values
     * added in future releases. Value enum: "api_key", "api_request_log", "balance",
     * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_verification",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
     * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "demo_session", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
     * "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_connection", "tax_registration", "test_clock", "user", "webhook_delivery",
     * "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": ResourceType;
    "return_activity_id": string;
    "return_id": string;
    /** Return version produced by this activity. Format: int64. minimum: 0. */
    "return_version": number;
};
/**
 * Who performed a return action: a buyer, merchant, integration, or the system, with an optional
 * ID.
 */
export type ReturnActor = {
    "actor_id"?: string;
    /** Value enum: "buyer", "merchant", "integration", "system". */
    "actor_type": "buyer" | "merchant" | "integration" | "system" | (string & {});
};
export type ReturnCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "return.canceled";
});
/**
 * The `return.canceled` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReturnCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.canceled". */
    "event_type"?: "return.canceled";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `return.canceled` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReturnCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.canceled". */
    "event_type"?: "return.canceled";
});
export type ReturnCompletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.completed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.completed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "return.completed";
});
/**
 * The `return.completed` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReturnCompletedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.completed". */
    "event_type"?: "return.completed";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `return.completed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ReturnCompletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.completed". */
    "event_type"?: "return.completed";
});
/**
 * Something still owed before a return can complete, with the return line or record it concerns.
 */
export type ReturnCompletionBlocker = {
    /**
     * What is still owed before this Return can complete. Each blocker names the Return line it
     * belongs to and, where one exists, the receipt, inspection, disposition, or resolution
     * holding it up. An empty completion_blockers array means nothing is outstanding. Value enum:
     * "decision_pending", "handoff_pending", "receipt_pending", "inspection_pending",
     * "inspection_review_required", "disposition_required", "resolution_not_selected",
     * "resolution_pending", "resolution_requires_action", "resolution_failed",
     * "merchandise_exception".
     */
    "code": "decision_pending"
        | "handoff_pending"
        | "receipt_pending"
        | "inspection_pending"
        | "inspection_review_required"
        | "disposition_required"
        | "resolution_not_selected"
        | "resolution_pending"
        | "resolution_requires_action"
        | "resolution_failed"
        | "merchandise_exception"
        | (string & {});
    "message": string;
    "return_disposition_id"?: string;
    "return_inspection_id"?: string;
    "return_line_item_id"?: string;
    "return_receipt_id"?: string;
    "return_resolution_id"?: string;
    "shipment_id"?: string;
};
export type ReturnCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "return.created";
});
/**
 * The `return.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReturnCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.created". */
    "event_type"?: "return.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `return.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReturnCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.created". */
    "event_type"?: "return.created";
});
export type ReturnDecisionRecordedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.decision_recorded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.decision_recorded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "return.decision_recorded";
});
/**
 * The `return.decision_recorded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnDecisionRecordedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.decision_recorded". */
    "event_type"?: "return.decision_recorded";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `return.decision_recorded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ReturnDecisionRecordedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.decision_recorded". */
    "event_type"?: "return.decision_recorded";
});
/** A decision about how returned merchandise will be handled. */
export type ReturnDisposition = {
    /** RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "canceled_by"?: ReturnActor;
    /** Value enum: "created_in_error", "changed_disposition", "duplicate", "other". */
    "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
    "cancellation_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "created_by": ReturnActor;
    /**
     * Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {});
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Reason code for a failed merchandise disposition, when available. Value enum:
     * "inventory_effect_failed", "inventory_item_unmapped".
     */
    "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
    /** Explanation of a failed merchandise disposition, when available. */
    "failure_message"?: string;
    "inventory_location_id"?: string;
    /**  [] (Value): string. */
    "inventory_movement_ids": Array<string>;
    "inventory_receipt_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Value enum: "inspection_result", "return_policy", "warehouse_override",
     * "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    "reason_message"?: string;
    "replaced_by_return_disposition_id"?: string;
    "replaces_return_disposition_id"?: string;
    "return_disposition_id": string;
    "return_id": string;
    "return_inspection_line_item_id"?: string;
    "return_line_item_id"?: string;
    "return_receipt_line_item_id"?: string;
    /** Value enum: "pending", "succeeded", "failed", "canceled". */
    "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only
     * before the inventory effect starts. [] enum: "cancel", "retry". [] (Value): string. Value
     * enum: "cancel", "retry".
     */
    "supported_actions": Array<"cancel" | "retry" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. minimum: 0. */
    "version": number;
};
export type ReturnDispositionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnDisposition;
    };
    "event_type"?: "return_disposition.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnDisposition;
    };
    "event_type"?: "return_disposition.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "return_disposition.created";
});
/**
 * The `return_disposition.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnDispositionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnDisposition}. A decision about how returned merchandise
     * will be handled.
     */
    "data"?: {
        /** A decision about how returned merchandise will be handled. */
        "object": ReturnDisposition;
    };
    /** Value enum: "return_disposition.created". */
    "event_type"?: "return_disposition.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `return_disposition.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnDispositionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnDisposition}. A decision about how returned merchandise
     * will be handled.
     */
    "data"?: {
        /** A decision about how returned merchandise will be handled. */
        "object": ReturnDisposition;
    };
    /** Value enum: "return_disposition.created". */
    "event_type"?: "return_disposition.created";
});
export type ReturnDispositionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnDisposition;
    };
    "event_type"?: "return_disposition.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnDisposition;
    };
    "event_type"?: "return_disposition.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "return_disposition.updated";
});
/**
 * The `return_disposition.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnDispositionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnDisposition}. A decision about how returned merchandise
     * will be handled.
     */
    "data"?: {
        /** A decision about how returned merchandise will be handled. */
        "object": ReturnDisposition;
    };
    /** Value enum: "return_disposition.updated". */
    "event_type"?: "return_disposition.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `return_disposition.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnDispositionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnDisposition}. A decision about how returned merchandise
     * will be handled.
     */
    "data"?: {
        /** A decision about how returned merchandise will be handled. */
        "object": ReturnDisposition;
    };
    /** Value enum: "return_disposition.updated". */
    "event_type"?: "return_disposition.updated";
});
export type ReturnDispositionsCancelParams = (InputValue<CancelReturnDispositionRequestInput>);
export type ReturnDispositionsGetParams = {};
export type ReturnDispositionsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by disposition type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate",
     * "donate", "discard", "return_to_buyer", "lost". Value enum: "sellable", "quality_control",
     * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
     * "return_to_buyer", "lost". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate",
     * "donate", "discard", "return_to_buyer", "lost". anyOf[1][] (Value): string. Value enum:
     * "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate",
     * "donate", "discard", "return_to_buyer", "lost". anyOf[2] (Value): string. Value enum:
     * "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate",
     * "donate", "discard", "return_to_buyer", "lost".
     */
    "disposition_type"?: InputValue<("sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost")
        | readonly ("sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /** Filter by inventory location id. */
    "inventory_location_id"?: InputValue<string>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return disposition ID or external reference ID. */
    "query"?: InputValue<string>;
    /** Filter by replaces return disposition id. */
    "replaces_return_disposition_id"?: InputValue<string>;
    /** Filter by return id. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_id"?: InputValue<string>;
    /** Filter by return inspection line item id. Example: "retinli_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_inspection_line_item_id"?: InputValue<string>;
    /** Filter by return line item id. Example: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_line_item_id"?: InputValue<string>;
    /** Filter by return receipt line item id. Example: "retrcli_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_receipt_line_item_id"?: InputValue<string>;
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "pending", "succeeded",
     * "failed", "canceled". Value enum: "pending", "succeeded", "failed", "canceled". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "pending", "succeeded", "failed",
     * "canceled". anyOf[1][] (Value): string. Value enum: "pending", "succeeded", "failed",
     * "canceled". anyOf[2] (Value): string. Value enum: "pending", "succeeded", "failed",
     * "canceled".
     */
    "status"?: InputValue<("pending" | "succeeded" | "failed" | "canceled")
        | readonly ("pending" | "succeeded" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type ReturnDispositionsRetryParams = (InputValue<RetryReturnDispositionRequestInput>);
/**
 * An order line and quantity to check. return_reason_id is optional here; when you send it, Flint
 * checks that the reason is active and applies to the line.
 */
export type ReturnEligibilityLineItemRequest = {
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /** minLength: 1. */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** minLength: 1. */
    "return_reason_id"?: string;
};
/**
 * An order line and quantity to check. return_reason_id is optional here; when you send it, Flint
 * checks that the reason is active and applies to the line.
 */
export type ReturnEligibilityLineItemRequestInput = {
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /** minLength: 1. */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /** minLength: 1. */
    "return_reason_id"?: string;
};
/**
 * The result of checking whether an order's items can be returned: overall status, per-line
 * eligibility, and the policy evaluation.
 */
export type ReturnEligibilityPreview = {
    /** RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /**
     *  [] (Value): {@link ReturnEligibilityPreviewLineItem}. Return eligibility for one order line
     * item, with the line's details, suggested return reasons, and whether self-service returns
     * are enabled.
     */
    "line_items": Array<ReturnEligibilityPreviewLineItem>;
    "order_id": string;
    /**
     * How a return policy evaluated a return request: overall status and reason, the policy
     * revision used, and per-line results.
     */
    "policy_evaluation": ReturnPolicyEvaluation;
    /**
     * Which order lines to check for return eligibility: all remaining fulfilled lines, or a
     * specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
    /** Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Return eligibility for one order line item, with the line's details, suggested return reasons,
 * and whether self-service returns are enabled.
 */
export type ReturnEligibilityPreviewLineItem = {
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components": Array<BundleComponent>;
    "bundle_id"?: string;
    /**
     * Whether the buyer can request this line themselves, through a customer session, right now.
     * False when no policy covers the item, when it is not eligible, or when the store offers no
     * reason for it. Read eligibility.reason and ineligibility_reason to say why.
     */
    "can_buyer_request": boolean;
    "description"?: string;
    /**
     * Whether a return line is eligible under policy, with the eligible quantity, allowed
     * resolution types, and any policy adjustments.
     */
    "eligibility": ReturnLineItemEligibility;
    "fulfillment_id": string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /**
     *  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item, with
     * its quantity, price change, total, and display flags.
     */
    "modifiers": Array<OrderLineItemModifier>;
    "name": string;
    "order_line_item_id": string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity"?: number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then
     * reasons that apply to every item. Each group sorts by handle ascending, with
     * return_reason_id ascending as the tiebreak. maxItems: 20. [] (Value): {@link
     * ReturnReasonSummary}. A return reason a buyer can pick for a line, with its `handle` and
     * whether a note is required.
     */
    "suggested_return_reasons": Array<ReturnReasonSummary>;
    "variant_id"?: string;
};
/**
 * Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific
 * list of lines.
 */
export type ReturnEligibilitySelection = ({
    /**
     *  [] (Value): {@link ReturnEligibilityLineItemRequest}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequest>;
    /** Value enum: "all_remaining_fulfilled", "line_items". */
    "selection_type": "all_remaining_fulfilled" | "line_items" | (string & {});
})
    & ((Exclude<ReturnEligibilitySelectionAllRemainingFulfilled & object, readonly unknown[]>)
    | (Exclude<ReturnEligibilitySelectionLineItems & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`. */
export type ReturnEligibilitySelectionAllRemainingFulfilled = ({
    /**
     *  [] (Value): {@link ReturnEligibilityLineItemRequest}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequest>;
    /** Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled" | (string & {});
})
    & (({
    /** Value enum: "all_remaining_fulfilled". */
    "selection_type": unknown;
}));
/** The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`. */
export type ReturnEligibilitySelectionAllRemainingFulfilledInput = ({
    /**
     *  [] (Value): {@link ReturnEligibilityLineItemRequestInput}. An order line and quantity to
     * check. return_reason_id is optional here; when you send it, Flint checks that the reason is
     * active and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequestInput>;
    /** Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled";
})
    & (({
    /** Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled";
})
    & ({
    "line_items"?: never;
}));
/**
 * Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific
 * list of lines.
 */
export type ReturnEligibilitySelectionInput = ({
    /**
     *  [] (Value): {@link ReturnEligibilityLineItemRequestInput}. An order line and quantity to
     * check. return_reason_id is optional here; when you send it, Flint checks that the reason is
     * active and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequestInput>;
    /** Value enum: "all_remaining_fulfilled", "line_items". */
    "selection_type": "all_remaining_fulfilled" | "line_items";
})
    & ((Exclude<ReturnEligibilitySelectionAllRemainingFulfilledInput & object, readonly unknown[]>)
    | (Exclude<ReturnEligibilitySelectionLineItemsInput & object, readonly unknown[]>));
/** The `line_items` variant of `ReturnEligibilitySelection`. */
export type ReturnEligibilitySelectionLineItems = ({
    /**
     *  [] (Value): {@link ReturnEligibilityLineItemRequest}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items": Array<ReturnEligibilityLineItemRequest>;
    /** Value enum: "line_items". */
    "selection_type": "line_items" | (string & {});
})
    & ({
    /** minItems: 1. */
    "line_items": unknown;
    /** Value enum: "line_items". */
    "selection_type": unknown;
});
/** The `line_items` variant of `ReturnEligibilitySelection`. */
export type ReturnEligibilitySelectionLineItemsInput = ({
    /**
     *  [] (Value): {@link ReturnEligibilityLineItemRequestInput}. An order line and quantity to
     * check. return_reason_id is optional here; when you send it, Flint checks that the reason is
     * active and applies to the line.
     */
    "line_items": Array<ReturnEligibilityLineItemRequestInput>;
    /** Value enum: "line_items". */
    "selection_type": "line_items";
})
    & ({
    /** minItems: 1. */
    "line_items": unknown;
    /** Value enum: "line_items". */
    "selection_type": "line_items";
});
/**
 * The money for a return: returned value, deductions, credits, replacement total, and amounts due
 * to or from the buyer.
 */
export type ReturnFinancialSummary = {
    /**
     * Balances collected from the buyer. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "collected_money": MoneyValue;
    /**
     * Credits added by confirmed, non-canceled resolutions. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Fees withheld by confirmed, non-canceled resolutions. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not
     * succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "due_from_buyer_money": MoneyValue;
    /**
     * Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "due_to_buyer_money": MoneyValue;
    /**
     * Refund amounts that succeeded. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Value of replacement merchandise on confirmed, non-canceled resolutions. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Sum of return_value.discount_money across the Return's line items. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "returned_discount_money": MoneyValue;
    /**
     * Sum of return_value.subtotal_money across the Return's line items. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "returned_subtotal_money": MoneyValue;
    /**
     * Sum of return_value.tax_money across the Return's line items. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "returned_tax_money": MoneyValue;
    /**
     * Sum of return_value.total_money across the Return's line items. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
};
/**
 * Where the buyer sends returned merchandise: their own address, a merchant location, or an
 * external location.
 */
export type ReturnHandoffDestination = {
    /**
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Value enum: "buyer_address", "location", "external_location". */
    "destination_type": "buyer_address" | "location" | "external_location" | (string & {});
    "location_id"?: string;
    "name"?: string;
};
/**
 * What the buyer must do to hand merchandise back: the destination, instructions, line items, and
 * expiry.
 */
export type ReturnHandoffRequirement = {
    /**
     * Where the buyer sends returned merchandise: their own address, a merchant location, or an
     * external location.
     */
    "destination": ReturnHandoffDestination;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    "instructions"?: string;
    /**
     *  [] (Value): {@link ReturnResolutionLineItemRequest}. A return line and the quantity the
     * buyer must hand back.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /** Format: int64. */
    "shipment_count"?: number;
    /**
     * Whether the buyer has started sending merchandise back. A requirement leaves
     * handoff_requirements entirely once it is satisfied, so there is no terminal status and an
     * empty array means nothing is waiting on the buyer. Value enum: "pending", "in_progress".
     */
    "status": "pending" | "in_progress" | (string & {});
};
/** An assessment of the condition of returned items. */
export type ReturnInspection = {
    /**
     * Value enum: "entry_error", "duplicate_observation", "source_correction",
     * "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    "correction_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255.
     */
    "external_actor_id"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     *  [] (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled.
     */
    "generated_dispositions": Array<ReturnDisposition>;
    /** RFC3339 timestamp. Format: date-time. */
    "inspected_at": string;
    /**
     * Location where the returned merchandise was inspected. Must match the receipt
     * receiving_location_id.
     */
    "inspection_location_id": string;
    /**  [] (Value): {@link ReturnInspectionLineItem}. The inspection result for a returned item. */
    "line_items": Array<ReturnInspectionLineItem>;
    "return_id": string;
    "return_inspection_id": string;
    "return_receipt_id": string;
    /**
     *  anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from, such as
     * a point of sale or warehouse system, with its own identifier. anyOf[2] (Value): null.
     */
    "source_system": ((ReturnSourceSystem) | (null));
    /** Value enum: "current", "superseded". */
    "status": "current" | "superseded" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "superseded_at"?: string;
    "superseded_by_return_inspection_id"?: string;
    "supersedes_return_inspection_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. minimum: 1. */
    "version": number;
};
export type ReturnInspectionAcceptanceDecidedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnInspection;
    };
    "event_type"?: "return_inspection.acceptance_decided";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnInspection;
    };
    "event_type"?: "return_inspection.acceptance_decided";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "return_inspection.acceptance_decided";
});
/**
 * The `return_inspection.acceptance_decided` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnInspection}. An assessment of the condition of returned
     * items.
     */
    "data"?: {
        /** An assessment of the condition of returned items. */
        "object": ReturnInspection;
    };
    /** Value enum: "return_inspection.acceptance_decided". */
    "event_type"?: "return_inspection.acceptance_decided";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `return_inspection.acceptance_decided` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type ReturnInspectionAcceptanceDecidedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnInspection}. An assessment of the condition of returned
     * items.
     */
    "data"?: {
        /** An assessment of the condition of returned items. */
        "object": ReturnInspection;
    };
    /** Value enum: "return_inspection.acceptance_decided". */
    "event_type"?: "return_inspection.acceptance_decided";
});
export type ReturnInspectionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnInspection;
    };
    "event_type"?: "return_inspection.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnInspection;
    };
    "event_type"?: "return_inspection.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "return_inspection.created";
});
/**
 * The `return_inspection.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnInspectionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnInspection}. An assessment of the condition of returned
     * items.
     */
    "data"?: {
        /** An assessment of the condition of returned items. */
        "object": ReturnInspection;
    };
    /** Value enum: "return_inspection.created". */
    "event_type"?: "return_inspection.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `return_inspection.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnInspectionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnInspection}. An assessment of the condition of returned
     * items.
     */
    "data"?: {
        /** An assessment of the condition of returned items. */
        "object": ReturnInspection;
    };
    /** Value enum: "return_inspection.created". */
    "event_type"?: "return_inspection.created";
});
