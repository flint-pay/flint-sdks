import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    Dispute,
    DisputeListResponse,
    DisputeResponse,
    DisputeResponseSession,
    DisputeResponseSessionResponse,
    DisputesAcceptParams,
    DisputesCreateResponseSessionParams,
    DisputesGetParams,
    DisputesListParams,
    DisputesSimulateParams
} from '../declarations/types-20.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    DisputesAcceptParams,
    Dispute,
    DisputeResponse,
    DisputesCreateResponseSessionParams,
    DisputeResponseSession,
    DisputeResponseSessionResponse,
    DisputesGetParams,
    DisputesListParams,
    DisputeListResponse,
    DisputesSimulateParams,
    DisputeResponseSessionClientSession,
    DisputeResponseSessionStripe,
    DisputeResponseSessionStripeAccountSession,
    DisputeResponseSessionStripeComponent
} from '../declarations/types-20.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from '../declarations/types-21.js';
export type { CheckoutBuyerContact } from '../declarations/types-4.js';
export type { PricingAmounts, PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary } from '../declarations/types-43.js';
export type { SettlementAmounts, SimulateDisputeRequestInput } from '../declarations/types-53.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeSimulateDisputeRequest } from '../declarations/types-72.js';
export interface DisputesResource {
    /**
 * Accepts a chargeback: you won't contest it, and the disputed amount stays with the buyer. The
 * dispute becomes `lost`, and Flint sends `dispute.lost`. You can accept while `status` is
 * `needs_response` and `is_action_required` is `true`. An inquiry can't be accepted; refund the
 * payment or respond with evidence instead. Accepting can't be undone. Requires
 * `payments.disputes.write`. Send no body or `{}`. If you don't receive a response, retry with the
 * same `Idempotency-Key`, or read the dispute: `status: lost` means it was accepted.
 *
 * `POST /v1/disputes/{dispute_id}/accept`
 * @param dispute_id Flint dispute ID.
 * @see https://developers.withflintpay.com/docs/api/disputes#acceptDispute
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.disputes.accept("du_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    accept(dispute_id: InputValue<string>, params?: DisputesAcceptParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Dispute, DisputeResponse>>;
    /**
 * Creates a browser session for responding to or viewing a dispute with Stripe Connect. Requires
 * payments.disputes.write. Allowed for closed disputes; bank returns cannot be contested. Pass the
 * returned payment to setPayment or the React payment prop. Each completed retry creates a fresh
 * single-use client secret. Keep your API key on your server.
 *
 * `POST /v1/disputes/{dispute_id}/response-sessions`
 * @param dispute_id Flint dispute ID.
 * @see https://developers.withflintpay.com/docs/api/disputes#createDisputeResponseSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.disputes.createResponseSession("du_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    createResponseSession(dispute_id: InputValue<string>, params?: DisputesCreateResponseSessionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DisputeResponseSession, DisputeResponseSessionResponse>>;
    /**
 * Returns one dispute by ID, with optional customer, order, and payment intent expansions.
 *
 * `GET /v1/disputes/{dispute_id}`
 * @param dispute_id Flint dispute ID.
 * @see https://developers.withflintpay.com/docs/api/disputes#getDispute
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.disputes.get("du_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(dispute_id: InputValue<string>, params?: DisputesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Dispute, DisputeResponse>>;
    /**
 * Returns a paginated list of disputes for the authenticated merchant with optional payment,
 * customer, status, reason, case type, action required, and timing filters. Defaults to created_at
 * descending. The amount sort compares amount_money.amount in minor units. The evidence_due_at
 * sort places disputes without deadlines last in either direction. Default order: created_at
 * descending, then dispute_id descending.
 *
 * `GET /v1/disputes`
 * @see https://developers.withflintpay.com/docs/api/disputes#listDisputes
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.disputes.list()
 */
    list(params?: DisputesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DisputeListResponse, DisputeListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/disputes#listDisputes
     */
    listPages(params?: DisputesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<DisputeListResponse, DisputeListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/disputes#listDisputes
     */
    listItems(params?: DisputesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Dispute>;
    /**
 * Sandbox only. Simulates the card network's ruling on a dispute that needs a response. Flint
 * submits Stripe's test evidence for the `outcome`, and the ruling arrives through the dispute's
 * usual webhook events, as a real one would. Send `won` or `lost` for a chargeback in
 * `needs_response`, and `inquiry_closed` or `escalated` for an inquiry in
 * `inquiry_needs_response`. The response is the dispute after the evidence is submitted, usually
 * `under_review` or `inquiry_under_review`. Stripe decides shortly after, with no fixed timing.
 * Requires `payments.disputes.write`. If you don't receive a response, retry with the same
 * `Idempotency-Key`, or read the dispute.
 *
 * `POST /v1/disputes/{dispute_id}/simulate`
 * @param dispute_id Flint dispute ID.
 * @see https://developers.withflintpay.com/docs/api/disputes#simulateDispute
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.disputes.simulate("du_01ARZ3NDEKTSV4RRFFQ69G5FAV", {outcome: "won"}, { idempotencyKey:
 * idempotencyKey })
 */
    simulate(dispute_id: InputValue<string>, params: DisputesSimulateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Dispute, DisputeResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly disputes: DisputesResource;
}
