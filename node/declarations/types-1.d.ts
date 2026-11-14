import type { APIKeyAuthContext } from './types-0.js';
import type { CLILoginAuthContext } from './types-4.js';
import type { OnboardingSessionAuthContext, MoneyValue, MoneyMovementListMeta } from './types-39.js';
import type { PartnerAppAuthContext } from './types-43.js';
import type { WorkloadIdentityAuthContext } from './types-70.js';
import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams, ExpandedOrderSummary } from './types-24.js';
import type { ResponseMeta, ResourceReference, ResolvePaymentLinkResponse } from './types-54.js';
import type { Credentials } from './types-14.js';
import type { MerchantWebhookEnvelope, MetadataMap, ModifierSet } from './types-38.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type {
    CategoryReference,
    CheckoutBuyerContact,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutMerchantSupport,
    CheckoutPaymentConfig,
    CheckoutPaymentMethodSave,
    CheckoutPrefill,
    CheckoutPromotionConfig
} from './types-5.js';
import type { ImageAttachment, Image } from './types-28.js';
import type { SelectedProductOption } from './types-59.js';
import type { CreateBundleRequestInput } from './types-7.js';
import type { UpdateBundleRequestInput } from './types-66.js';
import type {
    BuyerPauseActionOptions,
    BuyerPayBalanceActionOptions,
    BuyerPauseCapability,
    BuyerPauseCapabilityInput,
    BuyerErrorRemediation,
    BuyerOrderPaymentAttempt,
    BuyerPaymentCollection,
    BuyerCreateReturnResolutionPreviewRequest,
    BuyerCreateReturnResolutionPreviewRequestInput
} from './types-2.js';
import type {
    BuyerRetryPaymentActionOptions,
    BuyerRetentionOffer,
    BuyerSkipCapability,
    BuyerRetentionOfferRequestInput,
    BuyerSkipCapabilityInput,
    BuyerRefund,
    BuyerSetupCollection
} from './types-3.js';
import type {
    CheckoutRedirects,
    CheckoutSessionTax,
    CheckoutSubscriptionTerms,
    CheckoutTheme,
    CheckoutTipConfig
} from './types-6.js';
import type { LegalSettings } from './types-35.js';
import type { CreateReturnEligibilityPreviewRequest, CreateReturnEligibilityPreviewRequestInput } from './types-12.js';
import type { ReturnLineItemRequest } from './types-56.js';
/** Non-secret metadata for the calling credential, selected by auth_type. */
export type AuthContext = ({
    /**
     * Access level; scoped tokens always have restricted access. Value enum: "full", "read_only",
     * "restricted".
     */
    "access"?: "full" | "read_only" | "restricted" | (string & {});
    /** ID of the API key. Example: "key_01KEZF7C008CTC2G5V6J08M6S7". */
    "api_key_id"?: string;
    /**
     * Credential type that selects this object's fields. Value enum: "api_key", "cli_login",
     * "workload_identity", "partner_app", "onboarding_session".
     */
    "auth_type": "api_key" | "cli_login" | "workload_identity" | "partner_app" | "onboarding_session" | (string & {});
    /** Whether the onboarding user's role permits managing API keys. */
    "can_manage_api_keys"?: boolean;
    /**
     * ID of the selected CLI context. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /**
     * Time the credential expires; absent for keys without an expiry. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Time fresh identity verification expires; it may be in the past. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "fresh_verification_expires_at"?: string;
    /** Merchant the credential acts for. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Whether the credential acts in test or live mode. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** Name of the key, CLI context, or workload identity. */
    "name"?: string;
    /** ID of the CLI login grant. Example: "clg_01KEZF7C00F8Q8XM1TZ6Y1GB31". */
    "oauth_grant_id"?: string;
    /**
     * ID of the CLI session. Example:
     * "session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".
     */
    "oauth_session_id"?: string;
    /**
     * Organization selected by the key's access scope, when available. Example:
     * "org_01KEZF7C00EA57F19C2ZFWA7HJ".
     */
    "organization_id"?: string;
    /** ID of the partner app. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV". */
    "partner_app_id"?: string;
    /**
     * ID of the partner app install. Null when the API key is not linked to an install. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: string | null;
    /**
     * Sandbox the credential is bound to, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * Current granted API scopes, resolved at request time for full and read_only keys. []
     * (Value): string.
     */
    "scopes"?: Array<string>;
    /** User the session acts for. Example: "usr_01KEZF7C00YC8757ZYP9727JM0". */
    "user_id"?: string;
    /** ID of the workload identity. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP". */
    "workload_identity_id"?: string;
})
    & ((Exclude<APIKeyAuthContext & object, readonly unknown[]>)
    | (Exclude<CLILoginAuthContext & object, readonly unknown[]>)
    | (Exclude<WorkloadIdentityAuthContext & object, readonly unknown[]>)
    | (Exclude<PartnerAppAuthContext & object, readonly unknown[]>)
    | (Exclude<OnboardingSessionAuthContext & object, readonly unknown[]>)
    | (Record<string, unknown>));
export type AuthContextGetParams = DisputesAcceptParams;
/** A response containing `AuthContext` data. */
export type AuthContextResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Non-secret metadata for
     * the calling credential, selected by auth_type.
     */
    "data": AuthContext;
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
export type AuthMode = keyof Credentials;
/** Backorder settings shared by every variant using an inventory item. */
export type BackorderPolicy = {
    /** Whether this inventory item allows backorders. */
    "enabled": boolean;
    /** Expected shipping date. Null when unknown. Format: date. Example: "2026-08-02". */
    "expected_ship_date": string | null;
    /**
     * Maximum units on backorder across the item's levels. Null when there is no cap. Format:
     * int64. minimum: 1. maximum: 9007199254740991.
     */
    "limit_quantity": number | null;
};
/**
 * Current balances for one currency at observed_at. Available and pending amounts are separate
 * buckets and can be negative. Reserve and held amounts are excluded from available_money.
 */
export type Balance = {
    /**
     * Signed available amounts grouped by balance source type. Keys are an open set; US accounts
     * use card and bank_account. When supplied as a complete breakdown, entries sum to
     * available_money. Active payout holds reduce both available_money and one source entry by the
     * same amount. A payout with no recorded source type uses card. A hold whose source is absent
     * from the map uses the largest source amount, with ties broken by source name. * (Value):
     * {@link MoneyValue}. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "available_by_source_type"?: Record<string, MoneyValue>;
    /**
     * Signed amount available for payouts after active payout holds are deducted. Separate from
     * pending_money, reserve_money, and held_money. Signed monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /** Stable identifier of this currency's balance. Example: "bal_01KEZF7C00DE593X12REV5EFHZ". */
    "balance_id": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Funds set aside for payouts you created that haven't been debited from your balance yet.
     * They aren't payable and aren't included in `available_money`. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "held_money": MoneyValue;
    /** Merchant whose balance this is. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored
     * balances retain their observation time; a fresh provider read uses the time of that read.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "observed_at": string;
    /**
     * Whether payouts are ready for this balance currency, including an active default payout
     * destination and account readiness. While it is false, payments can still succeed, and their
     * funds wait in your balance.
     */
    "payouts_enabled": boolean;
    /**
     * Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use
     * card and bank_account. When supplied as a complete breakdown, entries sum to pending_money.
     * These amounts are separate from available_by_source_type. * (Value): {@link MoneyValue}.
     * Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "pending_by_source_type"?: Record<string, MoneyValue>;
    /**
     * Signed amount awaiting availability. Separate from available_money; pending_by_source_type
     * breaks down this amount when source details are supplied. Signed monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "pending_money": MoneyValue;
    /**
     * Amount held in reserve. It doesn't overlap available_money or held_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "reserve_money": MoneyValue;
};
/** A list of `Balance` objects. */
export type BalanceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Balance}. Current balances for one currency at observed_at. Available and pending amounts
     * are separate buckets and can be negative. Reserve and held amounts are excluded from
     * available_money.
     */
    "data": Array<Balance>;
    /**
     * Additional information about this response. Response metadata for money movement lists,
     * including request and trace IDs, warnings, and the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A change to the merchant's balance. */
export type BalanceTransaction = {
    /**
     * Signed gross amount of this balance movement, before any fee. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * When the funds become, or became, available to pay out. Present on pending transactions as
     * the expected time; status says whether they are available now. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "available_at"?: string;
    /**
     * Stable identifier of this balance transaction. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     */
    "balance_transaction_id": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Short text describing the movement, from Flint or your processor. Use it for display, not
     * for matching.
     */
    "description"?: string;
    /**
     * Fee deducted from this balance movement. On payments, this is processing_fee_money plus
     * every add-on fee in add_on_fees plus platform_fee.amount_money when a partner app charged a
     * platform fee; the payment intent carries the breakdown. On disputes and dispute reversals,
     * this includes the processor's dispute fee charged to your balance or actually returned to
     * it. Charges are positive; returned fees are negative. A dispute of -4200 with a fee of 1500
     * has a net amount of -5700. A won dispute does not by itself return the fee. Signed monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "fee_money": MoneyValue;
    /** Merchant whose balance this transaction moved. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Signed net effect on your Flint balance: amount_money minus fee_money in the same currency.
     * Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "net_money": MoneyValue;
    /** When the balance movement happened. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * The order, inlined when you request expand=order. null when expanded and the transaction has
     * no order_id. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * The Flint order this movement relates to, such as the order a payment was for. Absent when
     * the movement isn't tied to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * The payout that carried this balance transaction to your bank. Set once, when that payout's
     * contents are prepared, and never changed afterward, including if the payout later fails or
     * is reversed. Absent until then, and on transactions no payout carries. Example:
     * "po_01KEZF7C00PXK8XREWJA6K4FGV".
     */
    "payout_id"?: string;
    /**
     * Earlier balance transactions this one is linked to, including the exact payment principal a
     * refund returns, the payout transaction that a payout_failure, payout_cancellation, or
     * payout_reversal returns, or the collection a merchant_billing_collection_reversal reverses.
     * Empty when there are none. [] (Value): string. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     */
    "related_balance_transaction_ids": Array<string>;
    /**
     * The Flint resource behind this movement: a payment_intent, payment_split, refund, dispute,
     * payout, payout_destination, merchant_billing_invoice, or platform_fee_payout. Absent when
     * the movement has none. A reference to another resource by `resource_type` and `resource_id`.
     */
    "related_resource"?: ResourceReference;
    /**
     * Whether the funds can be paid out yet: pending until they become available, then available.
     * Only these two values appear, and the change to available sends balance_transaction.updated.
     * Value enum: "pending", "available".
     */
    "status": "pending" | "available" | (string & {});
    /**
     * Kind of balance movement. Unmapped movement types are returned as other. Value enum:
     * "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout",
     * "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance",
     * "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
     * "merchant_billing_collection", "merchant_billing_collection_reversal",
     * "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal",
     * "payment_split", "payment_split_reversal", "payment_split_reinstatement",
     * "payment_split_failure", "seller_shortfall_coverage", "seller_shortfall_coverage_reversal",
     * "other".
     */
    "type": "payment"
        | "refund"
        | "dispute"
        | "dispute_reversal"
        | "return"
        | "recovery"
        | "payout"
        | "payout_failure"
        | "payout_cancellation"
        | "payout_reversal"
        | "payout_advance"
        | "payout_advance_funding"
        | "reserve_hold"
        | "reserve_release"
        | "adjustment"
        | "merchant_billing_collection"
        | "merchant_billing_collection_reversal"
        | "platform_fee_refund"
        | "platform_fee_payout"
        | "platform_fee_payout_reversal"
        | "payment_split"
        | "payment_split_reversal"
        | "payment_split_reinstatement"
        | "payment_split_failure"
        | "seller_shortfall_coverage"
        | "seller_shortfall_coverage_reversal"
        | "other"
        | (string & {});
};
export type BalanceTransactionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "available_at"?: string;
            "balance_transaction_id": string;
            "currency": string;
            "description"?: string;
            "fee_money": MoneyValue;
            "merchant_id": string;
            "net_money": MoneyValue;
            "occurred_at": string;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payout_id"?: string;
            "related_balance_transaction_ids": Array<string>;
            "related_resource"?: ResourceReference;
            "status": "pending" | "available" | (string & {});
            "type": "payment"
                | "refund"
                | "dispute"
                | "dispute_reversal"
                | "return"
                | "recovery"
                | "payout"
                | "payout_failure"
                | "payout_cancellation"
                | "payout_reversal"
                | "payout_advance"
                | "payout_advance_funding"
                | "reserve_hold"
                | "reserve_release"
                | "adjustment"
                | "merchant_billing_collection"
                | "merchant_billing_collection_reversal"
                | "platform_fee_refund"
                | "platform_fee_payout"
                | "platform_fee_payout_reversal"
                | "payment_split"
                | "payment_split_reversal"
                | "payment_split_reinstatement"
                | "payment_split_failure"
                | "seller_shortfall_coverage"
                | "seller_shortfall_coverage_reversal"
                | "other"
                | (string & {});
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "balance_transaction.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "available_at"?: string;
            "balance_transaction_id": string;
            "currency": string;
            "description"?: string;
            "fee_money": MoneyValue;
            "merchant_id": string;
            "net_money": MoneyValue;
            "occurred_at": string;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payout_id"?: string;
            "related_balance_transaction_ids": Array<string>;
            "related_resource"?: ResourceReference;
            "status": "pending" | "available" | (string & {});
            "type": "payment"
                | "refund"
                | "dispute"
                | "dispute_reversal"
                | "return"
                | "recovery"
                | "payout"
                | "payout_failure"
                | "payout_cancellation"
                | "payout_reversal"
                | "payout_advance"
                | "payout_advance_funding"
                | "reserve_hold"
                | "reserve_release"
                | "adjustment"
                | "merchant_billing_collection"
                | "merchant_billing_collection_reversal"
                | "platform_fee_refund"
                | "platform_fee_payout"
                | "platform_fee_payout_reversal"
                | "payment_split"
                | "payment_split_reversal"
                | "payment_split_reinstatement"
                | "payment_split_failure"
                | "seller_shortfall_coverage"
                | "seller_shortfall_coverage_reversal"
                | "other"
                | (string & {});
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "balance_transaction.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "balance_transaction.created";
});
/**
 * The `balance_transaction.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type BalanceTransactionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Signed gross amount
     * of this balance movement, before any fee. Signed monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.available_at (Optional): string. When the
     * funds become, or became, available to pay out. Present on pending transactions as the
     * expected time; status says whether they are available now. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.balance_transaction_id (Required): string. Stable identifier
     * of this balance transaction. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". object.currency
     * (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD". object.description (Optional): string. Short text describing the movement,
     * from Flint or your processor. Use it for display, not for matching. object.fee_money
     * (Required): {@link MoneyValue}. Fee deducted from this balance movement. On payments, this
     * is processing_fee_money plus every add-on fee in add_on_fees plus platform_fee.amount_money
     * when a partner app charged a platform fee; the payment intent carries the breakdown. On
     * disputes and dispute reversals, this includes the processor's dispute fee charged to your
     * balance or actually returned to it. Charges are positive; returned fees are negative. A
     * dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by
     * itself return the fee. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.merchant_id (Required): string. Merchant whose balance this
     * transaction moved. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.net_money (Required):
     * {@link MoneyValue}. Signed net effect on your Flint balance: amount_money minus fee_money in
     * the same currency. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.occurred_at (Required): string. When the balance movement
     * happened. Format: date-time. Example: "2026-08-02T16:00:00Z". object.order (Optional):
     * {@link ExpandedOrderSummary} or null. The order, inlined when you request expand=order. null
     * when expanded and the transaction has no order_id. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. The Flint order
     * this movement relates to, such as the order a payment was for. Absent when the movement
     * isn't tied to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payout_id
     * (Optional): string. The payout that carried this balance transaction to your bank. Set once,
     * when that payout's contents are prepared, and never changed afterward, including if the
     * payout later fails or is reversed. Absent until then, and on transactions no payout carries.
     * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.related_balance_transaction_ids (Required):
     * Array of string. Earlier balance transactions this one is linked to, including the exact
     * payment principal a refund returns, the payout transaction that a payout_failure,
     * payout_cancellation, or payout_reversal returns, or the collection a
     * merchant_billing_collection_reversal reverses. Empty when there are none.
     * object.related_balance_transaction_ids[] (Value): string. Example:
     * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". object.related_resource (Optional): {@link
     * ResourceReference}. The Flint resource behind this movement: a payment_intent,
     * payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or
     * platform_fee_payout. Absent when the movement has none. A reference to another resource by
     * `resource_type` and `resource_id`. object.status (Required): string. Whether the funds can
     * be paid out yet: pending until they become available, then available. Only these two values
     * appear, and the change to available sends balance_transaction.updated. Value enum:
     * "pending", "available". object.type (Required): string. Kind of balance movement. Unmapped
     * movement types are returned as other. Value enum: "payment", "refund", "dispute",
     * "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation",
     * "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold",
     * "reserve_release", "adjustment", "merchant_billing_collection",
     * "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout",
     * "platform_fee_payout_reversal", "payment_split", "payment_split_reversal",
     * "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage",
     * "seller_shortfall_coverage_reversal", "other".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Signed gross amount of this balance
         * movement, before any fee. Signed monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. available_at (Optional): string. When the funds become, or
         * became, available to pay out. Present on pending transactions as the expected time;
         * status says whether they are available now. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". balance_transaction_id (Required): string. Stable identifier of
         * this balance transaction. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". currency
         * (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
         * ^[A-Z]{3}$. Example: "USD". description (Optional): string. Short text describing the
         * movement, from Flint or your processor. Use it for display, not for matching. fee_money
         * (Required): {@link MoneyValue}. Fee deducted from this balance movement. On payments,
         * this is processing_fee_money plus every add-on fee in add_on_fees plus
         * platform_fee.amount_money when a partner app charged a platform fee; the payment intent
         * carries the breakdown. On disputes and dispute reversals, this includes the processor's
         * dispute fee charged to your balance or actually returned to it. Charges are positive;
         * returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of
         * -5700. A won dispute does not by itself return the fee. Signed monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. merchant_id
         * (Required): string. Merchant whose balance this transaction moved. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". net_money (Required): {@link MoneyValue}. Signed net
         * effect on your Flint balance: amount_money minus fee_money in the same currency. Signed
         * monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * occurred_at (Required): string. When the balance movement happened. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". order (Optional): {@link ExpandedOrderSummary} or null.
         * The order, inlined when you request expand=order. null when expanded and the transaction
         * has no order_id. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. The Flint order this movement relates to, such as the order
         * a payment was for. Absent when the movement isn't tied to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payout_id (Optional): string. The payout that carried
         * this balance transaction to your bank. Set once, when that payout's contents are
         * prepared, and never changed afterward, including if the payout later fails or is
         * reversed. Absent until then, and on transactions no payout carries. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". related_balance_transaction_ids (Required): Array of
         * string. Earlier balance transactions this one is linked to, including the exact payment
         * principal a refund returns, the payout transaction that a payout_failure,
         * payout_cancellation, or payout_reversal returns, or the collection a
         * merchant_billing_collection_reversal reverses. Empty when there are none.
         * related_balance_transaction_ids[] (Value): string. Example:
         * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". related_resource (Optional): {@link
         * ResourceReference}. The Flint resource behind this movement: a payment_intent,
         * payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or
         * platform_fee_payout. Absent when the movement has none. A reference to another resource
         * by `resource_type` and `resource_id`. status (Required): string. Whether the funds can
         * be paid out yet: pending until they become available, then available. Only these two
         * values appear, and the change to available sends balance_transaction.updated. Value
         * enum: "pending", "available". type (Required): string. Kind of balance movement.
         * Unmapped movement types are returned as other. Value enum: "payment", "refund",
         * "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure",
         * "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding",
         * "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection",
         * "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout",
         * "platform_fee_payout_reversal", "payment_split", "payment_split_reversal",
         * "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage",
         * "seller_shortfall_coverage_reversal", "other".
         */
        "object": {
            /**
             * Signed gross amount of this balance movement, before any fee. Signed monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * When the funds become, or became, available to pay out. Present on pending
             * transactions as the expected time; status says whether they are available now.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "available_at"?: string;
            /**
             * Stable identifier of this balance transaction. Example:
             * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
             */
            "balance_transaction_id": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * Short text describing the movement, from Flint or your processor. Use it for
             * display, not for matching.
             */
            "description"?: string;
            /**
             * Fee deducted from this balance movement. On payments, this is processing_fee_money
             * plus every add-on fee in add_on_fees plus platform_fee.amount_money when a partner
             * app charged a platform fee; the payment intent carries the breakdown. On disputes
             * and dispute reversals, this includes the processor's dispute fee charged to your
             * balance or actually returned to it. Charges are positive; returned fees are
             * negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won
             * dispute does not by itself return the fee. Signed monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "fee_money": MoneyValue;
            /**
             * Merchant whose balance this transaction moved. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Signed net effect on your Flint balance: amount_money minus fee_money in the same
             * currency. Signed monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "net_money": MoneyValue;
            /**
             * When the balance movement happened. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "occurred_at": string;
            /**
             * The order, inlined when you request expand=order. null when expanded and the
             * transaction has no order_id. Present only when `expand` includes `order`; `null`
             * when expanded and there is no related order. anyOf[1] (Value): {@link
             * ExpandedOrderSummary}. An order's summary fields, including status, payment and
             * refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The Flint order this movement relates to, such as the order a payment was for.
             * Absent when the movement isn't tied to an order. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * The payout that carried this balance transaction to your bank. Set once, when that
             * payout's contents are prepared, and never changed afterward, including if the payout
             * later fails or is reversed. Absent until then, and on transactions no payout
             * carries. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "payout_id"?: string;
            /**
             * Earlier balance transactions this one is linked to, including the exact payment
             * principal a refund returns, the payout transaction that a payout_failure,
             * payout_cancellation, or payout_reversal returns, or the collection a
             * merchant_billing_collection_reversal reverses. Empty when there are none. []
             * (Value): string. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
             */
            "related_balance_transaction_ids": Array<string>;
            /**
             * The Flint resource behind this movement: a payment_intent, payment_split, refund,
             * dispute, payout, payout_destination, merchant_billing_invoice, or
             * platform_fee_payout. Absent when the movement has none. A reference to another
             * resource by `resource_type` and `resource_id`.
             */
            "related_resource"?: ResourceReference;
            /**
             * Whether the funds can be paid out yet: pending until they become available, then
             * available. Only these two values appear, and the change to available sends
             * balance_transaction.updated. Value enum: "pending", "available".
             */
            "status": "pending" | "available" | (string & {});
            /**
             * Kind of balance movement. Unmapped movement types are returned as other. Value enum:
             * "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout",
             * "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance",
             * "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
             * "merchant_billing_collection", "merchant_billing_collection_reversal",
             * "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal",
             * "payment_split", "payment_split_reversal", "payment_split_reinstatement",
             * "payment_split_failure", "seller_shortfall_coverage",
             * "seller_shortfall_coverage_reversal", "other".
             */
            "type": "payment"
                | "refund"
                | "dispute"
                | "dispute_reversal"
                | "return"
                | "recovery"
                | "payout"
                | "payout_failure"
                | "payout_cancellation"
                | "payout_reversal"
                | "payout_advance"
                | "payout_advance_funding"
                | "reserve_hold"
                | "reserve_release"
                | "adjustment"
                | "merchant_billing_collection"
                | "merchant_billing_collection_reversal"
                | "platform_fee_refund"
                | "platform_fee_payout"
                | "platform_fee_payout_reversal"
                | "payment_split"
                | "payment_split_reversal"
                | "payment_split_reinstatement"
                | "payment_split_failure"
                | "seller_shortfall_coverage"
                | "seller_shortfall_coverage_reversal"
                | "other"
                | (string & {});
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "balance_transaction.created". */
    "event_type"?: "balance_transaction.created";
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
 * The `balance_transaction.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type BalanceTransactionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Signed gross amount
     * of this balance movement, before any fee. Signed monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.available_at (Optional): string. When the
     * funds become, or became, available to pay out. Present on pending transactions as the
     * expected time; status says whether they are available now. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.balance_transaction_id (Required): string. Stable identifier
     * of this balance transaction. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". object.currency
     * (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD". object.description (Optional): string. Short text describing the movement,
     * from Flint or your processor. Use it for display, not for matching. object.fee_money
     * (Required): {@link MoneyValue}. Fee deducted from this balance movement. On payments, this
     * is processing_fee_money plus every add-on fee in add_on_fees plus platform_fee.amount_money
     * when a partner app charged a platform fee; the payment intent carries the breakdown. On
     * disputes and dispute reversals, this includes the processor's dispute fee charged to your
     * balance or actually returned to it. Charges are positive; returned fees are negative. A
     * dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by
     * itself return the fee. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.merchant_id (Required): string. Merchant whose balance this
     * transaction moved. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.net_money (Required):
     * {@link MoneyValue}. Signed net effect on your Flint balance: amount_money minus fee_money in
     * the same currency. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.occurred_at (Required): string. When the balance movement
     * happened. Format: date-time. Example: "2026-08-02T16:00:00Z". object.order (Optional):
     * {@link ExpandedOrderSummary} or null. The order, inlined when you request expand=order. null
     * when expanded and the transaction has no order_id. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. The Flint order
     * this movement relates to, such as the order a payment was for. Absent when the movement
     * isn't tied to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payout_id
     * (Optional): string. The payout that carried this balance transaction to your bank. Set once,
     * when that payout's contents are prepared, and never changed afterward, including if the
     * payout later fails or is reversed. Absent until then, and on transactions no payout carries.
     * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.related_balance_transaction_ids (Required):
     * Array of string. Earlier balance transactions this one is linked to, including the exact
     * payment principal a refund returns, the payout transaction that a payout_failure,
     * payout_cancellation, or payout_reversal returns, or the collection a
     * merchant_billing_collection_reversal reverses. Empty when there are none.
     * object.related_balance_transaction_ids[] (Value): string. Example:
     * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". object.related_resource (Optional): {@link
     * ResourceReference}. The Flint resource behind this movement: a payment_intent,
     * payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or
     * platform_fee_payout. Absent when the movement has none. A reference to another resource by
     * `resource_type` and `resource_id`. object.status (Required): string. Whether the funds can
     * be paid out yet: pending until they become available, then available. Only these two values
     * appear, and the change to available sends balance_transaction.updated. Value enum:
     * "pending", "available". object.type (Required): string. Kind of balance movement. Unmapped
     * movement types are returned as other. Value enum: "payment", "refund", "dispute",
     * "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation",
     * "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold",
     * "reserve_release", "adjustment", "merchant_billing_collection",
     * "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout",
     * "platform_fee_payout_reversal", "payment_split", "payment_split_reversal",
     * "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage",
     * "seller_shortfall_coverage_reversal", "other".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Signed gross amount of this balance
         * movement, before any fee. Signed monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. available_at (Optional): string. When the funds become, or
         * became, available to pay out. Present on pending transactions as the expected time;
         * status says whether they are available now. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". balance_transaction_id (Required): string. Stable identifier of
         * this balance transaction. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". currency
         * (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
         * ^[A-Z]{3}$. Example: "USD". description (Optional): string. Short text describing the
         * movement, from Flint or your processor. Use it for display, not for matching. fee_money
         * (Required): {@link MoneyValue}. Fee deducted from this balance movement. On payments,
         * this is processing_fee_money plus every add-on fee in add_on_fees plus
         * platform_fee.amount_money when a partner app charged a platform fee; the payment intent
         * carries the breakdown. On disputes and dispute reversals, this includes the processor's
         * dispute fee charged to your balance or actually returned to it. Charges are positive;
         * returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of
         * -5700. A won dispute does not by itself return the fee. Signed monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. merchant_id
         * (Required): string. Merchant whose balance this transaction moved. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". net_money (Required): {@link MoneyValue}. Signed net
         * effect on your Flint balance: amount_money minus fee_money in the same currency. Signed
         * monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * occurred_at (Required): string. When the balance movement happened. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". order (Optional): {@link ExpandedOrderSummary} or null.
         * The order, inlined when you request expand=order. null when expanded and the transaction
         * has no order_id. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. The Flint order this movement relates to, such as the order
         * a payment was for. Absent when the movement isn't tied to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payout_id (Optional): string. The payout that carried
         * this balance transaction to your bank. Set once, when that payout's contents are
         * prepared, and never changed afterward, including if the payout later fails or is
         * reversed. Absent until then, and on transactions no payout carries. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". related_balance_transaction_ids (Required): Array of
         * string. Earlier balance transactions this one is linked to, including the exact payment
         * principal a refund returns, the payout transaction that a payout_failure,
         * payout_cancellation, or payout_reversal returns, or the collection a
         * merchant_billing_collection_reversal reverses. Empty when there are none.
         * related_balance_transaction_ids[] (Value): string. Example:
         * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". related_resource (Optional): {@link
         * ResourceReference}. The Flint resource behind this movement: a payment_intent,
         * payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or
         * platform_fee_payout. Absent when the movement has none. A reference to another resource
         * by `resource_type` and `resource_id`. status (Required): string. Whether the funds can
         * be paid out yet: pending until they become available, then available. Only these two
         * values appear, and the change to available sends balance_transaction.updated. Value
         * enum: "pending", "available". type (Required): string. Kind of balance movement.
         * Unmapped movement types are returned as other. Value enum: "payment", "refund",
         * "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure",
         * "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding",
         * "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection",
         * "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout",
         * "platform_fee_payout_reversal", "payment_split", "payment_split_reversal",
         * "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage",
         * "seller_shortfall_coverage_reversal", "other".
         */
        "object": {
            /**
             * Signed gross amount of this balance movement, before any fee. Signed monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * When the funds become, or became, available to pay out. Present on pending
             * transactions as the expected time; status says whether they are available now.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "available_at"?: string;
            /**
             * Stable identifier of this balance transaction. Example:
             * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
             */
            "balance_transaction_id": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * Short text describing the movement, from Flint or your processor. Use it for
             * display, not for matching.
             */
            "description"?: string;
            /**
             * Fee deducted from this balance movement. On payments, this is processing_fee_money
             * plus every add-on fee in add_on_fees plus platform_fee.amount_money when a partner
             * app charged a platform fee; the payment intent carries the breakdown. On disputes
             * and dispute reversals, this includes the processor's dispute fee charged to your
             * balance or actually returned to it. Charges are positive; returned fees are
             * negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won
             * dispute does not by itself return the fee. Signed monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "fee_money": MoneyValue;
            /**
             * Merchant whose balance this transaction moved. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Signed net effect on your Flint balance: amount_money minus fee_money in the same
             * currency. Signed monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "net_money": MoneyValue;
            /**
             * When the balance movement happened. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "occurred_at": string;
            /**
             * The order, inlined when you request expand=order. null when expanded and the
             * transaction has no order_id. Present only when `expand` includes `order`; `null`
             * when expanded and there is no related order. anyOf[1] (Value): {@link
             * ExpandedOrderSummary}. An order's summary fields, including status, payment and
             * refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The Flint order this movement relates to, such as the order a payment was for.
             * Absent when the movement isn't tied to an order. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * The payout that carried this balance transaction to your bank. Set once, when that
             * payout's contents are prepared, and never changed afterward, including if the payout
             * later fails or is reversed. Absent until then, and on transactions no payout
             * carries. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "payout_id"?: string;
            /**
             * Earlier balance transactions this one is linked to, including the exact payment
             * principal a refund returns, the payout transaction that a payout_failure,
             * payout_cancellation, or payout_reversal returns, or the collection a
             * merchant_billing_collection_reversal reverses. Empty when there are none. []
             * (Value): string. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
             */
            "related_balance_transaction_ids": Array<string>;
            /**
             * The Flint resource behind this movement: a payment_intent, payment_split, refund,
             * dispute, payout, payout_destination, merchant_billing_invoice, or
             * platform_fee_payout. Absent when the movement has none. A reference to another
             * resource by `resource_type` and `resource_id`.
             */
            "related_resource"?: ResourceReference;
            /**
             * Whether the funds can be paid out yet: pending until they become available, then
             * available. Only these two values appear, and the change to available sends
             * balance_transaction.updated. Value enum: "pending", "available".
             */
            "status": "pending" | "available" | (string & {});
            /**
             * Kind of balance movement. Unmapped movement types are returned as other. Value enum:
             * "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout",
             * "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance",
             * "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
             * "merchant_billing_collection", "merchant_billing_collection_reversal",
             * "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal",
             * "payment_split", "payment_split_reversal", "payment_split_reinstatement",
             * "payment_split_failure", "seller_shortfall_coverage",
             * "seller_shortfall_coverage_reversal", "other".
             */
            "type": "payment"
                | "refund"
                | "dispute"
                | "dispute_reversal"
                | "return"
                | "recovery"
                | "payout"
                | "payout_failure"
                | "payout_cancellation"
                | "payout_reversal"
                | "payout_advance"
                | "payout_advance_funding"
                | "reserve_hold"
                | "reserve_release"
                | "adjustment"
                | "merchant_billing_collection"
                | "merchant_billing_collection_reversal"
                | "platform_fee_refund"
                | "platform_fee_payout"
                | "platform_fee_payout_reversal"
                | "payment_split"
                | "payment_split_reversal"
                | "payment_split_reinstatement"
                | "payment_split_failure"
                | "seller_shortfall_coverage"
                | "seller_shortfall_coverage_reversal"
                | "other"
                | (string & {});
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "balance_transaction.created". */
    "event_type"?: "balance_transaction.created";
});
/** A page of `BalanceTransaction` objects. */
export type BalanceTransactionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BalanceTransaction}. A change to the merchant's balance.
     */
    "data": Array<BalanceTransaction>;
    /**
     * Additional information about this response. Response metadata for money movement lists,
     * including request and trace IDs, warnings, and the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
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
/** A response containing `BalanceTransaction` data. */
export type BalanceTransactionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A change to the
     * merchant's balance.
     */
    "data": BalanceTransaction;
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
export type BalanceTransactionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "available_at"?: string;
            "balance_transaction_id": string;
            "currency": string;
            "description"?: string;
            "fee_money": MoneyValue;
            "merchant_id": string;
            "net_money": MoneyValue;
            "occurred_at": string;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payout_id"?: string;
            "related_balance_transaction_ids": Array<string>;
            "related_resource"?: ResourceReference;
            "status": "pending" | "available" | (string & {});
            "type": "payment"
                | "refund"
                | "dispute"
                | "dispute_reversal"
                | "return"
                | "recovery"
                | "payout"
                | "payout_failure"
                | "payout_cancellation"
                | "payout_reversal"
                | "payout_advance"
                | "payout_advance_funding"
                | "reserve_hold"
                | "reserve_release"
                | "adjustment"
                | "merchant_billing_collection"
                | "merchant_billing_collection_reversal"
                | "platform_fee_refund"
                | "platform_fee_payout"
                | "platform_fee_payout_reversal"
                | "payment_split"
                | "payment_split_reversal"
                | "payment_split_reinstatement"
                | "payment_split_failure"
                | "seller_shortfall_coverage"
                | "seller_shortfall_coverage_reversal"
                | "other"
                | (string & {});
        };
        "previous_attributes"?: Partial<BalanceTransaction>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "balance_transaction.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "available_at"?: string;
            "balance_transaction_id": string;
            "currency": string;
            "description"?: string;
            "fee_money": MoneyValue;
            "merchant_id": string;
            "net_money": MoneyValue;
            "occurred_at": string;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "payout_id"?: string;
            "related_balance_transaction_ids": Array<string>;
            "related_resource"?: ResourceReference;
            "status": "pending" | "available" | (string & {});
            "type": "payment"
                | "refund"
                | "dispute"
                | "dispute_reversal"
                | "return"
                | "recovery"
                | "payout"
                | "payout_failure"
                | "payout_cancellation"
                | "payout_reversal"
                | "payout_advance"
                | "payout_advance_funding"
                | "reserve_hold"
                | "reserve_release"
                | "adjustment"
                | "merchant_billing_collection"
                | "merchant_billing_collection_reversal"
                | "platform_fee_refund"
                | "platform_fee_payout"
                | "platform_fee_payout_reversal"
                | "payment_split"
                | "payment_split_reversal"
                | "payment_split_reinstatement"
                | "payment_split_failure"
                | "seller_shortfall_coverage"
                | "seller_shortfall_coverage_reversal"
                | "other"
                | (string & {});
        };
        "previous_attributes"?: Partial<BalanceTransaction>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "balance_transaction.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "balance_transaction.updated";
});
/**
 * The `balance_transaction.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type BalanceTransactionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Signed gross amount
     * of this balance movement, before any fee. Signed monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.available_at (Optional): string. When the
     * funds become, or became, available to pay out. Present on pending transactions as the
     * expected time; status says whether they are available now. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.balance_transaction_id (Required): string. Stable identifier
     * of this balance transaction. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". object.currency
     * (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD". object.description (Optional): string. Short text describing the movement,
     * from Flint or your processor. Use it for display, not for matching. object.fee_money
     * (Required): {@link MoneyValue}. Fee deducted from this balance movement. On payments, this
     * is processing_fee_money plus every add-on fee in add_on_fees plus platform_fee.amount_money
     * when a partner app charged a platform fee; the payment intent carries the breakdown. On
     * disputes and dispute reversals, this includes the processor's dispute fee charged to your
     * balance or actually returned to it. Charges are positive; returned fees are negative. A
     * dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by
     * itself return the fee. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.merchant_id (Required): string. Merchant whose balance this
     * transaction moved. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.net_money (Required):
     * {@link MoneyValue}. Signed net effect on your Flint balance: amount_money minus fee_money in
     * the same currency. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.occurred_at (Required): string. When the balance movement
     * happened. Format: date-time. Example: "2026-08-02T16:00:00Z". object.order (Optional):
     * {@link ExpandedOrderSummary} or null. The order, inlined when you request expand=order. null
     * when expanded and the transaction has no order_id. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. The Flint order
     * this movement relates to, such as the order a payment was for. Absent when the movement
     * isn't tied to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payout_id
     * (Optional): string. The payout that carried this balance transaction to your bank. Set once,
     * when that payout's contents are prepared, and never changed afterward, including if the
     * payout later fails or is reversed. Absent until then, and on transactions no payout carries.
     * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.related_balance_transaction_ids (Required):
     * Array of string. Earlier balance transactions this one is linked to, including the exact
     * payment principal a refund returns, the payout transaction that a payout_failure,
     * payout_cancellation, or payout_reversal returns, or the collection a
     * merchant_billing_collection_reversal reverses. Empty when there are none.
     * object.related_balance_transaction_ids[] (Value): string. Example:
     * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". object.related_resource (Optional): {@link
     * ResourceReference}. The Flint resource behind this movement: a payment_intent,
     * payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or
     * platform_fee_payout. Absent when the movement has none. A reference to another resource by
     * `resource_type` and `resource_id`. object.status (Required): string. Whether the funds can
     * be paid out yet: pending until they become available, then available. Only these two values
     * appear, and the change to available sends balance_transaction.updated. Value enum:
     * "pending", "available". object.type (Required): string. Kind of balance movement. Unmapped
     * movement types are returned as other. Value enum: "payment", "refund", "dispute",
     * "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation",
     * "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold",
     * "reserve_release", "adjustment", "merchant_billing_collection",
     * "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout",
     * "platform_fee_payout_reversal", "payment_split", "payment_split_reversal",
     * "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage",
     * "seller_shortfall_coverage_reversal", "other". previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Signed gross amount of this balance
         * movement, before any fee. Signed monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. available_at (Optional): string. When the funds become, or
         * became, available to pay out. Present on pending transactions as the expected time;
         * status says whether they are available now. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". balance_transaction_id (Required): string. Stable identifier of
         * this balance transaction. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". currency
         * (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
         * ^[A-Z]{3}$. Example: "USD". description (Optional): string. Short text describing the
         * movement, from Flint or your processor. Use it for display, not for matching. fee_money
         * (Required): {@link MoneyValue}. Fee deducted from this balance movement. On payments,
         * this is processing_fee_money plus every add-on fee in add_on_fees plus
         * platform_fee.amount_money when a partner app charged a platform fee; the payment intent
         * carries the breakdown. On disputes and dispute reversals, this includes the processor's
         * dispute fee charged to your balance or actually returned to it. Charges are positive;
         * returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of
         * -5700. A won dispute does not by itself return the fee. Signed monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. merchant_id
         * (Required): string. Merchant whose balance this transaction moved. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". net_money (Required): {@link MoneyValue}. Signed net
         * effect on your Flint balance: amount_money minus fee_money in the same currency. Signed
         * monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * occurred_at (Required): string. When the balance movement happened. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". order (Optional): {@link ExpandedOrderSummary} or null.
         * The order, inlined when you request expand=order. null when expanded and the transaction
         * has no order_id. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. The Flint order this movement relates to, such as the order
         * a payment was for. Absent when the movement isn't tied to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payout_id (Optional): string. The payout that carried
         * this balance transaction to your bank. Set once, when that payout's contents are
         * prepared, and never changed afterward, including if the payout later fails or is
         * reversed. Absent until then, and on transactions no payout carries. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". related_balance_transaction_ids (Required): Array of
         * string. Earlier balance transactions this one is linked to, including the exact payment
         * principal a refund returns, the payout transaction that a payout_failure,
         * payout_cancellation, or payout_reversal returns, or the collection a
         * merchant_billing_collection_reversal reverses. Empty when there are none.
         * related_balance_transaction_ids[] (Value): string. Example:
         * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". related_resource (Optional): {@link
         * ResourceReference}. The Flint resource behind this movement: a payment_intent,
         * payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or
         * platform_fee_payout. Absent when the movement has none. A reference to another resource
         * by `resource_type` and `resource_id`. status (Required): string. Whether the funds can
         * be paid out yet: pending until they become available, then available. Only these two
         * values appear, and the change to available sends balance_transaction.updated. Value
         * enum: "pending", "available". type (Required): string. Kind of balance movement.
         * Unmapped movement types are returned as other. Value enum: "payment", "refund",
         * "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure",
         * "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding",
         * "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection",
         * "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout",
         * "platform_fee_payout_reversal", "payment_split", "payment_split_reversal",
         * "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage",
         * "seller_shortfall_coverage_reversal", "other".
         */
        "object": {
            /**
             * Signed gross amount of this balance movement, before any fee. Signed monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * When the funds become, or became, available to pay out. Present on pending
             * transactions as the expected time; status says whether they are available now.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "available_at"?: string;
            /**
             * Stable identifier of this balance transaction. Example:
             * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
             */
            "balance_transaction_id": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * Short text describing the movement, from Flint or your processor. Use it for
             * display, not for matching.
             */
            "description"?: string;
            /**
             * Fee deducted from this balance movement. On payments, this is processing_fee_money
             * plus every add-on fee in add_on_fees plus platform_fee.amount_money when a partner
             * app charged a platform fee; the payment intent carries the breakdown. On disputes
             * and dispute reversals, this includes the processor's dispute fee charged to your
             * balance or actually returned to it. Charges are positive; returned fees are
             * negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won
             * dispute does not by itself return the fee. Signed monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "fee_money": MoneyValue;
            /**
             * Merchant whose balance this transaction moved. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Signed net effect on your Flint balance: amount_money minus fee_money in the same
             * currency. Signed monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "net_money": MoneyValue;
            /**
             * When the balance movement happened. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "occurred_at": string;
            /**
             * The order, inlined when you request expand=order. null when expanded and the
             * transaction has no order_id. Present only when `expand` includes `order`; `null`
             * when expanded and there is no related order. anyOf[1] (Value): {@link
             * ExpandedOrderSummary}. An order's summary fields, including status, payment and
             * refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The Flint order this movement relates to, such as the order a payment was for.
             * Absent when the movement isn't tied to an order. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * The payout that carried this balance transaction to your bank. Set once, when that
             * payout's contents are prepared, and never changed afterward, including if the payout
             * later fails or is reversed. Absent until then, and on transactions no payout
             * carries. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "payout_id"?: string;
            /**
             * Earlier balance transactions this one is linked to, including the exact payment
             * principal a refund returns, the payout transaction that a payout_failure,
             * payout_cancellation, or payout_reversal returns, or the collection a
             * merchant_billing_collection_reversal reverses. Empty when there are none. []
             * (Value): string. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
             */
            "related_balance_transaction_ids": Array<string>;
            /**
             * The Flint resource behind this movement: a payment_intent, payment_split, refund,
             * dispute, payout, payout_destination, merchant_billing_invoice, or
             * platform_fee_payout. Absent when the movement has none. A reference to another
             * resource by `resource_type` and `resource_id`.
             */
            "related_resource"?: ResourceReference;
            /**
             * Whether the funds can be paid out yet: pending until they become available, then
             * available. Only these two values appear, and the change to available sends
             * balance_transaction.updated. Value enum: "pending", "available".
             */
            "status": "pending" | "available" | (string & {});
            /**
             * Kind of balance movement. Unmapped movement types are returned as other. Value enum:
             * "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout",
             * "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance",
             * "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
             * "merchant_billing_collection", "merchant_billing_collection_reversal",
             * "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal",
             * "payment_split", "payment_split_reversal", "payment_split_reinstatement",
             * "payment_split_failure", "seller_shortfall_coverage",
             * "seller_shortfall_coverage_reversal", "other".
             */
            "type": "payment"
                | "refund"
                | "dispute"
                | "dispute_reversal"
                | "return"
                | "recovery"
                | "payout"
                | "payout_failure"
                | "payout_cancellation"
                | "payout_reversal"
                | "payout_advance"
                | "payout_advance_funding"
                | "reserve_hold"
                | "reserve_release"
                | "adjustment"
                | "merchant_billing_collection"
                | "merchant_billing_collection_reversal"
                | "platform_fee_refund"
                | "platform_fee_payout"
                | "platform_fee_payout_reversal"
                | "payment_split"
                | "payment_split_reversal"
                | "payment_split_reinstatement"
                | "payment_split_failure"
                | "seller_shortfall_coverage"
                | "seller_shortfall_coverage_reversal"
                | "other"
                | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<BalanceTransaction>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "balance_transaction.updated". */
    "event_type"?: "balance_transaction.updated";
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
 * The `balance_transaction.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type BalanceTransactionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.amount_money (Required): {@link MoneyValue}. Signed gross amount
     * of this balance movement, before any fee. Signed monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.available_at (Optional): string. When the
     * funds become, or became, available to pay out. Present on pending transactions as the
     * expected time; status says whether they are available now. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.balance_transaction_id (Required): string. Stable identifier
     * of this balance transaction. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". object.currency
     * (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD". object.description (Optional): string. Short text describing the movement,
     * from Flint or your processor. Use it for display, not for matching. object.fee_money
     * (Required): {@link MoneyValue}. Fee deducted from this balance movement. On payments, this
     * is processing_fee_money plus every add-on fee in add_on_fees plus platform_fee.amount_money
     * when a partner app charged a platform fee; the payment intent carries the breakdown. On
     * disputes and dispute reversals, this includes the processor's dispute fee charged to your
     * balance or actually returned to it. Charges are positive; returned fees are negative. A
     * dispute of -4200 with a fee of 1500 has a net amount of -5700. A won dispute does not by
     * itself return the fee. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.merchant_id (Required): string. Merchant whose balance this
     * transaction moved. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.net_money (Required):
     * {@link MoneyValue}. Signed net effect on your Flint balance: amount_money minus fee_money in
     * the same currency. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.occurred_at (Required): string. When the balance movement
     * happened. Format: date-time. Example: "2026-08-02T16:00:00Z". object.order (Optional):
     * {@link ExpandedOrderSummary} or null. The order, inlined when you request expand=order. null
     * when expanded and the transaction has no order_id. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. The Flint order
     * this movement relates to, such as the order a payment was for. Absent when the movement
     * isn't tied to an order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.payout_id
     * (Optional): string. The payout that carried this balance transaction to your bank. Set once,
     * when that payout's contents are prepared, and never changed afterward, including if the
     * payout later fails or is reversed. Absent until then, and on transactions no payout carries.
     * Example: "po_01KEZF7C00PXK8XREWJA6K4FGV". object.related_balance_transaction_ids (Required):
     * Array of string. Earlier balance transactions this one is linked to, including the exact
     * payment principal a refund returns, the payout transaction that a payout_failure,
     * payout_cancellation, or payout_reversal returns, or the collection a
     * merchant_billing_collection_reversal reverses. Empty when there are none.
     * object.related_balance_transaction_ids[] (Value): string. Example:
     * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". object.related_resource (Optional): {@link
     * ResourceReference}. The Flint resource behind this movement: a payment_intent,
     * payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or
     * platform_fee_payout. Absent when the movement has none. A reference to another resource by
     * `resource_type` and `resource_id`. object.status (Required): string. Whether the funds can
     * be paid out yet: pending until they become available, then available. Only these two values
     * appear, and the change to available sends balance_transaction.updated. Value enum:
     * "pending", "available". object.type (Required): string. Kind of balance movement. Unmapped
     * movement types are returned as other. Value enum: "payment", "refund", "dispute",
     * "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation",
     * "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold",
     * "reserve_release", "adjustment", "merchant_billing_collection",
     * "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout",
     * "platform_fee_payout_reversal", "payment_split", "payment_split_reversal",
     * "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage",
     * "seller_shortfall_coverage_reversal", "other". previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * amount_money (Required): {@link MoneyValue}. Signed gross amount of this balance
         * movement, before any fee. Signed monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. available_at (Optional): string. When the funds become, or
         * became, available to pay out. Present on pending transactions as the expected time;
         * status says whether they are available now. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". balance_transaction_id (Required): string. Stable identifier of
         * this balance transaction. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". currency
         * (Required): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
         * ^[A-Z]{3}$. Example: "USD". description (Optional): string. Short text describing the
         * movement, from Flint or your processor. Use it for display, not for matching. fee_money
         * (Required): {@link MoneyValue}. Fee deducted from this balance movement. On payments,
         * this is processing_fee_money plus every add-on fee in add_on_fees plus
         * platform_fee.amount_money when a partner app charged a platform fee; the payment intent
         * carries the breakdown. On disputes and dispute reversals, this includes the processor's
         * dispute fee charged to your balance or actually returned to it. Charges are positive;
         * returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount of
         * -5700. A won dispute does not by itself return the fee. Signed monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. merchant_id
         * (Required): string. Merchant whose balance this transaction moved. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". net_money (Required): {@link MoneyValue}. Signed net
         * effect on your Flint balance: amount_money minus fee_money in the same currency. Signed
         * monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * occurred_at (Required): string. When the balance movement happened. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". order (Optional): {@link ExpandedOrderSummary} or null.
         * The order, inlined when you request expand=order. null when expanded and the transaction
         * has no order_id. Present only when `expand` includes `order`; `null` when expanded and
         * there is no related order. order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An
         * order's summary fields, including status, payment and refund status, and pricing and
         * settlement amounts, returned when the order is expanded. order.anyOf[2] (Value): null.
         * order_id (Optional): string. The Flint order this movement relates to, such as the order
         * a payment was for. Absent when the movement isn't tied to an order. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". payout_id (Optional): string. The payout that carried
         * this balance transaction to your bank. Set once, when that payout's contents are
         * prepared, and never changed afterward, including if the payout later fails or is
         * reversed. Absent until then, and on transactions no payout carries. Example:
         * "po_01KEZF7C00PXK8XREWJA6K4FGV". related_balance_transaction_ids (Required): Array of
         * string. Earlier balance transactions this one is linked to, including the exact payment
         * principal a refund returns, the payout transaction that a payout_failure,
         * payout_cancellation, or payout_reversal returns, or the collection a
         * merchant_billing_collection_reversal reverses. Empty when there are none.
         * related_balance_transaction_ids[] (Value): string. Example:
         * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ". related_resource (Optional): {@link
         * ResourceReference}. The Flint resource behind this movement: a payment_intent,
         * payment_split, refund, dispute, payout, payout_destination, merchant_billing_invoice, or
         * platform_fee_payout. Absent when the movement has none. A reference to another resource
         * by `resource_type` and `resource_id`. status (Required): string. Whether the funds can
         * be paid out yet: pending until they become available, then available. Only these two
         * values appear, and the change to available sends balance_transaction.updated. Value
         * enum: "pending", "available". type (Required): string. Kind of balance movement.
         * Unmapped movement types are returned as other. Value enum: "payment", "refund",
         * "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure",
         * "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding",
         * "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection",
         * "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout",
         * "platform_fee_payout_reversal", "payment_split", "payment_split_reversal",
         * "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage",
         * "seller_shortfall_coverage_reversal", "other".
         */
        "object": {
            /**
             * Signed gross amount of this balance movement, before any fee. Signed monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "amount_money": MoneyValue;
            /**
             * When the funds become, or became, available to pay out. Present on pending
             * transactions as the expected time; status says whether they are available now.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "available_at"?: string;
            /**
             * Stable identifier of this balance transaction. Example:
             * "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
             */
            "balance_transaction_id": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * Short text describing the movement, from Flint or your processor. Use it for
             * display, not for matching.
             */
            "description"?: string;
            /**
             * Fee deducted from this balance movement. On payments, this is processing_fee_money
             * plus every add-on fee in add_on_fees plus platform_fee.amount_money when a partner
             * app charged a platform fee; the payment intent carries the breakdown. On disputes
             * and dispute reversals, this includes the processor's dispute fee charged to your
             * balance or actually returned to it. Charges are positive; returned fees are
             * negative. A dispute of -4200 with a fee of 1500 has a net amount of -5700. A won
             * dispute does not by itself return the fee. Signed monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "fee_money": MoneyValue;
            /**
             * Merchant whose balance this transaction moved. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Signed net effect on your Flint balance: amount_money minus fee_money in the same
             * currency. Signed monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "net_money": MoneyValue;
            /**
             * When the balance movement happened. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "occurred_at": string;
            /**
             * The order, inlined when you request expand=order. null when expanded and the
             * transaction has no order_id. Present only when `expand` includes `order`; `null`
             * when expanded and there is no related order. anyOf[1] (Value): {@link
             * ExpandedOrderSummary}. An order's summary fields, including status, payment and
             * refund status, and pricing and settlement amounts, returned when the order is
             * expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * The Flint order this movement relates to, such as the order a payment was for.
             * Absent when the movement isn't tied to an order. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /**
             * The payout that carried this balance transaction to your bank. Set once, when that
             * payout's contents are prepared, and never changed afterward, including if the payout
             * later fails or is reversed. Absent until then, and on transactions no payout
             * carries. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
             */
            "payout_id"?: string;
            /**
             * Earlier balance transactions this one is linked to, including the exact payment
             * principal a refund returns, the payout transaction that a payout_failure,
             * payout_cancellation, or payout_reversal returns, or the collection a
             * merchant_billing_collection_reversal reverses. Empty when there are none. []
             * (Value): string. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
             */
            "related_balance_transaction_ids": Array<string>;
            /**
             * The Flint resource behind this movement: a payment_intent, payment_split, refund,
             * dispute, payout, payout_destination, merchant_billing_invoice, or
             * platform_fee_payout. Absent when the movement has none. A reference to another
             * resource by `resource_type` and `resource_id`.
             */
            "related_resource"?: ResourceReference;
            /**
             * Whether the funds can be paid out yet: pending until they become available, then
             * available. Only these two values appear, and the change to available sends
             * balance_transaction.updated. Value enum: "pending", "available".
             */
            "status": "pending" | "available" | (string & {});
            /**
             * Kind of balance movement. Unmapped movement types are returned as other. Value enum:
             * "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout",
             * "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance",
             * "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
             * "merchant_billing_collection", "merchant_billing_collection_reversal",
             * "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal",
             * "payment_split", "payment_split_reversal", "payment_split_reinstatement",
             * "payment_split_failure", "seller_shortfall_coverage",
             * "seller_shortfall_coverage_reversal", "other".
             */
            "type": "payment"
                | "refund"
                | "dispute"
                | "dispute_reversal"
                | "return"
                | "recovery"
                | "payout"
                | "payout_failure"
                | "payout_cancellation"
                | "payout_reversal"
                | "payout_advance"
                | "payout_advance_funding"
                | "reserve_hold"
                | "reserve_release"
                | "adjustment"
                | "merchant_billing_collection"
                | "merchant_billing_collection_reversal"
                | "platform_fee_refund"
                | "platform_fee_payout"
                | "platform_fee_payout_reversal"
                | "payment_split"
                | "payment_split_reversal"
                | "payment_split_reinstatement"
                | "payment_split_failure"
                | "seller_shortfall_coverage"
                | "seller_shortfall_coverage_reversal"
                | "other"
                | (string & {});
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<BalanceTransaction>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "balance_transaction.updated". */
    "event_type"?: "balance_transaction.updated";
});
export type BalanceTransactionsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: order. Expansion requires
     * money_movement.balance_transactions.read plus commerce.orders.read. Limits: at most 10
     * unique expand paths per request. [] enum: "order". Value enum: "order". anyOf[1] (Value):
     * Array of string. [] enum: "order". anyOf[1][] (Value): string. Value enum: "order". anyOf[2]
     * (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
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
export type BalanceTransactionsListParams = {
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Lists the balance transactions this payout carried, newest first. Their `net_money` sums to
     * the payout's `amount_money`. Works in any payout status once the payout's contents are
     * prepared, usually minutes after it is created. Returns `503 SERVICE_UNAVAILABLE` with
     * `Retry-After` while they are prepared, and `409 ACTION_NOT_ALLOWED` with `reason:
     * not_itemized` for a payout that doesn't list its contents, such as a manual payout. pattern:
     * ^po_[0-9A-HJKMNP-TV-Z]{26}$. Example: "po_01KEZF7C00PXK8XREWJA6K4FGV".
     */
    "payout_id"?: InputValue<string>;
    /**
     * Exact-match filter on `order_id`. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Include related objects in the response. Supported expansions: order. Each expansion
     * resolves with one batched lookup per page. Expansion requires
     * money_movement.balance_transactions.read plus commerce.orders.read. Limits: at most 10
     * unique expand paths per request. [] enum: "order". Value enum: "order". anyOf[1] (Value):
     * Array of string. [] enum: "order". anyOf[1][] (Value): string. Value enum: "order". anyOf[2]
     * (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
    /**
     * Optional balance transaction type filter. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "payment", "refund", "dispute", "dispute_reversal", "return",
     * "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal",
     * "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
     * "merchant_billing_collection", "merchant_billing_collection_reversal",
     * "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal",
     * "payment_split", "payment_split_reversal", "payment_split_reinstatement",
     * "payment_split_failure", "seller_shortfall_coverage", "seller_shortfall_coverage_reversal",
     * "other". Value enum: "payment", "refund", "dispute", "dispute_reversal", "return",
     * "recovery", "payout", "payout_failure", "payout_cancellation", "payout_reversal",
     * "payout_advance", "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
     * "merchant_billing_collection", "merchant_billing_collection_reversal",
     * "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal",
     * "payment_split", "payment_split_reversal", "payment_split_reinstatement",
     * "payment_split_failure", "seller_shortfall_coverage", "seller_shortfall_coverage_reversal",
     * "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "payment", "refund",
     * "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure",
     * "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding",
     * "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection",
     * "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout",
     * "platform_fee_payout_reversal", "payment_split", "payment_split_reversal",
     * "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage",
     * "seller_shortfall_coverage_reversal", "other". anyOf[1][] (Value): string. Value enum:
     * "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout",
     * "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance",
     * "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
     * "merchant_billing_collection", "merchant_billing_collection_reversal",
     * "platform_fee_refund", "platform_fee_payout", "platform_fee_payout_reversal",
     * "payment_split", "payment_split_reversal", "payment_split_reinstatement",
     * "payment_split_failure", "seller_shortfall_coverage", "seller_shortfall_coverage_reversal",
     * "other". anyOf[2] (Value): string. Value enum: "payment", "refund", "dispute",
     * "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation",
     * "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold",
     * "reserve_release", "adjustment", "merchant_billing_collection",
     * "merchant_billing_collection_reversal", "platform_fee_refund", "platform_fee_payout",
     * "platform_fee_payout_reversal", "payment_split", "payment_split_reversal",
     * "payment_split_reinstatement", "payment_split_failure", "seller_shortfall_coverage",
     * "seller_shortfall_coverage_reversal", "other".
     */
    "type"?: InputValue<("payment"
        | "refund"
        | "dispute"
        | "dispute_reversal"
        | "return"
        | "recovery"
        | "payout"
        | "payout_failure"
        | "payout_cancellation"
        | "payout_reversal"
        | "payout_advance"
        | "payout_advance_funding"
        | "reserve_hold"
        | "reserve_release"
        | "adjustment"
        | "merchant_billing_collection"
        | "merchant_billing_collection_reversal"
        | "platform_fee_refund"
        | "platform_fee_payout"
        | "platform_fee_payout_reversal"
        | "payment_split"
        | "payment_split_reversal"
        | "payment_split_reinstatement"
        | "payment_split_failure"
        | "seller_shortfall_coverage"
        | "seller_shortfall_coverage_reversal"
        | "other")
        | readonly ("payment"
        | "refund"
        | "dispute"
        | "dispute_reversal"
        | "return"
        | "recovery"
        | "payout"
        | "payout_failure"
        | "payout_cancellation"
        | "payout_reversal"
        | "payout_advance"
        | "payout_advance_funding"
        | "reserve_hold"
        | "reserve_release"
        | "adjustment"
        | "merchant_billing_collection"
        | "merchant_billing_collection_reversal"
        | "platform_fee_refund"
        | "platform_fee_payout"
        | "platform_fee_payout_reversal"
        | "payment_split"
        | "payment_split_reversal"
        | "payment_split_reinstatement"
        | "payment_split_failure"
        | "seller_shortfall_coverage"
        | "seller_shortfall_coverage_reversal"
        | "other")[]>;
    /**
     * Filter by related_resource.resource_type. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "payment_intent", "refund", "dispute", "payout",
     * "payout_destination", "merchant_billing_invoice", "platform_fee_payout", "payment_split".
     * Value enum: "payment_intent", "refund", "dispute", "payout", "payout_destination",
     * "merchant_billing_invoice", "platform_fee_payout", "payment_split". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "payment_intent", "refund", "dispute", "payout",
     * "payout_destination", "merchant_billing_invoice", "platform_fee_payout", "payment_split".
     * anyOf[1][] (Value): string. Value enum: "payment_intent", "refund", "dispute", "payout",
     * "payout_destination", "merchant_billing_invoice", "platform_fee_payout", "payment_split".
     * anyOf[2] (Value): string. Value enum: "payment_intent", "refund", "dispute", "payout",
     * "payout_destination", "merchant_billing_invoice", "platform_fee_payout", "payment_split".
     */
    "related_resource_type"?: InputValue<("payment_intent"
        | "refund"
        | "dispute"
        | "payout"
        | "payout_destination"
        | "merchant_billing_invoice"
        | "platform_fee_payout"
        | "payment_split")
        | readonly ("payment_intent"
        | "refund"
        | "dispute"
        | "payout"
        | "payout_destination"
        | "merchant_billing_invoice"
        | "platform_fee_payout"
        | "payment_split")[]>;
    /**
     * Filter by related_resource.resource_id. pattern:
     * ^((ad|afri|ba|bag|bal|bam|baoa|basa|bav|bepevt|betr|bses|btxn|bue|bun|bunc|bup|busrc|caddr|cagr|capsnap|catid|ccaevt|ccop|cdel|cdom|cecr|ch|clg|clla|cn|cna|cnart|cnlease|cnli|cnmut|cof|cpoc|cpop|cs|cscv|cses|cslimr|csrt|ctex|ctg|cus|cver|dca|dcb|dcbr|dcgrp|ddiag|defc|deff|demo|dev|dleg|dls|dlsr|dmet|dmetr|dms|dmsevt|dmslink|dmsopen|dopt|dp|dprof|dprofr|dqt|drate|drev|dreval|dsel|dsle|dti|du|dzone|dzoner|edat|edel|egrt|fbc|fbr|fev|file|fnt|frw|fsu|ful|fw|fwad|fwcmd|fwcon|fwpm|fwss|gc|gcg|gcl|gcn|gcpra|gcr|gct|gfd|hat|hce|hcr|hev|hin|hlk|hnt|hrp|hsl|hsr|hth|hwm|iacr|iaevt|iksevt|iksop|img|indel|inevt|inlf|inv|inv_cmd|invadj|invapp|invart|invc|invcln|invi|invl|invlease|invli|invm|invp|invpa|invpay|invpv|invr|invrea|invrec|invrecln|invrln|invse|invt|invtr|invtrln|iomevt|ipt|ivat|key|li|loc|mac|mace|mbbal|mbclaim|mbe|mbin|mbout|mca|mcdchg|mcdsub|mcfr|mcr|mcra|mcrecon|mcrve|menv|mer|mfa|mfce|mg|mod|mpafc|mpagr|mpfa|mpfc|mre|mrecv|mrp|ms|msa|msg|msinv|msinvl|mso|msu|mtac|ntc|ntf|oacr|oact|oalk|och|ocra|oed|olim|olimas|olra|omp|opahold|opaleg|opaobs|opaop|opard|oparp|opasd|opasgen|opasm|opasp|opat|opaum|opcred|opra|oprhold|opsa|opt|optv|ord|ordisp|org|orp|orr|otpial|otra|ovst|pac|pacr|pact|paog|papp|pasg|pat|patok|pava|pavc|pcae|pcal|pcb|pcfg|pchkr|pcode|pcri|pcrr|pcsch|pdest|peat|pendact|pfbal|pfbt|pfee|pfhi|pfhold|pfi|pfinc|pfloss|pflrec|pfpo|pfr|pfrb|pfrf|pfs|phold|pi|pia|pilm|pinst|piop|pipf|pkg|pki|pl|plan|plcf|ple|plli|plog|pm|pmcr|pmdom|po|poe|polog|ppac|ppd|pppa|pppr|ppta|pra|pref|prl|prlp|prod|promo|prrc|prt|prtn|psact|pses|pset|psetop|psinc|psplit|psrev|psu|pvimg|pvlaunch|pvscn|pvses|pvshare|pvw|ra|rbuy|rcs|rdl|rdr|rdrcfg|rdrpres|recon|ref|rep|ret|retact|retadj|retcmd|retdsp|retfx|retinli|retins|retli|retrc|retrcli|retrepli|retres|retresli|retshli|rev|rl|rli|rlia|rliar|rlima|rlog|rpoe|rpol|rpolv|rprev|rra|rrq|rrsn|rta|rtba|rule|sdmig|sdts|sdtu|set|sfba|sfpd|shp|sli|smf|soffer|spc|spcc|spli|spol|sppd|spr|ssu|sub|tac|tcae|tcb|tcbr|tce|tclk|tcn|test|tip|tkt|trg|txb|usr|var|watt|wdel|whcl|whep|whev|whout|whrc|wid|ws)_[0-9A-HJKMNP-TV-Z]{26}|fwa_[A-Z2-7]+|fwc_[A-Z2-7]+|fwin_[0-9a-f]+|req_([0-9a-f]+|caller_supplied_rate|pickup_distance_loc_[0-9A-HJKMNP-TV-Z]{26}))$.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "related_resource_id"?: InputValue<string>;
    /**
     * Optional balance transaction status filter. Without it, the list returns transactions in
     * every status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "pending", "available". Value enum: "pending", "available". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "pending", "available". anyOf[1][] (Value): string. Value
     * enum: "pending", "available". anyOf[2] (Value): string. Value enum: "pending", "available".
     */
    "status"?: InputValue<("pending" | "available") | readonly ("pending" | "available")[]>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /**
     * Inclusive lower bound on available_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "available_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on available_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "available_before"?: InputValue<string | globalThis.Date>;
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
export type BalanceUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_by_source_type"?: Record<string, MoneyValue>;
            "available_money": MoneyValue;
            "balance_id": string;
            "currency": string;
            "held_money": MoneyValue;
            "merchant_id": string;
            "observed_at": string;
            "payouts_enabled": boolean;
            "pending_by_source_type"?: Record<string, MoneyValue>;
            "pending_money": MoneyValue;
            "reserve_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Balance>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "balance.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_by_source_type"?: Record<string, MoneyValue>;
            "available_money": MoneyValue;
            "balance_id": string;
            "currency": string;
            "held_money": MoneyValue;
            "merchant_id": string;
            "observed_at": string;
            "payouts_enabled": boolean;
            "pending_by_source_type"?: Record<string, MoneyValue>;
            "pending_money": MoneyValue;
            "reserve_money": MoneyValue;
        };
        "previous_attributes"?: Partial<Balance>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "balance.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "balance.updated";
});
/**
 * The `balance.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type BalanceUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_by_source_type (Optional): Map of {@link MoneyValue}.
     * Signed available amounts grouped by balance source type. Keys are an open set; US accounts
     * use card and bank_account. When supplied as a complete breakdown, entries sum to
     * available_money. Active payout holds reduce both available_money and one source entry by the
     * same amount. A payout with no recorded source type uses card. A hold whose source is absent
     * from the map uses the largest source amount, with ties broken by source name.
     * object.available_by_source_type.* (Value): {@link MoneyValue}. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.available_money
     * (Required): {@link MoneyValue}. Signed amount available for payouts after active payout
     * holds are deducted. Separate from pending_money, reserve_money, and held_money. Signed
     * monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.balance_id (Required): string. Stable identifier of this currency's balance. Example:
     * "bal_01KEZF7C00DE593X12REV5EFHZ". object.currency (Required): string. ISO 4217 currency
     * code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". object.held_money
     * (Required): {@link MoneyValue}. Funds set aside for payouts you created that haven't been
     * debited from your balance yet. They aren't payable and aren't included in `available_money`.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.merchant_id (Required): string. Merchant whose balance this is. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.observed_at (Required): string. When Flint observed
     * these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their
     * observation time; a fresh provider read uses the time of that read. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.payouts_enabled (Required): boolean. Whether payouts
     * are ready for this balance currency, including an active default payout destination and
     * account readiness. While it is false, payments can still succeed, and their funds wait in
     * your balance. object.pending_by_source_type (Optional): Map of {@link MoneyValue}. Signed
     * pending amounts grouped by balance source type. Keys are an open set; US accounts use card
     * and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These
     * amounts are separate from available_by_source_type. object.pending_by_source_type.* (Value):
     * {@link MoneyValue}. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.pending_money (Required): {@link MoneyValue}. Signed amount
     * awaiting availability. Separate from available_money; pending_by_source_type breaks down
     * this amount when source details are supplied. Signed monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.reserve_money (Required): {@link
     * MoneyValue}. Amount held in reserve. It doesn't overlap available_money or held_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_by_source_type (Optional): Map of {@link MoneyValue}. Signed available amounts
         * grouped by balance source type. Keys are an open set; US accounts use card and
         * bank_account. When supplied as a complete breakdown, entries sum to available_money.
         * Active payout holds reduce both available_money and one source entry by the same amount.
         * A payout with no recorded source type uses card. A hold whose source is absent from the
         * map uses the largest source amount, with ties broken by source name.
         * available_by_source_type.* (Value): {@link MoneyValue}. Signed monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. available_money
         * (Required): {@link MoneyValue}. Signed amount available for payouts after active payout
         * holds are deducted. Separate from pending_money, reserve_money, and held_money. Signed
         * monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * balance_id (Required): string. Stable identifier of this currency's balance. Example:
         * "bal_01KEZF7C00DE593X12REV5EFHZ". currency (Required): string. ISO 4217 currency code.
         * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". held_money (Required):
         * {@link MoneyValue}. Funds set aside for payouts you created that haven't been debited
         * from your balance yet. They aren't payable and aren't included in `available_money`.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * merchant_id (Required): string. Merchant whose balance this is. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". observed_at (Required): string. When Flint observed
         * these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain
         * their observation time; a fresh provider read uses the time of that read. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". payouts_enabled (Required): boolean. Whether
         * payouts are ready for this balance currency, including an active default payout
         * destination and account readiness. While it is false, payments can still succeed, and
         * their funds wait in your balance. pending_by_source_type (Optional): Map of {@link
         * MoneyValue}. Signed pending amounts grouped by balance source type. Keys are an open
         * set; US accounts use card and bank_account. When supplied as a complete breakdown,
         * entries sum to pending_money. These amounts are separate from available_by_source_type.
         * pending_by_source_type.* (Value): {@link MoneyValue}. Signed monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. pending_money (Required): {@link
         * MoneyValue}. Signed amount awaiting availability. Separate from available_money;
         * pending_by_source_type breaks down this amount when source details are supplied. Signed
         * monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * reserve_money (Required): {@link MoneyValue}. Amount held in reserve. It doesn't overlap
         * available_money or held_money. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code.
         */
        "object": {
            /**
             * Signed available amounts grouped by balance source type. Keys are an open set; US
             * accounts use card and bank_account. When supplied as a complete breakdown, entries
             * sum to available_money. Active payout holds reduce both available_money and one
             * source entry by the same amount. A payout with no recorded source type uses card. A
             * hold whose source is absent from the map uses the largest source amount, with ties
             * broken by source name. * (Value): {@link MoneyValue}. Signed monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "available_by_source_type"?: Record<string, MoneyValue>;
            /**
             * Signed amount available for payouts after active payout holds are deducted. Separate
             * from pending_money, reserve_money, and held_money. Signed monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * Stable identifier of this currency's balance. Example:
             * "bal_01KEZF7C00DE593X12REV5EFHZ".
             */
            "balance_id": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * Funds set aside for payouts you created that haven't been debited from your balance
             * yet. They aren't payable and aren't included in `available_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "held_money": MoneyValue;
            /** Merchant whose balance this is. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * When Flint observed these amounts, as an RFC 3339 UTC instant at second precision.
             * Stored balances retain their observation time; a fresh provider read uses the time
             * of that read. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "observed_at": string;
            /**
             * Whether payouts are ready for this balance currency, including an active default
             * payout destination and account readiness. While it is false, payments can still
             * succeed, and their funds wait in your balance.
             */
            "payouts_enabled": boolean;
            /**
             * Signed pending amounts grouped by balance source type. Keys are an open set; US
             * accounts use card and bank_account. When supplied as a complete breakdown, entries
             * sum to pending_money. These amounts are separate from available_by_source_type. *
             * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "pending_by_source_type"?: Record<string, MoneyValue>;
            /**
             * Signed amount awaiting availability. Separate from available_money;
             * pending_by_source_type breaks down this amount when source details are supplied.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "pending_money": MoneyValue;
            /**
             * Amount held in reserve. It doesn't overlap available_money or held_money. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "reserve_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Balance>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "balance.updated". */
    "event_type"?: "balance.updated";
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
 * The `balance.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type BalanceUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_by_source_type (Optional): Map of {@link MoneyValue}.
     * Signed available amounts grouped by balance source type. Keys are an open set; US accounts
     * use card and bank_account. When supplied as a complete breakdown, entries sum to
     * available_money. Active payout holds reduce both available_money and one source entry by the
     * same amount. A payout with no recorded source type uses card. A hold whose source is absent
     * from the map uses the largest source amount, with ties broken by source name.
     * object.available_by_source_type.* (Value): {@link MoneyValue}. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. object.available_money
     * (Required): {@link MoneyValue}. Signed amount available for payouts after active payout
     * holds are deducted. Separate from pending_money, reserve_money, and held_money. Signed
     * monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.balance_id (Required): string. Stable identifier of this currency's balance. Example:
     * "bal_01KEZF7C00DE593X12REV5EFHZ". object.currency (Required): string. ISO 4217 currency
     * code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". object.held_money
     * (Required): {@link MoneyValue}. Funds set aside for payouts you created that haven't been
     * debited from your balance yet. They aren't payable and aren't included in `available_money`.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.merchant_id (Required): string. Merchant whose balance this is. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.observed_at (Required): string. When Flint observed
     * these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain their
     * observation time; a fresh provider read uses the time of that read. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.payouts_enabled (Required): boolean. Whether payouts
     * are ready for this balance currency, including an active default payout destination and
     * account readiness. While it is false, payments can still succeed, and their funds wait in
     * your balance. object.pending_by_source_type (Optional): Map of {@link MoneyValue}. Signed
     * pending amounts grouped by balance source type. Keys are an open set; US accounts use card
     * and bank_account. When supplied as a complete breakdown, entries sum to pending_money. These
     * amounts are separate from available_by_source_type. object.pending_by_source_type.* (Value):
     * {@link MoneyValue}. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code. object.pending_money (Required): {@link MoneyValue}. Signed amount
     * awaiting availability. Separate from available_money; pending_by_source_type breaks down
     * this amount when source details are supplied. Signed monetary amount represented as integer
     * minor units plus an ISO 4217 currency code. object.reserve_money (Required): {@link
     * MoneyValue}. Amount held in reserve. It doesn't overlap available_money or held_money.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_by_source_type (Optional): Map of {@link MoneyValue}. Signed available amounts
         * grouped by balance source type. Keys are an open set; US accounts use card and
         * bank_account. When supplied as a complete breakdown, entries sum to available_money.
         * Active payout holds reduce both available_money and one source entry by the same amount.
         * A payout with no recorded source type uses card. A hold whose source is absent from the
         * map uses the largest source amount, with ties broken by source name.
         * available_by_source_type.* (Value): {@link MoneyValue}. Signed monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. available_money
         * (Required): {@link MoneyValue}. Signed amount available for payouts after active payout
         * holds are deducted. Separate from pending_money, reserve_money, and held_money. Signed
         * monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * balance_id (Required): string. Stable identifier of this currency's balance. Example:
         * "bal_01KEZF7C00DE593X12REV5EFHZ". currency (Required): string. ISO 4217 currency code.
         * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". held_money (Required):
         * {@link MoneyValue}. Funds set aside for payouts you created that haven't been debited
         * from your balance yet. They aren't payable and aren't included in `available_money`.
         * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * merchant_id (Required): string. Merchant whose balance this is. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". observed_at (Required): string. When Flint observed
         * these amounts, as an RFC 3339 UTC instant at second precision. Stored balances retain
         * their observation time; a fresh provider read uses the time of that read. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". payouts_enabled (Required): boolean. Whether
         * payouts are ready for this balance currency, including an active default payout
         * destination and account readiness. While it is false, payments can still succeed, and
         * their funds wait in your balance. pending_by_source_type (Optional): Map of {@link
         * MoneyValue}. Signed pending amounts grouped by balance source type. Keys are an open
         * set; US accounts use card and bank_account. When supplied as a complete breakdown,
         * entries sum to pending_money. These amounts are separate from available_by_source_type.
         * pending_by_source_type.* (Value): {@link MoneyValue}. Signed monetary amount represented
         * as integer minor units plus an ISO 4217 currency code. pending_money (Required): {@link
         * MoneyValue}. Signed amount awaiting availability. Separate from available_money;
         * pending_by_source_type breaks down this amount when source details are supplied. Signed
         * monetary amount represented as integer minor units plus an ISO 4217 currency code.
         * reserve_money (Required): {@link MoneyValue}. Amount held in reserve. It doesn't overlap
         * available_money or held_money. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code.
         */
        "object": {
            /**
             * Signed available amounts grouped by balance source type. Keys are an open set; US
             * accounts use card and bank_account. When supplied as a complete breakdown, entries
             * sum to available_money. Active payout holds reduce both available_money and one
             * source entry by the same amount. A payout with no recorded source type uses card. A
             * hold whose source is absent from the map uses the largest source amount, with ties
             * broken by source name. * (Value): {@link MoneyValue}. Signed monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "available_by_source_type"?: Record<string, MoneyValue>;
            /**
             * Signed amount available for payouts after active payout holds are deducted. Separate
             * from pending_money, reserve_money, and held_money. Signed monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "available_money": MoneyValue;
            /**
             * Stable identifier of this currency's balance. Example:
             * "bal_01KEZF7C00DE593X12REV5EFHZ".
             */
            "balance_id": string;
            /**
             * ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD".
             */
            "currency": string;
            /**
             * Funds set aside for payouts you created that haven't been debited from your balance
             * yet. They aren't payable and aren't included in `available_money`. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "held_money": MoneyValue;
            /** Merchant whose balance this is. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
            "merchant_id": string;
            /**
             * When Flint observed these amounts, as an RFC 3339 UTC instant at second precision.
             * Stored balances retain their observation time; a fresh provider read uses the time
             * of that read. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "observed_at": string;
            /**
             * Whether payouts are ready for this balance currency, including an active default
             * payout destination and account readiness. While it is false, payments can still
             * succeed, and their funds wait in your balance.
             */
            "payouts_enabled": boolean;
            /**
             * Signed pending amounts grouped by balance source type. Keys are an open set; US
             * accounts use card and bank_account. When supplied as a complete breakdown, entries
             * sum to pending_money. These amounts are separate from available_by_source_type. *
             * (Value): {@link MoneyValue}. Signed monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "pending_by_source_type"?: Record<string, MoneyValue>;
            /**
             * Signed amount awaiting availability. Separate from available_money;
             * pending_by_source_type breaks down this amount when source details are supplied.
             * Signed monetary amount represented as integer minor units plus an ISO 4217 currency
             * code.
             */
            "pending_money": MoneyValue;
            /**
             * Amount held in reserve. It doesn't overlap available_money or held_money. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "reserve_money": MoneyValue;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Balance>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "balance.updated". */
    "event_type"?: "balance.updated";
});
export type BalancesListParams = {
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
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
 * A merchant's branding settings: colors, corner radius, and font family. Checkout uses them as
 * its default theme.
 */
export type BrandingSettings = {
    /** A hex color in the form #RRGGBB, such as #1A73E8. */
    "accent_color"?: string;
    /** A hex color in the form #RRGGBB, such as #1A73E8. */
    "background_color"?: string;
    /** Corner radius in pixels, from 0 to 32. 0 is a square corner. Format: int32. */
    "corner_radius"?: number;
    /**
     * Typeface of hosted checkout and buyer pages. Without one, Flint uses `instrument_sans`.
     * Value enum: "instrument_sans", "system_sans", "system_serif", "monospace".
     */
    "font_family"?: "instrument_sans" | "system_sans" | "system_serif" | "monospace" | (string & {});
    /** A hex color in the form #RRGGBB, such as #1A73E8. */
    "primary_color"?: string;
    /** A hex color in the form #RRGGBB, such as #1A73E8. */
    "text_color"?: string;
};
/**
 * Branding values to change when updating settings. Send null for a color or `font_family` to
 * clear it.
 */
export type BrandingSettingsRequest = {
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "accent_color"?: string | null;
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "background_color"?: string | null;
    /**
     * Corner radius in pixels, from 0 to 32. 0 is a square corner. Format: int32. minimum: 0.
     * maximum: 32.
     */
    "corner_radius"?: number;
    /**
     * Typeface of hosted checkout and buyer pages. Without one, Flint uses `instrument_sans`. Send
     * null to clear it. pattern: ^#[0-9a-fA-F]{6}$. Value enum: "instrument_sans", "system_sans",
     * "system_serif", "monospace", null.
     */
    "font_family"?: "instrument_sans" | "system_sans" | "system_serif" | "monospace" | null | (string & {}) | null;
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "primary_color"?: string | null;
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "text_color"?: string | null;
};
/**
 * Branding values to change when updating settings. Send null for a color or `font_family` to
 * clear it.
 */
export type BrandingSettingsRequestInput = {
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "accent_color"?: string | null;
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "background_color"?: string | null;
    /**
     * Corner radius in pixels, from 0 to 32. 0 is a square corner. Format: int32. minimum: 0.
     * maximum: 32.
     */
    "corner_radius"?: number;
    /**
     * Typeface of hosted checkout and buyer pages. Without one, Flint uses `instrument_sans`. Send
     * null to clear it. pattern: ^#[0-9a-fA-F]{6}$. Value enum: "instrument_sans", "system_sans",
     * "system_serif", "monospace", null.
     */
    "font_family"?: "instrument_sans" | "system_sans" | "system_serif" | "monospace" | null;
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "primary_color"?: string | null;
    /**
     * A hex color in the form #RRGGBB, such as #1A73E8. Send null to clear it. minLength: 1.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "text_color"?: string | null;
};
/**
 * Several variants sold as one line at the bundle's price. A bundle line takes its components'
 * shared taxability and tax category; all components must share both stored values. An unset
 * category uses the merchant default and equals only another unset category.
 */
export type Bundle = {
    /** Barcode assigned to this sellable item. */
    "barcode"?: string;
    /** Stable identifier of the bundle. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
    /**
     * Always present. Empty collections are returned as []. [] (Value): {@link CategoryReference}.
     * A reference to a product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /** Number of components in the bundle. Format: int32. */
    "component_count": number;
    /**
     * The bundle's components in position order, on every bundle response including list rows. []
     * only when the bundle has no components. [] (Value): {@link BundleComponent}. An item
     * included in a bundle.
     */
    "components": Array<BundleComponent>;
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Delivery readiness aggregated across the bundle's components. A bundle with no components
     * reports `not_applicable`. Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Description of the bundle shown to buyers. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Images attached to this resource, in display order. The first image is primary. [] (Value):
     * {@link ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Whether the bundle can be sold now: it is `active`, has at least one component, every
     * component's variant and product are `active`, and `delivery_configuration_status` isn't
     * `action_required`. Stock isn't considered.
     */
    "is_available_for_sale": boolean;
    /**
     * Identifier of the merchant that owns this resource. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set. anyOf[1]
     * (Value): {@link ModifierSet}. A reusable collection of customization groups. anyOf[2]
     * (Value): null.
     */
    "modifier_set"?: ((ModifierSet) | (null));
    /**
     * Attached modifier set. Send null on update to remove it. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id": string | null;
    /** Bundle name shown to buyers. */
    "name": string;
    /** Stock keeping unit assigned to this sellable item. */
    "sku"?: string;
    /**
     * Bundle lifecycle status. Archived bundles remain readable and cannot be edited. Value enum:
     * "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Price charged for one unit, in the currency's smallest unit. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /**
     * Current resource version. Send it as expected_version to reject a write if the resource has
     * changed. Format: uint64. minimum: 0.
     */
    "version": number;
};
export type BundleArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "barcode"?: string;
            "bundle_id": string;
            "categories": Array<CategoryReference>;
            "component_count": number;
            "components": Array<BundleComponent>;
            "created_at"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale": boolean;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "sku"?: string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "unit_price_money": MoneyValue;
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<Bundle>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "bundle.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "barcode"?: string;
            "bundle_id": string;
            "categories": Array<CategoryReference>;
            "component_count": number;
            "components": Array<BundleComponent>;
            "created_at"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale": boolean;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "sku"?: string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "unit_price_money": MoneyValue;
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<Bundle>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "bundle.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "bundle.archived";
});
/**
 * The `bundle.archived` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type BundleArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `modifier_set`. object.barcode (Optional): string. Barcode assigned to this sellable
     * item. object.bundle_id (Required): string. Stable identifier of the bundle. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". object.categories (Required): Array of {@link
     * CategoryReference}. Always present. Empty collections are returned as [].
     * object.categories[] (Value): {@link CategoryReference}. A reference to a product category by
     * ID, handle, and name. object.component_count (Required): integer. Number of components in
     * the bundle. Format: int32. object.components (Required): Array of {@link BundleComponent}.
     * The bundle's components in position order, on every bundle response including list rows. []
     * only when the bundle has no components. object.components[] (Value): {@link
     * BundleComponent}. An item included in a bundle. object.created_at (Optional): string. When
     * this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_configuration_status (Required): string. Delivery
     * readiness aggregated across the bundle's components. A bundle with no components reports
     * `not_applicable`. Value enum: "configured", "action_required", "not_applicable".
     * object.description (Optional): string. Description of the bundle shown to buyers.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.images (Required):
     * Array of {@link ImageAttachment}. Images attached to this resource, in display order. The
     * first image is primary. object.images[] (Value): {@link ImageAttachment}. An image attached
     * to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Required): boolean. Whether the bundle can be sold now: it is
     * `active`, has at least one component, every component's variant and product are `active`,
     * and `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
     * object.merchant_id (Optional): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null. Attached
     * modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read
     * in addition to the resource's read scope. Present only when `expand` includes
     * `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Bundle name shown
     * to buyers. object.sku (Optional): string. Stock keeping unit assigned to this sellable item.
     * object.status (Required): string. Bundle lifecycle status. Archived bundles remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.unit_price_money
     * (Required): {@link MoneyValue}. Price charged for one unit, in the currency's smallest unit.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.updated_at (Optional): string. When this resource last changed, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current resource version. Send it as expected_version to reject a write if the
     * resource has changed. Format: uint64. minimum: 0. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`.
         * barcode (Optional): string. Barcode assigned to this sellable item. bundle_id
         * (Required): string. Stable identifier of the bundle. Example:
         * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". categories (Required): Array of {@link
         * CategoryReference}. Always present. Empty collections are returned as []. categories[]
         * (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
         * name. component_count (Required): integer. Number of components in the bundle. Format:
         * int32. components (Required): Array of {@link BundleComponent}. The bundle's components
         * in position order, on every bundle response including list rows. [] only when the bundle
         * has no components. components[] (Value): {@link BundleComponent}. An item included in a
         * bundle. created_at (Optional): string. When this resource was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * delivery_configuration_status (Required): string. Delivery readiness aggregated across
         * the bundle's components. A bundle with no components reports `not_applicable`. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the bundle shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Required): boolean. Whether
         * the bundle can be sold now: it is `active`, has at least one component, every
         * component's variant and product are `active`, and `delivery_configuration_status` isn't
         * `action_required`. Stock isn't considered. merchant_id (Optional): string. Identifier of
         * the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata stored on this resource.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. modifier_set
         * (Optional): {@link ModifierSet} or null. Attached modifier set, included when
         * expand=modifier_set is requested. Requires commerce.catalog.read in addition to the
         * resource's read scope. Present only when `expand` includes `modifier_set`; `null` when
         * expanded and there is no related modifier set. modifier_set.anyOf[1] (Value): {@link
         * ModifierSet}. A reusable collection of customization groups. modifier_set.anyOf[2]
         * (Value): null. modifier_set_id (Required): string or null. Attached modifier set. Send
         * null on update to remove it. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required):
         * string. Bundle name shown to buyers. sku (Optional): string. Stock keeping unit assigned
         * to this sellable item. status (Required): string. Bundle lifecycle status. Archived
         * bundles remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". unit_price_money (Required): {@link MoneyValue}. Price charged for one unit,
         * in the currency's smallest unit. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * version (Required): integer. Current resource version. Send it as expected_version to
         * reject a write if the resource has changed. Format: uint64. minimum: 0.
         */
        "object": {
            /** Barcode assigned to this sellable item. */
            "barcode"?: string;
            /** Stable identifier of the bundle. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
            "bundle_id": string;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /** Number of components in the bundle. Format: int32. */
            "component_count": number;
            /**
             * The bundle's components in position order, on every bundle response including list
             * rows. [] only when the bundle has no components. [] (Value): {@link
             * BundleComponent}. An item included in a bundle.
             */
            "components": Array<BundleComponent>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Delivery readiness aggregated across the bundle's components. A bundle with no
             * components reports `not_applicable`. Value enum: "configured", "action_required",
             * "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the bundle shown to buyers. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Images attached to this resource, in display order. The first image is primary. []
             * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /**
             * Whether the bundle can be sold now: it is `active`, has at least one component,
             * every component's variant and product are `active`, and
             * `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
             */
            "is_available_for_sale": boolean;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
             * customization groups. anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Bundle name shown to buyers. */
            "name": string;
            /** Stock keeping unit assigned to this sellable item. */
            "sku"?: string;
            /**
             * Bundle lifecycle status. Archived bundles remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Price charged for one unit, in the currency's smallest unit. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "unit_price_money": MoneyValue;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Bundle>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "bundle.archived". */
    "event_type"?: "bundle.archived";
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
 * The `bundle.archived` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type BundleArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `modifier_set`. object.barcode (Optional): string. Barcode assigned to this sellable
     * item. object.bundle_id (Required): string. Stable identifier of the bundle. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". object.categories (Required): Array of {@link
     * CategoryReference}. Always present. Empty collections are returned as [].
     * object.categories[] (Value): {@link CategoryReference}. A reference to a product category by
     * ID, handle, and name. object.component_count (Required): integer. Number of components in
     * the bundle. Format: int32. object.components (Required): Array of {@link BundleComponent}.
     * The bundle's components in position order, on every bundle response including list rows. []
     * only when the bundle has no components. object.components[] (Value): {@link
     * BundleComponent}. An item included in a bundle. object.created_at (Optional): string. When
     * this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_configuration_status (Required): string. Delivery
     * readiness aggregated across the bundle's components. A bundle with no components reports
     * `not_applicable`. Value enum: "configured", "action_required", "not_applicable".
     * object.description (Optional): string. Description of the bundle shown to buyers.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.images (Required):
     * Array of {@link ImageAttachment}. Images attached to this resource, in display order. The
     * first image is primary. object.images[] (Value): {@link ImageAttachment}. An image attached
     * to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Required): boolean. Whether the bundle can be sold now: it is
     * `active`, has at least one component, every component's variant and product are `active`,
     * and `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
     * object.merchant_id (Optional): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null. Attached
     * modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read
     * in addition to the resource's read scope. Present only when `expand` includes
     * `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Bundle name shown
     * to buyers. object.sku (Optional): string. Stock keeping unit assigned to this sellable item.
     * object.status (Required): string. Bundle lifecycle status. Archived bundles remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.unit_price_money
     * (Required): {@link MoneyValue}. Price charged for one unit, in the currency's smallest unit.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.updated_at (Optional): string. When this resource last changed, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current resource version. Send it as expected_version to reject a write if the
     * resource has changed. Format: uint64. minimum: 0. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`.
         * barcode (Optional): string. Barcode assigned to this sellable item. bundle_id
         * (Required): string. Stable identifier of the bundle. Example:
         * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". categories (Required): Array of {@link
         * CategoryReference}. Always present. Empty collections are returned as []. categories[]
         * (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
         * name. component_count (Required): integer. Number of components in the bundle. Format:
         * int32. components (Required): Array of {@link BundleComponent}. The bundle's components
         * in position order, on every bundle response including list rows. [] only when the bundle
         * has no components. components[] (Value): {@link BundleComponent}. An item included in a
         * bundle. created_at (Optional): string. When this resource was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * delivery_configuration_status (Required): string. Delivery readiness aggregated across
         * the bundle's components. A bundle with no components reports `not_applicable`. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the bundle shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Required): boolean. Whether
         * the bundle can be sold now: it is `active`, has at least one component, every
         * component's variant and product are `active`, and `delivery_configuration_status` isn't
         * `action_required`. Stock isn't considered. merchant_id (Optional): string. Identifier of
         * the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata stored on this resource.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. modifier_set
         * (Optional): {@link ModifierSet} or null. Attached modifier set, included when
         * expand=modifier_set is requested. Requires commerce.catalog.read in addition to the
         * resource's read scope. Present only when `expand` includes `modifier_set`; `null` when
         * expanded and there is no related modifier set. modifier_set.anyOf[1] (Value): {@link
         * ModifierSet}. A reusable collection of customization groups. modifier_set.anyOf[2]
         * (Value): null. modifier_set_id (Required): string or null. Attached modifier set. Send
         * null on update to remove it. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required):
         * string. Bundle name shown to buyers. sku (Optional): string. Stock keeping unit assigned
         * to this sellable item. status (Required): string. Bundle lifecycle status. Archived
         * bundles remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". unit_price_money (Required): {@link MoneyValue}. Price charged for one unit,
         * in the currency's smallest unit. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * version (Required): integer. Current resource version. Send it as expected_version to
         * reject a write if the resource has changed. Format: uint64. minimum: 0.
         */
        "object": {
            /** Barcode assigned to this sellable item. */
            "barcode"?: string;
            /** Stable identifier of the bundle. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
            "bundle_id": string;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /** Number of components in the bundle. Format: int32. */
            "component_count": number;
            /**
             * The bundle's components in position order, on every bundle response including list
             * rows. [] only when the bundle has no components. [] (Value): {@link
             * BundleComponent}. An item included in a bundle.
             */
            "components": Array<BundleComponent>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Delivery readiness aggregated across the bundle's components. A bundle with no
             * components reports `not_applicable`. Value enum: "configured", "action_required",
             * "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the bundle shown to buyers. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Images attached to this resource, in display order. The first image is primary. []
             * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /**
             * Whether the bundle can be sold now: it is `active`, has at least one component,
             * every component's variant and product are `active`, and
             * `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
             */
            "is_available_for_sale": boolean;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
             * customization groups. anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Bundle name shown to buyers. */
            "name": string;
            /** Stock keeping unit assigned to this sellable item. */
            "sku"?: string;
            /**
             * Bundle lifecycle status. Archived bundles remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Price charged for one unit, in the currency's smallest unit. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "unit_price_money": MoneyValue;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Bundle>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "bundle.archived". */
    "event_type"?: "bundle.archived";
});
/** An item included in a bundle. */
export type BundleComponent = {
    /**
     * Stable identifier of this component within its bundle. Example:
     * "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id": string;
    /**
     * Reason the component's delivery configuration needs attention. Value enum:
     * "delivery_profile_missing", "delivery_profile_inactive".
     */
    "delivery_configuration_reason"?: "delivery_profile_missing" | "delivery_profile_inactive" | (string & {});
    /**
     * Whether the component's delivery configuration is ready, needs attention, or does not apply.
     * Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /**
     * Delivery profile used for this component, including any component override. Example:
     * "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id"?: string;
    /** Display order among the bundle's components, starting at zero. Format: int32. */
    "position": number;
    /**
     * Identifier of the product the component's variant belongs to. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Summary of the component's variant and its selected options. A summary of the variant that
     * fills a bundle component: its names, SKU, selected options, and whether it is available for
     * sale.
     */
    "variant"?: BundleComponentVariantSummary;
    /**
     * Identifier of the product variant included in the bundle. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/** A page of `BundleComponent` objects. */
export type BundleComponentListResponse = {
    /**
     * The requested bundle component data. [] (Value): {@link BundleComponent}. An item included
     * in a bundle.
     */
    "data": Array<BundleComponent>;
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
/**
 * A summary of the variant that fills a bundle component: its names, SKU, selected options, and
 * whether it is available for sale.
 */
export type BundleComponentVariantSummary = {
    /** Whether the component's variant and its product are both active. */
    "is_available_for_sale": boolean;
    /** Name of the component's variant, when set. */
    "name"?: string;
    /**
     * Identifier of the product this component variant belongs to. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /** Name of the product the variant belongs to. */
    "product_name"?: string;
    /**
     * Option names and values selected by the component's variant. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** Stock keeping unit assigned to the component's variant, when set. */
    "sku"?: string;
    /**
     * Identifier of the product variant included in the component. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
export type BundleCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "barcode"?: string;
            "bundle_id": string;
            "categories": Array<CategoryReference>;
            "component_count": number;
            "components": Array<BundleComponent>;
            "created_at"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale": boolean;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "sku"?: string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "unit_price_money": MoneyValue;
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "bundle.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "barcode"?: string;
            "bundle_id": string;
            "categories": Array<CategoryReference>;
            "component_count": number;
            "components": Array<BundleComponent>;
            "created_at"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale": boolean;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "sku"?: string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "unit_price_money": MoneyValue;
            "updated_at"?: string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "bundle.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "bundle.created";
});
/**
 * The `bundle.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type BundleCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `modifier_set`. object.barcode (Optional): string. Barcode assigned to this sellable
     * item. object.bundle_id (Required): string. Stable identifier of the bundle. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". object.categories (Required): Array of {@link
     * CategoryReference}. Always present. Empty collections are returned as [].
     * object.categories[] (Value): {@link CategoryReference}. A reference to a product category by
     * ID, handle, and name. object.component_count (Required): integer. Number of components in
     * the bundle. Format: int32. object.components (Required): Array of {@link BundleComponent}.
     * The bundle's components in position order, on every bundle response including list rows. []
     * only when the bundle has no components. object.components[] (Value): {@link
     * BundleComponent}. An item included in a bundle. object.created_at (Optional): string. When
     * this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_configuration_status (Required): string. Delivery
     * readiness aggregated across the bundle's components. A bundle with no components reports
     * `not_applicable`. Value enum: "configured", "action_required", "not_applicable".
     * object.description (Optional): string. Description of the bundle shown to buyers.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.images (Required):
     * Array of {@link ImageAttachment}. Images attached to this resource, in display order. The
     * first image is primary. object.images[] (Value): {@link ImageAttachment}. An image attached
     * to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Required): boolean. Whether the bundle can be sold now: it is
     * `active`, has at least one component, every component's variant and product are `active`,
     * and `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
     * object.merchant_id (Optional): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null. Attached
     * modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read
     * in addition to the resource's read scope. Present only when `expand` includes
     * `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Bundle name shown
     * to buyers. object.sku (Optional): string. Stock keeping unit assigned to this sellable item.
     * object.status (Required): string. Bundle lifecycle status. Archived bundles remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.unit_price_money
     * (Required): {@link MoneyValue}. Price charged for one unit, in the currency's smallest unit.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.updated_at (Optional): string. When this resource last changed, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current resource version. Send it as expected_version to reject a write if the
     * resource has changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`.
         * barcode (Optional): string. Barcode assigned to this sellable item. bundle_id
         * (Required): string. Stable identifier of the bundle. Example:
         * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". categories (Required): Array of {@link
         * CategoryReference}. Always present. Empty collections are returned as []. categories[]
         * (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
         * name. component_count (Required): integer. Number of components in the bundle. Format:
         * int32. components (Required): Array of {@link BundleComponent}. The bundle's components
         * in position order, on every bundle response including list rows. [] only when the bundle
         * has no components. components[] (Value): {@link BundleComponent}. An item included in a
         * bundle. created_at (Optional): string. When this resource was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * delivery_configuration_status (Required): string. Delivery readiness aggregated across
         * the bundle's components. A bundle with no components reports `not_applicable`. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the bundle shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Required): boolean. Whether
         * the bundle can be sold now: it is `active`, has at least one component, every
         * component's variant and product are `active`, and `delivery_configuration_status` isn't
         * `action_required`. Stock isn't considered. merchant_id (Optional): string. Identifier of
         * the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata stored on this resource.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. modifier_set
         * (Optional): {@link ModifierSet} or null. Attached modifier set, included when
         * expand=modifier_set is requested. Requires commerce.catalog.read in addition to the
         * resource's read scope. Present only when `expand` includes `modifier_set`; `null` when
         * expanded and there is no related modifier set. modifier_set.anyOf[1] (Value): {@link
         * ModifierSet}. A reusable collection of customization groups. modifier_set.anyOf[2]
         * (Value): null. modifier_set_id (Required): string or null. Attached modifier set. Send
         * null on update to remove it. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required):
         * string. Bundle name shown to buyers. sku (Optional): string. Stock keeping unit assigned
         * to this sellable item. status (Required): string. Bundle lifecycle status. Archived
         * bundles remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". unit_price_money (Required): {@link MoneyValue}. Price charged for one unit,
         * in the currency's smallest unit. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * version (Required): integer. Current resource version. Send it as expected_version to
         * reject a write if the resource has changed. Format: uint64. minimum: 0.
         */
        "object": {
            /** Barcode assigned to this sellable item. */
            "barcode"?: string;
            /** Stable identifier of the bundle. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
            "bundle_id": string;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /** Number of components in the bundle. Format: int32. */
            "component_count": number;
            /**
             * The bundle's components in position order, on every bundle response including list
             * rows. [] only when the bundle has no components. [] (Value): {@link
             * BundleComponent}. An item included in a bundle.
             */
            "components": Array<BundleComponent>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Delivery readiness aggregated across the bundle's components. A bundle with no
             * components reports `not_applicable`. Value enum: "configured", "action_required",
             * "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the bundle shown to buyers. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Images attached to this resource, in display order. The first image is primary. []
             * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /**
             * Whether the bundle can be sold now: it is `active`, has at least one component,
             * every component's variant and product are `active`, and
             * `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
             */
            "is_available_for_sale": boolean;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
             * customization groups. anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Bundle name shown to buyers. */
            "name": string;
            /** Stock keeping unit assigned to this sellable item. */
            "sku"?: string;
            /**
             * Bundle lifecycle status. Archived bundles remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Price charged for one unit, in the currency's smallest unit. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "unit_price_money": MoneyValue;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "bundle.created". */
    "event_type"?: "bundle.created";
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
 * The `bundle.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type BundleCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `modifier_set`. object.barcode (Optional): string. Barcode assigned to this sellable
     * item. object.bundle_id (Required): string. Stable identifier of the bundle. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". object.categories (Required): Array of {@link
     * CategoryReference}. Always present. Empty collections are returned as [].
     * object.categories[] (Value): {@link CategoryReference}. A reference to a product category by
     * ID, handle, and name. object.component_count (Required): integer. Number of components in
     * the bundle. Format: int32. object.components (Required): Array of {@link BundleComponent}.
     * The bundle's components in position order, on every bundle response including list rows. []
     * only when the bundle has no components. object.components[] (Value): {@link
     * BundleComponent}. An item included in a bundle. object.created_at (Optional): string. When
     * this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_configuration_status (Required): string. Delivery
     * readiness aggregated across the bundle's components. A bundle with no components reports
     * `not_applicable`. Value enum: "configured", "action_required", "not_applicable".
     * object.description (Optional): string. Description of the bundle shown to buyers.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.images (Required):
     * Array of {@link ImageAttachment}. Images attached to this resource, in display order. The
     * first image is primary. object.images[] (Value): {@link ImageAttachment}. An image attached
     * to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Required): boolean. Whether the bundle can be sold now: it is
     * `active`, has at least one component, every component's variant and product are `active`,
     * and `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
     * object.merchant_id (Optional): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null. Attached
     * modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read
     * in addition to the resource's read scope. Present only when `expand` includes
     * `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Bundle name shown
     * to buyers. object.sku (Optional): string. Stock keeping unit assigned to this sellable item.
     * object.status (Required): string. Bundle lifecycle status. Archived bundles remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.unit_price_money
     * (Required): {@link MoneyValue}. Price charged for one unit, in the currency's smallest unit.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.updated_at (Optional): string. When this resource last changed, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current resource version. Send it as expected_version to reject a write if the
     * resource has changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`.
         * barcode (Optional): string. Barcode assigned to this sellable item. bundle_id
         * (Required): string. Stable identifier of the bundle. Example:
         * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". categories (Required): Array of {@link
         * CategoryReference}. Always present. Empty collections are returned as []. categories[]
         * (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
         * name. component_count (Required): integer. Number of components in the bundle. Format:
         * int32. components (Required): Array of {@link BundleComponent}. The bundle's components
         * in position order, on every bundle response including list rows. [] only when the bundle
         * has no components. components[] (Value): {@link BundleComponent}. An item included in a
         * bundle. created_at (Optional): string. When this resource was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * delivery_configuration_status (Required): string. Delivery readiness aggregated across
         * the bundle's components. A bundle with no components reports `not_applicable`. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the bundle shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Required): boolean. Whether
         * the bundle can be sold now: it is `active`, has at least one component, every
         * component's variant and product are `active`, and `delivery_configuration_status` isn't
         * `action_required`. Stock isn't considered. merchant_id (Optional): string. Identifier of
         * the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata stored on this resource.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. modifier_set
         * (Optional): {@link ModifierSet} or null. Attached modifier set, included when
         * expand=modifier_set is requested. Requires commerce.catalog.read in addition to the
         * resource's read scope. Present only when `expand` includes `modifier_set`; `null` when
         * expanded and there is no related modifier set. modifier_set.anyOf[1] (Value): {@link
         * ModifierSet}. A reusable collection of customization groups. modifier_set.anyOf[2]
         * (Value): null. modifier_set_id (Required): string or null. Attached modifier set. Send
         * null on update to remove it. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required):
         * string. Bundle name shown to buyers. sku (Optional): string. Stock keeping unit assigned
         * to this sellable item. status (Required): string. Bundle lifecycle status. Archived
         * bundles remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". unit_price_money (Required): {@link MoneyValue}. Price charged for one unit,
         * in the currency's smallest unit. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * version (Required): integer. Current resource version. Send it as expected_version to
         * reject a write if the resource has changed. Format: uint64. minimum: 0.
         */
        "object": {
            /** Barcode assigned to this sellable item. */
            "barcode"?: string;
            /** Stable identifier of the bundle. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
            "bundle_id": string;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /** Number of components in the bundle. Format: int32. */
            "component_count": number;
            /**
             * The bundle's components in position order, on every bundle response including list
             * rows. [] only when the bundle has no components. [] (Value): {@link
             * BundleComponent}. An item included in a bundle.
             */
            "components": Array<BundleComponent>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Delivery readiness aggregated across the bundle's components. A bundle with no
             * components reports `not_applicable`. Value enum: "configured", "action_required",
             * "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the bundle shown to buyers. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Images attached to this resource, in display order. The first image is primary. []
             * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /**
             * Whether the bundle can be sold now: it is `active`, has at least one component,
             * every component's variant and product are `active`, and
             * `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
             */
            "is_available_for_sale": boolean;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
             * customization groups. anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Bundle name shown to buyers. */
            "name": string;
            /** Stock keeping unit assigned to this sellable item. */
            "sku"?: string;
            /**
             * Bundle lifecycle status. Archived bundles remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Price charged for one unit, in the currency's smallest unit. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "unit_price_money": MoneyValue;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "bundle.created". */
    "event_type"?: "bundle.created";
});
/** A page of `Bundle` objects. */
export type BundleListResponse = {
    /**
     * The requested bundle data. [] (Value): {@link Bundle}. Several variants sold as one line at
     * the bundle's price. A bundle line takes its components' shared taxability and tax category;
     * all components must share both stored values. An unset category uses the merchant default
     * and equals only another unset category.
     */
    "data": Array<Bundle>;
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
/** A response containing `Bundle` data. */
export type BundleResponse = {
    /**
     * The requested bundle data. Several variants sold as one line at the bundle's price. A bundle
     * line takes its components' shared taxability and tax category; all components must share
     * both stored values. An unset category uses the merchant default and equals only another
     * unset category.
     */
    "data": Bundle;
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
export type BundleUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "barcode"?: string;
            "bundle_id": string;
            "categories": Array<CategoryReference>;
            "component_count": number;
            "components": Array<BundleComponent>;
            "created_at"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale": boolean;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "sku"?: string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "unit_price_money": MoneyValue;
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<Bundle>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "bundle.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "barcode"?: string;
            "bundle_id": string;
            "categories": Array<CategoryReference>;
            "component_count": number;
            "components": Array<BundleComponent>;
            "created_at"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale": boolean;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "sku"?: string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "unit_price_money": MoneyValue;
            "updated_at"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<Bundle>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "bundle.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "bundle.updated";
});
/**
 * The `bundle.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type BundleUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `modifier_set`. object.barcode (Optional): string. Barcode assigned to this sellable
     * item. object.bundle_id (Required): string. Stable identifier of the bundle. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". object.categories (Required): Array of {@link
     * CategoryReference}. Always present. Empty collections are returned as [].
     * object.categories[] (Value): {@link CategoryReference}. A reference to a product category by
     * ID, handle, and name. object.component_count (Required): integer. Number of components in
     * the bundle. Format: int32. object.components (Required): Array of {@link BundleComponent}.
     * The bundle's components in position order, on every bundle response including list rows. []
     * only when the bundle has no components. object.components[] (Value): {@link
     * BundleComponent}. An item included in a bundle. object.created_at (Optional): string. When
     * this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_configuration_status (Required): string. Delivery
     * readiness aggregated across the bundle's components. A bundle with no components reports
     * `not_applicable`. Value enum: "configured", "action_required", "not_applicable".
     * object.description (Optional): string. Description of the bundle shown to buyers.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.images (Required):
     * Array of {@link ImageAttachment}. Images attached to this resource, in display order. The
     * first image is primary. object.images[] (Value): {@link ImageAttachment}. An image attached
     * to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Required): boolean. Whether the bundle can be sold now: it is
     * `active`, has at least one component, every component's variant and product are `active`,
     * and `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
     * object.merchant_id (Optional): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null. Attached
     * modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read
     * in addition to the resource's read scope. Present only when `expand` includes
     * `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Bundle name shown
     * to buyers. object.sku (Optional): string. Stock keeping unit assigned to this sellable item.
     * object.status (Required): string. Bundle lifecycle status. Archived bundles remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.unit_price_money
     * (Required): {@link MoneyValue}. Price charged for one unit, in the currency's smallest unit.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.updated_at (Optional): string. When this resource last changed, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current resource version. Send it as expected_version to reject a write if the
     * resource has changed. Format: uint64. minimum: 0. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`.
         * barcode (Optional): string. Barcode assigned to this sellable item. bundle_id
         * (Required): string. Stable identifier of the bundle. Example:
         * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". categories (Required): Array of {@link
         * CategoryReference}. Always present. Empty collections are returned as []. categories[]
         * (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
         * name. component_count (Required): integer. Number of components in the bundle. Format:
         * int32. components (Required): Array of {@link BundleComponent}. The bundle's components
         * in position order, on every bundle response including list rows. [] only when the bundle
         * has no components. components[] (Value): {@link BundleComponent}. An item included in a
         * bundle. created_at (Optional): string. When this resource was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * delivery_configuration_status (Required): string. Delivery readiness aggregated across
         * the bundle's components. A bundle with no components reports `not_applicable`. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the bundle shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Required): boolean. Whether
         * the bundle can be sold now: it is `active`, has at least one component, every
         * component's variant and product are `active`, and `delivery_configuration_status` isn't
         * `action_required`. Stock isn't considered. merchant_id (Optional): string. Identifier of
         * the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata stored on this resource.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. modifier_set
         * (Optional): {@link ModifierSet} or null. Attached modifier set, included when
         * expand=modifier_set is requested. Requires commerce.catalog.read in addition to the
         * resource's read scope. Present only when `expand` includes `modifier_set`; `null` when
         * expanded and there is no related modifier set. modifier_set.anyOf[1] (Value): {@link
         * ModifierSet}. A reusable collection of customization groups. modifier_set.anyOf[2]
         * (Value): null. modifier_set_id (Required): string or null. Attached modifier set. Send
         * null on update to remove it. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required):
         * string. Bundle name shown to buyers. sku (Optional): string. Stock keeping unit assigned
         * to this sellable item. status (Required): string. Bundle lifecycle status. Archived
         * bundles remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". unit_price_money (Required): {@link MoneyValue}. Price charged for one unit,
         * in the currency's smallest unit. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * version (Required): integer. Current resource version. Send it as expected_version to
         * reject a write if the resource has changed. Format: uint64. minimum: 0.
         */
        "object": {
            /** Barcode assigned to this sellable item. */
            "barcode"?: string;
            /** Stable identifier of the bundle. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
            "bundle_id": string;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /** Number of components in the bundle. Format: int32. */
            "component_count": number;
            /**
             * The bundle's components in position order, on every bundle response including list
             * rows. [] only when the bundle has no components. [] (Value): {@link
             * BundleComponent}. An item included in a bundle.
             */
            "components": Array<BundleComponent>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Delivery readiness aggregated across the bundle's components. A bundle with no
             * components reports `not_applicable`. Value enum: "configured", "action_required",
             * "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the bundle shown to buyers. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Images attached to this resource, in display order. The first image is primary. []
             * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /**
             * Whether the bundle can be sold now: it is `active`, has at least one component,
             * every component's variant and product are `active`, and
             * `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
             */
            "is_available_for_sale": boolean;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
             * customization groups. anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Bundle name shown to buyers. */
            "name": string;
            /** Stock keeping unit assigned to this sellable item. */
            "sku"?: string;
            /**
             * Bundle lifecycle status. Archived bundles remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Price charged for one unit, in the currency's smallest unit. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "unit_price_money": MoneyValue;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Bundle>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "bundle.updated". */
    "event_type"?: "bundle.updated";
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
 * The `bundle.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type BundleUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `modifier_set`. object.barcode (Optional): string. Barcode assigned to this sellable
     * item. object.bundle_id (Required): string. Stable identifier of the bundle. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". object.categories (Required): Array of {@link
     * CategoryReference}. Always present. Empty collections are returned as [].
     * object.categories[] (Value): {@link CategoryReference}. A reference to a product category by
     * ID, handle, and name. object.component_count (Required): integer. Number of components in
     * the bundle. Format: int32. object.components (Required): Array of {@link BundleComponent}.
     * The bundle's components in position order, on every bundle response including list rows. []
     * only when the bundle has no components. object.components[] (Value): {@link
     * BundleComponent}. An item included in a bundle. object.created_at (Optional): string. When
     * this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.delivery_configuration_status (Required): string. Delivery
     * readiness aggregated across the bundle's components. A bundle with no components reports
     * `not_applicable`. Value enum: "configured", "action_required", "not_applicable".
     * object.description (Optional): string. Description of the bundle shown to buyers.
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.images (Required):
     * Array of {@link ImageAttachment}. Images attached to this resource, in display order. The
     * first image is primary. object.images[] (Value): {@link ImageAttachment}. An image attached
     * to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Required): boolean. Whether the bundle can be sold now: it is
     * `active`, has at least one component, every component's variant and product are `active`,
     * and `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
     * object.merchant_id (Optional): string. Identifier of the merchant that owns this resource.
     * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null. Attached
     * modifier set, included when expand=modifier_set is requested. Requires commerce.catalog.read
     * in addition to the resource's read scope. Present only when `expand` includes
     * `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Bundle name shown
     * to buyers. object.sku (Optional): string. Stock keeping unit assigned to this sellable item.
     * object.status (Required): string. Bundle lifecycle status. Archived bundles remain readable
     * and cannot be edited. Value enum: "active", "inactive", "archived". object.unit_price_money
     * (Required): {@link MoneyValue}. Price charged for one unit, in the currency's smallest unit.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.updated_at (Optional): string. When this resource last changed, as an RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current resource version. Send it as expected_version to reject a write if the
     * resource has changed. Format: uint64. minimum: 0. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `modifier_set`.
         * barcode (Optional): string. Barcode assigned to this sellable item. bundle_id
         * (Required): string. Stable identifier of the bundle. Example:
         * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". categories (Required): Array of {@link
         * CategoryReference}. Always present. Empty collections are returned as []. categories[]
         * (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
         * name. component_count (Required): integer. Number of components in the bundle. Format:
         * int32. components (Required): Array of {@link BundleComponent}. The bundle's components
         * in position order, on every bundle response including list rows. [] only when the bundle
         * has no components. components[] (Value): {@link BundleComponent}. An item included in a
         * bundle. created_at (Optional): string. When this resource was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * delivery_configuration_status (Required): string. Delivery readiness aggregated across
         * the bundle's components. A bundle with no components reports `not_applicable`. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the bundle shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Required): boolean. Whether
         * the bundle can be sold now: it is `active`, has at least one component, every
         * component's variant and product are `active`, and `delivery_configuration_status` isn't
         * `action_required`. Stock isn't considered. merchant_id (Optional): string. Identifier of
         * the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
         * metadata (Optional): {@link MetadataMap}. Caller-owned metadata stored on this resource.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. modifier_set
         * (Optional): {@link ModifierSet} or null. Attached modifier set, included when
         * expand=modifier_set is requested. Requires commerce.catalog.read in addition to the
         * resource's read scope. Present only when `expand` includes `modifier_set`; `null` when
         * expanded and there is no related modifier set. modifier_set.anyOf[1] (Value): {@link
         * ModifierSet}. A reusable collection of customization groups. modifier_set.anyOf[2]
         * (Value): null. modifier_set_id (Required): string or null. Attached modifier set. Send
         * null on update to remove it. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required):
         * string. Bundle name shown to buyers. sku (Optional): string. Stock keeping unit assigned
         * to this sellable item. status (Required): string. Bundle lifecycle status. Archived
         * bundles remain readable and cannot be edited. Value enum: "active", "inactive",
         * "archived". unit_price_money (Required): {@link MoneyValue}. Price charged for one unit,
         * in the currency's smallest unit. Monetary amount represented as integer minor units plus
         * an ISO 4217 currency code. updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * version (Required): integer. Current resource version. Send it as expected_version to
         * reject a write if the resource has changed. Format: uint64. minimum: 0.
         */
        "object": {
            /** Barcode assigned to this sellable item. */
            "barcode"?: string;
            /** Stable identifier of the bundle. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
            "bundle_id": string;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /** Number of components in the bundle. Format: int32. */
            "component_count": number;
            /**
             * The bundle's components in position order, on every bundle response including list
             * rows. [] only when the bundle has no components. [] (Value): {@link
             * BundleComponent}. An item included in a bundle.
             */
            "components": Array<BundleComponent>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * Delivery readiness aggregated across the bundle's components. A bundle with no
             * components reports `not_applicable`. Value enum: "configured", "action_required",
             * "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the bundle shown to buyers. */
            "description"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Images attached to this resource, in display order. The first image is primary. []
             * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
             * properties and attachment metadata.
             */
            "images": Array<ImageAttachment>;
            /**
             * Whether the bundle can be sold now: it is `active`, has at least one component,
             * every component's variant and product are `active`, and
             * `delivery_configuration_status` isn't `action_required`. Stock isn't considered.
             */
            "is_available_for_sale": boolean;
            /**
             * Identifier of the merchant that owns this resource. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on
             * a resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Attached modifier set, included when expand=modifier_set is requested. Requires
             * commerce.catalog.read in addition to the resource's read scope. Present only when
             * `expand` includes `modifier_set`; `null` when expanded and there is no related
             * modifier set. anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
             * customization groups. anyOf[2] (Value): null.
             */
            "modifier_set"?: ((ModifierSet) | (null));
            /**
             * Attached modifier set. Send null on update to remove it. Example:
             * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             */
            "modifier_set_id": string | null;
            /** Bundle name shown to buyers. */
            "name": string;
            /** Stock keeping unit assigned to this sellable item. */
            "sku"?: string;
            /**
             * Bundle lifecycle status. Archived bundles remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Price charged for one unit, in the currency's smallest unit. Monetary amount
             * represented as integer minor units plus an ISO 4217 currency code.
             */
            "unit_price_money": MoneyValue;
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Bundle>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "bundle.updated". */
    "event_type"?: "bundle.updated";
});
export type BundlesCreateParams = (InputValue<CreateBundleRequestInput>)
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
export type BundlesDeleteParams = {
    /**
     * Optional bundle version last read by the caller. Format: uint64. minimum: 1. maximum:
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
export type BundlesGetParams = {
    /**
     * Include related objects in the response. Supported expansions: modifier_set. Expand the
     * attached modifier set. Limits: at most 10 unique expand paths per request. [] enum:
     * "modifier_set". Value enum: "modifier_set". anyOf[1] (Value): Array of string. [] enum:
     * "modifier_set". anyOf[1][] (Value): string. Value enum: "modifier_set". anyOf[2] (Value):
     * string. Value enum: "modifier_set".
     */
    "expand"?: InputValue<("modifier_set") | readonly ("modifier_set")[]>;
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
export type BundlesListComponentsParams = {
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
     * Filter by assigned delivery profile ID. pattern: ^dprof_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Filter by delivery readiness. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "configured", "action_required", "not_applicable". Value enum: "configured",
     * "action_required", "not_applicable". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "configured", "action_required", "not_applicable". anyOf[1][] (Value): string. Value
     * enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): string. Value
     * enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<("configured" | "action_required" | "not_applicable")
        | readonly ("configured" | "action_required" | "not_applicable")[]>;
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
export type BundlesListParams = {
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
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /** Filter by exact SKU. maxLength: 100. */
    "sku"?: InputValue<string>;
    /**
     * Search across bundle ID, external reference ID, name, description, SKU, and barcode. Text
     * fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards.
     * IDs match from the start and need the type prefix, such as bun_01.
     */
    "query"?: InputValue<string>;
    /** Filter by category handle. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$. */
    "category_handle"?: InputValue<string>;
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
     * Field to sort by. Defaults to created_at; ties are broken by bundle_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "name".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter bundles with at least one component assigned to this delivery profile. pattern:
     * ^dprof_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
     */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Filter by aggregated delivery readiness across bundle components. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "configured", "action_required",
     * "not_applicable". Value enum: "configured", "action_required", "not_applicable". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "configured", "action_required",
     * "not_applicable". anyOf[1][] (Value): string. Value enum: "configured", "action_required",
     * "not_applicable". anyOf[2] (Value): string. Value enum: "configured", "action_required",
     * "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<("configured" | "action_required" | "not_applicable")
        | readonly ("configured" | "action_required" | "not_applicable")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: modifier_set. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum:
     * "modifier_set". Value enum: "modifier_set". anyOf[1] (Value): Array of string. [] enum:
     * "modifier_set". anyOf[1][] (Value): string. Value enum: "modifier_set". anyOf[2] (Value):
     * string. Value enum: "modifier_set".
     */
    "expand"?: InputValue<("modifier_set") | readonly ("modifier_set")[]>;
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
export type BundlesUpdateParams = (InputValue<UpdateBundleRequestInput>)
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
 * One thing a buyer can do with an order, subscription, invoice or return they read through
 * /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first
 * available action as the primary action on the resource's page in your account.
 */
export type BuyerAction = {
    /**
     * Present only on an available cancel action. The cancellation choices this subscription
     * accepts from its buyer.
     */
    "cancel"?: BuyerCancelActionOptions;
    /**
     * When the buyer needs to act by. Omitted when the action has no deadline, or when the
     * resource's state or the store's policy doesn't allow it. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "due_at"?: string;
    /** Whether this session can take the action now. */
    "is_available": boolean;
    /**
     * Whether the store needs the buyer to take the action, such as paying a due invoice. It stays
     * true when the only thing in the way is signing in.
     */
    "is_required": boolean;
    /**
     * What the action is. Each resource lists its own kinds in a fixed order. New kinds may be
     * added; ignore kinds you don't recognize. Value enum: "start_return", "resend_receipt",
     * "cancel", "pause", "resume", "reactivate", "update_payment_method", "pay", "withdraw",
     * "ship_items", "pay_balance", "retry_payment", "update_delivery", "skip",
     * "update_billing_interval", "update_quantity", "swap_items", "renew", "change_plan",
     * "cancel_plan_change".
     */
    "kind": "start_return"
        | "resend_receipt"
        | "cancel"
        | "pause"
        | "resume"
        | "reactivate"
        | "update_payment_method"
        | "pay"
        | "withdraw"
        | "ship_items"
        | "pay_balance"
        | "retry_payment"
        | "update_delivery"
        | "skip"
        | "update_billing_interval"
        | "update_quantity"
        | "swap_items"
        | "renew"
        | "change_plan"
        | "cancel_plan_change"
        | (string & {});
    /**
     * Present only on an available pause action. The pause lengths this subscription accepts from
     * its buyer.
     */
    "pause"?: BuyerPauseActionOptions;
    /**
     * Present only on an available pay_balance action. The return resolutions the buyer can pay
     * now.
     */
    "pay_balance"?: BuyerPayBalanceActionOptions;
    /**
     * How many payment retries the buyer has left this billing period, and the retry that is
     * running. Present while the subscription is past due, including when the action is
     * unavailable. How many payment retries the buyer has left this billing period, and the retry
     * that is running.
     */
    "retry_payment"?: BuyerRetryPaymentActionOptions;
    /**
     * Why the action can't be taken now. Present exactly when is_available is false. New reasons
     * may be added; show a general message for a reason you don't recognize. Value enum:
     * "sign_in_required", "store_policy", "not_in_state", "window_closed", "nothing_to_return",
     * "collection_unavailable", "limit_reached", "delivery_hold", "in_progress".
     */
    "unavailable_reason"?: "sign_in_required"
        | "store_policy"
        | "not_in_state"
        | "window_closed"
        | "nothing_to_return"
        | "collection_unavailable"
        | "limit_reached"
        | "delivery_hold"
        | "in_progress"
        | (string & {});
};
/** The cancellation choices this subscription accepts from its buyer. */
export type BuyerCancelActionOptions = {
    /**
     * Reasons to offer, in the store's order. Empty means do not ask. Sending a reason is always
     * optional. [] enum: "too_expensive", "missing_features", "switched_service", "unused",
     * "customer_service", "too_complex", "low_quality", "other". [] (Value): string. Value enum:
     * "too_expensive", "missing_features", "switched_service", "unused", "customer_service",
     * "too_complex", "low_quality", "other".
     */
    "cancellation_reasons": Array<"too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {})>;
    /**
     * An available pause the buyer may accept instead of canceling, using POST
     * /v1/me/subscriptions/{subscription_id}/pause. The buyer may always decline and cancel. An
     * optional alternative to cancellation that this subscription can accept.
     */
    "retention_offer"?: BuyerCancelRetentionOffer;
    /**
     * The cancellation timing accepted by this subscription. New values may be added. Value enum:
     * "end_of_period", "immediately", "buyer_chooses".
     */
    "timing": "end_of_period" | "immediately" | "buyer_chooses" | (string & {});
};
/** An optional alternative to cancellation that this subscription can accept. */
export type BuyerCancelRetentionOffer = {
    /** The alternative offered. Ignore kinds you do not recognize. Value enum: "pause_instead". */
    "kind": "pause_instead" | (string & {});
    /**
     * Send this pause_duration_cycles to accept the offer. Format: int32. minimum: 1. maximum: 12.
     */
    "pause_duration_cycles": number;
};
/**
 * Withdraw a requested Return belonging to the current buyer. An omitted reason defaults to
 * buyer_request.
 */
export type BuyerCancelReturnRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The buyer withdrew the Return request. Defaults to buyer_request when omitted. Default:
     * "buyer_request". Value enum: "buyer_request".
     */
    "reason"?: "buyer_request" | (string & {});
    /** Optional detail about why the buyer withdrew the Return. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Withdraw a requested Return belonging to the current buyer. An omitted reason defaults to
 * buyer_request.
 */
export type BuyerCancelReturnRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The buyer withdrew the Return request. Defaults to buyer_request when omitted. Default:
     * "buyer_request". Value enum: "buyer_request".
     */
    "reason"?: "buyer_request";
    /** Optional detail about why the buyer withdrew the Return. minLength: 1. */
    "reason_message"?: string;
};
/** What a store lets buyers do to their own subscriptions. minProperties: 1. */
export type BuyerCapabilities = {
    /**
     * Whether buyers may change the shipping address and delivery method of their physical
     * subscriptions. Default: true.
     */
    "can_update_delivery"?: boolean;
    /**
     * Reasons a buyer is asked to choose from when canceling, in the order shown. Empty: the buyer
     * is not asked. When the list is not empty, a buyer's cancellation_reason_code must be one of
     * them. maxItems: 8. uniqueItems: true. Default: []. [] enum: "too_expensive",
     * "missing_features", "switched_service", "unused", "customer_service", "too_complex",
     * "low_quality", "other". [] (Value): string. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reasons"?: Array<"too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {})>;
    /**
     * When a subscription a buyer cancels ends. end_of_period: at trial_end_at while trialing,
     * current_period_end_at while active, or next_retry_at while past_due. buyer_chooses: the
     * buyer picks the scheduled time or right away. When no scheduled cancellation time is
     * available, including scheduled, incomplete, paused, and past_due without next_retry_at, the
     * buyer may send cancel_immediately: true under either policy. Default: "end_of_period". Value
     * enum: "end_of_period", "buyer_chooses".
     */
    "cancellation_timing"?: "end_of_period" | "buyer_chooses" | (string & {});
    /**
     * Replaced as a whole: send every field you want to keep. Whether buyers may pause, and for
     * how long. Omit it to let buyers pause with no limit. Whether buyers may pause their own
     * subscriptions. Send at least one field. minProperties: 1.
     */
    "pause"?: BuyerPauseCapability;
    /**
     * Replaced as a whole: send every field you want to keep. The offer a buyer sees before
     * canceling. The buyer can always decline it and cancel. Omit it for no offer. The offer a
     * buyer sees before canceling. Send at least one field. minProperties: 1.
     */
    "retention_offer"?: BuyerRetentionOffer;
    /**
     * Replaced as a whole: send every field you want to keep. Whether buyers may skip renewals.
     * Omit it to allow skipping with no consecutive limit. Whether buyers may skip renewals. Send
     * at least one field. minProperties: 1.
     */
    "skip"?: BuyerSkipCapability;
};
/** What a store lets buyers do to their own subscriptions. minProperties: 1. */
export type BuyerCapabilitiesRequestInput = {
    /**
     * Whether buyers may change the shipping address and delivery method of their physical
     * subscriptions. Default: true.
     */
    "can_update_delivery"?: boolean;
    /**
     * Reasons a buyer is asked to choose from when canceling, in the order shown. Empty: the buyer
     * is not asked. When the list is not empty, a buyer's cancellation_reason_code must be one of
     * them. maxItems: 8. uniqueItems: true. Default: []. [] enum: "too_expensive",
     * "missing_features", "switched_service", "unused", "customer_service", "too_complex",
     * "low_quality", "other". [] (Value): string. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reasons"?: Array<"too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other">;
    /**
     * When a subscription a buyer cancels ends. end_of_period: at trial_end_at while trialing,
     * current_period_end_at while active, or next_retry_at while past_due. buyer_chooses: the
     * buyer picks the scheduled time or right away. When no scheduled cancellation time is
     * available, including scheduled, incomplete, paused, and past_due without next_retry_at, the
     * buyer may send cancel_immediately: true under either policy. Default: "end_of_period". Value
     * enum: "end_of_period", "buyer_chooses".
     */
    "cancellation_timing"?: "end_of_period" | "buyer_chooses";
    /**
     * Replaced as a whole: send every field you want to keep. Whether buyers may pause, and for
     * how long. Omit it to let buyers pause with no limit. Whether buyers may pause their own
     * subscriptions. Send at least one field. minProperties: 1.
     */
    "pause"?: BuyerPauseCapabilityInput;
    /**
     * Replaced as a whole: send every field you want to keep. The offer a buyer sees before
     * canceling. The buyer can always decline it and cancel. Omit it for no offer. The offer a
     * buyer sees before canceling. Send at least one field. minProperties: 1.
     */
    "retention_offer"?: BuyerRetentionOfferRequestInput;
    /**
     * Replaced as a whole: send every field you want to keep. Whether buyers may skip renewals.
     * Omit it to allow skipping with no consecutive limit. Whether buyers may skip renewals. Send
     * at least one field. minProperties: 1.
     */
    "skip"?: BuyerSkipCapabilityInput;
};
/**
 * A checkout problem shown to the buyer, including whether it blocks completion and how to resolve
 * it.
 */
export type BuyerCheckoutProblemResource = {
    /** Whether the checkout cannot complete until the problem is resolved. */
    "blocks_completion": boolean;
    /**
     * Which condition affects the checkout. Value enum: "delivery_selection_stale",
     * "delivery_selection_invalid", "delivery_unreadable", "payment_in_progress".
     */
    "code": "delivery_selection_stale"
        | "delivery_selection_invalid"
        | "delivery_unreadable"
        | "payment_in_progress"
        | (string & {});
    /**
     * What the caller can do about the problem, and whether retrying the same request can help.
     * Guidance for recovering from a payment error: whether and how to retry (`retry`), and
     * optional next steps.
     */
    "remediation"?: BuyerErrorRemediation;
    /** How serious the problem is. Value enum: "error". */
    "severity": "error" | (string & {});
};
/** A session in which a buyer completes an order's payment. */
export type BuyerCheckoutSession = {
    /**
     * The payment attempt now collecting this checkout's order, the same attempt as the order's
     * active_payment_attempt. Read it to recover after losing a pay response, and resume it only
     * when is_resumable is true. Omitted when no attempt is active. Pending actions that open a
     * URL are left out; the pay response carries them. An attempt to pay an order.
     */
    "active_payment_attempt"?: BuyerOrderPaymentAttempt;
    /**
     * Contact the buyer entered in checkout before paying, saved with the session's checkout
     * credential. Separate from merchant-supplied prefill and customer_prefill from the customer
     * record. Omitted until the buyer saves or clears a field. When a checkout session payment
     * omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the
     * contact 30 days after the session ends, and when a customer linked to the session is
     * deleted. Buyer contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Whether to offer promotion-code entry now. True only while the session is open, is not in
     * recovery, and merchant promotion policy allows codes. An explicit
     * promotion_config.codes_enabled wins; null offers entry only when this merchant has an active
     * code promotion whose schedule includes now, in the session's environment. Recomputed on each
     * read. This hint does not change code admission: checkout lifecycle, promotion_config, and
     * merchant policy still apply.
     */
    "can_apply_promotion_code": boolean;
    /**
     * Whether checkout offers the buyer the option to save the card they type for faster checkout
     * at this merchant. When true, PayOrder accepts save_payment_method: true for one newly
     * collected card. False when the merchant turned checkout.saved_payment_details off, customer
     * accounts are merchant hosted, card is not an available payment option, the checkout collects
     * an invoice, a subscription, or a return, or the checkout acts for no customer and Flint
     * cannot email the buyer a verification code. Returned only to the checkout credential; never
     * in webhook payloads.
     */
    "can_save_payment_method"?: boolean;
    /**
     * Whether the buyer can save the card they type by giving a US or Canadian mobile phone number
     * with the payment, in save_payment_method_phone on POST /v1/orders/{order_id}/pay, and
     * confirming it with a texted code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     */
    "can_save_payment_method_with_phone"?: boolean;
    /**
     * Unique identifier for this checkout session, prefixed `cs_`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The custom text this session shows in checkout. Custom text shown in checkout: an order
     * summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * The customer of the session's order. Omitted when the order has none. A checkout credential
     * issued for this session acts for this customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Contact and default addresses of the customer the checkout acts for, with the recipient name
     * on its default shipping address: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. Present on GET and PATCH responses while the
     * session is open and acts for a customer. Separate from merchant-supplied prefill and
     * buyer_contact saved by the buyer. Returned only to the checkout credential; never in webhook
     * payloads. Details the buyer's checkout can prefill from the customer it acts for.
     */
    "customer_prefill"?: CheckoutCustomerPrefill;
    /**
     * Current delivery choices for Flint-owned pricing. External pricing reports
     * requires_explicit_quote; reading this field does not request a delivery quote. Omitted when
     * the session is not open, has no order, or Flint cannot read its delivery. The delivery
     * options Flint derived for a checkout as a buyer sees them: choice groups, input
     * requirements, and evaluation status.
     */
    "delivery"?: CheckoutDerivedDeliveryResource;
    /**
     * Immutable delivery method assignment captured when the checkout was created. [] (Value):
     * string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids": Array<string>;
    /**
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment.
     */
    "delivery_selection_required": boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64.
     */
    "expires_in_seconds"?: number;
    /**
     * Where the buyer completes a gift card challenge for this checkout. Returned on
     * single-session reads, session create and update responses, checkout launch results, and
     * customer verification confirmation results while the session is open and can show the
     * challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results.
     * A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     */
    "gift_card_challenge"?: CheckoutGiftCardChallenge;
    /**
     * ID of the invoice a session of type `invoice` collects payment for. Absent for other types.
     * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * Whether this terminal session credential is temporarily restricted to recovering its owning
     * payment attempt.
     */
    "is_in_recovery": boolean;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings for a checkout: whether buyers must accept terms, and links to the
     * terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and
     * webhooks omit it. An image with its URL, size, and alt text.
     */
    "merchant_icon"?: Image;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
     * merchant has one; other responses and webhooks omit it. An image with its URL, size, and alt
     * text.
     */
    "merchant_logo"?: Image;
    /**
     * The merchant's business name, which hosted checkout shows when `theme.title` is unset. Reads
     * `Merchant` when the merchant has not set a business name. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     */
    "merchant_name"?: string;
    /**
     * How the buyer can reach the merchant for help: the support email, phone, and URL the
     * merchant set. Present on GET and PATCH responses when the merchant set at least one of them.
     * Show it where your checkout tells the buyer to contact the merchant, such as an expired or
     * closed checkout, or your receipt. Returned only to the checkout credential; never in webhook
     * payloads. The merchant's support contact. Each field is omitted when the merchant has not
     * set it.
     */
    "merchant_support"?: CheckoutMerchantSupport;
    /**
     * ID of the order the session collects payment for, fixed at creation. Absent when the session
     * has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /** Origin of the page that renders this headless checkout. Omitted when not set. */
    "page_origin"?: string;
    /**
     * Whether at least one saved card this checkout lists would be refused for the current
     * delivery destination because the paying credential last confirmed a code more than 15
     * minutes ago. Request a code with purpose pay_to_new_address, without email or channel, and
     * confirm it with this credential before paying. A Flint wallet card can still pay to an
     * address in that wallet while this is true for a store saved card. Pickup and orders that
     * ship nothing never require this verification. Returned only to the checkout credential.
     * Returned only to the checkout credential; never in webhook payloads.
     */
    "pay_to_new_address_requires_verification"?: boolean;
    /**
     * Guidance for collecting a payment source. Checkout-credential reads include it only while
     * the session is open. Returned only to the checkout credential; never in webhook payloads.
     * What a client needs to collect payment for a buyer's order. The `stripe` field holds the
     * Stripe values.
     */
    "payment_collection"?: BuyerPaymentCollection;
    /**
     * IDs of the payment intents for the session's order. Absent when the order has none. []
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_ids"?: Array<string>;
    /**
     * ID of the payment link the session was started from. Absent when it was not started from a
     * payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
     */
    "payment_link_id"?: string;
    /**
     * The current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text.
     */
    "payment_link_image"?: Image;
    /**
     * The card the buyer saved pending with this checkout's payment, and whether they confirmed
     * it. Present on GET and PATCH responses after a payment that paid the order in full, or that
     * was approved for the merchant to capture later, and saved a card this way. Without a number,
     * confirmation requires an emailed code. A checkout whose payment is approved stays open until
     * the capture. Returned only to the checkout credential; never in webhook payloads. A card the
     * buyer saved with this checkout's payment that waits for a code. It works for nothing until
     * the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method.
     */
    "payment_method_save"?: CheckoutPaymentMethodSave;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Configured payment options for merchant credentials; currently available payment options for
     * the checkout credential. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefill;
    /**
     * Named conditions that affect checkout completion. Follow each problem's remediation action
     * instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means
     * another payment for the order must finish before this checkout can complete. When Flint
     * cannot read the checkout's delivery, the read still succeeds and reports
     * delivery_unreadable; its remediation says whether reading the session again can succeed, and
     * its next action's reason_code names the error. [] (Value): {@link
     * BuyerCheckoutProblemResource}. A checkout problem shown to the buyer, including whether it
     * blocks completion and how to resolve it.
     */
    "problems": Array<BuyerCheckoutProblemResource>;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * When the restricted payment-attempt recovery window ends. `null` when the session has no
     * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "recovery_expires_at"?: string | null;
    /**
     * Payment attempt that this checkout credential may recover while is_in_recovery is true.
     * Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
     */
    "recovery_payment_attempt_id"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * All buyer-visible refunds on this session’s order, including refunds made by the store. Uses
     * the same buyer projection as /v1/me/refunds. Included on GET single-session reads as an
     * array, with [] when there are none, and omitted from other responses and webhooks. A failed
     * refund with failure_reason refund_abandoned could not be completed: tell the buyer to
     * contact the store to get their money back. [] (Value): {@link BuyerRefund}. Money returned
     * against a collected payment.
     */
    "refunds"?: Array<BuyerRefund>;
    /**
     * Whether saving a new card or using saved cards needs the buyer to confirm their email with a
     * code. A new card can be saved pending with the payment and confirmed on the receipt; using
     * saved cards still needs the code before paying. True when can_save_payment_method is true
     * and the checkout acts for no customer for this credential: the merchant created it without
     * one, and either the buyer has not confirmed an email with this credential, or the customer
     * whose email they confirmed has since changed that email or been deleted. A credential other
     * than the one a confirmation returned, such as the hosted checkout link opened on another
     * device, reads true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads.
     */
    "save_payment_method_requires_verification"?: boolean;
    /**
     * What save_payment_method keeps, present when can_save_payment_method is true: card, a card
     * the buyer types into checkout. Show the save option with that payment method only. A pay
     * request that sends save_payment_method: true with Apple Pay, Google Pay, a bank account, or
     * Affirm, through a confirmation token created with setup_future_usage none, still pays, and
     * its payment attempt's payment_method_save reports not_saved. The values can grow. Returned
     * only to the checkout credential; never in webhook payloads. [] enum: "card". [] (Value):
     * string. Value enum: "card".
     */
    "save_payment_method_types"?: Array<"card" | (string & {})>;
    /**
     * Guidance for collecting a payment method to save. Checkout-credential reads include it only
     * while the session is open. Returned only to the checkout credential; never in webhook
     * payloads. Client guidance for saving a payment method on the merchant's connected account.
     */
    "setup_collection"?: BuyerSetupCollection;
    /**
     * Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when
     * the merchant's agreement with Flint removes it. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     */
    "show_flint_mark"?: boolean;
    /**
     * Where the session is in its lifecycle. Only an `open` session accepts payment.
     * `terminal_reason` says why a session that is not open ended. Value enum: "open", "paid",
     * "partially_paid", "expired", "closed", "invalidated".
     */
    "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
    /**
     * ID of the subscription plan a session of type `subscription_plan` signs the buyer up for.
     * Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /**
     * Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order
     * was created, so later plan changes do not alter them. Absent when the checkout starts no
     * subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the
     * session's order was created, so later plan changes do not alter them.
     */
    "subscription_terms"?: CheckoutSubscriptionTerms;
    /**
     * ID of the session that replaced this one. Present when `terminal_reason` is `superseded`.
     * Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "superseding_checkout_session_id"?: string;
    /**
     * How the session is presented to the buyer. A hosted session has a `url` on Flint's checkout
     * page; a headless one is rendered on your own page. Value enum: "hosted", "headless".
     */
    "surface": "hosted" | "headless" | (string & {});
    /**
     * The session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     */
    "tax"?: CheckoutSessionTax;
    /**
     * Why the session ended. The checkout credential can still read its own closed or expired
     * session; every other call is refused because the session is not open. order_paid_elsewhere
     * applies only to invalidated sessions when payment succeeds or partially succeeds outside the
     * session. order_mutated applies when an edit closes or completes its order, or ends an
     * invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted
     * and headless sessions open. A session already past expires_at ends with expired before the
     * edit is applied. Value enum: "payment_succeeded", "payment_partially_succeeded", "expired",
     * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
     * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
     * "invoice_balance_changed".
     */
    "terminal_reason"?: "payment_succeeded"
        | "payment_partially_succeeded"
        | "expired"
        | "closed_by_merchant"
        | "order_mutated"
        | "superseded"
        | "order_paid_elsewhere"
        | "invoice_paid_elsewhere"
        | "invoice_voided"
        | "invoice_uncollectible"
        | "invoice_balance_changed"
        | (string & {});
    /**
     * The theme checkout renders with: your branding settings, with the session's `title`,
     * `primary_color`, and `accent_color` over them. A session sets only those three; the other
     * fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings.
     */
    "theme"?: CheckoutTheme;
    /**
     * The tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the session collects payment for, fixed at creation. Value enum: "order", "quick_pay",
     * "subscription_plan", "invoice", "payment_link".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Hosted checkout URL that carries a one-time launch credential. Send the buyer here to pay.
     * Present only for hosted sessions read with a merchant credential that can manage checkout
     * sessions. Launch results include it for hosted sessions: create, payment-link resolve, and
     * invoice and return-resolution checkout. Omitted for headless sessions.
     */
    "url"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type BuyerCheckoutSessionLaunchResponse = ResolvePaymentLinkResponse;
/**
 * The checkout session with any newly issued checkout credential. Hosted launches return url
 * without checkout_auth_token. Headless launches return checkout_auth_token without url. Customer
 * binding confirmation returns its newly issued credential for either surface. A session in which
 * a buyer completes an order's payment.
 */
export type BuyerCheckoutSessionWithSecret = (Exclude<BuyerCheckoutSession & object, readonly unknown[]>)
    & ({
    /**
     * Checkout credential. Send it as Authorization: Bearer <checkout_auth_token>. Present on
     * headless checkout launch and customer binding confirmation. Omitted on hosted checkout
     * launch and when a saved-card confirmation keeps the current credential.
     */
    "checkout_auth_token"?: string;
    /**
     * One-time identity token returned only when a successful code confirmation remembered the
     * buyer. Store it on your backend or in an HttpOnly cookie. It never opens saved cards.
     * minLength: 47. maxLength: 47. pattern: ^rbt_[A-Za-z0-9_-]{43}$.
     */
    "remembered_buyer_token"?: string;
});
/** The request body for: Preview Return eligibility or resolution amounts for the current buyer. */
export type BuyerCreateReturnPreviewRequest = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Which preview to run. Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. The buyer's proposed resolution
     * type, returned quantities, and replacement items to preview for a Return.
     */
    "resolution"?: BuyerCreateReturnResolutionPreviewRequest;
})
    & ((Exclude<BuyerCreateReturnPreviewRequestEligibility & object, readonly unknown[]>)
    | (Exclude<BuyerCreateReturnPreviewRequestResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `eligibility` variant of `BuyerCreateReturnPreviewRequest`. */
export type BuyerCreateReturnPreviewRequestEligibility = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. The buyer's proposed resolution
     * type, returned quantities, and replacement items to preview for a Return.
     */
    "resolution"?: BuyerCreateReturnResolutionPreviewRequest;
})
    & (({
    /** Which preview to run. Value enum: "eligibility". */
    "mode": unknown;
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
}));
/** The `eligibility` variant of `BuyerCreateReturnPreviewRequest`. */
export type BuyerCreateReturnPreviewRequestEligibilityInput = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * The priced resolution. Present when `mode` is `resolution`. The buyer's proposed resolution
     * type, returned quantities, and replacement items to preview for a Return.
     */
    "resolution"?: BuyerCreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
})
    & ({
    "resolution"?: never;
}));
/** The request body for: Preview Return eligibility or resolution amounts for the current buyer. */
export type BuyerCreateReturnPreviewRequestInput = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Which preview to run. Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution";
    /**
     * The priced resolution. Present when `mode` is `resolution`. The buyer's proposed resolution
     * type, returned quantities, and replacement items to preview for a Return.
     */
    "resolution"?: BuyerCreateReturnResolutionPreviewRequestInput;
})
    & ((Exclude<BuyerCreateReturnPreviewRequestEligibilityInput & object, readonly unknown[]>)
    | (Exclude<BuyerCreateReturnPreviewRequestResolutionInput & object, readonly unknown[]>));
/** The `resolution` variant of `BuyerCreateReturnPreviewRequest`. */
export type BuyerCreateReturnPreviewRequestResolution = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. The buyer's proposed resolution
     * type, returned quantities, and replacement items to preview for a Return.
     */
    "resolution": BuyerCreateReturnResolutionPreviewRequest;
})
    & (({
    /** Which preview to run. Value enum: "resolution". */
    "mode": unknown;
    /**
     * The priced resolution. Present when `mode` is `resolution`. The buyer's proposed resolution
     * type, returned quantities, and replacement items to preview for a Return.
     */
    "resolution": BuyerCreateReturnResolutionPreviewRequest;
}));
/** The `resolution` variant of `BuyerCreateReturnPreviewRequest`. */
export type BuyerCreateReturnPreviewRequestResolutionInput = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution";
    /**
     * The priced resolution. Present when `mode` is `resolution`. The buyer's proposed resolution
     * type, returned quantities, and replacement items to preview for a Return.
     */
    "resolution": BuyerCreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution";
    /**
     * The priced resolution. Present when `mode` is `resolution`. The buyer's proposed resolution
     * type, returned quantities, and replacement items to preview for a Return.
     */
    "resolution": BuyerCreateReturnResolutionPreviewRequestInput;
})
    & ({
    "eligibility"?: never;
}));
/** The request body for: Create a Return for the current buyer. */
export type BuyerCreateReturnRequest = {
    /**
     * The lines to check or return, each naming an order line item. minItems: 1. maxItems: 100. []
     * (Value): {@link ReturnLineItemRequest}. An order line item to return, with the quantity,
     * return reason, and optionally a note and the resolution the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequest>;
    /**
     * ID of the Order to return items from. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
};
