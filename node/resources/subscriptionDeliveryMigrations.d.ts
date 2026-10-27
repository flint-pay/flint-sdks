import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateSubscriptionDeliveryMigrationRequestInput } from '../declarations/types-9.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type {
    SubscriptionDeliveryMigration,
    SubscriptionDeliveryMigrationFailure,
    SubscriptionDeliveryMigrationFailureListResponse,
    SubscriptionDeliveryMigrationListResponse,
    SubscriptionDeliveryMigrationResponse,
    SubscriptionDeliveryMigrationsCreateInput,
    SubscriptionDeliveryMigrationsGetInput,
    SubscriptionDeliveryMigrationsListFailuresInput,
    SubscriptionDeliveryMigrationsListInput
} from '../declarations/types-45.js';
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
export type {
    CreateSubscriptionDeliveryMigrationRequestInput,
    Credentials,
    CreateSubscriptionDeliveryMigrationRequest
} from '../declarations/types-9.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    SubscriptionDeliveryMigration,
    SubscriptionDeliveryMigrationResponse,
    SubscriptionDeliveryMigrationFailureListResponse,
    SubscriptionDeliveryMigrationFailure,
    SubscriptionDeliveryMigrationListResponse,
    SubscriptionDeliveryMigrationsCreateInput,
    SubscriptionDeliveryMigrationsGetInput,
    SubscriptionDeliveryMigrationsListFailuresInput,
    SubscriptionDeliveryMigrationsListInput,
    SubscriptionDeliveryMigrationFailureReasonCount
} from '../declarations/types-45.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateSubscriptionDeliveryMigrationRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface SubscriptionDeliveryMigrationsResource {
    /**
 * Each subscription is previewed before its delivery method changes. Progress and per-subscription
 * failures remain available after completion.
 * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationscreate
 * POST /v1/subscription-delivery-migrations
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionDeliveryMigrations.create({from_delivery_method_id: "example",
 * to_delivery_method_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateSubscriptionDeliveryMigrationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SubscriptionDeliveryMigration>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationscreate
     */
    createWithResponse(params: (InputValue<CreateSubscriptionDeliveryMigrationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionDeliveryMigrationResponse>>;
    /**
 * Each subscription is previewed before its delivery method changes. Progress and per-subscription
 * failures remain available after completion.
 * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationsget
 * GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}
 * @example
 * client.subscriptionDeliveryMigrations.get("example")
 */
    get(subscription_delivery_migration_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionDeliveryMigration>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationsget
     */
    getWithResponse(subscription_delivery_migration_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionDeliveryMigrationResponse>>;
    /**
 * Each subscription is previewed before its delivery method changes. Progress and per-subscription
 * failures remain available after completion.
 * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationslistfailures
 * GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}/failures
 * @example
 * client.subscriptionDeliveryMigrations.listFailures("example")
 */
    listFailures(subscription_delivery_migration_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "reason"?: InputValue<Array<"method_not_offered"
            | "destination_not_served"
            | "rate_unavailable"
            | "method_unavailable"
            | "no_longer_applicable"
            | "not_movable">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionDeliveryMigrationFailureListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationslistfailures
     */
    listFailuresWithResponse(subscription_delivery_migration_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "reason"?: InputValue<Array<"method_not_offered"
            | "destination_not_served"
            | "rate_unavailable"
            | "method_unavailable"
            | "no_longer_applicable"
            | "not_movable">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionDeliveryMigrationFailureListResponse>>;
    /** Iterate pages lazily.
     * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationslistfailures
     */
    listFailuresPages(subscription_delivery_migration_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "reason"?: InputValue<Array<"method_not_offered"
            | "destination_not_served"
            | "rate_unavailable"
            | "method_unavailable"
            | "no_longer_applicable"
            | "not_movable">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionDeliveryMigrationFailureListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationslistfailures
     */
    listFailuresPagesWithResponse(subscription_delivery_migration_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "reason"?: InputValue<Array<"method_not_offered"
            | "destination_not_served"
            | "rate_unavailable"
            | "method_unavailable"
            | "no_longer_applicable"
            | "not_movable">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<SubscriptionDeliveryMigrationFailureListResponse>>;
    /** Iterate items lazily.
     * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationslistfailures
     */
    listFailuresItems(subscription_delivery_migration_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "reason"?: InputValue<Array<"method_not_offered"
            | "destination_not_served"
            | "rate_unavailable"
            | "method_unavailable"
            | "no_longer_applicable"
            | "not_movable">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionDeliveryMigrationFailure>;
    /**
 * Each subscription is previewed before its delivery method changes. Progress and per-subscription
 * failures remain available after completion.
 * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationslist
 * GET /v1/subscription-delivery-migrations
 * @example
 * client.subscriptionDeliveryMigrations.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "from_delivery_method_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "running" | "completed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionDeliveryMigrationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "from_delivery_method_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "running" | "completed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionDeliveryMigrationListResponse>>;
    /** Iterate pages lazily.
     * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "from_delivery_method_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "running" | "completed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionDeliveryMigrationListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "from_delivery_method_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "running" | "completed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<SubscriptionDeliveryMigrationListResponse>>;
    /** Iterate items lazily.
     * @see reference/subscriptionDeliveryMigrations.md#subscriptiondeliverymigrationslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "from_delivery_method_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "running" | "completed">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionDeliveryMigration>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptionDeliveryMigrations: SubscriptionDeliveryMigrationsResource;
}
