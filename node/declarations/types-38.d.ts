import type { MerchantSignup, Merchant, MerchantReadiness } from './types-37.js';
import type { ResponseMeta } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { CreateMerchantSignupRequestInput, CreateModifierGroupRequestInput } from './types-10.js';
import type { VerifyMerchantSignupRequestInput } from './types-69.js';
import type { UpdateMerchantRequestInput, UpdateModifierGroupRequestInput } from './types-67.js';
import type { Address } from './types-0.js';
import type { ImageAttachment, InlineModifierGroupRequest, InlineModifierGroupRequestInput } from './types-28.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { TextModifierConfig } from './types-65.js';
import type { DisputesAcceptParams } from './types-24.js';
/** A response containing `MerchantSignup` data. */
export type MerchantSignupResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A platform's request to
     * create a merchant for an owner, who confirms it with a code Flint emails them. Once
     * verified, it is the record of the owner's consent, kept for as long as the merchant exists.
     */
    "data": MerchantSignup;
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
 * Flint's merchant terms the owner accepts by entering the code, fixed when the signup was
 * created.
 */
export type MerchantSignupTerms = {
    /** Where the terms are published. Link to it beside the checkbox in your form. */
    "url": string;
    /** The terms version. Send it as `terms_acceptance.merchant_terms_version` on verify. */
    "version": string;
};
/**
 * The owner's acceptance of Flint's merchant terms, recorded at verify. Flint also stores the IP
 * address and user agent you reported; they aren't returned.
 */
export type MerchantSignupTermsAcceptance = {
    /** When the owner accepted the terms. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "accepted_at": string;
    /** The terms version accepted. */
    "merchant_terms_version": string;
};
/**
 * Your statement that the owner ticked Flint's terms checkbox in your form, with Flint's wording.
 * The platform terms oblige you to show it and to report real values.
 */
export type MerchantSignupTermsAcceptanceRequest = {
    /**
     * The owner's browser IP address, IPv4 or IPv6. Request logs redact it. minLength: 2.
     * maxLength: 64.
     */
    "ip_address": string;
    /** Must equal the signup's `merchant_terms.version`. minLength: 1. */
    "merchant_terms_version": string;
    /**
     * The owner's browser user agent, 1 to 1,024 characters. Request logs redact it. minLength: 1.
     * maxLength: 1024.
     */
    "user_agent": string;
};
/**
 * Your statement that the owner ticked Flint's terms checkbox in your form, with Flint's wording.
 * The platform terms oblige you to show it and to report real values.
 */
export type MerchantSignupTermsAcceptanceRequestInput = MerchantSignupTermsAcceptanceRequest;
/**
 * The request body for: Cancel a merchant signup; Mint new authorization codes for a merchant
 * signup; Send a new merchant signup code.
 */
export type MerchantSignupVersionRequestInput = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/**
 * A completed merchant signup with the authorization codes to exchange for its grants' tokens. A
 * platform's request to create a merchant for an owner, who confirms it with a code Flint emails
 * them. Once verified, it is the record of the owner's consent, kept for as long as the merchant
 * exists.
 */
export type MerchantSignupWithAuthorizationCodes = ({})
    & (Exclude<MerchantSignup & object, readonly unknown[]>)
    & ({
    /**
     * When the codes in this response expire, 5 minutes after they were minted. Present with them.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "authorization_codes_expire_at"?: string;
    /**
     * Exchange it at POST /v1/oauth/token for the live grant's tokens, with the code_verifier for
     * the signup's code_challenge and without redirect_uri. Present when the signup installed in
     * live mode and the code was minted by this request. Single use. An idempotent replay
     * withholds it: mint new codes with rotate-authorization-codes.
     */
    "live_authorization_code"?: string;
    /**
     * Exchange it at POST /v1/oauth/token for the test grant's tokens, with the code_verifier for
     * the signup's code_challenge and without redirect_uri. Present when the signup installed in
     * test mode and the code was minted by this request. Single use. An idempotent replay
     * withholds it: mint new codes with rotate-authorization-codes.
     */
    "test_authorization_code"?: string;
});
/** A response containing `MerchantSignupWithAuthorizationCodes` data. */
export type MerchantSignupWithAuthorizationCodesResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A completed merchant
     * signup with the authorization codes to exchange for its grants' tokens. A platform's request
     * to create a merchant for an owner, who confirms it with a code Flint emails them. Once
     * verified, it is the record of the owner's consent, kept for as long as the merchant exists.
     */
    "data": MerchantSignupWithAuthorizationCodes;
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
export type MerchantSignupsCancelParams = (InputValue<MerchantSignupVersionRequestInput>);
export type MerchantSignupsCreateParams = (InputValue<CreateMerchantSignupRequestInput>);
export type MerchantSignupsGetParams = {};
export type MerchantSignupsListParams = {
    /**
     * Return signups of this partner app. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Return signups with this external_reference_id. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Return signups for this owner email, compared in lower case. Format: email. Example:
     * "buyer@example.com".
     */
    "owner_email"?: InputValue<string>;
    /**
     * Return signups with any of these statuses. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "pending", "completed", "expired", "canceled". Value enum:
     * "pending", "completed", "expired", "canceled". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "pending", "completed", "expired", "canceled". anyOf[1][] (Value): string. Value
     * enum: "pending", "completed", "expired", "canceled". anyOf[2] (Value): string. Value enum:
     * "pending", "completed", "expired", "canceled".
     */
    "status"?: InputValue<("pending" | "completed" | "expired" | "canceled")
        | readonly ("pending" | "completed" | "expired" | "canceled")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
};
export type MerchantSignupsResendCodeParams = MerchantSignupsCancelParams;
export type MerchantSignupsRotateAuthorizationCodesParams = MerchantSignupsCancelParams;
export type MerchantSignupsVerifyParams = (InputValue<VerifyMerchantSignupRequestInput>);
export type MerchantUpdateParams = (InputValue<UpdateMerchantRequestInput>)
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
export type MerchantUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "address"?: Address;
            "api_version"?: string;
            "api_version_changed_at"?: string;
            "api_version_pinned_at"?: string;
            "api_version_previous"?: string;
            "api_version_rollback_expires_at"?: string;
            "business_name"?: string;
            "business_type"?: "individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {});
            "created_at": string;
            "email": string | null;
            "icon"?: ImageAttachment;
            "logo"?: ImageAttachment;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "phone"?: string;
            "readiness": MerchantReadiness;
            "status": "active" | "suspended" | "restricted" | "closed" | (string & {});
            "support_email"?: string;
            "support_phone"?: string;
            "support_url"?: string;
            "timezone"?: string;
            "updated_at": string;
            "version": number;
            "website_url"?: string;
        };
        "previous_attributes"?: Partial<Merchant>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "merchant.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "address"?: Address;
            "api_version"?: string;
            "api_version_changed_at"?: string;
            "api_version_pinned_at"?: string;
            "api_version_previous"?: string;
            "api_version_rollback_expires_at"?: string;
            "business_name"?: string;
            "business_type"?: "individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {});
            "created_at": string;
            "email": string | null;
            "icon"?: ImageAttachment;
            "logo"?: ImageAttachment;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "phone"?: string;
            "readiness": MerchantReadiness;
            "status": "active" | "suspended" | "restricted" | "closed" | (string & {});
            "support_email"?: string;
            "support_phone"?: string;
            "support_url"?: string;
            "timezone"?: string;
            "updated_at": string;
            "version": number;
            "website_url"?: string;
        };
        "previous_attributes"?: Partial<Merchant>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "merchant.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "merchant.updated";
});
/**
 * The `merchant.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type MerchantUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `banners`. object.address (Optional): {@link Address}. The merchant's business
     * address. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     * object.api_version (Optional): string. Default API version for requests without a
     * Flint-Version header. Shared across live and test environments.
     * object.api_version_changed_at (Optional): string. When the merchant's default API version
     * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.api_version_pinned_at (Optional): string. When the merchant's default API version was
     * first set. Format: date-time. Example: "2026-08-02T16:00:00Z". object.api_version_previous
     * (Optional): string. Previous API version, present while a supported rollback is available.
     * object.api_version_rollback_expires_at (Optional): string. When the 72-hour rollback offer
     * expires. Explicit changes to any supported version remain available afterward. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.business_name (Optional): string.
     * Business name buyers see on checkout, payment links, and receipts. Once the merchant starts
     * verification, it stays in sync with the business name on the live Stripe account: a change
     * on either side applies, and the latest change wins. object.business_type (Optional): string.
     * Merchant's business type. - `other`: A business type Flint does not map yet. Value enum:
     * "individual", "company", "non_profit", "government_entity", "other". object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.email (Required): string or null. The account's contact email address. A new account
     * starts with the sign-up email. `null` when none is set. object.icon (Optional): {@link
     * ImageAttachment}. A square image, at least 128 by 128 pixels, shown where the store needs a
     * small mark: browser tabs and compact headers. An image attached to a resource, with its
     * display properties and attachment metadata. object.logo (Optional): {@link ImageAttachment}.
     * The merchant's public brand mark. An image attached to a resource, with its display
     * properties and attachment metadata. object.merchant_id (Required): string. Stable identifier
     * of the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional):
     * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
     * and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.phone
     * (Optional): string. The account's contact phone number, in international format such as
     * +12125551234. object.readiness (Required): {@link MerchantReadiness}. Whether the merchant
     * can accept payments and receive payouts, and what is still needed. A merchant's readiness to
     * accept payments and receive payouts, with per-capability status and outstanding
     * requirements. object.status (Required): string. Whether Flint lets the account operate.
     * `readiness` says whether payments and payouts are available. Value enum: "active",
     * "suspended", "restricted", "closed". object.support_email (Optional): string. Support email
     * address shown to buyers, for example on receipts and checkout. object.support_phone
     * (Optional): string. Support phone number shown to buyers, in international format such as
     * +12125551234. object.support_url (Optional): string. Support page shown to buyers.
     * object.timezone (Optional): string. Business IANA time zone, such as America/New_York. Used
     * for invoice deadlines, new locations, notifications, and reporting when a request omits its
     * time zone. Omitted when unset; UTC then applies. Existing resources keep their saved time
     * zone. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Merchant version. Profile,
     * status, and API version changes advance this version, including business name and business
     * type changes synced from the payment provider. Readiness updates alone do not. Format:
     * int64. minimum: 1. object.website_url (Optional): string. The business's website.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `banners`.
         * address (Optional): {@link Address}. The merchant's business address. A postal address.
         * Every address has country. Addresses Flint checked as complete (customer and saved
         * addresses, merchant, location, invoice, order delivery destination, tax identity,
         * fulfillment recipient and pickup addresses) always have line1 and city, and US ones
         * always have state and postal_code. Delivery quote destinations, buyer locations and
         * postal-code tax locations hold only what was provided, such as postal_code and country.
         * api_version (Optional): string. Default API version for requests without a Flint-Version
         * header. Shared across live and test environments. api_version_changed_at (Optional):
         * string. When the merchant's default API version last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". api_version_pinned_at (Optional): string. When the
         * merchant's default API version was first set. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". api_version_previous (Optional): string. Previous API version,
         * present while a supported rollback is available. api_version_rollback_expires_at
         * (Optional): string. When the 72-hour rollback offer expires. Explicit changes to any
         * supported version remain available afterward. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". business_name (Optional): string. Business name buyers see on
         * checkout, payment links, and receipts. Once the merchant starts verification, it stays
         * in sync with the business name on the live Stripe account: a change on either side
         * applies, and the latest change wins. business_type (Optional): string. Merchant's
         * business type. - `other`: A business type Flint does not map yet. Value enum:
         * "individual", "company", "non_profit", "government_entity", "other". created_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". email (Required): string or null. The account's contact email
         * address. A new account starts with the sign-up email. `null` when none is set. icon
         * (Optional): {@link ImageAttachment}. A square image, at least 128 by 128 pixels, shown
         * where the store needs a small mark: browser tabs and compact headers. An image attached
         * to a resource, with its display properties and attachment metadata. logo (Optional):
         * {@link ImageAttachment}. The merchant's public brand mark. An image attached to a
         * resource, with its display properties and attachment metadata. merchant_id (Required):
         * string. Stable identifier of the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. phone (Optional): string. The account's contact phone
         * number, in international format such as +12125551234. readiness (Required): {@link
         * MerchantReadiness}. Whether the merchant can accept payments and receive payouts, and
         * what is still needed. A merchant's readiness to accept payments and receive payouts,
         * with per-capability status and outstanding requirements. status (Required): string.
         * Whether Flint lets the account operate. `readiness` says whether payments and payouts
         * are available. Value enum: "active", "suspended", "restricted", "closed". support_email
         * (Optional): string. Support email address shown to buyers, for example on receipts and
         * checkout. support_phone (Optional): string. Support phone number shown to buyers, in
         * international format such as +12125551234. support_url (Optional): string. Support page
         * shown to buyers. timezone (Optional): string. Business IANA time zone, such as
         * America/New_York. Used for invoice deadlines, new locations, notifications, and
         * reporting when a request omits its time zone. Omitted when unset; UTC then applies.
         * Existing resources keep their saved time zone. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Merchant version. Profile, status, and API version changes advance this
         * version, including business name and business type changes synced from the payment
         * provider. Readiness updates alone do not. Format: int64. minimum: 1. website_url
         * (Optional): string. The business's website.
         */
        "object": {
            /**
             * The merchant's business address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "address"?: Address;
            /**
             * Default API version for requests without a Flint-Version header. Shared across live
             * and test environments.
             */
            "api_version"?: string;
            /**
             * When the merchant's default API version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "api_version_changed_at"?: string;
            /**
             * When the merchant's default API version was first set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "api_version_pinned_at"?: string;
            /** Previous API version, present while a supported rollback is available. */
            "api_version_previous"?: string;
            /**
             * When the 72-hour rollback offer expires. Explicit changes to any supported version
             * remain available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "api_version_rollback_expires_at"?: string;
            /**
             * Business name buyers see on checkout, payment links, and receipts. Once the merchant
             * starts verification, it stays in sync with the business name on the live Stripe
             * account: a change on either side applies, and the latest change wins.
             */
            "business_name"?: string;
            /**
             * Merchant's business type. - `other`: A business type Flint does not map yet. Value
             * enum: "individual", "company", "non_profit", "government_entity", "other".
             */
            "business_type"?: "individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The account's contact email address. A new account starts with the sign-up email.
             * `null` when none is set.
             */
            "email": string | null;
            /**
             * A square image, at least 128 by 128 pixels, shown where the store needs a small
             * mark: browser tabs and compact headers. An image attached to a resource, with its
             * display properties and attachment metadata.
             */
            "icon"?: ImageAttachment;
            /**
             * The merchant's public brand mark. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "logo"?: ImageAttachment;
            /** Stable identifier of the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** The account's contact phone number, in international format such as +12125551234. */
            "phone"?: string;
            /**
             * Whether the merchant can accept payments and receive payouts, and what is still
             * needed. A merchant's readiness to accept payments and receive payouts, with
             * per-capability status and outstanding requirements.
             */
            "readiness": MerchantReadiness;
            /**
             * Whether Flint lets the account operate. `readiness` says whether payments and
             * payouts are available. Value enum: "active", "suspended", "restricted", "closed".
             */
            "status": "active" | "suspended" | "restricted" | "closed" | (string & {});
            /** Support email address shown to buyers, for example on receipts and checkout. */
            "support_email"?: string;
            /**
             * Support phone number shown to buyers, in international format such as +12125551234.
             */
            "support_phone"?: string;
            /** Support page shown to buyers. */
            "support_url"?: string;
            /**
             * Business IANA time zone, such as America/New_York. Used for invoice deadlines, new
             * locations, notifications, and reporting when a request omits its time zone. Omitted
             * when unset; UTC then applies. Existing resources keep their saved time zone.
             */
            "timezone"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Merchant version. Profile, status, and API version changes advance this version,
             * including business name and business type changes synced from the payment provider.
             * Readiness updates alone do not. Format: int64. minimum: 1.
             */
            "version": number;
            /** The business's website. */
            "website_url"?: string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Merchant>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "merchant.updated". */
    "event_type"?: "merchant.updated";
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
 * The `merchant.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type MerchantUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `banners`. object.address (Optional): {@link Address}. The merchant's business
     * address. A postal address. Every address has country. Addresses Flint checked as complete
     * (customer and saved addresses, merchant, location, invoice, order delivery destination, tax
     * identity, fulfillment recipient and pickup addresses) always have line1 and city, and US
     * ones always have state and postal_code. Delivery quote destinations, buyer locations and
     * postal-code tax locations hold only what was provided, such as postal_code and country.
     * object.api_version (Optional): string. Default API version for requests without a
     * Flint-Version header. Shared across live and test environments.
     * object.api_version_changed_at (Optional): string. When the merchant's default API version
     * last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.api_version_pinned_at (Optional): string. When the merchant's default API version was
     * first set. Format: date-time. Example: "2026-08-02T16:00:00Z". object.api_version_previous
     * (Optional): string. Previous API version, present while a supported rollback is available.
     * object.api_version_rollback_expires_at (Optional): string. When the 72-hour rollback offer
     * expires. Explicit changes to any supported version remain available afterward. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.business_name (Optional): string.
     * Business name buyers see on checkout, payment links, and receipts. Once the merchant starts
     * verification, it stays in sync with the business name on the live Stripe account: a change
     * on either side applies, and the latest change wins. object.business_type (Optional): string.
     * Merchant's business type. - `other`: A business type Flint does not map yet. Value enum:
     * "individual", "company", "non_profit", "government_entity", "other". object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.email (Required): string or null. The account's contact email address. A new account
     * starts with the sign-up email. `null` when none is set. object.icon (Optional): {@link
     * ImageAttachment}. A square image, at least 128 by 128 pixels, shown where the store needs a
     * small mark: browser tabs and compact headers. An image attached to a resource, with its
     * display properties and attachment metadata. object.logo (Optional): {@link ImageAttachment}.
     * The merchant's public brand mark. An image attached to a resource, with its display
     * properties and attachment metadata. object.merchant_id (Required): string. Stable identifier
     * of the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional):
     * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
     * and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.phone
     * (Optional): string. The account's contact phone number, in international format such as
     * +12125551234. object.readiness (Required): {@link MerchantReadiness}. Whether the merchant
     * can accept payments and receive payouts, and what is still needed. A merchant's readiness to
     * accept payments and receive payouts, with per-capability status and outstanding
     * requirements. object.status (Required): string. Whether Flint lets the account operate.
     * `readiness` says whether payments and payouts are available. Value enum: "active",
     * "suspended", "restricted", "closed". object.support_email (Optional): string. Support email
     * address shown to buyers, for example on receipts and checkout. object.support_phone
     * (Optional): string. Support phone number shown to buyers, in international format such as
     * +12125551234. object.support_url (Optional): string. Support page shown to buyers.
     * object.timezone (Optional): string. Business IANA time zone, such as America/New_York. Used
     * for invoice deadlines, new locations, notifications, and reporting when a request omits its
     * time zone. Omitted when unset; UTC then applies. Existing resources keep their saved time
     * zone. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Merchant version. Profile,
     * status, and API version changes advance this version, including business name and business
     * type changes synced from the payment provider. Readiness updates alone do not. Format:
     * int64. minimum: 1. object.website_url (Optional): string. The business's website.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `banners`.
         * address (Optional): {@link Address}. The merchant's business address. A postal address.
         * Every address has country. Addresses Flint checked as complete (customer and saved
         * addresses, merchant, location, invoice, order delivery destination, tax identity,
         * fulfillment recipient and pickup addresses) always have line1 and city, and US ones
         * always have state and postal_code. Delivery quote destinations, buyer locations and
         * postal-code tax locations hold only what was provided, such as postal_code and country.
         * api_version (Optional): string. Default API version for requests without a Flint-Version
         * header. Shared across live and test environments. api_version_changed_at (Optional):
         * string. When the merchant's default API version last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". api_version_pinned_at (Optional): string. When the
         * merchant's default API version was first set. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". api_version_previous (Optional): string. Previous API version,
         * present while a supported rollback is available. api_version_rollback_expires_at
         * (Optional): string. When the 72-hour rollback offer expires. Explicit changes to any
         * supported version remain available afterward. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". business_name (Optional): string. Business name buyers see on
         * checkout, payment links, and receipts. Once the merchant starts verification, it stays
         * in sync with the business name on the live Stripe account: a change on either side
         * applies, and the latest change wins. business_type (Optional): string. Merchant's
         * business type. - `other`: A business type Flint does not map yet. Value enum:
         * "individual", "company", "non_profit", "government_entity", "other". created_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". email (Required): string or null. The account's contact email
         * address. A new account starts with the sign-up email. `null` when none is set. icon
         * (Optional): {@link ImageAttachment}. A square image, at least 128 by 128 pixels, shown
         * where the store needs a small mark: browser tabs and compact headers. An image attached
         * to a resource, with its display properties and attachment metadata. logo (Optional):
         * {@link ImageAttachment}. The merchant's public brand mark. An image attached to a
         * resource, with its display properties and attachment metadata. merchant_id (Required):
         * string. Stable identifier of the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. phone (Optional): string. The account's contact phone
         * number, in international format such as +12125551234. readiness (Required): {@link
         * MerchantReadiness}. Whether the merchant can accept payments and receive payouts, and
         * what is still needed. A merchant's readiness to accept payments and receive payouts,
         * with per-capability status and outstanding requirements. status (Required): string.
         * Whether Flint lets the account operate. `readiness` says whether payments and payouts
         * are available. Value enum: "active", "suspended", "restricted", "closed". support_email
         * (Optional): string. Support email address shown to buyers, for example on receipts and
         * checkout. support_phone (Optional): string. Support phone number shown to buyers, in
         * international format such as +12125551234. support_url (Optional): string. Support page
         * shown to buyers. timezone (Optional): string. Business IANA time zone, such as
         * America/New_York. Used for invoice deadlines, new locations, notifications, and
         * reporting when a request omits its time zone. Omitted when unset; UTC then applies.
         * Existing resources keep their saved time zone. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Merchant version. Profile, status, and API version changes advance this
         * version, including business name and business type changes synced from the payment
         * provider. Readiness updates alone do not. Format: int64. minimum: 1. website_url
         * (Optional): string. The business's website.
         */
        "object": {
            /**
             * The merchant's business address. A postal address. Every address has country.
             * Addresses Flint checked as complete (customer and saved addresses, merchant,
             * location, invoice, order delivery destination, tax identity, fulfillment recipient
             * and pickup addresses) always have line1 and city, and US ones always have state and
             * postal_code. Delivery quote destinations, buyer locations and postal-code tax
             * locations hold only what was provided, such as postal_code and country.
             */
            "address"?: Address;
            /**
             * Default API version for requests without a Flint-Version header. Shared across live
             * and test environments.
             */
            "api_version"?: string;
            /**
             * When the merchant's default API version last changed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "api_version_changed_at"?: string;
            /**
             * When the merchant's default API version was first set. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "api_version_pinned_at"?: string;
            /** Previous API version, present while a supported rollback is available. */
            "api_version_previous"?: string;
            /**
             * When the 72-hour rollback offer expires. Explicit changes to any supported version
             * remain available afterward. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "api_version_rollback_expires_at"?: string;
            /**
             * Business name buyers see on checkout, payment links, and receipts. Once the merchant
             * starts verification, it stays in sync with the business name on the live Stripe
             * account: a change on either side applies, and the latest change wins.
             */
            "business_name"?: string;
            /**
             * Merchant's business type. - `other`: A business type Flint does not map yet. Value
             * enum: "individual", "company", "non_profit", "government_entity", "other".
             */
            "business_type"?: "individual" | "company" | "non_profit" | "government_entity" | "other" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The account's contact email address. A new account starts with the sign-up email.
             * `null` when none is set.
             */
            "email": string | null;
            /**
             * A square image, at least 128 by 128 pixels, shown where the store needs a small
             * mark: browser tabs and compact headers. An image attached to a resource, with its
             * display properties and attachment metadata.
             */
            "icon"?: ImageAttachment;
            /**
             * The merchant's public brand mark. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "logo"?: ImageAttachment;
            /** Stable identifier of the merchant. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /** The account's contact phone number, in international format such as +12125551234. */
            "phone"?: string;
            /**
             * Whether the merchant can accept payments and receive payouts, and what is still
             * needed. A merchant's readiness to accept payments and receive payouts, with
             * per-capability status and outstanding requirements.
             */
            "readiness": MerchantReadiness;
            /**
             * Whether Flint lets the account operate. `readiness` says whether payments and
             * payouts are available. Value enum: "active", "suspended", "restricted", "closed".
             */
            "status": "active" | "suspended" | "restricted" | "closed" | (string & {});
            /** Support email address shown to buyers, for example on receipts and checkout. */
            "support_email"?: string;
            /**
             * Support phone number shown to buyers, in international format such as +12125551234.
             */
            "support_phone"?: string;
            /** Support page shown to buyers. */
            "support_url"?: string;
            /**
             * Business IANA time zone, such as America/New_York. Used for invoice deadlines, new
             * locations, notifications, and reporting when a request omits its time zone. Omitted
             * when unset; UTC then applies. Existing resources keep their saved time zone.
             */
            "timezone"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Merchant version. Profile, status, and API version changes advance this version,
             * including business name and business type changes synced from the payment provider.
             * Readiness updates alone do not. Format: int64. minimum: 1.
             */
            "version": number;
            /** The business's website. */
            "website_url"?: string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Merchant>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "merchant.updated". */
    "event_type"?: "merchant.updated";
});
/** Fields shared by merchant webhook payloads. */
export type MerchantWebhookEnvelope = ({
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
     * "merchant".
     */
    "event_source": "merchant" | (string & {});
    /**
     * The resource change or condition this event announces. Value enum: "api_key.created",
     * "api_key.updated", "api_key.revoked", "test_clock.created", "test_clock.advancing",
     * "test_clock.ready", "test_clock.failed", "test_clock.archived", "tax_connection.updated",
     * "customer_deletion_request.processing", "customer_deletion_request.failed",
     * "invoice_delivery_attempt.sent", "invoice_delivery_attempt.failed",
     * "invoice_delivery_attempt.suppressed", "fulfillment.canceled", "fulfillment.failed",
     * "merchant.updated", "product.created", "product.updated", "product.archived",
     * "product_variant.created", "product_variant.updated", "product_variant.archived",
     * "bundle.created", "bundle.updated", "bundle.archived", "price_list.created",
     * "price_list.updated", "price_list.archived", "reader.created", "reader.updated",
     * "reader.archived", "category.created", "category.updated", "category.deleted",
     * "modifier_group.created", "modifier_group.updated", "modifier_group.archived",
     * "modifier_set.created", "modifier_set.updated", "modifier_set.archived",
     * "promotion.created", "promotion.updated", "promotion.archived", "promotion_code.created",
     * "promotion_code.updated", "promotion_code.archived", "balance.updated",
     * "balance_transaction.created", "balance_transaction.updated",
     * "checkout_session.partially_paid", "checkout_session.created", "checkout_session.updated",
     * "checkout_session.paid", "checkout_session.closed", "checkout_session.expired",
     * "checkout_session.invalidated", "credit_note_allocation.created",
     * "credit_note_allocation.reversed", "credit_note.created", "credit_note.issued",
     * "credit_note.updated", "credit_note.voided", "customer_email_preferences.updated",
     * "customer.created", "customer_deletion_request.completed",
     * "customer_deletion_request.rejected", "customer_deletion_request.created",
     * "customer.updated", "customer.deleted", "custom_domain.updated", "custom_domain.archived",
     * "dispute.created", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.inquiry_closed", "dispute.won", "fraud_warning.created",
     * "fraud_warning.updated", "ticket.created", "ticket.voided", "ticket.checked_in",
     * "ticket.updated", "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created",
     * "delivery_rate_callback.archived", "tax_calculation_callback.archived",
     * "delivery_rate_callback.created", "tax_calculation_callback.created",
     * "delivery_rate_callback.deactivated", "tax_calculation_callback.deactivated",
     * "delivery_rate_callback.activated", "tax_calculation_callback.activated",
     * "delivery_rate_callback.updated", "tax_calculation_callback.updated",
     * "delivery_method.archived", "delivery_method.created", "delivery_method.deactivated",
     * "delivery_method.activated", "delivery_method.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_profile.archived", "delivery_profile.created", "delivery_profile.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "invoice.collection_block_resolved",
     * "invoice.collection_blocked", "invoice.credited", "invoice.created", "invoice.issued",
     * "invoice.issue_failed", "invoice.late_fee_due", "invoice.late_fee_assessed",
     * "invoice.late_fee_waived", "invoice.marked_uncollectible", "invoice_manual_payment.created",
     * "invoice_manual_payment.reversed", "invoice.overdue", "invoice.paid",
     * "invoice_payment_attempt.processing", "invoice_payment_attempt.canceled",
     * "invoice_payment_attempt.expired", "invoice_payment_attempt.failed",
     * "invoice_payment_attempt.succeeded", "invoice.partially_paid", "invoice.partially_refunded",
     * "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent",
     * "invoice.updated", "invoice.voided", "inventory_reservation.action_required",
     * "inventory_count.applied", "inventory_count.updated", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.at_risk",
     * "inventory_reservation.closed", "inventory_reservation.committed",
     * "inventory_reservation.consumed", "inventory_reservation.created",
     * "inventory_reservation.hold_expired", "inventory_reservation.released",
     * "inventory_reservation.updated", "inventory_level.shortage_detected",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
     * "merchant_billing_balance.updated", "merchant.readiness_updated",
     * "merchant_billing_invoice.issued", "merchant_billing_invoice.updated",
     * "order.partially_refunded", "order.closed", "order_edit.created", "order.created",
     * "fulfillment.completed", "fulfillment.created", "fulfillment_event.created",
     * "package.created", "package.updated", "shipment.created", "shipment.updated",
     * "fulfillment.updated", "order.inventory_exception_created",
     * "order.inventory_exception_resolved", "order.partially_paid", "order.paid",
     * "order.refunded", "order.updated", "payment_intent.authorization_expiring",
     * "payment_intent.expired", "payment_intent.updated", "payment_intent.created",
     * "payment_intent.canceled", "payment_intent.fulfillment_hold_updated",
     * "payment_intent.payment_failed", "payment_intent.processing",
     * "payment_intent.requires_action", "payment_intent.requires_capture",
     * "payment_intent.succeeded", "payment_link.created", "payment_link.updated",
     * "payment_method.archived", "payment_method.failed", "payment_method.activated",
     * "payment_method.updated", "payout.canceled", "payout.created", "payout.failed",
     * "payout.succeeded", "payout.reversed", "payout.updated", "payout_destination.created",
     * "payout_destination.archived", "payout_destination.disabled", "payout_destination.updated",
     * "payout_settings.updated", "refund.partially_succeeded", "refund.succeeded",
     * "refund.created", "refund.failed", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "payment_review.closed", "payment_review.reopened",
     * "payment_review.opened", "subscription.activated", "subscription.canceled",
     * "subscription.cancellation_scheduled", "subscription.created",
     * "subscription.dunning_exhausted", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription_payment_retry.created",
     * "subscription_payment_retry.succeeded", "subscription_payment_retry.failed",
     * "subscription.reactivated", "subscription.resumed", "subscription.end_upcoming",
     * "subscription.renewal_upcoming", "subscription.trial_ending",
     * "subscription.plan_change_scheduled", "subscription.plan_change_canceled",
     * "subscription.plan_changed", "subscription.updated",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.cycle_skipped",
     * "subscription_delivery_migration.completed", "partner_app.updated",
     * "partner_app.platform_approved", "partner_app.platform_limited",
     * "partner_app.platform_rejected", "platform_fee_payout.created",
     * "platform_fee_payout.succeeded", "platform_fee_payout.failed", "payment_split.created",
     * "payment_split.succeeded", "payment_split.failed", "payment_split.canceled",
     * "payment_split.updated", "platform_fee.created", "platform_fee.succeeded",
     * "platform_fee.canceled", "platform_fee.updated".
     */
    "event_type": "api_key.created"
        | "api_key.updated"
        | "api_key.revoked"
        | "test_clock.created"
        | "test_clock.advancing"
        | "test_clock.ready"
        | "test_clock.failed"
        | "test_clock.archived"
        | "tax_connection.updated"
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
        | "price_list.created"
        | "price_list.updated"
        | "price_list.archived"
        | "reader.created"
        | "reader.updated"
        | "reader.archived"
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
        | "checkout_session.updated"
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
        | "customer_email_preferences.updated"
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
        | "ticket.created"
        | "ticket.voided"
        | "ticket.checked_in"
        | "ticket.updated"
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
        | "tax_calculation_callback.archived"
        | "delivery_rate_callback.created"
        | "tax_calculation_callback.created"
        | "delivery_rate_callback.deactivated"
        | "tax_calculation_callback.deactivated"
        | "delivery_rate_callback.activated"
        | "tax_calculation_callback.activated"
        | "delivery_rate_callback.updated"
        | "tax_calculation_callback.updated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.activated"
        | "delivery_method.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
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
        | "invoice_payment_attempt.succeeded"
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
        | "inventory_count.updated"
        | "inventory_level.updated"
        | "inventory_receipt.created"
        | "inventory_reservation.at_risk"
        | "inventory_reservation.closed"
        | "inventory_reservation.committed"
        | "inventory_reservation.consumed"
        | "inventory_reservation.created"
        | "inventory_reservation.hold_expired"
        | "inventory_reservation.released"
        | "inventory_reservation.updated"
        | "inventory_level.shortage_detected"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
        | "merchant_billing_balance.updated"
        | "merchant.readiness_updated"
        | "merchant_billing_invoice.issued"
        | "merchant_billing_invoice.updated"
        | "order.partially_refunded"
        | "order.closed"
        | "order_edit.created"
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
        | "payment_intent.authorization_expiring"
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
        | "payment_method.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.succeeded"
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
        | "subscription.end_upcoming"
        | "subscription.renewal_upcoming"
        | "subscription.trial_ending"
        | "subscription.plan_change_scheduled"
        | "subscription.plan_change_canceled"
        | "subscription.plan_changed"
        | "subscription.updated"
        | "subscription.delivery_action_required"
        | "subscription.delivery_pause_upcoming"
        | "subscription.delivery_updated"
        | "subscription.cycle_skipped"
        | "subscription_delivery_migration.completed"
        | "partner_app.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "platform_fee_payout.created"
        | "platform_fee_payout.succeeded"
        | "platform_fee_payout.failed"
        | "payment_split.created"
        | "payment_split.succeeded"
        | "payment_split.failed"
        | "payment_split.canceled"
        | "payment_split.updated"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.canceled"
        | "platform_fee.updated"
        | (string & {});
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /**
     * 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered
     * afterwards, which keeps its previous data shape. Value enum: 1, 2.
     */
    "payload_version": number;
    /**
     * The originating request. `null` when the event has no originating request ID. id (Required):
     * string. Request ID of the request that caused the event. idempotency_key (Optional): string.
     * The Idempotency-Key the originating request sent. Absent when it sent none.
     */
    "request": {
        /** Request ID of the request that caused the event. */
        "id": string;
        /** The Idempotency-Key the originating request sent. Absent when it sent none. */
        "idempotency_key"?: string;
    }
        | null;
    /**
     * Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode.
     * Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /** true for a synthetic event sent from the test-events endpoint, false otherwise. */
    "test": boolean;
    /**
     * Stable ID of the recorded webhook event, shared by its delivery attempts. Example:
     * "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
});
/**
 * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
 * Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput;
 * maps written before those limits may not satisfy them.
 */
export type MetadataMap = Record<string, string>;
/**
 * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
 * sets a value, a null value deletes the key, and an empty object makes no change; send null for
 * the whole field to clear all caller-owned metadata. The resulting map is limited the same way as
 * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
 * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key
 * that does not exist is allowed, so the number of operations is not itself the stored-map limit.
 * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
 */
export type MetadataPatchRequest = Record<string, string | null>;
/**
 * Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key
 * sets a value, a null value deletes the key, and an empty object makes no change; send null for
 * the whole field to clear all caller-owned metadata. The resulting map is limited the same way as
 * MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
 * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key
 * that does not exist is allowed, so the number of operations is not itself the stored-map limit.
 * Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
 */
export type MetadataPatchRequestInput = MetadataPatchRequest;
/**
 * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
 * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
 * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and
 * keys starting with flint_ are reserved for Flint. maxProperties: 50.
 */
export type MetadataRequestInput = MetadataMap;
/** A purchasable customization choice. */
export type Modifier = {
    /**
     * When the modifier was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
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
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Identifier of the group that owns this modifier. For an inline group, read the group through
     * its modifier set. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Stable identifier of the modifier. In a replacement request, include it to retain a modifier
     * or omit it to create one. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id": string;
    /** Name of the choice shown to buyers. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position": number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     */
    "selected_by_default": boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment": boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt": boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
    /**
     * When the modifier last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
};
/** A group of choices that customize an item. */
export type ModifierGroup = {
    /** Whether buyers can select more than one unit of a list modifier. */
    "allow_quantities": boolean;
    /**
     * When the modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Maximum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "max_quantity"?: number;
    /**
     * Maximum number of distinct modifiers buyers can select from a list group. Omit it for no
     * limit. A modifier set can override this value. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64.
     */
    "max_total_quantity"?: number;
    /**
     * Identifier of the merchant that owns this modifier group. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Minimum whole-number quantity for each selected list modifier when allow_quantities is true;
     * fractional quantities are not supported. Format: int64.
     */
    "min_quantity"?: number;
    /**
     * Minimum number of distinct modifiers buyers must select from a list group. Omit it to
     * require no selections. A modifier set can override this value. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Stable identifier of the modifier group. For a group a modifier set owns (`source: inline`),
     * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
     * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Whether buyers choose from a list of modifiers or enter text. On create, inferred as text
     * when text configuration is supplied, otherwise list. Value enum: "list", "text".
     */
    "modifier_group_type": "list" | "text" | (string & {});
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. [] (Value): {@link Modifier}. A
     * purchasable customization choice.
     */
    "modifiers": Array<Modifier>;
    /** Name of the modifier group shown to buyers. */
    "name": string;
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set.
     */
    "show_on_fulfillment": boolean;
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set.
     */
    "show_on_receipt": boolean;
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive",
     * "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. Settings for a text modifier group: whether input is required or
     * multiline, and its length limits.
     */
    "text"?: TextModifierConfig;
    /**
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
    "version": number;
};
export type ModifierGroupArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allow_quantities": boolean;
            "created_at"?: string;
            "external_reference_id"?: string;
            "max_quantity"?: number;
            "max_selected"?: number;
            "max_total_quantity"?: number;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "min_quantity"?: number;
            "min_selected"?: number;
            "modifier_group_id": string;
            "modifier_group_type": "list" | "text" | (string & {});
            "modifiers": Array<Modifier>;
            "name": string;
            "show_on_fulfillment": boolean;
            "show_on_receipt": boolean;
            "status": "active" | "inactive" | "archived" | (string & {});
            "text"?: TextModifierConfig;
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<ModifierGroup>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_group.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allow_quantities": boolean;
            "created_at"?: string;
            "external_reference_id"?: string;
            "max_quantity"?: number;
            "max_selected"?: number;
            "max_total_quantity"?: number;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "min_quantity"?: number;
            "min_selected"?: number;
            "modifier_group_id": string;
            "modifier_group_type": "list" | "text" | (string & {});
            "modifiers": Array<Modifier>;
            "name": string;
            "show_on_fulfillment": boolean;
            "show_on_receipt": boolean;
            "status": "active" | "inactive" | "archived" | (string & {});
            "text"?: TextModifierConfig;
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<ModifierGroup>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_group.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_group.archived";
});
/**
 * The `modifier_group.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierGroupArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allow_quantities (Required): boolean. Whether buyers can select
     * more than one unit of a list modifier. object.created_at (Optional): string. When the
     * modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.max_selected (Optional): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. object.max_total_quantity (Optional): integer.
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.min_selected (Optional): integer. Minimum number of
     * distinct modifiers buyers must select from a list group. Omit it to require no selections. A
     * modifier set can override this value. Format: int32. object.modifier_group_id (Required):
     * string. Stable identifier of the modifier group. For a group a modifier set owns (`source:
     * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups`
     * doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type
     * (Required): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". object.modifiers (Required): Array of {@link Modifier}. Choices in a list group.
     * Only active modifiers whose set override's available is not false are offered to buyers.
     * Text groups do not have choices. object.modifiers[] (Value): {@link Modifier}. A purchasable
     * customization choice. object.name (Required): string. Name of the modifier group shown to
     * buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group
     * appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt
     * (Required): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set. object.status (Required): string. Lifecycle status of the
     * modifier group. Only active groups can be offered to buyers; archived groups remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional):
     * {@link TextModifierConfig}. Text entry rules for a text group. Use text.required to require
     * a value; list groups use min_selected instead. Settings for a text modifier group: whether
     * input is required or multiline, and its length limits. object.updated_at (Optional): string.
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier group and its modifiers. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allow_quantities (Required): boolean. Whether buyers can select more than one unit of a
         * list modifier. created_at (Optional): string. When the modifier group was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_quantity (Optional):
         * integer. Maximum whole-number quantity for each selected list modifier when
         * allow_quantities is true; fractional quantities are not supported. Format: int64.
         * max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select
         * from a list group. Omit it for no limit. A modifier set can override this value. Format:
         * int32. max_total_quantity (Optional): integer. Maximum combined whole-number quantity
         * across selected list modifiers; fractional quantities are not supported. Format: int64.
         * merchant_id (Optional): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * min_quantity (Optional): integer. Minimum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported. Format:
         * int64. min_selected (Optional): integer. Minimum number of distinct modifiers buyers
         * must select from a list group. Omit it to require no selections. A modifier set can
         * override this value. Format: int32. modifier_group_id (Required): string. Stable
         * identifier of the modifier group. For a group a modifier set owns (`source: inline`),
         * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
         * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_type (Required):
         * string. Whether buyers choose from a list of modifiers or enter text. On create,
         * inferred as text when text configuration is supplied, otherwise list. Value enum:
         * "list", "text". modifiers (Required): Array of {@link Modifier}. Choices in a list
         * group. Only active modifiers whose set override's available is not false are offered to
         * buyers. Text groups do not have choices. modifiers[] (Value): {@link Modifier}. A
         * purchasable customization choice. name (Required): string. Name of the modifier group
         * shown to buyers. show_on_fulfillment (Required): boolean. Whether selections from this
         * group appear in fulfillment details unless overridden for a modifier set.
         * show_on_receipt (Required): boolean. Whether selections from this group appear on buyer
         * receipts unless overridden for a modifier set. status (Required): string. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". text (Optional): {@link TextModifierConfig}. Text entry rules for a text
         * group. Use text.required to require a value; list groups use min_selected instead.
         * Settings for a text modifier group: whether input is required or multiline, and its
         * length limits. updated_at (Optional): string. When the modifier group or its modifiers
         * last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier group and
         * its modifiers. Format: uint64. minimum: 1.
         */
        "object": {
            /** Whether buyers can select more than one unit of a list modifier. */
            "allow_quantities": boolean;
            /**
             * When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "max_quantity"?: number;
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32.
             */
            "max_selected"?: number;
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. Format: int64.
             */
            "max_total_quantity"?: number;
            /**
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "min_quantity"?: number;
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. Format: int32.
             */
            "min_selected"?: number;
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
             */
            "modifier_group_id": string;
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text".
             */
            "modifier_group_type": "list" | "text" | (string & {});
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. [] (Value): {@link
             * Modifier}. A purchasable customization choice.
             */
            "modifiers": Array<Modifier>;
            /** Name of the modifier group shown to buyers. */
            "name": string;
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set.
             */
            "show_on_fulfillment": boolean;
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set.
             */
            "show_on_receipt": boolean;
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. Settings for a text modifier group: whether input is
             * required or multiline, and its length limits.
             */
            "text"?: TextModifierConfig;
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ModifierGroup>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_group.archived". */
    "event_type"?: "modifier_group.archived";
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
 * The `modifier_group.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierGroupArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allow_quantities (Required): boolean. Whether buyers can select
     * more than one unit of a list modifier. object.created_at (Optional): string. When the
     * modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.max_selected (Optional): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. object.max_total_quantity (Optional): integer.
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.min_selected (Optional): integer. Minimum number of
     * distinct modifiers buyers must select from a list group. Omit it to require no selections. A
     * modifier set can override this value. Format: int32. object.modifier_group_id (Required):
     * string. Stable identifier of the modifier group. For a group a modifier set owns (`source:
     * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups`
     * doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type
     * (Required): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". object.modifiers (Required): Array of {@link Modifier}. Choices in a list group.
     * Only active modifiers whose set override's available is not false are offered to buyers.
     * Text groups do not have choices. object.modifiers[] (Value): {@link Modifier}. A purchasable
     * customization choice. object.name (Required): string. Name of the modifier group shown to
     * buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group
     * appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt
     * (Required): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set. object.status (Required): string. Lifecycle status of the
     * modifier group. Only active groups can be offered to buyers; archived groups remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional):
     * {@link TextModifierConfig}. Text entry rules for a text group. Use text.required to require
     * a value; list groups use min_selected instead. Settings for a text modifier group: whether
     * input is required or multiline, and its length limits. object.updated_at (Optional): string.
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier group and its modifiers. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allow_quantities (Required): boolean. Whether buyers can select more than one unit of a
         * list modifier. created_at (Optional): string. When the modifier group was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_quantity (Optional):
         * integer. Maximum whole-number quantity for each selected list modifier when
         * allow_quantities is true; fractional quantities are not supported. Format: int64.
         * max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select
         * from a list group. Omit it for no limit. A modifier set can override this value. Format:
         * int32. max_total_quantity (Optional): integer. Maximum combined whole-number quantity
         * across selected list modifiers; fractional quantities are not supported. Format: int64.
         * merchant_id (Optional): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * min_quantity (Optional): integer. Minimum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported. Format:
         * int64. min_selected (Optional): integer. Minimum number of distinct modifiers buyers
         * must select from a list group. Omit it to require no selections. A modifier set can
         * override this value. Format: int32. modifier_group_id (Required): string. Stable
         * identifier of the modifier group. For a group a modifier set owns (`source: inline`),
         * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
         * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_type (Required):
         * string. Whether buyers choose from a list of modifiers or enter text. On create,
         * inferred as text when text configuration is supplied, otherwise list. Value enum:
         * "list", "text". modifiers (Required): Array of {@link Modifier}. Choices in a list
         * group. Only active modifiers whose set override's available is not false are offered to
         * buyers. Text groups do not have choices. modifiers[] (Value): {@link Modifier}. A
         * purchasable customization choice. name (Required): string. Name of the modifier group
         * shown to buyers. show_on_fulfillment (Required): boolean. Whether selections from this
         * group appear in fulfillment details unless overridden for a modifier set.
         * show_on_receipt (Required): boolean. Whether selections from this group appear on buyer
         * receipts unless overridden for a modifier set. status (Required): string. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". text (Optional): {@link TextModifierConfig}. Text entry rules for a text
         * group. Use text.required to require a value; list groups use min_selected instead.
         * Settings for a text modifier group: whether input is required or multiline, and its
         * length limits. updated_at (Optional): string. When the modifier group or its modifiers
         * last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier group and
         * its modifiers. Format: uint64. minimum: 1.
         */
        "object": {
            /** Whether buyers can select more than one unit of a list modifier. */
            "allow_quantities": boolean;
            /**
             * When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "max_quantity"?: number;
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32.
             */
            "max_selected"?: number;
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. Format: int64.
             */
            "max_total_quantity"?: number;
            /**
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "min_quantity"?: number;
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. Format: int32.
             */
            "min_selected"?: number;
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
             */
            "modifier_group_id": string;
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text".
             */
            "modifier_group_type": "list" | "text" | (string & {});
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. [] (Value): {@link
             * Modifier}. A purchasable customization choice.
             */
            "modifiers": Array<Modifier>;
            /** Name of the modifier group shown to buyers. */
            "name": string;
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set.
             */
            "show_on_fulfillment": boolean;
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set.
             */
            "show_on_receipt": boolean;
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. Settings for a text modifier group: whether input is
             * required or multiline, and its length limits.
             */
            "text"?: TextModifierConfig;
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ModifierGroup>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_group.archived". */
    "event_type"?: "modifier_group.archived";
});
export type ModifierGroupCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allow_quantities": boolean;
            "created_at"?: string;
            "external_reference_id"?: string;
            "max_quantity"?: number;
            "max_selected"?: number;
            "max_total_quantity"?: number;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "min_quantity"?: number;
            "min_selected"?: number;
            "modifier_group_id": string;
            "modifier_group_type": "list" | "text" | (string & {});
            "modifiers": Array<Modifier>;
            "name": string;
            "show_on_fulfillment": boolean;
            "show_on_receipt": boolean;
            "status": "active" | "inactive" | "archived" | (string & {});
            "text"?: TextModifierConfig;
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_group.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allow_quantities": boolean;
            "created_at"?: string;
            "external_reference_id"?: string;
            "max_quantity"?: number;
            "max_selected"?: number;
            "max_total_quantity"?: number;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "min_quantity"?: number;
            "min_selected"?: number;
            "modifier_group_id": string;
            "modifier_group_type": "list" | "text" | (string & {});
            "modifiers": Array<Modifier>;
            "name": string;
            "show_on_fulfillment": boolean;
            "show_on_receipt": boolean;
            "status": "active" | "inactive" | "archived" | (string & {});
            "text"?: TextModifierConfig;
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_group.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_group.created";
});
/**
 * The `modifier_group.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierGroupCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allow_quantities (Required): boolean. Whether buyers can select
     * more than one unit of a list modifier. object.created_at (Optional): string. When the
     * modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.max_selected (Optional): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. object.max_total_quantity (Optional): integer.
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.min_selected (Optional): integer. Minimum number of
     * distinct modifiers buyers must select from a list group. Omit it to require no selections. A
     * modifier set can override this value. Format: int32. object.modifier_group_id (Required):
     * string. Stable identifier of the modifier group. For a group a modifier set owns (`source:
     * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups`
     * doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type
     * (Required): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". object.modifiers (Required): Array of {@link Modifier}. Choices in a list group.
     * Only active modifiers whose set override's available is not false are offered to buyers.
     * Text groups do not have choices. object.modifiers[] (Value): {@link Modifier}. A purchasable
     * customization choice. object.name (Required): string. Name of the modifier group shown to
     * buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group
     * appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt
     * (Required): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set. object.status (Required): string. Lifecycle status of the
     * modifier group. Only active groups can be offered to buyers; archived groups remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional):
     * {@link TextModifierConfig}. Text entry rules for a text group. Use text.required to require
     * a value; list groups use min_selected instead. Settings for a text modifier group: whether
     * input is required or multiline, and its length limits. object.updated_at (Optional): string.
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier group and its modifiers. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allow_quantities (Required): boolean. Whether buyers can select more than one unit of a
         * list modifier. created_at (Optional): string. When the modifier group was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_quantity (Optional):
         * integer. Maximum whole-number quantity for each selected list modifier when
         * allow_quantities is true; fractional quantities are not supported. Format: int64.
         * max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select
         * from a list group. Omit it for no limit. A modifier set can override this value. Format:
         * int32. max_total_quantity (Optional): integer. Maximum combined whole-number quantity
         * across selected list modifiers; fractional quantities are not supported. Format: int64.
         * merchant_id (Optional): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * min_quantity (Optional): integer. Minimum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported. Format:
         * int64. min_selected (Optional): integer. Minimum number of distinct modifiers buyers
         * must select from a list group. Omit it to require no selections. A modifier set can
         * override this value. Format: int32. modifier_group_id (Required): string. Stable
         * identifier of the modifier group. For a group a modifier set owns (`source: inline`),
         * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
         * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_type (Required):
         * string. Whether buyers choose from a list of modifiers or enter text. On create,
         * inferred as text when text configuration is supplied, otherwise list. Value enum:
         * "list", "text". modifiers (Required): Array of {@link Modifier}. Choices in a list
         * group. Only active modifiers whose set override's available is not false are offered to
         * buyers. Text groups do not have choices. modifiers[] (Value): {@link Modifier}. A
         * purchasable customization choice. name (Required): string. Name of the modifier group
         * shown to buyers. show_on_fulfillment (Required): boolean. Whether selections from this
         * group appear in fulfillment details unless overridden for a modifier set.
         * show_on_receipt (Required): boolean. Whether selections from this group appear on buyer
         * receipts unless overridden for a modifier set. status (Required): string. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". text (Optional): {@link TextModifierConfig}. Text entry rules for a text
         * group. Use text.required to require a value; list groups use min_selected instead.
         * Settings for a text modifier group: whether input is required or multiline, and its
         * length limits. updated_at (Optional): string. When the modifier group or its modifiers
         * last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier group and
         * its modifiers. Format: uint64. minimum: 1.
         */
        "object": {
            /** Whether buyers can select more than one unit of a list modifier. */
            "allow_quantities": boolean;
            /**
             * When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "max_quantity"?: number;
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32.
             */
            "max_selected"?: number;
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. Format: int64.
             */
            "max_total_quantity"?: number;
            /**
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "min_quantity"?: number;
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. Format: int32.
             */
            "min_selected"?: number;
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
             */
            "modifier_group_id": string;
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text".
             */
            "modifier_group_type": "list" | "text" | (string & {});
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. [] (Value): {@link
             * Modifier}. A purchasable customization choice.
             */
            "modifiers": Array<Modifier>;
            /** Name of the modifier group shown to buyers. */
            "name": string;
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set.
             */
            "show_on_fulfillment": boolean;
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set.
             */
            "show_on_receipt": boolean;
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. Settings for a text modifier group: whether input is
             * required or multiline, and its length limits.
             */
            "text"?: TextModifierConfig;
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_group.created". */
    "event_type"?: "modifier_group.created";
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
 * The `modifier_group.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierGroupCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allow_quantities (Required): boolean. Whether buyers can select
     * more than one unit of a list modifier. object.created_at (Optional): string. When the
     * modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.max_selected (Optional): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. object.max_total_quantity (Optional): integer.
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.min_selected (Optional): integer. Minimum number of
     * distinct modifiers buyers must select from a list group. Omit it to require no selections. A
     * modifier set can override this value. Format: int32. object.modifier_group_id (Required):
     * string. Stable identifier of the modifier group. For a group a modifier set owns (`source:
     * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups`
     * doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type
     * (Required): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". object.modifiers (Required): Array of {@link Modifier}. Choices in a list group.
     * Only active modifiers whose set override's available is not false are offered to buyers.
     * Text groups do not have choices. object.modifiers[] (Value): {@link Modifier}. A purchasable
     * customization choice. object.name (Required): string. Name of the modifier group shown to
     * buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group
     * appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt
     * (Required): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set. object.status (Required): string. Lifecycle status of the
     * modifier group. Only active groups can be offered to buyers; archived groups remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional):
     * {@link TextModifierConfig}. Text entry rules for a text group. Use text.required to require
     * a value; list groups use min_selected instead. Settings for a text modifier group: whether
     * input is required or multiline, and its length limits. object.updated_at (Optional): string.
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier group and its modifiers. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allow_quantities (Required): boolean. Whether buyers can select more than one unit of a
         * list modifier. created_at (Optional): string. When the modifier group was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_quantity (Optional):
         * integer. Maximum whole-number quantity for each selected list modifier when
         * allow_quantities is true; fractional quantities are not supported. Format: int64.
         * max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select
         * from a list group. Omit it for no limit. A modifier set can override this value. Format:
         * int32. max_total_quantity (Optional): integer. Maximum combined whole-number quantity
         * across selected list modifiers; fractional quantities are not supported. Format: int64.
         * merchant_id (Optional): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * min_quantity (Optional): integer. Minimum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported. Format:
         * int64. min_selected (Optional): integer. Minimum number of distinct modifiers buyers
         * must select from a list group. Omit it to require no selections. A modifier set can
         * override this value. Format: int32. modifier_group_id (Required): string. Stable
         * identifier of the modifier group. For a group a modifier set owns (`source: inline`),
         * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
         * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_type (Required):
         * string. Whether buyers choose from a list of modifiers or enter text. On create,
         * inferred as text when text configuration is supplied, otherwise list. Value enum:
         * "list", "text". modifiers (Required): Array of {@link Modifier}. Choices in a list
         * group. Only active modifiers whose set override's available is not false are offered to
         * buyers. Text groups do not have choices. modifiers[] (Value): {@link Modifier}. A
         * purchasable customization choice. name (Required): string. Name of the modifier group
         * shown to buyers. show_on_fulfillment (Required): boolean. Whether selections from this
         * group appear in fulfillment details unless overridden for a modifier set.
         * show_on_receipt (Required): boolean. Whether selections from this group appear on buyer
         * receipts unless overridden for a modifier set. status (Required): string. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". text (Optional): {@link TextModifierConfig}. Text entry rules for a text
         * group. Use text.required to require a value; list groups use min_selected instead.
         * Settings for a text modifier group: whether input is required or multiline, and its
         * length limits. updated_at (Optional): string. When the modifier group or its modifiers
         * last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier group and
         * its modifiers. Format: uint64. minimum: 1.
         */
        "object": {
            /** Whether buyers can select more than one unit of a list modifier. */
            "allow_quantities": boolean;
            /**
             * When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "max_quantity"?: number;
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32.
             */
            "max_selected"?: number;
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. Format: int64.
             */
            "max_total_quantity"?: number;
            /**
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "min_quantity"?: number;
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. Format: int32.
             */
            "min_selected"?: number;
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
             */
            "modifier_group_id": string;
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text".
             */
            "modifier_group_type": "list" | "text" | (string & {});
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. [] (Value): {@link
             * Modifier}. A purchasable customization choice.
             */
            "modifiers": Array<Modifier>;
            /** Name of the modifier group shown to buyers. */
            "name": string;
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set.
             */
            "show_on_fulfillment": boolean;
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set.
             */
            "show_on_receipt": boolean;
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. Settings for a text modifier group: whether input is
             * required or multiline, and its length limits.
             */
            "text"?: TextModifierConfig;
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_group.created". */
    "event_type"?: "modifier_group.created";
});
/** A page of `ModifierGroup` objects. */
export type ModifierGroupListResponse = {
    /**
     * Modifier groups matching the request filters for this page. [] (Value): {@link
     * ModifierGroup}. A group of choices that customize an item.
     */
    "data": Array<ModifierGroup>;
    /**
     * Response metadata, including API version, trace identifier, and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Pass this token as page_token to read the next page with the same filters. Absent when there
     * are no more results.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting Flint support. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `ModifierGroup` data. */
export type ModifierGroupResponse = {
    /** The modifier group returned by this operation. A group of choices that customize an item. */
    "data": ModifierGroup;
    /**
     * Response metadata, including API version, trace identifier, and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting Flint support. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ModifierGroupUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allow_quantities": boolean;
            "created_at"?: string;
            "external_reference_id"?: string;
            "max_quantity"?: number;
            "max_selected"?: number;
            "max_total_quantity"?: number;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "min_quantity"?: number;
            "min_selected"?: number;
            "modifier_group_id": string;
            "modifier_group_type": "list" | "text" | (string & {});
            "modifiers": Array<Modifier>;
            "name": string;
            "show_on_fulfillment": boolean;
            "show_on_receipt": boolean;
            "status": "active" | "inactive" | "archived" | (string & {});
            "text"?: TextModifierConfig;
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<ModifierGroup>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_group.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "allow_quantities": boolean;
            "created_at"?: string;
            "external_reference_id"?: string;
            "max_quantity"?: number;
            "max_selected"?: number;
            "max_total_quantity"?: number;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "min_quantity"?: number;
            "min_selected"?: number;
            "modifier_group_id": string;
            "modifier_group_type": "list" | "text" | (string & {});
            "modifiers": Array<Modifier>;
            "name": string;
            "show_on_fulfillment": boolean;
            "show_on_receipt": boolean;
            "status": "active" | "inactive" | "archived" | (string & {});
            "text"?: TextModifierConfig;
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<ModifierGroup>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_group.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_group.updated";
});
/**
 * The `modifier_group.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierGroupUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allow_quantities (Required): boolean. Whether buyers can select
     * more than one unit of a list modifier. object.created_at (Optional): string. When the
     * modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.max_selected (Optional): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. object.max_total_quantity (Optional): integer.
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.min_selected (Optional): integer. Minimum number of
     * distinct modifiers buyers must select from a list group. Omit it to require no selections. A
     * modifier set can override this value. Format: int32. object.modifier_group_id (Required):
     * string. Stable identifier of the modifier group. For a group a modifier set owns (`source:
     * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups`
     * doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type
     * (Required): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". object.modifiers (Required): Array of {@link Modifier}. Choices in a list group.
     * Only active modifiers whose set override's available is not false are offered to buyers.
     * Text groups do not have choices. object.modifiers[] (Value): {@link Modifier}. A purchasable
     * customization choice. object.name (Required): string. Name of the modifier group shown to
     * buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group
     * appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt
     * (Required): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set. object.status (Required): string. Lifecycle status of the
     * modifier group. Only active groups can be offered to buyers; archived groups remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional):
     * {@link TextModifierConfig}. Text entry rules for a text group. Use text.required to require
     * a value; list groups use min_selected instead. Settings for a text modifier group: whether
     * input is required or multiline, and its length limits. object.updated_at (Optional): string.
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier group and its modifiers. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allow_quantities (Required): boolean. Whether buyers can select more than one unit of a
         * list modifier. created_at (Optional): string. When the modifier group was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_quantity (Optional):
         * integer. Maximum whole-number quantity for each selected list modifier when
         * allow_quantities is true; fractional quantities are not supported. Format: int64.
         * max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select
         * from a list group. Omit it for no limit. A modifier set can override this value. Format:
         * int32. max_total_quantity (Optional): integer. Maximum combined whole-number quantity
         * across selected list modifiers; fractional quantities are not supported. Format: int64.
         * merchant_id (Optional): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * min_quantity (Optional): integer. Minimum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported. Format:
         * int64. min_selected (Optional): integer. Minimum number of distinct modifiers buyers
         * must select from a list group. Omit it to require no selections. A modifier set can
         * override this value. Format: int32. modifier_group_id (Required): string. Stable
         * identifier of the modifier group. For a group a modifier set owns (`source: inline`),
         * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
         * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_type (Required):
         * string. Whether buyers choose from a list of modifiers or enter text. On create,
         * inferred as text when text configuration is supplied, otherwise list. Value enum:
         * "list", "text". modifiers (Required): Array of {@link Modifier}. Choices in a list
         * group. Only active modifiers whose set override's available is not false are offered to
         * buyers. Text groups do not have choices. modifiers[] (Value): {@link Modifier}. A
         * purchasable customization choice. name (Required): string. Name of the modifier group
         * shown to buyers. show_on_fulfillment (Required): boolean. Whether selections from this
         * group appear in fulfillment details unless overridden for a modifier set.
         * show_on_receipt (Required): boolean. Whether selections from this group appear on buyer
         * receipts unless overridden for a modifier set. status (Required): string. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". text (Optional): {@link TextModifierConfig}. Text entry rules for a text
         * group. Use text.required to require a value; list groups use min_selected instead.
         * Settings for a text modifier group: whether input is required or multiline, and its
         * length limits. updated_at (Optional): string. When the modifier group or its modifiers
         * last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier group and
         * its modifiers. Format: uint64. minimum: 1.
         */
        "object": {
            /** Whether buyers can select more than one unit of a list modifier. */
            "allow_quantities": boolean;
            /**
             * When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "max_quantity"?: number;
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32.
             */
            "max_selected"?: number;
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. Format: int64.
             */
            "max_total_quantity"?: number;
            /**
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "min_quantity"?: number;
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. Format: int32.
             */
            "min_selected"?: number;
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
             */
            "modifier_group_id": string;
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text".
             */
            "modifier_group_type": "list" | "text" | (string & {});
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. [] (Value): {@link
             * Modifier}. A purchasable customization choice.
             */
            "modifiers": Array<Modifier>;
            /** Name of the modifier group shown to buyers. */
            "name": string;
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set.
             */
            "show_on_fulfillment": boolean;
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set.
             */
            "show_on_receipt": boolean;
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. Settings for a text modifier group: whether input is
             * required or multiline, and its length limits.
             */
            "text"?: TextModifierConfig;
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ModifierGroup>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_group.updated". */
    "event_type"?: "modifier_group.updated";
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
 * The `modifier_group.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierGroupUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.allow_quantities (Required): boolean. Whether buyers can select
     * more than one unit of a list modifier. object.created_at (Optional): string. When the
     * modifier group was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.max_quantity (Optional): integer. Maximum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.max_selected (Optional): integer. Maximum number of
     * distinct modifiers buyers can select from a list group. Omit it for no limit. A modifier set
     * can override this value. Format: int32. object.max_total_quantity (Optional): integer.
     * Maximum combined whole-number quantity across selected list modifiers; fractional quantities
     * are not supported. Format: int64. object.merchant_id (Optional): string. Identifier of the
     * merchant that owns this modifier group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be
     * empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and
     * cannot be written through the public API. Caller-owned key-value data stored on a resource.
     * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
     * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
     * satisfy them. object.min_quantity (Optional): integer. Minimum whole-number quantity for
     * each selected list modifier when allow_quantities is true; fractional quantities are not
     * supported. Format: int64. object.min_selected (Optional): integer. Minimum number of
     * distinct modifiers buyers must select from a list group. Omit it to require no selections. A
     * modifier set can override this value. Format: int32. object.modifier_group_id (Required):
     * string. Stable identifier of the modifier group. For a group a modifier set owns (`source:
     * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups`
     * doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". object.modifier_group_type
     * (Required): string. Whether buyers choose from a list of modifiers or enter text. On create,
     * inferred as text when text configuration is supplied, otherwise list. Value enum: "list",
     * "text". object.modifiers (Required): Array of {@link Modifier}. Choices in a list group.
     * Only active modifiers whose set override's available is not false are offered to buyers.
     * Text groups do not have choices. object.modifiers[] (Value): {@link Modifier}. A purchasable
     * customization choice. object.name (Required): string. Name of the modifier group shown to
     * buyers. object.show_on_fulfillment (Required): boolean. Whether selections from this group
     * appear in fulfillment details unless overridden for a modifier set. object.show_on_receipt
     * (Required): boolean. Whether selections from this group appear on buyer receipts unless
     * overridden for a modifier set. object.status (Required): string. Lifecycle status of the
     * modifier group. Only active groups can be offered to buyers; archived groups remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.text (Optional):
     * {@link TextModifierConfig}. Text entry rules for a text group. Use text.required to require
     * a value; list groups use min_selected instead. Settings for a text modifier group: whether
     * input is required or multiline, and its length limits. object.updated_at (Optional): string.
     * When the modifier group or its modifiers last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier group and its modifiers. Format: uint64. minimum: 1. previous_attributes
     * (Optional): object. Previous values of changed top-level fields in data.object, at this
     * delivery's API version. Nested changes include the whole previous top-level value. A value
     * is null when the field was absent before the change. Omitted when Flint did not record the
     * previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * allow_quantities (Required): boolean. Whether buyers can select more than one unit of a
         * list modifier. created_at (Optional): string. When the modifier group was created, as an
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_quantity (Optional):
         * integer. Maximum whole-number quantity for each selected list modifier when
         * allow_quantities is true; fractional quantities are not supported. Format: int64.
         * max_selected (Optional): integer. Maximum number of distinct modifiers buyers can select
         * from a list group. Omit it for no limit. A modifier set can override this value. Format:
         * int32. max_total_quantity (Optional): integer. Maximum combined whole-number quantity
         * across selected list modifiers; fractional quantities are not supported. Format: int64.
         * merchant_id (Optional): string. Identifier of the merchant that owns this modifier
         * group. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys starting with
         * flint_ are reserved for Flint, are not returned, and cannot be written through the
         * public API. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them.
         * min_quantity (Optional): integer. Minimum whole-number quantity for each selected list
         * modifier when allow_quantities is true; fractional quantities are not supported. Format:
         * int64. min_selected (Optional): integer. Minimum number of distinct modifiers buyers
         * must select from a list group. Omit it to require no selections. A modifier set can
         * override this value. Format: int32. modifier_group_id (Required): string. Stable
         * identifier of the modifier group. For a group a modifier set owns (`source: inline`),
         * read it through `GET /v1/modifier-sets/{modifier_set_id}`; `/v1/modifier-groups` doesn't
         * return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". modifier_group_type (Required):
         * string. Whether buyers choose from a list of modifiers or enter text. On create,
         * inferred as text when text configuration is supplied, otherwise list. Value enum:
         * "list", "text". modifiers (Required): Array of {@link Modifier}. Choices in a list
         * group. Only active modifiers whose set override's available is not false are offered to
         * buyers. Text groups do not have choices. modifiers[] (Value): {@link Modifier}. A
         * purchasable customization choice. name (Required): string. Name of the modifier group
         * shown to buyers. show_on_fulfillment (Required): boolean. Whether selections from this
         * group appear in fulfillment details unless overridden for a modifier set.
         * show_on_receipt (Required): boolean. Whether selections from this group appear on buyer
         * receipts unless overridden for a modifier set. status (Required): string. Lifecycle
         * status of the modifier group. Only active groups can be offered to buyers; archived
         * groups remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". text (Optional): {@link TextModifierConfig}. Text entry rules for a text
         * group. Use text.required to require a value; list groups use min_selected instead.
         * Settings for a text modifier group: whether input is required or multiline, and its
         * length limits. updated_at (Optional): string. When the modifier group or its modifiers
         * last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier group and
         * its modifiers. Format: uint64. minimum: 1.
         */
        "object": {
            /** Whether buyers can select more than one unit of a list modifier. */
            "allow_quantities": boolean;
            /**
             * When the modifier group was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "max_quantity"?: number;
            /**
             * Maximum number of distinct modifiers buyers can select from a list group. Omit it
             * for no limit. A modifier set can override this value. Format: int32.
             */
            "max_selected"?: number;
            /**
             * Maximum combined whole-number quantity across selected list modifiers; fractional
             * quantities are not supported. Format: int64.
             */
            "max_total_quantity"?: number;
            /**
             * Identifier of the merchant that owns this modifier group. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Minimum whole-number quantity for each selected list modifier when allow_quantities
             * is true; fractional quantities are not supported. Format: int64.
             */
            "min_quantity"?: number;
            /**
             * Minimum number of distinct modifiers buyers must select from a list group. Omit it
             * to require no selections. A modifier set can override this value. Format: int32.
             */
            "min_selected"?: number;
            /**
             * Stable identifier of the modifier group. For a group a modifier set owns (`source:
             * inline`), read it through `GET /v1/modifier-sets/{modifier_set_id}`;
             * `/v1/modifier-groups` doesn't return it. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
             */
            "modifier_group_id": string;
            /**
             * Whether buyers choose from a list of modifiers or enter text. On create, inferred as
             * text when text configuration is supplied, otherwise list. Value enum: "list",
             * "text".
             */
            "modifier_group_type": "list" | "text" | (string & {});
            /**
             * Choices in a list group. Only active modifiers whose set override's available is not
             * false are offered to buyers. Text groups do not have choices. [] (Value): {@link
             * Modifier}. A purchasable customization choice.
             */
            "modifiers": Array<Modifier>;
            /** Name of the modifier group shown to buyers. */
            "name": string;
            /**
             * Whether selections from this group appear in fulfillment details unless overridden
             * for a modifier set.
             */
            "show_on_fulfillment": boolean;
            /**
             * Whether selections from this group appear on buyer receipts unless overridden for a
             * modifier set.
             */
            "show_on_receipt": boolean;
            /**
             * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
             * archived groups remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Text entry rules for a text group. Use text.required to require a value; list groups
             * use min_selected instead. Settings for a text modifier group: whether input is
             * required or multiline, and its length limits.
             */
            "text"?: TextModifierConfig;
            /**
             * When the modifier group or its modifiers last changed, as an RFC3339 timestamp.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Version of the modifier group and its modifiers. Format: uint64. minimum: 1. */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ModifierGroup>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_group.updated". */
    "event_type"?: "modifier_group.updated";
});
export type ModifierGroupsCreateParams = (InputValue<CreateModifierGroupRequestInput>)
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
export type ModifierGroupsDeleteParams = {
    /**
     * Optional modifier group version last read by the caller. Format: uint64. minimum: 1.
     * maximum: 9007199254740991.
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
export type ModifierGroupsGetParams = DisputesAcceptParams;
export type ModifierGroupsListParams = {
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
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Filter by modifier group type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "list", "text". Value enum: "list", "text". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "list", "text". anyOf[1][] (Value): string. Value enum:
     * "list", "text". anyOf[2] (Value): string. Value enum: "list", "text".
     */
    "modifier_group_type"?: InputValue<("list" | "text") | readonly ("list" | "text")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across modifier group ID, external reference ID, and name. Text fields match any part
     * of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as mg_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by modifier_group_id. Default:
     * "created_at". Value enum: "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
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
export type ModifierGroupsUpdateParams = (InputValue<UpdateModifierGroupRequestInput>)
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
/**
 * Settings for one modifier that apply only within a modifier set group, overriding the modifier
 * group's own values.
 */
export type ModifierOverride = {
    /**
     * Whether this modifier can be offered in this set. Defaults to true; the modifier must also
     * have status active. Default: true.
     */
    "available"?: boolean;
    /**
     * Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value.
     * Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's
     * value. Value enum: "general", "physical_goods", "digital_goods", "software", "saas",
     * "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods",
     * "admission".
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
     * Identifier of the list modifier these overrides apply to. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id": string;
    /**
     * Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's
     * value. Ignored when the choice is unavailable.
     */
    "selected_by_default"?: boolean;
    /** Overrides the modifier's taxable for this set. Omit it to use the modifier's value. */
    "taxable"?: boolean;
    /**
     * Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's
     * value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * Settings for one modifier that apply only within a modifier set group, overriding the modifier
 * group's own values.
 */
export type ModifierOverrideRequestInput = {
    /**
     * Whether this modifier can be offered in this set. Defaults to true; the modifier must also
     * have status active. Default: true.
     */
    "available"?: boolean;
    /**
     * Overrides the modifier's default_quantity for this set. Omit it to use the modifier's value.
     * Ignored when the choice is unavailable. Quantities are whole numbers; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Overrides the modifier's line_item_tax_category for this set. Omit it to use the modifier's
     * value. Value enum: "general", "physical_goods", "digital_goods", "software", "saas",
     * "services", "professional_services", "food", "prepared_food", "clothing", "medical_goods",
     * "admission".
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
        | "admission";
    /**
     * Identifier of the list modifier these overrides apply to. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id": string;
    /**
     * Overrides the modifier's selected_by_default for this set. Omit it to use the modifier's
     * value. Ignored when the choice is unavailable.
     */
    "selected_by_default"?: boolean;
    /** Overrides the modifier's taxable for this set. Omit it to use the modifier's value. */
    "taxable"?: boolean;
    /**
     * Overrides the modifier's unit_price_delta_money for this set. Omit it to use the modifier's
     * value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/**
 * A modifier you supply when creating or updating a modifier group, such as an add-on with a price
 * change.
 */
export type ModifierRequest = {
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
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
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Stable identifier of the modifier. In a replacement request, include it to retain a modifier
     * or omit it to create one. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /** Name of the choice shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     * Default: false.
     */
    "selected_by_default"?: boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value
     * enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValue;
};
/**
 * A modifier you supply when creating or updating a modifier group, such as an add-on with a price
 * change.
 */
export type ModifierRequestInput = {
    /**
     * Whole-number quantity selected by default. Used only when the choice is available and
     * selected_by_default is true. A modifier set can override this value; fractional quantities
     * are not supported. Format: int64.
     */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
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
        | "admission";
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Stable identifier of the modifier. In a replacement request, include it to retain a modifier
     * or omit it to create one. minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /** Name of the choice shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Display position of the choice within its group; lower values appear first. Format: int32.
     */
    "position"?: number;
    /**
     * Whether this choice is selected when the buyer has not supplied selections for the group. A
     * modifier set can override this value; unavailable choices are never selected by default.
     * Default: false.
     */
    "selected_by_default"?: boolean;
    /** Whether this modifier appears in fulfillment details. */
    "show_on_fulfillment"?: boolean;
    /** Whether this modifier appears on buyer receipts. */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier. Only active modifiers can be offered to buyers. Value
     * enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /** Whether this modifier's price is taxable. A modifier set can override this value. */
    "taxable"?: boolean;
    /**
     * Amount added to the item's unit price for each unit of this modifier. A modifier set can
     * override this value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_delta_money"?: MoneyValueInput;
};
/** A reusable collection of customization groups. */
export type ModifierSet = {
    /**
     * When the modifier set was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Ordered group entries in this set, including the full content of reusable groups and groups
     * owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as it appears in a
     * modifier set, with its selection limits, display options, and per-modifier overrides.
     */
    "modifier_groups": Array<ModifierSetGroup>;
    /**
     * Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id": string;
    /** Name used to identify this modifier set. */
    "name": string;
    /**
     * Lifecycle status of the modifier set. Only active sets can be offered to buyers; archived
     * sets remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * When the modifier set or any group it contains last changed, as an RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /**
     * Version of the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type ModifierSetArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<ModifierSet>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_set.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<ModifierSet>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_set.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_set.archived";
});
/**
 * The `modifier_set.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierSetArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ModifierSet>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_set.archived". */
    "event_type"?: "modifier_set.archived";
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
 * The `modifier_set.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierSetArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ModifierSet>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_set.archived". */
    "event_type"?: "modifier_set.archived";
});
export type ModifierSetCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_set.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_set.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_set.created";
});
/**
 * The `modifier_set.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierSetCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_set.created". */
    "event_type"?: "modifier_set.created";
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
 * The `modifier_set.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ModifierSetCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "modifier_set.created". */
    "event_type"?: "modifier_set.created";
});
/**
 * A modifier group as it appears in a modifier set, with its selection limits, display options,
 * and per-modifier overrides.
 */
export type ModifierSetGroup = {
    /** Overrides the group's name for this set. Omit it to use the group's name. */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Full modifier group for this entry, with the same representation as GET
     * /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source,
     * including when the group is archived. A group of choices that customize an item.
     */
    "modifier_group": ModifierGroup;
    /**
     * Stable identifier of the group contained in this entry, for either source. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. Example: "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id": string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position": number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Inline groups are owned by this modifier set. Existing groups are independent resources
     * referenced by this set. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
};
/** The `existing` variant of `ModifierSetGroupInput`. */
export type ModifierSetGroupInputExisting = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing".
     */
    "source": "existing" | (string & {});
})
    & (({
    /** References an independent modifier group. Value enum: "existing". */
    "source": "existing" | (string & {});
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
}));
/** The `existing` variant of `ModifierSetGroupInput`. */
export type ModifierSetGroupInputExistingInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideRequestInput}. Settings for one modifier that apply only within a modifier
     * set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideRequestInput>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing".
     */
    "source": "existing";
})
    & (({
    /** References an independent modifier group. Value enum: "existing". */
    "source": "existing";
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
})
    & ({
    "modifier_group"?: never;
}));
/** The `inline` variant of `ModifierSetGroupInput`. */
export type ModifierSetGroupInputInline = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "inline".
     */
    "source": "inline" | (string & {});
})
    & (({
    /** Defines a modifier group owned by this modifier set. Value enum: "inline". */
    "source": "inline" | (string & {});
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequest;
}));
/** The `inline` variant of `ModifierSetGroupInput`. */
export type ModifierSetGroupInputInlineInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideRequestInput}. Settings for one modifier that apply only within a modifier
     * set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideRequestInput>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "inline".
     */
    "source": "inline";
})
    & (({
    /** Defines a modifier group owned by this modifier set. Value enum: "inline". */
    "source": "inline";
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group": InlineModifierGroupRequestInput;
})
    & ({
    "modifier_group_id"?: never;
}));
/**
 * A modifier group you add to a modifier set, either an existing group by ID or a new inline
 * group, with selection limits and overrides.
 */
export type ModifierSetGroupRequest = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequest;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverride}. Settings for one modifier that apply only within a modifier set group,
     * overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverride>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline" | (string & {});
})
    & ((Exclude<ModifierSetGroupInputExisting & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInputInline & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A modifier group you add to a modifier set, either an existing group by ID or a new inline
 * group, with selection limits and overrides.
 */
export type ModifierSetGroupRequestInput = ({
    /**
     * Overrides the group's name for this set. Omit it to use the group's name. minLength: 1.
     * maxLength: 255.
     */
    "display_name"?: string;
    /**
     * Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; if neither value is set, there is no limit. Format: int32.
     */
    "max_selected"?: number;
    /**
     * Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted
     * only for list groups; set min_selected: 1 to require a selection. If neither value is set,
     * the minimum is 0. Format: int32.
     */
    "min_selected"?: number;
    /**
     * Modifier group owned by this set when source is inline. Read this group through GET
     * /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A modifier group
     * defined inline when setting up a modifier set, with its name, rules for how many options can
     * be selected, and its modifiers.
     */
    "modifier_group"?: InlineModifierGroupRequestInput;
    /**
     * Identifier of the independent modifier group referenced when source is existing. minLength:
     * 1. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id"?: string;
    /**
     * Overrides for individual list modifiers in this set. A choice is offered only when its
     * status is active and its override's available is not false. [] (Value): {@link
     * ModifierOverrideRequestInput}. Settings for one modifier that apply only within a modifier
     * set group, overriding the modifier group's own values.
     */
    "modifier_overrides"?: Array<ModifierOverrideRequestInput>;
    /**
     * Stable identifier of this group entry within the set. In a replacement request, include it
     * to retain an entry or omit it to create one. minLength: 1. Example:
     * "msg_01KEZF7C008GXTVA2AQ1SRFGFC".
     */
    "modifier_set_group_id"?: string;
    /** Display position of this group within the set; lower values appear first. Format: int32. */
    "position"?: number;
    /**
     * Overrides the group's text.required for this set. Omit it to use the group's value. Accepted
     * only for text groups; for a list group, set min_selected: 1 to require a selection.
     */
    "required"?: boolean;
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. */
    "show_on_fulfillment"?: boolean;
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. */
    "show_on_receipt"?: boolean;
    /**
     * Use inline for a modifier group owned by this modifier set, or existing to reference an
     * independent modifier group. Value enum: "existing", "inline".
     */
    "source": "existing" | "inline";
})
    & ((Exclude<ModifierSetGroupInputExistingInput & object, readonly unknown[]>)
    | (Exclude<ModifierSetGroupInputInlineInput & object, readonly unknown[]>));
/** A page of `ModifierSet` objects. */
export type ModifierSetListResponse = {
    /**
     * Modifier sets matching the request filters for this page. [] (Value): {@link ModifierSet}. A
     * reusable collection of customization groups.
     */
    "data": Array<ModifierSet>;
    /**
     * Response metadata, including API version, trace identifier, and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Pass this token as page_token to read the next page with the same filters. Absent when there
     * are no more results.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting Flint support. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `ModifierSet` data. */
export type ModifierSetResponse = {
    /**
     * The modifier set returned by this operation. A reusable collection of customization groups.
     */
    "data": ModifierSet;
    /**
     * Response metadata, including API version, trace identifier, and warnings when present.
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting Flint support. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ModifierSetUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<ModifierSet>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "modifier_set.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at"?: string;
            "external_reference_id"?: string;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_groups": Array<ModifierSetGroup>;
            "modifier_set_id": string;
            "name": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<ModifierSet>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "modifier_set.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "modifier_set.updated";
});
/**
 * The `modifier_set.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ModifierSetUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Optional): string. When the modifier set was created,
     * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.merchant_id
     * (Optional): string. Identifier of the merchant that owns this modifier set. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.modifier_groups (Required): Array
     * of {@link ModifierSetGroup}. Ordered group entries in this set, including the full content
     * of reusable groups and groups owned by the set. object.modifier_groups[] (Value): {@link
     * ModifierSetGroup}. A modifier group as it appears in a modifier set, with its selection
     * limits, display options, and per-modifier overrides. object.modifier_set_id (Required):
     * string. Stable identifier of the modifier set assigned to catalog items. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Name used to identify this
     * modifier set. object.status (Required): string. Lifecycle status of the modifier set. Only
     * active sets can be offered to buyers; archived sets remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When the
     * modifier set or any group it contains last changed, as an RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Version of
     * the modifier set, including the groups it contains. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Optional): string. When the modifier set was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". merchant_id (Optional): string. Identifier of
         * the merchant that owns this modifier set. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty
         * strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot
         * be written through the public API. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_groups (Required): Array of {@link ModifierSetGroup}. Ordered
         * group entries in this set, including the full content of reusable groups and groups
         * owned by the set. modifier_groups[] (Value): {@link ModifierSetGroup}. A modifier group
         * as it appears in a modifier set, with its selection limits, display options, and
         * per-modifier overrides. modifier_set_id (Required): string. Stable identifier of the
         * modifier set assigned to catalog items. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name
         * (Required): string. Name used to identify this modifier set. status (Required): string.
         * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
         * archived sets remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". updated_at (Optional): string. When the modifier set or any group it
         * contains last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Version of the modifier set,
         * including the groups it contains. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * When the modifier set was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Identifier of the merchant that owns this modifier set. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are
             * reserved for Flint, are not returned, and cannot be written through the public API.
             * Caller-owned key-value data stored on a resource. Keys starting with flint_ are
             * reserved for Flint and are not returned. Writes follow the limits on MetadataInput
             * and MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Ordered group entries in this set, including the full content of reusable groups and
             * groups owned by the set. [] (Value): {@link ModifierSetGroup}. A modifier group as
             * it appears in a modifier set, with its selection limits, display options, and
             * per-modifier overrides.
             */
            "modifier_groups": Array<ModifierSetGroup>;
            /**
             * Stable identifier of the modifier set assigned to catalog items. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string;
            /** Name used to identify this modifier set. */
            "name": string;
            /**
             * Lifecycle status of the modifier set. Only active sets can be offered to buyers;
             * archived sets remain readable and cannot be edited. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When the modifier set or any group it contains last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Version of the modifier set, including the groups it contains. Format: uint64.
             * minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ModifierSet>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "modifier_set.updated". */
    "event_type"?: "modifier_set.updated";
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
