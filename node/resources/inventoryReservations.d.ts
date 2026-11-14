import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    InventoryReservation,
    InventoryReservationListResponse,
    InventoryReservationResponse,
    InventoryReservationResult,
    InventoryReservationResultResponse,
    InventoryReservationsCommitParams,
    InventoryReservationsConsumeParams,
    InventoryReservationsCreateParams,
    InventoryReservationsGetParams,
    InventoryReservationsListParams,
    InventoryReservationsReleaseParams,
    InventoryReservationsUpdateParams
} from '../declarations/types-30.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    InventoryReservationsCommitParams,
    InventoryReservationResult,
    InventoryReservationResultResponse,
    InventoryReservationsConsumeParams,
    InventoryReservationsCreateParams,
    InventoryReservationsGetParams,
    InventoryReservation,
    InventoryReservationResponse,
    InventoryReservationsListParams,
    InventoryReservationListResponse,
    InventoryReservationsReleaseParams,
    InventoryReservationsUpdateParams,
    InventorySourceSystemRequestInput,
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
    InventoryReservationOwnerRequest
} from '../declarations/types-30.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type {
    CommitInventoryReservationRequestInput,
    ConsumeInventoryReservationRequestInput,
    CommitInventoryReservationRequest
} from '../declarations/types-7.js';
export type { AuthMode, BackorderPolicy } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { InventoryLevel, InventoryItem, InventoryProvenanceRequestInput } from '../declarations/types-29.js';
export type { MetadataMap } from '../declarations/types-38.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { CreateInventoryReservationRequestInput } from '../declarations/types-10.js';
export type { InventoryActionRequired } from '../declarations/types-28.js';
export type { ReleaseInventoryReservationRequestInput } from '../declarations/types-53.js';
export type { UpdateInventoryReservationRequestInput } from '../declarations/types-67.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export { makeCommitInventoryReservationRequest, makeConsumeInventoryReservationRequest } from '../declarations/types-71.js';
export { makeCreateInventoryReservationRequest } from '../declarations/types-73.js';
export {
    makeInventoryProvenanceRequest,
    makeInventoryReservationOwnerRequest,
    makeInventoryRoutingDemand,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest,
    makeInventorySourceSystemRequest
} from '../declarations/types-77.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export { makeReleaseInventoryReservationRequest } from '../declarations/types-81.js';
export { makeUpdateInventoryReservationRequest } from '../declarations/types-84.js';
export interface InventoryReservationsResource {
    /**
 * Commits held quantity, usually once the buyer pays. Commit before expires_at: after the
 * deadline, commit returns 409 ACTION_NOT_ALLOWED with reason terminal_status. Call it only when
 * commit is in supported_actions. Lines carry cumulative targets: resending targets already
 * applied succeeds even after the reservation closes. Returns a result with inventory_reservation
 * as its primary resource and inventory_levels for the levels changed. Idempotency is scoped to
 * the authenticated merchant, environment, and endpoint. Its fingerprint includes the canonical
 * request body. To recover the command's effects after a lost response, read the inventory
 * reservation by ID.
 *
 * `POST /v1/inventory-reservations/{inventory_reservation_id}/commit`
 * @param inventory_reservation_id Flint inventory reservation ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#commitInventoryReservation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.commit("invr_01KEZF7C0041ENRR0C2NF3AP12", {expected_version: 3,
 * lines: [{inventory_reservation_line_id: "invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM",
 * target_committed_quantity: 2}]}, { idempotencyKey: idempotencyKey })
 */
    commit(inventory_reservation_id: InputValue<string>, params: InventoryReservationsCommitParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryReservationResult, InventoryReservationResultResponse>>;
    /**
 * Consumes committed quantity when you hand the goods off, removing it from on-hand stock. Accepts
 * provenance describing the handoff. Call it only when consume is in supported_actions. Lines
 * carry cumulative targets: resending targets already applied succeeds even after the reservation
 * closes. Returns a result with inventory_reservation as its primary resource and inventory_levels
 * for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and
 * endpoint. Its fingerprint includes the canonical request body. To recover the command's effects
 * after a lost response, read the inventory reservation by ID.
 *
 * `POST /v1/inventory-reservations/{inventory_reservation_id}/consume`
 * @param inventory_reservation_id Flint inventory reservation ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#consumeInventoryReservation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.consume("invr_01KEZF7C0041ENRR0C2NF3AP12", {expected_version: 4,
 * lines: [{inventory_reservation_line_id: "invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM",
 * target_consumed_quantity: 2}], provenance: {source_system: {type: "manual"}}}, { idempotencyKey:
 * idempotencyKey })
 */
    consume(inventory_reservation_id: InputValue<string>, params: InventoryReservationsConsumeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryReservationResult, InventoryReservationResultResponse>>;
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
 * client.inventoryReservations.get("invr_01KEZF7C0041ENRR0C2NF3AP12")
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
 * Releases held or committed quantity back to available stock, for example when the buyer leaves
 * or you cancel after payment. Call it only when release is in supported_actions. Lines carry
 * cumulative targets: resending targets already applied succeeds even after the reservation
 * closes. Returns a result with inventory_reservation as its primary resource and inventory_levels
 * for the levels changed. Idempotency is scoped to the authenticated merchant, environment, and
 * endpoint. Its fingerprint includes the canonical request body. To recover the command's effects
 * after a lost response, read the inventory reservation by ID.
 *
 * `POST /v1/inventory-reservations/{inventory_reservation_id}/release`
 * @param inventory_reservation_id Flint inventory reservation ID.
 * @see https://developers.withflintpay.com/docs/api/inventory#releaseInventoryReservation
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.release("invr_01KEZF7C0041ENRR0C2NF3AP12", {lines:
 * [{inventory_reservation_line_id: "invrln_01K0P7W6A4N9F3J2T8Q5R1C6XM",
 * target_released_from_held_quantity: 2}]}, { idempotencyKey: idempotencyKey })
 */
    release(inventory_reservation_id: InputValue<string>, params: InventoryReservationsReleaseParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<InventoryReservationResult, InventoryReservationResultResponse>>;
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
