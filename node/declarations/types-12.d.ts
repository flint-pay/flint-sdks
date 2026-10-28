import type { Customer } from './types-11.js';
import type { ResponseMeta } from './types-42.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type { InputValue } from '../runtime.js';
import type {
    CreateCustomerSessionRequestInput,
    CreateCustomerVerificationRequestInput,
    CreateCustomerAddressRequestInput,
    CreateCustomerDeletionRequestInput,
    CreateCustomerRequestInput
} from './types-6.js';
import type { RefreshCustomerSessionRequestInput } from './types-41.js';
import type { ConfirmCustomerVerificationRequestInput } from './types-5.js';
import type { LinkCustomerGuestPurchasesRequestInput, LocationCoordinate } from './types-30.js';
import type { UpdateCustomerAddressRequestInput } from './types-50.js';
import type { UpdateCustomerRequestInput } from './types-51.js';
import type { ReturnLineDecision, ReturnLineDecisionInput } from './types-43.js';
import type { Address } from './types-0.js';
import type {
    DeliveryWeeklyInterval,
    DeliveryWeeklyIntervalRequestRequestInput,
    DeliveryWeightUnitPrice,
    DeliveryWeightUnitPriceRequestInput
} from './types-16.js';
import type {
    DeliveryCoordinateRequestInput,
    DeliveryDistanceUnitPrice,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryCandidateOutcomeResourceCannotCalculate,
    DeliveryCandidateOutcomeResourceInputRequired,
    DeliveryCandidateOutcomeResourceRequiresCheckoutContext,
    DeliveryCandidateOutcomeResourceUnavailable,
    DeliveryInputRequirement
} from './types-13.js';
import type { DeliveryOptionProjection } from './types-14.js';
/** Shape $ (Value): {@link CustomerListResponse}. A page of `Customer` objects. */
export type CustomerListResponse = {
    /**
     * Shape $ (Value): Array of {@link Customer}. Shape $[] (Value): {@link Customer}. A
     * merchant's customer profile.
     */
    "data": Array<Customer>;
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
 * Shape $ (Value): {@link CustomerReceivableBalance}. A customer's outstanding and overdue amounts
 * in one currency.
 */
export type CustomerReceivableBalance = {
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "overdue_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link CustomerReceivables}. A customer's receivable balances by currency and
 * when they were observed.
 */
export type CustomerReceivables = {
    /**
     * Shape $ (Value): Array of {@link CustomerReceivableBalance}. Shape $[] (Value): {@link
     * CustomerReceivableBalance}. A customer's outstanding and overdue amounts in one currency.
     */
    "balances": Array<CustomerReceivableBalance>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "observed_at": string;
};
/** Shape $ (Value): {@link CustomerResponse}. A response containing `Customer` data. */
export type CustomerResponse = {
    /** Shape $ (Value): {@link Customer}. A merchant's customer profile. */
    "data": Customer;
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
 * Shape $ (Value): {@link CustomerSession}. A session granting a customer access to their saved
 * details.
 */
export type CustomerSession = {
    /** Shape $ (Value): string. When the session was created. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /** Shape $ (Value): string. */
    "customer_session_id": string;
    /**
     * Shape $ (Value): string. When the current secret stops authenticating account calls. Format:
     * date-time.
     */
    "expires_at": string;
    /** Shape $ (Value): string. When the refresh token expires. Format: date-time. */
    "refresh_token_expires_at": string;
    /**
     * Shape $ (Value): string. When the session was first revoked. Present exactly when status is
     * revoked. Format: date-time.
     */
    "revoked_at"?: string;
    /**
     * Shape $ (Value): string. active means the session can be refreshed and its secret works
     * until expires_at; revoked means none of its credentials work. Value enum: "active",
     * "revoked".
     */
    "status": "active" | "revoked" | (string & {});
};
/**
 * Shape $ (Value): {@link CustomerSessionResponse}. A response containing `CustomerSession` data.
 */
export type CustomerSessionResponse = {
    /**
     * Shape $ (Value): {@link CustomerSession}. A session granting a customer access to their
     * saved details.
     */
    "data": CustomerSession;
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
 * Shape $ (Value): {@link CustomerSessionWithSecret}. A customer session with its `secret` and
 * `refresh_token`, returned only when the session is created or refreshed. A session granting a
 * customer access to their saved details.
 */
export type CustomerSessionWithSecret = (Exclude<CustomerSession & object, readonly unknown[]>)
    & ({
    /**
     * Shape $ (Value): string. Single-use refresh token. Returned only on create and refresh;
     * retry rotation with the same Idempotency-Key.
     */
    "refresh_token": string;
    /**
     * Shape $ (Value): string. Current server-held customer session secret. Returned only on
     * create and refresh.
     */
    "secret": string;
});
/**
 * Shape $ (Value): {@link CustomerSessionWithSecretResponse}. A response containing
 * `CustomerSessionWithSecret` data.
 */
export type CustomerSessionWithSecretResponse = {
    /**
     * Shape $ (Value): {@link CustomerSessionWithSecret}. A customer session with its `secret` and
     * `refresh_token`, returned only when the session is created or refreshed. A session granting
     * a customer access to their saved details.
     */
    "data": CustomerSessionWithSecret;
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
export type CustomerSessionsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCustomerSessionRequestInput}. The request body for: Create a
     * customer session.
     */
    "body": InputValue<CreateCustomerSessionRequestInput>;
};
export type CustomerSessionsRefreshInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RefreshCustomerSessionRequestInput}. The request body for: Refresh a
     * customer session.
     */
    "body": InputValue<RefreshCustomerSessionRequestInput>;
};
/**
 * Shape $ (Value): {@link CustomerSessionsRevocation}. The result of revoking a customer's
 * sessions: the customer ID and how many sessions were revoked.
 */
export type CustomerSessionsRevocation = {
    /** Shape $ (Value): string. */
    "customer_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "revoked_count": `${bigint}`;
};
/**
 * Shape $ (Value): {@link CustomerSessionsRevocationResponse}. A response containing
 * `CustomerSessionsRevocation` data.
 */
export type CustomerSessionsRevocationResponse = {
    /**
     * Shape $ (Value): {@link CustomerSessionsRevocation}. The result of revoking a customer's
     * sessions: the customer ID and how many sessions were revoked.
     */
    "data": CustomerSessionsRevocation;
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
export type CustomerSessionsRevokeInput = {
    /** Shape $ (Value): string. */
    "customer_session_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link CustomerVerification}. An email verification requested for linking guest
 * purchases.
 */
export type CustomerVerification = {
    /** Shape $ (Value): string.  Value enum: "email". */
    "channel": "email" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /** Shape $ (Value): string. */
    "customer_verification_id": string;
    /** Shape $ (Value): string. */
    "email": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at": string;
    /** Shape $ (Value): string.  Value enum: "link_guest_purchases". */
    "purpose": "link_guest_purchases" | (string & {});
    /**
     * Shape $ (Value): string. pending while the code can be confirmed; confirmed while an unused
     * proof can link purchases; used after linking; expired when the code or proof expires. Value
     * enum: "pending", "confirmed", "used", "expired".
     */
    "status": "pending" | "confirmed" | "used" | "expired" | (string & {});
};
/**
 * Shape $ (Value): {@link CustomerVerificationResponse}. A response containing
 * `CustomerVerification` data.
 */
export type CustomerVerificationResponse = {
    /**
     * Shape $ (Value): {@link CustomerVerification}. An email verification requested for linking
     * guest purchases.
     */
    "data": CustomerVerification;
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
export type CustomerVerificationsConfirmInput = {
    /** Shape $ (Value): string. */
    "customer_verification_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ConfirmCustomerVerificationRequestInput}. The request body for:
     * Confirm a customer email verification.
     */
    "body": InputValue<ConfirmCustomerVerificationRequestInput>;
};
export type CustomerVerificationsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCustomerVerificationRequestInput}. The request body for:
     * Create a customer email verification.
     */
    "body": InputValue<CreateCustomerVerificationRequestInput>;
};
export type CustomersCreateAccessLinkInput = {
    /** Shape $ (Value): string. */
    "customer_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /** Shape $ (Value): object. maxProperties: 0. */
    "body"?: InputValue<{}>;
};
export type CustomersCreateAddressInput = {
    /** Shape $ (Value): string. */
    "customer_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCustomerAddressRequestInput}. The request body for: Create a
     * customer address; Create an address for the current buyer.
     */
    "body": InputValue<CreateCustomerAddressRequestInput>;
};
export type CustomersCreateDeletionRequestInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCustomerDeletionRequestInput}. The request body for: Request
     * customer account deletion.
     */
    "body": InputValue<CreateCustomerDeletionRequestInput>;
};
export type CustomersCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCustomerRequestInput}. The request body for: Create customer.
     */
    "body": InputValue<CreateCustomerRequestInput>;
};
export type CustomersDeleteAddressInput = {
    /** Shape $ (Value): string. */
    "customer_id": InputValue<string>;
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
export type CustomersGetAddressInput = {
    /** Shape $ (Value): string. */
    "customer_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "customer_address_id": InputValue<string>;
};
export type CustomersGetDeletionRequestInput = {
    /** Shape $ (Value): string. */
    "customer_deletion_request_id": InputValue<string>;
};
export type CustomersGetInput = {
    /** Shape $ (Value): string. */
    "customer_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "default_payment_method", "receivables". Shape
     * $[] (Value): string. Value enum: "default_payment_method", "receivables".
     */
    "expand"?: InputValue<Array<"default_payment_method" | "receivables">>;
};
export type CustomersLinkGuestPurchasesInput = {
    /** Shape $ (Value): string. */
    "customer_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link LinkCustomerGuestPurchasesRequestInput}. The request body for: Link
     * guest purchases to a customer.
     */
    "body": InputValue<LinkCustomerGuestPurchasesRequestInput>;
};
export type CustomersListAddressesInput = {
    /** Shape $ (Value): string. */
    "customer_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type CustomersListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "deletion_processing",
     * "deleted". Shape $[] (Value): string. Value enum: "active", "deletion_processing",
     * "deleted".
     */
    "status"?: InputValue<Array<"active" | "deletion_processing" | "deleted">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "email"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "segment"?: InputValue<string>;
    /** Shape $ (Value): boolean. */
    "is_merchant_verified"?: InputValue<boolean>;
    /** Shape $ (Value): string. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$. */
    "phone"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "name", "email", "created_at",
     * "updated_at".
     */
    "sort_by"?: InputValue<"name" | "email" | "created_at" | "updated_at">;
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
    /**
     * Shape $ (Value): Array of string. [] enum: "default_payment_method", "receivables". Shape
     * $[] (Value): string. Value enum: "default_payment_method", "receivables".
     */
    "expand"?: InputValue<Array<"default_payment_method" | "receivables">>;
};
export type CustomersRevokeSessionsInput = {
    /** Shape $ (Value): string. */
    "customer_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type CustomersUpdateAddressInput = {
    /** Shape $ (Value): string. */
    "customer_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "customer_address_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateCustomerAddressRequestInput}. The request body for: Update a
     * customer address; Update one of the current buyer's addresses. minProperties: 1.
     */
    "body": InputValue<UpdateCustomerAddressRequestInput>;
};
export type CustomersUpdateInput = {
    /** Shape $ (Value): string. */
    "customer_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateCustomerRequestInput}. The request body for: Update customer.
     */
    "body": InputValue<UpdateCustomerRequestInput>;
};
/**
 * Shape $ (Value): {@link DecideReturnInspectionLineItemRequest}. The request body for: Decide
 * return inspection line item.
 */
export type DecideReturnInspectionLineItemRequest = {
    /**
     * Shape $ (Value): string. Value enum: "inspection_result", "return_policy", "manual_review",
     * "other".
     */
    "acceptance_decision_reason": "inspection_result" | "return_policy" | "manual_review" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "acceptance_decision_reason_message"?: string;
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional version of the return inspection. A stale value
     * returns VERSION_CONFLICT with the inspection ID and its current version. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link DecideReturnInspectionLineItemRequestInput}. The request body for:
 * Decide return inspection line item.
 */
export type DecideReturnInspectionLineItemRequestInput = {
    /**
     * Shape $ (Value): string. Value enum: "inspection_result", "return_policy", "manual_review",
     * "other".
     */
    "acceptance_decision_reason": "inspection_result" | "return_policy" | "manual_review" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "acceptance_decision_reason_message"?: string;
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required";
    /**
     * Shape $ (Value): integer string. Optional version of the return inspection. A stale value
     * returns VERSION_CONFLICT with the inspection ID and its current version. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/** Shape $ (Value): {@link DecideReturnRequest}. The request body for: Decide return. */
export type DecideReturnRequest = {
    /**
     * Shape $ (Value): string. Omit to use the mode shared by all pinned policies that set
     * completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy
     * modes return 400 naming completion_mode only when completion_mode is omitted. An explicit
     * manual or automatic value is used as sent. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link ReturnLineDecision}. minItems: 1. Shape $[] (Value): {@link
     * ReturnLineDecision}. Start from the pinned policy proposal recomputed for approved_quantity
     * when the line has a policy evaluation and the proposal can be built. Otherwise start with
     * return_required_quantity equal to approved_quantity, allowed_resolution_types containing
     * refund, exchange, replacement, no_monetary_action, and store_credit in that order regardless
     * of whether the original payment is refundable, no automatic_resolution_type,
     * is_inspection_required false, and no receiving_location_id. Each supplied field replaces its
     * starting value; allowed_resolution_types replaces the whole list. Omit
     * automatic_resolution_type to keep its starting value, or send null to resolve manually. Then
     * fill an omitted release_timing with after_inspection when merchandise is required and
     * inspection is required, after_receipt when merchandise is required without inspection, or
     * after_approval when no merchandise is required. Validate the merged decision for quantity
     * bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned
     * policy always requires override_reason when approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
     * other decision fields use these defaults and override_reason is otherwise optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
     */
    "line_items": Array<ReturnLineDecision>;
};
/** Shape $ (Value): {@link DecideReturnRequestInput}. The request body for: Decide return. */
export type DecideReturnRequestInput = {
    /**
     * Shape $ (Value): string. Omit to use the mode shared by all pinned policies that set
     * completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy
     * modes return 400 naming completion_mode only when completion_mode is omitted. An explicit
     * manual or automatic value is used as sent. Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic";
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link ReturnLineDecisionInput}. minItems: 1. Shape $[] (Value):
     * {@link ReturnLineDecisionInput}. Start from the pinned policy proposal recomputed for
     * approved_quantity when the line has a policy evaluation and the proposal can be built.
     * Otherwise start with return_required_quantity equal to approved_quantity,
     * allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and
     * store_credit in that order regardless of whether the original payment is refundable, no
     * automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each
     * supplied field replaces its starting value; allowed_resolution_types replaces the whole
     * list. Omit automatic_resolution_type to keep its starting value, or send null to resolve
     * manually. Then fill an omitted release_timing with after_inspection when merchandise is
     * required and inspection is required, after_receipt when merchandise is required without
     * inspection, or after_approval when no merchandise is required. Validate the merged decision
     * for quantity bounds, allowed resolution types, and reachable timing and inspection
     * requirements. A pinned policy always requires override_reason when approved_quantity exceeds
     * evaluated eligible_quantity, even when no proposal can be built. With a pinned policy but no
     * proposal, other decision fields use these defaults and override_reason is otherwise
     * optional. Example:
     * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
     */
    "line_items": Array<ReturnLineDecisionInput>;
};
/**
 * Shape $ (Value): {@link DeclinePaymentReviewRequest}. The request body for: Decline a payment
 * review.
 */
export type DeclinePaymentReviewRequest = {
    /**
     * Shape $ (Value): boolean. Add the payment's card fingerprint, email and IP address to
     * Flint's default block lists, so later payments with any of them are blocked. Values the
     * payment didn't have are skipped. Defaults to false. Default: false.
     */
    "add_to_block_lists"?: boolean;
};
/**
 * Shape $ (Value): {@link DeclinePaymentReviewRequestInput}. The request body for: Decline a
 * payment review.
 */
export type DeclinePaymentReviewRequestInput = DeclinePaymentReviewRequest;
/**
 * Shape $ (Value): {@link DeliveryAddressAdvisoryResource}. An address verification result for a
 * delivery address or buyer location. `suggested_address` may offer a correction.
 */
export type DeliveryAddressAdvisoryResource = {
    /** Shape $ (Value): string.  Value enum: "destination_address", "buyer_location". */
    "role": "destination_address" | "buyer_location" | (string & {});
    /**
     * Shape $ (Value): {@link Address}. Omitted for a checkout session credential that doesn't act
     * for the customer the buyer verified. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "suggested_address"?: Address;
    /** Shape $ (Value): string.  Value enum: "needs_review", "unverifiable". */
    "verification_state": "needs_review" | "unverifiable" | (string & {});
};
/**
 * Shape $ (Value): {@link DeliveryAddressRequest}. A partial address for delivery quotes,
 * previews, and buyer locations. Country is required when any member is present.
 */
export type DeliveryAddressRequest = ({
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "city"?: string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "line1"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "line2"?: string;
    /** Shape $ (Value): string. minLength: 1. maxLength: 20. */
    "postal_code"?: string;
    /**
     * Shape $ (Value): string. State, province, or region. State conditions read it as a
     * subdivision of the address's country: send its code with or without the country prefix, such
     * as NY or US-NY. In the US and Canada, the English name, such as New York, also matches. US
     * addresses also accept the USPS military codes AA, AE, and AP. If the address country is
     * listed by a state condition but state names no subdivision of that country, the condition
     * cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input).
     * minLength: 1. maxLength: 100.
     */
    "state"?: string;
});
/**
 * Shape $ (Value): {@link DeliveryAddressRequestInput}. A partial address for delivery quotes,
 * previews, and buyer locations. Country is required when any member is present.
 */
export type DeliveryAddressRequestInput = DeliveryAddressRequest;
/**
 * Shape $ (Value): {@link DeliveryArrivalEstimate}. The estimated arrival date range for a
 * delivery option, as calendar dates in the option's timezone.
 */
export type DeliveryArrivalEstimate = {
    /**
     * Shape $ (Value): string. Calendar date in the option timezone. Do not parse it as a UTC
     * timestamp. Format: date.
     */
    "earliest_date": string;
    /**
     * Shape $ (Value): string. Calendar date in the option timezone. Do not parse it as a UTC
     * timestamp. Format: date.
     */
    "latest_date": string;
    /** Shape $ (Value): string. */
    "timezone": string;
};
/**
 * Shape $ (Value): {@link DeliveryAvailability}. When a delivery method can be scheduled: weekly
 * intervals, blackout intervals, lead time, and how far ahead a buyer can book.
 */
export type DeliveryAvailability = {
    /**
     * Shape $ (Value): Array of {@link DeliveryBlackoutInterval}. Shape $[] (Value): {@link
     * DeliveryBlackoutInterval}. A local start and end time during which a delivery schedule
     * offers no windows.
     */
    "blackout_intervals"?: Array<DeliveryBlackoutInterval>;
    /** Shape $ (Value): string. Default: "earlier". Value enum: "earlier", "later". */
    "dst_disambiguation"?: "earlier" | "later" | (string & {});
    /** Shape $ (Value): integer. */
    "maximum_scheduling_horizon_days": number;
    /**
     * Shape $ (Value): integer string. Notice the merchant needs before a window starts, in
     * seconds. A buyer can choose a window until this long before it starts. Quotes offer only
     * windows that can still be chosen, so a window already under way is not offered. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "preparation_lead_time_seconds": `${bigint}`;
    /** Shape $ (Value): integer. */
    "same_day_cutoff_minute"?: number;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone": string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWeeklyInterval}. Shape $[] (Value): {@link
     * DeliveryWeeklyInterval}. A recurring weekly span, from a start weekday and minute to an end
     * weekday and minute, used in a delivery method's availability schedule.
     */
    "weekly_intervals": Array<DeliveryWeeklyInterval>;
};
/**
 * Shape $ (Value): {@link DeliveryAvailabilityRequestRequestInput}. When a delivery method can be
 * scheduled: weekly intervals, blackout intervals, lead time, and how far ahead a buyer can book.
 */
export type DeliveryAvailabilityRequestRequestInput = {
    /**
     * Shape $ (Value): Array of {@link DeliveryBlackoutIntervalRequestRequestInput}. Shape $[]
     * (Value): {@link DeliveryBlackoutIntervalRequestRequestInput}. A local start and end time
     * during which a delivery schedule offers no windows.
     */
    "blackout_intervals"?: Array<DeliveryBlackoutIntervalRequestRequestInput>;
    /** Shape $ (Value): string. Default: "earlier". Value enum: "earlier", "later". */
    "dst_disambiguation"?: "earlier" | "later";
    /** Shape $ (Value): integer. */
    "maximum_scheduling_horizon_days": number;
    /**
     * Shape $ (Value): integer string. Notice the merchant needs before a window starts, in
     * seconds. A buyer can choose a window until this long before it starts. Quotes offer only
     * windows that can still be chosen, so a window already under way is not offered. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "preparation_lead_time_seconds": `${bigint}` | bigint;
    /** Shape $ (Value): integer. */
    "same_day_cutoff_minute"?: number;
    /** Shape $ (Value): string. minLength: 1. */
    "timezone": string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWeeklyIntervalRequestRequestInput}. Shape $[]
     * (Value): {@link DeliveryWeeklyIntervalRequestRequestInput}. A recurring weekly span, from a
     * start weekday and minute to an end weekday and minute, used in a delivery method's
     * availability schedule.
     */
    "weekly_intervals": Array<DeliveryWeeklyIntervalRequestRequestInput>;
};
/**
 * Shape $ (Value): {@link DeliveryBlackoutInterval}. A local start and end time during which a
 * delivery schedule offers no windows.
 */
export type DeliveryBlackoutInterval = {
    /** Shape $ (Value): string. minLength: 1. */
    "end_local": string;
    /** Shape $ (Value): string. minLength: 1. */
    "start_local": string;
};
/**
 * Shape $ (Value): {@link DeliveryBlackoutIntervalRequestRequestInput}. A local start and end time
 * during which a delivery schedule offers no windows.
 */
export type DeliveryBlackoutIntervalRequestRequestInput = DeliveryBlackoutInterval;
/**
 * Shape $ (Value): {@link DeliveryBusinessDayRange}. A minimum and maximum number of business
 * days, used in transit time estimates.
 */
export type DeliveryBusinessDayRange = {
    /** Shape $ (Value): integer. */
    "maximum": number;
    /** Shape $ (Value): integer. */
    "minimum": number;
};
/**
 * Shape $ (Value): {@link DeliveryBusinessDayRangeRequestRequestInput}. A minimum and maximum
 * number of business days, used in transit time estimates.
 */
export type DeliveryBusinessDayRangeRequestRequestInput = DeliveryBusinessDayRange;
/**
 * Shape $ (Value): {@link DeliveryBuyerLocationInputAddress}. The `address` variant of
 * `DeliveryBuyerLocationInput`.
 */
export type DeliveryBuyerLocationInputAddress = ({
    /**
     * Shape $ (Value): {@link DeliveryAddressRequest}. A partial address for delivery quotes,
     * previews, and buyer locations. Country is required when any member is present.
     */
    "address": DeliveryAddressRequest;
    /** Shape $ (Value): {@link LocationCoordinate}. A latitude and longitude. */
    "coordinate"?: LocationCoordinate;
    /** Shape $ (Value): string.  Value enum: "address". */
    "type": "address" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "address". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link DeliveryAddressRequest}. A partial address for delivery quotes,
     * previews, and buyer locations. Country is required when any member is present.
     */
    "address": DeliveryAddressRequest;
}));
/**
 * Shape $ (Value): {@link DeliveryBuyerLocationInputAddressInput}. The `address` variant of
 * `DeliveryBuyerLocationInput`.
 */
export type DeliveryBuyerLocationInputAddressInput = ({
    /**
     * Shape $ (Value): {@link DeliveryAddressRequestInput}. A partial address for delivery quotes,
     * previews, and buyer locations. Country is required when any member is present.
     */
    "address": DeliveryAddressRequestInput;
    /** Shape $ (Value): {@link DeliveryCoordinateRequestInput}. A latitude and longitude. */
    "coordinate"?: DeliveryCoordinateRequestInput;
    /** Shape $ (Value): string.  Value enum: "address". */
    "type": "address";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "address". */
    "type": ("address") & ("address");
    /**
     * Shape $ (Value): {@link DeliveryAddressRequestInput}. A partial address for delivery quotes,
     * previews, and buyer locations. Country is required when any member is present.
     */
    "address": DeliveryAddressRequestInput;
})
    & ({
    "coordinate"?: never;
}));
/**
 * Shape $ (Value): {@link DeliveryBuyerLocationInputCoordinate}. The `coordinate` variant of
 * `DeliveryBuyerLocationInput`.
 */
export type DeliveryBuyerLocationInputCoordinate = ({
    /**
     * Shape $ (Value): {@link DeliveryAddressRequest}. A partial address for delivery quotes,
     * previews, and buyer locations. Country is required when any member is present.
     */
    "address"?: DeliveryAddressRequest;
    /** Shape $ (Value): {@link LocationCoordinate}. A latitude and longitude. */
    "coordinate": LocationCoordinate;
    /** Shape $ (Value): string.  Value enum: "coordinate". */
    "type": "coordinate" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "coordinate". */
    "type": unknown;
    /** Shape $ (Value): {@link LocationCoordinate}. A latitude and longitude. */
    "coordinate": LocationCoordinate;
}));
/**
 * Shape $ (Value): {@link DeliveryBuyerLocationInputCoordinateInput}. The `coordinate` variant of
 * `DeliveryBuyerLocationInput`.
 */
export type DeliveryBuyerLocationInputCoordinateInput = ({
    /**
     * Shape $ (Value): {@link DeliveryAddressRequestInput}. A partial address for delivery quotes,
     * previews, and buyer locations. Country is required when any member is present.
     */
    "address"?: DeliveryAddressRequestInput;
    /** Shape $ (Value): {@link DeliveryCoordinateRequestInput}. A latitude and longitude. */
    "coordinate": DeliveryCoordinateRequestInput;
    /** Shape $ (Value): string.  Value enum: "coordinate". */
    "type": "coordinate";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "coordinate". */
    "type": ("coordinate") & ("coordinate");
    /** Shape $ (Value): {@link DeliveryCoordinateRequestInput}. A latitude and longitude. */
    "coordinate": DeliveryCoordinateRequestInput;
})
    & ({
    "address"?: never;
}));
/**
 * Shape $ (Value): {@link DeliveryBuyerLocationRequest}. The buyer's location for pickup or local
 * delivery, supplied as an address or a coordinate, chosen by `type`.
 */
export type DeliveryBuyerLocationRequest = ({
    /**
     * Shape $ (Value): {@link DeliveryAddressRequest}. A partial address for delivery quotes,
     * previews, and buyer locations. Country is required when any member is present.
     */
    "address"?: DeliveryAddressRequest;
    /** Shape $ (Value): {@link LocationCoordinate}. A latitude and longitude. */
    "coordinate"?: LocationCoordinate;
    /** Shape $ (Value): string.  Value enum: "address", "coordinate". */
    "type": "address" | "coordinate" | (string & {});
})
    & ((Exclude<DeliveryBuyerLocationInputAddress & object, readonly unknown[]>)
    | (Exclude<DeliveryBuyerLocationInputCoordinate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryBuyerLocationRequestInput}. The buyer's location for pickup or
 * local delivery, supplied as an address or a coordinate, chosen by `type`.
 */
export type DeliveryBuyerLocationRequestInput = ({
    /**
     * Shape $ (Value): {@link DeliveryAddressRequestInput}. A partial address for delivery quotes,
     * previews, and buyer locations. Country is required when any member is present.
     */
    "address"?: DeliveryAddressRequestInput;
    /** Shape $ (Value): {@link DeliveryCoordinateRequestInput}. A latitude and longitude. */
    "coordinate"?: DeliveryCoordinateRequestInput;
    /** Shape $ (Value): string.  Value enum: "address", "coordinate". */
    "type": "address" | "coordinate";
})
    & ((Exclude<DeliveryBuyerLocationInputAddressInput & object, readonly unknown[]>)
    | (Exclude<DeliveryBuyerLocationInputCoordinateInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link DeliveryBuyerLocationResource}. The normalized buyer address or
 * coordinate used for this quote.
 */
export type DeliveryBuyerLocationResource = ({
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
    /** Shape $ (Value): {@link LocationCoordinate}. A latitude and longitude. */
    "coordinate"?: LocationCoordinate;
    /** Shape $ (Value): string.  Value enum: "address", "coordinate". */
    "type": "address" | "coordinate" | (string & {});
})
    & ((Exclude<DeliveryBuyerLocationResourceAddress & object, readonly unknown[]>)
    | (Exclude<DeliveryBuyerLocationResourceCoordinate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryBuyerLocationResourceAddress}. The normalized buyer address or
 * coordinate used for this quote.
 */
export type DeliveryBuyerLocationResourceAddress = ({
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address": Address;
    /** Shape $ (Value): {@link LocationCoordinate}. A latitude and longitude. */
    "coordinate"?: LocationCoordinate;
    /** Shape $ (Value): string.  Value enum: "address". */
    "type": "address" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "address". */
    "type": unknown;
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address": Address;
}));
/**
 * Shape $ (Value): {@link DeliveryBuyerLocationResourceCoordinate}. The normalized buyer address
 * or coordinate used for this quote.
 */
export type DeliveryBuyerLocationResourceCoordinate = ({
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
    /** Shape $ (Value): {@link LocationCoordinate}. A latitude and longitude. */
    "coordinate": LocationCoordinate;
    /** Shape $ (Value): string.  Value enum: "coordinate". */
    "type": "coordinate" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "coordinate". */
    "type": unknown;
    /** Shape $ (Value): {@link LocationCoordinate}. A latitude and longitude. */
    "coordinate": LocationCoordinate;
}));
/**
 * Shape $ (Value): {@link DeliveryCalculatedPricingStrategy}. Delivery pricing calculated from a
 * base fee, distance, weight, and per-item handling, with minimum and maximum fees, by currency.
 */
export type DeliveryCalculatedPricingStrategy = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Base delivery fee by ISO currency code. Each key
     * must equal the Money object's currency. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "base_fee_currency_options"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): {@link DeliveryDistanceUnitPrice}. A distance rate for calculated delivery
     * pricing: a price by currency for each `unit_quantity` of `unit`.
     */
    "distance"?: DeliveryDistanceUnitPrice;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Maximum delivery fee by ISO currency code. Each
     * key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "maximum_fee_currency_options"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Minimum delivery fee by ISO currency code. Each
     * key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_fee_currency_options"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Handling fee per item by ISO currency code. Each
     * key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "per_item_handling_fee_currency_options"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): {@link DeliveryWeightUnitPrice}. Price per unit of weight for calculated
     * pricing: a price per currency for each `unit_quantity` of the chosen weight `unit`.
     */
    "weight"?: DeliveryWeightUnitPrice;
};
/**
 * Shape $ (Value): {@link DeliveryCalculatedPricingStrategyRequestInput}. Calculated delivery
 * pricing you supply for a delivery method: base fee, distance and weight rates, per-item
 * handling, and fee limits, by currency.
 */
export type DeliveryCalculatedPricingStrategyRequestInput = {
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Base delivery fee by ISO currency code.
     * Each key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "base_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): {@link DeliveryDistanceUnitPriceRequestInput}. A distance rate you supply
     * for calculated delivery pricing: a price by currency for each `unit_quantity` of `unit`.
     */
    "distance"?: DeliveryDistanceUnitPriceRequestInput;
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Maximum delivery fee by ISO currency code.
     * Each key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "maximum_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Minimum delivery fee by ISO currency code.
     * Each key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Handling fee per item by ISO currency code.
     * Each key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "per_item_handling_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): {@link DeliveryWeightUnitPriceRequestInput}. Price per unit of weight you
     * supply for calculated pricing: a price per currency for each `unit_quantity` of the chosen
     * weight `unit`.
     */
    "weight"?: DeliveryWeightUnitPriceRequestInput;
};
/**
 * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequest}. Delivery pricing you supply
 * that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and maximum
 * fees by currency.
 */
export type DeliveryCallbackPricingStrategyRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id": string;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Maximum delivery fee by ISO currency code. Each
     * key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "maximum_fee_currency_options"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Minimum delivery fee by ISO currency code. Each
     * key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_fee_currency_options"?: Record<string, MoneyValue>;
    /** Shape $ (Value): boolean. */
    "preview_enabled"?: boolean;
};
/**
 * Shape $ (Value): {@link DeliveryCallbackPricingStrategyRequestInput}. Delivery pricing you
 * supply that comes from a delivery rate callback (`delivery_rate_callback_id`), with minimum and
 * maximum fees by currency.
 */
export type DeliveryCallbackPricingStrategyRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_rate_callback_id": string;
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Maximum delivery fee by ISO currency code.
     * Each key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "maximum_fee_currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Minimum delivery fee by ISO currency code.
     * Each key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_fee_currency_options"?: Record<string, MoneyValueInput>;
    /** Shape $ (Value): boolean. */
    "preview_enabled"?: boolean;
};
/**
 * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequest}. Delivery pricing where
 * you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by
 * currency.
 */
export type DeliveryCallerSuppliedPricingStrategyRequest = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Maximum delivery fee by ISO currency code. Each
     * key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "maximum_fee_currency_options": Record<string, MoneyValue>;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Minimum delivery fee by ISO currency code. Each
     * key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_fee_currency_options": Record<string, MoneyValue>;
};
/**
 * Shape $ (Value): {@link DeliveryCallerSuppliedPricingStrategyRequestInput}. Delivery pricing
 * where you supply the rate when creating a delivery quote, bounded by minimum and maximum fees by
 * currency.
 */
export type DeliveryCallerSuppliedPricingStrategyRequestInput = {
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Maximum delivery fee by ISO currency code.
     * Each key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "maximum_fee_currency_options": Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Minimum delivery fee by ISO currency code.
     * Each key must equal the Money object's currency. Shape $.* (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "minimum_fee_currency_options": Record<string, MoneyValueInput>;
};
/**
 * Shape $ (Value): {@link DeliveryCandidateOutcomeResource}. The result of evaluating one delivery
 * method for a choice group, selected by `type`: available with an option, unavailable, input
 * required, cannot calculate, or requires checkout context.
 */
export type DeliveryCandidateOutcomeResource = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryAddressAdvisoryResource}. Shape $[] (Value): {@link
     * DeliveryAddressAdvisoryResource}. An address verification result for a delivery address or
     * buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network
     * connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the
     * callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the
     * callback result fields or values identified by the callback logs, then retry. -
     * `callback_unavailable`: Retry when callback capacity is available, restore the configured
     * callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the
     * method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the
     * method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`:
     * Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for
     * a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the
     * invalid delivery configuration identified by diagnostics, then retry. -
     * `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. -
     * `address_verification_failed`: Correct the address fields rejected by verification, then
     * retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when
     * address verification is available. Value enum: "dependency_failure", "timeout",
     * "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Shape $ (Value): Array of {@link DeliveryInputRequirement}. Shape $[] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /**
     * Shape $ (Value): {@link DeliveryOptionProjection}. A delivery option in a quote or preview:
     * its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local
     * delivery details.
     */
    "option"?: DeliveryOptionProjection;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /**
     * Shape $ (Value): string. Value enum: "available", "unavailable", "input_required",
     * "cannot_calculate", "requires_checkout_context".
     */
    "type": "available"
        | "unavailable"
        | "input_required"
        | "cannot_calculate"
        | "requires_checkout_context"
        | (string & {});
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: Choose an origin or method backed by available inventory. Value
     * enum: "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
})
    & ((Exclude<DeliveryCandidateOutcomeResourceAvailable & object, readonly unknown[]>)
    | (Exclude<DeliveryCandidateOutcomeResourceUnavailable & object, readonly unknown[]>)
    | (Exclude<DeliveryCandidateOutcomeResourceInputRequired & object, readonly unknown[]>)
    | (Exclude<DeliveryCandidateOutcomeResourceCannotCalculate & object, readonly unknown[]>)
    | (Exclude<DeliveryCandidateOutcomeResourceRequiresCheckoutContext & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link DeliveryCandidateOutcomeResourceAvailable}. The `available` variant of
 * `DeliveryCandidateOutcomeResource`.
 */
export type DeliveryCandidateOutcomeResourceAvailable = ({
    /**
     * Shape $ (Value): Array of {@link DeliveryAddressAdvisoryResource}. Shape $[] (Value): {@link
     * DeliveryAddressAdvisoryResource}. An address verification result for a delivery address or
     * buyer location. `suggested_address` may offer a correction.
     */
    "address_advisories"?: Array<DeliveryAddressAdvisoryResource>;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `callback_transport_failure`: Restore callback DNS, TLS, network
     * connectivity, and response timing, then retry. - `callback_circuit_open`: Restore the
     * callback and wait for circuit recovery before retrying. - `callback_result_invalid`: Fix the
     * callback result fields or values identified by the callback logs, then retry. -
     * `callback_unavailable`: Retry when callback capacity is available, restore the configured
     * callback endpoint, or choose a non-callback pricing strategy. - `pricing_failure`: Fix the
     * method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the
     * method schedule, timezone, or requested window, then retry. - `option_lifetime_too_short`:
     * Lower the method's minimum option lifetime below the quote's remaining lifetime. A quote for
     * a cart with tracked inventory lasts just under 5 minutes. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `invalid_configuration`: Correct the
     * invalid delivery configuration identified by diagnostics, then retry. -
     * `invalid_buyer_input`: Correct the buyer input identified by the outcome, then retry. -
     * `address_verification_failed`: Correct the address fields rejected by verification, then
     * retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when
     * address verification is available. Value enum: "dependency_failure", "timeout",
     * "malformed_response", "callback_transport_failure", "callback_circuit_open",
     * "callback_result_invalid", "callback_unavailable", "pricing_failure", "schedule_failure",
     * "option_lifetime_too_short", "geography_failure", "routing_failure",
     * "invalid_configuration", "invalid_buyer_input", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "callback_transport_failure"
        | "callback_circuit_open"
        | "callback_result_invalid"
        | "callback_unavailable"
        | "pricing_failure"
        | "schedule_failure"
        | "option_lifetime_too_short"
        | "geography_failure"
        | "routing_failure"
        | "invalid_configuration"
        | "invalid_buyer_input"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Shape $ (Value): Array of {@link DeliveryInputRequirement}. Shape $[] (Value): {@link
     * DeliveryInputRequirement}. An input a delivery method needs, such as an address field or
     * time window, with its `field_path`, purpose, and constraint.
     */
    "input_requirements"?: Array<DeliveryInputRequirement>;
    /**
     * Shape $ (Value): {@link DeliveryOptionProjection}. A delivery option in a quote or preview:
     * its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local
     * delivery details.
     */
    "option": DeliveryOptionProjection;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string.  Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `method_type_not_allowed`: Choose a
     * method type allowed by every line item in the choice group. - `pricing_unavailable`: Add or
     * activate a matching rate, or provide the required caller-supplied price. -
     * `inventory_unavailable`: Choose an origin or method backed by available inventory. Value
     * enum: "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "method_type_not_allowed", "pricing_unavailable",
     * "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "method_type_not_allowed"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
})
    & ({
    /** Shape $ (Value): string.  Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * Shape $ (Value): {@link DeliveryOptionProjection}. A delivery option in a quote or preview:
     * its price, type, timing, delivery plan, execution legs, and shipment, pickup, or local
     * delivery details.
     */
    "option": DeliveryOptionProjection;
});
