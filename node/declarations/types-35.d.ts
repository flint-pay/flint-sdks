import type { PartnerApp } from './types-34.js';
import type { ResponseMeta } from './types-40.js';
import type {
    CheckoutBuyerContactRequest,
    CheckoutBuyerContactRequestInput,
    CancelPaymentIntentRequestInput,
    CapturePaymentIntentRequestInput,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig
} from './types-3.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type {
    OrderGiftCardAllocationAcceptance,
    OrderGiftCardAllocationAcceptanceInput,
    Order,
    OrderPaymentAttempt
} from './types-32.js';
import type { OrderPaymentIntentSelection, OrderPaymentIntentSelectionInput, OrdersCreatePaymentIntentResponse } from './types-33.js';
import type {
    PaymentSourceCredential,
    PaymentSourceCredentialInput,
    PaymentRisk,
    PaymentSourceSummary,
    PaymentLinkLineItem,
    PaymentLinkSalesSummary
} from './types-36.js';
import type { StripePaymentClientAction, SelectableOrderPaymentIntent, SendPaymentIntentReceiptRequestInput } from './types-44.js';
import type { ErrorRemediation, ExpandedCustomerSummary, ExpandedInvoiceSummary, ExpandedOrderSummary } from './types-16.js';
import type { PendingPaymentAction } from './types-37.js';
import type { InputValue } from '../runtime.js';
import type { ConfirmPaymentIntentRequestInput } from './types-5.js';
import type { CreatePaymentIntentRequestInput } from './types-8.js';
import type { UpdatePaymentIntentRequestInput } from './types-48.js';
import type {
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutTaxConfig,
    CheckoutTipConfig
} from './types-4.js';
import type { ExpandedSubscriptionPlanSummary } from './types-17.js';
import type { ImageAttachment } from './types-19.js';
import type { InventoryRoutingSource } from './types-25.js';
import type { LegalSettings } from './types-28.js';
import type { ThemeConfig } from './types-47.js';
/**
 * Shape $ (Value): {@link PartnerAppPermissionManifestEntry}. One permission a partner app can
 * request, with a title, a description, and the Flint scopes it grants.
 */
export type PartnerAppPermissionManifestEntry = {
    /** Shape $ (Value): string. minLength: 1. */
    "description": string;
    /** Shape $ (Value): boolean. */
    "optional"?: boolean;
    /** Shape $ (Value): string. minLength: 1. */
    "permission_id": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "required_scopes": Array<string>;
    /** Shape $ (Value): string. minLength: 1. */
    "title": string;
};
/**
 * Shape $ (Value): {@link PartnerAppPermissionManifestEntryInput}. One permission a partner app
 * can request, with a title, a description, and the Flint scopes it grants.
 */
export type PartnerAppPermissionManifestEntryInput = PartnerAppPermissionManifestEntry;
/** Shape $ (Value): {@link PartnerAppResponse}. A response containing `PartnerApp` data. */
export type PartnerAppResponse = {
    /**
     * Shape $ (Value): {@link PartnerApp}. An application that merchants can authorize to access
     * their accounts.
     */
    "data": PartnerApp;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PartnerAppWithSecret}. A partner app returned with its client secret, as
 * in the response to creating a partner app. An application that merchants can authorize to access
 * their accounts.
 */
export type PartnerAppWithSecret = (Exclude<PartnerApp & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): string. One-time client secret returned when the partner app is created or
     * its secret is rotated.
     */
    "client_secret": string;
});
/**
 * Shape $ (Value): {@link PartnerAppWithSecretResponse}. A response containing
 * `PartnerAppWithSecret` data.
 */
export type PartnerAppWithSecretResponse = {
    /**
     * Shape $ (Value): {@link PartnerAppWithSecret}. A partner app returned with its client
     * secret, as in the response to creating a partner app. An application that merchants can
     * authorize to access their accounts.
     */
    "data": PartnerAppWithSecret;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PartnerAuthorizePreview}. What a partner app is asking to access, shown
 * to a merchant before they approve it, including requested permissions and the redirect URI.
 */
export type PartnerAuthorizePreview = {
    /** Shape $ (Value): string. */
    "client_id": string;
    /** Shape $ (Value): string.  Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "partner_app_id": string;
    /**
     * Shape $ (Value): integer string. The app’s version. It changes whenever the app is edited.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "partner_app_version": `${bigint}`;
    /** Shape $ (Value): string. */
    "redirect_uri": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "requested_permission_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntry}. Shape $[] (Value):
     * {@link PartnerAppPermissionManifestEntry}. One permission a partner app requests during
     * authorization, with its title, description, and required scopes.
     */
    "requested_permissions": Array<PartnerAppPermissionManifestEntry>;
};
/**
 * Shape $ (Value): {@link PartnerAuthorizePreviewResponse}. A response containing
 * `PartnerAuthorizePreview` data.
 */
export type PartnerAuthorizePreviewResponse = {
    /**
     * Shape $ (Value): {@link PartnerAuthorizePreview}. What a partner app is asking to access,
     * shown to a merchant before they approve it, including requested permissions and the redirect
     * URI.
     */
    "data": PartnerAuthorizePreview;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PartnerEnvironmentGrant}. A partner application's authorization to
 * access an environment.
 */
export type PartnerEnvironmentGrant = ({
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "environment_grant_id": string;
    /**
     * Shape $ (Value): Array of {@link PartnerAppPermissionManifestEntry}. The app’s permissions
     * this grant holds, from the app’s current manifest. Their permission IDs are the token scope.
     * Shape $[] (Value): {@link PartnerAppPermissionManifestEntry}. One permission a partner app
     * can request, with a title, a description, and the Flint scopes it grants.
     */
    "granted_permissions": Array<PartnerAppPermissionManifestEntry>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "granted_scopes": Array<string>;
    /** Shape $ (Value): string.  Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "revoked_at"?: string;
    /** Shape $ (Value): string. */
    "revoked_by_user_id"?: string;
    /** Shape $ (Value): string. */
    "sandbox_id"?: string;
    /** Shape $ (Value): string.  Value enum: "pending_exchange", "active", "revoked". */
    "status": "pending_exchange" | "active" | "revoked" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
});
/** Shape $ (Value): {@link PartnerWebhookEnvelope}. Fields shared by partner webhook payloads. */
export type PartnerWebhookEnvelope = {
    /** Shape $ (Value): string. Format: date. */
    "api_version": string;
    /** Shape $ (Value): string. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): object. Shape $.object (Required): object. */
    "data": {
        /** Shape $ (Value): object. */
        "object": {
            [key: string]: unknown;
        };
    };
    /**
     * Shape $ (Value): string. Value enum: "balance.updated", "balance_transaction.created",
     * "balance_transaction.updated", "bundle.archived", "bundle.created", "bundle.updated",
     * "category.created", "category.deleted", "category.updated", "checkout_session.closed",
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
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded".
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
        | (string & {});
    /** Shape $ (Value): string. */
    "partner_app_id": string;
    /**
     * Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before
     * 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     */
    "payload_version": number;
    /**
     * Shape $ (Value): Alternative shapes (see declared variants). Shape $.oneOf[1] (Value):
     * object. Shape $.oneOf[1].merchant_id (Required): string. Shape
     * $.oneOf[1].partner_app_install_id (Required): string. Shape $.oneOf[1].type (Required):
     * string. Value enum: "partner_app". Shape $.oneOf[2] (Value): object. Shape
     * $.oneOf[2].environment_grant_id (Required): string. Shape $.oneOf[2].merchant_id (Required):
     * string. Shape $.oneOf[2].mode (Required): string. Value enum: "test", "live". Shape
     * $.oneOf[2].partner_app_install_id (Required): string. Shape $.oneOf[2].sandbox_id
     * (Optional): string. Shape $.oneOf[2].type (Required): string. Value enum:
     * "installed_merchants".
     */
    "source": (({
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string.  Value enum: "partner_app". */
        "type": "partner_app" | (string & {});
    })
        | (({
        /** Shape $ (Value): string. */
        "environment_grant_id": string;
        /** Shape $ (Value): string. */
        "merchant_id": string;
        /** Shape $ (Value): string.  Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        /** Shape $ (Value): string. */
        "partner_app_install_id": string;
        /** Shape $ (Value): string. */
        "sandbox_id"?: string;
        /** Shape $ (Value): string.  Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    }))
        | (Record<string, unknown>));
    /**
     * Shape $ (Value): boolean. true for a synthetic event sent from the test-events endpoint,
     * false otherwise.
     */
    "test": boolean;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
};
/**
 * Shape $ (Value): {@link PauseSubscriptionRequest}. The request body for: Pause one of the
 * current buyer's subscriptions; Pause subscription.
 */
export type PauseSubscriptionRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Billing cycles to pause for, at least 1. Omit it to pause until
     * the subscription is resumed. A pause with a duration resumes automatically at
     * scheduled_resume_at. Repeating the same pause length returns the paused subscription;
     * changing the length requires resuming first. When the store's
     * customer_account.buyer_capabilities.pause.max_cycles is set, a buyer must send a value from
     * 1 to that limit. Format: int32. minimum: 1.
     */
    "pause_duration_cycles"?: number;
};
/**
 * Shape $ (Value): {@link PauseSubscriptionRequestInput}. The request body for: Pause one of the
 * current buyer's subscriptions; Pause subscription.
 */
export type PauseSubscriptionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer. Billing cycles to pause for, at least 1. Omit it to pause until
     * the subscription is resumed. A pause with a duration resumes automatically at
     * scheduled_resume_at. Repeating the same pause length returns the paused subscription;
     * changing the length requires resuming first. When the store's
     * customer_account.buyer_capabilities.pause.max_cycles is set, a buyer must send a value from
     * 1 to that limit. Format: int32. minimum: 1.
     */
    "pause_duration_cycles"?: number;
};
/** Shape $ (Value): {@link PayOrderRequest}. The request body for: Pay order. */
export type PayOrderRequest = ((PayOrderRequestPay)
    | (PayOrderRequestConfirmPaymentIntents)
    | (PayOrderRequestSetup)
    | (PayOrderRequestResume)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PayOrderRequestConfirmPaymentIntents}. The `confirm_payment_intents`
 * variant of `PayOrderRequest`.
 */
export type PayOrderRequestConfirmPaymentIntents = {
    /**
     * Shape $ (Value): {@link OrderGiftCardAllocationAcceptance}. Accept the exact
     * gift_card_estimate returned on the current order, including all selected cards and both
     * totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may
     * use one processor payment intent for the processor_money remainder.
     */
    "accepted_gift_card_allocation"?: OrderGiftCardAllocationAcceptance;
    /** Shape $ (Value): string.  Value enum: "confirm_payment_intents". */
    "action": "confirm_payment_intents" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutBuyerContactRequest}. Buyer email and phone recorded on the
     * order. A checkout session payment uses the session's saved contact for omitted fields. Email
     * and phone cannot be null. Buyer contact to supply with payment or save during checkout. Send
     * at least one field. Values are stored exactly as sent, so an email with surrounding spaces
     * is rejected. Checkout session updates keep omitted fields and accept null to clear a field.
     * Payment requests do not accept null. minProperties: 1. Shape $.email (Optional): (string or
     * null) and string. Email for the buyer, such as buyer@example.com. On checkout session
     * updates, null clears the saved email. Format: email. minLength: 1. maxLength: 255.
     * minLength: 1. Shape $.phone (Optional): (string or null) and string. Phone for the buyer, in
     * E.164 format, such as +14155551234. On checkout session updates, null clears the saved
     * phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string. minLength: 1. */
        "email"?: string;
        /** Shape $ (Value): string. minLength: 1. */
        "phone"?: string;
    });
    /** Shape $ (Value): string.  Value enum: "complete_order", "partial_payment". */
    "completion_behavior"?: "complete_order" | "partial_payment" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. The outstanding balance you reviewed. Required with
     * checkout credentials, and with an API key or partner token when the order has an open
     * checkout session. Optional otherwise. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Optional version from the order you reviewed. A mismatch
     * returns ORDER_CHANGED_REFRESH_REQUIRED, even when the outstanding amount is unchanged.
     * Starting a payment advances the order's version. After a declined or failed attempt, use the
     * order returned in the pay response or read the order again before retrying. When
     * accepted_gift_card_allocation is sent, its order_version must match this value. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link OrderPaymentIntentSelection}. minItems: 1. Shape $[]
     * (Value): {@link OrderPaymentIntentSelection}. Identifies a payment intent to confirm for an
     * order and the credential to use: a token, a saved payment method, a Stripe confirmation
     * token, or the attached source.
     */
    "payment_intents": Array<OrderPaymentIntentSelection>;
    /**
     * Shape $ (Value): boolean. The buyer's choice to save the card they typed for faster checkout
     * at this merchant. Send true only from the checkout session's own credential, when the
     * session's can_save_payment_method is true and save_payment_method_requires_verification is
     * false, for one newly collected card sent as stripe.confirmation_token created with
     * setup_future_usage on_session. The card is saved with usage on_session once the payment
     * succeeds, for the customer the checkout acts for: the customer the merchant created the
     * session for, or the customer whose email the buyer confirmed in it. A typed
     * buyer_contact.email never decides it. A checkout that acts for no customer refuses the save
     * until the buyer confirms their email with a code, unless it sends save_payment_method_phone.
     * A checkout the buyer bound by a texted code saves the card with that number. A checkout
     * whose buyer confirmed the customer's email can also send save_payment_method_phone, to save
     * the card with a number the buyer confirms by text after paying. A checkout can send the
     * buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm,
     * in stripe.confirmation_token created with no setup_future_usage, pays without the save, and
     * the payment attempt's payment_method_save reports not_saved with reason
     * payment_method_not_saveable. The session's save_payment_method_types lists what is saved.
     * Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must
     * then have no setup_future_usage. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * Shape $ (Value): string. A US or Canadian mobile phone number in E.164 format, such as
     * +14155552671, that confirms a card saved while the checkout acts for no customer, or for the
     * customer whose email the buyer confirmed in it. Send it with save_payment_method: true only
     * from the checkout session's own credential, when the session's
     * can_save_payment_method_with_phone is true. The card is kept for the customer the checkout
     * acts for, or else the merchant's customer with the buyer's email, once the payment succeeds,
     * or once it is approved when the merchant captures later, but works for nothing until the
     * buyer confirms it within 24 hours, with a code texted to this number or, when the customer's
     * email is the email of the payment, emailed there instead: request the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method, and read payment_method_save on the checkout session. A card
     * saved with the number makes it the customer's saved number, and the cards saved with the
     * number it replaces are removed. A card not confirmed in time is not saved. minLength: 1.
     * maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     */
    "save_payment_method_phone"?: string;
};
/**
 * Shape $ (Value): {@link PayOrderRequestConfirmPaymentIntentsInput}. The
 * `confirm_payment_intents` variant of `PayOrderRequest`.
 */
export type PayOrderRequestConfirmPaymentIntentsInput = {
    /**
     * Shape $ (Value): {@link OrderGiftCardAllocationAcceptanceInput}. Accept the exact
     * gift_card_estimate returned on the current order, including all selected cards and both
     * totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may
     * use one processor payment intent for the processor_money remainder.
     */
    "accepted_gift_card_allocation"?: OrderGiftCardAllocationAcceptanceInput;
    /** Shape $ (Value): string.  Value enum: "confirm_payment_intents". */
    "action": "confirm_payment_intents";
    /**
     * Shape $ (Value): {@link CheckoutBuyerContactRequestInput}. Buyer email and phone recorded on
     * the order. A checkout session payment uses the session's saved contact for omitted fields.
     * Email and phone cannot be null. Buyer contact to supply with payment or save during
     * checkout. Send at least one field. Values are stored exactly as sent, so an email with
     * surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null
     * to clear a field. Payment requests do not accept null. minProperties: 1. Shape $.email
     * (Optional): (string or null) and string. Email for the buyer, such as buyer@example.com. On
     * checkout session updates, null clears the saved email. Format: email. minLength: 1.
     * maxLength: 255. minLength: 1. Shape $.phone (Optional): (string or null) and string. Phone
     * for the buyer, in E.164 format, such as +14155551234. On checkout session updates, null
     * clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string. minLength: 1. */
        "email"?: string;
        /** Shape $ (Value): string. minLength: 1. */
        "phone"?: string;
    });
    /** Shape $ (Value): string.  Value enum: "complete_order", "partial_payment". */
    "completion_behavior"?: "complete_order" | "partial_payment";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. The outstanding balance you reviewed. Required
     * with checkout credentials, and with an API key or partner token when the order has an open
     * checkout session. Optional otherwise. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Optional version from the order you reviewed. A mismatch
     * returns ORDER_CHANGED_REFRESH_REQUIRED, even when the outstanding amount is unchanged.
     * Starting a payment advances the order's version. After a declined or failed attempt, use the
     * order returned in the pay response or read the order again before retrying. When
     * accepted_gift_card_allocation is sent, its order_version must match this value. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link OrderPaymentIntentSelectionInput}. minItems: 1. Shape $[]
     * (Value): {@link OrderPaymentIntentSelectionInput}. Identifies a payment intent to confirm
     * for an order and the credential to use: a token, a saved payment method, a Stripe
     * confirmation token, or the attached source.
     */
    "payment_intents": Array<OrderPaymentIntentSelectionInput>;
    /**
     * Shape $ (Value): boolean. The buyer's choice to save the card they typed for faster checkout
     * at this merchant. Send true only from the checkout session's own credential, when the
     * session's can_save_payment_method is true and save_payment_method_requires_verification is
     * false, for one newly collected card sent as stripe.confirmation_token created with
     * setup_future_usage on_session. The card is saved with usage on_session once the payment
     * succeeds, for the customer the checkout acts for: the customer the merchant created the
     * session for, or the customer whose email the buyer confirmed in it. A typed
     * buyer_contact.email never decides it. A checkout that acts for no customer refuses the save
     * until the buyer confirms their email with a code, unless it sends save_payment_method_phone.
     * A checkout the buyer bound by a texted code saves the card with that number. A checkout
     * whose buyer confirmed the customer's email can also send save_payment_method_phone, to save
     * the card with a number the buyer confirms by text after paying. A checkout can send the
     * buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm,
     * in stripe.confirmation_token created with no setup_future_usage, pays without the save, and
     * the payment attempt's payment_method_save reports not_saved with reason
     * payment_method_not_saveable. The session's save_payment_method_types lists what is saved.
     * Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must
     * then have no setup_future_usage. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * Shape $ (Value): string. A US or Canadian mobile phone number in E.164 format, such as
     * +14155552671, that confirms a card saved while the checkout acts for no customer, or for the
     * customer whose email the buyer confirmed in it. Send it with save_payment_method: true only
     * from the checkout session's own credential, when the session's
     * can_save_payment_method_with_phone is true. The card is kept for the customer the checkout
     * acts for, or else the merchant's customer with the buyer's email, once the payment succeeds,
     * or once it is approved when the merchant captures later, but works for nothing until the
     * buyer confirms it within 24 hours, with a code texted to this number or, when the customer's
     * email is the email of the payment, emailed there instead: request the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method, and read payment_method_save on the checkout session. A card
     * saved with the number makes it the customer's saved number, and the cards saved with the
     * number it replaces are removed. A card not confirmed in time is not saved. minLength: 1.
     * maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     */
    "save_payment_method_phone"?: string;
};
/** Shape $ (Value): {@link PayOrderRequestInput}. The request body for: Pay order. */
export type PayOrderRequestInput = ((PayOrderRequestPayInput)
    | (PayOrderRequestConfirmPaymentIntentsInput)
    | (PayOrderRequestSetupInput)
    | (PayOrderRequestResumeInput));
/** Shape $ (Value): {@link PayOrderRequestPay}. The `pay` variant of `PayOrderRequest`. */
export type PayOrderRequestPay = {
    /**
     * Shape $ (Value): {@link OrderGiftCardAllocationAcceptance}. Accept the exact
     * gift_card_estimate returned on the current order, including all selected cards and both
     * totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may
     * use one processor payment intent for the processor_money remainder.
     */
    "accepted_gift_card_allocation"?: OrderGiftCardAllocationAcceptance;
    /** Shape $ (Value): string.  Value enum: "pay". */
    "action": "pay" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutBuyerContactRequest}. Buyer email and phone recorded on the
     * order. A checkout session payment uses the session's saved contact for omitted fields. Email
     * and phone cannot be null. Buyer contact to supply with payment or save during checkout. Send
     * at least one field. Values are stored exactly as sent, so an email with surrounding spaces
     * is rejected. Checkout session updates keep omitted fields and accept null to clear a field.
     * Payment requests do not accept null. minProperties: 1. Shape $.email (Optional): (string or
     * null) and string. Email for the buyer, such as buyer@example.com. On checkout session
     * updates, null clears the saved email. Format: email. minLength: 1. maxLength: 255.
     * minLength: 1. Shape $.phone (Optional): (string or null) and string. Phone for the buyer, in
     * E.164 format, such as +14155551234. On checkout session updates, null clears the saved
     * phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string. minLength: 1. */
        "email"?: string;
        /** Shape $ (Value): string. minLength: 1. */
        "phone"?: string;
    });
    /**
     * Shape $ (Value): {@link MoneyValue}. The outstanding balance you reviewed. Required with
     * checkout credentials, and with an API key or partner token when the order has an open
     * checkout session. Optional otherwise. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Optional version from the order you reviewed. A mismatch
     * returns ORDER_CHANGED_REFRESH_REQUIRED, even when the outstanding amount is unchanged.
     * Starting a payment advances the order's version. After a declined or failed attempt, use the
     * order returned in the pay response or read the order again before retrying. When
     * accepted_gift_card_allocation is sent, its order_version must match this value. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link PaymentSourceCredential}. The credential you provide to pay an
     * order: a payment source token, a saved payment method ID, or a Stripe confirmation token.
     */
    "payment_source"?: PaymentSourceCredential;
    /**
     * Shape $ (Value): boolean. The buyer's choice to save the card they typed for faster checkout
     * at this merchant. Send true only from the checkout session's own credential, when the
     * session's can_save_payment_method is true and save_payment_method_requires_verification is
     * false, for one newly collected card sent as stripe.confirmation_token created with
     * setup_future_usage on_session. The card is saved with usage on_session once the payment
     * succeeds, for the customer the checkout acts for: the customer the merchant created the
     * session for, or the customer whose email the buyer confirmed in it. A typed
     * buyer_contact.email never decides it. A checkout that acts for no customer refuses the save
     * until the buyer confirms their email with a code, unless it sends save_payment_method_phone.
     * A checkout the buyer bound by a texted code saves the card with that number. A checkout
     * whose buyer confirmed the customer's email can also send save_payment_method_phone, to save
     * the card with a number the buyer confirms by text after paying. A checkout can send the
     * buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm,
     * in stripe.confirmation_token created with no setup_future_usage, pays without the save, and
     * the payment attempt's payment_method_save reports not_saved with reason
     * payment_method_not_saveable. The session's save_payment_method_types lists what is saved.
     * Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must
     * then have no setup_future_usage. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * Shape $ (Value): string. A US or Canadian mobile phone number in E.164 format, such as
     * +14155552671, that confirms a card saved while the checkout acts for no customer, or for the
     * customer whose email the buyer confirmed in it. Send it with save_payment_method: true only
     * from the checkout session's own credential, when the session's
     * can_save_payment_method_with_phone is true. The card is kept for the customer the checkout
     * acts for, or else the merchant's customer with the buyer's email, once the payment succeeds,
     * or once it is approved when the merchant captures later, but works for nothing until the
     * buyer confirms it within 24 hours, with a code texted to this number or, when the customer's
     * email is the email of the payment, emailed there instead: request the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method, and read payment_method_save on the checkout session. A card
     * saved with the number makes it the customer's saved number, and the cards saved with the
     * number it replaces are removed. A card not confirmed in time is not saved. minLength: 1.
     * maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     */
    "save_payment_method_phone"?: string;
};
/** Shape $ (Value): {@link PayOrderRequestPayInput}. The `pay` variant of `PayOrderRequest`. */
export type PayOrderRequestPayInput = {
    /**
     * Shape $ (Value): {@link OrderGiftCardAllocationAcceptanceInput}. Accept the exact
     * gift_card_estimate returned on the current order, including all selected cards and both
     * totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may
     * use one processor payment intent for the processor_money remainder.
     */
    "accepted_gift_card_allocation"?: OrderGiftCardAllocationAcceptanceInput;
    /** Shape $ (Value): string.  Value enum: "pay". */
    "action": "pay";
    /**
     * Shape $ (Value): {@link CheckoutBuyerContactRequestInput}. Buyer email and phone recorded on
     * the order. A checkout session payment uses the session's saved contact for omitted fields.
     * Email and phone cannot be null. Buyer contact to supply with payment or save during
     * checkout. Send at least one field. Values are stored exactly as sent, so an email with
     * surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null
     * to clear a field. Payment requests do not accept null. minProperties: 1. Shape $.email
     * (Optional): (string or null) and string. Email for the buyer, such as buyer@example.com. On
     * checkout session updates, null clears the saved email. Format: email. minLength: 1.
     * maxLength: 255. minLength: 1. Shape $.phone (Optional): (string or null) and string. Phone
     * for the buyer, in E.164 format, such as +14155551234. On checkout session updates, null
     * clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string. minLength: 1. */
        "email"?: string;
        /** Shape $ (Value): string. minLength: 1. */
        "phone"?: string;
    });
    /**
     * Shape $ (Value): {@link MoneyValueInput}. The outstanding balance you reviewed. Required
     * with checkout credentials, and with an API key or partner token when the order has an open
     * checkout session. Optional otherwise. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Optional version from the order you reviewed. A mismatch
     * returns ORDER_CHANGED_REFRESH_REQUIRED, even when the outstanding amount is unchanged.
     * Starting a payment advances the order's version. After a declined or failed attempt, use the
     * order returned in the pay response or read the order again before retrying. When
     * accepted_gift_card_allocation is sent, its order_version must match this value. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link PaymentSourceCredentialInput}. The credential you provide to pay an
     * order: a payment source token, a saved payment method ID, or a Stripe confirmation token.
     */
    "payment_source"?: PaymentSourceCredentialInput;
    /**
     * Shape $ (Value): boolean. The buyer's choice to save the card they typed for faster checkout
     * at this merchant. Send true only from the checkout session's own credential, when the
     * session's can_save_payment_method is true and save_payment_method_requires_verification is
     * false, for one newly collected card sent as stripe.confirmation_token created with
     * setup_future_usage on_session. The card is saved with usage on_session once the payment
     * succeeds, for the customer the checkout acts for: the customer the merchant created the
     * session for, or the customer whose email the buyer confirmed in it. A typed
     * buyer_contact.email never decides it. A checkout that acts for no customer refuses the save
     * until the buyer confirms their email with a code, unless it sends save_payment_method_phone.
     * A checkout the buyer bound by a texted code saves the card with that number. A checkout
     * whose buyer confirmed the customer's email can also send save_payment_method_phone, to save
     * the card with a number the buyer confirms by text after paying. A checkout can send the
     * buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm,
     * in stripe.confirmation_token created with no setup_future_usage, pays without the save, and
     * the payment attempt's payment_method_save reports not_saved with reason
     * payment_method_not_saveable. The session's save_payment_method_types lists what is saved.
     * Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must
     * then have no setup_future_usage. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * Shape $ (Value): string. A US or Canadian mobile phone number in E.164 format, such as
     * +14155552671, that confirms a card saved while the checkout acts for no customer, or for the
     * customer whose email the buyer confirmed in it. Send it with save_payment_method: true only
     * from the checkout session's own credential, when the session's
     * can_save_payment_method_with_phone is true. The card is kept for the customer the checkout
     * acts for, or else the merchant's customer with the buyer's email, once the payment succeeds,
     * or once it is approved when the merchant captures later, but works for nothing until the
     * buyer confirms it within 24 hours, with a code texted to this number or, when the customer's
     * email is the email of the payment, emailed there instead: request the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method, and read payment_method_save on the checkout session. A card
     * saved with the number makes it the customer's saved number, and the cards saved with the
     * number it replaces are removed. A card not confirmed in time is not saved. minLength: 1.
     * maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     */
    "save_payment_method_phone"?: string;
};
/** Shape $ (Value): {@link PayOrderRequestResume}. The `resume` variant of `PayOrderRequest`. */
export type PayOrderRequestResume = {
    /** Shape $ (Value): string.  Value enum: "resume". */
    "action": "resume" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutBuyerContactRequest}. Buyer email and phone recorded on the
     * order. A checkout session payment uses the session's saved contact for omitted fields. Email
     * and phone cannot be null. Buyer contact to supply with payment or save during checkout. Send
     * at least one field. Values are stored exactly as sent, so an email with surrounding spaces
     * is rejected. Checkout session updates keep omitted fields and accept null to clear a field.
     * Payment requests do not accept null. minProperties: 1. Shape $.email (Optional): (string or
     * null) and string. Email for the buyer, such as buyer@example.com. On checkout session
     * updates, null clears the saved email. Format: email. minLength: 1. maxLength: 255.
     * minLength: 1. Shape $.phone (Optional): (string or null) and string. Phone for the buyer, in
     * E.164 format, such as +14155551234. On checkout session updates, null clears the saved
     * phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string. minLength: 1. */
        "email"?: string;
        /** Shape $ (Value): string. minLength: 1. */
        "phone"?: string;
    });
    /**
     * Shape $ (Value): {@link MoneyValue}. The outstanding balance you reviewed. Required with
     * checkout credentials, and with an API key or partner token when the order has an open
     * checkout session. Optional otherwise. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "order_payment_attempt_id": string;
};
/**
 * Shape $ (Value): {@link PayOrderRequestResumeInput}. The `resume` variant of `PayOrderRequest`.
 */
export type PayOrderRequestResumeInput = {
    /** Shape $ (Value): string.  Value enum: "resume". */
    "action": "resume";
    /**
     * Shape $ (Value): {@link CheckoutBuyerContactRequestInput}. Buyer email and phone recorded on
     * the order. A checkout session payment uses the session's saved contact for omitted fields.
     * Email and phone cannot be null. Buyer contact to supply with payment or save during
     * checkout. Send at least one field. Values are stored exactly as sent, so an email with
     * surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null
     * to clear a field. Payment requests do not accept null. minProperties: 1. Shape $.email
     * (Optional): (string or null) and string. Email for the buyer, such as buyer@example.com. On
     * checkout session updates, null clears the saved email. Format: email. minLength: 1.
     * maxLength: 255. minLength: 1. Shape $.phone (Optional): (string or null) and string. Phone
     * for the buyer, in E.164 format, such as +14155551234. On checkout session updates, null
     * clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string. minLength: 1. */
        "email"?: string;
        /** Shape $ (Value): string. minLength: 1. */
        "phone"?: string;
    });
    /**
     * Shape $ (Value): {@link MoneyValueInput}. The outstanding balance you reviewed. Required
     * with checkout credentials, and with an API key or partner token when the order has an open
     * checkout session. Optional otherwise. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "order_payment_attempt_id": string;
};
/** Shape $ (Value): {@link PayOrderRequestSetup}. The `setup` variant of `PayOrderRequest`. */
export type PayOrderRequestSetup = {
    /** Shape $ (Value): string.  Value enum: "setup". */
    "action": "setup" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutBuyerContactRequest}. Buyer email and phone recorded on the
     * order. A checkout session payment uses the session's saved contact for omitted fields. Email
     * and phone cannot be null. Buyer contact to supply with payment or save during checkout. Send
     * at least one field. Values are stored exactly as sent, so an email with surrounding spaces
     * is rejected. Checkout session updates keep omitted fields and accept null to clear a field.
     * Payment requests do not accept null. minProperties: 1. Shape $.email (Optional): (string or
     * null) and string. Email for the buyer, such as buyer@example.com. On checkout session
     * updates, null clears the saved email. Format: email. minLength: 1. maxLength: 255.
     * minLength: 1. Shape $.phone (Optional): (string or null) and string. Phone for the buyer, in
     * E.164 format, such as +14155551234. On checkout session updates, null clears the saved
     * phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string. minLength: 1. */
        "email"?: string;
        /** Shape $ (Value): string. minLength: 1. */
        "phone"?: string;
    });
    /**
     * Shape $ (Value): {@link MoneyValue}. The outstanding balance you reviewed. Required with
     * checkout credentials, and with an API key or partner token when the order has an open
     * checkout session. Optional otherwise. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Optional version from the order you reviewed. A mismatch
     * returns ORDER_CHANGED_REFRESH_REQUIRED, even when the outstanding amount is unchanged.
     * Starting a payment advances the order's version. After a declined or failed attempt, use the
     * order returned in the pay response or read the order again before retrying. When
     * accepted_gift_card_allocation is sent, its order_version must match this value. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): object. Shape $.token (Required): string. minLength: 1. */
    "setup_payment_source": {
        /** Shape $ (Value): string. minLength: 1. */
        "token": string;
    };
};
/** Shape $ (Value): {@link PayOrderRequestSetupInput}. The `setup` variant of `PayOrderRequest`. */
export type PayOrderRequestSetupInput = {
    /** Shape $ (Value): string.  Value enum: "setup". */
    "action": "setup";
    /**
     * Shape $ (Value): {@link CheckoutBuyerContactRequestInput}. Buyer email and phone recorded on
     * the order. A checkout session payment uses the session's saved contact for omitted fields.
     * Email and phone cannot be null. Buyer contact to supply with payment or save during
     * checkout. Send at least one field. Values are stored exactly as sent, so an email with
     * surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null
     * to clear a field. Payment requests do not accept null. minProperties: 1. Shape $.email
     * (Optional): (string or null) and string. Email for the buyer, such as buyer@example.com. On
     * checkout session updates, null clears the saved email. Format: email. minLength: 1.
     * maxLength: 255. minLength: 1. Shape $.phone (Optional): (string or null) and string. Phone
     * for the buyer, in E.164 format, such as +14155551234. On checkout session updates, null
     * clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** Shape $ (Value): string. minLength: 1. */
        "email"?: string;
        /** Shape $ (Value): string. minLength: 1. */
        "phone"?: string;
    });
    /**
     * Shape $ (Value): {@link MoneyValueInput}. The outstanding balance you reviewed. Required
     * with checkout credentials, and with an API key or partner token when the order has an open
     * checkout session. Optional otherwise. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Optional version from the order you reviewed. A mismatch
     * returns ORDER_CHANGED_REFRESH_REQUIRED, even when the outstanding amount is unchanged.
     * Starting a payment advances the order's version. After a declined or failed attempt, use the
     * order returned in the pay response or read the order again before retrying. When
     * accepted_gift_card_allocation is sent, its order_version must match this value. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): object. Shape $.token (Required): string. minLength: 1. */
    "setup_payment_source": {
        /** Shape $ (Value): string. minLength: 1. */
        "token": string;
    };
};
/** Shape $ (Value): {@link PayOrderResponse}. A response containing `PayOrderResult` data. */
export type PayOrderResponse = {
    /**
     * Shape $ (Value): {@link PayOrderResult}. The order is the primary resource and
     * expected_version target; order_payment_attempt records the payment outcome.
     */
    "data": PayOrderResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PayOrderResult}. The order is the primary resource and expected_version
 * target; order_payment_attempt records the payment outcome.
 */
export type PayOrderResult = {
    /**
     * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "order": Order;
    /** Shape $ (Value): {@link OrderPaymentAttempt}. An attempt to pay an order. */
    "order_payment_attempt"?: OrderPaymentAttempt;
};
/**
 * Shape $ (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment intent, with the fee
 * type and amount.
 */
export type PaymentAddOnFee = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "invoice_collection", "subscription_collection",
     * "automatic_tax".
     */
    "fee_type": "invoice_collection" | "subscription_collection" | "automatic_tax" | (string & {});
};
/**
 * Shape $ (Value): {@link PaymentAttemptGiftCardRedemption}. A gift card redemption made as part
 * of an order payment attempt, with the amount, tip, and gift card.
 */
export type PaymentAttemptGiftCardRedemption = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string. */
    "gift_card_redemption_id": string;
    /** Shape $ (Value): string. Last four characters of the card's current code. */
    "last4": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link PaymentAttemptPaymentIntent}. A payment intent used as one leg of an
 * order payment attempt, with its amount, status, tip, and latest error.
 */
export type PaymentAttemptPaymentIntent = {
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount requested from the buyer, including any
     * tip_money. Capturing doesn't change it: after a partial capture it still shows the requested
     * amount, and captured_money shows what was collected. On a standalone payment intent, PATCH
     * can change it only before the first confirmation attempt. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Capture is unavailable at or after this time, even if the payment
     * still has requires_capture status. Format: date-time.
     */
    "authorization_expires_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Payment intent's stored capturable amount. A positive
     * amount does not override authorization_expires_at or the payment status. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary}. A summary of why a payment attempt failed,
     * with a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Shape $ (Value): string. Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Payment option used by this leg, using the same values as
     * PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when
     * no payment option has been selected. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
    /**
     * Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment
     * intent and one whose last attempt failed, so read last_payment_error with it. succeeded,
     * canceled, and expired are final. Refunds and disputes never change status. Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired".
     */
    "status": "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link PaymentClientAction}. Typed provider-specific browser action payload.
 * Execute the selected provider action before continuing the owning payment through Flint.
 */
export type PaymentClientAction = {
    /**
     * Shape $ (Value): {@link StripePaymentClientAction}. Stripe.js initialization context plus
     * one flow-specific authority object. Exactly one of payment_intent or setup_intent is
     * present.
     */
    "stripe": StripePaymentClientAction;
};
/**
 * Shape $ (Value): {@link PaymentCollection}. Client-side details for collecting payment from the
 * buyer, such as the Stripe settings to initialize Stripe.js.
 */
export type PaymentCollection = {
    /**
     * Shape $ (Value): {@link PaymentCollectionStripe}. Client configuration for collecting the
     * payment through Stripe. Stripe details for collecting payment in the browser: account ID,
     * publishable key, return URL, and Elements options.
     */
    "stripe"?: PaymentCollectionStripe;
};
/**
 * Shape $ (Value): {@link PaymentCollectionStripe}. Stripe details for collecting payment in the
 * browser: account ID, publishable key, return URL, and Elements options.
 */
export type PaymentCollectionStripe = {
    /** Shape $ (Value): string. Stripe account to use when initializing the payment client. */
    "account_id"?: string;
    /**
     * Shape $ (Value): {@link PaymentCollectionStripeElements}. Stripe Elements configuration for
     * the available payment methods and amounts. Stripe Elements collection guidance. Follow
     * next_step in the browser, then submit the result to submit_to through Flint.
     */
    "elements"?: PaymentCollectionStripeElements;
    /** Shape $ (Value): string. Publishable Stripe key for initializing the payment client. */
    "publishable_key"?: string;
    /** Shape $ (Value): string. URL the buyer returns to after a redirect payment step. */
    "return_url"?: string;
};
/**
 * Shape $ (Value): {@link PaymentCollectionStripeElements}. Stripe Elements collection guidance.
 * Follow next_step in the browser, then submit the result to submit_to through Flint.
 */
export type PaymentCollectionStripeElements = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount and currency used to initialize the payment
     * form. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): Array of string. Digital wallets that the payment form can offer. Shape $[]
     * (Value): string.
     */
    "digital_wallets"?: Array<string>;
    /**
     * Shape $ (Value): string. Whether Elements is collecting a payment source for an immediate
     * payment or a setup source for future use. Value enum: "payment", "setup".
     */
    "mode": "payment" | "setup" | (string & {});
    /**
     * Shape $ (Value): string. Browser collection operation to perform before calling submit_to.
     * Value enum: "collect_payment_source", "collect_setup_payment_source",
     * "create_confirmation_token".
     */
    "next_step": "collect_payment_source"
        | "collect_setup_payment_source"
        | "create_confirmation_token"
        | (string & {});
    /**
     * Shape $ (Value): string. Stripe Elements payment method creation mode. Follow next_step:
     * standalone PaymentIntents and checkout-authenticated order collection create a
     * ConfirmationToken, while merchant-authenticated order collection and setup collection create
     * a PaymentMethod. Value enum: "manual".
     */
    "payment_method_creation": "manual" | (string & {});
    /** Shape $ (Value): object. Payment method settings passed to the payment form. */
    "payment_method_options"?: {
        [key: string]: unknown;
    };
    /**
     * Shape $ (Value): Array of string. Payment method types that the payment form can offer.
     * Shape $[] (Value): string.
     */
    "payment_method_types": Array<string>;
    /**
     * Shape $ (Value): Array of {@link SelectableOrderPaymentIntent}. Order payment intents that
     * the buyer can select for collection. Shape $[] (Value): {@link
     * SelectableOrderPaymentIntent}. A payment intent on an order the caller can pick, with its
     * amount, status, and last payment error.
     */
    "selectable_payment_intents"?: Array<SelectableOrderPaymentIntent>;
    /**
     * Shape $ (Value): string. Flint operation that accepts the result of next_step. Value enum:
     * "pay_order", "confirm_payment_intent".
     */
    "submit_to": "pay_order" | "confirm_payment_intent" | (string & {});
};
/**
 * Shape $ (Value): {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
 * normalized error code, a message, the failure time, and remediation.
 */
export type PaymentErrorSummary = {
    /**
     * Shape $ (Value): string. Flint-normalized payment failure code. Unknown provider values are
     * returned as payment_failed. Value enum: "card_declined", "insufficient_funds",
     * "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized",
     * "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required",
     * "payment_blocked", "expired_card", "incorrect_cvc", "lost_card", "stolen_card",
     * "do_not_honor", "fraudulent", "processing_error", "payment_method_unavailable",
     * "payment_method_declined", "payment_not_completed", "payment_action_expired",
     * "payment_method_temporarily_unavailable", "payment_failed".
     */
    "code": "card_declined"
        | "insufficient_funds"
        | "bank_account_closed"
        | "bank_account_not_found"
        | "bank_debit_not_authorized"
        | "bank_account_restricted"
        | "bank_debit_limit_exceeded"
        | "authentication_required"
        | "payment_blocked"
        | "expired_card"
        | "incorrect_cvc"
        | "lost_card"
        | "stolen_card"
        | "do_not_honor"
        | "fraudulent"
        | "processing_error"
        | "payment_method_unavailable"
        | "payment_method_declined"
        | "payment_not_completed"
        | "payment_action_expired"
        | "payment_method_temporarily_unavailable"
        | "payment_failed"
        | (string & {});
    /**
     * Shape $ (Value): string. Time the payment attempt concluded in failure. Format: date-time.
     */
    "failed_at": string;
    /**
     * Shape $ (Value): string. Flint-authored merchant-facing payment failure message. This is
     * stable explanatory text, not raw provider copy.
     */
    "message": string;
    /**
     * Shape $ (Value): {@link ErrorRemediation} or null. Guidance for resolving the payment
     * failure before trying to collect again. Shape $.anyOf[1] (Value): {@link ErrorRemediation}.
     * Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested
     * actions. Shape $.anyOf[2] (Value): null.
     */
    "remediation": ((ErrorRemediation) | (null));
};
/**
 * Shape $ (Value): {@link PaymentFulfillmentHold}. A hold on fulfillment tied to a payment, with
 * the reason, the action required, and whether the hold is active or released.
 */
export type PaymentFulfillmentHold = {
    /**
     * Shape $ (Value): string. Value enum: "external_payment_hold",
     * "external_payment_hold_released".
     */
    "reason": "external_payment_hold" | "external_payment_hold_released" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "released_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "requested_at": string;
    /** Shape $ (Value): string.  Value enum: "pause_fulfillment", "reevaluate_fulfillment". */
    "required_action": "pause_fulfillment" | "reevaluate_fulfillment" | (string & {});
    /** Shape $ (Value): string.  Value enum: "active", "released". */
    "status": "active" | "released" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
/**
 * Shape $ (Value): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg of an
 * order. amount_money is the amount requested. Once the payment is authorized, authorized_money
 * equals amount_money and splits into captured_money (collected), capturable_money (still on
 * hold), and released_money (returned without being charged), so authorized_money always equals
 * the sum of those three. Reconcile revenue from captured_money.
 */
export type PaymentIntent = {
    /**
     * Shape $ (Value): Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and
     * automatic tax fees collected with this payment. Available to the merchant only. Empty until
     * fees settle or when no add-ons apply. Refunds do not return or revise these fees. Absent
     * until Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. Shape $[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment
     * intent, with the fee type and amount.
     */
    "add_on_fees"?: Array<PaymentAddOnFee>;
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount requested from the buyer, including any
     * tip_money. Capturing doesn't change it: after a partial capture it still shows the requested
     * amount, and captured_money shows what was collected. On a standalone payment intent, PATCH
     * can change it only before the first confirmation attempt. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Deadline to capture a manual-capture hold. The authorization lapses
     * at this time, and a capture attempted after it fails even if status is still
     * requires_capture. Set when the hold is placed. Format: date-time.
     */
    "authorization_expires_at"?: string;
    /**
     * Shape $ (Value): string. When the processor authorized the payment. Absent until then.
     * Format: date-time.
     */
    "authorized_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set. Absent until the payment is authorized, and on
     * payments canceled before authorization. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "authorized_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Flint-normalized reason the payment intent was canceled. Present
     * only while status is canceled. Unknown processor values are returned as payment_canceled.
     * Value enum: "requested_by_customer", "duplicate", "fraudulent", "abandoned",
     * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled".
     */
    "cancellation_reason"?: "requested_by_customer"
        | "duplicate"
        | "fraudulent"
        | "abandoned"
        | "invoice_payment_failed"
        | "invoice_voided"
        | "order_closed"
        | "payment_canceled"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. The part of the authorization you can still capture.
     * Positive only while status is requires_capture, and zero after you capture or cancel or the
     * authorization expires. The authorization lapses at authorization_expires_at, and a capture
     * attempted after that fails even if this is positive. Absent until the payment is authorized.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. When money is collected. Defaults to automatic. Value enum:
     * "automatic", "manual".
     */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. When money was captured. For automatic capture, this is when the
     * payment succeeded. Absent until capture. Format: date-time.
     */
    "captured_at"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. The amount collected from the buyer. Reconcile revenue
     * and print receipts from this amount, not amount_money. Zero while a hold is open, and
     * positive whenever status is succeeded. processing_fee_money, merchant_net_money, and refunds
     * are based on it. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "captured_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Flint checkout session ID associated with this payment, when
     * present.
     */
    "checkout_session_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. The linked customer. Returned only
     * with expand=customer. Shape $.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. Customer linked to this payment intent. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Dispute state of this payment. none means no dispute or inquiry is
     * open or recorded. The inquiry_ values track an issuer inquiry or early warning that isn't a
     * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence. Value
     * enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
     */
    "dispute_status"?: "none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Shape $ (Value): {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint
     * to pause fulfillment for this payment. While its status is active, open fulfillments on the
     * order are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is
     * sent when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with
     * the reason, the action required, and whether the hold is active or released.
     */
    "fulfillment_hold"?: PaymentFulfillmentHold;
    /**
     * Shape $ (Value): {@link ExpandedInvoiceSummary} or null. The linked invoice. Returned only
     * with expand=invoice. Shape $.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
     * summary fields, including status, due date, and paid, outstanding, and refunded amounts,
     * returned when the invoice is expanded. Shape $.anyOf[2] (Value): null.
     */
    "invoice"?: ((ExpandedInvoiceSummary) | (null));
    /** Shape $ (Value): string. Invoice this payment intent collects, when it pays an invoice. */
    "invoice_id"?: string;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary} or null. Most recent payment error. Null when
     * no payment error is recorded. Shape $.anyOf[1] (Value): {@link PaymentErrorSummary}. A
     * summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation. Shape $.anyOf[2] (Value): null.
     */
    "last_payment_error": ((PaymentErrorSummary) | (null));
    /** Shape $ (Value): string. Merchant that owns this payment intent. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Captured amount minus processing_fee_money and every
     * amount in add_on_fees. Later merchant assessments and credits are separate balance effects.
     * Absent until Flint has determined and verified the fee. If Flint can't verify it when you
     * read the payment intent, the field is omitted rather than shown unverified; read the payment
     * intent again later. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "merchant_net_money"?: MoneyValue;
    /**
     * Shape $ (Value): Map of string. Caller-owned metadata. Keys starting with flint_ are
     * reserved for Flint and aren't returned. Shape $.* (Value): string.
     */
    "metadata": Record<string, string>;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. The linked order. Returned only with
     * expand=order. Shape $.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
     * fields, including status, payment and refund status, and pricing and settlement amounts,
     * returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * Shape $ (Value): string. Order this payment intent belongs to. Create it through the order
     * and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. How the payment was started. Fixed when the payment intent is
     * created. Value enum: "checkout", "payment_link", "invoice", "subscription_initial",
     * "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow": "checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api"
        | (string & {});
    /** Shape $ (Value): string. Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): Array of string. Payment options the buyer can use for this payment. []
     * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string.
     * Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Shape $ (Value): {@link PaymentSourceSummary}. Summary of the card or bank account used for
     * the payment. Absent until a payment source is attached. A summary of the payment source used
     * for a payment, by funding-method family, with card or bank account display details.
     */
    "payment_source"?: PaymentSourceSummary;
    /**
     * Shape $ (Value): {@link MoneyValue}. Flint's all-in processing fee for this payment. It is
     * the complete price Flint charges to process the payment, never a provider cost passed
     * through. The fee is final once the card payment is captured or the ACH payment succeeds;
     * canceled payments and failures before success have none. Invoice, subscription, and
     * automatic tax fees are itemized separately in add_on_fees. Your net for the payment is
     * captured_money minus this fee and the add-on fees. Refunds do not return or revise it.
     * Absent until Flint has determined and verified the fee. If Flint can't verify it when you
     * read the payment intent, the field is omitted rather than shown unverified; read the payment
     * intent again later. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "processing_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): string or null. Email address for this payment's receipt. When it isn't
     * set, Flint uses the customer's email. Format: email. maxLength: 255.
     */
    "receipt_email"?: string | null;
    /**
     * Shape $ (Value): string. How much of captured_money has been refunded, including value
     * issued as store credit, based on refunded_money. Value enum: "none", "partially_refunded",
     * "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Total refunded against captured_money, including value
     * issued as store credit and processor refunds still pending. Failed and canceled refunds
     * aren't counted. Zero when nothing has been refunded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "refunded_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. The part of the authorization returned to the buyer
     * without being charged: the uncaptured remainder after a partial capture, or the whole
     * authorization after a cancellation or expiry. It was never collected, so it needs no refund
     * and can't be captured later. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "released_money"?: MoneyValue;
    /** Shape $ (Value): string. Flint return ID associated with this payment, when present. */
    "return_id"?: string;
    /**
     * Shape $ (Value): {@link PaymentRisk} or null. Risk assessment. Always present with merchant
     * credentials; null when no risk assessment is available. Omitted with the checkout
     * credential. Shape $.anyOf[1] (Value): {@link PaymentRisk}. The risk assessment for a payment
     * intent, with its risk level, score, outcome, and any matched rule or review. Shape
     * $.anyOf[2] (Value): null.
     */
    "risk"?: ((PaymentRisk) | (null));
    /**
     * Shape $ (Value): string. The payment option the most recent confirmation used. Absent until
     * the payment intent is first confirmed.
     */
    "selected_payment_option"?: string;
    /**
     * Shape $ (Value): string. Lifecycle status. requires_payment_method covers both a new payment
     * intent and one whose last attempt failed, so read last_payment_error with it. succeeded,
     * canceled, and expired are final. Refunds and disputes never change status. Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired".
     */
    "status": "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /**
     * Shape $ (Value): string. Opaque payment reference to share with merchant support. Do not
     * parse its format.
     */
    "support_reference": string;
    /**
     * Shape $ (Value): Array of string. Actions the payment intent's current state accepts, each a
     * POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
     * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of something
     * outside the payment intent: an open risk review, an order payment attempt that is using this
     * payment, a closed order, or the merchant's account. An order-owned payment intent never
     * lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes only when the
     * payment intent changes. Always empty for buyer credentials. New actions may be added. []
     * enum: "confirm", "capture", "cancel". Shape $[] (Value): string. Value enum: "confirm",
     * "capture", "cancel".
     */
    "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Portion of amount_money that is a tip. Uses
     * amount_money's currency and is at most amount_money. Shape $.anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. Shape $.anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValue) | (null));
    /**
     * Shape $ (Value): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link PaymentIntentActivity}. A read-only entry in a payment intent's
 * human-readable history. Read the referenced resource for authoritative state.
 */
export type PaymentIntentActivity = {
    /**
     * Shape $ (Value): string. Value enum: "other", "created", "updated", "status_changed",
     * "failed", "canceled", "expired", "refund_created", "refund_status_changed",
     * "dispute_status_changed", "receipt_sent".
     */
    "activity_type": "other"
        | "created"
        | "updated"
        | "status_changed"
        | "failed"
        | "canceled"
        | "expired"
        | "refund_created"
        | "refund_status_changed"
        | "dispute_status_changed"
        | "receipt_sent"
        | (string & {});
    /** Shape $ (Value): string. */
    "checkout_session_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "description": string;
    /** Shape $ (Value): string. */
    "dispute_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other".
     */
    "from_dispute_status"?: "none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "requires_payment_method", "requires_confirmation",
     * "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired".
     */
    "from_status"?: "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /** Shape $ (Value): string. */
    "order_id"?: string;
    /** Shape $ (Value): string. */
    "payment_intent_activity_id": string;
    /** Shape $ (Value): string. */
    "refund_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other".
     */
    "to_dispute_status"?: "none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "requires_payment_method", "requires_confirmation",
     * "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired".
     */
    "to_status"?: "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
};
/**
 * Shape $ (Value): {@link PaymentIntentActivityListResponse}. A page of `PaymentIntentActivity`
 * objects.
 */
export type PaymentIntentActivityListResponse = {
    /**
     * Shape $ (Value): Array of {@link PaymentIntentActivity}. Shape $[] (Value): {@link
     * PaymentIntentActivity}. A read-only entry in a payment intent's human-readable history. Read
     * the referenced resource for authoritative state.
     */
    "data": Array<PaymentIntentActivity>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link PaymentIntentListResponse}. A page of `PaymentIntent` objects. */
export type PaymentIntentListResponse = {
    /**
     * Shape $ (Value): Array of {@link PaymentIntent}. Shape $[] (Value): {@link PaymentIntent}.
     * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
     * requested. Once the payment is authorized, authorized_money equals amount_money and splits
     * into captured_money (collected), capturable_money (still on hold), and released_money
     * (returned without being charged), so authorized_money always equals the sum of those three.
     * Reconcile revenue from captured_money.
     */
    "data": Array<PaymentIntent>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link PaymentIntentResponse}. A response containing `PaymentIntent` data. */
export type PaymentIntentResponse = {
    /**
     * Shape $ (Value): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg of
     * an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data": PaymentIntent;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PaymentIntentWithAction}. One payment from a buyer, standalone or as a
 * leg of an order. amount_money is the amount requested. Once the payment is authorized,
 * authorized_money equals amount_money and splits into captured_money (collected),
 * capturable_money (still on hold), and released_money (returned without being charged), so
 * authorized_money always equals the sum of those three. Reconcile revenue from captured_money.
 */
export type PaymentIntentWithAction = (Exclude<PaymentIntent & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): {@link PendingPaymentAction} or null. Typed browser authority for the
     * current standalone payment action. Complete it, then call the same confirm endpoint with an
     * empty body. Null when no buyer action is needed or Flint cannot produce the action yet. If
     * status is requires_action and this is null, call confirm again with an empty body. Shape
     * $.anyOf[1] (Value): {@link PendingPaymentAction}. Client-side action required before
     * continuing a payment. Resume an order through PayOrder with order_payment_attempt_id, or
     * continue a standalone PaymentIntent through its confirm endpoint without a replacement
     * credential. Shape $.anyOf[2] (Value): null.
     */
    "current_payment_action": ((PendingPaymentAction) | (null));
});
/**
 * Shape $ (Value): {@link PaymentIntentWithCollection}. One payment from a buyer, standalone or as
 * a leg of an order. amount_money is the amount requested. Once the payment is authorized,
 * authorized_money equals amount_money and splits into captured_money (collected),
 * capturable_money (still on hold), and released_money (returned without being charged), so
 * authorized_money always equals the sum of those three. Reconcile revenue from captured_money.
 */
export type PaymentIntentWithCollection = (Exclude<PaymentIntent & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): {@link PaymentCollection}. Setup details your client uses to collect the
     * buyer's payment details. Required on both standalone and order-owned creates. On GET,
     * returned only for a standalone intent in requires_payment_method or requires_confirmation,
     * and omitted for an intent owned by a checkout session when read with merchant credentials.
     * Order-owned intents never include it on GET; use Order.payment_collection, whose
     * selectable_payment_intents lists the staged payments. Client-side details for collecting
     * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
});
/**
 * Shape $ (Value): {@link PaymentIntentWithCollectionResponse}. A response containing
 * `PaymentIntentWithCollection` data.
 */
export type PaymentIntentWithCollectionResponse = {
    /**
     * Shape $ (Value): {@link PaymentIntentWithCollection}. One payment from a buyer, standalone
     * or as a leg of an order. amount_money is the amount requested. Once the payment is
     * authorized, authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data": PaymentIntentWithCollection;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type PaymentIntentsCancelInput = {
    /** Shape $ (Value): string. */
    "payment_intent_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelPaymentIntentRequestInput}. The request body for: Cancel
     * payment intent.
     */
    "body"?: InputValue<CancelPaymentIntentRequestInput>;
};
export type PaymentIntentsCaptureInput = {
    /** Shape $ (Value): string. */
    "payment_intent_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CapturePaymentIntentRequestInput}. The request body for: Capture
     * payment intent.
     */
    "body"?: InputValue<CapturePaymentIntentRequestInput>;
};
export type PaymentIntentsConfirmInput = {
    /** Shape $ (Value): string. */
    "payment_intent_id": InputValue<string>;
    /** Shape $ (Value): string. pattern: ^[a-f0-9]{32}$. */
    "Flint-Buyer-Device"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ConfirmPaymentIntentRequestInput}. The request body for: Confirm
     * payment intent.
     */
    "body"?: InputValue<ConfirmPaymentIntentRequestInput>;
};
export type PaymentIntentsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreatePaymentIntentRequestInput}. The request body for: Create
     * standalone payment intent.
     */
    "body": InputValue<CreatePaymentIntentRequestInput>;
};
export type PaymentIntentsCreateResponse = OrdersCreatePaymentIntentResponse;
export type PaymentIntentsGetInput = {
    /** Shape $ (Value): string. */
    "payment_intent_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "invoice", "order". Shape $[]
     * (Value): string. Value enum: "customer", "invoice", "order".
     */
    "expand"?: InputValue<Array<"customer" | "invoice" | "order">>;
};
export type PaymentIntentsListActivitiesInput = {
    /** Shape $ (Value): string. */
    "payment_intent_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "created", "updated",
     * "status_changed", "failed", "canceled", "expired", "refund_created",
     * "refund_status_changed", "dispute_status_changed", "receipt_sent". Shape $[] (Value):
     * string. Value enum: "created", "updated", "status_changed", "failed", "canceled", "expired",
     * "refund_created", "refund_status_changed", "dispute_status_changed", "receipt_sent".
     */
    "activity_type"?: InputValue<Array<"created"
        | "updated"
        | "status_changed"
        | "failed"
        | "canceled"
        | "expired"
        | "refund_created"
        | "refund_status_changed"
        | "dispute_status_changed"
        | "receipt_sent">>;
};
export type PaymentIntentsListInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "invoice_id"?: InputValue<string>;
    /** Shape $ (Value): boolean. */
    "is_action_required"?: InputValue<boolean>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired". Shape $[] (Value): string. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
     */
    "status"?: InputValue<Array<"requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "normal", "elevated", "highest",
     * "not_assessed". Shape $[] (Value): string. Value enum: "normal", "elevated", "highest",
     * "not_assessed".
     */
    "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api". Shape
     * $[] (Value): string. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow"?: InputValue<Array<"checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "min_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "max_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "none", "partially_refunded",
     * "refunded". Shape $[] (Value): string. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "none", "inquiry_needs_response",
     * "inquiry_under_review", "inquiry_closed", "needs_response", "under_review", "won", "lost",
     * "prevented", "other". Shape $[] (Value): string. Value enum: "none",
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other".
     */
    "dispute_status"?: InputValue<Array<"none"
        | "inquiry_needs_response"
        | "inquiry_under_review"
        | "inquiry_closed"
        | "needs_response"
        | "under_review"
        | "won"
        | "lost"
        | "prevented"
        | "other">>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "invoice", "order". Shape $[]
     * (Value): string. Value enum: "customer", "invoice", "order".
     */
    "expand"?: InputValue<Array<"customer" | "invoice" | "order">>;
};
export type PaymentIntentsSendReceiptInput = {
    /** Shape $ (Value): string. */
    "payment_intent_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link SendPaymentIntentReceiptRequestInput}. The request body for: Send a
     * payment receipt.
     */
    "body"?: InputValue<SendPaymentIntentReceiptRequestInput>;
};
export type PaymentIntentsUpdateInput = {
    /** Shape $ (Value): string. */
    "payment_intent_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdatePaymentIntentRequestInput}. The request body for: Update
     * payment intent.
     */
    "body": InputValue<UpdatePaymentIntentRequestInput>;
};
/**
 * Shape $ (Value): {@link PaymentLimitSettings}. Optional merchant limits that can lower Flint's
 * payment-option and surface policy limits.
 */
export type PaymentLimitSettings = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Map replaced as a whole: the keys you send
     * become the full map. Maximum USD amounts keyed by default, surface, or an exact
     * payment_option.surface selector. Merchant settings cannot raise Flint's policy ceiling.
     * Shape $.* (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "max_amounts"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Map replaced as a whole: the keys you send
     * become the full map. Minimum USD amounts keyed by default, surface, or an exact
     * payment_option.surface selector. Merchant settings cannot lower Flint's payment-option
     * floor. Shape $.* (Value): {@link MoneyValue}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "min_amounts"?: Record<string, MoneyValue>;
};
/**
 * Shape $ (Value): {@link PaymentLimitSettingsPatch}. Changes to a merchant's payment amount
 * limits. Each map replaces the existing one, and null clears it. minProperties: 1.
 */
export type PaymentLimitSettingsPatch = {
    /**
     * Shape $ (Value): Map of object or null. Map replaced as a whole: the keys you send become
     * the full map. Replaces this merchant limit map. Keys are default, a surface,
     * payment_option.default, or payment_option.surface. Amounts must satisfy Flint's existing
     * selector bounds and effective minimum/maximum range. Send null to clear this map; reads then
     * omit it. minProperties: 1. Shape $.* (Value): object. Shape $.*.amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 1. Shape $.*.currency (Required): string. minLength: 1. Value enum: "USD".
     */
    "max_amounts"?: Record<string, {
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string. minLength: 1. Value enum: "USD". */
        "currency": "USD" | (string & {});
    }>
        | null;
    /**
     * Shape $ (Value): Map of object or null. Map replaced as a whole: the keys you send become
     * the full map. Replaces this merchant limit map. Keys are default, a surface,
     * payment_option.default, or payment_option.surface. Amounts must satisfy Flint's existing
     * selector bounds and effective minimum/maximum range. Send null to clear this map; reads then
     * omit it. minProperties: 1. Shape $.* (Value): object. Shape $.*.amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 1. Shape $.*.currency (Required): string. minLength: 1. Value enum: "USD".
     */
    "min_amounts"?: Record<string, {
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string. minLength: 1. Value enum: "USD". */
        "currency": "USD" | (string & {});
    }>
        | null;
};
/**
 * Shape $ (Value): {@link PaymentLimitSettingsPatchInput}. Changes to a merchant's payment amount
 * limits. Each map replaces the existing one, and null clears it. minProperties: 1.
 */
export type PaymentLimitSettingsPatchInput = {
    /**
     * Shape $ (Value): Map of object or null. Map replaced as a whole: the keys you send become
     * the full map. Replaces this merchant limit map. Keys are default, a surface,
     * payment_option.default, or payment_option.surface. Amounts must satisfy Flint's existing
     * selector bounds and effective minimum/maximum range. Send null to clear this map; reads then
     * omit it. minProperties: 1. Shape $.* (Value): object. Shape $.*.amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 1. Shape $.*.currency (Required): string. minLength: 1. Value enum: "USD".
     */
    "max_amounts"?: Record<string, {
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /** Shape $ (Value): string. minLength: 1. Value enum: "USD". */
        "currency": "USD";
    }>
        | null;
    /**
     * Shape $ (Value): Map of object or null. Map replaced as a whole: the keys you send become
     * the full map. Replaces this merchant limit map. Keys are default, a surface,
     * payment_option.default, or payment_option.surface. Amounts must satisfy Flint's existing
     * selector bounds and effective minimum/maximum range. Send null to clear this map; reads then
     * omit it. minProperties: 1. Shape $.* (Value): object. Shape $.*.amount (Required): integer
     * string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 1. Shape $.*.currency (Required): string. minLength: 1. Value enum: "USD".
     */
    "min_amounts"?: Record<string, {
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /** Shape $ (Value): string. minLength: 1. Value enum: "USD". */
        "currency": "USD";
    }>
        | null;
};
/** Shape $ (Value): {@link PaymentLink}. A reusable link that opens checkout. */
export type PaymentLink = {
    /**
     * Shape $ (Value): {@link CheckoutBuyerFields}. What checkout asks the buyer for. Each field
     * you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Shape $ (Value): integer string. Seconds each checkout session the link starts stays open,
     * from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the
     * link; use sales_end_at for that. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 60. maximum: 86400.
     */
    "checkout_session_expires_in_seconds"?: `${bigint}`;
    /** Shape $ (Value): integer. Format: int32. */
    "completed_count": number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkCustomField}. Shape $[] (Value): {@link
     * PaymentLinkCustomField}. A custom field on a payment link that collects an answer from the
     * buyer, such as text, a dropdown, or a checkbox.
     */
    "custom_fields"?: Array<PaymentLinkCustomField>;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom text shown in checkout: an order
     * summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Shape $ (Value): Array of string. Delivery methods the link offers. Empty when the link has
     * none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the
     * order has items to deliver. Shape $[] (Value): string.
     */
    "delivery_method_ids": Array<string>;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. Shape $[] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Shape $ (Value): {@link PaymentLinkEventConfig}. Event settings on an event payment link,
     * such as its date, venue, ticket limit, and ticket emails.
     */
    "event_config"?: PaymentLinkEventConfig;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "image"?: ImageAttachment;
    /** Shape $ (Value): string. */
    "inactive_message"?: string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSource}. Where an order, payment link, or
     * reservation routes inventory from: a fixed Location, an inventory allocation policy, or one
     * policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Shape $ (Value): {@link LegalSettings}. Legal settings for a checkout: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkLineItem}. Shape $[] (Value): {@link
     * PaymentLinkLineItem}. A line item on a payment link, sold from a catalog variant, a bundle,
     * or an ad hoc name and price, with quantity and price rules.
     */
    "line_items"?: Array<PaymentLinkLineItem>;
    /** Shape $ (Value): integer. Format: int32. */
    "max_completions"?: number;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "payment_link_id": string;
    /** Shape $ (Value): string.  Value enum: "standard", "donation", "event". */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfig}. Payment settings for a checkout: the enabled
     * payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Shape $ (Value): {@link CheckoutPromotionConfig}. Promotion settings for a checkout: whether
     * automatic promotions apply and whether the buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where checkout sessions started from this
     * payment link send the buyer after payment, cancellation, or expiration. Where hosted
     * checkout sends the buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): string. RFC3339 timestamp after which the link stops starting checkouts and
     * resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except
     * that an event link without sales_end_at stops selling at event_config.event_at. A checkout
     * opened before the end can still start payment for up to 15 minutes after it. Format:
     * date-time.
     */
    "sales_end_at"?: string;
    /**
     * Shape $ (Value): {@link PaymentLinkSalesSummary}. Present only with expand=sales_summary on
     * GET /v1/payment-links or GET /v1/payment-links/{payment_link_id}. Available to merchant
     * callers, including dashboard sessions and API keys with checkouts.payment_links.read. Uses
     * the same paid-order definition as the merchant sales summary. Paid-order sales totals for a
     * payment link, computed on request. Paid means the order's collection has completed. Fully
     * and partially refunded orders still count, and paid_totals reports the amount collected
     * before refunds. Each order counts once even if it has multiple checkout sessions.
     */
    "sales_summary"?: PaymentLinkSalesSummary;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /**
     * Shape $ (Value): {@link ExpandedSubscriptionPlanSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
     * name, billing interval, currency, and status, returned when the plan is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /** Shape $ (Value): string. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link CheckoutTaxConfig}. Whether tax is collected for a checkout session
     * or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * Shape $ (Value): {@link ThemeConfig}. Colors and title applied to a payment link's checkout
     * page.
     */
    "theme"?: ThemeConfig;
    /**
     * Shape $ (Value): {@link CheckoutTipConfig}. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "total_quantity_sold": number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Shape $ (Value): string. */
    "url": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link PaymentLinkCustomField}. A custom field on a payment link that collects
 * an answer from the buyer, such as text, a dropdown, or a checkbox.
 */
export type PaymentLinkCustomField = {
    /** Shape $ (Value): string.  Value enum: "text", "dropdown", "checkbox", "textarea". */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Shape $ (Value): string. Unique custom field key. Must not have leading or trailing
     * whitespace. Buyer answers are stored in order metadata as custom_field_<key>. minLength: 1.
     * maxLength: 243.
     */
    "key": string;
    /** Shape $ (Value): string. */
    "label": string;
    /**
     * Shape $ (Value): integer. Maximum answer length for text and textarea fields, counted in
     * Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Each code
     * point can occupy up to four UTF-8 bytes in the combined metadata size budget. Format: int32.
     * minimum: 1. maximum: 4096.
     */
    "max_length"?: number;
    /**
     * Shape $ (Value): Array of string. Dropdown choices. Dropdown fields require at least one
     * option. Options must not have leading or trailing whitespace. The longest option in UTF-8
     * bytes counts toward the combined metadata size budget. Shape $[] (Value): string. maxLength:
     * 4096.
     */
    "options"?: Array<string>;
    /** Shape $ (Value): string. */
    "payment_link_custom_field_id": string;
    /** Shape $ (Value): string. */
    "placeholder"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "position"?: number;
    /** Shape $ (Value): boolean. */
    "required"?: boolean;
};
/**
 * Shape $ (Value): {@link PaymentLinkCustomFieldPatchRequest}. A custom field in a payment link
 * update. Include its ID to change an existing field, or omit the ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequest = {
    /** Shape $ (Value): string.  Value enum: "text", "dropdown", "checkbox", "textarea". */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Shape $ (Value): string. Unique custom field key. Must not have leading or trailing
     * whitespace. Buyer answers are stored in order metadata as custom_field_<key>. minLength: 1.
     * maxLength: 243.
     */
    "key": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Shape $ (Value): integer. Maximum answer length for text and textarea fields, counted in
     * Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Each code
     * point can occupy up to four UTF-8 bytes in the combined metadata size budget. Format: int32.
     * minimum: 1. maximum: 4096.
     */
    "max_length"?: number;
    /**
     * Shape $ (Value): Array of string. Dropdown choices. Dropdown fields require at least one
     * option. Options must not have leading or trailing whitespace. The longest option in UTF-8
     * bytes counts toward the combined metadata size budget. Shape $[] (Value): string. minLength:
     * 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Shape $ (Value): string. Stable ID of an existing custom field. Omit it to create a new
     * custom field. minLength: 1.
     */
    "payment_link_custom_field_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "position"?: number;
    /** Shape $ (Value): boolean. */
    "required"?: boolean;
};
/**
 * Shape $ (Value): {@link PaymentLinkCustomFieldPatchRequestInput}. A custom field in a payment
 * link update. Include its ID to change an existing field, or omit the ID to add a new one.
 */
export type PaymentLinkCustomFieldPatchRequestInput = {
    /** Shape $ (Value): string.  Value enum: "text", "dropdown", "checkbox", "textarea". */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea";
    /**
     * Shape $ (Value): string. Unique custom field key. Must not have leading or trailing
     * whitespace. Buyer answers are stored in order metadata as custom_field_<key>. minLength: 1.
     * maxLength: 243.
     */
    "key": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Shape $ (Value): integer. Maximum answer length for text and textarea fields, counted in
     * Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Each code
     * point can occupy up to four UTF-8 bytes in the combined metadata size budget. Format: int32.
     * minimum: 1. maximum: 4096.
     */
    "max_length"?: number;
    /**
     * Shape $ (Value): Array of string. Dropdown choices. Dropdown fields require at least one
     * option. Options must not have leading or trailing whitespace. The longest option in UTF-8
     * bytes counts toward the combined metadata size budget. Shape $[] (Value): string. minLength:
     * 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /**
     * Shape $ (Value): string. Stable ID of an existing custom field. Omit it to create a new
     * custom field. minLength: 1.
     */
    "payment_link_custom_field_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "position"?: number;
    /** Shape $ (Value): boolean. */
    "required"?: boolean;
};
/**
 * Shape $ (Value): {@link PaymentLinkCustomFieldRequest}. A custom field you add to a payment link
 * when creating it.
 */
export type PaymentLinkCustomFieldRequest = {
    /** Shape $ (Value): string.  Value enum: "text", "dropdown", "checkbox", "textarea". */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea" | (string & {});
    /**
     * Shape $ (Value): string. Unique custom field key. Must not have leading or trailing
     * whitespace. Buyer answers are stored in order metadata as custom_field_<key>. minLength: 1.
     * maxLength: 243.
     */
    "key": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Shape $ (Value): integer. Maximum answer length for text and textarea fields, counted in
     * Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Each code
     * point can occupy up to four UTF-8 bytes in the combined metadata size budget. Format: int32.
     * minimum: 1. maximum: 4096.
     */
    "max_length"?: number;
    /**
     * Shape $ (Value): Array of string. Dropdown choices. Dropdown fields require at least one
     * option. Options must not have leading or trailing whitespace. The longest option in UTF-8
     * bytes counts toward the combined metadata size budget. Shape $[] (Value): string. minLength:
     * 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "position"?: number;
    /** Shape $ (Value): boolean. */
    "required"?: boolean;
};
/**
 * Shape $ (Value): {@link PaymentLinkCustomFieldRequestInput}. A custom field you add to a payment
 * link when creating it.
 */
export type PaymentLinkCustomFieldRequestInput = {
    /** Shape $ (Value): string.  Value enum: "text", "dropdown", "checkbox", "textarea". */
    "custom_field_type": "text" | "dropdown" | "checkbox" | "textarea";
    /**
     * Shape $ (Value): string. Unique custom field key. Must not have leading or trailing
     * whitespace. Buyer answers are stored in order metadata as custom_field_<key>. minLength: 1.
     * maxLength: 243.
     */
    "key": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "label": string;
    /**
     * Shape $ (Value): integer. Maximum answer length for text and textarea fields, counted in
     * Unicode code points. Defaults to 255 for text and 1000 for textarea when omitted. Each code
     * point can occupy up to four UTF-8 bytes in the combined metadata size budget. Format: int32.
     * minimum: 1. maximum: 4096.
     */
    "max_length"?: number;
    /**
     * Shape $ (Value): Array of string. Dropdown choices. Dropdown fields require at least one
     * option. Options must not have leading or trailing whitespace. The longest option in UTF-8
     * bytes counts toward the combined metadata size budget. Shape $[] (Value): string. minLength:
     * 1. maxLength: 4096.
     */
    "options"?: Array<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "placeholder"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "position"?: number;
    /** Shape $ (Value): boolean. */
    "required"?: boolean;
};
/**
 * Shape $ (Value): {@link PaymentLinkCustomTextConfigInput}. Custom text shown on a payment link's
 * checkout, such as the order summary message and shipping address label.
 */
export type PaymentLinkCustomTextConfigInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048. */
    "order_summary_message"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "shipping_address_label"?: string;
};
/**
 * Shape $ (Value): {@link PaymentLinkCustomTextPatchRequest}. Changes to a payment link's custom
 * checkout text. Send null to clear a field.
 */
export type PaymentLinkCustomTextPatchRequest = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 2048. */
    "order_summary_message"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 255. */
    "shipping_address_label"?: string | null;
};
/**
 * Shape $ (Value): {@link PaymentLinkCustomTextPatchRequestInput}. Changes to a payment link's
 * custom checkout text. Send null to clear a field.
 */
export type PaymentLinkCustomTextPatchRequestInput = PaymentLinkCustomTextPatchRequest;
/**
 * Shape $ (Value): {@link PaymentLinkEventConfig}. Event settings on an event payment link, such
 * as its date, venue, ticket limit, and ticket emails.
 */
export type PaymentLinkEventConfig = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "event_at"?: string;
    /**
     * Shape $ (Value): integer or null. Most tickets the event sells across all orders. Absent
     * means no limit. On update, send null to remove the limit; a value below the tickets already
     * sold or held by payments in progress returns MAX_TOTAL_QUANTITY_BELOW_SOLD. Whole-number
     * quantity; fractional quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Shape $ (Value): boolean. */
    "send_ticket_emails"?: boolean;
    /**
     * Shape $ (Value): string. Prefix for ticket numbers, up to 5 characters. It cannot change
     * after the event has issued tickets. maxLength: 5.
     */
    "ticket_prefix"?: string;
    /** Shape $ (Value): string. */
    "timezone"?: string;
    /** Shape $ (Value): string. maxLength: 500. */
    "venue"?: string;
};
/**
 * Shape $ (Value): {@link PaymentLinkEventConfigPatchRequest}. Changes to an event payment link's
 * settings. Send null on a nullable field to clear it.
 */
export type PaymentLinkEventConfigPatchRequest = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "event_at"?: string;
    /**
     * Shape $ (Value): integer or null. Most tickets the event sells across all orders. Absent
     * means no limit. On update, send null to remove the limit; a value below the tickets already
     * sold or held by payments in progress returns MAX_TOTAL_QUANTITY_BELOW_SOLD. Whole-number
     * quantity; fractional quantities are not supported. Format: int32.
     */
    "max_total_quantity"?: number | null;
    /** Shape $ (Value): boolean. */
    "send_ticket_emails"?: boolean;
    /**
     * Shape $ (Value): string or null. Prefix for ticket numbers, up to 5 characters. It cannot
     * change after the event has issued tickets. Send null to clear it. minLength: 1. maxLength:
     * 5.
     */
    "ticket_prefix"?: string | null;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone"?: string;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 500. */
    "venue"?: string | null;
};
