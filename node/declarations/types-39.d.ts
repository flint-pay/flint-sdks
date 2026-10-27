import type { ReturnPolicyRevisionRequestInput } from './types-41.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from './types-16.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { PaymentRefund } from './types-36.js';
import type { CategoryReference } from './types-3.js';
import type { SelectedProductOption } from './types-44.js';
import type { ResponseMeta, ReportSucceeded } from './types-40.js';
import type { OrderGiftCardAllocation } from './types-32.js';
import type { InputValue } from '../runtime.js';
import type { CreateRefundRequestInput } from './types-8.js';
import type { UpdateRefundRequestInput } from './types-49.js';
import type { ConfigurationVersionRequestInput } from './types-5.js';
import type { PublicDownload } from './types-38.js';
/**
 * Shape $ (Value): {@link PublishReturnPolicyRevisionRequestInput}. The request body for: Publish
 * return policy revision.
 */
export type PublishReturnPolicyRevisionRequestInput = {
    /**
     * Shape $ (Value): integer string. Required current version of the Return policy. A stale
     * value returns RETURN_VERSION_CONFLICT. Publishing increments the policy version. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version": `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link ReturnPolicyRevisionRequestInput}. The rules for a return policy
     * revision: scope, eligibility, return window, approval and resolution modes, shipping, and
     * restocking fee.
     */
    "revision": ReturnPolicyRevisionRequestInput;
};
/**
 * Shape $ (Value): {@link PurchasedGiftCard}. A gift card issued for one unit of a purchased order
 * line item, with its last four code characters and any card it replaced.
 */
export type PurchasedGiftCard = {
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string. Last four characters of the card's current code. */
    "last4": string;
    /** Shape $ (Value): string. */
    "original_gift_card_id"?: string;
    /** Shape $ (Value): string.  Value enum: "manual_recollection", "processor_recollection". */
    "restoration_reason"?: "manual_recollection" | "processor_recollection" | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "unit_ordinal": `${bigint}`;
};
/**
 * Shape $ (Value): {@link QuotaDetails}. Storage usage and limits for a resource, returned in the
 * error details when an image quota is exhausted.
 */
export type QuotaDetails = {
    /**
     * Shape $ (Value): integer string. Maximum bytes available for the resource in the
     * authenticated scope. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64.
     */
    "limit_bytes": `${bigint}`;
    /**
     * Shape $ (Value): string. RFC 3339 time when the next ready unattached image becomes eligible
     * for cleanup, when known. Format: date-time.
     */
    "next_expiration_at"?: string;
    /**
     * Shape $ (Value): integer string. Stored bytes held by completed images that are not attached
     * to a resource. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "ready_unattached_bytes": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Bytes reserved by in-progress resource mutations. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "reserved_bytes": `${bigint}`;
    /** Shape $ (Value): string. Stable resource name whose quota was exhausted. */
    "resource": string;
    /**
     * Shape $ (Value): integer string. Bytes currently stored for the resource in the
     * authenticated scope. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64.
     */
    "used_bytes": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReadinessAction}. A step that moves a merchant capability or readiness
 * axis forward, with the party that must do it (`owner`) and any required fields.
 */
export type ReadinessAction = {
    /**
     * Shape $ (Value): string. Value enum: "advance_onboarding", "create_api_key",
     * "create_merchant_account_session", "wait_for_review", "settle_flint_balance",
     * "set_tax_category", "contact_support", "other".
     */
    "action_type": "advance_onboarding"
        | "create_api_key"
        | "create_merchant_account_session"
        | "wait_for_review"
        | "settle_flint_balance"
        | "set_tax_category"
        | "contact_support"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): {@link ReadinessMerchantAccountSession}. Settings for the merchant account
     * session a `ReadinessAction` calls for: which components to show and which requirements to
     * collect.
     */
    "merchant_account_session"?: ReadinessMerchantAccountSession;
    /** Shape $ (Value): string.  Value enum: "integrator", "merchant", "flint". */
    "owner": "integrator" | "merchant" | "flint" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "required_fields"?: Array<string>;
};
/**
 * Shape $ (Value): {@link ReadinessAxis}. Readiness for one area of a merchant account, with its
 * `status`, the reason for it, and the actions that would advance it.
 */
export type ReadinessAxis = {
    /**
     * Shape $ (Value): Array of {@link ReadinessAction}. Shape $[] (Value): {@link
     * ReadinessAction}. A step that moves a merchant capability or readiness axis forward, with
     * the party that must do it (`owner`) and any required fields.
     */
    "next_actions": Array<ReadinessAction>;
    /**
     * Shape $ (Value): string. Value enum: "ready", "pending", "blocked", "not_requested",
     * "not_available".
     */
    "status": "ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "onboarding_not_started", "requirements_due",
     * "requirements_past_due", "pending_verification", "account_rejected",
     * "disabled_by_platform_policy", "billing_suspended", "platform_review",
     * "processing_not_enabled", "platform_funding_unavailable", "tax_category_required",
     * "service_unavailable", "payment_option_access_not_provisioned",
     * "payment_option_activation_pending", "payment_option_not_in_plan",
     * "payment_option_not_available", "capability_not_active", "other".
     */
    "status_reason"?: "onboarding_not_started"
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
/**
 * Shape $ (Value): {@link ReadinessMerchantAccountSession}. Settings for the merchant account
 * session a `ReadinessAction` calls for: which components to show and which requirements to
 * collect.
 */
export type ReadinessMerchantAccountSession = {
    /** Shape $ (Value): string.  Value enum: "upfront", "incremental". */
    "collection_strategy": "upfront" | "incremental" | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "account_onboarding", "account_management",
     * "payouts", "balances", "tax_documents", "notification_banner". Shape $[] (Value): string.
     * Value enum: "account_onboarding", "account_management", "payouts", "balances",
     * "tax_documents", "notification_banner".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | (string & {})>;
    /** Shape $ (Value): string.  Value enum: "omit", "include". */
    "future_requirements": "omit" | "include" | (string & {});
    /**
     * Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an
     * unknown code as additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". Shape $[] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "targeted_requirements"?: Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | (string & {})>;
};
/**
 * Shape $ (Value): {@link ReadinessRequirements}. Account information requirements for a merchant,
 * grouped as currently due, eventually due, past due, and pending verification.
 */
export type ReadinessRequirements = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "current_deadline_at"?: string;
    /**
     * Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an
     * unknown code as additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". Shape $[] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "currently_due": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | (string & {})>;
    /**
     * Shape $ (Value): string. Value enum: "account_attention_required", "account_paused",
     * "account_rejected", "account_requirements_due", "account_under_review",
     * "requirements_past_due", "requirements_pending_verification".
     */
    "disabled_reason"?: "account_attention_required"
        | "account_paused"
        | "account_rejected"
        | "account_requirements_due"
        | "account_under_review"
        | "requirements_past_due"
        | "requirements_pending_verification"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an
     * unknown code as additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". Shape $[] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "eventually_due": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | (string & {})>;
    /**
     * Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an
     * unknown code as additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". Shape $[] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "past_due": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | (string & {})>;
    /**
     * Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an
     * unknown code as additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". Shape $[] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "pending_verification": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | (string & {})>;
    /** Shape $ (Value): string.  Value enum: "flint", "payment_processor". */
    "rejected_by"?: "flint" | "payment_processor" | (string & {});
};
/**
 * Shape $ (Value): {@link ReceiptSettings}. Receipt settings: whether receipts are emailed
 * automatically, whether they are itemized, and the header and footer text.
 */
export type ReceiptSettings = {
    /**
     * Shape $ (Value): boolean. Whether Flint automatically emails a receipt after a successful
     * payment.
     */
    "auto_email_enabled"?: boolean;
    /** Shape $ (Value): string. */
    "footer_text"?: string;
    /** Shape $ (Value): string. */
    "header_text"?: string;
    /** Shape $ (Value): boolean. */
    "is_itemized"?: boolean;
};
/**
 * Shape $ (Value): {@link ReceiptSettingsRequest}. Receipt settings to change when updating
 * settings. Send null for `header_text` or `footer_text` to clear it.
 */
export type ReceiptSettingsRequest = {
    /**
     * Shape $ (Value): boolean. Whether Flint automatically emails a receipt after a successful
     * payment.
     */
    "auto_email_enabled"?: boolean;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "footer_text"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "header_text"?: string | null;
    /** Shape $ (Value): boolean. */
    "is_itemized"?: boolean;
};
/**
 * Shape $ (Value): {@link ReceiptSettingsRequestInput}. Receipt settings to change when updating
 * settings. Send null for `header_text` or `footer_text` to clear it.
 */
export type ReceiptSettingsRequestInput = ReceiptSettingsRequest;
/**
 * Shape $ (Value): {@link RefreshCustomerSessionRequest}. The request body for: Refresh a customer
 * session.
 */
export type RefreshCustomerSessionRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "refresh_token": string;
};
/**
 * Shape $ (Value): {@link RefreshCustomerSessionRequestInput}. The request body for: Refresh a
 * customer session.
 */
export type RefreshCustomerSessionRequestInput = RefreshCustomerSessionRequest;
/** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
export type Refund = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "credit_note_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again. Fix the cause, then create a new refund with a new
     * idempotency key. Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * Shape $ (Value): string. Present only on refunds created through POST
     * /v1/credit-notes/{credit_note_id}/refunds: the Idempotency-Key of that call. Use it with GET
     * /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create
     * response was lost.
     */
    "idempotency_key"?: string;
    /** Shape $ (Value): string. */
    "invoice_id"?: string;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAllocation}. Shape $[] (Value): {@link
     * RefundLineItemAllocation}. How a refund applied to one order line item: quantity, refunded
     * amount, tax, adjustments, and modifier allocations.
     */
    "line_item_allocations"?: Array<RefundLineItemAllocation>;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
     * status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** Shape $ (Value): string. */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): Array of {@link PaymentRefund}. Shape $[] (Value): {@link PaymentRefund}.
     * The part of a refund returned through one payment, with the amount, tip, status, and any
     * failure reason.
     */
    "payment_refunds"?: Array<PaymentRefund>;
    /** Shape $ (Value): string. */
    "payment_review_id"?: string;
    /**
     * Shape $ (Value): string or null. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", null.
     */
    "reason": "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | null
        | (string & {})
        | null;
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "refund_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /** Shape $ (Value): string. */
    "return_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: string;
    /**
     * Shape $ (Value): string. Summary of payment_refunds and tender_allocations. Only failed is
     * final: succeeded and partially_succeeded can still change when a bank rejects a refund after
     * accepting it. Follow refund.updated. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefund}. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocation}. Shape $[] (Value): {@link
     * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
     * allocations.
     */
    "tender_allocations"?: Array<RefundTenderAllocation>;
    /**
     * Shape $ (Value): Array of {@link RefundUnissuedGiftCardRecovery}. Cash returned after an
     * unissued gift card purchase refund failed. Return it through a new refund against
     * payment_intent_id and order_line_item_id. It does not issue another card. Source remaining
     * and pending amounts describe the entire original settlement allocation; repeated entries for
     * that source are not additive. Shape $[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered.
     */
    "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
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
 * Shape $ (Value): {@link RefundAdjustmentAudit}. Who made a manual tax adjustment on a refund
 * line item and where it came from, for audit purposes.
 */
export type RefundAdjustmentAudit = {
    /** Shape $ (Value): string. minLength: 1. */
    "actor_id": string;
    /** Shape $ (Value): string.  Value enum: "user", "system", "admin". */
    "actor_type": "user" | "system" | "admin" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "source": string;
};
/**
 * Shape $ (Value): {@link RefundAdjustmentAuditInput}. Who made a manual tax adjustment on a
 * refund line item and where it came from, for audit purposes.
 */
export type RefundAdjustmentAuditInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "actor_id": string;
    /** Shape $ (Value): string.  Value enum: "user", "system", "admin". */
    "actor_type": "user" | "system" | "admin";
    /** Shape $ (Value): string. minLength: 1. */
    "source": string;
};
/**
 * Shape $ (Value): {@link RefundAdjustmentReason}. The reason recorded for a refund line item
 * adjustment, as a `code` with an optional description.
 */
export type RefundAdjustmentReason = {
    /**
     * Shape $ (Value): string. Value enum: "customer_agreement", "jurisdiction_specific_rule",
     * "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction",
     * "other".
     */
    "code": "customer_agreement"
        | "jurisdiction_specific_rule"
        | "merchant_policy"
        | "customer_request"
        | "restocking_policy"
        | "manual_tax_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "description"?: string;
};
/**
 * Shape $ (Value): {@link RefundAdjustmentReasonRequestInput}. The reason to record for a refund
 * adjustment, as a `code` with an optional description.
 */
export type RefundAdjustmentReasonRequestInput = {
    /**
     * Shape $ (Value): string. Value enum: "customer_agreement", "jurisdiction_specific_rule",
     * "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction",
     * "other".
     */
    "code": "customer_agreement"
        | "jurisdiction_specific_rule"
        | "merchant_policy"
        | "customer_request"
        | "restocking_policy"
        | "manual_tax_correction"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
};
/**
 * Shape $ (Value): {@link RefundCharge}. An order charge to refund when creating a refund, with an
 * optional amount to refund.
 */
export type RefundCharge = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "order_charge_id": string;
};
/**
 * Shape $ (Value): {@link RefundChargeInput}. An order charge to refund when creating a refund,
 * with an optional amount to refund.
 */
export type RefundChargeInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "order_charge_id": string;
};
/**
 * Shape $ (Value): {@link RefundDestinations}. Default refund destinations for payment intent and
 * gift card redemption allocations planned by Flint. Each tender type defaults to original when
 * omitted.
 */
export type RefundDestinations = {
    /**
     * Shape $ (Value): string. Where gift card redemption value is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards, including when the original is
     * closed or cannot accept the full credit. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_redemption"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "payment_intent"?: "original" | "new_gift_card" | (string & {});
};
/**
 * Shape $ (Value): {@link RefundDestinationsInput}. Default refund destinations for payment intent
 * and gift card redemption allocations planned by Flint. Each tender type defaults to original
 * when omitted.
 */
export type RefundDestinationsInput = {
    /**
     * Shape $ (Value): string. Where gift card redemption value is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards, including when the original is
     * closed or cannot accept the full credit. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_redemption"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "payment_intent"?: "original" | "new_gift_card";
};
/**
 * Shape $ (Value): {@link RefundGiftCardCode}. The code of a gift card issued by a refund,
 * returned once in the refund result with its `gift_card_id`.
 */
export type RefundGiftCardCode = {
    /** Shape $ (Value): string. */
    "code": string;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
};
/**
 * Shape $ (Value): {@link RefundLineItem}. An order line item to refund, with the quantity or
 * amount, tax handling, and any adjustments such as a restocking fee.
 */
export type RefundLineItem = {
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAdjustmentRefundIn}. Shape $[] (Value):
     * {@link RefundLineItemAdjustmentRefundIn}. An amount to refund back against an earlier line
     * item adjustment, identified by `refund_line_item_adjustment_id`.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefundIn>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAdjustmentIn}. Shape $[] (Value): {@link
     * RefundLineItemAdjustmentIn}. An adjustment to apply to a refunded line item, such as a
     * restocking fee or withheld amount, and whether it applies to the gross amount or tax.
     */
    "refund_adjustments"?: Array<RefundLineItemAdjustmentIn>;
    /**
     * Shape $ (Value): {@link RefundAdjustmentAudit}. Who made a manual tax adjustment on a refund
     * line item and where it came from, for audit purposes.
     */
    "tax_adjustment_audit"?: RefundAdjustmentAudit;
    /**
     * Shape $ (Value): {@link RefundAdjustmentReason}. The reason to record for a refund
     * adjustment, as a `code` with an optional description.
     */
    "tax_adjustment_reason"?: RefundAdjustmentReason;
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefundIn}. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefundIn}. The tax to refund for one tax breakdown, identified by
     * `tax_breakdown_id`, when setting tax refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValue;
    /** Shape $ (Value): string.  Value enum: "automatic", "explicit". */
    "tax_refund_mode"?: "automatic" | "explicit" | (string & {});
};
/**
 * Shape $ (Value): {@link RefundLineItemAdjustment}. An adjustment on a refunded line item, such
 * as a restocking fee or withheld amount, with how much has been refunded and what remains.
 */
export type RefundLineItemAdjustment = {
    /**
     * Shape $ (Value): string. Value enum: "restocking_fee", "withheld_amount",
     * "refund_adjustment", "tax_adjustment".
     */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax" | (string & {});
    /**
     * Shape $ (Value): {@link RefundAdjustmentReason}. The reason recorded for a refund line item
     * adjustment, as a `code` with an optional description.
     */
    "reason": RefundAdjustmentReason;
    /** Shape $ (Value): string. */
    "refund_line_item_adjustment_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "remaining_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link RefundLineItemAdjustmentIn}. An adjustment to apply to a refunded line
 * item, such as a restocking fee or withheld amount, and whether it applies to the gross amount or
 * tax.
 */
export type RefundLineItemAdjustmentIn = {
    /**
     * Shape $ (Value): string. Value enum: "restocking_fee", "withheld_amount",
     * "refund_adjustment", "tax_adjustment".
     */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string.  Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax" | (string & {});
    /**
     * Shape $ (Value): {@link RefundAdjustmentReason}. The reason to record for a refund
     * adjustment, as a `code` with an optional description.
     */
    "reason"?: RefundAdjustmentReason;
};
/**
 * Shape $ (Value): {@link RefundLineItemAdjustmentInInput}. An adjustment to apply to a refunded
 * line item, such as a restocking fee or withheld amount, and whether it applies to the gross
 * amount or tax.
 */
export type RefundLineItemAdjustmentInInput = {
    /**
     * Shape $ (Value): string. Value enum: "restocking_fee", "withheld_amount",
     * "refund_adjustment", "tax_adjustment".
     */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string.  Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax";
    /**
     * Shape $ (Value): {@link RefundAdjustmentReasonRequestInput}. The reason to record for a
     * refund adjustment, as a `code` with an optional description.
     */
    "reason"?: RefundAdjustmentReasonRequestInput;
};
/**
 * Shape $ (Value): {@link RefundLineItemAdjustmentRefund}. An amount refunded back against an
 * earlier line item adjustment.
 */
export type RefundLineItemAdjustmentRefund = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "original_refund_line_item_adjustment_id": string;
    /** Shape $ (Value): string. */
    "refund_line_item_adjustment_refund_id": string;
};
/**
 * Shape $ (Value): {@link RefundLineItemAdjustmentRefundIn}. An amount to refund back against an
 * earlier line item adjustment, identified by `refund_line_item_adjustment_id`.
 */
export type RefundLineItemAdjustmentRefundIn = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "refund_line_item_adjustment_id": string;
};
/**
 * Shape $ (Value): {@link RefundLineItemAdjustmentRefundInInput}. An amount to refund back against
 * an earlier line item adjustment, identified by `refund_line_item_adjustment_id`.
 */
export type RefundLineItemAdjustmentRefundInInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "refund_line_item_adjustment_id": string;
};
/**
 * Shape $ (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
 * quantity, refunded amount, tax, adjustments, and modifier allocations.
 */
export type RefundLineItemAllocation = {
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAdjustmentRefund}. Shape $[] (Value): {@link
     * RefundLineItemAdjustmentRefund}. An amount refunded back against an earlier line item
     * adjustment.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefund>;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAdjustment}. Shape $[] (Value): {@link
     * RefundLineItemAdjustment}. An adjustment on a refunded line item, such as a restocking fee
     * or withheld amount, with how much has been refunded and what remains.
     */
    "adjustments"?: Array<RefundLineItemAdjustment>;
    /**
     * Shape $ (Value): {@link RefundLineItemAutomaticRefund}. The subtotal, discount, tax, and
     * total Flint calculated automatically for a refunded line item.
     */
    "automatic_refund": RefundLineItemAutomaticRefund;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): Array of {@link CategoryReference}. Shape $[] (Value): {@link
     * CategoryReference}. A reference to a product category by ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemModifierAllocation}. Shape $[] (Value):
     * {@link RefundLineItemModifierAllocation}. The part of a line item refund that applies to one
     * modifier, by quantity or amount.
     */
    "modifiers"?: Array<RefundLineItemModifierAllocation>;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /** Shape $ (Value): string.  Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefund}. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /** Shape $ (Value): string.  Value enum: "automatic", "explicit". */
    "tax_refund_mode": "automatic" | "explicit" | (string & {});
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link RefundLineItemAutomaticRefund}. The subtotal, discount, tax, and total
 * Flint calculated automatically for a refunded line item.
 */
export type RefundLineItemAutomaticRefund = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link RefundLineItemInput}. An order line item to refund, with the quantity or
 * amount, tax handling, and any adjustments such as a restocking fee.
 */
export type RefundLineItemInput = {
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAdjustmentRefundInInput}. Shape $[] (Value):
     * {@link RefundLineItemAdjustmentRefundInInput}. An amount to refund back against an earlier
     * line item adjustment, identified by `refund_line_item_adjustment_id`.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefundInInput>;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAdjustmentInInput}. Shape $[] (Value): {@link
     * RefundLineItemAdjustmentInInput}. An adjustment to apply to a refunded line item, such as a
     * restocking fee or withheld amount, and whether it applies to the gross amount or tax.
     */
    "refund_adjustments"?: Array<RefundLineItemAdjustmentInInput>;
    /**
     * Shape $ (Value): {@link RefundAdjustmentAuditInput}. Who made a manual tax adjustment on a
     * refund line item and where it came from, for audit purposes.
     */
    "tax_adjustment_audit"?: RefundAdjustmentAuditInput;
    /**
     * Shape $ (Value): {@link RefundAdjustmentReasonRequestInput}. The reason to record for a
     * refund adjustment, as a `code` with an optional description.
     */
    "tax_adjustment_reason"?: RefundAdjustmentReasonRequestInput;
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefundInInput}. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefundInInput}. The tax to refund for one tax breakdown, identified by
     * `tax_breakdown_id`, when setting tax refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValueInput;
    /** Shape $ (Value): string.  Value enum: "automatic", "explicit". */
    "tax_refund_mode"?: "automatic" | "explicit";
};
/**
 * Shape $ (Value): {@link RefundLineItemModifierAllocation}. The part of a line item refund that
 * applies to one modifier, by quantity or amount.
 */
export type RefundLineItemModifierAllocation = {
    /** Shape $ (Value): string.  Value enum: "quantity", "amount". */
    "allocation_basis": "quantity" | "amount" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "modifier_group_name": string;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_modifier_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "refund_line_item_modifier_allocation_id": string;
    /** Shape $ (Value): boolean. */
    "show_on_fulfillment": boolean;
    /** Shape $ (Value): boolean. */
    "show_on_receipt": boolean;
    /** Shape $ (Value): string.  Value enum: "catalog_modifier", "text". */
    "source_type": "catalog_modifier" | "text" | (string & {});
    /** Shape $ (Value): string. */
    "text_value"?: string;
};
/** Shape $ (Value): {@link RefundListResponse}. A page of `Refund` objects. */
export type RefundListResponse = {
    /**
     * Shape $ (Value): Array of {@link Refund}. Shape $[] (Value): {@link Refund}. Money returned
     * against a collected payment.
     */
    "data": Array<Refund>;
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
/** Shape $ (Value): {@link RefundResponse}. A response containing `Refund` data. */
export type RefundResponse = {
    /** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
    "data": Refund;
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
 * Shape $ (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an
 * order.
 */
export type RefundTaxBreakdownRefund = {
    /** Shape $ (Value): string. */
    "order_charge_id"?: string;
    /** Shape $ (Value): string. */
    "tax_breakdown_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link RefundTaxBreakdownRefundIn}. The tax to refund for one tax breakdown,
 * identified by `tax_breakdown_id`, when setting tax refunds explicitly.
 */
export type RefundTaxBreakdownRefundIn = {
    /** Shape $ (Value): string. minLength: 1. */
    "tax_breakdown_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link RefundTaxBreakdownRefundInInput}. The tax to refund for one tax
 * breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly.
 */
export type RefundTaxBreakdownRefundInInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "tax_breakdown_id": string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValueInput;
};
/**
 * Shape $ (Value): {@link RefundTenderAllocation}. One tender's share of a refund, listed in the
 * refund's tender allocations.
 */
export type RefundTenderAllocation = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): Array of {@link OrderGiftCardAllocation}. Shape $[] (Value): {@link
     * OrderGiftCardAllocation}. A gift card that received part of a refund, with the amount
     * credited.
     */
    "destination_cards"?: Array<OrderGiftCardAllocation>;
    /**
     * Shape $ (Value): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again. Fix the cause, then create a new refund with a new
     * idempotency key. Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /** Shape $ (Value): string. */
    "gift_card_id"?: string;
    /** Shape $ (Value): string. */
    "gift_card_redemption_id"?: string;
    /** Shape $ (Value): string. */
    "payment_intent_id"?: string;
    /** Shape $ (Value): string. */
    "refund_allocation_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /**
     * Shape $ (Value): string. Status of this payment refund or tender allocation. A succeeded
     * refund can still fail after a bank rejection. Parent status transitions send
     * refund.succeeded, refund.partially_succeeded, or refund.failed; other public changes send
     * refund.updated. Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {});
    /** Shape $ (Value): string.  Value enum: "payment_intent", "gift_card_redemption". */
    "tender_type": "payment_intent" | "gift_card_redemption" | (string & {});
};
/**
 * Shape $ (Value): {@link RefundTenderAllocationInputGiftCardRedemption}. The
 * `gift_card_redemption` variant of `RefundTenderAllocationInput`.
 */
export type RefundTenderAllocationInputGiftCardRedemption = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Shape $ (Value): string.  Value enum: "gift_card_redemption". */
    "tender_type": "gift_card_redemption" | (string & {});
})
    & (({
    /** Shape $ (Value): any. Shape $.currency (Optional): any.  Value enum: "USD". */
    "amount_money"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): any.  Value enum: "USD". */
        "currency"?: unknown;
    });
    /** Shape $ (Value): any.  Value enum: "gift_card_redemption". */
    "tender_type"?: unknown;
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
}));
/**
 * Shape $ (Value): {@link RefundTenderAllocationInputGiftCardRedemptionInput}. The
 * `gift_card_redemption` variant of `RefundTenderAllocationInput`.
 */
export type RefundTenderAllocationInputGiftCardRedemptionInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Shape $ (Value): string.  Value enum: "gift_card_redemption". */
    "tender_type": "gift_card_redemption";
})
    & (({
    /** Shape $ (Value): any. Shape $.currency (Optional): any.  Value enum: "USD". */
    "amount_money"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Shape $ (Value): any.  Value enum: "USD". */
        "currency"?: ("USD") & ("USD");
    });
    /** Shape $ (Value): any.  Value enum: "gift_card_redemption". */
    "tender_type"?: ("gift_card_redemption") & ("gift_card_redemption");
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
})
    & ({
    "payment_intent_id"?: never;
}));
/**
 * Shape $ (Value): {@link RefundTenderAllocationInputPaymentIntent}. The `payment_intent` variant
 * of `RefundTenderAllocationInput`.
 */
export type RefundTenderAllocationInputPaymentIntent = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
    /** Shape $ (Value): string.  Value enum: "payment_intent". */
    "tender_type": "payment_intent" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "payment_intent". */
    "tender_type"?: unknown;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
}));
/**
 * Shape $ (Value): {@link RefundTenderAllocationInputPaymentIntentInput}. The `payment_intent`
 * variant of `RefundTenderAllocationInput`.
 */
export type RefundTenderAllocationInputPaymentIntentInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
    /** Shape $ (Value): string.  Value enum: "payment_intent". */
    "tender_type": "payment_intent";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "payment_intent". */
    "tender_type"?: ("payment_intent") & ("payment_intent");
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
})
    & ({
    "gift_card_redemption_id"?: never;
}));
/**
 * Shape $ (Value): {@link RefundTenderAllocationRequest}. Where part of a refund goes: back to a
 * payment intent or to a gift card redemption, with the amount.
 */
export type RefundTenderAllocationRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string. ISO
     * 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Shape $ (Value): string.  Value enum: "payment_intent", "gift_card_redemption". */
    "tender_type": "payment_intent" | "gift_card_redemption" | (string & {});
})
    & ((Exclude<RefundTenderAllocationInputPaymentIntent & object, readonly unknown[]>)
    | (Exclude<RefundTenderAllocationInputGiftCardRedemption & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link RefundTenderAllocationRequestInput}. Where part of a refund goes: back
 * to a payment intent or to a gift card redemption, with the amount.
 */
export type RefundTenderAllocationRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. Shape $.amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. Shape $.currency (Required): string.
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
         * floating-point number. Format: int64. minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): string. The captured redemption to refund. Required for tender_type
     * gift_card_redemption. minLength: 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * Shape $ (Value): string. The succeeded payment intent to refund. Required for tender_type
     * payment_intent. minLength: 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Shape $ (Value): string.  Value enum: "payment_intent", "gift_card_redemption". */
    "tender_type": "payment_intent" | "gift_card_redemption";
})
    & ((Exclude<RefundTenderAllocationInputPaymentIntentInput & object, readonly unknown[]>)
    | (Exclude<RefundTenderAllocationInputGiftCardRedemptionInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link RefundUnissuedGiftCardRecovery}. Details of a gift card purchase
 * refunded before the card was issued, including the amounts recovered.
 */
export type RefundUnissuedGiftCardRecovery = {
    /** Shape $ (Value): string. */
    "order_id": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "payment_intent_id": string;
    /** Shape $ (Value): string. */
    "purchase_refund_allocation_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "settlement_allocation_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "source_pending_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "source_remaining_amount_money": MoneyValue;
};
export type RefundsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link CreateRefundRequestInput}. The request body for: Create refund. */
    "body": InputValue<CreateRefundRequestInput>;
};
export type RefundsGetInput = {
    /** Shape $ (Value): string. */
    "refund_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "order", "payment_intent",
     * "payment_refunds.payment_intent". Shape $[] (Value): string. Value enum: "customer",
     * "order", "payment_intent", "payment_refunds.payment_intent".
     */
    "expand"?: InputValue<Array<"customer" | "order" | "payment_intent" | "payment_refunds.payment_intent">>;
};
export type RefundsListInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "payment_intent_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "succeeded",
     * "partially_succeeded", "failed". Shape $[] (Value): string. Value enum: "pending",
     * "succeeded", "partially_succeeded", "failed".
     */
    "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other". Shape $[] (Value): string. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other".
     */
    "reason"?: InputValue<Array<"duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other">>;
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
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
     * Shape $ (Value): Array of string. [] enum: "customer", "order", "payment_intent". Shape $[]
     * (Value): string. Value enum: "customer", "order", "payment_intent".
     */
    "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
};
export type RefundsUpdateInput = {
    /** Shape $ (Value): string. */
    "refund_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): {@link UpdateRefundRequestInput}. The request body for: Update refund. */
    "body": InputValue<UpdateRefundRequestInput>;
};
/**
 * Shape $ (Value): {@link ReleaseReturnResolutionRequest}. The request body for: Release return
 * resolution.
 */
export type ReleaseReturnResolutionRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string.  Value enum: "merchant_approved", "exception_resolved", "other". */
    "reason": "merchant_approved" | "exception_resolved" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ReleaseReturnResolutionRequestInput}. The request body for: Release
 * return resolution.
 */
export type ReleaseReturnResolutionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string.  Value enum: "merchant_approved", "exception_resolved", "other". */
    "reason": "merchant_approved" | "exception_resolved" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link RemoveDiscountsRequest}. The request body for: Remove discounts. */
export type RemoveDiscountsRequest = {
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "order_discount_ids": Array<string>;
};
/** Shape $ (Value): {@link RemoveDiscountsRequestInput}. The request body for: Remove discounts. */
export type RemoveDiscountsRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "order_discount_ids": Array<string>;
};
/**
 * Shape $ (Value): {@link RenewSubscriptionRequestInput}. The request body for: Renew subscription
 * now.
 */
export type RenewSubscriptionRequestInput = ConfigurationVersionRequestInput;
/** Shape $ (Value): {@link ReopenReturnRequest}. The request body for: Reopen return. */
export type ReopenReturnRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "linked_effect_changed", "correction_required",
     * "additional_merchandise_received", "merchant_request", "other".
     */
    "reason": "linked_effect_changed"
        | "correction_required"
        | "additional_merchandise_received"
        | "merchant_request"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link ReopenReturnRequestInput}. The request body for: Reopen return. */
export type ReopenReturnRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "linked_effect_changed", "correction_required",
     * "additional_merchandise_received", "merchant_request", "other".
     */
    "reason": "linked_effect_changed"
        | "correction_required"
        | "additional_merchandise_received"
        | "merchant_request"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link Report}. A report generated from the merchant's activity. */
export type Report = ({
    /** Shape $ (Value): string. When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Currency the report covers. A report never combines currencies.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): {@link PublicDownload}. Link to download the generated report. Present only
     * when status is succeeded. A temporary link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Shape $ (Value): string. Why the report failed. Present only when status is failed:
     * limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs
     * wasn't available yet, and generation_failed for other errors. Value enum:
     * "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Shape $ (Value): string. Exclusive interval end instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive interval start instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_start_at": string;
    /**
     * Shape $ (Value): string. Stable identifier of the report. pattern:
     * ^rep_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "report_id": string;
    /**
     * Shape $ (Value): string. The report's type and column version. See the Reports guide for its
     * columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1".
     */
    "report_type": "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | (string & {});
    /**
     * Shape $ (Value): string. pending while Flint generates the report, then succeeded with a
     * download or failed with a failure_reason. Flint sends report.succeeded or report.failed when
     * it finishes. Value enum: "pending", "succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "failed" | (string & {});
    /**
     * Shape $ (Value): string. IANA timezone used for timestamps and date bucketing. A payout
     * occurs at the start of its arrival_date in this timezone.
     */
    "timezone": string;
})
    & ((Exclude<ReportPending & object, readonly unknown[]>)
    | (Exclude<ReportSucceeded & object, readonly unknown[]>)
    | (Exclude<ReportFailed & object, readonly unknown[]>)
    | (Record<string, unknown>));
export type ReportDownloadsGetInput = {
    /** Shape $ (Value): string. */
    "report_download_id": InputValue<string>;
};
export type ReportDownloadsGetResponse = {
    location?: string;
};
/** Shape $ (Value): {@link ReportFailed}. A report generated from the merchant's activity. */
export type ReportFailed = ({
    /** Shape $ (Value): string. When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Currency the report covers. A report never combines currencies.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): {@link PublicDownload}. Link to download the generated report. Present only
     * when status is succeeded. A temporary link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Shape $ (Value): string. Why the report failed. Present only when status is failed:
     * limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs
     * wasn't available yet, and generation_failed for other errors. Value enum:
     * "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason": "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Shape $ (Value): string. Exclusive interval end instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive interval start instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_start_at": string;
    /**
     * Shape $ (Value): string. Stable identifier of the report. pattern:
     * ^rep_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "report_id": string;
    /**
     * Shape $ (Value): string. The report's type and column version. See the Reports guide for its
     * columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1".
     */
    "report_type": "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | (string & {});
    /**
     * Shape $ (Value): string. pending while Flint generates the report, then succeeded with a
     * download or failed with a failure_reason. Flint sends report.succeeded or report.failed when
     * it finishes. Value enum: "failed".
     */
    "status": "failed" | (string & {});
    /**
     * Shape $ (Value): string. IANA timezone used for timestamps and date bucketing. A payout
     * occurs at the start of its arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "failed". */
    "status"?: "failed" | (string & {});
    /**
     * Shape $ (Value): string. Why the report failed. Present only when status is failed:
     * limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs
     * wasn't available yet, and generation_failed for other errors. Value enum:
     * "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason": "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
}));
/** Shape $ (Value): {@link ReportListResponse}. A page of `Report` objects. */
export type ReportListResponse = {
    /**
     * Shape $ (Value): Array of {@link Report}. Shape $[] (Value): {@link Report}. A report
     * generated from the merchant's activity.
     */
    "data": Array<Report>;
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
/** Shape $ (Value): {@link ReportPending}. A report generated from the merchant's activity. */
export type ReportPending = ({
    /** Shape $ (Value): string. When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Currency the report covers. A report never combines currencies.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): {@link PublicDownload}. Link to download the generated report. Present only
     * when status is succeeded. A temporary link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Shape $ (Value): string. Why the report failed. Present only when status is failed:
     * limit_exceeded when the report hit a size or time limit, data_unavailable when data it needs
     * wasn't available yet, and generation_failed for other errors. Value enum:
     * "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Shape $ (Value): string. Exclusive interval end instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive interval start instant. Each report type matches its own
     * occurrence time. Format: date-time.
     */
    "interval_start_at": string;
    /**
     * Shape $ (Value): string. Stable identifier of the report. pattern:
     * ^rep_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "report_id": string;
    /**
     * Shape $ (Value): string. The report's type and column version. See the Reports guide for its
     * columns. Value enum: "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
     * "payments_itemized_v1", "balance_transactions_itemized_v1", "payouts_itemized_v1",
     * "tax_itemized_v1", "tax_summarized_v1", "merchant_billing_itemized_v1",
     * "tax_transactions_itemized_v1".
     */
    "report_type": "gift_card_liability_v1"
        | "orders_itemized_v1"
        | "orders_itemized_v2"
        | "payments_itemized_v1"
        | "balance_transactions_itemized_v1"
        | "payouts_itemized_v1"
        | "tax_itemized_v1"
        | "tax_summarized_v1"
        | "merchant_billing_itemized_v1"
        | "tax_transactions_itemized_v1"
        | (string & {});
    /**
     * Shape $ (Value): string. pending while Flint generates the report, then succeeded with a
     * download or failed with a failure_reason. Flint sends report.succeeded or report.failed when
     * it finishes. Value enum: "pending".
     */
    "status": "pending" | (string & {});
    /**
     * Shape $ (Value): string. IANA timezone used for timestamps and date bucketing. A payout
     * occurs at the start of its arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "pending". */
    "status"?: "pending" | (string & {});
}));
/** Shape $ (Value): {@link ReportResponse}. A response containing `Report` data. */
export type ReportResponse = {
    /** Shape $ (Value): {@link Report}. A report generated from the merchant's activity. */
    "data": Report;
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
