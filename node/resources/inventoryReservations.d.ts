import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateInventoryReservationRequestInput } from '../declarations/types-7.js';
import type {
    InventoryReservation,
    InventoryReservationListResponse,
    InventoryReservationResponse,
    InventoryReservationResult,
    InventoryReservationResultResponse,
    InventoryReservationsCreateInput,
    InventoryReservationsGetInput,
    InventoryReservationsListInput,
    InventoryReservationsTransitionInput,
    InventoryReservationsUpdateInput
} from '../declarations/types-25.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateInventoryReservationRequestInput } from '../declarations/types-48.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails
} from '../runtime.js';
export type { CreateInventoryReservationRequestInput } from '../declarations/types-7.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    InventoryReservationResult,
    InventoryReservationResultResponse,
    InventoryReservation,
    InventoryReservationResponse,
    InventoryReservationListResponse,
    InventoryReservationsTransitionInput,
    InventoryReservationsCreateInput,
    InventoryReservationsGetInput,
    InventoryReservationsListInput,
    InventoryReservationsUpdateInput,
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
    InventoryProvenanceRequestInput,
    InventorySourceSystemRequestInput,
    InventoryReservationTransitionRequestReleaseInput,
    InventoryReservationOwnerRequest
} from '../declarations/types-25.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { UpdateInventoryReservationRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { InventoryLevel, InventoryItem } from '../declarations/types-24.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export type { InventoryActionRequired } from '../declarations/types-23.js';
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
} from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateInventoryReservationRequest } from '../declarations/types-72.js';
export interface InventoryReservationsResource {
    /**
 * Route standalone merchant demand and hold stock in one atomic command. A hold defaults to 15
 * minutes and can last up to 24 hours. Set expires_at when creating it or PATCH the reservation to
 * change its deadline. Idempotency is scoped to the authenticated merchant, environment, and
 * endpoint. Its fingerprint includes the canonical request body. To recover the command's effects
 * after a lost response, read the relevant resource or inventory movement list.
 * @see reference/inventoryReservations.md#inventoryreservationscreate
 * POST /v1/inventory-reservations
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.create({demands: [], inventory_routing_source: {type:
 * "fixed_location", location_id: "example"}, owner: {key: "example"}}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreateInventoryReservationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<InventoryReservationResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryReservations.md#inventoryreservationscreate
     */
    createWithResponse(params: (InputValue<CreateInventoryReservationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryReservationResultResponse>>;
    /**
 * Retrieve an inventory reservation and its lines by ID, including merchant and order owners.
 * @see reference/inventoryReservations.md#inventoryreservationsget
 * GET /v1/inventory-reservations/{inventory_reservation_id}
 * @example
 * client.inventoryReservations.get("example")
 */
    get(inventory_reservation_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryReservation>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryReservations.md#inventoryreservationsget
     */
    getWithResponse(inventory_reservation_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryReservationResponse>>;
    /**
 * List inventory reservations in ascending inventory_reservation_id order. Omit owner_type to
 * include merchant and order owners. owner_key matches merchant owners only.
 * @see reference/inventoryReservations.md#inventoryreservationslist
 * GET /v1/inventory-reservations
 * @example
 * client.inventoryReservations.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "closed">>;
        "owner_type"?: InputValue<Array<"merchant" | "order">>;
        "owner_key"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "has_at_risk_quantity"?: InputValue<boolean>;
        "closed_reason"?: InputValue<Array<"consumed" | "released" | "expired" | "reallocated" | "mixed">>;
        "expires_after"?: InputValue<string | globalThis.Date>;
        "expires_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryReservationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryReservations.md#inventoryreservationslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "closed">>;
        "owner_type"?: InputValue<Array<"merchant" | "order">>;
        "owner_key"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "has_at_risk_quantity"?: InputValue<boolean>;
        "closed_reason"?: InputValue<Array<"consumed" | "released" | "expired" | "reallocated" | "mixed">>;
        "expires_after"?: InputValue<string | globalThis.Date>;
        "expires_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryReservationListResponse>>;
    /** Iterate pages lazily.
     * @see reference/inventoryReservations.md#inventoryreservationslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "closed">>;
        "owner_type"?: InputValue<Array<"merchant" | "order">>;
        "owner_key"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "has_at_risk_quantity"?: InputValue<boolean>;
        "closed_reason"?: InputValue<Array<"consumed" | "released" | "expired" | "reallocated" | "mixed">>;
        "expires_after"?: InputValue<string | globalThis.Date>;
        "expires_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryReservationListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/inventoryReservations.md#inventoryreservationslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "closed">>;
        "owner_type"?: InputValue<Array<"merchant" | "order">>;
        "owner_key"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "has_at_risk_quantity"?: InputValue<boolean>;
        "closed_reason"?: InputValue<Array<"consumed" | "released" | "expired" | "reallocated" | "mixed">>;
        "expires_after"?: InputValue<string | globalThis.Date>;
        "expires_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InventoryReservationListResponse>>;
    /** Iterate items lazily.
     * @see reference/inventoryReservations.md#inventoryreservationslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "closed">>;
        "owner_type"?: InputValue<Array<"merchant" | "order">>;
        "owner_key"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "has_at_risk_quantity"?: InputValue<boolean>;
        "closed_reason"?: InputValue<Array<"consumed" | "released" | "expired" | "reallocated" | "mixed">>;
        "expires_after"?: InputValue<string | globalThis.Date>;
        "expires_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryReservation>;
    /**
 * Set action to commit held quantity, consume committed quantity, or release held or committed
 * quantity. Lines carry cumulative targets: resending targets already applied succeeds even after
 * the reservation closes. supported_actions lists actions available for new changes. Stock-moving
 * transitions return a result with inventory_reservation as its primary resource and
 * inventory_levels for the levels changed. Idempotency is scoped to the authenticated merchant,
 * environment, and endpoint. Its fingerprint includes the canonical request body. To recover the
 * command's effects after a lost response, read the relevant resource or inventory movement list.
 * @see reference/inventoryReservations.md#inventoryreservationstransition
 * POST /v1/inventory-reservations/{inventory_reservation_id}/transitions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.transition({inventory_reservation_id: "example", body: {action:
 * "commit", lines: [{inventory_reservation_line_id: "example", target_committed_quantity: "0"}]}},
 * { idempotencyKey: idempotencyKey })
 */
    transition(input: InventoryReservationsTransitionInput, options?: RequestOptions<"merchant">): Promise<InventoryReservationResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryReservations.md#inventoryreservationstransition
     */
    transitionWithResponse(input: InventoryReservationsTransitionInput, options?: RequestOptions<"merchant">): Promise<SdkResponse<InventoryReservationResultResponse>>;
    /**
 * Change the hold deadline of a reservation you created. The new expires_at must be after now and
 * at most 24 hours from now, and can be earlier or later than the current one. A lapsed hold
 * cannot be extended, and reservations Flint holds for orders cannot be changed. Committed and
 * consumed quantity never expire.
 * @see reference/inventoryReservations.md#inventoryreservationsupdate
 * PATCH /v1/inventory-reservations/{inventory_reservation_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReservations.update("example", {expires_at: "2026-01-01T00:00:00Z"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(inventory_reservation_id: InputValue<string>, params: (InputValue<UpdateInventoryReservationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<InventoryReservation>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryReservations.md#inventoryreservationsupdate
     */
    updateWithResponse(inventory_reservation_id: InputValue<string>, params: (InputValue<UpdateInventoryReservationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<InventoryReservationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryReservations: InventoryReservationsResource;
}
