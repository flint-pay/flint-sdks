import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { RequestOptions } from '../declarations/types-53.js';
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
} from '../declarations/types-61.js';
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
} from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateSubscriptionDeliveryMigrationRequestInput, CreateSubscriptionDeliveryMigrationRequest } from '../declarations/types-13.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { NextAction, MoneyValue } from '../declarations/types-38.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export { makeCreateSubscriptionDeliveryMigrationRequest } from '../declarations/types-74.js';
export { makeMoneyValue } from '../declarations/types-78.js';
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
 * "dmet_01K1P6G4M7H2N8Q9R3S5T6V7WX", subscription_plan_id: "plan_01KEZF7C00S177Q3KK6BKXGXV7",
 * to_delivery_method_id: "dmet_01KEZF7C00F34Q6CJF6MF7HWGT"}, { idempotencyKey: idempotencyKey })
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
 * client.subscriptionDeliveryMigrations.get("sdmig_01KEZF7C00H8KGVKXANJWJVDH7")
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
 * client.subscriptionDeliveryMigrations.listFailures("sdmig_01KEZF7C00H8KGVKXANJWJVDH7")
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
