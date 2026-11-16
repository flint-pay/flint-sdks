import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { RequestOptions } from '../declarations/types-60.js';
import type {
    SubscriptionOffer,
    SubscriptionOfferListResponse,
    SubscriptionOfferResponse,
    SubscriptionOffersCreateParams,
    SubscriptionOffersDeleteParams,
    SubscriptionOffersGetParams,
    SubscriptionOffersListParams,
    SubscriptionOffersUpdateParams
} from '../declarations/types-68.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-77.js';
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
    SubscriptionOffersCreateParams,
    SubscriptionOffer,
    SubscriptionOfferResponse,
    SubscriptionOffersDeleteParams,
    SubscriptionOffersGetParams,
    SubscriptionOffersListParams,
    SubscriptionOfferListResponse,
    SubscriptionOffersUpdateParams,
    SubscriptionIntervalOptionRequestInput,
    SubscriptionIntervalOption
} from '../declarations/types-68.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-60.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-77.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { CreateSubscriptionOfferRequestInput, Credentials } from '../declarations/types-14.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-41.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { NextAction, MoneyValue } from '../declarations/types-42.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-58.js';
export type { UpdateSubscriptionOfferRequestInput } from '../declarations/types-75.js';
export type { DisputesAcceptParams } from '../declarations/types-25.js';
export { makeCreateSubscriptionOfferRequest } from '../declarations/types-82.js';
export { makeMetadataPatchRequest } from '../declarations/types-85.js';
export { makeMetadataRequest, makeMoneyValue } from '../declarations/types-86.js';
export { makeSubscriptionIntervalOptionRequest } from '../declarations/types-90.js';
export { makeUpdateSubscriptionOfferRequest } from '../declarations/types-91.js';
export interface SubscriptionOffersResource {
    /**
 * Create subscription offer. Offer changes affect new signups only. Existing subscriptions keep
 * their terms.
 *
 * `POST /v1/subscription-offers`
 * @see https://developers.withflintpay.com/docs/api/subscription-offers#createSubscriptionOffer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionOffers.create({billing_interval_options: [{billing_interval: "monthly",
 * billing_interval_count: 1}], name: "Monthly coffee", product_ids:
 * ["prod_01KEZF7C00027JTCXQ7TQF86X8"], status: "active"}, { idempotencyKey: idempotencyKey })
 */
    create(params: SubscriptionOffersCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<SubscriptionOffer, SubscriptionOfferResponse>>;
    /**
 * Archive subscription offer. Offer changes affect new signups only. Existing subscriptions keep
 * their terms.
 *
 * `DELETE /v1/subscription-offers/{subscription_offer_id}`
 * @param subscription_offer_id Subscription offer ID.
 * @see https://developers.withflintpay.com/docs/api/subscription-offers#deleteSubscriptionOffer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionOffers.delete("soffer_01KEZF7C00KAA9Y1X1KM70YFAA", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(subscription_offer_id: InputValue<string>, params?: SubscriptionOffersDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<SubscriptionOffer, SubscriptionOfferResponse>>;
    /**
 * Get subscription offer. Offer changes affect new signups only. Existing subscriptions keep their
 * terms.
 *
 * `GET /v1/subscription-offers/{subscription_offer_id}`
 * @param subscription_offer_id Subscription offer ID.
 * @see https://developers.withflintpay.com/docs/api/subscription-offers#getSubscriptionOffer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptionOffers.get("soffer_01KEZF7C00KAA9Y1X1KM70YFAA")
 */
    get(subscription_offer_id: InputValue<string>, params?: SubscriptionOffersGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionOffer, SubscriptionOfferResponse>>;
    /**
 * List subscription offers. Offer changes affect new signups only. Existing subscriptions keep
 * their terms. Default order: created_at descending, then subscription_offer_id descending.
 *
 * `GET /v1/subscription-offers`
 * @see https://developers.withflintpay.com/docs/api/subscription-offers#listSubscriptionOffers
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptionOffers.list()
 */
    list(params?: SubscriptionOffersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionOfferListResponse, SubscriptionOfferListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/subscription-offers#listSubscriptionOffers
     */
    listPages(params?: SubscriptionOffersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<SubscriptionOfferListResponse, SubscriptionOfferListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/subscription-offers#listSubscriptionOffers
     */
    listItems(params?: SubscriptionOffersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionOffer>;
    /**
 * Update subscription offer. Offer changes affect new signups only. Existing subscriptions keep
 * their terms.
 *
 * `PATCH /v1/subscription-offers/{subscription_offer_id}`
 * @param subscription_offer_id Subscription offer ID.
 * @see https://developers.withflintpay.com/docs/api/subscription-offers#updateSubscriptionOffer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionOffers.update("soffer_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Monthly
 * subscription"}, { idempotencyKey: idempotencyKey })
 */
    update(subscription_offer_id: InputValue<string>, params: SubscriptionOffersUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<SubscriptionOffer, SubscriptionOfferResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptionOffers: SubscriptionOffersResource;
}
