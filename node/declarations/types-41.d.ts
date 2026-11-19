import type { AcceptFulfillmentRequestInput } from './types-0.js';
import type { InputValue } from '../runtime.js';
import type { BuyerCancelReturnRequestInput } from './types-1.js';
import type { CancelMeSubscriptionRequestInput, ChangeMeSubscriptionPlanRequestInput } from './types-5.js';
import type { ChangeMeSubscriptionQuantityRequestInput } from './types-6.js';
import type { ConfirmEmailChangeRequestInput } from './types-8.js';
import type { CreateCustomerAddressRequestInput, CreateEmailChangeRequestInput } from './types-9.js';
import type { CreateMeCheckoutSessionRequestInput, CreateMeSubscriptionPreviewRequestInput } from './types-11.js';
import type { SaveMePaymentMethodRequestInput } from './types-67.js';
import type { BuyerCreateReturnRequestInput, BuyerCreateReturnPreviewRequestInput } from './types-2.js';
import type { CheckoutSessionsListCustomerVerificationsParams } from './types-7.js';
/** Records a missed service appointment with a required no-show reason. */
export type MarkFulfillmentNoShowRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Why fulfillment work is paused or the service appointment was missed. Value enum:
     * "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show" | "provider_no_show" | "location_unavailable" | "scheduling_error" | "other";
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
    "reason_message"?: string;
};
/** Records that the items for a shipment fulfillment have been packed. */
export type MarkFulfillmentPackedRequestInput = AcceptFulfillmentRequestInput;
/** Records that the items for a shipment fulfillment have been picked. */
export type MarkFulfillmentPickedRequestInput = AcceptFulfillmentRequestInput;
/** Records that preparation of a pickup or delivery fulfillment has begun. */
export type MarkFulfillmentPreparingRequestInput = AcceptFulfillmentRequestInput;
/** Records that a pickup is ready for collection or a delivery is ready for dispatch. */
export type MarkFulfillmentReadyRequestInput = AcceptFulfillmentRequestInput;
/** Records the package action mark_delivered. */
export type MarkPackageDeliveredRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the carrier scan or package action occurred, as an RFC 3339 timestamp. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
    "reason_message"?: string;
};
/** Records the package action mark_delivery_attempted. */
export type MarkPackageDeliveryAttemptedRequestInput = MarkPackageDeliveredRequestInput;
/** Records the package action mark_exception. */
export type MarkPackageExceptionRequestInput = MarkPackageDeliveredRequestInput;
/** Records the package action mark_in_transit. */
export type MarkPackageInTransitRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
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
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
    "reason_message"?: string;
};
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
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
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
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
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
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
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
export type MeCreateCheckoutSessionParams = (CreateMeCheckoutSessionRequestInput);
export type MeCreateDeletionRequestParams = {};
export type MeCreateEmailChangeRequestParams = (InputValue<CreateEmailChangeRequestInput>);
export type MeCreateFlintWalletStoreSetupParams = {};
export type MeCreatePaymentMethodParams = (InputValue<SaveMePaymentMethodRequestInput>);
export type MeCreateReturnParams = (InputValue<BuyerCreateReturnRequestInput>);
export type MeCreateReturnPreviewParams = (BuyerCreateReturnPreviewRequestInput);
export type MeCreateSubscriptionPaymentRetryParams = (InputValue<{}>);
export type MeCreateSubscriptionPreviewParams = (CreateMeSubscriptionPreviewRequestInput);
export type MeDeleteAddressParams = {
    /**
     * Optional address version last read by the caller. Format: uint64. minimum: 1. maximum:
     * 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
};
export type MeDeletePaymentMethodParams = {};
export type MeGetAddressParams = {};
export type MeGetCreditNotePDFParams = {};
export type MeGetCreditNotePDFResponse = Uint8Array;
export type MeGetCreditNoteParams = {};
export type MeGetDeletionRequestParams = {};
export type MeGetEmailChangeRequestParams = {};
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
export type MeListAddressesParams = CheckoutSessionsListCustomerVerificationsParams;
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
     * Filter by the exact source invoice ID. pattern: ^inv_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: InputValue<string>;
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
export type MeListEmailChangeRequestsParams = CheckoutSessionsListCustomerVerificationsParams;
export type MeListFlintWalletCardsParams = {};
export type MeListFulfillmentEventsParams = {
    /**
     * Required buyer-owned order ID. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": InputValue<string>;
    /**
     * Filter by fulfillment ID. pattern: ^ful_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: InputValue<string>;
    /**
     * Filter by shipment ID. pattern: ^shp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: InputValue<string>;
    /**
     * Filter by package ID. pattern: ^pkg_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     */
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
    /**
     * Filter by order ID. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
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
     * ANDed. [] enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "shipment", "pickup",
     * "local_delivery", "digital", "service", "handover". anyOf[1][] (Value): string. Value enum:
     * "shipment", "pickup", "local_delivery", "digital", "service", "handover". anyOf[2] (Value):
     * string. Value enum: "shipment", "pickup", "local_delivery", "digital", "service",
     * "handover".
     */
    "type"?: InputValue<("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover")
        | readonly ("shipment" | "pickup" | "local_delivery" | "digital" | "service" | "handover")[]>;
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
