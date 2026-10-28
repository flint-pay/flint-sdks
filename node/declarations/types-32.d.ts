import type { InputValue } from '../runtime.js';
import type { PauseSubscriptionRequestInput } from './types-37.js';
import type { RenewSubscriptionRequestInput, ResourceVersionRequestInput, ResponseMeta } from './types-42.js';
import type { MeCreateDeletionRequestInput } from './types-31.js';
import type { SaveMeGiftCardRequestInput, SaveMePaymentMethodRequestInput } from './types-46.js';
import type { SkipMeSubscriptionCycleRequestInput } from './types-47.js';
import type {
    UpdateCustomerAddressRequestInput,
    UpdateCustomerEmailPreferencesRequestInput,
    TextModifierConfig
} from './types-50.js';
import type {
    UpdateMeRequestInput,
    UpdateMeSubscriptionRequestInput,
    UpdateMeSubscriptionLineItemRequestInput,
    UpdateMerchantRequestInput
} from './types-51.js';
import type { Address } from './types-0.js';
import type { ExpandedOrganizationSummary, DisputeResponseSessionStripeAccountSession } from './types-18.js';
import type { ImageAttachment } from './types-21.js';
import type { MoneyValue } from './types-33.js';
import type { CapabilityReadiness } from './types-3.js';
import type { ReadinessAxis, ReadinessRequirements } from './types-41.js';
import type { CreateModifierGroupRequestInput } from './types-8.js';
export type MeListShipmentsInput = {
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "handed_off_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "handed_off_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
export type MeListSubscriptionPaymentRetriesInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
};
export type MeListSubscriptionsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". Shape $[] (Value): string. Value enum:
     * "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     */
    "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "flint", "external". Shape $[]
     * (Value): string. Value enum: "flint", "external".
     */
    "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
    /** Shape $ (Value): boolean. */
    "cancel_at_period_end"?: InputValue<boolean>;
    /** Shape $ (Value): string. */
    "delivery_method_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable". Shape $[] (Value): string. Value enum:
     * "method_unavailable", "destination_not_served", "rate_unavailable".
     */
    "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
    /** Shape $ (Value): string. */
    "subscription_plan_id"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "next_billing_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
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
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "next_billing_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "next_billing_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): boolean. */
    "needs_attention"?: InputValue<boolean>;
};
export type MePauseSubscriptionInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link PauseSubscriptionRequestInput}. The request body for: Pause one of
     * the current buyer's subscriptions; Pause subscription.
     */
    "body": InputValue<PauseSubscriptionRequestInput>;
};
export type MeRemoveGiftCardInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type MeRemovePaymentMethodInput = {
    /** Shape $ (Value): string. */
    "payment_method_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type MeRenewSubscriptionInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RenewSubscriptionRequestInput}. The request body for: Renew
     * subscription now.
     */
    "body": InputValue<RenewSubscriptionRequestInput>;
};
export type MeResumeSubscriptionInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ResourceVersionRequestInput}. The request body for: Mark invoice
     * uncollectible; Regenerate invoice public link; Resume one of the current buyer's
     * subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void
     * invoice.
     */
    "body"?: InputValue<ResourceVersionRequestInput>;
};
export type MeRevokeSessionInput = MeCreateDeletionRequestInput;
export type MeSaveGiftCardInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link SaveMeGiftCardRequestInput}. The request body for: Save a gift card
     * to your account.
     */
    "body": InputValue<SaveMeGiftCardRequestInput>;
};
export type MeSavePaymentMethodInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link SaveMePaymentMethodRequestInput}. The request body for: Create a
     * payment method for the current buyer.
     */
    "body": InputValue<SaveMePaymentMethodRequestInput>;
};
export type MeSendOrderReceiptInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type MeSkipSubscriptionCycleInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link SkipMeSubscriptionCycleRequestInput}. The request body for: Skip
     * subscription cycle.
     */
    "body": InputValue<SkipMeSubscriptionCycleRequestInput>;
};
export type MeUpdateAddressInput = {
    /** Shape $ (Value): string. */
    "customer_address_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateCustomerAddressRequestInput}. The request body for: Update a
     * customer address; Update one of the current buyer's addresses. minProperties: 1.
     */
    "body": InputValue<UpdateCustomerAddressRequestInput>;
};
export type MeUpdateEmailPreferencesInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateCustomerEmailPreferencesRequestInput}. The request body for:
     * Update the current buyer's email preferences. minProperties: 1.
     */
    "body": InputValue<UpdateCustomerEmailPreferencesRequestInput>;
};
export type MeUpdateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateMeRequestInput}. The request body for: Update the current
     * buyer profile. minProperties: 1.
     */
    "body": InputValue<UpdateMeRequestInput>;
};
export type MeUpdateSubscriptionInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateMeSubscriptionRequestInput}. The request body for: Update
     * subscription.
     */
    "body": InputValue<UpdateMeSubscriptionRequestInput>;
};
export type MeUpdateSubscriptionLineItemInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "subscription_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateMeSubscriptionLineItemRequestInput}. The request body for:
     * Swap subscription variant.
     */
    "body": InputValue<UpdateMeSubscriptionLineItemRequestInput>;
};
/** Shape $ (Value): {@link Merchant}. The business accepting payments. */
export type Merchant = {
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
    /**
     * Shape $ (Value): string. Default API version for requests without a Flint-Version header.
     * Shared across live and test environments.
     */
    "api_version"?: string;
    /**
     * Shape $ (Value): string. When the merchant's default API version last changed. Format:
     * date-time.
     */
    "api_version_changed_at"?: string;
    /**
     * Shape $ (Value): string. When the merchant's default API version was first set. Format:
     * date-time.
     */
    "api_version_pinned_at"?: string;
    /**
     * Shape $ (Value): string. Previous API version, present while a supported rollback is
     * available.
     */
    "api_version_previous"?: string;
    /**
     * Shape $ (Value): string. When the 72-hour rollback offer expires. Explicit changes to any
     * supported version remain available afterward. Format: date-time.
     */
    "api_version_rollback_expires_at"?: string;
    /**
     * Shape $ (Value): string. Business name buyers see on checkout, payment links, and receipts.
     * Once the merchant starts verification, it stays in sync with the business name on the live
     * Stripe account: a change on either side applies, and the latest change wins.
     */
    "business_name"?: string;
    /**
     * Shape $ (Value): string. Merchant's business type. - `other`: A business type Flint does not
     * map yet. Value enum: "individual", "company", "non_profit", "government_entity", "other".
     */
    "business_type"?: "individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string or null. */
    "email": string | null;
    /**
     * Shape $ (Value): {@link ImageAttachment}. A square image, at least 128 by 128 pixels, shown
     * where the store needs a small mark: browser tabs and compact headers. An image attached to a
     * resource, with its display properties and attachment metadata.
     */
    "icon"?: ImageAttachment;
    /**
     * Shape $ (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "logo"?: ImageAttachment;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link ExpandedOrganizationSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedOrganizationSummary}. An organization's summary fields, such as its name,
     * status, and parent, returned when the organization is expanded. Shape $.anyOf[2] (Value):
     * null.
     */
    "organization"?: ((ExpandedOrganizationSummary) | (null));
    /**
     * Shape $ (Value): string. The organization this merchant belongs to. Flint creates it with
     * the merchant, and it can't be changed through the API.
     */
    "organization_id": string;
    /** Shape $ (Value): string. */
    "phone"?: string;
    /**
     * Shape $ (Value): {@link MerchantReadiness}. A merchant's readiness to accept payments and
     * receive payouts, with per-capability status and outstanding requirements.
     */
    "readiness": MerchantReadiness;
    /** Shape $ (Value): string. */
    "reporting_timezone"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "suspended", "restricted", "closed". */
    "status": "active" | "suspended" | "restricted" | "closed" | (string & {});
    /** Shape $ (Value): string. */
    "support_email"?: string;
    /** Shape $ (Value): string. */
    "support_phone"?: string;
    /** Shape $ (Value): string. */
    "support_url"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Merchant version. Profile, status, and API version changes
     * advance this version, including business name and business type changes synced from the
     * payment provider. Readiness updates alone do not. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 1.
     */
    "version": `${bigint}`;
    /** Shape $ (Value): string. */
    "website_url"?: string;
};
/**
 * Shape $ (Value): {@link MerchantAccountSession}. A merchant account session: the browser
 * initialization data, allowed components, effective policy, and launch token for embedded account
 * management.
 */
export type MerchantAccountSession = {
    /**
     * Shape $ (Value): {@link MerchantAccountSessionClientSession}. Browser initialization data
     * required to mount embedded account-management components. These instructions are not
     * merchant account resource state. Short-lived browser initialization data for an embedded
     * merchant account session.
     */
    "client_session": MerchantAccountSessionClientSession;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "account_onboarding",
     * "account_management", "payouts", "balances", "tax_documents", "notification_banner". Shape
     * $[] (Value): string. Value enum: "account_onboarding", "account_management", "payouts",
     * "balances", "tax_documents", "notification_banner".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | (string & {})>;
    /**
     * Shape $ (Value): {@link MerchantAccountSessionEffectivePolicy}. The collection policy
     * applied to a merchant account session: which requirements it targets, how they are
     * collected, and whether future requirements are included.
     */
    "effective_policy": MerchantAccountSessionEffectivePolicy;
    /**
     * Shape $ (Value): string. Signed Flint token to exchange at POST
     * /v1/merchant-account-session-refreshes. Each new refresh operation rotates this token; a
     * same-key retry replays the original token. The caller must still authenticate and authorize
     * the human using the session.
     */
    "launch_token": string;
    /**
     * Shape $ (Value): string. Expiry of launch_token in UTC. After expiry, create a new merchant
     * account session. Format: date-time.
     */
    "launch_token_expires_at": string;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionClientSession}. Short-lived browser initialization
 * data for an embedded merchant account session.
 */
export type MerchantAccountSessionClientSession = {
    /**
     * Shape $ (Value): string. Expiry of the embedded account session client secret in UTC.
     * Connect.js calls fetchClientSecret to obtain a new secret when needed. Format: date-time.
     */
    "expires_at": string;
    /**
     * Shape $ (Value): {@link MerchantAccountSessionStripe}. Stripe Connect initialization
     * credentials and authorized component collection options. Connect initializes from the
     * account session client secret and does not take a connected account ID. Stripe Connect
     * initialization data for a merchant account session: the account session, publishable key,
     * and authorized components.
     */
    "stripe": MerchantAccountSessionStripe;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionCreateRequest}. Creates an embedded account
 * session for a non-empty unique set of Flint components. At most one component may use onboarding
 * policy fields.
 */
export type MerchantAccountSessionCreateRequest = {
    /** Shape $ (Value): string.  Value enum: "upfront", "incremental". */
    "collection_strategy"?: "upfront" | "incremental" | (string & {});
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 6. uniqueItems: true. [] enum:
     * "account_onboarding", "account_management", "payouts", "balances", "tax_documents",
     * "notification_banner". Shape $[] (Value): string. Value enum: "account_onboarding",
     * "account_management", "payouts", "balances", "tax_documents", "notification_banner".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | (string & {})>;
    /** Shape $ (Value): string.  Value enum: "omit", "include". */
    "future_requirements"?: "omit" | "include" | (string & {});
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
 * Shape $ (Value): {@link MerchantAccountSessionCreateRequestInput}. Creates an embedded account
 * session for a non-empty unique set of Flint components. At most one component may use onboarding
 * policy fields.
 */
export type MerchantAccountSessionCreateRequestInput = {
    /** Shape $ (Value): string.  Value enum: "upfront", "incremental". */
    "collection_strategy"?: "upfront" | "incremental";
    /**
     * Shape $ (Value): Array of string. minItems: 1. maxItems: 6. uniqueItems: true. [] enum:
     * "account_onboarding", "account_management", "payouts", "balances", "tax_documents",
     * "notification_banner". Shape $[] (Value): string. Value enum: "account_onboarding",
     * "account_management", "payouts", "balances", "tax_documents", "notification_banner".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner">;
    /** Shape $ (Value): string.  Value enum: "omit", "include". */
    "future_requirements"?: "omit" | "include";
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
        | "representative_tax_id_last_four">;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionEffectivePolicy}. The collection policy applied to
 * a merchant account session: which requirements it targets, how they are collected, and whether
 * future requirements are included.
 */
export type MerchantAccountSessionEffectivePolicy = {
    /** Shape $ (Value): string.  Value enum: "upfront", "incremental". */
    "collection_strategy"?: "upfront" | "incremental" | (string & {});
    /** Shape $ (Value): string.  Value enum: "omit", "include". */
    "future_requirements"?: "omit" | "include" | (string & {});
    /** Shape $ (Value): string.  Value enum: "none", "all", "all_due", "targeted". */
    "targeting": "none" | "all" | "all_due" | "targeted" | (string & {});
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionRefreshRequest}. Refreshes a merchant account
 * session from its signed launch token. No create fields are accepted.
 */
export type MerchantAccountSessionRefreshRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "launch_token": string;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionRefreshRequestInput}. Refreshes a merchant account
 * session from its signed launch token. No create fields are accepted.
 */
export type MerchantAccountSessionRefreshRequestInput = MerchantAccountSessionRefreshRequest;
/**
 * Shape $ (Value): {@link MerchantAccountSessionResponse}. A response containing
 * `MerchantAccountSession` data.
 */
export type MerchantAccountSessionResponse = {
    /**
     * Shape $ (Value): {@link MerchantAccountSession}. A merchant account session: the browser
     * initialization data, allowed components, effective policy, and launch token for embedded
     * account management.
     */
    "data": MerchantAccountSession;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionStripe}. Stripe Connect initialization data for a
 * merchant account session: the account session, publishable key, and authorized components.
 */
export type MerchantAccountSessionStripe = {
    /**
     * Shape $ (Value): {@link DisputeResponseSessionStripeAccountSession}. Account session
     * authority for initializing Stripe Connect in the browser. The account session authority for
     * initializing Stripe Connect in the browser, including the client secret.
     */
    "account_session": DisputeResponseSessionStripeAccountSession;
    /**
     * Shape $ (Value): Array of {@link MerchantAccountSessionStripeComponent}. Authorized Stripe
     * component names and collection options to apply when mounting each component. Shape $[]
     * (Value): {@link MerchantAccountSessionStripeComponent}. One embedded component a merchant
     * account session authorizes, with the collection options to apply to it.
     */
    "components": Array<MerchantAccountSessionStripeComponent>;
    /**
     * Shape $ (Value): string. Stripe publishable key to pass as publishableKey to
     * loadConnectAndInitialize.
     */
    "publishable_key": string;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionStripeCollectionOptions}. Requirement collection
 * options to apply when mounting one embedded component: field breadth, future requirements, and
 * any targeted requirements.
 */
export type MerchantAccountSessionStripeCollectionOptions = {
    /**
     * Shape $ (Value): string. Requirement collection breadth to pass as fields to
     * setCollectionOptions. Value enum: "currently_due", "eventually_due".
     */
    "fields": "currently_due" | "eventually_due" | (string & {});
    /**
     * Shape $ (Value): string. Whether to collect future requirements. Pass this value as
     * futureRequirements to setCollectionOptions. Value enum: "omit", "include".
     */
    "future_requirements": "omit" | "include" | (string & {});
    /**
     * Shape $ (Value): {@link MerchantAccountSessionStripeRequirements}. Targeted requirement
     * collection restriction to pass as requirements to setCollectionOptions. Omitted when
     * collection is not targeted. The Stripe requirement paths to collect exclusively when a
     * session's targeting is `targeted`.
     */
    "requirements"?: MerchantAccountSessionStripeRequirements;
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionStripeComponent}. One embedded component a
 * merchant account session authorizes, with the collection options to apply to it.
 */
export type MerchantAccountSessionStripeComponent = {
    /**
     * Shape $ (Value): {@link MerchantAccountSessionStripeCollectionOptions}. Collection
     * instructions for a policy-aware component. Omitted for other components. Map
     * future_requirements to futureRequirements when calling setCollectionOptions. Requirement
     * collection options to apply when mounting one embedded component: field breadth, future
     * requirements, and any targeted requirements.
     */
    "collection_options"?: MerchantAccountSessionStripeCollectionOptions;
    /**
     * Shape $ (Value): string. Stripe component name authorized by this session. tax_documents
     * uses the Stripe name documents. Convert underscores to hyphens when calling Connect.create.
     * Value enum: "account_onboarding", "account_management", "payouts", "balances", "documents",
     * "notification_banner".
     */
    "component": "account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "documents"
        | "notification_banner"
        | (string & {});
};
/**
 * Shape $ (Value): {@link MerchantAccountSessionStripeRequirements}. The Stripe requirement paths
 * to collect exclusively when a session's targeting is `targeted`.
 */
export type MerchantAccountSessionStripeRequirements = {
    /**
     * Shape $ (Value): Array of string. Stripe requirement paths to collect exclusively when
     * effective_policy.targeting is targeted. They come from the targeted_requirements you sent or
     * from Flint's remediation recommendation. Shape $[] (Value): string.
     */
    "only": Array<string>;
};
export type MerchantAccountSessionsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link MerchantAccountSessionCreateRequestInput}. Creates an embedded
     * account session for a non-empty unique set of Flint components. At most one component may
     * use onboarding policy fields.
     */
    "body": InputValue<MerchantAccountSessionCreateRequestInput>;
};
export type MerchantAccountSessionsRefreshInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link MerchantAccountSessionRefreshRequestInput}. Refreshes a merchant
     * account session from its signed launch token. No create fields are accepted.
     */
    "body": InputValue<MerchantAccountSessionRefreshRequestInput>;
};
/**
 * Shape $ (Value): {@link MerchantBillingBalance}. Current Flint merchant billing balance for one
 * billing account and currency.
 */
export type MerchantBillingBalance = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "available_credit_money": MoneyValue;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): string. Stable identifier for this billing account and currency balance
     * projection.
     */
    "merchant_billing_balance_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp for the balance snapshot. Format: date-time. */
    "observed_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link MerchantBillingBalanceListResponse}. A page of `MerchantBillingBalance`
 * objects.
 */
export type MerchantBillingBalanceListResponse = {
    /**
     * Shape $ (Value): Array of {@link MerchantBillingBalance}. Shape $[] (Value): {@link
     * MerchantBillingBalance}. Current Flint merchant billing balance for one billing account and
     * currency.
     */
    "data": Array<MerchantBillingBalance>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link MerchantBillingBalanceResponse}. A response containing
 * `MerchantBillingBalance` data.
 */
export type MerchantBillingBalanceResponse = {
    /**
     * Shape $ (Value): {@link MerchantBillingBalance}. Current Flint merchant billing balance for
     * one billing account and currency.
     */
    "data": MerchantBillingBalance;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type MerchantBillingBalancesGetInput = {
    /** Shape $ (Value): string. */
    "merchant_billing_balance_id": InputValue<string>;
};
export type MerchantBillingBalancesListInput = {};
export type MerchantBillingEntriesListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "event_fee", "invoice",
     * "custom_domain", "custom_domain_collection", "correction", "credit_issued",
     * "credit_applied", "credit_refunded", "collection", "collection_reversal", "write_off". Shape
     * $[] (Value): string. Value enum: "event_fee", "invoice", "custom_domain",
     * "custom_domain_collection", "correction", "credit_issued", "credit_applied",
     * "credit_refunded", "collection", "collection_reversal", "write_off".
     */
    "type"?: InputValue<Array<"event_fee"
        | "invoice"
        | "custom_domain"
        | "custom_domain_collection"
        | "correction"
        | "credit_issued"
        | "credit_applied"
        | "credit_refunded"
        | "collection"
        | "collection_reversal"
        | "write_off">>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. */
    "payment_intent_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "dispute_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "merchant_billing_invoice_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "balance_transaction_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link MerchantBillingEntry}. An immutable merchant billing charge, credit,
 * collection, correction, or write-off.
 */
export type MerchantBillingEntry = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed change in available billing credit.
     * credit_issued increases it; credit_applied and credit_refunded decrease it. Other entry
     * types do not change it. Signed monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "available_credit_effect_money": MoneyValue;
    /**
     * Shape $ (Value): string. Balance transaction for this collection or collection reversal,
     * when present.
     */
    "balance_transaction_id"?: string;
    /**
     * Shape $ (Value): string. When Flint recorded the entry. Use created_after to pick up new
     * entries, including late arrivals. Format: date-time.
     */
    "created_at": string;
    /** Shape $ (Value): string. Human-readable description of the billing event. */
    "description": string;
    /** Shape $ (Value): string. Related dispute, when the entry is associated with a dispute. */
    "dispute_id"?: string;
    /**
     * Shape $ (Value): string. Event fee category. Present only for event_fee entries. Value enum:
     * "bank_verification", "failed_ach_payment", "ach_dispute", "card_dispute".
     */
    "event_fee_type"?: "bank_verification" | "failed_ach_payment" | "ach_dispute" | "card_dispute" | (string & {});
    /** Shape $ (Value): string. Stable entry ID. Re-reading an entry returns the same values. */
    "merchant_billing_entry_id": string;
    /** Shape $ (Value): string. Related invoice issued by Flint, when applicable. */
    "merchant_billing_invoice_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed outstanding effect minus the available credit
     * effect. Charges and collection_reversal are positive; credit_issued, collection,
     * custom_domain_collection, and write_off are negative; credit_refunded is positive;
     * credit_applied is zero; correction may be positive or negative. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "net_billing_effect_money": MoneyValue;
    /**
     * Shape $ (Value): string. When the billing event happened. An entry can be recorded after
     * entries that occurred later. Format: date-time.
     */
    "occurred_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed change in the amount owed Flint. Charges
     * (event_fee, invoice, custom_domain) and collection_reversal increase it; credit_applied,
     * collection, custom_domain_collection, and write_off decrease it; correction may increase or
     * decrease it. Credit issuance and refund do not change it. Signed monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_effect_money": MoneyValue;
    /**
     * Shape $ (Value): string. Related payment intent, when the entry is associated with a
     * payment.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Entry corrected, credited, collected, reversed, or written off by
     * this entry, when applicable.
     */
    "related_merchant_billing_entry_id"?: string;
    /**
     * Shape $ (Value): string. The billing event represented by this entry. Value enum:
     * "event_fee", "invoice", "custom_domain", "custom_domain_collection", "correction",
     * "credit_issued", "credit_applied", "credit_refunded", "collection", "collection_reversal",
     * "write_off".
     */
    "type": "event_fee"
        | "invoice"
        | "custom_domain"
        | "custom_domain_collection"
        | "correction"
        | "credit_issued"
        | "credit_applied"
        | "credit_refunded"
        | "collection"
        | "collection_reversal"
        | "write_off"
        | (string & {});
};
/**
 * Shape $ (Value): {@link MerchantBillingEntryListResponse}. A page of `MerchantBillingEntry`
 * objects.
 */
export type MerchantBillingEntryListResponse = {
    /**
     * Shape $ (Value): Array of {@link MerchantBillingEntry}. Shape $[] (Value): {@link
     * MerchantBillingEntry}. An immutable merchant billing charge, credit, collection, correction,
     * or write-off.
     */
    "data": Array<MerchantBillingEntry>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link MerchantBillingInvoice}. A Flint invoice for the merchant's Flint
 * subscription.
 */
export type MerchantBillingInvoice = {
    /** Shape $ (Value): string. When Flint created the invoice. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Credit applied to the invoice: the sum of its credit
     * line items. Never more than subtotal_money. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /** Shape $ (Value): string. When payment of the invoice is due. Format: date-time. */
    "due_at": string;
    /** Shape $ (Value): string. Human-readable invoice number. */
    "invoice_number": string;
    /** Shape $ (Value): string. When Flint issued the invoice. Format: date-time. */
    "issued_at"?: string;
    /**
     * Shape $ (Value): Array of {@link MerchantBillingInvoiceLineItem}. Invoice-owned line items.
     * Subscription totals sum to subtotal_money; credit totals sum to credit_money. Shape $[]
     * (Value): {@link MerchantBillingInvoiceLineItem}. One line on a merchant billing invoice,
     * either a subscription charge or a credit, with quantity, unit price, and total.
     */
    "line_items": Array<MerchantBillingInvoiceLineItem>;
    /** Shape $ (Value): string. Stable identifier of the invoice. */
    "merchant_billing_invoice_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Part of total_money Flint still has to collect.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Shape $ (Value): string. When the invoice was paid. Removed if a reversed collection reopens
     * it. Format: date-time.
     */
    "paid_at"?: string;
    /**
     * Shape $ (Value): string. Exclusive invoice billing period end as an RFC 3339 UTC instant.
     * Format: date-time.
     */
    "period_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive invoice billing period start as an RFC 3339 UTC instant.
     * Format: date-time.
     */
    "period_start_at": string;
    /**
     * Shape $ (Value): string. Collection state of the invoice: open, paid, or written_off. Flint
     * issues an invoice as open and marks it paid once collected; a reversed collection returns it
     * to open, and written_off means Flint stopped collecting it. Value enum: "open", "paid",
     * "written_off".
     */
    "status": "open" | "paid" | "written_off" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Sum of the subscription line items, before credit.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. What the invoice charges: subtotal_money minus
     * credit_money. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "total_money": MoneyValue;
    /** Shape $ (Value): string. When the invoice last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): string. When the invoice was voided. Absent on invoices that weren't.
     * Format: date-time.
     */
    "voided_at"?: string;
};
/**
 * Shape $ (Value): {@link MerchantBillingInvoiceLineItem}. One line on a merchant billing invoice,
 * either a subscription charge or a credit, with quantity, unit price, and total.
 */
export type MerchantBillingInvoiceLineItem = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "merchant_billing_invoice_line_item_id": string;
    /** Shape $ (Value): string. Name of the subscription charge or credit. */
    "name": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Unsigned line total, calculated as quantity multiplied
     * by unit_price_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): string. Whether the line adds a subscription charge or applies credit.
     * Value enum: "subscription", "credit".
     */
    "type": "subscription" | "credit" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link MerchantBillingInvoiceListResponse}. A page of `MerchantBillingInvoice`
 * objects.
 */
export type MerchantBillingInvoiceListResponse = {
    /**
     * Shape $ (Value): Array of {@link MerchantBillingInvoice}. Shape $[] (Value): {@link
     * MerchantBillingInvoice}. A Flint invoice for the merchant's Flint subscription.
     */
    "data": Array<MerchantBillingInvoice>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link MerchantBillingInvoiceResponse}. A response containing
 * `MerchantBillingInvoice` data.
 */
export type MerchantBillingInvoiceResponse = {
    /**
     * Shape $ (Value): {@link MerchantBillingInvoice}. A Flint invoice for the merchant's Flint
     * subscription.
     */
    "data": MerchantBillingInvoice;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link MerchantReadiness}. A merchant's readiness to accept payments and
 * receive payouts, with per-capability status and outstanding requirements.
 */
export type MerchantReadiness = {
    /**
     * Shape $ (Value): Array of {@link CapabilityReadiness}. Shape $[] (Value): {@link
     * CapabilityReadiness}. Merchant capability readiness for a payment or money movement
     * capability.
     */
    "capabilities": Array<CapabilityReadiness>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "observed_at": string;
    /**
     * Shape $ (Value): {@link ReadinessAxis}. Readiness for one area of a merchant account, with
     * its `status`, the reason for it, and the actions that would advance it.
     */
    "payments": ReadinessAxis;
    /**
     * Shape $ (Value): {@link ReadinessAxis}. Readiness for one area of a merchant account, with
     * its `status`, the reason for it, and the actions that would advance it.
     */
    "payouts": ReadinessAxis;
    /**
     * Shape $ (Value): {@link ReadinessRequirements}. Account information requirements for a
     * merchant, grouped as currently due, eventually due, past due, and pending verification.
     */
    "requirements": ReadinessRequirements;
};
/** Shape $ (Value): {@link MerchantResponse}. A response containing `Merchant` data. */
export type MerchantResponse = {
    /** Shape $ (Value): {@link Merchant}. The business accepting payments. */
    "data": Merchant;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type MerchantSubscriptionInvoicesGetInput = {
    /** Shape $ (Value): string. */
    "merchant_billing_invoice_id": InputValue<string>;
};
export type MerchantSubscriptionInvoicesListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "open", "paid", "written_off". Shape
     * $[] (Value): string. Value enum: "open", "paid", "written_off".
     */
    "status"?: InputValue<Array<"open" | "paid" | "written_off">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
/** Shape $ (Value): {@link MerchantWebhookEnvelope}. Fields shared by merchant webhook payloads. */
export type MerchantWebhookEnvelope = ({
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
     * Shape $ (Value): string. Value enum: "tax_connection.updated",
     * "customer_deletion_request.processing", "customer_deletion_request.failed",
     * "invoice_delivery_attempt.sent", "invoice_delivery_attempt.failed",
     * "invoice_delivery_attempt.suppressed", "fulfillment.canceled", "fulfillment.failed",
     * "merchant.updated", "product.created", "product.updated", "product.archived",
     * "product_variant.created", "product_variant.updated", "product_variant.archived",
     * "bundle.created", "bundle.updated", "bundle.archived", "category.created",
     * "category.updated", "category.deleted", "modifier_group.created", "modifier_group.updated",
     * "modifier_group.archived", "modifier_set.created", "modifier_set.updated",
     * "modifier_set.archived", "promotion.created", "promotion.updated", "promotion.archived",
     * "promotion_code.created", "promotion_code.updated", "promotion_code.archived",
     * "balance.updated", "balance_transaction.created", "balance_transaction.updated",
     * "checkout_session.partially_paid", "checkout_session.created", "checkout_session.paid",
     * "checkout_session.closed", "checkout_session.expired", "checkout_session.invalidated",
     * "credit_note_allocation.created", "credit_note_allocation.reversed", "credit_note.created",
     * "credit_note.issued", "credit_note.updated", "credit_note.voided", "customer.created",
     * "customer_deletion_request.completed", "customer_deletion_request.rejected",
     * "customer_deletion_request.created", "customer.updated", "customer.deleted",
     * "custom_domain.updated", "custom_domain.archived", "dispute.created", "dispute.lost",
     * "dispute.needs_response", "dispute.prevented", "dispute.updated", "dispute.inquiry_closed",
     * "dispute.won", "fraud_warning.created", "fraud_warning.updated", "gift_card.created",
     * "gift_card.updated", "gift_card_load.created", "gift_card_load.updated",
     * "gift_card_notification.created", "gift_card_notification.updated",
     * "gift_card_redemption.created", "gift_card_redemption.updated",
     * "gift_card_transaction.created", "delivery_rate_callback.archived",
     * "delivery_rate_callback.created", "delivery_rate_callback.deactivated",
     * "delivery_rate_callback.activated", "delivery_rate_callback.updated",
     * "delivery_method.archived", "delivery_method.created", "delivery_method.deactivated",
     * "delivery_method.activated", "delivery_method.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.deactivated",
     * "delivery_location_set.activated", "delivery_location_set.updated",
     * "delivery_profile.archived", "delivery_profile.created", "delivery_profile.deactivated",
     * "delivery_profile.activated", "delivery_profile.updated", "delivery_revocation.created",
     * "delivery_selection.committed", "delivery_zone.archived", "delivery_zone.created",
     * "delivery_zone.deactivated", "delivery_zone.activated", "delivery_zone.updated",
     * "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.credited",
     * "invoice.created", "invoice.issued", "invoice.issue_failed", "invoice.late_fee_due",
     * "invoice.late_fee_assessed", "invoice.late_fee_waived", "invoice.marked_uncollectible",
     * "invoice_manual_payment.created", "invoice_manual_payment.reversed", "invoice.overdue",
     * "invoice.paid", "invoice_payment_attempt.processing", "invoice_payment_attempt.canceled",
     * "invoice_payment_attempt.expired", "invoice_payment_attempt.failed",
     * "invoice_payment_attempt.settled", "invoice.partially_paid", "invoice.partially_refunded",
     * "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent",
     * "invoice.updated", "invoice.voided", "inventory_reservation.action_required",
     * "inventory_count.applied", "inventory_level.updated", "inventory_receipt.created",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_level.shortage_detected",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned",
     * "merchant_billing_balance.updated", "merchant.readiness_updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "order.partially_refunded", "order.closed", "order.created", "fulfillment.completed",
     * "fulfillment.created", "fulfillment_event.created", "package.created", "package.updated",
     * "shipment.created", "shipment.updated", "fulfillment.updated",
     * "order.inventory_exception_created", "order.inventory_exception_resolved",
     * "order.partially_paid", "order.paid", "order.refunded", "order.updated",
     * "payment_intent.expired", "payment_intent.updated", "payment_intent.created",
     * "payment_intent.canceled", "payment_intent.fulfillment_hold_updated",
     * "payment_intent.payment_failed", "payment_intent.processing",
     * "payment_intent.requires_action", "payment_intent.requires_capture",
     * "payment_intent.succeeded", "payment_link.created", "payment_link.updated",
     * "payment_method.archived", "payment_method.failed", "payment_method.activated",
     * "payout.canceled", "payout.created", "payout.failed", "payout.paid", "payout.reversed",
     * "payout.updated", "payout_destination.created", "payout_destination.archived",
     * "payout_destination.disabled", "payout_destination.updated", "payout_settings.updated",
     * "refund.partially_succeeded", "refund.succeeded", "refund.created", "refund.failed",
     * "refund.updated", "report.failed", "report.succeeded", "return.canceled",
     * "return.completed", "return.created", "return.decision_recorded", "return.reopened",
     * "return.updated", "return_disposition.created", "return_disposition.updated",
     * "return_inspection.acceptance_decided", "return_inspection.created",
     * "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded",
     * "return_receipt.verified", "return_resolution.created", "return_resolution.updated",
     * "payment_review.closed", "payment_review.reopened", "payment_review.opened",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.dunning_exhausted", "subscription.past_due",
     * "subscription.paused", "subscription.payment_succeeded",
     * "subscription_payment_retry.created", "subscription_payment_retry.succeeded",
     * "subscription_payment_retry.failed", "subscription.reactivated", "subscription.resumed",
     * "subscription.renewal_upcoming", "subscription.trial_ending", "subscription.plan_changed",
     * "subscription.updated", "subscription.delivery_action_required",
     * "subscription.delivery_pause_upcoming", "subscription.delivery_updated",
     * "subscription.cycle_skipped", "subscription_delivery_migration.completed".
     */
    "event_type": "tax_connection.updated"
        | "customer_deletion_request.processing"
        | "customer_deletion_request.failed"
        | "invoice_delivery_attempt.sent"
        | "invoice_delivery_attempt.failed"
        | "invoice_delivery_attempt.suppressed"
        | "fulfillment.canceled"
        | "fulfillment.failed"
        | "merchant.updated"
        | "product.created"
        | "product.updated"
        | "product.archived"
        | "product_variant.created"
        | "product_variant.updated"
        | "product_variant.archived"
        | "bundle.created"
        | "bundle.updated"
        | "bundle.archived"
        | "category.created"
        | "category.updated"
        | "category.deleted"
        | "modifier_group.created"
        | "modifier_group.updated"
        | "modifier_group.archived"
        | "modifier_set.created"
        | "modifier_set.updated"
        | "modifier_set.archived"
        | "promotion.created"
        | "promotion.updated"
        | "promotion.archived"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "promotion_code.archived"
        | "balance.updated"
        | "balance_transaction.created"
        | "balance_transaction.updated"
        | "checkout_session.partially_paid"
        | "checkout_session.created"
        | "checkout_session.paid"
        | "checkout_session.closed"
        | "checkout_session.expired"
        | "checkout_session.invalidated"
        | "credit_note_allocation.created"
        | "credit_note_allocation.reversed"
        | "credit_note.created"
        | "credit_note.issued"
        | "credit_note.updated"
        | "credit_note.voided"
        | "customer.created"
        | "customer_deletion_request.completed"
        | "customer_deletion_request.rejected"
        | "customer_deletion_request.created"
        | "customer.updated"
        | "customer.deleted"
        | "custom_domain.updated"
        | "custom_domain.archived"
        | "dispute.created"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.inquiry_closed"
        | "dispute.won"
        | "fraud_warning.created"
        | "fraud_warning.updated"
        | "gift_card.created"
        | "gift_card.updated"
        | "gift_card_load.created"
        | "gift_card_load.updated"
        | "gift_card_notification.created"
        | "gift_card_notification.updated"
        | "gift_card_redemption.created"
        | "gift_card_redemption.updated"
        | "gift_card_transaction.created"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.updated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.activated"
        | "delivery_method.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.deactivated"
        | "delivery_location_set.activated"
        | "delivery_location_set.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.deactivated"
        | "delivery_profile.activated"
        | "delivery_profile.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.deactivated"
        | "delivery_zone.activated"
        | "delivery_zone.updated"
        | "invoice.collection_block_resolved"
        | "invoice.collection_blocked"
        | "invoice.credited"
        | "invoice.created"
        | "invoice.issued"
        | "invoice.issue_failed"
        | "invoice.late_fee_due"
        | "invoice.late_fee_assessed"
        | "invoice.late_fee_waived"
        | "invoice.marked_uncollectible"
        | "invoice_manual_payment.created"
        | "invoice_manual_payment.reversed"
        | "invoice.overdue"
        | "invoice.paid"
        | "invoice_payment_attempt.processing"
        | "invoice_payment_attempt.canceled"
        | "invoice_payment_attempt.expired"
        | "invoice_payment_attempt.failed"
        | "invoice_payment_attempt.settled"
        | "invoice.partially_paid"
        | "invoice.partially_refunded"
        | "invoice.refunded"
        | "invoice.reminder_due"
        | "invoice.reopened"
        | "invoice.sent"
        | "invoice.updated"
        | "invoice.voided"
        | "inventory_reservation.action_required"
        | "inventory_count.applied"
        | "inventory_level.updated"
        | "inventory_receipt.created"
        | "inventory_reservation.at_risk"
        | "inventory_reservation.closed"
        | "inventory_reservation.committed"
        | "inventory_reservation.consumed"
        | "inventory_reservation.created"
        | "inventory_reservation.hold_expired"
        | "inventory_reservation.released"
        | "inventory_level.shortage_detected"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "merchant_billing_balance.updated"
        | "merchant.readiness_updated"
        | "merchant_billing_invoice.issued"
        | "merchant_billing_invoice.updated"
        | "order.partially_refunded"
        | "order.closed"
        | "order.created"
        | "fulfillment.completed"
        | "fulfillment.created"
        | "fulfillment_event.created"
        | "package.created"
        | "package.updated"
        | "shipment.created"
        | "shipment.updated"
        | "fulfillment.updated"
        | "order.inventory_exception_created"
        | "order.inventory_exception_resolved"
        | "order.partially_paid"
        | "order.paid"
        | "order.refunded"
        | "order.updated"
        | "payment_intent.expired"
        | "payment_intent.updated"
        | "payment_intent.created"
        | "payment_intent.canceled"
        | "payment_intent.fulfillment_hold_updated"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.requires_capture"
        | "payment_intent.succeeded"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.archived"
        | "payment_method.failed"
        | "payment_method.activated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.paid"
        | "payout.reversed"
        | "payout.updated"
        | "payout_destination.created"
        | "payout_destination.archived"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "refund.partially_succeeded"
        | "refund.succeeded"
        | "refund.created"
        | "refund.failed"
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
        | "payment_review.closed"
        | "payment_review.reopened"
        | "payment_review.opened"
        | "subscription.activated"
        | "subscription.canceled"
        | "subscription.cancellation_scheduled"
        | "subscription.created"
        | "subscription.dunning_exhausted"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription_payment_retry.created"
        | "subscription_payment_retry.succeeded"
        | "subscription_payment_retry.failed"
        | "subscription.reactivated"
        | "subscription.resumed"
        | "subscription.renewal_upcoming"
        | "subscription.trial_ending"
        | "subscription.plan_changed"
        | "subscription.updated"
        | "subscription.delivery_action_required"
        | "subscription.delivery_pause_upcoming"
        | "subscription.delivery_updated"
        | "subscription.cycle_skipped"
        | "subscription_delivery_migration.completed"
        | (string & {});
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /** Shape $ (Value): string.  Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /**
     * Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before
     * 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     */
    "payload_version": number;
    /**
     * Shape $ (Value): object or null. Shape $.id (Required): string. Shape $.idempotency_key
     * (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent
     * none.
     */
    "request": {
        /** Shape $ (Value): string. */
        "id": string;
        /**
         * Shape $ (Value): string. The Idempotency-Key the originating request sent. Absent when
         * it sent none.
         */
        "idempotency_key"?: string;
    }
        | null;
    /**
     * Shape $ (Value): boolean. true for a synthetic event sent from the test-events endpoint,
     * false otherwise.
     */
    "test": boolean;
    /** Shape $ (Value): string. */
    "webhook_event_id": string;
});
export type MerchantsGetInput = {
    /**
     * Shape $ (Value): Array of string. [] enum: "organization". Shape $[] (Value): string. Value
     * enum: "organization".
     */
    "expand"?: InputValue<Array<"organization">>;
};
export type MerchantsUpdateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateMerchantRequestInput}. The request body for: Update merchant.
     */
    "body": InputValue<UpdateMerchantRequestInput>;
};
/**
 * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
 * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on
 * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
 */
export type MetadataMap = Record<string, string>;
/**
 * Shape $ (Value): {@link MetadataPatchRequest}. Changes to a caller-owned metadata map. Omit the
 * field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an
 * empty object makes no change; send null for the whole field to clear all caller-owned metadata.
 * The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1
 * to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total
 * at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of
 * operations is not itself the stored-map limit. Values can't be empty strings, and keys starting
 * with flint_ are reserved for Flint.
 */
export type MetadataPatchRequest = Record<string, string | null>;
/**
 * Shape $ (Value): {@link MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit
 * the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and
 * an empty object makes no change; send null for the whole field to clear all caller-owned
 * metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs.
 * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus
 * values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the
 * number of operations is not itself the stored-map limit. Values can't be empty strings, and keys
 * starting with flint_ are reserved for Flint.
 */
export type MetadataPatchRequestInput = MetadataPatchRequest;
/**
 * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned key-value data for a new or replaced
 * map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
 * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes.
 * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
 * maxProperties: 50.
 */
export type MetadataRequestInput = MetadataMap;
/** Shape $ (Value): {@link Modifier}. A purchasable customization choice. */
export type Modifier = {
    /**
     * Shape $ (Value): string. When the modifier was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity selected by default. Used only when
     * the choice is available and selected_by_default is true. A modifier set can override this
     * value; fractional quantities are not supported. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64.
     */
    "default_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. Identifier of the group that owns this modifier. For an inline
     * group, read the group through its modifier set.
     */
    "modifier_group_id"?: string;
    /**
     * Shape $ (Value): string. Stable identifier of the modifier. In a replacement request,
     * include it to retain a modifier or omit it to create one.
     */
    "modifier_id": string;
    /** Shape $ (Value): string. Name of the choice shown to buyers. */
    "name": string;
    /**
     * Shape $ (Value): integer. Display position of the choice within its group; lower values
     * appear first. Format: int32.
     */
    "position": number;
    /**
     * Shape $ (Value): boolean. Whether this choice is selected when the buyer has not supplied
     * selections for the group. A modifier set can override this value; unavailable choices are
     * never selected by default.
     */
    "selected_by_default": boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment": boolean;
    /** Shape $ (Value): boolean. Whether this modifier appears on buyer receipts. */
    "show_on_receipt": boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier. Only active modifiers can be
     * offered to buyers. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): boolean. Whether this modifier's price is taxable. A modifier set can
     * override this value.
     */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount added to the item's unit price for each unit of
     * this modifier. A modifier set can override this value. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. When the modifier last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at"?: string;
};
/** Shape $ (Value): {@link ModifierGroup}. A group of choices that customize an item. */
export type ModifierGroup = {
    /**
     * Shape $ (Value): boolean. Whether buyers can select more than one unit of a list modifier.
     */
    "allow_quantities": boolean;
    /**
     * Shape $ (Value): string. When the modifier group was created, as an RFC3339 timestamp.
     * Format: date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): integer string. Maximum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "max_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Maximum number of distinct modifiers buyers can select from a list
     * group. Omit it for no limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer string. Maximum combined whole-number quantity across selected list
     * modifiers; fractional quantities are not supported. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64.
     */
    "max_total_quantity"?: `${bigint}`;
    /** Shape $ (Value): string. Identifier of the merchant that owns this modifier group. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings.
     * Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written
     * through the public API. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): integer string. Minimum whole-number quantity for each selected list
     * modifier when allow_quantities is true; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "min_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer. Minimum number of distinct modifiers buyers must select from a
     * list group. Omit it to require no selections. A modifier set can override this value.
     * Format: int32.
     */
    "min_selected"?: number;
    /**
     * Shape $ (Value): string. Stable identifier of the modifier group. For a group a modifier set
     * owns (`source: inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
     * `/v1/modifier-groups` doesn't return it.
     */
    "modifier_group_id": string;
    /**
     * Shape $ (Value): string. Whether buyers choose from a list of modifiers or enter text. On
     * create, inferred as text when text configuration is supplied, otherwise list. Value enum:
     * "list", "text".
     */
    "modifier_group_type": "list" | "text" | (string & {});
    /**
     * Shape $ (Value): Array of {@link Modifier}. Choices in a list group. Only active modifiers
     * whose set override's available is not false are offered to buyers. Text groups do not have
     * choices. Shape $[] (Value): {@link Modifier}. A purchasable customization choice.
     */
    "modifiers": Array<Modifier>;
    /** Shape $ (Value): string. Name of the modifier group shown to buyers. */
    "name": string;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear in fulfillment details
     * unless overridden for a modifier set.
     */
    "show_on_fulfillment": boolean;
    /**
     * Shape $ (Value): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set.
     */
    "show_on_receipt": boolean;
    /**
     * Shape $ (Value): string. Lifecycle status of the modifier group. Only active groups can be
     * offered to buyers; archived groups remain readable and cannot be edited. Value enum:
     * "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): {@link TextModifierConfig}. Text entry rules for a text group. Use
     * text.required to require a value; list groups use min_selected instead. Settings for a text
     * modifier group: whether input is required or multiline, and its length limits.
     */
    "text"?: TextModifierConfig;
    /**
     * Shape $ (Value): string. When the modifier group or its modifiers last changed, as an
     * RFC3339 timestamp. Format: date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Version of the modifier group and its modifiers. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link ModifierGroupListResponse}. A page of `ModifierGroup` objects. */
export type ModifierGroupListResponse = {
    /**
     * Shape $ (Value): Array of {@link ModifierGroup}. Modifier groups matching the request
     * filters for this page. Shape $[] (Value): {@link ModifierGroup}. A group of choices that
     * customize an item.
     */
    "data": Array<ModifierGroup>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Response metadata, including API version, trace
     * identifier, and warnings when present. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Pass this token as page_token to read the next page with the same
     * filters. Absent when there are no more results.
     */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting Flint
     * support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link ModifierGroupResponse}. A response containing `ModifierGroup` data. */
export type ModifierGroupResponse = {
    /**
     * Shape $ (Value): {@link ModifierGroup}. The modifier group returned by this operation. A
     * group of choices that customize an item.
     */
    "data": ModifierGroup;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Response metadata, including API version, trace
     * identifier, and warnings when present. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting Flint
     * support. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ModifierGroupsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateModifierGroupRequestInput}. The request body for: Create
     * modifier group.
     */
    "body": InputValue<CreateModifierGroupRequestInput>;
};
export type ModifierGroupsGetInput = {
    /** Shape $ (Value): string. */
    "modifier_group_id": InputValue<string>;
};
export type ModifierGroupsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "list", "text". Shape $[] (Value):
     * string. Value enum: "list", "text".
     */
    "modifier_group_type"?: InputValue<Array<"list" | "text">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at". */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
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
};
export type ModifierGroupsRemoveInput = {
    /** Shape $ (Value): string. */
    "modifier_group_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
