import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type {
    Ticket,
    TicketListResponse,
    TicketResponse,
    TicketWithAdmissionCode,
    TicketWithAdmissionCodeResponse,
    TicketsCheckInParams,
    TicketsGetParams,
    TicketsListParams,
    TicketsLookupParams,
    TicketsRotateCodeParams,
    TicketsUndoCheckInParams,
    TicketsUpdateParams,
    TicketsVoidParams
} from '../declarations/types-65.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    TicketsCheckInParams,
    Ticket,
    TicketResponse,
    TicketsGetParams,
    TicketsListParams,
    TicketListResponse,
    TicketsLookupParams,
    TicketsRotateCodeParams,
    TicketWithAdmissionCode,
    TicketWithAdmissionCodeResponse,
    TicketsUndoCheckInParams,
    TicketsUpdateParams,
    TicketsVoidParams,
    TicketVersionRequestInput
} from '../declarations/types-65.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CheckInTicketRequestInput, CheckoutBuyerContact, CheckInTicketRequest } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { ExpandedOrderSummary } from '../declarations/types-24.js';
export type { DeferredPromotion } from '../declarations/types-16.js';
export type { PricingAmounts } from '../declarations/types-49.js';
export type { MoneyValue, NextAction } from '../declarations/types-38.js';
export type { OrderSettlementAmounts } from '../declarations/types-41.js';
export type { SettlementAmounts } from '../declarations/types-59.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { LookupTicketRequestInput, LookupTicketRequest } from '../declarations/types-35.js';
export type { UpdateTicketRequestInput, UpdateTicketRequest } from '../declarations/types-68.js';
export { makeCheckInTicketRequest } from '../declarations/types-70.js';
export { makeLookupTicketRequest } from '../declarations/types-77.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export { makeTicketVersionRequest } from '../declarations/types-83.js';
export { makeUpdateTicketRequest } from '../declarations/types-84.js';
export interface TicketsResource {
    /**
 * Admits an issued ticket. Concurrent check-ins of one ticket admit it once: the others return 409
 * ACTION_NOT_ALLOWED with reason already_applied and current_status checked_in. A stale
 * expected_version returns 409 VERSION_CONFLICT first, so scanners usually omit it. With
 * admission_code the check-in method is admission_code, and the code must be the ticket's current
 * code: a wrong code returns 400 at admission_code and changes nothing. Without a code the method
 * is manual. A voided ticket returns reason unsupported_state. There is no event-time window. The
 * code is never returned or logged.
 *
 * `POST /v1/tickets/{ticket_id}/check-in`
 * @param ticket_id The ticket ID.
 * @see https://developers.withflintpay.com/docs/api/tickets#checkInTicket
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.tickets.checkIn("tkt_01KEZF7C00AWVKS6GAX8RMEBZ8", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    checkIn(ticket_id: InputValue<string>, params?: TicketsCheckInParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Ticket, TicketResponse>>;
    /**
 * Returns an individual ticket. Merchant credentials never receive its admission code. The
 * checkout credential of a paid checkout session reads only its own order's tickets, without
 * expand, and receives admission_code unless the ticket is voided or the credential came from a
 * launch URL a merchant read or requested after payment; another order's ticket returns 404
 * RESOURCE_NOT_FOUND.
 *
 * `GET /v1/tickets/{ticket_id}`
 * @param ticket_id The ticket ID.
 * @see https://developers.withflintpay.com/docs/api/tickets#getTicket
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.tickets.get("tkt_01KEZF7C00AWVKS6GAX8RMEBZ8")
 */
    get(ticket_id: InputValue<string>, params?: TicketsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<Ticket, TicketResponse>>;
    /**
 * Lists individual event tickets, newest first by default. Merchant credentials never receive
 * admission codes. The checkout credential of a paid checkout session lists only its own order's
 * tickets: it must send that order_id, may not send other filters, search, sort or expand, and
 * receives admission_code on every ticket that isn't voided, unless the credential came from a
 * launch URL a merchant read or requested after payment. Any other order_id returns 403, as
 * reading another order does. Default order: created_at descending, then ticket_id descending.
 *
 * `GET /v1/tickets`
 * @see https://developers.withflintpay.com/docs/api/tickets#listTickets
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.tickets.list()
 */
    list(params?: TicketsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<TicketListResponse, TicketListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/tickets#listTickets
     */
    listPages(params?: TicketsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<WithResponseInfo<TicketListResponse, TicketListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/tickets#listTickets
     */
    listItems(params?: TicketsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): AsyncGenerator<Ticket>;
    /**
 * Looks up an admission code in the authenticated merchant and environment, including voided
 * tickets. ASCII lowercase, spaces and hyphens are accepted; O maps to 0 and I/L to 1. Malformed
 * codes return 400 INVALID_VALUE; an unknown or foreign code returns 404 RESOURCE_NOT_FOUND at
 * admission_code. The code is never returned.
 *
 * `POST /v1/tickets/lookup`
 * @see https://developers.withflintpay.com/docs/api/tickets#lookupTicket
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.tickets.lookup({admission_code: "0123456789AB1234"})
 */
    lookup(params: TicketsLookupParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Ticket, TicketResponse>>;
    /**
 * Replaces the ticket's admission code and returns the new code once, in admission_code. The old
 * code stops working immediately. Use it to deliver tickets yourself with send_ticket_emails
 * turned off. A retry with the same Idempotency-Key within 24 hours returns the code again while
 * the ticket is unchanged since this rotation; after any later change, including another rotation,
 * it returns the ticket without admission_code. A voided ticket returns 409 ACTION_NOT_ALLOWED
 * with reason unsupported_state.
 *
 * `POST /v1/tickets/{ticket_id}/rotate-code`
 * @param ticket_id The ticket ID.
 * @see https://developers.withflintpay.com/docs/api/tickets#rotateTicketCode
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.tickets.rotateCode("tkt_01KEZF7C00AWVKS6GAX8RMEBZ8", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    rotateCode(ticket_id: InputValue<string>, params?: TicketsRotateCodeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TicketWithAdmissionCode, TicketWithAdmissionCodeResponse>>;
    /**
 * Returns a checked-in ticket to issued and clears checked_in_at and check_in_method. An issued
 * ticket returns 409 ACTION_NOT_ALLOWED with reason already_applied; a voided ticket returns
 * reason unsupported_state.
 *
 * `POST /v1/tickets/{ticket_id}/undo-check-in`
 * @param ticket_id The ticket ID.
 * @see https://developers.withflintpay.com/docs/api/tickets#undoTicketCheckIn
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.tickets.undoCheckIn("tkt_01KEZF7C00AWVKS6GAX8RMEBZ8", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    undoCheckIn(ticket_id: InputValue<string>, params?: TicketsUndoCheckInParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Ticket, TicketResponse>>;
    /**
 * Sets the attendee name. Surrounding whitespace is trimmed; send null to clear the name. Sending
 * the current name changes nothing and keeps the version. A voided ticket returns 409
 * ACTION_NOT_ALLOWED with reason unsupported_state.
 *
 * `PATCH /v1/tickets/{ticket_id}`
 * @param ticket_id The ticket ID.
 * @see https://developers.withflintpay.com/docs/api/tickets#updateTicket
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.tickets.update("tkt_01ARZ3NDEKTSV4RRFFQ69G5FAV", {attendee_name: "Example Attendee"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(ticket_id: InputValue<string>, params: TicketsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Ticket, TicketResponse>>;
    /**
 * Permanently voids an issued or checked-in ticket and releases its seat: the payment link's
 * total_quantity_sold drops by one in the same transaction. Like a refund release, this doesn't
 * change the link's version or send payment_link.updated. Nothing is refunded and the order's
 * ticketed_event doesn't change. A later full refund of the order releases only its remaining
 * valid tickets. A voided ticket returns 409 ACTION_NOT_ALLOWED with reason already_applied.
 *
 * `POST /v1/tickets/{ticket_id}/void`
 * @param ticket_id The ticket ID.
 * @see https://developers.withflintpay.com/docs/api/tickets#voidTicket
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.tickets.void("tkt_01KEZF7C00AWVKS6GAX8RMEBZ8", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    void(ticket_id: InputValue<string>, params?: TicketsVoidParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Ticket, TicketResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly tickets: TicketsResource;
}
