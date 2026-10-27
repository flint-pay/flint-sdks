import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateSubscriptionOfferRequestInput } from '../declarations/types-9.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type {
    SubscriptionOffer,
    SubscriptionOfferListResponse,
    SubscriptionOfferResponse,
    SubscriptionOffersCreateInput,
    SubscriptionOffersGetInput,
    SubscriptionOffersListInput,
    SubscriptionOffersRemoveInput,
    SubscriptionOffersUpdateInput
} from '../declarations/types-45.js';
import type { UpdateSubscriptionOfferRequestInput } from '../declarations/types-49.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { CreateSubscriptionOfferRequestInput, Credentials } from '../declarations/types-9.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    SubscriptionOffer,
    SubscriptionOfferResponse,
    SubscriptionOfferListResponse,
    SubscriptionOffersCreateInput,
    SubscriptionOffersRemoveInput,
    SubscriptionOffersGetInput,
    SubscriptionOffersListInput,
    SubscriptionOffersUpdateInput,
    SubscriptionIntervalOptionInput,
    SubscriptionIntervalOption
} from '../declarations/types-45.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { UpdateSubscriptionOfferRequestInput } from '../declarations/types-49.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateSubscriptionOfferRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeSubscriptionIntervalOption } from '../declarations/types-72.js';
export { makeUpdateSubscriptionOfferRequest } from '../declarations/types-73.js';
export interface SubscriptionOffersResource {
    /**
 * Create subscription offer. Offer changes affect new signups only. Existing subscriptions keep
 * their terms.
 * @see reference/subscriptionOffers.md#subscriptionofferscreate
 * POST /v1/subscription-offers
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionOffers.create({name: "example", billing_interval_options: [{billing_interval:
 * "daily", billing_interval_count: 1}]}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateSubscriptionOfferRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SubscriptionOffer>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionOffers.md#subscriptionofferscreate
     */
    createWithResponse(params: (InputValue<CreateSubscriptionOfferRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionOfferResponse>>;
    /**
 * Archive subscription offer. Offer changes affect new signups only. Existing subscriptions keep
 * their terms.
 * @see reference/subscriptionOffers.md#subscriptionoffersremove
 * DELETE /v1/subscription-offers/{subscription_offer_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionOffers.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(subscription_offer_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SubscriptionOffer>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionOffers.md#subscriptionoffersremove
     */
    removeWithResponse(subscription_offer_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionOfferResponse>>;
    /**
 * Get subscription offer. Offer changes affect new signups only. Existing subscriptions keep their
 * terms.
 * @see reference/subscriptionOffers.md#subscriptionoffersget
 * GET /v1/subscription-offers/{subscription_offer_id}
 * @example
 * client.subscriptionOffers.get("example")
 */
    get(subscription_offer_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionOffer>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionOffers.md#subscriptionoffersget
     */
    getWithResponse(subscription_offer_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionOfferResponse>>;
    /**
 * List subscription offers. Offer changes affect new signups only. Existing subscriptions keep
 * their terms.
 * @see reference/subscriptionOffers.md#subscriptionofferslist
 * GET /v1/subscription-offers
 * @example
 * client.subscriptionOffers.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "product_id"?: InputValue<string>;
        "variant_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionOfferListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionOffers.md#subscriptionofferslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "product_id"?: InputValue<string>;
        "variant_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionOfferListResponse>>;
    /** Iterate pages lazily.
     * @see reference/subscriptionOffers.md#subscriptionofferslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "product_id"?: InputValue<string>;
        "variant_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionOfferListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/subscriptionOffers.md#subscriptionofferslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "product_id"?: InputValue<string>;
        "variant_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<SubscriptionOfferListResponse>>;
    /** Iterate items lazily.
     * @see reference/subscriptionOffers.md#subscriptionofferslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "product_id"?: InputValue<string>;
        "variant_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "sort_by"?: InputValue<"created_at" | "updated_at" | "name">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionOffer>;
    /**
 * Update subscription offer. Offer changes affect new signups only. Existing subscriptions keep
 * their terms.
 * @see reference/subscriptionOffers.md#subscriptionoffersupdate
 * PATCH /v1/subscription-offers/{subscription_offer_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionOffers.update("example", {billing_interval_options: [{billing_interval:
 * "daily", billing_interval_count: 1}]}, { idempotencyKey: idempotencyKey })
 */
    update(subscription_offer_id: InputValue<string>, params: (InputValue<UpdateSubscriptionOfferRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SubscriptionOffer>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionOffers.md#subscriptionoffersupdate
     */
    updateWithResponse(subscription_offer_id: InputValue<string>, params: (InputValue<UpdateSubscriptionOfferRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionOfferResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptionOffers: SubscriptionOffersResource;
}
