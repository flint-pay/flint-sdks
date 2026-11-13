import type { InputValue } from '../runtime.js';
import type { CheckoutSessionsListCustomerVerificationsParams } from './types-6.js';
import type { RotatePartnerAppSecretRequestInput } from './types-58.js';
import type { UpdatePartnerAppRequestInput } from './types-67.js';
import type { PartnerAppPaymentSplits, PartnerAppPermissionManifestEntry, PartnerAppMerchantReadiness } from './types-43.js';
import type { PlatformFeeCap } from './types-48.js';
import type { ResponseMeta } from './types-54.js';
import type { WebhookEventSource } from './types-69.js';
import type { CheckoutBuyerContactRequest, CheckoutBuyerContactRequestInput } from './types-5.js';
import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type { OrderGiftCardAllocationAcceptance, OrderGiftCardAllocationAcceptanceInput } from './types-40.js';
import type { OrderPaymentIntentSelection, OrderPaymentIntentSelectionInput, OrderPaymentAttempt } from './types-41.js';
import type {
    PaymentSourceCredential,
    PaymentSplitRequest,
    PaymentSourceCredentialInput,
    PaymentSplitRequestInput,
    PaymentSourceCredentialToken,
    PaymentSourceCredentialTokenInput,
    PaymentRisk,
    PaymentSourceSummary,
    PaymentSplit
} from './types-47.js';
import type { PlatformFeeRequest, PlatformFeeRequestInput } from './types-49.js';
import type { Order } from './types-39.js';
import type { StripePaymentClientAction } from './types-60.js';
import type { SelectableOrderPaymentIntent } from './types-59.js';
import type { ErrorRemediation, ExpandedCustomerSummary, ExpandedInvoiceSummary, ExpandedOrderSummary } from './types-24.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-37.js';
import type { PaymentIntentPlatformFee } from './types-45.js';
export type PartnerAppsDeleteCredentialParams = {};
export type PartnerAppsDeleteParams = {
    /**
     * Apply only if the app has this version. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
};
export type PartnerAppsGetCredentialParams = {};
export type PartnerAppsGetInstallParams = {};
export type PartnerAppsGetParams = {};
export type PartnerAppsListCredentialsParams = CheckoutSessionsListCustomerVerificationsParams;
export type PartnerAppsListInstallsParams = {
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
     * Filter by installed merchant ID. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: InputValue<string>;
    /**
     * Filter by install status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "pending_exchange", "active", "revoked". Value enum: "pending_exchange",
     * "active", "revoked". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending_exchange", "active", "revoked". anyOf[1][] (Value): string. Value enum:
     * "pending_exchange", "active", "revoked". anyOf[2] (Value): string. Value enum:
     * "pending_exchange", "active", "revoked".
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
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "active", "archived". anyOf[1][] (Value): string. Value enum: "active",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "archived".
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
    /**
     * The app's client ID, as sent in the authorization request. Example:
     * "fpc_00112233445566778899aabbccddeeff".
     */
    "client_id": string;
    /** Whether the install is for test or live mode. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** The app's current name. */
    "name": string;
    /** ID of the partner app asking for access. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id": string;
    /** The app’s version. It changes whenever the app is edited. Format: int64. */
    "partner_app_version": number;
    /**
     * The app's payment_splits declaration, which the consent screen shows with its seller terms.
     * Every authorization of an app that declares it asks the merchant to approve receiving split
     * funds from the app, and approving this version of the app approves them for this mode.
     * Absent when the app sends no splits. The app's declaration that its owner sends splits of
     * the payments it collects to sellers: merchants that installed the app and approved receiving
     * split funds from it. Merchants see it on the consent screen.
     */
    "payment_splits"?: PartnerAppPaymentSplits;
    /**
     * The app's platform fee cap, which the consent screen shows. Approving this version of the
     * app approves the cap for this mode. Absent when the app charges no platform fees. The most a
     * platform fee can take from one payment. The largest platform fee on a payment is percent of
     * the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if
     * it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00
     * USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum
     * can't carry a platform fee.
     */
    "platform_fee_cap"?: PlatformFeeCap;
    /** The registered redirect URI Flint sends the merchant back to after they approve or deny. */
    "redirect_uri": string;
    /**
     * IDs of the requested permissions, sorted. They are the permissions named in scope, or the
     * app's default requested permissions when scope is omitted, plus every required permission.
     * [] (Value): string. Example: "manage_orders".
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
     * Resource, collection, or operation result returned by this request. What a partner app is
     * asking to access, shown to a merchant before they approve it, including requested
     * permissions and the redirect URI.
     */
    "data": PartnerAuthorizePreview;
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
/** A partner application's authorization to access an environment. */
export type PartnerEnvironmentGrant = ({
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". */
    "environment_grant_id": string;
    /**
     * The app’s permissions this grant holds, from the app’s current manifest. Their permission
     * IDs are the code exchange's scope. [] (Value): {@link PartnerAppPermissionManifestEntry}.
     * One permission a partner app can request, with a title, a description, and the Flint scopes
     * it grants.
     */
    "granted_permissions": Array<PartnerAppPermissionManifestEntry>;
    /**  [] (Value): string. */
    "granted_scopes": Array<string>;
    /**
     * The installed merchant’s payments and payouts readiness in this grant’s environment,
     * summarized for the app’s owner: the `status` and `status_reason` that a partner app token in
     * the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without
     * requirement names or next actions. Present when the app’s owner lists installs or gets one,
     * on an active grant of an active install of an active app, when the grant holds
     * `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and
     * the merchant and the grant’s environment are active. Absent on other grants, on the
     * installing merchant’s own install reads, on revoke results, and in webhook events. To see
     * which requirements are due, read the merchant with a partner app token in the grant’s mode.
     * An installed merchant's payments and payouts readiness in one environment, summarized for
     * the partner app's owner.
     */
    "merchant_readiness"?: PartnerAppMerchantReadiness;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** ID of the install this grant belongs to. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". */
    "partner_app_install_id": string;
    /**
     * The merchant's approval to receive split funds from the app in this mode, present while it
     * lasts. A merchant approves by authorizing an app that declares payment_splits. The approval
     * ends when the app removes payment_splits, or when the merchant or you revoke this grant or
     * the install; authorizing again approves again. A payment's splits to this seller need the
     * approval in the payment's mode. The merchant's approval to receive split funds from the app
     * in this grant's mode.
     */
    "payment_splits"?: PartnerEnvironmentGrantPaymentSplits;
    /**
     * The platform fee cap the merchant approved for this mode: what the app's cap was when the
     * merchant approved it, lowered at once whenever the app lowers its cap. Absent when the
     * merchant approved none. A higher app cap applies only after the merchant authorizes again.
     * No request accepts a platform fee yet. The most a platform fee can take from one payment.
     * The largest platform fee on a payment is percent of the amount it collects, rounded half up
     * to the minor unit, plus the currency's fixed part if it has one, and never more than the
     * currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on
     * a 100.00 USD payment. A currency without a maximum can't carry a platform fee.
     */
    "platform_fee_cap"?: PlatformFeeCap;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "revoked_at"?: string;
    /** Example: "usr_01KEZF7C00YC8757ZYP9727JM0". */
    "revoked_by_user_id"?: string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /** Value enum: "pending_exchange", "active", "revoked". */
    "status": "pending_exchange" | "active" | "revoked" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and
     * returns the current grant when it is already revoked. [] enum: "revoke". [] (Value): string.
     * Value enum: "revoke".
     */
    "supported_actions": Array<"revoke" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
});
/** The merchant's approval to receive split funds from the app in this grant's mode. */
export type PartnerEnvironmentGrantPaymentSplits = {
    /**
     * When the merchant approved receiving split funds. Authorizing again with the same seller
     * terms keeps it; approving other seller terms, or approving again after the approval ended,
     * sets a new one. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "approved_at": string;
    /**
     * The seller terms the merchant approved: the app's seller_terms_url when the merchant
     * authorized it. Changing the app's seller_terms_url doesn't change it. Format: uri.
     * maxLength: 2048. pattern: ^https://. Example: "https://example.com/receipt".
     */
    "seller_terms_url": string;
};
/**
 * The response for: Exchange an OAuth token; List authorized CLI contexts; Review CLI session
 * consent; Revoke an OAuth token; Start CLI browser login.
 */
export type PartnerTokenErrorResponse = {
    "error": string;
    "error_description"?: string;
};
/** Fields shared by partner webhook payloads. */
export type PartnerWebhookEnvelope = ({
    /**
     * API version used to render this delivery attempt. The older of the event version and the
     * endpoint version when the attempt runs, with default resolved to the merchant pin. Format:
     * date. Example: "2026-08-02".
     */
    "api_version": string;
    /** When Flint recorded the event. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The resource snapshot recorded for this event and rendered at the delivery API version.
     * object (Required): object. The affected public resource without expansions, client authority
     * fields, or fields computed for an individual caller. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data": {
        /**
         * The affected public resource without expansions, client authority fields, or fields
         * computed for an individual caller.
         */
        "object": {
            [key: string]: unknown;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: {
            [key: string]: unknown;
        };
    };
    /**
     * The origin of the event. Selects the webhook envelope and the fields in source. Value enum:
     * "partner_app", "installed_merchants".
     */
    "event_source": "partner_app" | "installed_merchants" | (string & {});
    /**
     * The resource change or condition this event announces. Value enum: "api_key.created",
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
     * "invoice_payment_attempt.settled", "merchant.readiness_updated", "merchant.updated",
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
     * ID of the partner app that owns the receiving endpoint. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id": string;
    /**
     * 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered
     * afterwards, which keeps its previous data shape. Value enum: 1, 2.
     */
    "payload_version": number;
    /**
     * The merchant and partner app install this event concerns, with environment details for
     * installed-merchant events. The merchant and partner app install the event concerns.
     * Environment fields are present for installed-merchant events.
     */
    "source": WebhookEventSource;
    /** true for a synthetic event sent from the test-events endpoint, false otherwise. */
    "test": boolean;
    /**
     * Stable ID of the recorded webhook event, shared by its delivery attempts. Example:
     * "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
});
/** The request body for: Pause one of the current buyer's subscriptions; Pause subscription. */
export type PauseSubscriptionRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
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
export type PayOrderRequestConfirmPaymentIntents = ({
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
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
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
    "payment_intents": (Array<OrderPaymentIntentSelection>);
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true, for one newly collected card sent as
     * stripe.confirmation_token created with setup_future_usage on_session. The card is saved with
     * usage on_session once the payment succeeds, for the customer the checkout acts for: the
     * customer the merchant created the session for, or the customer whose email the buyer
     * confirmed in it. When save_payment_method_requires_verification is true, buyer_contact.email
     * is required. The card is kept pending for the customer with that email, creating one if
     * needed, and opens nothing until confirmed on the receipt within 24 hours. Without
     * save_payment_method_phone, payment_method_save.email_confirmation_required is true and an
     * emailed code confirms the save with purpose confirm_saved_payment_method and channel email.
     * The code goes only to the email given with the payment. Subscription signup and setup still
     * require email verification before collection when the email belongs to an existing customer.
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
});
/** The `confirm_payment_intents` variant of `PayOrderRequest`. */
export type PayOrderRequestConfirmPaymentIntentsInput = ({
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
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
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
    "payment_intents": (Array<OrderPaymentIntentSelectionInput>);
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true, for one newly collected card sent as
     * stripe.confirmation_token created with setup_future_usage on_session. The card is saved with
     * usage on_session once the payment succeeds, for the customer the checkout acts for: the
     * customer the merchant created the session for, or the customer whose email the buyer
     * confirmed in it. When save_payment_method_requires_verification is true, buyer_contact.email
     * is required. The card is kept pending for the customer with that email, creating one if
     * needed, and opens nothing until confirmed on the receipt within 24 hours. Without
     * save_payment_method_phone, payment_method_save.email_confirmation_required is true and an
     * emailed code confirms the save with purpose confirm_saved_payment_method and channel email.
     * The code goes only to the email given with the payment. Subscription signup and setup still
     * require email verification before collection when the email belongs to an existing customer.
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
});
/** The request body for: Pay order. */
export type PayOrderRequestInput = ((PayOrderRequestPayInput)
    | (PayOrderRequestConfirmPaymentIntentsInput)
    | (PayOrderRequestSetupInput)
    | (PayOrderRequestResumeInput));
/** The `pay` variant of `PayOrderRequest`. */
export type PayOrderRequestPay = ({
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
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
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
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * The credential you provide to pay an order: a payment source token, a saved payment method
     * ID, or a Stripe confirmation token.
     */
    "payment_source"?: PaymentSourceCredential;
    /**
     * A platform fee your partner app charges on the processor payment pay creates, checked
     * against what that payment collects after gift cards. A pay that gift cards or a zero balance
     * settle creates no processor payment and charges no fee. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true, for one newly collected card sent as
     * stripe.confirmation_token created with setup_future_usage on_session. The card is saved with
     * usage on_session once the payment succeeds, for the customer the checkout acts for: the
     * customer the merchant created the session for, or the customer whose email the buyer
     * confirmed in it. When save_payment_method_requires_verification is true, buyer_contact.email
     * is required. The card is kept pending for the customer with that email, creating one if
     * needed, and opens nothing until confirmed on the receipt within 24 hours. Without
     * save_payment_method_phone, payment_method_save.email_confirmation_required is true and an
     * emailed code confirms the save with purpose confirm_saved_payment_method and channel email.
     * The code goes only to the email given with the payment. Subscription signup and setup still
     * require email verification before collection when the email belongs to an existing customer.
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
    /**
     * Divide this payment's funds between the collecting merchant and sellers; this is separate
     * from split tender, where a buyer uses several payment methods. Only the collecting
     * merchant's own credentials can send splits. Each install must belong to the same app owned
     * by the collecting merchant, with the seller's approval in this mode and readiness to receive
     * payouts. Test mode needs no platform review; live mode requires the app's active
     * payment_splits capability and Flint support for the collecting account. Can't be combined
     * with platform_fee or saved payment credentials. The total must fit after the largest Flint
     * fee for the offered payment options, leaving one minor unit for the collecting merchant;
     * otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. Fixed after
     * create, except capture's final amounts. Part of the idempotency fingerprint. On pay, the
     * total must fit the processor payment after gift cards. A payment funded entirely by gift
     * cards can't have splits. minItems: 1. maxItems: 25. [] (Value): {@link PaymentSplitRequest}.
     * A seller's fixed share of one payment, created with that payment. This divides the payment's
     * funds; split tender divides how the buyer pays.
     */
    "splits"?: Array<PaymentSplitRequest>;
});
/** The `pay` variant of `PayOrderRequest`. */
export type PayOrderRequestPayInput = ({
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
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * The buyer's IP address, for risk screening, when your server pays on the buyer's behalf.
     * Write-only. minLength: 1. maxLength: 64.
     */
    "buyer_ip_address"?: string;
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
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
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * The credential you provide to pay an order: a payment source token, a saved payment method
     * ID, or a Stripe confirmation token.
     */
    "payment_source"?: PaymentSourceCredentialInput;
    /**
     * A platform fee your partner app charges on the processor payment pay creates, checked
     * against what that payment collects after gift cards. A pay that gift cards or a zero balance
     * settle creates no processor payment and charges no fee. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * The buyer's choice to save the card they typed for faster checkout at this merchant. Send
     * true only from the checkout session's own credential, when the session's
     * can_save_payment_method is true, for one newly collected card sent as
     * stripe.confirmation_token created with setup_future_usage on_session. The card is saved with
     * usage on_session once the payment succeeds, for the customer the checkout acts for: the
     * customer the merchant created the session for, or the customer whose email the buyer
     * confirmed in it. When save_payment_method_requires_verification is true, buyer_contact.email
     * is required. The card is kept pending for the customer with that email, creating one if
     * needed, and opens nothing until confirmed on the receipt within 24 hours. Without
     * save_payment_method_phone, payment_method_save.email_confirmation_required is true and an
     * emailed code confirms the save with purpose confirm_saved_payment_method and channel email.
     * The code goes only to the email given with the payment. Subscription signup and setup still
     * require email verification before collection when the email belongs to an existing customer.
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
    /**
     * Divide this payment's funds between the collecting merchant and sellers; this is separate
     * from split tender, where a buyer uses several payment methods. Only the collecting
     * merchant's own credentials can send splits. Each install must belong to the same app owned
     * by the collecting merchant, with the seller's approval in this mode and readiness to receive
     * payouts. Test mode needs no platform review; live mode requires the app's active
     * payment_splits capability and Flint support for the collecting account. Can't be combined
     * with platform_fee or saved payment credentials. The total must fit after the largest Flint
     * fee for the offered payment options, leaving one minor unit for the collecting merchant;
     * otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. Fixed after
     * create, except capture's final amounts. Part of the idempotency fingerprint. On pay, the
     * total must fit the processor payment after gift cards. A payment funded entirely by gift
     * cards can't have splits. minItems: 1. maxItems: 25. [] (Value): {@link
     * PaymentSplitRequestInput}. A seller's fixed share of one payment, created with that payment.
     * This divides the payment's funds; split tender divides how the buyer pays.
     */
    "splits"?: Array<PaymentSplitRequestInput>;
})
    & (({
    "splits"?: never;
} | {
    "platform_fee"?: never;
}));
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
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
    /**
     * Optional. When sent, Flint compares it with the amount fixed on the attempt, not the order's
     * current balance. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "expected_outstanding_money"?: MoneyValue;
    /** minLength: 1. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
    "order_payment_attempt_id": string;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
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
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
    /**
     * Optional. When sent, Flint compares it with the amount fixed on the attempt, not the order's
     * current balance. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "expected_outstanding_money"?: MoneyValueInput;
    /** minLength: 1. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
    "order_payment_attempt_id": string;
    /**
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
};
/** The `setup` variant of `PayOrderRequest`. */
export type PayOrderRequestSetup = ({
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
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequest & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe" | (string & {});
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
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /** The `token` variant of `PaymentSourceCredential`. */
    "setup_payment_source": PaymentSourceCredentialToken;
});
/** The `setup` variant of `PayOrderRequest`. */
export type PayOrderRequestSetupInput = ({
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
     * minLength: 1. maxLength: 255. Example: "buyer@example.com". minLength: 1. phone (Optional):
     * (string or null) and string. Phone for the buyer, in E.164 format, such as +14155551234. On
     * checkout session updates, null clears the saved phone. minLength: 1. pattern:
     * ^\+[1-9][0-9]{1,14}$. minLength: 1.
     */
    "buyer_contact"?: (Exclude<CheckoutBuyerContactRequestInput & object, readonly unknown[]>)
        & ({
        /** minLength: 1. */
        "email"?: string;
        /** minLength: 1. */
        "phone"?: string;
    });
    /**
     * How to complete the authentication step. Flint's API returns a Stripe client secret only for
     * client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's
     * authentication page receives what it needs to run the challenge, including the client secret
     * for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint
     * doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with
     * cancellation_reason payment_returned. The Stripe secret can also confirm the payment with
     * another card, so use it only with handleNextAction. Reader credentials do not support url;
     * omit client_action_type or send stripe for reader payments. Defaults to stripe for a new
     * confirmation; omission on a continuation keeps the existing type. Default: "stripe". Value
     * enum: "url", "stripe".
     */
    "client_action_type"?: "url" | "stripe";
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
     * Where Flint sends the buyer after a redirect or authentication step, adding only
     * payment_intent_id for a payment, or payment_method_id for a setup. The completion message
     * uses type flint.payment_action.completed and exactly that one subject key. Without it, the
     * step ends on a Flint page that tells the parent or opener the step completed. Accepts an
     * absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript,
     * data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode
     * also accepts HTTP loopback URLs. With a checkout credential on order pay, omit
     * payment_return_url; checkout sessions use their own configured return URL. minLength: 1.
     * maxLength: 2048.
     */
    "payment_return_url"?: string;
    /** The `token` variant of `PaymentSourceCredential`. */
    "setup_payment_source": PaymentSourceCredentialTokenInput;
});
/** A response containing `PayOrderResult` data. */
export type PayOrderResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The order is the primary
     * resource and expected_version target; order_payment_attempt records the payment outcome.
     */
    "data": PayOrderResult;
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
    /**
     * Amount of this fee. Added to the payment's `fee_money` on its balance transaction. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
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
    /** Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". */
    "gift_card_id": string;
    /** Example: "gcr_01KEZF7C002YD2G2J734RRZTWT". */
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
     * confirmation attempt. An amount_money or tip_money change that leaves too little for stored
     * splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Effective Flint capture deadline, equal to the earlier of the provider capture deadline and
     * this attempt's sealed resource guarantee. Capture is refused at or after this time, even
     * while status is requires_capture. Omitted until a hold is placed. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "authorization_expires_at"?: string;
    /**
     * Payment intent's stored capturable amount. A positive amount does not override
     * authorization_expires_at or the payment status. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "capturable_money"?: MoneyValue;
    /**
     * Money collected through this payment, once nothing more can be collected. Positive when
     * money was collected, including a payment Flint couldn't accept and is refunding (the payment
     * intent's cancellation_reason is payment_returned). Zero when nothing was collected, for
     * example after a decline or a released authorization. Absent while the outcome can still
     * change, such as an ACH debit that hasn't settled or an open hold. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "captured_money"?: MoneyValue;
    /**
     * A summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * The reader the payment is or was last presented on. Set when Flint presents it and kept
     * afterward. While processing or requires_action with a reader_id, the payment is on that
     * reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     */
    "reader_id"?: string;
    /**
     * Payment option used by this leg, using the same values as
     * PaymentIntent.selected_payment_option. Fixed when the attempt becomes terminal. Omitted when
     * no payment option has been selected. Value enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
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
 * How to finish a payment step. Flint's API returns a Stripe client secret only for
 * client_action_type stripe. With url, Stripe's authentication page receives what it needs to run
 * the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a
 * payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer,
 * and the payment intent ends canceled with cancellation_reason payment_returned.
 */
export type PaymentClientAction = ((PaymentClientActionURL) | (PaymentClientActionStripe) | (Record<string, unknown>));
/** The `stripe` variant of `PaymentClientAction`. */
export type PaymentClientActionStripe = {
    /**
     * Stripe.js initialization and a Stripe client secret returned by Flint's API for
     * client_action_type stripe. Use the client secret only with handleNextAction; it can also
     * confirm the underlying payment with another card. Stripe initialization context plus one
     * flow-specific authority object. Exactly one of payment_intent, setup_intent, or
     * terminal_payment_intent is present.
     */
    "stripe": StripePaymentClientAction;
    /**
     * Selects how to complete the step. The url type opens the authentication page; the stripe
     * type returns a Stripe client secret for Stripe.js handleNextAction. Value enum: "stripe".
     */
    "type": "stripe" | (string & {});
};
/** The `url` variant of `PaymentClientAction`. */
export type PaymentClientActionURL = {
    /**
     * Selects how to complete the step. The url type opens the authentication page; the stripe
     * type returns a Stripe client secret for Stripe.js handleNextAction. Value enum: "url".
     */
    "type": "url" | (string & {});
    /**
     * Bearer URL on Flint's payment-return host. Open it as a redirect, popup, or iframe before
     * expires_at. The Flint API response contains no Stripe client secret; Stripe's authentication
     * page receives what it needs to run the challenge, including the client secret for hosted
     * 3DS2. minLength: 1.
     */
    "url": string;
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
    /**
     * Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Null when
     * the payment has splits: initialize Stripe.js with publishable_key alone and omit
     * stripeAccount. Example: "acct_1234567890".
     */
    "account_id": string | null;
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
    /**
     * Deprecated: use payment_options. Digital wallets that the payment form can offer. Removed in
     * a later release. [] (Value): string.
     */
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
    /**
     * Deprecated: use payment_options. Processor payment method types that the payment form can
     * offer. Removed in a later release. [] (Value): string.
     */
    "payment_method_types": Array<string>;
    /**
     * Payment options the payment form can offer, in display order. Skip values you don't
     * recognize. Stripe Elements takes processor payment method types: pass card for card,
     * apple_pay, and google_pay; us_bank_account for ach_debit; and affirm for affirm. Set the
     * Payment Element's wallets option so it shows only the wallets listed. [] enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
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
     * payment_failed. Value enum: "card_declined", "card_declined_do_not_retry",
     * "card_details_outdated", "insufficient_funds", "bank_account_closed",
     * "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted",
     * "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card",
     * "incorrect_cvc", "lost_card", "stolen_card", "do_not_honor", "fraudulent",
     * "processing_error", "payment_method_unavailable", "payment_method_declined",
     * "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable",
     * "incorrect_pin", "pin_try_exceeded", "pin_required", "payment_failed".
     */
    "code": "card_declined"
        | "card_declined_do_not_retry"
        | "card_details_outdated"
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
        | "incorrect_pin"
        | "pin_try_exceeded"
        | "pin_required"
        | "payment_failed"
        | (string & {});
    /**
     * Time the payment attempt concluded in failure. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "released_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "requested_at": string;
    /** Value enum: "pause_fulfillment", "reevaluate_fulfillment". */
    "required_action": "pause_fulfillment" | "reevaluate_fulfillment" | (string & {});
    /** Value enum: "active", "released". */
    "status": "active" | "released" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
/**
 * One payment from a buyer, standalone or as a leg of an order. amount_money is the amount
 * requested. Once the payment is authorized, authorized_money equals amount_money (on a payment
 * intent canceled with cancellation_reason payment_returned, the authorization Flint released) and
 * splits into captured_money (collected), capturable_money (still on hold), and released_money
 * (returned without being charged), so authorized_money equals the sum of those three whenever the
 * capture is at most the authorization. An overcapture (see request_overcapture) has
 * capturable_money and released_money zero and captured_money above authorized_money. Reconcile
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
     * confirmation attempt. An amount_money or tip_money change that leaves too little for stored
     * splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Effective Flint deadline to capture a manual-capture hold: the earlier of the provider
     * capture deadline and any order resource guarantee. Order guarantees last at most 24 hours
     * from the payment attempt start and may end earlier. Capture is refused at or after this
     * time, even while status is requires_capture. Omitted until a hold is placed. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "authorization_expires_at"?: string;
    /**
     * When the processor authorized the payment. Absent until then. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "authorized_at"?: string;
    /**
     * The amount the processor authorized. It always equals amount_money and doesn't change once
     * set, even when a capture collects more. On a payment intent canceled with
     * cancellation_reason payment_returned, it equals the authorization Flint released instead.
     * Absent until the payment is authorized, and on payments canceled before authorization.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "authorized_money"?: MoneyValue;
    /**
     * Flint-normalized reason the payment intent was canceled. Present only while status is
     * canceled. Unknown processor values are returned as payment_canceled. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned", "invoice_payment_failed",
     * "invoice_voided", "order_closed", "payment_canceled", "payment_returned".
     */
    "cancellation_reason"?: "requested_by_customer"
        | "duplicate"
        | "fraudulent"
        | "abandoned"
        | "invoice_payment_failed"
        | "invoice_voided"
        | "order_closed"
        | "payment_canceled"
        | "payment_returned"
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
     * until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "captured_at"?: string;
    /**
     * The amount collected from the buyer, including captured_tip_money. Reconcile revenue and
     * print receipts from this amount, not amount_money. Zero while a hold is open, and positive
     * whenever status is succeeded. After an overcapture it is above authorized_money. Also
     * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
     * captured the money and is returning it through a refund with reason payment_returned.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "captured_money"?: MoneyValue;
    /**
     * The part of captured_money that is a tip: the capture's tip_money when it sent one,
     * otherwise the tip the authorization carried, at most captured_money. tip_money keeps the tip
     * the authorization carried. Refunds return it last. Absent until the payment is captured.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "captured_tip_money"?: MoneyValue;
    /**
     * Flint checkout session ID associated with this payment, when present. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at"?: string;
    /**
     * The linked customer. Returned only with expand=customer. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: string;
    /**
     * Whether the customer was present for the most recent confirmation. absent means Flint
     * charged a saved card without them, as a merchant-initiated payment on its stored credential.
     * Subscription renewals and automatic invoice charges are absent, and other payments are
     * absent only when confirmed or paid with customer_presence absent. A customer who pays any of
     * them with a card they enter makes it present. Each confirmation sets it again. Value enum:
     * "present", "absent".
     */
    "customer_presence": "present" | "absent" | (string & {});
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
     * 255. Example: "warehouse-1842".
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
    /**
     * Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value): {@link
     * PaymentErrorSummary}. A summary of why a payment attempt failed, with a normalized error
     * code, a message, the failure time, and remediation. anyOf[2] (Value): null.
     */
    "last_payment_error": ((PaymentErrorSummary) | (null));
    /**
     * The order payment attempt that most recently used this payment intent. Start times count to
     * the second; of attempts that started in the same second, the one with the highest
     * order_payment_attempt_id is named. `null` when no attempt has used it yet; omitted for
     * payment intents without an order. It changes only when an attempt starts using this payment
     * intent, which advances version. Returned with merchant credentials; omitted with buyer and
     * checkout credentials. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     */
    "latest_order_payment_attempt_id"?: string | null;
    /** Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /**
     * Captured amount minus processing_fee_money, every amount in add_on_fees,
     * platform_fee.amount_money, and each split commitment. Live, succeeded and fully_reversed
     * splits commit their whole amount; payment_not_completed and install_revoked cancellations
     * commit nothing. A failed split commits only money already taken back before failure; its
     * remainder returns to the collecting merchant. Refunds do not reduce the commitment. Later
     * merchant assessments and credits are separate balance effects. Absent until Flint has
     * determined and verified the fee. If Flint can't verify it when you read the payment intent,
     * the field is omitted rather than shown unverified; read the payment intent again later.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
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
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Whether one capture can collect more than the authorization, and the most it can collect.
     * Present once a payment with request_overcapture true is authorized. Read it to show the
     * limit; capture enforces it. Whether one capture can collect more than the authorization.
     */
    "overcapture"?: PaymentIntentOvercapture;
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
    /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     */
    "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
    /**
     * Summary of the card or bank account used for the payment. Absent until a payment source is
     * attached. A summary of the payment source used for a payment, by funding-method family, with
     * card or bank account display details.
     */
    "payment_source"?: PaymentSourceSummary;
    /**
     * The platform fee a partner app charges on this payment, when it created the payment with an
     * install token and a fee. Absent when the payment carries none. Returned only to merchant
     * credentials; omitted for buyer and checkout credentials. The platform fee a partner app
     * charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees,
     * and merchant_net_money subtracts it.
     */
    "platform_fee"?: PaymentIntentPlatformFee;
    /**
     * Flint's all-in processing fee for this payment. It is the complete price Flint charges to
     * process the payment, never a provider cost passed through. The fee is final once the card
     * payment is captured or the ACH payment succeeds; canceled payments and failures before
     * success have none, except a payment intent canceled with cancellation_reason
     * payment_returned, which shows the fee charged at capture on the charge Flint is returning.
     * Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax
     * fees are itemized separately in add_on_fees. Your net for the payment is captured_money
     * minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint
     * has determined and verified the fee. If Flint can't verify it when you read the payment
     * intent, the field is omitted rather than shown unverified; read the payment intent again
     * later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "processing_fee_money"?: MoneyValue;
    /**
     * The reader the payment is or was last presented on. Set when Flint presents it and kept
     * afterward. While processing or requires_action with a reader_id, the payment is on that
     * reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     */
    "reader_id"?: string;
    /**
     * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
     * email. Format: email. maxLength: 255. Example: "buyer@example.com".
     */
    "receipt_email"?: string | null;
    /**
     * Last time Flint can refund this payment through the original payment method. A refund
     * submitted at exactly this time is accepted; after it, refunds through the original payment
     * method are refused. Today only Affirm has a refund window: 120 days after the payment
     * settles. `null` when the method has no refund window, the payment has not succeeded with
     * captured money, or its capture time is missing. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "refund_expires_at": string | null;
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
     * expiry. It was never collected, so it needs no refund and can't be captured later. Zero
     * after a capture at or above the authorization. Absent until the payment is authorized.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "released_money"?: MoneyValue;
    /**
     * Whether one capture may collect more than the authorization where the card network allows
     * it. Fixed at create. Always present with merchant credentials; omitted with buyer and
     * checkout credentials.
     */
    "request_overcapture"?: boolean;
    /**
     * Flint return ID associated with this payment, when present. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * The return resolution whose balance this payment collects. Set for exchange balances and
     * corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. anyOf[1] (Value): {@link PaymentRisk}. The
     * risk assessment for a payment intent, with its risk level, score, outcome, and any matched
     * rule or review. anyOf[2] (Value): null.
     */
    "risk"?: ((PaymentRisk) | (null));
    /**
     * The payment option the most recent confirmation used. Absent until the payment intent is
     * first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
     * "card_present".
     */
    "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
    /**
     * Top-level PaymentSplit children in their current state, embedded whole. Empty when the
     * payment has no splits. Child changes do not send payment_intent.updated. Omitted for buyer
     * and checkout credentials. [] (Value): {@link PaymentSplit}. A top-level child of a payment
     * intent dividing the collecting merchant's payment funds with one seller. Both parties read
     * this same resource with their own credentials.
     */
    "splits"?: Array<PaymentSplit>;
    /**
     * The text shown on the buyer's card or bank statement for this payment. `null` until the
     * charge is created. `null` when the provider supplies no descriptor. Frozen when the charge
     * is created.
     */
    "statement_descriptor": string | null;
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
    /**
     * The subscription whose billing charged this payment: its first charge, a renewal, a retry or
     * a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: string;
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
    /** Example: "cs_01KEZF7C004JRWFW43H037MQRN". */
    "checkout_session_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    "description": string;
    /**
     * ID of the dispute this entry is about. Present on dispute entries. Example:
     * "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     */
    "dispute_id"?: string;
    /**
     * The payment's dispute status before the change. Present on `dispute_status_changed` entries.
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
    /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: string;
    /** Example: "pact_01KEZF7C00D5EYVFWM20J9Z8EP". */
    "payment_intent_activity_id": string;
    /**
     * ID of the refund this entry is about. Present on refund entries. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_id"?: string;
    /**
     * The payment's dispute status after the change. Present on `dispute_status_changed` entries.
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
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentIntentActivity}. A read-only entry in a payment intent's human-readable history. Read
     * the referenced resource for authoritative state.
     */
    "data": Array<PaymentIntentActivity>;
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
export type PaymentIntentAuthorizationExpiringEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_on_fees"?: Array<PaymentAddOnFee>;
            "amount_money": MoneyValue;
            "authorization_expires_at"?: string;
            "authorized_at"?: string;
            "authorized_money"?: MoneyValue;
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            "capturable_money"?: MoneyValue;
            "capture_method"?: "automatic" | "manual" | (string & {});
            "captured_at"?: string;
            "captured_money"?: MoneyValue;
            "captured_tip_money"?: MoneyValue;
            "checkout_session_id"?: string;
            "created_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_presence": "present" | "absent" | (string & {});
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
            "external_reference_id"?: string | null;
            "fulfillment_hold"?: PaymentFulfillmentHold;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "last_payment_error": ((PaymentErrorSummary) | (null));
            "latest_order_payment_attempt_id"?: string | null;
            "merchant_id"?: string;
            "merchant_net_money"?: MoneyValue;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "overcapture"?: PaymentIntentOvercapture;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent_id": string;
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            "payment_source"?: PaymentSourceSummary;
            "platform_fee"?: PaymentIntentPlatformFee;
            "processing_fee_money"?: MoneyValue;
            "reader_id"?: string;
            "receipt_email"?: string | null;
            "refund_expires_at": string | null;
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money"?: MoneyValue;
            "released_money"?: MoneyValue;
            "request_overcapture"?: boolean;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "risk"?: ((PaymentRisk) | (null));
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            "splits"?: Array<PaymentSplit>;
            "statement_descriptor": string | null;
            "status": "requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {});
            "subscription_id"?: string;
            "support_reference": string;
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            "tip_money"?: ((MoneyValue) | (null));
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.authorization_expiring";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_on_fees"?: Array<PaymentAddOnFee>;
            "amount_money": MoneyValue;
            "authorization_expires_at"?: string;
            "authorized_at"?: string;
            "authorized_money"?: MoneyValue;
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            "capturable_money"?: MoneyValue;
            "capture_method"?: "automatic" | "manual" | (string & {});
            "captured_at"?: string;
            "captured_money"?: MoneyValue;
            "captured_tip_money"?: MoneyValue;
            "checkout_session_id"?: string;
            "created_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_presence": "present" | "absent" | (string & {});
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
            "external_reference_id"?: string | null;
            "fulfillment_hold"?: PaymentFulfillmentHold;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "last_payment_error": ((PaymentErrorSummary) | (null));
            "latest_order_payment_attempt_id"?: string | null;
            "merchant_id"?: string;
            "merchant_net_money"?: MoneyValue;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "overcapture"?: PaymentIntentOvercapture;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent_id": string;
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            "payment_source"?: PaymentSourceSummary;
            "platform_fee"?: PaymentIntentPlatformFee;
            "processing_fee_money"?: MoneyValue;
            "reader_id"?: string;
            "receipt_email"?: string | null;
            "refund_expires_at": string | null;
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money"?: MoneyValue;
            "released_money"?: MoneyValue;
            "request_overcapture"?: boolean;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "risk"?: ((PaymentRisk) | (null));
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            "splits"?: Array<PaymentSplit>;
            "statement_descriptor": string | null;
            "status": "requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {});
            "subscription_id"?: string;
            "support_reference": string;
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            "tip_money"?: ((MoneyValue) | (null));
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.authorization_expiring";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_intent.authorization_expiring";
});
/**
 * The `payment_intent.authorization_expiring` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type PaymentIntentAuthorizationExpiringInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`. object.add_on_fees
     * (Optional): Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic
     * tax fees collected with this payment. Available to the merchant only. Empty until fees
     * settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until
     * Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. object.add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a
     * payment intent, with the fee type and amount. object.amount_money (Required): {@link
     * MoneyValue}. The amount requested from the buyer, including any tip_money. Capturing doesn't
     * change it: after a partial capture it still shows the requested amount, and captured_money
     * shows what was collected. On a standalone payment intent, PATCH can change it only before
     * the first confirmation attempt. An amount_money or tip_money change that leaves too little
     * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.authorization_expires_at (Optional): string. Effective Flint deadline to capture a
     * manual-capture hold: the earlier of the provider capture deadline and any order resource
     * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end
     * earlier. Capture is refused at or after this time, even while status is requires_capture.
     * Omitted until a hold is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.authorized_at (Optional): string. When the processor authorized the payment. Absent
     * until then. Format: date-time. Example: "2026-08-02T16:00:00Z". object.authorized_money
     * (Optional): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set, even when a capture collects more. On a payment
     * intent canceled with cancellation_reason payment_returned, it equals the authorization Flint
     * released instead. Absent until the payment is authorized, and on payments canceled before
     * authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.cancellation_reason (Optional): string. Flint-normalized reason the payment
     * intent was canceled. Present only while status is canceled. Unknown processor values are
     * returned as payment_canceled. Value enum: "requested_by_customer", "duplicate",
     * "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed",
     * "payment_canceled", "payment_returned". object.capturable_money (Optional): {@link
     * MoneyValue}. The part of the authorization you can still capture. Positive only while status
     * is requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.capture_method
     * (Optional): string. When money is collected. Defaults to automatic. Value enum: "automatic",
     * "manual". object.captured_at (Optional): string. When money was captured. For automatic
     * capture, this is when the payment succeeded. Absent until capture. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.captured_money (Optional): {@link MoneyValue}. The
     * amount collected from the buyer, including captured_tip_money. Reconcile revenue and print
     * receipts from this amount, not amount_money. Zero while a hold is open, and positive
     * whenever status is succeeded. After an overcapture it is above authorized_money. Also
     * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
     * captured the money and is returning it through a refund with reason payment_returned.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.captured_tip_money (Optional): {@link MoneyValue}. The part of
     * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip
     * the authorization carried, at most captured_money. tip_money keeps the tip the authorization
     * carried. Refunds return it last. Absent until the payment is captured. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.checkout_session_id (Optional): string. Flint checkout session ID associated with
     * this payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.created_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. The linked customer.
     * Returned only with expand=customer. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. Customer linked to this payment intent. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_presence (Required): string. Whether the
     * customer was present for the most recent confirmation. absent means Flint charged a saved
     * card without them, as a merchant-initiated payment on its stored credential. Subscription
     * renewals and automatic invoice charges are absent, and other payments are absent only when
     * confirmed or paid with customer_presence absent. A customer who pays any of them with a card
     * they enter makes it present. Each confirmation sets it again. Value enum: "present",
     * "absent". object.dispute_status (Optional): string. Dispute state of this payment. none
     * means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry
     * or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its
     * deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string or null. Caller-owned identifier for this
     * resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.fulfillment_hold (Optional): {@link PaymentFulfillmentHold}. Present when a payment
     * provider asked Flint to pause fulfillment for this payment. While its status is active, open
     * fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. The linked invoice. Returned only with expand=invoice. Present only when `expand`
     * includes `invoice`; `null` when expanded and there is no related invoice.
     * object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice.anyOf[2] (Value): null. object.invoice_id
     * (Optional): string. Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.last_payment_error (Required): {@link
     * PaymentErrorSummary} or null. Most recent payment error. Null when no payment error is
     * recorded. object.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.last_payment_error.anyOf[2] (Value): null.
     * object.latest_order_payment_attempt_id (Optional): string or null. The order payment attempt
     * that most recently used this payment intent. Start times count to the second; of attempts
     * that started in the same second, the one with the highest order_payment_attempt_id is named.
     * `null` when no attempt has used it yet; omitted for payment intents without an order. It
     * changes only when an attempt starts using this payment intent, which advances version.
     * Returned with merchant credentials; omitted with buyer and checkout credentials. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.merchant_id (Optional): string. Merchant that owns
     * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_net_money
     * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount in
     * add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded and
     * fully_reversed splits commit their whole amount; payment_not_completed and install_revoked
     * cancellations commit nothing. A failed split commits only money already taken back before
     * failure; its remainder returns to the collecting merchant. Refunds do not reduce the
     * commitment. Later merchant assessments and credits are separate balance effects. Absent
     * until Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.metadata (Required): {@link MetadataMap}. Caller-owned metadata. Keys starting
     * with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. The
     * linked order. Returned only with expand=order. Present only when `expand` includes `order`;
     * `null` when expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. Order this payment
     * intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.overcapture (Optional): {@link
     * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization, and
     * the most it can collect. Present once a payment with request_overcapture true is authorized.
     * Read it to show the limit; capture enforces it. Whether one capture can collect more than
     * the authorization. object.payment_flow (Required): string. How the payment was started.
     * Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * object.payment_intent_id (Required): string. Flint payment intent ID. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_options (Required): Array of string. Payment
     * options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present". object.payment_options[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * object.payment_source (Optional): {@link PaymentSourceSummary}. Summary of the card or bank
     * account used for the payment. Absent until a payment source is attached. A summary of the
     * payment source used for a payment, by funding-method family, with card or bank account
     * display details. object.platform_fee (Optional): {@link PaymentIntentPlatformFee}. The
     * platform fee a partner app charges on this payment, when it created the payment with an
     * install token and a fee. Absent when the payment carries none. Returned only to merchant
     * credentials; omitted for buyer and checkout credentials. The platform fee a partner app
     * charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees,
     * and merchant_net_money subtracts it. object.processing_fee_money (Optional): {@link
     * MoneyValue}. Flint's all-in processing fee for this payment. It is the complete price Flint
     * charges to process the payment, never a provider cost passed through. The fee is final once
     * the card payment is captured or the ACH payment succeeds; canceled payments and failures
     * before success have none, except a payment intent canceled with cancellation_reason
     * payment_returned, which shows the fee charged at capture on the charge Flint is returning.
     * Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax
     * fees are itemized separately in add_on_fees. Your net for the payment is captured_money
     * minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint
     * has determined and verified the fee. If Flint can't verify it when you read the payment
     * intent, the field is omitted rather than shown unverified; read the payment intent again
     * later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reader_id (Optional): string. The reader the payment is or was last presented on. Set
     * when Flint presents it and kept afterward. While processing or requires_action with a
     * reader_id, the payment is on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * object.receipt_email (Optional): string or null. Email address for this payment's receipt.
     * When it isn't set, Flint uses the customer's email. Format: email. maxLength: 255. Example:
     * "buyer@example.com". object.refund_expires_at (Required): string or null. Last time Flint
     * can refund this payment through the original payment method. A refund submitted at exactly
     * this time is accepted; after it, refunds through the original payment method are refused.
     * Today only Affirm has a refund window: 120 days after the payment settles. `null` when the
     * method has no refund window, the payment has not succeeded with captured money, or its
     * capture time is missing. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refund_status (Optional): string. How much of captured_money has been refunded,
     * including value issued as store credit, based on refunded_money. Value enum: "none",
     * "partially_refunded", "refunded". object.refunded_money (Optional): {@link MoneyValue}.
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.released_money (Optional): {@link MoneyValue}. The part of the authorization
     * returned to the buyer without being charged: the uncaptured remainder after a partial
     * capture, or the whole authorization after a cancellation or expiry. It was never collected,
     * so it needs no refund and can't be captured later. Zero after a capture at or above the
     * authorization. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.request_overcapture (Optional):
     * boolean. Whether one capture may collect more than the authorization where the card network
     * allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and
     * checkout credentials. object.return_id (Optional): string. Flint return ID associated with
     * this payment, when present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. The return resolution whose balance this
     * payment collects. Set for exchange balances and corrections. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.risk (Optional): {@link PaymentRisk} or null.
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. object.risk.anyOf[1] (Value): {@link
     * PaymentRisk}. The risk assessment for a payment intent, with its risk level, score, outcome,
     * and any matched rule or review. object.risk.anyOf[2] (Value): null.
     * object.selected_payment_option (Optional): string. The payment option the most recent
     * confirmation used. Absent until the payment intent is first confirmed. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". object.splits (Optional):
     * Array of {@link PaymentSplit}. Top-level PaymentSplit children in their current state,
     * embedded whole. Empty when the payment has no splits. Child changes do not send
     * payment_intent.updated. Omitted for buyer and checkout credentials. object.splits[] (Value):
     * {@link PaymentSplit}. A top-level child of a payment intent dividing the collecting
     * merchant's payment funds with one seller. Both parties read this same resource with their
     * own credentials. object.statement_descriptor (Required): string or null. The text shown on
     * the buyer's card or bank statement for this payment. `null` until the charge is created.
     * `null` when the provider supplies no descriptor. Frozen when the charge is created.
     * object.status (Required): string. Lifecycle status. requires_payment_method covers both a
     * new payment intent and one whose last attempt failed, so read last_payment_error with it.
     * succeeded, canceled, and expired are final. Refunds and disputes never change status. Value
     * enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". object.subscription_id (Optional):
     * string. The subscription whose billing charged this payment: its first charge, a renewal, a
     * retry or a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.support_reference (Required): string. Opaque
     * payment reference to share with merchant support. Do not parse its format.
     * object.supported_actions (Required): Array of string. Actions the payment intent's current
     * state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action
     * that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused
     * because of something outside the payment intent: an open risk review, an order payment
     * attempt that is using this payment, a closed order, or the merchant's account. An
     * order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay.
     * The list changes only when the payment intent changes. Always empty for buyer credentials.
     * New actions may be added. [] enum: "confirm", "capture", "cancel".
     * object.supported_actions[] (Value): string. Value enum: "confirm", "capture", "cancel".
     * object.tip_money (Optional): {@link MoneyValue} or null. Portion of amount_money that is a
     * tip. Uses amount_money's currency and is at most amount_money. object.tip_money.anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.tip_money.anyOf[2] (Value): null. object.transaction_purpose
     * (Optional): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other". object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`. add_on_fees (Optional):
         * Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic tax fees
         * collected with this payment. Available to the merchant only. Empty until fees settle or
         * when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint
         * has determined and verified the fee. If Flint can't verify it when you read the payment
         * intent, the field is omitted rather than shown unverified; read the payment intent again
         * later. add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment
         * intent, with the fee type and amount. amount_money (Required): {@link MoneyValue}. The
         * amount requested from the buyer, including any tip_money. Capturing doesn't change it:
         * after a partial capture it still shows the requested amount, and captured_money shows
         * what was collected. On a standalone payment intent, PATCH can change it only before the
         * first confirmation attempt. An amount_money or tip_money change that leaves too little
         * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * authorization_expires_at (Optional): string. Effective Flint deadline to capture a
         * manual-capture hold: the earlier of the provider capture deadline and any order resource
         * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may
         * end earlier. Capture is refused at or after this time, even while status is
         * requires_capture. Omitted until a hold is placed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". authorized_at (Optional): string. When the processor authorized
         * the payment. Absent until then. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * authorized_money (Optional): {@link MoneyValue}. The amount the processor authorized. It
         * always equals amount_money and doesn't change once set, even when a capture collects
         * more. On a payment intent canceled with cancellation_reason payment_returned, it equals
         * the authorization Flint released instead. Absent until the payment is authorized, and on
         * payments canceled before authorization. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. cancellation_reason (Optional): string.
         * Flint-normalized reason the payment intent was canceled. Present only while status is
         * canceled. Unknown processor values are returned as payment_canceled. Value enum:
         * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
         * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
         * "payment_returned". capturable_money (Optional): {@link MoneyValue}. The part of the
         * authorization you can still capture. Positive only while status is requires_capture, and
         * zero after you capture or cancel or the authorization expires. The authorization lapses
         * at authorization_expires_at, and a capture attempted after that fails even if this is
         * positive. Absent until the payment is authorized. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. capture_method (Optional): string. When
         * money is collected. Defaults to automatic. Value enum: "automatic", "manual".
         * captured_at (Optional): string. When money was captured. For automatic capture, this is
         * when the payment succeeded. Absent until capture. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". captured_money (Optional): {@link MoneyValue}. The amount
         * collected from the buyer, including captured_tip_money. Reconcile revenue and print
         * receipts from this amount, not amount_money. Zero while a hold is open, and positive
         * whenever status is succeeded. After an overcapture it is above authorized_money. Also
         * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
         * captured the money and is returning it through a refund with reason payment_returned.
         * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. captured_tip_money (Optional): {@link MoneyValue}. The part of
         * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the
         * tip the authorization carried, at most captured_money. tip_money keeps the tip the
         * authorization carried. Refunds return it last. Absent until the payment is captured.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * checkout_session_id (Optional): string. Flint checkout session ID associated with this
         * payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". created_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. The linked customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. Customer linked to this payment intent. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_presence (Required): string. Whether the
         * customer was present for the most recent confirmation. absent means Flint charged a
         * saved card without them, as a merchant-initiated payment on its stored credential.
         * Subscription renewals and automatic invoice charges are absent, and other payments are
         * absent only when confirmed or paid with customer_presence absent. A customer who pays
         * any of them with a card they enter makes it present. Each confirmation sets it again.
         * Value enum: "present", "absent". dispute_status (Optional): string. Dispute state of
         * this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values
         * track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with
         * GET /v1/disputes for its deadline and evidence. Value enum: "none",
         * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
         * "under_review", "won", "lost", "prevented", "other". external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". fulfillment_hold (Optional):
         * {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint to pause
         * fulfillment for this payment. While its status is active, open fulfillments on the order
         * are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent
         * when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with
         * the reason, the action required, and whether the hold is active or released. invoice
         * (Optional): {@link ExpandedInvoiceSummary} or null. The linked invoice. Returned only
         * with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded
         * and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. Invoice this payment
         * intent collects, when it pays an invoice. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * last_payment_error (Required): {@link PaymentErrorSummary} or null. Most recent payment
         * error. Null when no payment error is recorded. last_payment_error.anyOf[1] (Value):
         * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
         * normalized error code, a message, the failure time, and remediation.
         * last_payment_error.anyOf[2] (Value): null. latest_order_payment_attempt_id (Optional):
         * string or null. The order payment attempt that most recently used this payment intent.
         * Start times count to the second; of attempts that started in the same second, the one
         * with the highest order_payment_attempt_id is named. `null` when no attempt has used it
         * yet; omitted for payment intents without an order. It changes only when an attempt
         * starts using this payment intent, which advances version. Returned with merchant
         * credentials; omitted with buyer and checkout credentials. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". merchant_id (Optional): string. Merchant that owns
         * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_net_money
         * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount
         * in add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded
         * and fully_reversed splits commit their whole amount; payment_not_completed and
         * install_revoked cancellations commit nothing. A failed split commits only money already
         * taken back before failure; its remainder returns to the collecting merchant. Refunds do
         * not reduce the commitment. Later merchant assessments and credits are separate balance
         * effects. Absent until Flint has determined and verified the fee. If Flint can't verify
         * it when you read the payment intent, the field is omitted rather than shown unverified;
         * read the payment intent again later. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. The linked order. Returned only with
         * expand=order. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. Order this payment intent belongs to. Create it through the
         * order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
         * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
         * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". overcapture (Optional): {@link
         * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization,
         * and the most it can collect. Present once a payment with request_overcapture true is
         * authorized. Read it to show the limit; capture enforces it. Whether one capture can
         * collect more than the authorization. payment_flow (Required): string. How the payment
         * was started. Fixed when the payment intent is created. Value enum: "checkout",
         * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
         * "virtual_terminal", "api". payment_intent_id (Required): string. Flint payment intent
         * ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_options (Required): Array of
         * string. Payment options the buyer can use for this payment. [] enum: "card",
         * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". payment_options[]
         * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
         * "card_present". payment_source (Optional): {@link PaymentSourceSummary}. Summary of the
         * card or bank account used for the payment. Absent until a payment source is attached. A
         * summary of the payment source used for a payment, by funding-method family, with card or
         * bank account display details. platform_fee (Optional): {@link PaymentIntentPlatformFee}.
         * The platform fee a partner app charges on this payment, when it created the payment with
         * an install token and a fee. Absent when the payment carries none. Returned only to
         * merchant credentials; omitted for buyer and checkout credentials. The platform fee a
         * partner app charges on this payment. The merchant pays it beside processing_fee_money
         * and add_on_fees, and merchant_net_money subtracts it. processing_fee_money (Optional):
         * {@link MoneyValue}. Flint's all-in processing fee for this payment. It is the complete
         * price Flint charges to process the payment, never a provider cost passed through. The
         * fee is final once the card payment is captured or the ACH payment succeeds; canceled
         * payments and failures before success have none, except a payment intent canceled with
         * cancellation_reason payment_returned, which shows the fee charged at capture on the
         * charge Flint is returning. Flint returns that fee to your balance separately. Invoice,
         * subscription, and automatic tax fees are itemized separately in add_on_fees. Your net
         * for the payment is captured_money minus this fee and the add-on fees. Refunds do not
         * return or revise it. Absent until Flint has determined and verified the fee. If Flint
         * can't verify it when you read the payment intent, the field is omitted rather than shown
         * unverified; read the payment intent again later. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reader_id (Optional): string. The reader the
         * payment is or was last presented on. Set when Flint presents it and kept afterward.
         * While processing or requires_action with a reader_id, the payment is on that reader now.
         * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". receipt_email (Optional): string or null.
         * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
         * email. Format: email. maxLength: 255. Example: "buyer@example.com". refund_expires_at
         * (Required): string or null. Last time Flint can refund this payment through the original
         * payment method. A refund submitted at exactly this time is accepted; after it, refunds
         * through the original payment method are refused. Today only Affirm has a refund window:
         * 120 days after the payment settles. `null` when the method has no refund window, the
         * payment has not succeeded with captured money, or its capture time is missing. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refund_status (Optional): string. How much
         * of captured_money has been refunded, including value issued as store credit, based on
         * refunded_money. Value enum: "none", "partially_refunded", "refunded". refunded_money
         * (Optional): {@link MoneyValue}. Total refunded against captured_money, including value
         * issued as store credit and processor refunds still pending. Failed and canceled refunds
         * aren't counted. Zero when nothing has been refunded. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. released_money (Optional): {@link
         * MoneyValue}. The part of the authorization returned to the buyer without being charged:
         * the uncaptured remainder after a partial capture, or the whole authorization after a
         * cancellation or expiry. It was never collected, so it needs no refund and can't be
         * captured later. Zero after a capture at or above the authorization. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. request_overcapture (Optional): boolean. Whether one capture may
         * collect more than the authorization where the card network allows it. Fixed at create.
         * Always present with merchant credentials; omitted with buyer and checkout credentials.
         * return_id (Optional): string. Flint return ID associated with this payment, when
         * present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional):
         * string. The return resolution whose balance this payment collects. Set for exchange
         * balances and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". risk (Optional):
         * {@link PaymentRisk} or null. Risk assessment. Always present with merchant credentials;
         * null when no risk assessment is available. Omitted with the checkout credential.
         * risk.anyOf[1] (Value): {@link PaymentRisk}. The risk assessment for a payment intent,
         * with its risk level, score, outcome, and any matched rule or review. risk.anyOf[2]
         * (Value): null. selected_payment_option (Optional): string. The payment option the most
         * recent confirmation used. Absent until the payment intent is first confirmed. Value
         * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". splits
         * (Optional): Array of {@link PaymentSplit}. Top-level PaymentSplit children in their
         * current state, embedded whole. Empty when the payment has no splits. Child changes do
         * not send payment_intent.updated. Omitted for buyer and checkout credentials. splits[]
         * (Value): {@link PaymentSplit}. A top-level child of a payment intent dividing the
         * collecting merchant's payment funds with one seller. Both parties read this same
         * resource with their own credentials. statement_descriptor (Required): string or null.
         * The text shown on the buyer's card or bank statement for this payment. `null` until the
         * charge is created. `null` when the provider supplies no descriptor. Frozen when the
         * charge is created. status (Required): string. Lifecycle status. requires_payment_method
         * covers both a new payment intent and one whose last attempt failed, so read
         * last_payment_error with it. succeeded, canceled, and expired are final. Refunds and
         * disputes never change status. Value enum: "requires_payment_method",
         * "requires_confirmation", "requires_action", "processing", "requires_capture",
         * "canceled", "succeeded", "expired". subscription_id (Optional): string. The subscription
         * whose billing charged this payment: its first charge, a renewal, a retry or a setup fee.
         * Not set for the checkout payment that created a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". support_reference (Required): string. Opaque payment
         * reference to share with merchant support. Do not parse its format. supported_actions
         * (Required): Array of string. Actions the payment intent's current state accepts, each a
         * POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
         * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
         * something outside the payment intent: an open risk review, an order payment attempt that
         * is using this payment, a closed order, or the merchant's account. An order-owned payment
         * intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes
         * only when the payment intent changes. Always empty for buyer credentials. New actions
         * may be added. [] enum: "confirm", "capture", "cancel". supported_actions[] (Value):
         * string. Value enum: "confirm", "capture", "cancel". tip_money (Optional): {@link
         * MoneyValue} or null. Portion of amount_money that is a tip. Uses amount_money's currency
         * and is at most amount_money. tip_money.anyOf[1] (Value): {@link MoneyValue}. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * tip_money.anyOf[2] (Value): null. transaction_purpose (Optional): string. Why a bank
         * debit is taken. Set only when payment_options includes ach_debit, and fixed once the
         * payment intent exists. Value enum: "goods", "services", "other". updated_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Itemized invoice, subscription, and automatic tax fees collected with this payment.
             * Available to the merchant only. Empty until fees settle or when no add-ons apply.
             * Refunds do not return or revise these fees. Absent until Flint has determined and
             * verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * [] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment intent, with the
             * fee type and amount.
             */
            "add_on_fees"?: Array<PaymentAddOnFee>;
            /**
             * The amount requested from the buyer, including any tip_money. Capturing doesn't
             * change it: after a partial capture it still shows the requested amount, and
             * captured_money shows what was collected. On a standalone payment intent, PATCH can
             * change it only before the first confirmation attempt. An amount_money or tip_money
             * change that leaves too little for stored splits returns LIMIT_EXCEEDED at the
             * changed field with minimum_money. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Effective Flint deadline to capture a manual-capture hold: the earlier of the
             * provider capture deadline and any order resource guarantee. Order guarantees last at
             * most 24 hours from the payment attempt start and may end earlier. Capture is refused
             * at or after this time, even while status is requires_capture. Omitted until a hold
             * is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "authorization_expires_at"?: string;
            /**
             * When the processor authorized the payment. Absent until then. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "authorized_at"?: string;
            /**
             * The amount the processor authorized. It always equals amount_money and doesn't
             * change once set, even when a capture collects more. On a payment intent canceled
             * with cancellation_reason payment_returned, it equals the authorization Flint
             * released instead. Absent until the payment is authorized, and on payments canceled
             * before authorization. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "authorized_money"?: MoneyValue;
            /**
             * Flint-normalized reason the payment intent was canceled. Present only while status
             * is canceled. Unknown processor values are returned as payment_canceled. Value enum:
             * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
             * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
             * "payment_returned".
             */
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            /**
             * The part of the authorization you can still capture. Positive only while status is
             * requires_capture, and zero after you capture or cancel or the authorization expires.
             * The authorization lapses at authorization_expires_at, and a capture attempted after
             * that fails even if this is positive. Absent until the payment is authorized.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "capturable_money"?: MoneyValue;
            /**
             * When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
             */
            "capture_method"?: "automatic" | "manual" | (string & {});
            /**
             * When money was captured. For automatic capture, this is when the payment succeeded.
             * Absent until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "captured_at"?: string;
            /**
             * The amount collected from the buyer, including captured_tip_money. Reconcile revenue
             * and print receipts from this amount, not amount_money. Zero while a hold is open,
             * and positive whenever status is succeeded. After an overcapture it is above
             * authorized_money. Also positive on a payment intent canceled with
             * cancellation_reason payment_returned: Flint captured the money and is returning it
             * through a refund with reason payment_returned. processing_fee_money,
             * merchant_net_money, and refunds are based on it. Absent until the payment is
             * authorized. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_money"?: MoneyValue;
            /**
             * The part of captured_money that is a tip: the capture's tip_money when it sent one,
             * otherwise the tip the authorization carried, at most captured_money. tip_money keeps
             * the tip the authorization carried. Refunds return it last. Absent until the payment
             * is captured. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_tip_money"?: MoneyValue;
            /**
             * Flint checkout session ID associated with this payment, when present. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at"?: string;
            /**
             * The linked customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer. anyOf[1]
             * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
             * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Whether the customer was present for the most recent confirmation. absent means
             * Flint charged a saved card without them, as a merchant-initiated payment on its
             * stored credential. Subscription renewals and automatic invoice charges are absent,
             * and other payments are absent only when confirmed or paid with customer_presence
             * absent. A customer who pays any of them with a card they enter makes it present.
             * Each confirmation sets it again. Value enum: "present", "absent".
             */
            "customer_presence": "present" | "absent" | (string & {});
            /**
             * Dispute state of this payment. none means no dispute or inquiry is open or recorded.
             * The inquiry_ values track an issuer inquiry or early warning that isn't a
             * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other".
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
             * Caller-owned identifier for this resource in an external system. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string | null;
            /**
             * Present when a payment provider asked Flint to pause fulfillment for this payment.
             * While its status is active, open fulfillments on the order are on hold with reason
             * payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts
             * and when it lifts. A hold on fulfillment tied to a payment, with the reason, the
             * action required, and whether the hold is active or released.
             */
            "fulfillment_hold"?: PaymentFulfillmentHold;
            /**
             * The linked invoice. Returned only with expand=invoice. Present only when `expand`
             * includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1]
             * (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields, including
             * status, due date, and paid, outstanding, and refunded amounts, returned when the
             * invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * Invoice this payment intent collects, when it pays an invoice. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value):
             * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
             * normalized error code, a message, the failure time, and remediation. anyOf[2]
             * (Value): null.
             */
            "last_payment_error": ((PaymentErrorSummary) | (null));
            /**
             * The order payment attempt that most recently used this payment intent. Start times
             * count to the second; of attempts that started in the same second, the one with the
             * highest order_payment_attempt_id is named. `null` when no attempt has used it yet;
             * omitted for payment intents without an order. It changes only when an attempt starts
             * using this payment intent, which advances version. Returned with merchant
             * credentials; omitted with buyer and checkout credentials. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "latest_order_payment_attempt_id"?: string | null;
            /**
             * Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Captured amount minus processing_fee_money, every amount in add_on_fees,
             * platform_fee.amount_money, and each split commitment. Live, succeeded and
             * fully_reversed splits commit their whole amount; payment_not_completed and
             * install_revoked cancellations commit nothing. A failed split commits only money
             * already taken back before failure; its remainder returns to the collecting merchant.
             * Refunds do not reduce the commitment. Later merchant assessments and credits are
             * separate balance effects. Absent until Flint has determined and verified the fee. If
             * Flint can't verify it when you read the payment intent, the field is omitted rather
             * than shown unverified; read the payment intent again later. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "merchant_net_money"?: MoneyValue;
            /**
             * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't
             * returned. Caller-owned key-value data stored on a resource. Keys starting with
             * flint_ are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The linked order. Returned only with expand=order. Present only when `expand`
             * includes `order`; `null` when expanded and there is no related order. anyOf[1]
             * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
             * payment and refund status, and pricing and settlement amounts, returned when the
             * order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order this payment intent belongs to. Create it through the order and confirm it
             * with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
             * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
             * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Whether one capture can collect more than the authorization, and the most it can
             * collect. Present once a payment with request_overcapture true is authorized. Read it
             * to show the limit; capture enforces it. Whether one capture can collect more than
             * the authorization.
             */
            "overcapture"?: PaymentIntentOvercapture;
            /**
             * How the payment was started. Fixed when the payment intent is created. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
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
            /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
             * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum:
             * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
             */
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            /**
             * Summary of the card or bank account used for the payment. Absent until a payment
             * source is attached. A summary of the payment source used for a payment, by
             * funding-method family, with card or bank account display details.
             */
            "payment_source"?: PaymentSourceSummary;
            /**
             * The platform fee a partner app charges on this payment, when it created the payment
             * with an install token and a fee. Absent when the payment carries none. Returned only
             * to merchant credentials; omitted for buyer and checkout credentials. The platform
             * fee a partner app charges on this payment. The merchant pays it beside
             * processing_fee_money and add_on_fees, and merchant_net_money subtracts it.
             */
            "platform_fee"?: PaymentIntentPlatformFee;
            /**
             * Flint's all-in processing fee for this payment. It is the complete price Flint
             * charges to process the payment, never a provider cost passed through. The fee is
             * final once the card payment is captured or the ACH payment succeeds; canceled
             * payments and failures before success have none, except a payment intent canceled
             * with cancellation_reason payment_returned, which shows the fee charged at capture on
             * the charge Flint is returning. Flint returns that fee to your balance separately.
             * Invoice, subscription, and automatic tax fees are itemized separately in
             * add_on_fees. Your net for the payment is captured_money minus this fee and the
             * add-on fees. Refunds do not return or revise it. Absent until Flint has determined
             * and verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "processing_fee_money"?: MoneyValue;
            /**
             * The reader the payment is or was last presented on. Set when Flint presents it and
             * kept afterward. While processing or requires_action with a reader_id, the payment is
             * on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
             */
            "reader_id"?: string;
            /**
             * Email address for this payment's receipt. When it isn't set, Flint uses the
             * customer's email. Format: email. maxLength: 255. Example: "buyer@example.com".
             */
            "receipt_email"?: string | null;
            /**
             * Last time Flint can refund this payment through the original payment method. A
             * refund submitted at exactly this time is accepted; after it, refunds through the
             * original payment method are refused. Today only Affirm has a refund window: 120 days
             * after the payment settles. `null` when the method has no refund window, the payment
             * has not succeeded with captured money, or its capture time is missing. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refund_expires_at": string | null;
            /**
             * How much of captured_money has been refunded, including value issued as store
             * credit, based on refunded_money. Value enum: "none", "partially_refunded",
             * "refunded".
             */
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Total refunded against captured_money, including value issued as store credit and
             * processor refunds still pending. Failed and canceled refunds aren't counted. Zero
             * when nothing has been refunded. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money"?: MoneyValue;
            /**
             * The part of the authorization returned to the buyer without being charged: the
             * uncaptured remainder after a partial capture, or the whole authorization after a
             * cancellation or expiry. It was never collected, so it needs no refund and can't be
             * captured later. Zero after a capture at or above the authorization. Absent until the
             * payment is authorized. Monetary amount represented as integer minor units plus an
             * ISO 4217 currency code.
             */
            "released_money"?: MoneyValue;
            /**
             * Whether one capture may collect more than the authorization where the card network
             * allows it. Fixed at create. Always present with merchant credentials; omitted with
             * buyer and checkout credentials.
             */
            "request_overcapture"?: boolean;
            /**
             * Flint return ID associated with this payment, when present. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * The return resolution whose balance this payment collects. Set for exchange balances
             * and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Risk assessment. Always present with merchant credentials; null when no risk
             * assessment is available. Omitted with the checkout credential. anyOf[1] (Value):
             * {@link PaymentRisk}. The risk assessment for a payment intent, with its risk level,
             * score, outcome, and any matched rule or review. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentRisk) | (null));
            /**
             * The payment option the most recent confirmation used. Absent until the payment
             * intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm",
             * "ach_debit", "card_present".
             */
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            /**
             * Top-level PaymentSplit children in their current state, embedded whole. Empty when
             * the payment has no splits. Child changes do not send payment_intent.updated. Omitted
             * for buyer and checkout credentials. [] (Value): {@link PaymentSplit}. A top-level
             * child of a payment intent dividing the collecting merchant's payment funds with one
             * seller. Both parties read this same resource with their own credentials.
             */
            "splits"?: Array<PaymentSplit>;
            /**
             * The text shown on the buyer's card or bank statement for this payment. `null` until
             * the charge is created. `null` when the provider supplies no descriptor. Frozen when
             * the charge is created.
             */
            "statement_descriptor": string | null;
            /**
             * Lifecycle status. requires_payment_method covers both a new payment intent and one
             * whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
             * and expired are final. Refunds and disputes never change status. Value enum:
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
             * The subscription whose billing charged this payment: its first charge, a renewal, a
             * retry or a setup fee. Not set for the checkout payment that created a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /** Opaque payment reference to share with merchant support. Do not parse its format. */
            "support_reference": string;
            /**
             * Actions the payment intent's current state accepts, each a POST to
             * /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
             * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
             * something outside the payment intent: an open risk review, an order payment attempt
             * that is using this payment, a closed order, or the merchant's account. An
             * order-owned payment intent never lists confirm; pay it with POST
             * /v1/orders/{order_id}/pay. The list changes only when the payment intent changes.
             * Always empty for buyer credentials. New actions may be added. [] enum: "confirm",
             * "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture", "cancel".
             */
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            /**
             * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
             * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "tip_money"?: ((MoneyValue) | (null));
            /**
             * Why a bank debit is taken. Set only when payment_options includes ach_debit, and
             * fixed once the payment intent exists. Value enum: "goods", "services", "other".
             */
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.authorization_expiring". */
    "event_type"?: "payment_intent.authorization_expiring";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.authorization_expiring` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type PaymentIntentAuthorizationExpiringMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`. object.add_on_fees
     * (Optional): Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic
     * tax fees collected with this payment. Available to the merchant only. Empty until fees
     * settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until
     * Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. object.add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a
     * payment intent, with the fee type and amount. object.amount_money (Required): {@link
     * MoneyValue}. The amount requested from the buyer, including any tip_money. Capturing doesn't
     * change it: after a partial capture it still shows the requested amount, and captured_money
     * shows what was collected. On a standalone payment intent, PATCH can change it only before
     * the first confirmation attempt. An amount_money or tip_money change that leaves too little
     * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.authorization_expires_at (Optional): string. Effective Flint deadline to capture a
     * manual-capture hold: the earlier of the provider capture deadline and any order resource
     * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end
     * earlier. Capture is refused at or after this time, even while status is requires_capture.
     * Omitted until a hold is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.authorized_at (Optional): string. When the processor authorized the payment. Absent
     * until then. Format: date-time. Example: "2026-08-02T16:00:00Z". object.authorized_money
     * (Optional): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set, even when a capture collects more. On a payment
     * intent canceled with cancellation_reason payment_returned, it equals the authorization Flint
     * released instead. Absent until the payment is authorized, and on payments canceled before
     * authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.cancellation_reason (Optional): string. Flint-normalized reason the payment
     * intent was canceled. Present only while status is canceled. Unknown processor values are
     * returned as payment_canceled. Value enum: "requested_by_customer", "duplicate",
     * "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed",
     * "payment_canceled", "payment_returned". object.capturable_money (Optional): {@link
     * MoneyValue}. The part of the authorization you can still capture. Positive only while status
     * is requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.capture_method
     * (Optional): string. When money is collected. Defaults to automatic. Value enum: "automatic",
     * "manual". object.captured_at (Optional): string. When money was captured. For automatic
     * capture, this is when the payment succeeded. Absent until capture. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.captured_money (Optional): {@link MoneyValue}. The
     * amount collected from the buyer, including captured_tip_money. Reconcile revenue and print
     * receipts from this amount, not amount_money. Zero while a hold is open, and positive
     * whenever status is succeeded. After an overcapture it is above authorized_money. Also
     * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
     * captured the money and is returning it through a refund with reason payment_returned.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.captured_tip_money (Optional): {@link MoneyValue}. The part of
     * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip
     * the authorization carried, at most captured_money. tip_money keeps the tip the authorization
     * carried. Refunds return it last. Absent until the payment is captured. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.checkout_session_id (Optional): string. Flint checkout session ID associated with
     * this payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.created_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. The linked customer.
     * Returned only with expand=customer. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. Customer linked to this payment intent. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_presence (Required): string. Whether the
     * customer was present for the most recent confirmation. absent means Flint charged a saved
     * card without them, as a merchant-initiated payment on its stored credential. Subscription
     * renewals and automatic invoice charges are absent, and other payments are absent only when
     * confirmed or paid with customer_presence absent. A customer who pays any of them with a card
     * they enter makes it present. Each confirmation sets it again. Value enum: "present",
     * "absent". object.dispute_status (Optional): string. Dispute state of this payment. none
     * means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry
     * or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its
     * deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string or null. Caller-owned identifier for this
     * resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.fulfillment_hold (Optional): {@link PaymentFulfillmentHold}. Present when a payment
     * provider asked Flint to pause fulfillment for this payment. While its status is active, open
     * fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. The linked invoice. Returned only with expand=invoice. Present only when `expand`
     * includes `invoice`; `null` when expanded and there is no related invoice.
     * object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice.anyOf[2] (Value): null. object.invoice_id
     * (Optional): string. Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.last_payment_error (Required): {@link
     * PaymentErrorSummary} or null. Most recent payment error. Null when no payment error is
     * recorded. object.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.last_payment_error.anyOf[2] (Value): null.
     * object.latest_order_payment_attempt_id (Optional): string or null. The order payment attempt
     * that most recently used this payment intent. Start times count to the second; of attempts
     * that started in the same second, the one with the highest order_payment_attempt_id is named.
     * `null` when no attempt has used it yet; omitted for payment intents without an order. It
     * changes only when an attempt starts using this payment intent, which advances version.
     * Returned with merchant credentials; omitted with buyer and checkout credentials. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.merchant_id (Optional): string. Merchant that owns
     * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_net_money
     * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount in
     * add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded and
     * fully_reversed splits commit their whole amount; payment_not_completed and install_revoked
     * cancellations commit nothing. A failed split commits only money already taken back before
     * failure; its remainder returns to the collecting merchant. Refunds do not reduce the
     * commitment. Later merchant assessments and credits are separate balance effects. Absent
     * until Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.metadata (Required): {@link MetadataMap}. Caller-owned metadata. Keys starting
     * with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. The
     * linked order. Returned only with expand=order. Present only when `expand` includes `order`;
     * `null` when expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. Order this payment
     * intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.overcapture (Optional): {@link
     * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization, and
     * the most it can collect. Present once a payment with request_overcapture true is authorized.
     * Read it to show the limit; capture enforces it. Whether one capture can collect more than
     * the authorization. object.payment_flow (Required): string. How the payment was started.
     * Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * object.payment_intent_id (Required): string. Flint payment intent ID. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_options (Required): Array of string. Payment
     * options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present". object.payment_options[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * object.payment_source (Optional): {@link PaymentSourceSummary}. Summary of the card or bank
     * account used for the payment. Absent until a payment source is attached. A summary of the
     * payment source used for a payment, by funding-method family, with card or bank account
     * display details. object.platform_fee (Optional): {@link PaymentIntentPlatformFee}. The
     * platform fee a partner app charges on this payment, when it created the payment with an
     * install token and a fee. Absent when the payment carries none. Returned only to merchant
     * credentials; omitted for buyer and checkout credentials. The platform fee a partner app
     * charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees,
     * and merchant_net_money subtracts it. object.processing_fee_money (Optional): {@link
     * MoneyValue}. Flint's all-in processing fee for this payment. It is the complete price Flint
     * charges to process the payment, never a provider cost passed through. The fee is final once
     * the card payment is captured or the ACH payment succeeds; canceled payments and failures
     * before success have none, except a payment intent canceled with cancellation_reason
     * payment_returned, which shows the fee charged at capture on the charge Flint is returning.
     * Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax
     * fees are itemized separately in add_on_fees. Your net for the payment is captured_money
     * minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint
     * has determined and verified the fee. If Flint can't verify it when you read the payment
     * intent, the field is omitted rather than shown unverified; read the payment intent again
     * later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reader_id (Optional): string. The reader the payment is or was last presented on. Set
     * when Flint presents it and kept afterward. While processing or requires_action with a
     * reader_id, the payment is on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * object.receipt_email (Optional): string or null. Email address for this payment's receipt.
     * When it isn't set, Flint uses the customer's email. Format: email. maxLength: 255. Example:
     * "buyer@example.com". object.refund_expires_at (Required): string or null. Last time Flint
     * can refund this payment through the original payment method. A refund submitted at exactly
     * this time is accepted; after it, refunds through the original payment method are refused.
     * Today only Affirm has a refund window: 120 days after the payment settles. `null` when the
     * method has no refund window, the payment has not succeeded with captured money, or its
     * capture time is missing. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refund_status (Optional): string. How much of captured_money has been refunded,
     * including value issued as store credit, based on refunded_money. Value enum: "none",
     * "partially_refunded", "refunded". object.refunded_money (Optional): {@link MoneyValue}.
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.released_money (Optional): {@link MoneyValue}. The part of the authorization
     * returned to the buyer without being charged: the uncaptured remainder after a partial
     * capture, or the whole authorization after a cancellation or expiry. It was never collected,
     * so it needs no refund and can't be captured later. Zero after a capture at or above the
     * authorization. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.request_overcapture (Optional):
     * boolean. Whether one capture may collect more than the authorization where the card network
     * allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and
     * checkout credentials. object.return_id (Optional): string. Flint return ID associated with
     * this payment, when present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. The return resolution whose balance this
     * payment collects. Set for exchange balances and corrections. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.risk (Optional): {@link PaymentRisk} or null.
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. object.risk.anyOf[1] (Value): {@link
     * PaymentRisk}. The risk assessment for a payment intent, with its risk level, score, outcome,
     * and any matched rule or review. object.risk.anyOf[2] (Value): null.
     * object.selected_payment_option (Optional): string. The payment option the most recent
     * confirmation used. Absent until the payment intent is first confirmed. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". object.splits (Optional):
     * Array of {@link PaymentSplit}. Top-level PaymentSplit children in their current state,
     * embedded whole. Empty when the payment has no splits. Child changes do not send
     * payment_intent.updated. Omitted for buyer and checkout credentials. object.splits[] (Value):
     * {@link PaymentSplit}. A top-level child of a payment intent dividing the collecting
     * merchant's payment funds with one seller. Both parties read this same resource with their
     * own credentials. object.statement_descriptor (Required): string or null. The text shown on
     * the buyer's card or bank statement for this payment. `null` until the charge is created.
     * `null` when the provider supplies no descriptor. Frozen when the charge is created.
     * object.status (Required): string. Lifecycle status. requires_payment_method covers both a
     * new payment intent and one whose last attempt failed, so read last_payment_error with it.
     * succeeded, canceled, and expired are final. Refunds and disputes never change status. Value
     * enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". object.subscription_id (Optional):
     * string. The subscription whose billing charged this payment: its first charge, a renewal, a
     * retry or a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.support_reference (Required): string. Opaque
     * payment reference to share with merchant support. Do not parse its format.
     * object.supported_actions (Required): Array of string. Actions the payment intent's current
     * state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action
     * that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused
     * because of something outside the payment intent: an open risk review, an order payment
     * attempt that is using this payment, a closed order, or the merchant's account. An
     * order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay.
     * The list changes only when the payment intent changes. Always empty for buyer credentials.
     * New actions may be added. [] enum: "confirm", "capture", "cancel".
     * object.supported_actions[] (Value): string. Value enum: "confirm", "capture", "cancel".
     * object.tip_money (Optional): {@link MoneyValue} or null. Portion of amount_money that is a
     * tip. Uses amount_money's currency and is at most amount_money. object.tip_money.anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.tip_money.anyOf[2] (Value): null. object.transaction_purpose
     * (Optional): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other". object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`. add_on_fees (Optional):
         * Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic tax fees
         * collected with this payment. Available to the merchant only. Empty until fees settle or
         * when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint
         * has determined and verified the fee. If Flint can't verify it when you read the payment
         * intent, the field is omitted rather than shown unverified; read the payment intent again
         * later. add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment
         * intent, with the fee type and amount. amount_money (Required): {@link MoneyValue}. The
         * amount requested from the buyer, including any tip_money. Capturing doesn't change it:
         * after a partial capture it still shows the requested amount, and captured_money shows
         * what was collected. On a standalone payment intent, PATCH can change it only before the
         * first confirmation attempt. An amount_money or tip_money change that leaves too little
         * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * authorization_expires_at (Optional): string. Effective Flint deadline to capture a
         * manual-capture hold: the earlier of the provider capture deadline and any order resource
         * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may
         * end earlier. Capture is refused at or after this time, even while status is
         * requires_capture. Omitted until a hold is placed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". authorized_at (Optional): string. When the processor authorized
         * the payment. Absent until then. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * authorized_money (Optional): {@link MoneyValue}. The amount the processor authorized. It
         * always equals amount_money and doesn't change once set, even when a capture collects
         * more. On a payment intent canceled with cancellation_reason payment_returned, it equals
         * the authorization Flint released instead. Absent until the payment is authorized, and on
         * payments canceled before authorization. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. cancellation_reason (Optional): string.
         * Flint-normalized reason the payment intent was canceled. Present only while status is
         * canceled. Unknown processor values are returned as payment_canceled. Value enum:
         * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
         * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
         * "payment_returned". capturable_money (Optional): {@link MoneyValue}. The part of the
         * authorization you can still capture. Positive only while status is requires_capture, and
         * zero after you capture or cancel or the authorization expires. The authorization lapses
         * at authorization_expires_at, and a capture attempted after that fails even if this is
         * positive. Absent until the payment is authorized. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. capture_method (Optional): string. When
         * money is collected. Defaults to automatic. Value enum: "automatic", "manual".
         * captured_at (Optional): string. When money was captured. For automatic capture, this is
         * when the payment succeeded. Absent until capture. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". captured_money (Optional): {@link MoneyValue}. The amount
         * collected from the buyer, including captured_tip_money. Reconcile revenue and print
         * receipts from this amount, not amount_money. Zero while a hold is open, and positive
         * whenever status is succeeded. After an overcapture it is above authorized_money. Also
         * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
         * captured the money and is returning it through a refund with reason payment_returned.
         * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. captured_tip_money (Optional): {@link MoneyValue}. The part of
         * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the
         * tip the authorization carried, at most captured_money. tip_money keeps the tip the
         * authorization carried. Refunds return it last. Absent until the payment is captured.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * checkout_session_id (Optional): string. Flint checkout session ID associated with this
         * payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". created_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. The linked customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. Customer linked to this payment intent. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_presence (Required): string. Whether the
         * customer was present for the most recent confirmation. absent means Flint charged a
         * saved card without them, as a merchant-initiated payment on its stored credential.
         * Subscription renewals and automatic invoice charges are absent, and other payments are
         * absent only when confirmed or paid with customer_presence absent. A customer who pays
         * any of them with a card they enter makes it present. Each confirmation sets it again.
         * Value enum: "present", "absent". dispute_status (Optional): string. Dispute state of
         * this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values
         * track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with
         * GET /v1/disputes for its deadline and evidence. Value enum: "none",
         * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
         * "under_review", "won", "lost", "prevented", "other". external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". fulfillment_hold (Optional):
         * {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint to pause
         * fulfillment for this payment. While its status is active, open fulfillments on the order
         * are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent
         * when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with
         * the reason, the action required, and whether the hold is active or released. invoice
         * (Optional): {@link ExpandedInvoiceSummary} or null. The linked invoice. Returned only
         * with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded
         * and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. Invoice this payment
         * intent collects, when it pays an invoice. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * last_payment_error (Required): {@link PaymentErrorSummary} or null. Most recent payment
         * error. Null when no payment error is recorded. last_payment_error.anyOf[1] (Value):
         * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
         * normalized error code, a message, the failure time, and remediation.
         * last_payment_error.anyOf[2] (Value): null. latest_order_payment_attempt_id (Optional):
         * string or null. The order payment attempt that most recently used this payment intent.
         * Start times count to the second; of attempts that started in the same second, the one
         * with the highest order_payment_attempt_id is named. `null` when no attempt has used it
         * yet; omitted for payment intents without an order. It changes only when an attempt
         * starts using this payment intent, which advances version. Returned with merchant
         * credentials; omitted with buyer and checkout credentials. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". merchant_id (Optional): string. Merchant that owns
         * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_net_money
         * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount
         * in add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded
         * and fully_reversed splits commit their whole amount; payment_not_completed and
         * install_revoked cancellations commit nothing. A failed split commits only money already
         * taken back before failure; its remainder returns to the collecting merchant. Refunds do
         * not reduce the commitment. Later merchant assessments and credits are separate balance
         * effects. Absent until Flint has determined and verified the fee. If Flint can't verify
         * it when you read the payment intent, the field is omitted rather than shown unverified;
         * read the payment intent again later. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. The linked order. Returned only with
         * expand=order. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. Order this payment intent belongs to. Create it through the
         * order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
         * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
         * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". overcapture (Optional): {@link
         * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization,
         * and the most it can collect. Present once a payment with request_overcapture true is
         * authorized. Read it to show the limit; capture enforces it. Whether one capture can
         * collect more than the authorization. payment_flow (Required): string. How the payment
         * was started. Fixed when the payment intent is created. Value enum: "checkout",
         * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
         * "virtual_terminal", "api". payment_intent_id (Required): string. Flint payment intent
         * ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_options (Required): Array of
         * string. Payment options the buyer can use for this payment. [] enum: "card",
         * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". payment_options[]
         * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
         * "card_present". payment_source (Optional): {@link PaymentSourceSummary}. Summary of the
         * card or bank account used for the payment. Absent until a payment source is attached. A
         * summary of the payment source used for a payment, by funding-method family, with card or
         * bank account display details. platform_fee (Optional): {@link PaymentIntentPlatformFee}.
         * The platform fee a partner app charges on this payment, when it created the payment with
         * an install token and a fee. Absent when the payment carries none. Returned only to
         * merchant credentials; omitted for buyer and checkout credentials. The platform fee a
         * partner app charges on this payment. The merchant pays it beside processing_fee_money
         * and add_on_fees, and merchant_net_money subtracts it. processing_fee_money (Optional):
         * {@link MoneyValue}. Flint's all-in processing fee for this payment. It is the complete
         * price Flint charges to process the payment, never a provider cost passed through. The
         * fee is final once the card payment is captured or the ACH payment succeeds; canceled
         * payments and failures before success have none, except a payment intent canceled with
         * cancellation_reason payment_returned, which shows the fee charged at capture on the
         * charge Flint is returning. Flint returns that fee to your balance separately. Invoice,
         * subscription, and automatic tax fees are itemized separately in add_on_fees. Your net
         * for the payment is captured_money minus this fee and the add-on fees. Refunds do not
         * return or revise it. Absent until Flint has determined and verified the fee. If Flint
         * can't verify it when you read the payment intent, the field is omitted rather than shown
         * unverified; read the payment intent again later. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reader_id (Optional): string. The reader the
         * payment is or was last presented on. Set when Flint presents it and kept afterward.
         * While processing or requires_action with a reader_id, the payment is on that reader now.
         * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". receipt_email (Optional): string or null.
         * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
         * email. Format: email. maxLength: 255. Example: "buyer@example.com". refund_expires_at
         * (Required): string or null. Last time Flint can refund this payment through the original
         * payment method. A refund submitted at exactly this time is accepted; after it, refunds
         * through the original payment method are refused. Today only Affirm has a refund window:
         * 120 days after the payment settles. `null` when the method has no refund window, the
         * payment has not succeeded with captured money, or its capture time is missing. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refund_status (Optional): string. How much
         * of captured_money has been refunded, including value issued as store credit, based on
         * refunded_money. Value enum: "none", "partially_refunded", "refunded". refunded_money
         * (Optional): {@link MoneyValue}. Total refunded against captured_money, including value
         * issued as store credit and processor refunds still pending. Failed and canceled refunds
         * aren't counted. Zero when nothing has been refunded. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. released_money (Optional): {@link
         * MoneyValue}. The part of the authorization returned to the buyer without being charged:
         * the uncaptured remainder after a partial capture, or the whole authorization after a
         * cancellation or expiry. It was never collected, so it needs no refund and can't be
         * captured later. Zero after a capture at or above the authorization. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. request_overcapture (Optional): boolean. Whether one capture may
         * collect more than the authorization where the card network allows it. Fixed at create.
         * Always present with merchant credentials; omitted with buyer and checkout credentials.
         * return_id (Optional): string. Flint return ID associated with this payment, when
         * present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional):
         * string. The return resolution whose balance this payment collects. Set for exchange
         * balances and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". risk (Optional):
         * {@link PaymentRisk} or null. Risk assessment. Always present with merchant credentials;
         * null when no risk assessment is available. Omitted with the checkout credential.
         * risk.anyOf[1] (Value): {@link PaymentRisk}. The risk assessment for a payment intent,
         * with its risk level, score, outcome, and any matched rule or review. risk.anyOf[2]
         * (Value): null. selected_payment_option (Optional): string. The payment option the most
         * recent confirmation used. Absent until the payment intent is first confirmed. Value
         * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". splits
         * (Optional): Array of {@link PaymentSplit}. Top-level PaymentSplit children in their
         * current state, embedded whole. Empty when the payment has no splits. Child changes do
         * not send payment_intent.updated. Omitted for buyer and checkout credentials. splits[]
         * (Value): {@link PaymentSplit}. A top-level child of a payment intent dividing the
         * collecting merchant's payment funds with one seller. Both parties read this same
         * resource with their own credentials. statement_descriptor (Required): string or null.
         * The text shown on the buyer's card or bank statement for this payment. `null` until the
         * charge is created. `null` when the provider supplies no descriptor. Frozen when the
         * charge is created. status (Required): string. Lifecycle status. requires_payment_method
         * covers both a new payment intent and one whose last attempt failed, so read
         * last_payment_error with it. succeeded, canceled, and expired are final. Refunds and
         * disputes never change status. Value enum: "requires_payment_method",
         * "requires_confirmation", "requires_action", "processing", "requires_capture",
         * "canceled", "succeeded", "expired". subscription_id (Optional): string. The subscription
         * whose billing charged this payment: its first charge, a renewal, a retry or a setup fee.
         * Not set for the checkout payment that created a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". support_reference (Required): string. Opaque payment
         * reference to share with merchant support. Do not parse its format. supported_actions
         * (Required): Array of string. Actions the payment intent's current state accepts, each a
         * POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
         * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
         * something outside the payment intent: an open risk review, an order payment attempt that
         * is using this payment, a closed order, or the merchant's account. An order-owned payment
         * intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes
         * only when the payment intent changes. Always empty for buyer credentials. New actions
         * may be added. [] enum: "confirm", "capture", "cancel". supported_actions[] (Value):
         * string. Value enum: "confirm", "capture", "cancel". tip_money (Optional): {@link
         * MoneyValue} or null. Portion of amount_money that is a tip. Uses amount_money's currency
         * and is at most amount_money. tip_money.anyOf[1] (Value): {@link MoneyValue}. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * tip_money.anyOf[2] (Value): null. transaction_purpose (Optional): string. Why a bank
         * debit is taken. Set only when payment_options includes ach_debit, and fixed once the
         * payment intent exists. Value enum: "goods", "services", "other". updated_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Itemized invoice, subscription, and automatic tax fees collected with this payment.
             * Available to the merchant only. Empty until fees settle or when no add-ons apply.
             * Refunds do not return or revise these fees. Absent until Flint has determined and
             * verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * [] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment intent, with the
             * fee type and amount.
             */
            "add_on_fees"?: Array<PaymentAddOnFee>;
            /**
             * The amount requested from the buyer, including any tip_money. Capturing doesn't
             * change it: after a partial capture it still shows the requested amount, and
             * captured_money shows what was collected. On a standalone payment intent, PATCH can
             * change it only before the first confirmation attempt. An amount_money or tip_money
             * change that leaves too little for stored splits returns LIMIT_EXCEEDED at the
             * changed field with minimum_money. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Effective Flint deadline to capture a manual-capture hold: the earlier of the
             * provider capture deadline and any order resource guarantee. Order guarantees last at
             * most 24 hours from the payment attempt start and may end earlier. Capture is refused
             * at or after this time, even while status is requires_capture. Omitted until a hold
             * is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "authorization_expires_at"?: string;
            /**
             * When the processor authorized the payment. Absent until then. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "authorized_at"?: string;
            /**
             * The amount the processor authorized. It always equals amount_money and doesn't
             * change once set, even when a capture collects more. On a payment intent canceled
             * with cancellation_reason payment_returned, it equals the authorization Flint
             * released instead. Absent until the payment is authorized, and on payments canceled
             * before authorization. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "authorized_money"?: MoneyValue;
            /**
             * Flint-normalized reason the payment intent was canceled. Present only while status
             * is canceled. Unknown processor values are returned as payment_canceled. Value enum:
             * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
             * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
             * "payment_returned".
             */
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            /**
             * The part of the authorization you can still capture. Positive only while status is
             * requires_capture, and zero after you capture or cancel or the authorization expires.
             * The authorization lapses at authorization_expires_at, and a capture attempted after
             * that fails even if this is positive. Absent until the payment is authorized.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "capturable_money"?: MoneyValue;
            /**
             * When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
             */
            "capture_method"?: "automatic" | "manual" | (string & {});
            /**
             * When money was captured. For automatic capture, this is when the payment succeeded.
             * Absent until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "captured_at"?: string;
            /**
             * The amount collected from the buyer, including captured_tip_money. Reconcile revenue
             * and print receipts from this amount, not amount_money. Zero while a hold is open,
             * and positive whenever status is succeeded. After an overcapture it is above
             * authorized_money. Also positive on a payment intent canceled with
             * cancellation_reason payment_returned: Flint captured the money and is returning it
             * through a refund with reason payment_returned. processing_fee_money,
             * merchant_net_money, and refunds are based on it. Absent until the payment is
             * authorized. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_money"?: MoneyValue;
            /**
             * The part of captured_money that is a tip: the capture's tip_money when it sent one,
             * otherwise the tip the authorization carried, at most captured_money. tip_money keeps
             * the tip the authorization carried. Refunds return it last. Absent until the payment
             * is captured. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_tip_money"?: MoneyValue;
            /**
             * Flint checkout session ID associated with this payment, when present. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at"?: string;
            /**
             * The linked customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer. anyOf[1]
             * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
             * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Whether the customer was present for the most recent confirmation. absent means
             * Flint charged a saved card without them, as a merchant-initiated payment on its
             * stored credential. Subscription renewals and automatic invoice charges are absent,
             * and other payments are absent only when confirmed or paid with customer_presence
             * absent. A customer who pays any of them with a card they enter makes it present.
             * Each confirmation sets it again. Value enum: "present", "absent".
             */
            "customer_presence": "present" | "absent" | (string & {});
            /**
             * Dispute state of this payment. none means no dispute or inquiry is open or recorded.
             * The inquiry_ values track an issuer inquiry or early warning that isn't a
             * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other".
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
             * Caller-owned identifier for this resource in an external system. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string | null;
            /**
             * Present when a payment provider asked Flint to pause fulfillment for this payment.
             * While its status is active, open fulfillments on the order are on hold with reason
             * payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts
             * and when it lifts. A hold on fulfillment tied to a payment, with the reason, the
             * action required, and whether the hold is active or released.
             */
            "fulfillment_hold"?: PaymentFulfillmentHold;
            /**
             * The linked invoice. Returned only with expand=invoice. Present only when `expand`
             * includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1]
             * (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields, including
             * status, due date, and paid, outstanding, and refunded amounts, returned when the
             * invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * Invoice this payment intent collects, when it pays an invoice. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value):
             * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
             * normalized error code, a message, the failure time, and remediation. anyOf[2]
             * (Value): null.
             */
            "last_payment_error": ((PaymentErrorSummary) | (null));
            /**
             * The order payment attempt that most recently used this payment intent. Start times
             * count to the second; of attempts that started in the same second, the one with the
             * highest order_payment_attempt_id is named. `null` when no attempt has used it yet;
             * omitted for payment intents without an order. It changes only when an attempt starts
             * using this payment intent, which advances version. Returned with merchant
             * credentials; omitted with buyer and checkout credentials. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "latest_order_payment_attempt_id"?: string | null;
            /**
             * Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Captured amount minus processing_fee_money, every amount in add_on_fees,
             * platform_fee.amount_money, and each split commitment. Live, succeeded and
             * fully_reversed splits commit their whole amount; payment_not_completed and
             * install_revoked cancellations commit nothing. A failed split commits only money
             * already taken back before failure; its remainder returns to the collecting merchant.
             * Refunds do not reduce the commitment. Later merchant assessments and credits are
             * separate balance effects. Absent until Flint has determined and verified the fee. If
             * Flint can't verify it when you read the payment intent, the field is omitted rather
             * than shown unverified; read the payment intent again later. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "merchant_net_money"?: MoneyValue;
            /**
             * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't
             * returned. Caller-owned key-value data stored on a resource. Keys starting with
             * flint_ are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The linked order. Returned only with expand=order. Present only when `expand`
             * includes `order`; `null` when expanded and there is no related order. anyOf[1]
             * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
             * payment and refund status, and pricing and settlement amounts, returned when the
             * order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order this payment intent belongs to. Create it through the order and confirm it
             * with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
             * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
             * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Whether one capture can collect more than the authorization, and the most it can
             * collect. Present once a payment with request_overcapture true is authorized. Read it
             * to show the limit; capture enforces it. Whether one capture can collect more than
             * the authorization.
             */
            "overcapture"?: PaymentIntentOvercapture;
            /**
             * How the payment was started. Fixed when the payment intent is created. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
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
            /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
             * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum:
             * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
             */
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            /**
             * Summary of the card or bank account used for the payment. Absent until a payment
             * source is attached. A summary of the payment source used for a payment, by
             * funding-method family, with card or bank account display details.
             */
            "payment_source"?: PaymentSourceSummary;
            /**
             * The platform fee a partner app charges on this payment, when it created the payment
             * with an install token and a fee. Absent when the payment carries none. Returned only
             * to merchant credentials; omitted for buyer and checkout credentials. The platform
             * fee a partner app charges on this payment. The merchant pays it beside
             * processing_fee_money and add_on_fees, and merchant_net_money subtracts it.
             */
            "platform_fee"?: PaymentIntentPlatformFee;
            /**
             * Flint's all-in processing fee for this payment. It is the complete price Flint
             * charges to process the payment, never a provider cost passed through. The fee is
             * final once the card payment is captured or the ACH payment succeeds; canceled
             * payments and failures before success have none, except a payment intent canceled
             * with cancellation_reason payment_returned, which shows the fee charged at capture on
             * the charge Flint is returning. Flint returns that fee to your balance separately.
             * Invoice, subscription, and automatic tax fees are itemized separately in
             * add_on_fees. Your net for the payment is captured_money minus this fee and the
             * add-on fees. Refunds do not return or revise it. Absent until Flint has determined
             * and verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "processing_fee_money"?: MoneyValue;
            /**
             * The reader the payment is or was last presented on. Set when Flint presents it and
             * kept afterward. While processing or requires_action with a reader_id, the payment is
             * on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
             */
            "reader_id"?: string;
            /**
             * Email address for this payment's receipt. When it isn't set, Flint uses the
             * customer's email. Format: email. maxLength: 255. Example: "buyer@example.com".
             */
            "receipt_email"?: string | null;
            /**
             * Last time Flint can refund this payment through the original payment method. A
             * refund submitted at exactly this time is accepted; after it, refunds through the
             * original payment method are refused. Today only Affirm has a refund window: 120 days
             * after the payment settles. `null` when the method has no refund window, the payment
             * has not succeeded with captured money, or its capture time is missing. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refund_expires_at": string | null;
            /**
             * How much of captured_money has been refunded, including value issued as store
             * credit, based on refunded_money. Value enum: "none", "partially_refunded",
             * "refunded".
             */
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Total refunded against captured_money, including value issued as store credit and
             * processor refunds still pending. Failed and canceled refunds aren't counted. Zero
             * when nothing has been refunded. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money"?: MoneyValue;
            /**
             * The part of the authorization returned to the buyer without being charged: the
             * uncaptured remainder after a partial capture, or the whole authorization after a
             * cancellation or expiry. It was never collected, so it needs no refund and can't be
             * captured later. Zero after a capture at or above the authorization. Absent until the
             * payment is authorized. Monetary amount represented as integer minor units plus an
             * ISO 4217 currency code.
             */
            "released_money"?: MoneyValue;
            /**
             * Whether one capture may collect more than the authorization where the card network
             * allows it. Fixed at create. Always present with merchant credentials; omitted with
             * buyer and checkout credentials.
             */
            "request_overcapture"?: boolean;
            /**
             * Flint return ID associated with this payment, when present. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * The return resolution whose balance this payment collects. Set for exchange balances
             * and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Risk assessment. Always present with merchant credentials; null when no risk
             * assessment is available. Omitted with the checkout credential. anyOf[1] (Value):
             * {@link PaymentRisk}. The risk assessment for a payment intent, with its risk level,
             * score, outcome, and any matched rule or review. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentRisk) | (null));
            /**
             * The payment option the most recent confirmation used. Absent until the payment
             * intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm",
             * "ach_debit", "card_present".
             */
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            /**
             * Top-level PaymentSplit children in their current state, embedded whole. Empty when
             * the payment has no splits. Child changes do not send payment_intent.updated. Omitted
             * for buyer and checkout credentials. [] (Value): {@link PaymentSplit}. A top-level
             * child of a payment intent dividing the collecting merchant's payment funds with one
             * seller. Both parties read this same resource with their own credentials.
             */
            "splits"?: Array<PaymentSplit>;
            /**
             * The text shown on the buyer's card or bank statement for this payment. `null` until
             * the charge is created. `null` when the provider supplies no descriptor. Frozen when
             * the charge is created.
             */
            "statement_descriptor": string | null;
            /**
             * Lifecycle status. requires_payment_method covers both a new payment intent and one
             * whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
             * and expired are final. Refunds and disputes never change status. Value enum:
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
             * The subscription whose billing charged this payment: its first charge, a renewal, a
             * retry or a setup fee. Not set for the checkout payment that created a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /** Opaque payment reference to share with merchant support. Do not parse its format. */
            "support_reference": string;
            /**
             * Actions the payment intent's current state accepts, each a POST to
             * /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
             * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
             * something outside the payment intent: an open risk review, an order payment attempt
             * that is using this payment, a closed order, or the merchant's account. An
             * order-owned payment intent never lists confirm; pay it with POST
             * /v1/orders/{order_id}/pay. The list changes only when the payment intent changes.
             * Always empty for buyer credentials. New actions may be added. [] enum: "confirm",
             * "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture", "cancel".
             */
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            /**
             * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
             * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "tip_money"?: ((MoneyValue) | (null));
            /**
             * Why a bank debit is taken. Set only when payment_options includes ach_debit, and
             * fixed once the payment intent exists. Value enum: "goods", "services", "other".
             */
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.authorization_expiring". */
    "event_type"?: "payment_intent.authorization_expiring";
});
export type PaymentIntentCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_on_fees"?: Array<PaymentAddOnFee>;
            "amount_money": MoneyValue;
            "authorization_expires_at"?: string;
            "authorized_at"?: string;
            "authorized_money"?: MoneyValue;
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            "capturable_money"?: MoneyValue;
            "capture_method"?: "automatic" | "manual" | (string & {});
            "captured_at"?: string;
            "captured_money"?: MoneyValue;
            "captured_tip_money"?: MoneyValue;
            "checkout_session_id"?: string;
            "created_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_presence": "present" | "absent" | (string & {});
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
            "external_reference_id"?: string | null;
            "fulfillment_hold"?: PaymentFulfillmentHold;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "last_payment_error": ((PaymentErrorSummary) | (null));
            "latest_order_payment_attempt_id"?: string | null;
            "merchant_id"?: string;
            "merchant_net_money"?: MoneyValue;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "overcapture"?: PaymentIntentOvercapture;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent_id": string;
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            "payment_source"?: PaymentSourceSummary;
            "platform_fee"?: PaymentIntentPlatformFee;
            "processing_fee_money"?: MoneyValue;
            "reader_id"?: string;
            "receipt_email"?: string | null;
            "refund_expires_at": string | null;
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money"?: MoneyValue;
            "released_money"?: MoneyValue;
            "request_overcapture"?: boolean;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "risk"?: ((PaymentRisk) | (null));
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            "splits"?: Array<PaymentSplit>;
            "statement_descriptor": string | null;
            "status": "requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {});
            "subscription_id"?: string;
            "support_reference": string;
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            "tip_money"?: ((MoneyValue) | (null));
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_on_fees"?: Array<PaymentAddOnFee>;
            "amount_money": MoneyValue;
            "authorization_expires_at"?: string;
            "authorized_at"?: string;
            "authorized_money"?: MoneyValue;
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            "capturable_money"?: MoneyValue;
            "capture_method"?: "automatic" | "manual" | (string & {});
            "captured_at"?: string;
            "captured_money"?: MoneyValue;
            "captured_tip_money"?: MoneyValue;
            "checkout_session_id"?: string;
            "created_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_presence": "present" | "absent" | (string & {});
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
            "external_reference_id"?: string | null;
            "fulfillment_hold"?: PaymentFulfillmentHold;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "last_payment_error": ((PaymentErrorSummary) | (null));
            "latest_order_payment_attempt_id"?: string | null;
            "merchant_id"?: string;
            "merchant_net_money"?: MoneyValue;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "overcapture"?: PaymentIntentOvercapture;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent_id": string;
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            "payment_source"?: PaymentSourceSummary;
            "platform_fee"?: PaymentIntentPlatformFee;
            "processing_fee_money"?: MoneyValue;
            "reader_id"?: string;
            "receipt_email"?: string | null;
            "refund_expires_at": string | null;
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money"?: MoneyValue;
            "released_money"?: MoneyValue;
            "request_overcapture"?: boolean;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "risk"?: ((PaymentRisk) | (null));
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            "splits"?: Array<PaymentSplit>;
            "statement_descriptor": string | null;
            "status": "requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {});
            "subscription_id"?: string;
            "support_reference": string;
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            "tip_money"?: ((MoneyValue) | (null));
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`. object.add_on_fees
     * (Optional): Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic
     * tax fees collected with this payment. Available to the merchant only. Empty until fees
     * settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until
     * Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. object.add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a
     * payment intent, with the fee type and amount. object.amount_money (Required): {@link
     * MoneyValue}. The amount requested from the buyer, including any tip_money. Capturing doesn't
     * change it: after a partial capture it still shows the requested amount, and captured_money
     * shows what was collected. On a standalone payment intent, PATCH can change it only before
     * the first confirmation attempt. An amount_money or tip_money change that leaves too little
     * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.authorization_expires_at (Optional): string. Effective Flint deadline to capture a
     * manual-capture hold: the earlier of the provider capture deadline and any order resource
     * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end
     * earlier. Capture is refused at or after this time, even while status is requires_capture.
     * Omitted until a hold is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.authorized_at (Optional): string. When the processor authorized the payment. Absent
     * until then. Format: date-time. Example: "2026-08-02T16:00:00Z". object.authorized_money
     * (Optional): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set, even when a capture collects more. On a payment
     * intent canceled with cancellation_reason payment_returned, it equals the authorization Flint
     * released instead. Absent until the payment is authorized, and on payments canceled before
     * authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.cancellation_reason (Optional): string. Flint-normalized reason the payment
     * intent was canceled. Present only while status is canceled. Unknown processor values are
     * returned as payment_canceled. Value enum: "requested_by_customer", "duplicate",
     * "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed",
     * "payment_canceled", "payment_returned". object.capturable_money (Optional): {@link
     * MoneyValue}. The part of the authorization you can still capture. Positive only while status
     * is requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.capture_method
     * (Optional): string. When money is collected. Defaults to automatic. Value enum: "automatic",
     * "manual". object.captured_at (Optional): string. When money was captured. For automatic
     * capture, this is when the payment succeeded. Absent until capture. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.captured_money (Optional): {@link MoneyValue}. The
     * amount collected from the buyer, including captured_tip_money. Reconcile revenue and print
     * receipts from this amount, not amount_money. Zero while a hold is open, and positive
     * whenever status is succeeded. After an overcapture it is above authorized_money. Also
     * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
     * captured the money and is returning it through a refund with reason payment_returned.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.captured_tip_money (Optional): {@link MoneyValue}. The part of
     * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip
     * the authorization carried, at most captured_money. tip_money keeps the tip the authorization
     * carried. Refunds return it last. Absent until the payment is captured. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.checkout_session_id (Optional): string. Flint checkout session ID associated with
     * this payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.created_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. The linked customer.
     * Returned only with expand=customer. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. Customer linked to this payment intent. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_presence (Required): string. Whether the
     * customer was present for the most recent confirmation. absent means Flint charged a saved
     * card without them, as a merchant-initiated payment on its stored credential. Subscription
     * renewals and automatic invoice charges are absent, and other payments are absent only when
     * confirmed or paid with customer_presence absent. A customer who pays any of them with a card
     * they enter makes it present. Each confirmation sets it again. Value enum: "present",
     * "absent". object.dispute_status (Optional): string. Dispute state of this payment. none
     * means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry
     * or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its
     * deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string or null. Caller-owned identifier for this
     * resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.fulfillment_hold (Optional): {@link PaymentFulfillmentHold}. Present when a payment
     * provider asked Flint to pause fulfillment for this payment. While its status is active, open
     * fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. The linked invoice. Returned only with expand=invoice. Present only when `expand`
     * includes `invoice`; `null` when expanded and there is no related invoice.
     * object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice.anyOf[2] (Value): null. object.invoice_id
     * (Optional): string. Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.last_payment_error (Required): {@link
     * PaymentErrorSummary} or null. Most recent payment error. Null when no payment error is
     * recorded. object.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.last_payment_error.anyOf[2] (Value): null.
     * object.latest_order_payment_attempt_id (Optional): string or null. The order payment attempt
     * that most recently used this payment intent. Start times count to the second; of attempts
     * that started in the same second, the one with the highest order_payment_attempt_id is named.
     * `null` when no attempt has used it yet; omitted for payment intents without an order. It
     * changes only when an attempt starts using this payment intent, which advances version.
     * Returned with merchant credentials; omitted with buyer and checkout credentials. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.merchant_id (Optional): string. Merchant that owns
     * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_net_money
     * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount in
     * add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded and
     * fully_reversed splits commit their whole amount; payment_not_completed and install_revoked
     * cancellations commit nothing. A failed split commits only money already taken back before
     * failure; its remainder returns to the collecting merchant. Refunds do not reduce the
     * commitment. Later merchant assessments and credits are separate balance effects. Absent
     * until Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.metadata (Required): {@link MetadataMap}. Caller-owned metadata. Keys starting
     * with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. The
     * linked order. Returned only with expand=order. Present only when `expand` includes `order`;
     * `null` when expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. Order this payment
     * intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.overcapture (Optional): {@link
     * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization, and
     * the most it can collect. Present once a payment with request_overcapture true is authorized.
     * Read it to show the limit; capture enforces it. Whether one capture can collect more than
     * the authorization. object.payment_flow (Required): string. How the payment was started.
     * Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * object.payment_intent_id (Required): string. Flint payment intent ID. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_options (Required): Array of string. Payment
     * options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present". object.payment_options[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * object.payment_source (Optional): {@link PaymentSourceSummary}. Summary of the card or bank
     * account used for the payment. Absent until a payment source is attached. A summary of the
     * payment source used for a payment, by funding-method family, with card or bank account
     * display details. object.platform_fee (Optional): {@link PaymentIntentPlatformFee}. The
     * platform fee a partner app charges on this payment, when it created the payment with an
     * install token and a fee. Absent when the payment carries none. Returned only to merchant
     * credentials; omitted for buyer and checkout credentials. The platform fee a partner app
     * charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees,
     * and merchant_net_money subtracts it. object.processing_fee_money (Optional): {@link
     * MoneyValue}. Flint's all-in processing fee for this payment. It is the complete price Flint
     * charges to process the payment, never a provider cost passed through. The fee is final once
     * the card payment is captured or the ACH payment succeeds; canceled payments and failures
     * before success have none, except a payment intent canceled with cancellation_reason
     * payment_returned, which shows the fee charged at capture on the charge Flint is returning.
     * Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax
     * fees are itemized separately in add_on_fees. Your net for the payment is captured_money
     * minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint
     * has determined and verified the fee. If Flint can't verify it when you read the payment
     * intent, the field is omitted rather than shown unverified; read the payment intent again
     * later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reader_id (Optional): string. The reader the payment is or was last presented on. Set
     * when Flint presents it and kept afterward. While processing or requires_action with a
     * reader_id, the payment is on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * object.receipt_email (Optional): string or null. Email address for this payment's receipt.
     * When it isn't set, Flint uses the customer's email. Format: email. maxLength: 255. Example:
     * "buyer@example.com". object.refund_expires_at (Required): string or null. Last time Flint
     * can refund this payment through the original payment method. A refund submitted at exactly
     * this time is accepted; after it, refunds through the original payment method are refused.
     * Today only Affirm has a refund window: 120 days after the payment settles. `null` when the
     * method has no refund window, the payment has not succeeded with captured money, or its
     * capture time is missing. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refund_status (Optional): string. How much of captured_money has been refunded,
     * including value issued as store credit, based on refunded_money. Value enum: "none",
     * "partially_refunded", "refunded". object.refunded_money (Optional): {@link MoneyValue}.
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.released_money (Optional): {@link MoneyValue}. The part of the authorization
     * returned to the buyer without being charged: the uncaptured remainder after a partial
     * capture, or the whole authorization after a cancellation or expiry. It was never collected,
     * so it needs no refund and can't be captured later. Zero after a capture at or above the
     * authorization. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.request_overcapture (Optional):
     * boolean. Whether one capture may collect more than the authorization where the card network
     * allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and
     * checkout credentials. object.return_id (Optional): string. Flint return ID associated with
     * this payment, when present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. The return resolution whose balance this
     * payment collects. Set for exchange balances and corrections. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.risk (Optional): {@link PaymentRisk} or null.
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. object.risk.anyOf[1] (Value): {@link
     * PaymentRisk}. The risk assessment for a payment intent, with its risk level, score, outcome,
     * and any matched rule or review. object.risk.anyOf[2] (Value): null.
     * object.selected_payment_option (Optional): string. The payment option the most recent
     * confirmation used. Absent until the payment intent is first confirmed. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". object.splits (Optional):
     * Array of {@link PaymentSplit}. Top-level PaymentSplit children in their current state,
     * embedded whole. Empty when the payment has no splits. Child changes do not send
     * payment_intent.updated. Omitted for buyer and checkout credentials. object.splits[] (Value):
     * {@link PaymentSplit}. A top-level child of a payment intent dividing the collecting
     * merchant's payment funds with one seller. Both parties read this same resource with their
     * own credentials. object.statement_descriptor (Required): string or null. The text shown on
     * the buyer's card or bank statement for this payment. `null` until the charge is created.
     * `null` when the provider supplies no descriptor. Frozen when the charge is created.
     * object.status (Required): string. Lifecycle status. requires_payment_method covers both a
     * new payment intent and one whose last attempt failed, so read last_payment_error with it.
     * succeeded, canceled, and expired are final. Refunds and disputes never change status. Value
     * enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". object.subscription_id (Optional):
     * string. The subscription whose billing charged this payment: its first charge, a renewal, a
     * retry or a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.support_reference (Required): string. Opaque
     * payment reference to share with merchant support. Do not parse its format.
     * object.supported_actions (Required): Array of string. Actions the payment intent's current
     * state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action
     * that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused
     * because of something outside the payment intent: an open risk review, an order payment
     * attempt that is using this payment, a closed order, or the merchant's account. An
     * order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay.
     * The list changes only when the payment intent changes. Always empty for buyer credentials.
     * New actions may be added. [] enum: "confirm", "capture", "cancel".
     * object.supported_actions[] (Value): string. Value enum: "confirm", "capture", "cancel".
     * object.tip_money (Optional): {@link MoneyValue} or null. Portion of amount_money that is a
     * tip. Uses amount_money's currency and is at most amount_money. object.tip_money.anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.tip_money.anyOf[2] (Value): null. object.transaction_purpose
     * (Optional): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other". object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`. add_on_fees (Optional):
         * Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic tax fees
         * collected with this payment. Available to the merchant only. Empty until fees settle or
         * when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint
         * has determined and verified the fee. If Flint can't verify it when you read the payment
         * intent, the field is omitted rather than shown unverified; read the payment intent again
         * later. add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment
         * intent, with the fee type and amount. amount_money (Required): {@link MoneyValue}. The
         * amount requested from the buyer, including any tip_money. Capturing doesn't change it:
         * after a partial capture it still shows the requested amount, and captured_money shows
         * what was collected. On a standalone payment intent, PATCH can change it only before the
         * first confirmation attempt. An amount_money or tip_money change that leaves too little
         * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * authorization_expires_at (Optional): string. Effective Flint deadline to capture a
         * manual-capture hold: the earlier of the provider capture deadline and any order resource
         * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may
         * end earlier. Capture is refused at or after this time, even while status is
         * requires_capture. Omitted until a hold is placed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". authorized_at (Optional): string. When the processor authorized
         * the payment. Absent until then. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * authorized_money (Optional): {@link MoneyValue}. The amount the processor authorized. It
         * always equals amount_money and doesn't change once set, even when a capture collects
         * more. On a payment intent canceled with cancellation_reason payment_returned, it equals
         * the authorization Flint released instead. Absent until the payment is authorized, and on
         * payments canceled before authorization. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. cancellation_reason (Optional): string.
         * Flint-normalized reason the payment intent was canceled. Present only while status is
         * canceled. Unknown processor values are returned as payment_canceled. Value enum:
         * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
         * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
         * "payment_returned". capturable_money (Optional): {@link MoneyValue}. The part of the
         * authorization you can still capture. Positive only while status is requires_capture, and
         * zero after you capture or cancel or the authorization expires. The authorization lapses
         * at authorization_expires_at, and a capture attempted after that fails even if this is
         * positive. Absent until the payment is authorized. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. capture_method (Optional): string. When
         * money is collected. Defaults to automatic. Value enum: "automatic", "manual".
         * captured_at (Optional): string. When money was captured. For automatic capture, this is
         * when the payment succeeded. Absent until capture. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". captured_money (Optional): {@link MoneyValue}. The amount
         * collected from the buyer, including captured_tip_money. Reconcile revenue and print
         * receipts from this amount, not amount_money. Zero while a hold is open, and positive
         * whenever status is succeeded. After an overcapture it is above authorized_money. Also
         * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
         * captured the money and is returning it through a refund with reason payment_returned.
         * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. captured_tip_money (Optional): {@link MoneyValue}. The part of
         * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the
         * tip the authorization carried, at most captured_money. tip_money keeps the tip the
         * authorization carried. Refunds return it last. Absent until the payment is captured.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * checkout_session_id (Optional): string. Flint checkout session ID associated with this
         * payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". created_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. The linked customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. Customer linked to this payment intent. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_presence (Required): string. Whether the
         * customer was present for the most recent confirmation. absent means Flint charged a
         * saved card without them, as a merchant-initiated payment on its stored credential.
         * Subscription renewals and automatic invoice charges are absent, and other payments are
         * absent only when confirmed or paid with customer_presence absent. A customer who pays
         * any of them with a card they enter makes it present. Each confirmation sets it again.
         * Value enum: "present", "absent". dispute_status (Optional): string. Dispute state of
         * this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values
         * track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with
         * GET /v1/disputes for its deadline and evidence. Value enum: "none",
         * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
         * "under_review", "won", "lost", "prevented", "other". external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". fulfillment_hold (Optional):
         * {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint to pause
         * fulfillment for this payment. While its status is active, open fulfillments on the order
         * are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent
         * when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with
         * the reason, the action required, and whether the hold is active or released. invoice
         * (Optional): {@link ExpandedInvoiceSummary} or null. The linked invoice. Returned only
         * with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded
         * and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. Invoice this payment
         * intent collects, when it pays an invoice. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * last_payment_error (Required): {@link PaymentErrorSummary} or null. Most recent payment
         * error. Null when no payment error is recorded. last_payment_error.anyOf[1] (Value):
         * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
         * normalized error code, a message, the failure time, and remediation.
         * last_payment_error.anyOf[2] (Value): null. latest_order_payment_attempt_id (Optional):
         * string or null. The order payment attempt that most recently used this payment intent.
         * Start times count to the second; of attempts that started in the same second, the one
         * with the highest order_payment_attempt_id is named. `null` when no attempt has used it
         * yet; omitted for payment intents without an order. It changes only when an attempt
         * starts using this payment intent, which advances version. Returned with merchant
         * credentials; omitted with buyer and checkout credentials. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". merchant_id (Optional): string. Merchant that owns
         * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_net_money
         * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount
         * in add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded
         * and fully_reversed splits commit their whole amount; payment_not_completed and
         * install_revoked cancellations commit nothing. A failed split commits only money already
         * taken back before failure; its remainder returns to the collecting merchant. Refunds do
         * not reduce the commitment. Later merchant assessments and credits are separate balance
         * effects. Absent until Flint has determined and verified the fee. If Flint can't verify
         * it when you read the payment intent, the field is omitted rather than shown unverified;
         * read the payment intent again later. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. The linked order. Returned only with
         * expand=order. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. Order this payment intent belongs to. Create it through the
         * order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
         * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
         * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". overcapture (Optional): {@link
         * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization,
         * and the most it can collect. Present once a payment with request_overcapture true is
         * authorized. Read it to show the limit; capture enforces it. Whether one capture can
         * collect more than the authorization. payment_flow (Required): string. How the payment
         * was started. Fixed when the payment intent is created. Value enum: "checkout",
         * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
         * "virtual_terminal", "api". payment_intent_id (Required): string. Flint payment intent
         * ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_options (Required): Array of
         * string. Payment options the buyer can use for this payment. [] enum: "card",
         * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". payment_options[]
         * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
         * "card_present". payment_source (Optional): {@link PaymentSourceSummary}. Summary of the
         * card or bank account used for the payment. Absent until a payment source is attached. A
         * summary of the payment source used for a payment, by funding-method family, with card or
         * bank account display details. platform_fee (Optional): {@link PaymentIntentPlatformFee}.
         * The platform fee a partner app charges on this payment, when it created the payment with
         * an install token and a fee. Absent when the payment carries none. Returned only to
         * merchant credentials; omitted for buyer and checkout credentials. The platform fee a
         * partner app charges on this payment. The merchant pays it beside processing_fee_money
         * and add_on_fees, and merchant_net_money subtracts it. processing_fee_money (Optional):
         * {@link MoneyValue}. Flint's all-in processing fee for this payment. It is the complete
         * price Flint charges to process the payment, never a provider cost passed through. The
         * fee is final once the card payment is captured or the ACH payment succeeds; canceled
         * payments and failures before success have none, except a payment intent canceled with
         * cancellation_reason payment_returned, which shows the fee charged at capture on the
         * charge Flint is returning. Flint returns that fee to your balance separately. Invoice,
         * subscription, and automatic tax fees are itemized separately in add_on_fees. Your net
         * for the payment is captured_money minus this fee and the add-on fees. Refunds do not
         * return or revise it. Absent until Flint has determined and verified the fee. If Flint
         * can't verify it when you read the payment intent, the field is omitted rather than shown
         * unverified; read the payment intent again later. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reader_id (Optional): string. The reader the
         * payment is or was last presented on. Set when Flint presents it and kept afterward.
         * While processing or requires_action with a reader_id, the payment is on that reader now.
         * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". receipt_email (Optional): string or null.
         * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
         * email. Format: email. maxLength: 255. Example: "buyer@example.com". refund_expires_at
         * (Required): string or null. Last time Flint can refund this payment through the original
         * payment method. A refund submitted at exactly this time is accepted; after it, refunds
         * through the original payment method are refused. Today only Affirm has a refund window:
         * 120 days after the payment settles. `null` when the method has no refund window, the
         * payment has not succeeded with captured money, or its capture time is missing. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refund_status (Optional): string. How much
         * of captured_money has been refunded, including value issued as store credit, based on
         * refunded_money. Value enum: "none", "partially_refunded", "refunded". refunded_money
         * (Optional): {@link MoneyValue}. Total refunded against captured_money, including value
         * issued as store credit and processor refunds still pending. Failed and canceled refunds
         * aren't counted. Zero when nothing has been refunded. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. released_money (Optional): {@link
         * MoneyValue}. The part of the authorization returned to the buyer without being charged:
         * the uncaptured remainder after a partial capture, or the whole authorization after a
         * cancellation or expiry. It was never collected, so it needs no refund and can't be
         * captured later. Zero after a capture at or above the authorization. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. request_overcapture (Optional): boolean. Whether one capture may
         * collect more than the authorization where the card network allows it. Fixed at create.
         * Always present with merchant credentials; omitted with buyer and checkout credentials.
         * return_id (Optional): string. Flint return ID associated with this payment, when
         * present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional):
         * string. The return resolution whose balance this payment collects. Set for exchange
         * balances and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". risk (Optional):
         * {@link PaymentRisk} or null. Risk assessment. Always present with merchant credentials;
         * null when no risk assessment is available. Omitted with the checkout credential.
         * risk.anyOf[1] (Value): {@link PaymentRisk}. The risk assessment for a payment intent,
         * with its risk level, score, outcome, and any matched rule or review. risk.anyOf[2]
         * (Value): null. selected_payment_option (Optional): string. The payment option the most
         * recent confirmation used. Absent until the payment intent is first confirmed. Value
         * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". splits
         * (Optional): Array of {@link PaymentSplit}. Top-level PaymentSplit children in their
         * current state, embedded whole. Empty when the payment has no splits. Child changes do
         * not send payment_intent.updated. Omitted for buyer and checkout credentials. splits[]
         * (Value): {@link PaymentSplit}. A top-level child of a payment intent dividing the
         * collecting merchant's payment funds with one seller. Both parties read this same
         * resource with their own credentials. statement_descriptor (Required): string or null.
         * The text shown on the buyer's card or bank statement for this payment. `null` until the
         * charge is created. `null` when the provider supplies no descriptor. Frozen when the
         * charge is created. status (Required): string. Lifecycle status. requires_payment_method
         * covers both a new payment intent and one whose last attempt failed, so read
         * last_payment_error with it. succeeded, canceled, and expired are final. Refunds and
         * disputes never change status. Value enum: "requires_payment_method",
         * "requires_confirmation", "requires_action", "processing", "requires_capture",
         * "canceled", "succeeded", "expired". subscription_id (Optional): string. The subscription
         * whose billing charged this payment: its first charge, a renewal, a retry or a setup fee.
         * Not set for the checkout payment that created a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". support_reference (Required): string. Opaque payment
         * reference to share with merchant support. Do not parse its format. supported_actions
         * (Required): Array of string. Actions the payment intent's current state accepts, each a
         * POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
         * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
         * something outside the payment intent: an open risk review, an order payment attempt that
         * is using this payment, a closed order, or the merchant's account. An order-owned payment
         * intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes
         * only when the payment intent changes. Always empty for buyer credentials. New actions
         * may be added. [] enum: "confirm", "capture", "cancel". supported_actions[] (Value):
         * string. Value enum: "confirm", "capture", "cancel". tip_money (Optional): {@link
         * MoneyValue} or null. Portion of amount_money that is a tip. Uses amount_money's currency
         * and is at most amount_money. tip_money.anyOf[1] (Value): {@link MoneyValue}. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * tip_money.anyOf[2] (Value): null. transaction_purpose (Optional): string. Why a bank
         * debit is taken. Set only when payment_options includes ach_debit, and fixed once the
         * payment intent exists. Value enum: "goods", "services", "other". updated_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Itemized invoice, subscription, and automatic tax fees collected with this payment.
             * Available to the merchant only. Empty until fees settle or when no add-ons apply.
             * Refunds do not return or revise these fees. Absent until Flint has determined and
             * verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * [] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment intent, with the
             * fee type and amount.
             */
            "add_on_fees"?: Array<PaymentAddOnFee>;
            /**
             * The amount requested from the buyer, including any tip_money. Capturing doesn't
             * change it: after a partial capture it still shows the requested amount, and
             * captured_money shows what was collected. On a standalone payment intent, PATCH can
             * change it only before the first confirmation attempt. An amount_money or tip_money
             * change that leaves too little for stored splits returns LIMIT_EXCEEDED at the
             * changed field with minimum_money. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Effective Flint deadline to capture a manual-capture hold: the earlier of the
             * provider capture deadline and any order resource guarantee. Order guarantees last at
             * most 24 hours from the payment attempt start and may end earlier. Capture is refused
             * at or after this time, even while status is requires_capture. Omitted until a hold
             * is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "authorization_expires_at"?: string;
            /**
             * When the processor authorized the payment. Absent until then. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "authorized_at"?: string;
            /**
             * The amount the processor authorized. It always equals amount_money and doesn't
             * change once set, even when a capture collects more. On a payment intent canceled
             * with cancellation_reason payment_returned, it equals the authorization Flint
             * released instead. Absent until the payment is authorized, and on payments canceled
             * before authorization. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "authorized_money"?: MoneyValue;
            /**
             * Flint-normalized reason the payment intent was canceled. Present only while status
             * is canceled. Unknown processor values are returned as payment_canceled. Value enum:
             * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
             * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
             * "payment_returned".
             */
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            /**
             * The part of the authorization you can still capture. Positive only while status is
             * requires_capture, and zero after you capture or cancel or the authorization expires.
             * The authorization lapses at authorization_expires_at, and a capture attempted after
             * that fails even if this is positive. Absent until the payment is authorized.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "capturable_money"?: MoneyValue;
            /**
             * When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
             */
            "capture_method"?: "automatic" | "manual" | (string & {});
            /**
             * When money was captured. For automatic capture, this is when the payment succeeded.
             * Absent until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "captured_at"?: string;
            /**
             * The amount collected from the buyer, including captured_tip_money. Reconcile revenue
             * and print receipts from this amount, not amount_money. Zero while a hold is open,
             * and positive whenever status is succeeded. After an overcapture it is above
             * authorized_money. Also positive on a payment intent canceled with
             * cancellation_reason payment_returned: Flint captured the money and is returning it
             * through a refund with reason payment_returned. processing_fee_money,
             * merchant_net_money, and refunds are based on it. Absent until the payment is
             * authorized. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_money"?: MoneyValue;
            /**
             * The part of captured_money that is a tip: the capture's tip_money when it sent one,
             * otherwise the tip the authorization carried, at most captured_money. tip_money keeps
             * the tip the authorization carried. Refunds return it last. Absent until the payment
             * is captured. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_tip_money"?: MoneyValue;
            /**
             * Flint checkout session ID associated with this payment, when present. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at"?: string;
            /**
             * The linked customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer. anyOf[1]
             * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
             * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Whether the customer was present for the most recent confirmation. absent means
             * Flint charged a saved card without them, as a merchant-initiated payment on its
             * stored credential. Subscription renewals and automatic invoice charges are absent,
             * and other payments are absent only when confirmed or paid with customer_presence
             * absent. A customer who pays any of them with a card they enter makes it present.
             * Each confirmation sets it again. Value enum: "present", "absent".
             */
            "customer_presence": "present" | "absent" | (string & {});
            /**
             * Dispute state of this payment. none means no dispute or inquiry is open or recorded.
             * The inquiry_ values track an issuer inquiry or early warning that isn't a
             * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other".
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
             * Caller-owned identifier for this resource in an external system. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string | null;
            /**
             * Present when a payment provider asked Flint to pause fulfillment for this payment.
             * While its status is active, open fulfillments on the order are on hold with reason
             * payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts
             * and when it lifts. A hold on fulfillment tied to a payment, with the reason, the
             * action required, and whether the hold is active or released.
             */
            "fulfillment_hold"?: PaymentFulfillmentHold;
            /**
             * The linked invoice. Returned only with expand=invoice. Present only when `expand`
             * includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1]
             * (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields, including
             * status, due date, and paid, outstanding, and refunded amounts, returned when the
             * invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * Invoice this payment intent collects, when it pays an invoice. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value):
             * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
             * normalized error code, a message, the failure time, and remediation. anyOf[2]
             * (Value): null.
             */
            "last_payment_error": ((PaymentErrorSummary) | (null));
            /**
             * The order payment attempt that most recently used this payment intent. Start times
             * count to the second; of attempts that started in the same second, the one with the
             * highest order_payment_attempt_id is named. `null` when no attempt has used it yet;
             * omitted for payment intents without an order. It changes only when an attempt starts
             * using this payment intent, which advances version. Returned with merchant
             * credentials; omitted with buyer and checkout credentials. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "latest_order_payment_attempt_id"?: string | null;
            /**
             * Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Captured amount minus processing_fee_money, every amount in add_on_fees,
             * platform_fee.amount_money, and each split commitment. Live, succeeded and
             * fully_reversed splits commit their whole amount; payment_not_completed and
             * install_revoked cancellations commit nothing. A failed split commits only money
             * already taken back before failure; its remainder returns to the collecting merchant.
             * Refunds do not reduce the commitment. Later merchant assessments and credits are
             * separate balance effects. Absent until Flint has determined and verified the fee. If
             * Flint can't verify it when you read the payment intent, the field is omitted rather
             * than shown unverified; read the payment intent again later. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "merchant_net_money"?: MoneyValue;
            /**
             * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't
             * returned. Caller-owned key-value data stored on a resource. Keys starting with
             * flint_ are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The linked order. Returned only with expand=order. Present only when `expand`
             * includes `order`; `null` when expanded and there is no related order. anyOf[1]
             * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
             * payment and refund status, and pricing and settlement amounts, returned when the
             * order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order this payment intent belongs to. Create it through the order and confirm it
             * with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
             * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
             * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Whether one capture can collect more than the authorization, and the most it can
             * collect. Present once a payment with request_overcapture true is authorized. Read it
             * to show the limit; capture enforces it. Whether one capture can collect more than
             * the authorization.
             */
            "overcapture"?: PaymentIntentOvercapture;
            /**
             * How the payment was started. Fixed when the payment intent is created. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
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
            /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
             * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum:
             * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
             */
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            /**
             * Summary of the card or bank account used for the payment. Absent until a payment
             * source is attached. A summary of the payment source used for a payment, by
             * funding-method family, with card or bank account display details.
             */
            "payment_source"?: PaymentSourceSummary;
            /**
             * The platform fee a partner app charges on this payment, when it created the payment
             * with an install token and a fee. Absent when the payment carries none. Returned only
             * to merchant credentials; omitted for buyer and checkout credentials. The platform
             * fee a partner app charges on this payment. The merchant pays it beside
             * processing_fee_money and add_on_fees, and merchant_net_money subtracts it.
             */
            "platform_fee"?: PaymentIntentPlatformFee;
            /**
             * Flint's all-in processing fee for this payment. It is the complete price Flint
             * charges to process the payment, never a provider cost passed through. The fee is
             * final once the card payment is captured or the ACH payment succeeds; canceled
             * payments and failures before success have none, except a payment intent canceled
             * with cancellation_reason payment_returned, which shows the fee charged at capture on
             * the charge Flint is returning. Flint returns that fee to your balance separately.
             * Invoice, subscription, and automatic tax fees are itemized separately in
             * add_on_fees. Your net for the payment is captured_money minus this fee and the
             * add-on fees. Refunds do not return or revise it. Absent until Flint has determined
             * and verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "processing_fee_money"?: MoneyValue;
            /**
             * The reader the payment is or was last presented on. Set when Flint presents it and
             * kept afterward. While processing or requires_action with a reader_id, the payment is
             * on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
             */
            "reader_id"?: string;
            /**
             * Email address for this payment's receipt. When it isn't set, Flint uses the
             * customer's email. Format: email. maxLength: 255. Example: "buyer@example.com".
             */
            "receipt_email"?: string | null;
            /**
             * Last time Flint can refund this payment through the original payment method. A
             * refund submitted at exactly this time is accepted; after it, refunds through the
             * original payment method are refused. Today only Affirm has a refund window: 120 days
             * after the payment settles. `null` when the method has no refund window, the payment
             * has not succeeded with captured money, or its capture time is missing. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refund_expires_at": string | null;
            /**
             * How much of captured_money has been refunded, including value issued as store
             * credit, based on refunded_money. Value enum: "none", "partially_refunded",
             * "refunded".
             */
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Total refunded against captured_money, including value issued as store credit and
             * processor refunds still pending. Failed and canceled refunds aren't counted. Zero
             * when nothing has been refunded. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money"?: MoneyValue;
            /**
             * The part of the authorization returned to the buyer without being charged: the
             * uncaptured remainder after a partial capture, or the whole authorization after a
             * cancellation or expiry. It was never collected, so it needs no refund and can't be
             * captured later. Zero after a capture at or above the authorization. Absent until the
             * payment is authorized. Monetary amount represented as integer minor units plus an
             * ISO 4217 currency code.
             */
            "released_money"?: MoneyValue;
            /**
             * Whether one capture may collect more than the authorization where the card network
             * allows it. Fixed at create. Always present with merchant credentials; omitted with
             * buyer and checkout credentials.
             */
            "request_overcapture"?: boolean;
            /**
             * Flint return ID associated with this payment, when present. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * The return resolution whose balance this payment collects. Set for exchange balances
             * and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Risk assessment. Always present with merchant credentials; null when no risk
             * assessment is available. Omitted with the checkout credential. anyOf[1] (Value):
             * {@link PaymentRisk}. The risk assessment for a payment intent, with its risk level,
             * score, outcome, and any matched rule or review. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentRisk) | (null));
            /**
             * The payment option the most recent confirmation used. Absent until the payment
             * intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm",
             * "ach_debit", "card_present".
             */
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            /**
             * Top-level PaymentSplit children in their current state, embedded whole. Empty when
             * the payment has no splits. Child changes do not send payment_intent.updated. Omitted
             * for buyer and checkout credentials. [] (Value): {@link PaymentSplit}. A top-level
             * child of a payment intent dividing the collecting merchant's payment funds with one
             * seller. Both parties read this same resource with their own credentials.
             */
            "splits"?: Array<PaymentSplit>;
            /**
             * The text shown on the buyer's card or bank statement for this payment. `null` until
             * the charge is created. `null` when the provider supplies no descriptor. Frozen when
             * the charge is created.
             */
            "statement_descriptor": string | null;
            /**
             * Lifecycle status. requires_payment_method covers both a new payment intent and one
             * whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
             * and expired are final. Refunds and disputes never change status. Value enum:
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
             * The subscription whose billing charged this payment: its first charge, a renewal, a
             * retry or a setup fee. Not set for the checkout payment that created a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /** Opaque payment reference to share with merchant support. Do not parse its format. */
            "support_reference": string;
            /**
             * Actions the payment intent's current state accepts, each a POST to
             * /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
             * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
             * something outside the payment intent: an open risk review, an order payment attempt
             * that is using this payment, a closed order, or the merchant's account. An
             * order-owned payment intent never lists confirm; pay it with POST
             * /v1/orders/{order_id}/pay. The list changes only when the payment intent changes.
             * Always empty for buyer credentials. New actions may be added. [] enum: "confirm",
             * "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture", "cancel".
             */
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            /**
             * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
             * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "tip_money"?: ((MoneyValue) | (null));
            /**
             * Why a bank debit is taken. Set only when payment_options includes ach_debit, and
             * fixed once the payment intent exists. Value enum: "goods", "services", "other".
             */
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.canceled". */
    "event_type"?: "payment_intent.canceled";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.canceled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`. object.add_on_fees
     * (Optional): Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic
     * tax fees collected with this payment. Available to the merchant only. Empty until fees
     * settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until
     * Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. object.add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a
     * payment intent, with the fee type and amount. object.amount_money (Required): {@link
     * MoneyValue}. The amount requested from the buyer, including any tip_money. Capturing doesn't
     * change it: after a partial capture it still shows the requested amount, and captured_money
     * shows what was collected. On a standalone payment intent, PATCH can change it only before
     * the first confirmation attempt. An amount_money or tip_money change that leaves too little
     * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.authorization_expires_at (Optional): string. Effective Flint deadline to capture a
     * manual-capture hold: the earlier of the provider capture deadline and any order resource
     * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end
     * earlier. Capture is refused at or after this time, even while status is requires_capture.
     * Omitted until a hold is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.authorized_at (Optional): string. When the processor authorized the payment. Absent
     * until then. Format: date-time. Example: "2026-08-02T16:00:00Z". object.authorized_money
     * (Optional): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set, even when a capture collects more. On a payment
     * intent canceled with cancellation_reason payment_returned, it equals the authorization Flint
     * released instead. Absent until the payment is authorized, and on payments canceled before
     * authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.cancellation_reason (Optional): string. Flint-normalized reason the payment
     * intent was canceled. Present only while status is canceled. Unknown processor values are
     * returned as payment_canceled. Value enum: "requested_by_customer", "duplicate",
     * "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed",
     * "payment_canceled", "payment_returned". object.capturable_money (Optional): {@link
     * MoneyValue}. The part of the authorization you can still capture. Positive only while status
     * is requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.capture_method
     * (Optional): string. When money is collected. Defaults to automatic. Value enum: "automatic",
     * "manual". object.captured_at (Optional): string. When money was captured. For automatic
     * capture, this is when the payment succeeded. Absent until capture. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.captured_money (Optional): {@link MoneyValue}. The
     * amount collected from the buyer, including captured_tip_money. Reconcile revenue and print
     * receipts from this amount, not amount_money. Zero while a hold is open, and positive
     * whenever status is succeeded. After an overcapture it is above authorized_money. Also
     * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
     * captured the money and is returning it through a refund with reason payment_returned.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.captured_tip_money (Optional): {@link MoneyValue}. The part of
     * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip
     * the authorization carried, at most captured_money. tip_money keeps the tip the authorization
     * carried. Refunds return it last. Absent until the payment is captured. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.checkout_session_id (Optional): string. Flint checkout session ID associated with
     * this payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.created_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. The linked customer.
     * Returned only with expand=customer. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. Customer linked to this payment intent. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_presence (Required): string. Whether the
     * customer was present for the most recent confirmation. absent means Flint charged a saved
     * card without them, as a merchant-initiated payment on its stored credential. Subscription
     * renewals and automatic invoice charges are absent, and other payments are absent only when
     * confirmed or paid with customer_presence absent. A customer who pays any of them with a card
     * they enter makes it present. Each confirmation sets it again. Value enum: "present",
     * "absent". object.dispute_status (Optional): string. Dispute state of this payment. none
     * means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry
     * or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its
     * deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string or null. Caller-owned identifier for this
     * resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.fulfillment_hold (Optional): {@link PaymentFulfillmentHold}. Present when a payment
     * provider asked Flint to pause fulfillment for this payment. While its status is active, open
     * fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. The linked invoice. Returned only with expand=invoice. Present only when `expand`
     * includes `invoice`; `null` when expanded and there is no related invoice.
     * object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice.anyOf[2] (Value): null. object.invoice_id
     * (Optional): string. Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.last_payment_error (Required): {@link
     * PaymentErrorSummary} or null. Most recent payment error. Null when no payment error is
     * recorded. object.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.last_payment_error.anyOf[2] (Value): null.
     * object.latest_order_payment_attempt_id (Optional): string or null. The order payment attempt
     * that most recently used this payment intent. Start times count to the second; of attempts
     * that started in the same second, the one with the highest order_payment_attempt_id is named.
     * `null` when no attempt has used it yet; omitted for payment intents without an order. It
     * changes only when an attempt starts using this payment intent, which advances version.
     * Returned with merchant credentials; omitted with buyer and checkout credentials. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.merchant_id (Optional): string. Merchant that owns
     * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_net_money
     * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount in
     * add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded and
     * fully_reversed splits commit their whole amount; payment_not_completed and install_revoked
     * cancellations commit nothing. A failed split commits only money already taken back before
     * failure; its remainder returns to the collecting merchant. Refunds do not reduce the
     * commitment. Later merchant assessments and credits are separate balance effects. Absent
     * until Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.metadata (Required): {@link MetadataMap}. Caller-owned metadata. Keys starting
     * with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. The
     * linked order. Returned only with expand=order. Present only when `expand` includes `order`;
     * `null` when expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. Order this payment
     * intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.overcapture (Optional): {@link
     * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization, and
     * the most it can collect. Present once a payment with request_overcapture true is authorized.
     * Read it to show the limit; capture enforces it. Whether one capture can collect more than
     * the authorization. object.payment_flow (Required): string. How the payment was started.
     * Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * object.payment_intent_id (Required): string. Flint payment intent ID. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_options (Required): Array of string. Payment
     * options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present". object.payment_options[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * object.payment_source (Optional): {@link PaymentSourceSummary}. Summary of the card or bank
     * account used for the payment. Absent until a payment source is attached. A summary of the
     * payment source used for a payment, by funding-method family, with card or bank account
     * display details. object.platform_fee (Optional): {@link PaymentIntentPlatformFee}. The
     * platform fee a partner app charges on this payment, when it created the payment with an
     * install token and a fee. Absent when the payment carries none. Returned only to merchant
     * credentials; omitted for buyer and checkout credentials. The platform fee a partner app
     * charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees,
     * and merchant_net_money subtracts it. object.processing_fee_money (Optional): {@link
     * MoneyValue}. Flint's all-in processing fee for this payment. It is the complete price Flint
     * charges to process the payment, never a provider cost passed through. The fee is final once
     * the card payment is captured or the ACH payment succeeds; canceled payments and failures
     * before success have none, except a payment intent canceled with cancellation_reason
     * payment_returned, which shows the fee charged at capture on the charge Flint is returning.
     * Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax
     * fees are itemized separately in add_on_fees. Your net for the payment is captured_money
     * minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint
     * has determined and verified the fee. If Flint can't verify it when you read the payment
     * intent, the field is omitted rather than shown unverified; read the payment intent again
     * later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reader_id (Optional): string. The reader the payment is or was last presented on. Set
     * when Flint presents it and kept afterward. While processing or requires_action with a
     * reader_id, the payment is on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * object.receipt_email (Optional): string or null. Email address for this payment's receipt.
     * When it isn't set, Flint uses the customer's email. Format: email. maxLength: 255. Example:
     * "buyer@example.com". object.refund_expires_at (Required): string or null. Last time Flint
     * can refund this payment through the original payment method. A refund submitted at exactly
     * this time is accepted; after it, refunds through the original payment method are refused.
     * Today only Affirm has a refund window: 120 days after the payment settles. `null` when the
     * method has no refund window, the payment has not succeeded with captured money, or its
     * capture time is missing. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refund_status (Optional): string. How much of captured_money has been refunded,
     * including value issued as store credit, based on refunded_money. Value enum: "none",
     * "partially_refunded", "refunded". object.refunded_money (Optional): {@link MoneyValue}.
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.released_money (Optional): {@link MoneyValue}. The part of the authorization
     * returned to the buyer without being charged: the uncaptured remainder after a partial
     * capture, or the whole authorization after a cancellation or expiry. It was never collected,
     * so it needs no refund and can't be captured later. Zero after a capture at or above the
     * authorization. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.request_overcapture (Optional):
     * boolean. Whether one capture may collect more than the authorization where the card network
     * allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and
     * checkout credentials. object.return_id (Optional): string. Flint return ID associated with
     * this payment, when present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. The return resolution whose balance this
     * payment collects. Set for exchange balances and corrections. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.risk (Optional): {@link PaymentRisk} or null.
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. object.risk.anyOf[1] (Value): {@link
     * PaymentRisk}. The risk assessment for a payment intent, with its risk level, score, outcome,
     * and any matched rule or review. object.risk.anyOf[2] (Value): null.
     * object.selected_payment_option (Optional): string. The payment option the most recent
     * confirmation used. Absent until the payment intent is first confirmed. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". object.splits (Optional):
     * Array of {@link PaymentSplit}. Top-level PaymentSplit children in their current state,
     * embedded whole. Empty when the payment has no splits. Child changes do not send
     * payment_intent.updated. Omitted for buyer and checkout credentials. object.splits[] (Value):
     * {@link PaymentSplit}. A top-level child of a payment intent dividing the collecting
     * merchant's payment funds with one seller. Both parties read this same resource with their
     * own credentials. object.statement_descriptor (Required): string or null. The text shown on
     * the buyer's card or bank statement for this payment. `null` until the charge is created.
     * `null` when the provider supplies no descriptor. Frozen when the charge is created.
     * object.status (Required): string. Lifecycle status. requires_payment_method covers both a
     * new payment intent and one whose last attempt failed, so read last_payment_error with it.
     * succeeded, canceled, and expired are final. Refunds and disputes never change status. Value
     * enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". object.subscription_id (Optional):
     * string. The subscription whose billing charged this payment: its first charge, a renewal, a
     * retry or a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.support_reference (Required): string. Opaque
     * payment reference to share with merchant support. Do not parse its format.
     * object.supported_actions (Required): Array of string. Actions the payment intent's current
     * state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action
     * that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused
     * because of something outside the payment intent: an open risk review, an order payment
     * attempt that is using this payment, a closed order, or the merchant's account. An
     * order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay.
     * The list changes only when the payment intent changes. Always empty for buyer credentials.
     * New actions may be added. [] enum: "confirm", "capture", "cancel".
     * object.supported_actions[] (Value): string. Value enum: "confirm", "capture", "cancel".
     * object.tip_money (Optional): {@link MoneyValue} or null. Portion of amount_money that is a
     * tip. Uses amount_money's currency and is at most amount_money. object.tip_money.anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.tip_money.anyOf[2] (Value): null. object.transaction_purpose
     * (Optional): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other". object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`. add_on_fees (Optional):
         * Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic tax fees
         * collected with this payment. Available to the merchant only. Empty until fees settle or
         * when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint
         * has determined and verified the fee. If Flint can't verify it when you read the payment
         * intent, the field is omitted rather than shown unverified; read the payment intent again
         * later. add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment
         * intent, with the fee type and amount. amount_money (Required): {@link MoneyValue}. The
         * amount requested from the buyer, including any tip_money. Capturing doesn't change it:
         * after a partial capture it still shows the requested amount, and captured_money shows
         * what was collected. On a standalone payment intent, PATCH can change it only before the
         * first confirmation attempt. An amount_money or tip_money change that leaves too little
         * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * authorization_expires_at (Optional): string. Effective Flint deadline to capture a
         * manual-capture hold: the earlier of the provider capture deadline and any order resource
         * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may
         * end earlier. Capture is refused at or after this time, even while status is
         * requires_capture. Omitted until a hold is placed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". authorized_at (Optional): string. When the processor authorized
         * the payment. Absent until then. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * authorized_money (Optional): {@link MoneyValue}. The amount the processor authorized. It
         * always equals amount_money and doesn't change once set, even when a capture collects
         * more. On a payment intent canceled with cancellation_reason payment_returned, it equals
         * the authorization Flint released instead. Absent until the payment is authorized, and on
         * payments canceled before authorization. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. cancellation_reason (Optional): string.
         * Flint-normalized reason the payment intent was canceled. Present only while status is
         * canceled. Unknown processor values are returned as payment_canceled. Value enum:
         * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
         * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
         * "payment_returned". capturable_money (Optional): {@link MoneyValue}. The part of the
         * authorization you can still capture. Positive only while status is requires_capture, and
         * zero after you capture or cancel or the authorization expires. The authorization lapses
         * at authorization_expires_at, and a capture attempted after that fails even if this is
         * positive. Absent until the payment is authorized. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. capture_method (Optional): string. When
         * money is collected. Defaults to automatic. Value enum: "automatic", "manual".
         * captured_at (Optional): string. When money was captured. For automatic capture, this is
         * when the payment succeeded. Absent until capture. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". captured_money (Optional): {@link MoneyValue}. The amount
         * collected from the buyer, including captured_tip_money. Reconcile revenue and print
         * receipts from this amount, not amount_money. Zero while a hold is open, and positive
         * whenever status is succeeded. After an overcapture it is above authorized_money. Also
         * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
         * captured the money and is returning it through a refund with reason payment_returned.
         * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. captured_tip_money (Optional): {@link MoneyValue}. The part of
         * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the
         * tip the authorization carried, at most captured_money. tip_money keeps the tip the
         * authorization carried. Refunds return it last. Absent until the payment is captured.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * checkout_session_id (Optional): string. Flint checkout session ID associated with this
         * payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". created_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. The linked customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. Customer linked to this payment intent. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_presence (Required): string. Whether the
         * customer was present for the most recent confirmation. absent means Flint charged a
         * saved card without them, as a merchant-initiated payment on its stored credential.
         * Subscription renewals and automatic invoice charges are absent, and other payments are
         * absent only when confirmed or paid with customer_presence absent. A customer who pays
         * any of them with a card they enter makes it present. Each confirmation sets it again.
         * Value enum: "present", "absent". dispute_status (Optional): string. Dispute state of
         * this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values
         * track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with
         * GET /v1/disputes for its deadline and evidence. Value enum: "none",
         * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
         * "under_review", "won", "lost", "prevented", "other". external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". fulfillment_hold (Optional):
         * {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint to pause
         * fulfillment for this payment. While its status is active, open fulfillments on the order
         * are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent
         * when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with
         * the reason, the action required, and whether the hold is active or released. invoice
         * (Optional): {@link ExpandedInvoiceSummary} or null. The linked invoice. Returned only
         * with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded
         * and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. Invoice this payment
         * intent collects, when it pays an invoice. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * last_payment_error (Required): {@link PaymentErrorSummary} or null. Most recent payment
         * error. Null when no payment error is recorded. last_payment_error.anyOf[1] (Value):
         * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
         * normalized error code, a message, the failure time, and remediation.
         * last_payment_error.anyOf[2] (Value): null. latest_order_payment_attempt_id (Optional):
         * string or null. The order payment attempt that most recently used this payment intent.
         * Start times count to the second; of attempts that started in the same second, the one
         * with the highest order_payment_attempt_id is named. `null` when no attempt has used it
         * yet; omitted for payment intents without an order. It changes only when an attempt
         * starts using this payment intent, which advances version. Returned with merchant
         * credentials; omitted with buyer and checkout credentials. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". merchant_id (Optional): string. Merchant that owns
         * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_net_money
         * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount
         * in add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded
         * and fully_reversed splits commit their whole amount; payment_not_completed and
         * install_revoked cancellations commit nothing. A failed split commits only money already
         * taken back before failure; its remainder returns to the collecting merchant. Refunds do
         * not reduce the commitment. Later merchant assessments and credits are separate balance
         * effects. Absent until Flint has determined and verified the fee. If Flint can't verify
         * it when you read the payment intent, the field is omitted rather than shown unverified;
         * read the payment intent again later. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. The linked order. Returned only with
         * expand=order. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. Order this payment intent belongs to. Create it through the
         * order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
         * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
         * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". overcapture (Optional): {@link
         * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization,
         * and the most it can collect. Present once a payment with request_overcapture true is
         * authorized. Read it to show the limit; capture enforces it. Whether one capture can
         * collect more than the authorization. payment_flow (Required): string. How the payment
         * was started. Fixed when the payment intent is created. Value enum: "checkout",
         * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
         * "virtual_terminal", "api". payment_intent_id (Required): string. Flint payment intent
         * ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_options (Required): Array of
         * string. Payment options the buyer can use for this payment. [] enum: "card",
         * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". payment_options[]
         * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
         * "card_present". payment_source (Optional): {@link PaymentSourceSummary}. Summary of the
         * card or bank account used for the payment. Absent until a payment source is attached. A
         * summary of the payment source used for a payment, by funding-method family, with card or
         * bank account display details. platform_fee (Optional): {@link PaymentIntentPlatformFee}.
         * The platform fee a partner app charges on this payment, when it created the payment with
         * an install token and a fee. Absent when the payment carries none. Returned only to
         * merchant credentials; omitted for buyer and checkout credentials. The platform fee a
         * partner app charges on this payment. The merchant pays it beside processing_fee_money
         * and add_on_fees, and merchant_net_money subtracts it. processing_fee_money (Optional):
         * {@link MoneyValue}. Flint's all-in processing fee for this payment. It is the complete
         * price Flint charges to process the payment, never a provider cost passed through. The
         * fee is final once the card payment is captured or the ACH payment succeeds; canceled
         * payments and failures before success have none, except a payment intent canceled with
         * cancellation_reason payment_returned, which shows the fee charged at capture on the
         * charge Flint is returning. Flint returns that fee to your balance separately. Invoice,
         * subscription, and automatic tax fees are itemized separately in add_on_fees. Your net
         * for the payment is captured_money minus this fee and the add-on fees. Refunds do not
         * return or revise it. Absent until Flint has determined and verified the fee. If Flint
         * can't verify it when you read the payment intent, the field is omitted rather than shown
         * unverified; read the payment intent again later. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reader_id (Optional): string. The reader the
         * payment is or was last presented on. Set when Flint presents it and kept afterward.
         * While processing or requires_action with a reader_id, the payment is on that reader now.
         * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". receipt_email (Optional): string or null.
         * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
         * email. Format: email. maxLength: 255. Example: "buyer@example.com". refund_expires_at
         * (Required): string or null. Last time Flint can refund this payment through the original
         * payment method. A refund submitted at exactly this time is accepted; after it, refunds
         * through the original payment method are refused. Today only Affirm has a refund window:
         * 120 days after the payment settles. `null` when the method has no refund window, the
         * payment has not succeeded with captured money, or its capture time is missing. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refund_status (Optional): string. How much
         * of captured_money has been refunded, including value issued as store credit, based on
         * refunded_money. Value enum: "none", "partially_refunded", "refunded". refunded_money
         * (Optional): {@link MoneyValue}. Total refunded against captured_money, including value
         * issued as store credit and processor refunds still pending. Failed and canceled refunds
         * aren't counted. Zero when nothing has been refunded. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. released_money (Optional): {@link
         * MoneyValue}. The part of the authorization returned to the buyer without being charged:
         * the uncaptured remainder after a partial capture, or the whole authorization after a
         * cancellation or expiry. It was never collected, so it needs no refund and can't be
         * captured later. Zero after a capture at or above the authorization. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. request_overcapture (Optional): boolean. Whether one capture may
         * collect more than the authorization where the card network allows it. Fixed at create.
         * Always present with merchant credentials; omitted with buyer and checkout credentials.
         * return_id (Optional): string. Flint return ID associated with this payment, when
         * present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional):
         * string. The return resolution whose balance this payment collects. Set for exchange
         * balances and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". risk (Optional):
         * {@link PaymentRisk} or null. Risk assessment. Always present with merchant credentials;
         * null when no risk assessment is available. Omitted with the checkout credential.
         * risk.anyOf[1] (Value): {@link PaymentRisk}. The risk assessment for a payment intent,
         * with its risk level, score, outcome, and any matched rule or review. risk.anyOf[2]
         * (Value): null. selected_payment_option (Optional): string. The payment option the most
         * recent confirmation used. Absent until the payment intent is first confirmed. Value
         * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". splits
         * (Optional): Array of {@link PaymentSplit}. Top-level PaymentSplit children in their
         * current state, embedded whole. Empty when the payment has no splits. Child changes do
         * not send payment_intent.updated. Omitted for buyer and checkout credentials. splits[]
         * (Value): {@link PaymentSplit}. A top-level child of a payment intent dividing the
         * collecting merchant's payment funds with one seller. Both parties read this same
         * resource with their own credentials. statement_descriptor (Required): string or null.
         * The text shown on the buyer's card or bank statement for this payment. `null` until the
         * charge is created. `null` when the provider supplies no descriptor. Frozen when the
         * charge is created. status (Required): string. Lifecycle status. requires_payment_method
         * covers both a new payment intent and one whose last attempt failed, so read
         * last_payment_error with it. succeeded, canceled, and expired are final. Refunds and
         * disputes never change status. Value enum: "requires_payment_method",
         * "requires_confirmation", "requires_action", "processing", "requires_capture",
         * "canceled", "succeeded", "expired". subscription_id (Optional): string. The subscription
         * whose billing charged this payment: its first charge, a renewal, a retry or a setup fee.
         * Not set for the checkout payment that created a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". support_reference (Required): string. Opaque payment
         * reference to share with merchant support. Do not parse its format. supported_actions
         * (Required): Array of string. Actions the payment intent's current state accepts, each a
         * POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
         * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
         * something outside the payment intent: an open risk review, an order payment attempt that
         * is using this payment, a closed order, or the merchant's account. An order-owned payment
         * intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes
         * only when the payment intent changes. Always empty for buyer credentials. New actions
         * may be added. [] enum: "confirm", "capture", "cancel". supported_actions[] (Value):
         * string. Value enum: "confirm", "capture", "cancel". tip_money (Optional): {@link
         * MoneyValue} or null. Portion of amount_money that is a tip. Uses amount_money's currency
         * and is at most amount_money. tip_money.anyOf[1] (Value): {@link MoneyValue}. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * tip_money.anyOf[2] (Value): null. transaction_purpose (Optional): string. Why a bank
         * debit is taken. Set only when payment_options includes ach_debit, and fixed once the
         * payment intent exists. Value enum: "goods", "services", "other". updated_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Itemized invoice, subscription, and automatic tax fees collected with this payment.
             * Available to the merchant only. Empty until fees settle or when no add-ons apply.
             * Refunds do not return or revise these fees. Absent until Flint has determined and
             * verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * [] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment intent, with the
             * fee type and amount.
             */
            "add_on_fees"?: Array<PaymentAddOnFee>;
            /**
             * The amount requested from the buyer, including any tip_money. Capturing doesn't
             * change it: after a partial capture it still shows the requested amount, and
             * captured_money shows what was collected. On a standalone payment intent, PATCH can
             * change it only before the first confirmation attempt. An amount_money or tip_money
             * change that leaves too little for stored splits returns LIMIT_EXCEEDED at the
             * changed field with minimum_money. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Effective Flint deadline to capture a manual-capture hold: the earlier of the
             * provider capture deadline and any order resource guarantee. Order guarantees last at
             * most 24 hours from the payment attempt start and may end earlier. Capture is refused
             * at or after this time, even while status is requires_capture. Omitted until a hold
             * is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "authorization_expires_at"?: string;
            /**
             * When the processor authorized the payment. Absent until then. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "authorized_at"?: string;
            /**
             * The amount the processor authorized. It always equals amount_money and doesn't
             * change once set, even when a capture collects more. On a payment intent canceled
             * with cancellation_reason payment_returned, it equals the authorization Flint
             * released instead. Absent until the payment is authorized, and on payments canceled
             * before authorization. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "authorized_money"?: MoneyValue;
            /**
             * Flint-normalized reason the payment intent was canceled. Present only while status
             * is canceled. Unknown processor values are returned as payment_canceled. Value enum:
             * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
             * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
             * "payment_returned".
             */
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            /**
             * The part of the authorization you can still capture. Positive only while status is
             * requires_capture, and zero after you capture or cancel or the authorization expires.
             * The authorization lapses at authorization_expires_at, and a capture attempted after
             * that fails even if this is positive. Absent until the payment is authorized.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "capturable_money"?: MoneyValue;
            /**
             * When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
             */
            "capture_method"?: "automatic" | "manual" | (string & {});
            /**
             * When money was captured. For automatic capture, this is when the payment succeeded.
             * Absent until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "captured_at"?: string;
            /**
             * The amount collected from the buyer, including captured_tip_money. Reconcile revenue
             * and print receipts from this amount, not amount_money. Zero while a hold is open,
             * and positive whenever status is succeeded. After an overcapture it is above
             * authorized_money. Also positive on a payment intent canceled with
             * cancellation_reason payment_returned: Flint captured the money and is returning it
             * through a refund with reason payment_returned. processing_fee_money,
             * merchant_net_money, and refunds are based on it. Absent until the payment is
             * authorized. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_money"?: MoneyValue;
            /**
             * The part of captured_money that is a tip: the capture's tip_money when it sent one,
             * otherwise the tip the authorization carried, at most captured_money. tip_money keeps
             * the tip the authorization carried. Refunds return it last. Absent until the payment
             * is captured. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_tip_money"?: MoneyValue;
            /**
             * Flint checkout session ID associated with this payment, when present. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at"?: string;
            /**
             * The linked customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer. anyOf[1]
             * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
             * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Whether the customer was present for the most recent confirmation. absent means
             * Flint charged a saved card without them, as a merchant-initiated payment on its
             * stored credential. Subscription renewals and automatic invoice charges are absent,
             * and other payments are absent only when confirmed or paid with customer_presence
             * absent. A customer who pays any of them with a card they enter makes it present.
             * Each confirmation sets it again. Value enum: "present", "absent".
             */
            "customer_presence": "present" | "absent" | (string & {});
            /**
             * Dispute state of this payment. none means no dispute or inquiry is open or recorded.
             * The inquiry_ values track an issuer inquiry or early warning that isn't a
             * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other".
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
             * Caller-owned identifier for this resource in an external system. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string | null;
            /**
             * Present when a payment provider asked Flint to pause fulfillment for this payment.
             * While its status is active, open fulfillments on the order are on hold with reason
             * payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts
             * and when it lifts. A hold on fulfillment tied to a payment, with the reason, the
             * action required, and whether the hold is active or released.
             */
            "fulfillment_hold"?: PaymentFulfillmentHold;
            /**
             * The linked invoice. Returned only with expand=invoice. Present only when `expand`
             * includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1]
             * (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields, including
             * status, due date, and paid, outstanding, and refunded amounts, returned when the
             * invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * Invoice this payment intent collects, when it pays an invoice. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value):
             * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
             * normalized error code, a message, the failure time, and remediation. anyOf[2]
             * (Value): null.
             */
            "last_payment_error": ((PaymentErrorSummary) | (null));
            /**
             * The order payment attempt that most recently used this payment intent. Start times
             * count to the second; of attempts that started in the same second, the one with the
             * highest order_payment_attempt_id is named. `null` when no attempt has used it yet;
             * omitted for payment intents without an order. It changes only when an attempt starts
             * using this payment intent, which advances version. Returned with merchant
             * credentials; omitted with buyer and checkout credentials. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "latest_order_payment_attempt_id"?: string | null;
            /**
             * Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Captured amount minus processing_fee_money, every amount in add_on_fees,
             * platform_fee.amount_money, and each split commitment. Live, succeeded and
             * fully_reversed splits commit their whole amount; payment_not_completed and
             * install_revoked cancellations commit nothing. A failed split commits only money
             * already taken back before failure; its remainder returns to the collecting merchant.
             * Refunds do not reduce the commitment. Later merchant assessments and credits are
             * separate balance effects. Absent until Flint has determined and verified the fee. If
             * Flint can't verify it when you read the payment intent, the field is omitted rather
             * than shown unverified; read the payment intent again later. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "merchant_net_money"?: MoneyValue;
            /**
             * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't
             * returned. Caller-owned key-value data stored on a resource. Keys starting with
             * flint_ are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The linked order. Returned only with expand=order. Present only when `expand`
             * includes `order`; `null` when expanded and there is no related order. anyOf[1]
             * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
             * payment and refund status, and pricing and settlement amounts, returned when the
             * order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order this payment intent belongs to. Create it through the order and confirm it
             * with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
             * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
             * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Whether one capture can collect more than the authorization, and the most it can
             * collect. Present once a payment with request_overcapture true is authorized. Read it
             * to show the limit; capture enforces it. Whether one capture can collect more than
             * the authorization.
             */
            "overcapture"?: PaymentIntentOvercapture;
            /**
             * How the payment was started. Fixed when the payment intent is created. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
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
            /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
             * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum:
             * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
             */
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            /**
             * Summary of the card or bank account used for the payment. Absent until a payment
             * source is attached. A summary of the payment source used for a payment, by
             * funding-method family, with card or bank account display details.
             */
            "payment_source"?: PaymentSourceSummary;
            /**
             * The platform fee a partner app charges on this payment, when it created the payment
             * with an install token and a fee. Absent when the payment carries none. Returned only
             * to merchant credentials; omitted for buyer and checkout credentials. The platform
             * fee a partner app charges on this payment. The merchant pays it beside
             * processing_fee_money and add_on_fees, and merchant_net_money subtracts it.
             */
            "platform_fee"?: PaymentIntentPlatformFee;
            /**
             * Flint's all-in processing fee for this payment. It is the complete price Flint
             * charges to process the payment, never a provider cost passed through. The fee is
             * final once the card payment is captured or the ACH payment succeeds; canceled
             * payments and failures before success have none, except a payment intent canceled
             * with cancellation_reason payment_returned, which shows the fee charged at capture on
             * the charge Flint is returning. Flint returns that fee to your balance separately.
             * Invoice, subscription, and automatic tax fees are itemized separately in
             * add_on_fees. Your net for the payment is captured_money minus this fee and the
             * add-on fees. Refunds do not return or revise it. Absent until Flint has determined
             * and verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "processing_fee_money"?: MoneyValue;
            /**
             * The reader the payment is or was last presented on. Set when Flint presents it and
             * kept afterward. While processing or requires_action with a reader_id, the payment is
             * on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
             */
            "reader_id"?: string;
            /**
             * Email address for this payment's receipt. When it isn't set, Flint uses the
             * customer's email. Format: email. maxLength: 255. Example: "buyer@example.com".
             */
            "receipt_email"?: string | null;
            /**
             * Last time Flint can refund this payment through the original payment method. A
             * refund submitted at exactly this time is accepted; after it, refunds through the
             * original payment method are refused. Today only Affirm has a refund window: 120 days
             * after the payment settles. `null` when the method has no refund window, the payment
             * has not succeeded with captured money, or its capture time is missing. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refund_expires_at": string | null;
            /**
             * How much of captured_money has been refunded, including value issued as store
             * credit, based on refunded_money. Value enum: "none", "partially_refunded",
             * "refunded".
             */
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Total refunded against captured_money, including value issued as store credit and
             * processor refunds still pending. Failed and canceled refunds aren't counted. Zero
             * when nothing has been refunded. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money"?: MoneyValue;
            /**
             * The part of the authorization returned to the buyer without being charged: the
             * uncaptured remainder after a partial capture, or the whole authorization after a
             * cancellation or expiry. It was never collected, so it needs no refund and can't be
             * captured later. Zero after a capture at or above the authorization. Absent until the
             * payment is authorized. Monetary amount represented as integer minor units plus an
             * ISO 4217 currency code.
             */
            "released_money"?: MoneyValue;
            /**
             * Whether one capture may collect more than the authorization where the card network
             * allows it. Fixed at create. Always present with merchant credentials; omitted with
             * buyer and checkout credentials.
             */
            "request_overcapture"?: boolean;
            /**
             * Flint return ID associated with this payment, when present. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * The return resolution whose balance this payment collects. Set for exchange balances
             * and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Risk assessment. Always present with merchant credentials; null when no risk
             * assessment is available. Omitted with the checkout credential. anyOf[1] (Value):
             * {@link PaymentRisk}. The risk assessment for a payment intent, with its risk level,
             * score, outcome, and any matched rule or review. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentRisk) | (null));
            /**
             * The payment option the most recent confirmation used. Absent until the payment
             * intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm",
             * "ach_debit", "card_present".
             */
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            /**
             * Top-level PaymentSplit children in their current state, embedded whole. Empty when
             * the payment has no splits. Child changes do not send payment_intent.updated. Omitted
             * for buyer and checkout credentials. [] (Value): {@link PaymentSplit}. A top-level
             * child of a payment intent dividing the collecting merchant's payment funds with one
             * seller. Both parties read this same resource with their own credentials.
             */
            "splits"?: Array<PaymentSplit>;
            /**
             * The text shown on the buyer's card or bank statement for this payment. `null` until
             * the charge is created. `null` when the provider supplies no descriptor. Frozen when
             * the charge is created.
             */
            "statement_descriptor": string | null;
            /**
             * Lifecycle status. requires_payment_method covers both a new payment intent and one
             * whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
             * and expired are final. Refunds and disputes never change status. Value enum:
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
             * The subscription whose billing charged this payment: its first charge, a renewal, a
             * retry or a setup fee. Not set for the checkout payment that created a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /** Opaque payment reference to share with merchant support. Do not parse its format. */
            "support_reference": string;
            /**
             * Actions the payment intent's current state accepts, each a POST to
             * /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
             * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
             * something outside the payment intent: an open risk review, an order payment attempt
             * that is using this payment, a closed order, or the merchant's account. An
             * order-owned payment intent never lists confirm; pay it with POST
             * /v1/orders/{order_id}/pay. The list changes only when the payment intent changes.
             * Always empty for buyer credentials. New actions may be added. [] enum: "confirm",
             * "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture", "cancel".
             */
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            /**
             * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
             * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "tip_money"?: ((MoneyValue) | (null));
            /**
             * Why a bank debit is taken. Set only when payment_options includes ach_debit, and
             * fixed once the payment intent exists. Value enum: "goods", "services", "other".
             */
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.canceled". */
    "event_type"?: "payment_intent.canceled";
});
export type PaymentIntentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_on_fees"?: Array<PaymentAddOnFee>;
            "amount_money": MoneyValue;
            "authorization_expires_at"?: string;
            "authorized_at"?: string;
            "authorized_money"?: MoneyValue;
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            "capturable_money"?: MoneyValue;
            "capture_method"?: "automatic" | "manual" | (string & {});
            "captured_at"?: string;
            "captured_money"?: MoneyValue;
            "captured_tip_money"?: MoneyValue;
            "checkout_session_id"?: string;
            "created_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_presence": "present" | "absent" | (string & {});
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
            "external_reference_id"?: string | null;
            "fulfillment_hold"?: PaymentFulfillmentHold;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "last_payment_error": ((PaymentErrorSummary) | (null));
            "latest_order_payment_attempt_id"?: string | null;
            "merchant_id"?: string;
            "merchant_net_money"?: MoneyValue;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "overcapture"?: PaymentIntentOvercapture;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent_id": string;
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            "payment_source"?: PaymentSourceSummary;
            "platform_fee"?: PaymentIntentPlatformFee;
            "processing_fee_money"?: MoneyValue;
            "reader_id"?: string;
            "receipt_email"?: string | null;
            "refund_expires_at": string | null;
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money"?: MoneyValue;
            "released_money"?: MoneyValue;
            "request_overcapture"?: boolean;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "risk"?: ((PaymentRisk) | (null));
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            "splits"?: Array<PaymentSplit>;
            "statement_descriptor": string | null;
            "status": "requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {});
            "subscription_id"?: string;
            "support_reference": string;
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            "tip_money"?: ((MoneyValue) | (null));
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_on_fees"?: Array<PaymentAddOnFee>;
            "amount_money": MoneyValue;
            "authorization_expires_at"?: string;
            "authorized_at"?: string;
            "authorized_money"?: MoneyValue;
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            "capturable_money"?: MoneyValue;
            "capture_method"?: "automatic" | "manual" | (string & {});
            "captured_at"?: string;
            "captured_money"?: MoneyValue;
            "captured_tip_money"?: MoneyValue;
            "checkout_session_id"?: string;
            "created_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_presence": "present" | "absent" | (string & {});
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
            "external_reference_id"?: string | null;
            "fulfillment_hold"?: PaymentFulfillmentHold;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "last_payment_error": ((PaymentErrorSummary) | (null));
            "latest_order_payment_attempt_id"?: string | null;
            "merchant_id"?: string;
            "merchant_net_money"?: MoneyValue;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "overcapture"?: PaymentIntentOvercapture;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent_id": string;
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            "payment_source"?: PaymentSourceSummary;
            "platform_fee"?: PaymentIntentPlatformFee;
            "processing_fee_money"?: MoneyValue;
            "reader_id"?: string;
            "receipt_email"?: string | null;
            "refund_expires_at": string | null;
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money"?: MoneyValue;
            "released_money"?: MoneyValue;
            "request_overcapture"?: boolean;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "risk"?: ((PaymentRisk) | (null));
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            "splits"?: Array<PaymentSplit>;
            "statement_descriptor": string | null;
            "status": "requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {});
            "subscription_id"?: string;
            "support_reference": string;
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            "tip_money"?: ((MoneyValue) | (null));
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`. object.add_on_fees
     * (Optional): Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic
     * tax fees collected with this payment. Available to the merchant only. Empty until fees
     * settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until
     * Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. object.add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a
     * payment intent, with the fee type and amount. object.amount_money (Required): {@link
     * MoneyValue}. The amount requested from the buyer, including any tip_money. Capturing doesn't
     * change it: after a partial capture it still shows the requested amount, and captured_money
     * shows what was collected. On a standalone payment intent, PATCH can change it only before
     * the first confirmation attempt. An amount_money or tip_money change that leaves too little
     * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.authorization_expires_at (Optional): string. Effective Flint deadline to capture a
     * manual-capture hold: the earlier of the provider capture deadline and any order resource
     * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end
     * earlier. Capture is refused at or after this time, even while status is requires_capture.
     * Omitted until a hold is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.authorized_at (Optional): string. When the processor authorized the payment. Absent
     * until then. Format: date-time. Example: "2026-08-02T16:00:00Z". object.authorized_money
     * (Optional): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set, even when a capture collects more. On a payment
     * intent canceled with cancellation_reason payment_returned, it equals the authorization Flint
     * released instead. Absent until the payment is authorized, and on payments canceled before
     * authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.cancellation_reason (Optional): string. Flint-normalized reason the payment
     * intent was canceled. Present only while status is canceled. Unknown processor values are
     * returned as payment_canceled. Value enum: "requested_by_customer", "duplicate",
     * "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed",
     * "payment_canceled", "payment_returned". object.capturable_money (Optional): {@link
     * MoneyValue}. The part of the authorization you can still capture. Positive only while status
     * is requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.capture_method
     * (Optional): string. When money is collected. Defaults to automatic. Value enum: "automatic",
     * "manual". object.captured_at (Optional): string. When money was captured. For automatic
     * capture, this is when the payment succeeded. Absent until capture. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.captured_money (Optional): {@link MoneyValue}. The
     * amount collected from the buyer, including captured_tip_money. Reconcile revenue and print
     * receipts from this amount, not amount_money. Zero while a hold is open, and positive
     * whenever status is succeeded. After an overcapture it is above authorized_money. Also
     * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
     * captured the money and is returning it through a refund with reason payment_returned.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.captured_tip_money (Optional): {@link MoneyValue}. The part of
     * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip
     * the authorization carried, at most captured_money. tip_money keeps the tip the authorization
     * carried. Refunds return it last. Absent until the payment is captured. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.checkout_session_id (Optional): string. Flint checkout session ID associated with
     * this payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.created_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. The linked customer.
     * Returned only with expand=customer. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. Customer linked to this payment intent. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_presence (Required): string. Whether the
     * customer was present for the most recent confirmation. absent means Flint charged a saved
     * card without them, as a merchant-initiated payment on its stored credential. Subscription
     * renewals and automatic invoice charges are absent, and other payments are absent only when
     * confirmed or paid with customer_presence absent. A customer who pays any of them with a card
     * they enter makes it present. Each confirmation sets it again. Value enum: "present",
     * "absent". object.dispute_status (Optional): string. Dispute state of this payment. none
     * means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry
     * or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its
     * deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string or null. Caller-owned identifier for this
     * resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.fulfillment_hold (Optional): {@link PaymentFulfillmentHold}. Present when a payment
     * provider asked Flint to pause fulfillment for this payment. While its status is active, open
     * fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. The linked invoice. Returned only with expand=invoice. Present only when `expand`
     * includes `invoice`; `null` when expanded and there is no related invoice.
     * object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice.anyOf[2] (Value): null. object.invoice_id
     * (Optional): string. Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.last_payment_error (Required): {@link
     * PaymentErrorSummary} or null. Most recent payment error. Null when no payment error is
     * recorded. object.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.last_payment_error.anyOf[2] (Value): null.
     * object.latest_order_payment_attempt_id (Optional): string or null. The order payment attempt
     * that most recently used this payment intent. Start times count to the second; of attempts
     * that started in the same second, the one with the highest order_payment_attempt_id is named.
     * `null` when no attempt has used it yet; omitted for payment intents without an order. It
     * changes only when an attempt starts using this payment intent, which advances version.
     * Returned with merchant credentials; omitted with buyer and checkout credentials. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.merchant_id (Optional): string. Merchant that owns
     * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_net_money
     * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount in
     * add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded and
     * fully_reversed splits commit their whole amount; payment_not_completed and install_revoked
     * cancellations commit nothing. A failed split commits only money already taken back before
     * failure; its remainder returns to the collecting merchant. Refunds do not reduce the
     * commitment. Later merchant assessments and credits are separate balance effects. Absent
     * until Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.metadata (Required): {@link MetadataMap}. Caller-owned metadata. Keys starting
     * with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. The
     * linked order. Returned only with expand=order. Present only when `expand` includes `order`;
     * `null` when expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. Order this payment
     * intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.overcapture (Optional): {@link
     * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization, and
     * the most it can collect. Present once a payment with request_overcapture true is authorized.
     * Read it to show the limit; capture enforces it. Whether one capture can collect more than
     * the authorization. object.payment_flow (Required): string. How the payment was started.
     * Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * object.payment_intent_id (Required): string. Flint payment intent ID. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_options (Required): Array of string. Payment
     * options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present". object.payment_options[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * object.payment_source (Optional): {@link PaymentSourceSummary}. Summary of the card or bank
     * account used for the payment. Absent until a payment source is attached. A summary of the
     * payment source used for a payment, by funding-method family, with card or bank account
     * display details. object.platform_fee (Optional): {@link PaymentIntentPlatformFee}. The
     * platform fee a partner app charges on this payment, when it created the payment with an
     * install token and a fee. Absent when the payment carries none. Returned only to merchant
     * credentials; omitted for buyer and checkout credentials. The platform fee a partner app
     * charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees,
     * and merchant_net_money subtracts it. object.processing_fee_money (Optional): {@link
     * MoneyValue}. Flint's all-in processing fee for this payment. It is the complete price Flint
     * charges to process the payment, never a provider cost passed through. The fee is final once
     * the card payment is captured or the ACH payment succeeds; canceled payments and failures
     * before success have none, except a payment intent canceled with cancellation_reason
     * payment_returned, which shows the fee charged at capture on the charge Flint is returning.
     * Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax
     * fees are itemized separately in add_on_fees. Your net for the payment is captured_money
     * minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint
     * has determined and verified the fee. If Flint can't verify it when you read the payment
     * intent, the field is omitted rather than shown unverified; read the payment intent again
     * later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reader_id (Optional): string. The reader the payment is or was last presented on. Set
     * when Flint presents it and kept afterward. While processing or requires_action with a
     * reader_id, the payment is on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * object.receipt_email (Optional): string or null. Email address for this payment's receipt.
     * When it isn't set, Flint uses the customer's email. Format: email. maxLength: 255. Example:
     * "buyer@example.com". object.refund_expires_at (Required): string or null. Last time Flint
     * can refund this payment through the original payment method. A refund submitted at exactly
     * this time is accepted; after it, refunds through the original payment method are refused.
     * Today only Affirm has a refund window: 120 days after the payment settles. `null` when the
     * method has no refund window, the payment has not succeeded with captured money, or its
     * capture time is missing. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refund_status (Optional): string. How much of captured_money has been refunded,
     * including value issued as store credit, based on refunded_money. Value enum: "none",
     * "partially_refunded", "refunded". object.refunded_money (Optional): {@link MoneyValue}.
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.released_money (Optional): {@link MoneyValue}. The part of the authorization
     * returned to the buyer without being charged: the uncaptured remainder after a partial
     * capture, or the whole authorization after a cancellation or expiry. It was never collected,
     * so it needs no refund and can't be captured later. Zero after a capture at or above the
     * authorization. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.request_overcapture (Optional):
     * boolean. Whether one capture may collect more than the authorization where the card network
     * allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and
     * checkout credentials. object.return_id (Optional): string. Flint return ID associated with
     * this payment, when present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. The return resolution whose balance this
     * payment collects. Set for exchange balances and corrections. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.risk (Optional): {@link PaymentRisk} or null.
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. object.risk.anyOf[1] (Value): {@link
     * PaymentRisk}. The risk assessment for a payment intent, with its risk level, score, outcome,
     * and any matched rule or review. object.risk.anyOf[2] (Value): null.
     * object.selected_payment_option (Optional): string. The payment option the most recent
     * confirmation used. Absent until the payment intent is first confirmed. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". object.splits (Optional):
     * Array of {@link PaymentSplit}. Top-level PaymentSplit children in their current state,
     * embedded whole. Empty when the payment has no splits. Child changes do not send
     * payment_intent.updated. Omitted for buyer and checkout credentials. object.splits[] (Value):
     * {@link PaymentSplit}. A top-level child of a payment intent dividing the collecting
     * merchant's payment funds with one seller. Both parties read this same resource with their
     * own credentials. object.statement_descriptor (Required): string or null. The text shown on
     * the buyer's card or bank statement for this payment. `null` until the charge is created.
     * `null` when the provider supplies no descriptor. Frozen when the charge is created.
     * object.status (Required): string. Lifecycle status. requires_payment_method covers both a
     * new payment intent and one whose last attempt failed, so read last_payment_error with it.
     * succeeded, canceled, and expired are final. Refunds and disputes never change status. Value
     * enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". object.subscription_id (Optional):
     * string. The subscription whose billing charged this payment: its first charge, a renewal, a
     * retry or a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.support_reference (Required): string. Opaque
     * payment reference to share with merchant support. Do not parse its format.
     * object.supported_actions (Required): Array of string. Actions the payment intent's current
     * state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action
     * that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused
     * because of something outside the payment intent: an open risk review, an order payment
     * attempt that is using this payment, a closed order, or the merchant's account. An
     * order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay.
     * The list changes only when the payment intent changes. Always empty for buyer credentials.
     * New actions may be added. [] enum: "confirm", "capture", "cancel".
     * object.supported_actions[] (Value): string. Value enum: "confirm", "capture", "cancel".
     * object.tip_money (Optional): {@link MoneyValue} or null. Portion of amount_money that is a
     * tip. Uses amount_money's currency and is at most amount_money. object.tip_money.anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.tip_money.anyOf[2] (Value): null. object.transaction_purpose
     * (Optional): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other". object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`. add_on_fees (Optional):
         * Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic tax fees
         * collected with this payment. Available to the merchant only. Empty until fees settle or
         * when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint
         * has determined and verified the fee. If Flint can't verify it when you read the payment
         * intent, the field is omitted rather than shown unverified; read the payment intent again
         * later. add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment
         * intent, with the fee type and amount. amount_money (Required): {@link MoneyValue}. The
         * amount requested from the buyer, including any tip_money. Capturing doesn't change it:
         * after a partial capture it still shows the requested amount, and captured_money shows
         * what was collected. On a standalone payment intent, PATCH can change it only before the
         * first confirmation attempt. An amount_money or tip_money change that leaves too little
         * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * authorization_expires_at (Optional): string. Effective Flint deadline to capture a
         * manual-capture hold: the earlier of the provider capture deadline and any order resource
         * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may
         * end earlier. Capture is refused at or after this time, even while status is
         * requires_capture. Omitted until a hold is placed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". authorized_at (Optional): string. When the processor authorized
         * the payment. Absent until then. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * authorized_money (Optional): {@link MoneyValue}. The amount the processor authorized. It
         * always equals amount_money and doesn't change once set, even when a capture collects
         * more. On a payment intent canceled with cancellation_reason payment_returned, it equals
         * the authorization Flint released instead. Absent until the payment is authorized, and on
         * payments canceled before authorization. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. cancellation_reason (Optional): string.
         * Flint-normalized reason the payment intent was canceled. Present only while status is
         * canceled. Unknown processor values are returned as payment_canceled. Value enum:
         * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
         * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
         * "payment_returned". capturable_money (Optional): {@link MoneyValue}. The part of the
         * authorization you can still capture. Positive only while status is requires_capture, and
         * zero after you capture or cancel or the authorization expires. The authorization lapses
         * at authorization_expires_at, and a capture attempted after that fails even if this is
         * positive. Absent until the payment is authorized. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. capture_method (Optional): string. When
         * money is collected. Defaults to automatic. Value enum: "automatic", "manual".
         * captured_at (Optional): string. When money was captured. For automatic capture, this is
         * when the payment succeeded. Absent until capture. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". captured_money (Optional): {@link MoneyValue}. The amount
         * collected from the buyer, including captured_tip_money. Reconcile revenue and print
         * receipts from this amount, not amount_money. Zero while a hold is open, and positive
         * whenever status is succeeded. After an overcapture it is above authorized_money. Also
         * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
         * captured the money and is returning it through a refund with reason payment_returned.
         * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. captured_tip_money (Optional): {@link MoneyValue}. The part of
         * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the
         * tip the authorization carried, at most captured_money. tip_money keeps the tip the
         * authorization carried. Refunds return it last. Absent until the payment is captured.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * checkout_session_id (Optional): string. Flint checkout session ID associated with this
         * payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". created_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. The linked customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. Customer linked to this payment intent. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_presence (Required): string. Whether the
         * customer was present for the most recent confirmation. absent means Flint charged a
         * saved card without them, as a merchant-initiated payment on its stored credential.
         * Subscription renewals and automatic invoice charges are absent, and other payments are
         * absent only when confirmed or paid with customer_presence absent. A customer who pays
         * any of them with a card they enter makes it present. Each confirmation sets it again.
         * Value enum: "present", "absent". dispute_status (Optional): string. Dispute state of
         * this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values
         * track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with
         * GET /v1/disputes for its deadline and evidence. Value enum: "none",
         * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
         * "under_review", "won", "lost", "prevented", "other". external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". fulfillment_hold (Optional):
         * {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint to pause
         * fulfillment for this payment. While its status is active, open fulfillments on the order
         * are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent
         * when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with
         * the reason, the action required, and whether the hold is active or released. invoice
         * (Optional): {@link ExpandedInvoiceSummary} or null. The linked invoice. Returned only
         * with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded
         * and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. Invoice this payment
         * intent collects, when it pays an invoice. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * last_payment_error (Required): {@link PaymentErrorSummary} or null. Most recent payment
         * error. Null when no payment error is recorded. last_payment_error.anyOf[1] (Value):
         * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
         * normalized error code, a message, the failure time, and remediation.
         * last_payment_error.anyOf[2] (Value): null. latest_order_payment_attempt_id (Optional):
         * string or null. The order payment attempt that most recently used this payment intent.
         * Start times count to the second; of attempts that started in the same second, the one
         * with the highest order_payment_attempt_id is named. `null` when no attempt has used it
         * yet; omitted for payment intents without an order. It changes only when an attempt
         * starts using this payment intent, which advances version. Returned with merchant
         * credentials; omitted with buyer and checkout credentials. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". merchant_id (Optional): string. Merchant that owns
         * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_net_money
         * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount
         * in add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded
         * and fully_reversed splits commit their whole amount; payment_not_completed and
         * install_revoked cancellations commit nothing. A failed split commits only money already
         * taken back before failure; its remainder returns to the collecting merchant. Refunds do
         * not reduce the commitment. Later merchant assessments and credits are separate balance
         * effects. Absent until Flint has determined and verified the fee. If Flint can't verify
         * it when you read the payment intent, the field is omitted rather than shown unverified;
         * read the payment intent again later. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. The linked order. Returned only with
         * expand=order. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. Order this payment intent belongs to. Create it through the
         * order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
         * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
         * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". overcapture (Optional): {@link
         * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization,
         * and the most it can collect. Present once a payment with request_overcapture true is
         * authorized. Read it to show the limit; capture enforces it. Whether one capture can
         * collect more than the authorization. payment_flow (Required): string. How the payment
         * was started. Fixed when the payment intent is created. Value enum: "checkout",
         * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
         * "virtual_terminal", "api". payment_intent_id (Required): string. Flint payment intent
         * ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_options (Required): Array of
         * string. Payment options the buyer can use for this payment. [] enum: "card",
         * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". payment_options[]
         * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
         * "card_present". payment_source (Optional): {@link PaymentSourceSummary}. Summary of the
         * card or bank account used for the payment. Absent until a payment source is attached. A
         * summary of the payment source used for a payment, by funding-method family, with card or
         * bank account display details. platform_fee (Optional): {@link PaymentIntentPlatformFee}.
         * The platform fee a partner app charges on this payment, when it created the payment with
         * an install token and a fee. Absent when the payment carries none. Returned only to
         * merchant credentials; omitted for buyer and checkout credentials. The platform fee a
         * partner app charges on this payment. The merchant pays it beside processing_fee_money
         * and add_on_fees, and merchant_net_money subtracts it. processing_fee_money (Optional):
         * {@link MoneyValue}. Flint's all-in processing fee for this payment. It is the complete
         * price Flint charges to process the payment, never a provider cost passed through. The
         * fee is final once the card payment is captured or the ACH payment succeeds; canceled
         * payments and failures before success have none, except a payment intent canceled with
         * cancellation_reason payment_returned, which shows the fee charged at capture on the
         * charge Flint is returning. Flint returns that fee to your balance separately. Invoice,
         * subscription, and automatic tax fees are itemized separately in add_on_fees. Your net
         * for the payment is captured_money minus this fee and the add-on fees. Refunds do not
         * return or revise it. Absent until Flint has determined and verified the fee. If Flint
         * can't verify it when you read the payment intent, the field is omitted rather than shown
         * unverified; read the payment intent again later. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reader_id (Optional): string. The reader the
         * payment is or was last presented on. Set when Flint presents it and kept afterward.
         * While processing or requires_action with a reader_id, the payment is on that reader now.
         * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". receipt_email (Optional): string or null.
         * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
         * email. Format: email. maxLength: 255. Example: "buyer@example.com". refund_expires_at
         * (Required): string or null. Last time Flint can refund this payment through the original
         * payment method. A refund submitted at exactly this time is accepted; after it, refunds
         * through the original payment method are refused. Today only Affirm has a refund window:
         * 120 days after the payment settles. `null` when the method has no refund window, the
         * payment has not succeeded with captured money, or its capture time is missing. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refund_status (Optional): string. How much
         * of captured_money has been refunded, including value issued as store credit, based on
         * refunded_money. Value enum: "none", "partially_refunded", "refunded". refunded_money
         * (Optional): {@link MoneyValue}. Total refunded against captured_money, including value
         * issued as store credit and processor refunds still pending. Failed and canceled refunds
         * aren't counted. Zero when nothing has been refunded. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. released_money (Optional): {@link
         * MoneyValue}. The part of the authorization returned to the buyer without being charged:
         * the uncaptured remainder after a partial capture, or the whole authorization after a
         * cancellation or expiry. It was never collected, so it needs no refund and can't be
         * captured later. Zero after a capture at or above the authorization. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. request_overcapture (Optional): boolean. Whether one capture may
         * collect more than the authorization where the card network allows it. Fixed at create.
         * Always present with merchant credentials; omitted with buyer and checkout credentials.
         * return_id (Optional): string. Flint return ID associated with this payment, when
         * present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional):
         * string. The return resolution whose balance this payment collects. Set for exchange
         * balances and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". risk (Optional):
         * {@link PaymentRisk} or null. Risk assessment. Always present with merchant credentials;
         * null when no risk assessment is available. Omitted with the checkout credential.
         * risk.anyOf[1] (Value): {@link PaymentRisk}. The risk assessment for a payment intent,
         * with its risk level, score, outcome, and any matched rule or review. risk.anyOf[2]
         * (Value): null. selected_payment_option (Optional): string. The payment option the most
         * recent confirmation used. Absent until the payment intent is first confirmed. Value
         * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". splits
         * (Optional): Array of {@link PaymentSplit}. Top-level PaymentSplit children in their
         * current state, embedded whole. Empty when the payment has no splits. Child changes do
         * not send payment_intent.updated. Omitted for buyer and checkout credentials. splits[]
         * (Value): {@link PaymentSplit}. A top-level child of a payment intent dividing the
         * collecting merchant's payment funds with one seller. Both parties read this same
         * resource with their own credentials. statement_descriptor (Required): string or null.
         * The text shown on the buyer's card or bank statement for this payment. `null` until the
         * charge is created. `null` when the provider supplies no descriptor. Frozen when the
         * charge is created. status (Required): string. Lifecycle status. requires_payment_method
         * covers both a new payment intent and one whose last attempt failed, so read
         * last_payment_error with it. succeeded, canceled, and expired are final. Refunds and
         * disputes never change status. Value enum: "requires_payment_method",
         * "requires_confirmation", "requires_action", "processing", "requires_capture",
         * "canceled", "succeeded", "expired". subscription_id (Optional): string. The subscription
         * whose billing charged this payment: its first charge, a renewal, a retry or a setup fee.
         * Not set for the checkout payment that created a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". support_reference (Required): string. Opaque payment
         * reference to share with merchant support. Do not parse its format. supported_actions
         * (Required): Array of string. Actions the payment intent's current state accepts, each a
         * POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
         * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
         * something outside the payment intent: an open risk review, an order payment attempt that
         * is using this payment, a closed order, or the merchant's account. An order-owned payment
         * intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes
         * only when the payment intent changes. Always empty for buyer credentials. New actions
         * may be added. [] enum: "confirm", "capture", "cancel". supported_actions[] (Value):
         * string. Value enum: "confirm", "capture", "cancel". tip_money (Optional): {@link
         * MoneyValue} or null. Portion of amount_money that is a tip. Uses amount_money's currency
         * and is at most amount_money. tip_money.anyOf[1] (Value): {@link MoneyValue}. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * tip_money.anyOf[2] (Value): null. transaction_purpose (Optional): string. Why a bank
         * debit is taken. Set only when payment_options includes ach_debit, and fixed once the
         * payment intent exists. Value enum: "goods", "services", "other". updated_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Itemized invoice, subscription, and automatic tax fees collected with this payment.
             * Available to the merchant only. Empty until fees settle or when no add-ons apply.
             * Refunds do not return or revise these fees. Absent until Flint has determined and
             * verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * [] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment intent, with the
             * fee type and amount.
             */
            "add_on_fees"?: Array<PaymentAddOnFee>;
            /**
             * The amount requested from the buyer, including any tip_money. Capturing doesn't
             * change it: after a partial capture it still shows the requested amount, and
             * captured_money shows what was collected. On a standalone payment intent, PATCH can
             * change it only before the first confirmation attempt. An amount_money or tip_money
             * change that leaves too little for stored splits returns LIMIT_EXCEEDED at the
             * changed field with minimum_money. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Effective Flint deadline to capture a manual-capture hold: the earlier of the
             * provider capture deadline and any order resource guarantee. Order guarantees last at
             * most 24 hours from the payment attempt start and may end earlier. Capture is refused
             * at or after this time, even while status is requires_capture. Omitted until a hold
             * is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "authorization_expires_at"?: string;
            /**
             * When the processor authorized the payment. Absent until then. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "authorized_at"?: string;
            /**
             * The amount the processor authorized. It always equals amount_money and doesn't
             * change once set, even when a capture collects more. On a payment intent canceled
             * with cancellation_reason payment_returned, it equals the authorization Flint
             * released instead. Absent until the payment is authorized, and on payments canceled
             * before authorization. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "authorized_money"?: MoneyValue;
            /**
             * Flint-normalized reason the payment intent was canceled. Present only while status
             * is canceled. Unknown processor values are returned as payment_canceled. Value enum:
             * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
             * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
             * "payment_returned".
             */
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            /**
             * The part of the authorization you can still capture. Positive only while status is
             * requires_capture, and zero after you capture or cancel or the authorization expires.
             * The authorization lapses at authorization_expires_at, and a capture attempted after
             * that fails even if this is positive. Absent until the payment is authorized.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "capturable_money"?: MoneyValue;
            /**
             * When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
             */
            "capture_method"?: "automatic" | "manual" | (string & {});
            /**
             * When money was captured. For automatic capture, this is when the payment succeeded.
             * Absent until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "captured_at"?: string;
            /**
             * The amount collected from the buyer, including captured_tip_money. Reconcile revenue
             * and print receipts from this amount, not amount_money. Zero while a hold is open,
             * and positive whenever status is succeeded. After an overcapture it is above
             * authorized_money. Also positive on a payment intent canceled with
             * cancellation_reason payment_returned: Flint captured the money and is returning it
             * through a refund with reason payment_returned. processing_fee_money,
             * merchant_net_money, and refunds are based on it. Absent until the payment is
             * authorized. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_money"?: MoneyValue;
            /**
             * The part of captured_money that is a tip: the capture's tip_money when it sent one,
             * otherwise the tip the authorization carried, at most captured_money. tip_money keeps
             * the tip the authorization carried. Refunds return it last. Absent until the payment
             * is captured. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_tip_money"?: MoneyValue;
            /**
             * Flint checkout session ID associated with this payment, when present. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at"?: string;
            /**
             * The linked customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer. anyOf[1]
             * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
             * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Whether the customer was present for the most recent confirmation. absent means
             * Flint charged a saved card without them, as a merchant-initiated payment on its
             * stored credential. Subscription renewals and automatic invoice charges are absent,
             * and other payments are absent only when confirmed or paid with customer_presence
             * absent. A customer who pays any of them with a card they enter makes it present.
             * Each confirmation sets it again. Value enum: "present", "absent".
             */
            "customer_presence": "present" | "absent" | (string & {});
            /**
             * Dispute state of this payment. none means no dispute or inquiry is open or recorded.
             * The inquiry_ values track an issuer inquiry or early warning that isn't a
             * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other".
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
             * Caller-owned identifier for this resource in an external system. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string | null;
            /**
             * Present when a payment provider asked Flint to pause fulfillment for this payment.
             * While its status is active, open fulfillments on the order are on hold with reason
             * payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts
             * and when it lifts. A hold on fulfillment tied to a payment, with the reason, the
             * action required, and whether the hold is active or released.
             */
            "fulfillment_hold"?: PaymentFulfillmentHold;
            /**
             * The linked invoice. Returned only with expand=invoice. Present only when `expand`
             * includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1]
             * (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields, including
             * status, due date, and paid, outstanding, and refunded amounts, returned when the
             * invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * Invoice this payment intent collects, when it pays an invoice. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value):
             * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
             * normalized error code, a message, the failure time, and remediation. anyOf[2]
             * (Value): null.
             */
            "last_payment_error": ((PaymentErrorSummary) | (null));
            /**
             * The order payment attempt that most recently used this payment intent. Start times
             * count to the second; of attempts that started in the same second, the one with the
             * highest order_payment_attempt_id is named. `null` when no attempt has used it yet;
             * omitted for payment intents without an order. It changes only when an attempt starts
             * using this payment intent, which advances version. Returned with merchant
             * credentials; omitted with buyer and checkout credentials. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "latest_order_payment_attempt_id"?: string | null;
            /**
             * Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Captured amount minus processing_fee_money, every amount in add_on_fees,
             * platform_fee.amount_money, and each split commitment. Live, succeeded and
             * fully_reversed splits commit their whole amount; payment_not_completed and
             * install_revoked cancellations commit nothing. A failed split commits only money
             * already taken back before failure; its remainder returns to the collecting merchant.
             * Refunds do not reduce the commitment. Later merchant assessments and credits are
             * separate balance effects. Absent until Flint has determined and verified the fee. If
             * Flint can't verify it when you read the payment intent, the field is omitted rather
             * than shown unverified; read the payment intent again later. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "merchant_net_money"?: MoneyValue;
            /**
             * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't
             * returned. Caller-owned key-value data stored on a resource. Keys starting with
             * flint_ are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The linked order. Returned only with expand=order. Present only when `expand`
             * includes `order`; `null` when expanded and there is no related order. anyOf[1]
             * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
             * payment and refund status, and pricing and settlement amounts, returned when the
             * order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order this payment intent belongs to. Create it through the order and confirm it
             * with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
             * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
             * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Whether one capture can collect more than the authorization, and the most it can
             * collect. Present once a payment with request_overcapture true is authorized. Read it
             * to show the limit; capture enforces it. Whether one capture can collect more than
             * the authorization.
             */
            "overcapture"?: PaymentIntentOvercapture;
            /**
             * How the payment was started. Fixed when the payment intent is created. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
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
            /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
             * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum:
             * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
             */
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            /**
             * Summary of the card or bank account used for the payment. Absent until a payment
             * source is attached. A summary of the payment source used for a payment, by
             * funding-method family, with card or bank account display details.
             */
            "payment_source"?: PaymentSourceSummary;
            /**
             * The platform fee a partner app charges on this payment, when it created the payment
             * with an install token and a fee. Absent when the payment carries none. Returned only
             * to merchant credentials; omitted for buyer and checkout credentials. The platform
             * fee a partner app charges on this payment. The merchant pays it beside
             * processing_fee_money and add_on_fees, and merchant_net_money subtracts it.
             */
            "platform_fee"?: PaymentIntentPlatformFee;
            /**
             * Flint's all-in processing fee for this payment. It is the complete price Flint
             * charges to process the payment, never a provider cost passed through. The fee is
             * final once the card payment is captured or the ACH payment succeeds; canceled
             * payments and failures before success have none, except a payment intent canceled
             * with cancellation_reason payment_returned, which shows the fee charged at capture on
             * the charge Flint is returning. Flint returns that fee to your balance separately.
             * Invoice, subscription, and automatic tax fees are itemized separately in
             * add_on_fees. Your net for the payment is captured_money minus this fee and the
             * add-on fees. Refunds do not return or revise it. Absent until Flint has determined
             * and verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "processing_fee_money"?: MoneyValue;
            /**
             * The reader the payment is or was last presented on. Set when Flint presents it and
             * kept afterward. While processing or requires_action with a reader_id, the payment is
             * on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
             */
            "reader_id"?: string;
            /**
             * Email address for this payment's receipt. When it isn't set, Flint uses the
             * customer's email. Format: email. maxLength: 255. Example: "buyer@example.com".
             */
            "receipt_email"?: string | null;
            /**
             * Last time Flint can refund this payment through the original payment method. A
             * refund submitted at exactly this time is accepted; after it, refunds through the
             * original payment method are refused. Today only Affirm has a refund window: 120 days
             * after the payment settles. `null` when the method has no refund window, the payment
             * has not succeeded with captured money, or its capture time is missing. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refund_expires_at": string | null;
            /**
             * How much of captured_money has been refunded, including value issued as store
             * credit, based on refunded_money. Value enum: "none", "partially_refunded",
             * "refunded".
             */
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Total refunded against captured_money, including value issued as store credit and
             * processor refunds still pending. Failed and canceled refunds aren't counted. Zero
             * when nothing has been refunded. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money"?: MoneyValue;
            /**
             * The part of the authorization returned to the buyer without being charged: the
             * uncaptured remainder after a partial capture, or the whole authorization after a
             * cancellation or expiry. It was never collected, so it needs no refund and can't be
             * captured later. Zero after a capture at or above the authorization. Absent until the
             * payment is authorized. Monetary amount represented as integer minor units plus an
             * ISO 4217 currency code.
             */
            "released_money"?: MoneyValue;
            /**
             * Whether one capture may collect more than the authorization where the card network
             * allows it. Fixed at create. Always present with merchant credentials; omitted with
             * buyer and checkout credentials.
             */
            "request_overcapture"?: boolean;
            /**
             * Flint return ID associated with this payment, when present. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * The return resolution whose balance this payment collects. Set for exchange balances
             * and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Risk assessment. Always present with merchant credentials; null when no risk
             * assessment is available. Omitted with the checkout credential. anyOf[1] (Value):
             * {@link PaymentRisk}. The risk assessment for a payment intent, with its risk level,
             * score, outcome, and any matched rule or review. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentRisk) | (null));
            /**
             * The payment option the most recent confirmation used. Absent until the payment
             * intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm",
             * "ach_debit", "card_present".
             */
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            /**
             * Top-level PaymentSplit children in their current state, embedded whole. Empty when
             * the payment has no splits. Child changes do not send payment_intent.updated. Omitted
             * for buyer and checkout credentials. [] (Value): {@link PaymentSplit}. A top-level
             * child of a payment intent dividing the collecting merchant's payment funds with one
             * seller. Both parties read this same resource with their own credentials.
             */
            "splits"?: Array<PaymentSplit>;
            /**
             * The text shown on the buyer's card or bank statement for this payment. `null` until
             * the charge is created. `null` when the provider supplies no descriptor. Frozen when
             * the charge is created.
             */
            "statement_descriptor": string | null;
            /**
             * Lifecycle status. requires_payment_method covers both a new payment intent and one
             * whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
             * and expired are final. Refunds and disputes never change status. Value enum:
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
             * The subscription whose billing charged this payment: its first charge, a renewal, a
             * retry or a setup fee. Not set for the checkout payment that created a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /** Opaque payment reference to share with merchant support. Do not parse its format. */
            "support_reference": string;
            /**
             * Actions the payment intent's current state accepts, each a POST to
             * /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
             * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
             * something outside the payment intent: an open risk review, an order payment attempt
             * that is using this payment, a closed order, or the merchant's account. An
             * order-owned payment intent never lists confirm; pay it with POST
             * /v1/orders/{order_id}/pay. The list changes only when the payment intent changes.
             * Always empty for buyer credentials. New actions may be added. [] enum: "confirm",
             * "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture", "cancel".
             */
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            /**
             * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
             * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "tip_money"?: ((MoneyValue) | (null));
            /**
             * Why a bank debit is taken. Set only when payment_options includes ach_debit, and
             * fixed once the payment intent exists. Value enum: "goods", "services", "other".
             */
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.created". */
    "event_type"?: "payment_intent.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`. object.add_on_fees
     * (Optional): Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic
     * tax fees collected with this payment. Available to the merchant only. Empty until fees
     * settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until
     * Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. object.add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a
     * payment intent, with the fee type and amount. object.amount_money (Required): {@link
     * MoneyValue}. The amount requested from the buyer, including any tip_money. Capturing doesn't
     * change it: after a partial capture it still shows the requested amount, and captured_money
     * shows what was collected. On a standalone payment intent, PATCH can change it only before
     * the first confirmation attempt. An amount_money or tip_money change that leaves too little
     * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.authorization_expires_at (Optional): string. Effective Flint deadline to capture a
     * manual-capture hold: the earlier of the provider capture deadline and any order resource
     * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end
     * earlier. Capture is refused at or after this time, even while status is requires_capture.
     * Omitted until a hold is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.authorized_at (Optional): string. When the processor authorized the payment. Absent
     * until then. Format: date-time. Example: "2026-08-02T16:00:00Z". object.authorized_money
     * (Optional): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set, even when a capture collects more. On a payment
     * intent canceled with cancellation_reason payment_returned, it equals the authorization Flint
     * released instead. Absent until the payment is authorized, and on payments canceled before
     * authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.cancellation_reason (Optional): string. Flint-normalized reason the payment
     * intent was canceled. Present only while status is canceled. Unknown processor values are
     * returned as payment_canceled. Value enum: "requested_by_customer", "duplicate",
     * "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed",
     * "payment_canceled", "payment_returned". object.capturable_money (Optional): {@link
     * MoneyValue}. The part of the authorization you can still capture. Positive only while status
     * is requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.capture_method
     * (Optional): string. When money is collected. Defaults to automatic. Value enum: "automatic",
     * "manual". object.captured_at (Optional): string. When money was captured. For automatic
     * capture, this is when the payment succeeded. Absent until capture. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.captured_money (Optional): {@link MoneyValue}. The
     * amount collected from the buyer, including captured_tip_money. Reconcile revenue and print
     * receipts from this amount, not amount_money. Zero while a hold is open, and positive
     * whenever status is succeeded. After an overcapture it is above authorized_money. Also
     * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
     * captured the money and is returning it through a refund with reason payment_returned.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.captured_tip_money (Optional): {@link MoneyValue}. The part of
     * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip
     * the authorization carried, at most captured_money. tip_money keeps the tip the authorization
     * carried. Refunds return it last. Absent until the payment is captured. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.checkout_session_id (Optional): string. Flint checkout session ID associated with
     * this payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.created_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. The linked customer.
     * Returned only with expand=customer. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. Customer linked to this payment intent. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_presence (Required): string. Whether the
     * customer was present for the most recent confirmation. absent means Flint charged a saved
     * card without them, as a merchant-initiated payment on its stored credential. Subscription
     * renewals and automatic invoice charges are absent, and other payments are absent only when
     * confirmed or paid with customer_presence absent. A customer who pays any of them with a card
     * they enter makes it present. Each confirmation sets it again. Value enum: "present",
     * "absent". object.dispute_status (Optional): string. Dispute state of this payment. none
     * means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry
     * or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its
     * deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string or null. Caller-owned identifier for this
     * resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.fulfillment_hold (Optional): {@link PaymentFulfillmentHold}. Present when a payment
     * provider asked Flint to pause fulfillment for this payment. While its status is active, open
     * fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. The linked invoice. Returned only with expand=invoice. Present only when `expand`
     * includes `invoice`; `null` when expanded and there is no related invoice.
     * object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice.anyOf[2] (Value): null. object.invoice_id
     * (Optional): string. Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.last_payment_error (Required): {@link
     * PaymentErrorSummary} or null. Most recent payment error. Null when no payment error is
     * recorded. object.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.last_payment_error.anyOf[2] (Value): null.
     * object.latest_order_payment_attempt_id (Optional): string or null. The order payment attempt
     * that most recently used this payment intent. Start times count to the second; of attempts
     * that started in the same second, the one with the highest order_payment_attempt_id is named.
     * `null` when no attempt has used it yet; omitted for payment intents without an order. It
     * changes only when an attempt starts using this payment intent, which advances version.
     * Returned with merchant credentials; omitted with buyer and checkout credentials. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.merchant_id (Optional): string. Merchant that owns
     * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_net_money
     * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount in
     * add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded and
     * fully_reversed splits commit their whole amount; payment_not_completed and install_revoked
     * cancellations commit nothing. A failed split commits only money already taken back before
     * failure; its remainder returns to the collecting merchant. Refunds do not reduce the
     * commitment. Later merchant assessments and credits are separate balance effects. Absent
     * until Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.metadata (Required): {@link MetadataMap}. Caller-owned metadata. Keys starting
     * with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. The
     * linked order. Returned only with expand=order. Present only when `expand` includes `order`;
     * `null` when expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. Order this payment
     * intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.overcapture (Optional): {@link
     * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization, and
     * the most it can collect. Present once a payment with request_overcapture true is authorized.
     * Read it to show the limit; capture enforces it. Whether one capture can collect more than
     * the authorization. object.payment_flow (Required): string. How the payment was started.
     * Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * object.payment_intent_id (Required): string. Flint payment intent ID. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_options (Required): Array of string. Payment
     * options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present". object.payment_options[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * object.payment_source (Optional): {@link PaymentSourceSummary}. Summary of the card or bank
     * account used for the payment. Absent until a payment source is attached. A summary of the
     * payment source used for a payment, by funding-method family, with card or bank account
     * display details. object.platform_fee (Optional): {@link PaymentIntentPlatformFee}. The
     * platform fee a partner app charges on this payment, when it created the payment with an
     * install token and a fee. Absent when the payment carries none. Returned only to merchant
     * credentials; omitted for buyer and checkout credentials. The platform fee a partner app
     * charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees,
     * and merchant_net_money subtracts it. object.processing_fee_money (Optional): {@link
     * MoneyValue}. Flint's all-in processing fee for this payment. It is the complete price Flint
     * charges to process the payment, never a provider cost passed through. The fee is final once
     * the card payment is captured or the ACH payment succeeds; canceled payments and failures
     * before success have none, except a payment intent canceled with cancellation_reason
     * payment_returned, which shows the fee charged at capture on the charge Flint is returning.
     * Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax
     * fees are itemized separately in add_on_fees. Your net for the payment is captured_money
     * minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint
     * has determined and verified the fee. If Flint can't verify it when you read the payment
     * intent, the field is omitted rather than shown unverified; read the payment intent again
     * later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reader_id (Optional): string. The reader the payment is or was last presented on. Set
     * when Flint presents it and kept afterward. While processing or requires_action with a
     * reader_id, the payment is on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * object.receipt_email (Optional): string or null. Email address for this payment's receipt.
     * When it isn't set, Flint uses the customer's email. Format: email. maxLength: 255. Example:
     * "buyer@example.com". object.refund_expires_at (Required): string or null. Last time Flint
     * can refund this payment through the original payment method. A refund submitted at exactly
     * this time is accepted; after it, refunds through the original payment method are refused.
     * Today only Affirm has a refund window: 120 days after the payment settles. `null` when the
     * method has no refund window, the payment has not succeeded with captured money, or its
     * capture time is missing. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refund_status (Optional): string. How much of captured_money has been refunded,
     * including value issued as store credit, based on refunded_money. Value enum: "none",
     * "partially_refunded", "refunded". object.refunded_money (Optional): {@link MoneyValue}.
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.released_money (Optional): {@link MoneyValue}. The part of the authorization
     * returned to the buyer without being charged: the uncaptured remainder after a partial
     * capture, or the whole authorization after a cancellation or expiry. It was never collected,
     * so it needs no refund and can't be captured later. Zero after a capture at or above the
     * authorization. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.request_overcapture (Optional):
     * boolean. Whether one capture may collect more than the authorization where the card network
     * allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and
     * checkout credentials. object.return_id (Optional): string. Flint return ID associated with
     * this payment, when present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. The return resolution whose balance this
     * payment collects. Set for exchange balances and corrections. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.risk (Optional): {@link PaymentRisk} or null.
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. object.risk.anyOf[1] (Value): {@link
     * PaymentRisk}. The risk assessment for a payment intent, with its risk level, score, outcome,
     * and any matched rule or review. object.risk.anyOf[2] (Value): null.
     * object.selected_payment_option (Optional): string. The payment option the most recent
     * confirmation used. Absent until the payment intent is first confirmed. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". object.splits (Optional):
     * Array of {@link PaymentSplit}. Top-level PaymentSplit children in their current state,
     * embedded whole. Empty when the payment has no splits. Child changes do not send
     * payment_intent.updated. Omitted for buyer and checkout credentials. object.splits[] (Value):
     * {@link PaymentSplit}. A top-level child of a payment intent dividing the collecting
     * merchant's payment funds with one seller. Both parties read this same resource with their
     * own credentials. object.statement_descriptor (Required): string or null. The text shown on
     * the buyer's card or bank statement for this payment. `null` until the charge is created.
     * `null` when the provider supplies no descriptor. Frozen when the charge is created.
     * object.status (Required): string. Lifecycle status. requires_payment_method covers both a
     * new payment intent and one whose last attempt failed, so read last_payment_error with it.
     * succeeded, canceled, and expired are final. Refunds and disputes never change status. Value
     * enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". object.subscription_id (Optional):
     * string. The subscription whose billing charged this payment: its first charge, a renewal, a
     * retry or a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.support_reference (Required): string. Opaque
     * payment reference to share with merchant support. Do not parse its format.
     * object.supported_actions (Required): Array of string. Actions the payment intent's current
     * state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action
     * that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused
     * because of something outside the payment intent: an open risk review, an order payment
     * attempt that is using this payment, a closed order, or the merchant's account. An
     * order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay.
     * The list changes only when the payment intent changes. Always empty for buyer credentials.
     * New actions may be added. [] enum: "confirm", "capture", "cancel".
     * object.supported_actions[] (Value): string. Value enum: "confirm", "capture", "cancel".
     * object.tip_money (Optional): {@link MoneyValue} or null. Portion of amount_money that is a
     * tip. Uses amount_money's currency and is at most amount_money. object.tip_money.anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.tip_money.anyOf[2] (Value): null. object.transaction_purpose
     * (Optional): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other". object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`. add_on_fees (Optional):
         * Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic tax fees
         * collected with this payment. Available to the merchant only. Empty until fees settle or
         * when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint
         * has determined and verified the fee. If Flint can't verify it when you read the payment
         * intent, the field is omitted rather than shown unverified; read the payment intent again
         * later. add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment
         * intent, with the fee type and amount. amount_money (Required): {@link MoneyValue}. The
         * amount requested from the buyer, including any tip_money. Capturing doesn't change it:
         * after a partial capture it still shows the requested amount, and captured_money shows
         * what was collected. On a standalone payment intent, PATCH can change it only before the
         * first confirmation attempt. An amount_money or tip_money change that leaves too little
         * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * authorization_expires_at (Optional): string. Effective Flint deadline to capture a
         * manual-capture hold: the earlier of the provider capture deadline and any order resource
         * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may
         * end earlier. Capture is refused at or after this time, even while status is
         * requires_capture. Omitted until a hold is placed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". authorized_at (Optional): string. When the processor authorized
         * the payment. Absent until then. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * authorized_money (Optional): {@link MoneyValue}. The amount the processor authorized. It
         * always equals amount_money and doesn't change once set, even when a capture collects
         * more. On a payment intent canceled with cancellation_reason payment_returned, it equals
         * the authorization Flint released instead. Absent until the payment is authorized, and on
         * payments canceled before authorization. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. cancellation_reason (Optional): string.
         * Flint-normalized reason the payment intent was canceled. Present only while status is
         * canceled. Unknown processor values are returned as payment_canceled. Value enum:
         * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
         * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
         * "payment_returned". capturable_money (Optional): {@link MoneyValue}. The part of the
         * authorization you can still capture. Positive only while status is requires_capture, and
         * zero after you capture or cancel or the authorization expires. The authorization lapses
         * at authorization_expires_at, and a capture attempted after that fails even if this is
         * positive. Absent until the payment is authorized. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. capture_method (Optional): string. When
         * money is collected. Defaults to automatic. Value enum: "automatic", "manual".
         * captured_at (Optional): string. When money was captured. For automatic capture, this is
         * when the payment succeeded. Absent until capture. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". captured_money (Optional): {@link MoneyValue}. The amount
         * collected from the buyer, including captured_tip_money. Reconcile revenue and print
         * receipts from this amount, not amount_money. Zero while a hold is open, and positive
         * whenever status is succeeded. After an overcapture it is above authorized_money. Also
         * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
         * captured the money and is returning it through a refund with reason payment_returned.
         * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. captured_tip_money (Optional): {@link MoneyValue}. The part of
         * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the
         * tip the authorization carried, at most captured_money. tip_money keeps the tip the
         * authorization carried. Refunds return it last. Absent until the payment is captured.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * checkout_session_id (Optional): string. Flint checkout session ID associated with this
         * payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". created_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. The linked customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. Customer linked to this payment intent. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_presence (Required): string. Whether the
         * customer was present for the most recent confirmation. absent means Flint charged a
         * saved card without them, as a merchant-initiated payment on its stored credential.
         * Subscription renewals and automatic invoice charges are absent, and other payments are
         * absent only when confirmed or paid with customer_presence absent. A customer who pays
         * any of them with a card they enter makes it present. Each confirmation sets it again.
         * Value enum: "present", "absent". dispute_status (Optional): string. Dispute state of
         * this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values
         * track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with
         * GET /v1/disputes for its deadline and evidence. Value enum: "none",
         * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
         * "under_review", "won", "lost", "prevented", "other". external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". fulfillment_hold (Optional):
         * {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint to pause
         * fulfillment for this payment. While its status is active, open fulfillments on the order
         * are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent
         * when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with
         * the reason, the action required, and whether the hold is active or released. invoice
         * (Optional): {@link ExpandedInvoiceSummary} or null. The linked invoice. Returned only
         * with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded
         * and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. Invoice this payment
         * intent collects, when it pays an invoice. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * last_payment_error (Required): {@link PaymentErrorSummary} or null. Most recent payment
         * error. Null when no payment error is recorded. last_payment_error.anyOf[1] (Value):
         * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
         * normalized error code, a message, the failure time, and remediation.
         * last_payment_error.anyOf[2] (Value): null. latest_order_payment_attempt_id (Optional):
         * string or null. The order payment attempt that most recently used this payment intent.
         * Start times count to the second; of attempts that started in the same second, the one
         * with the highest order_payment_attempt_id is named. `null` when no attempt has used it
         * yet; omitted for payment intents without an order. It changes only when an attempt
         * starts using this payment intent, which advances version. Returned with merchant
         * credentials; omitted with buyer and checkout credentials. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". merchant_id (Optional): string. Merchant that owns
         * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_net_money
         * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount
         * in add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded
         * and fully_reversed splits commit their whole amount; payment_not_completed and
         * install_revoked cancellations commit nothing. A failed split commits only money already
         * taken back before failure; its remainder returns to the collecting merchant. Refunds do
         * not reduce the commitment. Later merchant assessments and credits are separate balance
         * effects. Absent until Flint has determined and verified the fee. If Flint can't verify
         * it when you read the payment intent, the field is omitted rather than shown unverified;
         * read the payment intent again later. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. The linked order. Returned only with
         * expand=order. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. Order this payment intent belongs to. Create it through the
         * order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
         * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
         * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". overcapture (Optional): {@link
         * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization,
         * and the most it can collect. Present once a payment with request_overcapture true is
         * authorized. Read it to show the limit; capture enforces it. Whether one capture can
         * collect more than the authorization. payment_flow (Required): string. How the payment
         * was started. Fixed when the payment intent is created. Value enum: "checkout",
         * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
         * "virtual_terminal", "api". payment_intent_id (Required): string. Flint payment intent
         * ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_options (Required): Array of
         * string. Payment options the buyer can use for this payment. [] enum: "card",
         * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". payment_options[]
         * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
         * "card_present". payment_source (Optional): {@link PaymentSourceSummary}. Summary of the
         * card or bank account used for the payment. Absent until a payment source is attached. A
         * summary of the payment source used for a payment, by funding-method family, with card or
         * bank account display details. platform_fee (Optional): {@link PaymentIntentPlatformFee}.
         * The platform fee a partner app charges on this payment, when it created the payment with
         * an install token and a fee. Absent when the payment carries none. Returned only to
         * merchant credentials; omitted for buyer and checkout credentials. The platform fee a
         * partner app charges on this payment. The merchant pays it beside processing_fee_money
         * and add_on_fees, and merchant_net_money subtracts it. processing_fee_money (Optional):
         * {@link MoneyValue}. Flint's all-in processing fee for this payment. It is the complete
         * price Flint charges to process the payment, never a provider cost passed through. The
         * fee is final once the card payment is captured or the ACH payment succeeds; canceled
         * payments and failures before success have none, except a payment intent canceled with
         * cancellation_reason payment_returned, which shows the fee charged at capture on the
         * charge Flint is returning. Flint returns that fee to your balance separately. Invoice,
         * subscription, and automatic tax fees are itemized separately in add_on_fees. Your net
         * for the payment is captured_money minus this fee and the add-on fees. Refunds do not
         * return or revise it. Absent until Flint has determined and verified the fee. If Flint
         * can't verify it when you read the payment intent, the field is omitted rather than shown
         * unverified; read the payment intent again later. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reader_id (Optional): string. The reader the
         * payment is or was last presented on. Set when Flint presents it and kept afterward.
         * While processing or requires_action with a reader_id, the payment is on that reader now.
         * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". receipt_email (Optional): string or null.
         * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
         * email. Format: email. maxLength: 255. Example: "buyer@example.com". refund_expires_at
         * (Required): string or null. Last time Flint can refund this payment through the original
         * payment method. A refund submitted at exactly this time is accepted; after it, refunds
         * through the original payment method are refused. Today only Affirm has a refund window:
         * 120 days after the payment settles. `null` when the method has no refund window, the
         * payment has not succeeded with captured money, or its capture time is missing. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refund_status (Optional): string. How much
         * of captured_money has been refunded, including value issued as store credit, based on
         * refunded_money. Value enum: "none", "partially_refunded", "refunded". refunded_money
         * (Optional): {@link MoneyValue}. Total refunded against captured_money, including value
         * issued as store credit and processor refunds still pending. Failed and canceled refunds
         * aren't counted. Zero when nothing has been refunded. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. released_money (Optional): {@link
         * MoneyValue}. The part of the authorization returned to the buyer without being charged:
         * the uncaptured remainder after a partial capture, or the whole authorization after a
         * cancellation or expiry. It was never collected, so it needs no refund and can't be
         * captured later. Zero after a capture at or above the authorization. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. request_overcapture (Optional): boolean. Whether one capture may
         * collect more than the authorization where the card network allows it. Fixed at create.
         * Always present with merchant credentials; omitted with buyer and checkout credentials.
         * return_id (Optional): string. Flint return ID associated with this payment, when
         * present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional):
         * string. The return resolution whose balance this payment collects. Set for exchange
         * balances and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". risk (Optional):
         * {@link PaymentRisk} or null. Risk assessment. Always present with merchant credentials;
         * null when no risk assessment is available. Omitted with the checkout credential.
         * risk.anyOf[1] (Value): {@link PaymentRisk}. The risk assessment for a payment intent,
         * with its risk level, score, outcome, and any matched rule or review. risk.anyOf[2]
         * (Value): null. selected_payment_option (Optional): string. The payment option the most
         * recent confirmation used. Absent until the payment intent is first confirmed. Value
         * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". splits
         * (Optional): Array of {@link PaymentSplit}. Top-level PaymentSplit children in their
         * current state, embedded whole. Empty when the payment has no splits. Child changes do
         * not send payment_intent.updated. Omitted for buyer and checkout credentials. splits[]
         * (Value): {@link PaymentSplit}. A top-level child of a payment intent dividing the
         * collecting merchant's payment funds with one seller. Both parties read this same
         * resource with their own credentials. statement_descriptor (Required): string or null.
         * The text shown on the buyer's card or bank statement for this payment. `null` until the
         * charge is created. `null` when the provider supplies no descriptor. Frozen when the
         * charge is created. status (Required): string. Lifecycle status. requires_payment_method
         * covers both a new payment intent and one whose last attempt failed, so read
         * last_payment_error with it. succeeded, canceled, and expired are final. Refunds and
         * disputes never change status. Value enum: "requires_payment_method",
         * "requires_confirmation", "requires_action", "processing", "requires_capture",
         * "canceled", "succeeded", "expired". subscription_id (Optional): string. The subscription
         * whose billing charged this payment: its first charge, a renewal, a retry or a setup fee.
         * Not set for the checkout payment that created a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". support_reference (Required): string. Opaque payment
         * reference to share with merchant support. Do not parse its format. supported_actions
         * (Required): Array of string. Actions the payment intent's current state accepts, each a
         * POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
         * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
         * something outside the payment intent: an open risk review, an order payment attempt that
         * is using this payment, a closed order, or the merchant's account. An order-owned payment
         * intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes
         * only when the payment intent changes. Always empty for buyer credentials. New actions
         * may be added. [] enum: "confirm", "capture", "cancel". supported_actions[] (Value):
         * string. Value enum: "confirm", "capture", "cancel". tip_money (Optional): {@link
         * MoneyValue} or null. Portion of amount_money that is a tip. Uses amount_money's currency
         * and is at most amount_money. tip_money.anyOf[1] (Value): {@link MoneyValue}. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * tip_money.anyOf[2] (Value): null. transaction_purpose (Optional): string. Why a bank
         * debit is taken. Set only when payment_options includes ach_debit, and fixed once the
         * payment intent exists. Value enum: "goods", "services", "other". updated_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Itemized invoice, subscription, and automatic tax fees collected with this payment.
             * Available to the merchant only. Empty until fees settle or when no add-ons apply.
             * Refunds do not return or revise these fees. Absent until Flint has determined and
             * verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * [] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment intent, with the
             * fee type and amount.
             */
            "add_on_fees"?: Array<PaymentAddOnFee>;
            /**
             * The amount requested from the buyer, including any tip_money. Capturing doesn't
             * change it: after a partial capture it still shows the requested amount, and
             * captured_money shows what was collected. On a standalone payment intent, PATCH can
             * change it only before the first confirmation attempt. An amount_money or tip_money
             * change that leaves too little for stored splits returns LIMIT_EXCEEDED at the
             * changed field with minimum_money. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Effective Flint deadline to capture a manual-capture hold: the earlier of the
             * provider capture deadline and any order resource guarantee. Order guarantees last at
             * most 24 hours from the payment attempt start and may end earlier. Capture is refused
             * at or after this time, even while status is requires_capture. Omitted until a hold
             * is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "authorization_expires_at"?: string;
            /**
             * When the processor authorized the payment. Absent until then. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "authorized_at"?: string;
            /**
             * The amount the processor authorized. It always equals amount_money and doesn't
             * change once set, even when a capture collects more. On a payment intent canceled
             * with cancellation_reason payment_returned, it equals the authorization Flint
             * released instead. Absent until the payment is authorized, and on payments canceled
             * before authorization. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "authorized_money"?: MoneyValue;
            /**
             * Flint-normalized reason the payment intent was canceled. Present only while status
             * is canceled. Unknown processor values are returned as payment_canceled. Value enum:
             * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
             * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
             * "payment_returned".
             */
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            /**
             * The part of the authorization you can still capture. Positive only while status is
             * requires_capture, and zero after you capture or cancel or the authorization expires.
             * The authorization lapses at authorization_expires_at, and a capture attempted after
             * that fails even if this is positive. Absent until the payment is authorized.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "capturable_money"?: MoneyValue;
            /**
             * When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
             */
            "capture_method"?: "automatic" | "manual" | (string & {});
            /**
             * When money was captured. For automatic capture, this is when the payment succeeded.
             * Absent until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "captured_at"?: string;
            /**
             * The amount collected from the buyer, including captured_tip_money. Reconcile revenue
             * and print receipts from this amount, not amount_money. Zero while a hold is open,
             * and positive whenever status is succeeded. After an overcapture it is above
             * authorized_money. Also positive on a payment intent canceled with
             * cancellation_reason payment_returned: Flint captured the money and is returning it
             * through a refund with reason payment_returned. processing_fee_money,
             * merchant_net_money, and refunds are based on it. Absent until the payment is
             * authorized. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_money"?: MoneyValue;
            /**
             * The part of captured_money that is a tip: the capture's tip_money when it sent one,
             * otherwise the tip the authorization carried, at most captured_money. tip_money keeps
             * the tip the authorization carried. Refunds return it last. Absent until the payment
             * is captured. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_tip_money"?: MoneyValue;
            /**
             * Flint checkout session ID associated with this payment, when present. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at"?: string;
            /**
             * The linked customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer. anyOf[1]
             * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
             * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Whether the customer was present for the most recent confirmation. absent means
             * Flint charged a saved card without them, as a merchant-initiated payment on its
             * stored credential. Subscription renewals and automatic invoice charges are absent,
             * and other payments are absent only when confirmed or paid with customer_presence
             * absent. A customer who pays any of them with a card they enter makes it present.
             * Each confirmation sets it again. Value enum: "present", "absent".
             */
            "customer_presence": "present" | "absent" | (string & {});
            /**
             * Dispute state of this payment. none means no dispute or inquiry is open or recorded.
             * The inquiry_ values track an issuer inquiry or early warning that isn't a
             * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other".
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
             * Caller-owned identifier for this resource in an external system. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string | null;
            /**
             * Present when a payment provider asked Flint to pause fulfillment for this payment.
             * While its status is active, open fulfillments on the order are on hold with reason
             * payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts
             * and when it lifts. A hold on fulfillment tied to a payment, with the reason, the
             * action required, and whether the hold is active or released.
             */
            "fulfillment_hold"?: PaymentFulfillmentHold;
            /**
             * The linked invoice. Returned only with expand=invoice. Present only when `expand`
             * includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1]
             * (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields, including
             * status, due date, and paid, outstanding, and refunded amounts, returned when the
             * invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * Invoice this payment intent collects, when it pays an invoice. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value):
             * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
             * normalized error code, a message, the failure time, and remediation. anyOf[2]
             * (Value): null.
             */
            "last_payment_error": ((PaymentErrorSummary) | (null));
            /**
             * The order payment attempt that most recently used this payment intent. Start times
             * count to the second; of attempts that started in the same second, the one with the
             * highest order_payment_attempt_id is named. `null` when no attempt has used it yet;
             * omitted for payment intents without an order. It changes only when an attempt starts
             * using this payment intent, which advances version. Returned with merchant
             * credentials; omitted with buyer and checkout credentials. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "latest_order_payment_attempt_id"?: string | null;
            /**
             * Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Captured amount minus processing_fee_money, every amount in add_on_fees,
             * platform_fee.amount_money, and each split commitment. Live, succeeded and
             * fully_reversed splits commit their whole amount; payment_not_completed and
             * install_revoked cancellations commit nothing. A failed split commits only money
             * already taken back before failure; its remainder returns to the collecting merchant.
             * Refunds do not reduce the commitment. Later merchant assessments and credits are
             * separate balance effects. Absent until Flint has determined and verified the fee. If
             * Flint can't verify it when you read the payment intent, the field is omitted rather
             * than shown unverified; read the payment intent again later. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "merchant_net_money"?: MoneyValue;
            /**
             * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't
             * returned. Caller-owned key-value data stored on a resource. Keys starting with
             * flint_ are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The linked order. Returned only with expand=order. Present only when `expand`
             * includes `order`; `null` when expanded and there is no related order. anyOf[1]
             * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
             * payment and refund status, and pricing and settlement amounts, returned when the
             * order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order this payment intent belongs to. Create it through the order and confirm it
             * with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
             * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
             * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Whether one capture can collect more than the authorization, and the most it can
             * collect. Present once a payment with request_overcapture true is authorized. Read it
             * to show the limit; capture enforces it. Whether one capture can collect more than
             * the authorization.
             */
            "overcapture"?: PaymentIntentOvercapture;
            /**
             * How the payment was started. Fixed when the payment intent is created. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
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
            /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
             * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum:
             * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
             */
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            /**
             * Summary of the card or bank account used for the payment. Absent until a payment
             * source is attached. A summary of the payment source used for a payment, by
             * funding-method family, with card or bank account display details.
             */
            "payment_source"?: PaymentSourceSummary;
            /**
             * The platform fee a partner app charges on this payment, when it created the payment
             * with an install token and a fee. Absent when the payment carries none. Returned only
             * to merchant credentials; omitted for buyer and checkout credentials. The platform
             * fee a partner app charges on this payment. The merchant pays it beside
             * processing_fee_money and add_on_fees, and merchant_net_money subtracts it.
             */
            "platform_fee"?: PaymentIntentPlatformFee;
            /**
             * Flint's all-in processing fee for this payment. It is the complete price Flint
             * charges to process the payment, never a provider cost passed through. The fee is
             * final once the card payment is captured or the ACH payment succeeds; canceled
             * payments and failures before success have none, except a payment intent canceled
             * with cancellation_reason payment_returned, which shows the fee charged at capture on
             * the charge Flint is returning. Flint returns that fee to your balance separately.
             * Invoice, subscription, and automatic tax fees are itemized separately in
             * add_on_fees. Your net for the payment is captured_money minus this fee and the
             * add-on fees. Refunds do not return or revise it. Absent until Flint has determined
             * and verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "processing_fee_money"?: MoneyValue;
            /**
             * The reader the payment is or was last presented on. Set when Flint presents it and
             * kept afterward. While processing or requires_action with a reader_id, the payment is
             * on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
             */
            "reader_id"?: string;
            /**
             * Email address for this payment's receipt. When it isn't set, Flint uses the
             * customer's email. Format: email. maxLength: 255. Example: "buyer@example.com".
             */
            "receipt_email"?: string | null;
            /**
             * Last time Flint can refund this payment through the original payment method. A
             * refund submitted at exactly this time is accepted; after it, refunds through the
             * original payment method are refused. Today only Affirm has a refund window: 120 days
             * after the payment settles. `null` when the method has no refund window, the payment
             * has not succeeded with captured money, or its capture time is missing. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refund_expires_at": string | null;
            /**
             * How much of captured_money has been refunded, including value issued as store
             * credit, based on refunded_money. Value enum: "none", "partially_refunded",
             * "refunded".
             */
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Total refunded against captured_money, including value issued as store credit and
             * processor refunds still pending. Failed and canceled refunds aren't counted. Zero
             * when nothing has been refunded. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money"?: MoneyValue;
            /**
             * The part of the authorization returned to the buyer without being charged: the
             * uncaptured remainder after a partial capture, or the whole authorization after a
             * cancellation or expiry. It was never collected, so it needs no refund and can't be
             * captured later. Zero after a capture at or above the authorization. Absent until the
             * payment is authorized. Monetary amount represented as integer minor units plus an
             * ISO 4217 currency code.
             */
            "released_money"?: MoneyValue;
            /**
             * Whether one capture may collect more than the authorization where the card network
             * allows it. Fixed at create. Always present with merchant credentials; omitted with
             * buyer and checkout credentials.
             */
            "request_overcapture"?: boolean;
            /**
             * Flint return ID associated with this payment, when present. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * The return resolution whose balance this payment collects. Set for exchange balances
             * and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Risk assessment. Always present with merchant credentials; null when no risk
             * assessment is available. Omitted with the checkout credential. anyOf[1] (Value):
             * {@link PaymentRisk}. The risk assessment for a payment intent, with its risk level,
             * score, outcome, and any matched rule or review. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentRisk) | (null));
            /**
             * The payment option the most recent confirmation used. Absent until the payment
             * intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm",
             * "ach_debit", "card_present".
             */
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            /**
             * Top-level PaymentSplit children in their current state, embedded whole. Empty when
             * the payment has no splits. Child changes do not send payment_intent.updated. Omitted
             * for buyer and checkout credentials. [] (Value): {@link PaymentSplit}. A top-level
             * child of a payment intent dividing the collecting merchant's payment funds with one
             * seller. Both parties read this same resource with their own credentials.
             */
            "splits"?: Array<PaymentSplit>;
            /**
             * The text shown on the buyer's card or bank statement for this payment. `null` until
             * the charge is created. `null` when the provider supplies no descriptor. Frozen when
             * the charge is created.
             */
            "statement_descriptor": string | null;
            /**
             * Lifecycle status. requires_payment_method covers both a new payment intent and one
             * whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
             * and expired are final. Refunds and disputes never change status. Value enum:
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
             * The subscription whose billing charged this payment: its first charge, a renewal, a
             * retry or a setup fee. Not set for the checkout payment that created a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /** Opaque payment reference to share with merchant support. Do not parse its format. */
            "support_reference": string;
            /**
             * Actions the payment intent's current state accepts, each a POST to
             * /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
             * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
             * something outside the payment intent: an open risk review, an order payment attempt
             * that is using this payment, a closed order, or the merchant's account. An
             * order-owned payment intent never lists confirm; pay it with POST
             * /v1/orders/{order_id}/pay. The list changes only when the payment intent changes.
             * Always empty for buyer credentials. New actions may be added. [] enum: "confirm",
             * "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture", "cancel".
             */
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            /**
             * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
             * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "tip_money"?: ((MoneyValue) | (null));
            /**
             * Why a bank debit is taken. Set only when payment_options includes ach_debit, and
             * fixed once the payment intent exists. Value enum: "goods", "services", "other".
             */
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.created". */
    "event_type"?: "payment_intent.created";
});
export type PaymentIntentExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_on_fees"?: Array<PaymentAddOnFee>;
            "amount_money": MoneyValue;
            "authorization_expires_at"?: string;
            "authorized_at"?: string;
            "authorized_money"?: MoneyValue;
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            "capturable_money"?: MoneyValue;
            "capture_method"?: "automatic" | "manual" | (string & {});
            "captured_at"?: string;
            "captured_money"?: MoneyValue;
            "captured_tip_money"?: MoneyValue;
            "checkout_session_id"?: string;
            "created_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_presence": "present" | "absent" | (string & {});
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
            "external_reference_id"?: string | null;
            "fulfillment_hold"?: PaymentFulfillmentHold;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "last_payment_error": ((PaymentErrorSummary) | (null));
            "latest_order_payment_attempt_id"?: string | null;
            "merchant_id"?: string;
            "merchant_net_money"?: MoneyValue;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "overcapture"?: PaymentIntentOvercapture;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent_id": string;
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            "payment_source"?: PaymentSourceSummary;
            "platform_fee"?: PaymentIntentPlatformFee;
            "processing_fee_money"?: MoneyValue;
            "reader_id"?: string;
            "receipt_email"?: string | null;
            "refund_expires_at": string | null;
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money"?: MoneyValue;
            "released_money"?: MoneyValue;
            "request_overcapture"?: boolean;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "risk"?: ((PaymentRisk) | (null));
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            "splits"?: Array<PaymentSplit>;
            "statement_descriptor": string | null;
            "status": "requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {});
            "subscription_id"?: string;
            "support_reference": string;
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            "tip_money"?: ((MoneyValue) | (null));
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_on_fees"?: Array<PaymentAddOnFee>;
            "amount_money": MoneyValue;
            "authorization_expires_at"?: string;
            "authorized_at"?: string;
            "authorized_money"?: MoneyValue;
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            "capturable_money"?: MoneyValue;
            "capture_method"?: "automatic" | "manual" | (string & {});
            "captured_at"?: string;
            "captured_money"?: MoneyValue;
            "captured_tip_money"?: MoneyValue;
            "checkout_session_id"?: string;
            "created_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_presence": "present" | "absent" | (string & {});
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
            "external_reference_id"?: string | null;
            "fulfillment_hold"?: PaymentFulfillmentHold;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "last_payment_error": ((PaymentErrorSummary) | (null));
            "latest_order_payment_attempt_id"?: string | null;
            "merchant_id"?: string;
            "merchant_net_money"?: MoneyValue;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "overcapture"?: PaymentIntentOvercapture;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent_id": string;
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            "payment_source"?: PaymentSourceSummary;
            "platform_fee"?: PaymentIntentPlatformFee;
            "processing_fee_money"?: MoneyValue;
            "reader_id"?: string;
            "receipt_email"?: string | null;
            "refund_expires_at": string | null;
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money"?: MoneyValue;
            "released_money"?: MoneyValue;
            "request_overcapture"?: boolean;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "risk"?: ((PaymentRisk) | (null));
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            "splits"?: Array<PaymentSplit>;
            "statement_descriptor": string | null;
            "status": "requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {});
            "subscription_id"?: string;
            "support_reference": string;
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            "tip_money"?: ((MoneyValue) | (null));
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.expired";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`. object.add_on_fees
     * (Optional): Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic
     * tax fees collected with this payment. Available to the merchant only. Empty until fees
     * settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until
     * Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. object.add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a
     * payment intent, with the fee type and amount. object.amount_money (Required): {@link
     * MoneyValue}. The amount requested from the buyer, including any tip_money. Capturing doesn't
     * change it: after a partial capture it still shows the requested amount, and captured_money
     * shows what was collected. On a standalone payment intent, PATCH can change it only before
     * the first confirmation attempt. An amount_money or tip_money change that leaves too little
     * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.authorization_expires_at (Optional): string. Effective Flint deadline to capture a
     * manual-capture hold: the earlier of the provider capture deadline and any order resource
     * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end
     * earlier. Capture is refused at or after this time, even while status is requires_capture.
     * Omitted until a hold is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.authorized_at (Optional): string. When the processor authorized the payment. Absent
     * until then. Format: date-time. Example: "2026-08-02T16:00:00Z". object.authorized_money
     * (Optional): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set, even when a capture collects more. On a payment
     * intent canceled with cancellation_reason payment_returned, it equals the authorization Flint
     * released instead. Absent until the payment is authorized, and on payments canceled before
     * authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.cancellation_reason (Optional): string. Flint-normalized reason the payment
     * intent was canceled. Present only while status is canceled. Unknown processor values are
     * returned as payment_canceled. Value enum: "requested_by_customer", "duplicate",
     * "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed",
     * "payment_canceled", "payment_returned". object.capturable_money (Optional): {@link
     * MoneyValue}. The part of the authorization you can still capture. Positive only while status
     * is requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.capture_method
     * (Optional): string. When money is collected. Defaults to automatic. Value enum: "automatic",
     * "manual". object.captured_at (Optional): string. When money was captured. For automatic
     * capture, this is when the payment succeeded. Absent until capture. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.captured_money (Optional): {@link MoneyValue}. The
     * amount collected from the buyer, including captured_tip_money. Reconcile revenue and print
     * receipts from this amount, not amount_money. Zero while a hold is open, and positive
     * whenever status is succeeded. After an overcapture it is above authorized_money. Also
     * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
     * captured the money and is returning it through a refund with reason payment_returned.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.captured_tip_money (Optional): {@link MoneyValue}. The part of
     * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip
     * the authorization carried, at most captured_money. tip_money keeps the tip the authorization
     * carried. Refunds return it last. Absent until the payment is captured. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.checkout_session_id (Optional): string. Flint checkout session ID associated with
     * this payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.created_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. The linked customer.
     * Returned only with expand=customer. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. Customer linked to this payment intent. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_presence (Required): string. Whether the
     * customer was present for the most recent confirmation. absent means Flint charged a saved
     * card without them, as a merchant-initiated payment on its stored credential. Subscription
     * renewals and automatic invoice charges are absent, and other payments are absent only when
     * confirmed or paid with customer_presence absent. A customer who pays any of them with a card
     * they enter makes it present. Each confirmation sets it again. Value enum: "present",
     * "absent". object.dispute_status (Optional): string. Dispute state of this payment. none
     * means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry
     * or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its
     * deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string or null. Caller-owned identifier for this
     * resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.fulfillment_hold (Optional): {@link PaymentFulfillmentHold}. Present when a payment
     * provider asked Flint to pause fulfillment for this payment. While its status is active, open
     * fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. The linked invoice. Returned only with expand=invoice. Present only when `expand`
     * includes `invoice`; `null` when expanded and there is no related invoice.
     * object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice.anyOf[2] (Value): null. object.invoice_id
     * (Optional): string. Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.last_payment_error (Required): {@link
     * PaymentErrorSummary} or null. Most recent payment error. Null when no payment error is
     * recorded. object.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.last_payment_error.anyOf[2] (Value): null.
     * object.latest_order_payment_attempt_id (Optional): string or null. The order payment attempt
     * that most recently used this payment intent. Start times count to the second; of attempts
     * that started in the same second, the one with the highest order_payment_attempt_id is named.
     * `null` when no attempt has used it yet; omitted for payment intents without an order. It
     * changes only when an attempt starts using this payment intent, which advances version.
     * Returned with merchant credentials; omitted with buyer and checkout credentials. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.merchant_id (Optional): string. Merchant that owns
     * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_net_money
     * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount in
     * add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded and
     * fully_reversed splits commit their whole amount; payment_not_completed and install_revoked
     * cancellations commit nothing. A failed split commits only money already taken back before
     * failure; its remainder returns to the collecting merchant. Refunds do not reduce the
     * commitment. Later merchant assessments and credits are separate balance effects. Absent
     * until Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.metadata (Required): {@link MetadataMap}. Caller-owned metadata. Keys starting
     * with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. The
     * linked order. Returned only with expand=order. Present only when `expand` includes `order`;
     * `null` when expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. Order this payment
     * intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.overcapture (Optional): {@link
     * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization, and
     * the most it can collect. Present once a payment with request_overcapture true is authorized.
     * Read it to show the limit; capture enforces it. Whether one capture can collect more than
     * the authorization. object.payment_flow (Required): string. How the payment was started.
     * Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * object.payment_intent_id (Required): string. Flint payment intent ID. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_options (Required): Array of string. Payment
     * options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present". object.payment_options[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * object.payment_source (Optional): {@link PaymentSourceSummary}. Summary of the card or bank
     * account used for the payment. Absent until a payment source is attached. A summary of the
     * payment source used for a payment, by funding-method family, with card or bank account
     * display details. object.platform_fee (Optional): {@link PaymentIntentPlatformFee}. The
     * platform fee a partner app charges on this payment, when it created the payment with an
     * install token and a fee. Absent when the payment carries none. Returned only to merchant
     * credentials; omitted for buyer and checkout credentials. The platform fee a partner app
     * charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees,
     * and merchant_net_money subtracts it. object.processing_fee_money (Optional): {@link
     * MoneyValue}. Flint's all-in processing fee for this payment. It is the complete price Flint
     * charges to process the payment, never a provider cost passed through. The fee is final once
     * the card payment is captured or the ACH payment succeeds; canceled payments and failures
     * before success have none, except a payment intent canceled with cancellation_reason
     * payment_returned, which shows the fee charged at capture on the charge Flint is returning.
     * Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax
     * fees are itemized separately in add_on_fees. Your net for the payment is captured_money
     * minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint
     * has determined and verified the fee. If Flint can't verify it when you read the payment
     * intent, the field is omitted rather than shown unverified; read the payment intent again
     * later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reader_id (Optional): string. The reader the payment is or was last presented on. Set
     * when Flint presents it and kept afterward. While processing or requires_action with a
     * reader_id, the payment is on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * object.receipt_email (Optional): string or null. Email address for this payment's receipt.
     * When it isn't set, Flint uses the customer's email. Format: email. maxLength: 255. Example:
     * "buyer@example.com". object.refund_expires_at (Required): string or null. Last time Flint
     * can refund this payment through the original payment method. A refund submitted at exactly
     * this time is accepted; after it, refunds through the original payment method are refused.
     * Today only Affirm has a refund window: 120 days after the payment settles. `null` when the
     * method has no refund window, the payment has not succeeded with captured money, or its
     * capture time is missing. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refund_status (Optional): string. How much of captured_money has been refunded,
     * including value issued as store credit, based on refunded_money. Value enum: "none",
     * "partially_refunded", "refunded". object.refunded_money (Optional): {@link MoneyValue}.
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.released_money (Optional): {@link MoneyValue}. The part of the authorization
     * returned to the buyer without being charged: the uncaptured remainder after a partial
     * capture, or the whole authorization after a cancellation or expiry. It was never collected,
     * so it needs no refund and can't be captured later. Zero after a capture at or above the
     * authorization. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.request_overcapture (Optional):
     * boolean. Whether one capture may collect more than the authorization where the card network
     * allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and
     * checkout credentials. object.return_id (Optional): string. Flint return ID associated with
     * this payment, when present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. The return resolution whose balance this
     * payment collects. Set for exchange balances and corrections. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.risk (Optional): {@link PaymentRisk} or null.
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. object.risk.anyOf[1] (Value): {@link
     * PaymentRisk}. The risk assessment for a payment intent, with its risk level, score, outcome,
     * and any matched rule or review. object.risk.anyOf[2] (Value): null.
     * object.selected_payment_option (Optional): string. The payment option the most recent
     * confirmation used. Absent until the payment intent is first confirmed. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". object.splits (Optional):
     * Array of {@link PaymentSplit}. Top-level PaymentSplit children in their current state,
     * embedded whole. Empty when the payment has no splits. Child changes do not send
     * payment_intent.updated. Omitted for buyer and checkout credentials. object.splits[] (Value):
     * {@link PaymentSplit}. A top-level child of a payment intent dividing the collecting
     * merchant's payment funds with one seller. Both parties read this same resource with their
     * own credentials. object.statement_descriptor (Required): string or null. The text shown on
     * the buyer's card or bank statement for this payment. `null` until the charge is created.
     * `null` when the provider supplies no descriptor. Frozen when the charge is created.
     * object.status (Required): string. Lifecycle status. requires_payment_method covers both a
     * new payment intent and one whose last attempt failed, so read last_payment_error with it.
     * succeeded, canceled, and expired are final. Refunds and disputes never change status. Value
     * enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". object.subscription_id (Optional):
     * string. The subscription whose billing charged this payment: its first charge, a renewal, a
     * retry or a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.support_reference (Required): string. Opaque
     * payment reference to share with merchant support. Do not parse its format.
     * object.supported_actions (Required): Array of string. Actions the payment intent's current
     * state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action
     * that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused
     * because of something outside the payment intent: an open risk review, an order payment
     * attempt that is using this payment, a closed order, or the merchant's account. An
     * order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay.
     * The list changes only when the payment intent changes. Always empty for buyer credentials.
     * New actions may be added. [] enum: "confirm", "capture", "cancel".
     * object.supported_actions[] (Value): string. Value enum: "confirm", "capture", "cancel".
     * object.tip_money (Optional): {@link MoneyValue} or null. Portion of amount_money that is a
     * tip. Uses amount_money's currency and is at most amount_money. object.tip_money.anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.tip_money.anyOf[2] (Value): null. object.transaction_purpose
     * (Optional): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other". object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`. add_on_fees (Optional):
         * Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic tax fees
         * collected with this payment. Available to the merchant only. Empty until fees settle or
         * when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint
         * has determined and verified the fee. If Flint can't verify it when you read the payment
         * intent, the field is omitted rather than shown unverified; read the payment intent again
         * later. add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment
         * intent, with the fee type and amount. amount_money (Required): {@link MoneyValue}. The
         * amount requested from the buyer, including any tip_money. Capturing doesn't change it:
         * after a partial capture it still shows the requested amount, and captured_money shows
         * what was collected. On a standalone payment intent, PATCH can change it only before the
         * first confirmation attempt. An amount_money or tip_money change that leaves too little
         * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * authorization_expires_at (Optional): string. Effective Flint deadline to capture a
         * manual-capture hold: the earlier of the provider capture deadline and any order resource
         * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may
         * end earlier. Capture is refused at or after this time, even while status is
         * requires_capture. Omitted until a hold is placed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". authorized_at (Optional): string. When the processor authorized
         * the payment. Absent until then. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * authorized_money (Optional): {@link MoneyValue}. The amount the processor authorized. It
         * always equals amount_money and doesn't change once set, even when a capture collects
         * more. On a payment intent canceled with cancellation_reason payment_returned, it equals
         * the authorization Flint released instead. Absent until the payment is authorized, and on
         * payments canceled before authorization. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. cancellation_reason (Optional): string.
         * Flint-normalized reason the payment intent was canceled. Present only while status is
         * canceled. Unknown processor values are returned as payment_canceled. Value enum:
         * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
         * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
         * "payment_returned". capturable_money (Optional): {@link MoneyValue}. The part of the
         * authorization you can still capture. Positive only while status is requires_capture, and
         * zero after you capture or cancel or the authorization expires. The authorization lapses
         * at authorization_expires_at, and a capture attempted after that fails even if this is
         * positive. Absent until the payment is authorized. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. capture_method (Optional): string. When
         * money is collected. Defaults to automatic. Value enum: "automatic", "manual".
         * captured_at (Optional): string. When money was captured. For automatic capture, this is
         * when the payment succeeded. Absent until capture. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". captured_money (Optional): {@link MoneyValue}. The amount
         * collected from the buyer, including captured_tip_money. Reconcile revenue and print
         * receipts from this amount, not amount_money. Zero while a hold is open, and positive
         * whenever status is succeeded. After an overcapture it is above authorized_money. Also
         * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
         * captured the money and is returning it through a refund with reason payment_returned.
         * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. captured_tip_money (Optional): {@link MoneyValue}. The part of
         * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the
         * tip the authorization carried, at most captured_money. tip_money keeps the tip the
         * authorization carried. Refunds return it last. Absent until the payment is captured.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * checkout_session_id (Optional): string. Flint checkout session ID associated with this
         * payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". created_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. The linked customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. Customer linked to this payment intent. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_presence (Required): string. Whether the
         * customer was present for the most recent confirmation. absent means Flint charged a
         * saved card without them, as a merchant-initiated payment on its stored credential.
         * Subscription renewals and automatic invoice charges are absent, and other payments are
         * absent only when confirmed or paid with customer_presence absent. A customer who pays
         * any of them with a card they enter makes it present. Each confirmation sets it again.
         * Value enum: "present", "absent". dispute_status (Optional): string. Dispute state of
         * this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values
         * track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with
         * GET /v1/disputes for its deadline and evidence. Value enum: "none",
         * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
         * "under_review", "won", "lost", "prevented", "other". external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". fulfillment_hold (Optional):
         * {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint to pause
         * fulfillment for this payment. While its status is active, open fulfillments on the order
         * are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent
         * when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with
         * the reason, the action required, and whether the hold is active or released. invoice
         * (Optional): {@link ExpandedInvoiceSummary} or null. The linked invoice. Returned only
         * with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded
         * and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. Invoice this payment
         * intent collects, when it pays an invoice. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * last_payment_error (Required): {@link PaymentErrorSummary} or null. Most recent payment
         * error. Null when no payment error is recorded. last_payment_error.anyOf[1] (Value):
         * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
         * normalized error code, a message, the failure time, and remediation.
         * last_payment_error.anyOf[2] (Value): null. latest_order_payment_attempt_id (Optional):
         * string or null. The order payment attempt that most recently used this payment intent.
         * Start times count to the second; of attempts that started in the same second, the one
         * with the highest order_payment_attempt_id is named. `null` when no attempt has used it
         * yet; omitted for payment intents without an order. It changes only when an attempt
         * starts using this payment intent, which advances version. Returned with merchant
         * credentials; omitted with buyer and checkout credentials. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". merchant_id (Optional): string. Merchant that owns
         * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_net_money
         * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount
         * in add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded
         * and fully_reversed splits commit their whole amount; payment_not_completed and
         * install_revoked cancellations commit nothing. A failed split commits only money already
         * taken back before failure; its remainder returns to the collecting merchant. Refunds do
         * not reduce the commitment. Later merchant assessments and credits are separate balance
         * effects. Absent until Flint has determined and verified the fee. If Flint can't verify
         * it when you read the payment intent, the field is omitted rather than shown unverified;
         * read the payment intent again later. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. The linked order. Returned only with
         * expand=order. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. Order this payment intent belongs to. Create it through the
         * order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
         * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
         * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". overcapture (Optional): {@link
         * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization,
         * and the most it can collect. Present once a payment with request_overcapture true is
         * authorized. Read it to show the limit; capture enforces it. Whether one capture can
         * collect more than the authorization. payment_flow (Required): string. How the payment
         * was started. Fixed when the payment intent is created. Value enum: "checkout",
         * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
         * "virtual_terminal", "api". payment_intent_id (Required): string. Flint payment intent
         * ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_options (Required): Array of
         * string. Payment options the buyer can use for this payment. [] enum: "card",
         * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". payment_options[]
         * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
         * "card_present". payment_source (Optional): {@link PaymentSourceSummary}. Summary of the
         * card or bank account used for the payment. Absent until a payment source is attached. A
         * summary of the payment source used for a payment, by funding-method family, with card or
         * bank account display details. platform_fee (Optional): {@link PaymentIntentPlatformFee}.
         * The platform fee a partner app charges on this payment, when it created the payment with
         * an install token and a fee. Absent when the payment carries none. Returned only to
         * merchant credentials; omitted for buyer and checkout credentials. The platform fee a
         * partner app charges on this payment. The merchant pays it beside processing_fee_money
         * and add_on_fees, and merchant_net_money subtracts it. processing_fee_money (Optional):
         * {@link MoneyValue}. Flint's all-in processing fee for this payment. It is the complete
         * price Flint charges to process the payment, never a provider cost passed through. The
         * fee is final once the card payment is captured or the ACH payment succeeds; canceled
         * payments and failures before success have none, except a payment intent canceled with
         * cancellation_reason payment_returned, which shows the fee charged at capture on the
         * charge Flint is returning. Flint returns that fee to your balance separately. Invoice,
         * subscription, and automatic tax fees are itemized separately in add_on_fees. Your net
         * for the payment is captured_money minus this fee and the add-on fees. Refunds do not
         * return or revise it. Absent until Flint has determined and verified the fee. If Flint
         * can't verify it when you read the payment intent, the field is omitted rather than shown
         * unverified; read the payment intent again later. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reader_id (Optional): string. The reader the
         * payment is or was last presented on. Set when Flint presents it and kept afterward.
         * While processing or requires_action with a reader_id, the payment is on that reader now.
         * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". receipt_email (Optional): string or null.
         * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
         * email. Format: email. maxLength: 255. Example: "buyer@example.com". refund_expires_at
         * (Required): string or null. Last time Flint can refund this payment through the original
         * payment method. A refund submitted at exactly this time is accepted; after it, refunds
         * through the original payment method are refused. Today only Affirm has a refund window:
         * 120 days after the payment settles. `null` when the method has no refund window, the
         * payment has not succeeded with captured money, or its capture time is missing. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refund_status (Optional): string. How much
         * of captured_money has been refunded, including value issued as store credit, based on
         * refunded_money. Value enum: "none", "partially_refunded", "refunded". refunded_money
         * (Optional): {@link MoneyValue}. Total refunded against captured_money, including value
         * issued as store credit and processor refunds still pending. Failed and canceled refunds
         * aren't counted. Zero when nothing has been refunded. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. released_money (Optional): {@link
         * MoneyValue}. The part of the authorization returned to the buyer without being charged:
         * the uncaptured remainder after a partial capture, or the whole authorization after a
         * cancellation or expiry. It was never collected, so it needs no refund and can't be
         * captured later. Zero after a capture at or above the authorization. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. request_overcapture (Optional): boolean. Whether one capture may
         * collect more than the authorization where the card network allows it. Fixed at create.
         * Always present with merchant credentials; omitted with buyer and checkout credentials.
         * return_id (Optional): string. Flint return ID associated with this payment, when
         * present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional):
         * string. The return resolution whose balance this payment collects. Set for exchange
         * balances and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". risk (Optional):
         * {@link PaymentRisk} or null. Risk assessment. Always present with merchant credentials;
         * null when no risk assessment is available. Omitted with the checkout credential.
         * risk.anyOf[1] (Value): {@link PaymentRisk}. The risk assessment for a payment intent,
         * with its risk level, score, outcome, and any matched rule or review. risk.anyOf[2]
         * (Value): null. selected_payment_option (Optional): string. The payment option the most
         * recent confirmation used. Absent until the payment intent is first confirmed. Value
         * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". splits
         * (Optional): Array of {@link PaymentSplit}. Top-level PaymentSplit children in their
         * current state, embedded whole. Empty when the payment has no splits. Child changes do
         * not send payment_intent.updated. Omitted for buyer and checkout credentials. splits[]
         * (Value): {@link PaymentSplit}. A top-level child of a payment intent dividing the
         * collecting merchant's payment funds with one seller. Both parties read this same
         * resource with their own credentials. statement_descriptor (Required): string or null.
         * The text shown on the buyer's card or bank statement for this payment. `null` until the
         * charge is created. `null` when the provider supplies no descriptor. Frozen when the
         * charge is created. status (Required): string. Lifecycle status. requires_payment_method
         * covers both a new payment intent and one whose last attempt failed, so read
         * last_payment_error with it. succeeded, canceled, and expired are final. Refunds and
         * disputes never change status. Value enum: "requires_payment_method",
         * "requires_confirmation", "requires_action", "processing", "requires_capture",
         * "canceled", "succeeded", "expired". subscription_id (Optional): string. The subscription
         * whose billing charged this payment: its first charge, a renewal, a retry or a setup fee.
         * Not set for the checkout payment that created a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". support_reference (Required): string. Opaque payment
         * reference to share with merchant support. Do not parse its format. supported_actions
         * (Required): Array of string. Actions the payment intent's current state accepts, each a
         * POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
         * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
         * something outside the payment intent: an open risk review, an order payment attempt that
         * is using this payment, a closed order, or the merchant's account. An order-owned payment
         * intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes
         * only when the payment intent changes. Always empty for buyer credentials. New actions
         * may be added. [] enum: "confirm", "capture", "cancel". supported_actions[] (Value):
         * string. Value enum: "confirm", "capture", "cancel". tip_money (Optional): {@link
         * MoneyValue} or null. Portion of amount_money that is a tip. Uses amount_money's currency
         * and is at most amount_money. tip_money.anyOf[1] (Value): {@link MoneyValue}. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * tip_money.anyOf[2] (Value): null. transaction_purpose (Optional): string. Why a bank
         * debit is taken. Set only when payment_options includes ach_debit, and fixed once the
         * payment intent exists. Value enum: "goods", "services", "other". updated_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Itemized invoice, subscription, and automatic tax fees collected with this payment.
             * Available to the merchant only. Empty until fees settle or when no add-ons apply.
             * Refunds do not return or revise these fees. Absent until Flint has determined and
             * verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * [] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment intent, with the
             * fee type and amount.
             */
            "add_on_fees"?: Array<PaymentAddOnFee>;
            /**
             * The amount requested from the buyer, including any tip_money. Capturing doesn't
             * change it: after a partial capture it still shows the requested amount, and
             * captured_money shows what was collected. On a standalone payment intent, PATCH can
             * change it only before the first confirmation attempt. An amount_money or tip_money
             * change that leaves too little for stored splits returns LIMIT_EXCEEDED at the
             * changed field with minimum_money. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Effective Flint deadline to capture a manual-capture hold: the earlier of the
             * provider capture deadline and any order resource guarantee. Order guarantees last at
             * most 24 hours from the payment attempt start and may end earlier. Capture is refused
             * at or after this time, even while status is requires_capture. Omitted until a hold
             * is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "authorization_expires_at"?: string;
            /**
             * When the processor authorized the payment. Absent until then. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "authorized_at"?: string;
            /**
             * The amount the processor authorized. It always equals amount_money and doesn't
             * change once set, even when a capture collects more. On a payment intent canceled
             * with cancellation_reason payment_returned, it equals the authorization Flint
             * released instead. Absent until the payment is authorized, and on payments canceled
             * before authorization. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "authorized_money"?: MoneyValue;
            /**
             * Flint-normalized reason the payment intent was canceled. Present only while status
             * is canceled. Unknown processor values are returned as payment_canceled. Value enum:
             * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
             * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
             * "payment_returned".
             */
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            /**
             * The part of the authorization you can still capture. Positive only while status is
             * requires_capture, and zero after you capture or cancel or the authorization expires.
             * The authorization lapses at authorization_expires_at, and a capture attempted after
             * that fails even if this is positive. Absent until the payment is authorized.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "capturable_money"?: MoneyValue;
            /**
             * When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
             */
            "capture_method"?: "automatic" | "manual" | (string & {});
            /**
             * When money was captured. For automatic capture, this is when the payment succeeded.
             * Absent until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "captured_at"?: string;
            /**
             * The amount collected from the buyer, including captured_tip_money. Reconcile revenue
             * and print receipts from this amount, not amount_money. Zero while a hold is open,
             * and positive whenever status is succeeded. After an overcapture it is above
             * authorized_money. Also positive on a payment intent canceled with
             * cancellation_reason payment_returned: Flint captured the money and is returning it
             * through a refund with reason payment_returned. processing_fee_money,
             * merchant_net_money, and refunds are based on it. Absent until the payment is
             * authorized. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_money"?: MoneyValue;
            /**
             * The part of captured_money that is a tip: the capture's tip_money when it sent one,
             * otherwise the tip the authorization carried, at most captured_money. tip_money keeps
             * the tip the authorization carried. Refunds return it last. Absent until the payment
             * is captured. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_tip_money"?: MoneyValue;
            /**
             * Flint checkout session ID associated with this payment, when present. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at"?: string;
            /**
             * The linked customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer. anyOf[1]
             * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
             * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Whether the customer was present for the most recent confirmation. absent means
             * Flint charged a saved card without them, as a merchant-initiated payment on its
             * stored credential. Subscription renewals and automatic invoice charges are absent,
             * and other payments are absent only when confirmed or paid with customer_presence
             * absent. A customer who pays any of them with a card they enter makes it present.
             * Each confirmation sets it again. Value enum: "present", "absent".
             */
            "customer_presence": "present" | "absent" | (string & {});
            /**
             * Dispute state of this payment. none means no dispute or inquiry is open or recorded.
             * The inquiry_ values track an issuer inquiry or early warning that isn't a
             * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other".
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
             * Caller-owned identifier for this resource in an external system. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string | null;
            /**
             * Present when a payment provider asked Flint to pause fulfillment for this payment.
             * While its status is active, open fulfillments on the order are on hold with reason
             * payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts
             * and when it lifts. A hold on fulfillment tied to a payment, with the reason, the
             * action required, and whether the hold is active or released.
             */
            "fulfillment_hold"?: PaymentFulfillmentHold;
            /**
             * The linked invoice. Returned only with expand=invoice. Present only when `expand`
             * includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1]
             * (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields, including
             * status, due date, and paid, outstanding, and refunded amounts, returned when the
             * invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * Invoice this payment intent collects, when it pays an invoice. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value):
             * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
             * normalized error code, a message, the failure time, and remediation. anyOf[2]
             * (Value): null.
             */
            "last_payment_error": ((PaymentErrorSummary) | (null));
            /**
             * The order payment attempt that most recently used this payment intent. Start times
             * count to the second; of attempts that started in the same second, the one with the
             * highest order_payment_attempt_id is named. `null` when no attempt has used it yet;
             * omitted for payment intents without an order. It changes only when an attempt starts
             * using this payment intent, which advances version. Returned with merchant
             * credentials; omitted with buyer and checkout credentials. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "latest_order_payment_attempt_id"?: string | null;
            /**
             * Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Captured amount minus processing_fee_money, every amount in add_on_fees,
             * platform_fee.amount_money, and each split commitment. Live, succeeded and
             * fully_reversed splits commit their whole amount; payment_not_completed and
             * install_revoked cancellations commit nothing. A failed split commits only money
             * already taken back before failure; its remainder returns to the collecting merchant.
             * Refunds do not reduce the commitment. Later merchant assessments and credits are
             * separate balance effects. Absent until Flint has determined and verified the fee. If
             * Flint can't verify it when you read the payment intent, the field is omitted rather
             * than shown unverified; read the payment intent again later. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "merchant_net_money"?: MoneyValue;
            /**
             * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't
             * returned. Caller-owned key-value data stored on a resource. Keys starting with
             * flint_ are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The linked order. Returned only with expand=order. Present only when `expand`
             * includes `order`; `null` when expanded and there is no related order. anyOf[1]
             * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
             * payment and refund status, and pricing and settlement amounts, returned when the
             * order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order this payment intent belongs to. Create it through the order and confirm it
             * with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
             * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
             * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Whether one capture can collect more than the authorization, and the most it can
             * collect. Present once a payment with request_overcapture true is authorized. Read it
             * to show the limit; capture enforces it. Whether one capture can collect more than
             * the authorization.
             */
            "overcapture"?: PaymentIntentOvercapture;
            /**
             * How the payment was started. Fixed when the payment intent is created. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
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
            /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
             * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum:
             * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
             */
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            /**
             * Summary of the card or bank account used for the payment. Absent until a payment
             * source is attached. A summary of the payment source used for a payment, by
             * funding-method family, with card or bank account display details.
             */
            "payment_source"?: PaymentSourceSummary;
            /**
             * The platform fee a partner app charges on this payment, when it created the payment
             * with an install token and a fee. Absent when the payment carries none. Returned only
             * to merchant credentials; omitted for buyer and checkout credentials. The platform
             * fee a partner app charges on this payment. The merchant pays it beside
             * processing_fee_money and add_on_fees, and merchant_net_money subtracts it.
             */
            "platform_fee"?: PaymentIntentPlatformFee;
            /**
             * Flint's all-in processing fee for this payment. It is the complete price Flint
             * charges to process the payment, never a provider cost passed through. The fee is
             * final once the card payment is captured or the ACH payment succeeds; canceled
             * payments and failures before success have none, except a payment intent canceled
             * with cancellation_reason payment_returned, which shows the fee charged at capture on
             * the charge Flint is returning. Flint returns that fee to your balance separately.
             * Invoice, subscription, and automatic tax fees are itemized separately in
             * add_on_fees. Your net for the payment is captured_money minus this fee and the
             * add-on fees. Refunds do not return or revise it. Absent until Flint has determined
             * and verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "processing_fee_money"?: MoneyValue;
            /**
             * The reader the payment is or was last presented on. Set when Flint presents it and
             * kept afterward. While processing or requires_action with a reader_id, the payment is
             * on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
             */
            "reader_id"?: string;
            /**
             * Email address for this payment's receipt. When it isn't set, Flint uses the
             * customer's email. Format: email. maxLength: 255. Example: "buyer@example.com".
             */
            "receipt_email"?: string | null;
            /**
             * Last time Flint can refund this payment through the original payment method. A
             * refund submitted at exactly this time is accepted; after it, refunds through the
             * original payment method are refused. Today only Affirm has a refund window: 120 days
             * after the payment settles. `null` when the method has no refund window, the payment
             * has not succeeded with captured money, or its capture time is missing. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refund_expires_at": string | null;
            /**
             * How much of captured_money has been refunded, including value issued as store
             * credit, based on refunded_money. Value enum: "none", "partially_refunded",
             * "refunded".
             */
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Total refunded against captured_money, including value issued as store credit and
             * processor refunds still pending. Failed and canceled refunds aren't counted. Zero
             * when nothing has been refunded. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money"?: MoneyValue;
            /**
             * The part of the authorization returned to the buyer without being charged: the
             * uncaptured remainder after a partial capture, or the whole authorization after a
             * cancellation or expiry. It was never collected, so it needs no refund and can't be
             * captured later. Zero after a capture at or above the authorization. Absent until the
             * payment is authorized. Monetary amount represented as integer minor units plus an
             * ISO 4217 currency code.
             */
            "released_money"?: MoneyValue;
            /**
             * Whether one capture may collect more than the authorization where the card network
             * allows it. Fixed at create. Always present with merchant credentials; omitted with
             * buyer and checkout credentials.
             */
            "request_overcapture"?: boolean;
            /**
             * Flint return ID associated with this payment, when present. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * The return resolution whose balance this payment collects. Set for exchange balances
             * and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Risk assessment. Always present with merchant credentials; null when no risk
             * assessment is available. Omitted with the checkout credential. anyOf[1] (Value):
             * {@link PaymentRisk}. The risk assessment for a payment intent, with its risk level,
             * score, outcome, and any matched rule or review. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentRisk) | (null));
            /**
             * The payment option the most recent confirmation used. Absent until the payment
             * intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm",
             * "ach_debit", "card_present".
             */
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            /**
             * Top-level PaymentSplit children in their current state, embedded whole. Empty when
             * the payment has no splits. Child changes do not send payment_intent.updated. Omitted
             * for buyer and checkout credentials. [] (Value): {@link PaymentSplit}. A top-level
             * child of a payment intent dividing the collecting merchant's payment funds with one
             * seller. Both parties read this same resource with their own credentials.
             */
            "splits"?: Array<PaymentSplit>;
            /**
             * The text shown on the buyer's card or bank statement for this payment. `null` until
             * the charge is created. `null` when the provider supplies no descriptor. Frozen when
             * the charge is created.
             */
            "statement_descriptor": string | null;
            /**
             * Lifecycle status. requires_payment_method covers both a new payment intent and one
             * whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
             * and expired are final. Refunds and disputes never change status. Value enum:
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
             * The subscription whose billing charged this payment: its first charge, a renewal, a
             * retry or a setup fee. Not set for the checkout payment that created a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /** Opaque payment reference to share with merchant support. Do not parse its format. */
            "support_reference": string;
            /**
             * Actions the payment intent's current state accepts, each a POST to
             * /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
             * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
             * something outside the payment intent: an open risk review, an order payment attempt
             * that is using this payment, a closed order, or the merchant's account. An
             * order-owned payment intent never lists confirm; pay it with POST
             * /v1/orders/{order_id}/pay. The list changes only when the payment intent changes.
             * Always empty for buyer credentials. New actions may be added. [] enum: "confirm",
             * "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture", "cancel".
             */
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            /**
             * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
             * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "tip_money"?: ((MoneyValue) | (null));
            /**
             * Why a bank debit is taken. Set only when payment_options includes ach_debit, and
             * fixed once the payment intent exists. Value enum: "goods", "services", "other".
             */
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.expired". */
    "event_type"?: "payment_intent.expired";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.expired` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PaymentIntentExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`. object.add_on_fees
     * (Optional): Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic
     * tax fees collected with this payment. Available to the merchant only. Empty until fees
     * settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until
     * Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. object.add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a
     * payment intent, with the fee type and amount. object.amount_money (Required): {@link
     * MoneyValue}. The amount requested from the buyer, including any tip_money. Capturing doesn't
     * change it: after a partial capture it still shows the requested amount, and captured_money
     * shows what was collected. On a standalone payment intent, PATCH can change it only before
     * the first confirmation attempt. An amount_money or tip_money change that leaves too little
     * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.authorization_expires_at (Optional): string. Effective Flint deadline to capture a
     * manual-capture hold: the earlier of the provider capture deadline and any order resource
     * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end
     * earlier. Capture is refused at or after this time, even while status is requires_capture.
     * Omitted until a hold is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.authorized_at (Optional): string. When the processor authorized the payment. Absent
     * until then. Format: date-time. Example: "2026-08-02T16:00:00Z". object.authorized_money
     * (Optional): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set, even when a capture collects more. On a payment
     * intent canceled with cancellation_reason payment_returned, it equals the authorization Flint
     * released instead. Absent until the payment is authorized, and on payments canceled before
     * authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.cancellation_reason (Optional): string. Flint-normalized reason the payment
     * intent was canceled. Present only while status is canceled. Unknown processor values are
     * returned as payment_canceled. Value enum: "requested_by_customer", "duplicate",
     * "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed",
     * "payment_canceled", "payment_returned". object.capturable_money (Optional): {@link
     * MoneyValue}. The part of the authorization you can still capture. Positive only while status
     * is requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.capture_method
     * (Optional): string. When money is collected. Defaults to automatic. Value enum: "automatic",
     * "manual". object.captured_at (Optional): string. When money was captured. For automatic
     * capture, this is when the payment succeeded. Absent until capture. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.captured_money (Optional): {@link MoneyValue}. The
     * amount collected from the buyer, including captured_tip_money. Reconcile revenue and print
     * receipts from this amount, not amount_money. Zero while a hold is open, and positive
     * whenever status is succeeded. After an overcapture it is above authorized_money. Also
     * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
     * captured the money and is returning it through a refund with reason payment_returned.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.captured_tip_money (Optional): {@link MoneyValue}. The part of
     * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip
     * the authorization carried, at most captured_money. tip_money keeps the tip the authorization
     * carried. Refunds return it last. Absent until the payment is captured. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.checkout_session_id (Optional): string. Flint checkout session ID associated with
     * this payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.created_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. The linked customer.
     * Returned only with expand=customer. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. Customer linked to this payment intent. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_presence (Required): string. Whether the
     * customer was present for the most recent confirmation. absent means Flint charged a saved
     * card without them, as a merchant-initiated payment on its stored credential. Subscription
     * renewals and automatic invoice charges are absent, and other payments are absent only when
     * confirmed or paid with customer_presence absent. A customer who pays any of them with a card
     * they enter makes it present. Each confirmation sets it again. Value enum: "present",
     * "absent". object.dispute_status (Optional): string. Dispute state of this payment. none
     * means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry
     * or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its
     * deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string or null. Caller-owned identifier for this
     * resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.fulfillment_hold (Optional): {@link PaymentFulfillmentHold}. Present when a payment
     * provider asked Flint to pause fulfillment for this payment. While its status is active, open
     * fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. The linked invoice. Returned only with expand=invoice. Present only when `expand`
     * includes `invoice`; `null` when expanded and there is no related invoice.
     * object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice.anyOf[2] (Value): null. object.invoice_id
     * (Optional): string. Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.last_payment_error (Required): {@link
     * PaymentErrorSummary} or null. Most recent payment error. Null when no payment error is
     * recorded. object.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.last_payment_error.anyOf[2] (Value): null.
     * object.latest_order_payment_attempt_id (Optional): string or null. The order payment attempt
     * that most recently used this payment intent. Start times count to the second; of attempts
     * that started in the same second, the one with the highest order_payment_attempt_id is named.
     * `null` when no attempt has used it yet; omitted for payment intents without an order. It
     * changes only when an attempt starts using this payment intent, which advances version.
     * Returned with merchant credentials; omitted with buyer and checkout credentials. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.merchant_id (Optional): string. Merchant that owns
     * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_net_money
     * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount in
     * add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded and
     * fully_reversed splits commit their whole amount; payment_not_completed and install_revoked
     * cancellations commit nothing. A failed split commits only money already taken back before
     * failure; its remainder returns to the collecting merchant. Refunds do not reduce the
     * commitment. Later merchant assessments and credits are separate balance effects. Absent
     * until Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.metadata (Required): {@link MetadataMap}. Caller-owned metadata. Keys starting
     * with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. The
     * linked order. Returned only with expand=order. Present only when `expand` includes `order`;
     * `null` when expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. Order this payment
     * intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.overcapture (Optional): {@link
     * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization, and
     * the most it can collect. Present once a payment with request_overcapture true is authorized.
     * Read it to show the limit; capture enforces it. Whether one capture can collect more than
     * the authorization. object.payment_flow (Required): string. How the payment was started.
     * Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * object.payment_intent_id (Required): string. Flint payment intent ID. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_options (Required): Array of string. Payment
     * options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present". object.payment_options[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * object.payment_source (Optional): {@link PaymentSourceSummary}. Summary of the card or bank
     * account used for the payment. Absent until a payment source is attached. A summary of the
     * payment source used for a payment, by funding-method family, with card or bank account
     * display details. object.platform_fee (Optional): {@link PaymentIntentPlatformFee}. The
     * platform fee a partner app charges on this payment, when it created the payment with an
     * install token and a fee. Absent when the payment carries none. Returned only to merchant
     * credentials; omitted for buyer and checkout credentials. The platform fee a partner app
     * charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees,
     * and merchant_net_money subtracts it. object.processing_fee_money (Optional): {@link
     * MoneyValue}. Flint's all-in processing fee for this payment. It is the complete price Flint
     * charges to process the payment, never a provider cost passed through. The fee is final once
     * the card payment is captured or the ACH payment succeeds; canceled payments and failures
     * before success have none, except a payment intent canceled with cancellation_reason
     * payment_returned, which shows the fee charged at capture on the charge Flint is returning.
     * Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax
     * fees are itemized separately in add_on_fees. Your net for the payment is captured_money
     * minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint
     * has determined and verified the fee. If Flint can't verify it when you read the payment
     * intent, the field is omitted rather than shown unverified; read the payment intent again
     * later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reader_id (Optional): string. The reader the payment is or was last presented on. Set
     * when Flint presents it and kept afterward. While processing or requires_action with a
     * reader_id, the payment is on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * object.receipt_email (Optional): string or null. Email address for this payment's receipt.
     * When it isn't set, Flint uses the customer's email. Format: email. maxLength: 255. Example:
     * "buyer@example.com". object.refund_expires_at (Required): string or null. Last time Flint
     * can refund this payment through the original payment method. A refund submitted at exactly
     * this time is accepted; after it, refunds through the original payment method are refused.
     * Today only Affirm has a refund window: 120 days after the payment settles. `null` when the
     * method has no refund window, the payment has not succeeded with captured money, or its
     * capture time is missing. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refund_status (Optional): string. How much of captured_money has been refunded,
     * including value issued as store credit, based on refunded_money. Value enum: "none",
     * "partially_refunded", "refunded". object.refunded_money (Optional): {@link MoneyValue}.
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.released_money (Optional): {@link MoneyValue}. The part of the authorization
     * returned to the buyer without being charged: the uncaptured remainder after a partial
     * capture, or the whole authorization after a cancellation or expiry. It was never collected,
     * so it needs no refund and can't be captured later. Zero after a capture at or above the
     * authorization. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.request_overcapture (Optional):
     * boolean. Whether one capture may collect more than the authorization where the card network
     * allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and
     * checkout credentials. object.return_id (Optional): string. Flint return ID associated with
     * this payment, when present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. The return resolution whose balance this
     * payment collects. Set for exchange balances and corrections. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.risk (Optional): {@link PaymentRisk} or null.
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. object.risk.anyOf[1] (Value): {@link
     * PaymentRisk}. The risk assessment for a payment intent, with its risk level, score, outcome,
     * and any matched rule or review. object.risk.anyOf[2] (Value): null.
     * object.selected_payment_option (Optional): string. The payment option the most recent
     * confirmation used. Absent until the payment intent is first confirmed. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". object.splits (Optional):
     * Array of {@link PaymentSplit}. Top-level PaymentSplit children in their current state,
     * embedded whole. Empty when the payment has no splits. Child changes do not send
     * payment_intent.updated. Omitted for buyer and checkout credentials. object.splits[] (Value):
     * {@link PaymentSplit}. A top-level child of a payment intent dividing the collecting
     * merchant's payment funds with one seller. Both parties read this same resource with their
     * own credentials. object.statement_descriptor (Required): string or null. The text shown on
     * the buyer's card or bank statement for this payment. `null` until the charge is created.
     * `null` when the provider supplies no descriptor. Frozen when the charge is created.
     * object.status (Required): string. Lifecycle status. requires_payment_method covers both a
     * new payment intent and one whose last attempt failed, so read last_payment_error with it.
     * succeeded, canceled, and expired are final. Refunds and disputes never change status. Value
     * enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". object.subscription_id (Optional):
     * string. The subscription whose billing charged this payment: its first charge, a renewal, a
     * retry or a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.support_reference (Required): string. Opaque
     * payment reference to share with merchant support. Do not parse its format.
     * object.supported_actions (Required): Array of string. Actions the payment intent's current
     * state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action
     * that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused
     * because of something outside the payment intent: an open risk review, an order payment
     * attempt that is using this payment, a closed order, or the merchant's account. An
     * order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay.
     * The list changes only when the payment intent changes. Always empty for buyer credentials.
     * New actions may be added. [] enum: "confirm", "capture", "cancel".
     * object.supported_actions[] (Value): string. Value enum: "confirm", "capture", "cancel".
     * object.tip_money (Optional): {@link MoneyValue} or null. Portion of amount_money that is a
     * tip. Uses amount_money's currency and is at most amount_money. object.tip_money.anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.tip_money.anyOf[2] (Value): null. object.transaction_purpose
     * (Optional): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other". object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`. add_on_fees (Optional):
         * Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic tax fees
         * collected with this payment. Available to the merchant only. Empty until fees settle or
         * when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint
         * has determined and verified the fee. If Flint can't verify it when you read the payment
         * intent, the field is omitted rather than shown unverified; read the payment intent again
         * later. add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment
         * intent, with the fee type and amount. amount_money (Required): {@link MoneyValue}. The
         * amount requested from the buyer, including any tip_money. Capturing doesn't change it:
         * after a partial capture it still shows the requested amount, and captured_money shows
         * what was collected. On a standalone payment intent, PATCH can change it only before the
         * first confirmation attempt. An amount_money or tip_money change that leaves too little
         * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * authorization_expires_at (Optional): string. Effective Flint deadline to capture a
         * manual-capture hold: the earlier of the provider capture deadline and any order resource
         * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may
         * end earlier. Capture is refused at or after this time, even while status is
         * requires_capture. Omitted until a hold is placed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". authorized_at (Optional): string. When the processor authorized
         * the payment. Absent until then. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * authorized_money (Optional): {@link MoneyValue}. The amount the processor authorized. It
         * always equals amount_money and doesn't change once set, even when a capture collects
         * more. On a payment intent canceled with cancellation_reason payment_returned, it equals
         * the authorization Flint released instead. Absent until the payment is authorized, and on
         * payments canceled before authorization. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. cancellation_reason (Optional): string.
         * Flint-normalized reason the payment intent was canceled. Present only while status is
         * canceled. Unknown processor values are returned as payment_canceled. Value enum:
         * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
         * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
         * "payment_returned". capturable_money (Optional): {@link MoneyValue}. The part of the
         * authorization you can still capture. Positive only while status is requires_capture, and
         * zero after you capture or cancel or the authorization expires. The authorization lapses
         * at authorization_expires_at, and a capture attempted after that fails even if this is
         * positive. Absent until the payment is authorized. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. capture_method (Optional): string. When
         * money is collected. Defaults to automatic. Value enum: "automatic", "manual".
         * captured_at (Optional): string. When money was captured. For automatic capture, this is
         * when the payment succeeded. Absent until capture. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". captured_money (Optional): {@link MoneyValue}. The amount
         * collected from the buyer, including captured_tip_money. Reconcile revenue and print
         * receipts from this amount, not amount_money. Zero while a hold is open, and positive
         * whenever status is succeeded. After an overcapture it is above authorized_money. Also
         * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
         * captured the money and is returning it through a refund with reason payment_returned.
         * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. captured_tip_money (Optional): {@link MoneyValue}. The part of
         * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the
         * tip the authorization carried, at most captured_money. tip_money keeps the tip the
         * authorization carried. Refunds return it last. Absent until the payment is captured.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * checkout_session_id (Optional): string. Flint checkout session ID associated with this
         * payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". created_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. The linked customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. Customer linked to this payment intent. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_presence (Required): string. Whether the
         * customer was present for the most recent confirmation. absent means Flint charged a
         * saved card without them, as a merchant-initiated payment on its stored credential.
         * Subscription renewals and automatic invoice charges are absent, and other payments are
         * absent only when confirmed or paid with customer_presence absent. A customer who pays
         * any of them with a card they enter makes it present. Each confirmation sets it again.
         * Value enum: "present", "absent". dispute_status (Optional): string. Dispute state of
         * this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values
         * track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with
         * GET /v1/disputes for its deadline and evidence. Value enum: "none",
         * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
         * "under_review", "won", "lost", "prevented", "other". external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". fulfillment_hold (Optional):
         * {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint to pause
         * fulfillment for this payment. While its status is active, open fulfillments on the order
         * are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent
         * when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with
         * the reason, the action required, and whether the hold is active or released. invoice
         * (Optional): {@link ExpandedInvoiceSummary} or null. The linked invoice. Returned only
         * with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded
         * and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. Invoice this payment
         * intent collects, when it pays an invoice. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * last_payment_error (Required): {@link PaymentErrorSummary} or null. Most recent payment
         * error. Null when no payment error is recorded. last_payment_error.anyOf[1] (Value):
         * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
         * normalized error code, a message, the failure time, and remediation.
         * last_payment_error.anyOf[2] (Value): null. latest_order_payment_attempt_id (Optional):
         * string or null. The order payment attempt that most recently used this payment intent.
         * Start times count to the second; of attempts that started in the same second, the one
         * with the highest order_payment_attempt_id is named. `null` when no attempt has used it
         * yet; omitted for payment intents without an order. It changes only when an attempt
         * starts using this payment intent, which advances version. Returned with merchant
         * credentials; omitted with buyer and checkout credentials. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". merchant_id (Optional): string. Merchant that owns
         * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_net_money
         * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount
         * in add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded
         * and fully_reversed splits commit their whole amount; payment_not_completed and
         * install_revoked cancellations commit nothing. A failed split commits only money already
         * taken back before failure; its remainder returns to the collecting merchant. Refunds do
         * not reduce the commitment. Later merchant assessments and credits are separate balance
         * effects. Absent until Flint has determined and verified the fee. If Flint can't verify
         * it when you read the payment intent, the field is omitted rather than shown unverified;
         * read the payment intent again later. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. The linked order. Returned only with
         * expand=order. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. Order this payment intent belongs to. Create it through the
         * order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
         * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
         * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". overcapture (Optional): {@link
         * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization,
         * and the most it can collect. Present once a payment with request_overcapture true is
         * authorized. Read it to show the limit; capture enforces it. Whether one capture can
         * collect more than the authorization. payment_flow (Required): string. How the payment
         * was started. Fixed when the payment intent is created. Value enum: "checkout",
         * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
         * "virtual_terminal", "api". payment_intent_id (Required): string. Flint payment intent
         * ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_options (Required): Array of
         * string. Payment options the buyer can use for this payment. [] enum: "card",
         * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". payment_options[]
         * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
         * "card_present". payment_source (Optional): {@link PaymentSourceSummary}. Summary of the
         * card or bank account used for the payment. Absent until a payment source is attached. A
         * summary of the payment source used for a payment, by funding-method family, with card or
         * bank account display details. platform_fee (Optional): {@link PaymentIntentPlatformFee}.
         * The platform fee a partner app charges on this payment, when it created the payment with
         * an install token and a fee. Absent when the payment carries none. Returned only to
         * merchant credentials; omitted for buyer and checkout credentials. The platform fee a
         * partner app charges on this payment. The merchant pays it beside processing_fee_money
         * and add_on_fees, and merchant_net_money subtracts it. processing_fee_money (Optional):
         * {@link MoneyValue}. Flint's all-in processing fee for this payment. It is the complete
         * price Flint charges to process the payment, never a provider cost passed through. The
         * fee is final once the card payment is captured or the ACH payment succeeds; canceled
         * payments and failures before success have none, except a payment intent canceled with
         * cancellation_reason payment_returned, which shows the fee charged at capture on the
         * charge Flint is returning. Flint returns that fee to your balance separately. Invoice,
         * subscription, and automatic tax fees are itemized separately in add_on_fees. Your net
         * for the payment is captured_money minus this fee and the add-on fees. Refunds do not
         * return or revise it. Absent until Flint has determined and verified the fee. If Flint
         * can't verify it when you read the payment intent, the field is omitted rather than shown
         * unverified; read the payment intent again later. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reader_id (Optional): string. The reader the
         * payment is or was last presented on. Set when Flint presents it and kept afterward.
         * While processing or requires_action with a reader_id, the payment is on that reader now.
         * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". receipt_email (Optional): string or null.
         * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
         * email. Format: email. maxLength: 255. Example: "buyer@example.com". refund_expires_at
         * (Required): string or null. Last time Flint can refund this payment through the original
         * payment method. A refund submitted at exactly this time is accepted; after it, refunds
         * through the original payment method are refused. Today only Affirm has a refund window:
         * 120 days after the payment settles. `null` when the method has no refund window, the
         * payment has not succeeded with captured money, or its capture time is missing. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refund_status (Optional): string. How much
         * of captured_money has been refunded, including value issued as store credit, based on
         * refunded_money. Value enum: "none", "partially_refunded", "refunded". refunded_money
         * (Optional): {@link MoneyValue}. Total refunded against captured_money, including value
         * issued as store credit and processor refunds still pending. Failed and canceled refunds
         * aren't counted. Zero when nothing has been refunded. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. released_money (Optional): {@link
         * MoneyValue}. The part of the authorization returned to the buyer without being charged:
         * the uncaptured remainder after a partial capture, or the whole authorization after a
         * cancellation or expiry. It was never collected, so it needs no refund and can't be
         * captured later. Zero after a capture at or above the authorization. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. request_overcapture (Optional): boolean. Whether one capture may
         * collect more than the authorization where the card network allows it. Fixed at create.
         * Always present with merchant credentials; omitted with buyer and checkout credentials.
         * return_id (Optional): string. Flint return ID associated with this payment, when
         * present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional):
         * string. The return resolution whose balance this payment collects. Set for exchange
         * balances and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". risk (Optional):
         * {@link PaymentRisk} or null. Risk assessment. Always present with merchant credentials;
         * null when no risk assessment is available. Omitted with the checkout credential.
         * risk.anyOf[1] (Value): {@link PaymentRisk}. The risk assessment for a payment intent,
         * with its risk level, score, outcome, and any matched rule or review. risk.anyOf[2]
         * (Value): null. selected_payment_option (Optional): string. The payment option the most
         * recent confirmation used. Absent until the payment intent is first confirmed. Value
         * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". splits
         * (Optional): Array of {@link PaymentSplit}. Top-level PaymentSplit children in their
         * current state, embedded whole. Empty when the payment has no splits. Child changes do
         * not send payment_intent.updated. Omitted for buyer and checkout credentials. splits[]
         * (Value): {@link PaymentSplit}. A top-level child of a payment intent dividing the
         * collecting merchant's payment funds with one seller. Both parties read this same
         * resource with their own credentials. statement_descriptor (Required): string or null.
         * The text shown on the buyer's card or bank statement for this payment. `null` until the
         * charge is created. `null` when the provider supplies no descriptor. Frozen when the
         * charge is created. status (Required): string. Lifecycle status. requires_payment_method
         * covers both a new payment intent and one whose last attempt failed, so read
         * last_payment_error with it. succeeded, canceled, and expired are final. Refunds and
         * disputes never change status. Value enum: "requires_payment_method",
         * "requires_confirmation", "requires_action", "processing", "requires_capture",
         * "canceled", "succeeded", "expired". subscription_id (Optional): string. The subscription
         * whose billing charged this payment: its first charge, a renewal, a retry or a setup fee.
         * Not set for the checkout payment that created a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". support_reference (Required): string. Opaque payment
         * reference to share with merchant support. Do not parse its format. supported_actions
         * (Required): Array of string. Actions the payment intent's current state accepts, each a
         * POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
         * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
         * something outside the payment intent: an open risk review, an order payment attempt that
         * is using this payment, a closed order, or the merchant's account. An order-owned payment
         * intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes
         * only when the payment intent changes. Always empty for buyer credentials. New actions
         * may be added. [] enum: "confirm", "capture", "cancel". supported_actions[] (Value):
         * string. Value enum: "confirm", "capture", "cancel". tip_money (Optional): {@link
         * MoneyValue} or null. Portion of amount_money that is a tip. Uses amount_money's currency
         * and is at most amount_money. tip_money.anyOf[1] (Value): {@link MoneyValue}. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * tip_money.anyOf[2] (Value): null. transaction_purpose (Optional): string. Why a bank
         * debit is taken. Set only when payment_options includes ach_debit, and fixed once the
         * payment intent exists. Value enum: "goods", "services", "other". updated_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Itemized invoice, subscription, and automatic tax fees collected with this payment.
             * Available to the merchant only. Empty until fees settle or when no add-ons apply.
             * Refunds do not return or revise these fees. Absent until Flint has determined and
             * verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * [] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment intent, with the
             * fee type and amount.
             */
            "add_on_fees"?: Array<PaymentAddOnFee>;
            /**
             * The amount requested from the buyer, including any tip_money. Capturing doesn't
             * change it: after a partial capture it still shows the requested amount, and
             * captured_money shows what was collected. On a standalone payment intent, PATCH can
             * change it only before the first confirmation attempt. An amount_money or tip_money
             * change that leaves too little for stored splits returns LIMIT_EXCEEDED at the
             * changed field with minimum_money. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Effective Flint deadline to capture a manual-capture hold: the earlier of the
             * provider capture deadline and any order resource guarantee. Order guarantees last at
             * most 24 hours from the payment attempt start and may end earlier. Capture is refused
             * at or after this time, even while status is requires_capture. Omitted until a hold
             * is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "authorization_expires_at"?: string;
            /**
             * When the processor authorized the payment. Absent until then. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "authorized_at"?: string;
            /**
             * The amount the processor authorized. It always equals amount_money and doesn't
             * change once set, even when a capture collects more. On a payment intent canceled
             * with cancellation_reason payment_returned, it equals the authorization Flint
             * released instead. Absent until the payment is authorized, and on payments canceled
             * before authorization. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "authorized_money"?: MoneyValue;
            /**
             * Flint-normalized reason the payment intent was canceled. Present only while status
             * is canceled. Unknown processor values are returned as payment_canceled. Value enum:
             * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
             * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
             * "payment_returned".
             */
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            /**
             * The part of the authorization you can still capture. Positive only while status is
             * requires_capture, and zero after you capture or cancel or the authorization expires.
             * The authorization lapses at authorization_expires_at, and a capture attempted after
             * that fails even if this is positive. Absent until the payment is authorized.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "capturable_money"?: MoneyValue;
            /**
             * When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
             */
            "capture_method"?: "automatic" | "manual" | (string & {});
            /**
             * When money was captured. For automatic capture, this is when the payment succeeded.
             * Absent until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "captured_at"?: string;
            /**
             * The amount collected from the buyer, including captured_tip_money. Reconcile revenue
             * and print receipts from this amount, not amount_money. Zero while a hold is open,
             * and positive whenever status is succeeded. After an overcapture it is above
             * authorized_money. Also positive on a payment intent canceled with
             * cancellation_reason payment_returned: Flint captured the money and is returning it
             * through a refund with reason payment_returned. processing_fee_money,
             * merchant_net_money, and refunds are based on it. Absent until the payment is
             * authorized. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_money"?: MoneyValue;
            /**
             * The part of captured_money that is a tip: the capture's tip_money when it sent one,
             * otherwise the tip the authorization carried, at most captured_money. tip_money keeps
             * the tip the authorization carried. Refunds return it last. Absent until the payment
             * is captured. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_tip_money"?: MoneyValue;
            /**
             * Flint checkout session ID associated with this payment, when present. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at"?: string;
            /**
             * The linked customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer. anyOf[1]
             * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
             * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Whether the customer was present for the most recent confirmation. absent means
             * Flint charged a saved card without them, as a merchant-initiated payment on its
             * stored credential. Subscription renewals and automatic invoice charges are absent,
             * and other payments are absent only when confirmed or paid with customer_presence
             * absent. A customer who pays any of them with a card they enter makes it present.
             * Each confirmation sets it again. Value enum: "present", "absent".
             */
            "customer_presence": "present" | "absent" | (string & {});
            /**
             * Dispute state of this payment. none means no dispute or inquiry is open or recorded.
             * The inquiry_ values track an issuer inquiry or early warning that isn't a
             * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other".
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
             * Caller-owned identifier for this resource in an external system. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string | null;
            /**
             * Present when a payment provider asked Flint to pause fulfillment for this payment.
             * While its status is active, open fulfillments on the order are on hold with reason
             * payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts
             * and when it lifts. A hold on fulfillment tied to a payment, with the reason, the
             * action required, and whether the hold is active or released.
             */
            "fulfillment_hold"?: PaymentFulfillmentHold;
            /**
             * The linked invoice. Returned only with expand=invoice. Present only when `expand`
             * includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1]
             * (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields, including
             * status, due date, and paid, outstanding, and refunded amounts, returned when the
             * invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * Invoice this payment intent collects, when it pays an invoice. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value):
             * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
             * normalized error code, a message, the failure time, and remediation. anyOf[2]
             * (Value): null.
             */
            "last_payment_error": ((PaymentErrorSummary) | (null));
            /**
             * The order payment attempt that most recently used this payment intent. Start times
             * count to the second; of attempts that started in the same second, the one with the
             * highest order_payment_attempt_id is named. `null` when no attempt has used it yet;
             * omitted for payment intents without an order. It changes only when an attempt starts
             * using this payment intent, which advances version. Returned with merchant
             * credentials; omitted with buyer and checkout credentials. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "latest_order_payment_attempt_id"?: string | null;
            /**
             * Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Captured amount minus processing_fee_money, every amount in add_on_fees,
             * platform_fee.amount_money, and each split commitment. Live, succeeded and
             * fully_reversed splits commit their whole amount; payment_not_completed and
             * install_revoked cancellations commit nothing. A failed split commits only money
             * already taken back before failure; its remainder returns to the collecting merchant.
             * Refunds do not reduce the commitment. Later merchant assessments and credits are
             * separate balance effects. Absent until Flint has determined and verified the fee. If
             * Flint can't verify it when you read the payment intent, the field is omitted rather
             * than shown unverified; read the payment intent again later. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "merchant_net_money"?: MoneyValue;
            /**
             * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't
             * returned. Caller-owned key-value data stored on a resource. Keys starting with
             * flint_ are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The linked order. Returned only with expand=order. Present only when `expand`
             * includes `order`; `null` when expanded and there is no related order. anyOf[1]
             * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
             * payment and refund status, and pricing and settlement amounts, returned when the
             * order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order this payment intent belongs to. Create it through the order and confirm it
             * with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
             * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
             * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Whether one capture can collect more than the authorization, and the most it can
             * collect. Present once a payment with request_overcapture true is authorized. Read it
             * to show the limit; capture enforces it. Whether one capture can collect more than
             * the authorization.
             */
            "overcapture"?: PaymentIntentOvercapture;
            /**
             * How the payment was started. Fixed when the payment intent is created. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
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
            /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
             * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum:
             * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
             */
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            /**
             * Summary of the card or bank account used for the payment. Absent until a payment
             * source is attached. A summary of the payment source used for a payment, by
             * funding-method family, with card or bank account display details.
             */
            "payment_source"?: PaymentSourceSummary;
            /**
             * The platform fee a partner app charges on this payment, when it created the payment
             * with an install token and a fee. Absent when the payment carries none. Returned only
             * to merchant credentials; omitted for buyer and checkout credentials. The platform
             * fee a partner app charges on this payment. The merchant pays it beside
             * processing_fee_money and add_on_fees, and merchant_net_money subtracts it.
             */
            "platform_fee"?: PaymentIntentPlatformFee;
            /**
             * Flint's all-in processing fee for this payment. It is the complete price Flint
             * charges to process the payment, never a provider cost passed through. The fee is
             * final once the card payment is captured or the ACH payment succeeds; canceled
             * payments and failures before success have none, except a payment intent canceled
             * with cancellation_reason payment_returned, which shows the fee charged at capture on
             * the charge Flint is returning. Flint returns that fee to your balance separately.
             * Invoice, subscription, and automatic tax fees are itemized separately in
             * add_on_fees. Your net for the payment is captured_money minus this fee and the
             * add-on fees. Refunds do not return or revise it. Absent until Flint has determined
             * and verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "processing_fee_money"?: MoneyValue;
            /**
             * The reader the payment is or was last presented on. Set when Flint presents it and
             * kept afterward. While processing or requires_action with a reader_id, the payment is
             * on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
             */
            "reader_id"?: string;
            /**
             * Email address for this payment's receipt. When it isn't set, Flint uses the
             * customer's email. Format: email. maxLength: 255. Example: "buyer@example.com".
             */
            "receipt_email"?: string | null;
            /**
             * Last time Flint can refund this payment through the original payment method. A
             * refund submitted at exactly this time is accepted; after it, refunds through the
             * original payment method are refused. Today only Affirm has a refund window: 120 days
             * after the payment settles. `null` when the method has no refund window, the payment
             * has not succeeded with captured money, or its capture time is missing. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refund_expires_at": string | null;
            /**
             * How much of captured_money has been refunded, including value issued as store
             * credit, based on refunded_money. Value enum: "none", "partially_refunded",
             * "refunded".
             */
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Total refunded against captured_money, including value issued as store credit and
             * processor refunds still pending. Failed and canceled refunds aren't counted. Zero
             * when nothing has been refunded. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money"?: MoneyValue;
            /**
             * The part of the authorization returned to the buyer without being charged: the
             * uncaptured remainder after a partial capture, or the whole authorization after a
             * cancellation or expiry. It was never collected, so it needs no refund and can't be
             * captured later. Zero after a capture at or above the authorization. Absent until the
             * payment is authorized. Monetary amount represented as integer minor units plus an
             * ISO 4217 currency code.
             */
            "released_money"?: MoneyValue;
            /**
             * Whether one capture may collect more than the authorization where the card network
             * allows it. Fixed at create. Always present with merchant credentials; omitted with
             * buyer and checkout credentials.
             */
            "request_overcapture"?: boolean;
            /**
             * Flint return ID associated with this payment, when present. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * The return resolution whose balance this payment collects. Set for exchange balances
             * and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Risk assessment. Always present with merchant credentials; null when no risk
             * assessment is available. Omitted with the checkout credential. anyOf[1] (Value):
             * {@link PaymentRisk}. The risk assessment for a payment intent, with its risk level,
             * score, outcome, and any matched rule or review. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentRisk) | (null));
            /**
             * The payment option the most recent confirmation used. Absent until the payment
             * intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm",
             * "ach_debit", "card_present".
             */
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            /**
             * Top-level PaymentSplit children in their current state, embedded whole. Empty when
             * the payment has no splits. Child changes do not send payment_intent.updated. Omitted
             * for buyer and checkout credentials. [] (Value): {@link PaymentSplit}. A top-level
             * child of a payment intent dividing the collecting merchant's payment funds with one
             * seller. Both parties read this same resource with their own credentials.
             */
            "splits"?: Array<PaymentSplit>;
            /**
             * The text shown on the buyer's card or bank statement for this payment. `null` until
             * the charge is created. `null` when the provider supplies no descriptor. Frozen when
             * the charge is created.
             */
            "statement_descriptor": string | null;
            /**
             * Lifecycle status. requires_payment_method covers both a new payment intent and one
             * whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
             * and expired are final. Refunds and disputes never change status. Value enum:
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
             * The subscription whose billing charged this payment: its first charge, a renewal, a
             * retry or a setup fee. Not set for the checkout payment that created a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /** Opaque payment reference to share with merchant support. Do not parse its format. */
            "support_reference": string;
            /**
             * Actions the payment intent's current state accepts, each a POST to
             * /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
             * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
             * something outside the payment intent: an open risk review, an order payment attempt
             * that is using this payment, a closed order, or the merchant's account. An
             * order-owned payment intent never lists confirm; pay it with POST
             * /v1/orders/{order_id}/pay. The list changes only when the payment intent changes.
             * Always empty for buyer credentials. New actions may be added. [] enum: "confirm",
             * "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture", "cancel".
             */
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            /**
             * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
             * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "tip_money"?: ((MoneyValue) | (null));
            /**
             * Why a bank debit is taken. Set only when payment_options includes ach_debit, and
             * fixed once the payment intent exists. Value enum: "goods", "services", "other".
             */
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.expired". */
    "event_type"?: "payment_intent.expired";
});
export type PaymentIntentFulfillmentHoldUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_on_fees"?: Array<PaymentAddOnFee>;
            "amount_money": MoneyValue;
            "authorization_expires_at"?: string;
            "authorized_at"?: string;
            "authorized_money"?: MoneyValue;
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            "capturable_money"?: MoneyValue;
            "capture_method"?: "automatic" | "manual" | (string & {});
            "captured_at"?: string;
            "captured_money"?: MoneyValue;
            "captured_tip_money"?: MoneyValue;
            "checkout_session_id"?: string;
            "created_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_presence": "present" | "absent" | (string & {});
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
            "external_reference_id"?: string | null;
            "fulfillment_hold"?: PaymentFulfillmentHold;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "last_payment_error": ((PaymentErrorSummary) | (null));
            "latest_order_payment_attempt_id"?: string | null;
            "merchant_id"?: string;
            "merchant_net_money"?: MoneyValue;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "overcapture"?: PaymentIntentOvercapture;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent_id": string;
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            "payment_source"?: PaymentSourceSummary;
            "platform_fee"?: PaymentIntentPlatformFee;
            "processing_fee_money"?: MoneyValue;
            "reader_id"?: string;
            "receipt_email"?: string | null;
            "refund_expires_at": string | null;
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money"?: MoneyValue;
            "released_money"?: MoneyValue;
            "request_overcapture"?: boolean;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "risk"?: ((PaymentRisk) | (null));
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            "splits"?: Array<PaymentSplit>;
            "statement_descriptor": string | null;
            "status": "requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {});
            "subscription_id"?: string;
            "support_reference": string;
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            "tip_money"?: ((MoneyValue) | (null));
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.fulfillment_hold_updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_on_fees"?: Array<PaymentAddOnFee>;
            "amount_money": MoneyValue;
            "authorization_expires_at"?: string;
            "authorized_at"?: string;
            "authorized_money"?: MoneyValue;
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            "capturable_money"?: MoneyValue;
            "capture_method"?: "automatic" | "manual" | (string & {});
            "captured_at"?: string;
            "captured_money"?: MoneyValue;
            "captured_tip_money"?: MoneyValue;
            "checkout_session_id"?: string;
            "created_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_presence": "present" | "absent" | (string & {});
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
            "external_reference_id"?: string | null;
            "fulfillment_hold"?: PaymentFulfillmentHold;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "last_payment_error": ((PaymentErrorSummary) | (null));
            "latest_order_payment_attempt_id"?: string | null;
            "merchant_id"?: string;
            "merchant_net_money"?: MoneyValue;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "overcapture"?: PaymentIntentOvercapture;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent_id": string;
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            "payment_source"?: PaymentSourceSummary;
            "platform_fee"?: PaymentIntentPlatformFee;
            "processing_fee_money"?: MoneyValue;
            "reader_id"?: string;
            "receipt_email"?: string | null;
            "refund_expires_at": string | null;
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money"?: MoneyValue;
            "released_money"?: MoneyValue;
            "request_overcapture"?: boolean;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "risk"?: ((PaymentRisk) | (null));
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            "splits"?: Array<PaymentSplit>;
            "statement_descriptor": string | null;
            "status": "requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {});
            "subscription_id"?: string;
            "support_reference": string;
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            "tip_money"?: ((MoneyValue) | (null));
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.fulfillment_hold_updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`. object.add_on_fees
     * (Optional): Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic
     * tax fees collected with this payment. Available to the merchant only. Empty until fees
     * settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until
     * Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. object.add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a
     * payment intent, with the fee type and amount. object.amount_money (Required): {@link
     * MoneyValue}. The amount requested from the buyer, including any tip_money. Capturing doesn't
     * change it: after a partial capture it still shows the requested amount, and captured_money
     * shows what was collected. On a standalone payment intent, PATCH can change it only before
     * the first confirmation attempt. An amount_money or tip_money change that leaves too little
     * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.authorization_expires_at (Optional): string. Effective Flint deadline to capture a
     * manual-capture hold: the earlier of the provider capture deadline and any order resource
     * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end
     * earlier. Capture is refused at or after this time, even while status is requires_capture.
     * Omitted until a hold is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.authorized_at (Optional): string. When the processor authorized the payment. Absent
     * until then. Format: date-time. Example: "2026-08-02T16:00:00Z". object.authorized_money
     * (Optional): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set, even when a capture collects more. On a payment
     * intent canceled with cancellation_reason payment_returned, it equals the authorization Flint
     * released instead. Absent until the payment is authorized, and on payments canceled before
     * authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.cancellation_reason (Optional): string. Flint-normalized reason the payment
     * intent was canceled. Present only while status is canceled. Unknown processor values are
     * returned as payment_canceled. Value enum: "requested_by_customer", "duplicate",
     * "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed",
     * "payment_canceled", "payment_returned". object.capturable_money (Optional): {@link
     * MoneyValue}. The part of the authorization you can still capture. Positive only while status
     * is requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.capture_method
     * (Optional): string. When money is collected. Defaults to automatic. Value enum: "automatic",
     * "manual". object.captured_at (Optional): string. When money was captured. For automatic
     * capture, this is when the payment succeeded. Absent until capture. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.captured_money (Optional): {@link MoneyValue}. The
     * amount collected from the buyer, including captured_tip_money. Reconcile revenue and print
     * receipts from this amount, not amount_money. Zero while a hold is open, and positive
     * whenever status is succeeded. After an overcapture it is above authorized_money. Also
     * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
     * captured the money and is returning it through a refund with reason payment_returned.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.captured_tip_money (Optional): {@link MoneyValue}. The part of
     * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip
     * the authorization carried, at most captured_money. tip_money keeps the tip the authorization
     * carried. Refunds return it last. Absent until the payment is captured. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.checkout_session_id (Optional): string. Flint checkout session ID associated with
     * this payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.created_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. The linked customer.
     * Returned only with expand=customer. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. Customer linked to this payment intent. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_presence (Required): string. Whether the
     * customer was present for the most recent confirmation. absent means Flint charged a saved
     * card without them, as a merchant-initiated payment on its stored credential. Subscription
     * renewals and automatic invoice charges are absent, and other payments are absent only when
     * confirmed or paid with customer_presence absent. A customer who pays any of them with a card
     * they enter makes it present. Each confirmation sets it again. Value enum: "present",
     * "absent". object.dispute_status (Optional): string. Dispute state of this payment. none
     * means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry
     * or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its
     * deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string or null. Caller-owned identifier for this
     * resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.fulfillment_hold (Optional): {@link PaymentFulfillmentHold}. Present when a payment
     * provider asked Flint to pause fulfillment for this payment. While its status is active, open
     * fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. The linked invoice. Returned only with expand=invoice. Present only when `expand`
     * includes `invoice`; `null` when expanded and there is no related invoice.
     * object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice.anyOf[2] (Value): null. object.invoice_id
     * (Optional): string. Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.last_payment_error (Required): {@link
     * PaymentErrorSummary} or null. Most recent payment error. Null when no payment error is
     * recorded. object.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.last_payment_error.anyOf[2] (Value): null.
     * object.latest_order_payment_attempt_id (Optional): string or null. The order payment attempt
     * that most recently used this payment intent. Start times count to the second; of attempts
     * that started in the same second, the one with the highest order_payment_attempt_id is named.
     * `null` when no attempt has used it yet; omitted for payment intents without an order. It
     * changes only when an attempt starts using this payment intent, which advances version.
     * Returned with merchant credentials; omitted with buyer and checkout credentials. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.merchant_id (Optional): string. Merchant that owns
     * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_net_money
     * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount in
     * add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded and
     * fully_reversed splits commit their whole amount; payment_not_completed and install_revoked
     * cancellations commit nothing. A failed split commits only money already taken back before
     * failure; its remainder returns to the collecting merchant. Refunds do not reduce the
     * commitment. Later merchant assessments and credits are separate balance effects. Absent
     * until Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.metadata (Required): {@link MetadataMap}. Caller-owned metadata. Keys starting
     * with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. The
     * linked order. Returned only with expand=order. Present only when `expand` includes `order`;
     * `null` when expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. Order this payment
     * intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.overcapture (Optional): {@link
     * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization, and
     * the most it can collect. Present once a payment with request_overcapture true is authorized.
     * Read it to show the limit; capture enforces it. Whether one capture can collect more than
     * the authorization. object.payment_flow (Required): string. How the payment was started.
     * Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * object.payment_intent_id (Required): string. Flint payment intent ID. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_options (Required): Array of string. Payment
     * options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present". object.payment_options[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * object.payment_source (Optional): {@link PaymentSourceSummary}. Summary of the card or bank
     * account used for the payment. Absent until a payment source is attached. A summary of the
     * payment source used for a payment, by funding-method family, with card or bank account
     * display details. object.platform_fee (Optional): {@link PaymentIntentPlatformFee}. The
     * platform fee a partner app charges on this payment, when it created the payment with an
     * install token and a fee. Absent when the payment carries none. Returned only to merchant
     * credentials; omitted for buyer and checkout credentials. The platform fee a partner app
     * charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees,
     * and merchant_net_money subtracts it. object.processing_fee_money (Optional): {@link
     * MoneyValue}. Flint's all-in processing fee for this payment. It is the complete price Flint
     * charges to process the payment, never a provider cost passed through. The fee is final once
     * the card payment is captured or the ACH payment succeeds; canceled payments and failures
     * before success have none, except a payment intent canceled with cancellation_reason
     * payment_returned, which shows the fee charged at capture on the charge Flint is returning.
     * Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax
     * fees are itemized separately in add_on_fees. Your net for the payment is captured_money
     * minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint
     * has determined and verified the fee. If Flint can't verify it when you read the payment
     * intent, the field is omitted rather than shown unverified; read the payment intent again
     * later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reader_id (Optional): string. The reader the payment is or was last presented on. Set
     * when Flint presents it and kept afterward. While processing or requires_action with a
     * reader_id, the payment is on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * object.receipt_email (Optional): string or null. Email address for this payment's receipt.
     * When it isn't set, Flint uses the customer's email. Format: email. maxLength: 255. Example:
     * "buyer@example.com". object.refund_expires_at (Required): string or null. Last time Flint
     * can refund this payment through the original payment method. A refund submitted at exactly
     * this time is accepted; after it, refunds through the original payment method are refused.
     * Today only Affirm has a refund window: 120 days after the payment settles. `null` when the
     * method has no refund window, the payment has not succeeded with captured money, or its
     * capture time is missing. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refund_status (Optional): string. How much of captured_money has been refunded,
     * including value issued as store credit, based on refunded_money. Value enum: "none",
     * "partially_refunded", "refunded". object.refunded_money (Optional): {@link MoneyValue}.
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.released_money (Optional): {@link MoneyValue}. The part of the authorization
     * returned to the buyer without being charged: the uncaptured remainder after a partial
     * capture, or the whole authorization after a cancellation or expiry. It was never collected,
     * so it needs no refund and can't be captured later. Zero after a capture at or above the
     * authorization. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.request_overcapture (Optional):
     * boolean. Whether one capture may collect more than the authorization where the card network
     * allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and
     * checkout credentials. object.return_id (Optional): string. Flint return ID associated with
     * this payment, when present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. The return resolution whose balance this
     * payment collects. Set for exchange balances and corrections. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.risk (Optional): {@link PaymentRisk} or null.
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. object.risk.anyOf[1] (Value): {@link
     * PaymentRisk}. The risk assessment for a payment intent, with its risk level, score, outcome,
     * and any matched rule or review. object.risk.anyOf[2] (Value): null.
     * object.selected_payment_option (Optional): string. The payment option the most recent
     * confirmation used. Absent until the payment intent is first confirmed. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". object.splits (Optional):
     * Array of {@link PaymentSplit}. Top-level PaymentSplit children in their current state,
     * embedded whole. Empty when the payment has no splits. Child changes do not send
     * payment_intent.updated. Omitted for buyer and checkout credentials. object.splits[] (Value):
     * {@link PaymentSplit}. A top-level child of a payment intent dividing the collecting
     * merchant's payment funds with one seller. Both parties read this same resource with their
     * own credentials. object.statement_descriptor (Required): string or null. The text shown on
     * the buyer's card or bank statement for this payment. `null` until the charge is created.
     * `null` when the provider supplies no descriptor. Frozen when the charge is created.
     * object.status (Required): string. Lifecycle status. requires_payment_method covers both a
     * new payment intent and one whose last attempt failed, so read last_payment_error with it.
     * succeeded, canceled, and expired are final. Refunds and disputes never change status. Value
     * enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". object.subscription_id (Optional):
     * string. The subscription whose billing charged this payment: its first charge, a renewal, a
     * retry or a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.support_reference (Required): string. Opaque
     * payment reference to share with merchant support. Do not parse its format.
     * object.supported_actions (Required): Array of string. Actions the payment intent's current
     * state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action
     * that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused
     * because of something outside the payment intent: an open risk review, an order payment
     * attempt that is using this payment, a closed order, or the merchant's account. An
     * order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay.
     * The list changes only when the payment intent changes. Always empty for buyer credentials.
     * New actions may be added. [] enum: "confirm", "capture", "cancel".
     * object.supported_actions[] (Value): string. Value enum: "confirm", "capture", "cancel".
     * object.tip_money (Optional): {@link MoneyValue} or null. Portion of amount_money that is a
     * tip. Uses amount_money's currency and is at most amount_money. object.tip_money.anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.tip_money.anyOf[2] (Value): null. object.transaction_purpose
     * (Optional): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other". object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`. add_on_fees (Optional):
         * Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic tax fees
         * collected with this payment. Available to the merchant only. Empty until fees settle or
         * when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint
         * has determined and verified the fee. If Flint can't verify it when you read the payment
         * intent, the field is omitted rather than shown unverified; read the payment intent again
         * later. add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment
         * intent, with the fee type and amount. amount_money (Required): {@link MoneyValue}. The
         * amount requested from the buyer, including any tip_money. Capturing doesn't change it:
         * after a partial capture it still shows the requested amount, and captured_money shows
         * what was collected. On a standalone payment intent, PATCH can change it only before the
         * first confirmation attempt. An amount_money or tip_money change that leaves too little
         * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * authorization_expires_at (Optional): string. Effective Flint deadline to capture a
         * manual-capture hold: the earlier of the provider capture deadline and any order resource
         * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may
         * end earlier. Capture is refused at or after this time, even while status is
         * requires_capture. Omitted until a hold is placed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". authorized_at (Optional): string. When the processor authorized
         * the payment. Absent until then. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * authorized_money (Optional): {@link MoneyValue}. The amount the processor authorized. It
         * always equals amount_money and doesn't change once set, even when a capture collects
         * more. On a payment intent canceled with cancellation_reason payment_returned, it equals
         * the authorization Flint released instead. Absent until the payment is authorized, and on
         * payments canceled before authorization. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. cancellation_reason (Optional): string.
         * Flint-normalized reason the payment intent was canceled. Present only while status is
         * canceled. Unknown processor values are returned as payment_canceled. Value enum:
         * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
         * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
         * "payment_returned". capturable_money (Optional): {@link MoneyValue}. The part of the
         * authorization you can still capture. Positive only while status is requires_capture, and
         * zero after you capture or cancel or the authorization expires. The authorization lapses
         * at authorization_expires_at, and a capture attempted after that fails even if this is
         * positive. Absent until the payment is authorized. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. capture_method (Optional): string. When
         * money is collected. Defaults to automatic. Value enum: "automatic", "manual".
         * captured_at (Optional): string. When money was captured. For automatic capture, this is
         * when the payment succeeded. Absent until capture. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". captured_money (Optional): {@link MoneyValue}. The amount
         * collected from the buyer, including captured_tip_money. Reconcile revenue and print
         * receipts from this amount, not amount_money. Zero while a hold is open, and positive
         * whenever status is succeeded. After an overcapture it is above authorized_money. Also
         * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
         * captured the money and is returning it through a refund with reason payment_returned.
         * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. captured_tip_money (Optional): {@link MoneyValue}. The part of
         * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the
         * tip the authorization carried, at most captured_money. tip_money keeps the tip the
         * authorization carried. Refunds return it last. Absent until the payment is captured.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * checkout_session_id (Optional): string. Flint checkout session ID associated with this
         * payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". created_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. The linked customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. Customer linked to this payment intent. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_presence (Required): string. Whether the
         * customer was present for the most recent confirmation. absent means Flint charged a
         * saved card without them, as a merchant-initiated payment on its stored credential.
         * Subscription renewals and automatic invoice charges are absent, and other payments are
         * absent only when confirmed or paid with customer_presence absent. A customer who pays
         * any of them with a card they enter makes it present. Each confirmation sets it again.
         * Value enum: "present", "absent". dispute_status (Optional): string. Dispute state of
         * this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values
         * track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with
         * GET /v1/disputes for its deadline and evidence. Value enum: "none",
         * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
         * "under_review", "won", "lost", "prevented", "other". external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". fulfillment_hold (Optional):
         * {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint to pause
         * fulfillment for this payment. While its status is active, open fulfillments on the order
         * are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent
         * when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with
         * the reason, the action required, and whether the hold is active or released. invoice
         * (Optional): {@link ExpandedInvoiceSummary} or null. The linked invoice. Returned only
         * with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded
         * and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. Invoice this payment
         * intent collects, when it pays an invoice. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * last_payment_error (Required): {@link PaymentErrorSummary} or null. Most recent payment
         * error. Null when no payment error is recorded. last_payment_error.anyOf[1] (Value):
         * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
         * normalized error code, a message, the failure time, and remediation.
         * last_payment_error.anyOf[2] (Value): null. latest_order_payment_attempt_id (Optional):
         * string or null. The order payment attempt that most recently used this payment intent.
         * Start times count to the second; of attempts that started in the same second, the one
         * with the highest order_payment_attempt_id is named. `null` when no attempt has used it
         * yet; omitted for payment intents without an order. It changes only when an attempt
         * starts using this payment intent, which advances version. Returned with merchant
         * credentials; omitted with buyer and checkout credentials. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". merchant_id (Optional): string. Merchant that owns
         * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_net_money
         * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount
         * in add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded
         * and fully_reversed splits commit their whole amount; payment_not_completed and
         * install_revoked cancellations commit nothing. A failed split commits only money already
         * taken back before failure; its remainder returns to the collecting merchant. Refunds do
         * not reduce the commitment. Later merchant assessments and credits are separate balance
         * effects. Absent until Flint has determined and verified the fee. If Flint can't verify
         * it when you read the payment intent, the field is omitted rather than shown unverified;
         * read the payment intent again later. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. The linked order. Returned only with
         * expand=order. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. Order this payment intent belongs to. Create it through the
         * order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
         * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
         * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". overcapture (Optional): {@link
         * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization,
         * and the most it can collect. Present once a payment with request_overcapture true is
         * authorized. Read it to show the limit; capture enforces it. Whether one capture can
         * collect more than the authorization. payment_flow (Required): string. How the payment
         * was started. Fixed when the payment intent is created. Value enum: "checkout",
         * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
         * "virtual_terminal", "api". payment_intent_id (Required): string. Flint payment intent
         * ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_options (Required): Array of
         * string. Payment options the buyer can use for this payment. [] enum: "card",
         * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". payment_options[]
         * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
         * "card_present". payment_source (Optional): {@link PaymentSourceSummary}. Summary of the
         * card or bank account used for the payment. Absent until a payment source is attached. A
         * summary of the payment source used for a payment, by funding-method family, with card or
         * bank account display details. platform_fee (Optional): {@link PaymentIntentPlatformFee}.
         * The platform fee a partner app charges on this payment, when it created the payment with
         * an install token and a fee. Absent when the payment carries none. Returned only to
         * merchant credentials; omitted for buyer and checkout credentials. The platform fee a
         * partner app charges on this payment. The merchant pays it beside processing_fee_money
         * and add_on_fees, and merchant_net_money subtracts it. processing_fee_money (Optional):
         * {@link MoneyValue}. Flint's all-in processing fee for this payment. It is the complete
         * price Flint charges to process the payment, never a provider cost passed through. The
         * fee is final once the card payment is captured or the ACH payment succeeds; canceled
         * payments and failures before success have none, except a payment intent canceled with
         * cancellation_reason payment_returned, which shows the fee charged at capture on the
         * charge Flint is returning. Flint returns that fee to your balance separately. Invoice,
         * subscription, and automatic tax fees are itemized separately in add_on_fees. Your net
         * for the payment is captured_money minus this fee and the add-on fees. Refunds do not
         * return or revise it. Absent until Flint has determined and verified the fee. If Flint
         * can't verify it when you read the payment intent, the field is omitted rather than shown
         * unverified; read the payment intent again later. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reader_id (Optional): string. The reader the
         * payment is or was last presented on. Set when Flint presents it and kept afterward.
         * While processing or requires_action with a reader_id, the payment is on that reader now.
         * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". receipt_email (Optional): string or null.
         * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
         * email. Format: email. maxLength: 255. Example: "buyer@example.com". refund_expires_at
         * (Required): string or null. Last time Flint can refund this payment through the original
         * payment method. A refund submitted at exactly this time is accepted; after it, refunds
         * through the original payment method are refused. Today only Affirm has a refund window:
         * 120 days after the payment settles. `null` when the method has no refund window, the
         * payment has not succeeded with captured money, or its capture time is missing. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refund_status (Optional): string. How much
         * of captured_money has been refunded, including value issued as store credit, based on
         * refunded_money. Value enum: "none", "partially_refunded", "refunded". refunded_money
         * (Optional): {@link MoneyValue}. Total refunded against captured_money, including value
         * issued as store credit and processor refunds still pending. Failed and canceled refunds
         * aren't counted. Zero when nothing has been refunded. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. released_money (Optional): {@link
         * MoneyValue}. The part of the authorization returned to the buyer without being charged:
         * the uncaptured remainder after a partial capture, or the whole authorization after a
         * cancellation or expiry. It was never collected, so it needs no refund and can't be
         * captured later. Zero after a capture at or above the authorization. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. request_overcapture (Optional): boolean. Whether one capture may
         * collect more than the authorization where the card network allows it. Fixed at create.
         * Always present with merchant credentials; omitted with buyer and checkout credentials.
         * return_id (Optional): string. Flint return ID associated with this payment, when
         * present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional):
         * string. The return resolution whose balance this payment collects. Set for exchange
         * balances and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". risk (Optional):
         * {@link PaymentRisk} or null. Risk assessment. Always present with merchant credentials;
         * null when no risk assessment is available. Omitted with the checkout credential.
         * risk.anyOf[1] (Value): {@link PaymentRisk}. The risk assessment for a payment intent,
         * with its risk level, score, outcome, and any matched rule or review. risk.anyOf[2]
         * (Value): null. selected_payment_option (Optional): string. The payment option the most
         * recent confirmation used. Absent until the payment intent is first confirmed. Value
         * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". splits
         * (Optional): Array of {@link PaymentSplit}. Top-level PaymentSplit children in their
         * current state, embedded whole. Empty when the payment has no splits. Child changes do
         * not send payment_intent.updated. Omitted for buyer and checkout credentials. splits[]
         * (Value): {@link PaymentSplit}. A top-level child of a payment intent dividing the
         * collecting merchant's payment funds with one seller. Both parties read this same
         * resource with their own credentials. statement_descriptor (Required): string or null.
         * The text shown on the buyer's card or bank statement for this payment. `null` until the
         * charge is created. `null` when the provider supplies no descriptor. Frozen when the
         * charge is created. status (Required): string. Lifecycle status. requires_payment_method
         * covers both a new payment intent and one whose last attempt failed, so read
         * last_payment_error with it. succeeded, canceled, and expired are final. Refunds and
         * disputes never change status. Value enum: "requires_payment_method",
         * "requires_confirmation", "requires_action", "processing", "requires_capture",
         * "canceled", "succeeded", "expired". subscription_id (Optional): string. The subscription
         * whose billing charged this payment: its first charge, a renewal, a retry or a setup fee.
         * Not set for the checkout payment that created a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". support_reference (Required): string. Opaque payment
         * reference to share with merchant support. Do not parse its format. supported_actions
         * (Required): Array of string. Actions the payment intent's current state accepts, each a
         * POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
         * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
         * something outside the payment intent: an open risk review, an order payment attempt that
         * is using this payment, a closed order, or the merchant's account. An order-owned payment
         * intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes
         * only when the payment intent changes. Always empty for buyer credentials. New actions
         * may be added. [] enum: "confirm", "capture", "cancel". supported_actions[] (Value):
         * string. Value enum: "confirm", "capture", "cancel". tip_money (Optional): {@link
         * MoneyValue} or null. Portion of amount_money that is a tip. Uses amount_money's currency
         * and is at most amount_money. tip_money.anyOf[1] (Value): {@link MoneyValue}. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * tip_money.anyOf[2] (Value): null. transaction_purpose (Optional): string. Why a bank
         * debit is taken. Set only when payment_options includes ach_debit, and fixed once the
         * payment intent exists. Value enum: "goods", "services", "other". updated_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Itemized invoice, subscription, and automatic tax fees collected with this payment.
             * Available to the merchant only. Empty until fees settle or when no add-ons apply.
             * Refunds do not return or revise these fees. Absent until Flint has determined and
             * verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * [] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment intent, with the
             * fee type and amount.
             */
            "add_on_fees"?: Array<PaymentAddOnFee>;
            /**
             * The amount requested from the buyer, including any tip_money. Capturing doesn't
             * change it: after a partial capture it still shows the requested amount, and
             * captured_money shows what was collected. On a standalone payment intent, PATCH can
             * change it only before the first confirmation attempt. An amount_money or tip_money
             * change that leaves too little for stored splits returns LIMIT_EXCEEDED at the
             * changed field with minimum_money. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Effective Flint deadline to capture a manual-capture hold: the earlier of the
             * provider capture deadline and any order resource guarantee. Order guarantees last at
             * most 24 hours from the payment attempt start and may end earlier. Capture is refused
             * at or after this time, even while status is requires_capture. Omitted until a hold
             * is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "authorization_expires_at"?: string;
            /**
             * When the processor authorized the payment. Absent until then. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "authorized_at"?: string;
            /**
             * The amount the processor authorized. It always equals amount_money and doesn't
             * change once set, even when a capture collects more. On a payment intent canceled
             * with cancellation_reason payment_returned, it equals the authorization Flint
             * released instead. Absent until the payment is authorized, and on payments canceled
             * before authorization. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "authorized_money"?: MoneyValue;
            /**
             * Flint-normalized reason the payment intent was canceled. Present only while status
             * is canceled. Unknown processor values are returned as payment_canceled. Value enum:
             * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
             * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
             * "payment_returned".
             */
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            /**
             * The part of the authorization you can still capture. Positive only while status is
             * requires_capture, and zero after you capture or cancel or the authorization expires.
             * The authorization lapses at authorization_expires_at, and a capture attempted after
             * that fails even if this is positive. Absent until the payment is authorized.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "capturable_money"?: MoneyValue;
            /**
             * When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
             */
            "capture_method"?: "automatic" | "manual" | (string & {});
            /**
             * When money was captured. For automatic capture, this is when the payment succeeded.
             * Absent until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "captured_at"?: string;
            /**
             * The amount collected from the buyer, including captured_tip_money. Reconcile revenue
             * and print receipts from this amount, not amount_money. Zero while a hold is open,
             * and positive whenever status is succeeded. After an overcapture it is above
             * authorized_money. Also positive on a payment intent canceled with
             * cancellation_reason payment_returned: Flint captured the money and is returning it
             * through a refund with reason payment_returned. processing_fee_money,
             * merchant_net_money, and refunds are based on it. Absent until the payment is
             * authorized. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_money"?: MoneyValue;
            /**
             * The part of captured_money that is a tip: the capture's tip_money when it sent one,
             * otherwise the tip the authorization carried, at most captured_money. tip_money keeps
             * the tip the authorization carried. Refunds return it last. Absent until the payment
             * is captured. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_tip_money"?: MoneyValue;
            /**
             * Flint checkout session ID associated with this payment, when present. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at"?: string;
            /**
             * The linked customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer. anyOf[1]
             * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
             * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Whether the customer was present for the most recent confirmation. absent means
             * Flint charged a saved card without them, as a merchant-initiated payment on its
             * stored credential. Subscription renewals and automatic invoice charges are absent,
             * and other payments are absent only when confirmed or paid with customer_presence
             * absent. A customer who pays any of them with a card they enter makes it present.
             * Each confirmation sets it again. Value enum: "present", "absent".
             */
            "customer_presence": "present" | "absent" | (string & {});
            /**
             * Dispute state of this payment. none means no dispute or inquiry is open or recorded.
             * The inquiry_ values track an issuer inquiry or early warning that isn't a
             * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other".
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
             * Caller-owned identifier for this resource in an external system. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string | null;
            /**
             * Present when a payment provider asked Flint to pause fulfillment for this payment.
             * While its status is active, open fulfillments on the order are on hold with reason
             * payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts
             * and when it lifts. A hold on fulfillment tied to a payment, with the reason, the
             * action required, and whether the hold is active or released.
             */
            "fulfillment_hold"?: PaymentFulfillmentHold;
            /**
             * The linked invoice. Returned only with expand=invoice. Present only when `expand`
             * includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1]
             * (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields, including
             * status, due date, and paid, outstanding, and refunded amounts, returned when the
             * invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * Invoice this payment intent collects, when it pays an invoice. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value):
             * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
             * normalized error code, a message, the failure time, and remediation. anyOf[2]
             * (Value): null.
             */
            "last_payment_error": ((PaymentErrorSummary) | (null));
            /**
             * The order payment attempt that most recently used this payment intent. Start times
             * count to the second; of attempts that started in the same second, the one with the
             * highest order_payment_attempt_id is named. `null` when no attempt has used it yet;
             * omitted for payment intents without an order. It changes only when an attempt starts
             * using this payment intent, which advances version. Returned with merchant
             * credentials; omitted with buyer and checkout credentials. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "latest_order_payment_attempt_id"?: string | null;
            /**
             * Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Captured amount minus processing_fee_money, every amount in add_on_fees,
             * platform_fee.amount_money, and each split commitment. Live, succeeded and
             * fully_reversed splits commit their whole amount; payment_not_completed and
             * install_revoked cancellations commit nothing. A failed split commits only money
             * already taken back before failure; its remainder returns to the collecting merchant.
             * Refunds do not reduce the commitment. Later merchant assessments and credits are
             * separate balance effects. Absent until Flint has determined and verified the fee. If
             * Flint can't verify it when you read the payment intent, the field is omitted rather
             * than shown unverified; read the payment intent again later. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "merchant_net_money"?: MoneyValue;
            /**
             * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't
             * returned. Caller-owned key-value data stored on a resource. Keys starting with
             * flint_ are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The linked order. Returned only with expand=order. Present only when `expand`
             * includes `order`; `null` when expanded and there is no related order. anyOf[1]
             * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
             * payment and refund status, and pricing and settlement amounts, returned when the
             * order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order this payment intent belongs to. Create it through the order and confirm it
             * with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
             * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
             * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Whether one capture can collect more than the authorization, and the most it can
             * collect. Present once a payment with request_overcapture true is authorized. Read it
             * to show the limit; capture enforces it. Whether one capture can collect more than
             * the authorization.
             */
            "overcapture"?: PaymentIntentOvercapture;
            /**
             * How the payment was started. Fixed when the payment intent is created. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
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
            /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
             * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum:
             * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
             */
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            /**
             * Summary of the card or bank account used for the payment. Absent until a payment
             * source is attached. A summary of the payment source used for a payment, by
             * funding-method family, with card or bank account display details.
             */
            "payment_source"?: PaymentSourceSummary;
            /**
             * The platform fee a partner app charges on this payment, when it created the payment
             * with an install token and a fee. Absent when the payment carries none. Returned only
             * to merchant credentials; omitted for buyer and checkout credentials. The platform
             * fee a partner app charges on this payment. The merchant pays it beside
             * processing_fee_money and add_on_fees, and merchant_net_money subtracts it.
             */
            "platform_fee"?: PaymentIntentPlatformFee;
            /**
             * Flint's all-in processing fee for this payment. It is the complete price Flint
             * charges to process the payment, never a provider cost passed through. The fee is
             * final once the card payment is captured or the ACH payment succeeds; canceled
             * payments and failures before success have none, except a payment intent canceled
             * with cancellation_reason payment_returned, which shows the fee charged at capture on
             * the charge Flint is returning. Flint returns that fee to your balance separately.
             * Invoice, subscription, and automatic tax fees are itemized separately in
             * add_on_fees. Your net for the payment is captured_money minus this fee and the
             * add-on fees. Refunds do not return or revise it. Absent until Flint has determined
             * and verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "processing_fee_money"?: MoneyValue;
            /**
             * The reader the payment is or was last presented on. Set when Flint presents it and
             * kept afterward. While processing or requires_action with a reader_id, the payment is
             * on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
             */
            "reader_id"?: string;
            /**
             * Email address for this payment's receipt. When it isn't set, Flint uses the
             * customer's email. Format: email. maxLength: 255. Example: "buyer@example.com".
             */
            "receipt_email"?: string | null;
            /**
             * Last time Flint can refund this payment through the original payment method. A
             * refund submitted at exactly this time is accepted; after it, refunds through the
             * original payment method are refused. Today only Affirm has a refund window: 120 days
             * after the payment settles. `null` when the method has no refund window, the payment
             * has not succeeded with captured money, or its capture time is missing. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refund_expires_at": string | null;
            /**
             * How much of captured_money has been refunded, including value issued as store
             * credit, based on refunded_money. Value enum: "none", "partially_refunded",
             * "refunded".
             */
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Total refunded against captured_money, including value issued as store credit and
             * processor refunds still pending. Failed and canceled refunds aren't counted. Zero
             * when nothing has been refunded. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money"?: MoneyValue;
            /**
             * The part of the authorization returned to the buyer without being charged: the
             * uncaptured remainder after a partial capture, or the whole authorization after a
             * cancellation or expiry. It was never collected, so it needs no refund and can't be
             * captured later. Zero after a capture at or above the authorization. Absent until the
             * payment is authorized. Monetary amount represented as integer minor units plus an
             * ISO 4217 currency code.
             */
            "released_money"?: MoneyValue;
            /**
             * Whether one capture may collect more than the authorization where the card network
             * allows it. Fixed at create. Always present with merchant credentials; omitted with
             * buyer and checkout credentials.
             */
            "request_overcapture"?: boolean;
            /**
             * Flint return ID associated with this payment, when present. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * The return resolution whose balance this payment collects. Set for exchange balances
             * and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Risk assessment. Always present with merchant credentials; null when no risk
             * assessment is available. Omitted with the checkout credential. anyOf[1] (Value):
             * {@link PaymentRisk}. The risk assessment for a payment intent, with its risk level,
             * score, outcome, and any matched rule or review. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentRisk) | (null));
            /**
             * The payment option the most recent confirmation used. Absent until the payment
             * intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm",
             * "ach_debit", "card_present".
             */
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            /**
             * Top-level PaymentSplit children in their current state, embedded whole. Empty when
             * the payment has no splits. Child changes do not send payment_intent.updated. Omitted
             * for buyer and checkout credentials. [] (Value): {@link PaymentSplit}. A top-level
             * child of a payment intent dividing the collecting merchant's payment funds with one
             * seller. Both parties read this same resource with their own credentials.
             */
            "splits"?: Array<PaymentSplit>;
            /**
             * The text shown on the buyer's card or bank statement for this payment. `null` until
             * the charge is created. `null` when the provider supplies no descriptor. Frozen when
             * the charge is created.
             */
            "statement_descriptor": string | null;
            /**
             * Lifecycle status. requires_payment_method covers both a new payment intent and one
             * whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
             * and expired are final. Refunds and disputes never change status. Value enum:
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
             * The subscription whose billing charged this payment: its first charge, a renewal, a
             * retry or a setup fee. Not set for the checkout payment that created a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /** Opaque payment reference to share with merchant support. Do not parse its format. */
            "support_reference": string;
            /**
             * Actions the payment intent's current state accepts, each a POST to
             * /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
             * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
             * something outside the payment intent: an open risk review, an order payment attempt
             * that is using this payment, a closed order, or the merchant's account. An
             * order-owned payment intent never lists confirm; pay it with POST
             * /v1/orders/{order_id}/pay. The list changes only when the payment intent changes.
             * Always empty for buyer credentials. New actions may be added. [] enum: "confirm",
             * "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture", "cancel".
             */
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            /**
             * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
             * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "tip_money"?: ((MoneyValue) | (null));
            /**
             * Why a bank debit is taken. Set only when payment_options includes ach_debit, and
             * fixed once the payment intent exists. Value enum: "goods", "services", "other".
             */
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "payment_intent.fulfillment_hold_updated". */
    "event_type"?: "payment_intent.fulfillment_hold_updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `payment_intent.fulfillment_hold_updated` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type PaymentIntentFulfillmentHoldUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `processing_fee_money`, `add_on_fees`, `merchant_net_money`. object.add_on_fees
     * (Optional): Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic
     * tax fees collected with this payment. Available to the merchant only. Empty until fees
     * settle or when no add-ons apply. Refunds do not return or revise these fees. Absent until
     * Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. object.add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a
     * payment intent, with the fee type and amount. object.amount_money (Required): {@link
     * MoneyValue}. The amount requested from the buyer, including any tip_money. Capturing doesn't
     * change it: after a partial capture it still shows the requested amount, and captured_money
     * shows what was collected. On a standalone payment intent, PATCH can change it only before
     * the first confirmation attempt. An amount_money or tip_money change that leaves too little
     * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.authorization_expires_at (Optional): string. Effective Flint deadline to capture a
     * manual-capture hold: the earlier of the provider capture deadline and any order resource
     * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may end
     * earlier. Capture is refused at or after this time, even while status is requires_capture.
     * Omitted until a hold is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.authorized_at (Optional): string. When the processor authorized the payment. Absent
     * until then. Format: date-time. Example: "2026-08-02T16:00:00Z". object.authorized_money
     * (Optional): {@link MoneyValue}. The amount the processor authorized. It always equals
     * amount_money and doesn't change once set, even when a capture collects more. On a payment
     * intent canceled with cancellation_reason payment_returned, it equals the authorization Flint
     * released instead. Absent until the payment is authorized, and on payments canceled before
     * authorization. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.cancellation_reason (Optional): string. Flint-normalized reason the payment
     * intent was canceled. Present only while status is canceled. Unknown processor values are
     * returned as payment_canceled. Value enum: "requested_by_customer", "duplicate",
     * "fraudulent", "abandoned", "invoice_payment_failed", "invoice_voided", "order_closed",
     * "payment_canceled", "payment_returned". object.capturable_money (Optional): {@link
     * MoneyValue}. The part of the authorization you can still capture. Positive only while status
     * is requires_capture, and zero after you capture or cancel or the authorization expires. The
     * authorization lapses at authorization_expires_at, and a capture attempted after that fails
     * even if this is positive. Absent until the payment is authorized. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.capture_method
     * (Optional): string. When money is collected. Defaults to automatic. Value enum: "automatic",
     * "manual". object.captured_at (Optional): string. When money was captured. For automatic
     * capture, this is when the payment succeeded. Absent until capture. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.captured_money (Optional): {@link MoneyValue}. The
     * amount collected from the buyer, including captured_tip_money. Reconcile revenue and print
     * receipts from this amount, not amount_money. Zero while a hold is open, and positive
     * whenever status is succeeded. After an overcapture it is above authorized_money. Also
     * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
     * captured the money and is returning it through a refund with reason payment_returned.
     * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
     * payment is authorized. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code. object.captured_tip_money (Optional): {@link MoneyValue}. The part of
     * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the tip
     * the authorization carried, at most captured_money. tip_money keeps the tip the authorization
     * carried. Refunds return it last. Absent until the payment is captured. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.checkout_session_id (Optional): string. Flint checkout session ID associated with
     * this payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.created_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. The linked customer.
     * Returned only with expand=customer. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. Customer linked to this payment intent. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_presence (Required): string. Whether the
     * customer was present for the most recent confirmation. absent means Flint charged a saved
     * card without them, as a merchant-initiated payment on its stored credential. Subscription
     * renewals and automatic invoice charges are absent, and other payments are absent only when
     * confirmed or paid with customer_presence absent. A customer who pays any of them with a card
     * they enter makes it present. Each confirmation sets it again. Value enum: "present",
     * "absent". object.dispute_status (Optional): string. Dispute state of this payment. none
     * means no dispute or inquiry is open or recorded. The inquiry_ values track an issuer inquiry
     * or early warning that isn't a chargeback. Read the dispute with GET /v1/disputes for its
     * deadline and evidence. Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
     * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented", "other".
     * object.external_reference_id (Optional): string or null. Caller-owned identifier for this
     * resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * object.fulfillment_hold (Optional): {@link PaymentFulfillmentHold}. Present when a payment
     * provider asked Flint to pause fulfillment for this payment. While its status is active, open
     * fulfillments on the order are on hold with reason payment_review.
     * payment_intent.fulfillment_hold_updated is sent when the hold starts and when it lifts. A
     * hold on fulfillment tied to a payment, with the reason, the action required, and whether the
     * hold is active or released. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. The linked invoice. Returned only with expand=invoice. Present only when `expand`
     * includes `invoice`; `null` when expanded and there is no related invoice.
     * object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary
     * fields, including status, due date, and paid, outstanding, and refunded amounts, returned
     * when the invoice is expanded. object.invoice.anyOf[2] (Value): null. object.invoice_id
     * (Optional): string. Invoice this payment intent collects, when it pays an invoice. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". object.last_payment_error (Required): {@link
     * PaymentErrorSummary} or null. Most recent payment error. Null when no payment error is
     * recorded. object.last_payment_error.anyOf[1] (Value): {@link PaymentErrorSummary}. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation. object.last_payment_error.anyOf[2] (Value): null.
     * object.latest_order_payment_attempt_id (Optional): string or null. The order payment attempt
     * that most recently used this payment intent. Start times count to the second; of attempts
     * that started in the same second, the one with the highest order_payment_attempt_id is named.
     * `null` when no attempt has used it yet; omitted for payment intents without an order. It
     * changes only when an attempt starts using this payment intent, which advances version.
     * Returned with merchant credentials; omitted with buyer and checkout credentials. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.merchant_id (Optional): string. Merchant that owns
     * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_net_money
     * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount in
     * add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded and
     * fully_reversed splits commit their whole amount; payment_not_completed and install_revoked
     * cancellations commit nothing. A failed split commits only money already taken back before
     * failure; its remainder returns to the collecting merchant. Refunds do not reduce the
     * commitment. Later merchant assessments and credits are separate balance effects. Absent
     * until Flint has determined and verified the fee. If Flint can't verify it when you read the
     * payment intent, the field is omitted rather than shown unverified; read the payment intent
     * again later. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.metadata (Required): {@link MetadataMap}. Caller-owned metadata. Keys starting
     * with flint_ are reserved for Flint and aren't returned. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. The
     * linked order. Returned only with expand=order. Present only when `expand` includes `order`;
     * `null` when expanded and there is no related order. object.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. Order this payment
     * intent belongs to. Create it through the order and confirm it with POST
     * /v1/orders/{order_id}/pay. Capture and cancel use POST
     * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
     * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.overcapture (Optional): {@link
     * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization, and
     * the most it can collect. Present once a payment with request_overcapture true is authorized.
     * Read it to show the limit; capture enforces it. Whether one capture can collect more than
     * the authorization. object.payment_flow (Required): string. How the payment was started.
     * Fixed when the payment intent is created. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     * object.payment_intent_id (Required): string. Flint payment intent ID. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_options (Required): Array of string. Payment
     * options the buyer can use for this payment. [] enum: "card", "apple_pay", "google_pay",
     * "affirm", "ach_debit", "card_present". object.payment_options[] (Value): string. Value enum:
     * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
     * object.payment_source (Optional): {@link PaymentSourceSummary}. Summary of the card or bank
     * account used for the payment. Absent until a payment source is attached. A summary of the
     * payment source used for a payment, by funding-method family, with card or bank account
     * display details. object.platform_fee (Optional): {@link PaymentIntentPlatformFee}. The
     * platform fee a partner app charges on this payment, when it created the payment with an
     * install token and a fee. Absent when the payment carries none. Returned only to merchant
     * credentials; omitted for buyer and checkout credentials. The platform fee a partner app
     * charges on this payment. The merchant pays it beside processing_fee_money and add_on_fees,
     * and merchant_net_money subtracts it. object.processing_fee_money (Optional): {@link
     * MoneyValue}. Flint's all-in processing fee for this payment. It is the complete price Flint
     * charges to process the payment, never a provider cost passed through. The fee is final once
     * the card payment is captured or the ACH payment succeeds; canceled payments and failures
     * before success have none, except a payment intent canceled with cancellation_reason
     * payment_returned, which shows the fee charged at capture on the charge Flint is returning.
     * Flint returns that fee to your balance separately. Invoice, subscription, and automatic tax
     * fees are itemized separately in add_on_fees. Your net for the payment is captured_money
     * minus this fee and the add-on fees. Refunds do not return or revise it. Absent until Flint
     * has determined and verified the fee. If Flint can't verify it when you read the payment
     * intent, the field is omitted rather than shown unverified; read the payment intent again
     * later. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.reader_id (Optional): string. The reader the payment is or was last presented on. Set
     * when Flint presents it and kept afterward. While processing or requires_action with a
     * reader_id, the payment is on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
     * object.receipt_email (Optional): string or null. Email address for this payment's receipt.
     * When it isn't set, Flint uses the customer's email. Format: email. maxLength: 255. Example:
     * "buyer@example.com". object.refund_expires_at (Required): string or null. Last time Flint
     * can refund this payment through the original payment method. A refund submitted at exactly
     * this time is accepted; after it, refunds through the original payment method are refused.
     * Today only Affirm has a refund window: 120 days after the payment settles. `null` when the
     * method has no refund window, the payment has not succeeded with captured money, or its
     * capture time is missing. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.refund_status (Optional): string. How much of captured_money has been refunded,
     * including value issued as store credit, based on refunded_money. Value enum: "none",
     * "partially_refunded", "refunded". object.refunded_money (Optional): {@link MoneyValue}.
     * Total refunded against captured_money, including value issued as store credit and processor
     * refunds still pending. Failed and canceled refunds aren't counted. Zero when nothing has
     * been refunded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. object.released_money (Optional): {@link MoneyValue}. The part of the authorization
     * returned to the buyer without being charged: the uncaptured remainder after a partial
     * capture, or the whole authorization after a cancellation or expiry. It was never collected,
     * so it needs no refund and can't be captured later. Zero after a capture at or above the
     * authorization. Absent until the payment is authorized. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.request_overcapture (Optional):
     * boolean. Whether one capture may collect more than the authorization where the card network
     * allows it. Fixed at create. Always present with merchant credentials; omitted with buyer and
     * checkout credentials. object.return_id (Optional): string. Flint return ID associated with
     * this payment, when present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_resolution_id (Optional): string. The return resolution whose balance this
     * payment collects. Set for exchange balances and corrections. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.risk (Optional): {@link PaymentRisk} or null.
     * Risk assessment. Always present with merchant credentials; null when no risk assessment is
     * available. Omitted with the checkout credential. object.risk.anyOf[1] (Value): {@link
     * PaymentRisk}. The risk assessment for a payment intent, with its risk level, score, outcome,
     * and any matched rule or review. object.risk.anyOf[2] (Value): null.
     * object.selected_payment_option (Optional): string. The payment option the most recent
     * confirmation used. Absent until the payment intent is first confirmed. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". object.splits (Optional):
     * Array of {@link PaymentSplit}. Top-level PaymentSplit children in their current state,
     * embedded whole. Empty when the payment has no splits. Child changes do not send
     * payment_intent.updated. Omitted for buyer and checkout credentials. object.splits[] (Value):
     * {@link PaymentSplit}. A top-level child of a payment intent dividing the collecting
     * merchant's payment funds with one seller. Both parties read this same resource with their
     * own credentials. object.statement_descriptor (Required): string or null. The text shown on
     * the buyer's card or bank statement for this payment. `null` until the charge is created.
     * `null` when the provider supplies no descriptor. Frozen when the charge is created.
     * object.status (Required): string. Lifecycle status. requires_payment_method covers both a
     * new payment intent and one whose last attempt failed, so read last_payment_error with it.
     * succeeded, canceled, and expired are final. Refunds and disputes never change status. Value
     * enum: "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". object.subscription_id (Optional):
     * string. The subscription whose billing charged this payment: its first charge, a renewal, a
     * retry or a setup fee. Not set for the checkout payment that created a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.support_reference (Required): string. Opaque
     * payment reference to share with merchant support. Do not parse its format.
     * object.supported_actions (Required): Array of string. Actions the payment intent's current
     * state accepts, each a POST to /v1/payment-intents/{payment_intent_id}/{action}. An action
     * that isn't listed returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused
     * because of something outside the payment intent: an open risk review, an order payment
     * attempt that is using this payment, a closed order, or the merchant's account. An
     * order-owned payment intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay.
     * The list changes only when the payment intent changes. Always empty for buyer credentials.
     * New actions may be added. [] enum: "confirm", "capture", "cancel".
     * object.supported_actions[] (Value): string. Value enum: "confirm", "capture", "cancel".
     * object.tip_money (Optional): {@link MoneyValue} or null. Portion of amount_money that is a
     * tip. Uses amount_money's currency and is at most amount_money. object.tip_money.anyOf[1]
     * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.tip_money.anyOf[2] (Value): null. object.transaction_purpose
     * (Optional): string. Why a bank debit is taken. Set only when payment_options includes
     * ach_debit, and fixed once the payment intent exists. Value enum: "goods", "services",
     * "other". object.updated_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `processing_fee_money`, `add_on_fees`, `merchant_net_money`. add_on_fees (Optional):
         * Array of {@link PaymentAddOnFee}. Itemized invoice, subscription, and automatic tax fees
         * collected with this payment. Available to the merchant only. Empty until fees settle or
         * when no add-ons apply. Refunds do not return or revise these fees. Absent until Flint
         * has determined and verified the fee. If Flint can't verify it when you read the payment
         * intent, the field is omitted rather than shown unverified; read the payment intent again
         * later. add_on_fees[] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment
         * intent, with the fee type and amount. amount_money (Required): {@link MoneyValue}. The
         * amount requested from the buyer, including any tip_money. Capturing doesn't change it:
         * after a partial capture it still shows the requested amount, and captured_money shows
         * what was collected. On a standalone payment intent, PATCH can change it only before the
         * first confirmation attempt. An amount_money or tip_money change that leaves too little
         * for stored splits returns LIMIT_EXCEEDED at the changed field with minimum_money.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * authorization_expires_at (Optional): string. Effective Flint deadline to capture a
         * manual-capture hold: the earlier of the provider capture deadline and any order resource
         * guarantee. Order guarantees last at most 24 hours from the payment attempt start and may
         * end earlier. Capture is refused at or after this time, even while status is
         * requires_capture. Omitted until a hold is placed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". authorized_at (Optional): string. When the processor authorized
         * the payment. Absent until then. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * authorized_money (Optional): {@link MoneyValue}. The amount the processor authorized. It
         * always equals amount_money and doesn't change once set, even when a capture collects
         * more. On a payment intent canceled with cancellation_reason payment_returned, it equals
         * the authorization Flint released instead. Absent until the payment is authorized, and on
         * payments canceled before authorization. Monetary amount represented as integer minor
         * units plus an ISO 4217 currency code. cancellation_reason (Optional): string.
         * Flint-normalized reason the payment intent was canceled. Present only while status is
         * canceled. Unknown processor values are returned as payment_canceled. Value enum:
         * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
         * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
         * "payment_returned". capturable_money (Optional): {@link MoneyValue}. The part of the
         * authorization you can still capture. Positive only while status is requires_capture, and
         * zero after you capture or cancel or the authorization expires. The authorization lapses
         * at authorization_expires_at, and a capture attempted after that fails even if this is
         * positive. Absent until the payment is authorized. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. capture_method (Optional): string. When
         * money is collected. Defaults to automatic. Value enum: "automatic", "manual".
         * captured_at (Optional): string. When money was captured. For automatic capture, this is
         * when the payment succeeded. Absent until capture. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". captured_money (Optional): {@link MoneyValue}. The amount
         * collected from the buyer, including captured_tip_money. Reconcile revenue and print
         * receipts from this amount, not amount_money. Zero while a hold is open, and positive
         * whenever status is succeeded. After an overcapture it is above authorized_money. Also
         * positive on a payment intent canceled with cancellation_reason payment_returned: Flint
         * captured the money and is returning it through a refund with reason payment_returned.
         * processing_fee_money, merchant_net_money, and refunds are based on it. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. captured_tip_money (Optional): {@link MoneyValue}. The part of
         * captured_money that is a tip: the capture's tip_money when it sent one, otherwise the
         * tip the authorization carried, at most captured_money. tip_money keeps the tip the
         * authorization carried. Refunds return it last. Absent until the payment is captured.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * checkout_session_id (Optional): string. Flint checkout session ID associated with this
         * payment, when present. Example: "cs_01KEZF7C004JRWFW43H037MQRN". created_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. The linked customer. Returned only
         * with expand=customer. Present only when `expand` includes `customer`; `null` when
         * expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string. Customer linked to this payment intent. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_presence (Required): string. Whether the
         * customer was present for the most recent confirmation. absent means Flint charged a
         * saved card without them, as a merchant-initiated payment on its stored credential.
         * Subscription renewals and automatic invoice charges are absent, and other payments are
         * absent only when confirmed or paid with customer_presence absent. A customer who pays
         * any of them with a card they enter makes it present. Each confirmation sets it again.
         * Value enum: "present", "absent". dispute_status (Optional): string. Dispute state of
         * this payment. none means no dispute or inquiry is open or recorded. The inquiry_ values
         * track an issuer inquiry or early warning that isn't a chargeback. Read the dispute with
         * GET /v1/disputes for its deadline and evidence. Value enum: "none",
         * "inquiry_needs_response", "inquiry_under_review", "inquiry_closed", "needs_response",
         * "under_review", "won", "lost", "prevented", "other". external_reference_id (Optional):
         * string or null. Caller-owned identifier for this resource in an external system.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". fulfillment_hold (Optional):
         * {@link PaymentFulfillmentHold}. Present when a payment provider asked Flint to pause
         * fulfillment for this payment. While its status is active, open fulfillments on the order
         * are on hold with reason payment_review. payment_intent.fulfillment_hold_updated is sent
         * when the hold starts and when it lifts. A hold on fulfillment tied to a payment, with
         * the reason, the action required, and whether the hold is active or released. invoice
         * (Optional): {@link ExpandedInvoiceSummary} or null. The linked invoice. Returned only
         * with expand=invoice. Present only when `expand` includes `invoice`; `null` when expanded
         * and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. Invoice this payment
         * intent collects, when it pays an invoice. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
         * last_payment_error (Required): {@link PaymentErrorSummary} or null. Most recent payment
         * error. Null when no payment error is recorded. last_payment_error.anyOf[1] (Value):
         * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
         * normalized error code, a message, the failure time, and remediation.
         * last_payment_error.anyOf[2] (Value): null. latest_order_payment_attempt_id (Optional):
         * string or null. The order payment attempt that most recently used this payment intent.
         * Start times count to the second; of attempts that started in the same second, the one
         * with the highest order_payment_attempt_id is named. `null` when no attempt has used it
         * yet; omitted for payment intents without an order. It changes only when an attempt
         * starts using this payment intent, which advances version. Returned with merchant
         * credentials; omitted with buyer and checkout credentials. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". merchant_id (Optional): string. Merchant that owns
         * this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_net_money
         * (Optional): {@link MoneyValue}. Captured amount minus processing_fee_money, every amount
         * in add_on_fees, platform_fee.amount_money, and each split commitment. Live, succeeded
         * and fully_reversed splits commit their whole amount; payment_not_completed and
         * install_revoked cancellations commit nothing. A failed split commits only money already
         * taken back before failure; its remainder returns to the collecting merchant. Refunds do
         * not reduce the commitment. Later merchant assessments and credits are separate balance
         * effects. Absent until Flint has determined and verified the fee. If Flint can't verify
         * it when you read the payment intent, the field is omitted rather than shown unverified;
         * read the payment intent again later. Monetary amount represented as integer minor units
         * plus an ISO 4217 currency code. metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata. Keys starting with flint_ are reserved for Flint and aren't returned.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. The linked order. Returned only with
         * expand=order. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. Order this payment intent belongs to. Create it through the
         * order and confirm it with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
         * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
         * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". overcapture (Optional): {@link
         * PaymentIntentOvercapture}. Whether one capture can collect more than the authorization,
         * and the most it can collect. Present once a payment with request_overcapture true is
         * authorized. Read it to show the limit; capture enforces it. Whether one capture can
         * collect more than the authorization. payment_flow (Required): string. How the payment
         * was started. Fixed when the payment intent is created. Value enum: "checkout",
         * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
         * "virtual_terminal", "api". payment_intent_id (Required): string. Flint payment intent
         * ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_options (Required): Array of
         * string. Payment options the buyer can use for this payment. [] enum: "card",
         * "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". payment_options[]
         * (Value): string. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit",
         * "card_present". payment_source (Optional): {@link PaymentSourceSummary}. Summary of the
         * card or bank account used for the payment. Absent until a payment source is attached. A
         * summary of the payment source used for a payment, by funding-method family, with card or
         * bank account display details. platform_fee (Optional): {@link PaymentIntentPlatformFee}.
         * The platform fee a partner app charges on this payment, when it created the payment with
         * an install token and a fee. Absent when the payment carries none. Returned only to
         * merchant credentials; omitted for buyer and checkout credentials. The platform fee a
         * partner app charges on this payment. The merchant pays it beside processing_fee_money
         * and add_on_fees, and merchant_net_money subtracts it. processing_fee_money (Optional):
         * {@link MoneyValue}. Flint's all-in processing fee for this payment. It is the complete
         * price Flint charges to process the payment, never a provider cost passed through. The
         * fee is final once the card payment is captured or the ACH payment succeeds; canceled
         * payments and failures before success have none, except a payment intent canceled with
         * cancellation_reason payment_returned, which shows the fee charged at capture on the
         * charge Flint is returning. Flint returns that fee to your balance separately. Invoice,
         * subscription, and automatic tax fees are itemized separately in add_on_fees. Your net
         * for the payment is captured_money minus this fee and the add-on fees. Refunds do not
         * return or revise it. Absent until Flint has determined and verified the fee. If Flint
         * can't verify it when you read the payment intent, the field is omitted rather than shown
         * unverified; read the payment intent again later. Monetary amount represented as integer
         * minor units plus an ISO 4217 currency code. reader_id (Optional): string. The reader the
         * payment is or was last presented on. Set when Flint presents it and kept afterward.
         * While processing or requires_action with a reader_id, the payment is on that reader now.
         * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". receipt_email (Optional): string or null.
         * Email address for this payment's receipt. When it isn't set, Flint uses the customer's
         * email. Format: email. maxLength: 255. Example: "buyer@example.com". refund_expires_at
         * (Required): string or null. Last time Flint can refund this payment through the original
         * payment method. A refund submitted at exactly this time is accepted; after it, refunds
         * through the original payment method are refused. Today only Affirm has a refund window:
         * 120 days after the payment settles. `null` when the method has no refund window, the
         * payment has not succeeded with captured money, or its capture time is missing. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". refund_status (Optional): string. How much
         * of captured_money has been refunded, including value issued as store credit, based on
         * refunded_money. Value enum: "none", "partially_refunded", "refunded". refunded_money
         * (Optional): {@link MoneyValue}. Total refunded against captured_money, including value
         * issued as store credit and processor refunds still pending. Failed and canceled refunds
         * aren't counted. Zero when nothing has been refunded. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. released_money (Optional): {@link
         * MoneyValue}. The part of the authorization returned to the buyer without being charged:
         * the uncaptured remainder after a partial capture, or the whole authorization after a
         * cancellation or expiry. It was never collected, so it needs no refund and can't be
         * captured later. Zero after a capture at or above the authorization. Absent until the
         * payment is authorized. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. request_overcapture (Optional): boolean. Whether one capture may
         * collect more than the authorization where the card network allows it. Fixed at create.
         * Always present with merchant credentials; omitted with buyer and checkout credentials.
         * return_id (Optional): string. Flint return ID associated with this payment, when
         * present. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_resolution_id (Optional):
         * string. The return resolution whose balance this payment collects. Set for exchange
         * balances and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". risk (Optional):
         * {@link PaymentRisk} or null. Risk assessment. Always present with merchant credentials;
         * null when no risk assessment is available. Omitted with the checkout credential.
         * risk.anyOf[1] (Value): {@link PaymentRisk}. The risk assessment for a payment intent,
         * with its risk level, score, outcome, and any matched rule or review. risk.anyOf[2]
         * (Value): null. selected_payment_option (Optional): string. The payment option the most
         * recent confirmation used. Absent until the payment intent is first confirmed. Value
         * enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present". splits
         * (Optional): Array of {@link PaymentSplit}. Top-level PaymentSplit children in their
         * current state, embedded whole. Empty when the payment has no splits. Child changes do
         * not send payment_intent.updated. Omitted for buyer and checkout credentials. splits[]
         * (Value): {@link PaymentSplit}. A top-level child of a payment intent dividing the
         * collecting merchant's payment funds with one seller. Both parties read this same
         * resource with their own credentials. statement_descriptor (Required): string or null.
         * The text shown on the buyer's card or bank statement for this payment. `null` until the
         * charge is created. `null` when the provider supplies no descriptor. Frozen when the
         * charge is created. status (Required): string. Lifecycle status. requires_payment_method
         * covers both a new payment intent and one whose last attempt failed, so read
         * last_payment_error with it. succeeded, canceled, and expired are final. Refunds and
         * disputes never change status. Value enum: "requires_payment_method",
         * "requires_confirmation", "requires_action", "processing", "requires_capture",
         * "canceled", "succeeded", "expired". subscription_id (Optional): string. The subscription
         * whose billing charged this payment: its first charge, a renewal, a retry or a setup fee.
         * Not set for the checkout payment that created a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". support_reference (Required): string. Opaque payment
         * reference to share with merchant support. Do not parse its format. supported_actions
         * (Required): Array of string. Actions the payment intent's current state accepts, each a
         * POST to /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
         * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
         * something outside the payment intent: an open risk review, an order payment attempt that
         * is using this payment, a closed order, or the merchant's account. An order-owned payment
         * intent never lists confirm; pay it with POST /v1/orders/{order_id}/pay. The list changes
         * only when the payment intent changes. Always empty for buyer credentials. New actions
         * may be added. [] enum: "confirm", "capture", "cancel". supported_actions[] (Value):
         * string. Value enum: "confirm", "capture", "cancel". tip_money (Optional): {@link
         * MoneyValue} or null. Portion of amount_money that is a tip. Uses amount_money's currency
         * and is at most amount_money. tip_money.anyOf[1] (Value): {@link MoneyValue}. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code.
         * tip_money.anyOf[2] (Value): null. transaction_purpose (Optional): string. Why a bank
         * debit is taken. Set only when payment_options includes ach_debit, and fixed once the
         * payment intent exists. Value enum: "goods", "services", "other". updated_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Itemized invoice, subscription, and automatic tax fees collected with this payment.
             * Available to the merchant only. Empty until fees settle or when no add-ons apply.
             * Refunds do not return or revise these fees. Absent until Flint has determined and
             * verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * [] (Value): {@link PaymentAddOnFee}. A Flint fee added to a payment intent, with the
             * fee type and amount.
             */
            "add_on_fees"?: Array<PaymentAddOnFee>;
            /**
             * The amount requested from the buyer, including any tip_money. Capturing doesn't
             * change it: after a partial capture it still shows the requested amount, and
             * captured_money shows what was collected. On a standalone payment intent, PATCH can
             * change it only before the first confirmation attempt. An amount_money or tip_money
             * change that leaves too little for stored splits returns LIMIT_EXCEEDED at the
             * changed field with minimum_money. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * Effective Flint deadline to capture a manual-capture hold: the earlier of the
             * provider capture deadline and any order resource guarantee. Order guarantees last at
             * most 24 hours from the payment attempt start and may end earlier. Capture is refused
             * at or after this time, even while status is requires_capture. Omitted until a hold
             * is placed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "authorization_expires_at"?: string;
            /**
             * When the processor authorized the payment. Absent until then. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "authorized_at"?: string;
            /**
             * The amount the processor authorized. It always equals amount_money and doesn't
             * change once set, even when a capture collects more. On a payment intent canceled
             * with cancellation_reason payment_returned, it equals the authorization Flint
             * released instead. Absent until the payment is authorized, and on payments canceled
             * before authorization. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "authorized_money"?: MoneyValue;
            /**
             * Flint-normalized reason the payment intent was canceled. Present only while status
             * is canceled. Unknown processor values are returned as payment_canceled. Value enum:
             * "requested_by_customer", "duplicate", "fraudulent", "abandoned",
             * "invoice_payment_failed", "invoice_voided", "order_closed", "payment_canceled",
             * "payment_returned".
             */
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            /**
             * The part of the authorization you can still capture. Positive only while status is
             * requires_capture, and zero after you capture or cancel or the authorization expires.
             * The authorization lapses at authorization_expires_at, and a capture attempted after
             * that fails even if this is positive. Absent until the payment is authorized.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "capturable_money"?: MoneyValue;
            /**
             * When money is collected. Defaults to automatic. Value enum: "automatic", "manual".
             */
            "capture_method"?: "automatic" | "manual" | (string & {});
            /**
             * When money was captured. For automatic capture, this is when the payment succeeded.
             * Absent until capture. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "captured_at"?: string;
            /**
             * The amount collected from the buyer, including captured_tip_money. Reconcile revenue
             * and print receipts from this amount, not amount_money. Zero while a hold is open,
             * and positive whenever status is succeeded. After an overcapture it is above
             * authorized_money. Also positive on a payment intent canceled with
             * cancellation_reason payment_returned: Flint captured the money and is returning it
             * through a refund with reason payment_returned. processing_fee_money,
             * merchant_net_money, and refunds are based on it. Absent until the payment is
             * authorized. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_money"?: MoneyValue;
            /**
             * The part of captured_money that is a tip: the capture's tip_money when it sent one,
             * otherwise the tip the authorization carried, at most captured_money. tip_money keeps
             * the tip the authorization carried. Refunds return it last. Absent until the payment
             * is captured. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "captured_tip_money"?: MoneyValue;
            /**
             * Flint checkout session ID associated with this payment, when present. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at"?: string;
            /**
             * The linked customer. Returned only with expand=customer. Present only when `expand`
             * includes `customer`; `null` when expanded and there is no related customer. anyOf[1]
             * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
             * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * Customer linked to this payment intent. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Whether the customer was present for the most recent confirmation. absent means
             * Flint charged a saved card without them, as a merchant-initiated payment on its
             * stored credential. Subscription renewals and automatic invoice charges are absent,
             * and other payments are absent only when confirmed or paid with customer_presence
             * absent. A customer who pays any of them with a card they enter makes it present.
             * Each confirmation sets it again. Value enum: "present", "absent".
             */
            "customer_presence": "present" | "absent" | (string & {});
            /**
             * Dispute state of this payment. none means no dispute or inquiry is open or recorded.
             * The inquiry_ values track an issuer inquiry or early warning that isn't a
             * chargeback. Read the dispute with GET /v1/disputes for its deadline and evidence.
             * Value enum: "none", "inquiry_needs_response", "inquiry_under_review",
             * "inquiry_closed", "needs_response", "under_review", "won", "lost", "prevented",
             * "other".
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
             * Caller-owned identifier for this resource in an external system. minLength: 1.
             * maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string | null;
            /**
             * Present when a payment provider asked Flint to pause fulfillment for this payment.
             * While its status is active, open fulfillments on the order are on hold with reason
             * payment_review. payment_intent.fulfillment_hold_updated is sent when the hold starts
             * and when it lifts. A hold on fulfillment tied to a payment, with the reason, the
             * action required, and whether the hold is active or released.
             */
            "fulfillment_hold"?: PaymentFulfillmentHold;
            /**
             * The linked invoice. Returned only with expand=invoice. Present only when `expand`
             * includes `invoice`; `null` when expanded and there is no related invoice. anyOf[1]
             * (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields, including
             * status, due date, and paid, outstanding, and refunded amounts, returned when the
             * invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * Invoice this payment intent collects, when it pays an invoice. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Most recent payment error. Null when no payment error is recorded. anyOf[1] (Value):
             * {@link PaymentErrorSummary}. A summary of why a payment attempt failed, with a
             * normalized error code, a message, the failure time, and remediation. anyOf[2]
             * (Value): null.
             */
            "last_payment_error": ((PaymentErrorSummary) | (null));
            /**
             * The order payment attempt that most recently used this payment intent. Start times
             * count to the second; of attempts that started in the same second, the one with the
             * highest order_payment_attempt_id is named. `null` when no attempt has used it yet;
             * omitted for payment intents without an order. It changes only when an attempt starts
             * using this payment intent, which advances version. Returned with merchant
             * credentials; omitted with buyer and checkout credentials. Example:
             * "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "latest_order_payment_attempt_id"?: string | null;
            /**
             * Merchant that owns this payment intent. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Captured amount minus processing_fee_money, every amount in add_on_fees,
             * platform_fee.amount_money, and each split commitment. Live, succeeded and
             * fully_reversed splits commit their whole amount; payment_not_completed and
             * install_revoked cancellations commit nothing. A failed split commits only money
             * already taken back before failure; its remainder returns to the collecting merchant.
             * Refunds do not reduce the commitment. Later merchant assessments and credits are
             * separate balance effects. Absent until Flint has determined and verified the fee. If
             * Flint can't verify it when you read the payment intent, the field is omitted rather
             * than shown unverified; read the payment intent again later. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "merchant_net_money"?: MoneyValue;
            /**
             * Caller-owned metadata. Keys starting with flint_ are reserved for Flint and aren't
             * returned. Caller-owned key-value data stored on a resource. Keys starting with
             * flint_ are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * The linked order. Returned only with expand=order. Present only when `expand`
             * includes `order`; `null` when expanded and there is no related order. anyOf[1]
             * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
             * payment and refund status, and pricing and settlement amounts, returned when the
             * order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order this payment intent belongs to. Create it through the order and confirm it
             * with POST /v1/orders/{order_id}/pay. Capture and cancel use POST
             * /v1/payment-intents/{payment_intent_id}/capture or /cancel for every payment intent.
             * Order-owned intents accept PATCH for metadata and external_reference_id. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * Whether one capture can collect more than the authorization, and the most it can
             * collect. Present once a payment with request_overcapture true is authorized. Read it
             * to show the limit; capture enforces it. Whether one capture can collect more than
             * the authorization.
             */
            "overcapture"?: PaymentIntentOvercapture;
            /**
             * How the payment was started. Fixed when the payment intent is created. Value enum:
             * "checkout", "payment_link", "invoice", "subscription_initial",
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
            /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_id": string;
            /**
             * Payment options the buyer can use for this payment. [] enum: "card", "apple_pay",
             * "google_pay", "affirm", "ach_debit", "card_present". [] (Value): string. Value enum:
             * "card", "apple_pay", "google_pay", "affirm", "ach_debit", "card_present".
             */
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            /**
             * Summary of the card or bank account used for the payment. Absent until a payment
             * source is attached. A summary of the payment source used for a payment, by
             * funding-method family, with card or bank account display details.
             */
            "payment_source"?: PaymentSourceSummary;
            /**
             * The platform fee a partner app charges on this payment, when it created the payment
             * with an install token and a fee. Absent when the payment carries none. Returned only
             * to merchant credentials; omitted for buyer and checkout credentials. The platform
             * fee a partner app charges on this payment. The merchant pays it beside
             * processing_fee_money and add_on_fees, and merchant_net_money subtracts it.
             */
            "platform_fee"?: PaymentIntentPlatformFee;
            /**
             * Flint's all-in processing fee for this payment. It is the complete price Flint
             * charges to process the payment, never a provider cost passed through. The fee is
             * final once the card payment is captured or the ACH payment succeeds; canceled
             * payments and failures before success have none, except a payment intent canceled
             * with cancellation_reason payment_returned, which shows the fee charged at capture on
             * the charge Flint is returning. Flint returns that fee to your balance separately.
             * Invoice, subscription, and automatic tax fees are itemized separately in
             * add_on_fees. Your net for the payment is captured_money minus this fee and the
             * add-on fees. Refunds do not return or revise it. Absent until Flint has determined
             * and verified the fee. If Flint can't verify it when you read the payment intent, the
             * field is omitted rather than shown unverified; read the payment intent again later.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "processing_fee_money"?: MoneyValue;
            /**
             * The reader the payment is or was last presented on. Set when Flint presents it and
             * kept afterward. While processing or requires_action with a reader_id, the payment is
             * on that reader now. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C".
             */
            "reader_id"?: string;
            /**
             * Email address for this payment's receipt. When it isn't set, Flint uses the
             * customer's email. Format: email. maxLength: 255. Example: "buyer@example.com".
             */
            "receipt_email"?: string | null;
            /**
             * Last time Flint can refund this payment through the original payment method. A
             * refund submitted at exactly this time is accepted; after it, refunds through the
             * original payment method are refused. Today only Affirm has a refund window: 120 days
             * after the payment settles. `null` when the method has no refund window, the payment
             * has not succeeded with captured money, or its capture time is missing. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "refund_expires_at": string | null;
            /**
             * How much of captured_money has been refunded, including value issued as store
             * credit, based on refunded_money. Value enum: "none", "partially_refunded",
             * "refunded".
             */
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            /**
             * Total refunded against captured_money, including value issued as store credit and
             * processor refunds still pending. Failed and canceled refunds aren't counted. Zero
             * when nothing has been refunded. Monetary amount represented as integer minor units
             * plus an ISO 4217 currency code.
             */
            "refunded_money"?: MoneyValue;
            /**
             * The part of the authorization returned to the buyer without being charged: the
             * uncaptured remainder after a partial capture, or the whole authorization after a
             * cancellation or expiry. It was never collected, so it needs no refund and can't be
             * captured later. Zero after a capture at or above the authorization. Absent until the
             * payment is authorized. Monetary amount represented as integer minor units plus an
             * ISO 4217 currency code.
             */
            "released_money"?: MoneyValue;
            /**
             * Whether one capture may collect more than the authorization where the card network
             * allows it. Fixed at create. Always present with merchant credentials; omitted with
             * buyer and checkout credentials.
             */
            "request_overcapture"?: boolean;
            /**
             * Flint return ID associated with this payment, when present. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * The return resolution whose balance this payment collects. Set for exchange balances
             * and corrections. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id"?: string;
            /**
             * Risk assessment. Always present with merchant credentials; null when no risk
             * assessment is available. Omitted with the checkout credential. anyOf[1] (Value):
             * {@link PaymentRisk}. The risk assessment for a payment intent, with its risk level,
             * score, outcome, and any matched rule or review. anyOf[2] (Value): null.
             */
            "risk"?: ((PaymentRisk) | (null));
            /**
             * The payment option the most recent confirmation used. Absent until the payment
             * intent is first confirmed. Value enum: "card", "apple_pay", "google_pay", "affirm",
             * "ach_debit", "card_present".
             */
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            /**
             * Top-level PaymentSplit children in their current state, embedded whole. Empty when
             * the payment has no splits. Child changes do not send payment_intent.updated. Omitted
             * for buyer and checkout credentials. [] (Value): {@link PaymentSplit}. A top-level
             * child of a payment intent dividing the collecting merchant's payment funds with one
             * seller. Both parties read this same resource with their own credentials.
             */
            "splits"?: Array<PaymentSplit>;
            /**
             * The text shown on the buyer's card or bank statement for this payment. `null` until
             * the charge is created. `null` when the provider supplies no descriptor. Frozen when
             * the charge is created.
             */
            "statement_descriptor": string | null;
            /**
             * Lifecycle status. requires_payment_method covers both a new payment intent and one
             * whose last attempt failed, so read last_payment_error with it. succeeded, canceled,
             * and expired are final. Refunds and disputes never change status. Value enum:
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
             * The subscription whose billing charged this payment: its first charge, a renewal, a
             * retry or a setup fee. Not set for the checkout payment that created a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
             */
            "subscription_id"?: string;
            /** Opaque payment reference to share with merchant support. Do not parse its format. */
            "support_reference": string;
            /**
             * Actions the payment intent's current state accepts, each a POST to
             * /v1/payment-intents/{payment_intent_id}/{action}. An action that isn't listed
             * returns 409 ACTION_NOT_ALLOWED. A listed action can still be refused because of
             * something outside the payment intent: an open risk review, an order payment attempt
             * that is using this payment, a closed order, or the merchant's account. An
             * order-owned payment intent never lists confirm; pay it with POST
             * /v1/orders/{order_id}/pay. The list changes only when the payment intent changes.
             * Always empty for buyer credentials. New actions may be added. [] enum: "confirm",
             * "capture", "cancel". [] (Value): string. Value enum: "confirm", "capture", "cancel".
             */
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            /**
             * Portion of amount_money that is a tip. Uses amount_money's currency and is at most
             * amount_money. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
             */
            "tip_money"?: ((MoneyValue) | (null));
            /**
             * Why a bank debit is taken. Set only when payment_options includes ach_debit, and
             * fixed once the payment intent exists. Value enum: "goods", "services", "other".
             */
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "payment_intent.fulfillment_hold_updated". */
    "event_type"?: "payment_intent.fulfillment_hold_updated";
});
/** A page of `PaymentIntent` objects. */
export type PaymentIntentListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PaymentIntent}. One payment from a buyer, standalone or as a leg of an order. amount_money
     * is the amount requested. Once the payment is authorized, authorized_money equals
     * amount_money (on a payment intent canceled with cancellation_reason payment_returned, the
     * authorization Flint released) and splits into captured_money (collected), capturable_money
     * (still on hold), and released_money (returned without being charged), so authorized_money
     * equals the sum of those three whenever the capture is at most the authorization. An
     * overcapture (see request_overcapture) has capturable_money and released_money zero and
     * captured_money above authorized_money. Reconcile revenue from captured_money.
     */
    "data": Array<PaymentIntent>;
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
/** Whether one capture can collect more than the authorization. */
export type PaymentIntentOvercapture = {
    /**
     * The most one capture can collect. Equals capturable_money when status is unavailable.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "maximum_capturable_money": MoneyValue;
    /**
     * Whether the processor allows overcapturing this authorization. Can gain values; treat an
     * unknown value as unavailable. Value enum: "available", "unavailable".
     */
    "status": "available" | "unavailable" | (string & {});
};
export type PaymentIntentPaymentFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_on_fees"?: Array<PaymentAddOnFee>;
            "amount_money": MoneyValue;
            "authorization_expires_at"?: string;
            "authorized_at"?: string;
            "authorized_money"?: MoneyValue;
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            "capturable_money"?: MoneyValue;
            "capture_method"?: "automatic" | "manual" | (string & {});
            "captured_at"?: string;
            "captured_money"?: MoneyValue;
            "captured_tip_money"?: MoneyValue;
            "checkout_session_id"?: string;
            "created_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_presence": "present" | "absent" | (string & {});
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
            "external_reference_id"?: string | null;
            "fulfillment_hold"?: PaymentFulfillmentHold;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "last_payment_error": ((PaymentErrorSummary) | (null));
            "latest_order_payment_attempt_id"?: string | null;
            "merchant_id"?: string;
            "merchant_net_money"?: MoneyValue;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "overcapture"?: PaymentIntentOvercapture;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent_id": string;
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            "payment_source"?: PaymentSourceSummary;
            "platform_fee"?: PaymentIntentPlatformFee;
            "processing_fee_money"?: MoneyValue;
            "reader_id"?: string;
            "receipt_email"?: string | null;
            "refund_expires_at": string | null;
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money"?: MoneyValue;
            "released_money"?: MoneyValue;
            "request_overcapture"?: boolean;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "risk"?: ((PaymentRisk) | (null));
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            "splits"?: Array<PaymentSplit>;
            "statement_descriptor": string | null;
            "status": "requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {});
            "subscription_id"?: string;
            "support_reference": string;
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            "tip_money"?: ((MoneyValue) | (null));
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "payment_intent.payment_failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "add_on_fees"?: Array<PaymentAddOnFee>;
            "amount_money": MoneyValue;
            "authorization_expires_at"?: string;
            "authorized_at"?: string;
            "authorized_money"?: MoneyValue;
            "cancellation_reason"?: "requested_by_customer"
                | "duplicate"
                | "fraudulent"
                | "abandoned"
                | "invoice_payment_failed"
                | "invoice_voided"
                | "order_closed"
                | "payment_canceled"
                | "payment_returned"
                | (string & {});
            "capturable_money"?: MoneyValue;
            "capture_method"?: "automatic" | "manual" | (string & {});
            "captured_at"?: string;
            "captured_money"?: MoneyValue;
            "captured_tip_money"?: MoneyValue;
            "checkout_session_id"?: string;
            "created_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_presence": "present" | "absent" | (string & {});
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
            "external_reference_id"?: string | null;
            "fulfillment_hold"?: PaymentFulfillmentHold;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "last_payment_error": ((PaymentErrorSummary) | (null));
            "latest_order_payment_attempt_id"?: string | null;
            "merchant_id"?: string;
            "merchant_net_money"?: MoneyValue;
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "overcapture"?: PaymentIntentOvercapture;
            "payment_flow": "checkout"
                | "payment_link"
                | "invoice"
                | "subscription_initial"
                | "subscription_renewal"
                | "virtual_terminal"
                | "api"
                | (string & {});
            "payment_intent_id": string;
            "payment_options": Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {})>;
            "payment_source"?: PaymentSourceSummary;
            "platform_fee"?: PaymentIntentPlatformFee;
            "processing_fee_money"?: MoneyValue;
            "reader_id"?: string;
            "receipt_email"?: string | null;
            "refund_expires_at": string | null;
            "refund_status"?: "none" | "partially_refunded" | "refunded" | (string & {});
            "refunded_money"?: MoneyValue;
            "released_money"?: MoneyValue;
            "request_overcapture"?: boolean;
            "return_id"?: string;
            "return_resolution_id"?: string;
            "risk"?: ((PaymentRisk) | (null));
            "selected_payment_option"?: "card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | "card_present" | (string & {});
            "splits"?: Array<PaymentSplit>;
            "statement_descriptor": string | null;
            "status": "requires_payment_method"
                | "requires_confirmation"
                | "requires_action"
                | "processing"
                | "requires_capture"
                | "canceled"
                | "succeeded"
                | "expired"
                | (string & {});
            "subscription_id"?: string;
            "support_reference": string;
            "supported_actions": Array<"confirm" | "capture" | "cancel" | (string & {})>;
            "tip_money"?: ((MoneyValue) | (null));
            "transaction_purpose"?: "goods" | "services" | "other" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<PaymentIntent>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "payment_intent.payment_failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "payment_intent.payment_failed";
});
