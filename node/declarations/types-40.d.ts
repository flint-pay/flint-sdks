import type { CreatePartnerAppCredentialRequestInput, CreatePartnerAppRequestInput } from './types-9.js';
import type { InputValue } from '../runtime.js';
import type { CheckoutSessionsListDeliverySelectionsParams } from './types-5.js';
import type { RotatePartnerAppSecretRequestInput } from './types-52.js';
import type { UpdatePartnerAppRequestInput } from './types-59.js';
import type { PartnerAppPermissionManifestEntry } from './types-39.js';
import type { ResponseMeta } from './types-48.js';
import type { WebhookEventSource } from './types-61.js';
import type { CheckoutBuyerContactRequest, CheckoutBuyerContactRequestInput } from './types-4.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type { OrderGiftCardAllocationAcceptance, OrderGiftCardAllocationAcceptanceInput, Order } from './types-36.js';
import type { OrderPaymentIntentSelection, OrderPaymentIntentSelectionInput, OrderPaymentAttempt } from './types-37.js';
import type {
    PaymentSourceCredential,
    PaymentSourceCredentialInput,
    PaymentSourceCredentialToken,
    PaymentSourceCredentialTokenInput,
    PaymentRisk,
    PaymentSourceSummary
} from './types-43.js';
import type { StripePaymentClientAction, SelectableOrderPaymentIntent } from './types-53.js';
import type { ErrorRemediation, ExpandedCustomerSummary, ExpandedInvoiceSummary, ExpandedOrderSummary } from './types-21.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-34.js';
export type PartnerAppsCreateCredentialParams = (CreatePartnerAppCredentialRequestInput);
export type PartnerAppsCreateParams = (InputValue<CreatePartnerAppRequestInput>);
export type PartnerAppsDeleteCredentialParams = {};
export type PartnerAppsDeleteParams = {
    /** Apply only if the app has this version. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type PartnerAppsGetCredentialParams = {};
export type PartnerAppsGetInstallParams = {};
export type PartnerAppsGetParams = {};
export type PartnerAppsListCredentialsParams = CheckoutSessionsListDeliverySelectionsParams;
export type PartnerAppsListInstallsParams = {
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
    /** Filter by installed merchant ID. Example: "mer_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "merchant_id"?: InputValue<string>;
    /**
     * Filter by install status. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "pending_exchange",
     * "active", "revoked". Value enum: "pending_exchange", "active", "revoked". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "pending_exchange", "active", "revoked". anyOf[1][]
     * (Value): string. Value enum: "pending_exchange", "active", "revoked". anyOf[2] (Value):
     * string. Value enum: "pending_exchange", "active", "revoked".
     */
    "status"?: InputValue<("pending_exchange" | "active" | "revoked") | readonly ("pending_exchange" | "active" | "revoked")[]>;
};
export type PartnerAppsListParams = {
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
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "archived". Value enum: "active", "archived".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "archived". anyOf[1][]
     * (Value): string. Value enum: "active", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "archived".
     */
    "status"?: InputValue<("active" | "archived") | readonly ("active" | "archived")[]>;
};
export type PartnerAppsRevokeEnvironmentGrantParams = {};
export type PartnerAppsRevokeInstallParams = {};
export type PartnerAppsRotateSecretParams = (InputValue<RotatePartnerAppSecretRequestInput>);
export type PartnerAppsUpdateParams = (UpdatePartnerAppRequestInput);
/**
 * What a partner app is asking to access, shown to a merchant before they approve it, including
 * requested permissions and the redirect URI.
 */
export type PartnerAuthorizePreview = {
    /** The app's client ID, as sent in the authorization request. */
    "client_id": string;
    /** Whether the install is for test or live mode. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** The app's current name. */
    "name": string;
    /** ID of the partner app asking for access. */
    "partner_app_id": string;
    /** The app’s version. It changes whenever the app is edited. Format: int64. */
    "partner_app_version": number;
    /** The registered redirect URI Flint sends the merchant back to after they approve or deny. */
    "redirect_uri": string;
    /**
     * IDs of the requested permissions, sorted. They are the permissions named in scope, or the
     * app's default requested permissions when scope is omitted, plus every required permission.
     * [] (Value): string.
     */
    "requested_permission_ids": Array<string>;
    /**
     * The requested permissions with the title, description, and scopes the consent screen shows,
     * in the same order as requested_permission_ids. [] (Value): {@link
     * PartnerAppPermissionManifestEntry}. One permission a partner app requests during
     * authorization, with its title, description, and required scopes.
     */
    "requested_permissions": Array<PartnerAppPermissionManifestEntry>;
};
/** A response containing `PartnerAuthorizePreview` data. */
export type PartnerAuthorizePreviewResponse = {
    /**
     * What a partner app is asking to access, shown to a merchant before they approve it,
     * including requested permissions and the redirect URI.
     */
    "data": PartnerAuthorizePreview;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A partner application's authorization to access an environment. */
export type PartnerEnvironmentGrant = ({
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "environment_grant_id": string;
    /**
     * The app’s permissions this grant holds, from the app’s current manifest. Their permission
     * IDs are the token scope. [] (Value): {@link PartnerAppPermissionManifestEntry}. One
     * permission a partner app can request, with a title, a description, and the Flint scopes it
     * grants.
     */
    "granted_permissions": Array<PartnerAppPermissionManifestEntry>;
    /**  [] (Value): string. */
    "granted_scopes": Array<string>;
    /** Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "revoked_at"?: string;
    "revoked_by_user_id"?: string;
    "sandbox_id"?: string;
    /** Value enum: "pending_exchange", "active", "revoked". */
    "status": "pending_exchange" | "active" | "revoked" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
});
/** Fields shared by partner webhook payloads. */
export type PartnerWebhookEnvelope = ({
    /** Format: date. */
    "api_version": string;
    /** Format: date-time. */
    "created_at": string;
    /**  object (Required): object. */
    "data": {
        "object": {
            [key: string]: unknown;
        };
    };
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
    "partner_app_id": string;
    /**
     * 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered
     * afterwards, which keeps its previous data shape. Value enum: 1, 2.
     */
    "payload_version": number;
    /** The source of a partner webhook event, selected by type. */
    "source": WebhookEventSource;
    /** true for a synthetic event sent from the test-events endpoint, false otherwise. */
    "test": boolean;
    "webhook_event_id": string;
});
/** The request body for: Pause one of the current buyer's subscriptions; Pause subscription. */
export type PauseSubscriptionRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Billing cycles to pause for, at least 1. Omit it to pause until the subscription is resumed.
     * A pause with a duration resumes automatically at scheduled_resume_at. Repeating the same
     * pause length returns the paused subscription; changing the length requires resuming first.
     * When the store's customer_account.buyer_capabilities.pause.max_cycles is set, a buyer must
     * send a value from 1 to that limit. Format: int32. minimum: 1.
     */
    "pause_duration_cycles"?: number;
};
/** The request body for: Pause one of the current buyer's subscriptions; Pause subscription. */
export type PauseSubscriptionRequestInput = PauseSubscriptionRequest;
/** The request body for: Pay order. */
export type PayOrderRequest = ((PayOrderRequestPay)
    | (PayOrderRequestConfirmPaymentIntents)
    | (PayOrderRequestSetup)
    | (PayOrderRequestResume)
    | (Record<string, unknown>));
/** The `confirm_payment_intents` variant of `PayOrderRequest`. */
export type PayOrderRequestConfirmPaymentIntents = {
    /**
     * Accept the exact gift_card_estimate returned on the current order, including all selected
     * cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full
     * amount due and may use one processor payment intent for the processor_money remainder. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     */
    "accepted_gift_card_allocation"?: OrderGiftCardAllocationAcceptance;
    /** Value enum: "confirm_payment_intents". */
    "action": "confirm_payment_intents" | (string & {});
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * What happens when the selected payment intents don't cover the balance. Defaults to
     * complete_order. Value enum: "complete_order", "partial_payment".
     */
    "completion_behavior"?: "complete_order" | "partial_payment" | (string & {});
    /**
     * The outstanding balance you reviewed. Required with checkout credentials, and with an API
     * key or partner token when the order has an open checkout session. Optional otherwise. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * minItems: 1. [] (Value): {@link OrderPaymentIntentSelection}. Identifies a payment intent to
     * confirm for an order and the credential to use: a token, a saved payment method, a Stripe
     * confirmation token, or the attached source.
     */
    "payment_intents": Array<OrderPaymentIntentSelection>;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true and save_payment_method_requires_verification is false, for
     * one newly collected card sent as stripe.confirmation_token created with setup_future_usage
     * on_session. The card is saved with usage on_session once the payment succeeds, for the
     * customer the checkout acts for: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. A typed buyer_contact.email never decides
     * it. A checkout that acts for no customer refuses the save until the buyer confirms their
     * email with a code, unless it sends save_payment_method_phone. A checkout the buyer bound by
     * a texted code saves the card with that number. A checkout whose buyer confirmed the
     * customer's email can also send save_payment_method_phone, to save the card with a number the
     * buyer confirms by text after paying. A checkout can send the buyer's choice with every
     * payment button: Apple Pay, Google Pay, a bank account, or Affirm, in
     * stripe.confirmation_token created with no setup_future_usage, pays without the save, and the
     * payment attempt's payment_method_save reports not_saved with reason
     * payment_method_not_saveable. The session's save_payment_method_types lists what is saved.
     * Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must
     * then have no setup_future_usage. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a
     * card saved while the checkout acts for no customer, or for the customer whose email the
     * buyer confirmed in it. Send it with save_payment_method: true only from the checkout
     * session's own credential, when the session's can_save_payment_method_with_phone is true. The
     * card is kept for the customer the checkout acts for, or else the merchant's customer with
     * the buyer's email, once the payment succeeds, or once it is approved when the merchant
     * captures later, but works for nothing until the buyer confirms it within 24 hours, with a
     * code texted to this number or, when the customer's email is the email of the payment,
     * emailed there instead: request the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method, and read payment_method_save on the checkout session. A card
     * saved with the number makes it the customer's saved number, and the cards saved with the
     * number it replaces are removed. A card not confirmed in time is not saved. minLength: 1.
     * maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     */
    "save_payment_method_phone"?: string;
};
/** The `confirm_payment_intents` variant of `PayOrderRequest`. */
export type PayOrderRequestConfirmPaymentIntentsInput = {
    /**
     * Accept the exact gift_card_estimate returned on the current order, including all selected
     * cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full
     * amount due and may use one processor payment intent for the processor_money remainder. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     */
    "accepted_gift_card_allocation"?: OrderGiftCardAllocationAcceptanceInput;
    /** Value enum: "confirm_payment_intents". */
    "action": "confirm_payment_intents";
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * What happens when the selected payment intents don't cover the balance. Defaults to
     * complete_order. Value enum: "complete_order", "partial_payment".
     */
    "completion_behavior"?: "complete_order" | "partial_payment";
    /**
     * The outstanding balance you reviewed. Required with checkout credentials, and with an API
     * key or partner token when the order has an open checkout session. Optional otherwise. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * minItems: 1. [] (Value): {@link OrderPaymentIntentSelectionInput}. Identifies a payment
     * intent to confirm for an order and the credential to use: a token, a saved payment method, a
     * Stripe confirmation token, or the attached source.
     */
    "payment_intents": Array<OrderPaymentIntentSelectionInput>;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true and save_payment_method_requires_verification is false, for
     * one newly collected card sent as stripe.confirmation_token created with setup_future_usage
     * on_session. The card is saved with usage on_session once the payment succeeds, for the
     * customer the checkout acts for: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. A typed buyer_contact.email never decides
     * it. A checkout that acts for no customer refuses the save until the buyer confirms their
     * email with a code, unless it sends save_payment_method_phone. A checkout the buyer bound by
     * a texted code saves the card with that number. A checkout whose buyer confirmed the
     * customer's email can also send save_payment_method_phone, to save the card with a number the
     * buyer confirms by text after paying. A checkout can send the buyer's choice with every
     * payment button: Apple Pay, Google Pay, a bank account, or Affirm, in
     * stripe.confirmation_token created with no setup_future_usage, pays without the save, and the
     * payment attempt's payment_method_save reports not_saved with reason
     * payment_method_not_saveable. The session's save_payment_method_types lists what is saved.
     * Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must
     * then have no setup_future_usage. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a
     * card saved while the checkout acts for no customer, or for the customer whose email the
     * buyer confirmed in it. Send it with save_payment_method: true only from the checkout
     * session's own credential, when the session's can_save_payment_method_with_phone is true. The
     * card is kept for the customer the checkout acts for, or else the merchant's customer with
     * the buyer's email, once the payment succeeds, or once it is approved when the merchant
     * captures later, but works for nothing until the buyer confirms it within 24 hours, with a
     * code texted to this number or, when the customer's email is the email of the payment,
     * emailed there instead: request the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method, and read payment_method_save on the checkout session. A card
     * saved with the number makes it the customer's saved number, and the cards saved with the
     * number it replaces are removed. A card not confirmed in time is not saved. minLength: 1.
     * maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     */
    "save_payment_method_phone"?: string;
};
/** The request body for: Pay order. */
export type PayOrderRequestInput = ((PayOrderRequestPayInput)
    | (PayOrderRequestConfirmPaymentIntentsInput)
    | (PayOrderRequestSetupInput)
    | (PayOrderRequestResumeInput));
/** The `pay` variant of `PayOrderRequest`. */
export type PayOrderRequestPay = {
    /**
     * Accept the exact gift_card_estimate returned on the current order, including all selected
     * cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full
     * amount due and may use one processor payment intent for the processor_money remainder. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     */
    "accepted_gift_card_allocation"?: OrderGiftCardAllocationAcceptance;
    /** Value enum: "pay". */
    "action": "pay" | (string & {});
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * The outstanding balance you reviewed. Required with checkout credentials, and with an API
     * key or partner token when the order has an open checkout session. Optional otherwise. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The credential you provide to pay an order: a payment source token, a saved payment method
     * ID, or a Stripe confirmation token.
     */
    "payment_source"?: PaymentSourceCredential;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true and save_payment_method_requires_verification is false, for
     * one newly collected card sent as stripe.confirmation_token created with setup_future_usage
     * on_session. The card is saved with usage on_session once the payment succeeds, for the
     * customer the checkout acts for: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. A typed buyer_contact.email never decides
     * it. A checkout that acts for no customer refuses the save until the buyer confirms their
     * email with a code, unless it sends save_payment_method_phone. A checkout the buyer bound by
     * a texted code saves the card with that number. A checkout whose buyer confirmed the
     * customer's email can also send save_payment_method_phone, to save the card with a number the
     * buyer confirms by text after paying. A checkout can send the buyer's choice with every
     * payment button: Apple Pay, Google Pay, a bank account, or Affirm, in
     * stripe.confirmation_token created with no setup_future_usage, pays without the save, and the
     * payment attempt's payment_method_save reports not_saved with reason
     * payment_method_not_saveable. The session's save_payment_method_types lists what is saved.
     * Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must
     * then have no setup_future_usage. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a
     * card saved while the checkout acts for no customer, or for the customer whose email the
     * buyer confirmed in it. Send it with save_payment_method: true only from the checkout
     * session's own credential, when the session's can_save_payment_method_with_phone is true. The
     * card is kept for the customer the checkout acts for, or else the merchant's customer with
     * the buyer's email, once the payment succeeds, or once it is approved when the merchant
     * captures later, but works for nothing until the buyer confirms it within 24 hours, with a
     * code texted to this number or, when the customer's email is the email of the payment,
     * emailed there instead: request the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method, and read payment_method_save on the checkout session. A card
     * saved with the number makes it the customer's saved number, and the cards saved with the
     * number it replaces are removed. A card not confirmed in time is not saved. minLength: 1.
     * maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     */
    "save_payment_method_phone"?: string;
};
/** The `pay` variant of `PayOrderRequest`. */
export type PayOrderRequestPayInput = {
    /**
     * Accept the exact gift_card_estimate returned on the current order, including all selected
     * cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full
     * amount due and may use one processor payment intent for the processor_money remainder. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     */
    "accepted_gift_card_allocation"?: OrderGiftCardAllocationAcceptanceInput;
    /** Value enum: "pay". */
    "action": "pay";
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * The outstanding balance you reviewed. Required with checkout credentials, and with an API
     * key or partner token when the order has an open checkout session. Optional otherwise. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The credential you provide to pay an order: a payment source token, a saved payment method
     * ID, or a Stripe confirmation token.
     */
    "payment_source"?: PaymentSourceCredentialInput;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true and save_payment_method_requires_verification is false, for
     * one newly collected card sent as stripe.confirmation_token created with setup_future_usage
     * on_session. The card is saved with usage on_session once the payment succeeds, for the
     * customer the checkout acts for: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. A typed buyer_contact.email never decides
     * it. A checkout that acts for no customer refuses the save until the buyer confirms their
     * email with a code, unless it sends save_payment_method_phone. A checkout the buyer bound by
     * a texted code saves the card with that number. A checkout whose buyer confirmed the
     * customer's email can also send save_payment_method_phone, to save the card with a number the
     * buyer confirms by text after paying. A checkout can send the buyer's choice with every
     * payment button: Apple Pay, Google Pay, a bank account, or Affirm, in
     * stripe.confirmation_token created with no setup_future_usage, pays without the save, and the
     * payment attempt's payment_method_save reports not_saved with reason
     * payment_method_not_saveable. The session's save_payment_method_types lists what is saved.
     * Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must
     * then have no setup_future_usage. Default: false.
     */
    "save_payment_method"?: boolean;
    /**
     * A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a
     * card saved while the checkout acts for no customer, or for the customer whose email the
     * buyer confirmed in it. Send it with save_payment_method: true only from the checkout
     * session's own credential, when the session's can_save_payment_method_with_phone is true. The
     * card is kept for the customer the checkout acts for, or else the merchant's customer with
     * the buyer's email, once the payment succeeds, or once it is approved when the merchant
     * captures later, but works for nothing until the buyer confirms it within 24 hours, with a
     * code texted to this number or, when the customer's email is the email of the payment,
     * emailed there instead: request the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method, and read payment_method_save on the checkout session. A card
     * saved with the number makes it the customer's saved number, and the cards saved with the
     * number it replaces are removed. A card not confirmed in time is not saved. minLength: 1.
     * maxLength: 16. pattern: ^\+1[2-9][0-9]{2}[2-9][0-9]{6}$.
     */
    "save_payment_method_phone"?: string;
};
/** The `resume` variant of `PayOrderRequest`. */
export type PayOrderRequestResume = {
    /** Value enum: "resume". */
    "action": "resume" | (string & {});
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * Optional. When sent, Flint compares it with the amount fixed on the attempt, not the order's
     * current balance. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /** minLength: 1. */
    "order_payment_attempt_id": string;
};
/** The `resume` variant of `PayOrderRequest`. */
export type PayOrderRequestResumeInput = {
    /** Value enum: "resume". */
    "action": "resume";
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * Optional. When sent, Flint compares it with the amount fixed on the attempt, not the order's
     * current balance. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /** minLength: 1. */
    "order_payment_attempt_id": string;
};
/** The `setup` variant of `PayOrderRequest`. */
export type PayOrderRequestSetup = {
    /** Value enum: "setup". */
    "action": "setup" | (string & {});
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * The outstanding balance you reviewed. Required with checkout credentials, and with an API
     * key or partner token when the order has an open checkout session. Optional otherwise. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** The `token` variant of `PaymentSourceCredential`. */
    "setup_payment_source": PaymentSourceCredentialToken;
};
/** The `setup` variant of `PayOrderRequest`. */
export type PayOrderRequestSetupInput = {
    /** Value enum: "setup". */
    "action": "setup";
    /**
     * Buyer email and phone recorded on the order. A checkout session payment uses the session's
     * saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply
     * with payment or save during checkout. Send at least one field. Values are stored exactly as
     * sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted
     * fields and accept null to clear a field. Payment requests do not accept null. minProperties:
     * 1. email (Optional): (string or null) and string. Email for the buyer, such as
     * buyer@example.com. On checkout session updates, null clears the saved email. Format: email.
     * minLength: 1. maxLength: 255. minLength: 1. phone (Optional): (string or null) and string.
     * Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates,
     * null clears the saved phone. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * The outstanding balance you reviewed. Required with checkout credentials, and with an API
     * key or partner token when the order has an open checkout session. Optional otherwise. The
     * amount and every computed order amount must not exceed 99999999 minor units ($999,999.99
     * USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and
     * detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /**
     * Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when
     * the outstanding amount is unchanged. Starting a payment advances the order's version. After
     * a declined or failed attempt, use the order returned in the pay response or read the order
     * again before retrying. When accepted_gift_card_allocation is sent, its order_version must
     * match this value. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /** The `token` variant of `PaymentSourceCredential`. */
    "setup_payment_source": PaymentSourceCredentialTokenInput;
};
/** A response containing `PayOrderResult` data. */
export type PayOrderResponse = {
    /**
     * The order is the primary resource and expected_version target; order_payment_attempt records
     * the payment outcome.
     */
    "data": PayOrderResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The order is the primary resource and expected_version target; order_payment_attempt records the
 * payment outcome.
 */
export type PayOrderResult = {
    /** A customer's purchase and its payment and fulfillment progress. */
    "order": Order;
    /** An attempt to pay an order. */
    "order_payment_attempt"?: OrderPaymentAttempt;
};
/** A Flint fee added to a payment intent, with the fee type and amount. */
export type PaymentAddOnFee = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /**
     * The Flint feature this fee pays for. A payment carries at most one of invoice_collection and
     * subscription_collection. Can gain values: sum every entry rather than matching only the
     * types you know. Value enum: "invoice_collection", "subscription_collection",
     * "automatic_tax".
     */
    "fee_type": "invoice_collection" | "subscription_collection" | "automatic_tax" | (string & {});
};
/**
 * A gift card redemption made as part of an order payment attempt, with the amount, tip, and gift
 * card.
 */
export type PaymentAttemptGiftCardRedemption = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    "gift_card_id": string;
    "gift_card_redemption_id": string;
    /** Last four characters of the card's current code. */
    "last4": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tip_money": MoneyValue;
};
/**
 * A payment intent used as one leg of an order payment attempt, with its amount, status, tip, and
 * latest error.
 */
export type PaymentAttemptPaymentIntent = {
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Capture is unavailable at or after this time, even if the payment still has requires_capture
     * status. Format: date-time.
     */
    "authorization_expires_at"?: string;
    /**
     * Payment intent's stored capturable amount. A positive amount does not override
     * authorization_expires_at or the payment status. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * A summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Payment option used by this leg, using the same values as
     * PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when
     * no payment option has been selected. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {});
    /**
     * Lifecycle status. requires_payment_method covers both a new payment intent and one whose
     * last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired
     * are final. Refunds and disputes never change status. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tip_money": MoneyValue;
};
/**
 * Typed provider-specific browser action payload. Execute the selected provider action before
 * continuing the owning payment through Flint.
 */
export type PaymentClientAction = {
    /**
     * Stripe.js initialization context plus one flow-specific authority object. Exactly one of
     * payment_intent or setup_intent is present.
     */
    "stripe": StripePaymentClientAction;
};
/**
 * Client-side details for collecting payment from the buyer, such as the Stripe settings to
 * initialize Stripe.js.
 */
export type PaymentCollection = {
    /**
     * Client configuration for collecting the payment through Stripe. Stripe details for
     * collecting payment in the browser: account ID, publishable key, return URL, and Elements
     * options.
     */
    "stripe"?: PaymentCollectionStripe;
};
/**
 * Stripe details for collecting payment in the browser: account ID, publishable key, return URL,
 * and Elements options.
 */
export type PaymentCollectionStripe = {
    /** Stripe account to use when initializing the payment client. */
    "account_id"?: string;
    /**
     * Stripe Elements configuration for the available payment methods and amounts. Stripe Elements
     * collection guidance. Follow next_step in the browser, then submit the result to submit_to
     * through Flint.
     */
    "elements"?: PaymentCollectionStripeElements;
    /** Publishable Stripe key for initializing the payment client. */
    "publishable_key"?: string;
    /** URL the buyer returns to after a redirect payment step. */
    "return_url"?: string;
};
/**
 * Stripe Elements collection guidance. Follow next_step in the browser, then submit the result to
 * submit_to through Flint.
 */
export type PaymentCollectionStripeElements = {
    /**
     * Amount and currency used to initialize the payment form. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Digital wallets that the payment form can offer. [] (Value): string. */
    "digital_wallets"?: Array<string>;
    /**
     * Whether Elements is collecting a payment source for an immediate payment or a setup source
     * for future use. Value enum: "payment", "setup".
     */
    "mode": "payment" | "setup" | (string & {});
    /**
     * Browser collection operation to perform before calling submit_to. Value enum:
     * "collect_payment_source", "collect_setup_payment_source", "create_confirmation_token".
     */
    "next_step": "collect_payment_source"
        | "collect_setup_payment_source"
        | "create_confirmation_token"
        | (string & {});
    /**
     * Stripe Elements payment method creation mode. Follow next_step: standalone PaymentIntents
     * and checkout-authenticated order collection create a ConfirmationToken, while
     * merchant-authenticated order collection and setup collection create a PaymentMethod. Value
     * enum: "manual".
     */
    "payment_method_creation": "manual" | (string & {});
    /** Payment method settings passed to the payment form. */
    "payment_method_options"?: {
        [key: string]: unknown;
    };
    /** Payment method types that the payment form can offer. [] (Value): string. */
    "payment_method_types": Array<string>;
    /**
     * Order payment intents that the buyer can select for collection. [] (Value): {@link
     * SelectableOrderPaymentIntent}. A payment intent on an order the caller can pick, with its
     * amount, status, and last payment error.
     */
    "selectable_payment_intents"?: Array<SelectableOrderPaymentIntent>;
    /**
     * Flint operation that accepts the result of next_step. Value enum: "pay_order",
     * "confirm_payment_intent".
     */
    "submit_to": "pay_order" | "confirm_payment_intent" | (string & {});
};
/**
 * A summary of why a payment attempt failed, with a normalized error code, a message, the failure
 * time, and remediation.
 */
export type PaymentErrorSummary = {
    /**
     * Flint-normalized payment failure code. Unknown provider values are returned as
     * payment_failed. Value enum: "card_declined", "insufficient_funds", "bank_account_closed",
     * "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted",
     * "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card",
     * "incorrect_cvc", "lost_card", "stolen_card", "do_not_honor", "fraudulent",
     * "processing_error", "payment_method_unavailable", "payment_method_declined",
     * "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable",
     * "payment_failed".
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
    /** Time the payment attempt concluded in failure. Format: date-time. */
    "failed_at": string;
    /**
     * Flint-authored merchant-facing payment failure message. This is stable explanatory text, not
     * raw provider copy.
     */
    "message": string;
    /**
     * Guidance for resolving the payment failure before trying to collect again. anyOf[1] (Value):
     * {@link ErrorRemediation}. Recovery guidance for an error: whether and how to `retry`, plus
     * next steps and suggested actions. anyOf[2] (Value): null.
     */
    "remediation": ((ErrorRemediation) | (null));
};
/**
 * A hold on fulfillment tied to a payment, with the reason, the action required, and whether the
 * hold is active or released.
 */
export type PaymentFulfillmentHold = {
    /** Value enum: "external_payment_hold", "external_payment_hold_released". */
    "reason": "external_payment_hold" | "external_payment_hold_released" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "released_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "requested_at": string;
    /** Value enum: "pause_fulfillment", "reevaluate_fulfillment". */
    "required_action": "pause_fulfillment" | "reevaluate_fulfillment" | (string & {});
    /** Value enum: "active", "released". */
    "status": "active" | "released" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
/**
 * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
 * requested. Once the payment is authorized, authorized_money equals amount_money and splits into
 * captured_money (collected), capturable_money (still on hold), and released_money (returned
 * without being charged), so authorized_money always equals the sum of those three. Reconcile
 * revenue from captured_money.
 */
export type PaymentIntent = {
    /**
     * Itemized invoice, subscription, and automatic tax fees collected with this payment.
     * Available to the merchant only. Empty until fees settle or when no add-ons apply. Refunds do
     * not return or revise these fees. Absent until Flint has determined and verified the fee. If
     * Flint can't verify it when you read the payment intent, the field is omitted rather than
     * shown unverified; read the payment intent again later. [] (Value): {@link PaymentAddOnFee}.
     * A Flint fee added to a payment intent, with the fee type and amount.
     */
    "add_on_fees"?: Array<PaymentAddOnFee>;
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Deadline to capture a manual-capture hold. The authorization lapses at this time, and a
     * capture attempted after it fails even if status is still requires_capture. Set when the hold
     * is placed. Format: date-time.
     */
    "authorization_expires_at"?: string;
    /** When the processor authorized the payment. Absent until then. Format: date-time. */
    "authorized_at"?: string;
    /**
     * The amount the processor authorized. It always equals amount_money and doesn't change once
     * set. Absent until the payment is authorized, and on payments canceled before authorization.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "authorized_money"?: MoneyValue;
    /**
     * Flint-normalized reason the payment intent was canceled. Present only while status is
     * canceled. Unknown processor values are returned as payment_canceled. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned", "invoice_payment_failed",
     * "invoice_voided", "order_closed", "payment_canceled".
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
     * The part of the authorization you can still capture. Positive only while status is
     * requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /** When money is collected. Defaults to automatic. Value enum: "automatic", "manual". */
    "capture_method"?: "automatic" | "manual" | (string & {});
    /**
     * When money was captured. For automatic capture, this is when the payment succeeded. Absent
     * until capture. Format: date-time.
     */
    "captured_at"?: string;
    /**
     * The amount collected from the buyer. Reconcile revenue and print receipts from this amount,
     * not amount_money. Zero while a hold is open, and positive whenever status is succeeded.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "captured_money"?: MoneyValue;
    /** Flint checkout session ID associated with this payment, when present. */
    "checkout_session_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * The linked customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Customer linked to this payment intent. */
    "customer_id"?: string;
    /**
     * Dispute state of this payment. none means no dispute or inquiry is open or recorded. The
     * inquiry_ values track an issuer inquiry or early warning that isn't a chargeback. Read the
     * dispute with GET /v1/disputes for its deadline and evidence. Value enum: "none",
     * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
     * "under_review", "won", "lost", "prevented", "other".
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
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string | null;
    /**
     * Present when a payment provider asked Flint to pause fulfillment for this payment. While its
     * status is active, open fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released.
     */
    "fulfillment_hold"?: PaymentFulfillmentHold;
    /**
     * The linked invoice. Returned only with expand=invoice. Present only when `expand` includes
     * `invoice`; `null` when expanded and there is no related invoice. anyOf[1] (Value): {@link
     * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and paid,
     * outstanding, and refunded amounts, returned when the invoice is expanded. anyOf[2] (Value):
     * null.
     */
    "invoice"?: ((ExpandedInvoiceSummary) | (null));
    /** Invoice this payment intent collects, when it pays an invoice. */
    "invoice_id"?: string;
    /**
     * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value): {@link
     * PaymentErrorSummary}. A summary of why a payment attempt failed, with a normalized error
     * code, a message, the failure time, and remediation. anyOf[2] (Value): null.
     */
    "last_payment_error": ((PaymentErrorSummary) | (null));
    /** Merchant that owns this payment intent. */
    "merchant_id"?: string;
    /**
     * Captured amount minus processing_fee_money and every amount in add_on_fees. Later merchant
     * assessments and credits are separate balance effects. Absent until Flint has determined and
     * verified the fee. If Flint can't verify it when you read the payment intent, the field is
     * omitted rather than shown unverified; read the payment intent again later. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "merchant_net_money"?: MoneyValue;
    /**
     * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /**
     * The linked order. Returned only with expand=order. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2]
     * (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * Order this payment intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id.
     */
    "order_id"?: string;
    /**
     * How the payment was started. Fixed when the payment intent is created. Value enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api".
     */
    "payment_flow": "checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api"
        | (string & {});
    /** Flint payment intent ID. */
    "payment_intent_id": string;
    /**
     * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Summary of the card or bank account used for the payment. Absent until a payment source is
     * attached. A summary of the payment source used for a payment, by funding-method family, with
     * card or bank account display details.
     */
    "payment_source"?: PaymentSourceSummary;
    /**
     * Flint's all-in processing fee for this payment. It is the complete price Flint charges to
     * process the payment, never a provider cost passed through. The fee is final once the card
     * payment is captured or the ACH payment succeeds; canceled payments and failures before
     * success have none. Invoice, subscription, and automatic tax fees are itemized separately in
     * add_on_fees. Your net for the payment is captured_money minus this fee and the add-on fees.
     * Refunds do not return or revise it. Absent until Flint has determined and verified the fee.
     * If Flint can't verify it when you read the payment intent, the field is omitted rather than
     * shown unverified; read the payment intent again later. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "processing_fee_money"?: MoneyValue;
    /**
     * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
     * email. Format: email. maxLength: 255.
     */
    "receipt_email"?: string | null;
    /**
     * How much of captured_money has been refunded, including value issued as store credit, based
     * on refunded_money. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "refunded_money"?: MoneyValue;
    /**
     * The part of the authorization returned to the buyer without being charged: the uncaptured
     * remainder after a partial capture, or the whole authorization after a cancellation or
     * expiry. It was never collected, so it needs no refund and can't be captured later. Absent
     * until the payment is authorized. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "released_money"?: MoneyValue;
    /** Flint return ID associated with this payment, when present. */
    "return_id"?: string;
    /**
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. anyOf[1] (Value): {@link PaymentRisk}. The
     * risk assessment for a payment intent, with its risk level, score, outcome, and any matched
     * rule or review. anyOf[2] (Value): null.
     */
    "risk"?: ((PaymentRisk) | (null));
    /**
     * The payment option the most recent confirmation used. Absent until the payment intent is
     * first confirmed.
     */
    "selected_payment_option"?: string;
    /**
     * Lifecycle status. requires_payment_method covers both a new payment intent and one whose
     * last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired
     * are final. Refunds and disputes never change status. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
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
    /** Opaque payment reference to share with merchant support. Do not parse its format. */
    "support_reference": string;
    /**
     * Actions the payment intent's current state accepts, each a POST to
     * /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed returns 409
     * ACTION_NOT_ALLOWED. A listed action can still be refused because of something outside the
     * payment intent: an open risk review, an order payment attempt that is using this payment, a
     * closed order, or the merchant's account. An order-owned payment intent never lists confirm;
     * pay it with POST /v1/orders/{order_id}/pay. The list changes only when the payment intent
     * changes. Always empty for buyer credentials. New actions may be added. [] enum: "confirm",
     * "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture", "cancel".
     */
    "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
    /**
     * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
     * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValue) | (null));
    /**
     * Why a bank debit is taken. Set only when payment_options includes ach_debit, and fixed once
     * the payment intent exists. Value enum: "goods", "services", "other".
     */
    "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * A read-only entry in a payment intent's human-readable history. Read the referenced resource for
 * authoritative state.
 */
export type PaymentIntentActivity = {
    /**
     * Value enum: "other", "created", "updated", "status_changed", "failed", "canceled",
     * "expired", "refund_created", "refund_status_changed", "dispute_status_changed",
     * "receipt_sent".
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
    "checkout_session_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "description": string;
    "dispute_id"?: string;
    /**
     * Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
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
     * Value enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired".
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
    "order_id"?: string;
    "payment_intent_activity_id": string;
    "refund_id"?: string;
    /**
     * Value enum: "none", "inquiry_needs_response", "inquiry_under_review", "inquiry_closed",
     * "needs_response", "under_review", "won", "lost", "prevented", "other".
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
     * Value enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired".
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
/** A page of `PaymentIntentActivity` objects. */
export type PaymentIntentActivityListResponse = {
    /**
     *  [] (Value): {@link PaymentIntentActivity}. A read-only entry in a payment intent's
     * human-readable history. Read the referenced resource for authoritative state.
     */
    "data": Array<PaymentIntentActivity>;
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
export type PaymentIntentCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.canceled";
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
    "event_type": "payment_intent.canceled";
});
/**
 * The `payment_intent.canceled` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentIntentCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.canceled". */
    "event_type"?: "payment_intent.canceled";
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
 * The `payment_intent.canceled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.canceled". */
    "event_type"?: "payment_intent.canceled";
});
export type PaymentIntentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.created";
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
    "event_type": "payment_intent.created";
});
/**
 * The `payment_intent.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentIntentCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.created". */
    "event_type"?: "payment_intent.created";
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
 * The `payment_intent.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.created". */
    "event_type"?: "payment_intent.created";
});
export type PaymentIntentExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.expired";
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
    "event_type": "payment_intent.expired";
});
/**
 * The `payment_intent.expired` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PaymentIntentExpiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.expired". */
    "event_type"?: "payment_intent.expired";
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
 * The `payment_intent.expired` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.expired". */
    "event_type"?: "payment_intent.expired";
});
export type PaymentIntentFulfillmentHoldUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.fulfillment_hold_updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.fulfillment_hold_updated";
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
    "event_type": "payment_intent.fulfillment_hold_updated";
});
/**
 * The `payment_intent.fulfillment_hold_updated` webhook payload for the `installed_merchants`
 * event source. Fields shared by partner webhook payloads.
 */
export type PaymentIntentFulfillmentHoldUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.fulfillment_hold_updated". */
    "event_type"?: "payment_intent.fulfillment_hold_updated";
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
 * The `payment_intent.fulfillment_hold_updated` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type PaymentIntentFulfillmentHoldUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.fulfillment_hold_updated". */
    "event_type"?: "payment_intent.fulfillment_hold_updated";
});
/** A page of `PaymentIntent` objects. */
export type PaymentIntentListResponse = {
    /**
     *  [] (Value): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg of an
     * order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data": Array<PaymentIntent>;
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
export type PaymentIntentPaymentFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.payment_failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.payment_failed";
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
    "event_type": "payment_intent.payment_failed";
});
/**
 * The `payment_intent.payment_failed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentIntentPaymentFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.payment_failed". */
    "event_type"?: "payment_intent.payment_failed";
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
 * The `payment_intent.payment_failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type PaymentIntentPaymentFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.payment_failed". */
    "event_type"?: "payment_intent.payment_failed";
});
export type PaymentIntentProcessingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.processing";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.processing";
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
    "event_type": "payment_intent.processing";
});
/**
 * The `payment_intent.processing` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type PaymentIntentProcessingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.processing". */
    "event_type"?: "payment_intent.processing";
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
 * The `payment_intent.processing` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type PaymentIntentProcessingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link PaymentIntent}. One payment from a buyer, standalone or as a leg
     * of an order. amount_money is the amount requested. Once the payment is authorized,
     * authorized_money equals amount_money and splits into captured_money (collected),
     * capturable_money (still on hold), and released_money (returned without being charged), so
     * authorized_money always equals the sum of those three. Reconcile revenue from
     * captured_money.
     */
    "data"?: {
        /**
         * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
         * requested. Once the payment is authorized, authorized_money equals amount_money and
         * splits into captured_money (collected), capturable_money (still on hold), and
         * released_money (returned without being charged), so authorized_money always equals the
         * sum of those three. Reconcile revenue from captured_money.
         */
        "object": PaymentIntent;
    };
    /** Value enum: "payment_intent.processing". */
    "event_type"?: "payment_intent.processing";
});
export type PaymentIntentRequiresActionEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.requires_action";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PaymentIntent;
    };
    "event_type"?: "payment_intent.requires_action";
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
    "event_type": "payment_intent.requires_action";
});
