import type { MetadataMap } from './types-38.js';
import type { ReaderConnectivity } from './types-52.js';
import type {
    WebhookVerificationOptions as _SdkWebhookVerificationOptions,
    InputValue,
    CredentialProvider,
    Model
} from '../runtime.js';
import type { CreateWorkloadIdentityRequestInput } from './types-14.js';
import type { UpdateWorkloadIdentityRequestInput } from './types-68.js';
import type { ResourceReference, ResponseMeta } from './types-54.js';
import type {
    AcceptFulfillmentRequestInput,
    AcceptPartnerAppPlatformTermsRequestInput,
    AddLineItemsRequestInput,
    AddOrderChargeRequestInput,
    AddReturnLineItemRequestInput,
    AddRiskListItemsRequestInput,
    AddressRequestInput,
    AdjustGiftCardBalanceRequestInput,
    AdvanceTestClockRequestInput,
    ApplyDiscountRequestInput,
    ApplyDiscountRequestManualInput,
    ApplyDiscountRequestPromotionInput,
    ApplyInventoryCountRequestInput,
    ApplyOrderGiftCardRequestInput,
    ApplySubscriptionPromotionRequestInput,
    AssessInvoiceLateFeeRequestInput,
    AssignToUnconfiguredDeliveryProfileRequestInput
} from './types-0.js';
import type {
    BrandingSettingsRequestInput,
    BuyerCancelReturnRequestInput,
    BuyerCapabilitiesRequestInput,
    BuyerCreateReturnPreviewRequestInput,
    BuyerCreateReturnPreviewRequestEligibilityInput,
    BuyerCreateReturnPreviewRequestResolutionInput
} from './types-1.js';
import type {
    BuyerCreateReturnRequestInput,
    BuyerCreateReturnResolutionPreviewRequestInput,
    BuyerInstructionsConfigRequestInput,
    BuyerPauseCapabilityInput
} from './types-2.js';
import type {
    BuyerRetentionOfferRequestInput,
    BuyerReturnReplacementLineItemInputBundleInput,
    BuyerReturnReplacementLineItemInputVariantInput,
    BuyerReturnReplacementLineItemRequestInput,
    BuyerSkipCapabilityInput
} from './types-3.js';
import type {
    CLIContextsRequestInput,
    CLIDeviceRequestInput,
    CLIReauthorizeRequestInput,
    CallerSuppliedDeliveryMethodResultRequestInput,
    CallerSuppliedDeliveryOutcomeRequestInput,
    CallerSuppliedDeliveryOutcomeRequestAvailableInput
} from './types-4.js';
/** The resource snapshot, without expansions. Webhooks omit these fields: `promotion`. */
export type WebhookPromotionCode = ({
    /**
     * Whether a buyer can redeem the code right now: the code is active, not expired, and under
     * its max_uses, and its promotion is available.
     */
    "available": boolean;
    /** Code a buyer enters to redeem the promotion. */
    "code": string;
    /**
     * When the promotion code was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Only this identified customer can redeem the code. The customer must belong to the same
     * merchant and environment. A checkout may use its merchant-named or email-verified customer;
     * a typed email does not identify a customer. Null when the code is unbound. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
    /**
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the
     * code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Maximum number of times this code can be redeemed. Omitted when the code has no redemption
     * limit. Format: int64.
     */
    "max_uses"?: number;
    /**
     * Identifier of the merchant that owns the promotion code. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string;
    /**
     * Key-value data you attach to the promotion code. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Unique identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". */
    "promotion_code_id": string;
    /**
     * Identifier of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id": string;
    /**
     * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE
     * sets archived. An active code can still be unavailable: read available. Value enum:
     * "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * IANA zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires.
     */
    "timezone"?: string;
    /**
     * Why available is false. Present only when available is false. The code's own state is
     * reported first; promotion_unavailable means the code is usable but its promotion is not.
     * Value enum: "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
     */
    "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
    /**
     * When the promotion code was last updated, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /** Number of times this code has been redeemed. Format: int64. */
    "uses_count": number;
    /**
     * Persisted owned-state version. Clock-based availability and expanded resources do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
});
/**
 * The resource snapshot, without expansions. Webhooks omit these fields:
 * `active_payment_intent_id`.
 */
export type WebhookReader = ({
    /**
     * Smart readers only, and omitted once the reader is archived. Observed reader state: it
     * changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on
     * it: Flint checks the reader itself before it sends a payment. Observed connectivity of a
     * smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and
     * every five minutes for active live smart readers.
     */
    "connectivity"?: ReaderConnectivity;
    /** When the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the
     * phone it runs on. Omitted when none is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`.
     */
    "is_simulated": boolean;
    /**
     * The location the reader is at. Set at registration and never changed: to move a reader,
     * archive it and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Your key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata": MetadataMap;
    /**
     * The smart reader's model, read from the reader at registration. Smart readers only. Value
     * enum: "stripe_reader_s700", "stripe_reader_s710", "other".
     */
    "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
    /** Your label for the reader. minLength: 1. maxLength: 255. */
    "name": string;
    /** Unique identifier for the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". */
    "reader_id": string;
    /**
     * The smart reader's serial number, read from the reader at registration. Smart readers only.
     */
    "serial_number"?: string;
    /** Whether the reader can take payments. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /**
     * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is
     * a phone driven by the Stripe Terminal SDK in your app. Value enum: "smart_reader",
     * "tap_to_pay".
     */
    "type": "smart_reader" | "tap_to_pay" | (string & {});
    /** When the reader last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
});
/** How Flint signs requests to this endpoint. Value enum: "jwt", "hmac". */
export type WebhookSigningMethod = "jwt" | "hmac" | (string & {});
/** How Flint signs requests to this endpoint. Value enum: "jwt", "hmac". */
export type WebhookSigningMethodInput = "jwt" | "hmac";
/**
 * Sent on the webhook event stream before the server closes it, with the `reason`. After a
 * backpressure disconnect, resume from `resume_cursor`.
 */
export type WebhookStreamDisconnect = {
    /**
     * Why Flint is closing the stream. Value enum: "ttl", "authorization_changed", "server_error",
     * "backpressure", "sandbox_reset".
     */
    "reason": "ttl" | "authorization_changed" | "server_error" | "backpressure" | "sandbox_reset" | (string & {});
    /**
     * Last event sent before a backpressure disconnect. Reconnect using this value as
     * Last-Event-ID or after.
     */
    "resume_cursor"?: string;
};
/**
 * Sent on the webhook event stream when events could not be replayed from the requested cursor,
 * with a `resume_cursor` to continue from.
 */
export type WebhookStreamGap = {
    /**
     * Why events could not be replayed from the requested position. Value enum:
     * "cursor_unavailable", "payload_expired".
     */
    "reason": "cursor_unavailable" | "payload_expired" | (string & {});
    /**
     * Event ID from which replay was requested. Omitted when the requested position has no event
     * ID.
     */
    "requested_cursor"?: string;
    /**
     * Event ID after which streaming continues following this gap. Omitted when the resume
     * position has no event ID.
     */
    "resume_cursor"?: string;
};
/** Sent when a webhook event stream connects, with the current `cursor`. */
export type WebhookStreamReady = {
    /**
     * Event ID after which this connection begins streaming. Omitted when the starting position
     * has no event ID.
     */
    "cursor"?: string;
};
/**
 * Sent on the webhook event stream in place of an event that was withheld, such as when the caller
 * lacks a required scope, with the `reason`.
 */
export type WebhookStreamWithheld = {
    /**
     * Type of the event whose payload was withheld. Value enum: "api_key.created",
     * "api_key.revoked", "api_key.updated", "balance.updated", "balance_transaction.created",
     * "balance_transaction.updated", "bundle.archived", "bundle.created", "bundle.updated",
     * "category.created", "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
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
     * "invoice_payment_attempt.succeeded", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "order_edit.created", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided".
     */
    "event_type": "api_key.created"
        | "api_key.revoked"
        | "api_key.updated"
        | "balance.updated"
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
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
        | "environment_grant.updated"
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
        | "inventory_count.updated"
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
        | "inventory_reservation.updated"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
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
        | "invoice_payment_attempt.succeeded"
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
        | "order_edit.created"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payment_split.canceled"
        | "payment_split.created"
        | "payment_split.failed"
        | "payment_split.succeeded"
        | "payment_split.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "platform_fee.canceled"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.updated"
        | "platform_fee_payout.created"
        | "platform_fee_payout.failed"
        | "platform_fee_payout.succeeded"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
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
        | "reader.archived"
        | "reader.created"
        | "reader.updated"
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
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
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
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided"
        | (string & {});
    /**
     * Why the credential cannot read this event's payload. Value enum: "missing_resource_scope",
     * "resource_unattributed", "partner_read_unsupported".
     */
    "reason": "missing_resource_scope" | "resource_unattributed" | "partner_read_unsupported" | (string & {});
    /**
     * Read scopes for the affected resource. Omitted when no public resource read scope is known.
     * [] (Value): string.
     */
    "required_scopes"?: Array<string>;
    /**
     * ID of the affected resource. Omitted when Flint cannot form a public resource reference.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id"?: string;
    /**
     * Public resource type affected by the event. Omitted when no public resource type is
     * attributed. Example: "order". Value enum: "api_key", "api_request_log", "balance",
     * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
     * "customer_verification", "delivery_choice_group", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate",
     * "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone",
     * "demo_session", "device", "discount", "dispute", "email_change_request",
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
     * "merchant_billing_entry", "merchant_billing_invoice", "merchant_signup", "modifier",
     * "modifier_group", "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_intent",
     * "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payment_split", "payout", "payout_destination",
     * "payout_settings", "platform_fee", "platform_fee_balance_transaction",
     * "platform_fee_payout", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "reader", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "remembered_buyer", "report", "report_download", "return",
     * "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
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
        | "customer_tax_exemption"
        | "customer_verification"
        | "delivery_choice_group"
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
        | "merchant_signup"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_edit"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
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
        | "payment_split"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "platform_fee"
        | "platform_fee_balance_transaction"
        | "platform_fee_payout"
        | "price_list"
        | "price_list_price"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "reader"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "remembered_buyer"
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
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
    /**
     * ID of the event whose payload was withheld. Use it as a resume cursor. Example:
     * "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
};
export type WebhookVerificationOptions = _SdkWebhookVerificationOptions;
/**
 * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
 */
export type Weight = {
    /**
     * Weight unit. Use gram, kilogram, ounce, or pound. Value enum: "gram", "kilogram", "ounce",
     * "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound" | (string & {});
    /**
     * Weight measured in the specified unit. maximum: 1000000. exclusiveMinimum: 0. multipleOf:
     * 0.001.
     */
    "value": number;
};
/**
 * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
 */
export type WeightRequestInput = {
    /**
     * Weight unit. Use gram, kilogram, ounce, or pound. Value enum: "gram", "kilogram", "ounce",
     * "pound".
     */
    "unit": "gram" | "kilogram" | "ounce" | "pound";
    /**
     * Weight measured in the specified unit. maximum: 1000000. exclusiveMinimum: 0. multipleOf:
     * 0.001.
     */
    "value": number;
};
export type WorkloadIdentitiesCreateParams = (InputValue<CreateWorkloadIdentityRequestInput>);
export type WorkloadIdentitiesDeleteParams = {
    /**
     * Optional version most recently read. Format: int64. minimum: 1. maximum: 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
};
export type WorkloadIdentitiesGetParams = {};
export type WorkloadIdentitiesListParams = {
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by workload_identity_id. Default:
     * "created_at". Value enum: "created_at", "last_used_at", "name".
     */
    "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type WorkloadIdentitiesUpdateParams = (InputValue<UpdateWorkloadIdentityRequestInput>);
/** A policy that grants API access to a workload authenticated by an external identity provider. */
export type WorkloadIdentity = {
    /**
     * Time the identity was archived. Omitted before archival. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "archived_at"?: string;
    /**
     * Audience (`aud`) a token must carry to match this identity. Set at creation and never
     * changes.
     */
    "audience": string;
    /**
     * Bounded value array of top-level scalar claim conditions. Replaced as a whole on PATCH; []
     * clears it when the remaining policy is valid. [] (Value): {@link
     * WorkloadIdentityClaimCondition}. A condition matching one top-level scalar claim in the
     * workload's identity token.
     */
    "claim_conditions": Array<WorkloadIdentityClaimCondition>;
    /** Time the identity was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The user, API key, or workload identity whose request created this identity. The user or
     * credential that created a workload identity, identified by resource type and ID.
     */
    "created_by": ResourceReference;
    /**
     * Issuer (`iss`) of the external identity provider whose tokens this identity accepts. Set at
     * creation and never changes.
     */
    "issuer": string;
    /**
     * Most recent use. Omitted before the first use. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "last_used_at"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** A label that helps you tell workload identities apart, 1 to 100 characters. */
    "name": string;
    /**
     * Computed from the issuer. New platform values may be added. Value enum: "generic",
     * "github_actions", "gitlab_ci", "google_cloud", "aws", "azure", "kubernetes", "circleci",
     * "buildkite", "vercel", "fly_io".
     */
    "platform": "generic"
        | "github_actions"
        | "gitlab_ci"
        | "google_cloud"
        | "aws"
        | "azure"
        | "kubernetes"
        | "circleci"
        | "buildkite"
        | "vercel"
        | "fly_io"
        | (string & {});
    /**
     * The sandbox containing this identity. Present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * Complete scope set granted to this identity. Replaced as a whole on PATCH. [] (Value):
     * string.
     */
    "scopes": Array<string>;
    /**
     * Whether the identity currently accepts token exchanges. Only active identities do. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Subject (`sub`) a token must carry, compared as subject_match says. */
    "subject": string;
    /** How `subject` is compared with a token's `sub` claim. Value enum: "exact", "glob". */
    "subject_match": "exact" | "glob" | (string & {});
    /** Time the identity last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Positive concurrency version. Increases on policy and lifecycle changes. Format: int64.
     * minimum: 1.
     */
    "version": number;
    /**
     * Unique identifier for this workload identity, prefixed `wid_`. Example:
     * "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     */
    "workload_identity_id": string;
};
/** Non-secret metadata for the calling credential, selected by auth_type. */
export type WorkloadIdentityAuthContext = ({
    /**
     * Access level; scoped tokens always have restricted access. Value enum: "full", "read_only",
     * "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    /** Credential type that selects this object's fields. Value enum: "workload_identity". */
    "auth_type": "workload_identity" | (string & {});
    /**
     * Time the credential expires; absent for keys without an expiry. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /** Merchant the credential acts for. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Whether the credential acts in test or live mode. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** Name of the key, CLI context, or workload identity. */
    "name": string;
    /**
     * Sandbox the credential is bound to, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * Current granted API scopes, resolved at request time for full and read_only keys. []
     * (Value): string.
     */
    "scopes": Array<string>;
    /** ID of the workload identity. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP". */
    "workload_identity_id": string;
})
    & ({
    /** Value enum: "restricted". */
    "access"?: unknown;
});
/** A condition matching one top-level scalar claim in the workload's identity token. */
export type WorkloadIdentityClaimCondition = {
    /** Literal top-level scalar claim name. Registered JWT claims are reserved. */
    "claim": string;
    /**
     * How `value` is compared with the claim. Defaults to exact. Default: "exact". Value enum:
     * "exact", "glob".
     */
    "match": "exact" | "glob" | (string & {});
    /**
     * The value the claim must have, not empty. Strings compare as sent, booleans as `true` or
     * `false`, and numbers as canonical decimal text. A claim that is missing, `null`, an array,
     * or an object never matches.
     */
    "value": string;
};
/**
 * A condition to match one top-level scalar claim in the workload's identity token. Omitted match
 * defaults to exact.
 */
export type WorkloadIdentityClaimConditionRequest = {
    /** Literal top-level scalar claim name. Registered JWT claims are reserved. minLength: 1. */
    "claim": string;
    /**
     * How `value` is compared with the claim. Defaults to exact. Default: "exact". Value enum:
     * "exact", "glob".
     */
    "match"?: "exact" | "glob" | (string & {});
    /**
     * The value the claim must have, not empty. Strings compare as sent, booleans as `true` or
     * `false`, and numbers as canonical decimal text. A claim that is missing, `null`, an array,
     * or an object never matches. minLength: 1.
     */
    "value": string;
};
/**
 * A condition to match one top-level scalar claim in the workload's identity token. Omitted match
 * defaults to exact.
 */
export type WorkloadIdentityClaimConditionRequestInput = {
    /** Literal top-level scalar claim name. Registered JWT claims are reserved. minLength: 1. */
    "claim": string;
    /**
     * How `value` is compared with the claim. Defaults to exact. Default: "exact". Value enum:
     * "exact", "glob".
     */
    "match"?: "exact" | "glob";
    /**
     * The value the claim must have, not empty. Strings compare as sent, booleans as `true` or
     * `false`, and numbers as canonical decimal text. A claim that is missing, `null`, an array,
     * or an object never matches. minLength: 1.
     */
    "value": string;
};
/** A page of `WorkloadIdentity` objects. */
export type WorkloadIdentityListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * WorkloadIdentity}. A policy that grants API access to a workload authenticated by an
     * external identity provider.
     */
    "data": Array<WorkloadIdentity>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `WorkloadIdentity` data. */
export type WorkloadIdentityResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A policy that grants API
     * access to a workload authenticated by an external identity provider.
     */
    "data": WorkloadIdentity;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type _SdkRequiredIdempotency<T> = T extends unknown ? Omit<T, 'idempotencyKey'> & {
    idempotencyKey: string;
} : never;
export type _SdkWithoutIdempotency<T> = T extends unknown ? Omit<T, 'idempotencyKey'> & {
    idempotencyKey?: never;
} : never;
export declare function defaultCredentials(): CredentialProvider;
export declare function makeAcceptFulfillmentRequest(value: InputValue<AcceptFulfillmentRequestInput>): Model<AcceptFulfillmentRequestInput>;
export declare function makeAcceptPartnerAppPlatformTermsRequest(value: InputValue<AcceptPartnerAppPlatformTermsRequestInput>): Model<AcceptPartnerAppPlatformTermsRequestInput>;
export declare function makeAddLineItemsRequest(value: InputValue<AddLineItemsRequestInput>): Model<AddLineItemsRequestInput>;
export declare function makeAddOrderChargeRequest(value: InputValue<AddOrderChargeRequestInput>): Model<AddOrderChargeRequestInput>;
export declare function makeAddReturnLineItemRequest(value: InputValue<AddReturnLineItemRequestInput>): Model<AddReturnLineItemRequestInput>;
export declare function makeAddRiskListItemsRequest(value: InputValue<AddRiskListItemsRequestInput>): Model<AddRiskListItemsRequestInput>;
export declare function makeAddressRequest(value: InputValue<AddressRequestInput>): Model<AddressRequestInput>;
export declare function makeAdjustGiftCardBalanceRequest(value: InputValue<AdjustGiftCardBalanceRequestInput>): Model<AdjustGiftCardBalanceRequestInput>;
export declare function makeAdvanceTestClockRequest(value: InputValue<AdvanceTestClockRequestInput>): Model<AdvanceTestClockRequestInput>;
export declare function makeApplyDiscountRequest(value: InputValue<ApplyDiscountRequestInput>): Model<ApplyDiscountRequestInput>;
export declare function makeApplyDiscountRequestManual(value: InputValue<ApplyDiscountRequestManualInput>): Model<ApplyDiscountRequestManualInput>;
export declare function makeApplyDiscountRequestPromotion(value: InputValue<ApplyDiscountRequestPromotionInput>): Model<ApplyDiscountRequestPromotionInput>;
export declare function makeApplyInventoryCountRequest(value: InputValue<ApplyInventoryCountRequestInput>): Model<ApplyInventoryCountRequestInput>;
export declare function makeApplyOrderGiftCardRequest(value: InputValue<ApplyOrderGiftCardRequestInput>): Model<ApplyOrderGiftCardRequestInput>;
export declare function makeApplySubscriptionPromotionRequest(value: InputValue<ApplySubscriptionPromotionRequestInput>): Model<ApplySubscriptionPromotionRequestInput>;
export declare function makeAssessInvoiceLateFeeRequest(value: InputValue<AssessInvoiceLateFeeRequestInput>): Model<AssessInvoiceLateFeeRequestInput>;
export declare function makeAssignToUnconfiguredDeliveryProfileRequest(value: InputValue<AssignToUnconfiguredDeliveryProfileRequestInput>): Model<AssignToUnconfiguredDeliveryProfileRequestInput>;
export declare function makeBrandingSettingsRequest(value: InputValue<BrandingSettingsRequestInput>): Model<BrandingSettingsRequestInput>;
export declare function makeBuyerCancelReturnRequest(value: InputValue<BuyerCancelReturnRequestInput>): Model<BuyerCancelReturnRequestInput>;
export declare function makeBuyerCapabilitiesRequest(value: InputValue<BuyerCapabilitiesRequestInput>): Model<BuyerCapabilitiesRequestInput>;
export declare function makeBuyerCreateReturnPreviewRequest(value: InputValue<BuyerCreateReturnPreviewRequestInput>): Model<BuyerCreateReturnPreviewRequestInput>;
export declare function makeBuyerCreateReturnPreviewRequestEligibility(value: InputValue<BuyerCreateReturnPreviewRequestEligibilityInput>): Model<BuyerCreateReturnPreviewRequestEligibilityInput>;
export declare function makeBuyerCreateReturnPreviewRequestResolution(value: InputValue<BuyerCreateReturnPreviewRequestResolutionInput>): Model<BuyerCreateReturnPreviewRequestResolutionInput>;
export declare function makeBuyerCreateReturnRequest(value: InputValue<BuyerCreateReturnRequestInput>): Model<BuyerCreateReturnRequestInput>;
export declare function makeBuyerCreateReturnResolutionPreviewRequest(value: InputValue<BuyerCreateReturnResolutionPreviewRequestInput>): Model<BuyerCreateReturnResolutionPreviewRequestInput>;
export declare function makeBuyerInstructionsConfigRequest(value: InputValue<BuyerInstructionsConfigRequestInput>): Model<BuyerInstructionsConfigRequestInput>;
export declare function makeBuyerPauseCapability(value: InputValue<BuyerPauseCapabilityInput>): Model<BuyerPauseCapabilityInput>;
export declare function makeBuyerRetentionOfferRequest(value: InputValue<BuyerRetentionOfferRequestInput>): Model<BuyerRetentionOfferRequestInput>;
export declare function makeBuyerReturnReplacementLineItemInputBundle(value: InputValue<BuyerReturnReplacementLineItemInputBundleInput>): Model<BuyerReturnReplacementLineItemInputBundleInput>;
export declare function makeBuyerReturnReplacementLineItemInputVariant(value: InputValue<BuyerReturnReplacementLineItemInputVariantInput>): Model<BuyerReturnReplacementLineItemInputVariantInput>;
export declare function makeBuyerReturnReplacementLineItemRequest(value: InputValue<BuyerReturnReplacementLineItemRequestInput>): Model<BuyerReturnReplacementLineItemRequestInput>;
export declare function makeBuyerSkipCapability(value: InputValue<BuyerSkipCapabilityInput>): Model<BuyerSkipCapabilityInput>;
export declare function makeCLIContextsRequest(value: InputValue<CLIContextsRequestInput>): Model<CLIContextsRequestInput>;
export declare function makeCLIDeviceRequest(value: InputValue<CLIDeviceRequestInput>): Model<CLIDeviceRequestInput>;
export declare function makeCLIReauthorizeRequest(value: InputValue<CLIReauthorizeRequestInput>): Model<CLIReauthorizeRequestInput>;
export declare function makeCallerSuppliedDeliveryMethodResultRequest(value: InputValue<CallerSuppliedDeliveryMethodResultRequestInput>): Model<CallerSuppliedDeliveryMethodResultRequestInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequest(value: InputValue<CallerSuppliedDeliveryOutcomeRequestInput>): Model<CallerSuppliedDeliveryOutcomeRequestInput>;
export declare function makeCallerSuppliedDeliveryOutcomeRequestAvailable(value: InputValue<CallerSuppliedDeliveryOutcomeRequestAvailableInput>): Model<CallerSuppliedDeliveryOutcomeRequestAvailableInput>;
