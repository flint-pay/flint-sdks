import type {
    LocationCoordinate,
    Location,
    InvoicesCreateCheckoutSessionInput,
    InvoicesGetPDFInput,
    InvoicesListDeliveryAttemptsInput
} from './types-30.js';
import type { ResponseMeta } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { CreateLocationRequestInput, CreateMeSubscriptionPreviewRequestInput } from './types-8.js';
import type { UpdateLocationRequestInput } from './types-51.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { CancelReturnRequestInput, CancelSubscriptionRequestInput } from './types-3.js';
import type { ConfirmEmailChangeRequestInput } from './types-5.js';
import type { CreateCustomerAddressRequestInput, CreateEmailChangeRequestInput } from './types-6.js';
import type { BuyerCreateReturnRequestInput, BuyerCreateReturnPreviewRequestInput } from './types-1.js';
import type { GetOrCreateReturnResolutionCheckoutSessionRequestInput } from './types-20.js';
import type { CustomersGetDeletionRequestInput } from './types-12.js';
import type { GiftCardsGetInput } from './types-21.js';
import type { FeedbackReportsListInput } from './types-18.js';
/**
 * Shape $ (Value): {@link LocationCoordinateRequestRequestInput}. A latitude and longitude for a
 * merchant location.
 */
export type LocationCoordinateRequestRequestInput = LocationCoordinate;
/** Shape $ (Value): {@link LocationListResponse}. A page of `Location` objects. */
export type LocationListResponse = {
    /**
     * Shape $ (Value): Array of {@link Location}. Shape $[] (Value): {@link Location}. A physical
     * or logical place a merchant operates from. Every Location can hold stock.
     * inventory_allocation_enabled controls whether it accepts inventory allocation.
     */
    "data": Array<Location>;
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
/** Shape $ (Value): {@link LocationResponse}. A response containing `Location` data. */
export type LocationResponse = {
    /**
     * Shape $ (Value): {@link Location}. A physical or logical place a merchant operates from.
     * Every Location can hold stock. inventory_allocation_enabled controls whether it accepts
     * inventory allocation.
     */
    "data": Location;
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
export type LocationsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateLocationRequestInput}. The request body for: Create location.
     */
    "body": InputValue<CreateLocationRequestInput>;
};
export type LocationsGetInput = {
    /** Shape $ (Value): string. */
    "location_id": InputValue<string>;
};
export type LocationsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): boolean. */
    "inventory_allocation_enabled"?: InputValue<boolean>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "query"?: InputValue<string>;
};
export type LocationsRemoveInput = {
    /** Shape $ (Value): string. */
    "location_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type LocationsUpdateInput = {
    /** Shape $ (Value): string. */
    "location_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateLocationRequestInput}. Sparse Location update. Omitted fields
     * stay unchanged. address and coordinate are atomic value objects. Sending address requires
     * coordinate. Sending coordinate_source requires coordinate. A non-null coordinate requires a
     * non-null coordinate_source. coordinate: null clears both coordinate and coordinate_source;
     * coordinate_source must then be omitted or null. timezone and coordinate may each be updated
     * without address. geography_version advances only when address, timezone, coordinate, or
     * coordinate_source changes; version advances on every Location change.
     */
    "body": InputValue<UpdateLocationRequestInput>;
};
/**
 * Shape $ (Value): {@link LookupGiftCardRequest}. The request body for: Look up a gift card code.
 */
export type LookupGiftCardRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "code": string;
};
/**
 * Shape $ (Value): {@link LookupGiftCardRequestInput}. The request body for: Look up a gift card
 * code.
 */
export type LookupGiftCardRequestInput = LookupGiftCardRequest;
/**
 * Shape $ (Value): {@link ManualDiscountRequest}. A discount you apply by hand to an order, with a
 * name, an amount, and the order, line items, or charges it applies to.
 */
export type ManualDiscountRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "order_charge_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "order_line_item_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "order", "line_item". */
    "scope"?: "order" | "line_item" | (string & {});
};
/**
 * Shape $ (Value): {@link ManualDiscountRequestInput}. A discount you apply by hand to an order,
 * with a name, an amount, and the order, line items, or charges it applies to.
 */
export type ManualDiscountRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Shape $ (Value): string.  Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge";
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "order_charge_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "order_line_item_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "order", "line_item". */
    "scope"?: "order" | "line_item";
};
export type MeCancelReturnInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelReturnRequestInput}. The request body for: Cancel one of the
     * current buyer's Returns; Cancel return.
     */
    "body": InputValue<CancelReturnRequestInput>;
};
export type MeCancelSubscriptionInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelSubscriptionRequestInput}. The request body for: Cancel one of
     * the current buyer's subscriptions; Cancel subscription.
     */
    "body": InputValue<CancelSubscriptionRequestInput>;
};
export type MeConfirmEmailChangeRequestInput = {
    /** Shape $ (Value): string. */
    "email_change_request_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ConfirmEmailChangeRequestInput}. The request body for: Confirm an
     * email change.
     */
    "body": InputValue<ConfirmEmailChangeRequestInput>;
};
export type MeCreateAddressInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCustomerAddressRequestInput}. The request body for: Create a
     * customer address; Create an address for the current buyer.
     */
    "body": InputValue<CreateCustomerAddressRequestInput>;
};
export type MeCreateDeletionRequestInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type MeCreateEmailChangeRequestInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateEmailChangeRequestInput}. The request body for: Request an
     * email change.
     */
    "body": InputValue<CreateEmailChangeRequestInput>;
};
export type MeCreateFlintWalletStoreSetupInput = {
    /** Shape $ (Value): string. */
    "flint_wallet_card_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type MeCreateInvoiceCheckoutSessionInput = InvoicesCreateCheckoutSessionInput;
export type MeCreateReturnInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link BuyerCreateReturnRequestInput}. The request body for: Create a
     * Return for the current buyer.
     */
    "body": InputValue<BuyerCreateReturnRequestInput>;
};
export type MeCreateReturnPreviewInput = {
    /**
     * Shape $ (Value): {@link BuyerCreateReturnPreviewRequestInput}. The request body for: Preview
     * Return eligibility or resolution amounts for the current buyer.
     */
    "body": InputValue<BuyerCreateReturnPreviewRequestInput>;
};
export type MeCreateReturnResolutionCheckoutSessionInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link GetOrCreateReturnResolutionCheckoutSessionRequestInput}. The request
     * body for: Create a Return resolution checkout session for the current buyer; Get or create
     * return resolution checkout session.
     */
    "body"?: InputValue<GetOrCreateReturnResolutionCheckoutSessionRequestInput>;
};
export type MeCreateSubscriptionPaymentRetryInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): object. maxProperties: 0. */
    "body"?: InputValue<{}>;
};
export type MeCreateSubscriptionPreviewInput = {
    /**
     * Shape $ (Value): {@link CreateMeSubscriptionPreviewRequestInput}. The request body for:
     * Preview subscription.
     */
    "body": InputValue<CreateMeSubscriptionPreviewRequestInput>;
};
export type MeDeleteAddressInput = {
    /** Shape $ (Value): string. */
    "customer_address_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type MeGetAddressInput = {
    /** Shape $ (Value): string. */
    "customer_address_id": InputValue<string>;
};
export type MeGetCreditNoteInput = {
    /** Shape $ (Value): string. */
    "invoice_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "credit_note_id": InputValue<string>;
};
export type MeGetCreditNotePDFInput = MeGetCreditNoteInput;
export type MeGetCreditNotePDFResponse = Uint8Array;
export type MeGetDeletionRequestInput = CustomersGetDeletionRequestInput;
export type MeGetEmailPreferencesInput = {};
export type MeGetFulfillmentInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id": InputValue<string>;
};
export type MeGetGiftCardInput = GiftCardsGetInput;
export type MeGetInput = {};
export type MeGetInvoiceInput = InvoicesGetPDFInput;
export type MeGetInvoicePDFInput = InvoicesGetPDFInput;
export type MeGetInvoicePDFResponse = Uint8Array;
export type MeGetOrderInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
};
export type MeGetPackageInput = {
    /** Shape $ (Value): string. */
    "package_id": InputValue<string>;
};
export type MeGetPaymentIntentInput = {
    /** Shape $ (Value): string. */
    "payment_intent_id": InputValue<string>;
};
export type MeGetPaymentMethodInput = {
    /** Shape $ (Value): string. */
    "payment_method_id": InputValue<string>;
};
export type MeGetRefundInput = {
    /** Shape $ (Value): string. */
    "refund_id": InputValue<string>;
};
export type MeGetReturnInput = {
    /** Shape $ (Value): string. */
    "return_id": InputValue<string>;
};
export type MeGetReturnResolutionInput = {
    /** Shape $ (Value): string. */
    "return_resolution_id": InputValue<string>;
};
export type MeGetShipmentInput = {
    /** Shape $ (Value): string. */
    "shipment_id": InputValue<string>;
};
export type MeGetSubscriptionInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
};
export type MeGetSubscriptionPaymentRetryInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "subscription_payment_retry_id": InputValue<string>;
};
export type MeListAddressesInput = FeedbackReportsListInput;
export type MeListCreditNotesInput = InvoicesListDeliveryAttemptsInput;
export type MeListDeletionRequestsInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending_review", "processing",
     * "completed", "rejected", "failed". Shape $[] (Value): string. Value enum: "pending_review",
     * "processing", "completed", "rejected", "failed".
     */
    "status"?: InputValue<Array<"pending_review" | "processing" | "completed" | "rejected" | "failed">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type MeListFlintWalletCardsInput = {};
export type MeListFulfillmentEventsInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "shipment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "package_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type MeListFulfillmentsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "in_progress", "ready",
     * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show". Shape $[] (Value): string. Value enum: "pending", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked",
     * "packed", "dispatched", "no_show".
     */
    "status"?: InputValue<Array<"pending"
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
        | "no_show">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "shipment", "pickup",
     * "local_delivery", "digital", "service". Shape $[] (Value): string. Value enum: "shipment",
     * "pickup", "local_delivery", "digital", "service".
     */
    "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type MeListGiftCardTransactionsInput = {
    /** Shape $ (Value): string. */
    "gift_card_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type MeListGiftCardsInput = FeedbackReportsListInput;
export type MeListInvoicesInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "open", "partially_paid", "paid",
     * "void", "uncollectible", "credited". Shape $[] (Value): string. Value enum: "open",
     * "partially_paid", "paid", "void", "uncollectible", "credited".
     */
    "status"?: InputValue<Array<"open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited">>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "due_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "due_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): boolean. */
    "is_overdue"?: InputValue<boolean>;
    /** Shape $ (Value): boolean. */
    "has_outstanding_balance"?: InputValue<boolean>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "due_at", "invoice_number", "outstanding_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "due_at" | "invoice_number" | "outstanding_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type MeListOrderActivitiesInput = {
    /** Shape $ (Value): string. */
    "order_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "created", "line_item_added",
     * "line_item_updated", "line_item_removed", "discount_applied", "discount_removed",
     * "tax_updated", "requested_tip_added", "requested_tip_updated", "requested_tip_removed",
     * "charge_added", "charge_updated", "charge_removed", "charge_fulfillment_updated",
     * "order_updated", "adjustment", "closed", "payment", "payment_failed", "refund",
     * "refund_failed", "checkout_session_created", "checkout_session_expired",
     * "checkout_session_invalidated", "fulfillment_created", "fulfillment_updated",
     * "fulfillment_state_changed". Shape $[] (Value): string. Value enum: "created",
     * "line_item_added", "line_item_updated", "line_item_removed", "discount_applied",
     * "discount_removed", "tax_updated", "requested_tip_added", "requested_tip_updated",
     * "requested_tip_removed", "charge_added", "charge_updated", "charge_removed",
     * "charge_fulfillment_updated", "order_updated", "adjustment", "closed", "payment",
     * "payment_failed", "refund", "refund_failed", "checkout_session_created",
     * "checkout_session_expired", "checkout_session_invalidated", "fulfillment_created",
     * "fulfillment_updated", "fulfillment_state_changed".
     */
    "activity_type"?: InputValue<Array<"created"
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
        | "fulfillment_state_changed">>;
};
export type MeListOrdersInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "paid", "closed_by_merchant",
     * "checkout_expired", "written_off", "superseded", "return_resolution_canceled", "other".
     * Shape $[] (Value): string. Value enum: "paid", "closed_by_merchant", "checkout_expired",
     * "written_off", "superseded", "return_resolution_canceled", "other".
     */
    "closed_reason"?: InputValue<Array<"paid"
        | "closed_by_merchant"
        | "checkout_expired"
        | "written_off"
        | "superseded"
        | "return_resolution_canceled"
        | "other">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "open", "closed". Shape $[] (Value):
     * string. Value enum: "open", "closed".
     */
    "status"?: InputValue<Array<"open" | "closed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "unpaid", "partially_paid", "paid".
     * Shape $[] (Value): string. Value enum: "unpaid", "partially_paid", "paid".
     */
    "payment_status"?: InputValue<Array<"unpaid" | "partially_paid" | "paid">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "none", "partially_refunded",
     * "refunded". Shape $[] (Value): string. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_fulfilled",
     * "partially_fulfilled", "fulfilled", "canceled", "not_applicable", "closed". Shape $[]
     * (Value): string. Value enum: "not_fulfilled", "partially_fulfilled", "fulfilled",
     * "canceled", "not_applicable", "closed".
     */
    "fulfillment_status"?: InputValue<Array<"not_fulfilled" | "partially_fulfilled" | "fulfilled" | "canceled" | "not_applicable" | "closed">>;
    /** Shape $ (Value): string. */
    "order_number"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "virtual_terminal", "payment_link",
     * "checkout", "api", "subscription". Shape $[] (Value): string. Value enum:
     * "virtual_terminal", "payment_link", "checkout", "api", "subscription".
     */
    "origin"?: InputValue<Array<"virtual_terminal" | "payment_link" | "checkout" | "api" | "subscription">>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "subscription_id"?: InputValue<string>;
    /** Shape $ (Value): boolean. */
    "subscription_delivery_changed"?: InputValue<boolean>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "min_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "max_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "settlement_amounts.outstanding_money", "pricing_amounts.total_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "settlement_amounts.outstanding_money" | "pricing_amounts.total_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type MeListPackagesInput = {
    /** Shape $ (Value): string. */
    "shipment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "fulfillment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
export type MeListPaymentIntentsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "invoice_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired". Shape $[] (Value): string. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
     */
    "status"?: InputValue<Array<"requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "checkout", "payment_link",
     * "invoice", "subscription_initial", "subscription_renewal", "virtual_terminal", "api". Shape
     * $[] (Value): string. Value enum: "checkout", "payment_link", "invoice",
     * "subscription_initial", "subscription_renewal", "virtual_terminal", "api".
     */
    "payment_flow"?: InputValue<Array<"checkout"
        | "payment_link"
        | "invoice"
        | "subscription_initial"
        | "subscription_renewal"
        | "virtual_terminal"
        | "api">>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "min_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "max_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "none", "partially_refunded",
     * "refunded". Shape $[] (Value): string. Value enum: "none", "partially_refunded", "refunded".
     */
    "refund_status"?: InputValue<Array<"none" | "partially_refunded" | "refunded">>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type MeListPaymentMethodsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "card". Shape $[] (Value): string.
     * Value enum: "card".
     */
    "type"?: InputValue<Array<"card">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "pending", "expired",
     * "archived", "failed". Shape $[] (Value): string. Value enum: "active", "pending", "expired",
     * "archived", "failed".
     */
    "status"?: InputValue<Array<"active" | "pending" | "expired" | "archived" | "failed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "on_session", "off_session". Shape
     * $[] (Value): string. Value enum: "on_session", "off_session".
     */
    "usage"?: InputValue<Array<"on_session" | "off_session">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
export type MeListRefundsInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "succeeded",
     * "partially_succeeded", "failed". Shape $[] (Value): string. Value enum: "pending",
     * "succeeded", "partially_succeeded", "failed".
     */
    "status"?: InputValue<Array<"pending" | "succeeded" | "partially_succeeded" | "failed">>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "min_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. Example: "500".
     */
    "max_amount"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "amount_money".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "amount_money">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type MeListReturnsInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "approved",
     * "partially_approved", "declined". Shape $[] (Value): string. Value enum: "pending",
     * "approved", "partially_approved", "declined".
     */
    "decision_status"?: InputValue<Array<"pending" | "approved" | "partially_approved" | "declined">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception". Shape $[]
     * (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
     */
    "merchandise_status"?: InputValue<Array<"not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | "exception">>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "not_selected", "pending",
     * "partially_fulfilled", "requires_action", "fulfilled", "failed". Shape $[] (Value): string.
     * Value enum: "not_selected", "pending", "partially_fulfilled", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status"?: InputValue<Array<"not_selected" | "pending" | "partially_fulfilled" | "requires_action" | "fulfilled" | "failed">>;
    /** Shape $ (Value): string. */
    "return_number"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_reason_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "requested", "open", "completed",
     * "declined", "canceled". Shape $[] (Value): string. Value enum: "requested", "open",
     * "completed", "declined", "canceled".
     */
    "status"?: InputValue<Array<"requested" | "open" | "completed" | "declined" | "canceled">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
