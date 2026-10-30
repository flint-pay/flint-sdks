import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    SubscriptionDeliveryMigration,
    SubscriptionDeliveryMigrationFailure,
    SubscriptionDeliveryMigrationFailureListResponse,
    SubscriptionDeliveryMigrationListResponse,
    SubscriptionDeliveryMigrationResponse,
    SubscriptionDeliveryMigrationsCreateParams,
    SubscriptionDeliveryMigrationsGetParams,
    SubscriptionDeliveryMigrationsListFailuresParams,
    SubscriptionDeliveryMigrationsListParams
} from '../declarations/types-54.js';
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
    SubscriptionDeliveryMigrationsCreateParams,
    SubscriptionDeliveryMigration,
    SubscriptionDeliveryMigrationResponse,
    SubscriptionDeliveryMigrationsGetParams,
    SubscriptionDeliveryMigrationsListFailuresParams,
    SubscriptionDeliveryMigrationFailureListResponse,
    SubscriptionDeliveryMigrationFailure,
    SubscriptionDeliveryMigrationsListParams,
    SubscriptionDeliveryMigrationListResponse,
    SubscriptionDeliveryMigrationFailureReasonCount
} from '../declarations/types-54.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateSubscriptionDeliveryMigrationRequestInput, CreateSubscriptionDeliveryMigrationRequest } from '../declarations/types-11.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeCreateSubscriptionDeliveryMigrationRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface SubscriptionDeliveryMigrationsResource {
    /**
 * Each subscription is previewed before its delivery method changes. Progress and per-subscription
 * failures remain available after completion.
 *
 * `POST /v1/subscription-delivery-migrations`
 * @see
 * https://developers.withflintpay.com/docs/api/subscriptions#createSubscriptionDeliveryMigration
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionDeliveryMigrations.create({from_delivery_method_id:
 * "dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV", to_delivery_method_id: "dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: SubscriptionDeliveryMigrationsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<SubscriptionDeliveryMigration, SubscriptionDeliveryMigrationResponse>>;
    /**
 * Each subscription is previewed before its delivery method changes. Progress and per-subscription
 * failures remain available after completion.
 *
 * `GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}`
 * @param subscription_delivery_migration_id Subscription delivery migration ID.
 * @see https://developers.withflintpay.com/docs/api/subscriptions#getSubscriptionDeliveryMigration
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptionDeliveryMigrations.get("sdmig_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(subscription_delivery_migration_id: InputValue<string>, params?: SubscriptionDeliveryMigrationsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionDeliveryMigration, SubscriptionDeliveryMigrationResponse>>;
    /**
 * Each subscription is previewed before its delivery method changes. Progress and per-subscription
 * failures remain available after completion. Default order: subscription_id ascending; this key
 * uniquely orders the results.
 *
 * `GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}/failures`
 * @param subscription_delivery_migration_id Subscription delivery migration ID.
 * @see
 * https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionDeliveryMigrationFailures
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptionDeliveryMigrations.listFailures("sdmig_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listFailures(subscription_delivery_migration_id: InputValue<string>, params?: SubscriptionDeliveryMigrationsListFailuresParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionDeliveryMigrationFailureListResponse, SubscriptionDeliveryMigrationFailureListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionDeliveryMigrationFailures
     */
    listFailuresPages(subscription_delivery_migration_id: InputValue<string>, params?: SubscriptionDeliveryMigrationsListFailuresParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<SubscriptionDeliveryMigrationFailureListResponse, SubscriptionDeliveryMigrationFailureListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionDeliveryMigrationFailures
     */
    listFailuresItems(subscription_delivery_migration_id: InputValue<string>, params?: SubscriptionDeliveryMigrationsListFailuresParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionDeliveryMigrationFailure>;
    /**
 * Each subscription is previewed before its delivery method changes. Progress and per-subscription
 * failures remain available after completion. Default order: created_at descending, then
 * subscription_delivery_migration_id descending.
 *
 * `GET /v1/subscription-delivery-migrations`
 * @see
 * https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionDeliveryMigrations
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptionDeliveryMigrations.list()
 */
    list(params?: SubscriptionDeliveryMigrationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionDeliveryMigrationListResponse, SubscriptionDeliveryMigrationListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionDeliveryMigrations
     */
    listPages(params?: SubscriptionDeliveryMigrationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<SubscriptionDeliveryMigrationListResponse, SubscriptionDeliveryMigrationListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/subscriptions#listSubscriptionDeliveryMigrations
     */
    listItems(params?: SubscriptionDeliveryMigrationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionDeliveryMigration>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptionDeliveryMigrations: SubscriptionDeliveryMigrationsResource;
}
