import type { MoneyValueInput } from './types-44.js';
import type { AcceptFulfillmentRequestInput } from './types-0.js';
import type { InputValue } from '../runtime.js';
import type { BuyerCancelReturnRequestInput } from './types-1.js';
import type { CancelMeSubscriptionRequestInput, ChangeMeSubscriptionPlanRequestInput } from './types-5.js';
import type { ChangeMeSubscriptionQuantityRequestInput } from './types-6.js';
import type { ConfirmEmailChangeRequestInput } from './types-8.js';
import type { CreateCustomerAddressRequestInput } from './types-9.js';
import type { CreateMeCheckoutSessionRequestInput, CreateMeSubscriptionPreviewRequestInput } from './types-11.js';
import type { CreateEmailChangeRequestInput } from './types-10.js';
import type { SaveMePaymentMethodRequestInput } from './types-68.js';
import type { BuyerCreateReturnRequestInput, BuyerCreateReturnPreviewRequestInput } from './types-2.js';
import type { CheckoutSessionsListCustomerVerificationsParams } from './types-7.js';
/**
 * A discount you apply by hand to an order, with a name, an amount, and the order, line items, or
 * charges it applies to.
 */
export type ManualDiscountRequestInput = {
    /**
     * Fixed discount to apply to the order. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Which part of the order the discount reduces. Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /**
     * Name of the discount. Surrounding whitespace is trimmed before length validation. A supplied
     * value cannot be blank; use null where clearing is supported. minLength: 1.
     */
    "name": string;
    /**
     * IDs of the charges this discount reduces. [] (Value): string. minLength: 1. Example:
     * "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_ids"?: Array<string>;
    /**
     * IDs of the order line items this discount applies to. [] (Value): string. minLength: 1.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_ids"?: Array<string>;
    /**
     * Whether the discount applies to the whole order or to specific line items. Send
     * `discount_class` instead of `scope`; a conflicting pair is refused. Value enum: "order",
     * "line_item".
     */
    "scope"?: "order" | "line_item";
};
/** Records a missed service appointment with a required no-show reason. */
export type MarkFulfillmentNoShowRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * Why fulfillment work is paused or the service appointment was missed. Value enum:
     * "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
    "reason_message"?: string;
};
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
