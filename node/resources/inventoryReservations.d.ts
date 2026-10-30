import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    InventoryReservation,
    InventoryReservationListResponse,
    InventoryReservationResponse,
    InventoryReservationResult,
    InventoryReservationResultResponse,
    InventoryReservationsCreateParams,
    InventoryReservationsGetParams,
    InventoryReservationsListParams,
    InventoryReservationsTransitionParams,
    InventoryReservationsUpdateParams
} from '../declarations/types-27.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    InventoryReservationsCreateParams,
    InventoryReservationResult,
    InventoryReservationResultResponse,
    InventoryReservationsGetParams,
    InventoryReservation,
    InventoryReservationResponse,
    InventoryReservationsListParams,
    InventoryReservationListResponse,
    InventoryReservationsTransitionParams,
    InventoryReservationsUpdateParams,
    InventoryRoutingDemandInput,
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryReservationOwnerRequestInput,
    InventoryRoutingSource,
    InventoryReservationLine,
    InventoryReservationOwner,
    InventoryReservationOwnerMerchant,
    InventoryReservationOwnerOrder,
    InventoryReservationTransitionRequestInput,
    InventoryReservationTransitionRequestCommitInput,
    InventoryReservationTransitionRequestConsumeInput,
    InventoryReservationTransitionRequestReleaseInput,
    InventoryReservationOwnerRequest
} from '../declarations/types-27.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateInventoryReservationRequestInput } from '../declarations/types-8.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { InventoryLevel, InventoryItem, InventoryProvenanceRequestInput } from '../declarations/types-26.js';
export type { MetadataMap } from '../declarations/types-34.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { InventoryActionRequired } from '../declarations/types-25.js';
export type { InventorySourceSystemRequestInput } from '../declarations/types-28.js';
export type { UpdateInventoryReservationRequestInput } from '../declarations/types-58.js';
export { makeCreateInventoryReservationRequest } from '../declarations/types-64.js';
export {
    makeInventoryProvenanceRequest,
    makeInventoryReservationOwnerRequest,
    makeInventoryReservationTransitionRequest,
    makeInventoryReservationTransitionRequestCommit,
    makeInventoryReservationTransitionRequestConsume,
    makeInventoryReservationTransitionRequestRelease,
    makeInventoryRoutingDemand,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest,
    makeInventorySourceSystemRequest
} from '../declarations/types-68.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateInventoryReservationRequest } from '../declarations/types-74.js';
export interface InventoryReservationsResource {
    /**
 * Route standalone merchant demand and hold stock in one atomic command. A hold defaults to 15
 * minutes and can last up to 24 hours. Set expires_at when creating it or PATCH the reservation to
 * change its deadline. Idempotency is scoped to the authenticated merchant, environment, and
 * endpoint. Its fingerprint includes the canonical request body. To recover the command's effects
 * after a lost response, list inventory reservations with the same idempotency_key.
 *
 * `POST /v1/inventory-reservations`
 * @see https://developers.withflintpay.com/docs/api/inventory#createInventoryReservation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.create({demands: [{inventory_item_id:
 * "invi_01K0P7W6A4N9F3J2T8Q5R1C6XM", quantity: 2}], inventory_routing_source:
 * {inventory_allocation_policy_id: "invp_01K0P7W6A4N9F3J2T8Q5R1C6XM", type: "policy"}, owner:
 * {key: "cart_1842"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: InventoryReservationsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryReservationResult, InventoryReservationResultResponse>>;
    /**
 * Retrieve an inventory reservation and its lines by ID, including merchant and order owners.
 *
 * `GET /v1/inventory-reservations/{inventory_reservation_id}`
 * @param inventory_reservation_id Flint inventory reservation ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#getInventoryReservation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryReservations.get("invr_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(inventory_reservation_id: InputValue<string>, params?: InventoryReservationsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryReservation, InventoryReservationResponse>>;
    /**
 * List inventory reservations in ascending inventory_reservation_id order. Omit owner_type to
 * include merchant and order owners. owner_key matches merchant owners only. Default order:
 * inventory_reservation_id ascending; this key uniquely orders the results.
 *
 * `GET /v1/inventory-reservations`
 * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryReservations
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.inventoryReservations.list()
 */
    list(params?: InventoryReservationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<InventoryReservationListResponse, InventoryReservationListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryReservations
     */
    listPages(params?: InventoryReservationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<InventoryReservationListResponse, InventoryReservationListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/inventory#listInventoryReservations
     */
    listItems(params?: InventoryReservationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryReservation>;
    /**
 * Set action to commit held quantity, consume committed quantity, or release held or committed
 * quantity. Lines carry cumulative targets: resending targets already applied succeeds even after
 * the reservation closes. supported_actions lists actions available for new changes. Stock-moving
 * transitions return a result with inventory_reservation as its primary resource and
 * inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant,
 * environment, and endpoint. Its fingerprint includes the canonical request body. To recover the
 * command's effects after a lost response, read the inventory reservation by ID.
 *
 * `POST /v1/inventory-reservations/{inventory_reservation_id}/transitions`
 * @param inventory_reservation_id Flint inventory reservation ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#transitionInventoryReservation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.transition("invr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {action: "commit",
 * expected_version: 3, lines: [{inventory_reservation_line_id:
 * "invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM", target_committed_quantity: 2}]}, { idempotencyKey:
 * idempotencyKey })
 */
    transition(inventory_reservation_id: InputValue<string>, params: InventoryReservationsTransitionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryReservationResult, InventoryReservationResultResponse>>;
    /**
 * Change the hold deadline of a reservation you created. The new expires_at must be after now and
 * at most 24 hours from now, and can be earlier or later than the current one. A lapsed hold
 * cannot be extended, and reservations Flint holds for orders cannot be changed. Committed and
 * consumed quantity never expire.
 *
 * `PATCH /v1/inventory-reservations/{inventory_reservation_id}`
 * @param inventory_reservation_id Flint inventory reservation ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#updateInventoryReservation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.update("invr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {expires_at:
 * "2026-12-01T00:00:00Z"}, { idempotencyKey: idempotencyKey })
 */
    update(inventory_reservation_id: InputValue<string>, params: InventoryReservationsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryReservation, InventoryReservationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryReservations: InventoryReservationsResource;
}
