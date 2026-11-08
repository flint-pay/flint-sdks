import type { MoneyValue, MoneyValueInput, MerchantWebhookEnvelope } from './types-35.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type {
    Refund,
    RefundAdjustmentAudit,
    RefundAdjustmentReason,
    RefundAdjustmentAuditInput,
    PublicDownload
} from './types-46.js';
import type { CategoryReference } from './types-4.js';
import type { SelectedProductOption } from './types-53.js';
import type { ResponseMeta, ReportPending, ReportSucceeded } from './types-48.js';
import type { OrderGiftCardAllocation } from './types-37.js';
import type { CreateRefundRequestInput } from './types-10.js';
import type { InputValue } from '../runtime.js';
import type { UpdateRefundRequestInput } from './types-60.js';
import type { GetReturnResolutionResponse, GetReturnResponse } from './types-23.js';
import type { ConfigurationVersionRequestInput } from './types-6.js';
/** The reason to record for a refund adjustment, as a `code` with an optional description. */
export type RefundAdjustmentReasonRequestInput = {
    /**
     * Value enum: "customer_agreement", "jurisdiction_specific_rule", "merchant_policy",
     * "customer_request", "restocking_policy", "manual_tax_correction", "other".
     */
    "code": "customer_agreement"
        | "jurisdiction_specific_rule"
        | "merchant_policy"
        | "customer_request"
        | "restocking_policy"
        | "manual_tax_correction"
        | "other";
    /** minLength: 1. */
    "description"?: string;
};
/** An order charge to refund when creating a refund, with an optional amount to refund. */
export type RefundCharge = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** minLength: 1. */
    "order_charge_id": string;
};
/** An order charge to refund when creating a refund, with an optional amount to refund. */
export type RefundChargeInput = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValueInput;
    /** minLength: 1. */
    "order_charge_id": string;
};
export type RefundCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "refund.created";
});
/**
 * The `refund.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type RefundCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.created". */
    "event_type"?: "refund.created";
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
 * The `refund.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type RefundCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.created". */
    "event_type"?: "refund.created";
});
/**
 * Default refund destinations for payment intent and gift card redemption allocations planned by
 * Flint. Each tender type defaults to original when omitted.
 */
export type RefundDestinations = {
    /**
     * Where gift card redemption value is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards, including when the original is closed or cannot accept
     * the full credit. Default: "original". Value enum: "original", "new_gift_card".
     */
    "gift_card_redemption"?: "original" | "new_gift_card" | (string & {});
    /**
     * Default destination for every payment intent allocation Flint plans for this refund.
     * original returns value to the payment; new_gift_card issues store credit on new Flint gift
     * cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or
     * Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other
     * payment options, non-USD payments, and payments without an order return INVALID_REQUEST with
     * a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card
     * redemption destinations are unaffected by the payment restrictions. Default: "original".
     * Value enum: "original", "new_gift_card".
     */
    "payment_intent"?: "original" | "new_gift_card" | (string & {});
};
/**
 * Default refund destinations for payment intent and gift card redemption allocations planned by
 * Flint. Each tender type defaults to original when omitted.
 */
export type RefundDestinationsInput = {
    /**
     * Where gift card redemption value is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards, including when the original is closed or cannot accept
     * the full credit. Default: "original". Value enum: "original", "new_gift_card".
     */
    "gift_card_redemption"?: "original" | "new_gift_card";
    /**
     * Default destination for every payment intent allocation Flint plans for this refund.
     * original returns value to the payment; new_gift_card issues store credit on new Flint gift
     * cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or
     * Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other
     * payment options, non-USD payments, and payments without an order return INVALID_REQUEST with
     * a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card
     * redemption destinations are unaffected by the payment restrictions. Default: "original".
     * Value enum: "original", "new_gift_card".
     */
    "payment_intent"?: "original" | "new_gift_card";
};
export type RefundFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "refund.failed";
});
/**
 * The `refund.failed` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type RefundFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.failed". */
    "event_type"?: "refund.failed";
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
 * The `refund.failed` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type RefundFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.failed". */
    "event_type"?: "refund.failed";
});
/**
 * The code of a gift card issued by a refund, returned once in the refund result with its
 * `gift_card_id`.
 */
export type RefundGiftCardCode = {
    "code": string;
    "gift_card_id": string;
};
/**
 * An order line item to refund, with the quantity or amount, tax handling, and any adjustments
 * such as a restocking fee.
 */
export type RefundLineItem = {
    /**
     *  [] (Value): {@link RefundLineItemAdjustmentRefundIn}. An amount to refund back against an
     * earlier line item adjustment, identified by `refund_line_item_adjustment_id`.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefundIn>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** minLength: 1. */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     *  [] (Value): {@link RefundLineItemAdjustmentIn}. An adjustment to apply to a refunded line
     * item, such as a restocking fee or withheld amount, and whether it applies to the gross
     * amount or tax.
     */
    "refund_adjustments"?: Array<RefundLineItemAdjustmentIn>;
    /**
     * Who made a manual tax adjustment on a refund line item and where it came from, for audit
     * purposes.
     */
    "tax_adjustment_audit"?: RefundAdjustmentAudit;
    /** The reason to record for a refund adjustment, as a `code` with an optional description. */
    "tax_adjustment_reason"?: RefundAdjustmentReason;
    /**
     *  [] (Value): {@link RefundTaxBreakdownRefundIn}. The tax to refund for one tax breakdown,
     * identified by `tax_breakdown_id`, when setting tax refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money"?: MoneyValue;
    /** Value enum: "automatic", "explicit". */
    "tax_refund_mode"?: "automatic" | "explicit" | (string & {});
};
/**
 * An adjustment on a refunded line item, such as a restocking fee or withheld amount, with how
 * much has been refunded and what remains.
 */
export type RefundLineItemAdjustment = {
    /** Value enum: "restocking_fee", "withheld_amount", "refund_adjustment", "tax_adjustment". */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax" | (string & {});
    /**
     * The reason recorded for a refund line item adjustment, as a `code` with an optional
     * description.
     */
    "reason": RefundAdjustmentReason;
    "refund_line_item_adjustment_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "remaining_money": MoneyValue;
};
/**
 * An adjustment to apply to a refunded line item, such as a restocking fee or withheld amount, and
 * whether it applies to the gross amount or tax.
 */
export type RefundLineItemAdjustmentIn = {
    /** Value enum: "restocking_fee", "withheld_amount", "refund_adjustment", "tax_adjustment". */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax" | (string & {});
    /** The reason to record for a refund adjustment, as a `code` with an optional description. */
    "reason": RefundAdjustmentReason;
};
/**
 * An adjustment to apply to a refunded line item, such as a restocking fee or withheld amount, and
 * whether it applies to the gross amount or tax.
 */
export type RefundLineItemAdjustmentInInput = {
    /** Value enum: "restocking_fee", "withheld_amount", "refund_adjustment", "tax_adjustment". */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
    /** Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax";
    /** The reason to record for a refund adjustment, as a `code` with an optional description. */
    "reason": RefundAdjustmentReasonRequestInput;
};
/** An amount refunded back against an earlier line item adjustment. */
export type RefundLineItemAdjustmentRefund = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    "original_refund_line_item_adjustment_id": string;
    "refund_line_item_adjustment_refund_id": string;
};
/**
 * An amount to refund back against an earlier line item adjustment, identified by
 * `refund_line_item_adjustment_id`.
 */
export type RefundLineItemAdjustmentRefundIn = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValue;
    /** minLength: 1. */
    "refund_line_item_adjustment_id": string;
};
/**
 * An amount to refund back against an earlier line item adjustment, identified by
 * `refund_line_item_adjustment_id`.
 */
export type RefundLineItemAdjustmentRefundInInput = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValueInput;
    /** minLength: 1. */
    "refund_line_item_adjustment_id": string;
};
/**
 * How a refund applied to one order line item: quantity, refunded amount, tax, adjustments, and
 * modifier allocations.
 */
export type RefundLineItemAllocation = {
    /**
     *  [] (Value): {@link RefundLineItemAdjustmentRefund}. An amount refunded back against an
     * earlier line item adjustment.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefund>;
    /**
     *  [] (Value): {@link RefundLineItemAdjustment}. An adjustment on a refunded line item, such
     * as a restocking fee or withheld amount, with how much has been refunded and what remains.
     */
    "adjustments"?: Array<RefundLineItemAdjustment>;
    /**
     * The subtotal, discount, tax, and total Flint calculated automatically for a refunded line
     * item.
     */
    "automatic_refund": RefundLineItemAutomaticRefund;
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    /**
     *  [] (Value): {@link RefundLineItemModifierAllocation}. The part of a line item refund that
     * applies to one modifier, by quantity or amount.
     */
    "modifiers"?: Array<RefundLineItemModifierAllocation>;
    "order_line_item_id": string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_money": MoneyValue;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /** Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    /**
     *  [] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an
     * order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /** Value enum: "automatic", "explicit". */
    "tax_refund_mode": "automatic" | "explicit" | (string & {});
    "variant_id"?: string;
};
/**
 * The subtotal, discount, tax, and total Flint calculated automatically for a refunded line item.
 */
export type RefundLineItemAutomaticRefund = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "discount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "subtotal_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "total_money": MoneyValue;
};
/**
 * An order line item to refund, with the quantity or amount, tax handling, and any adjustments
 * such as a restocking fee.
 */
export type RefundLineItemInput = {
    /**
     *  [] (Value): {@link RefundLineItemAdjustmentRefundInInput}. An amount to refund back against
     * an earlier line item adjustment, identified by `refund_line_item_adjustment_id`.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefundInInput>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money"?: MoneyValueInput;
    /** minLength: 1. */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     *  [] (Value): {@link RefundLineItemAdjustmentInInput}. An adjustment to apply to a refunded
     * line item, such as a restocking fee or withheld amount, and whether it applies to the gross
     * amount or tax.
     */
    "refund_adjustments"?: Array<RefundLineItemAdjustmentInInput>;
    /**
     * Who made a manual tax adjustment on a refund line item and where it came from, for audit
     * purposes.
     */
    "tax_adjustment_audit"?: RefundAdjustmentAuditInput;
    /** The reason to record for a refund adjustment, as a `code` with an optional description. */
    "tax_adjustment_reason"?: RefundAdjustmentReasonRequestInput;
    /**
     *  [] (Value): {@link RefundTaxBreakdownRefundInInput}. The tax to refund for one tax
     * breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money"?: MoneyValueInput;
    /** Value enum: "automatic", "explicit". */
    "tax_refund_mode"?: "automatic" | "explicit";
};
/** The part of a line item refund that applies to one modifier, by quantity or amount. */
export type RefundLineItemModifierAllocation = {
    /** Value enum: "quantity", "amount". */
    "allocation_basis": "quantity" | "amount" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    "modifier_group_name": string;
    "name": string;
    "order_line_item_modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    "refund_line_item_modifier_allocation_id": string;
    "show_on_fulfillment": boolean;
    "show_on_receipt": boolean;
    /** Value enum: "catalog_modifier", "text". */
    "source_type": "catalog_modifier" | "text" | (string & {});
    "text_value"?: string;
};
/** A page of `Refund` objects. */
export type RefundListResponse = {
    /**  [] (Value): {@link Refund}. Money returned against a collected payment. */
    "data": Array<Refund>;
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
export type RefundPartiallySucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.partially_succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.partially_succeeded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "refund.partially_succeeded";
});
/**
 * The `refund.partially_succeeded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type RefundPartiallySucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.partially_succeeded". */
    "event_type"?: "refund.partially_succeeded";
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
 * The `refund.partially_succeeded` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type RefundPartiallySucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.partially_succeeded". */
    "event_type"?: "refund.partially_succeeded";
});
/** A response containing `Refund` data. */
export type RefundResponse = {
    /** Money returned against a collected payment. */
    "data": Refund;
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
export type RefundSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.succeeded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "refund.succeeded";
});
/**
 * The `refund.succeeded` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type RefundSucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.succeeded". */
    "event_type"?: "refund.succeeded";
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
 * The `refund.succeeded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type RefundSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.succeeded". */
    "event_type"?: "refund.succeeded";
});
/** The tax refunded for one tax breakdown on an order. */
export type RefundTaxBreakdownRefund = {
    "order_charge_id"?: string;
    "tax_breakdown_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money": MoneyValue;
};
/**
 * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
 * refunds explicitly.
 */
export type RefundTaxBreakdownRefundIn = {
    /** minLength: 1. */
    "tax_breakdown_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money"?: MoneyValue;
};
/**
 * The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax
 * refunds explicitly.
 */
export type RefundTaxBreakdownRefundInInput = {
    /** minLength: 1. */
    "tax_breakdown_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money"?: MoneyValueInput;
};
/** One tender's share of a refund, listed in the refund's tender allocations. */
export type RefundTenderAllocation = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     *  [] (Value): {@link OrderGiftCardAllocation}. A gift card that received part of a refund,
     * with the amount credited.
     */
    "destination_cards"?: Array<OrderGiftCardAllocation>;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
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
    "gift_card_id"?: string;
    "gift_card_redemption_id"?: string;
    "payment_intent_id"?: string;
    "refund_allocation_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_tip_money": MoneyValue;
    /**
     * Status of this payment refund or tender allocation. A succeeded refund can still fail after
     * a bank rejection. Parent status transitions send refund.succeeded,
     * refund.partially_succeeded, or refund.failed; other public changes send refund.updated.
     * Value enum: "pending", "requires_action", "succeeded", "failed", "canceled".
     */
    "status": "pending" | "requires_action" | "succeeded" | "failed" | "canceled" | (string & {});
    /** Value enum: "payment_intent", "gift_card_redemption". */
    "tender_type": "payment_intent" | "gift_card_redemption" | (string & {});
};
/** The `gift_card_redemption` variant of `RefundTenderAllocationInput`. */
export type RefundTenderAllocationInputGiftCardRedemption = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Value enum: "gift_card_redemption". */
    "tender_type": "gift_card_redemption" | (string & {});
})
    & (({
    /**  currency (Optional): any.  Value enum: "USD". */
    "amount_money"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: "USD". */
        "currency"?: unknown;
    });
    /** Value enum: "gift_card_redemption". */
    "tender_type"?: unknown;
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
}));
/** The `gift_card_redemption` variant of `RefundTenderAllocationInput`. */
export type RefundTenderAllocationInputGiftCardRedemptionInput = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Value enum: "gift_card_redemption". */
    "tender_type": "gift_card_redemption";
})
    & (({
    /**  currency (Optional): any.  Value enum: "USD". */
    "amount_money"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: "USD". */
        "currency"?: ("USD") & ("USD");
    });
    /** Value enum: "gift_card_redemption". */
    "tender_type"?: ("gift_card_redemption") & ("gift_card_redemption");
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id": string;
})
    & ({
    "payment_intent_id"?: never;
}));
/** The `payment_intent` variant of `RefundTenderAllocationInput`. */
export type RefundTenderAllocationInputPaymentIntent = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
    /** Value enum: "payment_intent". */
    "tender_type": "payment_intent" | (string & {});
})
    & (({
    /** Value enum: "payment_intent". */
    "tender_type"?: unknown;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
}));
/** The `payment_intent` variant of `RefundTenderAllocationInput`. */
export type RefundTenderAllocationInputPaymentIntentInput = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
    /** Value enum: "payment_intent". */
    "tender_type": "payment_intent";
})
    & (({
    /** Value enum: "payment_intent". */
    "tender_type"?: ("payment_intent") & ("payment_intent");
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id": string;
})
    & ({
    "gift_card_redemption_id"?: never;
}));
/**
 * Where part of a refund goes: back to a payment intent or to a gift card redemption, with the
 * amount.
 */
export type RefundTenderAllocationRequest = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     */
    "amount_money": ({
        /**
         * Use an integer string (decimal digits), not a floating-point number. Format: int64.
         * minimum: 1.
         */
        "amount"?: `${bigint}`;
    })
        & (Exclude<MoneyValue & object, readonly unknown[]>);
    /**
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Value enum: "payment_intent", "gift_card_redemption". */
    "tender_type": "payment_intent" | "gift_card_redemption" | (string & {});
})
    & ((Exclude<RefundTenderAllocationInputPaymentIntent & object, readonly unknown[]>)
    | (Exclude<RefundTenderAllocationInputGiftCardRedemption & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Where part of a refund goes: back to a payment intent or to a gift card redemption, with the
 * amount.
 */
export type RefundTenderAllocationRequestInput = ({
    /**
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount
     * (Required): integer string. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for
     * USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength:
     * 3. maxLength: 3. pattern: ^[A-Z]{3}$.
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
     * Where this allocation is refunded. original returns value to the tender that paid;
     * new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded
     * USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open
     * chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without
     * an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the
     * existing dispute refusal. Gift card redemption destinations are unaffected by the payment
     * restrictions. Default: "original". Value enum: "original", "new_gift_card".
     */
    "destination"?: "original" | "new_gift_card";
    /**
     * The captured redemption to refund. Required for tender_type gift_card_redemption. minLength:
     * 1. pattern: ^gcr_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "gift_card_redemption_id"?: string;
    /**
     * The succeeded payment intent to refund. Required for tender_type payment_intent. minLength:
     * 1. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "payment_intent_id"?: string;
    /** Value enum: "payment_intent", "gift_card_redemption". */
    "tender_type": "payment_intent" | "gift_card_redemption";
})
    & ((Exclude<RefundTenderAllocationInputPaymentIntentInput & object, readonly unknown[]>)
    | (Exclude<RefundTenderAllocationInputGiftCardRedemptionInput & object, readonly unknown[]>));
/**
 * Details of a gift card purchase refunded before the card was issued, including the amounts
 * recovered.
 */
export type RefundUnissuedGiftCardRecovery = {
    "order_id": string;
    "order_line_item_id": string;
    "payment_intent_id": string;
    "purchase_refund_allocation_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "returned_amount_money": MoneyValue;
    "settlement_allocation_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "source_pending_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "source_remaining_amount_money": MoneyValue;
};
export type RefundUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Refund;
    };
    "event_type"?: "refund.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "refund.updated";
});
/**
 * The `refund.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type RefundUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.updated". */
    "event_type"?: "refund.updated";
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
 * The `refund.updated` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type RefundUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Refund}. Money returned against a collected payment. */
    "data"?: {
        /** Money returned against a collected payment. */
        "object": Refund;
    };
    /** Value enum: "refund.updated". */
    "event_type"?: "refund.updated";
});
export type RefundsCreateParams = (CreateRefundRequestInput);
export type RefundsGetParams = {
    /**
     * Supported expansions: customer, order, payment_intent, payment_refunds.payment_intent.
     * Expansion requires commerce.refunds.read plus the read scope for each expanded resource.
     * Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20
     * related objects per path. Repeat expand, for example expand=customer&expand=order, or pass
     * one comma-separated value. [] enum: "customer", "order", "payment_intent",
     * "payment_refunds.payment_intent". Value enum: "customer", "order", "payment_intent",
     * "payment_refunds.payment_intent". anyOf[1] (Value): Array of string. [] enum: "customer",
     * "order", "payment_intent", "payment_refunds.payment_intent". anyOf[1][] (Value): string.
     * Value enum: "customer", "order", "payment_intent", "payment_refunds.payment_intent".
     * anyOf[2] (Value): string. Value enum: "customer", "order", "payment_intent",
     * "payment_refunds.payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent" | "payment_refunds.payment_intent")
        | readonly ("customer" | "order" | "payment_intent" | "payment_refunds.payment_intent")[]>;
};
export type RefundsListParams = {
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
    /** Filter by order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Filter by payment intent ID. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "payment_intent_id"?: InputValue<string>;
    /** Filter by customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /**
     * Filter by refund status. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "pending",
     * "succeeded", "partially_succeeded", "failed". Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "succeeded", "partially_succeeded", "failed". anyOf[1][] (Value): string. Value
     * enum: "pending", "succeeded", "partially_succeeded", "failed". anyOf[2] (Value): string.
     * Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     */
    "status"?: InputValue<("pending" | "succeeded" | "partially_succeeded" | "failed")
        | readonly ("pending" | "succeeded" | "partially_succeeded" | "failed")[]>;
    /**
     * Filter by refund reasons. Accepts comma-separated values or repeated parameters; empty
     * entries are rejected. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other". Value enum: "duplicate", "fraudulent", "requested_by_customer",
     * "defective_product", "wrong_item_shipped", "never_received", "not_as_described",
     * "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order",
     * "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other". anyOf[1][] (Value): string. Value enum: "duplicate",
     * "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped",
     * "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind",
     * "better_price_found", "accidental_order", "other". anyOf[2] (Value): string. Value enum:
     * "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other".
     */
    "reason"?: InputValue<("duplicate"
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
        | "other")
        | readonly ("duplicate"
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
        | "other")[]>;
    /**
     * Inclusive lower bound on amount_money.amount. Requires currency. Format: int64. minimum: 1.
     * Example: 500.
     */
    "min_amount"?: InputValue<number>;
    /**
     * Inclusive upper bound on amount_money.amount. Requires currency. Format: int64. minimum: 1.
     * Example: 500.
     */
    "max_amount"?: InputValue<number>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Filter by linked Return ID. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_id"?: InputValue<string>;
    /** Filter by linked ReturnResolution ID. Example: "retres_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_resolution_id"?: InputValue<string>;
    /**
     * Search across refund_id, external_reference_id, and reason_message. Text fields match any
     * part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as ord_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by refund_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
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
     * Supported expansions: customer, order, payment_intent. Include the requested related
     * resources using scoped batch reads for this page. Each relationship requires its existing
     * target read scopes. Expansion changes the representation without changing pagination tokens.
     * Limits: at most 10 unique expand paths per request. Repeat expand, for example
     * expand=customer&expand=order, or pass one comma-separated value. [] enum: "customer",
     * "order", "payment_intent". Value enum: "customer", "order", "payment_intent". anyOf[1]
     * (Value): Array of string. [] enum: "customer", "order", "payment_intent". anyOf[1][]
     * (Value): string. Value enum: "customer", "order", "payment_intent". anyOf[2] (Value):
     * string. Value enum: "customer", "order", "payment_intent".
     */
    "expand"?: InputValue<("customer" | "order" | "payment_intent") | readonly ("customer" | "order" | "payment_intent")[]>;
};
export type RefundsUpdateParams = (InputValue<UpdateRefundRequestInput>);
/** The request body for: Release return resolution. */
export type ReleaseReturnResolutionRequest = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** Value enum: "merchant_approved", "exception_resolved", "other". */
    "reason": "merchant_approved" | "exception_resolved" | "other" | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Release return resolution. */
export type ReleaseReturnResolutionRequestInput = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /** Value enum: "merchant_approved", "exception_resolved", "other". */
    "reason": "merchant_approved" | "exception_resolved" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
};
export type ReleaseReturnResolutionResponse = GetReturnResolutionResponse;
/** The request body for: Remove discounts. */
export type RemoveDiscountsRequest = {
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**  [] (Value): string. minLength: 1. */
    "order_discount_ids": Array<string>;
};
/** The request body for: Remove discounts. */
export type RemoveDiscountsRequestInput = RemoveDiscountsRequest;
/** The request body for: Renew subscription now. */
export type RenewSubscriptionRequestInput = ConfigurationVersionRequestInput;
/** The request body for: Reopen return. */
export type ReopenReturnRequest = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Value enum: "linked_effect_changed", "correction_required",
     * "additional_merchandise_received", "merchant_request", "other".
     */
    "reason": "linked_effect_changed"
        | "correction_required"
        | "additional_merchandise_received"
        | "merchant_request"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Reopen return. */
export type ReopenReturnRequestInput = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Value enum: "linked_effect_changed", "correction_required",
     * "additional_merchandise_received", "merchant_request", "other".
     */
    "reason": "linked_effect_changed"
        | "correction_required"
        | "additional_merchandise_received"
        | "merchant_request"
        | "other";
    /** minLength: 1. */
    "reason_message"?: string;
};
export type ReopenReturnResponse = GetReturnResponse;
/** A report generated from the merchant's activity. */
export type Report = ({
    /** When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Currency the report covers. A report never combines currencies. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Link to download the generated report. Present only when status is succeeded. A temporary
     * link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason"?: "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Exclusive interval end instant. Each report type matches its own occurrence time. Format:
     * date-time.
     */
    "interval_end_at": string;
    /**
     * Inclusive interval start instant. Each report type matches its own occurrence time. Format:
     * date-time.
     */
    "interval_start_at": string;
    /** Stable identifier of the report. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$. */
    "report_id": string;
    /**
     * The report's type and column version. See the Reports guide for its columns. Value enum:
     * "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
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
     * pending while Flint generates the report, then succeeded with a download or failed with a
     * failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum:
     * "pending", "succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "failed" | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone.
     */
    "timezone": string;
})
    & ((Exclude<ReportPending & object, readonly unknown[]>)
    | (Exclude<ReportSucceeded & object, readonly unknown[]>)
    | (Exclude<ReportFailed & object, readonly unknown[]>)
    | (Record<string, unknown>));
export type ReportDownloadsGetParams = {};
export type ReportDownloadsGetResponse = {
    location?: string;
};
/** A report generated from the merchant's activity. */
export type ReportFailed = ({
    /** When the report was requested. Format: date-time. */
    "created_at": string;
    /**
     * Currency the report covers. A report never combines currencies. minLength: 3. maxLength: 3.
     * pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Link to download the generated report. Present only when status is succeeded. A temporary
     * link for downloading a generated report.
     */
    "download"?: PublicDownload;
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason": "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
    /**
     * Exclusive interval end instant. Each report type matches its own occurrence time. Format:
     * date-time.
     */
    "interval_end_at": string;
    /**
     * Inclusive interval start instant. Each report type matches its own occurrence time. Format:
     * date-time.
     */
    "interval_start_at": string;
    /** Stable identifier of the report. pattern: ^rep_[0-9A-HJKMNP-TV-Z]{26}$. */
    "report_id": string;
    /**
     * The report's type and column version. See the Reports guide for its columns. Value enum:
     * "gift_card_liability_v1", "orders_itemized_v1", "orders_itemized_v2",
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
     * pending while Flint generates the report, then succeeded with a download or failed with a
     * failure_reason. Flint sends report.succeeded or report.failed when it finishes. Value enum:
     * "failed".
     */
    "status": "failed" | (string & {});
    /**
     * IANA timezone used for timestamps and date bucketing. A payout occurs at the start of its
     * arrival_date in this timezone.
     */
    "timezone": string;
})
    & (({
    /** Value enum: "failed". */
    "status"?: "failed" | (string & {});
    /**
     * Why the report failed. Present only when status is failed: limit_exceeded when the report
     * hit a size or time limit, data_unavailable when data it needs wasn't available yet, and
     * generation_failed for other errors. Treat an unknown value like generation_failed. Value
     * enum: "generation_failed", "data_unavailable", "limit_exceeded".
     */
    "failure_reason": "generation_failed" | "data_unavailable" | "limit_exceeded" | (string & {});
}));
export type ReportFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Report;
    };
    "event_type"?: "report.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Report;
    };
    "event_type"?: "report.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "report.failed";
});
/**
 * The `report.failed` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type ReportFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Report}. A report generated from the merchant's activity. */
    "data"?: {
        /** A report generated from the merchant's activity. */
        "object": Report;
    };
    /** Value enum: "report.failed". */
    "event_type"?: "report.failed";
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
