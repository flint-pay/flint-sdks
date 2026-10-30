import type { GiftCard, GiftCardFundingSource, GiftCardFundingSourceInput } from './types-23.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-34.js';
import type { InputValue } from '../runtime.js';
import type { AdjustGiftCardBalanceRequestInput } from './types-0.js';
import type { CashOutGiftCardRequestInput } from './types-4.js';
import type {
    CreateGiftCardLoadRequestInput,
    CreateGiftCardRequestInput,
    CreateInventoryAdjustmentRequestInput,
    CreateInventoryAllocationPolicyRequestInput
} from './types-8.js';
import type { LookupGiftCardRequestInput } from './types-33.js';
import type { RotateGiftCardCodeRequestInput } from './types-52.js';
import type {
    TransitionGiftCardRequestInput,
    UpdateGiftCardRequestInput,
    UpdateInventoryAllocationPolicyRequestInput
} from './types-58.js';
import type { ResponseMeta } from './types-48.js';
import type { MoneyValue, MoneyValueInput, ModifierRequest, ModifierRequestInput } from './types-35.js';
import type { TextModifierConfigRequest, TextModifierConfigRequestInput } from './types-57.js';
import type { InventorySourceSystem } from './types-28.js';
import type { InventoryLevel } from './types-26.js';
/**
 * The `gift_card.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type GiftCardUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "data"?: {
        /**
         * Merchant-issued purchased gift card. Posted balance includes reserved value; available
         * value is balance minus reservations. Frozen value remains part of outstanding liability.
         * Gift cards are independent resources and cannot be transferred across merchants or
         * currencies.
         */
        "object": GiftCard;
    };
    /** Value enum: "gift_card.updated". */
    "event_type"?: "gift_card.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `gift_card.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type GiftCardUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "data"?: {
        /**
         * Merchant-issued purchased gift card. Posted balance includes reserved value; available
         * value is balance minus reservations. Frozen value remains part of outstanding liability.
         * Gift cards are independent resources and cannot be transferred across merchants or
         * currencies.
         */
        "object": GiftCard;
    };
    /** Value enum: "gift_card.updated". */
    "event_type"?: "gift_card.updated";
});
/** Optional version fence for the redemption being captured or canceled. */
export type GiftCardVersionRequest = {
    /**
     * The redemption version last read. Capture or cancel changes the redemption only when its
     * current version matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** Optional version fence for the redemption being captured or canceled. */
export type GiftCardVersionRequestInput = GiftCardVersionRequest;
export type GiftCardsAdjustBalanceParams = (InputValue<AdjustGiftCardBalanceRequestInput>);
export type GiftCardsCashOutParams = (InputValue<CashOutGiftCardRequestInput>);
export type GiftCardsCreateLoadParams = (InputValue<CreateGiftCardLoadRequestInput>);
export type GiftCardsCreateParams = (InputValue<CreateGiftCardRequestInput>);
export type GiftCardsGetParams = {};
export type GiftCardsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact, case-sensitive filter on the customer stored on the gift card. An unknown customer
     * returns an empty page. pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Exact, case-sensitive filter. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "closed", "frozen", "pending". Value enum: "active", "closed", "frozen", "pending". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "active", "closed", "frozen", "pending".
     * anyOf[1][] (Value): string. maxLength: 255. Value enum: "active", "closed", "frozen",
     * "pending". anyOf[2] (Value): string. maxLength: 255. Value enum: "active", "closed",
     * "frozen", "pending".
     */
    "status"?: InputValue<("active" | "closed" | "frozen" | "pending")
        | readonly ("active" | "closed" | "frozen" | "pending")[]>;
};
export type GiftCardsLookupParams = (InputValue<LookupGiftCardRequestInput>);
export type GiftCardsRotateCodeParams = (InputValue<RotateGiftCardCodeRequestInput>);
export type GiftCardsTransitionParams = (TransitionGiftCardRequestInput);
export type GiftCardsUpdateParams = (InputValue<UpdateGiftCardRequestInput>);
/** The request body for: Grant organization membership. */
export type GrantOrganizationMembershipRequest = {
    /** Value enum: "admin", "operator", "viewer". */
    "role": "admin" | "operator" | "viewer" | (string & {});
    /** minLength: 1. */
    "user_id": string;
};
/** The request body for: Grant organization membership. */
export type GrantOrganizationMembershipRequestInput = {
    /** Value enum: "admin", "operator", "viewer". */
    "role": "admin" | "operator" | "viewer";
    /** minLength: 1. */
    "user_id": string;
};
/**
 * Result of linking a guest's purchases to a customer, with the customer, the email, and the
 * number of orders linked.
 */
export type GuestPurchaseLink = {
    "customer_id": string;
    "email": string;
    /** RFC3339 timestamp. Format: date-time. */
    "linked_at": string;
    /** Format: int64. */
    "linked_order_count": number;
};
/** A response containing `GuestPurchaseLink` data. */
export type GuestPurchaseLinkResponse = {
    /**
     * Result of linking a guest's purchases to a customer, with the customer, the email, and the
     * number of orders linked.
     */
    "data": GuestPurchaseLink;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** An image with its `url`, `width`, and `height`, and optional `alt` text. */
export type Image = {
    /** Alternative text describing the image for accessibility. */
    "alt"?: string;
    /** Image height in pixels, when known. Format: int32. */
    "height": number;
    /** URL of the image. */
    "url": string;
    /** Image width in pixels, when known. Format: int32. */
    "width": number;
};
/** An image attached to a resource, with its display properties and attachment metadata. */
export type ImageAttachment = {
    /** Alternative text describing the image for accessibility. */
    "alt"?: string;
    /** Identifier of the file attached as this image. */
    "file_id"?: string;
    /** Image height in pixels, when known. Format: int32. */
    "height": number;
    /**
     * Caller-owned reference identifying this attachment within its gallery. minLength: 1.
     * maxLength: 255.
     */
    "source_reference"?: string;
    /** URL of the image. */
    "url": string;
    /** Image width in pixels, when known. Format: int32. */
    "width": number;
};
/** The `File` variant of `ImageInput`. */
export type ImageInputFile = ({
    /** Alternative text describing the image for accessibility. minLength: 1. maxLength: 512. */
    "alt"?: string;
    /**
     * The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or
     * file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id": string;
    /**
     * An opaque reference for this attachment, unique within its gallery. Whitespace and case are
     * preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * A public image URL for Flint to fetch, or an untransformed canonical image.url returned by
     * Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without
     * another fetch. Flint doesn't download a source_url again while the image it produced is
     * still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
});
/** The `File` variant of `ImageInput`. */
export type ImageInputFileInput = ({
    /** Alternative text describing the image for accessibility. minLength: 1. maxLength: 512. */
    "alt"?: string;
    /**
     * The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or
     * file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id": string;
    /**
     * An opaque reference for this attachment, unique within its gallery. Whitespace and case are
     * preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * A public image URL for Flint to fetch, or an untransformed canonical image.url returned by
     * Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without
     * another fetch. Flint doesn't download a source_url again while the image it produced is
     * still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
})
    & (({
    "source_url"?: never;
}));
/** The `Source URL` variant of `ImageInput`. */
export type ImageInputSourceURL = ({
    /** Alternative text describing the image for accessibility. minLength: 1. maxLength: 512. */
    "alt"?: string;
    /**
     * The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or
     * file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id"?: string;
    /**
     * An opaque reference for this attachment, unique within its gallery. Whitespace and case are
     * preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * A public image URL for Flint to fetch, or an untransformed canonical image.url returned by
     * Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without
     * another fetch. Flint doesn't download a source_url again while the image it produced is
     * still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url": string;
});
/** The `Source URL` variant of `ImageInput`. */
export type ImageInputSourceURLInput = ({
    /** Alternative text describing the image for accessibility. minLength: 1. maxLength: 512. */
    "alt"?: string;
    /**
     * The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or
     * file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id"?: string;
    /**
     * An opaque reference for this attachment, unique within its gallery. Whitespace and case are
     * preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * A public image URL for Flint to fetch, or an untransformed canonical image.url returned by
     * Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without
     * another fetch. Flint doesn't download a source_url again while the image it produced is
     * still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url": string;
})
    & (({
    "file_id"?: never;
}));
/** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
export type ImageReferenceRequest = {
    /** Alternative text describing the image for accessibility. minLength: 1. */
    "alt"?: string;
    /** URL of the image. minLength: 1. */
    "url": string;
};
/** A reference to an image by `url`, with optional `alt` text, used on an order line item. */
export type ImageReferenceRequestInput = ImageReferenceRequest;
/** An image you supply by `source_url`, with optional `alt` text and external reference. */
export type ImageRequest = ({
    /** Alternative text describing the image for accessibility. minLength: 1. maxLength: 512. */
    "alt"?: string;
    /**
     * The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or
     * file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id"?: string;
    /**
     * An opaque reference for this attachment, unique within its gallery. Whitespace and case are
     * preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * A public image URL for Flint to fetch, or an untransformed canonical image.url returned by
     * Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without
     * another fetch. Flint doesn't download a source_url again while the image it produced is
     * still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
})
    & ((Exclude<ImageInputSourceURL & object, readonly unknown[]>)
    | (Exclude<ImageInputFile & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** An image you supply by `source_url`, with optional `alt` text and external reference. */
export type ImageRequestInput = ({
    /** Alternative text describing the image for accessibility. minLength: 1. maxLength: 512. */
    "alt"?: string;
    /**
     * The ID of a ready file uploaded with POST /v1/files. Send exactly one of source_url or
     * file_id. minLength: 1. pattern: ^file_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "file_id"?: string;
    /**
     * An opaque reference for this attachment, unique within its gallery. Whitespace and case are
     * preserved. minLength: 1. maxLength: 255.
     */
    "source_reference"?: string;
    /**
     * A public image URL for Flint to fetch, or an untransformed canonical image.url returned by
     * Flint. Send exactly one of source_url or file_id. Canonical Flint URLs attach without
     * another fetch. Flint doesn't download a source_url again while the image it produced is
     * still in this field. minLength: 1. maxLength: 8192.
     */
    "source_url"?: string;
})
    & ((Exclude<ImageInputSourceURLInput & object, readonly unknown[]>)
    | (Exclude<ImageInputFileInput & object, readonly unknown[]>));
/**
 * The initial funding for a new gift card: the `source` of the value, the `value_money`, and
 * optional consideration and source time.
 */
export type InitialGiftCardFunding = ({
    /**
     *  anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. anyOf[1].amount (Required): integer string. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0. Amount in
     * the currency's minor unit, such as cents for USD. Use an integer string (decimal digits),
     * not a floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Required):
     * string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>))
        | (null)
        | (unknown));
    /**
     * Where the value of a gift card load came from, such as an external payment, a Flint payment,
     * an import, or an adjustment, with your reference for it. funding_source_type (Required):
     * string. Value enum: "external_payment", "flint_payment", "import". customer_id (Optional):
     * string. minLength: 1. maxLength: 255. external_reference_id (Required): string. Your
     * reference for the payment or import record that funded this value, such as a POS sale ID.
     * Required; 1 to 255 characters. minLength: 1. maxLength: 255. order_id (Optional): string.
     * minLength: 1. maxLength: 255. order_manual_payment_id (Optional): string. minLength: 1.
     * maxLength: 255. payment_intent_id (Optional): string. The original payment for flint_payment
     * or store_credit value. For standalone paid funding, use a captured payment intent without an
     * order_id. Order-linked payments fund purchased cards or store credit through their order.
     * minLength: 1. maxLength: 255. refund_id (Optional): string. Refund that issued this value.
     * Present only when funding_source_type is store_credit. minLength: 1. oneOf[1] (Value):
     * {@link GiftCardFundingSourceExternalPayment}. The `external_payment` variant of
     * `GiftCardFundingSource`. oneOf[2] (Value): {@link GiftCardFundingSourceFlintPayment}. The
     * `flint_payment` variant of `GiftCardFundingSource`. oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPayment}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. oneOf[4] (Value): {@link GiftCardFundingSourceImport}. The `import`
     * variant of `GiftCardFundingSource`. oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustment}. The `adjustment` variant of `GiftCardFundingSource`.
     * oneOf[6] (Value): {@link GiftCardFundingSourceGiftCardRefund}. The `gift_card_refund`
     * variant of `GiftCardFundingSource`. oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecovery}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value):
     * {@link GiftCardFundingSourceStoreCredit}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: unknown;
    })
        & (Exclude<GiftCardFundingSource & object, readonly unknown[]>);
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "source_created_at"?: string;
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
});
/**
 * The initial funding for a new gift card: the `source` of the value, the `value_money`, and
 * optional consideration and source time.
 */
export type InitialGiftCardFundingInput = ({
    /**
     *  anyOf[1] (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. anyOf[1].amount (Required): integer string. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0. anyOf[1].currency
     * (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     */
    "consideration_money"?: ((({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 0.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>))
        | (null));
    /**
     * Where the value of a gift card load came from, such as an external payment, a Flint payment,
     * an import, or an adjustment, with your reference for it. funding_source_type (Required):
     * string. Value enum: "external_payment", "flint_payment", "import". customer_id (Optional):
     * string. minLength: 1. maxLength: 255. external_reference_id (Required): string. Your
     * reference for the payment or import record that funded this value, such as a POS sale ID.
     * Required; 1 to 255 characters. minLength: 1. maxLength: 255. order_id (Optional): string.
     * minLength: 1. maxLength: 255. payment_intent_id (Optional): string. The original payment for
     * flint_payment or store_credit value. For standalone paid funding, use a captured payment
     * intent without an order_id. Order-linked payments fund purchased cards or store credit
     * through their order. minLength: 1. maxLength: 255. oneOf[1] (Value): {@link
     * GiftCardFundingSourceExternalPaymentInput}. The `external_payment` variant of
     * `GiftCardFundingSource`. oneOf[2] (Value): {@link GiftCardFundingSourceFlintPaymentInput}.
     * The `flint_payment` variant of `GiftCardFundingSource`. oneOf[3] (Value): {@link
     * GiftCardFundingSourceFlintManualPaymentInput}. The `flint_manual_payment` variant of
     * `GiftCardFundingSource`. oneOf[4] (Value): {@link GiftCardFundingSourceImportInput}. The
     * `import` variant of `GiftCardFundingSource`. oneOf[5] (Value): {@link
     * GiftCardFundingSourceAdjustmentInput}. The `adjustment` variant of `GiftCardFundingSource`.
     * oneOf[6] (Value): {@link GiftCardFundingSourceGiftCardRefundInput}. The `gift_card_refund`
     * variant of `GiftCardFundingSource`. oneOf[7] (Value): {@link
     * GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput}. The
     * `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value):
     * {@link GiftCardFundingSourceStoreCreditInput}. The `store_credit` variant of
     * `GiftCardFundingSource`.
     */
    "source": ({
        /** Value enum: "external_payment", "flint_payment", "import". */
        "funding_source_type"?: "external_payment" | "flint_payment" | "import";
    })
        & (Exclude<GiftCardFundingSourceInput & object, readonly unknown[]>)
        & ({
        "order_manual_payment_id"?: never;
    });
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "source_created_at"?: string | globalThis.Date;
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "value_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}` | bigint;
    })
        & (Exclude<MoneyValueInput & object, readonly unknown[]>);
});
/**
 * A modifier group defined inline when setting up a modifier set, with its name, rules for how
 * many options can be selected, and its modifiers.
 */
export type InlineModifierGroupRequest = {
    /** Whether buyers can select more than one unit of a list modifier. Default: false. */
    "allow_quantities"?: boolean;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
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
     * return it. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Whether buyers choose from a list of modifiers or enter text. On create, inferred as text
     * when text configuration is supplied, otherwise list. Value enum: "list", "text".
     */
    "modifier_group_type"?: "list" | "text" | (string & {});
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. [] (Value): {@link ModifierRequest}.
     * A modifier you supply when creating or updating a modifier group, such as an add-on with a
     * price change.
     */
    "modifiers"?: Array<ModifierRequest>;
    /** Name of the modifier group shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. Settings for a text modifier group when creating or updating one:
     * required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequest;
};
/**
 * A modifier group defined inline when setting up a modifier set, with its name, rules for how
 * many options can be selected, and its modifiers.
 */
export type InlineModifierGroupRequestInput = {
    /** Whether buyers can select more than one unit of a list modifier. Default: false. */
    "allow_quantities"?: boolean;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
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
     * return it. minLength: 1.
     */
    "modifier_group_id"?: string;
    /**
     * Whether buyers choose from a list of modifiers or enter text. On create, inferred as text
     * when text configuration is supplied, otherwise list. Value enum: "list", "text".
     */
    "modifier_group_type"?: "list" | "text";
    /**
     * Choices in a list group. Only active modifiers whose set override's available is not false
     * are offered to buyers. Text groups do not have choices. [] (Value): {@link
     * ModifierRequestInput}. A modifier you supply when creating or updating a modifier group,
     * such as an add-on with a price change.
     */
    "modifiers"?: Array<ModifierRequestInput>;
    /** Name of the modifier group shown to buyers. minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Whether selections from this group appear in fulfillment details unless overridden for a
     * modifier set.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Whether selections from this group appear on buyer receipts unless overridden for a modifier
     * set.
     */
    "show_on_receipt"?: boolean;
    /**
     * Lifecycle status of the modifier group. Only active groups can be offered to buyers;
     * archived groups remain readable and cannot be edited. Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * Text entry rules for a text group. Use text.required to require a value; list groups use
     * min_selected instead. Settings for a text modifier group when creating or updating one:
     * required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequestInput;
};
/**
 * Says that an inventory reservation needs action, with the `reason` and the reservation lines
 * affected.
 */
export type InventoryActionRequired = {
    /**  [] (Value): string. */
    "inventory_reservation_line_ids": Array<string>;
    /** Value enum: "inventory_shortage", "hold_expired", "payment_pending", "other". */
    "reason": "inventory_shortage" | "hold_expired" | "payment_pending" | "other" | (string & {});
};
/** A recorded stock change with its reason and the quantity changes Flint computed. */
export type InventoryAdjustment = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    "inventory_adjustment_id": string;
    /**
     *  [] (Value): {@link InventoryAdjustmentLine}. One line of an inventory adjustment, with the
     * item, Location, movement written, and the change in on-hand and each non-sellable quantity.
     */
    "lines": Array<InventoryAdjustmentLine>;
    "note"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Value enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted",
     * "correction".
     */
    "reason": "received"
        | "returned"
        | "sold"
        | "theft"
        | "loss"
        | "condition_changed"
        | "counted"
        | "correction"
        | (string & {});
    /**
     *  anyOf[1] (Value): {@link InventorySourceSystem}. The system an inventory event came from,
     * such as manual entry, a point of sale, a warehouse system, or Flint, with your source
     * identifier when it applies. anyOf[2] (Value): null.
     */
    "source_system": ((InventorySourceSystem) | (null));
};
/**
 * One line of an inventory condition change: moves a `quantity` of an item at a Location from one
 * condition to another.
 */
export type InventoryAdjustmentConditionChangeLineRequest = ({
    /**
     * Condition the units leave. Defaults to `sellable`. Default: "sellable". Value enum:
     * "sellable", "quality_control", "damaged", "quarantined".
     */
    "from_condition"?: "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
    /** minLength: 1. */
    "inventory_item_id": string;
    /** minLength: 1. */
    "location_id": string;
    /**
     * Units this line records. Must be at least 1. Whole-number quantity; fractional quantities
     * are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /**
     * Condition the units move to. Must differ from `from_condition`. Value enum: "sellable",
     * "quality_control", "damaged", "quarantined".
     */
    "to_condition": "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
});
/**
 * One line of an inventory condition change: moves a `quantity` of an item at a Location from one
 * condition to another.
 */
export type InventoryAdjustmentConditionChangeLineRequestInput = ({
    /**
     * Condition the units leave. Defaults to `sellable`. Default: "sellable". Value enum:
     * "sellable", "quality_control", "damaged", "quarantined".
     */
    "from_condition"?: "sellable" | "quality_control" | "damaged" | "quarantined";
    /** minLength: 1. */
    "inventory_item_id": string;
    /** minLength: 1. */
    "location_id": string;
    /**
     * Units this line records. Must be at least 1. Whole-number quantity; fractional quantities
     * are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
    /**
     * Condition the units move to. Must differ from `from_condition`. Value enum: "sellable",
     * "quality_control", "damaged", "quarantined".
     */
    "to_condition": "sellable" | "quality_control" | "damaged" | "quarantined";
})
    & ((unknown) & (unknown) & (unknown) & (unknown));
/**
 * One line of an inventory adjustment, with the item, Location, movement written, and the change
 * in on-hand and each non-sellable quantity.
 */
export type InventoryAdjustmentLine = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "damaged_quantity_delta": number;
    "inventory_item_id": string;
    /** Movement this line wrote, or `null` when the line changed nothing. */
    "inventory_movement_id": string | null;
    "location_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "on_hand_quantity_delta": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quality_control_quantity_delta": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quarantined_quantity_delta": number;
};
/** A page of `InventoryAdjustment` objects. */
export type InventoryAdjustmentListResponse = {
    /**
     *  [] (Value): {@link InventoryAdjustment}. A recorded stock change with its reason and the
     * quantity changes Flint computed.
     */
    "data": Array<InventoryAdjustment>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * One line of an inventory quantity adjustment: a `quantity` of an item at a Location, in the
 * given `condition`.
 */
export type InventoryAdjustmentQuantityLineRequest = {
    /**
     * Condition of the units. Defaults to `sellable`. Default: "sellable". Value enum: "sellable",
     * "quality_control", "damaged", "quarantined".
     */
    "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
    /** minLength: 1. */
    "inventory_item_id": string;
    /** minLength: 1. */
    "location_id": string;
    /**
     * Units this line records. Must be at least 1. Whole-number quantity; fractional quantities
     * are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
};
/**
 * One line of an inventory quantity adjustment: a `quantity` of an item at a Location, in the
 * given `condition`.
 */
export type InventoryAdjustmentQuantityLineRequestInput = {
    /**
     * Condition of the units. Defaults to `sellable`. Default: "sellable". Value enum: "sellable",
     * "quality_control", "damaged", "quarantined".
     */
    "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined";
    /** minLength: 1. */
    "inventory_item_id": string;
    /** minLength: 1. */
    "location_id": string;
    /**
     * Units this line records. Must be at least 1. Whole-number quantity; fractional quantities
     * are not supported. Format: int64. minimum: 1.
     */
    "quantity": number;
};
/** A response containing `InventoryAdjustment` data. */
export type InventoryAdjustmentResponse = {
    /** A recorded stock change with its reason and the quantity changes Flint computed. */
    "data": InventoryAdjustment;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Inventory adjustment and the levels it changed. inventory_adjustment is the primary resource and
 * expected_version target.
 */
export type InventoryAdjustmentResult = {
    /** A recorded stock change with its reason and the quantity changes Flint computed. */
    "inventory_adjustment": InventoryAdjustment;
    /**
     * Post-commit state of every level this command touched, one entry per level. A replay returns
     * the levels the original command produced. Empty when no levels changed. [] (Value): {@link
     * InventoryLevel}. The quantity state of one inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
};
/** A response containing `InventoryAdjustmentResult` data. */
export type InventoryAdjustmentResultResponse = {
    /**
     * Inventory adjustment and the levels it changed. inventory_adjustment is the primary resource
     * and expected_version target.
     */
    "data": InventoryAdjustmentResult;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * One line of an inventory adjustment that sets absolute quantities for an item at a Location.
 * Omitted quantities stay unchanged.
 */
export type InventoryAdjustmentSetLineRequest = ({
    /**
     * Absolute damaged quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "damaged_quantity"?: number;
    /**
     * Refuse the line unless the level's `physical_version` still equals this value. A level that
     * doesn't exist yet has physical version 0. Holds and commitments do not change it. Format:
     * int64. minimum: 0.
     */
    "expected_physical_version"?: number;
    /** minLength: 1. */
    "inventory_item_id": string;
    /** minLength: 1. */
    "location_id": string;
    /**
     * Absolute on-hand quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "on_hand_quantity"?: number;
    /**
     * Absolute quality-control quantity to record. Omit to leave it unchanged. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quality_control_quantity"?: number;
    /**
     * Absolute quarantined quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quarantined_quantity"?: number;
    /**
     * Monotonic sequence of this observation in the source system. Flint refuses a value that is
     * not greater than the last accepted one for the same source, item, and Location. Format:
     * int64. minimum: 1.
     */
    "source_observation_sequence"?: number;
})
    & (({
    /**
     * Absolute on-hand quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "on_hand_quantity": number;
})
    | ({
    /**
     * Absolute quality-control quantity to record. Omit to leave it unchanged. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quality_control_quantity": number;
})
    | ({
    /**
     * Absolute damaged quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "damaged_quantity": number;
})
    | ({
    /**
     * Absolute quarantined quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quarantined_quantity": number;
})
    | (Record<string, unknown>));
/**
 * One line of an inventory adjustment that sets absolute quantities for an item at a Location.
 * Omitted quantities stay unchanged.
 */
export type InventoryAdjustmentSetLineRequestInput = ({
    /**
     * Absolute damaged quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "damaged_quantity"?: number;
    /**
     * Refuse the line unless the level's `physical_version` still equals this value. A level that
     * doesn't exist yet has physical version 0. Holds and commitments do not change it. Format:
     * int64. minimum: 0.
     */
    "expected_physical_version"?: number;
    /** minLength: 1. */
    "inventory_item_id": string;
    /** minLength: 1. */
    "location_id": string;
    /**
     * Absolute on-hand quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "on_hand_quantity"?: number;
    /**
     * Absolute quality-control quantity to record. Omit to leave it unchanged. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quality_control_quantity"?: number;
    /**
     * Absolute quarantined quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quarantined_quantity"?: number;
    /**
     * Monotonic sequence of this observation in the source system. Flint refuses a value that is
     * not greater than the last accepted one for the same source, item, and Location. Format:
     * int64. minimum: 1.
     */
    "source_observation_sequence"?: number;
})
    & (({
    /**
     * Absolute on-hand quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "on_hand_quantity": number;
})
    | ({
    /**
     * Absolute quality-control quantity to record. Omit to leave it unchanged. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quality_control_quantity": number;
})
    | ({
    /**
     * Absolute damaged quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "damaged_quantity": number;
})
    | ({
    /**
     * Absolute quarantined quantity to record. Omit to leave it unchanged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "quarantined_quantity": number;
}));
export type InventoryAdjustmentsCreateParams = (CreateInventoryAdjustmentRequestInput);
export type InventoryAdjustmentsGetParams = {};
export type InventoryAdjustmentsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Filter by inventory item. Example: "invi_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "inventory_item_id"?: InputValue<string>;
    /** Filter by Location. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "location_id"?: InputValue<string>;
    /**
     * Filter by adjustment reason. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "received", "returned", "sold", "theft", "loss", "condition_changed", "counted",
     * "correction". Value enum: "received", "returned", "sold", "theft", "loss",
     * "condition_changed", "counted", "correction". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted",
     * "correction". anyOf[1][] (Value): string. Value enum: "received", "returned", "sold",
     * "theft", "loss", "condition_changed", "counted", "correction". anyOf[2] (Value): string.
     * Value enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted",
     * "correction".
     */
    "reason"?: InputValue<("received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction")
        | readonly ("received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by source-system type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "manual",
     * "pos", "wms", "erp", "flint", "other". Value enum: "manual", "pos", "wms", "erp", "flint",
     * "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms",
     * "erp", "flint", "other". anyOf[1][] (Value): string. Value enum: "manual", "pos", "wms",
     * "erp", "flint", "other". anyOf[2] (Value): string. Value enum: "manual", "pos", "wms",
     * "erp", "flint", "other".
     */
    "source_system_type"?: InputValue<("manual" | "pos" | "wms" | "erp" | "flint" | "other")
        | readonly ("manual" | "pos" | "wms" | "erp" | "flint" | "other")[]>;
    /** Filter by external source ID. */
    "external_source_id"?: InputValue<string>;
    /** Filter by external actor ID. */
    "external_actor_id"?: InputValue<string>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
/**
 * Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can
 * be split, and how many Locations one assignment may use.
 */
export type InventoryAllocationConfigurationValue = {
    /**
     * Locations ranked into priority groups. Routing prefers the lowest group priority, then the
     * lowest location ID. minItems: 1. maxItems: 25. [] (Value): {@link
     * InventoryAllocationPolicyLocation}. A Location in an inventory allocation policy and the
     * priority group it belongs to.
     */
    "location_groups": Array<InventoryAllocationPolicyLocation>;
    /**
     * Upper bound on how many Locations one assignment may use. Defaults to 1 for single_location
     * and 10 for split_when_required. single_location requires 1 when sent. Format: int32.
     * minimum: 1. maximum: 10.
     */
    "maximum_locations_per_assignment"?: number;
    /**
     * single_location fails rather than splitting demand across Locations; split_when_required
     * allows a split when no single Location can serve the whole request. Value enum:
     * "single_location", "split_when_required".
     */
    "splitting_behavior": "single_location" | "split_when_required" | (string & {});
    /**
     * Tie-break inside a priority group. Ascending location ID keeps assignments reproducible.
     * Default: "location_id_ascending". Value enum: "location_id_ascending".
     */
    "within_group_order"?: "location_id_ascending" | (string & {});
};
/**
 * Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can
 * be split, and how many Locations one assignment may use.
 */
export type InventoryAllocationConfigurationValueInput = {
    /**
     * Locations ranked into priority groups. Routing prefers the lowest group priority, then the
     * lowest location ID. minItems: 1. maxItems: 25. [] (Value): {@link
     * InventoryAllocationPolicyLocationInput}. A Location in an inventory allocation policy and
     * the priority group it belongs to.
     */
    "location_groups": Array<InventoryAllocationPolicyLocationInput>;
    /**
     * Upper bound on how many Locations one assignment may use. Defaults to 1 for single_location
     * and 10 for split_when_required. single_location requires 1 when sent. Format: int32.
     * minimum: 1. maximum: 10.
     */
    "maximum_locations_per_assignment"?: number;
    /**
     * single_location fails rather than splitting demand across Locations; split_when_required
     * allows a split when no single Location can serve the whole request. Value enum:
     * "single_location", "split_when_required".
     */
    "splitting_behavior": "single_location" | "split_when_required";
    /**
     * Tie-break inside a priority group. Ascending location ID keeps assignments reproducible.
     * Default: "location_id_ascending". Value enum: "location_id_ascending".
     */
    "within_group_order"?: "location_id_ascending";
};
export type InventoryAllocationPoliciesCreateParams = (InputValue<CreateInventoryAllocationPolicyRequestInput>);
export type InventoryAllocationPoliciesDeleteParams = {
    /** Current resource version used as a concurrency fence. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type InventoryAllocationPoliciesGetParams = {};
export type InventoryAllocationPoliciesGetRevisionParams = {};
export type InventoryAllocationPoliciesListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Search allocation policy ID, external reference ID, or name. maxLength: 255. */
    "query"?: InputValue<string>;
};
export type InventoryAllocationPoliciesListRevisionsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
export type InventoryAllocationPoliciesUpdateParams = (InputValue<UpdateInventoryAllocationPolicyRequestInput>);
/** Named, version-fenced rules that decide which Locations serve demand and in what order. */
export type InventoryAllocationPolicy = {
    /**
     *  location_groups (Required): Array of {@link InventoryAllocationPolicyLocation}. Locations
     * ranked into priority groups. Routing prefers the lowest group priority, then the lowest
     * location ID. minItems: 1. maxItems: 25. location_groups[] (Value): {@link
     * InventoryAllocationPolicyLocation}. A Location in an inventory allocation policy and the
     * priority group it belongs to. maximum_locations_per_assignment (Required): integer. Upper
     * bound on how many Locations one assignment may use. Defaults to 1 for single_location and 10
     * for split_when_required. single_location requires 1 when sent. Format: int32. minimum: 1.
     * maximum: 10. splitting_behavior (Required): string. single_location fails rather than
     * splitting demand across Locations; split_when_required allows a split when no single
     * Location can serve the whole request. Value enum: "single_location", "split_when_required".
     * within_group_order (Required): string. Tie-break inside a priority group. Ascending location
     * ID keeps assignments reproducible. Value enum: "location_id_ascending".
     */
    "configuration": {
        /**
         * Locations ranked into priority groups. Routing prefers the lowest group priority, then
         * the lowest location ID. minItems: 1. maxItems: 25. [] (Value): {@link
         * InventoryAllocationPolicyLocation}. A Location in an inventory allocation policy and the
         * priority group it belongs to.
         */
        "location_groups": Array<InventoryAllocationPolicyLocation>;
        /**
         * Upper bound on how many Locations one assignment may use. Defaults to 1 for
         * single_location and 10 for split_when_required. single_location requires 1 when sent.
         * Format: int32. minimum: 1. maximum: 10.
         */
        "maximum_locations_per_assignment": number;
        /**
         * single_location fails rather than splitting demand across Locations; split_when_required
         * allows a split when no single Location can serve the whole request. Value enum:
         * "single_location", "split_when_required".
         */
        "splitting_behavior": "single_location" | "split_when_required" | (string & {});
        /**
         * Tie-break inside a priority group. Ascending location ID keeps assignments reproducible.
         * Value enum: "location_id_ascending".
         */
        "within_group_order": "location_id_ascending" | (string & {});
    };
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * The immutable revision containing this policy's current routing configuration. Replacing
     * configuration publishes a new revision; other policy edits keep this ID.
     */
    "current_inventory_allocation_policy_revision_id": string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    "inventory_allocation_policy_id": string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    "name": string;
    /** Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: uint64. minimum: 1. */
    "version": number;
};
/** A page of `InventoryAllocationPolicy` objects. */
export type InventoryAllocationPolicyListResponse = {
    /**
     *  [] (Value): {@link InventoryAllocationPolicy}. Named, version-fenced rules that decide
     * which Locations serve demand and in what order.
     */
    "data": Array<InventoryAllocationPolicy>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A Location in an inventory allocation policy and the priority group it belongs to. */
export type InventoryAllocationPolicyLocation = {
    /** Format: int32. minimum: 1. */
    "group_priority": number;
    /** minLength: 1. */
    "location_id": string;
};
/** A Location in an inventory allocation policy and the priority group it belongs to. */
export type InventoryAllocationPolicyLocationInput = InventoryAllocationPolicyLocation;
/** A response containing `InventoryAllocationPolicy` data. */
export type InventoryAllocationPolicyResponse = {
    /** Named, version-fenced rules that decide which Locations serve demand and in what order. */
    "data": InventoryAllocationPolicy;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * An immutable routing configuration published when an allocation policy is created or its
 * configuration is replaced. Revisions remain readable after later policy edits.
 */
export type InventoryAllocationPolicyRevision = {
    /**
     * Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand
     * can be split, and how many Locations one assignment may use.
     */
    "configuration": InventoryAllocationConfigurationValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "inventory_allocation_policy_id": string;
    "inventory_allocation_policy_revision_id": string;
};
/** A page of `InventoryAllocationPolicyRevision` objects. */
export type InventoryAllocationPolicyRevisionListResponse = {
    /**
     *  [] (Value): {@link InventoryAllocationPolicyRevision}. An immutable routing configuration
     * published when an allocation policy is created or its configuration is replaced. Revisions
     * remain readable after later policy edits.
     */
    "data": Array<InventoryAllocationPolicyRevision>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
