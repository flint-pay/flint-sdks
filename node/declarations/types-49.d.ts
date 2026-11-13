import type { MoneyValue, MoneyValueInput, ModifierSet } from './types-38.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-37.js';
import type { ResponseMeta } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { PlatformFee } from './types-48.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { QuantityPriceBreak, QuantityPriceBreakRequestInput } from './types-52.js';
import type { CreatePriceListRequestInput, CreatePriceListPricesRequestInput } from './types-11.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { UpdatePriceListRequestInput, UpdatePriceListPriceRequestInput } from './types-67.js';
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
} from './types-56.js';
import type { CategoryReference } from './types-5.js';
import type { ImageAttachment } from './types-27.js';
import type { ProductVariant, ProductVariantMatch } from './types-50.js';
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
     * The credit on your merchant ledger. Present once Flint observes it; linking it sends no
     * payout event and doesn't advance version. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
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
        "previous_attributes"?: Partial<PlatformFeePayout>;
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
        "previous_attributes"?: Partial<PlatformFeePayout>;
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
     * The fee in minor units, in the payment's currency. A fixed amount: compute any percentage
     * yourself. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
};
/**
 * A platform fee the partner app charges on the payment, beside Flint's fees. The installed
 * merchant pays it, and Flint takes no share of it.
 */
export type PlatformFeeRequestInput = {
    /**
     * The fee in minor units, in the payment's currency. A fixed amount: compute any percentage
     * yourself. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
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
        "previous_attributes"?: Partial<PlatformFee>;
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
        "previous_attributes"?: Partial<PlatformFee>;
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
        "previous_attributes"?: Partial<PriceList>;
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
        "previous_attributes"?: Partial<PriceList>;
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
     * events.
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PriceList>;
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
     * events.
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PriceList>;
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
        "previous_attributes"?: Partial<PriceList>;
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
        "previous_attributes"?: Partial<PriceList>;
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
     * events.
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PriceList>;
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
     * events.
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<PriceList>;
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
     * variant whose SKU matches query. Omitted when no variant matches; a product name or
     * description match alone does not set it. Page the product's variants to find all matches. A
     * single variant witness on product list rows only. With exact variant filters, the first
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
     * Attached modifier set. Send null on update to remove it. Example:
     * "ms_01KEZF7C007EWZVVFAWVJJM8NR".
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
        "object": {
            "active_variant_count"?: number;
            "categories": Array<CategoryReference>;
            "created_at"?: string;
            "default_variant"?: ProductVariant;
            "default_variant_id"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale"?: boolean;
            "matched_variant"?: ProductVariantMatch;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "option_count"?: number;
            "options": Array<ProductOption>;
            "price_range"?: ProductPriceRange;
            "product_id": string;
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "variant_count"?: number;
            "variants"?: Array<ProductVariant>;
            "version": number;
        };
        "previous_attributes"?: Partial<Product>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "product.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_variant_count"?: number;
            "categories": Array<CategoryReference>;
            "created_at"?: string;
            "default_variant"?: ProductVariant;
            "default_variant_id"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale"?: boolean;
            "matched_variant"?: ProductVariantMatch;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "option_count"?: number;
            "options": Array<ProductOption>;
            "price_range"?: ProductPriceRange;
            "product_id": string;
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "variant_count"?: number;
            "variants"?: Array<ProductVariant>;
            "version": number;
        };
        "previous_attributes"?: Partial<Product>;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `variants`, `matched_variant`, `modifier_set`. object.active_variant_count
     * (Optional): integer. Number of active variants belonging to the product. Format: int32.
     * object.categories (Required): Array of {@link CategoryReference}. Always present. Empty
     * collections are returned as []. object.categories[] (Value): {@link CategoryReference}. A
     * reference to a product category by ID, handle, and name. object.created_at (Optional):
     * string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.default_variant (Optional): {@link ProductVariant}. The
     * product's default variant, when one is set. A specific purchasable version of a product.
     * object.default_variant_id (Optional): string. Identifier of the variant chosen as this
     * product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.delivery_configuration_status (Required): string. Delivery readiness aggregated
     * across the product's non-archived variants. Value enum: "configured", "action_required",
     * "not_applicable". object.description (Optional): string. Description of the product shown to
     * buyers. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.images
     * (Required): Array of {@link ImageAttachment}. Images attached to this resource, in display
     * order. The first image is primary. object.images[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Optional): boolean. Whether the product is active and has at
     * least one active variant. object.matched_variant (Optional): {@link ProductVariantMatch}. On
     * product list rows, the first non-archived variant by position, then variant_id, that matches
     * all exact variant filters. Without exact variant filters, identifies the first variant whose
     * SKU matches query. Omitted when no variant matches; a product name or description match
     * alone does not set it. Page the product's variants to find all matches. A single variant
     * witness on product list rows only. With exact variant filters, the first variant by
     * position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in
     * that order whose SKU matches query. Use the paginated nested variant list to enumerate every
     * match. object.merchant_id (Optional): string. Identifier of the merchant that owns this
     * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null.
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Product name shown
     * to buyers. object.option_count (Optional): integer. Number of active options belonging to
     * the product. Format: int32. object.options (Required): Array of {@link ProductOption}.
     * Product options and their non-archived values. Empty when the product has no options.
     * object.options[] (Value): {@link ProductOption}. A choice that defines a product's variants.
     * object.price_range (Optional): {@link ProductPriceRange}. Lowest and highest base unit
     * prices among active variants, before any quantity price breaks. Omitted when there are no
     * active variants or their currencies differ. The lowest and highest unit prices across a
     * product's variants. object.product_id (Required): string. Stable identifier of the product.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.product_type (Required): string. Kind of
     * goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card". object.status (Required):
     * string. Product lifecycle status. Archived products remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When
     * this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.variant_count (Optional): integer. Number of non-archived
     * variants belonging to the product. Format: int32. object.variants (Optional): Array of
     * {@link ProductVariant}. The product's complete non-archived variants, ordered by `position`
     * and then `variant_id`. Present when `expand=variants` is requested, and on the `POST
     * /v1/products` response. An archived product returns an empty array. object.variants[]
     * (Value): {@link ProductVariant}. A specific purchasable version of a product. object.version
     * (Required): integer. Current resource version. Send it as expected_version to reject a write
     * if the resource has changed. Format: uint64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`. active_variant_count (Optional): integer. Number of
         * active variants belonging to the product. Format: int32. categories (Required): Array of
         * {@link CategoryReference}. Always present. Empty collections are returned as [].
         * categories[] (Value): {@link CategoryReference}. A reference to a product category by
         * ID, handle, and name. created_at (Optional): string. When this resource was created, as
         * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * default_variant (Optional): {@link ProductVariant}. The product's default variant, when
         * one is set. A specific purchasable version of a product. default_variant_id (Optional):
         * string. Identifier of the variant chosen as this product's default, when one is set.
         * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". delivery_configuration_status (Required):
         * string. Delivery readiness aggregated across the product's non-archived variants. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the product shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Optional): boolean. Whether
         * the product is active and has at least one active variant. matched_variant (Optional):
         * {@link ProductVariantMatch}. On product list rows, the first non-archived variant by
         * position, then variant_id, that matches all exact variant filters. Without exact variant
         * filters, identifies the first variant whose SKU matches query. Omitted when no variant
         * matches; a product name or description match alone does not set it. Page the product's
         * variants to find all matches. A single variant witness on product list rows only. With
         * exact variant filters, the first variant by position, then variant_id, satisfying every
         * exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use
         * the paginated nested variant list to enumerate every match. merchant_id (Optional):
         * string. Identifier of the merchant that owns this resource. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_set (Optional): {@link ModifierSet} or null. Attached modifier
         * set, included when expand=modifier_set is requested. Requires commerce.catalog.read in
         * addition to the resource's read scope. Present only when `expand` includes
         * `modifier_set`; `null` when expanded and there is no related modifier set.
         * modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
         * customization groups. modifier_set.anyOf[2] (Value): null. modifier_set_id (Required):
         * string or null. Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required): string. Product name shown to buyers.
         * option_count (Optional): integer. Number of active options belonging to the product.
         * Format: int32. options (Required): Array of {@link ProductOption}. Product options and
         * their non-archived values. Empty when the product has no options. options[] (Value):
         * {@link ProductOption}. A choice that defines a product's variants. price_range
         * (Optional): {@link ProductPriceRange}. Lowest and highest base unit prices among active
         * variants, before any quantity price breaks. Omitted when there are no active variants or
         * their currencies differ. The lowest and highest unit prices across a product's variants.
         * product_id (Required): string. Stable identifier of the product. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_type (Required): string. Kind of goods or
         * service this product represents. New variants of digital products store digital_goods
         * when line_item_tax_category is omitted; explicit categories are preserved. Value enum:
         * "physical", "service", "fee", "digital", "gift_card". status (Required): string. Product
         * lifecycle status. Archived products remain readable and cannot be edited. Value enum:
         * "active", "inactive", "archived". updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * variant_count (Optional): integer. Number of non-archived variants belonging to the
         * product. Format: int32. variants (Optional): Array of {@link ProductVariant}. The
         * product's complete non-archived variants, ordered by `position` and then `variant_id`.
         * Present when `expand=variants` is requested, and on the `POST /v1/products` response. An
         * archived product returns an empty array. variants[] (Value): {@link ProductVariant}. A
         * specific purchasable version of a product. version (Required): integer. Current resource
         * version. Send it as expected_version to reject a write if the resource has changed.
         * Format: uint64. minimum: 0.
         */
        "object": {
            /** Number of active variants belonging to the product. Format: int32. */
            "active_variant_count"?: number;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * The product's default variant, when one is set. A specific purchasable version of a
             * product.
             */
            "default_variant"?: ProductVariant;
            /**
             * Identifier of the variant chosen as this product's default, when one is set.
             * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "default_variant_id"?: string;
            /**
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the product shown to buyers. */
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
            /** Whether the product is active and has at least one active variant. */
            "is_available_for_sale"?: boolean;
            /**
             * On product list rows, the first non-archived variant by position, then variant_id,
             * that matches all exact variant filters. Without exact variant filters, identifies
             * the first variant whose SKU matches query. Omitted when no variant matches; a
             * product name or description match alone does not set it. Page the product's variants
             * to find all matches. A single variant witness on product list rows only. With exact
             * variant filters, the first variant by position, then variant_id, satisfying every
             * exact predicate. Otherwise, the first variant in that order whose SKU matches query.
             * Use the paginated nested variant list to enumerate every match.
             */
            "matched_variant"?: ProductVariantMatch;
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
            /** Product name shown to buyers. */
            "name": string;
            /** Number of active options belonging to the product. Format: int32. */
            "option_count"?: number;
            /**
             * Product options and their non-archived values. Empty when the product has no
             * options. [] (Value): {@link ProductOption}. A choice that defines a product's
             * variants.
             */
            "options": Array<ProductOption>;
            /**
             * Lowest and highest base unit prices among active variants, before any quantity price
             * breaks. Omitted when there are no active variants or their currencies differ. The
             * lowest and highest unit prices across a product's variants.
             */
            "price_range"?: ProductPriceRange;
            /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
            "product_id": string;
            /**
             * Kind of goods or service this product represents. New variants of digital products
             * store digital_goods when line_item_tax_category is omitted; explicit categories are
             * preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
             */
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            /**
             * Product lifecycle status. Archived products remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of non-archived variants belonging to the product. Format: int32. */
            "variant_count"?: number;
            /**
             * The product's complete non-archived variants, ordered by `position` and then
             * `variant_id`. Present when `expand=variants` is requested, and on the `POST
             * /v1/products` response. An archived product returns an empty array. [] (Value):
             * {@link ProductVariant}. A specific purchasable version of a product.
             */
            "variants"?: Array<ProductVariant>;
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
        "previous_attributes"?: Partial<Product>;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `variants`, `matched_variant`, `modifier_set`. object.active_variant_count
     * (Optional): integer. Number of active variants belonging to the product. Format: int32.
     * object.categories (Required): Array of {@link CategoryReference}. Always present. Empty
     * collections are returned as []. object.categories[] (Value): {@link CategoryReference}. A
     * reference to a product category by ID, handle, and name. object.created_at (Optional):
     * string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.default_variant (Optional): {@link ProductVariant}. The
     * product's default variant, when one is set. A specific purchasable version of a product.
     * object.default_variant_id (Optional): string. Identifier of the variant chosen as this
     * product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.delivery_configuration_status (Required): string. Delivery readiness aggregated
     * across the product's non-archived variants. Value enum: "configured", "action_required",
     * "not_applicable". object.description (Optional): string. Description of the product shown to
     * buyers. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.images
     * (Required): Array of {@link ImageAttachment}. Images attached to this resource, in display
     * order. The first image is primary. object.images[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Optional): boolean. Whether the product is active and has at
     * least one active variant. object.matched_variant (Optional): {@link ProductVariantMatch}. On
     * product list rows, the first non-archived variant by position, then variant_id, that matches
     * all exact variant filters. Without exact variant filters, identifies the first variant whose
     * SKU matches query. Omitted when no variant matches; a product name or description match
     * alone does not set it. Page the product's variants to find all matches. A single variant
     * witness on product list rows only. With exact variant filters, the first variant by
     * position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in
     * that order whose SKU matches query. Use the paginated nested variant list to enumerate every
     * match. object.merchant_id (Optional): string. Identifier of the merchant that owns this
     * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null.
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Product name shown
     * to buyers. object.option_count (Optional): integer. Number of active options belonging to
     * the product. Format: int32. object.options (Required): Array of {@link ProductOption}.
     * Product options and their non-archived values. Empty when the product has no options.
     * object.options[] (Value): {@link ProductOption}. A choice that defines a product's variants.
     * object.price_range (Optional): {@link ProductPriceRange}. Lowest and highest base unit
     * prices among active variants, before any quantity price breaks. Omitted when there are no
     * active variants or their currencies differ. The lowest and highest unit prices across a
     * product's variants. object.product_id (Required): string. Stable identifier of the product.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.product_type (Required): string. Kind of
     * goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card". object.status (Required):
     * string. Product lifecycle status. Archived products remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When
     * this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.variant_count (Optional): integer. Number of non-archived
     * variants belonging to the product. Format: int32. object.variants (Optional): Array of
     * {@link ProductVariant}. The product's complete non-archived variants, ordered by `position`
     * and then `variant_id`. Present when `expand=variants` is requested, and on the `POST
     * /v1/products` response. An archived product returns an empty array. object.variants[]
     * (Value): {@link ProductVariant}. A specific purchasable version of a product. object.version
     * (Required): integer. Current resource version. Send it as expected_version to reject a write
     * if the resource has changed. Format: uint64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`. active_variant_count (Optional): integer. Number of
         * active variants belonging to the product. Format: int32. categories (Required): Array of
         * {@link CategoryReference}. Always present. Empty collections are returned as [].
         * categories[] (Value): {@link CategoryReference}. A reference to a product category by
         * ID, handle, and name. created_at (Optional): string. When this resource was created, as
         * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * default_variant (Optional): {@link ProductVariant}. The product's default variant, when
         * one is set. A specific purchasable version of a product. default_variant_id (Optional):
         * string. Identifier of the variant chosen as this product's default, when one is set.
         * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". delivery_configuration_status (Required):
         * string. Delivery readiness aggregated across the product's non-archived variants. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the product shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Optional): boolean. Whether
         * the product is active and has at least one active variant. matched_variant (Optional):
         * {@link ProductVariantMatch}. On product list rows, the first non-archived variant by
         * position, then variant_id, that matches all exact variant filters. Without exact variant
         * filters, identifies the first variant whose SKU matches query. Omitted when no variant
         * matches; a product name or description match alone does not set it. Page the product's
         * variants to find all matches. A single variant witness on product list rows only. With
         * exact variant filters, the first variant by position, then variant_id, satisfying every
         * exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use
         * the paginated nested variant list to enumerate every match. merchant_id (Optional):
         * string. Identifier of the merchant that owns this resource. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_set (Optional): {@link ModifierSet} or null. Attached modifier
         * set, included when expand=modifier_set is requested. Requires commerce.catalog.read in
         * addition to the resource's read scope. Present only when `expand` includes
         * `modifier_set`; `null` when expanded and there is no related modifier set.
         * modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
         * customization groups. modifier_set.anyOf[2] (Value): null. modifier_set_id (Required):
         * string or null. Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required): string. Product name shown to buyers.
         * option_count (Optional): integer. Number of active options belonging to the product.
         * Format: int32. options (Required): Array of {@link ProductOption}. Product options and
         * their non-archived values. Empty when the product has no options. options[] (Value):
         * {@link ProductOption}. A choice that defines a product's variants. price_range
         * (Optional): {@link ProductPriceRange}. Lowest and highest base unit prices among active
         * variants, before any quantity price breaks. Omitted when there are no active variants or
         * their currencies differ. The lowest and highest unit prices across a product's variants.
         * product_id (Required): string. Stable identifier of the product. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_type (Required): string. Kind of goods or
         * service this product represents. New variants of digital products store digital_goods
         * when line_item_tax_category is omitted; explicit categories are preserved. Value enum:
         * "physical", "service", "fee", "digital", "gift_card". status (Required): string. Product
         * lifecycle status. Archived products remain readable and cannot be edited. Value enum:
         * "active", "inactive", "archived". updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * variant_count (Optional): integer. Number of non-archived variants belonging to the
         * product. Format: int32. variants (Optional): Array of {@link ProductVariant}. The
         * product's complete non-archived variants, ordered by `position` and then `variant_id`.
         * Present when `expand=variants` is requested, and on the `POST /v1/products` response. An
         * archived product returns an empty array. variants[] (Value): {@link ProductVariant}. A
         * specific purchasable version of a product. version (Required): integer. Current resource
         * version. Send it as expected_version to reject a write if the resource has changed.
         * Format: uint64. minimum: 0.
         */
        "object": {
            /** Number of active variants belonging to the product. Format: int32. */
            "active_variant_count"?: number;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * The product's default variant, when one is set. A specific purchasable version of a
             * product.
             */
            "default_variant"?: ProductVariant;
            /**
             * Identifier of the variant chosen as this product's default, when one is set.
             * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "default_variant_id"?: string;
            /**
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the product shown to buyers. */
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
            /** Whether the product is active and has at least one active variant. */
            "is_available_for_sale"?: boolean;
            /**
             * On product list rows, the first non-archived variant by position, then variant_id,
             * that matches all exact variant filters. Without exact variant filters, identifies
             * the first variant whose SKU matches query. Omitted when no variant matches; a
             * product name or description match alone does not set it. Page the product's variants
             * to find all matches. A single variant witness on product list rows only. With exact
             * variant filters, the first variant by position, then variant_id, satisfying every
             * exact predicate. Otherwise, the first variant in that order whose SKU matches query.
             * Use the paginated nested variant list to enumerate every match.
             */
            "matched_variant"?: ProductVariantMatch;
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
            /** Product name shown to buyers. */
            "name": string;
            /** Number of active options belonging to the product. Format: int32. */
            "option_count"?: number;
            /**
             * Product options and their non-archived values. Empty when the product has no
             * options. [] (Value): {@link ProductOption}. A choice that defines a product's
             * variants.
             */
            "options": Array<ProductOption>;
            /**
             * Lowest and highest base unit prices among active variants, before any quantity price
             * breaks. Omitted when there are no active variants or their currencies differ. The
             * lowest and highest unit prices across a product's variants.
             */
            "price_range"?: ProductPriceRange;
            /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
            "product_id": string;
            /**
             * Kind of goods or service this product represents. New variants of digital products
             * store digital_goods when line_item_tax_category is omitted; explicit categories are
             * preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
             */
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            /**
             * Product lifecycle status. Archived products remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of non-archived variants belonging to the product. Format: int32. */
            "variant_count"?: number;
            /**
             * The product's complete non-archived variants, ordered by `position` and then
             * `variant_id`. Present when `expand=variants` is requested, and on the `POST
             * /v1/products` response. An archived product returns an empty array. [] (Value):
             * {@link ProductVariant}. A specific purchasable version of a product.
             */
            "variants"?: Array<ProductVariant>;
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
        "previous_attributes"?: Partial<Product>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "product.archived". */
    "event_type"?: "product.archived";
});
export type ProductCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_variant_count"?: number;
            "categories": Array<CategoryReference>;
            "created_at"?: string;
            "default_variant"?: ProductVariant;
            "default_variant_id"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale"?: boolean;
            "matched_variant"?: ProductVariantMatch;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "option_count"?: number;
            "options": Array<ProductOption>;
            "price_range"?: ProductPriceRange;
            "product_id": string;
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "variant_count"?: number;
            "variants"?: Array<ProductVariant>;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "product.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_variant_count"?: number;
            "categories": Array<CategoryReference>;
            "created_at"?: string;
            "default_variant"?: ProductVariant;
            "default_variant_id"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale"?: boolean;
            "matched_variant"?: ProductVariantMatch;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "option_count"?: number;
            "options": Array<ProductOption>;
            "price_range"?: ProductPriceRange;
            "product_id": string;
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "variant_count"?: number;
            "variants"?: Array<ProductVariant>;
            "version": number;
        };
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `variants`, `matched_variant`, `modifier_set`. object.active_variant_count
     * (Optional): integer. Number of active variants belonging to the product. Format: int32.
     * object.categories (Required): Array of {@link CategoryReference}. Always present. Empty
     * collections are returned as []. object.categories[] (Value): {@link CategoryReference}. A
     * reference to a product category by ID, handle, and name. object.created_at (Optional):
     * string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.default_variant (Optional): {@link ProductVariant}. The
     * product's default variant, when one is set. A specific purchasable version of a product.
     * object.default_variant_id (Optional): string. Identifier of the variant chosen as this
     * product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.delivery_configuration_status (Required): string. Delivery readiness aggregated
     * across the product's non-archived variants. Value enum: "configured", "action_required",
     * "not_applicable". object.description (Optional): string. Description of the product shown to
     * buyers. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.images
     * (Required): Array of {@link ImageAttachment}. Images attached to this resource, in display
     * order. The first image is primary. object.images[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Optional): boolean. Whether the product is active and has at
     * least one active variant. object.matched_variant (Optional): {@link ProductVariantMatch}. On
     * product list rows, the first non-archived variant by position, then variant_id, that matches
     * all exact variant filters. Without exact variant filters, identifies the first variant whose
     * SKU matches query. Omitted when no variant matches; a product name or description match
     * alone does not set it. Page the product's variants to find all matches. A single variant
     * witness on product list rows only. With exact variant filters, the first variant by
     * position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in
     * that order whose SKU matches query. Use the paginated nested variant list to enumerate every
     * match. object.merchant_id (Optional): string. Identifier of the merchant that owns this
     * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null.
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Product name shown
     * to buyers. object.option_count (Optional): integer. Number of active options belonging to
     * the product. Format: int32. object.options (Required): Array of {@link ProductOption}.
     * Product options and their non-archived values. Empty when the product has no options.
     * object.options[] (Value): {@link ProductOption}. A choice that defines a product's variants.
     * object.price_range (Optional): {@link ProductPriceRange}. Lowest and highest base unit
     * prices among active variants, before any quantity price breaks. Omitted when there are no
     * active variants or their currencies differ. The lowest and highest unit prices across a
     * product's variants. object.product_id (Required): string. Stable identifier of the product.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.product_type (Required): string. Kind of
     * goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card". object.status (Required):
     * string. Product lifecycle status. Archived products remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When
     * this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.variant_count (Optional): integer. Number of non-archived
     * variants belonging to the product. Format: int32. object.variants (Optional): Array of
     * {@link ProductVariant}. The product's complete non-archived variants, ordered by `position`
     * and then `variant_id`. Present when `expand=variants` is requested, and on the `POST
     * /v1/products` response. An archived product returns an empty array. object.variants[]
     * (Value): {@link ProductVariant}. A specific purchasable version of a product. object.version
     * (Required): integer. Current resource version. Send it as expected_version to reject a write
     * if the resource has changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`. active_variant_count (Optional): integer. Number of
         * active variants belonging to the product. Format: int32. categories (Required): Array of
         * {@link CategoryReference}. Always present. Empty collections are returned as [].
         * categories[] (Value): {@link CategoryReference}. A reference to a product category by
         * ID, handle, and name. created_at (Optional): string. When this resource was created, as
         * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * default_variant (Optional): {@link ProductVariant}. The product's default variant, when
         * one is set. A specific purchasable version of a product. default_variant_id (Optional):
         * string. Identifier of the variant chosen as this product's default, when one is set.
         * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". delivery_configuration_status (Required):
         * string. Delivery readiness aggregated across the product's non-archived variants. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the product shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Optional): boolean. Whether
         * the product is active and has at least one active variant. matched_variant (Optional):
         * {@link ProductVariantMatch}. On product list rows, the first non-archived variant by
         * position, then variant_id, that matches all exact variant filters. Without exact variant
         * filters, identifies the first variant whose SKU matches query. Omitted when no variant
         * matches; a product name or description match alone does not set it. Page the product's
         * variants to find all matches. A single variant witness on product list rows only. With
         * exact variant filters, the first variant by position, then variant_id, satisfying every
         * exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use
         * the paginated nested variant list to enumerate every match. merchant_id (Optional):
         * string. Identifier of the merchant that owns this resource. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_set (Optional): {@link ModifierSet} or null. Attached modifier
         * set, included when expand=modifier_set is requested. Requires commerce.catalog.read in
         * addition to the resource's read scope. Present only when `expand` includes
         * `modifier_set`; `null` when expanded and there is no related modifier set.
         * modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
         * customization groups. modifier_set.anyOf[2] (Value): null. modifier_set_id (Required):
         * string or null. Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required): string. Product name shown to buyers.
         * option_count (Optional): integer. Number of active options belonging to the product.
         * Format: int32. options (Required): Array of {@link ProductOption}. Product options and
         * their non-archived values. Empty when the product has no options. options[] (Value):
         * {@link ProductOption}. A choice that defines a product's variants. price_range
         * (Optional): {@link ProductPriceRange}. Lowest and highest base unit prices among active
         * variants, before any quantity price breaks. Omitted when there are no active variants or
         * their currencies differ. The lowest and highest unit prices across a product's variants.
         * product_id (Required): string. Stable identifier of the product. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_type (Required): string. Kind of goods or
         * service this product represents. New variants of digital products store digital_goods
         * when line_item_tax_category is omitted; explicit categories are preserved. Value enum:
         * "physical", "service", "fee", "digital", "gift_card". status (Required): string. Product
         * lifecycle status. Archived products remain readable and cannot be edited. Value enum:
         * "active", "inactive", "archived". updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * variant_count (Optional): integer. Number of non-archived variants belonging to the
         * product. Format: int32. variants (Optional): Array of {@link ProductVariant}. The
         * product's complete non-archived variants, ordered by `position` and then `variant_id`.
         * Present when `expand=variants` is requested, and on the `POST /v1/products` response. An
         * archived product returns an empty array. variants[] (Value): {@link ProductVariant}. A
         * specific purchasable version of a product. version (Required): integer. Current resource
         * version. Send it as expected_version to reject a write if the resource has changed.
         * Format: uint64. minimum: 0.
         */
        "object": {
            /** Number of active variants belonging to the product. Format: int32. */
            "active_variant_count"?: number;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * The product's default variant, when one is set. A specific purchasable version of a
             * product.
             */
            "default_variant"?: ProductVariant;
            /**
             * Identifier of the variant chosen as this product's default, when one is set.
             * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "default_variant_id"?: string;
            /**
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the product shown to buyers. */
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
            /** Whether the product is active and has at least one active variant. */
            "is_available_for_sale"?: boolean;
            /**
             * On product list rows, the first non-archived variant by position, then variant_id,
             * that matches all exact variant filters. Without exact variant filters, identifies
             * the first variant whose SKU matches query. Omitted when no variant matches; a
             * product name or description match alone does not set it. Page the product's variants
             * to find all matches. A single variant witness on product list rows only. With exact
             * variant filters, the first variant by position, then variant_id, satisfying every
             * exact predicate. Otherwise, the first variant in that order whose SKU matches query.
             * Use the paginated nested variant list to enumerate every match.
             */
            "matched_variant"?: ProductVariantMatch;
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
            /** Product name shown to buyers. */
            "name": string;
            /** Number of active options belonging to the product. Format: int32. */
            "option_count"?: number;
            /**
             * Product options and their non-archived values. Empty when the product has no
             * options. [] (Value): {@link ProductOption}. A choice that defines a product's
             * variants.
             */
            "options": Array<ProductOption>;
            /**
             * Lowest and highest base unit prices among active variants, before any quantity price
             * breaks. Omitted when there are no active variants or their currencies differ. The
             * lowest and highest unit prices across a product's variants.
             */
            "price_range"?: ProductPriceRange;
            /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
            "product_id": string;
            /**
             * Kind of goods or service this product represents. New variants of digital products
             * store digital_goods when line_item_tax_category is omitted; explicit categories are
             * preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
             */
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            /**
             * Product lifecycle status. Archived products remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of non-archived variants belonging to the product. Format: int32. */
            "variant_count"?: number;
            /**
             * The product's complete non-archived variants, ordered by `position` and then
             * `variant_id`. Present when `expand=variants` is requested, and on the `POST
             * /v1/products` response. An archived product returns an empty array. [] (Value):
             * {@link ProductVariant}. A specific purchasable version of a product.
             */
            "variants"?: Array<ProductVariant>;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
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
/**
 * The `product.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ProductCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `variants`, `matched_variant`, `modifier_set`. object.active_variant_count
     * (Optional): integer. Number of active variants belonging to the product. Format: int32.
     * object.categories (Required): Array of {@link CategoryReference}. Always present. Empty
     * collections are returned as []. object.categories[] (Value): {@link CategoryReference}. A
     * reference to a product category by ID, handle, and name. object.created_at (Optional):
     * string. When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.default_variant (Optional): {@link ProductVariant}. The
     * product's default variant, when one is set. A specific purchasable version of a product.
     * object.default_variant_id (Optional): string. Identifier of the variant chosen as this
     * product's default, when one is set. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * object.delivery_configuration_status (Required): string. Delivery readiness aggregated
     * across the product's non-archived variants. Value enum: "configured", "action_required",
     * "not_applicable". object.description (Optional): string. Description of the product shown to
     * buyers. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842". object.images
     * (Required): Array of {@link ImageAttachment}. Images attached to this resource, in display
     * order. The first image is primary. object.images[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     * object.is_available_for_sale (Optional): boolean. Whether the product is active and has at
     * least one active variant. object.matched_variant (Optional): {@link ProductVariantMatch}. On
     * product list rows, the first non-archived variant by position, then variant_id, that matches
     * all exact variant filters. Without exact variant filters, identifies the first variant whose
     * SKU matches query. Omitted when no variant matches; a product name or description match
     * alone does not set it. Page the product's variants to find all matches. A single variant
     * witness on product list rows only. With exact variant filters, the first variant by
     * position, then variant_id, satisfying every exact predicate. Otherwise, the first variant in
     * that order whose SKU matches query. Use the paginated nested variant list to enumerate every
     * match. object.merchant_id (Optional): string. Identifier of the merchant that owns this
     * resource. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Caller-owned metadata stored on this resource. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.modifier_set (Optional): {@link ModifierSet} or null.
     * Attached modifier set, included when expand=modifier_set is requested. Requires
     * commerce.catalog.read in addition to the resource's read scope. Present only when `expand`
     * includes `modifier_set`; `null` when expanded and there is no related modifier set.
     * object.modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
     * customization groups. object.modifier_set.anyOf[2] (Value): null. object.modifier_set_id
     * (Required): string or null. Attached modifier set. Send null on update to remove it.
     * Example: "ms_01KEZF7C007EWZVVFAWVJJM8NR". object.name (Required): string. Product name shown
     * to buyers. object.option_count (Optional): integer. Number of active options belonging to
     * the product. Format: int32. object.options (Required): Array of {@link ProductOption}.
     * Product options and their non-archived values. Empty when the product has no options.
     * object.options[] (Value): {@link ProductOption}. A choice that defines a product's variants.
     * object.price_range (Optional): {@link ProductPriceRange}. Lowest and highest base unit
     * prices among active variants, before any quantity price breaks. Omitted when there are no
     * active variants or their currencies differ. The lowest and highest unit prices across a
     * product's variants. object.product_id (Required): string. Stable identifier of the product.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66". object.product_type (Required): string. Kind of
     * goods or service this product represents. New variants of digital products store
     * digital_goods when line_item_tax_category is omitted; explicit categories are preserved.
     * Value enum: "physical", "service", "fee", "digital", "gift_card". object.status (Required):
     * string. Product lifecycle status. Archived products remain readable and cannot be edited.
     * Value enum: "active", "inactive", "archived". object.updated_at (Optional): string. When
     * this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.variant_count (Optional): integer. Number of non-archived
     * variants belonging to the product. Format: int32. object.variants (Optional): Array of
     * {@link ProductVariant}. The product's complete non-archived variants, ordered by `position`
     * and then `variant_id`. Present when `expand=variants` is requested, and on the `POST
     * /v1/products` response. An archived product returns an empty array. object.variants[]
     * (Value): {@link ProductVariant}. A specific purchasable version of a product. object.version
     * (Required): integer. Current resource version. Send it as expected_version to reject a write
     * if the resource has changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `variants`,
         * `matched_variant`, `modifier_set`. active_variant_count (Optional): integer. Number of
         * active variants belonging to the product. Format: int32. categories (Required): Array of
         * {@link CategoryReference}. Always present. Empty collections are returned as [].
         * categories[] (Value): {@link CategoryReference}. A reference to a product category by
         * ID, handle, and name. created_at (Optional): string. When this resource was created, as
         * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * default_variant (Optional): {@link ProductVariant}. The product's default variant, when
         * one is set. A specific purchasable version of a product. default_variant_id (Optional):
         * string. Identifier of the variant chosen as this product's default, when one is set.
         * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". delivery_configuration_status (Required):
         * string. Delivery readiness aggregated across the product's non-archived variants. Value
         * enum: "configured", "action_required", "not_applicable". description (Optional): string.
         * Description of the product shown to buyers. external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". images (Required): Array of {@link ImageAttachment}. Images
         * attached to this resource, in display order. The first image is primary. images[]
         * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
         * properties and attachment metadata. is_available_for_sale (Optional): boolean. Whether
         * the product is active and has at least one active variant. matched_variant (Optional):
         * {@link ProductVariantMatch}. On product list rows, the first non-archived variant by
         * position, then variant_id, that matches all exact variant filters. Without exact variant
         * filters, identifies the first variant whose SKU matches query. Omitted when no variant
         * matches; a product name or description match alone does not set it. Page the product's
         * variants to find all matches. A single variant witness on product list rows only. With
         * exact variant filters, the first variant by position, then variant_id, satisfying every
         * exact predicate. Otherwise, the first variant in that order whose SKU matches query. Use
         * the paginated nested variant list to enumerate every match. merchant_id (Optional):
         * string. Identifier of the merchant that owns this resource. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}. Caller-owned
         * metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. modifier_set (Optional): {@link ModifierSet} or null. Attached modifier
         * set, included when expand=modifier_set is requested. Requires commerce.catalog.read in
         * addition to the resource's read scope. Present only when `expand` includes
         * `modifier_set`; `null` when expanded and there is no related modifier set.
         * modifier_set.anyOf[1] (Value): {@link ModifierSet}. A reusable collection of
         * customization groups. modifier_set.anyOf[2] (Value): null. modifier_set_id (Required):
         * string or null. Attached modifier set. Send null on update to remove it. Example:
         * "ms_01KEZF7C007EWZVVFAWVJJM8NR". name (Required): string. Product name shown to buyers.
         * option_count (Optional): integer. Number of active options belonging to the product.
         * Format: int32. options (Required): Array of {@link ProductOption}. Product options and
         * their non-archived values. Empty when the product has no options. options[] (Value):
         * {@link ProductOption}. A choice that defines a product's variants. price_range
         * (Optional): {@link ProductPriceRange}. Lowest and highest base unit prices among active
         * variants, before any quantity price breaks. Omitted when there are no active variants or
         * their currencies differ. The lowest and highest unit prices across a product's variants.
         * product_id (Required): string. Stable identifier of the product. Example:
         * "prod_01KEZF7C00BVSHCNWVH528HB66". product_type (Required): string. Kind of goods or
         * service this product represents. New variants of digital products store digital_goods
         * when line_item_tax_category is omitted; explicit categories are preserved. Value enum:
         * "physical", "service", "fee", "digital", "gift_card". status (Required): string. Product
         * lifecycle status. Archived products remain readable and cannot be edited. Value enum:
         * "active", "inactive", "archived". updated_at (Optional): string. When this resource last
         * changed, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * variant_count (Optional): integer. Number of non-archived variants belonging to the
         * product. Format: int32. variants (Optional): Array of {@link ProductVariant}. The
         * product's complete non-archived variants, ordered by `position` and then `variant_id`.
         * Present when `expand=variants` is requested, and on the `POST /v1/products` response. An
         * archived product returns an empty array. variants[] (Value): {@link ProductVariant}. A
         * specific purchasable version of a product. version (Required): integer. Current resource
         * version. Send it as expected_version to reject a write if the resource has changed.
         * Format: uint64. minimum: 0.
         */
        "object": {
            /** Number of active variants belonging to the product. Format: int32. */
            "active_variant_count"?: number;
            /**
             * Always present. Empty collections are returned as []. [] (Value): {@link
             * CategoryReference}. A reference to a product category by ID, handle, and name.
             */
            "categories": Array<CategoryReference>;
            /**
             * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /**
             * The product's default variant, when one is set. A specific purchasable version of a
             * product.
             */
            "default_variant"?: ProductVariant;
            /**
             * Identifier of the variant chosen as this product's default, when one is set.
             * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
             */
            "default_variant_id"?: string;
            /**
             * Delivery readiness aggregated across the product's non-archived variants. Value
             * enum: "configured", "action_required", "not_applicable".
             */
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            /** Description of the product shown to buyers. */
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
            /** Whether the product is active and has at least one active variant. */
            "is_available_for_sale"?: boolean;
            /**
             * On product list rows, the first non-archived variant by position, then variant_id,
             * that matches all exact variant filters. Without exact variant filters, identifies
             * the first variant whose SKU matches query. Omitted when no variant matches; a
             * product name or description match alone does not set it. Page the product's variants
             * to find all matches. A single variant witness on product list rows only. With exact
             * variant filters, the first variant by position, then variant_id, satisfying every
             * exact predicate. Otherwise, the first variant in that order whose SKU matches query.
             * Use the paginated nested variant list to enumerate every match.
             */
            "matched_variant"?: ProductVariantMatch;
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
            /** Product name shown to buyers. */
            "name": string;
            /** Number of active options belonging to the product. Format: int32. */
            "option_count"?: number;
            /**
             * Product options and their non-archived values. Empty when the product has no
             * options. [] (Value): {@link ProductOption}. A choice that defines a product's
             * variants.
             */
            "options": Array<ProductOption>;
            /**
             * Lowest and highest base unit prices among active variants, before any quantity price
             * breaks. Omitted when there are no active variants or their currencies differ. The
             * lowest and highest unit prices across a product's variants.
             */
            "price_range"?: ProductPriceRange;
            /** Stable identifier of the product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
            "product_id": string;
            /**
             * Kind of goods or service this product represents. New variants of digital products
             * store digital_goods when line_item_tax_category is omitted; explicit categories are
             * preserved. Value enum: "physical", "service", "fee", "digital", "gift_card".
             */
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            /**
             * Product lifecycle status. Archived products remain readable and cannot be edited.
             * Value enum: "active", "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * When this resource last changed, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of non-archived variants belonging to the product. Format: int32. */
            "variant_count"?: number;
            /**
             * The product's complete non-archived variants, ordered by `position` and then
             * `variant_id`. Present when `expand=variants` is requested, and on the `POST
             * /v1/products` response. An archived product returns an empty array. [] (Value):
             * {@link ProductVariant}. A specific purchasable version of a product.
             */
            "variants"?: Array<ProductVariant>;
            /**
             * Current resource version. Send it as expected_version to reject a write if the
             * resource has changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "product.created". */
    "event_type"?: "product.created";
});
/** A page of `Product` objects. */
export type ProductListResponse = {
    /**
     * The requested product data. [] (Value): {@link Product}. An item offered in the merchant's
     * catalog.
     */
    "data": Array<Product>;
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
/** A choice that defines a product's variants. */
export type ProductOption = {
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Option name, such as Size or Color. */
    "name": string;
    /** Stable identifier of the product option. Example: "opt_01KEZF7C008R5Q9BG9B4B4KQH8". */
    "option_id": string;
    /** Display order among the product's options, starting at zero. Format: int32. */
    "position": number;
    /**
     * Identifier of the product this option belongs to. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * Option lifecycle status. Every active variant must select an active value for each active
     * option. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /**
     * Values offered for this option, such as Small, Medium, and Large for Size. [] (Value):
     * {@link ProductOptionValue}. One value of a product option, such as a size or color.
     */
    "values"?: Array<ProductOptionValue>;
};
/** A page of `ProductOption` objects. */
export type ProductOptionListResponse = {
    /**
     * The requested product option data. [] (Value): {@link ProductOption}. A choice that defines
     * a product's variants.
     */
    "data": Array<ProductOption>;
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
/** A response containing `ProductOption` data. */
export type ProductOptionResponse = {
    /** The requested product option data. A choice that defines a product's variants. */
    "data": ProductOption;
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
/** One value of a product option, such as a size or color. */
export type ProductOptionValue = {
    /**
     * When this resource was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at"?: string;
    /**
     * Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Stable identifier of the option value. Example: "optv_01KEZF7C0078SVZ1T7PVRXQK7F". */
    "option_value_id": string;
    /** Display order among the option's values, starting at zero. Format: int32. */
    "position": number;
    /**
     * Option value lifecycle status. Only active values can be newly selected by active variants.
     * Value enum: "active", "inactive", "archived".
     */
    "status"?: "active" | "inactive" | "archived" | (string & {});
    /**
     * When this resource last changed, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at"?: string;
    /** Option value shown to buyers, such as Medium. */
    "value": string;
};
/** The lowest and highest unit prices across a product's variants. */
export type ProductPriceRange = {
    /**
     * Highest unit price among the product's active variants. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "max_unit_price_money": MoneyValue;
    /**
     * Lowest unit price among the product's active variants. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "min_unit_price_money": MoneyValue;
};
/** A response containing `Product` data. */
export type ProductResponse = {
    /** The requested product data. An item offered in the merchant's catalog. */
    "data": Product;
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
export type ProductUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_variant_count"?: number;
            "categories": Array<CategoryReference>;
            "created_at"?: string;
            "default_variant"?: ProductVariant;
            "default_variant_id"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale"?: boolean;
            "matched_variant"?: ProductVariantMatch;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "option_count"?: number;
            "options": Array<ProductOption>;
            "price_range"?: ProductPriceRange;
            "product_id": string;
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "variant_count"?: number;
            "variants"?: Array<ProductVariant>;
            "version": number;
        };
        "previous_attributes"?: Partial<Product>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "product.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_variant_count"?: number;
            "categories": Array<CategoryReference>;
            "created_at"?: string;
            "default_variant"?: ProductVariant;
            "default_variant_id"?: string;
            "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
            "description"?: string;
            "external_reference_id"?: string;
            "images": Array<ImageAttachment>;
            "is_available_for_sale"?: boolean;
            "matched_variant"?: ProductVariantMatch;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "modifier_set"?: ((ModifierSet) | (null));
            "modifier_set_id": string | null;
            "name": string;
            "option_count"?: number;
            "options": Array<ProductOption>;
            "price_range"?: ProductPriceRange;
            "product_id": string;
            "product_type": "physical" | "service" | "fee" | "digital" | "gift_card" | (string & {});
            "status": "active" | "inactive" | "archived" | (string & {});
            "updated_at"?: string;
            "variant_count"?: number;
            "variants"?: Array<ProductVariant>;
            "version": number;
        };
        "previous_attributes"?: Partial<Product>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "product.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "product.updated";
});
