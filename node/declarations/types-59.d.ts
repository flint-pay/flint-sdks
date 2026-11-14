import type { ResponseMeta } from './types-54.js';
import type { RiskRule } from './types-58.js';
import type { InputValue } from '../runtime.js';
import type { CreateRiskRuleRequestInput, CreateSandboxRequestInput } from './types-13.js';
import type { DisputesAcceptParams, ExpandedOrderSummary, ExpandedPackageSummary } from './types-24.js';
import type { UpdateRiskRuleRequestInput, UpdateSettingsRequestInput } from './types-68.js';
import type { GiftCardPurchaseRecipient, GiftCardNotificationRecipientInput } from './types-27.js';
import type { GiftCard, GiftCardNotification } from './types-26.js';
import type {
    PartnerAppWithRotatedSecret,
    PartnerAppsListParams,
    PaymentCollection,
    PaymentErrorSummary,
    PaymentCollectionStripeElements,
    PartnerWebhookEnvelope
} from './types-44.js';
import type { CreateDeveloperSandboxResult } from './types-9.js';
import type { PaymentMethodWithSetup, PaymentSettings } from './types-47.js';
import type { MoneyValue } from './types-39.js';
import type { BrandingSettings } from './types-1.js';
import type { CheckoutSettings } from './types-6.js';
import type { CustomerAccountSettings, CustomerEmailDeliverySettings } from './types-15.js';
import type { FulfillmentSettings } from './types-25.js';
import type { InventorySettings } from './types-30.js';
import type { InvoiceSettings } from './types-34.js';
import type { LegalSettings } from './types-35.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-38.js';
import type { PaymentLimitSettings } from './types-45.js';
import type { PromotionSettings } from './types-52.js';
import type { SubscriptionSettings } from './types-63.js';
import type { TaxIdentity, TaxSettings } from './types-65.js';
import type { TippingSettings } from './types-66.js';
import type { ReturnHandoffRequirementLineItem } from './types-55.js';
/** A page of `RiskRule` objects. */
export type RiskRuleListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * RiskRule}. A rule for assessing and handling payment risk.
     */
    "data": Array<RiskRule>;
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
/** A response containing `RiskRule` data. */
export type RiskRuleResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A rule for assessing and
     * handling payment risk.
     */
    "data": RiskRule;
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
export type RiskRulesCreateParams = (InputValue<CreateRiskRuleRequestInput>)
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
export type RiskRulesDeleteParams = {
    /**
     * Optional risk rule version last read by the caller. Format: int64. minimum: 1. maximum:
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
export type RiskRulesGetAttributesParams = DisputesAcceptParams;
export type RiskRulesGetParams = DisputesAcceptParams;
export type RiskRulesListParams = {
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
export type RiskRulesUpdateParams = (UpdateRiskRuleRequestInput)
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
/** The request body for: Replace a gift card code. */
export type RotateGiftCardCodeRequest = {
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Explicitly send or schedule the replacement code through private recipient access. Requires
     * commerce.gift_cards.secrets.write. Who receives a gift card notification: their `email`,
     * optional `name` and `message`, and an optional `send_at` time.
     */
    "notification"?: GiftCardPurchaseRecipient;
};
/** The request body for: Replace a gift card code. */
export type RotateGiftCardCodeRequestInput = {
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Explicitly send or schedule the replacement code through private recipient access. Requires
     * commerce.gift_cards.secrets.write. Who receives a gift card notification: their `email`,
     * optional `name` and `message`, and an optional `send_at` time.
     */
    "notification"?: GiftCardNotificationRecipientInput;
};
/**
 * The gift card after its code was rotated, with the new `code` while it can be recovered and the
 * notification sent.
 */
export type RotateGiftCardCodeResult = {
    /**
     * The full current code. Omitted after the 24-hour recovery window or when this code has been
     * replaced.
     */
    "code"?: string;
    /**
     * When recovery of this code expires. Omitted when the code cannot be recovered. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "code_recovery_expires_at"?: string;
    /**
     * The gift card after the command. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * The notification the command created because the request included `notification`. Omitted
     * otherwise. A message sent to a gift card recipient.
     */
    "gift_card_notification"?: GiftCardNotification;
};
/** A response containing `RotateGiftCardCodeResult` data. */
export type RotateGiftCardCodeResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The gift card after its
     * code was rotated, with the new `code` while it can be recovered and the notification sent.
     */
    "data": RotateGiftCardCodeResult;
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
/** The request body for: Rotate partner app secret. */
export type RotatePartnerAppSecretRequestInput = {
    /**
     * Rotate only if this matches the app's current version. A mismatch returns HTTP 409
     * VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "expire_previous_secret_at"?: string | globalThis.Date;
};
/** A response containing `PartnerAppWithRotatedSecret` data. */
export type RotatePartnerAppSecretResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A partner app returned
     * with its newly issued client secret after rotation. An application that merchants can
     * authorize to access their accounts.
     */
    "data": PartnerAppWithRotatedSecret;
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
/** The request body for: Rotate webhook secret. */
export type RotateWebhookSecretRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * When the replaced secret stops signing. Omit for a 24-hour overlap; send a time at or before
     * now to stop it immediately. Must be no later than 7 days from now. Null is not accepted.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expire_previous_secret_at"?: string;
};
/** The request body for: Rotate webhook secret. */
export type RotateWebhookSecretRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * When the replaced secret stops signing. Omit for a 24-hour overlap; send a time at or before
     * now to stop it immediately. Must be no later than 7 days from now. Null is not accepted.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expire_previous_secret_at"?: string | globalThis.Date;
};
/** An isolated environment for testing an integration. */
export type Sandbox = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The onboarding state the sandbox starts in, and returns to when you reset it. `complete`
     * prefills a verified test identity; `not_started` leaves requirements due so you can rehearse
     * onboarding. Value enum: "complete", "not_started".
     */
    "initial_onboarding": "complete" | "not_started" | (string & {});
    /**
     * Whether this is the merchant's one default sandbox. It can be reset but cannot be archived.
     */
    "is_default": boolean;
    /** Sandbox name. Archiving appends (Archived XXXXXXXX) to free the original name for reuse. */
    "name": string;
    /**
     * When the last reset stopped after repeated failures. Before data deletion starts, the
     * sandbox keeps its previous data and remains usable. Once deletion starts, requests are
     * blocked until you retry the reset or archive a non-default sandbox. Null when no reset has
     * failed or a later reset succeeded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "reset_failed_at": string | null;
    /**
     * Unique identifier for this sandbox, prefixed `test_`. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id": string;
    /**
     * Sandbox availability. Active sandboxes accept test requests. Archived sandboxes are retired,
     * with their API keys revoked; reset preserves an active sandbox and its credentials. Value
     * enum: "active", "archived".
     */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
/** A page of `Sandbox` objects. */
export type SandboxListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Sandbox}. An isolated environment for testing an integration.
     */
    "data": Array<Sandbox>;
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
/** A response containing `Sandbox` data. */
export type SandboxResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An isolated environment
     * for testing an integration.
     */
    "data": Sandbox;
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
/** A response containing `CreateDeveloperSandboxResult` data. */
export type SandboxWithAPIKeyResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The created sandbox is
     * the primary resource, with the API key and one-time secret_key when issue_test_key is true.
     */
    "data": CreateDeveloperSandboxResult;
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
export type SandboxesCreateParams = (CreateSandboxRequestInput);
export type SandboxesDeleteParams = {};
export type SandboxesGetParams = {};
export type SandboxesListParams = PartnerAppsListParams;
export type SandboxesResetParams = {};
/** The request body for: Save a gift card to your account. */
export type SaveMeGiftCardRequest = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code"?: string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code", "recipient_access".
     */
    "credential_type": "code" | "recipient_access" | (string & {});
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id"?: string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token"?: string;
})
    & ((Exclude<SaveMeGiftCardRequestCode & object, readonly unknown[]>)
    | (Exclude<SaveMeGiftCardRequestRecipientAccess & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `code` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestCode = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code".
     */
    "credential_type": "code" | (string & {});
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id"?: string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token"?: string;
})
    & (({
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code".
     */
    "credential_type": unknown;
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
}));
/** The `code` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestCodeInput = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code".
     */
    "credential_type": "code";
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id"?: string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token"?: string;
})
    & (({
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code".
     */
    "credential_type": ("code") & ("code");
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
})
    & (({
    "grant_id"?: never;
}) & ({
    "recipient_access_token"?: never;
})));
/** The request body for: Save a gift card to your account. */
export type SaveMeGiftCardRequestInput = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code"?: string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code", "recipient_access".
     */
    "credential_type": "code" | "recipient_access";
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id"?: string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token"?: string;
})
    & ((Exclude<SaveMeGiftCardRequestCodeInput & object, readonly unknown[]>)
    | (Exclude<SaveMeGiftCardRequestRecipientAccessInput & object, readonly unknown[]>));
/** The `recipient_access` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestRecipientAccess = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code"?: string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "recipient_access".
     */
    "credential_type": "recipient_access" | (string & {});
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id": string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token": string;
})
    & (({
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "recipient_access".
     */
    "credential_type": unknown;
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id": string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token": string;
}));
/** The `recipient_access` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestRecipientAccessInput = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code"?: string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "recipient_access".
     */
    "credential_type": "recipient_access";
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id": string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token": string;
})
    & (({
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "recipient_access".
     */
    "credential_type": ("recipient_access") & ("recipient_access");
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id": string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token": string;
})
    & ({
    "code"?: never;
}));
/** The request body for: Create a payment method for the current buyer. */
export type SaveMePaymentMethodRequest = {
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card" | (string & {});
};
/** The request body for: Create a payment method for the current buyer. */
export type SaveMePaymentMethodRequestInput = {
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card";
};
/** The request body for: Create a payment method. */
export type SavePaymentMethodRequest = {
    /**
     * The customer to save the payment method for. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card" | (string & {});
};
/** The request body for: Create a payment method. */
export type SavePaymentMethodRequestInput = {
    /**
     * The customer to save the payment method for. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card";
};
/** A response containing `PaymentMethodWithSetup` data. */
export type SavePaymentMethodResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The saved payment
     * method, with `client_setup` when the buyer must still complete processor setup before the
     * payment method can be used. A customer's saved payment details.
     */
    "data": PaymentMethodWithSetup;
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
/** Sets the start and end of a service fulfillment's appointment window. */
export type ScheduleFulfillmentRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /**
     * End of the service appointment window, after scheduled_start_at, as an RFC 3339 timestamp.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_end_at": string;
    /**
     * Start of the service appointment window, as an RFC 3339 timestamp. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at": string;
    /** IANA timezone of the service appointment. minLength: 1. */
    "timezone"?: string;
};
/** Sets the start and end of a service fulfillment's appointment window. */
export type ScheduleFulfillmentRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /**
     * End of the service appointment window, after scheduled_start_at, as an RFC 3339 timestamp.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_end_at": string | globalThis.Date;
    /**
     * Start of the service appointment window, as an RFC 3339 timestamp. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at": string | globalThis.Date;
    /** IANA timezone of the service appointment. minLength: 1. */
    "timezone"?: string;
};
/**
 * The scopes an authorization decision required and whether `all` or `any` of them were needed,
 * returned in error details.
 */
export type ScopeRequirement = {
    /**
     * How the required scopes are evaluated. all requires every listed scope; any requires at
     * least one listed scope. Example: "all". Value enum: "all", "any".
     */
    "mode": "all" | "any" | (string & {});
    /**
     * Canonical public scope names evaluated for this authorization decision. Example:
     * ["developer.sandboxes.write","accounts.api_keys.write"]. [] (Value): string.
     */
    "scopes": Array<string>;
};
/** A resource the caller can select for a request field. */
export type SelectableErrorResource = {
    /**
     * Amount for this choice when available. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Resource display name when available. */
    "display_name"?: string;
    /**
     * Most recent payment failure when available. A summary of why a payment attempt failed, with
     * a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Payment collection details when available. Client-side details for collecting payment from
     * the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /**
     * Public Flint ID to submit in the refused request field. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id": string;
    /**
     * Stable public resource name for this choice. Example: "order". Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_tax_exemption", "customer_verification", "delivery_choice_group",
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
    "resource_type": "api_key"
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
    /** Current public status when available. */
    "status"?: string;
    /**
     * Actions offered for this resource when the request was refused. An empty array means no
     * action is offered; an omitted field means actions were not reported. [] (Value): string.
     */
    "supported_actions"?: Array<string>;
    /**
     * Tip for this choice when available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
};
/**
 * A payment intent on an order the caller can pick, with its amount, status, and last payment
 * error.
 */
export type SelectableOrderPaymentIntent = {
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
     * Most recent payment failure, when one is recorded. A summary of why a payment attempt
     * failed, with a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Client setup details for collecting this payment. Client-side details for collecting payment
     * from the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
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
     * Portion of this payment's amount allocated to a tip. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/** An option and value chosen for a product variant, such as size Large. */
export type SelectedProductOption = {
    /** Identifier of the selected product option. Example: "opt_01KEZF7C008R5Q9BG9B4B4KQH8". */
    "option_id": string;
    /** Name of the selected product option. */
    "option_name": string;
    /** Identifier of the selected option value. Example: "optv_01KEZF7C0078SVZ1T7PVRXQK7F". */
    "option_value_id": string;
    /** Selected value of the product option. */
    "value": string;
};
/**
 * The seller's agreement to the current automatic sales tax disclosure, recorded when connect
 * succeeds.
 */
export type SellerTaxAttestationRequest = {
    /**
     * Current disclosure version from GET /v1/tax-connection. Send only after the seller agrees to
     * every rendered statement. minLength: 1.
     */
    "disclosure_version": string;
};
/**
 * The seller's agreement to the current automatic sales tax disclosure, recorded when connect
 * succeeds.
 */
export type SellerTaxAttestationRequestInput = SellerTaxAttestationRequest;
/** The request body for: Send an order receipt. */
export type SendOrderReceiptRequest = {
    /**
     * Receipt email, limited to 254 characters (Unicode code points) after trimming surrounding
     * whitespace. Format: email. minLength: 1. maxLength: 254. Example: "buyer@example.com".
     */
    "email"?: string;
};
/** The request body for: Send an order receipt. */
export type SendOrderReceiptRequestInput = SendOrderReceiptRequest;
/** The request body for: Send a payment receipt. */
export type SendPaymentIntentReceiptRequestInput = {
    /**
     * Email address that receives the receipt. Omit to use the order's receipt address for an
     * order-owned intent, or receipt_email then the customer's email for a standalone intent.
     * Format: email. minLength: 1. maxLength: 254. Example: "buyer@example.com".
     */
    "email"?: string;
};
/**
 * Details of a service fulfillment: the scheduled start and end, timezone, completion time, and
 * notes.
 */
export type ServiceFulfillmentDetails = {
    /**
     * When the service was completed, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "completed_at"?: string;
    /** Additional instructions or notes for performing the service. */
    "notes"?: string;
    /**
     * Scheduled end of the service, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_end_at"?: string;
    /**
     * Scheduled start of the service, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at"?: string;
    /** Timezone used to display the service appointment. Uses an IANA time zone name. */
    "timezone"?: string;
};
/** The settings for one merchant environment. */
export type Settings = {
    /**
     * Colors, font, and corner radius of hosted checkout, receipts, and links. Omitted until you
     * save a value in this section; effective settings fill in Flint's defaults. A merchant's
     * branding settings: colors, corner radius, and font family. Checkout uses them as its default
     * theme.
     */
    "branding"?: BrandingSettings;
    /**
     * Defaults for hosted checkout. Omitted until you save a value in this section; effective
     * settings fill in Flint's defaults. Merchant defaults for checkout: delivery methods,
     * expiration, payment options, required contact fields, promotion codes, recovery email, and
     * saved payment details.
     */
    "checkout"?: CheckoutSettings;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The customer account where buyers manage their orders, subscriptions, returns, and invoices.
     * Omitted until you save a value in this section; effective settings fill in Flint's defaults.
     * Customer account settings: hosted mode, merchant account URL, presentation, route templates,
     * and what buyers may do to their own subscriptions.
     */
    "customer_account"?: CustomerAccountSettings;
    /**
     * Whether Flint or you send each kind of buyer email. Omitted until you save a value in this
     * section; effective settings fill in Flint's defaults. For each kind of customer email,
     * whether Flint sends it or the merchant sends it.
     */
    "customer_email_delivery"?: CustomerEmailDeliverySettings;
    /**
     * Fulfillment workflow defaults. Omitted until you save a value in this section; effective
     * settings fill in Flint's defaults. Merchant fulfillment settings, including whether
     * fulfillments require approval (`approval_required`).
     */
    "fulfillment"?: FulfillmentSettings;
    /**
     * Inventory defaults, such as the low stock threshold and what happens when stock can't cover
     * a paid order. Omitted until you save a value in this section; effective settings fill in
     * Flint's defaults. Inventory settings: the `low_stock_threshold`, how inventory failures are
     * handled for each order source, and the `default_routing_source` for requests that omit one.
     */
    "inventory"?: InventorySettings;
    /**
     * Defaults and policies for the invoices you issue. Omitted until you save a value in this
     * section; effective settings fill in Flint's defaults. Merchant defaults for invoices,
     * including numbering prefixes, default memo and footer, collection mode, reminders, and
     * autopay retries.
     */
    "invoices"?: InvoiceSettings;
    /**
     * Legal links and terms acceptance that checkout shows. Omitted until you save a value in this
     * section; effective settings fill in Flint's defaults. Merchant legal links and terms
     * settings: contract, refund policy, shipping policy, and terms of service URLs, and whether
     * buyers must accept the terms.
     */
    "legal"?: LegalSettings;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Your own lower and upper limits on payment amounts. Omitted until you save a value in this
     * section; effective settings fill in Flint's defaults. Optional merchant limits that can
     * lower Flint's payment-option and surface policy limits.
     */
    "payment_limits"?: PaymentLimitSettings;
    /**
     * Statement text for new payments. Omitted until you save a value in this section; effective
     * settings fill in Flint's defaults. Settings for the statement text on new payments.
     */
    "payments"?: PaymentSettings;
    /**
     * Whether automatic promotions and promotion codes apply, and how many discounts one order can
     * stack. Omitted until you save a value in this section; effective settings fill in Flint's
     * defaults. Merchant promotion settings: whether automatic promotions and codes are enabled,
     * and how many promotions can apply to one order.
     */
    "promotions"?: PromotionSettings;
    /**
     * Unique identifier for this settings, prefixed `set_`. Example:
     * "set_01KEZF7C00SA6XKHH6GVZ1JMC2".
     */
    "settings_id": string;
    /**
     * Subscription billing behavior, such as what happens when payment retries run out. Omitted
     * until you save a value in this section; effective settings fill in Flint's defaults.
     * Subscription settings: the default billing schedule owner, dunning retry days and end
     * action, and the backorder email.
     */
    "subscriptions"?: SubscriptionSettings;
    /**
     * Default tax behavior for new checkouts and orders. Omitted until you save a value in this
     * section; effective settings fill in Flint's defaults. Tax settings: whether tax is
     * calculated by default and the default tax categories for line items and delivery charges.
     */
    "tax"?: TaxSettings;
    /**
     * The merchant's legal identity, printed on invoices and credit notes. `null` when none is
     * set. anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
     * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the
     * tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
     * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display
     * order; replacing the array requires the parent's expected_version. Existing entries retain
     * their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2]
     * (Value): null.
     */
    "tax_identity": ((TaxIdentity) | (null));
    /**
     * How tips work at checkout. Omitted until you save a value in this section; effective
     * settings fill in Flint's defaults. Tipping settings: percent and fixed tip options, the
     * preselected tip, and whether custom tips are allowed.
     */
    "tipping"?: TippingSettings;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type SettingsGetEffectiveParams = DisputesAcceptParams;
export type SettingsGetParams = DisputesAcceptParams;
/** A response containing `Settings` data. */
export type SettingsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The settings for one
     * merchant environment.
     */
    "data": Settings;
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
export type SettingsUpdateParams = (InputValue<UpdateSettingsRequestInput>)
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
/** Money collected, returned, waived, and still owed on a bill. */
export type SettlementAmounts = {
    /**
     * paid_money minus refunded_money and, on orders, dispute_lost_money, never below zero.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "net_collected_money": MoneyValue;
    /**
     * Money still owed on the bill, never below zero. Refunds return money already collected and
     * do not add to it. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Money collected toward the bill, net of reversed payments. Excludes written-off debt. On
     * orders, dispute losses do not reduce this amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Money returned to the buyer from what was collected toward the bill. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money
     * or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
/** Client guidance for saving a payment method on the merchant's connected account. */
export type SetupCollection = {
    /**
     * Client configuration for saving a payment method through Stripe on the merchant's connected
     * account. Stripe connected account details and Elements configuration for saving a payment
     * method.
     */
    "stripe"?: SetupCollectionStripe;
};
/** Stripe connected account details and Elements configuration for saving a payment method. */
export type SetupCollectionStripe = {
    /**
     * Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Example:
     * "acct_1234567890".
     */
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
/** A shipment carrying fulfilled order items. */
export type Shipment = {
    /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string;
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries.
     */
    "external_system"?: string;
    /** Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at
     * when no separate handoff timestamp exists. For return shipments, this can satisfy an
     * after_handoff execution gate for the declared return_line_items. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "handed_off_at"?: string;
    /**
     * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * Order whose items are transported by the shipment. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Total number of packages attached to the shipment, including voided packages. Format: int32.
     * minimum: 0.
     */
    "package_count": number;
    /**
     * Summaries of the shipment's packages in creation order, returned when the packages
     * relationship is expanded or when the shipment is created with packages. [] (Value): {@link
     * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking, status,
     * and supported actions, returned when the package is expanded.
     */
    "packages"?: Array<ExpandedPackageSummary>;
    /**
     * Return associated with this shipment, when its direction is return. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * Return lines and quantities allocated to this return shipment. [] (Value): {@link
     * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
     * shipment or package.
     */
    "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
    /** Stable identifier of the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /**
     * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Read-only shipment state derived from the shipment's package states. An empty shipment
     * remains a created draft. - `created`: The shipment leg exists but has not been packed or
     * handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. -
     * `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving
     * the shipment through its network. - `out_for_delivery`: The shipment is on its final
     * delivery route. - `delivered`: The carrier reported successful delivery. -
     * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the
     * carrier instructions before retrying delivery. - `exception`: A carrier exception is
     * blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was
     * returned toward or to its origin. - `voided`: The shipment was voided and will not continue
     * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     */
    "status": "created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /**
     * Lifecycle actions Flint accepts now, independent of permissions. Contains void while the
     * shipment and its fulfillment permit voiding. [] enum: "void". [] (Value): string. Value
     * enum: "void".
     */
    "supported_actions": Array<"void" | (string & {})>;
    /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
export type ShipmentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "delivered_at"?: string;
            "direction": "outbound" | "return" | (string & {});
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "handed_off_at"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_count": number;
            "packages"?: Array<ExpandedPackageSummary>;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "supported_actions": Array<"void" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "shipment.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "delivered_at"?: string;
            "direction": "outbound" | "return" | (string & {});
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "handed_off_at"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_count": number;
            "packages"?: Array<ExpandedPackageSummary>;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "supported_actions": Array<"void" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "shipment.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "shipment.created";
});
/**
 * The `shipment.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ShipmentCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. Creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. When the
     * shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.direction (Required): string. Whether the shipment sends
     * items to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842".
     * object.external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. object.fulfillment_id (Required): string. Fulfillment associated with this
     * shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.handed_off_at (Optional):
     * string. Carrier handoff timestamp for outbound and return shipments, using the recorded
     * shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy
     * an after_handoff execution gate for the declared return_line_items. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.package_count (Required): integer. Total number of packages attached to the shipment,
     * including voided packages. Format: int32. minimum: 0. object.packages (Optional): Array of
     * {@link ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
     * returned when the packages relationship is expanded or when the shipment is created with
     * packages. object.packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
     * fields, including carrier, tracking, status, and supported actions, returned when the
     * package is expanded. object.return_id (Optional): string. Return associated with this
     * shipment, when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return lines and quantities allocated to this return shipment. object.return_line_items[]
     * (Value): {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in
     * a return shipment or package. object.shipment_id (Required): string. Stable identifier of
     * the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional):
     * string. When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Read-only shipment state derived
     * from the shipment's package states. An empty shipment remains a created draft. - `created`:
     * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg
     * is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the
     * carrier. - `in_transit`: The carrier is moving the shipment through its network. -
     * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier
     * reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did
     * not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A
     * carrier exception is blocking normal progress. Resolve the carrier-reported issue. -
     * `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was
     * voided and will not continue through delivery. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now, independent of permissions. Contains void while the shipment and
     * its fulfillment permit voiding. [] enum: "void". object.supported_actions[] (Value): string.
     * Value enum: "void". object.updated_at (Required): string. Last update timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * shipment version for expected_version checks. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. Creation timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". delivered_at (Optional): string. When the shipment was
         * delivered, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * direction (Required): string. Whether the shipment sends items to the buyer or returns
         * items to the merchant. Value enum: "outbound", "return". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * Requires external_system. External references are not unique. Use Idempotency-Key for
         * retries. maxLength: 255. Example: "warehouse-1842". external_system (Optional): string.
         * Name of the external system that external_reference_id belongs to. External references
         * are not unique. Use Idempotency-Key for retries. fulfillment_id (Required): string.
         * Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
         * handed_off_at (Optional): string. Carrier handoff timestamp for outbound and return
         * shipments, using the recorded shipped_at when no separate handoff timestamp exists. For
         * return shipments, this can satisfy an after_handoff execution gate for the declared
         * return_line_items. Format: date-time. Example: "2026-08-02T16:00:00Z". metadata
         * (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated with the
         * shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. Order whose items are
         * transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A". package_count
         * (Required): integer. Total number of packages attached to the shipment, including voided
         * packages. Format: int32. minimum: 0. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
         * returned when the packages relationship is expanded or when the shipment is created with
         * packages. packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
         * fields, including carrier, tracking, status, and supported actions, returned when the
         * package is expanded. return_id (Optional): string. Return associated with this shipment,
         * when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}. Return
         * lines and quantities allocated to this return shipment. return_line_items[] (Value):
         * {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a
         * return shipment or package. shipment_id (Required): string. Stable identifier of the
         * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. When
         * the shipment was shipped, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Read-only shipment state derived from
         * the shipment's package states. An empty shipment remains a created draft. - `created`:
         * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment
         * leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to
         * the carrier. - `in_transit`: The carrier is moving the shipment through its network. -
         * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
         * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
         * delivery but did not complete it. Follow the carrier instructions before retrying
         * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
         * carrier-reported issue. - `returned`: The shipment was returned toward or to its origin.
         * - `voided`: The shipment was voided and will not continue through delivery. Value enum:
         * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts now, independent of permissions.
         * Contains void while the shipment and its fulfillment permit voiding. [] enum: "void".
         * supported_actions[] (Value): string. Value enum: "void". updated_at (Required): string.
         * Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Monotonic shipment version for expected_version checks. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "delivered_at"?: string;
            /**
             * Whether the shipment sends items to the buyer or returns items to the merchant.
             * Value enum: "outbound", "return".
             */
            "direction": "outbound" | "return" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment associated with this shipment. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * Carrier handoff timestamp for outbound and return shipments, using the recorded
             * shipped_at when no separate handoff timestamp exists. For return shipments, this can
             * satisfy an after_handoff execution gate for the declared return_line_items. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "handed_off_at"?: string;
            /**
             * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items are transported by the shipment. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Total number of packages attached to the shipment, including voided packages.
             * Format: int32. minimum: 0.
             */
            "package_count": number;
            /**
             * Summaries of the shipment's packages in creation order, returned when the packages
             * relationship is expanded or when the shipment is created with packages. [] (Value):
             * {@link ExpandedPackageSummary}. A package's summary fields, including carrier,
             * tracking, status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * Return associated with this shipment, when its direction is return. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return lines and quantities allocated to this return shipment. [] (Value): {@link
             * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
             * shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            /** Stable identifier of the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /**
             * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "shipped_at"?: string;
            /**
             * Read-only shipment state derived from the shipment's package states. An empty
             * shipment remains a created draft. - `created`: The shipment leg exists but has not
             * been packed or handed off. - `packed`: The shipment leg is packed and awaiting
             * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. -
             * `in_transit`: The carrier is moving the shipment through its network. -
             * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
             * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
             * delivery but did not complete it. Follow the carrier instructions before retrying
             * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve
             * the carrier-reported issue. - `returned`: The shipment was returned toward or to its
             * origin. - `voided`: The shipment was voided and will not continue through delivery.
             * Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Contains void while
             * the shipment and its fulfillment permit voiding. [] enum: "void". [] (Value):
             * string. Value enum: "void".
             */
            "supported_actions": Array<"void" | (string & {})>;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "shipment.created". */
    "event_type"?: "shipment.created";
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
 * The `shipment.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ShipmentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. Creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. When the
     * shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.direction (Required): string. Whether the shipment sends
     * items to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842".
     * object.external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. object.fulfillment_id (Required): string. Fulfillment associated with this
     * shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.handed_off_at (Optional):
     * string. Carrier handoff timestamp for outbound and return shipments, using the recorded
     * shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy
     * an after_handoff execution gate for the declared return_line_items. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.package_count (Required): integer. Total number of packages attached to the shipment,
     * including voided packages. Format: int32. minimum: 0. object.packages (Optional): Array of
     * {@link ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
     * returned when the packages relationship is expanded or when the shipment is created with
     * packages. object.packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
     * fields, including carrier, tracking, status, and supported actions, returned when the
     * package is expanded. object.return_id (Optional): string. Return associated with this
     * shipment, when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return lines and quantities allocated to this return shipment. object.return_line_items[]
     * (Value): {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in
     * a return shipment or package. object.shipment_id (Required): string. Stable identifier of
     * the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional):
     * string. When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Read-only shipment state derived
     * from the shipment's package states. An empty shipment remains a created draft. - `created`:
     * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg
     * is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the
     * carrier. - `in_transit`: The carrier is moving the shipment through its network. -
     * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier
     * reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did
     * not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A
     * carrier exception is blocking normal progress. Resolve the carrier-reported issue. -
     * `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was
     * voided and will not continue through delivery. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now, independent of permissions. Contains void while the shipment and
     * its fulfillment permit voiding. [] enum: "void". object.supported_actions[] (Value): string.
     * Value enum: "void". object.updated_at (Required): string. Last update timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * shipment version for expected_version checks. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. Creation timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". delivered_at (Optional): string. When the shipment was
         * delivered, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * direction (Required): string. Whether the shipment sends items to the buyer or returns
         * items to the merchant. Value enum: "outbound", "return". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * Requires external_system. External references are not unique. Use Idempotency-Key for
         * retries. maxLength: 255. Example: "warehouse-1842". external_system (Optional): string.
         * Name of the external system that external_reference_id belongs to. External references
         * are not unique. Use Idempotency-Key for retries. fulfillment_id (Required): string.
         * Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
         * handed_off_at (Optional): string. Carrier handoff timestamp for outbound and return
         * shipments, using the recorded shipped_at when no separate handoff timestamp exists. For
         * return shipments, this can satisfy an after_handoff execution gate for the declared
         * return_line_items. Format: date-time. Example: "2026-08-02T16:00:00Z". metadata
         * (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated with the
         * shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. Order whose items are
         * transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A". package_count
         * (Required): integer. Total number of packages attached to the shipment, including voided
         * packages. Format: int32. minimum: 0. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
         * returned when the packages relationship is expanded or when the shipment is created with
         * packages. packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
         * fields, including carrier, tracking, status, and supported actions, returned when the
         * package is expanded. return_id (Optional): string. Return associated with this shipment,
         * when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}. Return
         * lines and quantities allocated to this return shipment. return_line_items[] (Value):
         * {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a
         * return shipment or package. shipment_id (Required): string. Stable identifier of the
         * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. When
         * the shipment was shipped, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Read-only shipment state derived from
         * the shipment's package states. An empty shipment remains a created draft. - `created`:
         * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment
         * leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to
         * the carrier. - `in_transit`: The carrier is moving the shipment through its network. -
         * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
         * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
         * delivery but did not complete it. Follow the carrier instructions before retrying
         * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
         * carrier-reported issue. - `returned`: The shipment was returned toward or to its origin.
         * - `voided`: The shipment was voided and will not continue through delivery. Value enum:
         * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts now, independent of permissions.
         * Contains void while the shipment and its fulfillment permit voiding. [] enum: "void".
         * supported_actions[] (Value): string. Value enum: "void". updated_at (Required): string.
         * Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Monotonic shipment version for expected_version checks. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "delivered_at"?: string;
            /**
             * Whether the shipment sends items to the buyer or returns items to the merchant.
             * Value enum: "outbound", "return".
             */
            "direction": "outbound" | "return" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment associated with this shipment. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * Carrier handoff timestamp for outbound and return shipments, using the recorded
             * shipped_at when no separate handoff timestamp exists. For return shipments, this can
             * satisfy an after_handoff execution gate for the declared return_line_items. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "handed_off_at"?: string;
            /**
             * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items are transported by the shipment. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Total number of packages attached to the shipment, including voided packages.
             * Format: int32. minimum: 0.
             */
            "package_count": number;
            /**
             * Summaries of the shipment's packages in creation order, returned when the packages
             * relationship is expanded or when the shipment is created with packages. [] (Value):
             * {@link ExpandedPackageSummary}. A package's summary fields, including carrier,
             * tracking, status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * Return associated with this shipment, when its direction is return. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return lines and quantities allocated to this return shipment. [] (Value): {@link
             * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
             * shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            /** Stable identifier of the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /**
             * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "shipped_at"?: string;
            /**
             * Read-only shipment state derived from the shipment's package states. An empty
             * shipment remains a created draft. - `created`: The shipment leg exists but has not
             * been packed or handed off. - `packed`: The shipment leg is packed and awaiting
             * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. -
             * `in_transit`: The carrier is moving the shipment through its network. -
             * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
             * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
             * delivery but did not complete it. Follow the carrier instructions before retrying
             * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve
             * the carrier-reported issue. - `returned`: The shipment was returned toward or to its
             * origin. - `voided`: The shipment was voided and will not continue through delivery.
             * Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Contains void while
             * the shipment and its fulfillment permit voiding. [] enum: "void". [] (Value):
             * string. Value enum: "void".
             */
            "supported_actions": Array<"void" | (string & {})>;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "shipment.created". */
    "event_type"?: "shipment.created";
});
/**
 * Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was
 * handed to the carrier.
 */
export type ShipmentFulfillmentDetails = {
    /**
     * When the shipment was handed to the carrier. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * IANA zone the shipping window was entered in, used for display. window_start_at and
     * window_end_at are absolute timestamps, so this does not change the window. maxLength: 255.
     */
    "timezone"?: string;
    /** End of the scheduled shipping window. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /**
     * Start of the scheduled shipping window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
};
/** A page of `Shipment` objects. */
export type ShipmentListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Shipment}. A shipment carrying fulfilled order items.
     */
    "data": Array<Shipment>;
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
/** A response containing `Shipment` data. */
export type ShipmentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A shipment carrying
     * fulfilled order items.
     */
    "data": Shipment;
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
export type ShipmentUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "delivered_at"?: string;
            "direction": "outbound" | "return" | (string & {});
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "handed_off_at"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_count": number;
            "packages"?: Array<ExpandedPackageSummary>;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "supported_actions": Array<"void" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Shipment>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "shipment.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "delivered_at"?: string;
            "direction": "outbound" | "return" | (string & {});
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "handed_off_at"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_count": number;
            "packages"?: Array<ExpandedPackageSummary>;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "supported_actions": Array<"void" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Shipment>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "shipment.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "shipment.updated";
});
