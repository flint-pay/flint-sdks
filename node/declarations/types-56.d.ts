import type { MoneyValueInput, MoneyValue, MoneyValuePreviousAttributes } from './types-44.js';
import type { MerchantWebhookEnvelope, MetadataMap, ModifierSet } from './types-43.js';
import type { PlatformFee } from './types-55.js';
import type { ResponseMeta } from './types-62.js';
import type { InputValue } from '../runtime.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { QuantityPriceBreak, QuantityPriceBreakRequestInput } from './types-59.js';
import type { CreatePriceListRequestInput, CreatePriceListPricesRequestInput } from './types-12.js';
import type { DisputesAcceptParams } from './types-26.js';
import type { UpdatePriceListRequestInput, UpdatePriceListPriceRequestInput } from './types-77.js';
import type {
    ReturnProcessDecision,
    ReturnProcessDispositionRequest,
    ReturnProcessInspectionRequest,
    ReturnProcessResolutionRequest,
    ReturnProcessDecisionInput,
    ReturnProcessDispositionRequestInput,
    ReturnProcessInspectionRequestInput,
    ReturnProcessResolutionRequestInput,
    ReturnProcessReceiptRequest,
    ReturnProcessReceiptRequestInput,
    ReturnProcessResult
} from './types-64.js';
import type { CategoryReference, CategoryReferencePreviousAttributes } from './types-5.js';
import type { ImageAttachment, ImageAttachmentPreviousAttributes } from './types-31.js';
import type {
    ProductOption,
    ProductPriceRange,
    ProductVariant,
    ProductVariantMatch,
    ProductOptionPreviousAttributes,
    ProductPriceRangePreviousAttributes,
    ProductVariantPreviousAttributes
} from './types-57.js';
import type { WebhookProduct } from './types-79.js';
/**
 * The whole platform fee cap. The largest platform fee on a payment is percent of the amount it
 * collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and
 * never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up
 * to 1.30 USD on a 100.00 USD payment. percent and maximum_fee_currency_options are required. A
 * write replaces the cap whole, so a cap sent without fixed_fee_currency_options has no fixed
 * part.
 */
export type PlatformFeeCapRequestInput = {
    /**
     * The fixed part of the cap per payment, keyed by currency code, added to the percentage part:
     * 30 USD minor units with percent 1 is 1% + 0.30 USD. Optional. Each is from 1 minor unit to
     * the same currency's maximum, and a currency needs a maximum to have one; otherwise
     * INVALID_REQUEST with INVALID_VALUE on the entry. Each key must equal its Money's currency.
     * Only USD today. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "fixed_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * The maximum fee on one payment, keyed by currency code: from 1 to 1,000,000 minor units
     * ($0.01 to $10,000.00). Each key must equal its Money's currency. Only USD today.
     * minProperties: 1. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "maximum_fee_currency_options": Record<string, MoneyValueInput>;
    /**
     * The percentage part of the cap, in percent: from 0 to 25, with up to four decimal places.
     * 2.5 means 2.5%. 0 needs a fixed part in every currency with a maximum, so the cap is a flat
     * fee per payment; otherwise INVALID_REQUEST with INVALID_VALUE on the maximum of the currency
     * without one. minimum: 0. maximum: 25. multipleOf: 0.0001.
     */
    "percent": number;
};
export type PlatformFeeCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed"
                | "install_revoked"
                | "install_revoked_by_app"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {});
            "checkout_session_id"?: string;
            "collected_at"?: string;
            "created_at": string;
            "merchant_id": string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "platform_fee_id": string;
            "refunded_money": MoneyValue;
            "requested_amount_money": MoneyValue;
            "reserve_available_at"?: string;
            "reserve_hold_money"?: MoneyValue;
            "status": "pending" | "succeeded" | "canceled" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee.created";
})
    & {
    "event_type": "platform_fee.created";
});
/** A page of `PlatformFee` objects. */
export type PlatformFeeListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PlatformFee}. A platform fee your partner app charged, or asked to charge, on a payment it
     * created for an installed merchant. Owned by the merchant that owns the partner app.
     */
    "data": Array<PlatformFee>;
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
/** A positive platform fee in integer minor units plus an ISO 4217 currency code. */
export type PlatformFeeMoneyInput = {
    /**
     * Fee in the currency's minor unit, at least 1. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "amount": `${bigint}` | bigint;
    /**
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD".
     */
    "currency": string;
};
/**
 * A payout from your partner app's platform fee balance to your merchant balance. Owned by the
 * merchant that owns the partner app.
 */
export type PlatformFeePayout = {
    /**
     * The amount transferred to your merchant balance. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * The credit on your merchant ledger. Flint checks daily for the credit, so this field can be
     * absent even after the payout succeeds. Linking the credit sends no payout event and doesn't
     * advance version. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     */
    "balance_transaction_id"?: string;
    /** When Flint prepared the payout. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Why the payout failed. Present only when status is failed. Can gain values; treat unknown
     * values as payout_failed. Value enum: "merchant_cannot_receive", "payout_failed".
     */
    "failure_reason"?: "merchant_cannot_receive" | "payout_failed" | (string & {});
    /**
     * The partner app whose fee balance funded the payout. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id": string;
    /**
     * Unique identifier for the platform fee payout. Example: "pfpo_01KEZF7C00H58B147FK286D4A4".
     */
    "platform_fee_payout_id": string;
    /**
     * Where the payout stands. succeeded and failed are final. Value enum: "pending", "succeeded",
     * "failed".
     */
    "status": "pending" | "succeeded" | "failed" | (string & {});
    /**
     * When the transfer succeeded. Present only when status is succeeded. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "succeeded_at"?: string;
    /**
     * When the payout's owned state last changed. Retry bookkeeping and observing the credit don't
     * change it. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type PlatformFeePayoutCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "balance_transaction_id"?: string;
            "created_at": string;
            "failure_reason"?: "merchant_cannot_receive" | "payout_failed" | (string & {});
            "partner_app_id": string;
            "platform_fee_payout_id": string;
            "status": "pending" | "succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee_payout.created";
})
    & {
    "event_type": "platform_fee_payout.created";
});
export type PlatformFeePayoutFailedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "balance_transaction_id"?: string;
            "created_at": string;
            "failure_reason"?: "merchant_cannot_receive" | "payout_failed" | (string & {});
            "partner_app_id": string;
            "platform_fee_payout_id": string;
            "status": "pending" | "succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "balance_transaction_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "failure_reason"?: (("merchant_cannot_receive" | "payout_failed" | (string & {})) | (null));
            "partner_app_id"?: ((string) | (null));
            "platform_fee_payout_id"?: ((string) | (null));
            "status"?: (("pending" | "succeeded" | "failed" | (string & {})) | (null));
            "succeeded_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee_payout.failed";
})
    & {
    "event_type": "platform_fee_payout.failed";
});
/** A page of `PlatformFeePayout` objects. */
export type PlatformFeePayoutListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PlatformFeePayout}. A payout from your partner app's platform fee balance to your merchant
     * balance. Owned by the merchant that owns the partner app.
     */
    "data": Array<PlatformFeePayout>;
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
/** A response containing `PlatformFeePayout` data. */
export type PlatformFeePayoutResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A payout from your
     * partner app's platform fee balance to your merchant balance. Owned by the merchant that owns
     * the partner app.
     */
    "data": PlatformFeePayout;
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
export type PlatformFeePayoutSucceededEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "balance_transaction_id"?: string;
            "created_at": string;
            "failure_reason"?: "merchant_cannot_receive" | "payout_failed" | (string & {});
            "partner_app_id": string;
            "platform_fee_payout_id": string;
            "status": "pending" | "succeeded" | "failed" | (string & {});
            "succeeded_at"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "balance_transaction_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "failure_reason"?: (("merchant_cannot_receive" | "payout_failed" | (string & {})) | (null));
            "partner_app_id"?: ((string) | (null));
            "platform_fee_payout_id"?: ((string) | (null));
            "status"?: (("pending" | "succeeded" | "failed" | (string & {})) | (null));
            "succeeded_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee_payout.succeeded";
})
    & {
    "event_type": "platform_fee_payout.succeeded";
});
export type PlatformFeePayoutsGetParams = {};
export type PlatformFeePayoutsListParams = {
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
     * Exact match on the partner app. minLength: 1. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Statuses to include. Omit it to list every status. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "pending", "succeeded", "failed". Value enum:
     * "pending", "succeeded", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "succeeded", "failed". anyOf[1][] (Value): string. Value enum: "pending",
     * "succeeded", "failed". anyOf[2] (Value): string. Value enum: "pending", "succeeded",
     * "failed".
     */
    "status"?: InputValue<("pending" | "succeeded" | "failed") | readonly ("pending" | "succeeded" | "failed")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
/**
 * A platform fee the partner app charges on the payment, beside Flint's fees. The installed
 * merchant pays it, and Flint takes no share of it.
 */
export type PlatformFeeRequest = {
    /**
     * The fee, at least 1 minor unit, in the payment's currency. A fixed amount: compute any
     * percentage yourself. Omit platform_fee when creating a payment without a fee. A positive
     * platform fee in integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
};
/**
 * A platform fee the partner app charges on the payment, beside Flint's fees. The installed
 * merchant pays it, and Flint takes no share of it.
 */
export type PlatformFeeRequestInput = {
    /**
     * The fee, at least 1 minor unit, in the payment's currency. A fixed amount: compute any
     * percentage yourself. Omit platform_fee when creating a payment without a fee. A positive
     * platform fee in integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": PlatformFeeMoneyInput;
};
/** A response containing `PlatformFee` data. */
export type PlatformFeeResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A platform fee your
     * partner app charged, or asked to charge, on a payment it created for an installed merchant.
     * Owned by the merchant that owns the partner app.
     */
    "data": PlatformFee;
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
export type PlatformFeeSucceededEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed"
                | "install_revoked"
                | "install_revoked_by_app"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {});
            "checkout_session_id"?: string;
            "collected_at"?: string;
            "created_at": string;
            "merchant_id": string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "platform_fee_id": string;
            "refunded_money": MoneyValue;
            "requested_amount_money": MoneyValue;
            "reserve_available_at"?: string;
            "reserve_hold_money"?: MoneyValue;
            "status": "pending" | "succeeded" | "canceled" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_reason"?: (("payment_not_completed"
                | "install_revoked"
                | "install_revoked_by_app"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {}))
                | (null));
            "checkout_session_id"?: ((string) | (null));
            "collected_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "partner_app_install_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "platform_fee_id"?: ((string) | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "requested_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "reserve_available_at"?: ((string) | (null));
            "reserve_hold_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "succeeded" | "canceled" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee.succeeded";
})
    & {
    "event_type": "platform_fee.succeeded";
});
export type PlatformFeeUpdatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "amount_money": MoneyValue;
            "canceled_reason"?: "payment_not_completed"
                | "install_revoked"
                | "install_revoked_by_app"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {});
            "checkout_session_id"?: string;
            "collected_at"?: string;
            "created_at": string;
            "merchant_id": string;
            "partner_app_id": string;
            "partner_app_install_id": string;
            "payment_intent_id": string;
            "platform_fee_id": string;
            "refunded_money": MoneyValue;
            "requested_amount_money": MoneyValue;
            "reserve_available_at"?: string;
            "reserve_hold_money"?: MoneyValue;
            "status": "pending" | "succeeded" | "canceled" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_reason"?: (("payment_not_completed"
                | "install_revoked"
                | "install_revoked_by_app"
                | "platform_capability_inactive"
                | "uncollectible"
                | (string & {}))
                | (null));
            "checkout_session_id"?: ((string) | (null));
            "collected_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "partner_app_id"?: ((string) | (null));
            "partner_app_install_id"?: ((string) | (null));
            "payment_intent_id"?: ((string) | (null));
            "platform_fee_id"?: ((string) | (null));
            "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
            "requested_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "reserve_available_at"?: ((string) | (null));
            "reserve_hold_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("pending" | "succeeded" | "canceled" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: "merchant" | (string & {});
    "event_type"?: "platform_fee.updated";
})
    & {
    "event_type": "platform_fee.updated";
});
export type PlatformFeesGetParams = {};
export type PlatformFeesListParams = {
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
     * Exact match on the partner app. minLength: 1. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Exact match on the install whose token created the payment. minLength: 1. pattern:
     * ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: InputValue<string>;
    /**
     * Exact match on the installed merchant charged the fee. minLength: 1. pattern:
     * ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id"?: InputValue<string>;
    /**
     * Exact match on the payment the fee rides on. minLength: 1. pattern:
     * ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: InputValue<string>;
    /**
     * Statuses to include. Omit it to list every status. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "pending", "succeeded", "canceled". Value enum:
     * "pending", "succeeded", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "succeeded", "canceled". anyOf[1][] (Value): string. Value enum: "pending",
     * "succeeded", "canceled". anyOf[2] (Value): string. Value enum: "pending", "succeeded",
     * "canceled".
     */
    "status"?: InputValue<("pending" | "succeeded" | "canceled") | readonly ("pending" | "succeeded" | "canceled")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
/**
 * License key terms. Null limits mean unlimited activations or no expiry. A null generated key
 * prefix means no prefix.
 */
export type PoolLicenseKeyConfiguration = {
    /**
     * Maximum active devices per key. Null when activations are unlimited. Format: int32. minimum:
     * 1. maximum: 10000.
     */
    "activation_limit": number | null;
    /** Whether Flint emails keys to the buyer. Defaults to true. Default: true. */
    "email_delivery_enabled": boolean;
    /**
     * Active pool in this merchant and environment. Required when source is pool. pattern:
     * ^lkp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     */
    "license_key_pool_id": string;
    /** Source of the license keys. Value enum: "pool". */
    "source": "pool" | (string & {});
    /**
     * Days from issuance until expiry. Null when keys do not expire. Format: int32. minimum: 1.
     * maximum: 36500.
     */
    "validity_period_days": number | null;
};
export type PoolLicenseKeyConfigurationPreviousAttributes = {
    /**
     * Maximum active devices per key. Null when activations are unlimited. anyOf[1] (Value):
     * integer. Maximum active devices per key. Null when activations are unlimited. Format: int32.
     * minimum: 1. maximum: 10000. anyOf[2] (Value): null.
     */
    "activation_limit"?: ((number) | (null));
    /**
     * Whether Flint emails keys to the buyer. Defaults to true. anyOf[1] (Value): boolean. Whether
     * Flint emails keys to the buyer. Defaults to true. Default: true. anyOf[2] (Value): null.
     */
    "email_delivery_enabled"?: ((boolean) | (null));
    /**
     * Active pool in this merchant and environment. Required when source is pool. anyOf[1]
     * (Value): string. Active pool in this merchant and environment. Required when source is pool.
     * pattern: ^lkp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H". anyOf[2]
     * (Value): null.
     */
    "license_key_pool_id"?: ((string) | (null));
    /**
     * Source of the license keys. Value enum: "pool". anyOf[1] (Value): string. Source of the
     * license keys. Value enum: "pool". anyOf[2] (Value): null.
     */
    "source"?: (("pool" | (string & {})) | (null));
    /**
     * Days from issuance until expiry. Null when keys do not expire. anyOf[1] (Value): integer.
     * Days from issuance until expiry. Null when keys do not expire. Format: int32. minimum: 1.
     * maximum: 36500. anyOf[2] (Value): null.
     */
    "validity_period_days"?: ((number) | (null));
};
/**
 * Replaced as a whole: send every field you want to keep. Only product_type digital supports this
 * setting. It adds no delivery requirement and is independent of the delivery profile. Send null
 * to remove every value you set in this section. Omission preserves it on update.
 */
export type PoolLicenseKeyConfigurationRequest = {
    /**
     * Maximum active devices per key. Omit or send null for no limit. Format: int32. minimum: 1.
     * maximum: 10000.
     */
    "activation_limit"?: number | null;
    /** Whether Flint emails keys to the buyer. Defaults to true. Default: true. */
    "email_delivery_enabled"?: boolean;
    /**
     * Active pool in this merchant and environment. Required when source is pool. minLength: 1.
     * pattern: ^lkp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     */
    "license_key_pool_id": string;
    /** Source of the license keys. Value enum: "pool". */
    "source": "pool" | (string & {});
    /**
     * Days from issuance until expiry. Omit or send null for no expiry. Format: int32. minimum: 1.
     * maximum: 36500.
     */
    "validity_period_days"?: number | null;
};
/**
 * Replaced as a whole: send every field you want to keep. Only product_type digital supports this
 * setting. It adds no delivery requirement and is independent of the delivery profile. Send null
 * to remove every value you set in this section. Omission preserves it on update.
 */
export type PoolLicenseKeyConfigurationRequestInput = {
    /**
     * Maximum active devices per key. Omit or send null for no limit. Format: int32. minimum: 1.
     * maximum: 10000.
     */
    "activation_limit"?: number | null;
    /** Whether Flint emails keys to the buyer. Defaults to true. Default: true. */
    "email_delivery_enabled"?: boolean;
    /**
     * Active pool in this merchant and environment. Required when source is pool. minLength: 1.
     * pattern: ^lkp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     */
    "license_key_pool_id": string;
    /** Source of the license keys. Value enum: "pool". */
    "source": "pool";
    /**
     * Days from issuance until expiry. Omit or send null for no expiry. Format: int32. minimum: 1.
     * maximum: 36500.
     */
    "validity_period_days"?: number | null;
};
/** A merchant-only set of variant prices for individual customers or customer segments. */
export type PriceList = {
    /**
     * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been
     * archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "archived_at": string | null;
    /**
     * When this price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Immutable currency of every price in this list. Currently USD. Uses ISO 4217 currency codes.
     * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. [] (Value): string.
     */
    "customer_segments": Array<string>;
    /**
     * Caller-owned identifier for this resource in an external system. `null` when unset.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
    /**
     * Identifier of the merchant that owns this price list. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string;
    /**
     * Caller-owned metadata stored on this price list. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Name used to identify this price list. */
    "name": string;
    /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
    "price_count": number;
    /**
     * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id": string;
    /**
     * Availability or retirement state. Derived as archived when archived_at is set; otherwise
     * active or inactive. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * When this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /**
     * Aggregate version, increased once for a request that changes the list or its prices. No-op
     * writes preserve it. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type PriceListArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "archived_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "customer_segments"?: ((Array<string>) | (null));
            "external_reference_id"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "price_count"?: ((number) | (null));
            "price_list_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "price_list.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "archived_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "customer_segments"?: ((Array<string>) | (null));
            "external_reference_id"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "price_count"?: ((number) | (null));
            "price_list_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "price_list.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "price_list.archived";
});
/**
 * The `price_list.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PriceListArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.archived_at (Optional): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived.
     * previous_attributes.archived_at.anyOf[1] (Value): string. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.archived_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When this price
     * list was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value):
     * string. When this price list was created, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.currency (Optional): string or null. Immutable currency of every price
     * in this list. Currently USD. Uses ISO 4217 currency codes.
     * previous_attributes.currency.anyOf[1] (Value): string. Immutable currency of every price in
     * this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". previous_attributes.currency.anyOf[2] (Value): null.
     * previous_attributes.customer_segments (Optional): Array of string or null. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned.
     * previous_attributes.customer_segments.anyOf[1] (Value): Array of string. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned. maxItems: 20.
     * uniqueItems: true. previous_attributes.customer_segments.anyOf[1][] (Value): string.
     * previous_attributes.customer_segments.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this price list. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this price list.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Name used to identify this price list. previous_attributes.name.anyOf[1]
     * (Value): string. Name used to identify this price list. previous_attributes.name.anyOf[2]
     * (Value): null. previous_attributes.price_count (Optional): integer or null. Number of
     * variant prices in the list. previous_attributes.price_count.anyOf[1] (Value): integer.
     * Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000.
     * previous_attributes.price_count.anyOf[2] (Value): null. previous_attributes.price_list_id
     * (Optional): string or null. Stable identifier of this price list.
     * previous_attributes.price_list_id.anyOf[1] (Value): string. Stable identifier of this price
     * list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * previous_attributes.price_list_id.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Availability or retirement state. Derived as archived when
     * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Availability or retirement
     * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
     * enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When this price list or its
     * prices last changed, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. When this price list or its prices last changed, as an RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * previous_attributes.version.anyOf[1] (Value): integer. Aggregate version, increased once for
     * a request that changes the list or its prices. No-op writes preserve it. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. archived_at (Optional): string or null. When
         * this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been
         * archived. archived_at.anyOf[1] (Value): string. When this price list was soft-deleted,
         * as an RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". archived_at.anyOf[2] (Value): null. created_at (Optional):
         * string or null. When this price list was created, as an RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. When this price list was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. currency (Optional): string or null. Immutable currency of every price in
         * this list. Currently USD. Uses ISO 4217 currency codes. currency.anyOf[1] (Value):
         * string. Immutable currency of every price in this list. Currently USD. Uses ISO 4217
         * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * currency.anyOf[2] (Value): null. customer_segments (Optional): Array of string or null.
         * Customer.segment labels assigned to this list. Empty when no segments are assigned.
         * customer_segments.anyOf[1] (Value): Array of string. Customer.segment labels assigned to
         * this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments.anyOf[1][] (Value): string. customer_segments.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. `null` when unset. external_reference_id.anyOf[1]
         * (Value): string. Caller-owned identifier for this resource in an external system. `null`
         * when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns this price list. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this price
         * list. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * name (Optional): string or null. Name used to identify this price list. name.anyOf[1]
         * (Value): string. Name used to identify this price list. name.anyOf[2] (Value): null.
         * price_count (Optional): integer or null. Number of variant prices in the list.
         * price_count.anyOf[1] (Value): integer. Number of variant prices in the list. Format:
         * int64. minimum: 0. maximum: 10000. price_count.anyOf[2] (Value): null. price_list_id
         * (Optional): string or null. Stable identifier of this price list. price_list_id.anyOf[1]
         * (Value): string. Stable identifier of this price list. pattern:
         * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
         * price_list_id.anyOf[2] (Value): null. status (Optional): string or null. Availability or
         * retirement state. Derived as archived when archived_at is set; otherwise active or
         * inactive. Value enum: "active", "inactive", "archived". status.anyOf[1] (Value): string.
         * Availability or retirement state. Derived as archived when archived_at is set; otherwise
         * active or inactive. Value enum: "active", "inactive", "archived". status.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. When this price list or its prices
         * last changed, as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When this
         * price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Aggregate version, increased once for a request that changes the list
         * or its prices. No-op writes preserve it. version.anyOf[1] (Value): integer. Aggregate
         * version, increased once for a request that changes the list or its prices. No-op writes
         * preserve it. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. anyOf[1] (Value): string. When this price list was soft-deleted, as
             * an RFC3339 timestamp. Null when it has not been archived. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "archived_at"?: ((string) | (null));
            /**
             * When this price list was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. anyOf[1] (Value): string. Immutable currency of every price in this
             * list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
             * pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * anyOf[1] (Value): Array of string. Customer.segment labels assigned to this list.
             * Empty when no segments are assigned. maxItems: 20. uniqueItems: true. anyOf[1][]
             * (Value): string. anyOf[2] (Value): null.
             */
            "customer_segments"?: ((Array<string>) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Identifier of the merchant that owns this price list. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata stored on this price list. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Name used to identify this price list. anyOf[1] (Value): string. Name used to
             * identify this price list. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Number of variant prices in the list. anyOf[1] (Value): integer. Number of variant
             * prices in the list. Format: int64. minimum: 0. maximum: 10000. anyOf[2] (Value):
             * null.
             */
            "price_count"?: ((number) | (null));
            /**
             * Stable identifier of this price list. anyOf[1] (Value): string. Stable identifier of
             * this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "prl_01KEZF7C00EH39P59GN3XMGS2Q". anyOf[2] (Value): null.
             */
            "price_list_id"?: ((string) | (null));
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived". anyOf[1]
             * (Value): string. Availability or retirement state. Derived as archived when
             * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. anyOf[1]
             * (Value): string. When this price list or its prices last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. anyOf[1] (Value): integer. Aggregate version, increased
             * once for a request that changes the list or its prices. No-op writes preserve it.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "price_list.archived". */
    "event_type"?: "price_list.archived";
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
 * The `price_list.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PriceListArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.archived_at (Optional): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived.
     * previous_attributes.archived_at.anyOf[1] (Value): string. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.archived_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When this price
     * list was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value):
     * string. When this price list was created, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.currency (Optional): string or null. Immutable currency of every price
     * in this list. Currently USD. Uses ISO 4217 currency codes.
     * previous_attributes.currency.anyOf[1] (Value): string. Immutable currency of every price in
     * this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". previous_attributes.currency.anyOf[2] (Value): null.
     * previous_attributes.customer_segments (Optional): Array of string or null. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned.
     * previous_attributes.customer_segments.anyOf[1] (Value): Array of string. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned. maxItems: 20.
     * uniqueItems: true. previous_attributes.customer_segments.anyOf[1][] (Value): string.
     * previous_attributes.customer_segments.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this price list. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this price list.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Name used to identify this price list. previous_attributes.name.anyOf[1]
     * (Value): string. Name used to identify this price list. previous_attributes.name.anyOf[2]
     * (Value): null. previous_attributes.price_count (Optional): integer or null. Number of
     * variant prices in the list. previous_attributes.price_count.anyOf[1] (Value): integer.
     * Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000.
     * previous_attributes.price_count.anyOf[2] (Value): null. previous_attributes.price_list_id
     * (Optional): string or null. Stable identifier of this price list.
     * previous_attributes.price_list_id.anyOf[1] (Value): string. Stable identifier of this price
     * list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * previous_attributes.price_list_id.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Availability or retirement state. Derived as archived when
     * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Availability or retirement
     * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
     * enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When this price list or its
     * prices last changed, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. When this price list or its prices last changed, as an RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * previous_attributes.version.anyOf[1] (Value): integer. Aggregate version, increased once for
     * a request that changes the list or its prices. No-op writes preserve it. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. archived_at (Optional): string or null. When
         * this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been
         * archived. archived_at.anyOf[1] (Value): string. When this price list was soft-deleted,
         * as an RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". archived_at.anyOf[2] (Value): null. created_at (Optional):
         * string or null. When this price list was created, as an RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. When this price list was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. currency (Optional): string or null. Immutable currency of every price in
         * this list. Currently USD. Uses ISO 4217 currency codes. currency.anyOf[1] (Value):
         * string. Immutable currency of every price in this list. Currently USD. Uses ISO 4217
         * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * currency.anyOf[2] (Value): null. customer_segments (Optional): Array of string or null.
         * Customer.segment labels assigned to this list. Empty when no segments are assigned.
         * customer_segments.anyOf[1] (Value): Array of string. Customer.segment labels assigned to
         * this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments.anyOf[1][] (Value): string. customer_segments.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. `null` when unset. external_reference_id.anyOf[1]
         * (Value): string. Caller-owned identifier for this resource in an external system. `null`
         * when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns this price list. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this price
         * list. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * name (Optional): string or null. Name used to identify this price list. name.anyOf[1]
         * (Value): string. Name used to identify this price list. name.anyOf[2] (Value): null.
         * price_count (Optional): integer or null. Number of variant prices in the list.
         * price_count.anyOf[1] (Value): integer. Number of variant prices in the list. Format:
         * int64. minimum: 0. maximum: 10000. price_count.anyOf[2] (Value): null. price_list_id
         * (Optional): string or null. Stable identifier of this price list. price_list_id.anyOf[1]
         * (Value): string. Stable identifier of this price list. pattern:
         * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
         * price_list_id.anyOf[2] (Value): null. status (Optional): string or null. Availability or
         * retirement state. Derived as archived when archived_at is set; otherwise active or
         * inactive. Value enum: "active", "inactive", "archived". status.anyOf[1] (Value): string.
         * Availability or retirement state. Derived as archived when archived_at is set; otherwise
         * active or inactive. Value enum: "active", "inactive", "archived". status.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. When this price list or its prices
         * last changed, as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When this
         * price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Aggregate version, increased once for a request that changes the list
         * or its prices. No-op writes preserve it. version.anyOf[1] (Value): integer. Aggregate
         * version, increased once for a request that changes the list or its prices. No-op writes
         * preserve it. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. anyOf[1] (Value): string. When this price list was soft-deleted, as
             * an RFC3339 timestamp. Null when it has not been archived. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "archived_at"?: ((string) | (null));
            /**
             * When this price list was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. anyOf[1] (Value): string. Immutable currency of every price in this
             * list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
             * pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * anyOf[1] (Value): Array of string. Customer.segment labels assigned to this list.
             * Empty when no segments are assigned. maxItems: 20. uniqueItems: true. anyOf[1][]
             * (Value): string. anyOf[2] (Value): null.
             */
            "customer_segments"?: ((Array<string>) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Identifier of the merchant that owns this price list. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata stored on this price list. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Name used to identify this price list. anyOf[1] (Value): string. Name used to
             * identify this price list. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Number of variant prices in the list. anyOf[1] (Value): integer. Number of variant
             * prices in the list. Format: int64. minimum: 0. maximum: 10000. anyOf[2] (Value):
             * null.
             */
            "price_count"?: ((number) | (null));
            /**
             * Stable identifier of this price list. anyOf[1] (Value): string. Stable identifier of
             * this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "prl_01KEZF7C00EH39P59GN3XMGS2Q". anyOf[2] (Value): null.
             */
            "price_list_id"?: ((string) | (null));
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived". anyOf[1]
             * (Value): string. Availability or retirement state. Derived as archived when
             * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. anyOf[1]
             * (Value): string. When this price list or its prices last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. anyOf[1] (Value): integer. Aggregate version, increased
             * once for a request that changes the list or its prices. No-op writes preserve it.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "price_list.archived". */
    "event_type"?: "price_list.archived";
});
export type PriceListCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "price_list.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "price_list.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "price_list.created";
});
/**
 * The `price_list.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PriceListCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "price_list.created". */
    "event_type"?: "price_list.created";
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
 * The `price_list.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PriceListCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "price_list.created". */
    "event_type"?: "price_list.created";
});
/** A page of `PriceList` objects. */
export type PriceListListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PriceList}. A merchant-only set of variant prices for individual customers or customer
     * segments.
     */
    "data": Array<PriceList>;
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
/** One variant's base net unit price and quantity schedule within a price list. */
export type PriceListPrice = {
    /**
     * When this price was added, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Identifier of the price list that owns this price. Example:
     * "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id": string;
    /**
     * Stable identifier of this price within its list. pattern: ^prlp_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prlp_01KEZF7C007DQ721A29CDR73DN".
     */
    "price_list_price_id": string;
    /**
     * Identifier of the product that owns this variant. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * Up to 10 quantity breaks, ordered by increasing minimum_quantity and strictly decreasing
     * unit price. [] means the base price applies at every quantity. maxItems: 10. [] (Value):
     * {@link QuantityPriceBreak}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks": Array<QuantityPriceBreak>;
    /**
     * Positive base net unit price in the price list's currency, in the currency's smallest unit.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * When this price last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /**
     * Identifier of the priced product variant. Bundles and gift cards are not supported. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
    /**
     * Version of this variant price and its quantity schedule. No-op writes preserve it. Format:
     * uint64. minimum: 1.
     */
    "version": number;
};
/** Outcome for one requested variant price. */
export type PriceListPriceAddition = {
    /**
     * Whether the price was created, returned unchanged, or updated. Value enum: "created",
     * "existing", "updated".
     */
    "outcome": "created" | "existing" | "updated" | (string & {});
    /**
     * Price stored for this variant after the request. One variant's base net unit price and
     * quantity schedule within a price list.
     */
    "price_list_price": PriceListPrice;
};
/** A page of `PriceListPrice` objects. */
export type PriceListPriceListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * PriceListPrice}. One variant's base net unit price and quantity schedule within a price
     * list.
     */
    "data": Array<PriceListPrice>;
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
/** A variant price to add to a price list. */
export type PriceListPriceRequest = {
    /**
     * Complete quantity schedule, up to 10 breaks. Omit or send [] for no quantity breaks. Each
     * price must be lower than the preceding one. maxItems: 10. [] (Value): {@link
     * QuantityPriceBreak}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks"?: Array<QuantityPriceBreak>;
    /**
     * Positive base net unit price, in the price list's currency. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Product variant to price. Bundles and gift cards are refused. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/** A variant price to add to a price list. */
export type PriceListPriceRequestInput = {
    /**
     * Complete quantity schedule, up to 10 breaks. Omit or send [] for no quantity breaks. Each
     * price must be lower than the preceding one. maxItems: 10. [] (Value): {@link
     * QuantityPriceBreakRequestInput}. A net unit price that applies when one catalog line reaches
     * minimum_quantity.
     */
    "quantity_price_breaks"?: Array<QuantityPriceBreakRequestInput>;
    /**
     * Positive base net unit price, in the price list's currency. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
    /**
     * Product variant to price. Bundles and gift cards are refused. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/** A response containing `PriceListPrice` data. */
export type PriceListPriceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. One variant's base net
     * unit price and quantity schedule within a price list.
     */
    "data": PriceListPrice;
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
/** A response containing `PriceList` data. */
export type PriceListResourceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A merchant-only set of
     * variant prices for individual customers or customer segments.
     */
    "data": PriceList;
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
export type PriceListUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "archived_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "customer_segments"?: ((Array<string>) | (null));
            "external_reference_id"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "price_count"?: ((number) | (null));
            "price_list_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "price_list.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "archived_at": string | null;
            "created_at": string;
            "currency": string;
            "customer_segments": Array<string>;
            "external_reference_id": string | null;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "price_count": number;
            "price_list_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "archived_at"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "customer_segments"?: ((Array<string>) | (null));
            "external_reference_id"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "price_count"?: ((number) | (null));
            "price_list_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "price_list.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "price_list.updated";
});
/**
 * The `price_list.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PriceListUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.archived_at (Optional): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived.
     * previous_attributes.archived_at.anyOf[1] (Value): string. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.archived_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When this price
     * list was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value):
     * string. When this price list was created, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.currency (Optional): string or null. Immutable currency of every price
     * in this list. Currently USD. Uses ISO 4217 currency codes.
     * previous_attributes.currency.anyOf[1] (Value): string. Immutable currency of every price in
     * this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". previous_attributes.currency.anyOf[2] (Value): null.
     * previous_attributes.customer_segments (Optional): Array of string or null. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned.
     * previous_attributes.customer_segments.anyOf[1] (Value): Array of string. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned. maxItems: 20.
     * uniqueItems: true. previous_attributes.customer_segments.anyOf[1][] (Value): string.
     * previous_attributes.customer_segments.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this price list. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this price list.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Name used to identify this price list. previous_attributes.name.anyOf[1]
     * (Value): string. Name used to identify this price list. previous_attributes.name.anyOf[2]
     * (Value): null. previous_attributes.price_count (Optional): integer or null. Number of
     * variant prices in the list. previous_attributes.price_count.anyOf[1] (Value): integer.
     * Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000.
     * previous_attributes.price_count.anyOf[2] (Value): null. previous_attributes.price_list_id
     * (Optional): string or null. Stable identifier of this price list.
     * previous_attributes.price_list_id.anyOf[1] (Value): string. Stable identifier of this price
     * list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * previous_attributes.price_list_id.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Availability or retirement state. Derived as archived when
     * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Availability or retirement
     * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
     * enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When this price list or its
     * prices last changed, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. When this price list or its prices last changed, as an RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * previous_attributes.version.anyOf[1] (Value): integer. Aggregate version, increased once for
     * a request that changes the list or its prices. No-op writes preserve it. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. archived_at (Optional): string or null. When
         * this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been
         * archived. archived_at.anyOf[1] (Value): string. When this price list was soft-deleted,
         * as an RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". archived_at.anyOf[2] (Value): null. created_at (Optional):
         * string or null. When this price list was created, as an RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. When this price list was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. currency (Optional): string or null. Immutable currency of every price in
         * this list. Currently USD. Uses ISO 4217 currency codes. currency.anyOf[1] (Value):
         * string. Immutable currency of every price in this list. Currently USD. Uses ISO 4217
         * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * currency.anyOf[2] (Value): null. customer_segments (Optional): Array of string or null.
         * Customer.segment labels assigned to this list. Empty when no segments are assigned.
         * customer_segments.anyOf[1] (Value): Array of string. Customer.segment labels assigned to
         * this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments.anyOf[1][] (Value): string. customer_segments.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. `null` when unset. external_reference_id.anyOf[1]
         * (Value): string. Caller-owned identifier for this resource in an external system. `null`
         * when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns this price list. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this price
         * list. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * name (Optional): string or null. Name used to identify this price list. name.anyOf[1]
         * (Value): string. Name used to identify this price list. name.anyOf[2] (Value): null.
         * price_count (Optional): integer or null. Number of variant prices in the list.
         * price_count.anyOf[1] (Value): integer. Number of variant prices in the list. Format:
         * int64. minimum: 0. maximum: 10000. price_count.anyOf[2] (Value): null. price_list_id
         * (Optional): string or null. Stable identifier of this price list. price_list_id.anyOf[1]
         * (Value): string. Stable identifier of this price list. pattern:
         * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
         * price_list_id.anyOf[2] (Value): null. status (Optional): string or null. Availability or
         * retirement state. Derived as archived when archived_at is set; otherwise active or
         * inactive. Value enum: "active", "inactive", "archived". status.anyOf[1] (Value): string.
         * Availability or retirement state. Derived as archived when archived_at is set; otherwise
         * active or inactive. Value enum: "active", "inactive", "archived". status.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. When this price list or its prices
         * last changed, as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When this
         * price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Aggregate version, increased once for a request that changes the list
         * or its prices. No-op writes preserve it. version.anyOf[1] (Value): integer. Aggregate
         * version, increased once for a request that changes the list or its prices. No-op writes
         * preserve it. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. anyOf[1] (Value): string. When this price list was soft-deleted, as
             * an RFC3339 timestamp. Null when it has not been archived. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "archived_at"?: ((string) | (null));
            /**
             * When this price list was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. anyOf[1] (Value): string. Immutable currency of every price in this
             * list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
             * pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * anyOf[1] (Value): Array of string. Customer.segment labels assigned to this list.
             * Empty when no segments are assigned. maxItems: 20. uniqueItems: true. anyOf[1][]
             * (Value): string. anyOf[2] (Value): null.
             */
            "customer_segments"?: ((Array<string>) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Identifier of the merchant that owns this price list. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata stored on this price list. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Name used to identify this price list. anyOf[1] (Value): string. Name used to
             * identify this price list. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Number of variant prices in the list. anyOf[1] (Value): integer. Number of variant
             * prices in the list. Format: int64. minimum: 0. maximum: 10000. anyOf[2] (Value):
             * null.
             */
            "price_count"?: ((number) | (null));
            /**
             * Stable identifier of this price list. anyOf[1] (Value): string. Stable identifier of
             * this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "prl_01KEZF7C00EH39P59GN3XMGS2Q". anyOf[2] (Value): null.
             */
            "price_list_id"?: ((string) | (null));
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived". anyOf[1]
             * (Value): string. Availability or retirement state. Derived as archived when
             * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. anyOf[1]
             * (Value): string. When this price list or its prices last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. anyOf[1] (Value): integer. Aggregate version, increased
             * once for a request that changes the list or its prices. No-op writes preserve it.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "price_list.updated". */
    "event_type"?: "price_list.updated";
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
 * The `price_list.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PriceListUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.archived_at (Required): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. When this
     * price list was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.currency (Required): string. Immutable currency of every
     * price in this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD". object.customer_segments (Required): Array of string.
     * Customer.segment labels assigned to this list. Empty when no segments are assigned.
     * maxItems: 20. uniqueItems: true. object.customer_segments[] (Value): string.
     * object.external_reference_id (Required): string or null. Caller-owned identifier for this
     * resource in an external system. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842". object.merchant_id (Required): string. Identifier of the merchant that
     * owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Required):
     * {@link MetadataMap}. Caller-owned metadata stored on this price list. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.name (Required): string. Name used to
     * identify this price list. object.price_count (Required): integer. Number of variant prices
     * in the list. Format: int64. minimum: 0. maximum: 10000. object.price_list_id (Required):
     * string. Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q". object.status (Required): string. Availability or
     * retirement state. Derived as archived when archived_at is set; otherwise active or inactive.
     * Value enum: "active", "inactive", "archived". object.updated_at (Required): string. When
     * this price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.archived_at (Optional): string or null. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived.
     * previous_attributes.archived_at.anyOf[1] (Value): string. When this price list was
     * soft-deleted, as an RFC3339 timestamp. Null when it has not been archived. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.archived_at.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When this price
     * list was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value):
     * string. When this price list was created, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.currency (Optional): string or null. Immutable currency of every price
     * in this list. Currently USD. Uses ISO 4217 currency codes.
     * previous_attributes.currency.anyOf[1] (Value): string. Immutable currency of every price in
     * this list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". previous_attributes.currency.anyOf[2] (Value): null.
     * previous_attributes.customer_segments (Optional): Array of string or null. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned.
     * previous_attributes.customer_segments.anyOf[1] (Value): Array of string. Customer.segment
     * labels assigned to this list. Empty when no segments are assigned. maxItems: 20.
     * uniqueItems: true. previous_attributes.customer_segments.anyOf[1][] (Value): string.
     * previous_attributes.customer_segments.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this price list. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier
     * of the merchant that owns this price list. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this price list.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Name used to identify this price list. previous_attributes.name.anyOf[1]
     * (Value): string. Name used to identify this price list. previous_attributes.name.anyOf[2]
     * (Value): null. previous_attributes.price_count (Optional): integer or null. Number of
     * variant prices in the list. previous_attributes.price_count.anyOf[1] (Value): integer.
     * Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000.
     * previous_attributes.price_count.anyOf[2] (Value): null. previous_attributes.price_list_id
     * (Optional): string or null. Stable identifier of this price list.
     * previous_attributes.price_list_id.anyOf[1] (Value): string. Stable identifier of this price
     * list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * previous_attributes.price_list_id.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Availability or retirement state. Derived as archived when
     * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Availability or retirement
     * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
     * enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When this price list or its
     * prices last changed, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. When this price list or its prices last changed, as an RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Aggregate version,
     * increased once for a request that changes the list or its prices. No-op writes preserve it.
     * previous_attributes.version.anyOf[1] (Value): integer. Aggregate version, increased once for
     * a request that changes the list or its prices. No-op writes preserve it. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * archived_at (Required): string or null. When this price list was soft-deleted, as an
         * RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When this price list was created,
         * as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". currency
         * (Required): string. Immutable currency of every price in this list. Currently USD. Uses
         * ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
         * "USD". customer_segments (Required): Array of string. Customer.segment labels assigned
         * to this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments[] (Value): string. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. `null` when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". merchant_id (Required): string.
         * Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Caller-owned
         * metadata stored on this price list. Caller-owned key-value data stored on a resource.
         * Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. name (Required): string. Name used to identify this price list.
         * price_count (Required): integer. Number of variant prices in the list. Format: int64.
         * minimum: 0. maximum: 10000. price_list_id (Required): string. Stable identifier of this
         * price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "prl_01KEZF7C00EH39P59GN3XMGS2Q". status (Required): string. Availability or retirement
         * state. Derived as archived when archived_at is set; otherwise active or inactive. Value
         * enum: "active", "inactive", "archived". updated_at (Required): string. When this price
         * list or its prices last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Aggregate version, increased once
         * for a request that changes the list or its prices. No-op writes preserve it. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "archived_at": string | null;
            /**
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string;
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * maxItems: 20. uniqueItems: true. [] (Value): string.
             */
            "customer_segments": Array<string>;
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /**
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Caller-owned metadata stored on this price list. Caller-owned key-value data stored
             * on a resource. Keys starting with flint_ are reserved for Flint and are not
             * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata": MetadataMap;
            /** Name used to identify this price list. */
            "name": string;
            /** Number of variant prices in the list. Format: int64. minimum: 0. maximum: 10000. */
            "price_count": number;
            /**
             * Stable identifier of this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
             */
            "price_list_id": string;
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. archived_at (Optional): string or null. When
         * this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not been
         * archived. archived_at.anyOf[1] (Value): string. When this price list was soft-deleted,
         * as an RFC3339 timestamp. Null when it has not been archived. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". archived_at.anyOf[2] (Value): null. created_at (Optional):
         * string or null. When this price list was created, as an RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. When this price list was created, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2]
         * (Value): null. currency (Optional): string or null. Immutable currency of every price in
         * this list. Currently USD. Uses ISO 4217 currency codes. currency.anyOf[1] (Value):
         * string. Immutable currency of every price in this list. Currently USD. Uses ISO 4217
         * currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * currency.anyOf[2] (Value): null. customer_segments (Optional): Array of string or null.
         * Customer.segment labels assigned to this list. Empty when no segments are assigned.
         * customer_segments.anyOf[1] (Value): Array of string. Customer.segment labels assigned to
         * this list. Empty when no segments are assigned. maxItems: 20. uniqueItems: true.
         * customer_segments.anyOf[1][] (Value): string. customer_segments.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. `null` when unset. external_reference_id.anyOf[1]
         * (Value): string. Caller-owned identifier for this resource in an external system. `null`
         * when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns this price list. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns this price list. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this price
         * list. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * name (Optional): string or null. Name used to identify this price list. name.anyOf[1]
         * (Value): string. Name used to identify this price list. name.anyOf[2] (Value): null.
         * price_count (Optional): integer or null. Number of variant prices in the list.
         * price_count.anyOf[1] (Value): integer. Number of variant prices in the list. Format:
         * int64. minimum: 0. maximum: 10000. price_count.anyOf[2] (Value): null. price_list_id
         * (Optional): string or null. Stable identifier of this price list. price_list_id.anyOf[1]
         * (Value): string. Stable identifier of this price list. pattern:
         * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
         * price_list_id.anyOf[2] (Value): null. status (Optional): string or null. Availability or
         * retirement state. Derived as archived when archived_at is set; otherwise active or
         * inactive. Value enum: "active", "inactive", "archived". status.anyOf[1] (Value): string.
         * Availability or retirement state. Derived as archived when archived_at is set; otherwise
         * active or inactive. Value enum: "active", "inactive", "archived". status.anyOf[2]
         * (Value): null. updated_at (Optional): string or null. When this price list or its prices
         * last changed, as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When this
         * price list or its prices last changed, as an RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Aggregate version, increased once for a request that changes the list
         * or its prices. No-op writes preserve it. version.anyOf[1] (Value): integer. Aggregate
         * version, increased once for a request that changes the list or its prices. No-op writes
         * preserve it. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * When this price list was soft-deleted, as an RFC3339 timestamp. Null when it has not
             * been archived. anyOf[1] (Value): string. When this price list was soft-deleted, as
             * an RFC3339 timestamp. Null when it has not been archived. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "archived_at"?: ((string) | (null));
            /**
             * When this price list was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this price list was created, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Immutable currency of every price in this list. Currently USD. Uses ISO 4217
             * currency codes. anyOf[1] (Value): string. Immutable currency of every price in this
             * list. Currently USD. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3.
             * pattern: ^[A-Z]{3}$. Example: "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Customer.segment labels assigned to this list. Empty when no segments are assigned.
             * anyOf[1] (Value): Array of string. Customer.segment labels assigned to this list.
             * Empty when no segments are assigned. maxItems: 20. uniqueItems: true. anyOf[1][]
             * (Value): string. anyOf[2] (Value): null.
             */
            "customer_segments"?: ((Array<string>) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. `null` when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Identifier of the merchant that owns this price list. anyOf[1] (Value): string.
             * Identifier of the merchant that owns this price list. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata stored on this price list. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Name used to identify this price list. anyOf[1] (Value): string. Name used to
             * identify this price list. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Number of variant prices in the list. anyOf[1] (Value): integer. Number of variant
             * prices in the list. Format: int64. minimum: 0. maximum: 10000. anyOf[2] (Value):
             * null.
             */
            "price_count"?: ((number) | (null));
            /**
             * Stable identifier of this price list. anyOf[1] (Value): string. Stable identifier of
             * this price list. pattern: ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "prl_01KEZF7C00EH39P59GN3XMGS2Q". anyOf[2] (Value): null.
             */
            "price_list_id"?: ((string) | (null));
            /**
             * Availability or retirement state. Derived as archived when archived_at is set;
             * otherwise active or inactive. Value enum: "active", "inactive", "archived". anyOf[1]
             * (Value): string. Availability or retirement state. Derived as archived when
             * archived_at is set; otherwise active or inactive. Value enum: "active", "inactive",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When this price list or its prices last changed, as an RFC3339 timestamp. anyOf[1]
             * (Value): string. When this price list or its prices last changed, as an RFC3339
             * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Aggregate version, increased once for a request that changes the list or its prices.
             * No-op writes preserve it. anyOf[1] (Value): integer. Aggregate version, increased
             * once for a request that changes the list or its prices. No-op writes preserve it.
             * Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "price_list.updated". */
    "event_type"?: "price_list.updated";
});
export type PriceListsCreateParams = (InputValue<CreatePriceListRequestInput>)
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
export type PriceListsCreatePricesParams = (InputValue<CreatePriceListPricesRequestInput>)
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
export type PriceListsDeleteParams = {
    /** Version last read by the caller. Format: uint64. minimum: 1. maximum: 9007199254740991. */
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
export type PriceListsDeletePriceParams = PriceListsDeleteParams;
export type PriceListsGetParams = DisputesAcceptParams;
export type PriceListsGetPriceParams = DisputesAcceptParams;
export type PriceListsListParams = {
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
    /** Exact match on a Customer.segment label assigned to this price list. */
    "customer_segment"?: InputValue<string>;
    /**
     * Exact match on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across price list ID, name, and external reference ID. Text fields match any part of
     * the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start
     * and need the type prefix, such as prl_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by price_list_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "name".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
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
export type PriceListsListPricesParams = {
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
     * Exact match on the priced variant ID. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: InputValue<string>;
    /**
     * Exact match on the product owning the priced variant. pattern:
     * ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by price_list_price_id. Default:
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
export type PriceListsUpdateParams = (InputValue<UpdatePriceListRequestInput>)
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
export type PriceListsUpdatePriceParams = (InputValue<UpdatePriceListPriceRequestInput>)
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
 * The money totals for an order or invoice: subtotal, discounts, charges, tax, requested tip, and
 * total.
 */
export type PricingAmounts = {
    /**
     * Tax added on top of prices, included in total_money. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "additive_tax_money": MoneyValue;
    /**
     * Total of the order's service charges after service-charge discounts. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "charge_money": MoneyValue;
    /**
     * Total of order and line-item discounts. Service-charge discounts, such as free shipping, are
     * not included; they reduce charge_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Tax already included in subtotal_money and charge_money. Informational; it is not added
     * again to total_money. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "inclusive_tax_money": MoneyValue;
    /**
     * Tip money in the total: the requested tip before payment, and settled tips net of refunds
     * after. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "requested_tip_money": MoneyValue;
    /**
     * Sum of the line items' subtotal_money: prices with modifiers, before discounts. Lines with
     * tax-inclusive prices include their tax here. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Total tax, equal to additive_tax_money + inclusive_tax_money. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * subtotal_money - discount_money + charge_money + additive_tax_money + requested_tip_money,
     * never below zero. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "total_money": MoneyValue;
};
export type PricingAmountsPreviousAttributes = {
    /**
     * Tax added on top of prices, included in total_money. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "additive_tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Total of the order's service charges after service-charge discounts. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "charge_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Total of order and line-item discounts. Service-charge discounts, such as free shipping, are
     * not included; they reduce charge_money. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Tax already included in subtotal_money and charge_money. Informational; it is not added
     * again to total_money. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "inclusive_tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Tip money in the total: the requested tip before payment, and settled tips net of refunds
     * after. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "requested_tip_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Sum of the line items' subtotal_money: prices with modifiers, before discounts. Lines with
     * tax-inclusive prices include their tax here. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Total tax, equal to additive_tax_money + inclusive_tax_money. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * subtotal_money - discount_money + charge_money + additive_tax_money + requested_tip_money,
     * never below zero. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/**
 * How to process one line of an existing return: the received quantity, inspection, decision,
 * disposition, and resolution.
 */
export type ProcessExistingReturnLineItemRequest = {
    /**
     * The decision for this line, as an assertion about the committed terms. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}. Start from
     * the pinned policy proposal recomputed for approved_quantity when the line has a policy
     * evaluation and the proposal can be built. Otherwise start with return_required_quantity
     * equal to approved_quantity, allowed_resolution_types containing refund, exchange,
     * replacement, no_monetary_action, and store_credit in that order regardless of whether the
     * original payment is refundable, no automatic_resolution_type, is_inspection_required false,
     * and no receiving_location_id. Each supplied field replaces its starting value;
     * allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its
     * starting value, or send null to resolve manually. Then fill an omitted release_timing with
     * after_inspection when merchandise is required and inspection is required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required. Validate the merged decision for quantity bounds, allowed resolution types, and
     * reachable timing and inspection requirements. A pinned policy always requires
     * override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no
     * proposal can be built. With a pinned policy but no proposal, other decision fields use these
     * defaults and override_reason is otherwise optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     */
    "decision"?: ReturnProcessDecision;
    /**
     * A disposition to record for this line's units. What was done with a returned item, such as
     * restocked as sellable or sent for repair, supplied when processing an existing return.
     */
    "disposition"?: ReturnProcessDispositionRequest;
    /**
     * An inspection to record for this line's units. An inspection result for a returned item,
     * supplied when processing an existing return.
     */
    "inspection"?: ReturnProcessInspectionRequest;
    /**
     * Whole number of units received. It must equal the line's committed return_required_quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "received_quantity"?: number;
    /**
     * A resolution to create and confirm for this line. The resolution to apply to a returned
     * item, such as refund or exchange, with the quantity and any replacement items.
     */
    "resolution"?: ReturnProcessResolutionRequest;
    /**
     * ID of the Return line to act on. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
};
/**
 * How to process one line of an existing return: the received quantity, inspection, decision,
 * disposition, and resolution.
 */
export type ProcessExistingReturnLineItemRequestInput = {
    /**
     * The decision for this line, as an assertion about the committed terms. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}. Start from
     * the pinned policy proposal recomputed for approved_quantity when the line has a policy
     * evaluation and the proposal can be built. Otherwise start with return_required_quantity
     * equal to approved_quantity, allowed_resolution_types containing refund, exchange,
     * replacement, no_monetary_action, and store_credit in that order regardless of whether the
     * original payment is refundable, no automatic_resolution_type, is_inspection_required false,
     * and no receiving_location_id. Each supplied field replaces its starting value;
     * allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its
     * starting value, or send null to resolve manually. Then fill an omitted release_timing with
     * after_inspection when merchandise is required and inspection is required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required. Validate the merged decision for quantity bounds, allowed resolution types, and
     * reachable timing and inspection requirements. A pinned policy always requires
     * override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no
     * proposal can be built. With a pinned policy but no proposal, other decision fields use these
     * defaults and override_reason is otherwise optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
     */
    "decision"?: ReturnProcessDecisionInput;
    /**
     * A disposition to record for this line's units. What was done with a returned item, such as
     * restocked as sellable or sent for repair, supplied when processing an existing return.
     */
    "disposition"?: ReturnProcessDispositionRequestInput;
    /**
     * An inspection to record for this line's units. An inspection result for a returned item,
     * supplied when processing an existing return.
     */
    "inspection"?: ReturnProcessInspectionRequestInput;
    /**
     * Whole number of units received. It must equal the line's committed return_required_quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "received_quantity"?: number;
    /**
     * A resolution to create and confirm for this line. The resolution to apply to a returned
     * item, such as refund or exchange, with the quantity and any replacement items.
     */
    "resolution"?: ReturnProcessResolutionRequestInput;
    /**
     * ID of the Return line to act on. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
};
/** The request body for: Process existing return. */
export type ProcessExistingReturnRequest = {
    /**
     * Omit to use the mode shared by all pinned policies that set completion_mode, or automatic
     * when no pinned policy sets one. Conflicting pinned policy modes return 400 naming
     * completion_mode only when completion_mode is omitted. An explicit manual or automatic value
     * is used as sent. On an open Return, omit to keep its committed mode. Sending that mode is
     * accepted; a different mode returns 409 ACTION_NOT_ALLOWED with reason field_locked and param
     * completion_mode. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * One decision for each line. minItems: 1. [] (Value): {@link
     * ProcessExistingReturnLineItemRequest}. How to process one line of an existing return: the
     * received quantity, inspection, decision, disposition, and resolution.
     */
    "line_items": Array<ProcessExistingReturnLineItemRequest>;
    /**
     * A receipt to record for the Return. The receipt of returned merchandise, with when and where
     * it was received, supplied when processing an existing return.
     */
    "receipt"?: ReturnProcessReceiptRequest;
};
/** The request body for: Process existing return. */
export type ProcessExistingReturnRequestInput = {
    /**
     * Omit to use the mode shared by all pinned policies that set completion_mode, or automatic
     * when no pinned policy sets one. Conflicting pinned policy modes return 400 naming
     * completion_mode only when completion_mode is omitted. An explicit manual or automatic value
     * is used as sent. On an open Return, omit to keep its committed mode. Sending that mode is
     * accepted; a different mode returns 409 ACTION_NOT_ALLOWED with reason field_locked and param
     * completion_mode. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic";
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * One decision for each line. minItems: 1. [] (Value): {@link
     * ProcessExistingReturnLineItemRequestInput}. How to process one line of an existing return:
     * the received quantity, inspection, decision, disposition, and resolution.
     */
    "line_items": Array<ProcessExistingReturnLineItemRequestInput>;
    /**
     * A receipt to record for the Return. The receipt of returned merchandise, with when and where
     * it was received, supplied when processing an existing return.
     */
    "receipt"?: ReturnProcessReceiptRequestInput;
};
/** A response containing `ReturnProcessResult` data. */
export type ProcessExistingReturnResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The return is the
     * primary resource and expected_version target; the other resources report the processing
     * effects.
     */
    "data": ReturnProcessResult;
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
/** An item offered in the merchant's catalog. */
export type Product = {
    /** Number of active variants belonging to the product. Format: int32. */
    "active_variant_count"?: number;
    /**
     * Always present. Empty collections are returned as []. [] (Value): {@link CategoryReference}.
     * A reference to a product category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * The product's default variant, when one is set. A specific purchasable version of a product.
     */
    "default_variant"?: ProductVariant;
    /**
     * Identifier of the variant chosen as this product's default, when one is set. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "default_variant_id"?: string;
    /**
     * Delivery readiness aggregated across the product's non-archived variants. Value enum:
     * "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Description of the product shown to buyers. */
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
    /** Whether the product is active and has at least one active variant. */
    "is_available_for_sale"?: boolean;
    /**
     * On product list rows, the first non-archived variant by position, then variant_id, that
     * matches all exact variant filters. Without exact variant filters, identifies the first
     * variant whose SKU or barcode matches query. Omitted when no variant matches; a product name
     * or description match alone does not set it. Page the product's variants to find all matches.
     * A single variant witness on product list rows only. With exact variant filters, the first
     * variant by position, then variant_id, satisfying every exact predicate. Otherwise, the first
     * variant in that order whose SKU matches query. Use the paginated nested variant list to
     * enumerate every match.
     */
    "matched_variant"?: ProductVariantMatch;
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
     * ID of the modifier set attached to the product. `null` when no modifier set is attached.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
     */
    "modifier_set_id": string | null;
    /** Product name shown to buyers. */
    "name": string;
    /** Number of active options belonging to the product. Format: int32. */
    "option_count"?: number;
    /**
     * Product options and their non-archived values. Empty when the product has no options. []
     * (Value): {@link ProductOption}. A choice that defines a product's variants.
     */
    "options": Array<ProductOption>;
    /**
     * Lowest and highest base unit prices among active variants, before any quantity price breaks.
     * Omitted when there are no active variants or their currencies differ. The lowest and highest
     * unit prices across a product's variants.
     */
    "price_range"?: ProductPriceRange;
    /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id": string;
    /**
     * Kind of goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
    /**
     * Product lifecycle status. Archived products remain readable and cannot be edited. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Number of non-archived variants belonging to the product. Format: int32. */
    "variant_count"?: number;
    /**
     * The product's complete non-archived variants, ordered by `position` and then `variant_id`.
     * Present when `expand=variants` is requested, and on the `POST /v1/products` response. An
     * archived product returns an empty array. [] (Value): {@link ProductVariant}. A specific
     * purchasable version of a product.
     */
    "variants"?: Array<ProductVariant>;
    /**
     * Current resource version. Send it as expected_version to reject a write if the resource has
     * changed. Format: uint64. minimum: 0.
     */
    "version": number;
};
export type ProductArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookProduct;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_variant_count"?: ((number) | (null));
            "categories"?: ((Array<CategoryReferencePreviousAttributes>) | (null));
            "created_at"?: ((string) | (null));
            "default_variant"?: ((ProductVariantPreviousAttributes) | (null));
            "default_variant_id"?: ((string) | (null));
            "delivery_configuration_status"?: (("configured" | "action_required" | "not_applicable" | (string & {})) | (null));
            "description"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "images"?: ((Array<ImageAttachmentPreviousAttributes>) | (null));
            "is_available_for_sale"?: ((boolean) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "modifier_set_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "option_count"?: ((number) | (null));
            "options"?: ((Array<ProductOptionPreviousAttributes>) | (null));
            "price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
            "product_id"?: ((string) | (null));
            "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | (string & {})) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "variant_count"?: ((number) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "product.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookProduct;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "active_variant_count"?: ((number) | (null));
            "categories"?: ((Array<CategoryReferencePreviousAttributes>) | (null));
            "created_at"?: ((string) | (null));
            "default_variant"?: ((ProductVariantPreviousAttributes) | (null));
            "default_variant_id"?: ((string) | (null));
            "delivery_configuration_status"?: (("configured" | "action_required" | "not_applicable" | (string & {})) | (null));
            "description"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "images"?: ((Array<ImageAttachmentPreviousAttributes>) | (null));
            "is_available_for_sale"?: ((boolean) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "modifier_set_id"?: ((string) | (null));
            "name"?: ((string) | (null));
            "option_count"?: ((number) | (null));
            "options"?: ((Array<ProductOptionPreviousAttributes>) | (null));
            "price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
            "product_id"?: ((string) | (null));
            "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | (string & {})) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "variant_count"?: ((number) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "product.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "product.archived";
});
/**
 * The `product.archived` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ProductArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookProduct}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.active_variant_count (Optional): integer or null. Number of active
     * variants belonging to the product. previous_attributes.active_variant_count.anyOf[1]
     * (Value): integer. Number of active variants belonging to the product. Format: int32.
     * previous_attributes.active_variant_count.anyOf[2] (Value): null.
     * previous_attributes.categories (Optional): Array of {@link
     * CategoryReferencePreviousAttributes} or null. Always present. Empty collections are returned
     * as []. previous_attributes.categories.anyOf[1] (Value): Array of {@link
     * CategoryReferencePreviousAttributes}. Always present. Empty collections are returned as [].
     * previous_attributes.categories.anyOf[1][] (Value): {@link
     * CategoryReferencePreviousAttributes}. previous_attributes.categories.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When this resource was created,
     * as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value): string. When this
     * resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.default_variant (Optional): {@link ProductVariantPreviousAttributes} or
     * null. The product's default variant, when one is set.
     * previous_attributes.default_variant.anyOf[1] (Value): {@link
     * ProductVariantPreviousAttributes}. previous_attributes.default_variant.anyOf[2] (Value):
     * null. previous_attributes.default_variant_id (Optional): string or null. Identifier of the
     * variant chosen as this product's default, when one is set.
     * previous_attributes.default_variant_id.anyOf[1] (Value): string. Identifier of the variant
     * chosen as this product's default, when one is set. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX". previous_attributes.default_variant_id.anyOf[2] (Value):
     * null. previous_attributes.delivery_configuration_status (Optional): string or null. Delivery
     * readiness aggregated across the product's non-archived variants. Value enum: "configured",
     * "action_required", "not_applicable".
     * previous_attributes.delivery_configuration_status.anyOf[1] (Value): string. Delivery
     * readiness aggregated across the product's non-archived variants. Value enum: "configured",
     * "action_required", "not_applicable".
     * previous_attributes.delivery_configuration_status.anyOf[2] (Value): null.
     * previous_attributes.description (Optional): string or null. Description of the product shown
     * to buyers. previous_attributes.description.anyOf[1] (Value): string. Description of the
     * product shown to buyers. previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.images
     * (Optional): Array of {@link ImageAttachmentPreviousAttributes} or null. Images attached to
     * this resource, in display order. The first image is primary.
     * previous_attributes.images.anyOf[1] (Value): Array of {@link
     * ImageAttachmentPreviousAttributes}. Images attached to this resource, in display order. The
     * first image is primary. previous_attributes.images.anyOf[1][] (Value): {@link
     * ImageAttachmentPreviousAttributes}. previous_attributes.images.anyOf[2] (Value): null.
     * previous_attributes.is_available_for_sale (Optional): boolean or null. Whether the product
     * is active and has at least one active variant.
     * previous_attributes.is_available_for_sale.anyOf[1] (Value): boolean. Whether the product is
     * active and has at least one active variant.
     * previous_attributes.is_available_for_sale.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this resource. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier of
     * the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this resource.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.modifier_set_id
     * (Optional): string or null. ID of the modifier set attached to the product. `null` when no
     * modifier set is attached. previous_attributes.modifier_set_id.anyOf[1] (Value): string. ID
     * of the modifier set attached to the product. `null` when no modifier set is attached.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". previous_attributes.modifier_set_id.anyOf[2]
     * (Value): null. previous_attributes.name (Optional): string or null. Product name shown to
     * buyers. previous_attributes.name.anyOf[1] (Value): string. Product name shown to buyers.
     * previous_attributes.name.anyOf[2] (Value): null. previous_attributes.option_count
     * (Optional): integer or null. Number of active options belonging to the product.
     * previous_attributes.option_count.anyOf[1] (Value): integer. Number of active options
     * belonging to the product. Format: int32. previous_attributes.option_count.anyOf[2] (Value):
     * null. previous_attributes.options (Optional): Array of {@link
     * ProductOptionPreviousAttributes} or null. Product options and their non-archived values.
     * Empty when the product has no options. previous_attributes.options.anyOf[1] (Value): Array
     * of {@link ProductOptionPreviousAttributes}. Product options and their non-archived values.
     * Empty when the product has no options. previous_attributes.options.anyOf[1][] (Value):
     * {@link ProductOptionPreviousAttributes}. previous_attributes.options.anyOf[2] (Value): null.
     * previous_attributes.price_range (Optional): {@link ProductPriceRangePreviousAttributes} or
     * null. Lowest and highest base unit prices among active variants, before any quantity price
     * breaks. Omitted when there are no active variants or their currencies differ.
     * previous_attributes.price_range.anyOf[1] (Value): {@link
     * ProductPriceRangePreviousAttributes}. previous_attributes.price_range.anyOf[2] (Value):
     * null. previous_attributes.product_id (Optional): string or null. Stable identifier of the
     * product. previous_attributes.product_id.anyOf[1] (Value): string. Stable identifier of the
     * product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". previous_attributes.product_id.anyOf[2]
     * (Value): null. previous_attributes.product_type (Optional): string or null. Kind of goods or
     * service this product represents. New variants of digital products store digital_goods when
     * line_item_tax_category is omitted; explicit categories are preserved. Value enum:
     * "physical", "service", "fee", "digital", "gift_card".
     * previous_attributes.product_type.anyOf[1] (Value): string. Kind of goods or service this
     * product represents. New variants of digital products store digital_goods when
     * line_item_tax_category is omitted; explicit categories are preserved. Value enum:
     * "physical", "service", "fee", "digital", "gift_card".
     * previous_attributes.product_type.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Product lifecycle status. Archived products remain readable and
     * cannot be edited. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[1] (Value): string. Product lifecycle status. Archived
     * products remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When this resource last changed, as an RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When this resource last changed, as
     * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.variant_count
     * (Optional): integer or null. Number of non-archived variants belonging to the product.
     * previous_attributes.variant_count.anyOf[1] (Value): integer. Number of non-archived variants
     * belonging to the product. Format: int32. previous_attributes.variant_count.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Current resource version.
     * Send it as expected_version to reject a write if the resource has changed.
     * previous_attributes.version.anyOf[1] (Value): integer. Current resource version. Send it as
     * expected_version to reject a write if the resource has changed. Format: uint64. minimum: 0.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`.
         */
        "object": WebhookProduct;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_variant_count (Optional): integer or
         * null. Number of active variants belonging to the product. active_variant_count.anyOf[1]
         * (Value): integer. Number of active variants belonging to the product. Format: int32.
         * active_variant_count.anyOf[2] (Value): null. categories (Optional): Array of {@link
         * CategoryReferencePreviousAttributes} or null. Always present. Empty collections are
         * returned as []. categories.anyOf[1] (Value): Array of {@link
         * CategoryReferencePreviousAttributes}. Always present. Empty collections are returned as
         * []. categories.anyOf[1][] (Value): {@link CategoryReferencePreviousAttributes}.
         * categories.anyOf[2] (Value): null. created_at (Optional): string or null. When this
         * resource was created, as an RFC3339 timestamp. created_at.anyOf[1] (Value): string. When
         * this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. default_variant (Optional):
         * {@link ProductVariantPreviousAttributes} or null. The product's default variant, when
         * one is set. default_variant.anyOf[1] (Value): {@link ProductVariantPreviousAttributes}.
         * default_variant.anyOf[2] (Value): null. default_variant_id (Optional): string or null.
         * Identifier of the variant chosen as this product's default, when one is set.
         * default_variant_id.anyOf[1] (Value): string. Identifier of the variant chosen as this
         * product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
         * default_variant_id.anyOf[2] (Value): null. delivery_configuration_status (Optional):
         * string or null. Delivery readiness aggregated across the product's non-archived
         * variants. Value enum: "configured", "action_required", "not_applicable".
         * delivery_configuration_status.anyOf[1] (Value): string. Delivery readiness aggregated
         * across the product's non-archived variants. Value enum: "configured", "action_required",
         * "not_applicable". delivery_configuration_status.anyOf[2] (Value): null. description
         * (Optional): string or null. Description of the product shown to buyers.
         * description.anyOf[1] (Value): string. Description of the product shown to buyers.
         * description.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. images (Optional): Array of {@link
         * ImageAttachmentPreviousAttributes} or null. Images attached to this resource, in display
         * order. The first image is primary. images.anyOf[1] (Value): Array of {@link
         * ImageAttachmentPreviousAttributes}. Images attached to this resource, in display order.
         * The first image is primary. images.anyOf[1][] (Value): {@link
         * ImageAttachmentPreviousAttributes}. images.anyOf[2] (Value): null. is_available_for_sale
         * (Optional): boolean or null. Whether the product is active and has at least one active
         * variant. is_available_for_sale.anyOf[1] (Value): boolean. Whether the product is active
         * and has at least one active variant. is_available_for_sale.anyOf[2] (Value): null.
         * merchant_id (Optional): string or null. Identifier of the merchant that owns this
         * resource. merchant_id.anyOf[1] (Value): string. Identifier of the merchant that owns
         * this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on
         * this resource. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2]
         * (Value): null. modifier_set_id (Optional): string or null. ID of the modifier set
         * attached to the product. `null` when no modifier set is attached.
         * modifier_set_id.anyOf[1] (Value): string. ID of the modifier set attached to the
         * product. `null` when no modifier set is attached. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". modifier_set_id.anyOf[2] (Value): null. name
         * (Optional): string or null. Product name shown to buyers. name.anyOf[1] (Value): string.
         * Product name shown to buyers. name.anyOf[2] (Value): null. option_count (Optional):
         * integer or null. Number of active options belonging to the product.
         * option_count.anyOf[1] (Value): integer. Number of active options belonging to the
         * product. Format: int32. option_count.anyOf[2] (Value): null. options (Optional): Array
         * of {@link ProductOptionPreviousAttributes} or null. Product options and their
         * non-archived values. Empty when the product has no options. options.anyOf[1] (Value):
         * Array of {@link ProductOptionPreviousAttributes}. Product options and their non-archived
         * values. Empty when the product has no options. options.anyOf[1][] (Value): {@link
         * ProductOptionPreviousAttributes}. options.anyOf[2] (Value): null. price_range
         * (Optional): {@link ProductPriceRangePreviousAttributes} or null. Lowest and highest base
         * unit prices among active variants, before any quantity price breaks. Omitted when there
         * are no active variants or their currencies differ. price_range.anyOf[1] (Value): {@link
         * ProductPriceRangePreviousAttributes}. price_range.anyOf[2] (Value): null. product_id
         * (Optional): string or null. Stable identifier of the product. product_id.anyOf[1]
         * (Value): string. Stable identifier of the product. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_id.anyOf[2] (Value): null. product_type
         * (Optional): string or null. Kind of goods or service this product represents. New
         * variants of digital products store digital_goods when line_item_tax_category is omitted;
         * explicit categories are preserved. Value enum: "physical", "service", "fee", "digital",
         * "gift_card". product_type.anyOf[1] (Value): string. Kind of goods or service this
         * product represents. New variants of digital products store digital_goods when
         * line_item_tax_category is omitted; explicit categories are preserved. Value enum:
         * "physical", "service", "fee", "digital", "gift_card". product_type.anyOf[2] (Value):
         * null. status (Optional): string or null. Product lifecycle status. Archived products
         * remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
         * status.anyOf[1] (Value): string. Product lifecycle status. Archived products remain
         * readable and cannot be edited. Value enum: "active", "inactive", "archived".
         * status.anyOf[2] (Value): null. updated_at (Optional): string or null. When this resource
         * last changed, as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When this
         * resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. variant_count (Optional):
         * integer or null. Number of non-archived variants belonging to the product.
         * variant_count.anyOf[1] (Value): integer. Number of non-archived variants belonging to
         * the product. Format: int32. variant_count.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current resource version. Send it as expected_version to reject a write
         * if the resource has changed. version.anyOf[1] (Value): integer. Current resource
         * version. Send it as expected_version to reject a write if the resource has changed.
         * Format: uint64. minimum: 0. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Number of active variants belonging to the product. anyOf[1] (Value): integer.
             * Number of active variants belonging to the product. Format: int32. anyOf[2] (Value):
             * null.
             */
            "active_variant_count"?: ((number) | (null));
            /**
             * Always present. Empty collections are returned as []. anyOf[1] (Value): Array of
             * {@link CategoryReferencePreviousAttributes}. Always present. Empty collections are
             * returned as []. anyOf[1][] (Value): {@link CategoryReferencePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "categories"?: ((Array<CategoryReferencePreviousAttributes>) | (null));
            /**
             * When this resource was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The product's default variant, when one is set. anyOf[1] (Value): {@link
             * ProductVariantPreviousAttributes}. anyOf[2] (Value): null.
             */
            "default_variant"?: ((ProductVariantPreviousAttributes) | (null));
            /**
             * Identifier of the variant chosen as this product's default, when one is set.
             * anyOf[1] (Value): string. Identifier of the variant chosen as this product's
             * default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
             * (Value): null.
             */
            "default_variant_id"?: ((string) | (null));
            /**
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable". anyOf[1] (Value): string.
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): null.
             */
            "delivery_configuration_status"?: (("configured" | "action_required" | "not_applicable" | (string & {})) | (null));
            /**
             * Description of the product shown to buyers. anyOf[1] (Value): string. Description of
             * the product shown to buyers. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Images attached to this resource, in display order. The first image is primary.
             * anyOf[1] (Value): Array of {@link ImageAttachmentPreviousAttributes}. Images
             * attached to this resource, in display order. The first image is primary. anyOf[1][]
             * (Value): {@link ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "images"?: ((Array<ImageAttachmentPreviousAttributes>) | (null));
            /**
             * Whether the product is active and has at least one active variant. anyOf[1] (Value):
             * boolean. Whether the product is active and has at least one active variant. anyOf[2]
             * (Value): null.
             */
            "is_available_for_sale"?: ((boolean) | (null));
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
             * ID of the modifier set attached to the product. `null` when no modifier set is
             * attached. anyOf[1] (Value): string. ID of the modifier set attached to the product.
             * `null` when no modifier set is attached. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             * anyOf[2] (Value): null.
             */
            "modifier_set_id"?: ((string) | (null));
            /**
             * Product name shown to buyers. anyOf[1] (Value): string. Product name shown to
             * buyers. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Number of active options belonging to the product. anyOf[1] (Value): integer. Number
             * of active options belonging to the product. Format: int32. anyOf[2] (Value): null.
             */
            "option_count"?: ((number) | (null));
            /**
             * Product options and their non-archived values. Empty when the product has no
             * options. anyOf[1] (Value): Array of {@link ProductOptionPreviousAttributes}. Product
             * options and their non-archived values. Empty when the product has no options.
             * anyOf[1][] (Value): {@link ProductOptionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "options"?: ((Array<ProductOptionPreviousAttributes>) | (null));
            /**
             * Lowest and highest base unit prices among active variants, before any quantity price
             * breaks. Omitted when there are no active variants or their currencies differ.
             * anyOf[1] (Value): {@link ProductPriceRangePreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
            /**
             * Stable identifier of the product. anyOf[1] (Value): string. Stable identifier of the
             * product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
             */
            "product_id"?: ((string) | (null));
            /**
             * Kind of goods or service this product represents. New variants of digital products
             * store digital_goods when line_item_tax_category is omitted; explicit categories are
             * preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
             * anyOf[1] (Value): string. Kind of goods or service this product represents. New
             * variants of digital products store digital_goods when line_item_tax_category is
             * omitted; explicit categories are preserved. Value enum: "physical", "service",
             * "fee", "digital", "gift_card". anyOf[2] (Value): null.
             */
            "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | (string & {})) | (null));
            /**
             * Product lifecycle status. Archived products remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Product
             * lifecycle status. Archived products remain readable and cannot be edited. Value
             * enum: "active", "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When this resource last changed, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Number of non-archived variants belonging to the product. anyOf[1] (Value): integer.
             * Number of non-archived variants belonging to the product. Format: int32. anyOf[2]
             * (Value): null.
             */
            "variant_count"?: ((number) | (null));
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. anyOf[1] (Value): integer. Current resource version. Send it
             * as expected_version to reject a write if the resource has changed. Format: uint64.
             * minimum: 0. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "product.archived". */
    "event_type"?: "product.archived";
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
 * The `product.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookProduct}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.active_variant_count (Optional): integer or null. Number of active
     * variants belonging to the product. previous_attributes.active_variant_count.anyOf[1]
     * (Value): integer. Number of active variants belonging to the product. Format: int32.
     * previous_attributes.active_variant_count.anyOf[2] (Value): null.
     * previous_attributes.categories (Optional): Array of {@link
     * CategoryReferencePreviousAttributes} or null. Always present. Empty collections are returned
     * as []. previous_attributes.categories.anyOf[1] (Value): Array of {@link
     * CategoryReferencePreviousAttributes}. Always present. Empty collections are returned as [].
     * previous_attributes.categories.anyOf[1][] (Value): {@link
     * CategoryReferencePreviousAttributes}. previous_attributes.categories.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When this resource was created,
     * as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value): string. When this
     * resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.default_variant (Optional): {@link ProductVariantPreviousAttributes} or
     * null. The product's default variant, when one is set.
     * previous_attributes.default_variant.anyOf[1] (Value): {@link
     * ProductVariantPreviousAttributes}. previous_attributes.default_variant.anyOf[2] (Value):
     * null. previous_attributes.default_variant_id (Optional): string or null. Identifier of the
     * variant chosen as this product's default, when one is set.
     * previous_attributes.default_variant_id.anyOf[1] (Value): string. Identifier of the variant
     * chosen as this product's default, when one is set. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX". previous_attributes.default_variant_id.anyOf[2] (Value):
     * null. previous_attributes.delivery_configuration_status (Optional): string or null. Delivery
     * readiness aggregated across the product's non-archived variants. Value enum: "configured",
     * "action_required", "not_applicable".
     * previous_attributes.delivery_configuration_status.anyOf[1] (Value): string. Delivery
     * readiness aggregated across the product's non-archived variants. Value enum: "configured",
     * "action_required", "not_applicable".
     * previous_attributes.delivery_configuration_status.anyOf[2] (Value): null.
     * previous_attributes.description (Optional): string or null. Description of the product shown
     * to buyers. previous_attributes.description.anyOf[1] (Value): string. Description of the
     * product shown to buyers. previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.images
     * (Optional): Array of {@link ImageAttachmentPreviousAttributes} or null. Images attached to
     * this resource, in display order. The first image is primary.
     * previous_attributes.images.anyOf[1] (Value): Array of {@link
     * ImageAttachmentPreviousAttributes}. Images attached to this resource, in display order. The
     * first image is primary. previous_attributes.images.anyOf[1][] (Value): {@link
     * ImageAttachmentPreviousAttributes}. previous_attributes.images.anyOf[2] (Value): null.
     * previous_attributes.is_available_for_sale (Optional): boolean or null. Whether the product
     * is active and has at least one active variant.
     * previous_attributes.is_available_for_sale.anyOf[1] (Value): boolean. Whether the product is
     * active and has at least one active variant.
     * previous_attributes.is_available_for_sale.anyOf[2] (Value): null.
     * previous_attributes.merchant_id (Optional): string or null. Identifier of the merchant that
     * owns this resource. previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier of
     * the merchant that owns this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on this resource.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.modifier_set_id
     * (Optional): string or null. ID of the modifier set attached to the product. `null` when no
     * modifier set is attached. previous_attributes.modifier_set_id.anyOf[1] (Value): string. ID
     * of the modifier set attached to the product. `null` when no modifier set is attached.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". previous_attributes.modifier_set_id.anyOf[2]
     * (Value): null. previous_attributes.name (Optional): string or null. Product name shown to
     * buyers. previous_attributes.name.anyOf[1] (Value): string. Product name shown to buyers.
     * previous_attributes.name.anyOf[2] (Value): null. previous_attributes.option_count
     * (Optional): integer or null. Number of active options belonging to the product.
     * previous_attributes.option_count.anyOf[1] (Value): integer. Number of active options
     * belonging to the product. Format: int32. previous_attributes.option_count.anyOf[2] (Value):
     * null. previous_attributes.options (Optional): Array of {@link
     * ProductOptionPreviousAttributes} or null. Product options and their non-archived values.
     * Empty when the product has no options. previous_attributes.options.anyOf[1] (Value): Array
     * of {@link ProductOptionPreviousAttributes}. Product options and their non-archived values.
     * Empty when the product has no options. previous_attributes.options.anyOf[1][] (Value):
     * {@link ProductOptionPreviousAttributes}. previous_attributes.options.anyOf[2] (Value): null.
     * previous_attributes.price_range (Optional): {@link ProductPriceRangePreviousAttributes} or
     * null. Lowest and highest base unit prices among active variants, before any quantity price
     * breaks. Omitted when there are no active variants or their currencies differ.
     * previous_attributes.price_range.anyOf[1] (Value): {@link
     * ProductPriceRangePreviousAttributes}. previous_attributes.price_range.anyOf[2] (Value):
     * null. previous_attributes.product_id (Optional): string or null. Stable identifier of the
     * product. previous_attributes.product_id.anyOf[1] (Value): string. Stable identifier of the
     * product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". previous_attributes.product_id.anyOf[2]
     * (Value): null. previous_attributes.product_type (Optional): string or null. Kind of goods or
     * service this product represents. New variants of digital products store digital_goods when
     * line_item_tax_category is omitted; explicit categories are preserved. Value enum:
     * "physical", "service", "fee", "digital", "gift_card".
     * previous_attributes.product_type.anyOf[1] (Value): string. Kind of goods or service this
     * product represents. New variants of digital products store digital_goods when
     * line_item_tax_category is omitted; explicit categories are preserved. Value enum:
     * "physical", "service", "fee", "digital", "gift_card".
     * previous_attributes.product_type.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Product lifecycle status. Archived products remain readable and
     * cannot be edited. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[1] (Value): string. Product lifecycle status. Archived
     * products remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When this resource last changed, as an RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When this resource last changed, as
     * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.variant_count
     * (Optional): integer or null. Number of non-archived variants belonging to the product.
     * previous_attributes.variant_count.anyOf[1] (Value): integer. Number of non-archived variants
     * belonging to the product. Format: int32. previous_attributes.variant_count.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Current resource version.
     * Send it as expected_version to reject a write if the resource has changed.
     * previous_attributes.version.anyOf[1] (Value): integer. Current resource version. Send it as
     * expected_version to reject a write if the resource has changed. Format: uint64. minimum: 0.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`.
         */
        "object": WebhookProduct;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. active_variant_count (Optional): integer or
         * null. Number of active variants belonging to the product. active_variant_count.anyOf[1]
         * (Value): integer. Number of active variants belonging to the product. Format: int32.
         * active_variant_count.anyOf[2] (Value): null. categories (Optional): Array of {@link
         * CategoryReferencePreviousAttributes} or null. Always present. Empty collections are
         * returned as []. categories.anyOf[1] (Value): Array of {@link
         * CategoryReferencePreviousAttributes}. Always present. Empty collections are returned as
         * []. categories.anyOf[1][] (Value): {@link CategoryReferencePreviousAttributes}.
         * categories.anyOf[2] (Value): null. created_at (Optional): string or null. When this
         * resource was created, as an RFC3339 timestamp. created_at.anyOf[1] (Value): string. When
         * this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. default_variant (Optional):
         * {@link ProductVariantPreviousAttributes} or null. The product's default variant, when
         * one is set. default_variant.anyOf[1] (Value): {@link ProductVariantPreviousAttributes}.
         * default_variant.anyOf[2] (Value): null. default_variant_id (Optional): string or null.
         * Identifier of the variant chosen as this product's default, when one is set.
         * default_variant_id.anyOf[1] (Value): string. Identifier of the variant chosen as this
         * product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
         * default_variant_id.anyOf[2] (Value): null. delivery_configuration_status (Optional):
         * string or null. Delivery readiness aggregated across the product's non-archived
         * variants. Value enum: "configured", "action_required", "not_applicable".
         * delivery_configuration_status.anyOf[1] (Value): string. Delivery readiness aggregated
         * across the product's non-archived variants. Value enum: "configured", "action_required",
         * "not_applicable". delivery_configuration_status.anyOf[2] (Value): null. description
         * (Optional): string or null. Description of the product shown to buyers.
         * description.anyOf[1] (Value): string. Description of the product shown to buyers.
         * description.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. images (Optional): Array of {@link
         * ImageAttachmentPreviousAttributes} or null. Images attached to this resource, in display
         * order. The first image is primary. images.anyOf[1] (Value): Array of {@link
         * ImageAttachmentPreviousAttributes}. Images attached to this resource, in display order.
         * The first image is primary. images.anyOf[1][] (Value): {@link
         * ImageAttachmentPreviousAttributes}. images.anyOf[2] (Value): null. is_available_for_sale
         * (Optional): boolean or null. Whether the product is active and has at least one active
         * variant. is_available_for_sale.anyOf[1] (Value): boolean. Whether the product is active
         * and has at least one active variant. is_available_for_sale.anyOf[2] (Value): null.
         * merchant_id (Optional): string or null. Identifier of the merchant that owns this
         * resource. merchant_id.anyOf[1] (Value): string. Identifier of the merchant that owns
         * this resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. metadata (Optional): {@link MetadataMap} or null. Caller-owned metadata stored on
         * this resource. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2]
         * (Value): null. modifier_set_id (Optional): string or null. ID of the modifier set
         * attached to the product. `null` when no modifier set is attached.
         * modifier_set_id.anyOf[1] (Value): string. ID of the modifier set attached to the
         * product. `null` when no modifier set is attached. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". modifier_set_id.anyOf[2] (Value): null. name
         * (Optional): string or null. Product name shown to buyers. name.anyOf[1] (Value): string.
         * Product name shown to buyers. name.anyOf[2] (Value): null. option_count (Optional):
         * integer or null. Number of active options belonging to the product.
         * option_count.anyOf[1] (Value): integer. Number of active options belonging to the
         * product. Format: int32. option_count.anyOf[2] (Value): null. options (Optional): Array
         * of {@link ProductOptionPreviousAttributes} or null. Product options and their
         * non-archived values. Empty when the product has no options. options.anyOf[1] (Value):
         * Array of {@link ProductOptionPreviousAttributes}. Product options and their non-archived
         * values. Empty when the product has no options. options.anyOf[1][] (Value): {@link
         * ProductOptionPreviousAttributes}. options.anyOf[2] (Value): null. price_range
         * (Optional): {@link ProductPriceRangePreviousAttributes} or null. Lowest and highest base
         * unit prices among active variants, before any quantity price breaks. Omitted when there
         * are no active variants or their currencies differ. price_range.anyOf[1] (Value): {@link
         * ProductPriceRangePreviousAttributes}. price_range.anyOf[2] (Value): null. product_id
         * (Optional): string or null. Stable identifier of the product. product_id.anyOf[1]
         * (Value): string. Stable identifier of the product. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_id.anyOf[2] (Value): null. product_type
         * (Optional): string or null. Kind of goods or service this product represents. New
         * variants of digital products store digital_goods when line_item_tax_category is omitted;
         * explicit categories are preserved. Value enum: "physical", "service", "fee", "digital",
         * "gift_card". product_type.anyOf[1] (Value): string. Kind of goods or service this
         * product represents. New variants of digital products store digital_goods when
         * line_item_tax_category is omitted; explicit categories are preserved. Value enum:
         * "physical", "service", "fee", "digital", "gift_card". product_type.anyOf[2] (Value):
         * null. status (Optional): string or null. Product lifecycle status. Archived products
         * remain readable and cannot be edited. Value enum: "active", "inactive", "archived".
         * status.anyOf[1] (Value): string. Product lifecycle status. Archived products remain
         * readable and cannot be edited. Value enum: "active", "inactive", "archived".
         * status.anyOf[2] (Value): null. updated_at (Optional): string or null. When this resource
         * last changed, as an RFC3339 timestamp. updated_at.anyOf[1] (Value): string. When this
         * resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. variant_count (Optional):
         * integer or null. Number of non-archived variants belonging to the product.
         * variant_count.anyOf[1] (Value): integer. Number of non-archived variants belonging to
         * the product. Format: int32. variant_count.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current resource version. Send it as expected_version to reject a write
         * if the resource has changed. version.anyOf[1] (Value): integer. Current resource
         * version. Send it as expected_version to reject a write if the resource has changed.
         * Format: uint64. minimum: 0. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Number of active variants belonging to the product. anyOf[1] (Value): integer.
             * Number of active variants belonging to the product. Format: int32. anyOf[2] (Value):
             * null.
             */
            "active_variant_count"?: ((number) | (null));
            /**
             * Always present. Empty collections are returned as []. anyOf[1] (Value): Array of
             * {@link CategoryReferencePreviousAttributes}. Always present. Empty collections are
             * returned as []. anyOf[1][] (Value): {@link CategoryReferencePreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "categories"?: ((Array<CategoryReferencePreviousAttributes>) | (null));
            /**
             * When this resource was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The product's default variant, when one is set. anyOf[1] (Value): {@link
             * ProductVariantPreviousAttributes}. anyOf[2] (Value): null.
             */
            "default_variant"?: ((ProductVariantPreviousAttributes) | (null));
            /**
             * Identifier of the variant chosen as this product's default, when one is set.
             * anyOf[1] (Value): string. Identifier of the variant chosen as this product's
             * default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
             * (Value): null.
             */
            "default_variant_id"?: ((string) | (null));
            /**
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable". anyOf[1] (Value): string.
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): null.
             */
            "delivery_configuration_status"?: (("configured" | "action_required" | "not_applicable" | (string & {})) | (null));
            /**
             * Description of the product shown to buyers. anyOf[1] (Value): string. Description of
             * the product shown to buyers. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Images attached to this resource, in display order. The first image is primary.
             * anyOf[1] (Value): Array of {@link ImageAttachmentPreviousAttributes}. Images
             * attached to this resource, in display order. The first image is primary. anyOf[1][]
             * (Value): {@link ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "images"?: ((Array<ImageAttachmentPreviousAttributes>) | (null));
            /**
             * Whether the product is active and has at least one active variant. anyOf[1] (Value):
             * boolean. Whether the product is active and has at least one active variant. anyOf[2]
             * (Value): null.
             */
            "is_available_for_sale"?: ((boolean) | (null));
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
             * ID of the modifier set attached to the product. `null` when no modifier set is
             * attached. anyOf[1] (Value): string. ID of the modifier set attached to the product.
             * `null` when no modifier set is attached. Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR".
             * anyOf[2] (Value): null.
             */
            "modifier_set_id"?: ((string) | (null));
            /**
             * Product name shown to buyers. anyOf[1] (Value): string. Product name shown to
             * buyers. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Number of active options belonging to the product. anyOf[1] (Value): integer. Number
             * of active options belonging to the product. Format: int32. anyOf[2] (Value): null.
             */
            "option_count"?: ((number) | (null));
            /**
             * Product options and their non-archived values. Empty when the product has no
             * options. anyOf[1] (Value): Array of {@link ProductOptionPreviousAttributes}. Product
             * options and their non-archived values. Empty when the product has no options.
             * anyOf[1][] (Value): {@link ProductOptionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "options"?: ((Array<ProductOptionPreviousAttributes>) | (null));
            /**
             * Lowest and highest base unit prices among active variants, before any quantity price
             * breaks. Omitted when there are no active variants or their currencies differ.
             * anyOf[1] (Value): {@link ProductPriceRangePreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "price_range"?: ((ProductPriceRangePreviousAttributes) | (null));
            /**
             * Stable identifier of the product. anyOf[1] (Value): string. Stable identifier of the
             * product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2] (Value): null.
             */
            "product_id"?: ((string) | (null));
            /**
             * Kind of goods or service this product represents. New variants of digital products
             * store digital_goods when line_item_tax_category is omitted; explicit categories are
             * preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
             * anyOf[1] (Value): string. Kind of goods or service this product represents. New
             * variants of digital products store digital_goods when line_item_tax_category is
             * omitted; explicit categories are preserved. Value enum: "physical", "service",
             * "fee", "digital", "gift_card". anyOf[2] (Value): null.
             */
            "product_type"?: (("physical" | "service" | "fee" | "digital" | "gift_card" | (string & {})) | (null));
            /**
             * Product lifecycle status. Archived products remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Product
             * lifecycle status. Archived products remain readable and cannot be edited. Value
             * enum: "active", "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * When this resource last changed, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Number of non-archived variants belonging to the product. anyOf[1] (Value): integer.
             * Number of non-archived variants belonging to the product. Format: int32. anyOf[2]
             * (Value): null.
             */
            "variant_count"?: ((number) | (null));
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. anyOf[1] (Value): integer. Current resource version. Send it
             * as expected_version to reject a write if the resource has changed. Format: uint64.
             * minimum: 0. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "product.archived". */
    "event_type"?: "product.archived";
});
export type ProductCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookProduct;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "product.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookProduct;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "product.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "product.created";
});
/**
 * The `product.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ProductCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookProduct}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `variants`, `matched_variant`, `modifier_set`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`.
         */
        "object": WebhookProduct;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "product.created". */
    "event_type"?: "product.created";
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
