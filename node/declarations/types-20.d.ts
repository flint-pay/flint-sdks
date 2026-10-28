import type { InputValue } from '../runtime.js';
import type { UpdateFulfillmentRequestInput } from './types-51.js';
import type { CheckoutRedirects, CheckoutRedirectsRequestInput } from './types-4.js';
import type { ResponseMeta } from './types-42.js';
import type { ReturnDisposition, ReturnInspection, ReturnLineItem, ReturnPolicy, ReturnPolicyRevision } from './types-43.js';
import type { ReturnReason, ReturnReceipt, ReturnResolution, ReturnResource } from './types-44.js';
import type {
    GiftCardRestriction,
    GiftCardPurchaseRefundAllocation,
    GiftCardPurchaseRefundValueHold,
    GiftCardPurchaseRestoration,
    GiftCardRefundProvenance,
    GiftCardPurchaseRecipient,
    GiftCardPurchaseRecipientRequestInput
} from './types-21.js';
import type { MoneyValue } from './types-33.js';
import type { AdjustGiftCardBalanceRequestInput } from './types-0.js';
import type { CashOutGiftCardRequestInput, CancelGiftCardNotificationRequestInput } from './types-3.js';
import type {
    CreateGiftCardFundingDispositionRequestInput,
    CreateGiftCardLoadRequestInput,
    CreateGiftCardNotificationRequestInput
} from './types-7.js';
export type FulfillmentsUpdateInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order", "packages", "shipments". Shape $[]
     * (Value): string. Value enum: "order", "packages", "shipments".
     */
    "expand"?: InputValue<Array<"order" | "packages" | "shipments">>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateFulfillmentRequestInput}. Provide at most one fulfillment
     * details object: pickup_details, local_delivery_details, digital_details, or service_details.
     * Shipment execution details belong to shipments and packages. A supplied detail field must
     * match the stored fulfillment type. Omit details for metadata-only updates. Even null detail
     * fields count toward exclusivity.
     */
    "body": InputValue<UpdateFulfillmentRequestInput>;
};
/**
 * Shape $ (Value): {@link GetOrCreateReturnResolutionCheckoutSessionRequest}. The request body
 * for: Create a Return resolution checkout session for the current buyer; Get or create return
 * resolution checkout session.
 */
export type GetOrCreateReturnResolutionCheckoutSessionRequest = ({
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutRedirects}. Where hosted checkout sends the buyer. Not
     * allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Shape $ (Value): string. Where the checkout sends the buyer after paying, such as the
     * Return's page in the customer account. Limited to 2048 characters (Unicode code points)
     * before trimming surrounding whitespace. It must be an HTTPS address of the merchant's
     * customer account: /{merchant_id} on Flint's account host, the merchant's active custom
     * account domain, or the host of customer_account.merchant_account_url when the merchant hosts
     * the account. HTTP is accepted only for localhost in test mode. Anything else fails with
     * INVALID_RETURN_URL. An alias for redirects.success_url on hosted checkout or
     * payment_return_url on embedded checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048.
     */
    "return_url"?: string;
    /**
     * Shape $ (Value): string. Defaults to hosted. The same surface reuses the open checkout. A
     * different surface replaces it only while no payment is in progress; otherwise the request
     * returns CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED. Default: "hosted". Value enum: "hosted",
     * "embedded".
     */
    "surface"?: "hosted" | "embedded" | (string & {});
});
/**
 * Shape $ (Value): {@link GetOrCreateReturnResolutionCheckoutSessionRequestInput}. The request
 * body for: Create a Return resolution checkout session for the current buyer; Get or create
 * return resolution checkout session.
 */
export type GetOrCreateReturnResolutionCheckoutSessionRequestInput = ({
    /**
     * Shape $ (Value): string. Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Shape $ (Value): string. Embedded sessions only. Absolute HTTPS URL on your site where Flint
     * sends the buyer after a redirect payment such as Affirm, whatever the outcome; read the
     * session there to show the result. Required when the session offers affirm. It can't contain
     * credentials, a query string, or a fragment. Test mode also accepts http loopback URLs. Up to
     * 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Shape $ (Value): {@link CheckoutRedirectsRequestInput}. Where hosted checkout sends the
     * buyer. Not allowed when surface is embedded; use payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Shape $ (Value): string. Where the checkout sends the buyer after paying, such as the
     * Return's page in the customer account. Limited to 2048 characters (Unicode code points)
     * before trimming surrounding whitespace. It must be an HTTPS address of the merchant's
     * customer account: /{merchant_id} on Flint's account host, the merchant's active custom
     * account domain, or the host of customer_account.merchant_account_url when the merchant hosts
     * the account. HTTP is accepted only for localhost in test mode. Anything else fails with
     * INVALID_RETURN_URL. An alias for redirects.success_url on hosted checkout or
     * payment_return_url on embedded checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048.
     */
    "return_url"?: string;
    /**
     * Shape $ (Value): string. Defaults to hosted. The same surface reuses the open checkout. A
     * different surface replaces it only while no payment is in progress; otherwise the request
     * returns CHECKOUT_SURFACE_CHANGE_NOT_ALLOWED. Default: "hosted". Value enum: "hosted",
     * "embedded".
     */
    "surface"?: "hosted" | "embedded";
});
/**
 * Shape $ (Value): {@link GetReturnDispositionResponse}. A response containing `ReturnDisposition`
 * data.
 */
export type GetReturnDispositionResponse = {
    /**
     * Shape $ (Value): {@link ReturnDisposition}. A decision about how returned merchandise will
     * be handled.
     */
    "data": ReturnDisposition;
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
 * Shape $ (Value): {@link GetReturnInspectionResponse}. A response containing `ReturnInspection`
 * data.
 */
export type GetReturnInspectionResponse = {
    /**
     * Shape $ (Value): {@link ReturnInspection}. An assessment of the condition of returned items.
     */
    "data": ReturnInspection;
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
 * Shape $ (Value): {@link GetReturnLineItemResponse}. A response containing `ReturnLineItem` data.
 */
export type GetReturnLineItemResponse = {
    /** Shape $ (Value): {@link ReturnLineItem}. An item included in a return request. */
    "data": ReturnLineItem;
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
/** Shape $ (Value): {@link GetReturnPolicyResponse}. A response containing `ReturnPolicy` data. */
export type GetReturnPolicyResponse = {
    /**
     * Shape $ (Value): {@link ReturnPolicy}. Rules governing whether and how purchased items can
     * be returned.
     */
    "data": ReturnPolicy;
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
 * Shape $ (Value): {@link GetReturnPolicyRevisionResponse}. A response containing
 * `ReturnPolicyRevision` data.
 */
export type GetReturnPolicyRevisionResponse = {
    /** Shape $ (Value): {@link ReturnPolicyRevision}. A saved revision of a return policy. */
    "data": ReturnPolicyRevision;
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
/** Shape $ (Value): {@link GetReturnReasonResponse}. A response containing `ReturnReason` data. */
export type GetReturnReasonResponse = {
    /**
     * Shape $ (Value): {@link ReturnReason}. A reason customers can select when requesting a
     * return.
     */
    "data": ReturnReason;
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
 * Shape $ (Value): {@link GetReturnReceiptResponse}. A response containing `ReturnReceipt` data.
 */
export type GetReturnReceiptResponse = {
    /**
     * Shape $ (Value): {@link ReturnReceipt}. A record of returned items arriving at a location.
     */
    "data": ReturnReceipt;
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
 * Shape $ (Value): {@link GetReturnResolutionResponse}. A response containing `ReturnResolution`
 * data.
 */
export type GetReturnResolutionResponse = {
    /**
     * Shape $ (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a
     * return.
     */
    "data": ReturnResolution;
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
/** Shape $ (Value): {@link GetReturnResponse}. A response containing `Return` data. */
export type GetReturnResponse = {
    /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
    "data": ReturnResource;
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
 * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance includes
 * reserved value; available value is balance minus reservations. Frozen value remains part of
 * outstanding liability. Gift cards are independent resources and cannot be transferred across
 * merchants or currencies.
 */
export type GiftCard = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "balance_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD". Value enum: "USD".
     */
    "currency": "USD" | (string & {});
    /** Shape $ (Value): string or null. */
    "customer_id": string | null;
    /**
     * Shape $ (Value): string or null. Caller-owned identifier for this resource in an external
     * system. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "last_loaded_at": string | null;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "last_redeemed_at": string | null;
    /**
     * Shape $ (Value): string. Last four characters of the card's current code. minLength: 4.
     * maxLength: 4.
     */
    "last4": string;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "reserved_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link GiftCardRestriction}. The restrictions that keep the card
     * frozen. unfreeze is supported only when every restriction is merchant_freeze. A
     * funding_dispute with dispute_status lost needs a gift card funding disposition. Shape $[]
     * (Value): {@link GiftCardRestriction}. A restriction on a gift card, either a merchant freeze
     * or a funding dispute, with its reason or dispute details.
     */
    "restrictions": Array<GiftCardRestriction>;
    /** Shape $ (Value): string.  Value enum: "pending", "active", "frozen", "closed". */
    "status": "pending" | "active" | "frozen" | "closed" | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "freeze", "unfreeze", "close". Shape $[] (Value):
     * string. Value enum: "freeze", "unfreeze", "close".
     */
    "supported_actions": Array<"freeze" | "unfreeze" | "close" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
export type GiftCardAdjustmentsCreateInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link AdjustGiftCardBalanceRequestInput}. The request body for: Adjust
     * gift card value.
     */
    "body": InputValue<AdjustGiftCardBalanceRequestInput>;
};
export type GiftCardCashOutsCreateInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CashOutGiftCardRequestInput}. The request body for: Record a
     * cash-out.
     */
    "body": InputValue<CashOutGiftCardRequestInput>;
};
/**
 * Shape $ (Value): {@link GiftCardCustomAmountBounds}. The minimum and maximum amounts a buyer can
 * choose when buying a gift card with a custom amount.
 */
export type GiftCardCustomAmountBounds = {
    /**
     * Shape $ (Value): object. Largest gift card value buyers can choose, in the face value
     * currency. Shape $.amount (Required): integer string. Amount in the currency's smallest unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1. maximum: 200000. Shape $.currency (Required): string.
     * Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "maximum_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     * Shape $ (Value): object. Smallest gift card value buyers can choose, in the face value
     * currency. Shape $.amount (Required): integer string. Amount in the currency's smallest unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1. maximum: 200000. Shape $.currency (Required): string.
     * Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "minimum_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
};
/**
 * Shape $ (Value): {@link GiftCardCustomAmountBoundsRequestRequestInput}. The minimum and maximum
 * amounts a buyer can choose when buying a gift card with a custom amount.
 */
export type GiftCardCustomAmountBoundsRequestRequestInput = {
    /**
     * Shape $ (Value): object. Largest gift card value buyers can choose, in the face value
     * currency. Shape $.amount (Required): integer string. Amount in the currency's smallest unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1. maximum: 200000. Shape $.currency (Required): string.
     * Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "maximum_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}` | bigint;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD";
    };
    /**
     * Shape $ (Value): object. Smallest gift card value buyers can choose, in the face value
     * currency. Shape $.amount (Required): integer string. Amount in the currency's smallest unit,
     * such as cents for USD. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64. minimum: 1. maximum: 200000. Shape $.currency (Required): string.
     * Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "minimum_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}` | bigint;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD";
    };
};
/**
 * Shape $ (Value): {@link GiftCardFundingDisposition}. A merchant decision to honor gift card
 * value after its funding payment lost a dispute.
 */
export type GiftCardFundingDisposition = {
    /** Shape $ (Value): string. When the disposition was created. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. How Flint handles the lost funding. honor_value keeps the affected
     * cards' unspent value spendable and removes the freeze this dispute placed on them. Value
     * enum: "honor_value".
     */
    "disposition": "honor_value" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. The whole disputed payment amount, which can include
     * consideration for other purchases. It is separate from the original gift card consideration
     * and honored face value. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "dispute_amount_money": MoneyValue;
    /** Shape $ (Value): string. The lost dispute this disposition resolves. */
    "dispute_id": string;
    /** Shape $ (Value): string. Stable identifier of the disposition. */
    "gift_card_funding_disposition_id": string;
    /**
     * Shape $ (Value): Array of string. Gift cards whose value this disposition honors, including
     * replacement cards that received value from the disputed funding. Shape $[] (Value): string.
     */
    "gift_card_ids": Array<string>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Unspent value that stays spendable under this
     * disposition, summed across the affected cards, including replacement cards that received
     * value from the disputed funding. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "honored_value_money": MoneyValue;
    /**
     * Shape $ (Value): string. The Idempotency-Key sent with the request that created this
     * disposition.
     */
    "idempotency_key": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. What the buyer paid for the gift card value the
     * disputed payment funded, summed across its funding loads. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "original_gift_card_consideration_money": MoneyValue;
    /** Shape $ (Value): string. The disputed payment that funded the gift card value. */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Part of honored_value_money that pending redemptions
     * held when the disposition was created. It stays reserved for them. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "preserved_reserved_value_money": MoneyValue;
    /** Shape $ (Value): string. Your reason for honoring the value, from the create request. */
    "reason_message": string;
};
/**
 * Shape $ (Value): {@link GiftCardFundingDispositionListResponse}. A page of
 * `GiftCardFundingDisposition` objects.
 */
export type GiftCardFundingDispositionListResponse = {
    /**
     * Shape $ (Value): Array of {@link GiftCardFundingDisposition}. Shape $[] (Value): {@link
     * GiftCardFundingDisposition}. A merchant decision to honor gift card value after its funding
     * payment lost a dispute.
     */
    "data": Array<GiftCardFundingDisposition>;
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
 * Shape $ (Value): {@link GiftCardFundingDispositionResponse}. A response containing
 * `GiftCardFundingDisposition` data.
 */
export type GiftCardFundingDispositionResponse = {
    /**
     * Shape $ (Value): {@link GiftCardFundingDisposition}. A merchant decision to honor gift card
     * value after its funding payment lost a dispute.
     */
    "data": GiftCardFundingDisposition;
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
export type GiftCardFundingDispositionsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateGiftCardFundingDispositionRequestInput}. The request body for:
     * Create a gift card funding disposition.
     */
    "body": InputValue<CreateGiftCardFundingDispositionRequestInput>;
};
export type GiftCardFundingDispositionsGetInput = {
    /** Shape $ (Value): string. */
    "gift_card_funding_disposition_id": InputValue<string>;
};
export type GiftCardFundingDispositionsListInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. maxLength: 255. */
    "dispute_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link GiftCardFundingDispute}. A dispute on the payment that funded a gift
 * card load, with its status and any loss resolution.
 */
export type GiftCardFundingDispute = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "dispute_id": string;
    /** Shape $ (Value): boolean. */
    "requires_resolution": boolean;
    /**
     * Shape $ (Value): {@link GiftCardFundingLossResolution} or null. Shape $.anyOf[1] (Value):
     * {@link GiftCardFundingLossResolution}. How a lost funding dispute was resolved for a gift
     * card load, such as honoring the card's value, with a reason message. Shape $.anyOf[2]
     * (Value): null.
     */
    "resolution": ((GiftCardFundingLossResolution) | (null));
    /** Shape $ (Value): string.  Value enum: "open", "won", "lost". */
    "status": "open" | "won" | "lost" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link GiftCardFundingLossResolution}. How a lost funding dispute was resolved
 * for a gift card load, such as honoring the card's value, with a reason message.
 */
export type GiftCardFundingLossResolution = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string.  Value enum: "honor_value". */
    "disposition": "honor_value" | (string & {});
    /** Shape $ (Value): string. */
    "gift_card_funding_disposition_id": string;
    /** Shape $ (Value): string. */
    "reason_message": string;
};
/**
 * Shape $ (Value): {@link GiftCardFundingSource}. Where the value of a gift card load came from,
 * such as an external payment, a Flint payment, an import, or an adjustment, with your reference
 * for it.
 */
export type GiftCardFundingSource = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /**
     * Shape $ (Value): string. Value enum: "external_payment", "flint_payment",
     * "flint_manual_payment", "import", "adjustment", "gift_card_refund",
     * "gift_card_purchase_refund_recovery", "store_credit".
     */
    "funding_source_type": "external_payment"
        | "flint_payment"
        | "flint_manual_payment"
        | "import"
        | "adjustment"
        | "gift_card_refund"
        | "gift_card_purchase_refund_recovery"
        | "store_credit"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & ((Exclude<GiftCardFundingSourceExternalPayment & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceFlintPayment & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceFlintManualPayment & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceImport & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceAdjustment & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceGiftCardRefund & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceGiftCardPurchaseRefundRecovery & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceStoreCredit & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceAdjustment}. The `adjustment` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceAdjustment = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "adjustment". */
    "funding_source_type": "adjustment" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & ({
    /** Shape $ (Value): any.  Value enum: "adjustment". */
    "funding_source_type"?: unknown;
});
/**
 * Shape $ (Value): {@link GiftCardFundingSourceAdjustmentInput}. The `adjustment` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceAdjustmentInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "adjustment". */
    "funding_source_type": "adjustment";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & ({
    /** Shape $ (Value): any.  Value enum: "adjustment". */
    "funding_source_type"?: ("adjustment") & ("adjustment");
});
/**
 * Shape $ (Value): {@link GiftCardFundingSourceExternalPayment}. The `external_payment` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceExternalPayment = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "external_payment". */
    "funding_source_type": "external_payment" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "external_payment". */
    "funding_source_type"?: unknown;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceExternalPaymentInput}. The `external_payment`
 * variant of `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceExternalPaymentInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "external_payment". */
    "funding_source_type": "external_payment";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "external_payment". */
    "funding_source_type"?: ("external_payment") & ("external_payment");
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
})
    & (({
    "payment_intent_id"?: never;
}) & ({
    "order_id"?: never;
})));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceFlintManualPayment}. The `flint_manual_payment`
 * variant of `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceFlintManualPayment = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "flint_manual_payment". */
    "funding_source_type": "flint_manual_payment" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id": string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "flint_manual_payment". */
    "funding_source_type"?: unknown;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceFlintManualPaymentInput}. The
 * `flint_manual_payment` variant of `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceFlintManualPaymentInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "flint_manual_payment". */
    "funding_source_type": "flint_manual_payment";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "flint_manual_payment". */
    "funding_source_type"?: ("flint_manual_payment") & ("flint_manual_payment");
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id": string;
})
    & ({
    "payment_intent_id"?: never;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceFlintPayment}. The `flint_payment` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceFlintPayment = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "flint_payment". */
    "funding_source_type": "flint_payment" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "flint_payment". */
    "funding_source_type"?: unknown;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceFlintPaymentInput}. The `flint_payment` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceFlintPaymentInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "flint_payment". */
    "funding_source_type": "flint_payment";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "flint_payment". */
    "funding_source_type"?: ("flint_payment") & ("flint_payment");
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
})
    & ({
    "order_manual_payment_id"?: never;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The
 * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceGiftCardPurchaseRefundRecovery = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type": "gift_card_purchase_refund_recovery" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type"?: unknown;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput}. The
 * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type": "gift_card_purchase_refund_recovery";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "gift_card_purchase_refund_recovery". */
    "funding_source_type"?: ("gift_card_purchase_refund_recovery") & ("gift_card_purchase_refund_recovery");
})
    & (({
    "payment_intent_id"?: never;
}) & ({
    "order_manual_payment_id"?: never;
})));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceGiftCardRefund = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "gift_card_refund". */
    "funding_source_type": "gift_card_refund" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "gift_card_refund". */
    "funding_source_type"?: unknown;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceGiftCardRefundInput}. The `gift_card_refund`
 * variant of `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceGiftCardRefundInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "gift_card_refund". */
    "funding_source_type": "gift_card_refund";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "gift_card_refund". */
    "funding_source_type"?: ("gift_card_refund") & ("gift_card_refund");
})
    & ({
    "payment_intent_id"?: never;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceImport}. The `import` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceImport = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "import". */
    "funding_source_type": "import" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "import". */
    "funding_source_type"?: unknown;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceImportInput}. The `import` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceImportInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "import". */
    "funding_source_type": "import";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "import". */
    "funding_source_type"?: ("import") & ("import");
})
    & (({
    "payment_intent_id"?: never;
}) & ({
    "order_id"?: never;
})));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceInput}. Where the value of a gift card load came
 * from, such as an external payment, a Flint payment, an import, or an adjustment, with your
 * reference for it.
 */
export type GiftCardFundingSourceInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /**
     * Shape $ (Value): string. Value enum: "external_payment", "flint_payment",
     * "flint_manual_payment", "import", "adjustment", "gift_card_refund",
     * "gift_card_purchase_refund_recovery", "store_credit".
     */
    "funding_source_type": "external_payment"
        | "flint_payment"
        | "flint_manual_payment"
        | "import"
        | "adjustment"
        | "gift_card_refund"
        | "gift_card_purchase_refund_recovery"
        | "store_credit";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & ((Exclude<GiftCardFundingSourceExternalPaymentInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceFlintPaymentInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceFlintManualPaymentInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceImportInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceAdjustmentInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceGiftCardRefundInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput & object, readonly unknown[]>)
    | (Exclude<GiftCardFundingSourceStoreCreditInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceStoreCredit}. The `store_credit` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceStoreCredit = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "store_credit". */
    "funding_source_type": "store_credit" | (string & {});
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: string;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id": string;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "store_credit". */
    "funding_source_type"?: unknown;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id": string;
}));
/**
 * Shape $ (Value): {@link GiftCardFundingSourceStoreCreditInput}. The `store_credit` variant of
 * `GiftCardFundingSource`.
 */
export type GiftCardFundingSourceStoreCreditInput = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Your reference for the payment or import record that funded this
     * value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string;
    /** Shape $ (Value): string.  Value enum: "store_credit". */
    "funding_source_type": "store_credit";
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_manual_payment_id"?: never;
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
    /**
     * Shape $ (Value): string. Refund that issued this value. Present only when
     * funding_source_type is store_credit. minLength: 1.
     */
    "refund_id"?: never;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "store_credit". */
    "funding_source_type"?: ("store_credit") & ("store_credit");
    /**
     * Shape $ (Value): string. The original payment for flint_payment or store_credit value. For
     * standalone paid funding, use a captured payment intent without an order_id. Order-linked
     * payments fund purchased cards or store credit through their order. minLength: 1. maxLength:
     * 255.
     */
    "payment_intent_id": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "order_id": string;
})
    & ({
    "order_manual_payment_id"?: never;
}));
/** Shape $ (Value): {@link GiftCardListResponse}. A page of `GiftCard` objects. */
export type GiftCardListResponse = {
    /**
     * Shape $ (Value): Array of {@link GiftCard}. Shape $[] (Value): {@link GiftCard}.
     * Merchant-issued purchased gift card. Posted balance includes reserved value; available value
     * is balance minus reservations. Frozen value remains part of outstanding liability. Gift
     * cards are independent resources and cannot be transferred across merchants or currencies.
     */
    "data": Array<GiftCard>;
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
 * Shape $ (Value): {@link GiftCardLoad}. Independent funding resource. Value and consideration are
 * separate. External funding and import provenance are merchant-attested; no payment is collected
 * by recording them. Replacement refund lots retain original funding provenance and do not
 * represent new paid funding.
 */
export type GiftCardLoad = {
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Shape $.anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape
     * $.anyOf[2] (Value): null.
     */
    "consideration_money": ((MoneyValue) | (null));
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): Array of {@link GiftCardFundingDispute}. Restrictions tied to original
     * funding, including value restored to replacement cards. A win clears only its own
     * restriction. A loss keeps spending restricted until you create a gift card funding
     * disposition. Shape $[] (Value): {@link GiftCardFundingDispute}. A dispute on the payment
     * that funded a gift card load, with its status and any loss resolution.
     */
    "funding_disputes": Array<GiftCardFundingDispute>;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string. */
    "gift_card_load_id": string;
    /**
     * Shape $ (Value): string or null. Your Idempotency-Key for the command that created this
     * record. null when Flint created it or no key was sent.
     */
    "idempotency_key": string | null;
    /**
     * Shape $ (Value): Array of {@link GiftCardPurchaseRefundValueHold}. Pending original cash
     * refunds holding unspent value on this descendant funding lot. Unknown provider outcomes
     * retain these holds. Shape $[] (Value): {@link GiftCardPurchaseRefundValueHold}. Gift card
     * value held back by a purchase refund, with the refund, the root gift card and load, and the
     * amount held.
     */
    "purchase_refund_value_holds"?: Array<GiftCardPurchaseRefundValueHold>;
    /**
     * Shape $ (Value): Array of {@link GiftCardPurchaseRefundAllocation}. Cash refunds and manual
     * payment reversals against this original funding load. Pending refunds reserve their value;
     * confirmed success removes it, and confirmed failure releases the hold. Shape $[] (Value):
     * {@link GiftCardPurchaseRefundAllocation}. An entry in a gift card load's purchase refunds.
     */
    "purchase_refunds": Array<GiftCardPurchaseRefundAllocation>;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRestoration}. Links a gift card load to the original
     * card and load it restores value to after a purchase refund, for one unit of an order line
     * item.
     */
    "purchase_restoration"?: GiftCardPurchaseRestoration;
    /**
     * Shape $ (Value): {@link GiftCardRefundProvenance}. Traces a gift card load made by a refund
     * back to its original funding source, root gift card and load, and source refund.
     */
    "refund_provenance"?: GiftCardRefundProvenance;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refund_transferred_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "remaining_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "reversed_money": MoneyValue;
    /**
     * Shape $ (Value): {@link GiftCardFundingSource}. Where the value of a gift card load came
     * from, such as an external payment, a Flint payment, an import, or an adjustment, with your
     * reference for it.
     */
    "source": GiftCardFundingSource;
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time. */
    "source_created_at": string | null;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "value_money": MoneyValue;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link GiftCardLoadListResponse}. A page of `GiftCardLoad` objects. */
export type GiftCardLoadListResponse = {
    /**
     * Shape $ (Value): Array of {@link GiftCardLoad}. Shape $[] (Value): {@link GiftCardLoad}.
     * Independent funding resource. Value and consideration are separate. External funding and
     * import provenance are merchant-attested; no payment is collected by recording them.
     * Replacement refund lots retain original funding provenance and do not represent new paid
     * funding.
     */
    "data": Array<GiftCardLoad>;
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
/** Shape $ (Value): {@link GiftCardLoadResponse}. A response containing `GiftCardLoad` data. */
export type GiftCardLoadResponse = {
    /**
     * Shape $ (Value): {@link GiftCardLoad}. Independent funding resource. Value and consideration
     * are separate. External funding and import provenance are merchant-attested; no payment is
     * collected by recording them. Replacement refund lots retain original funding provenance and
     * do not represent new paid funding.
     */
    "data": GiftCardLoad;
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
export type GiftCardLoadsCreateInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateGiftCardLoadRequestInput}. The request body for: Load a gift
     * card.
     */
    "body": InputValue<CreateGiftCardLoadRequestInput>;
};
export type GiftCardLoadsGetInput = {
    /** Shape $ (Value): string. */
    "gift_card_load_id": InputValue<string>;
};
export type GiftCardLoadsListInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "adjustment", "external_payment",
     * "flint_manual_payment", "flint_payment", "gift_card_purchase_refund_recovery",
     * "gift_card_refund", "import", "store_credit". Shape $[] (Value): string. maxLength: 255.
     * Value enum: "adjustment", "external_payment", "flint_manual_payment", "flint_payment",
     * "gift_card_purchase_refund_recovery", "gift_card_refund", "import", "store_credit".
     */
    "funding_source_type"?: InputValue<Array<"adjustment"
        | "external_payment"
        | "flint_manual_payment"
        | "flint_payment"
        | "gift_card_purchase_refund_recovery"
        | "gift_card_refund"
        | "import"
        | "store_credit">>;
    /** Shape $ (Value): string. maxLength: 255. */
    "gift_card_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "source_external_reference_id"?: InputValue<string>;
};
/** Shape $ (Value): {@link GiftCardNotification}. A message sent to a gift card recipient. */
export type GiftCardNotification = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link GiftCardNotificationDelivery}. Included on notification retrieval.
     * Contains the most recent sending attempts and delivery events, newest first. A failed
     * attempt describes the send call; use notification.status to determine whether acceptance
     * remains unconfirmed. Delivery history of a gift card notification email: its send attempts
     * and delivery events, and whether more of each exist.
     */
    "delivery"?: GiftCardNotificationDelivery;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string. */
    "gift_card_notification_id": string;
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRecipient}. Who receives a gift card notification:
     * their `email`, optional `name` and `message`, and an optional `send_at` time.
     */
    "recipient": GiftCardPurchaseRecipient;
    /** Shape $ (Value): string. */
    "resend_of_notification_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "sent_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "scheduled", "queued", "sending", "sent", "failed",
     * "unconfirmed", "bounced", "canceled".
     */
    "status": "scheduled"
        | "queued"
        | "sending"
        | "sent"
        | "failed"
        | "unconfirmed"
        | "bounced"
        | "canceled"
        | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link GiftCardNotificationDelivery}. Delivery history of a gift card
 * notification email: its send attempts and delivery events, and whether more of each exist.
 */
export type GiftCardNotificationDelivery = {
    /**
     * Shape $ (Value): Array of {@link GiftCardNotificationDeliveryAttempt}. maxItems: 20. Shape
     * $[] (Value): {@link GiftCardNotificationDeliveryAttempt}. One attempt to send a gift card
     * notification email, with its attempt number, status, and start and completion times.
     */
    "attempts": Array<GiftCardNotificationDeliveryAttempt>;
    /**
     * Shape $ (Value): Array of {@link GiftCardNotificationDeliveryEvent}. maxItems: 50. Shape $[]
     * (Value): {@link GiftCardNotificationDeliveryEvent}. A delivery event for a gift card
     * notification email, such as accepted, delivered, bounced, or dropped, with when it occurred
     * and was received.
     */
    "events": Array<GiftCardNotificationDeliveryEvent>;
    /** Shape $ (Value): boolean. */
    "has_more_attempts": boolean;
    /** Shape $ (Value): boolean. */
    "has_more_events": boolean;
};
/**
 * Shape $ (Value): {@link GiftCardNotificationDeliveryAttempt}. One attempt to send a gift card
 * notification email, with its attempt number, status, and start and completion times.
 */
export type GiftCardNotificationDeliveryAttempt = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "attempt_number": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** Shape $ (Value): string. */
    "delivery_attempt_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at": string;
    /** Shape $ (Value): string.  Value enum: "started", "sent", "failed", "abandoned". */
    "status": "started" | "sent" | "failed" | "abandoned" | (string & {});
};
/**
 * Shape $ (Value): {@link GiftCardNotificationDeliveryEvent}. A delivery event for a gift card
 * notification email, such as accepted, delivered, bounced, or dropped, with when it occurred and
 * was received.
 */
export type GiftCardNotificationDeliveryEvent = {
    /** Shape $ (Value): string. */
    "delivery_attempt_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "received_at": string;
    /**
     * Shape $ (Value): string. accepted means Flint's email service accepted the message for
     * delivery; delivered means it reached the recipient's mail server; bounced means delivery
     * failed; dropped means the message was not sent. Value enum: "accepted", "delivered",
     * "bounced", "dropped".
     */
    "type": "accepted" | "delivered" | "bounced" | "dropped" | (string & {});
};
/**
 * Shape $ (Value): {@link GiftCardNotificationListResponse}. A page of `GiftCardNotification`
 * objects.
 */
export type GiftCardNotificationListResponse = {
    /**
     * Shape $ (Value): Array of {@link GiftCardNotification}. Shape $[] (Value): {@link
     * GiftCardNotification}. A message sent to a gift card recipient.
     */
    "data": Array<GiftCardNotification>;
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
 * Shape $ (Value): {@link GiftCardNotificationRecipientInput}. Who receives a gift card
 * notification: their `email`, optional `name` and `message`, and an optional `send_at` time.
 */
export type GiftCardNotificationRecipientInput = {
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 254. */
    "email": string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 200. */
    "message"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "name"?: string;
    /**
     * Shape $ (Value): string. Optional whole-second send time between now and 90 days from now.
     * Format: date-time. minLength: 1.
     */
    "send_at"?: string | globalThis.Date;
};
/**
 * Shape $ (Value): {@link GiftCardNotificationResponse}. A response containing
 * `GiftCardNotification` data.
 */
export type GiftCardNotificationResponse = {
    /** Shape $ (Value): {@link GiftCardNotification}. A message sent to a gift card recipient. */
    "data": GiftCardNotification;
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
export type GiftCardNotificationsCancelInput = {
    /** Shape $ (Value): string. */
    "gift_card_notification_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelGiftCardNotificationRequestInput}. The request body for:
     * Cancel a gift card notification.
     */
    "body"?: InputValue<CancelGiftCardNotificationRequestInput>;
};
export type GiftCardNotificationsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateGiftCardNotificationRequestInput}. The request body for: Send
     * a gift card notification.
     */
    "body": InputValue<CreateGiftCardNotificationRequestInput>;
};
export type GiftCardNotificationsGetInput = {
    /** Shape $ (Value): string. */
    "gift_card_notification_id": InputValue<string>;
};
export type GiftCardNotificationsListInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. maxLength: 255. */
    "gift_card_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "bounced", "canceled", "failed",
     * "queued", "scheduled", "sending", "sent", "unconfirmed". Shape $[] (Value): string.
     * maxLength: 255. Value enum: "bounced", "canceled", "failed", "queued", "scheduled",
     * "sending", "sent", "unconfirmed".
     */
    "status"?: InputValue<Array<"bounced" | "canceled" | "failed" | "queued" | "scheduled" | "sending" | "sent" | "unconfirmed">>;
};
/**
 * Shape $ (Value): {@link GiftCardProductConfiguration}. Gift card settings on a product variant:
 * its `face_value_money`, price mode (face value or discounted), and bounds for custom amounts.
 */
export type GiftCardProductConfiguration = {
    /**
     * Shape $ (Value): {@link GiftCardCustomAmountBounds}. Minimum and maximum gift card values
     * buyers can choose. Omit for a fixed denomination. The minimum and maximum amounts a buyer
     * can choose when buying a gift card with a custom amount.
     */
    "custom_amount_bounds"?: GiftCardCustomAmountBounds;
    /**
     * Shape $ (Value): object. Gift card value issued for one unit of this variant, in the same
     * currency as its unit price. Shape $.amount (Required): integer string. Amount in the
     * currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64. minimum: 1. maximum: 200000. Shape $.currency
     * (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "face_value_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}`;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD" | (string & {});
    };
    /**
     * Shape $ (Value): string. Whether the gift card is sold at its face value or at a discounted
     * price. Value enum: "face_value", "discounted".
     */
    "price_mode": "face_value" | "discounted" | (string & {});
};
/**
 * Shape $ (Value): {@link GiftCardProductConfigurationRequestRequestInput}. Gift card settings on
 * a product variant: its `face_value_money`, price mode (face value or discounted), and bounds for
 * custom amounts.
 */
export type GiftCardProductConfigurationRequestRequestInput = {
    /**
     * Shape $ (Value): {@link GiftCardCustomAmountBoundsRequestRequestInput}. Minimum and maximum
     * gift card values buyers can choose. Omit for a fixed denomination. The minimum and maximum
     * amounts a buyer can choose when buying a gift card with a custom amount.
     */
    "custom_amount_bounds"?: GiftCardCustomAmountBoundsRequestRequestInput;
    /**
     * Shape $ (Value): object. Gift card value issued for one unit of this variant, in the same
     * currency as its unit price. Shape $.amount (Required): integer string. Amount in the
     * currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not
     * a floating-point number. Format: int64. minimum: 1. maximum: 200000. Shape $.currency
     * (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "face_value_money": {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}` | bigint;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD";
    };
    /**
     * Shape $ (Value): string. Whether the gift card is sold at its face value or at a discounted
     * price. Value enum: "face_value", "discounted".
     */
    "price_mode": "face_value" | "discounted";
};
/**
 * Shape $ (Value): {@link GiftCardPurchaseDetailsRequestInput}. Gift card details you supply for
 * an order line item: the `face_value_money` and the `recipient` who receives the card.
 */
export type GiftCardPurchaseDetailsRequestInput = {
    /**
     * Shape $ (Value): object. Shape $.amount (Required): integer string. Amount in the currency's
     * smallest unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. maximum: 200000. Shape $.currency
     * (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     */
    "face_value_money"?: {
        /**
         * Shape $ (Value): integer string. Amount in the currency's smallest unit, such as cents
         * for USD. Use an integer string (decimal digits), not a floating-point number. Format:
         * int64. minimum: 1. maximum: 200000.
         */
        "amount": `${bigint}` | bigint;
        /** Shape $ (Value): string. Three-letter ISO 4217 currency code. Value enum: "USD". */
        "currency": "USD";
    };
    /**
     * Shape $ (Value): {@link GiftCardPurchaseRecipientRequestInput}. Recipient of a gift card
     * purchase that you supply: `email`, optional `name` and `message`, and an optional `send_at`
     * time.
     */
    "recipient"?: GiftCardPurchaseRecipientRequestInput;
};
