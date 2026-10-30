import type { MerchantWebhookEnvelope, MetadataMap } from './types-34.js';
import type { ReturnReceipt, ReturnLineItem, ReturnPolicyEvaluation } from './types-49.js';
import type {
    ReturnActor,
    RetryReturnResolutionRequestInput,
    ReturnCompletionBlocker,
    ReturnDisposition,
    ReturnFinancialSummary,
    ReturnHandoffRequirement,
    ReturnInspection
} from './types-48.js';
import type { ReturnUnverifiedItemInput } from './types-51.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { VerifyReturnReceiptLineItemRequestInput, UpdateReturnResolutionRequestInput } from './types-60.js';
import type { MoneyValue, MoneyValueInput } from './types-35.js';
import type {
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedCustomerSummary,
    ExpandedShipmentSummary
} from './types-21.js';
import type { Refund } from './types-46.js';
import type { ResourceReference, ReleaseReturnResolutionRequestInput } from './types-47.js';
import type { CancelReturnResolutionRequestInput } from './types-4.js';
import type { ConfirmReturnResolutionRequestInput } from './types-6.js';
import type { MeCreateReturnResolutionCheckoutSessionParams } from './types-33.js';
import type { BuyerAction } from './types-1.js';
/**
 * The `return_receipt.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ReturnReceiptCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnReceipt}. A record of returned items arriving at a
     * location.
     */
    "data"?: {
        /** A record of returned items arriving at a location. */
        "object": ReturnReceipt;
    };
    /** Value enum: "return_receipt.created". */
    "event_type"?: "return_receipt.created";
});
/** A returned item recorded as received. */
export type ReturnReceiptLineItem = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "available_disposition_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    "return_line_item_id"?: string;
    "return_receipt_id": string;
    "return_receipt_line_item_id": string;
    /** [] enum: "verify". [] (Value): string.  Value enum: "verify". */
    "supported_actions": Array<"verify" | (string & {})>;
    /**
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItem;
    /**
     * Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed",
     * "merchant_review", "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    "verification_reason_message"?: string;
    /** Value enum: "matched", "unverified", "excess". */
    "verification_status": "matched" | "unverified" | "excess" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "verified_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "verified_by"?: ReturnActor;
};
/** The `excess` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputExcess = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id": string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "excess".
     */
    "type": "excess" | (string & {});
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItem;
})
    & (({
    /** Value enum: "excess". */
    "type": unknown;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id": string;
}));
/** The `excess` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputExcessInput = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id": string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "excess".
     */
    "type": "excess";
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItemInput;
})
    & (({
    /** Value enum: "excess". */
    "type": "excess";
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id": string;
})
    & ({
    "unverified_item"?: never;
}));
/** The `matched` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputMatched = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id": string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "matched".
     */
    "type": "matched" | (string & {});
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItem;
})
    & (({
    /** Value enum: "matched". */
    "type": unknown;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id": string;
}));
/** The `matched` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputMatchedInput = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id": string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "matched".
     */
    "type": "matched";
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItemInput;
})
    & (({
    /** Value enum: "matched". */
    "type": "matched";
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id": string;
})
    & ({
    "unverified_item"?: never;
}));
/** The `unverified` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputUnverified = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id"?: string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "unverified".
     */
    "type": "unverified" | (string & {});
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item": ReturnUnverifiedItem;
})
    & (({
    /** Value enum: "unverified". */
    "type": unknown;
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item": ReturnUnverifiedItem;
}));
/** The `unverified` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputUnverifiedInput = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id"?: string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "unverified".
     */
    "type": "unverified";
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item": ReturnUnverifiedItemInput;
})
    & (({
    /** Value enum: "unverified". */
    "type": "unverified";
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item": ReturnUnverifiedItemInput;
})
    & ({
    "return_line_item_id"?: never;
}));
/**
 * One line of received merchandise: a matched return line, excess quantity, or an unverified item.
 */
export type ReturnReceiptLineItemRequest = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id"?: string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "matched", "unverified", "excess".
     */
    "type": "matched" | "unverified" | "excess" | (string & {});
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItem;
})
    & ((Exclude<ReturnReceiptLineItemInputMatched & object, readonly unknown[]>)
    | (Exclude<ReturnReceiptLineItemInputUnverified & object, readonly unknown[]>)
    | (Exclude<ReturnReceiptLineItemInputExcess & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * One line of received merchandise: a matched return line, excess quantity, or an unverified item.
 */
export type ReturnReceiptLineItemRequestInput = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id"?: string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "matched", "unverified", "excess".
     */
    "type": "matched" | "unverified" | "excess";
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItemInput;
})
    & ((Exclude<ReturnReceiptLineItemInputMatchedInput & object, readonly unknown[]>)
    | (Exclude<ReturnReceiptLineItemInputUnverifiedInput & object, readonly unknown[]>)
    | (Exclude<ReturnReceiptLineItemInputExcessInput & object, readonly unknown[]>));
export type ReturnReceiptSupersededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.superseded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.superseded";
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
    "event_type": "return_receipt.superseded";
});
/**
 * The `return_receipt.superseded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnReceiptSupersededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnReceipt}. A record of returned items arriving at a
     * location.
     */
    "data"?: {
        /** A record of returned items arriving at a location. */
        "object": ReturnReceipt;
    };
    /** Value enum: "return_receipt.superseded". */
    "event_type"?: "return_receipt.superseded";
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
 * The `return_receipt.superseded` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnReceiptSupersededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnReceipt}. A record of returned items arriving at a
     * location.
     */
    "data"?: {
        /** A record of returned items arriving at a location. */
        "object": ReturnReceipt;
    };
    /** Value enum: "return_receipt.superseded". */
    "event_type"?: "return_receipt.superseded";
});
export type ReturnReceiptVerifiedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.verified";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.verified";
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
    "event_type": "return_receipt.verified";
});
/**
 * The `return_receipt.verified` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ReturnReceiptVerifiedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnReceipt}. A record of returned items arriving at a
     * location.
     */
    "data"?: {
        /** A record of returned items arriving at a location. */
        "object": ReturnReceipt;
    };
    /** Value enum: "return_receipt.verified". */
    "event_type"?: "return_receipt.verified";
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
 * The `return_receipt.verified` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ReturnReceiptVerifiedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnReceipt}. A record of returned items arriving at a
     * location.
     */
    "data"?: {
        /** A record of returned items arriving at a location. */
        "object": ReturnReceipt;
    };
    /** Value enum: "return_receipt.verified". */
    "event_type"?: "return_receipt.verified";
});
export type ReturnReceiptsGetParams = {};
export type ReturnReceiptsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
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
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return receipt ID or external reference ID. */
    "query"?: InputValue<string>;
    /** Inclusive lower bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_before"?: InputValue<string | globalThis.Date>;
    /** Filter by receiving location id. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "receiving_location_id"?: InputValue<string>;
    /** Filter by return id. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_id"?: InputValue<string>;
    /** Filter by return line item id. Example: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_line_item_id"?: InputValue<string>;
    /** Filter by shipment id. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "shipment_id"?: InputValue<string>;
    /**
     * Filter by source system type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "manual",
     * "pos", "wms", "erp", "other", "flint". Value enum: "manual", "pos", "wms", "erp", "other",
     * "flint". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms",
     * "erp", "other", "flint". anyOf[1][] (Value): string. Value enum: "manual", "pos", "wms",
     * "erp", "other", "flint". anyOf[2] (Value): string. Value enum: "manual", "pos", "wms",
     * "erp", "other", "flint".
     */
    "source_system_type"?: InputValue<("manual" | "pos" | "wms" | "erp" | "other" | "flint")
        | readonly ("manual" | "pos" | "wms" | "erp" | "other" | "flint")[]>;
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "current", "superseded".
     * Value enum: "current", "superseded". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "current", "superseded". anyOf[1][] (Value): string. Value enum: "current",
     * "superseded". anyOf[2] (Value): string. Value enum: "current", "superseded".
     */
    "status"?: InputValue<("current" | "superseded") | readonly ("current" | "superseded")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by verification status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "matched", "unverified", "excess". Value enum: "matched", "unverified", "excess". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "matched", "unverified", "excess".
     * anyOf[1][] (Value): string. Value enum: "matched", "unverified", "excess". anyOf[2] (Value):
     * string. Value enum: "matched", "unverified", "excess".
     */
    "verification_status"?: InputValue<("matched" | "unverified" | "excess") | readonly ("matched" | "unverified" | "excess")[]>;
};
export type ReturnReceiptsVerifyLineItemParams = (InputValue<VerifyReturnReceiptLineItemRequestInput>);
export type ReturnReopenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.reopened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.reopened";
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
    "event_type": "return.reopened";
});
/**
 * The `return.reopened` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReturnReopenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.reopened". */
    "event_type"?: "return.reopened";
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
 * The `return.reopened` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReturnReopenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.reopened". */
    "event_type"?: "return.reopened";
});
/** A replacement item added to a return resolution, with its quantity and price totals. */
export type ReturnReplacementLineItem = {
    "bundle_id"?: string;
    "description"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "discount_money": MoneyValue;
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    "return_replacement_line_item_id": string;
    "return_resolution_id": string;
    "sku"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "subtotal_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "total_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    "variant_id"?: string;
};
/** The `bundle` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputBundle = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": unknown;
    /** minLength: 1. */
    "bundle_id": string;
}));
/** The `bundle` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputBundleInput = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle";
    /** minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "name"?: never;
})));
/** The `custom` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputCustom = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": unknown;
    /** minLength: 1. */
    "name": string;
}));
/** The `custom` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputCustomInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom";
    /** minLength: 1. */
    "name": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputVariant = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": unknown;
    /** minLength: 1. */
    "variant_id": string;
}));
/** The `variant` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputVariantInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant";
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}) & ({
    "name"?: never;
})));
/**
 * A replacement item to include in a return resolution, from a variant, a bundle, or a custom name
 * and price.
 */
export type ReturnReplacementLineItemRequest = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<ReturnReplacementLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A replacement item to include in a return resolution, from a variant, a bundle, or a custom name
 * and price.
 */
export type ReturnReplacementLineItemRequestInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<ReturnReplacementLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputCustomInput & object, readonly unknown[]>));
/** The refund, exchange, or other outcome of a return. */
export type ReturnResolution = {
    /**
     * Value enum: "buyer_payment", "buyer_selection", "merchant_review", "manual_release",
     * "linked_effect_retry", "other".
     */
    "action_reason"?: "buyer_payment"
        | "buyer_selection"
        | "merchant_review"
        | "manual_release"
        | "linked_effect_retry"
        | "other"
        | (string & {});
    /** Value enum: "buyer", "merchant". */
    "action_required_by"?: "buyer" | "merchant" | (string & {});
    /**
     *  [] (Value): {@link ReturnResolutionAdjustment}. A fee or credit applied to a return
     * resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.
     */
    "adjustments": Array<ReturnResolutionAdjustment>;
    /**
     * Amount the buyer owes when deduction_money and replacement_total_money exceed
     * returned_total_money plus credit_money. Zero when the buyer is owed a refund and for
     * no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Value returned to the buyer: returned_total_money plus credit_money, minus deduction_money
     * and replacement_total_money, when that balance is zero or more. For store_credit, the value
     * issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    "cancellation_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "confirmed_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "confirmed_by"?: ReturnActor;
    "corrects_return_resolution_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "created_by": ReturnActor;
    /**
     * Credits added by the resolution's adjustments. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     *  [] (Value): {@link ReturnResolutionExecutionBlocker}. Work that must complete before a
     * Return resolution can finish.
     */
    "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Reason code for a failed Return resolution, when available. refund_line_value_unavailable
     * means another refund already returned part of an order line, so retrying cannot succeed;
     * cancel the resolution and resolve the line for fewer units or without a refund.
     * replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so
     * it won't be sent. gift_card_refund_destination_required means the original gift card cannot
     * accept the refund; retry with gift_card_refund_destination set to new_gift_card.
     * store_credit_unavailable means the original payment cannot fund store credit; cancel the
     * resolution and create a refund resolution. Value enum:
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed".
     */
    "failure_code"?: "gift_card_refund_destination_required"
        | "store_credit_unavailable"
        | "refund_creation_failed"
        | "refund_failed"
        | "refund_line_value_unavailable"
        | "payment_intent_creation_failed"
        | "payment_failed"
        | "replacement_order_creation_failed"
        | "replacement_fulfillment_canceled"
        | "resolution_effect_failed"
        | (string & {});
    /** Explanation of a failed Return resolution, when available. */
    "failure_message"?: string;
    /** When the resolution became fulfilled. Format: date-time. */
    "fulfilled_at"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     *  [] (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution, with
     * its quantity and returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /**  [] (Value): string. */
    "payment_intent_ids": Array<string>;
    /**
     *  [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields,
     * including amount, status, and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**  [] (Value): string. */
    "refund_ids": Array<string>;
    /**  [] (Value): {@link Refund}. Money returned against a collected payment. */
    "refunds"?: Array<Refund>;
    /**
     *  [] (Value): {@link ReturnReplacementLineItem}. A replacement item added to a return
     * resolution, with its quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Present only when `expand` includes `replacement_order`; `null` when expanded and there is
     * no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. anyOf[2] (Value): null.
     */
    "replacement_order"?: ((ExpandedOrderSummary) | (null));
    "replacement_order_id"?: string;
    /**
     * Total of the replacement items the buyer receives. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    "return_id": string;
    "return_policy_revision_id"?: string;
    "return_resolution_id": string;
    /**
     * Value of the returned units this resolution covers. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
    /**
     * fulfilled means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     */
    "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
    /**
     * Actions that can succeed now. Empty unless the parent Return is open, except
     * checkout_session. A failed resolution lists retry while it has a failed effect and its
     * failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent,
     * or Order. [] enum: "cancel", "checkout_session", "confirm", "release", "retry". [] (Value):
     * string. Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     */
    "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. minimum: 0. */
    "version": number;
};
/**
 * A fee or credit applied to a return resolution, such as a restocking fee, with the assessed and
 * applied amounts and any waiver.
 */
export type ReturnResolutionAdjustment = {
    /**
     * Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit",
     * "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "assessed_amount_money": MoneyValue;
    /**
     * Value enum: "return_policy", "inspection_result", "return_shipping_cost",
     * "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    "reason_message"?: string;
    "return_line_item_id"?: string;
    "return_policy_revision_id"?: string;
    "return_resolution_adjustment_id": string;
    /** Value enum: "applied", "waived". */
    "status": "applied" | "waived" | (string & {});
    /** Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "waived_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "waived_by"?: ReturnActor;
    /** Value enum: "policy_override", "merchant_review", "customer_service", "other". */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    "waiver_reason_message"?: string;
};
/**
 * A fee or credit to apply to a return resolution, with the assessed and applied amounts and
 * whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequest = {
    /**
     * Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit",
     * "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "assessed_amount_money": MoneyValue;
    /**
     * Value enum: "return_policy", "inspection_result", "return_shipping_cost",
     * "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "return_line_item_id"?: string;
    /** Value enum: "applied", "waived". */
    "status"?: "applied" | "waived" | (string & {});
    /** Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
    /** Value enum: "policy_override", "merchant_review", "customer_service", "other". */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * A fee or credit to apply to a return resolution, with the assessed and applied amounts and
 * whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequestInput = {
    /**
     * Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit",
     * "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_amount_money": MoneyValueInput;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Value enum: "return_policy", "inspection_result", "return_shipping_cost",
     * "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "return_line_item_id"?: string;
    /** Value enum: "applied", "waived". */
    "status"?: "applied" | "waived";
    /** Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit";
    /** Value enum: "policy_override", "merchant_review", "customer_service", "other". */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** minLength: 1. */
    "waiver_reason_message"?: string;
};
export type ReturnResolutionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResolution;
    };
    "event_type"?: "return_resolution.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResolution;
    };
    "event_type"?: "return_resolution.created";
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
    "event_type": "return_resolution.created";
});
/**
 * The `return_resolution.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnResolutionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnResolution}. The refund, exchange, or other outcome of a
     * return.
     */
    "data"?: {
        /** The refund, exchange, or other outcome of a return. */
        "object": ReturnResolution;
    };
    /** Value enum: "return_resolution.created". */
    "event_type"?: "return_resolution.created";
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
 * The `return_resolution.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnResolutionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnResolution}. The refund, exchange, or other outcome of a
     * return.
     */
    "data"?: {
        /** The refund, exchange, or other outcome of a return. */
        "object": ReturnResolution;
    };
    /** Value enum: "return_resolution.created". */
    "event_type"?: "return_resolution.created";
});
/** Work that must complete before a Return resolution can finish. */
export type ReturnResolutionExecutionBlocker = {
    /**
     * handoff_pending: The buyer has not handed off the required merchandise. receipt_pending:
     * Required merchandise has not been received. inspection_pending: Required inspection is
     * incomplete. manual_release_pending: The merchant must release the resolution.
     * buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked
     * Refund has not succeeded. replacement_order_pending: The replacement Order has not been
     * created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet
     * fulfilled. Value enum: "handoff_pending", "receipt_pending", "inspection_pending",
     * "manual_release_pending", "buyer_payment_pending", "refund_pending",
     * "replacement_order_pending", "fulfillment_pending".
     */
    "code": "handoff_pending"
        | "receipt_pending"
        | "inspection_pending"
        | "manual_release_pending"
        | "buyer_payment_pending"
        | "refund_pending"
        | "replacement_order_pending"
        | "fulfillment_pending"
        | (string & {});
    /** A reference to another resource by `resource_type` and `resource_id`. */
    "linked_resource"?: ResourceReference;
    "return_line_item_id"?: string;
};
/** A return line included in a resolution, with its quantity and returned total. */
export type ReturnResolutionLineItem = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Release gate for every resolution type, including exchanges and replacements. Released after
     * the Return is approved. Released after the buyer hands back the required merchandise.
     * Released after the required merchandise is received. Released after the required merchandise
     * passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release.
     * Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection",
     * "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    "return_line_item_id": string;
    "return_resolution_id": string;
    "return_resolution_line_item_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "returned_total_money": MoneyValue;
};
/** A return line and quantity to include in a return resolution. */
export type ReturnResolutionLineItemRequest = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_line_item_id": string;
};
/** A return line and quantity to include in a return resolution. */
export type ReturnResolutionLineItemRequestInput = ReturnResolutionLineItemRequest;
/**
 * A preview of a return resolution before it is created: returned and replacement totals,
 * adjustments, and amounts due to or from the buyer.
 */
export type ReturnResolutionPreview = {
    /**
     *  [] (Value): {@link ReturnResolutionAdjustment}. A fee or credit applied to a return
     * resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.
     */
    "adjustments": Array<ReturnResolutionAdjustment>;
    /** Format: int64. minimum: 0. */
    "based_on_return_version": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "buyer_payment_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "buyer_refund_amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "calculated_at": string;
    "corrects_return_resolution_id"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "credit_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "deduction_money": MoneyValue;
    /**
     *  [] (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution, with
     * its quantity and returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     *  [] (Value): {@link ReturnReplacementLineItem}. A replacement item added to a return
     * resolution, with its quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "replacement_total_money": MoneyValue;
    /**
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    "return_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "returned_total_money": MoneyValue;
};
export type ReturnResolutionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResolution;
    };
    "event_type"?: "return_resolution.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResolution;
    };
    "event_type"?: "return_resolution.updated";
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
    "event_type": "return_resolution.updated";
});
/**
 * The `return_resolution.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnResolutionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnResolution}. The refund, exchange, or other outcome of a
     * return.
     */
    "data"?: {
        /** The refund, exchange, or other outcome of a return. */
        "object": ReturnResolution;
    };
    /** Value enum: "return_resolution.updated". */
    "event_type"?: "return_resolution.updated";
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
 * The `return_resolution.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnResolutionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnResolution}. The refund, exchange, or other outcome of a
     * return.
     */
    "data"?: {
        /** The refund, exchange, or other outcome of a return. */
        "object": ReturnResolution;
    };
    /** Value enum: "return_resolution.updated". */
    "event_type"?: "return_resolution.updated";
});
export type ReturnResolutionsCancelParams = (InputValue<CancelReturnResolutionRequestInput>);
export type ReturnResolutionsConfirmParams = (InputValue<ConfirmReturnResolutionRequestInput>);
export type ReturnResolutionsCreateCheckoutSessionParams = MeCreateReturnResolutionCheckoutSessionParams;
export type ReturnResolutionsGetParams = {
    /**
     * Supported expansions: payment_intents, refunds, replacement_order. Expanded relationships
     * are returned only when explicitly requested and authorized. Limits: at most 10 unique expand
     * paths per request. To-many expansions are capped at 20 related objects per path. Repeat
     * expand, for example expand=payment_intents&expand=refunds, or pass one comma-separated
     * value. [] enum: "payment_intents", "refunds", "replacement_order". Value enum:
     * "payment_intents", "refunds", "replacement_order". anyOf[1] (Value): Array of string. []
     * enum: "payment_intents", "refunds", "replacement_order". anyOf[1][] (Value): string. Value
     * enum: "payment_intents", "refunds", "replacement_order". anyOf[2] (Value): string. Value
     * enum: "payment_intents", "refunds", "replacement_order".
     */
    "expand"?: InputValue<("payment_intents" | "refunds" | "replacement_order")
        | readonly ("payment_intents" | "refunds" | "replacement_order")[]>;
};
export type ReturnResolutionsListParams = {
    /**
     * Filter by action required by. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "buyer",
     * "merchant", "integration". Value enum: "buyer", "merchant", "integration". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "buyer", "merchant", "integration". anyOf[1][]
     * (Value): string. Value enum: "buyer", "merchant", "integration". anyOf[2] (Value): string.
     * Value enum: "buyer", "merchant", "integration".
     */
    "action_required_by"?: InputValue<("buyer" | "merchant" | "integration") | readonly ("buyer" | "merchant" | "integration")[]>;
    /** Filter by corrects return resolution id. */
    "corrects_return_resolution_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return resolution ID or external reference ID. */
    "query"?: InputValue<string>;
    /**
     * Filter by resolution type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "refund",
     * "exchange", "replacement", "store_credit", "no_monetary_action", "correction". Value enum:
     * "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1][] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". anyOf[2] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type"?: InputValue<("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")
        | readonly ("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")[]>;
    /** Filter by return id. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_id"?: InputValue<string>;
    /** Filter by return line item id. Example: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_line_item_id"?: InputValue<string>;
    /** Filter by return policy revision id. Example: "rpolv_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_policy_revision_id"?: InputValue<string>;
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "proposed", "pending",
     * "requires_action", "fulfilled", "failed", "canceled". Value enum: "proposed", "pending",
     * "requires_action", "fulfilled", "failed", "canceled". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "proposed", "pending", "requires_action", "fulfilled", "failed",
     * "canceled". anyOf[1][] (Value): string. Value enum: "proposed", "pending",
     * "requires_action", "fulfilled", "failed", "canceled". anyOf[2] (Value): string. Value enum:
     * "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     */
    "status"?: InputValue<("proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled")
        | readonly ("proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: replacement_order. Include the requested related resources using
     * scoped batch reads for this page. Each relationship requires its existing target read
     * scopes. Expansion changes the representation without changing pagination tokens. Limits: at
     * most 10 unique expand paths per request. Pass expand=replacement_order. [] enum:
     * "replacement_order". Value enum: "replacement_order". anyOf[1] (Value): Array of string. []
     * enum: "replacement_order". anyOf[1][] (Value): string. Value enum: "replacement_order".
     * anyOf[2] (Value): string. Value enum: "replacement_order".
     */
    "expand"?: InputValue<("replacement_order") | readonly ("replacement_order")[]>;
};
export type ReturnResolutionsReleaseParams = (InputValue<ReleaseReturnResolutionRequestInput>);
export type ReturnResolutionsRetryParams = (InputValue<RetryReturnResolutionRequestInput>);
export type ReturnResolutionsUpdateParams = (InputValue<UpdateReturnResolutionRequestInput>);
/** A request to send purchased items back. */
export type ReturnResource = {
    /**
     * What the buyer can do with the return, in this order: withdraw, ship_items, then
     * pay_balance. A buyer's read or change through a customer session on /v1/me, or in Flint's
     * buyer account, lists all three every time; merchant reads and webhooks get an empty list.
     * ship_items is required while handoff_requirements is not empty, due by the earliest
     * expires_at there. pay_balance is required while a resolution waits for the buyer's payment.
     * Example: []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /** RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    "cancellation_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "completed_by"?: ReturnActor;
    /**
     *  [] (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
     * complete, with the return line or record it concerns.
     */
    "completion_blockers": Array<ReturnCompletionBlocker>;
    /**
     * automatic completes the Return when the last completion blocker clears; manual waits for
     * POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** Value enum: "manual_completion", "exception_waived", "other". */
    "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
    "completion_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    "customer_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /** Value enum: "pending", "approved", "partially_approved", "declined". */
    "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * The money for a return: returned value, deductions, credits, replacement total, and amounts
     * due to or from the buyer.
     */
    "financial_summary": ReturnFinancialSummary;
    /**
     *  [] (Value): {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise
     * back: the destination, instructions, line items, and expiry.
     */
    "handoff_requirements": Array<ReturnHandoffRequirement>;
    /**
     * Who created the Return, from the credential that sent the request: buyer for a customer
     * session on /v1/me or Flint's hosted account, merchant for a Dashboard user, integration for
     * an API key or partner app. It cannot be sent. Value enum: "buyer", "merchant",
     * "integration".
     */
    "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
    /**  [] (Value): {@link ReturnLineItem}. An item included in a return request. */
    "line_items": Array<ReturnLineItem>;
    /**
     * On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception".
     */
    "merchandise_status": "not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception"
        | (string & {});
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    "order_id": string;
    /**
     * How a return policy evaluated a return request: overall status and reason, the policy
     * revision used, and per-line results.
     */
    "policy_evaluation"?: ReturnPolicyEvaluation;
    /**
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status": "not_selected"
        | "pending"
        | "partially_fulfilled"
        | "requires_action"
        | "fulfilled"
        | "failed"
        | (string & {});
    /**
     * IDs of every disposition recorded for this Return, oldest first, including failed and
     * canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read
     * them inline. [] (Value): string.
     */
    "return_disposition_ids": Array<string>;
    /**
     *  [] (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled.
     */
    "return_dispositions"?: Array<ReturnDisposition>;
    "return_id": string;
    /**
     * IDs of every inspection recorded for this Return, oldest first, including superseded
     * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them
     * inline. [] (Value): string.
     */
    "return_inspection_ids": Array<string>;
    /**  [] (Value): {@link ReturnInspection}. An assessment of the condition of returned items. */
    "return_inspections"?: Array<ReturnInspection>;
    "return_number": string;
    /**
     * IDs of every receipt recorded for this Return, oldest first, including superseded receipts.
     * Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline. [] (Value):
     * string.
     */
    "return_receipt_ids": Array<string>;
    /**  [] (Value): {@link ReturnReceipt}. A record of returned items arriving at a location. */
    "return_receipts"?: Array<ReturnReceipt>;
    /**
     * IDs of every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. [] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /**
     *  [] (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "return_resolutions"?: Array<ReturnResolution>;
    /**
     * IDs of every shipment raised to send this Return's items back, oldest first, including
     * voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * [] (Value): string.
     */
    "shipment_ids": Array<string>;
    /**
     *  [] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields, including
     * direction, status, and package count, returned when the shipment is expanded.
     */
    "shipments"?: Array<ExpandedShipmentSummary>;
    /** Value enum: "requested", "open", "completed", "declined", "canceled". */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum: "cancel",
     * "complete", "decide", "reopen".
     */
    "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. minimum: 0. */
    "version": number;
};
/** A restocking fee in a return policy, charged as a flat amount or a percent. */
export type ReturnRestockingFeePolicy = {
    /** Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValue;
    /** Format: double. multipleOf: 0.0001. */
    "percent"?: number;
};
/** A restocking fee in a return policy, charged as a flat amount or a percent. */
export type ReturnRestockingFeePolicyInput = {
    /** Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValueInput;
    /** Format: double. multipleOf: 0.0001. */
    "percent"?: number;
};
/** A return line and the quantity placed in a return shipment or package. */
export type ReturnShipmentLineItemAllocationRequestInput = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** Return line whose quantity is allocated to the shipment or package. minLength: 1. */
    "return_line_item_id": string;
};
/** Who pays for return shipping in a return policy: the merchant or the buyer. */
export type ReturnShippingPolicy = {
    /** Value enum: "merchant", "buyer". */
    "payer": "merchant" | "buyer" | (string & {});
};
/** Who pays for return shipping in a return policy: the merchant or the buyer. */
export type ReturnShippingPolicyInput = {
    /** Value enum: "merchant", "buyer". */
    "payer": "merchant" | "buyer";
};
/**
 * The system a return event came from, such as a point of sale or warehouse system, with its own
 * identifier.
 */
export type ReturnSourceSystem = ({
    /**
     * Your source system's identifier. Required when source_system_type is pos, wms, erp, or
     * other; not allowed when source_system_type is manual. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other", "flint".
     */
    "source_system_type": "manual" | "pos" | "wms" | "erp" | "other" | "flint" | (string & {});
});
/**
 * The system a return event came from, such as a point of sale or warehouse system, with its own
 * identifier.
 */
export type ReturnSourceSystemRequest = ({
    /**
     * Your source system's identifier. Required when source_system_type is pos, wms, erp, or
     * other; not allowed when source_system_type is manual. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other".
     */
    "source_system_type": "manual" | "pos" | "wms" | "erp" | "other" | (string & {});
});
/**
 * The system a return event came from, such as a point of sale or warehouse system, with its own
 * identifier.
 */
export type ReturnSourceSystemRequestInput = ({
    /**
     * Your source system's identifier. Required when source_system_type is pos, wms, erp, or
     * other; not allowed when source_system_type is manual. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other".
     */
    "source_system_type": "manual" | "pos" | "wms" | "erp" | "other";
});
/**
 * Merchandise received in a return that does not match an expected return line, described by name,
 * SKU, and description.
 */
export type ReturnUnverifiedItem = {
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name": string;
    /** minLength: 1. */
    "sku"?: string;
};
