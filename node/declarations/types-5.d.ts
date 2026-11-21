import type { AcceptFulfillmentRequestInput, ApplyInventoryCountRequestInput } from './types-0.js';
import type { InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-32.js';
import type { ResponseMeta } from './types-62.js';
import type { Order, OrderEdit } from './types-45.js';
import type { PayOrderResponse, PartnerWebhookEnvelope } from './types-50.js';
import type { GetReturnDispositionResponse, GetReturnResponse, GetReturnResolutionResponse, GiftCard } from './types-28.js';
import type {
    ReadinessAction,
    ReadinessRequirements,
    ReadinessActionPreviousAttributes,
    ReadinessRequirementsPreviousAttributes
} from './types-60.js';
import type { MoneyValue, MoneyValueInput } from './types-44.js';
import type { PlatformFeeRequest, PlatformFeeRequestInput } from './types-56.js';
import type { SplitReversalRequest } from './types-68.js';
import type { GiftCardTransaction } from './types-30.js';
import type { InputValue } from '../runtime.js';
import type { CreateCategoryRequestInput } from './types-8.js';
import type { DisputesAcceptParams } from './types-26.js';
import type { UpdateCategoryRequestInput } from './types-75.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-43.js';
/** Cancels fulfillment work that has not completed. */
export type CancelFulfillmentRequestInput = AcceptFulfillmentRequestInput;
/** The request body for: Cancel a gift card notification. */
export type CancelGiftCardNotificationRequestInput = {};
/** Closes an open physical count without changing stock. */
export type CancelInventoryCountRequestInput = ApplyInventoryCountRequestInput;
/** Cancels requested quantity that hasn't departed. */
export type CancelInventoryTransferRequest = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_canceled_quantity (Required): integer.
     * Cumulative quantity that should be canceled before departure. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be canceled before departure. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_canceled_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** Cancels requested quantity that hasn't departed. */
export type CancelInventoryTransferRequestInput = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_canceled_quantity (Required): integer.
     * Cumulative quantity that should be canceled before departure. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be canceled before departure. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_canceled_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelMeSubscriptionRequest = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelMeSubscriptionRequestInput = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other";
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** Cancel a pending order edit. */
export type CancelOrderEditRequestInput = {
    /**
     * The order edit version to cancel. A mismatch returns VERSION_CONFLICT before changes.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** A response containing `CancelOrderEditResult` data. */
export type CancelOrderEditResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The canceled edit and
     * current order.
     */
    "data": CancelOrderEditResult;
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
/** The canceled edit and current order. */
export type CancelOrderEditResult = {
    /**
     * The order after releasing the edit's holds. A customer's purchase and its payment and
     * fulfillment progress.
     */
    "order": Order;
    /**
     * The edit after cancellation. Nested child of an order with frozen item changes, balance and
     * refund amounts. A pending edit changes the order only when its balance payment succeeds.
     * Refund completion is tracked on the refunds.
     */
    "order_edit": OrderEdit;
};
/** The request body for: Cancel order payment attempt. */
export type CancelOrderPaymentAttemptRequest = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
};
/** The request body for: Cancel order payment attempt. */
export type CancelOrderPaymentAttemptRequestInput = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
};
export type CancelOrderPaymentAttemptResponse = PayOrderResponse;
/** The request body for: Cancel payment intent. */
export type CancelPaymentIntentRequest = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Cancel payment intent. */
export type CancelPaymentIntentRequestInput = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Cancel a payout. */
export type CancelPayoutRequest = {};
/** The request body for: Cancel a payout. */
export type CancelPayoutRequestInput = {};
/** The request body for: Cancel return disposition. */
export type CancelReturnDispositionRequest = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "created_in_error", "changed_disposition",
     * "duplicate", "other".
     */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return disposition. */
export type CancelReturnDispositionRequestInput = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "created_in_error", "changed_disposition",
     * "duplicate", "other".
     */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type CancelReturnDispositionResponse = GetReturnDispositionResponse;
/** The request body for: Cancel return line item. */
export type CancelReturnLineItemRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * How many of the canceled units the buyer no longer has to send back, as a whole number;
     * fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower
     * it only as far as the canceled quantity requires. Format: int64.
     */
    "handback_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "expired",
     * "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return line item. */
export type CancelReturnLineItemRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * How many of the canceled units the buyer no longer has to send back, as a whole number;
     * fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower
     * it only as far as the canceled quantity requires. Format: int64.
     */
    "handback_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "expired",
     * "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type CancelReturnLineItemResponse = GetReturnResponse;
/** The request body for: Cancel return. */
export type CancelReturnRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "reason": "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return. */
export type CancelReturnRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return resolution. */
export type CancelReturnResolutionRequestInput = CancelReturnRequestInput;
export type CancelReturnResolutionResponse = GetReturnResolutionResponse;
export type CancelReturnResponse = GetReturnResponse;
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelSubscriptionRequest = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked to cancel: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/cancel. Recorded in
     * cancellation_details.requested_by and cancellation_reason. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration" | (string & {});
};
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelSubscriptionRequestInput = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other";
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked to cancel: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/cancel. Recorded in
     * cancellation_details.requested_by and cancellation_reason. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration";
};
/** Merchant capability readiness for a payment or money movement capability. */
export type CapabilityReadiness = {
    /**
     * Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to
     * the reason preserves the start. Flint may treat a brief unblock that it didn't publish as
     * part of the same blocked period. Omitted when the status is not blocked or the start is
     * unknown. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "blocked_since"?: string | null;
    /**
     * Flint-owned capability name. Payment capabilities describe transaction acceptance readiness;
     * money movement capabilities describe payout and balance movement readiness. Value enum:
     * "accept_card_payments", "save_payment_methods", "accept_affirm_payments",
     * "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts",
     * "manage_payout_destinations", "manage_payout_settings".
     */
    "capability": "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | (string & {});
    /**
     * Product domain this capability belongs to: payments for payment acceptance or money_movement
     * for balances and payouts. Value enum: "money_movement", "payments".
     */
    "domain": "money_movement" | "payments" | (string & {});
    /**
     * Actions that can remediate or refresh this capability when Flint can suggest one. []
     * (Value): {@link ReadinessAction}. A step that moves a merchant capability or readiness axis
     * forward, with the party that must do it (`owner`) and any required fields.
     */
    "next_actions": Array<ReadinessAction>;
    /**
     * Merchant requirements that affect this capability. Account information requirements for a
     * merchant, grouped as currently due, eventually due, past due, and pending verification.
     */
    "requirements": ReadinessRequirements;
    /**
     * Current readiness status for this capability. Value enum: "ready", "pending", "blocked",
     * "not_requested", "not_available".
     */
    "status": "ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {});
    /**
     * Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for
     * onboarding_not_started, requirements_due, requirements_past_due and pending_verification,
     * and platform_review for Flint's own review. `null` when no reason applies. Value enum:
     * "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other".
     */
    "status_reason"?: "provisioning"
        | "onboarding_not_started"
        | "requirements_due"
        | "requirements_past_due"
        | "pending_verification"
        | "account_rejected"
        | "disabled_by_platform_policy"
        | "billing_suspended"
        | "platform_review"
        | "processing_not_enabled"
        | "platform_funding_unavailable"
        | "tax_category_required"
        | "service_unavailable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_in_plan"
        | "payment_option_not_available"
        | "capability_not_active"
        | "other"
        | (string & {});
};
export type CapabilityReadinessPreviousAttributes = {
    /**
     * Start of the current continuous blocked period, as an RFC 3339 UTC timestamp. A change to
     * the reason preserves the start. Flint may treat a brief unblock that it didn't publish as
     * part of the same blocked period. Omitted when the status is not blocked or the start is
     * unknown. anyOf[1] (Value): string. Start of the current continuous blocked period, as an RFC
     * 3339 UTC timestamp. A change to the reason preserves the start. Flint may treat a brief
     * unblock that it didn't publish as part of the same blocked period. Omitted when the status
     * is not blocked or the start is unknown. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * anyOf[2] (Value): null.
     */
    "blocked_since"?: ((string) | (null));
    /**
     * Flint-owned capability name. Payment capabilities describe transaction acceptance readiness;
     * money movement capabilities describe payout and balance movement readiness. Value enum:
     * "accept_card_payments", "save_payment_methods", "accept_affirm_payments",
     * "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts",
     * "manage_payout_destinations", "manage_payout_settings". anyOf[1] (Value): string.
     * Flint-owned capability name. Payment capabilities describe transaction acceptance readiness;
     * money movement capabilities describe payout and balance movement readiness. Value enum:
     * "accept_card_payments", "save_payment_methods", "accept_affirm_payments",
     * "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts",
     * "manage_payout_destinations", "manage_payout_settings". anyOf[2] (Value): null.
     */
    "capability"?: (("accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | (string & {}))
        | (null));
    /**
     * Product domain this capability belongs to: payments for payment acceptance or money_movement
     * for balances and payouts. Value enum: "money_movement", "payments". anyOf[1] (Value):
     * string. Product domain this capability belongs to: payments for payment acceptance or
     * money_movement for balances and payouts. Value enum: "money_movement", "payments". anyOf[2]
     * (Value): null.
     */
    "domain"?: (("money_movement" | "payments" | (string & {})) | (null));
    /**
     * Actions that can remediate or refresh this capability when Flint can suggest one. anyOf[1]
     * (Value): Array of {@link ReadinessActionPreviousAttributes}. Actions that can remediate or
     * refresh this capability when Flint can suggest one. anyOf[1][] (Value): {@link
     * ReadinessActionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "next_actions"?: ((Array<ReadinessActionPreviousAttributes>) | (null));
    /**
     * Merchant requirements that affect this capability. anyOf[1] (Value): {@link
     * ReadinessRequirementsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "requirements"?: ((ReadinessRequirementsPreviousAttributes) | (null));
    /**
     * Current readiness status for this capability. Value enum: "ready", "pending", "blocked",
     * "not_requested", "not_available". anyOf[1] (Value): string. Current readiness status for
     * this capability. Value enum: "ready", "pending", "blocked", "not_requested",
     * "not_available". anyOf[2] (Value): null.
     */
    "status"?: (("ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {})) | (null));
    /**
     * Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for
     * onboarding_not_started, requirements_due, requirements_past_due and pending_verification,
     * and platform_review for Flint's own review. `null` when no reason applies. Value enum:
     * "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other". anyOf[1] (Value): string. Why readiness has its current status. MERCHANT_NOT_READY
     * uses onboarding_required for onboarding_not_started, requirements_due, requirements_past_due
     * and pending_verification, and platform_review for Flint's own review. `null` when no reason
     * applies. Value enum: "provisioning", "onboarding_not_started", "requirements_due",
     * "requirements_past_due", "pending_verification", "account_rejected",
     * "disabled_by_platform_policy", "billing_suspended", "platform_review",
     * "processing_not_enabled", "platform_funding_unavailable", "tax_category_required",
     * "service_unavailable", "payment_option_access_not_provisioned",
     * "payment_option_activation_pending", "payment_option_not_in_plan",
     * "payment_option_not_available", "capability_not_active", "other". anyOf[2] (Value): null.
     */
    "status_reason"?: (("provisioning"
        | "onboarding_not_started"
        | "requirements_due"
        | "requirements_past_due"
        | "pending_verification"
        | "account_rejected"
        | "disabled_by_platform_policy"
        | "billing_suspended"
        | "platform_review"
        | "processing_not_enabled"
        | "platform_funding_unavailable"
        | "tax_category_required"
        | "service_unavailable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_in_plan"
        | "payment_option_not_available"
        | "capability_not_active"
        | "other"
        | (string & {}))
        | (null));
};
/** The request body for: Capture payment intent. */
export type CapturePaymentIntentRequest = {
    /**
     * Amount to capture, in the authorization's currency. Omit it to capture all of
     * capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same
     * request, and the payment intent can't be captured again. Must be greater than zero and at
     * most capturable_money. Affirm payments can only be captured in full. Can't be combined with
     * final_amount_money or tip_money. amount (Required): integer string. Positive amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. currency (Required): string. Three-letter
     * uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "amount_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The bill without the tip. The capture collects final_amount_money plus tip_money in one
     * charge. With only tip_money, the bill is the authorization minus the tip it carries; when
     * the authorization is all tip, final_amount_money is required. Must be greater than zero, in
     * the payment's currency. On an order's payment, it is at most the authorization minus the tip
     * it carries, so the order's items, charges and tax can't grow; above it LIMIT_EXCEEDED with
     * maximum_money on final_amount_money. The order releases the difference. Not accepted on
     * Affirm or ACH debit payments. amount (Required): integer string. Positive amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. currency (Required): string. Three-letter
     * uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "final_amount_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * A platform fee your partner app charges on this payment, set when you know the final bill
     * and tip. Only the partner app install token that created the payment can send it; from any
     * other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. It replaces the fee
     * the payment was created with, or adds one if it had none, after the same consent, capability
     * and currency checks as at create: amount_money.amount must be at least 1 minor unit,
     * otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money.amount. Its
     * currency must match the payment's currency, otherwise INVALID_REQUEST with INVALID_VALUE on
     * platform_fee.amount_money. Omit platform_fee to keep the existing fee. Without an approved
     * cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required; in
     * live mode the partner app's platform_fees capability must be active. A fee that already
     * ended is ACTION_NOT_ALLOWED with reason terminal_status. The cap and Flint's own fees apply
     * to the captured total, so Flint lowers the fee rather than refusing the capture. A payment
     * that belongs to an order can't take it at capture: INVALID_REQUEST with NOT_ALLOWED on
     * platform_fee. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). A platform fee the partner app charges on the payment,
     * beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Final split amounts for this capture. List every split that isn't canceled, once each, with
     * an amount above zero in the payment's currency. Omit splits to keep the stored amounts. The
     * total must fit after Flint's fees and one minor unit for the collecting merchant; otherwise
     * INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. An amount_money too small
     * for the stored splits is LIMIT_EXCEEDED with minimum_money. A payment created without splits
     * can't gain them. Part of the idempotency fingerprint. minItems: 1. maxItems: 25. [] (Value):
     * {@link SplitReversalRequest}. The final amount of an existing split at capture.
     */
    "splits"?: Array<SplitReversalRequest>;
    /**
     * The tip, replacing the tip the authorization carries. Zero captures without a tip. With only
     * final_amount_money, the tip is the one the authorization carries, or zero. At most the
     * larger of 1,000.00 USD and final_amount_money; on an order's payment, the larger of 1,000.00
     * USD and the payment's share of the order's subtotal after discounts. Above it
     * INVALID_REQUEST with INVALID_VALUE on tip_money and maximum_money. On an order's payment,
     * keeping or lowering the tip the authorization carries is never refused, and the tip becomes
     * this payment's part of the order's tip. A payment that doesn't carry part of the order's
     * requested tip can't add a tip above zero beside it: INVALID_REQUEST with NOT_ALLOWED on
     * tip_money. On an order, the bill can't grow, so without overcapture a tip fits only within
     * what the bill leaves of the hold. The total is at most overcapture.maximum_capturable_money
     * when overcapture is available, else capturable_money; above it LIMIT_EXCEEDED with
     * maximum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tip_money"?: MoneyValue;
};
/** The request body for: Capture payment intent. */
export type CapturePaymentIntentRequestInput = {
    /**
     * Amount to capture, in the authorization's currency. Omit it to capture all of
     * capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same
     * request, and the payment intent can't be captured again. Must be greater than zero and at
     * most capturable_money. Affirm payments can only be captured in full. Can't be combined with
     * final_amount_money or tip_money. amount (Required): integer string. Positive amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. currency (Required): string. Three-letter
     * uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "amount_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The bill without the tip. The capture collects final_amount_money plus tip_money in one
     * charge. With only tip_money, the bill is the authorization minus the tip it carries; when
     * the authorization is all tip, final_amount_money is required. Must be greater than zero, in
     * the payment's currency. On an order's payment, it is at most the authorization minus the tip
     * it carries, so the order's items, charges and tax can't grow; above it LIMIT_EXCEEDED with
     * maximum_money on final_amount_money. The order releases the difference. Not accepted on
     * Affirm or ACH debit payments. amount (Required): integer string. Positive amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. currency (Required): string. Three-letter
     * uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "final_amount_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * A platform fee your partner app charges on this payment, set when you know the final bill
     * and tip. Only the partner app install token that created the payment can send it; from any
     * other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. It replaces the fee
     * the payment was created with, or adds one if it had none, after the same consent, capability
     * and currency checks as at create: amount_money.amount must be at least 1 minor unit,
     * otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money.amount. Its
     * currency must match the payment's currency, otherwise INVALID_REQUEST with INVALID_VALUE on
     * platform_fee.amount_money. Omit platform_fee to keep the existing fee. Without an approved
     * cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required; in
     * live mode the partner app's platform_fees capability must be active. A fee that already
     * ended is ACTION_NOT_ALLOWED with reason terminal_status. The cap and Flint's own fees apply
     * to the captured total, so Flint lowers the fee rather than refusing the capture. A payment
     * that belongs to an order can't take it at capture: INVALID_REQUEST with NOT_ALLOWED on
     * platform_fee. Part of the request fingerprint. See [Platform
     * fees](/docs/guides/platform-fees). A platform fee the partner app charges on the payment,
     * beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * Final split amounts for this capture. List every split that isn't canceled, once each, with
     * an amount above zero in the payment's currency. Omit splits to keep the stored amounts. The
     * total must fit after Flint's fees and one minor unit for the collecting merchant; otherwise
     * INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. An amount_money too small
     * for the stored splits is LIMIT_EXCEEDED with minimum_money. A payment created without splits
     * can't gain them. Part of the idempotency fingerprint. minItems: 1. maxItems: 25. [] (Value):
     * {@link CapturePaymentSplitRequestInput}. The final amount of an existing split at capture.
     */
    "splits"?: Array<CapturePaymentSplitRequestInput>;
    /**
     * The tip, replacing the tip the authorization carries. Zero captures without a tip. With only
     * final_amount_money, the tip is the one the authorization carries, or zero. At most the
     * larger of 1,000.00 USD and final_amount_money; on an order's payment, the larger of 1,000.00
     * USD and the payment's share of the order's subtotal after discounts. Above it
     * INVALID_REQUEST with INVALID_VALUE on tip_money and maximum_money. On an order's payment,
     * keeping or lowering the tip the authorization carries is never refused, and the tip becomes
     * this payment's part of the order's tip. A payment that doesn't carry part of the order's
     * requested tip can't add a tip above zero beside it: INVALID_REQUEST with NOT_ALLOWED on
     * tip_money. On an order, the bill can't grow, so without overcapture a tip fits only within
     * what the bill leaves of the hold. The total is at most overcapture.maximum_capturable_money
     * when overcapture is available, else capturable_money; above it LIMIT_EXCEEDED with
     * maximum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "tip_money"?: MoneyValueInput;
};
/** The final amount of an existing split at capture. */
export type CapturePaymentSplitRequestInput = {
    /**
     * Final split amount above zero, in the payment's currency. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. amount (Required): integer string. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. currency (Required):
     * string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Existing split of this payment. Include every split that isn't canceled, once each.
     * minLength: 1. pattern: ^psplit_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8".
     */
    "payment_split_id": string;
};
/**
 * Card details on a payment method: brand, expiration month and year, last four digits, and the
 * wallet when one was used.
 */
export type CardDetails = {
    /**
     * The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb",
     * "unionpay".
     */
    "brand": "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    /** Month the card expires, from 1 to 12. Format: int32. */
    "exp_month": number;
    /** Four-digit year the card expires. Format: int32. */
    "exp_year": number;
    /** Last four digits of the card number. */
    "last4": string;
    /**
     * The wallet the card came from. Absent for a card entered directly. Value enum: "apple_pay",
     * "google_pay".
     */
    "wallet"?: "apple_pay" | "google_pay" | (string & {});
};
export type CardDetailsPreviousAttributes = {
    /**
     * The card network. Value enum: "visa", "mastercard", "amex", "discover", "diners", "jcb",
     * "unionpay". anyOf[1] (Value): string. The card network. Value enum: "visa", "mastercard",
     * "amex", "discover", "diners", "jcb", "unionpay". anyOf[2] (Value): null.
     */
    "brand"?: (("visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {}))
        | (null));
    /**
     * Month the card expires, from 1 to 12. anyOf[1] (Value): integer. Month the card expires,
     * from 1 to 12. Format: int32. anyOf[2] (Value): null.
     */
    "exp_month"?: ((number) | (null));
    /**
     * Four-digit year the card expires. anyOf[1] (Value): integer. Four-digit year the card
     * expires. Format: int32. anyOf[2] (Value): null.
     */
    "exp_year"?: ((number) | (null));
    /**
     * Last four digits of the card number. anyOf[1] (Value): string. Last four digits of the card
     * number. anyOf[2] (Value): null.
     */
    "last4"?: ((string) | (null));
    /**
     * The wallet the card came from. Absent for a card entered directly. Value enum: "apple_pay",
     * "google_pay". anyOf[1] (Value): string. The wallet the card came from. Absent for a card
     * entered directly. Value enum: "apple_pay", "google_pay". anyOf[2] (Value): null.
     */
    "wallet"?: (("apple_pay" | "google_pay" | (string & {})) | (null));
};
/** The request body for: Record a cash-out. */
export type CashOutGiftCardRequest = {
    /**
     * Amount of cash you paid the buyer outside Flint, taken off the gift card's balance. Above
     * zero, in the card's currency, and not more than the card's unreserved value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Your reference for the cash you paid the buyer outside Flint, such as a receipt number.
     * Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: 1.
     * maxLength: 255.
     */
    "cash_out_reference": string;
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Record a cash-out. */
export type CashOutGiftCardRequestInput = {
    /**
     * Amount of cash you paid the buyer outside Flint, taken off the gift card's balance. Above
     * zero, in the card's currency, and not more than the card's unreserved value. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Your reference for the cash you paid the buyer outside Flint, such as a receipt number.
     * Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: 1.
     * maxLength: 255.
     */
    "cash_out_reference": string;
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/**
 * The result of recording a gift card cash-out: the updated gift card and the transactions it
 * created.
 */
export type CashOutGiftCardResult = {
    /**
     * The gift card after the cash-out. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * The transactions the cash-out posted to the card. [] (Value): {@link GiftCardTransaction}.
     * Immutable posted financial movement with signed amount, per-card sequence, merchant sequence
     * and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `CashOutGiftCardResult` data. */
export type CashOutGiftCardResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of recording
     * a gift card cash-out: the updated gift card and the transactions it created.
     */
    "data": CashOutGiftCardResult;
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
/** The source of a catalog variant line's selected net unit price. */
export type CatalogPricing = {
    /** Minimum quantity of the applied break. Null when the base price applies. Format: int64. */
    "minimum_quantity": number | null;
    /**
     * Price list providing the selected schedule. Null when the variant's default schedule
     * applies. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id": string | null;
    /**
     * Source of the selected schedule. New source values may be added. Value enum: "variant",
     * "price_list".
     */
    "source": "variant" | "price_list" | (string & {});
};
export type CatalogPricingPreviousAttributes = {
    /**
     * Minimum quantity of the applied break. Null when the base price applies. anyOf[1] (Value):
     * integer. Minimum quantity of the applied break. Null when the base price applies. Format:
     * int64. anyOf[2] (Value): null.
     */
    "minimum_quantity"?: ((number) | (null));
    /**
     * Price list providing the selected schedule. Null when the variant's default schedule
     * applies. anyOf[1] (Value): string. Price list providing the selected schedule. Null when the
     * variant's default schedule applies. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". anyOf[2]
     * (Value): null.
     */
    "price_list_id"?: ((string) | (null));
    /**
     * Source of the selected schedule. New source values may be added. Value enum: "variant",
     * "price_list". anyOf[1] (Value): string. Source of the selected schedule. New source values
     * may be added. Value enum: "variant", "price_list". anyOf[2] (Value): null.
     */
    "source"?: (("variant" | "price_list" | (string & {})) | (null));
};
export type CategoriesCreateParams = (InputValue<CreateCategoryRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CategoriesDeleteParams = {
    /**
     * Optional resource version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CategoriesGetParams = DisputesAcceptParams;
export type CategoriesListParams = {
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
     * Exact handle match. Handles are lowercase, so matching is case-sensitive with no
     * normalization; a value that isn't a valid handle returns 400 INVALID_REQUEST. maxLength:
     * 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "handle"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across category ID, external reference ID, handle, name, and description. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as ctg_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to handle; ties are broken by category_id. Default: "handle".
     * Value enum: "handle", "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"handle" | "created_at" | "updated_at">;
    /** Sort direction. Defaults to asc. Default: "asc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CategoriesUpdateParams = (InputValue<UpdateCategoryRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/** A catalog grouping used to organize items. */
export type Category = {
    /** Number of bundles currently assigned to the category. Format: int64. */
    "assigned_bundle_count": number;
    /** Number of products currently assigned to the category. Format: int64. */
    "assigned_product_count": number;
    /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
    "category_id": string;
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** Description of the category. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Immutable handle used to assign this category to products and bundles. */
    "handle": string;
    /**
     * Identifier of the merchant that owns this resource. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Category name shown to buyers. */
    "name": string;
    /**
     * Category lifecycle status. Active categories can be assigned; deleted is returned only by
     * DELETE. Value enum: "active", "deleted".
     */
    "status": "active" | "deleted" | (string & {});
    /**
     * Number of promotions, return reasons and return policy versions that reference this
     * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
     * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
     */
    "targeting_reference_count": number;
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /**
     * Persisted owned-state version. Clock-based availability and expanded resources do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type CategoryCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "category.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "category.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "category.created";
});
/**
 * The `category.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CategoryCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "category.created". */
    "event_type"?: "category.created";
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
 * The `category.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CategoryCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "category.created". */
    "event_type"?: "category.created";
});
export type CategoryDeletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "category.deleted";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "category.deleted";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "category.deleted";
});
/**
 * The `category.deleted` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CategoryDeletedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "category.deleted". */
    "event_type"?: "category.deleted";
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
 * The `category.deleted` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CategoryDeletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "category.deleted". */
    "event_type"?: "category.deleted";
});
/** A page of `Category` objects. */
export type CategoryListResponse = {
    /**
     * The requested category data. [] (Value): {@link Category}. A catalog grouping used to
     * organize items.
     */
    "data": Array<Category>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A reference to a product category by ID, handle, and name. */
export type CategoryReference = {
    /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
    "category_id": string;
    /**
     * Immutable handle of the referenced category. Read the category resource for its current
     * name.
     */
    "handle": string;
};
export type CategoryReferencePreviousAttributes = {
    /**
     * Stable identifier of the category. anyOf[1] (Value): string. Stable identifier of the
     * category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". anyOf[2] (Value): null.
     */
    "category_id"?: ((string) | (null));
    /**
     * Immutable handle of the referenced category. Read the category resource for its current
     * name. anyOf[1] (Value): string. Immutable handle of the referenced category. Read the
     * category resource for its current name. anyOf[2] (Value): null.
     */
    "handle"?: ((string) | (null));
};
/** A response containing `Category` data. */
export type CategoryResponse = {
    /** The requested category data. A catalog grouping used to organize items. */
    "data": Category;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CategoryUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "assigned_bundle_count"?: ((number) | (null));
            "assigned_product_count"?: ((number) | (null));
            "category_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "description"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "handle"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "deleted" | (string & {})) | (null));
            "targeting_reference_count"?: ((number) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "category.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "assigned_bundle_count": number;
            "assigned_product_count": number;
            "category_id": string;
            "created_at": string;
            "description"?: string;
            "external_reference_id"?: string;
            "handle": string;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "name": string;
            "status": "active" | "deleted" | (string & {});
            "targeting_reference_count": number;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "assigned_bundle_count"?: ((number) | (null));
            "assigned_product_count"?: ((number) | (null));
            "category_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "description"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "handle"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "status"?: (("active" | "deleted" | (string & {})) | (null));
            "targeting_reference_count"?: ((number) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "category.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "category.updated";
});
/**
 * The `category.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type CategoryUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.assigned_bundle_count (Optional): integer or null. Number of bundles
     * currently assigned to the category. previous_attributes.assigned_bundle_count.anyOf[1]
     * (Value): integer. Number of bundles currently assigned to the category. Format: int64.
     * previous_attributes.assigned_bundle_count.anyOf[2] (Value): null.
     * previous_attributes.assigned_product_count (Optional): integer or null. Number of products
     * currently assigned to the category. previous_attributes.assigned_product_count.anyOf[1]
     * (Value): integer. Number of products currently assigned to the category. Format: int64.
     * previous_attributes.assigned_product_count.anyOf[2] (Value): null.
     * previous_attributes.category_id (Optional): string or null. Stable identifier of the
     * category. previous_attributes.category_id.anyOf[1] (Value): string. Stable identifier of the
     * category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q".
     * previous_attributes.category_id.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. When this resource was created, as an RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. When this resource was created, as
     * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.description
     * (Optional): string or null. Description of the category.
     * previous_attributes.description.anyOf[1] (Value): string. Description of the category.
     * previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.handle
     * (Optional): string or null. Immutable handle used to assign this category to products and
     * bundles. previous_attributes.handle.anyOf[1] (Value): string. Immutable handle used to
     * assign this category to products and bundles. previous_attributes.handle.anyOf[2] (Value):
     * null. previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant
     * that owns this resource. previous_attributes.merchant_id.anyOf[1] (Value): string.
     * Identifier of the merchant that owns this resource. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata
     * stored on this resource. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Category name shown to buyers. previous_attributes.name.anyOf[1] (Value):
     * string. Category name shown to buyers. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Category lifecycle status. Active
     * categories can be assigned; deleted is returned only by DELETE. Value enum: "active",
     * "deleted". previous_attributes.status.anyOf[1] (Value): string. Category lifecycle status.
     * Active categories can be assigned; deleted is returned only by DELETE. Value enum: "active",
     * "deleted". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.targeting_reference_count (Optional): integer or null. Number of
     * promotions, return reasons and return policy versions that reference this category. Deleting
     * the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
     * `assigned_bundle_count` is above zero.
     * previous_attributes.targeting_reference_count.anyOf[1] (Value): integer. Number of
     * promotions, return reasons and return policy versions that reference this category. Deleting
     * the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
     * `assigned_bundle_count` is above zero. Format: int64.
     * previous_attributes.targeting_reference_count.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When this resource last changed,
     * as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When this
     * resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Persisted owned-state version.
     * Clock-based availability and expanded resources do not advance this counter.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted owned-state version.
     * Clock-based availability and expanded resources do not advance this counter. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. assigned_bundle_count (Optional): integer or
         * null. Number of bundles currently assigned to the category.
         * assigned_bundle_count.anyOf[1] (Value): integer. Number of bundles currently assigned to
         * the category. Format: int64. assigned_bundle_count.anyOf[2] (Value): null.
         * assigned_product_count (Optional): integer or null. Number of products currently
         * assigned to the category. assigned_product_count.anyOf[1] (Value): integer. Number of
         * products currently assigned to the category. Format: int64.
         * assigned_product_count.anyOf[2] (Value): null. category_id (Optional): string or null.
         * Stable identifier of the category. category_id.anyOf[1] (Value): string. Stable
         * identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q".
         * category_id.anyOf[2] (Value): null. created_at (Optional): string or null. When this
         * resource was created, as an RFC3339 timestamp. created_at.anyOf[1] (Value): string. When
         * this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. description (Optional):
         * string or null. Description of the category. description.anyOf[1] (Value): string.
         * Description of the category. description.anyOf[2] (Value): null. external_reference_id
         * (Optional): string or null. Caller-owned identifier for this resource in an external
         * system. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. handle (Optional): string or null.
         * Immutable handle used to assign this category to products and bundles. handle.anyOf[1]
         * (Value): string. Immutable handle used to assign this category to products and bundles.
         * handle.anyOf[2] (Value): null. merchant_id (Optional): string or null. Identifier of the
         * merchant that owns this resource. merchant_id.anyOf[1] (Value): string. Identifier of
         * the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or null.
         * Caller-owned metadata stored on this resource. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string or null. Category
         * name shown to buyers. name.anyOf[1] (Value): string. Category name shown to buyers.
         * name.anyOf[2] (Value): null. status (Optional): string or null. Category lifecycle
         * status. Active categories can be assigned; deleted is returned only by DELETE. Value
         * enum: "active", "deleted". status.anyOf[1] (Value): string. Category lifecycle status.
         * Active categories can be assigned; deleted is returned only by DELETE. Value enum:
         * "active", "deleted". status.anyOf[2] (Value): null. targeting_reference_count
         * (Optional): integer or null. Number of promotions, return reasons and return policy
         * versions that reference this category. Deleting the category is refused with `409
         * RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is
         * above zero. targeting_reference_count.anyOf[1] (Value): integer. Number of promotions,
         * return reasons and return policy versions that reference this category. Deleting the
         * category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. targeting_reference_count.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. When this resource last changed,
         * as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Persisted
         * owned-state version. Clock-based availability and expanded resources do not advance this
         * counter. version.anyOf[1] (Value): integer. Persisted owned-state version. Clock-based
         * availability and expanded resources do not advance this counter. Format: uint64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Number of bundles currently assigned to the category. anyOf[1] (Value): integer.
             * Number of bundles currently assigned to the category. Format: int64. anyOf[2]
             * (Value): null.
             */
            "assigned_bundle_count"?: ((number) | (null));
            /**
             * Number of products currently assigned to the category. anyOf[1] (Value): integer.
             * Number of products currently assigned to the category. Format: int64. anyOf[2]
             * (Value): null.
             */
            "assigned_product_count"?: ((number) | (null));
            /**
             * Stable identifier of the category. anyOf[1] (Value): string. Stable identifier of
             * the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". anyOf[2] (Value): null.
             */
            "category_id"?: ((string) | (null));
            /**
             * When this resource was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Description of the category. anyOf[1] (Value): string. Description of the category.
             * anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Immutable handle used to assign this category to products and bundles. anyOf[1]
             * (Value): string. Immutable handle used to assign this category to products and
             * bundles. anyOf[2] (Value): null.
             */
            "handle"?: ((string) | (null));
            /**
             * Identifier of the merchant that owns this resource. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata stored on this resource. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Category name shown to buyers. anyOf[1] (Value): string. Category name shown to
             * buyers. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted". anyOf[1] (Value): string. Category
             * lifecycle status. Active categories can be assigned; deleted is returned only by
             * DELETE. Value enum: "active", "deleted". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "deleted" | (string & {})) | (null));
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. anyOf[1] (Value):
             * integer. Number of promotions, return reasons and return policy versions that
             * reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE`
             * while this or `assigned_product_count` or `assigned_bundle_count` is above zero.
             * Format: int64. anyOf[2] (Value): null.
             */
            "targeting_reference_count"?: ((number) | (null));
            /**
             * When this resource last changed, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. anyOf[1] (Value): integer. Persisted owned-state version.
             * Clock-based availability and expanded resources do not advance this counter. Format:
             * uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "category.updated". */
    "event_type"?: "category.updated";
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
 * The `category.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CategoryUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.assigned_bundle_count (Required): integer. Number of bundles
     * currently assigned to the category. Format: int64. object.assigned_product_count (Required):
     * integer. Number of products currently assigned to the category. Format: int64.
     * object.category_id (Required): string. Stable identifier of the category. Example:
     * "ctg_01KEZF7C001T4WWBPVGWRZD88Q". object.created_at (Required): string. When this resource
     * was created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.description (Optional): string. Description of the category.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.handle (Required):
     * string. Immutable handle used to assign this category to products and bundles.
     * object.merchant_id (Required): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. Category name shown to buyers.
     * object.status (Required): string. Category lifecycle status. Active categories can be
     * assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * object.targeting_reference_count (Required): integer. Number of promotions, return reasons
     * and return policy versions that reference this category. Deleting the category is refused
     * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count`
     * is above zero. Format: int64. object.updated_at (Required): string. When this resource last
     * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Persisted owned-state version. Clock-based availability
     * and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.assigned_bundle_count (Optional): integer or null. Number of bundles
     * currently assigned to the category. previous_attributes.assigned_bundle_count.anyOf[1]
     * (Value): integer. Number of bundles currently assigned to the category. Format: int64.
     * previous_attributes.assigned_bundle_count.anyOf[2] (Value): null.
     * previous_attributes.assigned_product_count (Optional): integer or null. Number of products
     * currently assigned to the category. previous_attributes.assigned_product_count.anyOf[1]
     * (Value): integer. Number of products currently assigned to the category. Format: int64.
     * previous_attributes.assigned_product_count.anyOf[2] (Value): null.
     * previous_attributes.category_id (Optional): string or null. Stable identifier of the
     * category. previous_attributes.category_id.anyOf[1] (Value): string. Stable identifier of the
     * category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q".
     * previous_attributes.category_id.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. When this resource was created, as an RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. When this resource was created, as
     * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.description
     * (Optional): string or null. Description of the category.
     * previous_attributes.description.anyOf[1] (Value): string. Description of the category.
     * previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.handle
     * (Optional): string or null. Immutable handle used to assign this category to products and
     * bundles. previous_attributes.handle.anyOf[1] (Value): string. Immutable handle used to
     * assign this category to products and bundles. previous_attributes.handle.anyOf[2] (Value):
     * null. previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant
     * that owns this resource. previous_attributes.merchant_id.anyOf[1] (Value): string.
     * Identifier of the merchant that owns this resource. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata
     * stored on this resource. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Category name shown to buyers. previous_attributes.name.anyOf[1] (Value):
     * string. Category name shown to buyers. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. Category lifecycle status. Active
     * categories can be assigned; deleted is returned only by DELETE. Value enum: "active",
     * "deleted". previous_attributes.status.anyOf[1] (Value): string. Category lifecycle status.
     * Active categories can be assigned; deleted is returned only by DELETE. Value enum: "active",
     * "deleted". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.targeting_reference_count (Optional): integer or null. Number of
     * promotions, return reasons and return policy versions that reference this category. Deleting
     * the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
     * `assigned_bundle_count` is above zero.
     * previous_attributes.targeting_reference_count.anyOf[1] (Value): integer. Number of
     * promotions, return reasons and return policy versions that reference this category. Deleting
     * the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
     * `assigned_bundle_count` is above zero. Format: int64.
     * previous_attributes.targeting_reference_count.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When this resource last changed,
     * as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string. When this
     * resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.version (Optional): integer or null. Persisted owned-state version.
     * Clock-based availability and expanded resources do not advance this counter.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted owned-state version.
     * Clock-based availability and expanded resources do not advance this counter. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * assigned_bundle_count (Required): integer. Number of bundles currently assigned to the
         * category. Format: int64. assigned_product_count (Required): integer. Number of products
         * currently assigned to the category. Format: int64. category_id (Required): string.
         * Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". created_at
         * (Required): string. When this resource was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Description
         * of the category. external_reference_id (Optional): string. Caller-owned identifier for
         * this resource in an external system. maxLength: 255. Example: "warehouse-1842". handle
         * (Required): string. Immutable handle used to assign this category to products and
         * bundles. merchant_id (Required): string. Identifier of the merchant that owns this
         * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
         * stored on a resource. Keys starting with flint_ are reserved for Flint and are not
         * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
         * before those limits may not satisfy them. name (Required): string. Category name shown
         * to buyers. status (Required): string. Category lifecycle status. Active categories can
         * be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
         * targeting_reference_count (Required): integer. Number of promotions, return reasons and
         * return policy versions that reference this category. Deleting the category is refused
         * with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. updated_at (Required): string.
         * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Number of bundles currently assigned to the category. Format: int64. */
            "assigned_bundle_count": number;
            /** Number of products currently assigned to the category. Format: int64. */
            "assigned_product_count": number;
            /** Stable identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". */
            "category_id": string;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /** Description of the category. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Immutable handle used to assign this category to products and bundles. */
            "handle": string;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Category name shown to buyers. */
            "name": string;
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted".
             */
            "status": "active" | "deleted" | (string & {});
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
             */
            "targeting_reference_count": number;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. assigned_bundle_count (Optional): integer or
         * null. Number of bundles currently assigned to the category.
         * assigned_bundle_count.anyOf[1] (Value): integer. Number of bundles currently assigned to
         * the category. Format: int64. assigned_bundle_count.anyOf[2] (Value): null.
         * assigned_product_count (Optional): integer or null. Number of products currently
         * assigned to the category. assigned_product_count.anyOf[1] (Value): integer. Number of
         * products currently assigned to the category. Format: int64.
         * assigned_product_count.anyOf[2] (Value): null. category_id (Optional): string or null.
         * Stable identifier of the category. category_id.anyOf[1] (Value): string. Stable
         * identifier of the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q".
         * category_id.anyOf[2] (Value): null. created_at (Optional): string or null. When this
         * resource was created, as an RFC3339 timestamp. created_at.anyOf[1] (Value): string. When
         * this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. description (Optional):
         * string or null. Description of the category. description.anyOf[1] (Value): string.
         * Description of the category. description.anyOf[2] (Value): null. external_reference_id
         * (Optional): string or null. Caller-owned identifier for this resource in an external
         * system. external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. handle (Optional): string or null.
         * Immutable handle used to assign this category to products and bundles. handle.anyOf[1]
         * (Value): string. Immutable handle used to assign this category to products and bundles.
         * handle.anyOf[2] (Value): null. merchant_id (Optional): string or null. Identifier of the
         * merchant that owns this resource. merchant_id.anyOf[1] (Value): string. Identifier of
         * the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * merchant_id.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or null.
         * Caller-owned metadata stored on this resource. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string or null. Category
         * name shown to buyers. name.anyOf[1] (Value): string. Category name shown to buyers.
         * name.anyOf[2] (Value): null. status (Optional): string or null. Category lifecycle
         * status. Active categories can be assigned; deleted is returned only by DELETE. Value
         * enum: "active", "deleted". status.anyOf[1] (Value): string. Category lifecycle status.
         * Active categories can be assigned; deleted is returned only by DELETE. Value enum:
         * "active", "deleted". status.anyOf[2] (Value): null. targeting_reference_count
         * (Optional): integer or null. Number of promotions, return reasons and return policy
         * versions that reference this category. Deleting the category is refused with `409
         * RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is
         * above zero. targeting_reference_count.anyOf[1] (Value): integer. Number of promotions,
         * return reasons and return policy versions that reference this category. Deleting the
         * category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or
         * `assigned_bundle_count` is above zero. Format: int64. targeting_reference_count.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. When this resource last changed,
         * as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Persisted
         * owned-state version. Clock-based availability and expanded resources do not advance this
         * counter. version.anyOf[1] (Value): integer. Persisted owned-state version. Clock-based
         * availability and expanded resources do not advance this counter. Format: uint64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Number of bundles currently assigned to the category. anyOf[1] (Value): integer.
             * Number of bundles currently assigned to the category. Format: int64. anyOf[2]
             * (Value): null.
             */
            "assigned_bundle_count"?: ((number) | (null));
            /**
             * Number of products currently assigned to the category. anyOf[1] (Value): integer.
             * Number of products currently assigned to the category. Format: int64. anyOf[2]
             * (Value): null.
             */
            "assigned_product_count"?: ((number) | (null));
            /**
             * Stable identifier of the category. anyOf[1] (Value): string. Stable identifier of
             * the category. Example: "ctg_01KEZF7C001T4WWBPVGWRZD88Q". anyOf[2] (Value): null.
             */
            "category_id"?: ((string) | (null));
            /**
             * When this resource was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Description of the category. anyOf[1] (Value): string. Description of the category.
             * anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Immutable handle used to assign this category to products and bundles. anyOf[1]
             * (Value): string. Immutable handle used to assign this category to products and
             * bundles. anyOf[2] (Value): null.
             */
            "handle"?: ((string) | (null));
            /**
             * Identifier of the merchant that owns this resource. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata stored on this resource. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Category name shown to buyers. anyOf[1] (Value): string. Category name shown to
             * buyers. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Category lifecycle status. Active categories can be assigned; deleted is returned
             * only by DELETE. Value enum: "active", "deleted". anyOf[1] (Value): string. Category
             * lifecycle status. Active categories can be assigned; deleted is returned only by
             * DELETE. Value enum: "active", "deleted". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "deleted" | (string & {})) | (null));
            /**
             * Number of promotions, return reasons and return policy versions that reference this
             * category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or
             * `assigned_product_count` or `assigned_bundle_count` is above zero. anyOf[1] (Value):
             * integer. Number of promotions, return reasons and return policy versions that
             * reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE`
             * while this or `assigned_product_count` or `assigned_bundle_count` is above zero.
             * Format: int64. anyOf[2] (Value): null.
             */
            "targeting_reference_count"?: ((number) | (null));
            /**
             * When this resource last changed, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. anyOf[1] (Value): integer. Persisted owned-state version.
             * Clock-based availability and expanded resources do not advance this counter. Format:
             * uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "category.updated". */
    "event_type"?: "category.updated";
});
/** The request body for: Change subscription plan. */
export type ChangeMeSubscriptionPlanRequest = ({
    /**
     * Send with billing_interval_count to choose a target plan option. Omit both to keep the
     * current interval if the target offers that pair, otherwise use the target plan's default
     * interval and count. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Required when billing_interval is sent; billing_interval is required when this field is
     * sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The target subscription plan. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
});
/** The request body for: Change subscription plan. */
export type ChangeMeSubscriptionPlanRequestInput = ({
    /**
     * Send with billing_interval_count to choose a target plan option. Omit both to keep the
     * current interval if the target offers that pair, otherwise use the target plan's default
     * interval and count. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * Required when billing_interval is sent; billing_interval is required when this field is
     * sent. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The target subscription plan. minLength: 1. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
});
