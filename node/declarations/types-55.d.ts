import type { ReturnRefundEstimate, ReturnReasonSummary, ReturnReason } from './types-56.js';
import type { BundleComponent } from './types-1.js';
import type { Image } from './types-27.js';
import type { OrderLineItemModifier } from './types-40.js';
import type { SelectedProductOption } from './types-59.js';
import type { MoneyValue } from './types-38.js';
import type { Address } from './types-0.js';
import type {
    ReturnResolutionLineItemRequest,
    ReturnSourceSystem,
    ReturnRestockingFeePolicy,
    ReturnShippingPolicy,
    ReturnWindow,
    ReturnRestockingFeePolicyRequestInput,
    ReturnShippingPolicyRequestInput,
    ReturnWindowRequestInput
} from './types-57.js';
import type { ReturnDisposition, ReturnActor } from './types-54.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-37.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { InputValue } from '../runtime.js';
import type { DecideReturnInspectionLineItemRequestInput } from './types-16.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-29.js';
import type { Fulfillment } from './types-24.js';
import type { CreateReturnPolicyRequestInput } from './types-12.js';
import type { PublishReturnPolicyRevisionRequestInput } from './types-52.js';
import type { UpdateReturnPolicyRequestInput } from './types-67.js';
/**
 * An order line and quantity to check. return_reason_id is optional here; when you send it, Flint
 * checks that the reason is active and applies to the line.
 */
export type ReturnEligibilityLineItemRequest = {
    /**
     * ID of the fulfillment the units were delivered in. minLength: 1. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * ID of the order line item being returned. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Outcome requested for this line. Eligibility checks it against the policy's allowed
     * resolution types. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * ID of the return reason for this line. The reason must be active. minLength: 1. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id"?: string;
};
/**
 * An order line and quantity to check. return_reason_id is optional here; when you send it, Flint
 * checks that the reason is active and applies to the line.
 */
export type ReturnEligibilityLineItemRequestModelInput = {
    /**
     * ID of the fulfillment the units were delivered in. minLength: 1. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * ID of the order line item being returned. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Outcome requested for this line. Eligibility checks it against the policy's allowed
     * resolution types. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /**
     * ID of the return reason for this line. The reason must be active. minLength: 1. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id"?: string;
};
/**
 * The result of checking whether an order's items can be returned: overall status, per-line
 * eligibility, and the policy evaluation.
 */
export type ReturnEligibilityPreview = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at": string;
    /**
     * Eligibility of each line asked about. [] (Value): {@link ReturnEligibilityPreviewLineItem}.
     * Return eligibility for one order line item, with the line's details, suggested return
     * reasons, and whether self-service returns are enabled.
     */
    "line_items": Array<ReturnEligibilityPreviewLineItem>;
    /** ID of the Order the units come from. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * How the active return policies judged the lines. How a return policy evaluated a return
     * request: overall status and reason, the policy revision used, and per-line results.
     */
    "policy_evaluation": ReturnPolicyEvaluation;
    /**
     * Estimate for selected eligible quantities requested as refund, or with no requested
     * resolution when refund is allowed. Null when no selected line is eligible for a refund. The
     * store's inspection and its final decision can change the refund. Nothing is reserved.
     * anyOf[1] (Value): {@link ReturnRefundEstimate}. Estimated refund for the selected eligible
     * quantities. The store's inspection and its final decision can change the refund. Nothing is
     * reserved. anyOf[2] (Value): null.
     */
    "refund_estimate": ((ReturnRefundEstimate) | (null));
    /**
     * The selection the preview was run for. Which order lines to check for return eligibility:
     * all remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
    /**
     * Overall result for the selection. `review_required` when the lines differ. Value enum:
     * "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Return eligibility for one order line item, with the line's details, suggested return reasons,
 * and whether self-service returns are enabled.
 */
export type ReturnEligibilityPreviewLineItem = {
    /**
     * Components of the bundle the line was sold from. [] (Value): {@link BundleComponent}. An
     * item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     * Whether the buyer can request this line themselves, through a customer session, right now.
     * False when no policy covers the item, when it is not eligible, or when the store offers no
     * reason for it. Read eligibility.reason and ineligibility_reason to say why.
     */
    "can_buyer_request": boolean;
    /** Description of the item as sold. */
    "description"?: string;
    /**
     * How the policy judged this line. Whether a return line is eligible under policy, with the
     * eligible quantity, allowed resolution types, and any policy adjustments.
     */
    "eligibility": ReturnLineItemEligibility;
    /**
     * ID of the fulfillment the units were delivered in. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Modifiers selected on the order line, with their prices. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /** ID of the order line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /**
     * ID of the catalog product the item was sold from. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity"?: number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Active reasons that apply to this item, up to 20. Category-scoped reasons come first, then
     * reasons that apply to every item. Each group sorts by handle ascending, with
     * return_reason_id ascending as the tiebreak. maxItems: 20. [] (Value): {@link
     * ReturnReasonSummary}. A return reason a buyer can pick for a line, with its `handle` and
     * whether a note is required.
     */
    "suggested_return_reasons": Array<ReturnReasonSummary>;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/**
 * Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific
 * list of lines.
 */
export type ReturnEligibilitySelection = ({
    /**
     * The lines to check or return, each naming an order line item. [] (Value): {@link
     * ReturnEligibilityLineItemRequest}. An order line and quantity to check. return_reason_id is
     * optional here; when you send it, Flint checks that the reason is active and applies to the
     * line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequest>;
    /** How the selection picks units. Value enum: "all_remaining_fulfilled", "line_items". */
    "selection_type": "all_remaining_fulfilled" | "line_items" | (string & {});
})
    & ((Exclude<ReturnEligibilitySelectionAllRemainingFulfilled & object, readonly unknown[]>)
    | (Exclude<ReturnEligibilitySelectionLineItems & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`. */
export type ReturnEligibilitySelectionAllRemainingFulfilled = ({
    /**
     * The lines to check or return, each naming an order line item. [] (Value): {@link
     * ReturnEligibilityLineItemRequest}. An order line and quantity to check. return_reason_id is
     * optional here; when you send it, Flint checks that the reason is active and applies to the
     * line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequest>;
    /** How the selection picks units. Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled" | (string & {});
})
    & (({
    /** How the selection picks units. Value enum: "all_remaining_fulfilled". */
    "selection_type": unknown;
}));
/** The `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`. */
export type ReturnEligibilitySelectionAllRemainingFulfilledRequestInput = ({
    /**
     * The lines to check or return, each naming an order line item. [] (Value): {@link
     * ReturnEligibilityLineItemRequestModelInput}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequestModelInput>;
    /** How the selection picks units. Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled";
})
    & (({
    /** How the selection picks units. Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled";
})
    & ({
    "line_items"?: never;
}));
/** The `line_items` variant of `ReturnEligibilitySelection`. */
export type ReturnEligibilitySelectionLineItems = ({
    /**
     * The lines to check or return, each naming an order line item. [] (Value): {@link
     * ReturnEligibilityLineItemRequest}. An order line and quantity to check. return_reason_id is
     * optional here; when you send it, Flint checks that the reason is active and applies to the
     * line.
     */
    "line_items": Array<ReturnEligibilityLineItemRequest>;
    /** How the selection picks units. Value enum: "line_items". */
    "selection_type": "line_items" | (string & {});
})
    & ({
    /** The lines to check or return, each naming an order line item. minItems: 1. */
    "line_items": unknown;
    /** How the selection picks units. Value enum: "line_items". */
    "selection_type": unknown;
});
/** The `line_items` variant of `ReturnEligibilitySelection`. */
export type ReturnEligibilitySelectionLineItemsRequestInput = ({
    /**
     * The lines to check or return, each naming an order line item. [] (Value): {@link
     * ReturnEligibilityLineItemRequestModelInput}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items": Array<ReturnEligibilityLineItemRequestModelInput>;
    /** How the selection picks units. Value enum: "line_items". */
    "selection_type": "line_items";
})
    & ({
    /** The lines to check or return, each naming an order line item. minItems: 1. */
    "line_items": unknown;
    /** How the selection picks units. Value enum: "line_items". */
    "selection_type": "line_items";
});
/**
 * Which order lines to check for return eligibility: all remaining fulfilled lines, or a specific
 * list of lines.
 */
export type ReturnEligibilitySelectionRequestInput = ({
    /**
     * The lines to check or return, each naming an order line item. [] (Value): {@link
     * ReturnEligibilityLineItemRequestModelInput}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequestModelInput>;
    /** How the selection picks units. Value enum: "all_remaining_fulfilled", "line_items". */
    "selection_type": "all_remaining_fulfilled" | "line_items";
})
    & ((Exclude<ReturnEligibilitySelectionAllRemainingFulfilledRequestInput & object, readonly unknown[]>)
    | (Exclude<ReturnEligibilitySelectionLineItemsRequestInput & object, readonly unknown[]>));
/**
 * The money for a return: returned value, deductions, credits, replacement total, and amounts due
 * to or from the buyer.
 */
export type ReturnFinancialSummary = {
    /**
     * Balances collected from the buyer. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "collected_money": MoneyValue;
    /**
     * Credits added by confirmed, non-canceled resolutions. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "credit_adjustment_money": MoneyValue;
    /**
     * Fees withheld by confirmed, non-canceled resolutions. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Balances the buyer owes on confirmed, non-canceled resolutions whose payment has not
     * succeeded. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "due_from_buyer_money": MoneyValue;
    /**
     * Refund amounts on confirmed, non-canceled resolutions whose Refund has not succeeded.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "due_to_buyer_money": MoneyValue;
    /**
     * Refund amounts that succeeded. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Value of replacement merchandise on confirmed, non-canceled resolutions. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Sum of return_value.discount_money across the Return's line items. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "returned_discount_money": MoneyValue;
    /**
     * Sum of return_value.subtotal_money across the Return's line items. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "returned_subtotal_money": MoneyValue;
    /**
     * Sum of return_value.tax_money across the Return's line items. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "returned_tax_money": MoneyValue;
    /**
     * Sum of return_value.total_money across the Return's line items. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
};
/**
 * Where the buyer sends returned merchandise: their own address, a merchant location, or an
 * external location.
 */
export type ReturnHandoffDestination = {
    /**
     * Postal address the buyer sends the merchandise to. A postal address. Every address has
     * country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "address"?: Address;
    /**
     * What kind of place the destination is. Value enum: "buyer_address", "location",
     * "external_location".
     */
    "destination_type": "buyer_address" | "location" | "external_location" | (string & {});
    /**
     * ID of the Location that receives the merchandise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /** Name of the destination. */
    "name"?: string;
};
/**
 * What the buyer must do to hand merchandise back: the destination, instructions, line items, and
 * expiry.
 */
export type ReturnHandoffRequirement = {
    /**
     * Where the buyer sends the merchandise. Where the buyer sends returned merchandise: their own
     * address, a merchant location, or an external location.
     */
    "destination": ReturnHandoffDestination;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /** Instructions for the buyer on sending the merchandise. */
    "instructions"?: string;
    /**
     * Return lines and the quantities still expected. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity the buyer must hand back.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /** Format: int64. */
    "shipment_count"?: number;
    /**
     * Whether the buyer has started sending merchandise back. A requirement leaves
     * handoff_requirements entirely once it is satisfied, so there is no terminal status and an
     * empty array means nothing is waiting on the buyer. Value enum: "pending", "in_progress".
     */
    "status": "pending" | "in_progress" | (string & {});
};
/** An assessment of the condition of returned items. */
export type ReturnInspection = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
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
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. [] (Value): {@link ReturnDisposition}. A decision
     * about how returned merchandise will be handled.
     */
    "generated_dispositions": Array<ReturnDisposition>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "inspected_at": string;
    /**
     * Location where the returned merchandise was inspected. Must match the receipt
     * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inspection_location_id": string;
    /**
     * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection result for
     * a returned item.
     */
    "line_items": Array<ReturnInspectionLineItem>;
    /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Unique identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "return_inspection_id": string;
    /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
    "return_receipt_id": string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. anyOf[1]
     * (Value): {@link ReturnSourceSystem}. The system a return event came from, such as a point of
     * sale or warehouse system, with its own identifier. anyOf[2] (Value): null.
     */
    "source_system": ((ReturnSourceSystem) | (null));
    /**
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded".
     */
    "status": "current" | "superseded" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "superseded_at"?: string;
    /**
     * ID of the inspection that corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
     */
    "superseded_by_return_inspection_id"?: string;
    /** ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". */
    "supersedes_return_inspection_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. minimum: 1.
     */
    "version": number;
};
export type ReturnInspectionAcceptanceDecidedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
            "generated_dispositions": Array<ReturnDisposition>;
            "inspected_at": string;
            "inspection_location_id": string;
            "line_items": Array<ReturnInspectionLineItem>;
            "return_id": string;
            "return_inspection_id": string;
            "return_receipt_id": string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_inspection_id"?: string;
            "supersedes_return_inspection_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnInspection>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_inspection.acceptance_decided";
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
            "generated_dispositions": Array<ReturnDisposition>;
            "inspected_at": string;
            "inspection_location_id": string;
            "line_items": Array<ReturnInspectionLineItem>;
            "return_id": string;
            "return_inspection_id": string;
            "return_receipt_id": string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_inspection_id"?: string;
            "supersedes_return_inspection_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnInspection>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_inspection.acceptance_decided";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_inspection.acceptance_decided";
});
/**
 * The `return_inspection.acceptance_decided` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type ReturnInspectionAcceptanceDecidedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.inspection_location_id (Required): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.line_items (Required): Array of {@link
     * ReturnInspectionLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item. object.return_id
     * (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string. Unique
     * identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_receipt_id (Required): string. ID of the
     * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_inspection_id (Optional): string. ID of the inspection that
     * corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.supersedes_return_inspection_id (Optional):
     * string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
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
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". inspection_location_id (Required): string. Location where the
         * returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". line_items (Required): Array of {@link
         * ReturnInspectionLineItem}. The lines recorded. line_items[] (Value): {@link
         * ReturnInspectionLineItem}. The inspection result for a returned item. return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id (Required): string. Unique
         * identifier for this return inspection, prefixed `retins_`. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_receipt_id (Required): string. ID of the
         * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". source_system
         * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
         * warehouse system, with its own identifier. source_system.anyOf[2] (Value): null. status
         * (Required): string. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". superseded_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_by_return_inspection_id (Optional): string. ID of the inspection that
         * corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". supersedes_return_inspection_id (Optional): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
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
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "inspected_at": string;
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inspection_location_id": string;
            /**
             * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection
             * result for a returned item.
             */
            "line_items": Array<ReturnInspectionLineItem>;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string;
            /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "return_receipt_id": string;
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
             * ID of the inspection that corrected this one. Absent while it is current. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "superseded_by_return_inspection_id"?: string;
            /**
             * ID of the inspection this one corrects. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "supersedes_return_inspection_id"?: string;
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnInspection>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_inspection.acceptance_decided". */
    "event_type"?: "return_inspection.acceptance_decided";
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
 * The `return_inspection.acceptance_decided` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type ReturnInspectionAcceptanceDecidedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.inspection_location_id (Required): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.line_items (Required): Array of {@link
     * ReturnInspectionLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item. object.return_id
     * (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string. Unique
     * identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_receipt_id (Required): string. ID of the
     * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_inspection_id (Optional): string. ID of the inspection that
     * corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.supersedes_return_inspection_id (Optional):
     * string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
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
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". inspection_location_id (Required): string. Location where the
         * returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". line_items (Required): Array of {@link
         * ReturnInspectionLineItem}. The lines recorded. line_items[] (Value): {@link
         * ReturnInspectionLineItem}. The inspection result for a returned item. return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id (Required): string. Unique
         * identifier for this return inspection, prefixed `retins_`. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_receipt_id (Required): string. ID of the
         * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". source_system
         * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
         * warehouse system, with its own identifier. source_system.anyOf[2] (Value): null. status
         * (Required): string. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". superseded_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_by_return_inspection_id (Optional): string. ID of the inspection that
         * corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". supersedes_return_inspection_id (Optional): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
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
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "inspected_at": string;
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inspection_location_id": string;
            /**
             * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection
             * result for a returned item.
             */
            "line_items": Array<ReturnInspectionLineItem>;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string;
            /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "return_receipt_id": string;
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
             * ID of the inspection that corrected this one. Absent while it is current. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "superseded_by_return_inspection_id"?: string;
            /**
             * ID of the inspection this one corrects. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "supersedes_return_inspection_id"?: string;
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnInspection>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_inspection.acceptance_decided". */
    "event_type"?: "return_inspection.acceptance_decided";
});
export type ReturnInspectionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
            "generated_dispositions": Array<ReturnDisposition>;
            "inspected_at": string;
            "inspection_location_id": string;
            "line_items": Array<ReturnInspectionLineItem>;
            "return_id": string;
            "return_inspection_id": string;
            "return_receipt_id": string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_inspection_id"?: string;
            "supersedes_return_inspection_id"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_inspection.created";
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
            "generated_dispositions": Array<ReturnDisposition>;
            "inspected_at": string;
            "inspection_location_id": string;
            "line_items": Array<ReturnInspectionLineItem>;
            "return_id": string;
            "return_inspection_id": string;
            "return_receipt_id": string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_inspection_id"?: string;
            "supersedes_return_inspection_id"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_inspection.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_inspection.created";
});
/**
 * The `return_inspection.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnInspectionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.inspection_location_id (Required): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.line_items (Required): Array of {@link
     * ReturnInspectionLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item. object.return_id
     * (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string. Unique
     * identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_receipt_id (Required): string. ID of the
     * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_inspection_id (Optional): string. ID of the inspection that
     * corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.supersedes_return_inspection_id (Optional):
     * string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
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
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". inspection_location_id (Required): string. Location where the
         * returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". line_items (Required): Array of {@link
         * ReturnInspectionLineItem}. The lines recorded. line_items[] (Value): {@link
         * ReturnInspectionLineItem}. The inspection result for a returned item. return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id (Required): string. Unique
         * identifier for this return inspection, prefixed `retins_`. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_receipt_id (Required): string. ID of the
         * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". source_system
         * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
         * warehouse system, with its own identifier. source_system.anyOf[2] (Value): null. status
         * (Required): string. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". superseded_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_by_return_inspection_id (Optional): string. ID of the inspection that
         * corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". supersedes_return_inspection_id (Optional): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
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
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "inspected_at": string;
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inspection_location_id": string;
            /**
             * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection
             * result for a returned item.
             */
            "line_items": Array<ReturnInspectionLineItem>;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string;
            /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "return_receipt_id": string;
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
             * ID of the inspection that corrected this one. Absent while it is current. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "superseded_by_return_inspection_id"?: string;
            /**
             * ID of the inspection this one corrects. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "supersedes_return_inspection_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_inspection.created". */
    "event_type"?: "return_inspection.created";
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
 * The `return_inspection.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnInspectionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.inspection_location_id (Required): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.line_items (Required): Array of {@link
     * ReturnInspectionLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item. object.return_id
     * (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string. Unique
     * identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_receipt_id (Required): string. ID of the
     * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_inspection_id (Optional): string. ID of the inspection that
     * corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.supersedes_return_inspection_id (Optional):
     * string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
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
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". inspection_location_id (Required): string. Location where the
         * returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". line_items (Required): Array of {@link
         * ReturnInspectionLineItem}. The lines recorded. line_items[] (Value): {@link
         * ReturnInspectionLineItem}. The inspection result for a returned item. return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id (Required): string. Unique
         * identifier for this return inspection, prefixed `retins_`. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_receipt_id (Required): string. ID of the
         * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". source_system
         * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
         * warehouse system, with its own identifier. source_system.anyOf[2] (Value): null. status
         * (Required): string. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". superseded_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_by_return_inspection_id (Optional): string. ID of the inspection that
         * corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". supersedes_return_inspection_id (Optional): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
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
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "inspected_at": string;
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inspection_location_id": string;
            /**
             * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection
             * result for a returned item.
             */
            "line_items": Array<ReturnInspectionLineItem>;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string;
            /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "return_receipt_id": string;
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
             * ID of the inspection that corrected this one. Absent while it is current. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "superseded_by_return_inspection_id"?: string;
            /**
             * ID of the inspection this one corrects. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "supersedes_return_inspection_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_inspection.created". */
    "event_type"?: "return_inspection.created";
});
/** The inspection result for a returned item. */
export type ReturnInspectionLineItem = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "acceptance_decided_at"?: string;
    /**
     * Who made the acceptance decision. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "acceptance_decided_by"?: ReturnActor;
    /**
     * Why the units were accepted or rejected after review. Value enum: "inspection_result",
     * "return_policy", "manual_review", "other".
     */
    "acceptance_decision_reason"?: "inspection_result" | "return_policy" | "manual_review" | "other" | (string & {});
    /** Detail about `acceptance_decision_reason`. */
    "acceptance_decision_reason_message"?: string;
    /**
     * Whether the inspected units were accepted, rejected, or need a merchant's decision. Value
     * enum: "accepted", "rejected", "review_required".
     */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "available_disposition_quantity": number;
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     */
    "condition": "new"
        | "unopened"
        | "opened"
        | "used"
        | "damaged"
        | "defective"
        | "incomplete"
        | "undetermined"
        | (string & {});
    /**
     * What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other". [] (Value): string. Value enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other".
     */
    "finding_codes": Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other"
        | (string & {})>;
    /** Note for your own team about this line. */
    "internal_note"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** ID of the inspection the line belongs to. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". */
    "return_inspection_id": string;
    /**
     * Unique identifier for this return inspection line item, prefixed `retinli_`. Example:
     * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id": string;
    /** ID of the Return line inspected. Example: "retli_01KEZF7C00R813VR7ECXS062QG". */
    "return_line_item_id"?: string;
    /** ID of the receipt line inspected. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". */
    "return_receipt_line_item_id": string;
    /** [] enum: "decide". [] (Value): string.  Value enum: "decide". */
    "supported_actions": Array<"decide" | (string & {})>;
};
/**
 * The inspection result for one received return line: acceptance status, condition, and findings.
 */
export type ReturnInspectionLineItemRequest = {
    /**
     * Whether the inspected units were accepted, rejected, or need a merchant's decision. Value
     * enum: "accepted", "rejected", "review_required".
     */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     */
    "condition": "new"
        | "unopened"
        | "opened"
        | "used"
        | "damaged"
        | "defective"
        | "incomplete"
        | "undetermined"
        | (string & {});
    /**
     * What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other". [] (Value): string. Value enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other".
     */
    "finding_codes"?: Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other"
        | (string & {})>;
    /** Note for your own team about this line. minLength: 1. */
    "internal_note"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of the Return line inspected. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * ID of the receipt line inspected. minLength: 1. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id": string;
    /**
     * Why the receipt line was verified against the Return line. Value enum:
     * "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed", "merchant_review",
     * "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** Detail about `verification_reason`. minLength: 1. */
    "verification_reason_message"?: string;
};
/**
 * The inspection result for one received return line: acceptance status, condition, and findings.
 */
export type ReturnInspectionLineItemRequestInput = {
    /**
     * Whether the inspected units were accepted, rejected, or need a merchant's decision. Value
     * enum: "accepted", "rejected", "review_required".
     */
    "acceptance_status": "accepted" | "rejected" | "review_required";
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     */
    "condition": "new" | "unopened" | "opened" | "used" | "damaged" | "defective" | "incomplete" | "undetermined";
    /**
     * What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other". [] (Value): string. Value enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other".
     */
    "finding_codes"?: Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other">;
    /** Note for your own team about this line. minLength: 1. */
    "internal_note"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of the Return line inspected. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * ID of the receipt line inspected. minLength: 1. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id": string;
    /**
     * Why the receipt line was verified against the Return line. Value enum:
     * "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed", "merchant_review",
     * "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other";
    /** Detail about `verification_reason`. minLength: 1. */
    "verification_reason_message"?: string;
};
export type ReturnInspectionSupersededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
            "generated_dispositions": Array<ReturnDisposition>;
            "inspected_at": string;
            "inspection_location_id": string;
            "line_items": Array<ReturnInspectionLineItem>;
            "return_id": string;
            "return_inspection_id": string;
            "return_receipt_id": string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_inspection_id"?: string;
            "supersedes_return_inspection_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnInspection>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_inspection.superseded";
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
            "generated_dispositions": Array<ReturnDisposition>;
            "inspected_at": string;
            "inspection_location_id": string;
            "line_items": Array<ReturnInspectionLineItem>;
            "return_id": string;
            "return_inspection_id": string;
            "return_receipt_id": string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_inspection_id"?: string;
            "supersedes_return_inspection_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnInspection>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_inspection.superseded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_inspection.superseded";
});
/**
 * The `return_inspection.superseded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnInspectionSupersededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.inspection_location_id (Required): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.line_items (Required): Array of {@link
     * ReturnInspectionLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item. object.return_id
     * (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string. Unique
     * identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_receipt_id (Required): string. ID of the
     * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_inspection_id (Optional): string. ID of the inspection that
     * corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.supersedes_return_inspection_id (Optional):
     * string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
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
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". inspection_location_id (Required): string. Location where the
         * returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". line_items (Required): Array of {@link
         * ReturnInspectionLineItem}. The lines recorded. line_items[] (Value): {@link
         * ReturnInspectionLineItem}. The inspection result for a returned item. return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id (Required): string. Unique
         * identifier for this return inspection, prefixed `retins_`. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_receipt_id (Required): string. ID of the
         * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". source_system
         * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
         * warehouse system, with its own identifier. source_system.anyOf[2] (Value): null. status
         * (Required): string. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". superseded_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_by_return_inspection_id (Optional): string. ID of the inspection that
         * corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". supersedes_return_inspection_id (Optional): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
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
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "inspected_at": string;
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inspection_location_id": string;
            /**
             * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection
             * result for a returned item.
             */
            "line_items": Array<ReturnInspectionLineItem>;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string;
            /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "return_receipt_id": string;
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
             * ID of the inspection that corrected this one. Absent while it is current. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "superseded_by_return_inspection_id"?: string;
            /**
             * ID of the inspection this one corrects. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "supersedes_return_inspection_id"?: string;
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnInspection>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_inspection.superseded". */
    "event_type"?: "return_inspection.superseded";
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
 * The `return_inspection.superseded` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type ReturnInspectionSupersededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.inspection_location_id (Required): string. Location where the
     * returned merchandise was inspected. Must match the receipt receiving_location_id. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.line_items (Required): Array of {@link
     * ReturnInspectionLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item. object.return_id
     * (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_id (Required): string. Unique
     * identifier for this return inspection, prefixed `retins_`. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_receipt_id (Required): string. ID of the
     * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_inspection_id (Optional): string. ID of the inspection that
     * corrected this one. Absent while it is current. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.supersedes_return_inspection_id (Optional):
     * string. ID of the inspection this one corrects. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
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
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. inspected_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". inspection_location_id (Required): string. Location where the
         * returned merchandise was inspected. Must match the receipt receiving_location_id.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". line_items (Required): Array of {@link
         * ReturnInspectionLineItem}. The lines recorded. line_items[] (Value): {@link
         * ReturnInspectionLineItem}. The inspection result for a returned item. return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_id (Required): string. Unique
         * identifier for this return inspection, prefixed `retins_`. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_receipt_id (Required): string. ID of the
         * receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". source_system
         * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation.
         * `null` when no source system was recorded. source_system.anyOf[1] (Value): {@link
         * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
         * warehouse system, with its own identifier. source_system.anyOf[2] (Value): null. status
         * (Required): string. Whether this is the current observation of these units or a
         * correction replaced it. Value enum: "current", "superseded". superseded_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * superseded_by_return_inspection_id (Optional): string. ID of the inspection that
         * corrected this one. Absent while it is current. Example:
         * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". supersedes_return_inspection_id (Optional): string.
         * ID of the inspection this one corrects. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
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
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "inspected_at": string;
            /**
             * Location where the returned merchandise was inspected. Must match the receipt
             * receiving_location_id. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inspection_location_id": string;
            /**
             * The lines recorded. [] (Value): {@link ReturnInspectionLineItem}. The inspection
             * result for a returned item.
             */
            "line_items": Array<ReturnInspectionLineItem>;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return inspection, prefixed `retins_`. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_id": string;
            /** ID of the receipt being inspected. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "return_receipt_id": string;
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
             * ID of the inspection that corrected this one. Absent while it is current. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "superseded_by_return_inspection_id"?: string;
            /**
             * ID of the inspection this one corrects. Example:
             * "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "supersedes_return_inspection_id"?: string;
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
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnInspection>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_inspection.superseded". */
    "event_type"?: "return_inspection.superseded";
});
export type ReturnInspectionsDecideLineItemParams = (InputValue<DecideReturnInspectionLineItemRequestInput>)
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
export type ReturnInspectionsGetParams = DisputesAcceptParams;
export type ReturnInspectionsListParams = {
    /**
     * Filter by acceptance status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "accepted", "rejected", "review_required". Value enum: "accepted",
     * "rejected", "review_required". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "accepted", "rejected", "review_required". anyOf[1][] (Value): string. Value enum:
     * "accepted", "rejected", "review_required". anyOf[2] (Value): string. Value enum: "accepted",
     * "rejected", "review_required".
     */
    "acceptance_status"?: InputValue<("accepted" | "rejected" | "review_required")
        | readonly ("accepted" | "rejected" | "review_required")[]>;
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
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Inclusive lower bound on inspected_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "inspected_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on inspected_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "inspected_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by inspection location id. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inspection_location_id"?: InputValue<string>;
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
    /** Search by return inspection ID or external reference ID. */
    "query"?: InputValue<string>;
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
     * Filter by return receipt id. pattern: ^retrc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "return_receipt_id"?: InputValue<string>;
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
/** Puts in-transit stock back at the origin location. */
export type ReturnInventoryTransferToOriginRequest = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_returned_quantity (Required): integer.
     * Cumulative quantity that should have returned to the origin. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should have returned to the origin. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_returned_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** Puts in-transit stock back at the origin location. */
export type ReturnInventoryTransferToOriginRequestInput = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_returned_quantity (Required): integer.
     * Cumulative quantity that should have returned to the origin. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should have returned to the origin. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_returned_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/**
 * Start from the pinned policy proposal recomputed for approved_quantity when the line has a
 * policy evaluation and the proposal can be built. Otherwise start with return_required_quantity
 * equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement,
 * no_monetary_action, and store_credit in that order regardless of whether the original payment is
 * refundable, no automatic_resolution_type, is_inspection_required false, and no
 * receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types
 * replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null
 * to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise
 * is required and inspection is required, after_receipt when merchandise is required without
 * inspection, or after_approval when no merchandise is required. Validate the merged decision for
 * quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A
 * pinned policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
 */
export type ReturnLineDecision = ({
    /**
     * Optional replacement for the entire starting list. Defaults to the buildable pinned policy
     * proposal; otherwise refund, exchange, replacement, no_monetary_action, and store_credit in
     * that order, independent of the original payment's refundability. The resulting list must be
     * valid and non-empty when approved_quantity is above zero. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Required whole-number quantity from zero through the line's requested_quantity; fractional
     * quantities are not supported. When approved_quantity is below requested_quantity, send
     * decline_reason; decline_reason_message is optional. Both decline fields are forbidden when
     * all requested quantity is approved. Format: int64. minimum: 0.
     */
    "approved_quantity": number;
    /**
     * Optional refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically. Omit to keep the policy proposal's value, or the absent value from no-policy
     * defaults. Send null to resolve the line manually; clearing a policy proposal's automatic
     * value requires override_reason. Must be in the resulting allowed_resolution_types. Exchange
     * and replacement cannot be automated. An unavailable automatic refund or store credit fails
     * with 409 ACTION_NOT_ALLOWED and reason refund_unavailable or store_credit_unavailable. Value
     * enum: "refund", "store_credit", "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null | (string & {}) | null;
    /**
     * Why the line's declined quantity is declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /**
     * Optional explanation accompanying decline_reason, up to 2048 characters (Unicode code
     * points), counted before normalization. Requires decline_reason and is forbidden when all
     * requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Optional inspection requirement. Defaults to the buildable pinned policy proposal or false
     * when no proposal can be built. The resulting requirement must be reachable with the merged
     * merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /**
     * Optional explanation accompanying override_reason. Requires override_reason and is forbidden
     * without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Optional receiving Location with a postal address. Defaults to the buildable pinned policy
     * proposal or no location when no proposal can be built. Required when the resulting
     * return_required_quantity is above zero and there is no starting location. A process receipt
     * does not supply the decision's location. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Optional gate for every resolution type. Defaults to the policy proposal's timing when set.
     * After merging supplied fields, an unset timing becomes after_inspection when
     * return_required_quantity is above zero and inspection is required, after_receipt when
     * return_required_quantity is above zero without inspection, or after_approval when
     * return_required_quantity is zero. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * ID of the Return line to act on. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: number;
})
    & (((unknown)
    | ({
    /**
     * Why the line's declined quantity is declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
     */
    "decline_reason": "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
})
    | (Record<string, unknown>)))
    & (((unknown)
    | ({
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason": "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
})
    | (Record<string, unknown>)));
/**
 * Start from the pinned policy proposal recomputed for approved_quantity when the line has a
 * policy evaluation and the proposal can be built. Otherwise start with return_required_quantity
 * equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement,
 * no_monetary_action, and store_credit in that order regardless of whether the original payment is
 * refundable, no automatic_resolution_type, is_inspection_required false, and no
 * receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types
 * replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null
 * to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise
 * is required and inspection is required, after_receipt when merchandise is required without
 * inspection, or after_approval when no merchandise is required. Validate the merged decision for
 * quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A
 * pinned policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
 */
export type ReturnLineDecisionInput = ({
    /**
     * Optional replacement for the entire starting list. Defaults to the buildable pinned policy
     * proposal; otherwise refund, exchange, replacement, no_monetary_action, and store_credit in
     * that order, independent of the original payment's refundability. The resulting list must be
     * valid and non-empty when approved_quantity is above zero. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Required whole-number quantity from zero through the line's requested_quantity; fractional
     * quantities are not supported. When approved_quantity is below requested_quantity, send
     * decline_reason; decline_reason_message is optional. Both decline fields are forbidden when
     * all requested quantity is approved. Format: int64. minimum: 0.
     */
    "approved_quantity": number;
    /**
     * Optional refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically. Omit to keep the policy proposal's value, or the absent value from no-policy
     * defaults. Send null to resolve the line manually; clearing a policy proposal's automatic
     * value requires override_reason. Must be in the resulting allowed_resolution_types. Exchange
     * and replacement cannot be automated. An unavailable automatic refund or store credit fails
     * with 409 ACTION_NOT_ALLOWED and reason refund_unavailable or store_credit_unavailable. Value
     * enum: "refund", "store_credit", "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null;
    /**
     * Why the line's declined quantity is declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other";
    /**
     * Optional explanation accompanying decline_reason, up to 2048 characters (Unicode code
     * points), counted before normalization. Requires decline_reason and is forbidden when all
     * requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Optional inspection requirement. Defaults to the buildable pinned policy proposal or false
     * when no proposal can be built. The resulting requirement must be reachable with the merged
     * merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason"?: "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
    /**
     * Optional explanation accompanying override_reason. Requires override_reason and is forbidden
     * without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Optional receiving Location with a postal address. Defaults to the buildable pinned policy
     * proposal or no location when no proposal can be built. Required when the resulting
     * return_required_quantity is above zero and there is no starting location. A process receipt
     * does not supply the decision's location. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Optional gate for every resolution type. Defaults to the policy proposal's timing when set.
     * After merging supplied fields, an unset timing becomes after_inspection when
     * return_required_quantity is above zero and inspection is required, after_receipt when
     * return_required_quantity is above zero without inspection, or after_approval when
     * return_required_quantity is zero. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /**
     * ID of the Return line to act on. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: number;
})
    & (((({
    "decline_reason_message"?: never;
}))
    | ({
    /**
     * Why the line's declined quantity is declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
     */
    "decline_reason": "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other";
})))
    & (((({
    "override_reason_message"?: never;
}))
    | ({
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason": "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
})));
/** An item included in a return request. */
export type ReturnLineItem = {
    /**
     * Inspected units that were accepted. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "accepted_quantity": number;
    /**
     * Resolution types that can settle this line's approved quantity. [] enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value
     * enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Units the decision approved. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "approved_quantity": number;
    /**
     * The refund, store_credit, or no_monetary_action resolution Flint creates and confirms
     * automatically. Absent when the merchant resolves manually. Example: "refund". Value enum:
     * "refund", "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Approved quantity that can still be assigned to a new resolution. Every non-canceled
     * resolution reserves its line quantity, including proposed, pending, action-required, failed,
     * and fulfilled resolutions. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "available_resolution_quantity": number;
    /**
     * Components of the bundle the line was sold from. [] (Value): {@link BundleComponent}. An
     * item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** Note the buyer gave about this line. Some return reasons require one. */
    "buyer_note"?: string;
    /**
     * Approved units canceled later. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "canceled_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Who recorded the decision on this line. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "decided_by"?: ReturnActor;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "decision_at"?: string;
    /**
     * Why the line's declined quantity was declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Detail sent with the decline. */
    "decline_reason_message"?: string;
    /**
     * Units the decision declined. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "declined_quantity": number;
    /** Description of the item as sold. */
    "description"?: string;
    /**
     * Units with a successful disposition. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "dispositioned_quantity": number;
    /**
     * How the pinned return policy judged this line when the Return was created, with the policy
     * revision it used. Whether a return line is eligible under policy, with the eligible
     * quantity, allowed resolution types, and any policy adjustments.
     */
    "eligibility": ReturnLineItemEligibility;
    /**
     * Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there
     * is no related fulfillment. anyOf[1] (Value): {@link Fulfillment}. Work required to deliver
     * an order's items. anyOf[2] (Value): null.
     */
    "fulfillment"?: ((Fulfillment) | (null));
    /**
     * ID of the fulfillment the units were delivered in. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /**
     * Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities
     * are not supported. Format: int64.
     */
    "handed_off_quantity": number;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Units that have been inspected. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "inspected_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "inspection_waived_at"?: string;
    /**
     * Who waived inspection for this line. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "inspection_waived_by"?: ReturnActor;
    /**
     * Why inspection was waived for this line. Value enum: "policy_override",
     * "trusted_in_store_handoff", "merchant_review", "other".
     */
    "inspection_waiver_reason"?: "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    /** Detail sent when inspection was waived. */
    "inspection_waiver_reason_message"?: string;
    /** Whether returned units of this line must be inspected. */
    "is_inspection_required"?: boolean;
    /**
     * Whether the decision overrode the pinned return policy's proposal. `override_reason` says
     * why.
     */
    "is_policy_overridden": boolean;
    /**
     * Where this line's merchandise stands, from handoff through disposition. Value enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved".
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
        | (string & {});
    /**
     * Modifiers selected on the order line, with their prices. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /** ID of the order line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "overridden_at"?: string;
    /**
     * Who recorded the override. Who performed a return action: a buyer, merchant, integration, or
     * the system, with an optional ID.
     */
    "overridden_by"?: ReturnActor;
    /**
     * Why the decision overrode the pinned return policy's proposal. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Detail sent with the override. */
    "override_reason_message"?: string;
    /**
     * ID of the catalog product the item was sold from. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Units that arrived. Whole-number quantity; fractional quantities are not supported. Format:
     * int64.
     */
    "received_quantity": number;
    /**
     * ID of the Location the buyer sends the merchandise to. Absent when none has to come back.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Inspected units that were rejected. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "rejected_quantity": number;
    /**
     * Committed resolution execution gate, filled for every approved line: after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required, unless the policy or
     * decision sets a timing explicitly. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Units the request asked to return. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "requested_quantity": number;
    /**
     * Outcome requested for this line when it was created. Absent when none was requested. Value
     * enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * Whether the value for this line's approved quantity has been delivered. Value enum:
     * "not_selected", "pending", "requires_action", "fulfilled", "failed".
     */
    "resolution_status": "not_selected" | "pending" | "requires_action" | "fulfilled" | "failed" | (string & {});
    /**
     * Units whose resolution has finished. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "resolved_quantity": number;
    /** ID of the Return this line belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Unique identifier for this return line item, prefixed `retli_`. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Present only when `expand` includes `line_items.return_reason`; `null` when expanded and
     * there is no related return reason. anyOf[1] (Value): {@link ReturnReason}. A reason
     * customers can select when requesting a return. anyOf[2] (Value): null.
     */
    "return_reason"?: ((ReturnReason) | (null));
    /**
     * Handle of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it.
     */
    "return_reason_handle": string;
    /** ID of the reason chosen for this line. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". */
    "return_reason_id": string;
    /**
     * Name of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it.
     */
    "return_reason_name": string;
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64.
     */
    "return_required_quantity": number;
    /**
     * IDs of the resolutions that include this line, oldest first, including failed and canceled
     * resolutions. [] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_ids": Array<string>;
    /**
     * Value of the line's units, fixed when the line was created: what the buyer paid for them,
     * less what was already refunded or returned. The value of a return line: unit price,
     * subtotal, discount, tax, and total.
     */
    "return_value": ReturnLineItemValue;
    /**
     * Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional
     * quantities are not supported. Format: int64.
     */
    "review_required_quantity": number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Where this line stands. Same values and meanings as the Return's `status`, applied to the
     * line. Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * [] enum: "cancel", "waive_inspection". [] (Value): string. Value enum: "cancel",
     * "waive_inspection".
     */
    "supported_actions": Array<"cancel" | "waive_inspection" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/**
 * The pinned policy decision recomputed for based_on_quantity. A decide with only
 * approved_quantity commits these values. Policy automatic resolution selects the policy
 * automatic_resolution_type for policy_default or the line's requested_resolution_type for
 * buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still
 * exists without automatic_resolution_type, so resolution is manual. Manual policy resolution also
 * has no automatic_resolution_type. An unset release_timing is filled with after_inspection when
 * merchandise and inspection are required, after_receipt when merchandise is required without
 * inspection, or after_approval when no merchandise is required.
 */
export type ReturnLineItemDecisionProposal = {
    /**
     * Resolution types the proposal allows. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". [] (Value): string. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * The refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically, using the policy default or buyer request according to the policy selection
     * mode. Absent for manual resolution, including buyer_requested when the line has no
     * requested_resolution_type. Example: "refund". Value enum: "refund", "store_credit",
     * "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "based_on_quantity": number;
    /** Whether the proposal requires inspection of the returned units. */
    "is_inspection_required": boolean;
    /**
     * ID of the Location the proposal sends returned merchandise to. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * The policy timing, or after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when no
     * merchandise is required. This fill never counts as a policy deviation. Applies to every
     * resolution type, including exchanges and replacements. manual is held until a merchant calls
     * POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "return_required_quantity": number;
};
/**
 * Whether a return line is eligible under policy, with the eligible quantity, allowed resolution
 * types, and any policy adjustments.
 */
export type ReturnLineItemEligibility = {
    /**
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Terms the policy proposes if the line is approved. Absent when the policy can't propose any.
     * The pinned policy decision recomputed for based_on_quantity. A decide with only
     * approved_quantity commits these values. Policy automatic resolution selects the policy
     * automatic_resolution_type for policy_default or the line's requested_resolution_type for
     * buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still
     * exists without automatic_resolution_type, so resolution is manual. Manual policy resolution
     * also has no automatic_resolution_type. An unset release_timing is filled with
     * after_inspection when merchandise and inspection are required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required.
     */
    "decision_proposal"?: ReturnLineItemDecisionProposal;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "eligible_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * The matched policy's declared exclusion reason. Present exactly when reason is
     * policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /**
     * Fees or credits the policy proposes for this line, to add to a resolution as adjustments. []
     * (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes
     * for a line, calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /** Explanation of `reason`. */
    "reason_message": string;
    /**
     * ID of the policy that judged the line. Absent when none matched. Example:
     * "rpol_01KEZF7C00H8C042BEK6HBRANX".
     */
    "return_policy_id"?: string;
    /**
     * ID of the policy revision that judged the line. Absent when none matched. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "return_policy_revision_id"?: string;
    /**
     * Who pays return shipping under the policy. Null when the line is not eligible, requires no
     * merchandise return, or the policy does not specify a payer. This field does not promise a
     * prepaid label. Value enum: "merchant", "buyer", null.
     */
    "return_shipping_payer": "merchant" | "buyer" | null | (string & {}) | null;
    /**
     * Whether the policy lets the buyer return this. `review_required` means the merchant decides.
     * Value enum: "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * An order line item to return, with the quantity, return reason, and optionally a note and the
 * resolution the buyer wants.
 */
export type ReturnLineItemRequest = {
    /** Note about this line. Some return reasons require one. minLength: 1. */
    "buyer_note"?: string;
    /**
     * ID of the fulfillment the units were delivered in. minLength: 1. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * ID of the order line item being returned. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Outcome requested for this line. Eligibility checks it against the policy's allowed
     * resolution types. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * ID of the return reason for this line. The reason must be active. minLength: 1. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id": string;
};
/**
 * An order line item to return, with the quantity, return reason, and optionally a note and the
 * resolution the buyer wants.
 */
export type ReturnLineItemRequestInput = {
    /** Note about this line. Some return reasons require one. minLength: 1. */
    "buyer_note"?: string;
    /**
     * ID of the fulfillment the units were delivered in. minLength: 1. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * ID of the order line item being returned. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Outcome requested for this line. Eligibility checks it against the policy's allowed
     * resolution types. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /**
     * ID of the return reason for this line. The reason must be active. minLength: 1. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id": string;
};
/** The value of a return line: unit price, subtotal, discount, tax, and total. */
export type ReturnLineItemValue = {
    /**
     * Discount on the returned units. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Subtotal of the returned units, before discount and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax on the returned units. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Subtotal minus discount, plus tax. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Price of one returned unit. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
export type ReturnPoliciesCreateParams = (InputValue<CreateReturnPolicyRequestInput>)
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
export type ReturnPoliciesCreateRevisionParams = (InputValue<PublishReturnPolicyRevisionRequestInput>)
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
export type ReturnPoliciesDeleteParams = {
    /**
     * Optional. The policy's current version. If it changed, the archive fails with 409
     * VERSION_CONFLICT and nothing changes. Format: int64. minimum: 1. maximum: 9007199254740991.
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
export type ReturnPoliciesGetParams = {
    /**
     * Include related objects in the response. Supported expansions: current_revision. Expanded
     * relationships are returned only when explicitly requested and authorized. Limits: at most 10
     * unique expand paths per request. [] enum: "current_revision". Value enum:
     * "current_revision". anyOf[1] (Value): Array of string. [] enum: "current_revision".
     * anyOf[1][] (Value): string. Value enum: "current_revision". anyOf[2] (Value): string. Value
     * enum: "current_revision".
     */
    "expand"?: InputValue<("current_revision") | readonly ("current_revision")[]>;
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
export type ReturnPoliciesGetRevisionParams = DisputesAcceptParams;
export type ReturnPoliciesListParams = {
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
    /** Search by return policy ID, name, or external reference ID. */
    "query"?: InputValue<string>;
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
     * Include related objects in the response. Supported expansions: current_revision. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum:
     * "current_revision". Value enum: "current_revision". anyOf[1] (Value): Array of string. []
     * enum: "current_revision". anyOf[1][] (Value): string. Value enum: "current_revision".
     * anyOf[2] (Value): string. Value enum: "current_revision".
     */
    "expand"?: InputValue<("current_revision") | readonly ("current_revision")[]>;
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
export type ReturnPoliciesListRevisionsParams = {
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
export type ReturnPoliciesUpdateParams = (InputValue<UpdateReturnPolicyRequestInput>)
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
/** Rules governing whether and how purchased items can be returned. */
export type ReturnPolicy = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ID of the revision Flint judges new requests by. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "current_return_policy_revision_id": string;
    /**
     * Present only when `expand` includes `current_revision`; `null` when expanded and there is no
     * related return policy revision. anyOf[1] (Value): {@link ReturnPolicyRevision}. A saved
     * revision of a return policy. anyOf[2] (Value): null.
     */
    "current_revision"?: ((ReturnPolicyRevision) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Name of the policy. */
    "name": string;
    /**
     * Unique identifier for this return policy, prefixed `rpol_`. Example:
     * "rpol_01KEZF7C00H8C042BEK6HBRANX".
     */
    "return_policy_id": string;
    /**
     * active policies apply to new Returns; inactive policies do not. Toggle active and inactive
     * with PATCH status. Retire either with DELETE /v1/return-policies/{return_policy_id}. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. minimum: 0.
     */
    "version": number;
};
/**
 * A fee or credit a return policy proposes for a line, calculated as a flat amount or a percent.
 */
export type ReturnPolicyAdjustmentProposal = {
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
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "based_on_quantity"?: number;
    /**
     * The amount worked out for the line's returned quantity. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "calculated_amount_money"?: MoneyValue;
    /** How the amount is worked out. Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent" | (string & {});
    /**
     * Fixed amount proposed for the line, whatever the quantity. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /**
     * Percentage points of the returned units' subtotal, such as `10` for 10%. Format: double.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * Whether the amount reduces or increases what the buyer receives. Value enum: "deduction",
     * "credit".
     */
    "value_effect": "deduction" | "credit" | (string & {});
};
/**
 * How a return policy evaluated a return request: overall status and reason, the policy revision
 * used, and per-line results.
 */
export type ReturnPolicyEvaluation = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * Eligibility of each line asked about. [] (Value): {@link ReturnPolicyEvaluationLineItem}.
     * The policy result for one return line: status, eligible quantity, allowed resolution types,
     * and handling requirements such as inspection.
     */
    "line_items": Array<ReturnPolicyEvaluationLineItem>;
    /**
     * Why the selection got this result. Value enum: "eligible_under_policy",
     * "manual_review_required", "return_window_expired", "quantity_unavailable",
     * "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict",
     * "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /** Explanation of `reason`. */
    "reason_message": string;
    /**
     * ID of the policy that judged the lines. Absent when none matched. Example:
     * "rpol_01KEZF7C00H8C042BEK6HBRANX".
     */
    "return_policy_id"?: string;
    /**
     * ID of the policy revision that judged the lines. Absent when none matched. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "return_policy_revision_id"?: string;
    /**
     * Overall result for the selection. `review_required` when the lines differ. Value enum:
     * "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * The policy result for one return line: status, eligible quantity, allowed resolution types, and
 * handling requirements such as inspection.
 */
export type ReturnPolicyEvaluationLineItem = {
    /**
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Components of the bundle the line was sold from. [] (Value): {@link BundleComponent}. An
     * item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** Description of the item as sold. */
    "description"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "eligible_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * ID of the fulfillment the units were delivered in. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * The matched policy's declared exclusion reason. Present exactly when reason is
     * policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /** Whether the policy requires inspection of the returned units. */
    "is_inspection_required": boolean;
    /** Whether the policy requires the buyer to send the merchandise back. */
    "is_merchandise_return_required": boolean;
    /**
     * Modifiers selected on the order line, with their prices. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /** ID of the order line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /**
     * Fees or credits the policy proposes for this line, to add to a resolution as adjustments. []
     * (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes
     * for a line, calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * ID of the catalog product the item was sold from. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /**
     * ID of the Location the policy sends returned merchandise to. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Release gate for every resolution type, including exchanges and replacements. Released after
     * the Return is approved. Released after the buyer hands back the required merchandise.
     * Released after the required merchandise is received. Released after the required merchandise
     * passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release.
     * Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection",
     * "manual".
     */
    "release_timing": "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Whether the policy lets the buyer return this. `review_required` means the merchant decides.
     * Value enum: "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then
     * reasons with no categories, each group sorted by handle. [] (Value): string. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "suggested_return_reason_ids": Array<string>;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
/** A saved revision of a return policy. */
export type ReturnPolicyRevision = {
    /**
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * When this revision started judging requests: when it became current on an active policy, or
     * when its policy was first activated. Absent if it was never current while the policy was
     * active. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "effective_at"?: string;
    /**
     * What the policy decides for items it covers. Value enum: "eligible", "ineligible",
     * "review_required".
     */
    "eligibility_result": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /**
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode": "automatic" | "manual" | (string & {});
    /**
     * ID of the Location buyers send the merchandise to. Required when merchandise has to come
     * back. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Release gate for every resolution type, including exchanges and replacements. Released after
     * the Return is approved. Released after the buyer hands back the required merchandise.
     * Released after the required merchandise is received. Released after the required merchandise
     * passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release.
     * Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection",
     * "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode"?: "automatic" | "manual" | (string & {});
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Fee proposed for each eligible line. Leave out for no fee. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /** ID of the policy this revision belongs to. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". */
    "return_policy_id": string;
    /**
     * Unique identifier for this return policy revision, prefixed `rpolv_`. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "return_policy_revision_id": string;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
};
/** The `ineligible` variant of `ReturnPolicyRevisionInput`. */
export type ReturnPolicyRevisionInputIneligible = ({
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "ineligible".
     */
    "eligibility_result": "ineligible" | (string & {});
    /**
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason": "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /**
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Fee proposed for each eligible line. Leave out for no fee. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & (({
    /** What the policy decides for items it covers. Value enum: "ineligible". */
    "eligibility_result": unknown;
    /**
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason": "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
}));
/** The `ineligible` variant of `ReturnPolicyRevisionInput`. */
export type ReturnPolicyRevisionInputIneligibleInput = ({
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "ineligible".
     */
    "eligibility_result": "ineligible";
    /**
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason": "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    /**
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /**
     * Fee proposed for each eligible line. Leave out for no fee. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicyRequestInput;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicyRequestInput;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindowRequestInput;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScopeRequestInput;
})
    & (({
    /** What the policy decides for items it covers. Value enum: "ineligible". */
    "eligibility_result": "ineligible";
    /**
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason": "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
})
    & (({
    "allowed_resolution_types"?: never;
})
    & ({
    "resolution_mode"?: never;
})
    & ({
    "release_timing"?: never;
})
    & ({
    "completion_mode"?: never;
})));
/**
 * The `eligible` variant of `ReturnPolicyRevisionInput`. The `review_required` variant of
 * `ReturnPolicyRevisionInput`.
 */
export type ReturnPolicyRevisionInputReturnable = ({
    /**
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
    "completion_mode": "manual" | "automatic" | (string & {});
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "eligible",
     * "review_required".
     */
    "eligibility_result": "eligible" | "review_required" | (string & {});
    /**
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Required whenever allowed_resolution_types contains refund or store_credit. For other types,
     * an omitted timing defaults to after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when
     * merchandise is not required. after_handoff and after_receipt require
     * is_merchandise_return_required, and after_inspection also requires is_inspection_required.
     * Applies to every resolution type, including exchanges and replacements. manual is held until
     * a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval",
     * "after_handoff", "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode": "automatic" | "manual" | (string & {});
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Fee proposed for each eligible line. Leave out for no fee. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & (({
    /** What the policy decides for items it covers. Value enum: "eligible", "review_required". */
    "eligibility_result": unknown;
    /**
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode": "automatic" | "manual" | (string & {});
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
    "completion_mode": "manual" | "automatic" | (string & {});
})
    & (((({
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "manual".
     */
    "resolution_mode"?: unknown;
}))
    | ({
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic".
     */
    "resolution_mode"?: unknown;
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode": "policy_default" | "buyer_requested" | (string & {});
})
    | (Record<string, unknown>)))
    & ((({
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money. Value enum: false.
     */
    "is_merchandise_return_required"?: unknown;
})
    | ({
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money. Value enum: true.
     */
    "is_merchandise_return_required"?: unknown;
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id": string;
})
    | (Record<string, unknown>))));
/**
 * The `eligible` variant of `ReturnPolicyRevisionInput`. The `review_required` variant of
 * `ReturnPolicyRevisionInput`.
 */
export type ReturnPolicyRevisionInputReturnableInput = ({
    /**
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
    "completion_mode": "manual" | "automatic";
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "eligible",
     * "review_required".
     */
    "eligibility_result": "eligible" | "review_required";
    /**
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Required whenever allowed_resolution_types contains refund or store_credit. For other types,
     * an omitted timing defaults to after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when
     * merchandise is not required. after_handoff and after_receipt require
     * is_merchandise_return_required, and after_inspection also requires is_inspection_required.
     * Applies to every resolution type, including exchanges and replacements. manual is held until
     * a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval",
     * "after_handoff", "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode": "automatic" | "manual";
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /**
     * Fee proposed for each eligible line. Leave out for no fee. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicyRequestInput;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicyRequestInput;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindowRequestInput;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScopeRequestInput;
})
    & (({
    /** What the policy decides for items it covers. Value enum: "eligible", "review_required". */
    "eligibility_result": "eligible" | "review_required";
    /**
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode": "automatic" | "manual";
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
    "completion_mode": "manual" | "automatic";
})
    & (((({
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "manual".
     */
    "resolution_mode"?: "manual";
})
    & (({
    "resolution_selection_mode"?: never;
}) & ({
    "automatic_resolution_type"?: never;
})))
    | ({
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic".
     */
    "resolution_mode"?: "automatic";
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode": "policy_default" | "buyer_requested";
})))
    & ((({
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money. Value enum: false.
     */
    "is_merchandise_return_required"?: false;
})
    | ({
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money. Value enum: true.
     */
    "is_merchandise_return_required"?: true;
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id": string;
})))
    & (({
    "ineligibility_reason"?: never;
})));
/**
 * The rules for a return policy revision: scope, eligibility, return window, approval and
 * resolution modes, shipping, and restocking fee.
 */
export type ReturnPolicyRevisionRequest = ({
    /**
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "eligible",
     * "ineligible", "review_required".
     */
    "eligibility_result": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /**
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Required whenever allowed_resolution_types contains refund or store_credit. For other types,
     * an omitted timing defaults to after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when
     * merchandise is not required. after_handoff and after_receipt require
     * is_merchandise_return_required, and after_inspection also requires is_inspection_required.
     * Applies to every resolution type, including exchanges and replacements. manual is held until
     * a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval",
     * "after_handoff", "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode"?: "automatic" | "manual" | (string & {});
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Fee proposed for each eligible line. Leave out for no fee. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & ((Exclude<ReturnPolicyRevisionInputIneligible & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyRevisionInputReturnable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The rules for a return policy revision: scope, eligibility, return window, approval and
 * resolution modes, shipping, and restocking fee.
 */
export type ReturnPolicyRevisionRequestInput = ({
    /**
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic";
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "eligible",
     * "ineligible", "review_required".
     */
    "eligibility_result": "eligible" | "ineligible" | "review_required";
    /**
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    /**
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Required whenever allowed_resolution_types contains refund or store_credit. For other types,
     * an omitted timing defaults to after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when
     * merchandise is not required. after_handoff and after_receipt require
     * is_merchandise_return_required, and after_inspection also requires is_inspection_required.
     * Applies to every resolution type, including exchanges and replacements. manual is held until
     * a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval",
     * "after_handoff", "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode"?: "automatic" | "manual";
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /**
     * Fee proposed for each eligible line. Leave out for no fee. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicyRequestInput;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicyRequestInput;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindowRequestInput;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScopeRequestInput;
})
    & ((Exclude<ReturnPolicyRevisionInputIneligibleInput & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyRevisionInputReturnableInput & object, readonly unknown[]>));
/**
 * The products, variants, categories, channels, or locations a return policy revision applies to,
 * or all of them.
 */
export type ReturnPolicyScope = ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. [] (Value): string. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. [] enum: "checkout", "payment_link", "virtual_terminal",
     * "api", "subscription". [] (Value): string. minLength: 1. Value enum: "checkout",
     * "payment_link", "virtual_terminal", "api", "subscription".
     */
    "channel_types"?: Array<"checkout" | "payment_link" | "virtual_terminal" | "api" | "subscription" | (string & {})>;
    /**
     * IDs of the Locations the item was fulfilled from. Up to 100 values. [] (Value): string.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all", "include".
     */
    "match_type": "all" | "include" | (string & {});
    /**
     * IDs of the products the policy covers. Up to 100 values. [] (Value): string. minLength: 1.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * IDs of the variants the policy covers. Up to 100 values. [] (Value): string. minLength: 1.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<ReturnPolicyScopeAll & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyScopeInclude & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `all` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeAll = ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. [] (Value): string. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. [] enum: "checkout", "payment_link", "virtual_terminal",
     * "api", "subscription". [] (Value): string. minLength: 1. Value enum: "checkout",
     * "payment_link", "virtual_terminal", "api", "subscription".
     */
    "channel_types"?: Array<"checkout" | "payment_link" | "virtual_terminal" | "api" | "subscription" | (string & {})>;
    /**
     * IDs of the Locations the item was fulfilled from. Up to 100 values. [] (Value): string.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all".
     */
    "match_type": "all" | (string & {});
    /**
     * IDs of the products the policy covers. Up to 100 values. [] (Value): string. minLength: 1.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * IDs of the variants the policy covers. Up to 100 values. [] (Value): string. minLength: 1.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. maxItems: 0.
     */
    "category_handles"?: unknown;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. maxItems: 0.
     */
    "channel_types"?: unknown;
    /** IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: 0. */
    "location_ids"?: unknown;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all".
     */
    "match_type": unknown;
    /** IDs of the products the policy covers. Up to 100 values. maxItems: 0. */
    "product_ids"?: unknown;
    /** IDs of the variants the policy covers. Up to 100 values. maxItems: 0. */
    "variant_ids"?: unknown;
});
/** The `all` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeAllRequestInput = ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. [] (Value): string. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. [] enum: "checkout", "payment_link", "virtual_terminal",
     * "api", "subscription". [] (Value): string. minLength: 1. Value enum: "checkout",
     * "payment_link", "virtual_terminal", "api", "subscription".
     */
    "channel_types"?: Array<"checkout" | "payment_link" | "virtual_terminal" | "api" | "subscription">;
    /**
     * IDs of the Locations the item was fulfilled from. Up to 100 values. [] (Value): string.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all".
     */
    "match_type": "all";
    /**
     * IDs of the products the policy covers. Up to 100 values. [] (Value): string. minLength: 1.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * IDs of the variants the policy covers. Up to 100 values. [] (Value): string. minLength: 1.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. maxItems: 0.
     */
    "category_handles"?: unknown;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. maxItems: 0.
     */
    "channel_types"?: unknown;
    /** IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: 0. */
    "location_ids"?: unknown;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all".
     */
    "match_type": "all";
    /** IDs of the products the policy covers. Up to 100 values. maxItems: 0. */
    "product_ids"?: unknown;
    /** IDs of the variants the policy covers. Up to 100 values. maxItems: 0. */
    "variant_ids"?: unknown;
});
/** The `include` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeInclude = ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. [] (Value): string. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. [] enum: "checkout", "payment_link", "virtual_terminal",
     * "api", "subscription". [] (Value): string. minLength: 1. Value enum: "checkout",
     * "payment_link", "virtual_terminal", "api", "subscription".
     */
    "channel_types"?: Array<"checkout" | "payment_link" | "virtual_terminal" | "api" | "subscription" | (string & {})>;
    /**
     * IDs of the Locations the item was fulfilled from. Up to 100 values. [] (Value): string.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "include".
     */
    "match_type": "include" | (string & {});
    /**
     * IDs of the products the policy covers. Up to 100 values. [] (Value): string. minLength: 1.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * IDs of the variants the policy covers. Up to 100 values. [] (Value): string. minLength: 1.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "include".
     */
    "match_type": unknown;
})
    & (({
    /** IDs of the products the policy covers. Up to 100 values. minItems: 1. */
    "product_ids": unknown;
})
    | ({
    /** IDs of the variants the policy covers. Up to 100 values. minItems: 1. */
    "variant_ids": unknown;
})
    | ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. minItems: 1.
     */
    "category_handles": unknown;
})
    | ({
    /** IDs of the Locations the item was fulfilled from. Up to 100 values. minItems: 1. */
    "location_ids": unknown;
})
    | ({
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. minItems: 1.
     */
    "channel_types": unknown;
})
    | (Record<string, unknown>)));
/** The `include` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeIncludeRequestInput = ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. [] (Value): string. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. [] enum: "checkout", "payment_link", "virtual_terminal",
     * "api", "subscription". [] (Value): string. minLength: 1. Value enum: "checkout",
     * "payment_link", "virtual_terminal", "api", "subscription".
     */
    "channel_types"?: Array<"checkout" | "payment_link" | "virtual_terminal" | "api" | "subscription">;
    /**
     * IDs of the Locations the item was fulfilled from. Up to 100 values. [] (Value): string.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "include".
     */
    "match_type": "include";
    /**
     * IDs of the products the policy covers. Up to 100 values. [] (Value): string. minLength: 1.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * IDs of the variants the policy covers. Up to 100 values. [] (Value): string. minLength: 1.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "include".
     */
    "match_type": "include";
})
    & (({
    /** IDs of the products the policy covers. Up to 100 values. minItems: 1. */
    "product_ids": unknown;
})
    | ({
    /** IDs of the variants the policy covers. Up to 100 values. minItems: 1. */
    "variant_ids": unknown;
})
    | ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. minItems: 1.
     */
    "category_handles": unknown;
})
    | ({
    /** IDs of the Locations the item was fulfilled from. Up to 100 values. minItems: 1. */
    "location_ids": unknown;
})
    | ({
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. minItems: 1.
     */
    "channel_types": unknown;
})));
/**
 * The products, variants, categories, channels, or locations a return policy revision applies to,
 * or all of them.
 */
export type ReturnPolicyScopeRequestInput = ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. [] (Value): string. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. [] enum: "checkout", "payment_link", "virtual_terminal",
     * "api", "subscription". [] (Value): string. minLength: 1. Value enum: "checkout",
     * "payment_link", "virtual_terminal", "api", "subscription".
     */
    "channel_types"?: Array<"checkout" | "payment_link" | "virtual_terminal" | "api" | "subscription">;
    /**
     * IDs of the Locations the item was fulfilled from. Up to 100 values. [] (Value): string.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all", "include".
     */
    "match_type": "all" | "include";
    /**
     * IDs of the products the policy covers. Up to 100 values. [] (Value): string. minLength: 1.
     * Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * IDs of the variants the policy covers. Up to 100 values. [] (Value): string. minLength: 1.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<ReturnPolicyScopeAllRequestInput & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyScopeIncludeRequestInput & object, readonly unknown[]>));
