export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { SubscriptionOffer } from '../declarations/SubscriptionOffer.js';
import type { SubscriptionOfferListResponse } from '../declarations/SubscriptionOfferListResponse.js';
import type { SubscriptionOfferResponse } from '../declarations/SubscriptionOfferResponse.js';
import type { SubscriptionOffersCreateInput } from '../declarations/SubscriptionOffersCreateInput.js';
import type { SubscriptionOffersCreateResponse } from '../declarations/SubscriptionOffersCreateResponse.js';
import type { SubscriptionOffersGetInput } from '../declarations/SubscriptionOffersGetInput.js';
import type { SubscriptionOffersGetResponse } from '../declarations/SubscriptionOffersGetResponse.js';
import type { SubscriptionOffersListInput } from '../declarations/SubscriptionOffersListInput.js';
import type { SubscriptionOffersListResponse } from '../declarations/SubscriptionOffersListResponse.js';
import type { SubscriptionOffersRemoveInput } from '../declarations/SubscriptionOffersRemoveInput.js';
import type { SubscriptionOffersRemoveResponse } from '../declarations/SubscriptionOffersRemoveResponse.js';
import type { SubscriptionOffersUpdateInput } from '../declarations/SubscriptionOffersUpdateInput.js';
import type { SubscriptionOffersUpdateResponse } from '../declarations/SubscriptionOffersUpdateResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface SubscriptionOffersResource {
    /**
 * Create subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.
 * POST /v1/subscription-offers
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionOffers.create({billing_interval_options: [{billing_interval: "monthly", billing_interval_count: 1}], name: "Monthly product subscription", product_ids: ["prod_01J00000000000000000000001"]}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "billing_interval_options": Array<{ "billing_interval": "daily" | "weekly" | "monthly" | "yearly"; "billing_interval_count": number; }>; "metadata"?: Record<string, string>; "name": string; "product_ids"?: Array<string>; "promotion_id"?: string | null; "status"?: "active" | "inactive"; "subscription_delivery_method_ids"?: Array<string>; "variant_ids"?: Array<string>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionOfferResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "billing_interval_options": Array<{ "billing_interval": "daily" | "weekly" | "monthly" | "yearly"; "billing_interval_count": number; }>; "metadata"?: Record<string, string>; "name": string; "product_ids"?: Array<string>; "promotion_id"?: string | null; "status"?: "active" | "inactive"; "subscription_delivery_method_ids"?: Array<string>; "variant_ids"?: Array<string>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionOffersCreateResponse>>;
    /**
 * Archive subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.
 * DELETE /v1/subscription-offers/{subscription_offer_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionOffers.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(subscription_offer_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionOfferResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(subscription_offer_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionOffersRemoveResponse>>;
    /**
 * Get subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.
 * GET /v1/subscription-offers/{subscription_offer_id}
 * @example
 * client.subscriptionOffers.get("example")
 */
    get(subscription_offer_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<SubscriptionOfferResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(subscription_offer_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionOffersGetResponse>>;
    /**
 * List subscription offers. Offer changes affect new signups only. Existing subscriptions keep their terms.
 * GET /v1/subscription-offers
 * @example
 * client.subscriptionOffers.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "product_id"?: InputValue<string>; "variant_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SubscriptionOfferListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "product_id"?: InputValue<string>; "variant_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionOffersListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "product_id"?: InputValue<string>; "variant_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SubscriptionOfferListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "product_id"?: InputValue<string>; "variant_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<SubscriptionOffersListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "product_id"?: InputValue<string>; "variant_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "name">; "sort_direction"?: InputValue<"asc" | "desc">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SubscriptionOffer>;
    /**
 * Update subscription offer. Offer changes affect new signups only. Existing subscriptions keep their terms.
 * PATCH /v1/subscription-offers/{subscription_offer_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionOffers.update("soffer_01J00000000000000000000001", {status: "active"}, { idempotencyKey: idempotencyKey })
 */
    update(subscription_offer_id: InputValue<string>, params: (InputValue<{ "billing_interval_options"?: Array<{ "billing_interval": "daily" | "weekly" | "monthly" | "yearly"; "billing_interval_count": number; }>; "expected_version"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; "product_ids"?: Array<string>; "promotion_id"?: string | null; "status"?: "active" | "inactive"; "subscription_delivery_method_ids"?: Array<string>; "variant_ids"?: Array<string>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionOfferResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(subscription_offer_id: InputValue<string>, params: (InputValue<{ "billing_interval_options"?: Array<{ "billing_interval": "daily" | "weekly" | "monthly" | "yearly"; "billing_interval_count": number; }>; "expected_version"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; "product_ids"?: Array<string>; "promotion_id"?: string | null; "status"?: "active" | "inactive"; "subscription_delivery_method_ids"?: Array<string>; "variant_ids"?: Array<string>; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionOffersUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly subscriptionOffers: SubscriptionOffersResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { SubscriptionOfferResponse } from '../declarations/SubscriptionOfferResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { SubscriptionOffersCreateResponse } from '../declarations/SubscriptionOffersCreateResponse.js';
export type { SubscriptionOffersRemoveResponse } from '../declarations/SubscriptionOffersRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { SubscriptionOffersGetResponse } from '../declarations/SubscriptionOffersGetResponse.js';
export type { SubscriptionOfferListResponse } from '../declarations/SubscriptionOfferListResponse.js';
export type { SubscriptionOffersListResponse } from '../declarations/SubscriptionOffersListResponse.js';
export type { SubscriptionOffer } from '../declarations/SubscriptionOffer.js';
export type { SubscriptionOffersUpdateResponse } from '../declarations/SubscriptionOffersUpdateResponse.js';
export type { SubscriptionOffersCreateInput } from '../declarations/SubscriptionOffersCreateInput.js';
export type { SubscriptionOffersRemoveInput } from '../declarations/SubscriptionOffersRemoveInput.js';
export type { SubscriptionOffersGetInput } from '../declarations/SubscriptionOffersGetInput.js';
export type { SubscriptionOffersListInput } from '../declarations/SubscriptionOffersListInput.js';
export type { SubscriptionOffersUpdateInput } from '../declarations/SubscriptionOffersUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { CreateSubscriptionOfferRequestInput } from '../declarations/CreateSubscriptionOfferRequestInput.js';
export type { UpdateSubscriptionOfferRequestInput } from '../declarations/UpdateSubscriptionOfferRequestInput.js';
export { makeSubscriptionOfferResponse } from '../declarations/makeSubscriptionOfferResponse.js';
export { makeSubscriptionOfferListResponse } from '../declarations/makeSubscriptionOfferListResponse.js';
export { makeSubscriptionOffer } from '../declarations/makeSubscriptionOffer.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
