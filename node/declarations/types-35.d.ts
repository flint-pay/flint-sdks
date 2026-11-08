import type { MarkPackageDeliveredRequestInput } from './types-34.js';
import type { InputValue } from '../runtime.js';
import type {
    BuyerCancelReturnRequestInput,
    BuyerCreateReturnRequestInput,
    BuyerCreateReturnPreviewRequestInput
} from './types-1.js';
import type { CancelMeSubscriptionRequestInput } from './types-4.js';
import type { ChangeMeSubscriptionPlanRequestInput, ChangeMeSubscriptionQuantityRequestInput } from './types-5.js';
import type { ConfirmEmailChangeRequestInput } from './types-6.js';
import type { CreateCustomerAddressRequestInput, CreateEmailChangeRequestInput } from './types-8.js';
import type { InvoiceCheckoutSessionRequestInput } from './types-30.js';
import type { SaveMePaymentMethodRequestInput } from './types-56.js';
import type { GetOrCreateReturnResolutionCheckoutSessionRequestInput } from './types-25.js';
import type { CreateMeSubscriptionPreviewRequestInput } from './types-10.js';
import type { FeedbackReportsListParams } from './types-23.js';
/** Records the package action mark_in_transit. */
export type MarkPackageInTransitRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** Records the package action mark_out_for_delivery. */
export type MarkPackageOutForDeliveryRequestInput = MarkPackageInTransitRequestInput;
/** Records the package action mark_packed. */
export type MarkPackagePackedRequestInput = MarkPackageDeliveredRequestInput;
/** Records the package action mark_returned. */
export type MarkPackageReturnedRequestInput = MarkPackageDeliveredRequestInput;
/** Records the package action mark_shipped. */
export type MarkPackageShippedRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier handling this package. minLength: 1. maxLength: 100. */
    "carrier"?: string;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /** Carrier service used for this package. minLength: 1. maxLength: 100. */
    "service_code"?: string;
    /** Carrier tracking number for this package. minLength: 1. maxLength: 255. */
    "tracking_number"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1.
     * maxLength: 2048.
     */
    "tracking_url"?: string;
};
/** Records the package action mark_shipped. */
export type MarkPackageShippedRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier handling this package. minLength: 1. maxLength: 100. */
    "carrier"?: string;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /** Carrier service used for this package. minLength: 1. maxLength: 100. */
    "service_code"?: string;
    /** Carrier tracking number for this package. minLength: 1. maxLength: 255. */
    "tracking_number"?: string;
    /**
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1.
     * maxLength: 2048.
     */
    "tracking_url"?: string;
};
export type MeCancelReturnParams = (InputValue<BuyerCancelReturnRequestInput>);
export type MeCancelSubscriptionParams = (InputValue<CancelMeSubscriptionRequestInput>);
export type MeChangeSubscriptionPlanParams = (InputValue<ChangeMeSubscriptionPlanRequestInput>);
export type MeChangeSubscriptionQuantityParams = (InputValue<ChangeMeSubscriptionQuantityRequestInput>);
export type MeConfirmEmailChangeRequestParams = (InputValue<ConfirmEmailChangeRequestInput>);
export type MeCreateAddressParams = (InputValue<CreateCustomerAddressRequestInput>);
export type MeCreateDeletionRequestParams = {};
export type MeCreateEmailChangeRequestParams = (InputValue<CreateEmailChangeRequestInput>);
export type MeCreateFlintWalletStoreSetupParams = {};
export type MeCreateInvoiceCheckoutSessionParams = (InputValue<InvoiceCheckoutSessionRequestInput>);
export type MeCreatePaymentMethodParams = (InputValue<SaveMePaymentMethodRequestInput>);
export type MeCreateReturnParams = (InputValue<BuyerCreateReturnRequestInput>);
export type MeCreateReturnPreviewParams = (BuyerCreateReturnPreviewRequestInput);
export type MeCreateReturnResolutionCheckoutSessionParams = (InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput>);
export type MeCreateSubscriptionPaymentRetryParams = (InputValue<{}>);
export type MeCreateSubscriptionPreviewParams = (CreateMeSubscriptionPreviewRequestInput);
export type MeDeleteAddressParams = {
    /** Optional address version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type MeDeletePaymentMethodParams = {};
export type MeGetAddressParams = {};
export type MeGetCreditNotePDFParams = {};
export type MeGetCreditNotePDFResponse = Uint8Array;
export type MeGetCreditNoteParams = {};
export type MeGetDeletionRequestParams = {};
export type MeGetEmailPreferencesParams = {};
export type MeGetFulfillmentParams = {};
export type MeGetGiftCardParams = {};
export type MeGetInvoicePDFParams = {};
export type MeGetInvoicePDFResponse = Uint8Array;
export type MeGetInvoiceParams = {};
export type MeGetOrderParams = {};
export type MeGetOrderReceiptPDFParams = {};
export type MeGetOrderReceiptPDFResponse = Uint8Array;
export type MeGetPackageParams = {};
export type MeGetParams = {};
export type MeGetPaymentIntentParams = {};
export type MeGetPaymentMethodParams = {};
export type MeGetRefundParams = {};
export type MeGetReturnParams = {};
export type MeGetReturnResolutionParams = {};
export type MeGetShipmentParams = {};
export type MeGetSubscriptionParams = {};
export type MeGetSubscriptionPaymentRetryParams = {};
export type MeListAddressesParams = FeedbackReportsListParams;
export type MeListCreditNotesParams = {
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
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "issued", "voided". Value enum: "issued", "voided". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "issued", "voided". anyOf[1][] (Value): string. Value enum: "issued",
     * "voided". anyOf[2] (Value): string. Value enum: "issued", "voided".
     */
    "status"?: InputValue<("issued" | "voided") | readonly ("issued" | "voided")[]>;
};
export type MeListDeletionRequestsParams = {
    /**
     * Only return requests in this lifecycle state. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "pending_review", "processing", "completed",
     * "rejected", "failed". Value enum: "pending_review", "processing", "completed", "rejected",
     * "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending_review",
     * "processing", "completed", "rejected", "failed". anyOf[1][] (Value): string. Value enum:
     * "pending_review", "processing", "completed", "rejected", "failed". anyOf[2] (Value): string.
     * Value enum: "pending_review", "processing", "completed", "rejected", "failed".
     */
    "status"?: InputValue<("pending_review" | "processing" | "completed" | "rejected" | "failed")
        | readonly ("pending_review" | "processing" | "completed" | "rejected" | "failed")[]>;
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
};
export type MeListFlintWalletCardsParams = {};
export type MeListFulfillmentEventsParams = {
    /** Required buyer-owned order ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": InputValue<string>;
    /** Filter by fulfillment ID. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id"?: InputValue<string>;
    /** Filter by shipment ID. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id"?: InputValue<string>;
    /** Filter by package ID. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
    "package_id"?: InputValue<string>;
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
};
export type MeListFulfillmentsParams = {
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
    /** Filter by order ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
    /**
     * Filter by buyer-visible status. Held fulfillments match their pre-hold status. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "pending", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked",
     * "packed", "dispatched", "no_show". Value enum: "pending", "in_progress", "ready",
     * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show". anyOf[1][] (Value): string. Value
     * enum: "pending", "in_progress", "ready", "completed", "canceled", "failed", "scheduled",
     * "accepted", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[2] (Value):
     * string. Value enum: "pending", "in_progress", "ready", "completed", "canceled", "failed",
     * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show".
     */
    "status"?: InputValue<("pending"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show")
        | readonly ("pending"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show")[]>;
    /**
     * Filter by fulfillment type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". Value enum:
     * "shipment", "pickup", "local_delivery", "digital", "service". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "shipment", "pickup", "local_delivery", "digital", "service".
     * anyOf[1][] (Value): string. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service". anyOf[2] (Value): string. Value enum: "shipment", "pickup", "local_delivery",
     * "digital", "service".
     */
    "type"?: InputValue<("shipment" | "pickup" | "local_delivery" | "digital" | "service")
        | readonly ("shipment" | "pickup" | "local_delivery" | "digital" | "service")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type MeListGiftCardTransactionsParams = {
    /**
     * Exact gift card ID. Requires current saved access to this card. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": InputValue<string>;
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
};
export type MeListGiftCardsParams = {
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "pending", "active", "frozen", "closed". Value enum: "pending", "active", "frozen",
     * "closed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending", "active",
     * "frozen", "closed". anyOf[1][] (Value): string. Value enum: "pending", "active", "frozen",
     * "closed". anyOf[2] (Value): string. Value enum: "pending", "active", "frozen", "closed".
     */
    "status"?: InputValue<("pending" | "active" | "frozen" | "closed")
        | readonly ("pending" | "active" | "frozen" | "closed")[]>;
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
};
export type MeListInvoicesParams = {
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
     * Filter by invoice status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * Value enum: "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open", "partially_paid", "paid",
     * "voided", "uncollectible", "credited". anyOf[1][] (Value): string. Value enum: "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value): string.
     * Value enum: "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     */
    "status"?: InputValue<("open" | "partially_paid" | "paid" | "voided" | "uncollectible" | "credited")
        | readonly ("open" | "partially_paid" | "paid" | "voided" | "uncollectible" | "credited")[]>;
    /** Filter by Flint order ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Inclusive lower bound on due_date, in YYYY-MM-DD format. Compares each invoice calendar date
     * in its timezone (UTC when absent). Format: date. Example: "2026-08-02".
     */
    "due_date_from"?: InputValue<string>;
    /**
     * Exclusive upper bound on due_date, in YYYY-MM-DD format. Compares each invoice calendar date
     * in its timezone (UTC when absent). Format: date. Example: "2026-08-02".
     */
    "due_date_to"?: InputValue<string>;
    /**
     * Filter by whether an open or partially_paid invoice has an outstanding balance after its due
     * date ends in its timezone (UTC when absent). With a schedule, matches when any entry is
     * overdue.
     */
    "is_overdue"?: InputValue<boolean>;
    /** Filter by whether outstanding_money is greater than zero. */
    "has_outstanding_balance"?: InputValue<boolean>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by invoice_id. Default:
     * "created_at". Value enum: "created_at", "updated_at", "due_date", "invoice_number",
     * "outstanding_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "due_date" | "invoice_number" | "outstanding_money">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type MeListOrderActivitiesParams = {
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
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Filter by activity type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "created", "line_item_added", "line_item_updated", "line_item_removed",
     * "discount_applied", "discount_removed", "tax_updated", "requested_tip_added",
     * "requested_tip_updated", "requested_tip_removed", "charge_added", "charge_updated",
     * "charge_removed", "charge_fulfillment_updated", "order_edited", "order_updated",
     * "adjustment", "closed", "payment", "payment_failed", "refund", "refund_failed",
     * "checkout_session_created", "checkout_session_expired", "checkout_session_invalidated",
     * "fulfillment_created", "fulfillment_updated", "fulfillment_state_changed". Value enum:
     * "created", "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
     * "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated",
     * "requested_tip_removed", "charge_added", "charge_updated", "charge_removed",
     * "charge_fulfillment_updated", "order_edited", "order_updated", "adjustment", "closed",
     * "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "created", "line_item_added", "line_item_updated",
     * "line_item_removed", "discount_applied", "discount_removed", "tax_updated",
     * "requested_tip_added", "requested_tip_updated", "requested_tip_removed", "charge_added",
     * "charge_updated", "charge_removed", "charge_fulfillment_updated", "order_edited",
     * "order_updated", "adjustment", "closed", "payment", "payment_failed", "refund",
     * "refund_failed", "checkout_session_created", "checkout_session_expired",
     * "checkout_session_invalidated", "fulfillment_created", "fulfillment_updated",
     * "fulfillment_state_changed". anyOf[1][] (Value): string. Value enum: "created",
     * "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
     * "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated",
     * "requested_tip_removed", "charge_added", "charge_updated", "charge_removed",
     * "charge_fulfillment_updated", "order_edited", "order_updated", "adjustment", "closed",
     * "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed". anyOf[2] (Value): string. Value enum:
     * "created", "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
     * "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated",
     * "requested_tip_removed", "charge_added", "charge_updated", "charge_removed",
     * "charge_fulfillment_updated", "order_edited", "order_updated", "adjustment", "closed",
     * "payment", "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed".
     */
    "activity_type"?: InputValue<("created"
        | "line_item_added"
        | "line_item_updated"
        | "line_item_removed"
        | "discount_applied"
        | "discount_removed"
        | "tax_updated"
        | "requested_tip_added"
        | "requested_tip_updated"
        | "requested_tip_removed"
        | "charge_added"
        | "charge_updated"
        | "charge_removed"
        | "charge_fulfillment_updated"
        | "order_edited"
        | "order_updated"
        | "adjustment"
        | "closed"
        | "payment"
        | "payment_failed"
        | "refund"
        | "refund_failed"
        | "checkout_session_created"
        | "checkout_session_expired"
        | "checkout_session_invalidated"
        | "fulfillment_created"
        | "fulfillment_updated"
        | "fulfillment_state_changed")
        | readonly ("created"
        | "line_item_added"
        | "line_item_updated"
        | "line_item_removed"
        | "discount_applied"
        | "discount_removed"
        | "tax_updated"
        | "requested_tip_added"
        | "requested_tip_updated"
        | "requested_tip_removed"
        | "charge_added"
        | "charge_updated"
        | "charge_removed"
        | "charge_fulfillment_updated"
        | "order_edited"
        | "order_updated"
        | "adjustment"
        | "closed"
        | "payment"
        | "payment_failed"
        | "refund"
        | "refund_failed"
        | "checkout_session_created"
        | "checkout_session_expired"
        | "checkout_session_invalidated"
        | "fulfillment_created"
        | "fulfillment_updated"
        | "fulfillment_state_changed")[]>;
};
export type MeListOrdersParams = {
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
     * Why a closed order closed. Matches orders closed for any reason given. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * Value enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "paid", "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other". anyOf[1][] (Value): string. Value enum: "paid",
     * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other". anyOf[2] (Value): string. Value enum: "paid",
     * "closed_by_merchant", "checkout_expired", "written_off", "superseded",
     * "return_resolution_canceled", "other".
     */
    "closed_reason"?: InputValue<("paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other")
        | readonly ("paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other")[]>;
    /**
     * Order status: open or closed. Selecting open and closed includes both statuses. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "open", "closed". Value
     * enum: "open", "closed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open",
     * "closed". anyOf[1][] (Value): string. Value enum: "open", "closed". anyOf[2] (Value):
     * string. Value enum: "open", "closed".
     */
    "status"?: InputValue<("open" | "closed") | readonly ("open" | "closed")[]>;
    /**
     * Filter by settled collection status. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "unpaid", "partially_paid", "paid". Value enum: "unpaid",
     * "partially_paid", "paid". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "unpaid",
     * "partially_paid", "paid". anyOf[1][] (Value): string. Value enum: "unpaid",
     * "partially_paid", "paid". anyOf[2] (Value): string. Value enum: "unpaid", "partially_paid",
     * "paid".
     */
    "payment_status"?: InputValue<("unpaid" | "partially_paid" | "paid") | readonly ("unpaid" | "partially_paid" | "paid")[]>;
    /**
     * Filter by refund progress. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "none", "partially_refunded", "refunded". Value enum: "none",
     * "partially_refunded", "refunded". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "none", "partially_refunded", "refunded". anyOf[1][] (Value): string. Value enum: "none",
     * "partially_refunded", "refunded". anyOf[2] (Value): string. Value enum: "none",
     * "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<("none" | "partially_refunded" | "refunded")
        | readonly ("none" | "partially_refunded" | "refunded")[]>;
    /**
     * Filter by aggregate order fulfillment status. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "not_fulfilled", "partially_fulfilled", "fulfilled",
     * "canceled", "not_applicable", "closed". Value enum: "not_fulfilled", "partially_fulfilled",
     * "fulfilled", "canceled", "not_applicable", "closed". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "not_fulfilled", "partially_fulfilled", "fulfilled", "canceled",
     * "not_applicable", "closed". anyOf[1][] (Value): string. Value enum: "not_fulfilled",
     * "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". anyOf[2]
     * (Value): string. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled",
     * "canceled", "not_applicable", "closed".
     */
    "fulfillment_status"?: InputValue<("not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed")
        | readonly ("not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed")[]>;
    /** Filter by merchant-visible order number. */
    "order_number"?: InputValue<string>;
    /**
     * Separate subscription renewal purchases (subscription) from orders placed through other
     * channels. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "virtual_terminal", "payment_link", "checkout", "api", "subscription". Value enum:
     * "virtual_terminal", "payment_link", "checkout", "api", "subscription". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "virtual_terminal", "payment_link", "checkout",
     * "api", "subscription". anyOf[1][] (Value): string. Value enum: "virtual_terminal",
     * "payment_link", "checkout", "api", "subscription". anyOf[2] (Value): string. Value enum:
     * "virtual_terminal", "payment_link", "checkout", "api", "subscription".
     */
    "origin"?: InputValue<("virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription")
        | readonly ("virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription")[]>;
    /**
     * Search across order_id, order number, buyer note, and line item names. Text fields match any
     * part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the
     * start and need the type prefix, such as ord_01.
     */
    "query"?: InputValue<string>;
    /** Filter by subscription ID. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
    "subscription_id"?: InputValue<string>;
    /** Filter by whether the subscriber changed delivery after this order was paid. */
    "subscription_delivery_changed"?: InputValue<boolean>;
    /**
     * Inclusive lower bound on pricing_amounts.total_money.amount. Requires currency. Format:
     * int64. minimum: 1. Example: 500.
     */
    "min_amount"?: InputValue<number>;
    /**
     * Inclusive upper bound on pricing_amounts.total_money.amount. Requires currency. Format:
     * int64. minimum: 1. Example: 500.
     */
    "max_amount"?: InputValue<number>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by order_id. Default:
     * "created_at". Value enum: "created_at", "updated_at",
     * "settlement_amounts.outstanding_money", "pricing_amounts.total_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
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
};
export type MeListPackagesParams = {
    /** Optional shipment ID filter. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id"?: InputValue<string>;
    /** Optional fulfillment ID filter. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id"?: InputValue<string>;
    /** Optional order ID filter. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
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
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by package status. Values within this filter are combined with OR. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[1][] (Value): string. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[2] (Value): string. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
     */
    "status"?: InputValue<("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")
        | readonly ("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")[]>;
};
export type MeListPaymentIntentsParams = {
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
    /** Filter by order ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
    /** Filter by invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by payment intent status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired". Value enum:
     * "requires_payment_method", "requires_confirmation", "requires_action", "processing",
     * "requires_capture", "canceled", "succeeded", "expired". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[1][] (Value):
     * string. Value enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired". anyOf[2] (Value):
     * string. Value enum: "requires_payment_method", "requires_confirmation", "requires_action",
     * "processing", "requires_capture", "canceled", "succeeded", "expired".
     */
    "status"?: InputValue<("requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired")
        | readonly ("requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired")[]>;
    /**
     * Filter by immutable payment flow. Repeat or comma-separate values. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api". Value enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "checkout", "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[1][] (Value): string. Value enum: "checkout",
     * "payment_link", "invoice", "subscription_initial", "subscription_renewal",
     * "virtual_terminal", "api". anyOf[2] (Value): string. Value enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow"?: InputValue<("checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api")
        | readonly ("checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api")[]>;
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
     * Exact match on refund_status. Repeat keys or comma-separate values to match any selected
     * status. Combined with dispute_status, both filters must match. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "none", "partially_refunded",
     * "refunded". Value enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "none", "partially_refunded", "refunded". anyOf[1][] (Value):
     * string. Value enum: "none", "partially_refunded", "refunded". anyOf[2] (Value): string.
     * Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<("none" | "partially_refunded" | "refunded")
        | readonly ("none" | "partially_refunded" | "refunded")[]>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by payment_intent_id. Default:
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
};
export type MeListPaymentMethodsParams = {
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
     * Filter by payment method type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "card". Value enum: "card". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "card". anyOf[1][] (Value): string. Value enum: "card". anyOf[2] (Value):
     * string. Value enum: "card".
     */
    "type"?: InputValue<("card") | readonly ("card")[]>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "pending", "expired", "archived", "failed". Value enum: "active", "pending", "expired",
     * "archived", "failed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "pending", "expired", "archived", "failed". anyOf[1][] (Value): string. Value enum:
     * "active", "pending", "expired", "archived", "failed". anyOf[2] (Value): string. Value enum:
     * "active", "pending", "expired", "archived", "failed".
     */
    "status"?: InputValue<("active" | "pending" | "expired" | "archived" | "failed")
        | readonly ("active" | "pending" | "expired" | "archived" | "failed")[]>;
    /**
     * Filter by usage: off_session payment methods can be charged without the buyer; on_session
     * ones were saved by buyers for faster checkout. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "on_session", "off_session". Value enum: "on_session",
     * "off_session". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "on_session",
     * "off_session". anyOf[1][] (Value): string. Value enum: "on_session", "off_session". anyOf[2]
     * (Value): string. Value enum: "on_session", "off_session".
     */
    "usage"?: InputValue<("on_session" | "off_session") | readonly ("on_session" | "off_session")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
export type MeListRefundsParams = {
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
    /** Filter by order ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
    /**
     * Filter by refund status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "pending", "succeeded", "partially_succeeded", "failed". Value enum:
     * "pending", "succeeded", "partially_succeeded", "failed". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "pending", "succeeded", "partially_succeeded", "failed". anyOf[1][]
     * (Value): string. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     * anyOf[2] (Value): string. Value enum: "pending", "succeeded", "partially_succeeded",
     * "failed".
     */
    "status"?: InputValue<("pending" | "succeeded" | "partially_succeeded" | "failed")
        | readonly ("pending" | "succeeded" | "partially_succeeded" | "failed")[]>;
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
    /** Filter by linked Return ID. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id"?: InputValue<string>;
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
};
export type MeListReturnsParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by decision status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "pending", "approved", "partially_approved", "declined". Value enum:
     * "pending", "approved", "partially_approved", "declined". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "pending", "approved", "partially_approved", "declined". anyOf[1][]
     * (Value): string. Value enum: "pending", "approved", "partially_approved", "declined".
     * anyOf[2] (Value): string. Value enum: "pending", "approved", "partially_approved",
     * "declined".
     */
    "decision_status"?: InputValue<("pending" | "approved" | "partially_approved" | "declined")
        | readonly ("pending" | "approved" | "partially_approved" | "declined")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by merchandise status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved", "exception". Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". anyOf[1][] (Value): string. Value enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception". anyOf[2]
     * (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     */
    "merchandise_status"?: InputValue<("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception")
        | readonly ("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception")[]>;
    /** Filter by order id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
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
     * Filter by resolution status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed". Value enum: "not_selected", "pending", "partially_fulfilled",
     * "requires_action", "fulfilled", "failed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled",
     * "failed". anyOf[1][] (Value): string. Value enum: "not_selected", "pending",
     * "partially_fulfilled", "requires_action", "fulfilled", "failed". anyOf[2] (Value): string.
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<("not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed")
        | readonly ("not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed")[]>;
    /** Filter by return number. */
    "return_number"?: InputValue<string>;
    /** Filter by return reason id. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". */
    "return_reason_id"?: InputValue<string>;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "requested", "open", "completed", "declined", "canceled". Value enum: "requested",
     * "open", "completed", "declined", "canceled". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "requested", "open", "completed", "declined", "canceled". anyOf[1][] (Value):
     * string. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[2]
     * (Value): string. Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status"?: InputValue<("requested" | "open" | "completed" | "declined" | "canceled")
        | readonly ("requested" | "open" | "completed" | "declined" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
