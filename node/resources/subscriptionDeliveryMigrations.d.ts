export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { SubscriptionDeliveryMigration } from '../declarations/SubscriptionDeliveryMigration.js';
import type { SubscriptionDeliveryMigrationFailure } from '../declarations/SubscriptionDeliveryMigrationFailure.js';
import type { SubscriptionDeliveryMigrationFailureListResponse } from '../declarations/SubscriptionDeliveryMigrationFailureListResponse.js';
import type { SubscriptionDeliveryMigrationListResponse } from '../declarations/SubscriptionDeliveryMigrationListResponse.js';
import type { SubscriptionDeliveryMigrationResponse } from '../declarations/SubscriptionDeliveryMigrationResponse.js';
import type { SubscriptionDeliveryMigrationsCreateInput } from '../declarations/SubscriptionDeliveryMigrationsCreateInput.js';
import type { SubscriptionDeliveryMigrationsCreateResponse } from '../declarations/SubscriptionDeliveryMigrationsCreateResponse.js';
import type { SubscriptionDeliveryMigrationsGetInput } from '../declarations/SubscriptionDeliveryMigrationsGetInput.js';
import type { SubscriptionDeliveryMigrationsGetResponse } from '../declarations/SubscriptionDeliveryMigrationsGetResponse.js';
import type { SubscriptionDeliveryMigrationsListFailuresInput } from '../declarations/SubscriptionDeliveryMigrationsListFailuresInput.js';
import type { SubscriptionDeliveryMigrationsListFailuresResponse } from '../declarations/SubscriptionDeliveryMigrationsListFailuresResponse.js';
import type { SubscriptionDeliveryMigrationsListInput } from '../declarations/SubscriptionDeliveryMigrationsListInput.js';
import type { SubscriptionDeliveryMigrationsListResponse } from '../declarations/SubscriptionDeliveryMigrationsListResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface SubscriptionDeliveryMigrationsResource {
    /**
 * Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.
 * POST /v1/subscription-delivery-migrations
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionDeliveryMigrations.create({from_delivery_method_id: "dmet_01J00000000000000000000001", to_delivery_method_id: "dmet_01J00000000000000000000002"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "from_delivery_method_id": string; "subscription_plan_id"?: string; "to_delivery_method_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionDeliveryMigrationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "from_delivery_method_id": string; "subscription_plan_id"?: string; "to_delivery_method_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionDeliveryMigrationsCreateResponse>>;
    /**
 * Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.
 * GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}
 * @example
 * client.subscriptionDeliveryMigrations.get("example")
 */
    get(subscription_delivery_migration_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<SubscriptionDeliveryMigrationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(subscription_delivery_migration_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionDeliveryMigrationsGetResponse>>;
    /**
 * Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.
 * GET /v1/subscription-delivery-migrations/{subscription_delivery_migration_id}/failures
 * @example
 * client.subscriptionDeliveryMigrations.listFailures("example")
 */
    listFailures(subscription_delivery_migration_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "reason"?: InputValue<"method_not_offered" | "destination_not_served" | "rate_unavailable" | "method_unavailable" | "no_longer_applicable" | "not_movable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SubscriptionDeliveryMigrationFailureListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listFailuresWithResponse(subscription_delivery_migration_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "reason"?: InputValue<"method_not_offered" | "destination_not_served" | "rate_unavailable" | "method_unavailable" | "no_longer_applicable" | "not_movable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionDeliveryMigrationsListFailuresResponse>>;
    listFailuresPages(subscription_delivery_migration_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "reason"?: InputValue<"method_not_offered" | "destination_not_served" | "rate_unavailable" | "method_unavailable" | "no_longer_applicable" | "not_movable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SubscriptionDeliveryMigrationFailureListResponse>;
    listFailuresPagesWithResponse(subscription_delivery_migration_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "reason"?: InputValue<"method_not_offered" | "destination_not_served" | "rate_unavailable" | "method_unavailable" | "no_longer_applicable" | "not_movable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<SubscriptionDeliveryMigrationsListFailuresResponse>>;
    listFailuresItems(subscription_delivery_migration_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "reason"?: InputValue<"method_not_offered" | "destination_not_served" | "rate_unavailable" | "method_unavailable" | "no_longer_applicable" | "not_movable">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SubscriptionDeliveryMigrationFailure>;
    /**
 * Each subscription is previewed before its delivery method changes. Progress and per-subscription failures remain available after completion.
 * GET /v1/subscription-delivery-migrations
 * @example
 * client.subscriptionDeliveryMigrations.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "from_delivery_method_id"?: InputValue<string>; "status"?: InputValue<"pending" | "running" | "completed">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SubscriptionDeliveryMigrationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "from_delivery_method_id"?: InputValue<string>; "status"?: InputValue<"pending" | "running" | "completed">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionDeliveryMigrationsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "from_delivery_method_id"?: InputValue<string>; "status"?: InputValue<"pending" | "running" | "completed">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SubscriptionDeliveryMigrationListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "from_delivery_method_id"?: InputValue<string>; "status"?: InputValue<"pending" | "running" | "completed">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<SubscriptionDeliveryMigrationsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "from_delivery_method_id"?: InputValue<string>; "status"?: InputValue<"pending" | "running" | "completed">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SubscriptionDeliveryMigration>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly subscriptionDeliveryMigrations: SubscriptionDeliveryMigrationsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { SubscriptionDeliveryMigrationResponse } from '../declarations/SubscriptionDeliveryMigrationResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { SubscriptionDeliveryMigrationsCreateResponse } from '../declarations/SubscriptionDeliveryMigrationsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { SubscriptionDeliveryMigrationsGetResponse } from '../declarations/SubscriptionDeliveryMigrationsGetResponse.js';
export type { SubscriptionDeliveryMigrationFailureListResponse } from '../declarations/SubscriptionDeliveryMigrationFailureListResponse.js';
export type { SubscriptionDeliveryMigrationsListFailuresResponse } from '../declarations/SubscriptionDeliveryMigrationsListFailuresResponse.js';
export type { SubscriptionDeliveryMigrationFailure } from '../declarations/SubscriptionDeliveryMigrationFailure.js';
export type { SubscriptionDeliveryMigrationListResponse } from '../declarations/SubscriptionDeliveryMigrationListResponse.js';
export type { SubscriptionDeliveryMigrationsListResponse } from '../declarations/SubscriptionDeliveryMigrationsListResponse.js';
export type { SubscriptionDeliveryMigration } from '../declarations/SubscriptionDeliveryMigration.js';
export type { SubscriptionDeliveryMigrationsCreateInput } from '../declarations/SubscriptionDeliveryMigrationsCreateInput.js';
export type { SubscriptionDeliveryMigrationsGetInput } from '../declarations/SubscriptionDeliveryMigrationsGetInput.js';
export type { SubscriptionDeliveryMigrationsListFailuresInput } from '../declarations/SubscriptionDeliveryMigrationsListFailuresInput.js';
export type { SubscriptionDeliveryMigrationsListInput } from '../declarations/SubscriptionDeliveryMigrationsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { SubscriptionDeliveryMigrationFailureReasonCount } from '../declarations/SubscriptionDeliveryMigrationFailureReasonCount.js';
export type { CreateSubscriptionDeliveryMigrationRequestInput } from '../declarations/CreateSubscriptionDeliveryMigrationRequestInput.js';
export { makeSubscriptionDeliveryMigrationResponse } from '../declarations/makeSubscriptionDeliveryMigrationResponse.js';
export { makeSubscriptionDeliveryMigrationFailureListResponse } from '../declarations/makeSubscriptionDeliveryMigrationFailureListResponse.js';
export { makeSubscriptionDeliveryMigrationFailure } from '../declarations/makeSubscriptionDeliveryMigrationFailure.js';
export { makeSubscriptionDeliveryMigrationListResponse } from '../declarations/makeSubscriptionDeliveryMigrationListResponse.js';
export { makeSubscriptionDeliveryMigration } from '../declarations/makeSubscriptionDeliveryMigration.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeSubscriptionDeliveryMigrationFailureReasonCount } from '../declarations/makeSubscriptionDeliveryMigrationFailureReasonCount.js';
