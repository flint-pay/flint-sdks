import type {
    ReturnUnverifiedItemInput,
    ReturnUnverifiedItem,
    ReturnUnverifiedItemPreviousAttributes,
    ReturnSourceSystemPreviousAttributes,
    ReturnSourceSystem
} from './types-66.js';
import type {
    ReturnActorPreviousAttributes,
    ReturnActor,
    ResourceReference,
    ResourceReferencePreviousAttributes,
    RetryReturnResolutionRequestInput
} from './types-62.js';
import type {
    ReturnReceiptLineItemInputExcess,
    ReturnReceiptLineItem,
    ReturnLineItemPreviousAttributes,
    ReturnPolicyEvaluation,
    ReturnPolicyEvaluationPreviousAttributes
} from './types-64.js';
import type {
    ReturnDispositionPreviousAttributes,
    ReturnCompletionBlocker,
    ReturnCompletionBlockerPreviousAttributes,
    ReturnFinancialSummary,
    ReturnFinancialSummaryPreviousAttributes,
    ReturnHandoffRequirement,
    ReturnHandoffRequirementPreviousAttributes,
    ReturnInspectionPreviousAttributes
} from './types-63.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type {
    WebhookSnapshotReturnDisposition,
    WebhookSnapshotReturnInspection,
    WebhookSnapshotReturnLineItem,
    WebhookSnapshotReturnReceipt,
    WebhookSnapshotReturnResolution,
    WebhookSnapshotRefund
} from './types-79.js';
import type { InputValue } from '../runtime.js';
import type { CreateReturnReceiptRequestInput, CreateReturnResolutionRequestInput } from './types-13.js';
import type {
    DisputesAcceptParams,
    ExpandedCustomerSummary,
    ExpandedCustomerSummaryPreviousAttributes,
    ExpandedOrderSummary,
    ExpandedOrderSummaryPreviousAttributes,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentIntentSummaryPreviousAttributes
} from './types-26.js';
import type { VerifyReturnReceiptLineItemRequestInput } from './types-78.js';
import type { MoneyValue, MoneyValueInput, MoneyValuePreviousAttributes } from './types-44.js';
import type { ExpandedShipmentSummary, ExpandedShipmentSummaryPreviousAttributes } from './types-27.js';
import type { LineItemFulfillmentRequest, LineItemFulfillmentRequestModelInput } from './types-40.js';
import type { TaxCalculationRequest } from './types-74.js';
import type { OrderDraftLineItemTaxCalculationRequestModelInput } from './types-45.js';
import type { Refund } from './types-60.js';
import type { RefundPreviousAttributes, ReleaseReturnResolutionRequestInput } from './types-61.js';
import type { CancelReturnResolutionRequestInput } from './types-5.js';
import type { ConfirmReturnResolutionRequestInput } from './types-8.js';
/** The `excess` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputExcessInput = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
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
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
})
    & ({
    "unverified_item"?: never;
}));
/** The `matched` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputMatched = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
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
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
}));
/** The `matched` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputMatchedInput = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
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
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
})
    & ({
    "unverified_item"?: never;
}));
/** The `unverified` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputUnverified = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
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
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
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
export type ReturnReceiptLineItemPreviousAttributes = {
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "available_disposition_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1]
     * (Value): string. Return that owns return_line_item_id. `null` when return_line_item_id is
     * null. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * ID of the Return line the units were matched to. Absent for unverified units. anyOf[1]
     * (Value): string. ID of the Return line the units were matched to. Absent for unverified
     * units. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     */
    "return_line_item_id"?: ((string) | (null));
    /**
     * ID of the receipt the line belongs to. anyOf[1] (Value): string. ID of the receipt the line
     * belongs to. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
     */
    "return_receipt_id"?: ((string) | (null));
    /**
     * Unique identifier for this return receipt line item, prefixed `retrcli_`. anyOf[1] (Value):
     * string. Unique identifier for this return receipt line item, prefixed `retrcli_`. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". anyOf[2] (Value): null.
     */
    "return_receipt_line_item_id"?: ((string) | (null));
    /**
     * Actions that can succeed now. Actions the API key or token doesn't have the scope for are
     * left out. `verify` is listed while the receipt is current and the line's
     * `verification_status` is `unverified`. Otherwise empty. [] enum: "verify". anyOf[1] (Value):
     * Array of string. Actions that can succeed now. Actions the API key or token doesn't have the
     * scope for are left out. `verify` is listed while the receipt is current and the line's
     * `verification_status` is `unverified`. Otherwise empty. [] enum: "verify". anyOf[1][]
     * (Value): string. Value enum: "verify". anyOf[2] (Value): null.
     */
    "supported_actions"?: ((Array<"verify" | (string & {})>) | (null));
    /**
     * What the operator recorded for units that match no line. Present on `unverified` lines.
     * anyOf[1] (Value): {@link ReturnUnverifiedItemPreviousAttributes}. anyOf[2] (Value): null.
     */
    "unverified_item"?: ((ReturnUnverifiedItemPreviousAttributes) | (null));
    /**
     * Why the units were verified against the line. Value enum: "order_match_confirmed",
     * "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other". anyOf[1] (Value):
     * string. Why the units were verified against the line. Value enum: "order_match_confirmed",
     * "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other". anyOf[2] (Value):
     * null.
     */
    "verification_reason"?: (("order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Detail about `verification_reason`. anyOf[1] (Value): string. Detail about
     * `verification_reason`. anyOf[2] (Value): null.
     */
    "verification_reason_message"?: ((string) | (null));
    /**
     * Whether the units are matched to a line. Value enum: "matched", "unverified", "excess".
     * anyOf[1] (Value): string. Whether the units are matched to a line. Value enum: "matched",
     * "unverified", "excess". anyOf[2] (Value): null.
     */
    "verification_status"?: (("matched" | "unverified" | "excess" | (string & {})) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "verified_at"?: ((string) | (null));
    /**
     * Who verified the line. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "verified_by"?: ((ReturnActorPreviousAttributes) | (null));
};
/**
 * One line of received merchandise: a matched return line, excess quantity, or an unverified item.
 */
export type ReturnReceiptLineItemRequest = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
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
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
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
export type ReturnReceiptPreviousAttributes = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". anyOf[1] (Value): string. Why
     * this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". anyOf[2] (Value): null.
     */
    "correction_reason"?: (("entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Detail about `correction_reason`. anyOf[1] (Value): string. Detail about
     * `correction_reason`. anyOf[2] (Value): null.
     */
    "correction_reason_message"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * anyOf[1] (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_actor_id"?: ((string) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_reference_id"?: ((string) | (null));
    /**
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Dispositions Flint created when it recorded this
     * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`. anyOf[1][]
     * (Value): {@link ReturnDispositionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
    /**
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. anyOf[1] (Value): string. The
     * Idempotency-Key of the request that created this resource. `null` when that request sent no
     * key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource. anyOf[2] (Value): null.
     */
    "idempotency_key"?: ((string) | (null));
    /**
     * The lines recorded. anyOf[1] (Value): Array of {@link
     * ReturnReceiptLineItemPreviousAttributes}. The lines recorded. anyOf[1][] (Value): {@link
     * ReturnReceiptLineItemPreviousAttributes}. anyOf[2] (Value): null.
     */
    "line_items"?: ((Array<ReturnReceiptLineItemPreviousAttributes>) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "received_at"?: ((string) | (null));
    /**
     * ID of the Location that received the goods. anyOf[1] (Value): string. ID of the Location
     * that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "receiving_location_id"?: ((string) | (null));
    /**
     * ID of the Return the goods belong to. anyOf[1] (Value): string. ID of the Return the goods
     * belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * Unique identifier for this return receipt, prefixed `retrc_`. anyOf[1] (Value): string.
     * Unique identifier for this return receipt, prefixed `retrc_`. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
     */
    "return_receipt_id"?: ((string) | (null));
    /**
     * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a
     * shipment. anyOf[1] (Value): string. ID of the return shipment the goods arrived in. Absent
     * when the receipt isn't tied to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * anyOf[2] (Value): null.
     */
    "shipment_id"?: ((string) | (null));
    /**
     * System that recorded the observation. `null` when no source system was recorded. anyOf[1]
     * (Value): {@link ReturnSourceSystemPreviousAttributes}. anyOf[2] (Value): null.
     */
    "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
    /**
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded". anyOf[1] (Value): string. Whether this is the current
     * observation of these units or a correction replaced it. Value enum: "current", "superseded".
     * anyOf[2] (Value): null.
     */
    "status"?: (("current" | "superseded" | (string & {})) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "superseded_at"?: ((string) | (null));
    /**
     * ID of the receipt that corrected this one. Absent while it is current. anyOf[1] (Value):
     * string. ID of the receipt that corrected this one. Absent while it is current. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
     */
    "superseded_by_return_receipt_id"?: ((string) | (null));
    /**
     * ID of the receipt this one corrects. anyOf[1] (Value): string. ID of the receipt this one
     * corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
     */
    "supersedes_return_receipt_id"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. anyOf[2] (Value): null.
     */
    "version"?: ((number) | (null));
};
export type ReturnReceiptSupersededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
            "idempotency_key"?: string | null;
            "line_items": Array<ReturnReceiptLineItem>;
            "received_at": string;
            "receiving_location_id": string;
            "return_id": string;
            "return_receipt_id": string;
            "shipment_id"?: string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_receipt_id"?: string;
            "supersedes_return_receipt_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            "correction_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "external_actor_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "idempotency_key"?: ((string) | (null));
            "line_items"?: ((Array<ReturnReceiptLineItemPreviousAttributes>) | (null));
            "received_at"?: ((string) | (null));
            "receiving_location_id"?: ((string) | (null));
            "return_id"?: ((string) | (null));
            "return_receipt_id"?: ((string) | (null));
            "shipment_id"?: ((string) | (null));
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            "superseded_at"?: ((string) | (null));
            "superseded_by_return_receipt_id"?: ((string) | (null));
            "supersedes_return_receipt_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_receipt.superseded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
            "idempotency_key"?: string | null;
            "line_items": Array<ReturnReceiptLineItem>;
            "received_at": string;
            "receiving_location_id": string;
            "return_id": string;
            "return_receipt_id": string;
            "shipment_id"?: string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_receipt_id"?: string;
            "supersedes_return_receipt_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            "correction_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "external_actor_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "idempotency_key"?: ((string) | (null));
            "line_items"?: ((Array<ReturnReceiptLineItemPreviousAttributes>) | (null));
            "received_at"?: ((string) | (null));
            "receiving_location_id"?: ((string) | (null));
            "return_id"?: ((string) | (null));
            "return_receipt_id"?: ((string) | (null));
            "shipment_id"?: ((string) | (null));
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            "superseded_at"?: ((string) | (null));
            "superseded_by_return_receipt_id"?: ((string) | (null));
            "supersedes_return_receipt_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_receipt.superseded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link WebhookSnapshotReturnDisposition}.
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. object.line_items (Required): Array of {@link
     * ReturnReceiptLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnReceiptLineItem}. A returned item recorded as received. object.received_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.receiving_location_id (Required): string. ID of the Location that received the goods.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.return_id (Required): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_receipt_id (Required): string. Unique identifier for this return receipt,
     * prefixed `retrc_`. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id
     * (Optional): string. ID of the return shipment the goods arrived in. Absent when the receipt
     * isn't tied to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_receipt_id (Optional): string. ID of the receipt that corrected
     * this one. Absent while it is current. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.supersedes_return_receipt_id (Optional): string. ID of the receipt this one corrects.
     * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     * previous_attributes (Optional): object and {@link ReturnReceiptPreviousAttributes}. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.correction_reason (Optional): string or null. Why
     * this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[1] (Value): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[2] (Value): null.
     * previous_attributes.correction_reason_message (Optional): string or null. Detail about
     * `correction_reason`. previous_attributes.correction_reason_message.anyOf[1] (Value): string.
     * Detail about `correction_reason`. previous_attributes.correction_reason_message.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_actor_id (Optional): string or null. Your identifier for
     * the actor who recorded the event. Don't put secrets in this field.
     * previous_attributes.external_actor_id.anyOf[1] (Value): string. Your identifier for the
     * actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_actor_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.generated_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Dispositions Flint created when it recorded
     * this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Dispositions Flint created when it recorded this
     * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.generated_dispositions.anyOf[2]
     * (Value): null. previous_attributes.idempotency_key (Optional): string or null. The
     * Idempotency-Key of the request that created this resource. `null` when that request sent no
     * key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     * previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. previous_attributes.idempotency_key.anyOf[2] (Value):
     * null. previous_attributes.line_items (Optional): Array of {@link
     * ReturnReceiptLineItemPreviousAttributes} or null. The lines recorded.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnReceiptLineItemPreviousAttributes}. The lines recorded.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * ReturnReceiptLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.receiving_location_id (Optional): string or null. ID of
     * the Location that received the goods. previous_attributes.receiving_location_id.anyOf[1]
     * (Value): string. ID of the Location that received the goods. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.receiving_location_id.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. ID of the Return
     * the goods belong to. previous_attributes.return_id.anyOf[1] (Value): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null. previous_attributes.return_receipt_id
     * (Optional): string or null. Unique identifier for this return receipt, prefixed `retrc_`.
     * previous_attributes.return_receipt_id.anyOf[1] (Value): string. Unique identifier for this
     * return receipt, prefixed `retrc_`. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.shipment_id (Optional): string or null. ID of the return shipment the
     * goods arrived in. Absent when the receipt isn't tied to a shipment.
     * previous_attributes.shipment_id.anyOf[1] (Value): string. ID of the return shipment the
     * goods arrived in. Absent when the receipt isn't tied to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". previous_attributes.shipment_id.anyOf[2] (Value): null.
     * previous_attributes.source_system (Optional): {@link ReturnSourceSystemPreviousAttributes}
     * or null. System that recorded the observation. `null` when no source system was recorded.
     * previous_attributes.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystemPreviousAttributes}. previous_attributes.source_system.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Whether this is the current
     * observation of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[1] (Value): string. Whether this is the current observation
     * of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.superseded_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.superseded_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.superseded_at.anyOf[2] (Value): null.
     * previous_attributes.superseded_by_return_receipt_id (Optional): string or null. ID of the
     * receipt that corrected this one. Absent while it is current.
     * previous_attributes.superseded_by_return_receipt_id.anyOf[1] (Value): string. ID of the
     * receipt that corrected this one. Absent while it is current. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.superseded_by_return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.supersedes_return_receipt_id (Optional): string or null. ID of the
     * receipt this one corrects. previous_attributes.supersedes_return_receipt_id.anyOf[1]
     * (Value): string. ID of the receipt this one corrects. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.supersedes_return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. previous_attributes.version.anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * WebhookSnapshotReturnDisposition}. Dispositions Flint created when it recorded this
         * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
         * generated_dispositions[] (Value): {@link WebhookSnapshotReturnDisposition}. A decision
         * about how returned merchandise will be handled. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines
         * recorded. line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded
         * as received. received_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". receiving_location_id (Required): string. ID of the
         * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_receipt_id (Required): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". shipment_id (Optional): string. ID of the return
         * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". source_system (Required): {@link
         * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
         * system was recorded. source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
         * system a return event came from, such as a point of sale or warehouse system, with its
         * own identifier. source_system.anyOf[2] (Value): null. status (Required): string. Whether
         * this is the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". superseded_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_by_return_receipt_id (Optional):
         * string. ID of the receipt that corrected this one. Absent while it is current. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". supersedes_return_receipt_id (Optional): string. ID
         * of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
             * handled.
             */
            "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource.
             */
            "idempotency_key"?: string | null;
            /**
             * The lines recorded. [] (Value): {@link ReturnReceiptLineItem}. A returned item
             * recorded as received.
             */
            "line_items": Array<ReturnReceiptLineItem>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at": string;
            /**
             * ID of the Location that received the goods. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "receiving_location_id": string;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_id": string;
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the receipt that corrected this one. Absent while it is current. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "superseded_by_return_receipt_id"?: string;
            /** ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "supersedes_return_receipt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. correction_reason (Optional): string or null.
         * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id`
         * or `supersedes_return_inspection_id`. Value enum: "entry_error",
         * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
         * correction_reason.anyOf[1] (Value): string. Why this observation replaces an earlier
         * one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`.
         * Value enum: "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason.anyOf[2] (Value): null.
         * correction_reason_message (Optional): string or null. Detail about `correction_reason`.
         * correction_reason_message.anyOf[1] (Value): string. Detail about `correction_reason`.
         * correction_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * external_actor_id (Optional): string or null. Your identifier for the actor who recorded
         * the event. Don't put secrets in this field. external_actor_id.anyOf[1] (Value): string.
         * Your identifier for the actor who recorded the event. Don't put secrets in this field.
         * maxLength: 255. Example: "warehouse-1842". external_actor_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * generated_dispositions (Optional): Array of {@link ReturnDispositionPreviousAttributes}
         * or null. Dispositions Flint created when it recorded this observation. Empty unless the
         * policy's `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1]
         * (Value): Array of {@link ReturnDispositionPreviousAttributes}. Dispositions Flint
         * created when it recorded this observation. Empty unless the policy's
         * `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1][] (Value):
         * {@link ReturnDispositionPreviousAttributes}. generated_dispositions.anyOf[2] (Value):
         * null. idempotency_key (Optional): string or null. The Idempotency-Key of the request
         * that created this resource. `null` when that request sent no key, Flint created the
         * resource, the reader isn't the caller that created it (another app install, a buyer, or
         * the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. idempotency_key.anyOf[1] (Value): string.
         * The Idempotency-Key of the request that created this resource. `null` when that request
         * sent no key, Flint created the resource, the reader isn't the caller that created it
         * (another app install, a buyer, or the merchant reading an app's or buyer's record), or
         * the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. idempotency_key.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link ReturnReceiptLineItemPreviousAttributes} or null. The lines recorded.
         * line_items.anyOf[1] (Value): Array of {@link ReturnReceiptLineItemPreviousAttributes}.
         * The lines recorded. line_items.anyOf[1][] (Value): {@link
         * ReturnReceiptLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. received_at
         * (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. receiving_location_id (Optional): string or null. ID
         * of the Location that received the goods. receiving_location_id.anyOf[1] (Value): string.
         * ID of the Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * receiving_location_id.anyOf[2] (Value): null. return_id (Optional): string or null. ID
         * of the Return the goods belong to. return_id.anyOf[1] (Value): string. ID of the Return
         * the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2]
         * (Value): null. return_receipt_id (Optional): string or null. Unique identifier for this
         * return receipt, prefixed `retrc_`. return_receipt_id.anyOf[1] (Value): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_id.anyOf[2] (Value): null.
         * shipment_id (Optional): string or null. ID of the return shipment the goods arrived in.
         * Absent when the receipt isn't tied to a shipment. shipment_id.anyOf[1] (Value): string.
         * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a
         * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipment_id.anyOf[2] (Value): null.
         * source_system (Optional): {@link ReturnSourceSystemPreviousAttributes} or null. System
         * that recorded the observation. `null` when no source system was recorded.
         * source_system.anyOf[1] (Value): {@link ReturnSourceSystemPreviousAttributes}.
         * source_system.anyOf[2] (Value): null. status (Optional): string or null. Whether this is
         * the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". status.anyOf[1] (Value): string. Whether this is the current
         * observation of these units or a correction replaced it. Value enum: "current",
         * "superseded". status.anyOf[2] (Value): null. superseded_at (Optional): string or null.
         * RFC3339 timestamp. superseded_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_at.anyOf[2] (Value): null.
         * superseded_by_return_receipt_id (Optional): string or null. ID of the receipt that
         * corrected this one. Absent while it is current. superseded_by_return_receipt_id.anyOf[1]
         * (Value): string. ID of the receipt that corrected this one. Absent while it is current.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". superseded_by_return_receipt_id.anyOf[2]
         * (Value): null. supersedes_return_receipt_id (Optional): string or null. ID of the
         * receipt this one corrects. supersedes_return_receipt_id.anyOf[1] (Value): string. ID of
         * the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * supersedes_return_receipt_id.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. version.anyOf[1]
         * (Value): integer. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. Format: int64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other". anyOf[1] (Value): string. Why this observation
             * replaces an earlier one. Send with `supersedes_return_receipt_id` or
             * `supersedes_return_inspection_id`. Value enum: "entry_error",
             * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
             * anyOf[2] (Value): null.
             */
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail about `correction_reason`. anyOf[1] (Value): string. Detail about
             * `correction_reason`. anyOf[2] (Value): null.
             */
            "correction_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. anyOf[1] (Value): string. Your identifier for the actor who recorded the
             * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_actor_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. anyOf[1] (Value): Array of
             * {@link ReturnDispositionPreviousAttributes}. Dispositions Flint created when it
             * recorded this observation. Empty unless the policy's `receipt_disposition_mode` is
             * `automatic`. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. anyOf[1] (Value): string. The Idempotency-Key of the
             * request that created this resource. `null` when that request sent no key, Flint
             * created the resource, the reader isn't the caller that created it (another app
             * install, a buyer, or the merchant reading an app's or buyer's record), or the caller
             * that created an older record is unknown. Filter its list with `idempotency_key` to
             * find it. Recorded payloads, including replayed responses and webhook events, can
             * return `null`. To find a key that a replay returns as `null`, read the resource.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * The lines recorded. anyOf[1] (Value): Array of {@link
             * ReturnReceiptLineItemPreviousAttributes}. The lines recorded. anyOf[1][] (Value):
             * {@link ReturnReceiptLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnReceiptLineItemPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * ID of the Location that received the goods. anyOf[1] (Value): string. ID of the
             * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             * anyOf[2] (Value): null.
             */
            "receiving_location_id"?: ((string) | (null));
            /**
             * ID of the Return the goods belong to. anyOf[1] (Value): string. ID of the Return the
             * goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. anyOf[1] (Value):
             * string. Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_id"?: ((string) | (null));
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. anyOf[1] (Value): string. ID of the return shipment the goods arrived
             * in. Absent when the receipt isn't tied to a shipment. Example:
             * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
             */
            "shipment_id"?: ((string) | (null));
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystemPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded". anyOf[1] (Value): string. Whether this is the
             * current observation of these units or a correction replaced it. Value enum:
             * "current", "superseded". anyOf[2] (Value): null.
             */
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "superseded_at"?: ((string) | (null));
            /**
             * ID of the receipt that corrected this one. Absent while it is current. anyOf[1]
             * (Value): string. ID of the receipt that corrected this one. Absent while it is
             * current. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "superseded_by_return_receipt_id"?: ((string) | (null));
            /**
             * ID of the receipt this one corrects. anyOf[1] (Value): string. ID of the receipt
             * this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value):
             * null.
             */
            "supersedes_return_receipt_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_receipt.superseded". */
    "event_type"?: "return_receipt.superseded";
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
 * The `return_receipt.superseded` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnReceiptSupersededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link WebhookSnapshotReturnDisposition}.
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. object.line_items (Required): Array of {@link
     * ReturnReceiptLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnReceiptLineItem}. A returned item recorded as received. object.received_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.receiving_location_id (Required): string. ID of the Location that received the goods.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.return_id (Required): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_receipt_id (Required): string. Unique identifier for this return receipt,
     * prefixed `retrc_`. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id
     * (Optional): string. ID of the return shipment the goods arrived in. Absent when the receipt
     * isn't tied to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_receipt_id (Optional): string. ID of the receipt that corrected
     * this one. Absent while it is current. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.supersedes_return_receipt_id (Optional): string. ID of the receipt this one corrects.
     * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     * previous_attributes (Optional): object and {@link ReturnReceiptPreviousAttributes}. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.correction_reason (Optional): string or null. Why
     * this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[1] (Value): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[2] (Value): null.
     * previous_attributes.correction_reason_message (Optional): string or null. Detail about
     * `correction_reason`. previous_attributes.correction_reason_message.anyOf[1] (Value): string.
     * Detail about `correction_reason`. previous_attributes.correction_reason_message.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_actor_id (Optional): string or null. Your identifier for
     * the actor who recorded the event. Don't put secrets in this field.
     * previous_attributes.external_actor_id.anyOf[1] (Value): string. Your identifier for the
     * actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_actor_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.generated_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Dispositions Flint created when it recorded
     * this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Dispositions Flint created when it recorded this
     * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.generated_dispositions.anyOf[2]
     * (Value): null. previous_attributes.idempotency_key (Optional): string or null. The
     * Idempotency-Key of the request that created this resource. `null` when that request sent no
     * key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     * previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. previous_attributes.idempotency_key.anyOf[2] (Value):
     * null. previous_attributes.line_items (Optional): Array of {@link
     * ReturnReceiptLineItemPreviousAttributes} or null. The lines recorded.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnReceiptLineItemPreviousAttributes}. The lines recorded.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * ReturnReceiptLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.receiving_location_id (Optional): string or null. ID of
     * the Location that received the goods. previous_attributes.receiving_location_id.anyOf[1]
     * (Value): string. ID of the Location that received the goods. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.receiving_location_id.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. ID of the Return
     * the goods belong to. previous_attributes.return_id.anyOf[1] (Value): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null. previous_attributes.return_receipt_id
     * (Optional): string or null. Unique identifier for this return receipt, prefixed `retrc_`.
     * previous_attributes.return_receipt_id.anyOf[1] (Value): string. Unique identifier for this
     * return receipt, prefixed `retrc_`. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.shipment_id (Optional): string or null. ID of the return shipment the
     * goods arrived in. Absent when the receipt isn't tied to a shipment.
     * previous_attributes.shipment_id.anyOf[1] (Value): string. ID of the return shipment the
     * goods arrived in. Absent when the receipt isn't tied to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". previous_attributes.shipment_id.anyOf[2] (Value): null.
     * previous_attributes.source_system (Optional): {@link ReturnSourceSystemPreviousAttributes}
     * or null. System that recorded the observation. `null` when no source system was recorded.
     * previous_attributes.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystemPreviousAttributes}. previous_attributes.source_system.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Whether this is the current
     * observation of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[1] (Value): string. Whether this is the current observation
     * of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.superseded_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.superseded_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.superseded_at.anyOf[2] (Value): null.
     * previous_attributes.superseded_by_return_receipt_id (Optional): string or null. ID of the
     * receipt that corrected this one. Absent while it is current.
     * previous_attributes.superseded_by_return_receipt_id.anyOf[1] (Value): string. ID of the
     * receipt that corrected this one. Absent while it is current. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.superseded_by_return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.supersedes_return_receipt_id (Optional): string or null. ID of the
     * receipt this one corrects. previous_attributes.supersedes_return_receipt_id.anyOf[1]
     * (Value): string. ID of the receipt this one corrects. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.supersedes_return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. previous_attributes.version.anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * WebhookSnapshotReturnDisposition}. Dispositions Flint created when it recorded this
         * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
         * generated_dispositions[] (Value): {@link WebhookSnapshotReturnDisposition}. A decision
         * about how returned merchandise will be handled. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines
         * recorded. line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded
         * as received. received_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". receiving_location_id (Required): string. ID of the
         * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_receipt_id (Required): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". shipment_id (Optional): string. ID of the return
         * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". source_system (Required): {@link
         * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
         * system was recorded. source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
         * system a return event came from, such as a point of sale or warehouse system, with its
         * own identifier. source_system.anyOf[2] (Value): null. status (Required): string. Whether
         * this is the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". superseded_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_by_return_receipt_id (Optional):
         * string. ID of the receipt that corrected this one. Absent while it is current. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". supersedes_return_receipt_id (Optional): string. ID
         * of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
             * handled.
             */
            "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource.
             */
            "idempotency_key"?: string | null;
            /**
             * The lines recorded. [] (Value): {@link ReturnReceiptLineItem}. A returned item
             * recorded as received.
             */
            "line_items": Array<ReturnReceiptLineItem>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at": string;
            /**
             * ID of the Location that received the goods. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "receiving_location_id": string;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_id": string;
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the receipt that corrected this one. Absent while it is current. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "superseded_by_return_receipt_id"?: string;
            /** ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "supersedes_return_receipt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. correction_reason (Optional): string or null.
         * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id`
         * or `supersedes_return_inspection_id`. Value enum: "entry_error",
         * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
         * correction_reason.anyOf[1] (Value): string. Why this observation replaces an earlier
         * one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`.
         * Value enum: "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason.anyOf[2] (Value): null.
         * correction_reason_message (Optional): string or null. Detail about `correction_reason`.
         * correction_reason_message.anyOf[1] (Value): string. Detail about `correction_reason`.
         * correction_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * external_actor_id (Optional): string or null. Your identifier for the actor who recorded
         * the event. Don't put secrets in this field. external_actor_id.anyOf[1] (Value): string.
         * Your identifier for the actor who recorded the event. Don't put secrets in this field.
         * maxLength: 255. Example: "warehouse-1842". external_actor_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * generated_dispositions (Optional): Array of {@link ReturnDispositionPreviousAttributes}
         * or null. Dispositions Flint created when it recorded this observation. Empty unless the
         * policy's `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1]
         * (Value): Array of {@link ReturnDispositionPreviousAttributes}. Dispositions Flint
         * created when it recorded this observation. Empty unless the policy's
         * `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1][] (Value):
         * {@link ReturnDispositionPreviousAttributes}. generated_dispositions.anyOf[2] (Value):
         * null. idempotency_key (Optional): string or null. The Idempotency-Key of the request
         * that created this resource. `null` when that request sent no key, Flint created the
         * resource, the reader isn't the caller that created it (another app install, a buyer, or
         * the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. idempotency_key.anyOf[1] (Value): string.
         * The Idempotency-Key of the request that created this resource. `null` when that request
         * sent no key, Flint created the resource, the reader isn't the caller that created it
         * (another app install, a buyer, or the merchant reading an app's or buyer's record), or
         * the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. idempotency_key.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link ReturnReceiptLineItemPreviousAttributes} or null. The lines recorded.
         * line_items.anyOf[1] (Value): Array of {@link ReturnReceiptLineItemPreviousAttributes}.
         * The lines recorded. line_items.anyOf[1][] (Value): {@link
         * ReturnReceiptLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. received_at
         * (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. receiving_location_id (Optional): string or null. ID
         * of the Location that received the goods. receiving_location_id.anyOf[1] (Value): string.
         * ID of the Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * receiving_location_id.anyOf[2] (Value): null. return_id (Optional): string or null. ID
         * of the Return the goods belong to. return_id.anyOf[1] (Value): string. ID of the Return
         * the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2]
         * (Value): null. return_receipt_id (Optional): string or null. Unique identifier for this
         * return receipt, prefixed `retrc_`. return_receipt_id.anyOf[1] (Value): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_id.anyOf[2] (Value): null.
         * shipment_id (Optional): string or null. ID of the return shipment the goods arrived in.
         * Absent when the receipt isn't tied to a shipment. shipment_id.anyOf[1] (Value): string.
         * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a
         * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipment_id.anyOf[2] (Value): null.
         * source_system (Optional): {@link ReturnSourceSystemPreviousAttributes} or null. System
         * that recorded the observation. `null` when no source system was recorded.
         * source_system.anyOf[1] (Value): {@link ReturnSourceSystemPreviousAttributes}.
         * source_system.anyOf[2] (Value): null. status (Optional): string or null. Whether this is
         * the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". status.anyOf[1] (Value): string. Whether this is the current
         * observation of these units or a correction replaced it. Value enum: "current",
         * "superseded". status.anyOf[2] (Value): null. superseded_at (Optional): string or null.
         * RFC3339 timestamp. superseded_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_at.anyOf[2] (Value): null.
         * superseded_by_return_receipt_id (Optional): string or null. ID of the receipt that
         * corrected this one. Absent while it is current. superseded_by_return_receipt_id.anyOf[1]
         * (Value): string. ID of the receipt that corrected this one. Absent while it is current.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". superseded_by_return_receipt_id.anyOf[2]
         * (Value): null. supersedes_return_receipt_id (Optional): string or null. ID of the
         * receipt this one corrects. supersedes_return_receipt_id.anyOf[1] (Value): string. ID of
         * the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * supersedes_return_receipt_id.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. version.anyOf[1]
         * (Value): integer. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. Format: int64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other". anyOf[1] (Value): string. Why this observation
             * replaces an earlier one. Send with `supersedes_return_receipt_id` or
             * `supersedes_return_inspection_id`. Value enum: "entry_error",
             * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
             * anyOf[2] (Value): null.
             */
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail about `correction_reason`. anyOf[1] (Value): string. Detail about
             * `correction_reason`. anyOf[2] (Value): null.
             */
            "correction_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. anyOf[1] (Value): string. Your identifier for the actor who recorded the
             * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_actor_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. anyOf[1] (Value): Array of
             * {@link ReturnDispositionPreviousAttributes}. Dispositions Flint created when it
             * recorded this observation. Empty unless the policy's `receipt_disposition_mode` is
             * `automatic`. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. anyOf[1] (Value): string. The Idempotency-Key of the
             * request that created this resource. `null` when that request sent no key, Flint
             * created the resource, the reader isn't the caller that created it (another app
             * install, a buyer, or the merchant reading an app's or buyer's record), or the caller
             * that created an older record is unknown. Filter its list with `idempotency_key` to
             * find it. Recorded payloads, including replayed responses and webhook events, can
             * return `null`. To find a key that a replay returns as `null`, read the resource.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * The lines recorded. anyOf[1] (Value): Array of {@link
             * ReturnReceiptLineItemPreviousAttributes}. The lines recorded. anyOf[1][] (Value):
             * {@link ReturnReceiptLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnReceiptLineItemPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * ID of the Location that received the goods. anyOf[1] (Value): string. ID of the
             * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             * anyOf[2] (Value): null.
             */
            "receiving_location_id"?: ((string) | (null));
            /**
             * ID of the Return the goods belong to. anyOf[1] (Value): string. ID of the Return the
             * goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. anyOf[1] (Value):
             * string. Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_id"?: ((string) | (null));
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. anyOf[1] (Value): string. ID of the return shipment the goods arrived
             * in. Absent when the receipt isn't tied to a shipment. Example:
             * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
             */
            "shipment_id"?: ((string) | (null));
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystemPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded". anyOf[1] (Value): string. Whether this is the
             * current observation of these units or a correction replaced it. Value enum:
             * "current", "superseded". anyOf[2] (Value): null.
             */
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "superseded_at"?: ((string) | (null));
            /**
             * ID of the receipt that corrected this one. Absent while it is current. anyOf[1]
             * (Value): string. ID of the receipt that corrected this one. Absent while it is
             * current. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "superseded_by_return_receipt_id"?: ((string) | (null));
            /**
             * ID of the receipt this one corrects. anyOf[1] (Value): string. ID of the receipt
             * this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value):
             * null.
             */
            "supersedes_return_receipt_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_receipt.superseded". */
    "event_type"?: "return_receipt.superseded";
});
export type ReturnReceiptVerifiedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
            "idempotency_key"?: string | null;
            "line_items": Array<ReturnReceiptLineItem>;
            "received_at": string;
            "receiving_location_id": string;
            "return_id": string;
            "return_receipt_id": string;
            "shipment_id"?: string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_receipt_id"?: string;
            "supersedes_return_receipt_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            "correction_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "external_actor_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "idempotency_key"?: ((string) | (null));
            "line_items"?: ((Array<ReturnReceiptLineItemPreviousAttributes>) | (null));
            "received_at"?: ((string) | (null));
            "receiving_location_id"?: ((string) | (null));
            "return_id"?: ((string) | (null));
            "return_receipt_id"?: ((string) | (null));
            "shipment_id"?: ((string) | (null));
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            "superseded_at"?: ((string) | (null));
            "superseded_by_return_receipt_id"?: ((string) | (null));
            "supersedes_return_receipt_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_receipt.verified";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
            "idempotency_key"?: string | null;
            "line_items": Array<ReturnReceiptLineItem>;
            "received_at": string;
            "receiving_location_id": string;
            "return_id": string;
            "return_receipt_id": string;
            "shipment_id"?: string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_receipt_id"?: string;
            "supersedes_return_receipt_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            "correction_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "external_actor_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "idempotency_key"?: ((string) | (null));
            "line_items"?: ((Array<ReturnReceiptLineItemPreviousAttributes>) | (null));
            "received_at"?: ((string) | (null));
            "receiving_location_id"?: ((string) | (null));
            "return_id"?: ((string) | (null));
            "return_receipt_id"?: ((string) | (null));
            "shipment_id"?: ((string) | (null));
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            "superseded_at"?: ((string) | (null));
            "superseded_by_return_receipt_id"?: ((string) | (null));
            "supersedes_return_receipt_id"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_receipt.verified";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link WebhookSnapshotReturnDisposition}.
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. object.line_items (Required): Array of {@link
     * ReturnReceiptLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnReceiptLineItem}. A returned item recorded as received. object.received_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.receiving_location_id (Required): string. ID of the Location that received the goods.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.return_id (Required): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_receipt_id (Required): string. Unique identifier for this return receipt,
     * prefixed `retrc_`. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id
     * (Optional): string. ID of the return shipment the goods arrived in. Absent when the receipt
     * isn't tied to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_receipt_id (Optional): string. ID of the receipt that corrected
     * this one. Absent while it is current. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.supersedes_return_receipt_id (Optional): string. ID of the receipt this one corrects.
     * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     * previous_attributes (Optional): object and {@link ReturnReceiptPreviousAttributes}. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.correction_reason (Optional): string or null. Why
     * this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[1] (Value): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[2] (Value): null.
     * previous_attributes.correction_reason_message (Optional): string or null. Detail about
     * `correction_reason`. previous_attributes.correction_reason_message.anyOf[1] (Value): string.
     * Detail about `correction_reason`. previous_attributes.correction_reason_message.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_actor_id (Optional): string or null. Your identifier for
     * the actor who recorded the event. Don't put secrets in this field.
     * previous_attributes.external_actor_id.anyOf[1] (Value): string. Your identifier for the
     * actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_actor_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.generated_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Dispositions Flint created when it recorded
     * this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Dispositions Flint created when it recorded this
     * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.generated_dispositions.anyOf[2]
     * (Value): null. previous_attributes.idempotency_key (Optional): string or null. The
     * Idempotency-Key of the request that created this resource. `null` when that request sent no
     * key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     * previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. previous_attributes.idempotency_key.anyOf[2] (Value):
     * null. previous_attributes.line_items (Optional): Array of {@link
     * ReturnReceiptLineItemPreviousAttributes} or null. The lines recorded.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnReceiptLineItemPreviousAttributes}. The lines recorded.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * ReturnReceiptLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.receiving_location_id (Optional): string or null. ID of
     * the Location that received the goods. previous_attributes.receiving_location_id.anyOf[1]
     * (Value): string. ID of the Location that received the goods. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.receiving_location_id.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. ID of the Return
     * the goods belong to. previous_attributes.return_id.anyOf[1] (Value): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null. previous_attributes.return_receipt_id
     * (Optional): string or null. Unique identifier for this return receipt, prefixed `retrc_`.
     * previous_attributes.return_receipt_id.anyOf[1] (Value): string. Unique identifier for this
     * return receipt, prefixed `retrc_`. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.shipment_id (Optional): string or null. ID of the return shipment the
     * goods arrived in. Absent when the receipt isn't tied to a shipment.
     * previous_attributes.shipment_id.anyOf[1] (Value): string. ID of the return shipment the
     * goods arrived in. Absent when the receipt isn't tied to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". previous_attributes.shipment_id.anyOf[2] (Value): null.
     * previous_attributes.source_system (Optional): {@link ReturnSourceSystemPreviousAttributes}
     * or null. System that recorded the observation. `null` when no source system was recorded.
     * previous_attributes.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystemPreviousAttributes}. previous_attributes.source_system.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Whether this is the current
     * observation of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[1] (Value): string. Whether this is the current observation
     * of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.superseded_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.superseded_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.superseded_at.anyOf[2] (Value): null.
     * previous_attributes.superseded_by_return_receipt_id (Optional): string or null. ID of the
     * receipt that corrected this one. Absent while it is current.
     * previous_attributes.superseded_by_return_receipt_id.anyOf[1] (Value): string. ID of the
     * receipt that corrected this one. Absent while it is current. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.superseded_by_return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.supersedes_return_receipt_id (Optional): string or null. ID of the
     * receipt this one corrects. previous_attributes.supersedes_return_receipt_id.anyOf[1]
     * (Value): string. ID of the receipt this one corrects. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.supersedes_return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. previous_attributes.version.anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * WebhookSnapshotReturnDisposition}. Dispositions Flint created when it recorded this
         * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
         * generated_dispositions[] (Value): {@link WebhookSnapshotReturnDisposition}. A decision
         * about how returned merchandise will be handled. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines
         * recorded. line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded
         * as received. received_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". receiving_location_id (Required): string. ID of the
         * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_receipt_id (Required): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". shipment_id (Optional): string. ID of the return
         * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". source_system (Required): {@link
         * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
         * system was recorded. source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
         * system a return event came from, such as a point of sale or warehouse system, with its
         * own identifier. source_system.anyOf[2] (Value): null. status (Required): string. Whether
         * this is the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". superseded_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_by_return_receipt_id (Optional):
         * string. ID of the receipt that corrected this one. Absent while it is current. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". supersedes_return_receipt_id (Optional): string. ID
         * of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
             * handled.
             */
            "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource.
             */
            "idempotency_key"?: string | null;
            /**
             * The lines recorded. [] (Value): {@link ReturnReceiptLineItem}. A returned item
             * recorded as received.
             */
            "line_items": Array<ReturnReceiptLineItem>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at": string;
            /**
             * ID of the Location that received the goods. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "receiving_location_id": string;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_id": string;
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the receipt that corrected this one. Absent while it is current. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "superseded_by_return_receipt_id"?: string;
            /** ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "supersedes_return_receipt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. correction_reason (Optional): string or null.
         * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id`
         * or `supersedes_return_inspection_id`. Value enum: "entry_error",
         * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
         * correction_reason.anyOf[1] (Value): string. Why this observation replaces an earlier
         * one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`.
         * Value enum: "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason.anyOf[2] (Value): null.
         * correction_reason_message (Optional): string or null. Detail about `correction_reason`.
         * correction_reason_message.anyOf[1] (Value): string. Detail about `correction_reason`.
         * correction_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * external_actor_id (Optional): string or null. Your identifier for the actor who recorded
         * the event. Don't put secrets in this field. external_actor_id.anyOf[1] (Value): string.
         * Your identifier for the actor who recorded the event. Don't put secrets in this field.
         * maxLength: 255. Example: "warehouse-1842". external_actor_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * generated_dispositions (Optional): Array of {@link ReturnDispositionPreviousAttributes}
         * or null. Dispositions Flint created when it recorded this observation. Empty unless the
         * policy's `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1]
         * (Value): Array of {@link ReturnDispositionPreviousAttributes}. Dispositions Flint
         * created when it recorded this observation. Empty unless the policy's
         * `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1][] (Value):
         * {@link ReturnDispositionPreviousAttributes}. generated_dispositions.anyOf[2] (Value):
         * null. idempotency_key (Optional): string or null. The Idempotency-Key of the request
         * that created this resource. `null` when that request sent no key, Flint created the
         * resource, the reader isn't the caller that created it (another app install, a buyer, or
         * the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. idempotency_key.anyOf[1] (Value): string.
         * The Idempotency-Key of the request that created this resource. `null` when that request
         * sent no key, Flint created the resource, the reader isn't the caller that created it
         * (another app install, a buyer, or the merchant reading an app's or buyer's record), or
         * the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. idempotency_key.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link ReturnReceiptLineItemPreviousAttributes} or null. The lines recorded.
         * line_items.anyOf[1] (Value): Array of {@link ReturnReceiptLineItemPreviousAttributes}.
         * The lines recorded. line_items.anyOf[1][] (Value): {@link
         * ReturnReceiptLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. received_at
         * (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. receiving_location_id (Optional): string or null. ID
         * of the Location that received the goods. receiving_location_id.anyOf[1] (Value): string.
         * ID of the Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * receiving_location_id.anyOf[2] (Value): null. return_id (Optional): string or null. ID
         * of the Return the goods belong to. return_id.anyOf[1] (Value): string. ID of the Return
         * the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2]
         * (Value): null. return_receipt_id (Optional): string or null. Unique identifier for this
         * return receipt, prefixed `retrc_`. return_receipt_id.anyOf[1] (Value): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_id.anyOf[2] (Value): null.
         * shipment_id (Optional): string or null. ID of the return shipment the goods arrived in.
         * Absent when the receipt isn't tied to a shipment. shipment_id.anyOf[1] (Value): string.
         * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a
         * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipment_id.anyOf[2] (Value): null.
         * source_system (Optional): {@link ReturnSourceSystemPreviousAttributes} or null. System
         * that recorded the observation. `null` when no source system was recorded.
         * source_system.anyOf[1] (Value): {@link ReturnSourceSystemPreviousAttributes}.
         * source_system.anyOf[2] (Value): null. status (Optional): string or null. Whether this is
         * the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". status.anyOf[1] (Value): string. Whether this is the current
         * observation of these units or a correction replaced it. Value enum: "current",
         * "superseded". status.anyOf[2] (Value): null. superseded_at (Optional): string or null.
         * RFC3339 timestamp. superseded_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_at.anyOf[2] (Value): null.
         * superseded_by_return_receipt_id (Optional): string or null. ID of the receipt that
         * corrected this one. Absent while it is current. superseded_by_return_receipt_id.anyOf[1]
         * (Value): string. ID of the receipt that corrected this one. Absent while it is current.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". superseded_by_return_receipt_id.anyOf[2]
         * (Value): null. supersedes_return_receipt_id (Optional): string or null. ID of the
         * receipt this one corrects. supersedes_return_receipt_id.anyOf[1] (Value): string. ID of
         * the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * supersedes_return_receipt_id.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. version.anyOf[1]
         * (Value): integer. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. Format: int64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other". anyOf[1] (Value): string. Why this observation
             * replaces an earlier one. Send with `supersedes_return_receipt_id` or
             * `supersedes_return_inspection_id`. Value enum: "entry_error",
             * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
             * anyOf[2] (Value): null.
             */
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail about `correction_reason`. anyOf[1] (Value): string. Detail about
             * `correction_reason`. anyOf[2] (Value): null.
             */
            "correction_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. anyOf[1] (Value): string. Your identifier for the actor who recorded the
             * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_actor_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. anyOf[1] (Value): Array of
             * {@link ReturnDispositionPreviousAttributes}. Dispositions Flint created when it
             * recorded this observation. Empty unless the policy's `receipt_disposition_mode` is
             * `automatic`. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. anyOf[1] (Value): string. The Idempotency-Key of the
             * request that created this resource. `null` when that request sent no key, Flint
             * created the resource, the reader isn't the caller that created it (another app
             * install, a buyer, or the merchant reading an app's or buyer's record), or the caller
             * that created an older record is unknown. Filter its list with `idempotency_key` to
             * find it. Recorded payloads, including replayed responses and webhook events, can
             * return `null`. To find a key that a replay returns as `null`, read the resource.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * The lines recorded. anyOf[1] (Value): Array of {@link
             * ReturnReceiptLineItemPreviousAttributes}. The lines recorded. anyOf[1][] (Value):
             * {@link ReturnReceiptLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnReceiptLineItemPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * ID of the Location that received the goods. anyOf[1] (Value): string. ID of the
             * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             * anyOf[2] (Value): null.
             */
            "receiving_location_id"?: ((string) | (null));
            /**
             * ID of the Return the goods belong to. anyOf[1] (Value): string. ID of the Return the
             * goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. anyOf[1] (Value):
             * string. Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_id"?: ((string) | (null));
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. anyOf[1] (Value): string. ID of the return shipment the goods arrived
             * in. Absent when the receipt isn't tied to a shipment. Example:
             * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
             */
            "shipment_id"?: ((string) | (null));
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystemPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded". anyOf[1] (Value): string. Whether this is the
             * current observation of these units or a correction replaced it. Value enum:
             * "current", "superseded". anyOf[2] (Value): null.
             */
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "superseded_at"?: ((string) | (null));
            /**
             * ID of the receipt that corrected this one. Absent while it is current. anyOf[1]
             * (Value): string. ID of the receipt that corrected this one. Absent while it is
             * current. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "superseded_by_return_receipt_id"?: ((string) | (null));
            /**
             * ID of the receipt this one corrects. anyOf[1] (Value): string. ID of the receipt
             * this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value):
             * null.
             */
            "supersedes_return_receipt_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_receipt.verified". */
    "event_type"?: "return_receipt.verified";
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
 * The `return_receipt.verified` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ReturnReceiptVerifiedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link WebhookSnapshotReturnDisposition}.
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. object.line_items (Required): Array of {@link
     * ReturnReceiptLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnReceiptLineItem}. A returned item recorded as received. object.received_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.receiving_location_id (Required): string. ID of the Location that received the goods.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.return_id (Required): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_receipt_id (Required): string. Unique identifier for this return receipt,
     * prefixed `retrc_`. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id
     * (Optional): string. ID of the return shipment the goods arrived in. Absent when the receipt
     * isn't tied to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_receipt_id (Optional): string. ID of the receipt that corrected
     * this one. Absent while it is current. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.supersedes_return_receipt_id (Optional): string. ID of the receipt this one corrects.
     * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     * previous_attributes (Optional): object and {@link ReturnReceiptPreviousAttributes}. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.correction_reason (Optional): string or null. Why
     * this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[1] (Value): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     * previous_attributes.correction_reason.anyOf[2] (Value): null.
     * previous_attributes.correction_reason_message (Optional): string or null. Detail about
     * `correction_reason`. previous_attributes.correction_reason_message.anyOf[1] (Value): string.
     * Detail about `correction_reason`. previous_attributes.correction_reason_message.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.external_actor_id (Optional): string or null. Your identifier for
     * the actor who recorded the event. Don't put secrets in this field.
     * previous_attributes.external_actor_id.anyOf[1] (Value): string. Your identifier for the
     * actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example:
     * "warehouse-1842". previous_attributes.external_actor_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.generated_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Dispositions Flint created when it recorded
     * this observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Dispositions Flint created when it recorded this
     * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
     * previous_attributes.generated_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.generated_dispositions.anyOf[2]
     * (Value): null. previous_attributes.idempotency_key (Optional): string or null. The
     * Idempotency-Key of the request that created this resource. `null` when that request sent no
     * key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     * previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. previous_attributes.idempotency_key.anyOf[2] (Value):
     * null. previous_attributes.line_items (Optional): Array of {@link
     * ReturnReceiptLineItemPreviousAttributes} or null. The lines recorded.
     * previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnReceiptLineItemPreviousAttributes}. The lines recorded.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link
     * ReturnReceiptLineItemPreviousAttributes}. previous_attributes.line_items.anyOf[2] (Value):
     * null. previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.receiving_location_id (Optional): string or null. ID of
     * the Location that received the goods. previous_attributes.receiving_location_id.anyOf[1]
     * (Value): string. ID of the Location that received the goods. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.receiving_location_id.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. ID of the Return
     * the goods belong to. previous_attributes.return_id.anyOf[1] (Value): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null. previous_attributes.return_receipt_id
     * (Optional): string or null. Unique identifier for this return receipt, prefixed `retrc_`.
     * previous_attributes.return_receipt_id.anyOf[1] (Value): string. Unique identifier for this
     * return receipt, prefixed `retrc_`. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.shipment_id (Optional): string or null. ID of the return shipment the
     * goods arrived in. Absent when the receipt isn't tied to a shipment.
     * previous_attributes.shipment_id.anyOf[1] (Value): string. ID of the return shipment the
     * goods arrived in. Absent when the receipt isn't tied to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". previous_attributes.shipment_id.anyOf[2] (Value): null.
     * previous_attributes.source_system (Optional): {@link ReturnSourceSystemPreviousAttributes}
     * or null. System that recorded the observation. `null` when no source system was recorded.
     * previous_attributes.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystemPreviousAttributes}. previous_attributes.source_system.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Whether this is the current
     * observation of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[1] (Value): string. Whether this is the current observation
     * of these units or a correction replaced it. Value enum: "current", "superseded".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.superseded_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.superseded_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.superseded_at.anyOf[2] (Value): null.
     * previous_attributes.superseded_by_return_receipt_id (Optional): string or null. ID of the
     * receipt that corrected this one. Absent while it is current.
     * previous_attributes.superseded_by_return_receipt_id.anyOf[1] (Value): string. ID of the
     * receipt that corrected this one. Absent while it is current. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.superseded_by_return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.supersedes_return_receipt_id (Optional): string or null. ID of the
     * receipt this one corrects. previous_attributes.supersedes_return_receipt_id.anyOf[1]
     * (Value): string. ID of the receipt this one corrects. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * previous_attributes.supersedes_return_receipt_id.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. previous_attributes.version.anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * WebhookSnapshotReturnDisposition}. Dispositions Flint created when it recorded this
         * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
         * generated_dispositions[] (Value): {@link WebhookSnapshotReturnDisposition}. A decision
         * about how returned merchandise will be handled. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines
         * recorded. line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded
         * as received. received_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". receiving_location_id (Required): string. ID of the
         * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_receipt_id (Required): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". shipment_id (Optional): string. ID of the return
         * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". source_system (Required): {@link
         * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
         * system was recorded. source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
         * system a return event came from, such as a point of sale or warehouse system, with its
         * own identifier. source_system.anyOf[2] (Value): null. status (Required): string. Whether
         * this is the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". superseded_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_by_return_receipt_id (Optional):
         * string. ID of the receipt that corrected this one. Absent while it is current. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". supersedes_return_receipt_id (Optional): string. ID
         * of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
             * handled.
             */
            "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource.
             */
            "idempotency_key"?: string | null;
            /**
             * The lines recorded. [] (Value): {@link ReturnReceiptLineItem}. A returned item
             * recorded as received.
             */
            "line_items": Array<ReturnReceiptLineItem>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at": string;
            /**
             * ID of the Location that received the goods. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "receiving_location_id": string;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_id": string;
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the receipt that corrected this one. Absent while it is current. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "superseded_by_return_receipt_id"?: string;
            /** ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "supersedes_return_receipt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. correction_reason (Optional): string or null.
         * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id`
         * or `supersedes_return_inspection_id`. Value enum: "entry_error",
         * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
         * correction_reason.anyOf[1] (Value): string. Why this observation replaces an earlier
         * one. Send with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`.
         * Value enum: "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason.anyOf[2] (Value): null.
         * correction_reason_message (Optional): string or null. Detail about `correction_reason`.
         * correction_reason_message.anyOf[1] (Value): string. Detail about `correction_reason`.
         * correction_reason_message.anyOf[2] (Value): null. created_at (Optional): string or null.
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * external_actor_id (Optional): string or null. Your identifier for the actor who recorded
         * the event. Don't put secrets in this field. external_actor_id.anyOf[1] (Value): string.
         * Your identifier for the actor who recorded the event. Don't put secrets in this field.
         * maxLength: 255. Example: "warehouse-1842". external_actor_id.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * generated_dispositions (Optional): Array of {@link ReturnDispositionPreviousAttributes}
         * or null. Dispositions Flint created when it recorded this observation. Empty unless the
         * policy's `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1]
         * (Value): Array of {@link ReturnDispositionPreviousAttributes}. Dispositions Flint
         * created when it recorded this observation. Empty unless the policy's
         * `receipt_disposition_mode` is `automatic`. generated_dispositions.anyOf[1][] (Value):
         * {@link ReturnDispositionPreviousAttributes}. generated_dispositions.anyOf[2] (Value):
         * null. idempotency_key (Optional): string or null. The Idempotency-Key of the request
         * that created this resource. `null` when that request sent no key, Flint created the
         * resource, the reader isn't the caller that created it (another app install, a buyer, or
         * the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. idempotency_key.anyOf[1] (Value): string.
         * The Idempotency-Key of the request that created this resource. `null` when that request
         * sent no key, Flint created the resource, the reader isn't the caller that created it
         * (another app install, a buyer, or the merchant reading an app's or buyer's record), or
         * the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. idempotency_key.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link ReturnReceiptLineItemPreviousAttributes} or null. The lines recorded.
         * line_items.anyOf[1] (Value): Array of {@link ReturnReceiptLineItemPreviousAttributes}.
         * The lines recorded. line_items.anyOf[1][] (Value): {@link
         * ReturnReceiptLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. received_at
         * (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. receiving_location_id (Optional): string or null. ID
         * of the Location that received the goods. receiving_location_id.anyOf[1] (Value): string.
         * ID of the Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * receiving_location_id.anyOf[2] (Value): null. return_id (Optional): string or null. ID
         * of the Return the goods belong to. return_id.anyOf[1] (Value): string. ID of the Return
         * the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2]
         * (Value): null. return_receipt_id (Optional): string or null. Unique identifier for this
         * return receipt, prefixed `retrc_`. return_receipt_id.anyOf[1] (Value): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_id.anyOf[2] (Value): null.
         * shipment_id (Optional): string or null. ID of the return shipment the goods arrived in.
         * Absent when the receipt isn't tied to a shipment. shipment_id.anyOf[1] (Value): string.
         * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a
         * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipment_id.anyOf[2] (Value): null.
         * source_system (Optional): {@link ReturnSourceSystemPreviousAttributes} or null. System
         * that recorded the observation. `null` when no source system was recorded.
         * source_system.anyOf[1] (Value): {@link ReturnSourceSystemPreviousAttributes}.
         * source_system.anyOf[2] (Value): null. status (Optional): string or null. Whether this is
         * the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". status.anyOf[1] (Value): string. Whether this is the current
         * observation of these units or a correction replaced it. Value enum: "current",
         * "superseded". status.anyOf[2] (Value): null. superseded_at (Optional): string or null.
         * RFC3339 timestamp. superseded_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_at.anyOf[2] (Value): null.
         * superseded_by_return_receipt_id (Optional): string or null. ID of the receipt that
         * corrected this one. Absent while it is current. superseded_by_return_receipt_id.anyOf[1]
         * (Value): string. ID of the receipt that corrected this one. Absent while it is current.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". superseded_by_return_receipt_id.anyOf[2]
         * (Value): null. supersedes_return_receipt_id (Optional): string or null. ID of the
         * receipt this one corrects. supersedes_return_receipt_id.anyOf[1] (Value): string. ID of
         * the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * supersedes_return_receipt_id.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. version.anyOf[1]
         * (Value): integer. Current version of this resource's owned state. Send it as
         * `expected_version` when changing the resource to reject a stale write. Format: int64.
         * minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other". anyOf[1] (Value): string. Why this observation
             * replaces an earlier one. Send with `supersedes_return_receipt_id` or
             * `supersedes_return_inspection_id`. Value enum: "entry_error",
             * "duplicate_observation", "source_correction", "reconciliation_correction", "other".
             * anyOf[2] (Value): null.
             */
            "correction_reason"?: (("entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail about `correction_reason`. anyOf[1] (Value): string. Detail about
             * `correction_reason`. anyOf[2] (Value): null.
             */
            "correction_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. anyOf[1] (Value): string. Your identifier for the actor who recorded the
             * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_actor_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. anyOf[1] (Value): Array of
             * {@link ReturnDispositionPreviousAttributes}. Dispositions Flint created when it
             * recorded this observation. Empty unless the policy's `receipt_disposition_mode` is
             * `automatic`. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "generated_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. anyOf[1] (Value): string. The Idempotency-Key of the
             * request that created this resource. `null` when that request sent no key, Flint
             * created the resource, the reader isn't the caller that created it (another app
             * install, a buyer, or the merchant reading an app's or buyer's record), or the caller
             * that created an older record is unknown. Filter its list with `idempotency_key` to
             * find it. Recorded payloads, including replayed responses and webhook events, can
             * return `null`. To find a key that a replay returns as `null`, read the resource.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * The lines recorded. anyOf[1] (Value): Array of {@link
             * ReturnReceiptLineItemPreviousAttributes}. The lines recorded. anyOf[1][] (Value):
             * {@link ReturnReceiptLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnReceiptLineItemPreviousAttributes>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * ID of the Location that received the goods. anyOf[1] (Value): string. ID of the
             * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             * anyOf[2] (Value): null.
             */
            "receiving_location_id"?: ((string) | (null));
            /**
             * ID of the Return the goods belong to. anyOf[1] (Value): string. ID of the Return the
             * goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. anyOf[1] (Value):
             * string. Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_id"?: ((string) | (null));
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. anyOf[1] (Value): string. ID of the return shipment the goods arrived
             * in. Absent when the receipt isn't tied to a shipment. Example:
             * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
             */
            "shipment_id"?: ((string) | (null));
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystemPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "source_system"?: ((ReturnSourceSystemPreviousAttributes) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded". anyOf[1] (Value): string. Whether this is the
             * current observation of these units or a correction replaced it. Value enum:
             * "current", "superseded". anyOf[2] (Value): null.
             */
            "status"?: (("current" | "superseded" | (string & {})) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "superseded_at"?: ((string) | (null));
            /**
             * ID of the receipt that corrected this one. Absent while it is current. anyOf[1]
             * (Value): string. ID of the receipt that corrected this one. Absent while it is
             * current. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "superseded_by_return_receipt_id"?: ((string) | (null));
            /**
             * ID of the receipt this one corrects. anyOf[1] (Value): string. ID of the receipt
             * this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value):
             * null.
             */
            "supersedes_return_receipt_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_receipt.verified". */
    "event_type"?: "return_receipt.verified";
});
export type ReturnReceiptsCreateParams = (InputValue<CreateReturnReceiptRequestInput>)
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
export type ReturnReceiptsGetParams = DisputesAcceptParams;
export type ReturnReceiptsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. A match can show
     * `idempotency_key: null` when that request sent no key, Flint created the resource, the
     * reader isn't the caller that created it (another app install, a buyer, or the merchant
     * reading an app's or buyer's record), or the caller that created an older record is unknown.
     * minLength: 1. maxLength: 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return receipt ID or external reference ID. */
    "query"?: InputValue<string>;
    /** Inclusive lower bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by receiving location id. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: InputValue<string>;
    /**
     * Filter by return id. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by return line item id. pattern: ^retli_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: InputValue<string>;
    /**
     * Filter by shipment id. pattern: ^shp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: InputValue<string>;
    /**
     * Filter by source system type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "manual", "pos", "wms", "erp", "other", "flint". Value enum: "manual",
     * "pos", "wms", "erp", "other", "flint". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "manual", "pos", "wms", "erp", "other", "flint". anyOf[1][] (Value): string. Value
     * enum: "manual", "pos", "wms", "erp", "other", "flint". anyOf[2] (Value): string. Value enum:
     * "manual", "pos", "wms", "erp", "other", "flint".
     */
    "source_system_type"?: InputValue<("manual" | "pos" | "wms" | "erp" | "other" | "flint")
        | readonly ("manual" | "pos" | "wms" | "erp" | "other" | "flint")[]>;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "current", "superseded". Value enum: "current", "superseded". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "current", "superseded". anyOf[1][] (Value): string. Value
     * enum: "current", "superseded". anyOf[2] (Value): string. Value enum: "current",
     * "superseded".
     */
    "status"?: InputValue<("current" | "superseded") | readonly ("current" | "superseded")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by verification status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "matched", "unverified", "excess". Value enum: "matched", "unverified",
     * "excess". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "matched", "unverified",
     * "excess". anyOf[1][] (Value): string. Value enum: "matched", "unverified", "excess".
     * anyOf[2] (Value): string. Value enum: "matched", "unverified", "excess".
     */
    "verification_status"?: InputValue<("matched" | "unverified" | "excess") | readonly ("matched" | "unverified" | "excess")[]>;
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
export type ReturnReceiptsVerifyLineItemParams = (InputValue<VerifyReturnReceiptLineItemRequestInput>)
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
 * Estimated refund for the selected eligible quantities. The store's inspection and its final
 * decision can change the refund. Nothing is reserved.
 */
export type ReturnRefundEstimate = {
    /**
     * Returned total less policy deductions, floored at zero. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /**
     * Net store credit for explicitly selected eligible store-credit quantities after policy
     * deductions, floored per line at zero. Separate from returned_total_money, deduction_money,
     * and buyer_refund_amount_money, which cover refund quantities only. Zero when no store credit
     * qualifies. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "buyer_store_credit_amount_money": MoneyValue;
    /**
     * Sum of the policy deduction proposals for this selection. Zero when none apply. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Selected refund and store credit value that the original payments cannot fund. Zero when
     * fully payable. The merchandise entitlement is unchanged. Merchant only. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "refund_shortfall_money": MoneyValue;
    /**
     * What the buyer paid for these quantities after discounts, including tax. Uses the same
     * allocation as a return resolution. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
    /**
     * Store credit is issued as a new gift card by email. Applies to
     * buyer_store_credit_amount_money. Value enum: "new_gift_card".
     */
    "store_credit_destination": "new_gift_card" | (string & {});
    /**
     * Estimated original-payment funding in refund order. Amounts sum to buyer_refund_amount_money
     * plus buyer_store_credit_amount_money less refund_shortfall_money. Empty when no value is
     * payable. [] (Value): {@link ReturnRefundTenderEstimate}. One estimated original-payment
     * destination for a return refund.
     */
    "tender_estimates": Array<ReturnRefundTenderEstimate>;
};
/** One estimated original-payment destination for a return refund. */
export type ReturnRefundTenderEstimate = ({
    /**
     * Estimated amount returned to this destination. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Original gift card. Present for gift_card_redemption tenders. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id"?: string;
    /**
     * Original payment intent. Present for payment_intent tenders. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Original payment destination receiving this estimated refund: a payment intent or a gift
     * card redemption. Value enum: "payment_intent", "gift_card_redemption".
     */
    "tender_type": "payment_intent" | "gift_card_redemption" | (string & {});
})
    & ((Exclude<ReturnRefundTenderEstimatePaymentIntent & object, readonly unknown[]>)
    | (Exclude<ReturnRefundTenderEstimateGiftCardRedemption & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** One estimated original-payment destination for a return refund. */
export type ReturnRefundTenderEstimateGiftCardRedemption = ({
    /**
     * Estimated amount returned to this destination. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Original gift card. Present for gift_card_redemption tenders. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Original payment intent. Present for payment_intent tenders. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Original payment destination receiving this estimated refund: a payment intent or a gift
     * card redemption. Value enum: "gift_card_redemption".
     */
    "tender_type": "gift_card_redemption" | (string & {});
})
    & (({
    /**
     * Original payment destination receiving this estimated refund: a payment intent or a gift
     * card redemption. Value enum: "gift_card_redemption".
     */
    "tender_type": unknown;
    /**
     * Original gift card. Present for gift_card_redemption tenders. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Estimated amount returned to this destination. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
/** One estimated original-payment destination for a return refund. */
export type ReturnRefundTenderEstimatePaymentIntent = ({
    /**
     * Estimated amount returned to this destination. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Original gift card. Present for gift_card_redemption tenders. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id"?: string;
    /**
     * Original payment intent. Present for payment_intent tenders. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * Original payment destination receiving this estimated refund: a payment intent or a gift
     * card redemption. Value enum: "payment_intent".
     */
    "tender_type": "payment_intent" | (string & {});
})
    & (({
    /**
     * Original payment destination receiving this estimated refund: a payment intent or a gift
     * card redemption. Value enum: "payment_intent".
     */
    "tender_type": unknown;
    /**
     * Original payment intent. Present for payment_intent tenders. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * Estimated amount returned to this destination. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
export type ReturnReopenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "actor"?: ReturnActor;
        "object": {
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "idempotency_key"?: string | null;
            "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
            "line_items": Array<WebhookSnapshotReturnLineItem>;
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
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<WebhookSnapshotReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<WebhookSnapshotReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<WebhookSnapshotReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<WebhookSnapshotReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            "cancellation_reason_message"?: ((string) | (null));
            "completed_at"?: ((string) | (null));
            "completed_by"?: ((ReturnActorPreviousAttributes) | (null));
            "completion_blockers"?: ((Array<ReturnCompletionBlockerPreviousAttributes>) | (null));
            "completion_mode"?: (("manual" | "automatic" | (string & {})) | (null));
            "completion_reason"?: (("manual_completion" | "exception_waived" | "other" | (string & {})) | (null));
            "completion_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "decision_at"?: ((string) | (null));
            "decision_status"?: (("pending" | "approved" | "partially_approved" | "declined" | (string & {})) | (null));
            "external_reference_id"?: ((string) | (null));
            "financial_summary"?: ((ReturnFinancialSummaryPreviousAttributes) | (null));
            "handoff_requirements"?: ((Array<ReturnHandoffRequirementPreviousAttributes>) | (null));
            "idempotency_key"?: ((string) | (null));
            "initiated_by"?: (("buyer" | "merchant" | "integration" | "system" | (string & {})) | (null));
            "line_items"?: ((Array<ReturnLineItemPreviousAttributes>) | (null));
            "merchandise_status"?: (("not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {}))
                | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "policy_evaluation"?: ((ReturnPolicyEvaluationPreviousAttributes) | (null));
            "resolution_status"?: (("not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {}))
                | (null));
            "return_disposition_ids"?: ((Array<string>) | (null));
            "return_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "return_id"?: ((string) | (null));
            "return_inspection_ids"?: ((Array<string>) | (null));
            "return_inspections"?: ((Array<ReturnInspectionPreviousAttributes>) | (null));
            "return_number"?: ((string) | (null));
            "return_receipt_ids"?: ((Array<string>) | (null));
            "return_receipts"?: ((Array<ReturnReceiptPreviousAttributes>) | (null));
            "return_resolution_ids"?: ((Array<string>) | (null));
            "return_resolutions"?: ((Array<ReturnResolutionPreviousAttributes>) | (null));
            "shipment_ids"?: ((Array<string>) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return.reopened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "actor"?: ReturnActor;
        "object": {
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "idempotency_key"?: string | null;
            "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
            "line_items": Array<WebhookSnapshotReturnLineItem>;
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
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<WebhookSnapshotReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<WebhookSnapshotReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<WebhookSnapshotReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<WebhookSnapshotReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "canceled_at"?: ((string) | (null));
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            "cancellation_reason_message"?: ((string) | (null));
            "completed_at"?: ((string) | (null));
            "completed_by"?: ((ReturnActorPreviousAttributes) | (null));
            "completion_blockers"?: ((Array<ReturnCompletionBlockerPreviousAttributes>) | (null));
            "completion_mode"?: (("manual" | "automatic" | (string & {})) | (null));
            "completion_reason"?: (("manual_completion" | "exception_waived" | "other" | (string & {})) | (null));
            "completion_reason_message"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "decision_at"?: ((string) | (null));
            "decision_status"?: (("pending" | "approved" | "partially_approved" | "declined" | (string & {})) | (null));
            "external_reference_id"?: ((string) | (null));
            "financial_summary"?: ((ReturnFinancialSummaryPreviousAttributes) | (null));
            "handoff_requirements"?: ((Array<ReturnHandoffRequirementPreviousAttributes>) | (null));
            "idempotency_key"?: ((string) | (null));
            "initiated_by"?: (("buyer" | "merchant" | "integration" | "system" | (string & {})) | (null));
            "line_items"?: ((Array<ReturnLineItemPreviousAttributes>) | (null));
            "merchandise_status"?: (("not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {}))
                | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "policy_evaluation"?: ((ReturnPolicyEvaluationPreviousAttributes) | (null));
            "resolution_status"?: (("not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {}))
                | (null));
            "return_disposition_ids"?: ((Array<string>) | (null));
            "return_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            "return_id"?: ((string) | (null));
            "return_inspection_ids"?: ((Array<string>) | (null));
            "return_inspections"?: ((Array<ReturnInspectionPreviousAttributes>) | (null));
            "return_number"?: ((string) | (null));
            "return_receipt_ids"?: ((Array<string>) | (null));
            "return_receipts"?: ((Array<ReturnReceiptPreviousAttributes>) | (null));
            "return_resolution_ids"?: ((Array<string>) | (null));
            "return_resolutions"?: ((Array<ReturnResolutionPreviousAttributes>) | (null));
            "shipment_ids"?: ((Array<string>) | (null));
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
            "supported_actions"?: ((Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return.reopened";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  actor (Optional): {@link ReturnActor}. Who caused this event, captured when the change
     * commits. Omitted when the event predates actor attribution or attribution is unavailable.
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID. object (Required): object. The resource snapshot, without expansions. Webhooks
     * omit no additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@link
     * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID. object.cancellation_reason (Optional):
     * string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other". object.cancellation_reason_message
     * (Optional): string. Detail sent with the cancellation. Merchant reads only.
     * object.completed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link ReturnActor}. Who completed
     * the Return. `system` when Flint completed it automatically. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.completion_blockers
     * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the Return
     * can complete. Empty when nothing is. object.completion_blockers[] (Value): {@link
     * ReturnCompletionBlocker}. Something still owed before a return can complete, with the return
     * line or record it concerns. object.completion_mode (Optional): string. automatic completes
     * the Return when the last completion blocker clears; manual waits for POST
     * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". object.completion_reason (Optional): string. Why the Return was
     * completed by hand. Absent when Flint completed it automatically. Value enum:
     * "manual_completion", "exception_waived", "other". object.completion_reason_message
     * (Optional): string. Detail sent when the Return was completed by hand. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.decision_status (Required): string. Whether the requested units were approved.
     * `pending` until one decision covers every line. Value enum: "pending", "approved",
     * "partially_approved", "declined". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.financial_summary (Required): {@link ReturnFinancialSummary}. The
     * Return's money in one place: the value of the returned lines, deductions and credits, and
     * what has been refunded or collected. The money for a return: returned value, deductions,
     * credits, replacement total, and amounts due to or from the buyer.
     * object.handoff_requirements (Required): Array of {@link ReturnHandoffRequirement}. What the
     * buyer still has to send back and where. Each entry leaves the list once it is satisfied, so
     * an empty list means nothing is waiting on the buyer. object.handoff_requirements[] (Value):
     * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the
     * destination, instructions, line items, and expiry. object.idempotency_key (Optional): string
     * or null. The Idempotency-Key of the request that created this resource. `null` when that
     * request sent no key, Flint created the resource, the reader isn't the caller that created it
     * (another app install, a buyer, or the merchant reading an app's or buyer's record), or the
     * caller that created an older record is unknown. Filter its list with `idempotency_key` to
     * find it. Recorded payloads, including replayed responses and webhook events, can return
     * `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes
     * return only keys from the buyer's namespace. object.initiated_by (Required): string. Who
     * created the Return: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app, or system for
     * Flint automation. It cannot be sent. Value enum: "buyer", "merchant", "integration",
     * "system". object.line_items (Required): Array of {@link WebhookSnapshotReturnLineItem}. The
     * lines being returned. object.line_items[] (Value): {@link WebhookSnapshotReturnLineItem}. An
     * item included in a return request. object.merchandise_status (Required): string. On the
     * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_completed", "requires_action", "completed", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * WebhookSnapshotReturnDisposition}. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * object.return_dispositions[] (Value): {@link WebhookSnapshotReturnDisposition}. A decision
     * about how returned merchandise will be handled. object.return_id (Required): string. Unique
     * identifier for this return, prefixed `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_inspection_ids (Required): Array of string. IDs of every inspection recorded
     * for this Return, oldest first, including superseded inspections. Expand `return_inspections`
     * on `GET /v1/returns/{return_id}` to read them inline. object.return_inspection_ids[]
     * (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections
     * (Optional): Array of {@link WebhookSnapshotReturnInspection}. Present only when `expand`
     * includes `return_inspections`. The inspections in `return_inspection_ids`, in the same
     * order. object.return_inspections[] (Value): {@link WebhookSnapshotReturnInspection}. An
     * assessment of the condition of returned items. object.return_number (Required): string.
     * Human-readable number for the Return. object.return_receipt_ids (Required): Array of string.
     * IDs of every receipt recorded for this Return, oldest first, including superseded receipts.
     * Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_receipt_ids[] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.return_receipts (Optional): Array of {@link WebhookSnapshotReturnReceipt}. Present
     * only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the
     * same order. object.return_receipts[] (Value): {@link WebhookSnapshotReturnReceipt}. A record
     * of returned items arriving at a location. object.return_resolution_ids (Required): Array of
     * string. IDs of every resolution created for this Return, oldest first, including failed and
     * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * WebhookSnapshotReturnResolution}. Present only when `expand` includes `return_resolutions`.
     * The resolutions in `return_resolution_ids`, in the same order. object.return_resolutions[]
     * (Value): {@link WebhookSnapshotReturnResolution}. The refund, exchange, or other outcome of
     * a return. object.shipment_ids (Required): Array of string. IDs of every shipment raised to
     * send this Return's items back, oldest first, including voided shipments. Expand `shipments`
     * on `GET /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. Actions that
     * can succeed now. Actions the API key or token doesn't have the scope for are left out. A
     * Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel`
     * only while no units have been received, inspected, dispositioned, or resolved, and it has no
     * current receipts or inspections, non-canceled dispositions or resolutions, or non-voided
     * return shipments. It lists `complete` when `completion_mode` is `manual` and
     * `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled
     * Return lists none. [] enum: "cancel", "complete", "decide", "process", "reopen".
     * object.supported_actions[] (Value): string. Value enum: "cancel", "complete", "decide",
     * "process", "reopen". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with
     * every change to the Return. Each activity's `return_version` is the version that activity
     * produced. A write that takes `expected_version` or `expected_return_version` for this Return
     * compares it with this value. Format: int64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.canceled_at (Optional): string or null.
     * RFC3339 timestamp. previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.canceled_at.anyOf[2] (Value): null. previous_attributes.canceled_by
     * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the Return.
     * previous_attributes.canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.canceled_by.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the Return was
     * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
     * "created_in_error", "other". previous_attributes.cancellation_reason.anyOf[1] (Value):
     * string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason_message (Optional): string or null. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[1] (Value): string. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[2] (Value): null.
     * previous_attributes.completed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.completed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2]
     * (Value): null. previous_attributes.completed_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who completed the Return. `system` when Flint
     * completed it automatically. previous_attributes.completed_by.anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. previous_attributes.completed_by.anyOf[2] (Value): null.
     * previous_attributes.completion_blockers (Optional): Array of {@link
     * ReturnCompletionBlockerPreviousAttributes} or null. What is still owed before the Return can
     * complete. Empty when nothing is. previous_attributes.completion_blockers.anyOf[1] (Value):
     * Array of {@link ReturnCompletionBlockerPreviousAttributes}. What is still owed before the
     * Return can complete. Empty when nothing is.
     * previous_attributes.completion_blockers.anyOf[1][] (Value): {@link
     * ReturnCompletionBlockerPreviousAttributes}. previous_attributes.completion_blockers.anyOf[2]
     * (Value): null. previous_attributes.completion_mode (Optional): string or null. automatic
     * completes the Return when the last completion blocker clears; manual waits for POST
     * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". previous_attributes.completion_mode.anyOf[1] (Value): string.
     * automatic completes the Return when the last completion blocker clears; manual waits for
     * POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". previous_attributes.completion_mode.anyOf[2] (Value): null.
     * previous_attributes.completion_reason (Optional): string or null. Why the Return was
     * completed by hand. Absent when Flint completed it automatically. Value enum:
     * "manual_completion", "exception_waived", "other".
     * previous_attributes.completion_reason.anyOf[1] (Value): string. Why the Return was completed
     * by hand. Absent when Flint completed it automatically. Value enum: "manual_completion",
     * "exception_waived", "other". previous_attributes.completion_reason.anyOf[2] (Value): null.
     * previous_attributes.completion_reason_message (Optional): string or null. Detail sent when
     * the Return was completed by hand. previous_attributes.completion_reason_message.anyOf[1]
     * (Value): string. Detail sent when the Return was completed by hand.
     * previous_attributes.completion_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. The customer the Return
     * belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. The customer the
     * Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.decision_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.decision_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.decision_at.anyOf[2] (Value): null. previous_attributes.decision_status
     * (Optional): string or null. Whether the requested units were approved. `pending` until one
     * decision covers every line. Value enum: "pending", "approved", "partially_approved",
     * "declined". previous_attributes.decision_status.anyOf[1] (Value): string. Whether the
     * requested units were approved. `pending` until one decision covers every line. Value enum:
     * "pending", "approved", "partially_approved", "declined".
     * previous_attributes.decision_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.financial_summary (Optional): {@link
     * ReturnFinancialSummaryPreviousAttributes} or null. The Return's money in one place: the
     * value of the returned lines, deductions and credits, and what has been refunded or
     * collected. previous_attributes.financial_summary.anyOf[1] (Value): {@link
     * ReturnFinancialSummaryPreviousAttributes}. previous_attributes.financial_summary.anyOf[2]
     * (Value): null. previous_attributes.handoff_requirements (Optional): Array of {@link
     * ReturnHandoffRequirementPreviousAttributes} or null. What the buyer still has to send back
     * and where. Each entry leaves the list once it is satisfied, so an empty list means nothing
     * is waiting on the buyer. previous_attributes.handoff_requirements.anyOf[1] (Value): Array of
     * {@link ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back
     * and where. Each entry leaves the list once it is satisfied, so an empty list means nothing
     * is waiting on the buyer. previous_attributes.handoff_requirements.anyOf[1][] (Value): {@link
     * ReturnHandoffRequirementPreviousAttributes}.
     * previous_attributes.handoff_requirements.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer routes return only keys from the buyer's
     * namespace. previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key
     * of the request that created this resource. `null` when that request sent no key, Flint
     * created the resource, the reader isn't the caller that created it (another app install, a
     * buyer, or the merchant reading an app's or buyer's record), or the caller that created an
     * older record is unknown. Filter its list with `idempotency_key` to find it. Recorded
     * payloads, including replayed responses and webhook events, can return `null`. To find a key
     * that a replay returns as `null`, read the resource. Buyer routes return only keys from the
     * buyer's namespace. previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.initiated_by (Optional): string or null. Who created the Return: buyer
     * for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
     * integration for an API key or partner app, or system for Flint automation. It cannot be
     * sent. Value enum: "buyer", "merchant", "integration", "system".
     * previous_attributes.initiated_by.anyOf[1] (Value): string. Who created the Return: buyer for
     * a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
     * integration for an API key or partner app, or system for Flint automation. It cannot be
     * sent. Value enum: "buyer", "merchant", "integration", "system".
     * previous_attributes.initiated_by.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link ReturnLineItemPreviousAttributes} or null. The lines being
     * returned. previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnLineItemPreviousAttributes}. The lines being returned.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link ReturnLineItemPreviousAttributes}.
     * previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchandise_status (Optional): string or null. On the Return, the
     * least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * previous_attributes.merchandise_status.anyOf[1] (Value): string. On the Return, the
     * least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * previous_attributes.merchandise_status.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or
     * null. Present only when `expand` includes `order`; `null` when expanded and there is no
     * related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. ID of the Order the Return is
     * against. previous_attributes.order_id.anyOf[1] (Value): string. ID of the Order the Return
     * is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2]
     * (Value): null. previous_attributes.policy_evaluation (Optional): {@link
     * ReturnPolicyEvaluationPreviousAttributes} or null. How your return policies judged the
     * request when the Return was created. previous_attributes.policy_evaluation.anyOf[1] (Value):
     * {@link ReturnPolicyEvaluationPreviousAttributes}.
     * previous_attributes.policy_evaluation.anyOf[2] (Value): null.
     * previous_attributes.resolution_status (Optional): string or null. Whether the buyer has
     * received the value they are owed. Combines the Return's resolutions and its unsettled
     * corrections. Value enum: "not_selected", "pending", "partially_completed",
     * "requires_action", "completed", "failed". previous_attributes.resolution_status.anyOf[1]
     * (Value): string. Whether the buyer has received the value they are owed. Combines the
     * Return's resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
     * "partially_completed", "requires_action", "completed", "failed".
     * previous_attributes.resolution_status.anyOf[2] (Value): null.
     * previous_attributes.return_disposition_ids (Optional): Array of string or null. IDs of every
     * disposition recorded for this Return, oldest first, including failed and canceled
     * dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_disposition_ids.anyOf[1] (Value): Array of string. IDs of
     * every disposition recorded for this Return, oldest first, including failed and canceled
     * dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_disposition_ids.anyOf[1][] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". previous_attributes.return_disposition_ids.anyOf[2]
     * (Value): null. previous_attributes.return_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * previous_attributes.return_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * previous_attributes.return_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.return_dispositions.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. Unique identifier
     * for this return, prefixed `ret_`. previous_attributes.return_id.anyOf[1] (Value): string.
     * Unique identifier for this return, prefixed `ret_`. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_inspection_ids (Optional): Array of string or null. IDs of every
     * inspection recorded for this Return, oldest first, including superseded inspections. Expand
     * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_inspection_ids.anyOf[1] (Value): Array of string. IDs of every
     * inspection recorded for this Return, oldest first, including superseded inspections. Expand
     * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_inspection_ids.anyOf[1][] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". previous_attributes.return_inspection_ids.anyOf[2]
     * (Value): null. previous_attributes.return_inspections (Optional): Array of {@link
     * ReturnInspectionPreviousAttributes} or null. Present only when `expand` includes
     * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
     * previous_attributes.return_inspections.anyOf[1] (Value): Array of {@link
     * ReturnInspectionPreviousAttributes}. Present only when `expand` includes
     * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
     * previous_attributes.return_inspections.anyOf[1][] (Value): {@link
     * ReturnInspectionPreviousAttributes}. previous_attributes.return_inspections.anyOf[2]
     * (Value): null. previous_attributes.return_number (Optional): string or null. Human-readable
     * number for the Return. previous_attributes.return_number.anyOf[1] (Value): string.
     * Human-readable number for the Return. previous_attributes.return_number.anyOf[2] (Value):
     * null. previous_attributes.return_receipt_ids (Optional): Array of string or null. IDs of
     * every receipt recorded for this Return, oldest first, including superseded receipts. Expand
     * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_receipt_ids.anyOf[1] (Value): Array of string. IDs of every
     * receipt recorded for this Return, oldest first, including superseded receipts. Expand
     * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_receipt_ids.anyOf[1][] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". previous_attributes.return_receipt_ids.anyOf[2] (Value):
     * null. previous_attributes.return_receipts (Optional): Array of {@link
     * ReturnReceiptPreviousAttributes} or null. Present only when `expand` includes
     * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
     * previous_attributes.return_receipts.anyOf[1] (Value): Array of {@link
     * ReturnReceiptPreviousAttributes}. Present only when `expand` includes `return_receipts`. The
     * receipts in `return_receipt_ids`, in the same order.
     * previous_attributes.return_receipts.anyOf[1][] (Value): {@link
     * ReturnReceiptPreviousAttributes}. previous_attributes.return_receipts.anyOf[2] (Value):
     * null. previous_attributes.return_resolution_ids (Optional): Array of string or null. IDs of
     * every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_resolution_ids.anyOf[1] (Value): Array of string. IDs of
     * every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_resolution_ids.anyOf[1][] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". previous_attributes.return_resolution_ids.anyOf[2]
     * (Value): null. previous_attributes.return_resolutions (Optional): Array of {@link
     * ReturnResolutionPreviousAttributes} or null. Present only when `expand` includes
     * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
     * previous_attributes.return_resolutions.anyOf[1] (Value): Array of {@link
     * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
     * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
     * previous_attributes.return_resolutions.anyOf[1][] (Value): {@link
     * ReturnResolutionPreviousAttributes}. previous_attributes.return_resolutions.anyOf[2]
     * (Value): null. previous_attributes.shipment_ids (Optional): Array of string or null. IDs of
     * every shipment raised to send this Return's items back, oldest first, including voided
     * shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.shipment_ids.anyOf[1] (Value): Array of string. IDs of every shipment
     * raised to send this Return's items back, oldest first, including voided shipments. Expand
     * `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.shipment_ids.anyOf[1][] (Value): string. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". previous_attributes.shipment_ids.anyOf[2] (Value): null.
     * previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
     * previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes `shipments`.
     * Summaries of the shipments in `shipment_ids`, in the same order.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Where the whole Return stands.
     * Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. Where the whole Return stands. Read
     * `decision_status`, `merchandise_status`, and `resolution_status` for the part you need.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can succeed now. Actions the API key or
     * token doesn't have the scope for are left out. A Return waiting for a decision lists
     * `decide` and `cancel`. An open Return lists `cancel` only while no units have been received,
     * inspected, dispositioned, or resolved, and it has no current receipts or inspections,
     * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
     * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
     * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
     * "cancel", "complete", "decide", "process", "reopen".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * succeed now. Actions the API key or token doesn't have the scope for are left out. A Return
     * waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while
     * no units have been received, inspected, dispositioned, or resolved, and it has no current
     * receipts or inspections, non-canceled dispositions or resolutions, or non-voided return
     * shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers`
     * is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. []
     * enum: "cancel", "complete", "decide", "process", "reopen".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "complete", "decide", "process", "reopen". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Goes up with every change to
     * the Return. Each activity's `return_version` is the version that activity produced. A write
     * that takes `expected_version` or `expected_return_version` for this Return compares it with
     * this value. previous_attributes.version.anyOf[1] (Value): integer. Goes up with every change
     * to the Return. Each activity's `return_version` is the version that activity produced. A
     * write that takes `expected_version` or `expected_return_version` for this Return compares it
     * with this value. Format: int64. minimum: 0. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * Who caused this event, captured when the change commits. Omitted when the event predates
         * actor attribution or attribution is unavailable. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID.
         */
        "actor"?: ReturnActor;
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * Return. Who performed a return action: a buyer, merchant, integration, or the system,
         * with an optional ID. cancellation_reason (Optional): string. Why the Return was
         * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
         * "created_in_error", "other". cancellation_reason_message (Optional): string. Detail sent
         * with the cancellation. Merchant reads only. completed_at (Optional): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_by (Optional):
         * {@link ReturnActor}. Who completed the Return. `system` when Flint completed it
         * automatically. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. completion_blockers (Required): Array of {@link
         * ReturnCompletionBlocker}. What is still owed before the Return can complete. Empty when
         * nothing is. completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something
         * still owed before a return can complete, with the return line or record it concerns.
         * completion_mode (Optional): string. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_reason (Optional): string. Why the Return was completed by hand. Absent when
         * Flint completed it automatically. Value enum: "manual_completion", "exception_waived",
         * "other". completion_reason_message (Optional): string. Detail sent when the Return was
         * completed by hand. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". customer (Optional): {@link ExpandedCustomerSummary} or
         * null. Present only when `expand` includes `customer`; `null` when expanded and there is
         * no related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". decision_status (Required): string. Whether the requested units
         * were approved. `pending` until one decision covers every line. Value enum: "pending",
         * "approved", "partially_approved", "declined". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". financial_summary (Required): {@link ReturnFinancialSummary}.
         * The Return's money in one place: the value of the returned lines, deductions and
         * credits, and what has been refunded or collected. The money for a return: returned
         * value, deductions, credits, replacement total, and amounts due to or from the buyer.
         * handoff_requirements (Required): Array of {@link ReturnHandoffRequirement}. What the
         * buyer still has to send back and where. Each entry leaves the list once it is satisfied,
         * so an empty list means nothing is waiting on the buyer. handoff_requirements[] (Value):
         * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the
         * destination, instructions, line items, and expiry. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. Buyer routes return only keys from the buyer's namespace. initiated_by
         * (Required): string. Who created the Return: buyer for a customer session on /v1/me or
         * Flint's hosted account, merchant for a Dashboard user, integration for an API key or
         * partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer",
         * "merchant", "integration", "system". line_items (Required): Array of {@link
         * WebhookSnapshotReturnLineItem}. The lines being returned. line_items[] (Value): {@link
         * WebhookSnapshotReturnLineItem}. An item included in a return request. merchandise_status
         * (Required): string. On the Return, the least-finished line's value. Value enum:
         * "not_required", "awaiting_handoff", "in_transit", "partially_received",
         * "inspection_required", "partially_inspected", "inspection_review_required",
         * "disposition_required", "resolved", "exception". metadata (Required): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Required): string. ID of the Order
         * the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation
         * (Optional): {@link ReturnPolicyEvaluation}. How your return policies judged the request
         * when the Return was created. How a return policy evaluated a return request: overall
         * status and reason, the policy revision used, and per-line results. resolution_status
         * (Required): string. Whether the buyer has received the value they are owed. Combines the
         * Return's resolutions and its unsettled corrections. Value enum: "not_selected",
         * "pending", "partially_completed", "requires_action", "completed", "failed".
         * return_disposition_ids (Required): Array of string. IDs of every disposition recorded
         * for this Return, oldest first, including failed and canceled dispositions. Expand
         * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
         * return_disposition_ids[] (Value): string. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * return_dispositions (Optional): Array of {@link WebhookSnapshotReturnDisposition}.
         * Present only when `expand` includes `return_dispositions`. The dispositions in
         * `return_disposition_ids`, in the same order. return_dispositions[] (Value): {@link
         * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link WebhookSnapshotReturnInspection}. Present only when `expand` includes
         * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
         * return_inspections[] (Value): {@link WebhookSnapshotReturnInspection}. An assessment of
         * the condition of returned items. return_number (Required): string. Human-readable number
         * for the Return. return_receipt_ids (Required): Array of string. IDs of every receipt
         * recorded for this Return, oldest first, including superseded receipts. Expand
         * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
         * return_receipt_ids[] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * return_receipts (Optional): Array of {@link WebhookSnapshotReturnReceipt}. Present only
         * when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the
         * same order. return_receipts[] (Value): {@link WebhookSnapshotReturnReceipt}. A record of
         * returned items arriving at a location. return_resolution_ids (Required): Array of
         * string. IDs of every resolution created for this Return, oldest first, including failed
         * and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
         * to read them inline. return_resolution_ids[] (Value): string. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of {@link
         * WebhookSnapshotReturnResolution}. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions[] (Value): {@link WebhookSnapshotReturnResolution}. The refund,
         * exchange, or other outcome of a return. shipment_ids (Required): Array of string. IDs of
         * every shipment raised to send this Return's items back, oldest first, including voided
         * shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
         * shipment_ids[] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments
         * (Optional): Array of {@link ExpandedShipmentSummary}. Present only when `expand`
         * includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Where the whole Return stands. Read `decision_status`,
         * `merchandise_status`, and `resolution_status` for the part you need. Value enum:
         * "requested", "open", "completed", "declined", "canceled". supported_actions (Required):
         * Array of string. Actions that can succeed now. Actions the API key or token doesn't have
         * the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
         * An open Return lists `cancel` only while no units have been received, inspected,
         * dispositioned, or resolved, and it has no current receipts or inspections, non-canceled
         * dispositions or resolutions, or non-voided return shipments. It lists `complete` when
         * `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return
         * lists `reopen`. A declined or canceled Return lists none. [] enum: "cancel", "complete",
         * "decide", "process", "reopen". supported_actions[] (Value): string. Value enum:
         * "cancel", "complete", "decide", "process", "reopen". updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Goes up with every change to the Return. Each activity's
         * `return_version` is the version that activity produced. A write that takes
         * `expected_version` or `expected_return_version` for this Return compares it with this
         * value. Format: int64. minimum: 0.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer routes return only keys from the buyer's
             * namespace.
             */
            "idempotency_key"?: string | null;
            /**
             * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted
             * account, merchant for a Dashboard user, integration for an API key or partner app,
             * or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant",
             * "integration", "system".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link WebhookSnapshotReturnLineItem}. An item
             * included in a return request.
             */
            "line_items": Array<WebhookSnapshotReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
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
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_completed", "requires_action", "completed", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
             * handled.
             */
            "return_dispositions"?: Array<WebhookSnapshotReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnInspection}. An assessment of the condition of returned items.
             */
            "return_inspections"?: Array<WebhookSnapshotReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnReceipt}. A record of returned items arriving at a location.
             */
            "return_receipts"?: Array<WebhookSnapshotReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnResolution}. The refund, exchange, or other outcome of a
             * return.
             */
            "return_resolutions"?: Array<WebhookSnapshotReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Actions the API key or token doesn't have the scope
             * for are left out. A Return waiting for a decision lists `decide` and `cancel`. An
             * open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "process", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. canceled_at (Optional): string or null. RFC3339
         * timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. canceled_by
         * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the Return.
         * canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * canceled_by.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the Return was canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
         * "expired", "created_in_error", "other". cancellation_reason.anyOf[1] (Value): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason.anyOf[2]
         * (Value): null. cancellation_reason_message (Optional): string or null. Detail sent with
         * the cancellation. Merchant reads only. cancellation_reason_message.anyOf[1] (Value):
         * string. Detail sent with the cancellation. Merchant reads only.
         * cancellation_reason_message.anyOf[2] (Value): null. completed_at (Optional): string or
         * null. RFC3339 timestamp. completed_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2] (Value): null.
         * completed_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who completed
         * the Return. `system` when Flint completed it automatically. completed_by.anyOf[1]
         * (Value): {@link ReturnActorPreviousAttributes}. completed_by.anyOf[2] (Value): null.
         * completion_blockers (Optional): Array of {@link
         * ReturnCompletionBlockerPreviousAttributes} or null. What is still owed before the Return
         * can complete. Empty when nothing is. completion_blockers.anyOf[1] (Value): Array of
         * {@link ReturnCompletionBlockerPreviousAttributes}. What is still owed before the Return
         * can complete. Empty when nothing is. completion_blockers.anyOf[1][] (Value): {@link
         * ReturnCompletionBlockerPreviousAttributes}. completion_blockers.anyOf[2] (Value): null.
         * completion_mode (Optional): string or null. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_mode.anyOf[1] (Value): string. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_mode.anyOf[2] (Value): null. completion_reason (Optional): string or null.
         * Why the Return was completed by hand. Absent when Flint completed it automatically.
         * Value enum: "manual_completion", "exception_waived", "other". completion_reason.anyOf[1]
         * (Value): string. Why the Return was completed by hand. Absent when Flint completed it
         * automatically. Value enum: "manual_completion", "exception_waived", "other".
         * completion_reason.anyOf[2] (Value): null. completion_reason_message (Optional): string
         * or null. Detail sent when the Return was completed by hand.
         * completion_reason_message.anyOf[1] (Value): string. Detail sent when the Return was
         * completed by hand. completion_reason_message.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. The customer the Return belongs to.
         * customer_id.anyOf[1] (Value): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. decision_at
         * (Optional): string or null. RFC3339 timestamp. decision_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * decision_at.anyOf[2] (Value): null. decision_status (Optional): string or null. Whether
         * the requested units were approved. `pending` until one decision covers every line. Value
         * enum: "pending", "approved", "partially_approved", "declined". decision_status.anyOf[1]
         * (Value): string. Whether the requested units were approved. `pending` until one decision
         * covers every line. Value enum: "pending", "approved", "partially_approved", "declined".
         * decision_status.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. financial_summary (Optional): {@link
         * ReturnFinancialSummaryPreviousAttributes} or null. The Return's money in one place: the
         * value of the returned lines, deductions and credits, and what has been refunded or
         * collected. financial_summary.anyOf[1] (Value): {@link
         * ReturnFinancialSummaryPreviousAttributes}. financial_summary.anyOf[2] (Value): null.
         * handoff_requirements (Optional): Array of {@link
         * ReturnHandoffRequirementPreviousAttributes} or null. What the buyer still has to send
         * back and where. Each entry leaves the list once it is satisfied, so an empty list means
         * nothing is waiting on the buyer. handoff_requirements.anyOf[1] (Value): Array of {@link
         * ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back and
         * where. Each entry leaves the list once it is satisfied, so an empty list means nothing
         * is waiting on the buyer. handoff_requirements.anyOf[1][] (Value): {@link
         * ReturnHandoffRequirementPreviousAttributes}. handoff_requirements.anyOf[2] (Value):
         * null. idempotency_key (Optional): string or null. The Idempotency-Key of the request
         * that created this resource. `null` when that request sent no key, Flint created the
         * resource, the reader isn't the caller that created it (another app install, a buyer, or
         * the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer routes return only keys from the
         * buyer's namespace. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource. `null` when that request sent no key, Flint created
         * the resource, the reader isn't the caller that created it (another app install, a buyer,
         * or the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer routes return only keys from the
         * buyer's namespace. idempotency_key.anyOf[2] (Value): null. initiated_by (Optional):
         * string or null. Who created the Return: buyer for a customer session on /v1/me or
         * Flint's hosted account, merchant for a Dashboard user, integration for an API key or
         * partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer",
         * "merchant", "integration", "system". initiated_by.anyOf[1] (Value): string. Who created
         * the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app, or system for Flint
         * automation. It cannot be sent. Value enum: "buyer", "merchant", "integration", "system".
         * initiated_by.anyOf[2] (Value): null. line_items (Optional): Array of {@link
         * ReturnLineItemPreviousAttributes} or null. The lines being returned. line_items.anyOf[1]
         * (Value): Array of {@link ReturnLineItemPreviousAttributes}. The lines being returned.
         * line_items.anyOf[1][] (Value): {@link ReturnLineItemPreviousAttributes}.
         * line_items.anyOf[2] (Value): null. merchandise_status (Optional): string or null. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception".
         * merchandise_status.anyOf[1] (Value): string. On the Return, the least-finished line's
         * value. Value enum: "not_required", "awaiting_handoff", "in_transit",
         * "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception".
         * merchandise_status.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or
         * null. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
         * rules. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2]
         * (Value): null. order_id (Optional): string or null. ID of the Order the Return is
         * against. order_id.anyOf[1] (Value): string. ID of the Order the Return is against.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * policy_evaluation (Optional): {@link ReturnPolicyEvaluationPreviousAttributes} or null.
         * How your return policies judged the request when the Return was created.
         * policy_evaluation.anyOf[1] (Value): {@link ReturnPolicyEvaluationPreviousAttributes}.
         * policy_evaluation.anyOf[2] (Value): null. resolution_status (Optional): string or null.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_completed", "requires_action", "completed", "failed".
         * resolution_status.anyOf[1] (Value): string. Whether the buyer has received the value
         * they are owed. Combines the Return's resolutions and its unsettled corrections. Value
         * enum: "not_selected", "pending", "partially_completed", "requires_action", "completed",
         * "failed". resolution_status.anyOf[2] (Value): null. return_disposition_ids (Optional):
         * Array of string or null. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids.anyOf[1] (Value):
         * Array of string. IDs of every disposition recorded for this Return, oldest first,
         * including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids.anyOf[1][] (Value):
         * string. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_disposition_ids.anyOf[2]
         * (Value): null. return_dispositions (Optional): Array of {@link
         * ReturnDispositionPreviousAttributes} or null. Present only when `expand` includes
         * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
         * return_dispositions.anyOf[1] (Value): Array of {@link
         * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
         * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
         * return_dispositions.anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
         * return_dispositions.anyOf[2] (Value): null. return_id (Optional): string or null. Unique
         * identifier for this return, prefixed `ret_`. return_id.anyOf[1] (Value): string. Unique
         * identifier for this return, prefixed `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_id.anyOf[2] (Value): null. return_inspection_ids (Optional): Array of string or
         * null. IDs of every inspection recorded for this Return, oldest first, including
         * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to
         * read them inline. return_inspection_ids.anyOf[1] (Value): Array of string. IDs of every
         * inspection recorded for this Return, oldest first, including superseded inspections.
         * Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
         * return_inspection_ids.anyOf[1][] (Value): string. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspection_ids.anyOf[2] (Value): null.
         * return_inspections (Optional): Array of {@link ReturnInspectionPreviousAttributes} or
         * null. Present only when `expand` includes `return_inspections`. The inspections in
         * `return_inspection_ids`, in the same order. return_inspections.anyOf[1] (Value): Array
         * of {@link ReturnInspectionPreviousAttributes}. Present only when `expand` includes
         * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
         * return_inspections.anyOf[1][] (Value): {@link ReturnInspectionPreviousAttributes}.
         * return_inspections.anyOf[2] (Value): null. return_number (Optional): string or null.
         * Human-readable number for the Return. return_number.anyOf[1] (Value): string.
         * Human-readable number for the Return. return_number.anyOf[2] (Value): null.
         * return_receipt_ids (Optional): Array of string or null. IDs of every receipt recorded
         * for this Return, oldest first, including superseded receipts. Expand `return_receipts`
         * on `GET /v1/returns/{return_id}` to read them inline. return_receipt_ids.anyOf[1]
         * (Value): Array of string. IDs of every receipt recorded for this Return, oldest first,
         * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}`
         * to read them inline. return_receipt_ids.anyOf[1][] (Value): string. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_ids.anyOf[2] (Value): null.
         * return_receipts (Optional): Array of {@link ReturnReceiptPreviousAttributes} or null.
         * Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts.anyOf[1] (Value): Array of
         * {@link ReturnReceiptPreviousAttributes}. Present only when `expand` includes
         * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
         * return_receipts.anyOf[1][] (Value): {@link ReturnReceiptPreviousAttributes}.
         * return_receipts.anyOf[2] (Value): null. return_resolution_ids (Optional): Array of
         * string or null. IDs of every resolution created for this Return, oldest first, including
         * failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids.anyOf[1] (Value):
         * Array of string. IDs of every resolution created for this Return, oldest first,
         * including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids.anyOf[1][] (Value):
         * string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_ids.anyOf[2]
         * (Value): null. return_resolutions (Optional): Array of {@link
         * ReturnResolutionPreviousAttributes} or null. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions.anyOf[1] (Value): Array of {@link
         * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions.anyOf[1][] (Value): {@link ReturnResolutionPreviousAttributes}.
         * return_resolutions.anyOf[2] (Value): null. shipment_ids (Optional): Array of string or
         * null. IDs of every shipment raised to send this Return's items back, oldest first,
         * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read
         * them inline. shipment_ids.anyOf[1] (Value): Array of string. IDs of every shipment
         * raised to send this Return's items back, oldest first, including voided shipments.
         * Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
         * shipment_ids.anyOf[1][] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
         * shipment_ids.anyOf[2] (Value): null. shipments (Optional): Array of {@link
         * ExpandedShipmentSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
         * shipments.anyOf[1] (Value): Array of {@link ExpandedShipmentSummaryPreviousAttributes}.
         * Present only when `expand` includes `shipments`. Summaries of the shipments in
         * `shipment_ids`, in the same order. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Where the whole Return stands. Read `decision_status`,
         * `merchandise_status`, and `resolution_status` for the part you need. Value enum:
         * "requested", "open", "completed", "declined", "canceled". status.anyOf[1] (Value):
         * string. Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". status.anyOf[2] (Value): null. supported_actions (Optional):
         * Array of string or null. Actions that can succeed now. Actions the API key or token
         * doesn't have the scope for are left out. A Return waiting for a decision lists `decide`
         * and `cancel`. An open Return lists `cancel` only while no units have been received,
         * inspected, dispositioned, or resolved, and it has no current receipts or inspections,
         * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
         * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
         * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
         * "cancel", "complete", "decide", "process", "reopen". supported_actions.anyOf[1] (Value):
         * Array of string. Actions that can succeed now. Actions the API key or token doesn't have
         * the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
         * An open Return lists `cancel` only while no units have been received, inspected,
         * dispositioned, or resolved, and it has no current receipts or inspections, non-canceled
         * dispositions or resolutions, or non-voided return shipments. It lists `complete` when
         * `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return
         * lists `reopen`. A declined or canceled Return lists none. [] enum: "cancel", "complete",
         * "decide", "process", "reopen". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "cancel", "complete", "decide", "process", "reopen". supported_actions.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Goes up with
         * every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. version.anyOf[1] (Value): integer. Goes up
         * with every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. Format: int64. minimum: 0. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who canceled the Return. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why
             * the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string.
             * Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
             */
            "cancellation_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * Who completed the Return. `system` when Flint completed it automatically. anyOf[1]
             * (Value): {@link ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "completed_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * What is still owed before the Return can complete. Empty when nothing is. anyOf[1]
             * (Value): Array of {@link ReturnCompletionBlockerPreviousAttributes}. What is still
             * owed before the Return can complete. Empty when nothing is. anyOf[1][] (Value):
             * {@link ReturnCompletionBlockerPreviousAttributes}. anyOf[2] (Value): null.
             */
            "completion_blockers"?: ((Array<ReturnCompletionBlockerPreviousAttributes>) | (null));
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic". anyOf[1] (Value): string. automatic completes the
             * Return when the last completion blocker clears; manual waits for POST
             * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
             * "manual", "automatic". anyOf[2] (Value): null.
             */
            "completion_mode"?: (("manual" | "automatic" | (string & {})) | (null));
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other". anyOf[1] (Value):
             * string. Why the Return was completed by hand. Absent when Flint completed it
             * automatically. Value enum: "manual_completion", "exception_waived", "other".
             * anyOf[2] (Value): null.
             */
            "completion_reason"?: (("manual_completion" | "exception_waived" | "other" | (string & {})) | (null));
            /**
             * Detail sent when the Return was completed by hand. anyOf[1] (Value): string. Detail
             * sent when the Return was completed by hand. anyOf[2] (Value): null.
             */
            "completion_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * The customer the Return belongs to. anyOf[1] (Value): string. The customer the
             * Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value):
             * null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "decision_at"?: ((string) | (null));
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined". anyOf[1]
             * (Value): string. Whether the requested units were approved. `pending` until one
             * decision covers every line. Value enum: "pending", "approved", "partially_approved",
             * "declined". anyOf[2] (Value): null.
             */
            "decision_status"?: (("pending" | "approved" | "partially_approved" | "declined" | (string & {})) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. anyOf[1] (Value): {@link
             * ReturnFinancialSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "financial_summary"?: ((ReturnFinancialSummaryPreviousAttributes) | (null));
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. anyOf[1]
             * (Value): Array of {@link ReturnHandoffRequirementPreviousAttributes}. What the buyer
             * still has to send back and where. Each entry leaves the list once it is satisfied,
             * so an empty list means nothing is waiting on the buyer. anyOf[1][] (Value): {@link
             * ReturnHandoffRequirementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "handoff_requirements"?: ((Array<ReturnHandoffRequirementPreviousAttributes>) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer routes return only keys from the buyer's
             * namespace. anyOf[1] (Value): string. The Idempotency-Key of the request that created
             * this resource. `null` when that request sent no key, Flint created the resource, the
             * reader isn't the caller that created it (another app install, a buyer, or the
             * merchant reading an app's or buyer's record), or the caller that created an older
             * record is unknown. Filter its list with `idempotency_key` to find it. Recorded
             * payloads, including replayed responses and webhook events, can return `null`. To
             * find a key that a replay returns as `null`, read the resource. Buyer routes return
             * only keys from the buyer's namespace. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted
             * account, merchant for a Dashboard user, integration for an API key or partner app,
             * or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant",
             * "integration", "system". anyOf[1] (Value): string. Who created the Return: buyer for
             * a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard
             * user, integration for an API key or partner app, or system for Flint automation. It
             * cannot be sent. Value enum: "buyer", "merchant", "integration", "system". anyOf[2]
             * (Value): null.
             */
            "initiated_by"?: (("buyer" | "merchant" | "integration" | "system" | (string & {})) | (null));
            /**
             * The lines being returned. anyOf[1] (Value): Array of {@link
             * ReturnLineItemPreviousAttributes}. The lines being returned. anyOf[1][] (Value):
             * {@link ReturnLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnLineItemPreviousAttributes>) | (null));
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception". anyOf[1] (Value): string. On the Return, the least-finished
             * line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
             * "partially_received", "inspection_required", "partially_inspected",
             * "inspection_review_required", "disposition_required", "resolved", "exception".
             * anyOf[2] (Value): null.
             */
            "merchandise_status"?: (("not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {}))
                | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the Order the Return is against. anyOf[1] (Value): string. ID of the Order the
             * Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
             * null.
             */
            "order_id"?: ((string) | (null));
            /**
             * How your return policies judged the request when the Return was created. anyOf[1]
             * (Value): {@link ReturnPolicyEvaluationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "policy_evaluation"?: ((ReturnPolicyEvaluationPreviousAttributes) | (null));
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_completed", "requires_action", "completed", "failed". anyOf[1] (Value):
             * string. Whether the buyer has received the value they are owed. Combines the
             * Return's resolutions and its unsettled corrections. Value enum: "not_selected",
             * "pending", "partially_completed", "requires_action", "completed", "failed". anyOf[2]
             * (Value): null.
             */
            "resolution_status"?: (("not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {}))
                | (null));
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. anyOf[1] (Value): Array of string. IDs
             * of every disposition recorded for this Return, oldest first, including failed and
             * canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}`
             * to read them inline. anyOf[1][] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
             */
            "return_disposition_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
             * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same
             * order. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "return_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * Unique identifier for this return, prefixed `ret_`. anyOf[1] (Value): string. Unique
             * identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. anyOf[1] (Value): Array of string. IDs of every inspection recorded for
             * this Return, oldest first, including superseded inspections. Expand
             * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
             * anyOf[1][] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2]
             * (Value): null.
             */
            "return_inspection_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnInspectionPreviousAttributes}. Present only when `expand` includes
             * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnInspectionPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "return_inspections"?: ((Array<ReturnInspectionPreviousAttributes>) | (null));
            /**
             * Human-readable number for the Return. anyOf[1] (Value): string. Human-readable
             * number for the Return. anyOf[2] (Value): null.
             */
            "return_number"?: ((string) | (null));
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. anyOf[1] (Value): Array of string. IDs of every receipt recorded for this
             * Return, oldest first, including superseded receipts. Expand `return_receipts` on
             * `GET /v1/returns/{return_id}` to read them inline. anyOf[1][] (Value): string.
             * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnReceiptPreviousAttributes}. Present only when `expand` includes
             * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnReceiptPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_receipts"?: ((Array<ReturnReceiptPreviousAttributes>) | (null));
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. anyOf[1] (Value): Array of string. IDs of every resolution
             * created for this Return, oldest first, including failed and canceled resolutions.
             * Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
             * anyOf[1][] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2]
             * (Value): null.
             */
            "return_resolution_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
             * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnResolutionPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "return_resolutions"?: ((Array<ReturnResolutionPreviousAttributes>) | (null));
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. anyOf[1] (Value): Array of string. IDs of every shipment raised to
             * send this Return's items back, oldest first, including voided shipments. Expand
             * `shipments` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1][]
             * (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
             */
            "shipment_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes
             * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
             * anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled". anyOf[1] (Value): string. Where the whole
             * Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status`
             * for the part you need. Value enum: "requested", "open", "completed", "declined",
             * "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
            /**
             * Actions that can succeed now. Actions the API key or token doesn't have the scope
             * for are left out. A Return waiting for a decision lists `decide` and `cancel`. An
             * open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". anyOf[1] (Value): Array of
             * string. Actions that can succeed now. Actions the API key or token doesn't have the
             * scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
             * An open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". anyOf[1][] (Value): string.
             * Value enum: "cancel", "complete", "decide", "process", "reopen". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. anyOf[1]
             * (Value): integer. Goes up with every change to the Return. Each activity's
             * `return_version` is the version that activity produced. A write that takes
             * `expected_version` or `expected_return_version` for this Return compares it with
             * this value. Format: int64. minimum: 0. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return.reopened". */
    "event_type"?: "return.reopened";
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
 * The `return.reopened` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReturnReopenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  actor (Optional): {@link ReturnActor}. Who caused this event, captured when the change
     * commits. Omitted when the event predates actor attribution or attribution is unavailable.
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID. object (Required): object. The resource snapshot, without expansions. Webhooks
     * omit no additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@link
     * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID. object.cancellation_reason (Optional):
     * string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other". object.cancellation_reason_message
     * (Optional): string. Detail sent with the cancellation. Merchant reads only.
     * object.completed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link ReturnActor}. Who completed
     * the Return. `system` when Flint completed it automatically. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.completion_blockers
     * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the Return
     * can complete. Empty when nothing is. object.completion_blockers[] (Value): {@link
     * ReturnCompletionBlocker}. Something still owed before a return can complete, with the return
     * line or record it concerns. object.completion_mode (Optional): string. automatic completes
     * the Return when the last completion blocker clears; manual waits for POST
     * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". object.completion_reason (Optional): string. Why the Return was
     * completed by hand. Absent when Flint completed it automatically. Value enum:
     * "manual_completion", "exception_waived", "other". object.completion_reason_message
     * (Optional): string. Detail sent when the Return was completed by hand. object.created_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.decision_status (Required): string. Whether the requested units were approved.
     * `pending` until one decision covers every line. Value enum: "pending", "approved",
     * "partially_approved", "declined". object.external_reference_id (Optional): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.financial_summary (Required): {@link ReturnFinancialSummary}. The
     * Return's money in one place: the value of the returned lines, deductions and credits, and
     * what has been refunded or collected. The money for a return: returned value, deductions,
     * credits, replacement total, and amounts due to or from the buyer.
     * object.handoff_requirements (Required): Array of {@link ReturnHandoffRequirement}. What the
     * buyer still has to send back and where. Each entry leaves the list once it is satisfied, so
     * an empty list means nothing is waiting on the buyer. object.handoff_requirements[] (Value):
     * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the
     * destination, instructions, line items, and expiry. object.idempotency_key (Optional): string
     * or null. The Idempotency-Key of the request that created this resource. `null` when that
     * request sent no key, Flint created the resource, the reader isn't the caller that created it
     * (another app install, a buyer, or the merchant reading an app's or buyer's record), or the
     * caller that created an older record is unknown. Filter its list with `idempotency_key` to
     * find it. Recorded payloads, including replayed responses and webhook events, can return
     * `null`. To find a key that a replay returns as `null`, read the resource. Buyer routes
     * return only keys from the buyer's namespace. object.initiated_by (Required): string. Who
     * created the Return: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app, or system for
     * Flint automation. It cannot be sent. Value enum: "buyer", "merchant", "integration",
     * "system". object.line_items (Required): Array of {@link WebhookSnapshotReturnLineItem}. The
     * lines being returned. object.line_items[] (Value): {@link WebhookSnapshotReturnLineItem}. An
     * item included in a return request. object.merchandise_status (Required): string. On the
     * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_completed", "requires_action", "completed", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * WebhookSnapshotReturnDisposition}. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * object.return_dispositions[] (Value): {@link WebhookSnapshotReturnDisposition}. A decision
     * about how returned merchandise will be handled. object.return_id (Required): string. Unique
     * identifier for this return, prefixed `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_inspection_ids (Required): Array of string. IDs of every inspection recorded
     * for this Return, oldest first, including superseded inspections. Expand `return_inspections`
     * on `GET /v1/returns/{return_id}` to read them inline. object.return_inspection_ids[]
     * (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections
     * (Optional): Array of {@link WebhookSnapshotReturnInspection}. Present only when `expand`
     * includes `return_inspections`. The inspections in `return_inspection_ids`, in the same
     * order. object.return_inspections[] (Value): {@link WebhookSnapshotReturnInspection}. An
     * assessment of the condition of returned items. object.return_number (Required): string.
     * Human-readable number for the Return. object.return_receipt_ids (Required): Array of string.
     * IDs of every receipt recorded for this Return, oldest first, including superseded receipts.
     * Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_receipt_ids[] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.return_receipts (Optional): Array of {@link WebhookSnapshotReturnReceipt}. Present
     * only when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the
     * same order. object.return_receipts[] (Value): {@link WebhookSnapshotReturnReceipt}. A record
     * of returned items arriving at a location. object.return_resolution_ids (Required): Array of
     * string. IDs of every resolution created for this Return, oldest first, including failed and
     * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * WebhookSnapshotReturnResolution}. Present only when `expand` includes `return_resolutions`.
     * The resolutions in `return_resolution_ids`, in the same order. object.return_resolutions[]
     * (Value): {@link WebhookSnapshotReturnResolution}. The refund, exchange, or other outcome of
     * a return. object.shipment_ids (Required): Array of string. IDs of every shipment raised to
     * send this Return's items back, oldest first, including voided shipments. Expand `shipments`
     * on `GET /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. Actions that
     * can succeed now. Actions the API key or token doesn't have the scope for are left out. A
     * Return waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel`
     * only while no units have been received, inspected, dispositioned, or resolved, and it has no
     * current receipts or inspections, non-canceled dispositions or resolutions, or non-voided
     * return shipments. It lists `complete` when `completion_mode` is `manual` and
     * `completion_blockers` is empty. A completed Return lists `reopen`. A declined or canceled
     * Return lists none. [] enum: "cancel", "complete", "decide", "process", "reopen".
     * object.supported_actions[] (Value): string. Value enum: "cancel", "complete", "decide",
     * "process", "reopen". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with
     * every change to the Return. Each activity's `return_version` is the version that activity
     * produced. A write that takes `expected_version` or `expected_return_version` for this Return
     * compares it with this value. Format: int64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.canceled_at (Optional): string or null.
     * RFC3339 timestamp. previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.canceled_at.anyOf[2] (Value): null. previous_attributes.canceled_by
     * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the Return.
     * previous_attributes.canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.canceled_by.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the Return was
     * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
     * "created_in_error", "other". previous_attributes.cancellation_reason.anyOf[1] (Value):
     * string. Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason_message (Optional): string or null. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[1] (Value): string. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[2] (Value): null.
     * previous_attributes.completed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.completed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.completed_at.anyOf[2]
     * (Value): null. previous_attributes.completed_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who completed the Return. `system` when Flint
     * completed it automatically. previous_attributes.completed_by.anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. previous_attributes.completed_by.anyOf[2] (Value): null.
     * previous_attributes.completion_blockers (Optional): Array of {@link
     * ReturnCompletionBlockerPreviousAttributes} or null. What is still owed before the Return can
     * complete. Empty when nothing is. previous_attributes.completion_blockers.anyOf[1] (Value):
     * Array of {@link ReturnCompletionBlockerPreviousAttributes}. What is still owed before the
     * Return can complete. Empty when nothing is.
     * previous_attributes.completion_blockers.anyOf[1][] (Value): {@link
     * ReturnCompletionBlockerPreviousAttributes}. previous_attributes.completion_blockers.anyOf[2]
     * (Value): null. previous_attributes.completion_mode (Optional): string or null. automatic
     * completes the Return when the last completion blocker clears; manual waits for POST
     * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". previous_attributes.completion_mode.anyOf[1] (Value): string.
     * automatic completes the Return when the last completion blocker clears; manual waits for
     * POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
     * "manual", "automatic". previous_attributes.completion_mode.anyOf[2] (Value): null.
     * previous_attributes.completion_reason (Optional): string or null. Why the Return was
     * completed by hand. Absent when Flint completed it automatically. Value enum:
     * "manual_completion", "exception_waived", "other".
     * previous_attributes.completion_reason.anyOf[1] (Value): string. Why the Return was completed
     * by hand. Absent when Flint completed it automatically. Value enum: "manual_completion",
     * "exception_waived", "other". previous_attributes.completion_reason.anyOf[2] (Value): null.
     * previous_attributes.completion_reason_message (Optional): string or null. Detail sent when
     * the Return was completed by hand. previous_attributes.completion_reason_message.anyOf[1]
     * (Value): string. Detail sent when the Return was completed by hand.
     * previous_attributes.completion_reason_message.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `customer`; `null` when expanded and there is no related customer.
     * previous_attributes.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2] (Value):
     * null. previous_attributes.customer_id (Optional): string or null. The customer the Return
     * belongs to. previous_attributes.customer_id.anyOf[1] (Value): string. The customer the
     * Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.decision_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.decision_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.decision_at.anyOf[2] (Value): null. previous_attributes.decision_status
     * (Optional): string or null. Whether the requested units were approved. `pending` until one
     * decision covers every line. Value enum: "pending", "approved", "partially_approved",
     * "declined". previous_attributes.decision_status.anyOf[1] (Value): string. Whether the
     * requested units were approved. `pending` until one decision covers every line. Value enum:
     * "pending", "approved", "partially_approved", "declined".
     * previous_attributes.decision_status.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.financial_summary (Optional): {@link
     * ReturnFinancialSummaryPreviousAttributes} or null. The Return's money in one place: the
     * value of the returned lines, deductions and credits, and what has been refunded or
     * collected. previous_attributes.financial_summary.anyOf[1] (Value): {@link
     * ReturnFinancialSummaryPreviousAttributes}. previous_attributes.financial_summary.anyOf[2]
     * (Value): null. previous_attributes.handoff_requirements (Optional): Array of {@link
     * ReturnHandoffRequirementPreviousAttributes} or null. What the buyer still has to send back
     * and where. Each entry leaves the list once it is satisfied, so an empty list means nothing
     * is waiting on the buyer. previous_attributes.handoff_requirements.anyOf[1] (Value): Array of
     * {@link ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back
     * and where. Each entry leaves the list once it is satisfied, so an empty list means nothing
     * is waiting on the buyer. previous_attributes.handoff_requirements.anyOf[1][] (Value): {@link
     * ReturnHandoffRequirementPreviousAttributes}.
     * previous_attributes.handoff_requirements.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. Buyer routes return only keys from the buyer's
     * namespace. previous_attributes.idempotency_key.anyOf[1] (Value): string. The Idempotency-Key
     * of the request that created this resource. `null` when that request sent no key, Flint
     * created the resource, the reader isn't the caller that created it (another app install, a
     * buyer, or the merchant reading an app's or buyer's record), or the caller that created an
     * older record is unknown. Filter its list with `idempotency_key` to find it. Recorded
     * payloads, including replayed responses and webhook events, can return `null`. To find a key
     * that a replay returns as `null`, read the resource. Buyer routes return only keys from the
     * buyer's namespace. previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.initiated_by (Optional): string or null. Who created the Return: buyer
     * for a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
     * integration for an API key or partner app, or system for Flint automation. It cannot be
     * sent. Value enum: "buyer", "merchant", "integration", "system".
     * previous_attributes.initiated_by.anyOf[1] (Value): string. Who created the Return: buyer for
     * a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
     * integration for an API key or partner app, or system for Flint automation. It cannot be
     * sent. Value enum: "buyer", "merchant", "integration", "system".
     * previous_attributes.initiated_by.anyOf[2] (Value): null. previous_attributes.line_items
     * (Optional): Array of {@link ReturnLineItemPreviousAttributes} or null. The lines being
     * returned. previous_attributes.line_items.anyOf[1] (Value): Array of {@link
     * ReturnLineItemPreviousAttributes}. The lines being returned.
     * previous_attributes.line_items.anyOf[1][] (Value): {@link ReturnLineItemPreviousAttributes}.
     * previous_attributes.line_items.anyOf[2] (Value): null.
     * previous_attributes.merchandise_status (Optional): string or null. On the Return, the
     * least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * previous_attributes.merchandise_status.anyOf[1] (Value): string. On the Return, the
     * least-finished line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     * previous_attributes.merchandise_status.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or
     * null. Present only when `expand` includes `order`; `null` when expanded and there is no
     * related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. ID of the Order the Return is
     * against. previous_attributes.order_id.anyOf[1] (Value): string. ID of the Order the Return
     * is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2]
     * (Value): null. previous_attributes.policy_evaluation (Optional): {@link
     * ReturnPolicyEvaluationPreviousAttributes} or null. How your return policies judged the
     * request when the Return was created. previous_attributes.policy_evaluation.anyOf[1] (Value):
     * {@link ReturnPolicyEvaluationPreviousAttributes}.
     * previous_attributes.policy_evaluation.anyOf[2] (Value): null.
     * previous_attributes.resolution_status (Optional): string or null. Whether the buyer has
     * received the value they are owed. Combines the Return's resolutions and its unsettled
     * corrections. Value enum: "not_selected", "pending", "partially_completed",
     * "requires_action", "completed", "failed". previous_attributes.resolution_status.anyOf[1]
     * (Value): string. Whether the buyer has received the value they are owed. Combines the
     * Return's resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
     * "partially_completed", "requires_action", "completed", "failed".
     * previous_attributes.resolution_status.anyOf[2] (Value): null.
     * previous_attributes.return_disposition_ids (Optional): Array of string or null. IDs of every
     * disposition recorded for this Return, oldest first, including failed and canceled
     * dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_disposition_ids.anyOf[1] (Value): Array of string. IDs of
     * every disposition recorded for this Return, oldest first, including failed and canceled
     * dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_disposition_ids.anyOf[1][] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". previous_attributes.return_disposition_ids.anyOf[2]
     * (Value): null. previous_attributes.return_dispositions (Optional): Array of {@link
     * ReturnDispositionPreviousAttributes} or null. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * previous_attributes.return_dispositions.anyOf[1] (Value): Array of {@link
     * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
     * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
     * previous_attributes.return_dispositions.anyOf[1][] (Value): {@link
     * ReturnDispositionPreviousAttributes}. previous_attributes.return_dispositions.anyOf[2]
     * (Value): null. previous_attributes.return_id (Optional): string or null. Unique identifier
     * for this return, prefixed `ret_`. previous_attributes.return_id.anyOf[1] (Value): string.
     * Unique identifier for this return, prefixed `ret_`. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_inspection_ids (Optional): Array of string or null. IDs of every
     * inspection recorded for this Return, oldest first, including superseded inspections. Expand
     * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_inspection_ids.anyOf[1] (Value): Array of string. IDs of every
     * inspection recorded for this Return, oldest first, including superseded inspections. Expand
     * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_inspection_ids.anyOf[1][] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". previous_attributes.return_inspection_ids.anyOf[2]
     * (Value): null. previous_attributes.return_inspections (Optional): Array of {@link
     * ReturnInspectionPreviousAttributes} or null. Present only when `expand` includes
     * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
     * previous_attributes.return_inspections.anyOf[1] (Value): Array of {@link
     * ReturnInspectionPreviousAttributes}. Present only when `expand` includes
     * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
     * previous_attributes.return_inspections.anyOf[1][] (Value): {@link
     * ReturnInspectionPreviousAttributes}. previous_attributes.return_inspections.anyOf[2]
     * (Value): null. previous_attributes.return_number (Optional): string or null. Human-readable
     * number for the Return. previous_attributes.return_number.anyOf[1] (Value): string.
     * Human-readable number for the Return. previous_attributes.return_number.anyOf[2] (Value):
     * null. previous_attributes.return_receipt_ids (Optional): Array of string or null. IDs of
     * every receipt recorded for this Return, oldest first, including superseded receipts. Expand
     * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_receipt_ids.anyOf[1] (Value): Array of string. IDs of every
     * receipt recorded for this Return, oldest first, including superseded receipts. Expand
     * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.return_receipt_ids.anyOf[1][] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". previous_attributes.return_receipt_ids.anyOf[2] (Value):
     * null. previous_attributes.return_receipts (Optional): Array of {@link
     * ReturnReceiptPreviousAttributes} or null. Present only when `expand` includes
     * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
     * previous_attributes.return_receipts.anyOf[1] (Value): Array of {@link
     * ReturnReceiptPreviousAttributes}. Present only when `expand` includes `return_receipts`. The
     * receipts in `return_receipt_ids`, in the same order.
     * previous_attributes.return_receipts.anyOf[1][] (Value): {@link
     * ReturnReceiptPreviousAttributes}. previous_attributes.return_receipts.anyOf[2] (Value):
     * null. previous_attributes.return_resolution_ids (Optional): Array of string or null. IDs of
     * every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_resolution_ids.anyOf[1] (Value): Array of string. IDs of
     * every resolution created for this Return, oldest first, including failed and canceled
     * resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them
     * inline. previous_attributes.return_resolution_ids.anyOf[1][] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". previous_attributes.return_resolution_ids.anyOf[2]
     * (Value): null. previous_attributes.return_resolutions (Optional): Array of {@link
     * ReturnResolutionPreviousAttributes} or null. Present only when `expand` includes
     * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
     * previous_attributes.return_resolutions.anyOf[1] (Value): Array of {@link
     * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
     * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
     * previous_attributes.return_resolutions.anyOf[1][] (Value): {@link
     * ReturnResolutionPreviousAttributes}. previous_attributes.return_resolutions.anyOf[2]
     * (Value): null. previous_attributes.shipment_ids (Optional): Array of string or null. IDs of
     * every shipment raised to send this Return's items back, oldest first, including voided
     * shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.shipment_ids.anyOf[1] (Value): Array of string. IDs of every shipment
     * raised to send this Return's items back, oldest first, including voided shipments. Expand
     * `shipments` on `GET /v1/returns/{return_id}` to read them inline.
     * previous_attributes.shipment_ids.anyOf[1][] (Value): string. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". previous_attributes.shipment_ids.anyOf[2] (Value): null.
     * previous_attributes.shipments (Optional): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
     * previous_attributes.shipments.anyOf[1] (Value): Array of {@link
     * ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes `shipments`.
     * Summaries of the shipments in `shipment_ids`, in the same order.
     * previous_attributes.shipments.anyOf[1][] (Value): {@link
     * ExpandedShipmentSummaryPreviousAttributes}. previous_attributes.shipments.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. Where the whole Return stands.
     * Read `decision_status`, `merchandise_status`, and `resolution_status` for the part you need.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. Where the whole Return stands. Read
     * `decision_status`, `merchandise_status`, and `resolution_status` for the part you need.
     * Value enum: "requested", "open", "completed", "declined", "canceled".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can succeed now. Actions the API key or
     * token doesn't have the scope for are left out. A Return waiting for a decision lists
     * `decide` and `cancel`. An open Return lists `cancel` only while no units have been received,
     * inspected, dispositioned, or resolved, and it has no current receipts or inspections,
     * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
     * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
     * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
     * "cancel", "complete", "decide", "process", "reopen".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * succeed now. Actions the API key or token doesn't have the scope for are left out. A Return
     * waiting for a decision lists `decide` and `cancel`. An open Return lists `cancel` only while
     * no units have been received, inspected, dispositioned, or resolved, and it has no current
     * receipts or inspections, non-canceled dispositions or resolutions, or non-voided return
     * shipments. It lists `complete` when `completion_mode` is `manual` and `completion_blockers`
     * is empty. A completed Return lists `reopen`. A declined or canceled Return lists none. []
     * enum: "cancel", "complete", "decide", "process", "reopen".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "complete", "decide", "process", "reopen". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Goes up with every change to
     * the Return. Each activity's `return_version` is the version that activity produced. A write
     * that takes `expected_version` or `expected_return_version` for this Return compares it with
     * this value. previous_attributes.version.anyOf[1] (Value): integer. Goes up with every change
     * to the Return. Each activity's `return_version` is the version that activity produced. A
     * write that takes `expected_version` or `expected_return_version` for this Return compares it
     * with this value. Format: int64. minimum: 0. previous_attributes.version.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * Who caused this event, captured when the change commits. Omitted when the event predates
         * actor attribution or attribution is unavailable. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID.
         */
        "actor"?: ReturnActor;
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * Return. Who performed a return action: a buyer, merchant, integration, or the system,
         * with an optional ID. cancellation_reason (Optional): string. Why the Return was
         * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
         * "created_in_error", "other". cancellation_reason_message (Optional): string. Detail sent
         * with the cancellation. Merchant reads only. completed_at (Optional): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". completed_by (Optional):
         * {@link ReturnActor}. Who completed the Return. `system` when Flint completed it
         * automatically. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. completion_blockers (Required): Array of {@link
         * ReturnCompletionBlocker}. What is still owed before the Return can complete. Empty when
         * nothing is. completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something
         * still owed before a return can complete, with the return line or record it concerns.
         * completion_mode (Optional): string. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_reason (Optional): string. Why the Return was completed by hand. Absent when
         * Flint completed it automatically. Value enum: "manual_completion", "exception_waived",
         * "other". completion_reason_message (Optional): string. Detail sent when the Return was
         * completed by hand. created_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". customer (Optional): {@link ExpandedCustomerSummary} or
         * null. Present only when `expand` includes `customer`; `null` when expanded and there is
         * no related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". decision_status (Required): string. Whether the requested units
         * were approved. `pending` until one decision covers every line. Value enum: "pending",
         * "approved", "partially_approved", "declined". external_reference_id (Optional): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". financial_summary (Required): {@link ReturnFinancialSummary}.
         * The Return's money in one place: the value of the returned lines, deductions and
         * credits, and what has been refunded or collected. The money for a return: returned
         * value, deductions, credits, replacement total, and amounts due to or from the buyer.
         * handoff_requirements (Required): Array of {@link ReturnHandoffRequirement}. What the
         * buyer still has to send back and where. Each entry leaves the list once it is satisfied,
         * so an empty list means nothing is waiting on the buyer. handoff_requirements[] (Value):
         * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back: the
         * destination, instructions, line items, and expiry. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. Buyer routes return only keys from the buyer's namespace. initiated_by
         * (Required): string. Who created the Return: buyer for a customer session on /v1/me or
         * Flint's hosted account, merchant for a Dashboard user, integration for an API key or
         * partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer",
         * "merchant", "integration", "system". line_items (Required): Array of {@link
         * WebhookSnapshotReturnLineItem}. The lines being returned. line_items[] (Value): {@link
         * WebhookSnapshotReturnLineItem}. An item included in a return request. merchandise_status
         * (Required): string. On the Return, the least-finished line's value. Value enum:
         * "not_required", "awaiting_handoff", "in_transit", "partially_received",
         * "inspection_required", "partially_inspected", "inspection_review_required",
         * "disposition_required", "resolved", "exception". metadata (Required): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Required): string. ID of the Order
         * the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation
         * (Optional): {@link ReturnPolicyEvaluation}. How your return policies judged the request
         * when the Return was created. How a return policy evaluated a return request: overall
         * status and reason, the policy revision used, and per-line results. resolution_status
         * (Required): string. Whether the buyer has received the value they are owed. Combines the
         * Return's resolutions and its unsettled corrections. Value enum: "not_selected",
         * "pending", "partially_completed", "requires_action", "completed", "failed".
         * return_disposition_ids (Required): Array of string. IDs of every disposition recorded
         * for this Return, oldest first, including failed and canceled dispositions. Expand
         * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
         * return_disposition_ids[] (Value): string. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * return_dispositions (Optional): Array of {@link WebhookSnapshotReturnDisposition}.
         * Present only when `expand` includes `return_dispositions`. The dispositions in
         * `return_disposition_ids`, in the same order. return_dispositions[] (Value): {@link
         * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link WebhookSnapshotReturnInspection}. Present only when `expand` includes
         * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
         * return_inspections[] (Value): {@link WebhookSnapshotReturnInspection}. An assessment of
         * the condition of returned items. return_number (Required): string. Human-readable number
         * for the Return. return_receipt_ids (Required): Array of string. IDs of every receipt
         * recorded for this Return, oldest first, including superseded receipts. Expand
         * `return_receipts` on `GET /v1/returns/{return_id}` to read them inline.
         * return_receipt_ids[] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * return_receipts (Optional): Array of {@link WebhookSnapshotReturnReceipt}. Present only
         * when `expand` includes `return_receipts`. The receipts in `return_receipt_ids`, in the
         * same order. return_receipts[] (Value): {@link WebhookSnapshotReturnReceipt}. A record of
         * returned items arriving at a location. return_resolution_ids (Required): Array of
         * string. IDs of every resolution created for this Return, oldest first, including failed
         * and canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
         * to read them inline. return_resolution_ids[] (Value): string. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of {@link
         * WebhookSnapshotReturnResolution}. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions[] (Value): {@link WebhookSnapshotReturnResolution}. The refund,
         * exchange, or other outcome of a return. shipment_ids (Required): Array of string. IDs of
         * every shipment raised to send this Return's items back, oldest first, including voided
         * shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
         * shipment_ids[] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments
         * (Optional): Array of {@link ExpandedShipmentSummary}. Present only when `expand`
         * includes `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Where the whole Return stands. Read `decision_status`,
         * `merchandise_status`, and `resolution_status` for the part you need. Value enum:
         * "requested", "open", "completed", "declined", "canceled". supported_actions (Required):
         * Array of string. Actions that can succeed now. Actions the API key or token doesn't have
         * the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
         * An open Return lists `cancel` only while no units have been received, inspected,
         * dispositioned, or resolved, and it has no current receipts or inspections, non-canceled
         * dispositions or resolutions, or non-voided return shipments. It lists `complete` when
         * `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return
         * lists `reopen`. A declined or canceled Return lists none. [] enum: "cancel", "complete",
         * "decide", "process", "reopen". supported_actions[] (Value): string. Value enum:
         * "cancel", "complete", "decide", "process", "reopen". updated_at (Required): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Goes up with every change to the Return. Each activity's
         * `return_version` is the version that activity produced. A write that takes
         * `expected_version` or `expected_return_version` for this Return compares it with this
         * value. Format: int64. minimum: 0.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer routes return only keys from the buyer's
             * namespace.
             */
            "idempotency_key"?: string | null;
            /**
             * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted
             * account, merchant for a Dashboard user, integration for an API key or partner app,
             * or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant",
             * "integration", "system".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | "system" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link WebhookSnapshotReturnLineItem}. An item
             * included in a return request.
             */
            "line_items": Array<WebhookSnapshotReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
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
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_completed", "requires_action", "completed", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
             * handled.
             */
            "return_dispositions"?: Array<WebhookSnapshotReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnInspection}. An assessment of the condition of returned items.
             */
            "return_inspections"?: Array<WebhookSnapshotReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnReceipt}. A record of returned items arriving at a location.
             */
            "return_receipts"?: Array<WebhookSnapshotReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link
             * WebhookSnapshotReturnResolution}. The refund, exchange, or other outcome of a
             * return.
             */
            "return_resolutions"?: Array<WebhookSnapshotReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Actions the API key or token doesn't have the scope
             * for are left out. A Return waiting for a decision lists `decide` and `cancel`. An
             * open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "process", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. canceled_at (Optional): string or null. RFC3339
         * timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null. canceled_by
         * (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the Return.
         * canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * canceled_by.anyOf[2] (Value): null. cancellation_reason (Optional): string or null. Why
         * the Return was canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
         * "expired", "created_in_error", "other". cancellation_reason.anyOf[1] (Value): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason.anyOf[2]
         * (Value): null. cancellation_reason_message (Optional): string or null. Detail sent with
         * the cancellation. Merchant reads only. cancellation_reason_message.anyOf[1] (Value):
         * string. Detail sent with the cancellation. Merchant reads only.
         * cancellation_reason_message.anyOf[2] (Value): null. completed_at (Optional): string or
         * null. RFC3339 timestamp. completed_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". completed_at.anyOf[2] (Value): null.
         * completed_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who completed
         * the Return. `system` when Flint completed it automatically. completed_by.anyOf[1]
         * (Value): {@link ReturnActorPreviousAttributes}. completed_by.anyOf[2] (Value): null.
         * completion_blockers (Optional): Array of {@link
         * ReturnCompletionBlockerPreviousAttributes} or null. What is still owed before the Return
         * can complete. Empty when nothing is. completion_blockers.anyOf[1] (Value): Array of
         * {@link ReturnCompletionBlockerPreviousAttributes}. What is still owed before the Return
         * can complete. Empty when nothing is. completion_blockers.anyOf[1][] (Value): {@link
         * ReturnCompletionBlockerPreviousAttributes}. completion_blockers.anyOf[2] (Value): null.
         * completion_mode (Optional): string or null. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_mode.anyOf[1] (Value): string. automatic completes the Return when the last
         * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete.
         * Reopening a Return sets it to manual. Value enum: "manual", "automatic".
         * completion_mode.anyOf[2] (Value): null. completion_reason (Optional): string or null.
         * Why the Return was completed by hand. Absent when Flint completed it automatically.
         * Value enum: "manual_completion", "exception_waived", "other". completion_reason.anyOf[1]
         * (Value): string. Why the Return was completed by hand. Absent when Flint completed it
         * automatically. Value enum: "manual_completion", "exception_waived", "other".
         * completion_reason.anyOf[2] (Value): null. completion_reason_message (Optional): string
         * or null. Detail sent when the Return was completed by hand.
         * completion_reason_message.anyOf[1] (Value): string. Detail sent when the Return was
         * completed by hand. completion_reason_message.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value):
         * null. customer_id (Optional): string or null. The customer the Return belongs to.
         * customer_id.anyOf[1] (Value): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_id.anyOf[2] (Value): null. decision_at
         * (Optional): string or null. RFC3339 timestamp. decision_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * decision_at.anyOf[2] (Value): null. decision_status (Optional): string or null. Whether
         * the requested units were approved. `pending` until one decision covers every line. Value
         * enum: "pending", "approved", "partially_approved", "declined". decision_status.anyOf[1]
         * (Value): string. Whether the requested units were approved. `pending` until one decision
         * covers every line. Value enum: "pending", "approved", "partially_approved", "declined".
         * decision_status.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. financial_summary (Optional): {@link
         * ReturnFinancialSummaryPreviousAttributes} or null. The Return's money in one place: the
         * value of the returned lines, deductions and credits, and what has been refunded or
         * collected. financial_summary.anyOf[1] (Value): {@link
         * ReturnFinancialSummaryPreviousAttributes}. financial_summary.anyOf[2] (Value): null.
         * handoff_requirements (Optional): Array of {@link
         * ReturnHandoffRequirementPreviousAttributes} or null. What the buyer still has to send
         * back and where. Each entry leaves the list once it is satisfied, so an empty list means
         * nothing is waiting on the buyer. handoff_requirements.anyOf[1] (Value): Array of {@link
         * ReturnHandoffRequirementPreviousAttributes}. What the buyer still has to send back and
         * where. Each entry leaves the list once it is satisfied, so an empty list means nothing
         * is waiting on the buyer. handoff_requirements.anyOf[1][] (Value): {@link
         * ReturnHandoffRequirementPreviousAttributes}. handoff_requirements.anyOf[2] (Value):
         * null. idempotency_key (Optional): string or null. The Idempotency-Key of the request
         * that created this resource. `null` when that request sent no key, Flint created the
         * resource, the reader isn't the caller that created it (another app install, a buyer, or
         * the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer routes return only keys from the
         * buyer's namespace. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource. `null` when that request sent no key, Flint created
         * the resource, the reader isn't the caller that created it (another app install, a buyer,
         * or the merchant reading an app's or buyer's record), or the caller that created an older
         * record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads,
         * including replayed responses and webhook events, can return `null`. To find a key that a
         * replay returns as `null`, read the resource. Buyer routes return only keys from the
         * buyer's namespace. idempotency_key.anyOf[2] (Value): null. initiated_by (Optional):
         * string or null. Who created the Return: buyer for a customer session on /v1/me or
         * Flint's hosted account, merchant for a Dashboard user, integration for an API key or
         * partner app, or system for Flint automation. It cannot be sent. Value enum: "buyer",
         * "merchant", "integration", "system". initiated_by.anyOf[1] (Value): string. Who created
         * the Return: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app, or system for Flint
         * automation. It cannot be sent. Value enum: "buyer", "merchant", "integration", "system".
         * initiated_by.anyOf[2] (Value): null. line_items (Optional): Array of {@link
         * ReturnLineItemPreviousAttributes} or null. The lines being returned. line_items.anyOf[1]
         * (Value): Array of {@link ReturnLineItemPreviousAttributes}. The lines being returned.
         * line_items.anyOf[1][] (Value): {@link ReturnLineItemPreviousAttributes}.
         * line_items.anyOf[2] (Value): null. merchandise_status (Optional): string or null. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception".
         * merchandise_status.anyOf[1] (Value): string. On the Return, the least-finished line's
         * value. Value enum: "not_required", "awaiting_handoff", "in_transit",
         * "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception".
         * merchandise_status.anyOf[2] (Value): null. metadata (Optional): {@link MetadataMap} or
         * null. Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
         * rules. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Present only
         * when `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2]
         * (Value): null. order_id (Optional): string or null. ID of the Order the Return is
         * against. order_id.anyOf[1] (Value): string. ID of the Order the Return is against.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * policy_evaluation (Optional): {@link ReturnPolicyEvaluationPreviousAttributes} or null.
         * How your return policies judged the request when the Return was created.
         * policy_evaluation.anyOf[1] (Value): {@link ReturnPolicyEvaluationPreviousAttributes}.
         * policy_evaluation.anyOf[2] (Value): null. resolution_status (Optional): string or null.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_completed", "requires_action", "completed", "failed".
         * resolution_status.anyOf[1] (Value): string. Whether the buyer has received the value
         * they are owed. Combines the Return's resolutions and its unsettled corrections. Value
         * enum: "not_selected", "pending", "partially_completed", "requires_action", "completed",
         * "failed". resolution_status.anyOf[2] (Value): null. return_disposition_ids (Optional):
         * Array of string or null. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids.anyOf[1] (Value):
         * Array of string. IDs of every disposition recorded for this Return, oldest first,
         * including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids.anyOf[1][] (Value):
         * string. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_disposition_ids.anyOf[2]
         * (Value): null. return_dispositions (Optional): Array of {@link
         * ReturnDispositionPreviousAttributes} or null. Present only when `expand` includes
         * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
         * return_dispositions.anyOf[1] (Value): Array of {@link
         * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
         * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same order.
         * return_dispositions.anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}.
         * return_dispositions.anyOf[2] (Value): null. return_id (Optional): string or null. Unique
         * identifier for this return, prefixed `ret_`. return_id.anyOf[1] (Value): string. Unique
         * identifier for this return, prefixed `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_id.anyOf[2] (Value): null. return_inspection_ids (Optional): Array of string or
         * null. IDs of every inspection recorded for this Return, oldest first, including
         * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to
         * read them inline. return_inspection_ids.anyOf[1] (Value): Array of string. IDs of every
         * inspection recorded for this Return, oldest first, including superseded inspections.
         * Expand `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
         * return_inspection_ids.anyOf[1][] (Value): string. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspection_ids.anyOf[2] (Value): null.
         * return_inspections (Optional): Array of {@link ReturnInspectionPreviousAttributes} or
         * null. Present only when `expand` includes `return_inspections`. The inspections in
         * `return_inspection_ids`, in the same order. return_inspections.anyOf[1] (Value): Array
         * of {@link ReturnInspectionPreviousAttributes}. Present only when `expand` includes
         * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
         * return_inspections.anyOf[1][] (Value): {@link ReturnInspectionPreviousAttributes}.
         * return_inspections.anyOf[2] (Value): null. return_number (Optional): string or null.
         * Human-readable number for the Return. return_number.anyOf[1] (Value): string.
         * Human-readable number for the Return. return_number.anyOf[2] (Value): null.
         * return_receipt_ids (Optional): Array of string or null. IDs of every receipt recorded
         * for this Return, oldest first, including superseded receipts. Expand `return_receipts`
         * on `GET /v1/returns/{return_id}` to read them inline. return_receipt_ids.anyOf[1]
         * (Value): Array of string. IDs of every receipt recorded for this Return, oldest first,
         * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}`
         * to read them inline. return_receipt_ids.anyOf[1][] (Value): string. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipt_ids.anyOf[2] (Value): null.
         * return_receipts (Optional): Array of {@link ReturnReceiptPreviousAttributes} or null.
         * Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts.anyOf[1] (Value): Array of
         * {@link ReturnReceiptPreviousAttributes}. Present only when `expand` includes
         * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
         * return_receipts.anyOf[1][] (Value): {@link ReturnReceiptPreviousAttributes}.
         * return_receipts.anyOf[2] (Value): null. return_resolution_ids (Optional): Array of
         * string or null. IDs of every resolution created for this Return, oldest first, including
         * failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids.anyOf[1] (Value):
         * Array of string. IDs of every resolution created for this Return, oldest first,
         * including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids.anyOf[1][] (Value):
         * string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolution_ids.anyOf[2]
         * (Value): null. return_resolutions (Optional): Array of {@link
         * ReturnResolutionPreviousAttributes} or null. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions.anyOf[1] (Value): Array of {@link
         * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
         * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
         * return_resolutions.anyOf[1][] (Value): {@link ReturnResolutionPreviousAttributes}.
         * return_resolutions.anyOf[2] (Value): null. shipment_ids (Optional): Array of string or
         * null. IDs of every shipment raised to send this Return's items back, oldest first,
         * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to read
         * them inline. shipment_ids.anyOf[1] (Value): Array of string. IDs of every shipment
         * raised to send this Return's items back, oldest first, including voided shipments.
         * Expand `shipments` on `GET /v1/returns/{return_id}` to read them inline.
         * shipment_ids.anyOf[1][] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
         * shipment_ids.anyOf[2] (Value): null. shipments (Optional): Array of {@link
         * ExpandedShipmentSummaryPreviousAttributes} or null. Present only when `expand` includes
         * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
         * shipments.anyOf[1] (Value): Array of {@link ExpandedShipmentSummaryPreviousAttributes}.
         * Present only when `expand` includes `shipments`. Summaries of the shipments in
         * `shipment_ids`, in the same order. shipments.anyOf[1][] (Value): {@link
         * ExpandedShipmentSummaryPreviousAttributes}. shipments.anyOf[2] (Value): null. status
         * (Optional): string or null. Where the whole Return stands. Read `decision_status`,
         * `merchandise_status`, and `resolution_status` for the part you need. Value enum:
         * "requested", "open", "completed", "declined", "canceled". status.anyOf[1] (Value):
         * string. Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". status.anyOf[2] (Value): null. supported_actions (Optional):
         * Array of string or null. Actions that can succeed now. Actions the API key or token
         * doesn't have the scope for are left out. A Return waiting for a decision lists `decide`
         * and `cancel`. An open Return lists `cancel` only while no units have been received,
         * inspected, dispositioned, or resolved, and it has no current receipts or inspections,
         * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
         * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
         * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
         * "cancel", "complete", "decide", "process", "reopen". supported_actions.anyOf[1] (Value):
         * Array of string. Actions that can succeed now. Actions the API key or token doesn't have
         * the scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
         * An open Return lists `cancel` only while no units have been received, inspected,
         * dispositioned, or resolved, and it has no current receipts or inspections, non-canceled
         * dispositions or resolutions, or non-voided return shipments. It lists `complete` when
         * `completion_mode` is `manual` and `completion_blockers` is empty. A completed Return
         * lists `reopen`. A declined or canceled Return lists none. [] enum: "cancel", "complete",
         * "decide", "process", "reopen". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "cancel", "complete", "decide", "process", "reopen". supported_actions.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Goes up with
         * every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. version.anyOf[1] (Value): integer. Goes up
         * with every change to the Return. Each activity's `return_version` is the version that
         * activity produced. A write that takes `expected_version` or `expected_return_version`
         * for this Return compares it with this value. Format: int64. minimum: 0. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who canceled the Return. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why
             * the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string.
             * Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
             */
            "cancellation_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "completed_at"?: ((string) | (null));
            /**
             * Who completed the Return. `system` when Flint completed it automatically. anyOf[1]
             * (Value): {@link ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "completed_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * What is still owed before the Return can complete. Empty when nothing is. anyOf[1]
             * (Value): Array of {@link ReturnCompletionBlockerPreviousAttributes}. What is still
             * owed before the Return can complete. Empty when nothing is. anyOf[1][] (Value):
             * {@link ReturnCompletionBlockerPreviousAttributes}. anyOf[2] (Value): null.
             */
            "completion_blockers"?: ((Array<ReturnCompletionBlockerPreviousAttributes>) | (null));
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic". anyOf[1] (Value): string. automatic completes the
             * Return when the last completion blocker clears; manual waits for POST
             * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
             * "manual", "automatic". anyOf[2] (Value): null.
             */
            "completion_mode"?: (("manual" | "automatic" | (string & {})) | (null));
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other". anyOf[1] (Value):
             * string. Why the Return was completed by hand. Absent when Flint completed it
             * automatically. Value enum: "manual_completion", "exception_waived", "other".
             * anyOf[2] (Value): null.
             */
            "completion_reason"?: (("manual_completion" | "exception_waived" | "other" | (string & {})) | (null));
            /**
             * Detail sent when the Return was completed by hand. anyOf[1] (Value): string. Detail
             * sent when the Return was completed by hand. anyOf[2] (Value): null.
             */
            "completion_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link
             * ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * The customer the Return belongs to. anyOf[1] (Value): string. The customer the
             * Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value):
             * null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "decision_at"?: ((string) | (null));
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined". anyOf[1]
             * (Value): string. Whether the requested units were approved. `pending` until one
             * decision covers every line. Value enum: "pending", "approved", "partially_approved",
             * "declined". anyOf[2] (Value): null.
             */
            "decision_status"?: (("pending" | "approved" | "partially_approved" | "declined" | (string & {})) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. anyOf[1] (Value): {@link
             * ReturnFinancialSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "financial_summary"?: ((ReturnFinancialSummaryPreviousAttributes) | (null));
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. anyOf[1]
             * (Value): Array of {@link ReturnHandoffRequirementPreviousAttributes}. What the buyer
             * still has to send back and where. Each entry leaves the list once it is satisfied,
             * so an empty list means nothing is waiting on the buyer. anyOf[1][] (Value): {@link
             * ReturnHandoffRequirementPreviousAttributes}. anyOf[2] (Value): null.
             */
            "handoff_requirements"?: ((Array<ReturnHandoffRequirementPreviousAttributes>) | (null));
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource. Buyer routes return only keys from the buyer's
             * namespace. anyOf[1] (Value): string. The Idempotency-Key of the request that created
             * this resource. `null` when that request sent no key, Flint created the resource, the
             * reader isn't the caller that created it (another app install, a buyer, or the
             * merchant reading an app's or buyer's record), or the caller that created an older
             * record is unknown. Filter its list with `idempotency_key` to find it. Recorded
             * payloads, including replayed responses and webhook events, can return `null`. To
             * find a key that a replay returns as `null`, read the resource. Buyer routes return
             * only keys from the buyer's namespace. anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Who created the Return: buyer for a customer session on /v1/me or Flint's hosted
             * account, merchant for a Dashboard user, integration for an API key or partner app,
             * or system for Flint automation. It cannot be sent. Value enum: "buyer", "merchant",
             * "integration", "system". anyOf[1] (Value): string. Who created the Return: buyer for
             * a customer session on /v1/me or Flint's hosted account, merchant for a Dashboard
             * user, integration for an API key or partner app, or system for Flint automation. It
             * cannot be sent. Value enum: "buyer", "merchant", "integration", "system". anyOf[2]
             * (Value): null.
             */
            "initiated_by"?: (("buyer" | "merchant" | "integration" | "system" | (string & {})) | (null));
            /**
             * The lines being returned. anyOf[1] (Value): Array of {@link
             * ReturnLineItemPreviousAttributes}. The lines being returned. anyOf[1][] (Value):
             * {@link ReturnLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnLineItemPreviousAttributes>) | (null));
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception". anyOf[1] (Value): string. On the Return, the least-finished
             * line's value. Value enum: "not_required", "awaiting_handoff", "in_transit",
             * "partially_received", "inspection_required", "partially_inspected",
             * "inspection_review_required", "disposition_required", "resolved", "exception".
             * anyOf[2] (Value): null.
             */
            "merchandise_status"?: (("not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {}))
                | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the Order the Return is against. anyOf[1] (Value): string. ID of the Order the
             * Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value):
             * null.
             */
            "order_id"?: ((string) | (null));
            /**
             * How your return policies judged the request when the Return was created. anyOf[1]
             * (Value): {@link ReturnPolicyEvaluationPreviousAttributes}. anyOf[2] (Value): null.
             */
            "policy_evaluation"?: ((ReturnPolicyEvaluationPreviousAttributes) | (null));
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_completed", "requires_action", "completed", "failed". anyOf[1] (Value):
             * string. Whether the buyer has received the value they are owed. Combines the
             * Return's resolutions and its unsettled corrections. Value enum: "not_selected",
             * "pending", "partially_completed", "requires_action", "completed", "failed". anyOf[2]
             * (Value): null.
             */
            "resolution_status"?: (("not_selected"
                | "pending"
                | "partially_completed"
                | "requires_action"
                | "completed"
                | "failed"
                | (string & {}))
                | (null));
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. anyOf[1] (Value): Array of string. IDs
             * of every disposition recorded for this Return, oldest first, including failed and
             * canceled dispositions. Expand `return_dispositions` on `GET /v1/returns/{return_id}`
             * to read them inline. anyOf[1][] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW". anyOf[2] (Value): null.
             */
            "return_disposition_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnDispositionPreviousAttributes}. Present only when `expand` includes
             * `return_dispositions`. The dispositions in `return_disposition_ids`, in the same
             * order. anyOf[1][] (Value): {@link ReturnDispositionPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "return_dispositions"?: ((Array<ReturnDispositionPreviousAttributes>) | (null));
            /**
             * Unique identifier for this return, prefixed `ret_`. anyOf[1] (Value): string. Unique
             * identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. anyOf[1] (Value): Array of string. IDs of every inspection recorded for
             * this Return, oldest first, including superseded inspections. Expand
             * `return_inspections` on `GET /v1/returns/{return_id}` to read them inline.
             * anyOf[1][] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2]
             * (Value): null.
             */
            "return_inspection_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnInspectionPreviousAttributes}. Present only when `expand` includes
             * `return_inspections`. The inspections in `return_inspection_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnInspectionPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "return_inspections"?: ((Array<ReturnInspectionPreviousAttributes>) | (null));
            /**
             * Human-readable number for the Return. anyOf[1] (Value): string. Human-readable
             * number for the Return. anyOf[2] (Value): null.
             */
            "return_number"?: ((string) | (null));
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. anyOf[1] (Value): Array of string. IDs of every receipt recorded for this
             * Return, oldest first, including superseded receipts. Expand `return_receipts` on
             * `GET /v1/returns/{return_id}` to read them inline. anyOf[1][] (Value): string.
             * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
             */
            "return_receipt_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnReceiptPreviousAttributes}. Present only when `expand` includes
             * `return_receipts`. The receipts in `return_receipt_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnReceiptPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_receipts"?: ((Array<ReturnReceiptPreviousAttributes>) | (null));
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. anyOf[1] (Value): Array of string. IDs of every resolution
             * created for this Return, oldest first, including failed and canceled resolutions.
             * Expand `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
             * anyOf[1][] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2]
             * (Value): null.
             */
            "return_resolution_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ReturnResolutionPreviousAttributes}. Present only when `expand` includes
             * `return_resolutions`. The resolutions in `return_resolution_ids`, in the same order.
             * anyOf[1][] (Value): {@link ReturnResolutionPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "return_resolutions"?: ((Array<ReturnResolutionPreviousAttributes>) | (null));
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. anyOf[1] (Value): Array of string. IDs of every shipment raised to
             * send this Return's items back, oldest first, including voided shipments. Expand
             * `shipments` on `GET /v1/returns/{return_id}` to read them inline. anyOf[1][]
             * (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
             */
            "shipment_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. anyOf[1] (Value): Array of {@link
             * ExpandedShipmentSummaryPreviousAttributes}. Present only when `expand` includes
             * `shipments`. Summaries of the shipments in `shipment_ids`, in the same order.
             * anyOf[1][] (Value): {@link ExpandedShipmentSummaryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "shipments"?: ((Array<ExpandedShipmentSummaryPreviousAttributes>) | (null));
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled". anyOf[1] (Value): string. Where the whole
             * Return stands. Read `decision_status`, `merchandise_status`, and `resolution_status`
             * for the part you need. Value enum: "requested", "open", "completed", "declined",
             * "canceled". anyOf[2] (Value): null.
             */
            "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
            /**
             * Actions that can succeed now. Actions the API key or token doesn't have the scope
             * for are left out. A Return waiting for a decision lists `decide` and `cancel`. An
             * open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". anyOf[1] (Value): Array of
             * string. Actions that can succeed now. Actions the API key or token doesn't have the
             * scope for are left out. A Return waiting for a decision lists `decide` and `cancel`.
             * An open Return lists `cancel` only while no units have been received, inspected,
             * dispositioned, or resolved, and it has no current receipts or inspections,
             * non-canceled dispositions or resolutions, or non-voided return shipments. It lists
             * `complete` when `completion_mode` is `manual` and `completion_blockers` is empty. A
             * completed Return lists `reopen`. A declined or canceled Return lists none. [] enum:
             * "cancel", "complete", "decide", "process", "reopen". anyOf[1][] (Value): string.
             * Value enum: "cancel", "complete", "decide", "process", "reopen". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"cancel" | "complete" | "decide" | "process" | "reopen" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. anyOf[1]
             * (Value): integer. Goes up with every change to the Return. Each activity's
             * `return_version` is the version that activity produced. A write that takes
             * `expected_version` or `expected_return_version` for this Return compares it with
             * this value. Format: int64. minimum: 0. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return.reopened". */
    "event_type"?: "return.reopened";
});
/** A replacement item added to a return resolution, with its quantity and price totals. */
export type ReturnReplacementLineItem = ({
    /** ID of the bundle the replacement line is for. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** Description of the replacement item. */
    "description"?: string;
    /**
     * Discount on the replacement units. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** Name of the replacement item. */
    "name": string;
    /**
     * The product this replacement variant belongs to. Present whenever variant_id is present;
     * omitted for bundles and custom items. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Unique identifier for this return replacement line item, prefixed `retrepli_`. Example:
     * "retrepli_01KEZF7C00F6P8VWG80G0JC8W2".
     */
    "return_replacement_line_item_id": string;
    /** ID of the resolution the line belongs to. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". */
    "return_resolution_id": string;
    /** SKU of the replacement item. */
    "sku"?: string;
    /**
     * Subtotal of the replacement units, before discount and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax on the replacement units. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Subtotal minus discount, plus tax. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Price of one replacement unit. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** ID of the variant the replacement line is for. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
});
/** The `bundle` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputBundle = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Name of the replacement item. Required when `type` is `custom`. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1.
     */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * Merchant-supplied external tax. Omit to keep a proposed line's frozen calculation or reuse
     * an unambiguous original calculation for matching returned merchandise at the original
     * destination. Automatic and callback orders calculate their own tax. External tax for
     * replacement merchandise. Allowed only on merchant requests for external-tax orders.
     */
    "tax"?: ReturnReplacementTaxRequest;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle" | (string & {});
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": unknown;
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** The `bundle` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputBundleInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestModelInput;
    /**
     * Name of the replacement item. Required when `type` is `custom`. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1.
     */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * Merchant-supplied external tax. Omit to keep a proposed line's frozen calculation or reuse
     * an unambiguous original calculation for matching returned merchandise at the original
     * destination. Automatic and callback orders calculate their own tax. External tax for
     * replacement merchandise. Allowed only on merchant requests for external-tax orders.
     */
    "tax"?: ReturnReplacementTaxRequestInput;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle";
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle";
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "name"?: never;
}) & ({
    "fulfillment"?: never;
})));
/** The `custom` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputCustom = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
    /**
     * Name of the replacement item. Required when `type` is `custom`. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1.
     */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * Merchant-supplied external tax. Omit to keep a proposed line's frozen calculation or reuse
     * an unambiguous original calculation for matching returned merchandise at the original
     * destination. Automatic and callback orders calculate their own tax. External tax for
     * replacement merchandise. Allowed only on merchant requests for external-tax orders.
     */
    "tax"?: ReturnReplacementTaxRequest;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom" | (string & {});
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": unknown;
    /**
     * Name of the replacement item. Required when `type` is `custom`. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1.
     */
    "name": string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
}));
/** The `custom` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputCustomInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestModelInput;
    /**
     * Name of the replacement item. Required when `type` is `custom`. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1.
     */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * Merchant-supplied external tax. Omit to keep a proposed line's frozen calculation or reuse
     * an unambiguous original calculation for matching returned merchandise at the original
     * destination. Automatic and callback orders calculate their own tax. External tax for
     * replacement merchandise. Allowed only on merchant requests for external-tax orders.
     */
    "tax"?: ReturnReplacementTaxRequestInput;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom";
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom";
    /**
     * Name of the replacement item. Required when `type` is `custom`. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1.
     */
    "name": string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestModelInput;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputVariant = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Name of the replacement item. Required when `type` is `custom`. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1.
     */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * Merchant-supplied external tax. Omit to keep a proposed line's frozen calculation or reuse
     * an unambiguous original calculation for matching returned merchandise at the original
     * destination. Automatic and callback orders calculate their own tax. External tax for
     * replacement merchandise. Allowed only on merchant requests for external-tax orders.
     */
    "tax"?: ReturnReplacementTaxRequest;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant" | (string & {});
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": unknown;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
}));
/** The `variant` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputVariantInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestModelInput;
    /**
     * Name of the replacement item. Required when `type` is `custom`. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1.
     */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * Merchant-supplied external tax. Omit to keep a proposed line's frozen calculation or reuse
     * an unambiguous original calculation for matching returned merchandise at the original
     * destination. Automatic and callback orders calculate their own tax. External tax for
     * replacement merchandise. Allowed only on merchant requests for external-tax orders.
     */
    "tax"?: ReturnReplacementTaxRequestInput;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant";
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant";
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}) & ({
    "name"?: never;
}) & ({
    "fulfillment"?: never;
})));
export type ReturnReplacementLineItemPreviousAttributes = ({
    /**
     * ID of the bundle the replacement line is for. anyOf[1] (Value): string. ID of the bundle the
     * replacement line is for. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Description of the replacement item. anyOf[1] (Value): string. Description of the
     * replacement item. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Discount on the replacement units. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Name of the replacement item. anyOf[1] (Value): string. Name of the replacement item.
     * anyOf[2] (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * The product this replacement variant belongs to. Present whenever variant_id is present;
     * omitted for bundles and custom items. anyOf[1] (Value): string. The product this replacement
     * variant belongs to. Present whenever variant_id is present; omitted for bundles and custom
     * items. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * anyOf[2] (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Unique identifier for this return replacement line item, prefixed `retrepli_`. anyOf[1]
     * (Value): string. Unique identifier for this return replacement line item, prefixed
     * `retrepli_`. Example: "retrepli_01KEZF7C00F6P8VWG80G0JC8W2". anyOf[2] (Value): null.
     */
    "return_replacement_line_item_id"?: ((string) | (null));
    /**
     * ID of the resolution the line belongs to. anyOf[1] (Value): string. ID of the resolution the
     * line belongs to. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     */
    "return_resolution_id"?: ((string) | (null));
    /**
     * SKU of the replacement item. anyOf[1] (Value): string. SKU of the replacement item. anyOf[2]
     * (Value): null.
     */
    "sku"?: ((string) | (null));
    /**
     * Subtotal of the replacement units, before discount and tax. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Tax on the replacement units. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Subtotal minus discount, plus tax. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Price of one replacement unit. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * ID of the variant the replacement line is for. anyOf[1] (Value): string. ID of the variant
     * the replacement line is for. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2] (Value):
     * null.
     */
    "variant_id"?: ((string) | (null));
});
/**
 * A replacement item to include in a return resolution, from a variant, a bundle, or a custom name
 * and price.
 */
export type ReturnReplacementLineItemRequest = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /**
     * Name of the replacement item. Required when `type` is `custom`. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1.
     */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * Merchant-supplied external tax. Omit to keep a proposed line's frozen calculation or reuse
     * an unambiguous original calculation for matching returned merchandise at the original
     * destination. Automatic and callback orders calculate their own tax. External tax for
     * replacement merchandise. Allowed only on merchant requests for external-tax orders.
     */
    "tax"?: ReturnReplacementTaxRequest;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
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
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestModelInput;
    /**
     * Name of the replacement item. Required when `type` is `custom`. Surrounding whitespace is
     * trimmed before length validation. A supplied value cannot be blank; use null where clearing
     * is supported. minLength: 1.
     */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * Merchant-supplied external tax. Omit to keep a proposed line's frozen calculation or reuse
     * an unambiguous original calculation for matching returned merchandise at the original
     * destination. Automatic and callback orders calculate their own tax. External tax for
     * replacement merchandise. Allowed only on merchant requests for external-tax orders.
     */
    "tax"?: ReturnReplacementTaxRequestInput;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom";
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<ReturnReplacementLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputCustomInput & object, readonly unknown[]>));
/**
 * External tax for replacement merchandise. Allowed only on merchant requests for external-tax
 * orders.
 */
export type ReturnReplacementTaxRequest = {
    /**
     * External percentage tax components and price mode for this replacement line. A tax
     * calculation you supply for a draft order line item, made of tax components and a price mode.
     */
    "calculation": TaxCalculationRequest;
};
/**
 * External tax for replacement merchandise. Allowed only on merchant requests for external-tax
 * orders.
 */
export type ReturnReplacementTaxRequestInput = {
    /**
     * External percentage tax components and price mode for this replacement line. A tax
     * calculation you supply for a draft order line item, made of tax components and a price mode.
     */
    "calculation": OrderDraftLineItemTaxCalculationRequestModelInput;
};
/** The refund, exchange, or other outcome of a return. */
export type ReturnResolution = {
    /**
     * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the
     * exchange balance; manual_release means the merchant must release the resolution. Value enum:
     * "buyer_payment", "manual_release".
     */
    "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
    /**
     * Who has to act while the resolution's status is `requires_action`. Value enum: "buyer",
     * "merchant".
     */
    "action_required_by"?: "buyer" | "merchant" | (string & {});
    /**
     * Fees and credits applied to the resolution's amounts. [] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     */
    "adjustments": Array<ReturnResolutionAdjustment>;
    /**
     * Amount the buyer owes when deduction_money and replacement_total_money exceed
     * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and
     * for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus
     * deduction_money and replacement_total_money, when that balance is zero or more. For
     * store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "canceled_at"?: string;
    /**
     * Who canceled the resolution. Merchant reads only. Who performed a return action: a buyer,
     * merchant, integration, or the system, with an optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Detail sent with the cancellation. Merchant reads only. */
    "cancellation_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "confirmed_at"?: string;
    /**
     * Who confirmed the resolution. Who performed a return action: a buyer, merchant, integration,
     * or the system, with an optional ID.
     */
    "confirmed_by"?: ReturnActor;
    /**
     * ID of the settled resolution this correction adjusts. Present only when `resolution_type` is
     * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Who created the resolution. Who performed a return action: a buyer, merchant, integration,
     * or the system, with an optional ID.
     */
    "created_by": ReturnActor;
    /**
     * Credits added by the resolution's adjustments. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "credit_adjustment_money": MoneyValue;
    /**
     * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * What a confirmed resolution is still waiting for. Empty when nothing is. [] (Value): {@link
     * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution can
     * finish.
     */
    "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Reason code for a failed Return resolution, when available.
     * refund_payment_balance_unavailable means the original payments cannot fund the resolution;
     * cancel it, then add an explicit deduction or settle the shortfall outside Flint.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
     * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
     * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
     * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
     * "resolution_effect_failed".
     */
    "failure_code"?: "refund_payment_balance_unavailable"
        | "gift_card_refund_destination_required"
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
    /** When the resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "fulfilled_at"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Return lines and quantities the resolution covers. Absent on a correction. [] (Value):
     * {@link ReturnResolutionLineItem}. A return line included in a resolution, with its quantity
     * and returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /**
     * IDs of the payment intents that collect the buyer's balance for this resolution, in the
     * order Flint linked them. Empty until a payment exists. [] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_ids": Array<string>;
    /**
     * Present only when `expand` includes `payment_intents`. Summaries of the payment intents in
     * `payment_intent_ids`, in the same order. [] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * How replacement lines are priced. Present on exchanges and replacements. Value enum:
     * "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them.
     * Empty until a Refund exists. [] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
     */
    "refund_ids": Array<string>;
    /**
     * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same
     * order. [] (Value): {@link Refund}. Money returned against a collected payment.
     */
    "refunds"?: Array<Refund>;
    /**
     * Merchandise the buyer receives instead, for an exchange or replacement. [] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Present only when `expand` includes `replacement_order`; `null` when expanded and there is
     * no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. anyOf[2] (Value): null.
     */
    "replacement_order"?: ((ExpandedOrderSummary) | (null));
    /**
     * ID of the replacement Order Flint created for an exchange or replacement. Absent until it
     * exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "replacement_order_id"?: string;
    /**
     * Total of the replacement items the buyer receives. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /** ID of the Return the resolution belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
     * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
     */
    "return_policy_id": string | null;
    /**
     * ID of the return policy revision that judged the lines. Set only when Flint created the
     * resolution itself and no merchant decision overrode the policy. Absent otherwise, including
     * on resolutions you create and on corrections. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "return_policy_revision_id"?: string;
    /**
     * Unique identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id": string;
    /**
     * Value of the returned units this resolution covers. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
    /**
     * completed means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     */
    "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
    /**
     * Actions that can succeed now. checkout_session is listed while a replacement Order needs a
     * buyer payment, including when the parent Return is not open. Other actions require an open
     * Return. A failed resolution lists retry while it has a failed effect and its failure code
     * permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. []
     * enum: "cancel", "checkout_session", "confirm", "release", "retry". [] (Value): string. Value
     * enum: "cancel", "checkout_session", "confirm", "release", "retry".
     */
    "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. minimum: 0.
     */
    "version": number;
};
/**
 * A fee or credit applied to a return resolution, such as a restocking fee, with the assessed and
 * applied amounts and any waiver.
 */
export type ReturnResolutionAdjustment = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. */
    "reason_message"?: string;
    /**
     * Return that owns return_line_item_id. `null` when return_line_item_id is null. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string | null;
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
     * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
     */
    "return_policy_id": string | null;
    /**
     * ID of the return policy revision that judged the Return line, recorded when `reason` is
     * `return_policy`. Absent for other reasons. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "return_policy_revision_id"?: string;
    /**
     * Unique identifier for this return resolution adjustment, prefixed `retadj_`. Example:
     * "retadj_01KEZF7C00EX1XSCX7WSCDKSZZ".
     */
    "return_resolution_adjustment_id": string;
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived".
     */
    "status": "applied" | "waived" | (string & {});
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit".
     */
    "value_effect": "deduction" | "credit" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "waived_at"?: string;
    /**
     * Who waived the adjustment. Who performed a return action: a buyer, merchant, integration, or
     * the system, with an optional ID.
     */
    "waived_by"?: ReturnActor;
    /**
     * Why the adjustment was waived. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** Detail about `waiver_reason`. */
    "waiver_reason_message"?: string;
};
export type ReturnResolutionAdjustmentPreviousAttributes = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other". anyOf[1] (Value): string. What
     * the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other". anyOf[2] (Value): null.
     */
    "adjustment_type"?: (("return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "applied_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "assessed_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other". anyOf[1] (Value):
     * string. Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other". anyOf[2] (Value):
     * null.
     */
    "reason"?: (("return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Optional detail about `reason`, kept with the record. anyOf[1] (Value): string. Optional
     * detail about `reason`, kept with the record. anyOf[2] (Value): null.
     */
    "reason_message"?: ((string) | (null));
    /**
     * Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1]
     * (Value): string. Return that owns return_line_item_id. `null` when return_line_item_id is
     * null. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. anyOf[1] (Value): string. ID of the Return line a deduction applies to. Absent when
     * it applies to the resolution as a whole. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * anyOf[2] (Value): null.
     */
    "return_line_item_id"?: ((string) | (null));
    /**
     * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
     * anyOf[1] (Value): string. Policy that owns return_policy_revision_id. `null` when
     * return_policy_revision_id is null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". anyOf[2]
     * (Value): null.
     */
    "return_policy_id"?: ((string) | (null));
    /**
     * ID of the return policy revision that judged the Return line, recorded when `reason` is
     * `return_policy`. Absent for other reasons. anyOf[1] (Value): string. ID of the return policy
     * revision that judged the Return line, recorded when `reason` is `return_policy`. Absent for
     * other reasons. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value): null.
     */
    "return_policy_revision_id"?: ((string) | (null));
    /**
     * Unique identifier for this return resolution adjustment, prefixed `retadj_`. anyOf[1]
     * (Value): string. Unique identifier for this return resolution adjustment, prefixed
     * `retadj_`. Example: "retadj_01KEZF7C00EX1XSCX7WSCDKSZZ". anyOf[2] (Value): null.
     */
    "return_resolution_adjustment_id"?: ((string) | (null));
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived". anyOf[1] (Value): string. Whether the adjustment counts
     * toward the buyer's value. A waived adjustment applies zero. Value enum: "applied", "waived".
     * anyOf[2] (Value): null.
     */
    "status"?: (("applied" | "waived" | (string & {})) | (null));
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit". anyOf[1] (Value): string. Whether the adjustment reduces or increases
     * what the buyer receives. Value enum: "deduction", "credit". anyOf[2] (Value): null.
     */
    "value_effect"?: (("deduction" | "credit" | (string & {})) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "waived_at"?: ((string) | (null));
    /**
     * Who waived the adjustment. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "waived_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * Why the adjustment was waived. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other". anyOf[1] (Value): string. Why the adjustment was waived. Value
     * enum: "policy_override", "merchant_review", "customer_service", "other". anyOf[2] (Value):
     * null.
     */
    "waiver_reason"?: (("policy_override" | "merchant_review" | "customer_service" | "other" | (string & {})) | (null));
    /**
     * Detail about `waiver_reason`. anyOf[1] (Value): string. Detail about `waiver_reason`.
     * anyOf[2] (Value): null.
     */
    "waiver_reason_message"?: ((string) | (null));
};
/**
 * A fee or credit to apply to a return resolution, with the assessed and applied amounts and
 * whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequest = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived".
     */
    "status"?: "applied" | "waived" | (string & {});
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit".
     */
    "value_effect": "deduction" | "credit" | (string & {});
    /**
     * Why the adjustment was waived. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** Detail about `waiver_reason`. minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * A fee or credit to apply to a return resolution, with the assessed and applied amounts and
 * whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequestInput = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValueInput;
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived".
     */
    "status"?: "applied" | "waived";
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit".
     */
    "value_effect": "deduction" | "credit";
    /**
     * Why the adjustment was waived. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** Detail about `waiver_reason`. minLength: 1. */
    "waiver_reason_message"?: string;
};
export type ReturnResolutionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            "adjustments": Array<ReturnResolutionAdjustment>;
            "buyer_payment_amount_money": MoneyValue;
            "buyer_refund_amount_money": MoneyValue;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "confirmed_at"?: string;
            "confirmed_by"?: ReturnActor;
            "corrects_return_resolution_id"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "credit_adjustment_money": MoneyValue;
            "deduction_money": MoneyValue;
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            "external_reference_id"?: string;
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
            "failure_message"?: string;
            "fulfilled_at"?: string;
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            "line_items": Array<ReturnResolutionLineItem>;
            "metadata": MetadataMap;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            "refund_ids": Array<string>;
            "refunds"?: Array<WebhookSnapshotRefund>;
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            "replacement_order_id"?: string;
            "replacement_total_money": MoneyValue;
            "resolution_type": "refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {});
            "return_id": string;
            "return_policy_id": string | null;
            "return_policy_revision_id"?: string;
            "return_resolution_id": string;
            "returned_total_money": MoneyValue;
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_resolution.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            "adjustments": Array<ReturnResolutionAdjustment>;
            "buyer_payment_amount_money": MoneyValue;
            "buyer_refund_amount_money": MoneyValue;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "confirmed_at"?: string;
            "confirmed_by"?: ReturnActor;
            "corrects_return_resolution_id"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "credit_adjustment_money": MoneyValue;
            "deduction_money": MoneyValue;
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            "external_reference_id"?: string;
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
            "failure_message"?: string;
            "fulfilled_at"?: string;
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            "line_items": Array<ReturnResolutionLineItem>;
            "metadata": MetadataMap;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            "refund_ids": Array<string>;
            "refunds"?: Array<WebhookSnapshotRefund>;
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            "replacement_order_id"?: string;
            "replacement_total_money": MoneyValue;
            "resolution_type": "refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {});
            "return_id": string;
            "return_policy_id": string | null;
            "return_policy_revision_id"?: string;
            "return_resolution_id": string;
            "returned_total_money": MoneyValue;
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_resolution.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.action_reason (Optional): string. Why a requires_action resolution
     * is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release
     * means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". object.action_required_by (Optional): string. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * object.adjustments (Required): Array of {@link ReturnResolutionAdjustment}. Fees and credits
     * applied to the resolution's amounts. object.adjustments[] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     * object.buyer_payment_amount_money (Required): {@link MoneyValue}. Amount the buyer owes when
     * deduction_money and replacement_total_money exceed returned_total_money plus
     * credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.buyer_refund_amount_money (Required): {@link MoneyValue}. Value returned to the
     * buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and
     * replacement_total_money, when that balance is zero or more. For store_credit, the value
     * issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.canceled_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the resolution. Merchant reads only. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.cancellation_reason (Optional): string. Why the resolution was canceled. Value
     * enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other". object.cancellation_reason_message (Optional): string. Detail sent with the
     * cancellation. Merchant reads only. object.confirmed_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.confirmed_by
     * (Optional): {@link ReturnActor}. Who confirmed the resolution. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.corrects_return_resolution_id (Optional): string. ID of the settled resolution this
     * correction adjusts. Present only when `resolution_type` is `correction`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required):
     * {@link ReturnActor}. Who created the resolution. Who performed a return action: a buyer,
     * merchant, integration, or the system, with an optional ID. object.credit_adjustment_money
     * (Required): {@link MoneyValue}. Credits added by the resolution's adjustments. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.deduction_money (Required): {@link MoneyValue}. Deductions taken by the resolution's
     * adjustments, such as a restocking fee. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.execution_blockers (Required): Array of {@link
     * ReturnResolutionExecutionBlocker}. What a confirmed resolution is still waiting for. Empty
     * when nothing is. object.execution_blockers[] (Value): {@link
     * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution can
     * finish. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed Return resolution, when
     * available. refund_payment_balance_unavailable means the original payments cannot fund the
     * resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
     * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
     * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
     * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
     * "resolution_effect_failed". object.failure_message (Optional): string. Explanation of a
     * failed Return resolution, when available. object.fulfilled_at (Optional): string. When the
     * resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
     * refunded. original credits the original gift card; new_gift_card issues new gift cards.
     * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for
     * store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a
     * NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming
     * resolution_type. Store credit and its corrections always issue new gift cards. PATCH can
     * change it only while proposed. Retry persists the chosen destination before starting the new
     * attempt. Default: "original". Value enum: "original", "new_gift_card". object.line_items
     * (Required): Array of {@link ReturnResolutionLineItem}. Return lines and quantities the
     * resolution covers. Absent on a correction. object.line_items[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total. object.metadata (Required): {@link MetadataMap}. Stored caller-owned
     * key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.payment_intent_ids (Required): Array of
     * string. IDs of the payment intents that collect the buyer's balance for this resolution, in
     * the order Flint linked them. Empty until a payment exists. object.payment_intent_ids[]
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents
     * (Optional): Array of {@link ExpandedPaymentIntentSummary}. Present only when `expand`
     * includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the
     * same order. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.pricing_basis (Optional): string. How replacement
     * lines are priced. Present on exchanges and replacements. Value enum: "original_price",
     * "current_price", "merchant_agreed_price". object.refund_ids (Required): Array of string. IDs
     * of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty
     * until a Refund exists. object.refund_ids[] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunds (Optional): Array of {@link
     * WebhookSnapshotRefund}. Present only when `expand` includes `refunds`. The refunds in
     * `refund_ids`, in the same order. object.refunds[] (Value): {@link WebhookSnapshotRefund}.
     * Money returned against a collected payment. object.replacement_line_items (Required): Array
     * of {@link ReturnReplacementLineItem}. Merchandise the buyer receives instead, for an
     * exchange or replacement. object.replacement_line_items[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals. object.replacement_order (Optional): {@link ExpandedOrderSummary}
     * or null. Present only when `expand` includes `replacement_order`; `null` when expanded and
     * there is no related order. object.replacement_order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.replacement_order.anyOf[2] (Value): null. object.replacement_order_id (Optional):
     * string. ID of the replacement Order Flint created for an exchange or replacement. Absent
     * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.replacement_total_money
     * (Required): {@link MoneyValue}. Total of the replacement items the buyer receives. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.resolution_type (Required): string. What the buyer gets for the approved quantity.
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction". object.return_id (Required): string. ID of the Return the resolution belongs
     * to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_policy_id (Required): string or
     * null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
     * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". object.return_policy_revision_id
     * (Optional): string. ID of the return policy revision that judged the lines. Set only when
     * Flint created the resolution itself and no merchant decision overrode the policy. Absent
     * otherwise, including on resolutions you create and on corrections. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". object.return_resolution_id (Required): string. Unique
     * identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.returned_total_money (Required): {@link
     * MoneyValue}. Value of the returned units this resolution covers. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.status (Required): string.
     * completed means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now.
     * checkout_session is listed while a replacement Order needs a buyer payment, including when
     * the parent Return is not open. Other actions require an open Return. A failed resolution
     * lists retry while it has a failed effect and its failure code permits retry. It lists cancel
     * when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel",
     * "checkout_session", "confirm", "release", "retry". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * action_reason (Optional): string. Why a requires_action resolution is waiting.
         * buyer_payment means the buyer must pay the exchange balance; manual_release means the
         * merchant must release the resolution. Value enum: "buyer_payment", "manual_release".
         * action_required_by (Optional): string. Who has to act while the resolution's status is
         * `requires_action`. Value enum: "buyer", "merchant". adjustments (Required): Array of
         * {@link ReturnResolutionAdjustment}. Fees and credits applied to the resolution's
         * amounts. adjustments[] (Value): {@link ReturnResolutionAdjustment}. A fee or credit
         * applied to a return resolution, such as a restocking fee, with the assessed and applied
         * amounts and any waiver. buyer_payment_amount_money (Required): {@link MoneyValue}.
         * Amount the buyer owes when deduction_money and replacement_total_money exceed
         * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund
         * and for no_monetary_action. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. buyer_refund_amount_money (Required): {@link MoneyValue}. Value
         * returned to the buyer: returned_total_money plus credit_adjustment_money, minus
         * deduction_money and replacement_total_money, when that balance is zero or more. For
         * store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. canceled_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * resolution. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. confirmed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". confirmed_by (Optional): {@link ReturnActor}. Who confirmed the
         * resolution. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. corrects_return_resolution_id (Optional): string. ID of the
         * settled resolution this correction adjusts. Present only when `resolution_type` is
         * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_by (Required): {@link ReturnActor}. Who created the resolution. Who performed a
         * return action: a buyer, merchant, integration, or the system, with an optional ID.
         * credit_adjustment_money (Required): {@link MoneyValue}. Credits added by the
         * resolution's adjustments. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. deduction_money (Required): {@link MoneyValue}. Deductions taken by
         * the resolution's adjustments, such as a restocking fee. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. execution_blockers (Required): Array
         * of {@link ReturnResolutionExecutionBlocker}. What a confirmed resolution is still
         * waiting for. Empty when nothing is. execution_blockers[] (Value): {@link
         * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution
         * can finish. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". failure_code
         * (Optional): string. Reason code for a failed Return resolution, when available.
         * refund_payment_balance_unavailable means the original payments cannot fund the
         * resolution; cancel it, then add an explicit deduction or settle the shortfall outside
         * Flint. refund_line_value_unavailable means another refund already returned part of an
         * order line, so retrying cannot succeed; cancel the resolution and resolve the line for
         * fewer units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_message (Optional): string. Explanation of a failed
         * Return resolution, when available. fulfilled_at (Optional): string. When the resolution
         * completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
         * refunded. original credits the original gift card; new_gift_card issues new gift cards.
         * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit
         * for store_credit, replacement, and no_monetary_action; sending it returns
         * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
         * conflicting_fields naming resolution_type. Store credit and its corrections always issue
         * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
         * destination before starting the new attempt. Default: "original". Value enum:
         * "original", "new_gift_card". line_items (Required): Array of {@link
         * ReturnResolutionLineItem}. Return lines and quantities the resolution covers. Absent on
         * a correction. line_items[] (Value): {@link ReturnResolutionLineItem}. A return line
         * included in a resolution, with its quantity and returned total. metadata (Required):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. payment_intent_ids (Required): Array of string. IDs of the payment intents that
         * collect the buyer's balance for this resolution, in the order Flint linked them. Empty
         * until a payment exists. payment_intent_ids[] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Present only when `expand` includes `payment_intents`.
         * Summaries of the payment intents in `payment_intent_ids`, in the same order.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. pricing_basis (Optional): string. How replacement lines are priced.
         * Present on exchanges and replacements. Value enum: "original_price", "current_price",
         * "merchant_agreed_price". refund_ids (Required): Array of string. IDs of the Refunds that
         * pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund
         * exists. refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunds
         * (Optional): Array of {@link WebhookSnapshotRefund}. Present only when `expand` includes
         * `refunds`. The refunds in `refund_ids`, in the same order. refunds[] (Value): {@link
         * WebhookSnapshotRefund}. Money returned against a collected payment.
         * replacement_line_items (Required): Array of {@link ReturnReplacementLineItem}.
         * Merchandise the buyer receives instead, for an exchange or replacement.
         * replacement_line_items[] (Value): {@link ReturnReplacementLineItem}. A replacement item
         * added to a return resolution, with its quantity and price totals. replacement_order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `replacement_order`; `null` when expanded and there is no related order.
         * replacement_order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
         * fields, including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. replacement_order.anyOf[2] (Value): null.
         * replacement_order_id (Optional): string. ID of the replacement Order Flint created for
         * an exchange or replacement. Absent until it exists. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". replacement_total_money (Required): {@link
         * MoneyValue}. Total of the replacement items the buyer receives. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. resolution_type
         * (Required): string. What the buyer gets for the approved quantity. Value enum: "refund",
         * "exchange", "replacement", "store_credit", "no_monetary_action", "correction". return_id
         * (Required): string. ID of the Return the resolution belongs to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_policy_id (Required): string or null. Policy
         * that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
         * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". return_policy_revision_id (Optional):
         * string. ID of the return policy revision that judged the lines. Set only when Flint
         * created the resolution itself and no merchant decision overrode the policy. Absent
         * otherwise, including on resolutions you create and on corrections. Example:
         * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". return_resolution_id (Required): string. Unique
         * identifier for this return resolution, prefixed `retres_`. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". returned_total_money (Required): {@link
         * MoneyValue}. Value of the returned units this resolution covers. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. status (Required):
         * string. completed means the buyer has the value: every linked Refund succeeded, any
         * balance was collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
         * "failed", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
         * including when the parent Return is not open. Other actions require an open Return. A
         * failed resolution lists retry while it has a failed effect and its failure code permits
         * retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
         * "cancel", "checkout_session", "confirm", "release", "retry". supported_actions[]
         * (Value): string. Value enum: "cancel", "checkout_session", "confirm", "release",
         * "retry". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 0.
         */
        "object": {
            /**
             * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay
             * the exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release".
             */
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            /**
             * Who has to act while the resolution's status is `requires_action`. Value enum:
             * "buyer", "merchant".
             */
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            /**
             * Fees and credits applied to the resolution's amounts. [] (Value): {@link
             * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as
             * a restocking fee, with the assessed and applied amounts and any waiver.
             */
            "adjustments": Array<ReturnResolutionAdjustment>;
            /**
             * Amount the buyer owes when deduction_money and replacement_total_money exceed
             * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a
             * refund and for no_monetary_action. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "buyer_payment_amount_money": MoneyValue;
            /**
             * Value returned to the buyer: returned_total_money plus credit_adjustment_money,
             * minus deduction_money and replacement_total_money, when that balance is zero or
             * more. For store_credit, the value issued on new gift cards. Zero for
             * no_monetary_action. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "buyer_refund_amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the resolution. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "confirmed_at"?: string;
            /**
             * Who confirmed the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "confirmed_by"?: ReturnActor;
            /**
             * ID of the settled resolution this correction adjusts. Present only when
             * `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "corrects_return_resolution_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * Credits added by the resolution's adjustments. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "credit_adjustment_money": MoneyValue;
            /**
             * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "deduction_money": MoneyValue;
            /**
             * What a confirmed resolution is still waiting for. Empty when nothing is. [] (Value):
             * {@link ReturnResolutionExecutionBlocker}. Work that must complete before a Return
             * resolution can finish.
             */
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed Return resolution, when available.
             * refund_payment_balance_unavailable means the original payments cannot fund the
             * resolution; cancel it, then add an explicit deduction or settle the shortfall
             * outside Flint. refund_line_value_unavailable means another refund already returned
             * part of an order line, so retrying cannot succeed; cancel the resolution and resolve
             * the line for fewer units or without a refund. replacement_fulfillment_canceled means
             * the replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed".
             */
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
            /**
             * When the resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "fulfilled_at"?: string;
            /**
             * Where the gift-card-paid portion is refunded. original credits the original gift
             * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
             * correction, except a correction of store_credit. Omit for store_credit, replacement,
             * and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail
             * at gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Default: "original". Value enum: "original", "new_gift_card".
             */
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            /**
             * Return lines and quantities the resolution covers. Absent on a correction. []
             * (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution,
             * with its quantity and returned total.
             */
            "line_items": Array<ReturnResolutionLineItem>;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * IDs of the payment intents that collect the buyer's balance for this resolution, in
             * the order Flint linked them. Empty until a payment exists. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`. Summaries of the payment
             * intents in `payment_intent_ids`, in the same order. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price".
             */
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            /**
             * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked
             * them. Empty until a Refund exists. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the
             * same order. [] (Value): {@link WebhookSnapshotRefund}. Money returned against a
             * collected payment.
             */
            "refunds"?: Array<WebhookSnapshotRefund>;
            /**
             * Merchandise the buyer receives instead, for an exchange or replacement. [] (Value):
             * {@link ReturnReplacementLineItem}. A replacement item added to a return resolution,
             * with its quantity and price totals.
             */
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            /**
             * Present only when `expand` includes `replacement_order`; `null` when expanded and
             * there is no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the replacement Order Flint created for an exchange or replacement. Absent
             * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "replacement_order_id"?: string;
            /**
             * Total of the replacement items the buyer receives. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "replacement_total_money": MoneyValue;
            /**
             * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
             * "replacement", "store_credit", "no_monetary_action", "correction".
             */
            "resolution_type": "refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {});
            /**
             * ID of the Return the resolution belongs to. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
             * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
             */
            "return_policy_id": string | null;
            /**
             * ID of the return policy revision that judged the lines. Set only when Flint created
             * the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. Example:
             * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
             */
            "return_policy_revision_id"?: string;
            /**
             * Unique identifier for this return resolution, prefixed `retres_`. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id": string;
            /**
             * Value of the returned units this resolution covers. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "returned_total_money": MoneyValue;
            /**
             * completed means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
             * "failed", "canceled".
             */
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. checkout_session is listed while a replacement Order
             * needs a buyer payment, including when the parent Return is not open. Other actions
             * require an open Return. A failed resolution lists retry while it has a failed effect
             * and its failure code permits retry. It lists cancel when it never created a Refund,
             * PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". [] (Value): string. Value enum: "cancel", "checkout_session",
             * "confirm", "release", "retry".
             */
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_resolution.created". */
    "event_type"?: "return_resolution.created";
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
 * The `return_resolution.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnResolutionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.action_reason (Optional): string. Why a requires_action resolution
     * is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release
     * means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". object.action_required_by (Optional): string. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * object.adjustments (Required): Array of {@link ReturnResolutionAdjustment}. Fees and credits
     * applied to the resolution's amounts. object.adjustments[] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     * object.buyer_payment_amount_money (Required): {@link MoneyValue}. Amount the buyer owes when
     * deduction_money and replacement_total_money exceed returned_total_money plus
     * credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.buyer_refund_amount_money (Required): {@link MoneyValue}. Value returned to the
     * buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and
     * replacement_total_money, when that balance is zero or more. For store_credit, the value
     * issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.canceled_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the resolution. Merchant reads only. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.cancellation_reason (Optional): string. Why the resolution was canceled. Value
     * enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other". object.cancellation_reason_message (Optional): string. Detail sent with the
     * cancellation. Merchant reads only. object.confirmed_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.confirmed_by
     * (Optional): {@link ReturnActor}. Who confirmed the resolution. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.corrects_return_resolution_id (Optional): string. ID of the settled resolution this
     * correction adjusts. Present only when `resolution_type` is `correction`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required):
     * {@link ReturnActor}. Who created the resolution. Who performed a return action: a buyer,
     * merchant, integration, or the system, with an optional ID. object.credit_adjustment_money
     * (Required): {@link MoneyValue}. Credits added by the resolution's adjustments. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.deduction_money (Required): {@link MoneyValue}. Deductions taken by the resolution's
     * adjustments, such as a restocking fee. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.execution_blockers (Required): Array of {@link
     * ReturnResolutionExecutionBlocker}. What a confirmed resolution is still waiting for. Empty
     * when nothing is. object.execution_blockers[] (Value): {@link
     * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution can
     * finish. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed Return resolution, when
     * available. refund_payment_balance_unavailable means the original payments cannot fund the
     * resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
     * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
     * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
     * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
     * "resolution_effect_failed". object.failure_message (Optional): string. Explanation of a
     * failed Return resolution, when available. object.fulfilled_at (Optional): string. When the
     * resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
     * refunded. original credits the original gift card; new_gift_card issues new gift cards.
     * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for
     * store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a
     * NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming
     * resolution_type. Store credit and its corrections always issue new gift cards. PATCH can
     * change it only while proposed. Retry persists the chosen destination before starting the new
     * attempt. Default: "original". Value enum: "original", "new_gift_card". object.line_items
     * (Required): Array of {@link ReturnResolutionLineItem}. Return lines and quantities the
     * resolution covers. Absent on a correction. object.line_items[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total. object.metadata (Required): {@link MetadataMap}. Stored caller-owned
     * key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.payment_intent_ids (Required): Array of
     * string. IDs of the payment intents that collect the buyer's balance for this resolution, in
     * the order Flint linked them. Empty until a payment exists. object.payment_intent_ids[]
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents
     * (Optional): Array of {@link ExpandedPaymentIntentSummary}. Present only when `expand`
     * includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the
     * same order. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.pricing_basis (Optional): string. How replacement
     * lines are priced. Present on exchanges and replacements. Value enum: "original_price",
     * "current_price", "merchant_agreed_price". object.refund_ids (Required): Array of string. IDs
     * of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty
     * until a Refund exists. object.refund_ids[] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunds (Optional): Array of {@link
     * WebhookSnapshotRefund}. Present only when `expand` includes `refunds`. The refunds in
     * `refund_ids`, in the same order. object.refunds[] (Value): {@link WebhookSnapshotRefund}.
     * Money returned against a collected payment. object.replacement_line_items (Required): Array
     * of {@link ReturnReplacementLineItem}. Merchandise the buyer receives instead, for an
     * exchange or replacement. object.replacement_line_items[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals. object.replacement_order (Optional): {@link ExpandedOrderSummary}
     * or null. Present only when `expand` includes `replacement_order`; `null` when expanded and
     * there is no related order. object.replacement_order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.replacement_order.anyOf[2] (Value): null. object.replacement_order_id (Optional):
     * string. ID of the replacement Order Flint created for an exchange or replacement. Absent
     * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.replacement_total_money
     * (Required): {@link MoneyValue}. Total of the replacement items the buyer receives. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.resolution_type (Required): string. What the buyer gets for the approved quantity.
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction". object.return_id (Required): string. ID of the Return the resolution belongs
     * to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_policy_id (Required): string or
     * null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
     * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". object.return_policy_revision_id
     * (Optional): string. ID of the return policy revision that judged the lines. Set only when
     * Flint created the resolution itself and no merchant decision overrode the policy. Absent
     * otherwise, including on resolutions you create and on corrections. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". object.return_resolution_id (Required): string. Unique
     * identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.returned_total_money (Required): {@link
     * MoneyValue}. Value of the returned units this resolution covers. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.status (Required): string.
     * completed means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now.
     * checkout_session is listed while a replacement Order needs a buyer payment, including when
     * the parent Return is not open. Other actions require an open Return. A failed resolution
     * lists retry while it has a failed effect and its failure code permits retry. It lists cancel
     * when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel",
     * "checkout_session", "confirm", "release", "retry". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * action_reason (Optional): string. Why a requires_action resolution is waiting.
         * buyer_payment means the buyer must pay the exchange balance; manual_release means the
         * merchant must release the resolution. Value enum: "buyer_payment", "manual_release".
         * action_required_by (Optional): string. Who has to act while the resolution's status is
         * `requires_action`. Value enum: "buyer", "merchant". adjustments (Required): Array of
         * {@link ReturnResolutionAdjustment}. Fees and credits applied to the resolution's
         * amounts. adjustments[] (Value): {@link ReturnResolutionAdjustment}. A fee or credit
         * applied to a return resolution, such as a restocking fee, with the assessed and applied
         * amounts and any waiver. buyer_payment_amount_money (Required): {@link MoneyValue}.
         * Amount the buyer owes when deduction_money and replacement_total_money exceed
         * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund
         * and for no_monetary_action. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. buyer_refund_amount_money (Required): {@link MoneyValue}. Value
         * returned to the buyer: returned_total_money plus credit_adjustment_money, minus
         * deduction_money and replacement_total_money, when that balance is zero or more. For
         * store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. canceled_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * resolution. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. confirmed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". confirmed_by (Optional): {@link ReturnActor}. Who confirmed the
         * resolution. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. corrects_return_resolution_id (Optional): string. ID of the
         * settled resolution this correction adjusts. Present only when `resolution_type` is
         * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_by (Required): {@link ReturnActor}. Who created the resolution. Who performed a
         * return action: a buyer, merchant, integration, or the system, with an optional ID.
         * credit_adjustment_money (Required): {@link MoneyValue}. Credits added by the
         * resolution's adjustments. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. deduction_money (Required): {@link MoneyValue}. Deductions taken by
         * the resolution's adjustments, such as a restocking fee. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. execution_blockers (Required): Array
         * of {@link ReturnResolutionExecutionBlocker}. What a confirmed resolution is still
         * waiting for. Empty when nothing is. execution_blockers[] (Value): {@link
         * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution
         * can finish. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". failure_code
         * (Optional): string. Reason code for a failed Return resolution, when available.
         * refund_payment_balance_unavailable means the original payments cannot fund the
         * resolution; cancel it, then add an explicit deduction or settle the shortfall outside
         * Flint. refund_line_value_unavailable means another refund already returned part of an
         * order line, so retrying cannot succeed; cancel the resolution and resolve the line for
         * fewer units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_message (Optional): string. Explanation of a failed
         * Return resolution, when available. fulfilled_at (Optional): string. When the resolution
         * completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
         * refunded. original credits the original gift card; new_gift_card issues new gift cards.
         * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit
         * for store_credit, replacement, and no_monetary_action; sending it returns
         * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
         * conflicting_fields naming resolution_type. Store credit and its corrections always issue
         * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
         * destination before starting the new attempt. Default: "original". Value enum:
         * "original", "new_gift_card". line_items (Required): Array of {@link
         * ReturnResolutionLineItem}. Return lines and quantities the resolution covers. Absent on
         * a correction. line_items[] (Value): {@link ReturnResolutionLineItem}. A return line
         * included in a resolution, with its quantity and returned total. metadata (Required):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. payment_intent_ids (Required): Array of string. IDs of the payment intents that
         * collect the buyer's balance for this resolution, in the order Flint linked them. Empty
         * until a payment exists. payment_intent_ids[] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Present only when `expand` includes `payment_intents`.
         * Summaries of the payment intents in `payment_intent_ids`, in the same order.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. pricing_basis (Optional): string. How replacement lines are priced.
         * Present on exchanges and replacements. Value enum: "original_price", "current_price",
         * "merchant_agreed_price". refund_ids (Required): Array of string. IDs of the Refunds that
         * pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund
         * exists. refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunds
         * (Optional): Array of {@link WebhookSnapshotRefund}. Present only when `expand` includes
         * `refunds`. The refunds in `refund_ids`, in the same order. refunds[] (Value): {@link
         * WebhookSnapshotRefund}. Money returned against a collected payment.
         * replacement_line_items (Required): Array of {@link ReturnReplacementLineItem}.
         * Merchandise the buyer receives instead, for an exchange or replacement.
         * replacement_line_items[] (Value): {@link ReturnReplacementLineItem}. A replacement item
         * added to a return resolution, with its quantity and price totals. replacement_order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `replacement_order`; `null` when expanded and there is no related order.
         * replacement_order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
         * fields, including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. replacement_order.anyOf[2] (Value): null.
         * replacement_order_id (Optional): string. ID of the replacement Order Flint created for
         * an exchange or replacement. Absent until it exists. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". replacement_total_money (Required): {@link
         * MoneyValue}. Total of the replacement items the buyer receives. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. resolution_type
         * (Required): string. What the buyer gets for the approved quantity. Value enum: "refund",
         * "exchange", "replacement", "store_credit", "no_monetary_action", "correction". return_id
         * (Required): string. ID of the Return the resolution belongs to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_policy_id (Required): string or null. Policy
         * that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
         * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". return_policy_revision_id (Optional):
         * string. ID of the return policy revision that judged the lines. Set only when Flint
         * created the resolution itself and no merchant decision overrode the policy. Absent
         * otherwise, including on resolutions you create and on corrections. Example:
         * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". return_resolution_id (Required): string. Unique
         * identifier for this return resolution, prefixed `retres_`. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". returned_total_money (Required): {@link
         * MoneyValue}. Value of the returned units this resolution covers. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. status (Required):
         * string. completed means the buyer has the value: every linked Refund succeeded, any
         * balance was collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
         * "failed", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
         * including when the parent Return is not open. Other actions require an open Return. A
         * failed resolution lists retry while it has a failed effect and its failure code permits
         * retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
         * "cancel", "checkout_session", "confirm", "release", "retry". supported_actions[]
         * (Value): string. Value enum: "cancel", "checkout_session", "confirm", "release",
         * "retry". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 0.
         */
        "object": {
            /**
             * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay
             * the exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release".
             */
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            /**
             * Who has to act while the resolution's status is `requires_action`. Value enum:
             * "buyer", "merchant".
             */
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            /**
             * Fees and credits applied to the resolution's amounts. [] (Value): {@link
             * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as
             * a restocking fee, with the assessed and applied amounts and any waiver.
             */
            "adjustments": Array<ReturnResolutionAdjustment>;
            /**
             * Amount the buyer owes when deduction_money and replacement_total_money exceed
             * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a
             * refund and for no_monetary_action. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "buyer_payment_amount_money": MoneyValue;
            /**
             * Value returned to the buyer: returned_total_money plus credit_adjustment_money,
             * minus deduction_money and replacement_total_money, when that balance is zero or
             * more. For store_credit, the value issued on new gift cards. Zero for
             * no_monetary_action. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "buyer_refund_amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the resolution. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "confirmed_at"?: string;
            /**
             * Who confirmed the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "confirmed_by"?: ReturnActor;
            /**
             * ID of the settled resolution this correction adjusts. Present only when
             * `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "corrects_return_resolution_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * Credits added by the resolution's adjustments. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "credit_adjustment_money": MoneyValue;
            /**
             * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "deduction_money": MoneyValue;
            /**
             * What a confirmed resolution is still waiting for. Empty when nothing is. [] (Value):
             * {@link ReturnResolutionExecutionBlocker}. Work that must complete before a Return
             * resolution can finish.
             */
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed Return resolution, when available.
             * refund_payment_balance_unavailable means the original payments cannot fund the
             * resolution; cancel it, then add an explicit deduction or settle the shortfall
             * outside Flint. refund_line_value_unavailable means another refund already returned
             * part of an order line, so retrying cannot succeed; cancel the resolution and resolve
             * the line for fewer units or without a refund. replacement_fulfillment_canceled means
             * the replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed".
             */
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
            /**
             * When the resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "fulfilled_at"?: string;
            /**
             * Where the gift-card-paid portion is refunded. original credits the original gift
             * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
             * correction, except a correction of store_credit. Omit for store_credit, replacement,
             * and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail
             * at gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Default: "original". Value enum: "original", "new_gift_card".
             */
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            /**
             * Return lines and quantities the resolution covers. Absent on a correction. []
             * (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution,
             * with its quantity and returned total.
             */
            "line_items": Array<ReturnResolutionLineItem>;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * IDs of the payment intents that collect the buyer's balance for this resolution, in
             * the order Flint linked them. Empty until a payment exists. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`. Summaries of the payment
             * intents in `payment_intent_ids`, in the same order. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price".
             */
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            /**
             * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked
             * them. Empty until a Refund exists. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the
             * same order. [] (Value): {@link WebhookSnapshotRefund}. Money returned against a
             * collected payment.
             */
            "refunds"?: Array<WebhookSnapshotRefund>;
            /**
             * Merchandise the buyer receives instead, for an exchange or replacement. [] (Value):
             * {@link ReturnReplacementLineItem}. A replacement item added to a return resolution,
             * with its quantity and price totals.
             */
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            /**
             * Present only when `expand` includes `replacement_order`; `null` when expanded and
             * there is no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the replacement Order Flint created for an exchange or replacement. Absent
             * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "replacement_order_id"?: string;
            /**
             * Total of the replacement items the buyer receives. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "replacement_total_money": MoneyValue;
            /**
             * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
             * "replacement", "store_credit", "no_monetary_action", "correction".
             */
            "resolution_type": "refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {});
            /**
             * ID of the Return the resolution belongs to. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
             * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
             */
            "return_policy_id": string | null;
            /**
             * ID of the return policy revision that judged the lines. Set only when Flint created
             * the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. Example:
             * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
             */
            "return_policy_revision_id"?: string;
            /**
             * Unique identifier for this return resolution, prefixed `retres_`. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id": string;
            /**
             * Value of the returned units this resolution covers. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "returned_total_money": MoneyValue;
            /**
             * completed means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
             * "failed", "canceled".
             */
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. checkout_session is listed while a replacement Order
             * needs a buyer payment, including when the parent Return is not open. Other actions
             * require an open Return. A failed resolution lists retry while it has a failed effect
             * and its failure code permits retry. It lists cancel when it never created a Refund,
             * PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". [] (Value): string. Value enum: "cancel", "checkout_session",
             * "confirm", "release", "retry".
             */
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
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
    /**
     * The resource the blocker waits on, such as a Refund or the replacement Order. A reference to
     * another resource by `resource_type` and `resource_id`.
     */
    "linked_resource"?: ResourceReference;
    /**
     * Return that owns return_line_item_id. `null` when return_line_item_id is null. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string | null;
    /**
     * ID of the Return line the blocker gates. Absent when it applies to the whole resolution.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
};
export type ReturnResolutionExecutionBlockerPreviousAttributes = {
    /**
     * handoff_pending: The buyer has not handed off the required merchandise. receipt_pending:
     * Required merchandise has not been received. inspection_pending: Required inspection is
     * incomplete. manual_release_pending: The merchant must release the resolution.
     * buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked
     * Refund has not succeeded. replacement_order_pending: The replacement Order has not been
     * created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet
     * fulfilled. Value enum: "handoff_pending", "receipt_pending", "inspection_pending",
     * "manual_release_pending", "buyer_payment_pending", "refund_pending",
     * "replacement_order_pending", "fulfillment_pending". anyOf[1] (Value): string.
     * handoff_pending: The buyer has not handed off the required merchandise. receipt_pending:
     * Required merchandise has not been received. inspection_pending: Required inspection is
     * incomplete. manual_release_pending: The merchant must release the resolution.
     * buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked
     * Refund has not succeeded. replacement_order_pending: The replacement Order has not been
     * created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet
     * fulfilled. Value enum: "handoff_pending", "receipt_pending", "inspection_pending",
     * "manual_release_pending", "buyer_payment_pending", "refund_pending",
     * "replacement_order_pending", "fulfillment_pending". anyOf[2] (Value): null.
     */
    "code"?: (("handoff_pending"
        | "receipt_pending"
        | "inspection_pending"
        | "manual_release_pending"
        | "buyer_payment_pending"
        | "refund_pending"
        | "replacement_order_pending"
        | "fulfillment_pending"
        | (string & {}))
        | (null));
    /**
     * The resource the blocker waits on, such as a Refund or the replacement Order. anyOf[1]
     * (Value): {@link ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
     */
    "linked_resource"?: ((ResourceReferencePreviousAttributes) | (null));
    /**
     * Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1]
     * (Value): string. Return that owns return_line_item_id. `null` when return_line_item_id is
     * null. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * ID of the Return line the blocker gates. Absent when it applies to the whole resolution.
     * anyOf[1] (Value): string. ID of the Return line the blocker gates. Absent when it applies to
     * the whole resolution. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     */
    "return_line_item_id"?: ((string) | (null));
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
    /** Return that owns return_line_item_id. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /** ID of the Return line the resolution covers. Example: "retli_01KEZF7C00R813VR7ECXS062QG". */
    "return_line_item_id": string;
    /** ID of the resolution the line belongs to. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". */
    "return_resolution_id": string;
    /**
     * ID of an existing resolution line to keep. Leave out to add a new line. Example:
     * "retresli_01KEZF7C00CR5NCDXRBP9W14CB".
     */
    "return_resolution_line_item_id": string;
    /**
     * Value of the returned units this line covers. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
};
export type ReturnResolutionLineItemPreviousAttributes = {
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "quantity"?: ((number) | (null));
    /**
     * Release gate for every resolution type, including exchanges and replacements. Released after
     * the Return is approved. Released after the buyer hands back the required merchandise.
     * Released after the required merchandise is received. Released after the required merchandise
     * passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release.
     * Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection",
     * "manual". anyOf[1] (Value): string. Release gate for every resolution type, including
     * exchanges and replacements. Released after the Return is approved. Released after the buyer
     * hands back the required merchandise. Released after the required merchandise is received.
     * Released after the required merchandise passes inspection. Held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual". anyOf[2] (Value): null.
     */
    "release_timing"?: (("after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {}))
        | (null));
    /**
     * Return that owns return_line_item_id. anyOf[1] (Value): string. Return that owns
     * return_line_item_id. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * ID of the Return line the resolution covers. anyOf[1] (Value): string. ID of the Return line
     * the resolution covers. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     */
    "return_line_item_id"?: ((string) | (null));
    /**
     * ID of the resolution the line belongs to. anyOf[1] (Value): string. ID of the resolution the
     * line belongs to. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     */
    "return_resolution_id"?: ((string) | (null));
    /**
     * ID of an existing resolution line to keep. Leave out to add a new line. anyOf[1] (Value):
     * string. ID of an existing resolution line to keep. Leave out to add a new line. Example:
     * "retresli_01KEZF7C00CR5NCDXRBP9W14CB". anyOf[2] (Value): null.
     */
    "return_resolution_line_item_id"?: ((string) | (null));
    /**
     * Value of the returned units this line covers. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
};
/** A return line and quantity to include in a return resolution. */
export type ReturnResolutionLineItemRequest = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of the Return line the resolution covers. minLength: 1. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
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
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     */
    "adjustments": Array<ReturnResolutionAdjustment>;
    /** Version of the Return the preview was priced against. Format: int64. minimum: 0. */
    "based_on_return_version": number;
    /**
     * Amount the buyer owes when `deduction_money` and `replacement_total_money` exceed
     * `returned_total_money` plus `credit_adjustment_money`. Zero when the buyer is owed a refund
     * and for `no_monetary_action`. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Value that goes back to the buyer: `returned_total_money` plus `credit_adjustment_money`,
     * minus `deduction_money` and `replacement_total_money`, when that balance is zero or more.
     * For `store_credit`, the value issued on new gift cards. Zero for `no_monetary_action`.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "calculated_at": string;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: string;
    /**
     * Credits the proposed resolution's adjustments would add to the value returned to the buyer.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "credit_adjustment_money": MoneyValue;
    /**
     * Deductions the proposed resolution's adjustments would take, such as a restocking fee.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItem}. A return line included in a resolution, with its quantity
     * and returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     * Buyer refund value that the original payments cannot fund. Zero when fully payable.
     * buyer_refund_amount_money remains the full entitlement. Create and confirm refuse a
     * shortfall with 409 LIMIT_EXCEEDED and maximum_money. Merchant only. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "refund_shortfall_money": MoneyValue;
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItem}. A replacement item added to a return resolution,
     * with its quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Total of the replacement items the buyer would receive. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /** ID of the Return the resolution is for. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Value of the returned units the proposed resolution covers. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
};
export type ReturnResolutionPreviousAttributes = {
    /**
     * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the
     * exchange balance; manual_release means the merchant must release the resolution. Value enum:
     * "buyer_payment", "manual_release". anyOf[1] (Value): string. Why a requires_action
     * resolution is waiting. buyer_payment means the buyer must pay the exchange balance;
     * manual_release means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". anyOf[2] (Value): null.
     */
    "action_reason"?: (("buyer_payment" | "manual_release" | (string & {})) | (null));
    /**
     * Who has to act while the resolution's status is `requires_action`. Value enum: "buyer",
     * "merchant". anyOf[1] (Value): string. Who has to act while the resolution's status is
     * `requires_action`. Value enum: "buyer", "merchant". anyOf[2] (Value): null.
     */
    "action_required_by"?: (("buyer" | "merchant" | (string & {})) | (null));
    /**
     * Fees and credits applied to the resolution's amounts. anyOf[1] (Value): Array of {@link
     * ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to the resolution's
     * amounts. anyOf[1][] (Value): {@link ReturnResolutionAdjustmentPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "adjustments"?: ((Array<ReturnResolutionAdjustmentPreviousAttributes>) | (null));
    /**
     * Amount the buyer owes when deduction_money and replacement_total_money exceed
     * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and
     * for no_monetary_action. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "buyer_payment_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus
     * deduction_money and replacement_total_money, when that balance is zero or more. For
     * store_credit, the value issued on new gift cards. Zero for no_monetary_action. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "buyer_refund_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "canceled_at"?: ((string) | (null));
    /**
     * Who canceled the resolution. Merchant reads only. anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     */
    "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why the
     * resolution was canceled. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other". anyOf[2] (Value): null.
     */
    "cancellation_reason"?: (("buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string. Detail
     * sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
     */
    "cancellation_reason_message"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "confirmed_at"?: ((string) | (null));
    /**
     * Who confirmed the resolution. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "confirmed_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * ID of the settled resolution this correction adjusts. Present only when `resolution_type` is
     * `correction`. anyOf[1] (Value): string. ID of the settled resolution this correction
     * adjusts. Present only when `resolution_type` is `correction`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     */
    "corrects_return_resolution_id"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Who created the resolution. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "created_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * Credits added by the resolution's adjustments. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Deductions taken by the resolution's adjustments, such as a restocking fee. anyOf[1]
     * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "deduction_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * What a confirmed resolution is still waiting for. Empty when nothing is. anyOf[1] (Value):
     * Array of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a confirmed
     * resolution is still waiting for. Empty when nothing is. anyOf[1][] (Value): {@link
     * ReturnResolutionExecutionBlockerPreviousAttributes}. anyOf[2] (Value): null.
     */
    "execution_blockers"?: ((Array<ReturnResolutionExecutionBlockerPreviousAttributes>) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_reference_id"?: ((string) | (null));
    /**
     * Reason code for a failed Return resolution, when available.
     * refund_payment_balance_unavailable means the original payments cannot fund the resolution;
     * cancel it, then add an explicit deduction or settle the shortfall outside Flint.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
     * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
     * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
     * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
     * "resolution_effect_failed". anyOf[1] (Value): string. Reason code for a failed Return
     * resolution, when available. refund_payment_balance_unavailable means the original payments
     * cannot fund the resolution; cancel it, then add an explicit deduction or settle the
     * shortfall outside Flint. refund_line_value_unavailable means another refund already returned
     * part of an order line, so retrying cannot succeed; cancel the resolution and resolve the
     * line for fewer units or without a refund. replacement_fulfillment_canceled means the
     * replacement Order's fulfillment was canceled, so it won't be sent.
     * gift_card_refund_destination_required means the original gift card cannot accept the refund;
     * retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means
     * the original payment cannot fund store credit; cancel the resolution and create a refund
     * resolution. Value enum: "refund_payment_balance_unavailable",
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed". anyOf[2] (Value): null.
     */
    "failure_code"?: (("refund_payment_balance_unavailable"
        | "gift_card_refund_destination_required"
        | "store_credit_unavailable"
        | "refund_creation_failed"
        | "refund_failed"
        | "refund_line_value_unavailable"
        | "payment_intent_creation_failed"
        | "payment_failed"
        | "replacement_order_creation_failed"
        | "replacement_fulfillment_canceled"
        | "resolution_effect_failed"
        | (string & {}))
        | (null));
    /**
     * Explanation of a failed Return resolution, when available. anyOf[1] (Value): string.
     * Explanation of a failed Return resolution, when available. anyOf[2] (Value): null.
     */
    "failure_message"?: ((string) | (null));
    /**
     * When the resolution completed. anyOf[1] (Value): string. When the resolution completed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "fulfilled_at"?: ((string) | (null));
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Value enum: "original", "new_gift_card".
     * anyOf[1] (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
     * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card". anyOf[2] (Value): null.
     */
    "gift_card_refund_destination"?: (("original" | "new_gift_card" | (string & {})) | (null));
    /**
     * Return lines and quantities the resolution covers. Absent on a correction. anyOf[1] (Value):
     * Array of {@link ReturnResolutionLineItemPreviousAttributes}. Return lines and quantities the
     * resolution covers. Absent on a correction. anyOf[1][] (Value): {@link
     * ReturnResolutionLineItemPreviousAttributes}. anyOf[2] (Value): null.
     */
    "line_items"?: ((Array<ReturnResolutionLineItemPreviousAttributes>) | (null));
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
     */
    "metadata"?: ((MetadataMap) | (null));
    /**
     * IDs of the payment intents that collect the buyer's balance for this resolution, in the
     * order Flint linked them. Empty until a payment exists. anyOf[1] (Value): Array of string.
     * IDs of the payment intents that collect the buyer's balance for this resolution, in the
     * order Flint linked them. Empty until a payment exists. anyOf[1][] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     */
    "payment_intent_ids"?: ((Array<string>) | (null));
    /**
     * Present only when `expand` includes `payment_intents`. Summaries of the payment intents in
     * `payment_intent_ids`, in the same order. anyOf[1] (Value): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand` includes
     * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
     * order. anyOf[1][] (Value): {@link ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
    /**
     * How replacement lines are priced. Present on exchanges and replacements. Value enum:
     * "original_price", "current_price", "merchant_agreed_price". anyOf[1] (Value): string. How
     * replacement lines are priced. Present on exchanges and replacements. Value enum:
     * "original_price", "current_price", "merchant_agreed_price". anyOf[2] (Value): null.
     */
    "pricing_basis"?: (("original_price" | "current_price" | "merchant_agreed_price" | (string & {})) | (null));
    /**
     * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked them.
     * Empty until a Refund exists. anyOf[1] (Value): Array of string. IDs of the Refunds that pay
     * the buyer for this resolution, in the order Flint linked them. Empty until a Refund exists.
     * anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value):
     * null.
     */
    "refund_ids"?: ((Array<string>) | (null));
    /**
     * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same
     * order. anyOf[1] (Value): Array of {@link RefundPreviousAttributes}. Present only when
     * `expand` includes `refunds`. The refunds in `refund_ids`, in the same order. anyOf[1][]
     * (Value): {@link RefundPreviousAttributes}. anyOf[2] (Value): null.
     */
    "refunds"?: ((Array<RefundPreviousAttributes>) | (null));
    /**
     * Merchandise the buyer receives instead, for an exchange or replacement. anyOf[1] (Value):
     * Array of {@link ReturnReplacementLineItemPreviousAttributes}. Merchandise the buyer receives
     * instead, for an exchange or replacement. anyOf[1][] (Value): {@link
     * ReturnReplacementLineItemPreviousAttributes}. anyOf[2] (Value): null.
     */
    "replacement_line_items"?: ((Array<ReturnReplacementLineItemPreviousAttributes>) | (null));
    /**
     * Present only when `expand` includes `replacement_order`; `null` when expanded and there is
     * no related order. anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "replacement_order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
    /**
     * ID of the replacement Order Flint created for an exchange or replacement. Absent until it
     * exists. anyOf[1] (Value): string. ID of the replacement Order Flint created for an exchange
     * or replacement. Absent until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2]
     * (Value): null.
     */
    "replacement_order_id"?: ((string) | (null));
    /**
     * Total of the replacement items the buyer receives. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "replacement_total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1] (Value): string.
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction". anyOf[2] (Value): null.
     */
    "resolution_type"?: (("refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {}))
        | (null));
    /**
     * ID of the Return the resolution belongs to. anyOf[1] (Value): string. ID of the Return the
     * resolution belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
     * anyOf[1] (Value): string. Policy that owns return_policy_revision_id. `null` when
     * return_policy_revision_id is null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". anyOf[2]
     * (Value): null.
     */
    "return_policy_id"?: ((string) | (null));
    /**
     * ID of the return policy revision that judged the lines. Set only when Flint created the
     * resolution itself and no merchant decision overrode the policy. Absent otherwise, including
     * on resolutions you create and on corrections. anyOf[1] (Value): string. ID of the return
     * policy revision that judged the lines. Set only when Flint created the resolution itself and
     * no merchant decision overrode the policy. Absent otherwise, including on resolutions you
     * create and on corrections. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value):
     * null.
     */
    "return_policy_revision_id"?: ((string) | (null));
    /**
     * Unique identifier for this return resolution, prefixed `retres_`. anyOf[1] (Value): string.
     * Unique identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     */
    "return_resolution_id"?: ((string) | (null));
    /**
     * Value of the returned units this resolution covers. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * completed means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     * anyOf[1] (Value): string. completed means the buyer has the value: every linked Refund
     * succeeded, any balance was collected, and any replacement Order's fulfillment_status is
     * fulfilled or not_applicable. Value enum: "proposed", "pending", "requires_action",
     * "completed", "failed", "canceled". anyOf[2] (Value): null.
     */
    "status"?: (("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {}))
        | (null));
    /**
     * Actions that can succeed now. checkout_session is listed while a replacement Order needs a
     * buyer payment, including when the parent Return is not open. Other actions require an open
     * Return. A failed resolution lists retry while it has a failed effect and its failure code
     * permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. []
     * enum: "cancel", "checkout_session", "confirm", "release", "retry". anyOf[1] (Value): Array
     * of string. Actions that can succeed now. checkout_session is listed while a replacement
     * Order needs a buyer payment, including when the parent Return is not open. Other actions
     * require an open Return. A failed resolution lists retry while it has a failed effect and its
     * failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent,
     * or Order. [] enum: "cancel", "checkout_session", "confirm", "release", "retry". anyOf[1][]
     * (Value): string. Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * anyOf[2] (Value): null.
     */
    "supported_actions"?: ((Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0. anyOf[2] (Value): null.
     */
    "version"?: ((number) | (null));
};
export type ReturnResolutionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            "adjustments": Array<ReturnResolutionAdjustment>;
            "buyer_payment_amount_money": MoneyValue;
            "buyer_refund_amount_money": MoneyValue;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "confirmed_at"?: string;
            "confirmed_by"?: ReturnActor;
            "corrects_return_resolution_id"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "credit_adjustment_money": MoneyValue;
            "deduction_money": MoneyValue;
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            "external_reference_id"?: string;
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
            "failure_message"?: string;
            "fulfilled_at"?: string;
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            "line_items": Array<ReturnResolutionLineItem>;
            "metadata": MetadataMap;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            "refund_ids": Array<string>;
            "refunds"?: Array<WebhookSnapshotRefund>;
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            "replacement_order_id"?: string;
            "replacement_total_money": MoneyValue;
            "resolution_type": "refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {});
            "return_id": string;
            "return_policy_id": string | null;
            "return_policy_revision_id"?: string;
            "return_resolution_id": string;
            "returned_total_money": MoneyValue;
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "action_reason"?: (("buyer_payment" | "manual_release" | (string & {})) | (null));
            "action_required_by"?: (("buyer" | "merchant" | (string & {})) | (null));
            "adjustments"?: ((Array<ReturnResolutionAdjustmentPreviousAttributes>) | (null));
            "buyer_payment_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_refund_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_at"?: ((string) | (null));
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            "cancellation_reason_message"?: ((string) | (null));
            "confirmed_at"?: ((string) | (null));
            "confirmed_by"?: ((ReturnActorPreviousAttributes) | (null));
            "corrects_return_resolution_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "created_by"?: ((ReturnActorPreviousAttributes) | (null));
            "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            "deduction_money"?: ((MoneyValuePreviousAttributes) | (null));
            "execution_blockers"?: ((Array<ReturnResolutionExecutionBlockerPreviousAttributes>) | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_code"?: (("refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
                | "store_credit_unavailable"
                | "refund_creation_failed"
                | "refund_failed"
                | "refund_line_value_unavailable"
                | "payment_intent_creation_failed"
                | "payment_failed"
                | "replacement_order_creation_failed"
                | "replacement_fulfillment_canceled"
                | "resolution_effect_failed"
                | (string & {}))
                | (null));
            "failure_message"?: ((string) | (null));
            "fulfilled_at"?: ((string) | (null));
            "gift_card_refund_destination"?: (("original" | "new_gift_card" | (string & {})) | (null));
            "line_items"?: ((Array<ReturnResolutionLineItemPreviousAttributes>) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            "pricing_basis"?: (("original_price" | "current_price" | "merchant_agreed_price" | (string & {})) | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refunds"?: ((Array<RefundPreviousAttributes>) | (null));
            "replacement_line_items"?: ((Array<ReturnReplacementLineItemPreviousAttributes>) | (null));
            "replacement_order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "replacement_order_id"?: ((string) | (null));
            "replacement_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "resolution_type"?: (("refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {}))
                | (null));
            "return_id"?: ((string) | (null));
            "return_policy_id"?: ((string) | (null));
            "return_policy_revision_id"?: ((string) | (null));
            "return_resolution_id"?: ((string) | (null));
            "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_resolution.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            "adjustments": Array<ReturnResolutionAdjustment>;
            "buyer_payment_amount_money": MoneyValue;
            "buyer_refund_amount_money": MoneyValue;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "confirmed_at"?: string;
            "confirmed_by"?: ReturnActor;
            "corrects_return_resolution_id"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "credit_adjustment_money": MoneyValue;
            "deduction_money": MoneyValue;
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            "external_reference_id"?: string;
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
            "failure_message"?: string;
            "fulfilled_at"?: string;
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            "line_items": Array<ReturnResolutionLineItem>;
            "metadata": MetadataMap;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            "refund_ids": Array<string>;
            "refunds"?: Array<WebhookSnapshotRefund>;
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            "replacement_order_id"?: string;
            "replacement_total_money": MoneyValue;
            "resolution_type": "refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {});
            "return_id": string;
            "return_policy_id": string | null;
            "return_policy_revision_id"?: string;
            "return_resolution_id": string;
            "returned_total_money": MoneyValue;
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "action_reason"?: (("buyer_payment" | "manual_release" | (string & {})) | (null));
            "action_required_by"?: (("buyer" | "merchant" | (string & {})) | (null));
            "adjustments"?: ((Array<ReturnResolutionAdjustmentPreviousAttributes>) | (null));
            "buyer_payment_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "buyer_refund_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            "canceled_at"?: ((string) | (null));
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            "cancellation_reason_message"?: ((string) | (null));
            "confirmed_at"?: ((string) | (null));
            "confirmed_by"?: ((ReturnActorPreviousAttributes) | (null));
            "corrects_return_resolution_id"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "created_by"?: ((ReturnActorPreviousAttributes) | (null));
            "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            "deduction_money"?: ((MoneyValuePreviousAttributes) | (null));
            "execution_blockers"?: ((Array<ReturnResolutionExecutionBlockerPreviousAttributes>) | (null));
            "external_reference_id"?: ((string) | (null));
            "failure_code"?: (("refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
                | "store_credit_unavailable"
                | "refund_creation_failed"
                | "refund_failed"
                | "refund_line_value_unavailable"
                | "payment_intent_creation_failed"
                | "payment_failed"
                | "replacement_order_creation_failed"
                | "replacement_fulfillment_canceled"
                | "resolution_effect_failed"
                | (string & {}))
                | (null));
            "failure_message"?: ((string) | (null));
            "fulfilled_at"?: ((string) | (null));
            "gift_card_refund_destination"?: (("original" | "new_gift_card" | (string & {})) | (null));
            "line_items"?: ((Array<ReturnResolutionLineItemPreviousAttributes>) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "payment_intent_ids"?: ((Array<string>) | (null));
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            "pricing_basis"?: (("original_price" | "current_price" | "merchant_agreed_price" | (string & {})) | (null));
            "refund_ids"?: ((Array<string>) | (null));
            "refunds"?: ((Array<RefundPreviousAttributes>) | (null));
            "replacement_line_items"?: ((Array<ReturnReplacementLineItemPreviousAttributes>) | (null));
            "replacement_order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "replacement_order_id"?: ((string) | (null));
            "replacement_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "resolution_type"?: (("refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {}))
                | (null));
            "return_id"?: ((string) | (null));
            "return_policy_id"?: ((string) | (null));
            "return_policy_revision_id"?: ((string) | (null));
            "return_resolution_id"?: ((string) | (null));
            "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            "status"?: (("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_resolution.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.action_reason (Optional): string. Why a requires_action resolution
     * is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release
     * means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". object.action_required_by (Optional): string. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * object.adjustments (Required): Array of {@link ReturnResolutionAdjustment}. Fees and credits
     * applied to the resolution's amounts. object.adjustments[] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     * object.buyer_payment_amount_money (Required): {@link MoneyValue}. Amount the buyer owes when
     * deduction_money and replacement_total_money exceed returned_total_money plus
     * credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.buyer_refund_amount_money (Required): {@link MoneyValue}. Value returned to the
     * buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and
     * replacement_total_money, when that balance is zero or more. For store_credit, the value
     * issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.canceled_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the resolution. Merchant reads only. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.cancellation_reason (Optional): string. Why the resolution was canceled. Value
     * enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other". object.cancellation_reason_message (Optional): string. Detail sent with the
     * cancellation. Merchant reads only. object.confirmed_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.confirmed_by
     * (Optional): {@link ReturnActor}. Who confirmed the resolution. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.corrects_return_resolution_id (Optional): string. ID of the settled resolution this
     * correction adjusts. Present only when `resolution_type` is `correction`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required):
     * {@link ReturnActor}. Who created the resolution. Who performed a return action: a buyer,
     * merchant, integration, or the system, with an optional ID. object.credit_adjustment_money
     * (Required): {@link MoneyValue}. Credits added by the resolution's adjustments. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.deduction_money (Required): {@link MoneyValue}. Deductions taken by the resolution's
     * adjustments, such as a restocking fee. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.execution_blockers (Required): Array of {@link
     * ReturnResolutionExecutionBlocker}. What a confirmed resolution is still waiting for. Empty
     * when nothing is. object.execution_blockers[] (Value): {@link
     * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution can
     * finish. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed Return resolution, when
     * available. refund_payment_balance_unavailable means the original payments cannot fund the
     * resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
     * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
     * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
     * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
     * "resolution_effect_failed". object.failure_message (Optional): string. Explanation of a
     * failed Return resolution, when available. object.fulfilled_at (Optional): string. When the
     * resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
     * refunded. original credits the original gift card; new_gift_card issues new gift cards.
     * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for
     * store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a
     * NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming
     * resolution_type. Store credit and its corrections always issue new gift cards. PATCH can
     * change it only while proposed. Retry persists the chosen destination before starting the new
     * attempt. Default: "original". Value enum: "original", "new_gift_card". object.line_items
     * (Required): Array of {@link ReturnResolutionLineItem}. Return lines and quantities the
     * resolution covers. Absent on a correction. object.line_items[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total. object.metadata (Required): {@link MetadataMap}. Stored caller-owned
     * key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.payment_intent_ids (Required): Array of
     * string. IDs of the payment intents that collect the buyer's balance for this resolution, in
     * the order Flint linked them. Empty until a payment exists. object.payment_intent_ids[]
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents
     * (Optional): Array of {@link ExpandedPaymentIntentSummary}. Present only when `expand`
     * includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the
     * same order. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.pricing_basis (Optional): string. How replacement
     * lines are priced. Present on exchanges and replacements. Value enum: "original_price",
     * "current_price", "merchant_agreed_price". object.refund_ids (Required): Array of string. IDs
     * of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty
     * until a Refund exists. object.refund_ids[] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunds (Optional): Array of {@link
     * WebhookSnapshotRefund}. Present only when `expand` includes `refunds`. The refunds in
     * `refund_ids`, in the same order. object.refunds[] (Value): {@link WebhookSnapshotRefund}.
     * Money returned against a collected payment. object.replacement_line_items (Required): Array
     * of {@link ReturnReplacementLineItem}. Merchandise the buyer receives instead, for an
     * exchange or replacement. object.replacement_line_items[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals. object.replacement_order (Optional): {@link ExpandedOrderSummary}
     * or null. Present only when `expand` includes `replacement_order`; `null` when expanded and
     * there is no related order. object.replacement_order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.replacement_order.anyOf[2] (Value): null. object.replacement_order_id (Optional):
     * string. ID of the replacement Order Flint created for an exchange or replacement. Absent
     * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.replacement_total_money
     * (Required): {@link MoneyValue}. Total of the replacement items the buyer receives. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.resolution_type (Required): string. What the buyer gets for the approved quantity.
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction". object.return_id (Required): string. ID of the Return the resolution belongs
     * to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_policy_id (Required): string or
     * null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
     * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". object.return_policy_revision_id
     * (Optional): string. ID of the return policy revision that judged the lines. Set only when
     * Flint created the resolution itself and no merchant decision overrode the policy. Absent
     * otherwise, including on resolutions you create and on corrections. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". object.return_resolution_id (Required): string. Unique
     * identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.returned_total_money (Required): {@link
     * MoneyValue}. Value of the returned units this resolution covers. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.status (Required): string.
     * completed means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now.
     * checkout_session is listed while a replacement Order needs a buyer payment, including when
     * the parent Return is not open. Other actions require an open Return. A failed resolution
     * lists retry while it has a failed effect and its failure code permits retry. It lists cancel
     * when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel",
     * "checkout_session", "confirm", "release", "retry". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0. previous_attributes (Optional): object and {@link
     * ReturnResolutionPreviousAttributes}. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.action_reason (Optional): string or null. Why a requires_action
     * resolution is waiting. buyer_payment means the buyer must pay the exchange balance;
     * manual_release means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". previous_attributes.action_reason.anyOf[1] (Value): string. Why a
     * requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange
     * balance; manual_release means the merchant must release the resolution. Value enum:
     * "buyer_payment", "manual_release". previous_attributes.action_reason.anyOf[2] (Value): null.
     * previous_attributes.action_required_by (Optional): string or null. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * previous_attributes.action_required_by.anyOf[1] (Value): string. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * previous_attributes.action_required_by.anyOf[2] (Value): null.
     * previous_attributes.adjustments (Optional): Array of {@link
     * ReturnResolutionAdjustmentPreviousAttributes} or null. Fees and credits applied to the
     * resolution's amounts. previous_attributes.adjustments.anyOf[1] (Value): Array of {@link
     * ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to the resolution's
     * amounts. previous_attributes.adjustments.anyOf[1][] (Value): {@link
     * ReturnResolutionAdjustmentPreviousAttributes}. previous_attributes.adjustments.anyOf[2]
     * (Value): null. previous_attributes.buyer_payment_amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Amount the buyer owes when deduction_money and
     * replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when
     * the buyer is owed a refund and for no_monetary_action.
     * previous_attributes.buyer_payment_amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.buyer_payment_amount_money.anyOf[2]
     * (Value): null. previous_attributes.buyer_refund_amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Value returned to the buyer: returned_total_money
     * plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that
     * balance is zero or more. For store_credit, the value issued on new gift cards. Zero for
     * no_monetary_action. previous_attributes.buyer_refund_amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.buyer_refund_amount_money.anyOf[2]
     * (Value): null. previous_attributes.canceled_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.canceled_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who canceled the resolution. Merchant reads only.
     * previous_attributes.canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.canceled_by.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the resolution was
     * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
     * "created_in_error", "other". previous_attributes.cancellation_reason.anyOf[1] (Value):
     * string. Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason_message (Optional): string or null. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[1] (Value): string. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[2] (Value): null.
     * previous_attributes.confirmed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.confirmed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.confirmed_at.anyOf[2]
     * (Value): null. previous_attributes.confirmed_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who confirmed the resolution.
     * previous_attributes.confirmed_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.confirmed_by.anyOf[2] (Value): null.
     * previous_attributes.corrects_return_resolution_id (Optional): string or null. ID of the
     * settled resolution this correction adjusts. Present only when `resolution_type` is
     * `correction`. previous_attributes.corrects_return_resolution_id.anyOf[1] (Value): string. ID
     * of the settled resolution this correction adjusts. Present only when `resolution_type` is
     * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.corrects_return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.created_by (Optional): {@link ReturnActorPreviousAttributes} or
     * null. Who created the resolution. previous_attributes.created_by.anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. previous_attributes.created_by.anyOf[2] (Value): null.
     * previous_attributes.credit_adjustment_money (Optional): {@link MoneyValuePreviousAttributes}
     * or null. Credits added by the resolution's adjustments.
     * previous_attributes.credit_adjustment_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.credit_adjustment_money.anyOf[2] (Value):
     * null. previous_attributes.deduction_money (Optional): {@link MoneyValuePreviousAttributes}
     * or null. Deductions taken by the resolution's adjustments, such as a restocking fee.
     * previous_attributes.deduction_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.deduction_money.anyOf[2] (Value): null.
     * previous_attributes.execution_blockers (Optional): Array of {@link
     * ReturnResolutionExecutionBlockerPreviousAttributes} or null. What a confirmed resolution is
     * still waiting for. Empty when nothing is. previous_attributes.execution_blockers.anyOf[1]
     * (Value): Array of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a
     * confirmed resolution is still waiting for. Empty when nothing is.
     * previous_attributes.execution_blockers.anyOf[1][] (Value): {@link
     * ReturnResolutionExecutionBlockerPreviousAttributes}.
     * previous_attributes.execution_blockers.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.failure_code (Optional): string or null. Reason code for a failed Return
     * resolution, when available. refund_payment_balance_unavailable means the original payments
     * cannot fund the resolution; cancel it, then add an explicit deduction or settle the
     * shortfall outside Flint. refund_line_value_unavailable means another refund already returned
     * part of an order line, so retrying cannot succeed; cancel the resolution and resolve the
     * line for fewer units or without a refund. replacement_fulfillment_canceled means the
     * replacement Order's fulfillment was canceled, so it won't be sent.
     * gift_card_refund_destination_required means the original gift card cannot accept the refund;
     * retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means
     * the original payment cannot fund store credit; cancel the resolution and create a refund
     * resolution. Value enum: "refund_payment_balance_unavailable",
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed".
     * previous_attributes.failure_code.anyOf[1] (Value): string. Reason code for a failed Return
     * resolution, when available. refund_payment_balance_unavailable means the original payments
     * cannot fund the resolution; cancel it, then add an explicit deduction or settle the
     * shortfall outside Flint. refund_line_value_unavailable means another refund already returned
     * part of an order line, so retrying cannot succeed; cancel the resolution and resolve the
     * line for fewer units or without a refund. replacement_fulfillment_canceled means the
     * replacement Order's fulfillment was canceled, so it won't be sent.
     * gift_card_refund_destination_required means the original gift card cannot accept the refund;
     * retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means
     * the original payment cannot fund store credit; cancel the resolution and create a refund
     * resolution. Value enum: "refund_payment_balance_unavailable",
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed".
     * previous_attributes.failure_code.anyOf[2] (Value): null. previous_attributes.failure_message
     * (Optional): string or null. Explanation of a failed Return resolution, when available.
     * previous_attributes.failure_message.anyOf[1] (Value): string. Explanation of a failed Return
     * resolution, when available. previous_attributes.failure_message.anyOf[2] (Value): null.
     * previous_attributes.fulfilled_at (Optional): string or null. When the resolution completed.
     * previous_attributes.fulfilled_at.anyOf[1] (Value): string. When the resolution completed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.fulfilled_at.anyOf[2] (Value): null.
     * previous_attributes.gift_card_refund_destination (Optional): string or null. Where the
     * gift-card-paid portion is refunded. original credits the original gift card; new_gift_card
     * issues new gift cards. Accepted for refund, exchange, and correction, except a correction of
     * store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns
     * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
     * conflicting_fields naming resolution_type. Store credit and its corrections always issue new
     * gift cards. PATCH can change it only while proposed. Retry persists the chosen destination
     * before starting the new attempt. Value enum: "original", "new_gift_card".
     * previous_attributes.gift_card_refund_destination.anyOf[1] (Value): string. Where the
     * gift-card-paid portion is refunded. original credits the original gift card; new_gift_card
     * issues new gift cards. Accepted for refund, exchange, and correction, except a correction of
     * store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns
     * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
     * conflicting_fields naming resolution_type. Store credit and its corrections always issue new
     * gift cards. PATCH can change it only while proposed. Retry persists the chosen destination
     * before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card". previous_attributes.gift_card_refund_destination.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link
     * ReturnResolutionLineItemPreviousAttributes} or null. Return lines and quantities the
     * resolution covers. Absent on a correction. previous_attributes.line_items.anyOf[1] (Value):
     * Array of {@link ReturnResolutionLineItemPreviousAttributes}. Return lines and quantities the
     * resolution covers. Absent on a correction. previous_attributes.line_items.anyOf[1][]
     * (Value): {@link ReturnResolutionLineItemPreviousAttributes}.
     * previous_attributes.line_items.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_ids (Optional): Array of string or null. IDs of the
     * payment intents that collect the buyer's balance for this resolution, in the order Flint
     * linked them. Empty until a payment exists. previous_attributes.payment_intent_ids.anyOf[1]
     * (Value): Array of string. IDs of the payment intents that collect the buyer's balance for
     * this resolution, in the order Flint linked them. Empty until a payment exists.
     * previous_attributes.payment_intent_ids.anyOf[1][] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_ids.anyOf[2] (Value):
     * null. previous_attributes.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
     * order. previous_attributes.payment_intents.anyOf[1] (Value): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand` includes
     * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
     * order. previous_attributes.payment_intents.anyOf[1][] (Value): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}.
     * previous_attributes.payment_intents.anyOf[2] (Value): null.
     * previous_attributes.pricing_basis (Optional): string or null. How replacement lines are
     * priced. Present on exchanges and replacements. Value enum: "original_price",
     * "current_price", "merchant_agreed_price". previous_attributes.pricing_basis.anyOf[1]
     * (Value): string. How replacement lines are priced. Present on exchanges and replacements.
     * Value enum: "original_price", "current_price", "merchant_agreed_price".
     * previous_attributes.pricing_basis.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. IDs of the Refunds that pay the buyer for this
     * resolution, in the order Flint linked them. Empty until a Refund exists.
     * previous_attributes.refund_ids.anyOf[1] (Value): Array of string. IDs of the Refunds that
     * pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund
     * exists. previous_attributes.refund_ids.anyOf[1][] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2] (Value): null.
     * previous_attributes.refunds (Optional): Array of {@link RefundPreviousAttributes} or null.
     * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same
     * order. previous_attributes.refunds.anyOf[1] (Value): Array of {@link
     * RefundPreviousAttributes}. Present only when `expand` includes `refunds`. The refunds in
     * `refund_ids`, in the same order. previous_attributes.refunds.anyOf[1][] (Value): {@link
     * RefundPreviousAttributes}. previous_attributes.refunds.anyOf[2] (Value): null.
     * previous_attributes.replacement_line_items (Optional): Array of {@link
     * ReturnReplacementLineItemPreviousAttributes} or null. Merchandise the buyer receives
     * instead, for an exchange or replacement. previous_attributes.replacement_line_items.anyOf[1]
     * (Value): Array of {@link ReturnReplacementLineItemPreviousAttributes}. Merchandise the buyer
     * receives instead, for an exchange or replacement.
     * previous_attributes.replacement_line_items.anyOf[1][] (Value): {@link
     * ReturnReplacementLineItemPreviousAttributes}.
     * previous_attributes.replacement_line_items.anyOf[2] (Value): null.
     * previous_attributes.replacement_order (Optional): {@link
     * ExpandedOrderSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `replacement_order`; `null` when expanded and there is no related order.
     * previous_attributes.replacement_order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.replacement_order.anyOf[2]
     * (Value): null. previous_attributes.replacement_order_id (Optional): string or null. ID of
     * the replacement Order Flint created for an exchange or replacement. Absent until it exists.
     * previous_attributes.replacement_order_id.anyOf[1] (Value): string. ID of the replacement
     * Order Flint created for an exchange or replacement. Absent until it exists. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.replacement_order_id.anyOf[2] (Value):
     * null. previous_attributes.replacement_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Total of the replacement items the buyer receives.
     * previous_attributes.replacement_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.replacement_total_money.anyOf[2] (Value):
     * null. previous_attributes.resolution_type (Optional): string or null. What the buyer gets
     * for the approved quantity. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". previous_attributes.resolution_type.anyOf[1] (Value):
     * string. What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     * previous_attributes.resolution_type.anyOf[2] (Value): null. previous_attributes.return_id
     * (Optional): string or null. ID of the Return the resolution belongs to.
     * previous_attributes.return_id.anyOf[1] (Value): string. ID of the Return the resolution
     * belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null. previous_attributes.return_policy_id
     * (Optional): string or null. Policy that owns return_policy_revision_id. `null` when
     * return_policy_revision_id is null. previous_attributes.return_policy_id.anyOf[1] (Value):
     * string. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
     * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
     * previous_attributes.return_policy_id.anyOf[2] (Value): null.
     * previous_attributes.return_policy_revision_id (Optional): string or null. ID of the return
     * policy revision that judged the lines. Set only when Flint created the resolution itself and
     * no merchant decision overrode the policy. Absent otherwise, including on resolutions you
     * create and on corrections. previous_attributes.return_policy_revision_id.anyOf[1] (Value):
     * string. ID of the return policy revision that judged the lines. Set only when Flint created
     * the resolution itself and no merchant decision overrode the policy. Absent otherwise,
     * including on resolutions you create and on corrections. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". previous_attributes.return_policy_revision_id.anyOf[2]
     * (Value): null. previous_attributes.return_resolution_id (Optional): string or null. Unique
     * identifier for this return resolution, prefixed `retres_`.
     * previous_attributes.return_resolution_id.anyOf[1] (Value): string. Unique identifier for
     * this return resolution, prefixed `retres_`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.returned_total_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Value of the returned units this resolution covers.
     * previous_attributes.returned_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.returned_total_money.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. completed means the buyer has
     * the value: every linked Refund succeeded, any balance was collected, and any replacement
     * Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed",
     * "pending", "requires_action", "completed", "failed", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. completed means the buyer has the
     * value: every linked Refund succeeded, any balance was collected, and any replacement Order's
     * fulfillment_status is fulfilled or not_applicable. Value enum: "proposed", "pending",
     * "requires_action", "completed", "failed", "canceled". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Actions that can succeed now. checkout_session is listed while a replacement Order needs a
     * buyer payment, including when the parent Return is not open. Other actions require an open
     * Return. A failed resolution lists retry while it has a failed effect and its failure code
     * permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. []
     * enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
     * including when the parent Return is not open. Other actions require an open Return. A failed
     * resolution lists retry while it has a failed effect and its failure code permits retry. It
     * lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel",
     * "checkout_session", "confirm", "release", "retry".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "checkout_session", "confirm", "release", "retry".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: int64. minimum: 0. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * action_reason (Optional): string. Why a requires_action resolution is waiting.
         * buyer_payment means the buyer must pay the exchange balance; manual_release means the
         * merchant must release the resolution. Value enum: "buyer_payment", "manual_release".
         * action_required_by (Optional): string. Who has to act while the resolution's status is
         * `requires_action`. Value enum: "buyer", "merchant". adjustments (Required): Array of
         * {@link ReturnResolutionAdjustment}. Fees and credits applied to the resolution's
         * amounts. adjustments[] (Value): {@link ReturnResolutionAdjustment}. A fee or credit
         * applied to a return resolution, such as a restocking fee, with the assessed and applied
         * amounts and any waiver. buyer_payment_amount_money (Required): {@link MoneyValue}.
         * Amount the buyer owes when deduction_money and replacement_total_money exceed
         * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund
         * and for no_monetary_action. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. buyer_refund_amount_money (Required): {@link MoneyValue}. Value
         * returned to the buyer: returned_total_money plus credit_adjustment_money, minus
         * deduction_money and replacement_total_money, when that balance is zero or more. For
         * store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. canceled_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * resolution. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. confirmed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". confirmed_by (Optional): {@link ReturnActor}. Who confirmed the
         * resolution. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. corrects_return_resolution_id (Optional): string. ID of the
         * settled resolution this correction adjusts. Present only when `resolution_type` is
         * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_by (Required): {@link ReturnActor}. Who created the resolution. Who performed a
         * return action: a buyer, merchant, integration, or the system, with an optional ID.
         * credit_adjustment_money (Required): {@link MoneyValue}. Credits added by the
         * resolution's adjustments. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. deduction_money (Required): {@link MoneyValue}. Deductions taken by
         * the resolution's adjustments, such as a restocking fee. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. execution_blockers (Required): Array
         * of {@link ReturnResolutionExecutionBlocker}. What a confirmed resolution is still
         * waiting for. Empty when nothing is. execution_blockers[] (Value): {@link
         * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution
         * can finish. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". failure_code
         * (Optional): string. Reason code for a failed Return resolution, when available.
         * refund_payment_balance_unavailable means the original payments cannot fund the
         * resolution; cancel it, then add an explicit deduction or settle the shortfall outside
         * Flint. refund_line_value_unavailable means another refund already returned part of an
         * order line, so retrying cannot succeed; cancel the resolution and resolve the line for
         * fewer units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_message (Optional): string. Explanation of a failed
         * Return resolution, when available. fulfilled_at (Optional): string. When the resolution
         * completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
         * refunded. original credits the original gift card; new_gift_card issues new gift cards.
         * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit
         * for store_credit, replacement, and no_monetary_action; sending it returns
         * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
         * conflicting_fields naming resolution_type. Store credit and its corrections always issue
         * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
         * destination before starting the new attempt. Default: "original". Value enum:
         * "original", "new_gift_card". line_items (Required): Array of {@link
         * ReturnResolutionLineItem}. Return lines and quantities the resolution covers. Absent on
         * a correction. line_items[] (Value): {@link ReturnResolutionLineItem}. A return line
         * included in a resolution, with its quantity and returned total. metadata (Required):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. payment_intent_ids (Required): Array of string. IDs of the payment intents that
         * collect the buyer's balance for this resolution, in the order Flint linked them. Empty
         * until a payment exists. payment_intent_ids[] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Present only when `expand` includes `payment_intents`.
         * Summaries of the payment intents in `payment_intent_ids`, in the same order.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. pricing_basis (Optional): string. How replacement lines are priced.
         * Present on exchanges and replacements. Value enum: "original_price", "current_price",
         * "merchant_agreed_price". refund_ids (Required): Array of string. IDs of the Refunds that
         * pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund
         * exists. refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunds
         * (Optional): Array of {@link WebhookSnapshotRefund}. Present only when `expand` includes
         * `refunds`. The refunds in `refund_ids`, in the same order. refunds[] (Value): {@link
         * WebhookSnapshotRefund}. Money returned against a collected payment.
         * replacement_line_items (Required): Array of {@link ReturnReplacementLineItem}.
         * Merchandise the buyer receives instead, for an exchange or replacement.
         * replacement_line_items[] (Value): {@link ReturnReplacementLineItem}. A replacement item
         * added to a return resolution, with its quantity and price totals. replacement_order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `replacement_order`; `null` when expanded and there is no related order.
         * replacement_order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
         * fields, including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. replacement_order.anyOf[2] (Value): null.
         * replacement_order_id (Optional): string. ID of the replacement Order Flint created for
         * an exchange or replacement. Absent until it exists. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". replacement_total_money (Required): {@link
         * MoneyValue}. Total of the replacement items the buyer receives. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. resolution_type
         * (Required): string. What the buyer gets for the approved quantity. Value enum: "refund",
         * "exchange", "replacement", "store_credit", "no_monetary_action", "correction". return_id
         * (Required): string. ID of the Return the resolution belongs to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_policy_id (Required): string or null. Policy
         * that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
         * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". return_policy_revision_id (Optional):
         * string. ID of the return policy revision that judged the lines. Set only when Flint
         * created the resolution itself and no merchant decision overrode the policy. Absent
         * otherwise, including on resolutions you create and on corrections. Example:
         * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". return_resolution_id (Required): string. Unique
         * identifier for this return resolution, prefixed `retres_`. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". returned_total_money (Required): {@link
         * MoneyValue}. Value of the returned units this resolution covers. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. status (Required):
         * string. completed means the buyer has the value: every linked Refund succeeded, any
         * balance was collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
         * "failed", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
         * including when the parent Return is not open. Other actions require an open Return. A
         * failed resolution lists retry while it has a failed effect and its failure code permits
         * retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
         * "cancel", "checkout_session", "confirm", "release", "retry". supported_actions[]
         * (Value): string. Value enum: "cancel", "checkout_session", "confirm", "release",
         * "retry". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 0.
         */
        "object": {
            /**
             * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay
             * the exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release".
             */
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            /**
             * Who has to act while the resolution's status is `requires_action`. Value enum:
             * "buyer", "merchant".
             */
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            /**
             * Fees and credits applied to the resolution's amounts. [] (Value): {@link
             * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as
             * a restocking fee, with the assessed and applied amounts and any waiver.
             */
            "adjustments": Array<ReturnResolutionAdjustment>;
            /**
             * Amount the buyer owes when deduction_money and replacement_total_money exceed
             * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a
             * refund and for no_monetary_action. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "buyer_payment_amount_money": MoneyValue;
            /**
             * Value returned to the buyer: returned_total_money plus credit_adjustment_money,
             * minus deduction_money and replacement_total_money, when that balance is zero or
             * more. For store_credit, the value issued on new gift cards. Zero for
             * no_monetary_action. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "buyer_refund_amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the resolution. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "confirmed_at"?: string;
            /**
             * Who confirmed the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "confirmed_by"?: ReturnActor;
            /**
             * ID of the settled resolution this correction adjusts. Present only when
             * `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "corrects_return_resolution_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * Credits added by the resolution's adjustments. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "credit_adjustment_money": MoneyValue;
            /**
             * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "deduction_money": MoneyValue;
            /**
             * What a confirmed resolution is still waiting for. Empty when nothing is. [] (Value):
             * {@link ReturnResolutionExecutionBlocker}. Work that must complete before a Return
             * resolution can finish.
             */
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed Return resolution, when available.
             * refund_payment_balance_unavailable means the original payments cannot fund the
             * resolution; cancel it, then add an explicit deduction or settle the shortfall
             * outside Flint. refund_line_value_unavailable means another refund already returned
             * part of an order line, so retrying cannot succeed; cancel the resolution and resolve
             * the line for fewer units or without a refund. replacement_fulfillment_canceled means
             * the replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed".
             */
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
            /**
             * When the resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "fulfilled_at"?: string;
            /**
             * Where the gift-card-paid portion is refunded. original credits the original gift
             * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
             * correction, except a correction of store_credit. Omit for store_credit, replacement,
             * and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail
             * at gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Default: "original". Value enum: "original", "new_gift_card".
             */
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            /**
             * Return lines and quantities the resolution covers. Absent on a correction. []
             * (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution,
             * with its quantity and returned total.
             */
            "line_items": Array<ReturnResolutionLineItem>;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * IDs of the payment intents that collect the buyer's balance for this resolution, in
             * the order Flint linked them. Empty until a payment exists. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`. Summaries of the payment
             * intents in `payment_intent_ids`, in the same order. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price".
             */
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            /**
             * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked
             * them. Empty until a Refund exists. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the
             * same order. [] (Value): {@link WebhookSnapshotRefund}. Money returned against a
             * collected payment.
             */
            "refunds"?: Array<WebhookSnapshotRefund>;
            /**
             * Merchandise the buyer receives instead, for an exchange or replacement. [] (Value):
             * {@link ReturnReplacementLineItem}. A replacement item added to a return resolution,
             * with its quantity and price totals.
             */
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            /**
             * Present only when `expand` includes `replacement_order`; `null` when expanded and
             * there is no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the replacement Order Flint created for an exchange or replacement. Absent
             * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "replacement_order_id"?: string;
            /**
             * Total of the replacement items the buyer receives. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "replacement_total_money": MoneyValue;
            /**
             * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
             * "replacement", "store_credit", "no_monetary_action", "correction".
             */
            "resolution_type": "refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {});
            /**
             * ID of the Return the resolution belongs to. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
             * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
             */
            "return_policy_id": string | null;
            /**
             * ID of the return policy revision that judged the lines. Set only when Flint created
             * the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. Example:
             * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
             */
            "return_policy_revision_id"?: string;
            /**
             * Unique identifier for this return resolution, prefixed `retres_`. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id": string;
            /**
             * Value of the returned units this resolution covers. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "returned_total_money": MoneyValue;
            /**
             * completed means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
             * "failed", "canceled".
             */
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. checkout_session is listed while a replacement Order
             * needs a buyer payment, including when the parent Return is not open. Other actions
             * require an open Return. A failed resolution lists retry while it has a failed effect
             * and its failure code permits retry. It lists cancel when it never created a Refund,
             * PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". [] (Value): string. Value enum: "cancel", "checkout_session",
             * "confirm", "release", "retry".
             */
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. action_reason (Optional): string or null. Why a
         * requires_action resolution is waiting. buyer_payment means the buyer must pay the
         * exchange balance; manual_release means the merchant must release the resolution. Value
         * enum: "buyer_payment", "manual_release". action_reason.anyOf[1] (Value): string. Why a
         * requires_action resolution is waiting. buyer_payment means the buyer must pay the
         * exchange balance; manual_release means the merchant must release the resolution. Value
         * enum: "buyer_payment", "manual_release". action_reason.anyOf[2] (Value): null.
         * action_required_by (Optional): string or null. Who has to act while the resolution's
         * status is `requires_action`. Value enum: "buyer", "merchant".
         * action_required_by.anyOf[1] (Value): string. Who has to act while the resolution's
         * status is `requires_action`. Value enum: "buyer", "merchant".
         * action_required_by.anyOf[2] (Value): null. adjustments (Optional): Array of {@link
         * ReturnResolutionAdjustmentPreviousAttributes} or null. Fees and credits applied to the
         * resolution's amounts. adjustments.anyOf[1] (Value): Array of {@link
         * ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to the
         * resolution's amounts. adjustments.anyOf[1][] (Value): {@link
         * ReturnResolutionAdjustmentPreviousAttributes}. adjustments.anyOf[2] (Value): null.
         * buyer_payment_amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Amount the buyer owes when deduction_money and replacement_total_money exceed
         * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund
         * and for no_monetary_action. buyer_payment_amount_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. buyer_payment_amount_money.anyOf[2] (Value): null.
         * buyer_refund_amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus
         * deduction_money and replacement_total_money, when that balance is zero or more. For
         * store_credit, the value issued on new gift cards. Zero for no_monetary_action.
         * buyer_refund_amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * buyer_refund_amount_money.anyOf[2] (Value): null. canceled_at (Optional): string or
         * null. RFC3339 timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null.
         * canceled_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the
         * resolution. Merchant reads only. canceled_by.anyOf[1] (Value): {@link
         * ReturnActorPreviousAttributes}. canceled_by.anyOf[2] (Value): null. cancellation_reason
         * (Optional): string or null. Why the resolution was canceled. Value enum:
         * "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
         * "other". cancellation_reason.anyOf[1] (Value): string. Why the resolution was canceled.
         * Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
         * "created_in_error", "other". cancellation_reason.anyOf[2] (Value): null.
         * cancellation_reason_message (Optional): string or null. Detail sent with the
         * cancellation. Merchant reads only. cancellation_reason_message.anyOf[1] (Value): string.
         * Detail sent with the cancellation. Merchant reads only.
         * cancellation_reason_message.anyOf[2] (Value): null. confirmed_at (Optional): string or
         * null. RFC3339 timestamp. confirmed_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". confirmed_at.anyOf[2] (Value): null.
         * confirmed_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who confirmed
         * the resolution. confirmed_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * confirmed_by.anyOf[2] (Value): null. corrects_return_resolution_id (Optional): string or
         * null. ID of the settled resolution this correction adjusts. Present only when
         * `resolution_type` is `correction`. corrects_return_resolution_id.anyOf[1] (Value):
         * string. ID of the settled resolution this correction adjusts. Present only when
         * `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
         * corrects_return_resolution_id.anyOf[2] (Value): null. created_at (Optional): string or
         * null. RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * created_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who created the
         * resolution. created_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * created_by.anyOf[2] (Value): null. credit_adjustment_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credits added by the resolution's adjustments.
         * credit_adjustment_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * credit_adjustment_money.anyOf[2] (Value): null. deduction_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Deductions taken by the resolution's adjustments,
         * such as a restocking fee. deduction_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. deduction_money.anyOf[2] (Value): null.
         * execution_blockers (Optional): Array of {@link
         * ReturnResolutionExecutionBlockerPreviousAttributes} or null. What a confirmed resolution
         * is still waiting for. Empty when nothing is. execution_blockers.anyOf[1] (Value): Array
         * of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a confirmed
         * resolution is still waiting for. Empty when nothing is. execution_blockers.anyOf[1][]
         * (Value): {@link ReturnResolutionExecutionBlockerPreviousAttributes}.
         * execution_blockers.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. failure_code (Optional): string or null.
         * Reason code for a failed Return resolution, when available.
         * refund_payment_balance_unavailable means the original payments cannot fund the
         * resolution; cancel it, then add an explicit deduction or settle the shortfall outside
         * Flint. refund_line_value_unavailable means another refund already returned part of an
         * order line, so retrying cannot succeed; cancel the resolution and resolve the line for
         * fewer units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_code.anyOf[1] (Value): string. Reason code for a
         * failed Return resolution, when available. refund_payment_balance_unavailable means the
         * original payments cannot fund the resolution; cancel it, then add an explicit deduction
         * or settle the shortfall outside Flint. refund_line_value_unavailable means another
         * refund already returned part of an order line, so retrying cannot succeed; cancel the
         * resolution and resolve the line for fewer units or without a refund.
         * replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled,
         * so it won't be sent. gift_card_refund_destination_required means the original gift card
         * cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_code.anyOf[2] (Value): null. failure_message
         * (Optional): string or null. Explanation of a failed Return resolution, when available.
         * failure_message.anyOf[1] (Value): string. Explanation of a failed Return resolution,
         * when available. failure_message.anyOf[2] (Value): null. fulfilled_at (Optional): string
         * or null. When the resolution completed. fulfilled_at.anyOf[1] (Value): string. When the
         * resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * fulfilled_at.anyOf[2] (Value): null. gift_card_refund_destination (Optional): string or
         * null. Where the gift-card-paid portion is refunded. original credits the original gift
         * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
         * correction, except a correction of store_credit. Omit for store_credit, replacement, and
         * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
         * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit
         * and its corrections always issue new gift cards. PATCH can change it only while
         * proposed. Retry persists the chosen destination before starting the new attempt. Value
         * enum: "original", "new_gift_card". gift_card_refund_destination.anyOf[1] (Value):
         * string. Where the gift-card-paid portion is refunded. original credits the original gift
         * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
         * correction, except a correction of store_credit. Omit for store_credit, replacement, and
         * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
         * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit
         * and its corrections always issue new gift cards. PATCH can change it only while
         * proposed. Retry persists the chosen destination before starting the new attempt.
         * Default: "original". Value enum: "original", "new_gift_card".
         * gift_card_refund_destination.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link ReturnResolutionLineItemPreviousAttributes} or null. Return lines and quantities
         * the resolution covers. Absent on a correction. line_items.anyOf[1] (Value): Array of
         * {@link ReturnResolutionLineItemPreviousAttributes}. Return lines and quantities the
         * resolution covers. Absent on a correction. line_items.anyOf[1][] (Value): {@link
         * ReturnResolutionLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. payment_intent_ids (Optional): Array of
         * string or null. IDs of the payment intents that collect the buyer's balance for this
         * resolution, in the order Flint linked them. Empty until a payment exists.
         * payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment intents that
         * collect the buyer's balance for this resolution, in the order Flint linked them. Empty
         * until a payment exists. payment_intent_ids.anyOf[1][] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_ids.anyOf[2] (Value): null.
         * payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand`
         * includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in
         * the same order. payment_intents.anyOf[1] (Value): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand` includes
         * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
         * order. payment_intents.anyOf[1][] (Value): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. payment_intents.anyOf[2] (Value): null.
         * pricing_basis (Optional): string or null. How replacement lines are priced. Present on
         * exchanges and replacements. Value enum: "original_price", "current_price",
         * "merchant_agreed_price". pricing_basis.anyOf[1] (Value): string. How replacement lines
         * are priced. Present on exchanges and replacements. Value enum: "original_price",
         * "current_price", "merchant_agreed_price". pricing_basis.anyOf[2] (Value): null.
         * refund_ids (Optional): Array of string or null. IDs of the Refunds that pay the buyer
         * for this resolution, in the order Flint linked them. Empty until a Refund exists.
         * refund_ids.anyOf[1] (Value): Array of string. IDs of the Refunds that pay the buyer for
         * this resolution, in the order Flint linked them. Empty until a Refund exists.
         * refund_ids.anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_ids.anyOf[2] (Value): null. refunds (Optional): Array of {@link
         * RefundPreviousAttributes} or null. Present only when `expand` includes `refunds`. The
         * refunds in `refund_ids`, in the same order. refunds.anyOf[1] (Value): Array of {@link
         * RefundPreviousAttributes}. Present only when `expand` includes `refunds`. The refunds in
         * `refund_ids`, in the same order. refunds.anyOf[1][] (Value): {@link
         * RefundPreviousAttributes}. refunds.anyOf[2] (Value): null. replacement_line_items
         * (Optional): Array of {@link ReturnReplacementLineItemPreviousAttributes} or null.
         * Merchandise the buyer receives instead, for an exchange or replacement.
         * replacement_line_items.anyOf[1] (Value): Array of {@link
         * ReturnReplacementLineItemPreviousAttributes}. Merchandise the buyer receives instead,
         * for an exchange or replacement. replacement_line_items.anyOf[1][] (Value): {@link
         * ReturnReplacementLineItemPreviousAttributes}. replacement_line_items.anyOf[2] (Value):
         * null. replacement_order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or
         * null. Present only when `expand` includes `replacement_order`; `null` when expanded and
         * there is no related order. replacement_order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. replacement_order.anyOf[2] (Value): null.
         * replacement_order_id (Optional): string or null. ID of the replacement Order Flint
         * created for an exchange or replacement. Absent until it exists.
         * replacement_order_id.anyOf[1] (Value): string. ID of the replacement Order Flint created
         * for an exchange or replacement. Absent until it exists. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". replacement_order_id.anyOf[2] (Value): null.
         * replacement_total_money (Optional): {@link MoneyValuePreviousAttributes} or null. Total
         * of the replacement items the buyer receives. replacement_total_money.anyOf[1] (Value):
         * {@link MoneyValuePreviousAttributes}. replacement_total_money.anyOf[2] (Value): null.
         * resolution_type (Optional): string or null. What the buyer gets for the approved
         * quantity. Value enum: "refund", "exchange", "replacement", "store_credit",
         * "no_monetary_action", "correction". resolution_type.anyOf[1] (Value): string. What the
         * buyer gets for the approved quantity. Value enum: "refund", "exchange", "replacement",
         * "store_credit", "no_monetary_action", "correction". resolution_type.anyOf[2] (Value):
         * null. return_id (Optional): string or null. ID of the Return the resolution belongs to.
         * return_id.anyOf[1] (Value): string. ID of the Return the resolution belongs to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2] (Value): null. return_policy_id
         * (Optional): string or null. Policy that owns return_policy_revision_id. `null` when
         * return_policy_revision_id is null. return_policy_id.anyOf[1] (Value): string. Policy
         * that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
         * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". return_policy_id.anyOf[2] (Value): null.
         * return_policy_revision_id (Optional): string or null. ID of the return policy revision
         * that judged the lines. Set only when Flint created the resolution itself and no merchant
         * decision overrode the policy. Absent otherwise, including on resolutions you create and
         * on corrections. return_policy_revision_id.anyOf[1] (Value): string. ID of the return
         * policy revision that judged the lines. Set only when Flint created the resolution itself
         * and no merchant decision overrode the policy. Absent otherwise, including on resolutions
         * you create and on corrections. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
         * return_policy_revision_id.anyOf[2] (Value): null. return_resolution_id (Optional):
         * string or null. Unique identifier for this return resolution, prefixed `retres_`.
         * return_resolution_id.anyOf[1] (Value): string. Unique identifier for this return
         * resolution, prefixed `retres_`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
         * return_resolution_id.anyOf[2] (Value): null. returned_total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Value of the returned units this resolution
         * covers. returned_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * returned_total_money.anyOf[2] (Value): null. status (Optional): string or null.
         * completed means the buyer has the value: every linked Refund succeeded, any balance was
         * collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
         * "failed", "canceled". status.anyOf[1] (Value): string. completed means the buyer has the
         * value: every linked Refund succeeded, any balance was collected, and any replacement
         * Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed",
         * "pending", "requires_action", "completed", "failed", "canceled". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
         * including when the parent Return is not open. Other actions require an open Return. A
         * failed resolution lists retry while it has a failed effect and its failure code permits
         * retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
         * "cancel", "checkout_session", "confirm", "release", "retry". supported_actions.anyOf[1]
         * (Value): Array of string. Actions that can succeed now. checkout_session is listed while
         * a replacement Order needs a buyer payment, including when the parent Return is not open.
         * Other actions require an open Return. A failed resolution lists retry while it has a
         * failed effect and its failure code permits retry. It lists cancel when it never created
         * a Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
         * "release", "retry". supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
         * "checkout_session", "confirm", "release", "retry". supported_actions.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64. minimum: 0. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay
             * the exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release". anyOf[1] (Value): string. Why a
             * requires_action resolution is waiting. buyer_payment means the buyer must pay the
             * exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release". anyOf[2] (Value): null.
             */
            "action_reason"?: (("buyer_payment" | "manual_release" | (string & {})) | (null));
            /**
             * Who has to act while the resolution's status is `requires_action`. Value enum:
             * "buyer", "merchant". anyOf[1] (Value): string. Who has to act while the resolution's
             * status is `requires_action`. Value enum: "buyer", "merchant". anyOf[2] (Value):
             * null.
             */
            "action_required_by"?: (("buyer" | "merchant" | (string & {})) | (null));
            /**
             * Fees and credits applied to the resolution's amounts. anyOf[1] (Value): Array of
             * {@link ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to
             * the resolution's amounts. anyOf[1][] (Value): {@link
             * ReturnResolutionAdjustmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "adjustments"?: ((Array<ReturnResolutionAdjustmentPreviousAttributes>) | (null));
            /**
             * Amount the buyer owes when deduction_money and replacement_total_money exceed
             * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a
             * refund and for no_monetary_action. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_payment_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Value returned to the buyer: returned_total_money plus credit_adjustment_money,
             * minus deduction_money and replacement_total_money, when that balance is zero or
             * more. For store_credit, the value issued on new gift cards. Zero for
             * no_monetary_action. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "buyer_refund_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who canceled the resolution. Merchant reads only. anyOf[1] (Value): {@link
             * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why
             * the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string.
             * Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
             */
            "cancellation_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "confirmed_at"?: ((string) | (null));
            /**
             * Who confirmed the resolution. anyOf[1] (Value): {@link
             * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "confirmed_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * ID of the settled resolution this correction adjusts. Present only when
             * `resolution_type` is `correction`. anyOf[1] (Value): string. ID of the settled
             * resolution this correction adjusts. Present only when `resolution_type` is
             * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "corrects_return_resolution_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Who created the resolution. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "created_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Credits added by the resolution's adjustments. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Deductions taken by the resolution's adjustments, such as a restocking fee. anyOf[1]
             * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "deduction_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What a confirmed resolution is still waiting for. Empty when nothing is. anyOf[1]
             * (Value): Array of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a
             * confirmed resolution is still waiting for. Empty when nothing is. anyOf[1][]
             * (Value): {@link ReturnResolutionExecutionBlockerPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "execution_blockers"?: ((Array<ReturnResolutionExecutionBlockerPreviousAttributes>) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Reason code for a failed Return resolution, when available.
             * refund_payment_balance_unavailable means the original payments cannot fund the
             * resolution; cancel it, then add an explicit deduction or settle the shortfall
             * outside Flint. refund_line_value_unavailable means another refund already returned
             * part of an order line, so retrying cannot succeed; cancel the resolution and resolve
             * the line for fewer units or without a refund. replacement_fulfillment_canceled means
             * the replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed". anyOf[1] (Value): string. Reason code for a failed
             * Return resolution, when available. refund_payment_balance_unavailable means the
             * original payments cannot fund the resolution; cancel it, then add an explicit
             * deduction or settle the shortfall outside Flint. refund_line_value_unavailable means
             * another refund already returned part of an order line, so retrying cannot succeed;
             * cancel the resolution and resolve the line for fewer units or without a refund.
             * replacement_fulfillment_canceled means the replacement Order's fulfillment was
             * canceled, so it won't be sent. gift_card_refund_destination_required means the
             * original gift card cannot accept the refund; retry with gift_card_refund_destination
             * set to new_gift_card. store_credit_unavailable means the original payment cannot
             * fund store credit; cancel the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed". anyOf[2] (Value): null.
             */
            "failure_code"?: (("refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
                | "store_credit_unavailable"
                | "refund_creation_failed"
                | "refund_failed"
                | "refund_line_value_unavailable"
                | "payment_intent_creation_failed"
                | "payment_failed"
                | "replacement_order_creation_failed"
                | "replacement_fulfillment_canceled"
                | "resolution_effect_failed"
                | (string & {}))
                | (null));
            /**
             * Explanation of a failed Return resolution, when available. anyOf[1] (Value): string.
             * Explanation of a failed Return resolution, when available. anyOf[2] (Value): null.
             */
            "failure_message"?: ((string) | (null));
            /**
             * When the resolution completed. anyOf[1] (Value): string. When the resolution
             * completed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "fulfilled_at"?: ((string) | (null));
            /**
             * Where the gift-card-paid portion is refunded. original credits the original gift
             * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
             * correction, except a correction of store_credit. Omit for store_credit, replacement,
             * and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail
             * at gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Value enum: "original", "new_gift_card". anyOf[1] (Value): string. Where
             * the gift-card-paid portion is refunded. original credits the original gift card;
             * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction,
             * except a correction of store_credit. Omit for store_credit, replacement, and
             * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
             * gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Default: "original". Value enum: "original", "new_gift_card". anyOf[2]
             * (Value): null.
             */
            "gift_card_refund_destination"?: (("original" | "new_gift_card" | (string & {})) | (null));
            /**
             * Return lines and quantities the resolution covers. Absent on a correction. anyOf[1]
             * (Value): Array of {@link ReturnResolutionLineItemPreviousAttributes}. Return lines
             * and quantities the resolution covers. Absent on a correction. anyOf[1][] (Value):
             * {@link ReturnResolutionLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnResolutionLineItemPreviousAttributes>) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * IDs of the payment intents that collect the buyer's balance for this resolution, in
             * the order Flint linked them. Empty until a payment exists. anyOf[1] (Value): Array
             * of string. IDs of the payment intents that collect the buyer's balance for this
             * resolution, in the order Flint linked them. Empty until a payment exists. anyOf[1][]
             * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `payment_intents`. Summaries of the payment
             * intents in `payment_intent_ids`, in the same order. anyOf[1] (Value): Array of
             * {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand`
             * includes `payment_intents`. Summaries of the payment intents in
             * `payment_intent_ids`, in the same order. anyOf[1][] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price". anyOf[1] (Value):
             * string. How replacement lines are priced. Present on exchanges and replacements.
             * Value enum: "original_price", "current_price", "merchant_agreed_price". anyOf[2]
             * (Value): null.
             */
            "pricing_basis"?: (("original_price" | "current_price" | "merchant_agreed_price" | (string & {})) | (null));
            /**
             * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked
             * them. Empty until a Refund exists. anyOf[1] (Value): Array of string. IDs of the
             * Refunds that pay the buyer for this resolution, in the order Flint linked them.
             * Empty until a Refund exists. anyOf[1][] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the
             * same order. anyOf[1] (Value): Array of {@link RefundPreviousAttributes}. Present
             * only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same
             * order. anyOf[1][] (Value): {@link RefundPreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunds"?: ((Array<RefundPreviousAttributes>) | (null));
            /**
             * Merchandise the buyer receives instead, for an exchange or replacement. anyOf[1]
             * (Value): Array of {@link ReturnReplacementLineItemPreviousAttributes}. Merchandise
             * the buyer receives instead, for an exchange or replacement. anyOf[1][] (Value):
             * {@link ReturnReplacementLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "replacement_line_items"?: ((Array<ReturnReplacementLineItemPreviousAttributes>) | (null));
            /**
             * Present only when `expand` includes `replacement_order`; `null` when expanded and
             * there is no related order. anyOf[1] (Value): {@link
             * ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "replacement_order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the replacement Order Flint created for an exchange or replacement. Absent
             * until it exists. anyOf[1] (Value): string. ID of the replacement Order Flint created
             * for an exchange or replacement. Absent until it exists. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "replacement_order_id"?: ((string) | (null));
            /**
             * Total of the replacement items the buyer receives. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "replacement_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
             * "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1] (Value):
             * string. What the buyer gets for the approved quantity. Value enum: "refund",
             * "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
             * anyOf[2] (Value): null.
             */
            "resolution_type"?: (("refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {}))
                | (null));
            /**
             * ID of the Return the resolution belongs to. anyOf[1] (Value): string. ID of the
             * Return the resolution belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             * anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
             * null. anyOf[1] (Value): string. Policy that owns return_policy_revision_id. `null`
             * when return_policy_revision_id is null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
             * anyOf[2] (Value): null.
             */
            "return_policy_id"?: ((string) | (null));
            /**
             * ID of the return policy revision that judged the lines. Set only when Flint created
             * the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. anyOf[1] (Value):
             * string. ID of the return policy revision that judged the lines. Set only when Flint
             * created the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. Example:
             * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value): null.
             */
            "return_policy_revision_id"?: ((string) | (null));
            /**
             * Unique identifier for this return resolution, prefixed `retres_`. anyOf[1] (Value):
             * string. Unique identifier for this return resolution, prefixed `retres_`. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * Value of the returned units this resolution covers. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * completed means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
             * "failed", "canceled". anyOf[1] (Value): string. completed means the buyer has the
             * value: every linked Refund succeeded, any balance was collected, and any replacement
             * Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed",
             * "pending", "requires_action", "completed", "failed", "canceled". anyOf[2] (Value):
             * null.
             */
            "status"?: (("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {}))
                | (null));
            /**
             * Actions that can succeed now. checkout_session is listed while a replacement Order
             * needs a buyer payment, including when the parent Return is not open. Other actions
             * require an open Return. A failed resolution lists retry while it has a failed effect
             * and its failure code permits retry. It lists cancel when it never created a Refund,
             * PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". anyOf[1] (Value): Array of string. Actions that can succeed now.
             * checkout_session is listed while a replacement Order needs a buyer payment,
             * including when the parent Return is not open. Other actions require an open Return.
             * A failed resolution lists retry while it has a failed effect and its failure code
             * permits retry. It lists cancel when it never created a Refund, PaymentIntent, or
             * Order. [] enum: "cancel", "checkout_session", "confirm", "release", "retry".
             * anyOf[1][] (Value): string. Value enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 0. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_resolution.updated". */
    "event_type"?: "return_resolution.updated";
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
 * The `return_resolution.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnResolutionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.action_reason (Optional): string. Why a requires_action resolution
     * is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release
     * means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". object.action_required_by (Optional): string. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * object.adjustments (Required): Array of {@link ReturnResolutionAdjustment}. Fees and credits
     * applied to the resolution's amounts. object.adjustments[] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     * object.buyer_payment_amount_money (Required): {@link MoneyValue}. Amount the buyer owes when
     * deduction_money and replacement_total_money exceed returned_total_money plus
     * credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.buyer_refund_amount_money (Required): {@link MoneyValue}. Value returned to the
     * buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and
     * replacement_total_money, when that balance is zero or more. For store_credit, the value
     * issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.canceled_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the resolution. Merchant reads only. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.cancellation_reason (Optional): string. Why the resolution was canceled. Value
     * enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other". object.cancellation_reason_message (Optional): string. Detail sent with the
     * cancellation. Merchant reads only. object.confirmed_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.confirmed_by
     * (Optional): {@link ReturnActor}. Who confirmed the resolution. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.corrects_return_resolution_id (Optional): string. ID of the settled resolution this
     * correction adjusts. Present only when `resolution_type` is `correction`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required):
     * {@link ReturnActor}. Who created the resolution. Who performed a return action: a buyer,
     * merchant, integration, or the system, with an optional ID. object.credit_adjustment_money
     * (Required): {@link MoneyValue}. Credits added by the resolution's adjustments. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.deduction_money (Required): {@link MoneyValue}. Deductions taken by the resolution's
     * adjustments, such as a restocking fee. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.execution_blockers (Required): Array of {@link
     * ReturnResolutionExecutionBlocker}. What a confirmed resolution is still waiting for. Empty
     * when nothing is. object.execution_blockers[] (Value): {@link
     * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution can
     * finish. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed Return resolution, when
     * available. refund_payment_balance_unavailable means the original payments cannot fund the
     * resolution; cancel it, then add an explicit deduction or settle the shortfall outside Flint.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
     * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
     * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
     * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
     * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
     * "resolution_effect_failed". object.failure_message (Optional): string. Explanation of a
     * failed Return resolution, when available. object.fulfilled_at (Optional): string. When the
     * resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
     * refunded. original credits the original gift card; new_gift_card issues new gift cards.
     * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for
     * store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a
     * NOT_ALLOWED detail at gift_card_refund_destination and conflicting_fields naming
     * resolution_type. Store credit and its corrections always issue new gift cards. PATCH can
     * change it only while proposed. Retry persists the chosen destination before starting the new
     * attempt. Default: "original". Value enum: "original", "new_gift_card". object.line_items
     * (Required): Array of {@link ReturnResolutionLineItem}. Return lines and quantities the
     * resolution covers. Absent on a correction. object.line_items[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total. object.metadata (Required): {@link MetadataMap}. Stored caller-owned
     * key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value
     * data stored on a resource. Keys starting with flint_ are reserved for Flint and are not
     * returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
     * before those limits may not satisfy them. object.payment_intent_ids (Required): Array of
     * string. IDs of the payment intents that collect the buyer's balance for this resolution, in
     * the order Flint linked them. Empty until a payment exists. object.payment_intent_ids[]
     * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents
     * (Optional): Array of {@link ExpandedPaymentIntentSummary}. Present only when `expand`
     * includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the
     * same order. object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A
     * payment intent's summary fields, including amount, status, and capture method, returned when
     * the payment intent is expanded. object.pricing_basis (Optional): string. How replacement
     * lines are priced. Present on exchanges and replacements. Value enum: "original_price",
     * "current_price", "merchant_agreed_price". object.refund_ids (Required): Array of string. IDs
     * of the Refunds that pay the buyer for this resolution, in the order Flint linked them. Empty
     * until a Refund exists. object.refund_ids[] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunds (Optional): Array of {@link
     * WebhookSnapshotRefund}. Present only when `expand` includes `refunds`. The refunds in
     * `refund_ids`, in the same order. object.refunds[] (Value): {@link WebhookSnapshotRefund}.
     * Money returned against a collected payment. object.replacement_line_items (Required): Array
     * of {@link ReturnReplacementLineItem}. Merchandise the buyer receives instead, for an
     * exchange or replacement. object.replacement_line_items[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals. object.replacement_order (Optional): {@link ExpandedOrderSummary}
     * or null. Present only when `expand` includes `replacement_order`; `null` when expanded and
     * there is no related order. object.replacement_order.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded.
     * object.replacement_order.anyOf[2] (Value): null. object.replacement_order_id (Optional):
     * string. ID of the replacement Order Flint created for an exchange or replacement. Absent
     * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.replacement_total_money
     * (Required): {@link MoneyValue}. Total of the replacement items the buyer receives. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.resolution_type (Required): string. What the buyer gets for the approved quantity.
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction". object.return_id (Required): string. ID of the Return the resolution belongs
     * to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_policy_id (Required): string or
     * null. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
     * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". object.return_policy_revision_id
     * (Optional): string. ID of the return policy revision that judged the lines. Set only when
     * Flint created the resolution itself and no merchant decision overrode the policy. Absent
     * otherwise, including on resolutions you create and on corrections. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". object.return_resolution_id (Required): string. Unique
     * identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.returned_total_money (Required): {@link
     * MoneyValue}. Value of the returned units this resolution covers. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.status (Required): string.
     * completed means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now.
     * checkout_session is listed while a replacement Order needs a buyer payment, including when
     * the parent Return is not open. Other actions require an open Return. A failed resolution
     * lists retry while it has a failed effect and its failure code permits retry. It lists cancel
     * when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel",
     * "checkout_session", "confirm", "release", "retry". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 0. previous_attributes (Optional): object and {@link
     * ReturnResolutionPreviousAttributes}. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     * previous_attributes.action_reason (Optional): string or null. Why a requires_action
     * resolution is waiting. buyer_payment means the buyer must pay the exchange balance;
     * manual_release means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". previous_attributes.action_reason.anyOf[1] (Value): string. Why a
     * requires_action resolution is waiting. buyer_payment means the buyer must pay the exchange
     * balance; manual_release means the merchant must release the resolution. Value enum:
     * "buyer_payment", "manual_release". previous_attributes.action_reason.anyOf[2] (Value): null.
     * previous_attributes.action_required_by (Optional): string or null. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * previous_attributes.action_required_by.anyOf[1] (Value): string. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * previous_attributes.action_required_by.anyOf[2] (Value): null.
     * previous_attributes.adjustments (Optional): Array of {@link
     * ReturnResolutionAdjustmentPreviousAttributes} or null. Fees and credits applied to the
     * resolution's amounts. previous_attributes.adjustments.anyOf[1] (Value): Array of {@link
     * ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to the resolution's
     * amounts. previous_attributes.adjustments.anyOf[1][] (Value): {@link
     * ReturnResolutionAdjustmentPreviousAttributes}. previous_attributes.adjustments.anyOf[2]
     * (Value): null. previous_attributes.buyer_payment_amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Amount the buyer owes when deduction_money and
     * replacement_total_money exceed returned_total_money plus credit_adjustment_money. Zero when
     * the buyer is owed a refund and for no_monetary_action.
     * previous_attributes.buyer_payment_amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.buyer_payment_amount_money.anyOf[2]
     * (Value): null. previous_attributes.buyer_refund_amount_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Value returned to the buyer: returned_total_money
     * plus credit_adjustment_money, minus deduction_money and replacement_total_money, when that
     * balance is zero or more. For store_credit, the value issued on new gift cards. Zero for
     * no_monetary_action. previous_attributes.buyer_refund_amount_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.buyer_refund_amount_money.anyOf[2]
     * (Value): null. previous_attributes.canceled_at (Optional): string or null. RFC3339
     * timestamp. previous_attributes.canceled_at.anyOf[1] (Value): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.canceled_at.anyOf[2]
     * (Value): null. previous_attributes.canceled_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who canceled the resolution. Merchant reads only.
     * previous_attributes.canceled_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.canceled_by.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason (Optional): string or null. Why the resolution was
     * canceled. Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
     * "created_in_error", "other". previous_attributes.cancellation_reason.anyOf[1] (Value):
     * string. Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other".
     * previous_attributes.cancellation_reason.anyOf[2] (Value): null.
     * previous_attributes.cancellation_reason_message (Optional): string or null. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[1] (Value): string. Detail sent with
     * the cancellation. Merchant reads only.
     * previous_attributes.cancellation_reason_message.anyOf[2] (Value): null.
     * previous_attributes.confirmed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.confirmed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.confirmed_at.anyOf[2]
     * (Value): null. previous_attributes.confirmed_by (Optional): {@link
     * ReturnActorPreviousAttributes} or null. Who confirmed the resolution.
     * previous_attributes.confirmed_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
     * previous_attributes.confirmed_by.anyOf[2] (Value): null.
     * previous_attributes.corrects_return_resolution_id (Optional): string or null. ID of the
     * settled resolution this correction adjusts. Present only when `resolution_type` is
     * `correction`. previous_attributes.corrects_return_resolution_id.anyOf[1] (Value): string. ID
     * of the settled resolution this correction adjusts. Present only when `resolution_type` is
     * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.corrects_return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.created_by (Optional): {@link ReturnActorPreviousAttributes} or
     * null. Who created the resolution. previous_attributes.created_by.anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. previous_attributes.created_by.anyOf[2] (Value): null.
     * previous_attributes.credit_adjustment_money (Optional): {@link MoneyValuePreviousAttributes}
     * or null. Credits added by the resolution's adjustments.
     * previous_attributes.credit_adjustment_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.credit_adjustment_money.anyOf[2] (Value):
     * null. previous_attributes.deduction_money (Optional): {@link MoneyValuePreviousAttributes}
     * or null. Deductions taken by the resolution's adjustments, such as a restocking fee.
     * previous_attributes.deduction_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * previous_attributes.deduction_money.anyOf[2] (Value): null.
     * previous_attributes.execution_blockers (Optional): Array of {@link
     * ReturnResolutionExecutionBlockerPreviousAttributes} or null. What a confirmed resolution is
     * still waiting for. Empty when nothing is. previous_attributes.execution_blockers.anyOf[1]
     * (Value): Array of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a
     * confirmed resolution is still waiting for. Empty when nothing is.
     * previous_attributes.execution_blockers.anyOf[1][] (Value): {@link
     * ReturnResolutionExecutionBlockerPreviousAttributes}.
     * previous_attributes.execution_blockers.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.failure_code (Optional): string or null. Reason code for a failed Return
     * resolution, when available. refund_payment_balance_unavailable means the original payments
     * cannot fund the resolution; cancel it, then add an explicit deduction or settle the
     * shortfall outside Flint. refund_line_value_unavailable means another refund already returned
     * part of an order line, so retrying cannot succeed; cancel the resolution and resolve the
     * line for fewer units or without a refund. replacement_fulfillment_canceled means the
     * replacement Order's fulfillment was canceled, so it won't be sent.
     * gift_card_refund_destination_required means the original gift card cannot accept the refund;
     * retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means
     * the original payment cannot fund store credit; cancel the resolution and create a refund
     * resolution. Value enum: "refund_payment_balance_unavailable",
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed".
     * previous_attributes.failure_code.anyOf[1] (Value): string. Reason code for a failed Return
     * resolution, when available. refund_payment_balance_unavailable means the original payments
     * cannot fund the resolution; cancel it, then add an explicit deduction or settle the
     * shortfall outside Flint. refund_line_value_unavailable means another refund already returned
     * part of an order line, so retrying cannot succeed; cancel the resolution and resolve the
     * line for fewer units or without a refund. replacement_fulfillment_canceled means the
     * replacement Order's fulfillment was canceled, so it won't be sent.
     * gift_card_refund_destination_required means the original gift card cannot accept the refund;
     * retry with gift_card_refund_destination set to new_gift_card. store_credit_unavailable means
     * the original payment cannot fund store credit; cancel the resolution and create a refund
     * resolution. Value enum: "refund_payment_balance_unavailable",
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed".
     * previous_attributes.failure_code.anyOf[2] (Value): null. previous_attributes.failure_message
     * (Optional): string or null. Explanation of a failed Return resolution, when available.
     * previous_attributes.failure_message.anyOf[1] (Value): string. Explanation of a failed Return
     * resolution, when available. previous_attributes.failure_message.anyOf[2] (Value): null.
     * previous_attributes.fulfilled_at (Optional): string or null. When the resolution completed.
     * previous_attributes.fulfilled_at.anyOf[1] (Value): string. When the resolution completed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.fulfilled_at.anyOf[2] (Value): null.
     * previous_attributes.gift_card_refund_destination (Optional): string or null. Where the
     * gift-card-paid portion is refunded. original credits the original gift card; new_gift_card
     * issues new gift cards. Accepted for refund, exchange, and correction, except a correction of
     * store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns
     * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
     * conflicting_fields naming resolution_type. Store credit and its corrections always issue new
     * gift cards. PATCH can change it only while proposed. Retry persists the chosen destination
     * before starting the new attempt. Value enum: "original", "new_gift_card".
     * previous_attributes.gift_card_refund_destination.anyOf[1] (Value): string. Where the
     * gift-card-paid portion is refunded. original credits the original gift card; new_gift_card
     * issues new gift cards. Accepted for refund, exchange, and correction, except a correction of
     * store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns
     * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
     * conflicting_fields naming resolution_type. Store credit and its corrections always issue new
     * gift cards. PATCH can change it only while proposed. Retry persists the chosen destination
     * before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card". previous_attributes.gift_card_refund_destination.anyOf[2] (Value): null.
     * previous_attributes.line_items (Optional): Array of {@link
     * ReturnResolutionLineItemPreviousAttributes} or null. Return lines and quantities the
     * resolution covers. Absent on a correction. previous_attributes.line_items.anyOf[1] (Value):
     * Array of {@link ReturnResolutionLineItemPreviousAttributes}. Return lines and quantities the
     * resolution covers. Absent on a correction. previous_attributes.line_items.anyOf[1][]
     * (Value): {@link ReturnResolutionLineItemPreviousAttributes}.
     * previous_attributes.line_items.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.payment_intent_ids (Optional): Array of string or null. IDs of the
     * payment intents that collect the buyer's balance for this resolution, in the order Flint
     * linked them. Empty until a payment exists. previous_attributes.payment_intent_ids.anyOf[1]
     * (Value): Array of string. IDs of the payment intents that collect the buyer's balance for
     * this resolution, in the order Flint linked them. Empty until a payment exists.
     * previous_attributes.payment_intent_ids.anyOf[1][] (Value): string. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". previous_attributes.payment_intent_ids.anyOf[2] (Value):
     * null. previous_attributes.payment_intents (Optional): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
     * order. previous_attributes.payment_intents.anyOf[1] (Value): Array of {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand` includes
     * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
     * order. previous_attributes.payment_intents.anyOf[1][] (Value): {@link
     * ExpandedPaymentIntentSummaryPreviousAttributes}.
     * previous_attributes.payment_intents.anyOf[2] (Value): null.
     * previous_attributes.pricing_basis (Optional): string or null. How replacement lines are
     * priced. Present on exchanges and replacements. Value enum: "original_price",
     * "current_price", "merchant_agreed_price". previous_attributes.pricing_basis.anyOf[1]
     * (Value): string. How replacement lines are priced. Present on exchanges and replacements.
     * Value enum: "original_price", "current_price", "merchant_agreed_price".
     * previous_attributes.pricing_basis.anyOf[2] (Value): null. previous_attributes.refund_ids
     * (Optional): Array of string or null. IDs of the Refunds that pay the buyer for this
     * resolution, in the order Flint linked them. Empty until a Refund exists.
     * previous_attributes.refund_ids.anyOf[1] (Value): Array of string. IDs of the Refunds that
     * pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund
     * exists. previous_attributes.refund_ids.anyOf[1][] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". previous_attributes.refund_ids.anyOf[2] (Value): null.
     * previous_attributes.refunds (Optional): Array of {@link RefundPreviousAttributes} or null.
     * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same
     * order. previous_attributes.refunds.anyOf[1] (Value): Array of {@link
     * RefundPreviousAttributes}. Present only when `expand` includes `refunds`. The refunds in
     * `refund_ids`, in the same order. previous_attributes.refunds.anyOf[1][] (Value): {@link
     * RefundPreviousAttributes}. previous_attributes.refunds.anyOf[2] (Value): null.
     * previous_attributes.replacement_line_items (Optional): Array of {@link
     * ReturnReplacementLineItemPreviousAttributes} or null. Merchandise the buyer receives
     * instead, for an exchange or replacement. previous_attributes.replacement_line_items.anyOf[1]
     * (Value): Array of {@link ReturnReplacementLineItemPreviousAttributes}. Merchandise the buyer
     * receives instead, for an exchange or replacement.
     * previous_attributes.replacement_line_items.anyOf[1][] (Value): {@link
     * ReturnReplacementLineItemPreviousAttributes}.
     * previous_attributes.replacement_line_items.anyOf[2] (Value): null.
     * previous_attributes.replacement_order (Optional): {@link
     * ExpandedOrderSummaryPreviousAttributes} or null. Present only when `expand` includes
     * `replacement_order`; `null` when expanded and there is no related order.
     * previous_attributes.replacement_order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.replacement_order.anyOf[2]
     * (Value): null. previous_attributes.replacement_order_id (Optional): string or null. ID of
     * the replacement Order Flint created for an exchange or replacement. Absent until it exists.
     * previous_attributes.replacement_order_id.anyOf[1] (Value): string. ID of the replacement
     * Order Flint created for an exchange or replacement. Absent until it exists. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.replacement_order_id.anyOf[2] (Value):
     * null. previous_attributes.replacement_total_money (Optional): {@link
     * MoneyValuePreviousAttributes} or null. Total of the replacement items the buyer receives.
     * previous_attributes.replacement_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.replacement_total_money.anyOf[2] (Value):
     * null. previous_attributes.resolution_type (Optional): string or null. What the buyer gets
     * for the approved quantity. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". previous_attributes.resolution_type.anyOf[1] (Value):
     * string. What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     * previous_attributes.resolution_type.anyOf[2] (Value): null. previous_attributes.return_id
     * (Optional): string or null. ID of the Return the resolution belongs to.
     * previous_attributes.return_id.anyOf[1] (Value): string. ID of the Return the resolution
     * belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * previous_attributes.return_id.anyOf[2] (Value): null. previous_attributes.return_policy_id
     * (Optional): string or null. Policy that owns return_policy_revision_id. `null` when
     * return_policy_revision_id is null. previous_attributes.return_policy_id.anyOf[1] (Value):
     * string. Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
     * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
     * previous_attributes.return_policy_id.anyOf[2] (Value): null.
     * previous_attributes.return_policy_revision_id (Optional): string or null. ID of the return
     * policy revision that judged the lines. Set only when Flint created the resolution itself and
     * no merchant decision overrode the policy. Absent otherwise, including on resolutions you
     * create and on corrections. previous_attributes.return_policy_revision_id.anyOf[1] (Value):
     * string. ID of the return policy revision that judged the lines. Set only when Flint created
     * the resolution itself and no merchant decision overrode the policy. Absent otherwise,
     * including on resolutions you create and on corrections. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". previous_attributes.return_policy_revision_id.anyOf[2]
     * (Value): null. previous_attributes.return_resolution_id (Optional): string or null. Unique
     * identifier for this return resolution, prefixed `retres_`.
     * previous_attributes.return_resolution_id.anyOf[1] (Value): string. Unique identifier for
     * this return resolution, prefixed `retres_`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * previous_attributes.return_resolution_id.anyOf[2] (Value): null.
     * previous_attributes.returned_total_money (Optional): {@link MoneyValuePreviousAttributes} or
     * null. Value of the returned units this resolution covers.
     * previous_attributes.returned_total_money.anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. previous_attributes.returned_total_money.anyOf[2] (Value):
     * null. previous_attributes.status (Optional): string or null. completed means the buyer has
     * the value: every linked Refund succeeded, any balance was collected, and any replacement
     * Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed",
     * "pending", "requires_action", "completed", "failed", "canceled".
     * previous_attributes.status.anyOf[1] (Value): string. completed means the buyer has the
     * value: every linked Refund succeeded, any balance was collected, and any replacement Order's
     * fulfillment_status is fulfilled or not_applicable. Value enum: "proposed", "pending",
     * "requires_action", "completed", "failed", "canceled". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.supported_actions (Optional): Array of string or null.
     * Actions that can succeed now. checkout_session is listed while a replacement Order needs a
     * buyer payment, including when the parent Return is not open. Other actions require an open
     * Return. A failed resolution lists retry while it has a failed effect and its failure code
     * permits retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. []
     * enum: "cancel", "checkout_session", "confirm", "release", "retry".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
     * including when the parent Return is not open. Other actions require an open Return. A failed
     * resolution lists retry while it has a failed effect and its failure code permits retry. It
     * lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum: "cancel",
     * "checkout_session", "confirm", "release", "retry".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
     * "checkout_session", "confirm", "release", "retry".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: int64. minimum: 0. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * action_reason (Optional): string. Why a requires_action resolution is waiting.
         * buyer_payment means the buyer must pay the exchange balance; manual_release means the
         * merchant must release the resolution. Value enum: "buyer_payment", "manual_release".
         * action_required_by (Optional): string. Who has to act while the resolution's status is
         * `requires_action`. Value enum: "buyer", "merchant". adjustments (Required): Array of
         * {@link ReturnResolutionAdjustment}. Fees and credits applied to the resolution's
         * amounts. adjustments[] (Value): {@link ReturnResolutionAdjustment}. A fee or credit
         * applied to a return resolution, such as a restocking fee, with the assessed and applied
         * amounts and any waiver. buyer_payment_amount_money (Required): {@link MoneyValue}.
         * Amount the buyer owes when deduction_money and replacement_total_money exceed
         * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund
         * and for no_monetary_action. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. buyer_refund_amount_money (Required): {@link MoneyValue}. Value
         * returned to the buyer: returned_total_money plus credit_adjustment_money, minus
         * deduction_money and replacement_total_money, when that balance is zero or more. For
         * store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. canceled_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * resolution. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. confirmed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". confirmed_by (Optional): {@link ReturnActor}. Who confirmed the
         * resolution. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. corrects_return_resolution_id (Optional): string. ID of the
         * settled resolution this correction adjusts. Present only when `resolution_type` is
         * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_by (Required): {@link ReturnActor}. Who created the resolution. Who performed a
         * return action: a buyer, merchant, integration, or the system, with an optional ID.
         * credit_adjustment_money (Required): {@link MoneyValue}. Credits added by the
         * resolution's adjustments. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. deduction_money (Required): {@link MoneyValue}. Deductions taken by
         * the resolution's adjustments, such as a restocking fee. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. execution_blockers (Required): Array
         * of {@link ReturnResolutionExecutionBlocker}. What a confirmed resolution is still
         * waiting for. Empty when nothing is. execution_blockers[] (Value): {@link
         * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution
         * can finish. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". failure_code
         * (Optional): string. Reason code for a failed Return resolution, when available.
         * refund_payment_balance_unavailable means the original payments cannot fund the
         * resolution; cancel it, then add an explicit deduction or settle the shortfall outside
         * Flint. refund_line_value_unavailable means another refund already returned part of an
         * order line, so retrying cannot succeed; cancel the resolution and resolve the line for
         * fewer units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_message (Optional): string. Explanation of a failed
         * Return resolution, when available. fulfilled_at (Optional): string. When the resolution
         * completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * gift_card_refund_destination (Optional): string. Where the gift-card-paid portion is
         * refunded. original credits the original gift card; new_gift_card issues new gift cards.
         * Accepted for refund, exchange, and correction, except a correction of store_credit. Omit
         * for store_credit, replacement, and no_monetary_action; sending it returns
         * INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination and
         * conflicting_fields naming resolution_type. Store credit and its corrections always issue
         * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
         * destination before starting the new attempt. Default: "original". Value enum:
         * "original", "new_gift_card". line_items (Required): Array of {@link
         * ReturnResolutionLineItem}. Return lines and quantities the resolution covers. Absent on
         * a correction. line_items[] (Value): {@link ReturnResolutionLineItem}. A return line
         * included in a resolution, with its quantity and returned total. metadata (Required):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. payment_intent_ids (Required): Array of string. IDs of the payment intents that
         * collect the buyer's balance for this resolution, in the order Flint linked them. Empty
         * until a payment exists. payment_intent_ids[] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummary}. Present only when `expand` includes `payment_intents`.
         * Summaries of the payment intents in `payment_intent_ids`, in the same order.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. pricing_basis (Optional): string. How replacement lines are priced.
         * Present on exchanges and replacements. Value enum: "original_price", "current_price",
         * "merchant_agreed_price". refund_ids (Required): Array of string. IDs of the Refunds that
         * pay the buyer for this resolution, in the order Flint linked them. Empty until a Refund
         * exists. refund_ids[] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunds
         * (Optional): Array of {@link WebhookSnapshotRefund}. Present only when `expand` includes
         * `refunds`. The refunds in `refund_ids`, in the same order. refunds[] (Value): {@link
         * WebhookSnapshotRefund}. Money returned against a collected payment.
         * replacement_line_items (Required): Array of {@link ReturnReplacementLineItem}.
         * Merchandise the buyer receives instead, for an exchange or replacement.
         * replacement_line_items[] (Value): {@link ReturnReplacementLineItem}. A replacement item
         * added to a return resolution, with its quantity and price totals. replacement_order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `replacement_order`; `null` when expanded and there is no related order.
         * replacement_order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
         * fields, including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. replacement_order.anyOf[2] (Value): null.
         * replacement_order_id (Optional): string. ID of the replacement Order Flint created for
         * an exchange or replacement. Absent until it exists. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". replacement_total_money (Required): {@link
         * MoneyValue}. Total of the replacement items the buyer receives. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. resolution_type
         * (Required): string. What the buyer gets for the approved quantity. Value enum: "refund",
         * "exchange", "replacement", "store_credit", "no_monetary_action", "correction". return_id
         * (Required): string. ID of the Return the resolution belongs to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_policy_id (Required): string or null. Policy
         * that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
         * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". return_policy_revision_id (Optional):
         * string. ID of the return policy revision that judged the lines. Set only when Flint
         * created the resolution itself and no merchant decision overrode the policy. Absent
         * otherwise, including on resolutions you create and on corrections. Example:
         * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". return_resolution_id (Required): string. Unique
         * identifier for this return resolution, prefixed `retres_`. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". returned_total_money (Required): {@link
         * MoneyValue}. Value of the returned units this resolution covers. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. status (Required):
         * string. completed means the buyer has the value: every linked Refund succeeded, any
         * balance was collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
         * "failed", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
         * including when the parent Return is not open. Other actions require an open Return. A
         * failed resolution lists retry while it has a failed effect and its failure code permits
         * retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
         * "cancel", "checkout_session", "confirm", "release", "retry". supported_actions[]
         * (Value): string. Value enum: "cancel", "checkout_session", "confirm", "release",
         * "retry". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 0.
         */
        "object": {
            /**
             * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay
             * the exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release".
             */
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            /**
             * Who has to act while the resolution's status is `requires_action`. Value enum:
             * "buyer", "merchant".
             */
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            /**
             * Fees and credits applied to the resolution's amounts. [] (Value): {@link
             * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as
             * a restocking fee, with the assessed and applied amounts and any waiver.
             */
            "adjustments": Array<ReturnResolutionAdjustment>;
            /**
             * Amount the buyer owes when deduction_money and replacement_total_money exceed
             * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a
             * refund and for no_monetary_action. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "buyer_payment_amount_money": MoneyValue;
            /**
             * Value returned to the buyer: returned_total_money plus credit_adjustment_money,
             * minus deduction_money and replacement_total_money, when that balance is zero or
             * more. For store_credit, the value issued on new gift cards. Zero for
             * no_monetary_action. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "buyer_refund_amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the resolution. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "confirmed_at"?: string;
            /**
             * Who confirmed the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "confirmed_by"?: ReturnActor;
            /**
             * ID of the settled resolution this correction adjusts. Present only when
             * `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "corrects_return_resolution_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * Credits added by the resolution's adjustments. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "credit_adjustment_money": MoneyValue;
            /**
             * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "deduction_money": MoneyValue;
            /**
             * What a confirmed resolution is still waiting for. Empty when nothing is. [] (Value):
             * {@link ReturnResolutionExecutionBlocker}. Work that must complete before a Return
             * resolution can finish.
             */
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed Return resolution, when available.
             * refund_payment_balance_unavailable means the original payments cannot fund the
             * resolution; cancel it, then add an explicit deduction or settle the shortfall
             * outside Flint. refund_line_value_unavailable means another refund already returned
             * part of an order line, so retrying cannot succeed; cancel the resolution and resolve
             * the line for fewer units or without a refund. replacement_fulfillment_canceled means
             * the replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed".
             */
            "failure_code"?: "refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
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
            /**
             * When the resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "fulfilled_at"?: string;
            /**
             * Where the gift-card-paid portion is refunded. original credits the original gift
             * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
             * correction, except a correction of store_credit. Omit for store_credit, replacement,
             * and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail
             * at gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Default: "original". Value enum: "original", "new_gift_card".
             */
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            /**
             * Return lines and quantities the resolution covers. Absent on a correction. []
             * (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution,
             * with its quantity and returned total.
             */
            "line_items": Array<ReturnResolutionLineItem>;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * IDs of the payment intents that collect the buyer's balance for this resolution, in
             * the order Flint linked them. Empty until a payment exists. [] (Value): string.
             * Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids": Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`. Summaries of the payment
             * intents in `payment_intent_ids`, in the same order. [] (Value): {@link
             * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
             * status, and capture method, returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price".
             */
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            /**
             * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked
             * them. Empty until a Refund exists. [] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K".
             */
            "refund_ids": Array<string>;
            /**
             * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the
             * same order. [] (Value): {@link WebhookSnapshotRefund}. Money returned against a
             * collected payment.
             */
            "refunds"?: Array<WebhookSnapshotRefund>;
            /**
             * Merchandise the buyer receives instead, for an exchange or replacement. [] (Value):
             * {@link ReturnReplacementLineItem}. A replacement item added to a return resolution,
             * with its quantity and price totals.
             */
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            /**
             * Present only when `expand` includes `replacement_order`; `null` when expanded and
             * there is no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the replacement Order Flint created for an exchange or replacement. Absent
             * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "replacement_order_id"?: string;
            /**
             * Total of the replacement items the buyer receives. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "replacement_total_money": MoneyValue;
            /**
             * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
             * "replacement", "store_credit", "no_monetary_action", "correction".
             */
            "resolution_type": "refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {});
            /**
             * ID of the Return the resolution belongs to. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
             * null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
             */
            "return_policy_id": string | null;
            /**
             * ID of the return policy revision that judged the lines. Set only when Flint created
             * the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. Example:
             * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
             */
            "return_policy_revision_id"?: string;
            /**
             * Unique identifier for this return resolution, prefixed `retres_`. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id": string;
            /**
             * Value of the returned units this resolution covers. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "returned_total_money": MoneyValue;
            /**
             * completed means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
             * "failed", "canceled".
             */
            "status": "proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. checkout_session is listed while a replacement Order
             * needs a buyer payment, including when the parent Return is not open. Other actions
             * require an open Return. A failed resolution lists retry while it has a failed effect
             * and its failure code permits retry. It lists cancel when it never created a Refund,
             * PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". [] (Value): string. Value enum: "cancel", "checkout_session",
             * "confirm", "release", "retry".
             */
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. action_reason (Optional): string or null. Why a
         * requires_action resolution is waiting. buyer_payment means the buyer must pay the
         * exchange balance; manual_release means the merchant must release the resolution. Value
         * enum: "buyer_payment", "manual_release". action_reason.anyOf[1] (Value): string. Why a
         * requires_action resolution is waiting. buyer_payment means the buyer must pay the
         * exchange balance; manual_release means the merchant must release the resolution. Value
         * enum: "buyer_payment", "manual_release". action_reason.anyOf[2] (Value): null.
         * action_required_by (Optional): string or null. Who has to act while the resolution's
         * status is `requires_action`. Value enum: "buyer", "merchant".
         * action_required_by.anyOf[1] (Value): string. Who has to act while the resolution's
         * status is `requires_action`. Value enum: "buyer", "merchant".
         * action_required_by.anyOf[2] (Value): null. adjustments (Optional): Array of {@link
         * ReturnResolutionAdjustmentPreviousAttributes} or null. Fees and credits applied to the
         * resolution's amounts. adjustments.anyOf[1] (Value): Array of {@link
         * ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to the
         * resolution's amounts. adjustments.anyOf[1][] (Value): {@link
         * ReturnResolutionAdjustmentPreviousAttributes}. adjustments.anyOf[2] (Value): null.
         * buyer_payment_amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Amount the buyer owes when deduction_money and replacement_total_money exceed
         * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund
         * and for no_monetary_action. buyer_payment_amount_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. buyer_payment_amount_money.anyOf[2] (Value): null.
         * buyer_refund_amount_money (Optional): {@link MoneyValuePreviousAttributes} or null.
         * Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus
         * deduction_money and replacement_total_money, when that balance is zero or more. For
         * store_credit, the value issued on new gift cards. Zero for no_monetary_action.
         * buyer_refund_amount_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * buyer_refund_amount_money.anyOf[2] (Value): null. canceled_at (Optional): string or
         * null. RFC3339 timestamp. canceled_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_at.anyOf[2] (Value): null.
         * canceled_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who canceled the
         * resolution. Merchant reads only. canceled_by.anyOf[1] (Value): {@link
         * ReturnActorPreviousAttributes}. canceled_by.anyOf[2] (Value): null. cancellation_reason
         * (Optional): string or null. Why the resolution was canceled. Value enum:
         * "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
         * "other". cancellation_reason.anyOf[1] (Value): string. Why the resolution was canceled.
         * Value enum: "buyer_request", "merchant_request", "duplicate", "expired",
         * "created_in_error", "other". cancellation_reason.anyOf[2] (Value): null.
         * cancellation_reason_message (Optional): string or null. Detail sent with the
         * cancellation. Merchant reads only. cancellation_reason_message.anyOf[1] (Value): string.
         * Detail sent with the cancellation. Merchant reads only.
         * cancellation_reason_message.anyOf[2] (Value): null. confirmed_at (Optional): string or
         * null. RFC3339 timestamp. confirmed_at.anyOf[1] (Value): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". confirmed_at.anyOf[2] (Value): null.
         * confirmed_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who confirmed
         * the resolution. confirmed_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * confirmed_by.anyOf[2] (Value): null. corrects_return_resolution_id (Optional): string or
         * null. ID of the settled resolution this correction adjusts. Present only when
         * `resolution_type` is `correction`. corrects_return_resolution_id.anyOf[1] (Value):
         * string. ID of the settled resolution this correction adjusts. Present only when
         * `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
         * corrects_return_resolution_id.anyOf[2] (Value): null. created_at (Optional): string or
         * null. RFC3339 timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null.
         * created_by (Optional): {@link ReturnActorPreviousAttributes} or null. Who created the
         * resolution. created_by.anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
         * created_by.anyOf[2] (Value): null. credit_adjustment_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Credits added by the resolution's adjustments.
         * credit_adjustment_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * credit_adjustment_money.anyOf[2] (Value): null. deduction_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Deductions taken by the resolution's adjustments,
         * such as a restocking fee. deduction_money.anyOf[1] (Value): {@link
         * MoneyValuePreviousAttributes}. deduction_money.anyOf[2] (Value): null.
         * execution_blockers (Optional): Array of {@link
         * ReturnResolutionExecutionBlockerPreviousAttributes} or null. What a confirmed resolution
         * is still waiting for. Empty when nothing is. execution_blockers.anyOf[1] (Value): Array
         * of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a confirmed
         * resolution is still waiting for. Empty when nothing is. execution_blockers.anyOf[1][]
         * (Value): {@link ReturnResolutionExecutionBlockerPreviousAttributes}.
         * execution_blockers.anyOf[2] (Value): null. external_reference_id (Optional): string or
         * null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. failure_code (Optional): string or null.
         * Reason code for a failed Return resolution, when available.
         * refund_payment_balance_unavailable means the original payments cannot fund the
         * resolution; cancel it, then add an explicit deduction or settle the shortfall outside
         * Flint. refund_line_value_unavailable means another refund already returned part of an
         * order line, so retrying cannot succeed; cancel the resolution and resolve the line for
         * fewer units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_code.anyOf[1] (Value): string. Reason code for a
         * failed Return resolution, when available. refund_payment_balance_unavailable means the
         * original payments cannot fund the resolution; cancel it, then add an explicit deduction
         * or settle the shortfall outside Flint. refund_line_value_unavailable means another
         * refund already returned part of an order line, so retrying cannot succeed; cancel the
         * resolution and resolve the line for fewer units or without a refund.
         * replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled,
         * so it won't be sent. gift_card_refund_destination_required means the original gift card
         * cannot accept the refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
         * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
         * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
         * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
         * "resolution_effect_failed". failure_code.anyOf[2] (Value): null. failure_message
         * (Optional): string or null. Explanation of a failed Return resolution, when available.
         * failure_message.anyOf[1] (Value): string. Explanation of a failed Return resolution,
         * when available. failure_message.anyOf[2] (Value): null. fulfilled_at (Optional): string
         * or null. When the resolution completed. fulfilled_at.anyOf[1] (Value): string. When the
         * resolution completed. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * fulfilled_at.anyOf[2] (Value): null. gift_card_refund_destination (Optional): string or
         * null. Where the gift-card-paid portion is refunded. original credits the original gift
         * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
         * correction, except a correction of store_credit. Omit for store_credit, replacement, and
         * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
         * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit
         * and its corrections always issue new gift cards. PATCH can change it only while
         * proposed. Retry persists the chosen destination before starting the new attempt. Value
         * enum: "original", "new_gift_card". gift_card_refund_destination.anyOf[1] (Value):
         * string. Where the gift-card-paid portion is refunded. original credits the original gift
         * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
         * correction, except a correction of store_credit. Omit for store_credit, replacement, and
         * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
         * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit
         * and its corrections always issue new gift cards. PATCH can change it only while
         * proposed. Retry persists the chosen destination before starting the new attempt.
         * Default: "original". Value enum: "original", "new_gift_card".
         * gift_card_refund_destination.anyOf[2] (Value): null. line_items (Optional): Array of
         * {@link ReturnResolutionLineItemPreviousAttributes} or null. Return lines and quantities
         * the resolution covers. Absent on a correction. line_items.anyOf[1] (Value): Array of
         * {@link ReturnResolutionLineItemPreviousAttributes}. Return lines and quantities the
         * resolution covers. Absent on a correction. line_items.anyOf[1][] (Value): {@link
         * ReturnResolutionLineItemPreviousAttributes}. line_items.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. payment_intent_ids (Optional): Array of
         * string or null. IDs of the payment intents that collect the buyer's balance for this
         * resolution, in the order Flint linked them. Empty until a payment exists.
         * payment_intent_ids.anyOf[1] (Value): Array of string. IDs of the payment intents that
         * collect the buyer's balance for this resolution, in the order Flint linked them. Empty
         * until a payment exists. payment_intent_ids.anyOf[1][] (Value): string. Example:
         * "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intent_ids.anyOf[2] (Value): null.
         * payment_intents (Optional): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes} or null. Present only when `expand`
         * includes `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in
         * the same order. payment_intents.anyOf[1] (Value): Array of {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand` includes
         * `payment_intents`. Summaries of the payment intents in `payment_intent_ids`, in the same
         * order. payment_intents.anyOf[1][] (Value): {@link
         * ExpandedPaymentIntentSummaryPreviousAttributes}. payment_intents.anyOf[2] (Value): null.
         * pricing_basis (Optional): string or null. How replacement lines are priced. Present on
         * exchanges and replacements. Value enum: "original_price", "current_price",
         * "merchant_agreed_price". pricing_basis.anyOf[1] (Value): string. How replacement lines
         * are priced. Present on exchanges and replacements. Value enum: "original_price",
         * "current_price", "merchant_agreed_price". pricing_basis.anyOf[2] (Value): null.
         * refund_ids (Optional): Array of string or null. IDs of the Refunds that pay the buyer
         * for this resolution, in the order Flint linked them. Empty until a Refund exists.
         * refund_ids.anyOf[1] (Value): Array of string. IDs of the Refunds that pay the buyer for
         * this resolution, in the order Flint linked them. Empty until a Refund exists.
         * refund_ids.anyOf[1][] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
         * refund_ids.anyOf[2] (Value): null. refunds (Optional): Array of {@link
         * RefundPreviousAttributes} or null. Present only when `expand` includes `refunds`. The
         * refunds in `refund_ids`, in the same order. refunds.anyOf[1] (Value): Array of {@link
         * RefundPreviousAttributes}. Present only when `expand` includes `refunds`. The refunds in
         * `refund_ids`, in the same order. refunds.anyOf[1][] (Value): {@link
         * RefundPreviousAttributes}. refunds.anyOf[2] (Value): null. replacement_line_items
         * (Optional): Array of {@link ReturnReplacementLineItemPreviousAttributes} or null.
         * Merchandise the buyer receives instead, for an exchange or replacement.
         * replacement_line_items.anyOf[1] (Value): Array of {@link
         * ReturnReplacementLineItemPreviousAttributes}. Merchandise the buyer receives instead,
         * for an exchange or replacement. replacement_line_items.anyOf[1][] (Value): {@link
         * ReturnReplacementLineItemPreviousAttributes}. replacement_line_items.anyOf[2] (Value):
         * null. replacement_order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or
         * null. Present only when `expand` includes `replacement_order`; `null` when expanded and
         * there is no related order. replacement_order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. replacement_order.anyOf[2] (Value): null.
         * replacement_order_id (Optional): string or null. ID of the replacement Order Flint
         * created for an exchange or replacement. Absent until it exists.
         * replacement_order_id.anyOf[1] (Value): string. ID of the replacement Order Flint created
         * for an exchange or replacement. Absent until it exists. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". replacement_order_id.anyOf[2] (Value): null.
         * replacement_total_money (Optional): {@link MoneyValuePreviousAttributes} or null. Total
         * of the replacement items the buyer receives. replacement_total_money.anyOf[1] (Value):
         * {@link MoneyValuePreviousAttributes}. replacement_total_money.anyOf[2] (Value): null.
         * resolution_type (Optional): string or null. What the buyer gets for the approved
         * quantity. Value enum: "refund", "exchange", "replacement", "store_credit",
         * "no_monetary_action", "correction". resolution_type.anyOf[1] (Value): string. What the
         * buyer gets for the approved quantity. Value enum: "refund", "exchange", "replacement",
         * "store_credit", "no_monetary_action", "correction". resolution_type.anyOf[2] (Value):
         * null. return_id (Optional): string or null. ID of the Return the resolution belongs to.
         * return_id.anyOf[1] (Value): string. ID of the Return the resolution belongs to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2] (Value): null. return_policy_id
         * (Optional): string or null. Policy that owns return_policy_revision_id. `null` when
         * return_policy_revision_id is null. return_policy_id.anyOf[1] (Value): string. Policy
         * that owns return_policy_revision_id. `null` when return_policy_revision_id is null.
         * Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". return_policy_id.anyOf[2] (Value): null.
         * return_policy_revision_id (Optional): string or null. ID of the return policy revision
         * that judged the lines. Set only when Flint created the resolution itself and no merchant
         * decision overrode the policy. Absent otherwise, including on resolutions you create and
         * on corrections. return_policy_revision_id.anyOf[1] (Value): string. ID of the return
         * policy revision that judged the lines. Set only when Flint created the resolution itself
         * and no merchant decision overrode the policy. Absent otherwise, including on resolutions
         * you create and on corrections. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
         * return_policy_revision_id.anyOf[2] (Value): null. return_resolution_id (Optional):
         * string or null. Unique identifier for this return resolution, prefixed `retres_`.
         * return_resolution_id.anyOf[1] (Value): string. Unique identifier for this return
         * resolution, prefixed `retres_`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
         * return_resolution_id.anyOf[2] (Value): null. returned_total_money (Optional): {@link
         * MoneyValuePreviousAttributes} or null. Value of the returned units this resolution
         * covers. returned_total_money.anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
         * returned_total_money.anyOf[2] (Value): null. status (Optional): string or null.
         * completed means the buyer has the value: every linked Refund succeeded, any balance was
         * collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
         * "failed", "canceled". status.anyOf[1] (Value): string. completed means the buyer has the
         * value: every linked Refund succeeded, any balance was collected, and any replacement
         * Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed",
         * "pending", "requires_action", "completed", "failed", "canceled". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * succeed now. checkout_session is listed while a replacement Order needs a buyer payment,
         * including when the parent Return is not open. Other actions require an open Return. A
         * failed resolution lists retry while it has a failed effect and its failure code permits
         * retry. It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
         * "cancel", "checkout_session", "confirm", "release", "retry". supported_actions.anyOf[1]
         * (Value): Array of string. Actions that can succeed now. checkout_session is listed while
         * a replacement Order needs a buyer payment, including when the parent Return is not open.
         * Other actions require an open Return. A failed resolution lists retry while it has a
         * failed effect and its failure code permits retry. It lists cancel when it never created
         * a Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
         * "release", "retry". supported_actions.anyOf[1][] (Value): string. Value enum: "cancel",
         * "checkout_session", "confirm", "release", "retry". supported_actions.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64. minimum: 0. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay
             * the exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release". anyOf[1] (Value): string. Why a
             * requires_action resolution is waiting. buyer_payment means the buyer must pay the
             * exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release". anyOf[2] (Value): null.
             */
            "action_reason"?: (("buyer_payment" | "manual_release" | (string & {})) | (null));
            /**
             * Who has to act while the resolution's status is `requires_action`. Value enum:
             * "buyer", "merchant". anyOf[1] (Value): string. Who has to act while the resolution's
             * status is `requires_action`. Value enum: "buyer", "merchant". anyOf[2] (Value):
             * null.
             */
            "action_required_by"?: (("buyer" | "merchant" | (string & {})) | (null));
            /**
             * Fees and credits applied to the resolution's amounts. anyOf[1] (Value): Array of
             * {@link ReturnResolutionAdjustmentPreviousAttributes}. Fees and credits applied to
             * the resolution's amounts. anyOf[1][] (Value): {@link
             * ReturnResolutionAdjustmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "adjustments"?: ((Array<ReturnResolutionAdjustmentPreviousAttributes>) | (null));
            /**
             * Amount the buyer owes when deduction_money and replacement_total_money exceed
             * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a
             * refund and for no_monetary_action. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "buyer_payment_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Value returned to the buyer: returned_total_money plus credit_adjustment_money,
             * minus deduction_money and replacement_total_money, when that balance is zero or
             * more. For store_credit, the value issued on new gift cards. Zero for
             * no_monetary_action. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "buyer_refund_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "canceled_at"?: ((string) | (null));
            /**
             * Who canceled the resolution. Merchant reads only. anyOf[1] (Value): {@link
             * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "canceled_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[1] (Value): string. Why
             * the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other". anyOf[2] (Value): null.
             */
            "cancellation_reason"?: (("buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {}))
                | (null));
            /**
             * Detail sent with the cancellation. Merchant reads only. anyOf[1] (Value): string.
             * Detail sent with the cancellation. Merchant reads only. anyOf[2] (Value): null.
             */
            "cancellation_reason_message"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "confirmed_at"?: ((string) | (null));
            /**
             * Who confirmed the resolution. anyOf[1] (Value): {@link
             * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
             */
            "confirmed_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * ID of the settled resolution this correction adjusts. Present only when
             * `resolution_type` is `correction`. anyOf[1] (Value): string. ID of the settled
             * resolution this correction adjusts. Present only when `resolution_type` is
             * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "corrects_return_resolution_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Who created the resolution. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "created_by"?: ((ReturnActorPreviousAttributes) | (null));
            /**
             * Credits added by the resolution's adjustments. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "credit_adjustment_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * Deductions taken by the resolution's adjustments, such as a restocking fee. anyOf[1]
             * (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "deduction_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What a confirmed resolution is still waiting for. Empty when nothing is. anyOf[1]
             * (Value): Array of {@link ReturnResolutionExecutionBlockerPreviousAttributes}. What a
             * confirmed resolution is still waiting for. Empty when nothing is. anyOf[1][]
             * (Value): {@link ReturnResolutionExecutionBlockerPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "execution_blockers"?: ((Array<ReturnResolutionExecutionBlockerPreviousAttributes>) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Reason code for a failed Return resolution, when available.
             * refund_payment_balance_unavailable means the original payments cannot fund the
             * resolution; cancel it, then add an explicit deduction or settle the shortfall
             * outside Flint. refund_line_value_unavailable means another refund already returned
             * part of an order line, so retrying cannot succeed; cancel the resolution and resolve
             * the line for fewer units or without a refund. replacement_fulfillment_canceled means
             * the replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed". anyOf[1] (Value): string. Reason code for a failed
             * Return resolution, when available. refund_payment_balance_unavailable means the
             * original payments cannot fund the resolution; cancel it, then add an explicit
             * deduction or settle the shortfall outside Flint. refund_line_value_unavailable means
             * another refund already returned part of an order line, so retrying cannot succeed;
             * cancel the resolution and resolve the line for fewer units or without a refund.
             * replacement_fulfillment_canceled means the replacement Order's fulfillment was
             * canceled, so it won't be sent. gift_card_refund_destination_required means the
             * original gift card cannot accept the refund; retry with gift_card_refund_destination
             * set to new_gift_card. store_credit_unavailable means the original payment cannot
             * fund store credit; cancel the resolution and create a refund resolution. Value enum:
             * "refund_payment_balance_unavailable", "gift_card_refund_destination_required",
             * "store_credit_unavailable", "refund_creation_failed", "refund_failed",
             * "refund_line_value_unavailable", "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed". anyOf[2] (Value): null.
             */
            "failure_code"?: (("refund_payment_balance_unavailable"
                | "gift_card_refund_destination_required"
                | "store_credit_unavailable"
                | "refund_creation_failed"
                | "refund_failed"
                | "refund_line_value_unavailable"
                | "payment_intent_creation_failed"
                | "payment_failed"
                | "replacement_order_creation_failed"
                | "replacement_fulfillment_canceled"
                | "resolution_effect_failed"
                | (string & {}))
                | (null));
            /**
             * Explanation of a failed Return resolution, when available. anyOf[1] (Value): string.
             * Explanation of a failed Return resolution, when available. anyOf[2] (Value): null.
             */
            "failure_message"?: ((string) | (null));
            /**
             * When the resolution completed. anyOf[1] (Value): string. When the resolution
             * completed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "fulfilled_at"?: ((string) | (null));
            /**
             * Where the gift-card-paid portion is refunded. original credits the original gift
             * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
             * correction, except a correction of store_credit. Omit for store_credit, replacement,
             * and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail
             * at gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Value enum: "original", "new_gift_card". anyOf[1] (Value): string. Where
             * the gift-card-paid portion is refunded. original credits the original gift card;
             * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction,
             * except a correction of store_credit. Omit for store_credit, replacement, and
             * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
             * gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Default: "original". Value enum: "original", "new_gift_card". anyOf[2]
             * (Value): null.
             */
            "gift_card_refund_destination"?: (("original" | "new_gift_card" | (string & {})) | (null));
            /**
             * Return lines and quantities the resolution covers. Absent on a correction. anyOf[1]
             * (Value): Array of {@link ReturnResolutionLineItemPreviousAttributes}. Return lines
             * and quantities the resolution covers. Absent on a correction. anyOf[1][] (Value):
             * {@link ReturnResolutionLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "line_items"?: ((Array<ReturnResolutionLineItemPreviousAttributes>) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * IDs of the payment intents that collect the buyer's balance for this resolution, in
             * the order Flint linked them. Empty until a payment exists. anyOf[1] (Value): Array
             * of string. IDs of the payment intents that collect the buyer's balance for this
             * resolution, in the order Flint linked them. Empty until a payment exists. anyOf[1][]
             * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
             */
            "payment_intent_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `payment_intents`. Summaries of the payment
             * intents in `payment_intent_ids`, in the same order. anyOf[1] (Value): Array of
             * {@link ExpandedPaymentIntentSummaryPreviousAttributes}. Present only when `expand`
             * includes `payment_intents`. Summaries of the payment intents in
             * `payment_intent_ids`, in the same order. anyOf[1][] (Value): {@link
             * ExpandedPaymentIntentSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_intents"?: ((Array<ExpandedPaymentIntentSummaryPreviousAttributes>) | (null));
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price". anyOf[1] (Value):
             * string. How replacement lines are priced. Present on exchanges and replacements.
             * Value enum: "original_price", "current_price", "merchant_agreed_price". anyOf[2]
             * (Value): null.
             */
            "pricing_basis"?: (("original_price" | "current_price" | "merchant_agreed_price" | (string & {})) | (null));
            /**
             * IDs of the Refunds that pay the buyer for this resolution, in the order Flint linked
             * them. Empty until a Refund exists. anyOf[1] (Value): Array of string. IDs of the
             * Refunds that pay the buyer for this resolution, in the order Flint linked them.
             * Empty until a Refund exists. anyOf[1][] (Value): string. Example:
             * "ref_01KEZF7C003DTD59WKYHEXYQ1K". anyOf[2] (Value): null.
             */
            "refund_ids"?: ((Array<string>) | (null));
            /**
             * Present only when `expand` includes `refunds`. The refunds in `refund_ids`, in the
             * same order. anyOf[1] (Value): Array of {@link RefundPreviousAttributes}. Present
             * only when `expand` includes `refunds`. The refunds in `refund_ids`, in the same
             * order. anyOf[1][] (Value): {@link RefundPreviousAttributes}. anyOf[2] (Value): null.
             */
            "refunds"?: ((Array<RefundPreviousAttributes>) | (null));
            /**
             * Merchandise the buyer receives instead, for an exchange or replacement. anyOf[1]
             * (Value): Array of {@link ReturnReplacementLineItemPreviousAttributes}. Merchandise
             * the buyer receives instead, for an exchange or replacement. anyOf[1][] (Value):
             * {@link ReturnReplacementLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "replacement_line_items"?: ((Array<ReturnReplacementLineItemPreviousAttributes>) | (null));
            /**
             * Present only when `expand` includes `replacement_order`; `null` when expanded and
             * there is no related order. anyOf[1] (Value): {@link
             * ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "replacement_order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * ID of the replacement Order Flint created for an exchange or replacement. Absent
             * until it exists. anyOf[1] (Value): string. ID of the replacement Order Flint created
             * for an exchange or replacement. Absent until it exists. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "replacement_order_id"?: ((string) | (null));
            /**
             * Total of the replacement items the buyer receives. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "replacement_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
             * "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1] (Value):
             * string. What the buyer gets for the approved quantity. Value enum: "refund",
             * "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
             * anyOf[2] (Value): null.
             */
            "resolution_type"?: (("refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {}))
                | (null));
            /**
             * ID of the Return the resolution belongs to. anyOf[1] (Value): string. ID of the
             * Return the resolution belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             * anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Policy that owns return_policy_revision_id. `null` when return_policy_revision_id is
             * null. anyOf[1] (Value): string. Policy that owns return_policy_revision_id. `null`
             * when return_policy_revision_id is null. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX".
             * anyOf[2] (Value): null.
             */
            "return_policy_id"?: ((string) | (null));
            /**
             * ID of the return policy revision that judged the lines. Set only when Flint created
             * the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. anyOf[1] (Value):
             * string. ID of the return policy revision that judged the lines. Set only when Flint
             * created the resolution itself and no merchant decision overrode the policy. Absent
             * otherwise, including on resolutions you create and on corrections. Example:
             * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value): null.
             */
            "return_policy_revision_id"?: ((string) | (null));
            /**
             * Unique identifier for this return resolution, prefixed `retres_`. anyOf[1] (Value):
             * string. Unique identifier for this return resolution, prefixed `retres_`. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
             */
            "return_resolution_id"?: ((string) | (null));
            /**
             * Value of the returned units this resolution covers. anyOf[1] (Value): {@link
             * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "returned_total_money"?: ((MoneyValuePreviousAttributes) | (null));
            /**
             * completed means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "completed",
             * "failed", "canceled". anyOf[1] (Value): string. completed means the buyer has the
             * value: every linked Refund succeeded, any balance was collected, and any replacement
             * Order's fulfillment_status is fulfilled or not_applicable. Value enum: "proposed",
             * "pending", "requires_action", "completed", "failed", "canceled". anyOf[2] (Value):
             * null.
             */
            "status"?: (("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled" | (string & {}))
                | (null));
            /**
             * Actions that can succeed now. checkout_session is listed while a replacement Order
             * needs a buyer payment, including when the parent Return is not open. Other actions
             * require an open Return. A failed resolution lists retry while it has a failed effect
             * and its failure code permits retry. It lists cancel when it never created a Refund,
             * PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". anyOf[1] (Value): Array of string. Actions that can succeed now.
             * checkout_session is listed while a replacement Order needs a buyer payment,
             * including when the parent Return is not open. Other actions require an open Return.
             * A failed resolution lists retry while it has a failed effect and its failure code
             * permits retry. It lists cancel when it never created a Refund, PaymentIntent, or
             * Order. [] enum: "cancel", "checkout_session", "confirm", "release", "retry".
             * anyOf[1][] (Value): string. Value enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: int64. minimum: 0. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_resolution.updated". */
    "event_type"?: "return_resolution.updated";
});
export type ReturnResolutionsCancelParams = (InputValue<CancelReturnResolutionRequestInput>)
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
export type ReturnResolutionsConfirmParams = (InputValue<ConfirmReturnResolutionRequestInput> | {
    "expected_version"?: never;
})
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
export type ReturnResolutionsCreateParams = (CreateReturnResolutionRequestInput)
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
export type ReturnResolutionsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: payment_intents, refunds,
     * replacement_order. Expanded relationships are returned only when explicitly requested and
     * authorized. Limits: at most 10 unique expand paths per request. To-many expansions are
     * capped at 20 related objects per path. [] enum: "payment_intents", "refunds",
     * "replacement_order". Value enum: "payment_intents", "refunds", "replacement_order". anyOf[1]
     * (Value): Array of string. [] enum: "payment_intents", "refunds", "replacement_order".
     * anyOf[1][] (Value): string. Value enum: "payment_intents", "refunds", "replacement_order".
     * anyOf[2] (Value): string. Value enum: "payment_intents", "refunds", "replacement_order".
     */
    "expand"?: InputValue<("payment_intents" | "refunds" | "replacement_order")
        | readonly ("payment_intents" | "refunds" | "replacement_order")[]>;
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
export type ReturnResolutionsListParams = {
    /**
     * Filter by action required by. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "buyer", "merchant", "integration". Value enum: "buyer", "merchant",
     * "integration". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "buyer", "merchant",
     * "integration". anyOf[1][] (Value): string. Value enum: "buyer", "merchant", "integration".
     * anyOf[2] (Value): string. Value enum: "buyer", "merchant", "integration".
     */
    "action_required_by"?: InputValue<("buyer" | "merchant" | "integration") | readonly ("buyer" | "merchant" | "integration")[]>;
    /**
     * Filter by corrects return resolution id. pattern: ^retres_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return resolution ID or external reference ID. */
    "query"?: InputValue<string>;
    /**
     * Filter by resolution type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction". Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * anyOf[1][] (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction". anyOf[2] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type"?: InputValue<("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")
        | readonly ("refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction")[]>;
    /**
     * Filter by return id. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by return line item id. pattern: ^retli_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: InputValue<string>;
    /**
     * Filter by return policy revision id. pattern: ^rpolv_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "return_policy_revision_id"?: InputValue<string>;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled". Value
     * enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "proposed", "pending", "requires_action",
     * "completed", "failed", "canceled". anyOf[1][] (Value): string. Value enum: "proposed",
     * "pending", "requires_action", "completed", "failed", "canceled". anyOf[2] (Value): string.
     * Value enum: "proposed", "pending", "requires_action", "completed", "failed", "canceled".
     */
    "status"?: InputValue<("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled")
        | readonly ("proposed" | "pending" | "requires_action" | "completed" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: replacement_order. Include
     * the requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum:
     * "replacement_order". Value enum: "replacement_order". anyOf[1] (Value): Array of string. []
     * enum: "replacement_order". anyOf[1][] (Value): string. Value enum: "replacement_order".
     * anyOf[2] (Value): string. Value enum: "replacement_order".
     */
    "expand"?: InputValue<("replacement_order") | readonly ("replacement_order")[]>;
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
export type ReturnResolutionsReleaseParams = (InputValue<ReleaseReturnResolutionRequestInput>)
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
export type ReturnResolutionsRetryParams = (InputValue<RetryReturnResolutionRequestInput>)
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
