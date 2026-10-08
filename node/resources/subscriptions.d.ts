export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { AccessLinkResponse } from '../declarations/AccessLinkResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { Subscription } from '../declarations/Subscription.js';
import type { SubscriptionBillingScheduleRequestInput } from '../declarations/SubscriptionBillingScheduleRequestInput.js';
import type { SubscriptionBillingStartRequestInput } from '../declarations/SubscriptionBillingStartRequestInput.js';
import type { SubscriptionDeliveryRequestInput } from '../declarations/SubscriptionDeliveryRequestInput.js';
import type { SubscriptionListResponse } from '../declarations/SubscriptionListResponse.js';
import type { SubscriptionPaymentRetry } from '../declarations/SubscriptionPaymentRetry.js';
import type { SubscriptionPaymentRetryListResponse } from '../declarations/SubscriptionPaymentRetryListResponse.js';
import type { SubscriptionPaymentRetryResponse } from '../declarations/SubscriptionPaymentRetryResponse.js';
import type { SubscriptionResponse } from '../declarations/SubscriptionResponse.js';
import type { SubscriptionServiceLocationRequestInput } from '../declarations/SubscriptionServiceLocationRequestInput.js';
import type { SubscriptionsCancelInput } from '../declarations/SubscriptionsCancelInput.js';
import type { SubscriptionsCancelResponse } from '../declarations/SubscriptionsCancelResponse.js';
import type { SubscriptionsChangePaymentMethodInput } from '../declarations/SubscriptionsChangePaymentMethodInput.js';
import type { SubscriptionsChangePaymentMethodResponse } from '../declarations/SubscriptionsChangePaymentMethodResponse.js';
import type { SubscriptionsCreateAccessLinkInput } from '../declarations/SubscriptionsCreateAccessLinkInput.js';
import type { SubscriptionsCreateAccessLinkResponse } from '../declarations/SubscriptionsCreateAccessLinkResponse.js';
import type { SubscriptionsCreateInput } from '../declarations/SubscriptionsCreateInput.js';
import type { SubscriptionsCreateLineItemInput } from '../declarations/SubscriptionsCreateLineItemInput.js';
import type { SubscriptionsCreateLineItemResponse } from '../declarations/SubscriptionsCreateLineItemResponse.js';
import type { SubscriptionsCreatePaymentRetryInput } from '../declarations/SubscriptionsCreatePaymentRetryInput.js';
import type { SubscriptionsCreatePaymentRetryResponse } from '../declarations/SubscriptionsCreatePaymentRetryResponse.js';
import type { SubscriptionsCreateResponse } from '../declarations/SubscriptionsCreateResponse.js';
import type { SubscriptionsDeleteLineItemInput } from '../declarations/SubscriptionsDeleteLineItemInput.js';
import type { SubscriptionsDeleteLineItemResponse } from '../declarations/SubscriptionsDeleteLineItemResponse.js';
import type { SubscriptionsGetInput } from '../declarations/SubscriptionsGetInput.js';
import type { SubscriptionsGetPaymentRetryInput } from '../declarations/SubscriptionsGetPaymentRetryInput.js';
import type { SubscriptionsGetPaymentRetryResponse } from '../declarations/SubscriptionsGetPaymentRetryResponse.js';
import type { SubscriptionsGetResponse } from '../declarations/SubscriptionsGetResponse.js';
import type { SubscriptionsListInput } from '../declarations/SubscriptionsListInput.js';
import type { SubscriptionsListPaymentRetriesInput } from '../declarations/SubscriptionsListPaymentRetriesInput.js';
import type { SubscriptionsListPaymentRetriesResponse } from '../declarations/SubscriptionsListPaymentRetriesResponse.js';
import type { SubscriptionsListResponse } from '../declarations/SubscriptionsListResponse.js';
import type { SubscriptionsPauseInput } from '../declarations/SubscriptionsPauseInput.js';
import type { SubscriptionsPauseResponse } from '../declarations/SubscriptionsPauseResponse.js';
import type { SubscriptionsReactivateInput } from '../declarations/SubscriptionsReactivateInput.js';
import type { SubscriptionsReactivateResponse } from '../declarations/SubscriptionsReactivateResponse.js';
import type { SubscriptionsRenewInput } from '../declarations/SubscriptionsRenewInput.js';
import type { SubscriptionsRenewResponse } from '../declarations/SubscriptionsRenewResponse.js';
import type { SubscriptionsResumeInput } from '../declarations/SubscriptionsResumeInput.js';
import type { SubscriptionsResumeResponse } from '../declarations/SubscriptionsResumeResponse.js';
import type { SubscriptionsSkipCycleInput } from '../declarations/SubscriptionsSkipCycleInput.js';
import type { SubscriptionsSkipCycleResponse } from '../declarations/SubscriptionsSkipCycleResponse.js';
import type { SubscriptionsUpdateBillingScheduleInput } from '../declarations/SubscriptionsUpdateBillingScheduleInput.js';
import type { SubscriptionsUpdateBillingScheduleResponse } from '../declarations/SubscriptionsUpdateBillingScheduleResponse.js';
import type { SubscriptionsUpdateInput } from '../declarations/SubscriptionsUpdateInput.js';
import type { SubscriptionsUpdateLineItemInput } from '../declarations/SubscriptionsUpdateLineItemInput.js';
import type { SubscriptionsUpdateLineItemResponse } from '../declarations/SubscriptionsUpdateLineItemResponse.js';
import type { SubscriptionsUpdateResponse } from '../declarations/SubscriptionsUpdateResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface SubscriptionsResource {
    /**
 * Cancels a subscription immediately or at period end, and records who asked, why, and when in cancellation_details. A buyer's cancellation follows the store's customer_account.buyer_capabilities.
 * POST /v1/subscriptions/{subscription_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.cancel("example", {}, { idempotencyKey: idempotencyKey })
 */
    cancel(subscription_id: InputValue<string>, params: (InputValue<{ "cancel_immediately"?: boolean; "cancellation_comment"?: string; "cancellation_reason_code"?: "too_expensive" | "missing_features" | "switched_service" | "unused" | "customer_service" | "too_complex" | "low_quality" | "other"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelWithResponse(subscription_id: InputValue<string>, params: (InputValue<{ "cancel_immediately"?: boolean; "cancellation_comment"?: string; "cancellation_reason_code"?: "too_expensive" | "missing_features" | "switched_service" | "unused" | "customer_service" | "too_complex" | "low_quality" | "other"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsCancelResponse>>;
    /**
 * Changes the subscription to an active payment method owned by the same customer. The payment method's usage must be off_session.
 * POST /v1/subscriptions/{subscription_id}/payment-method
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.changePaymentMethod("example", {payment_method_id: "example"}, { idempotencyKey: idempotencyKey })
 */
    changePaymentMethod(subscription_id: InputValue<string>, params: (InputValue<{ "payment_method_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    changePaymentMethodWithResponse(subscription_id: InputValue<string>, params: (InputValue<{ "payment_method_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsChangePaymentMethodResponse>>;
    /**
 * Creates a subscription for the authenticated merchant.
 * POST /v1/subscriptions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.create({billing_start: {type: "immediate"}, customer_id: "example", subscription_plan_id: "example", billing_schedule: {owner: "flint"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<({ "billing_anchor_day"?: number; "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly"; "billing_interval_count"?: number; "billing_schedule"?: SubscriptionBillingScheduleRequestInput; "billing_start": SubscriptionBillingStartRequestInput; "customer_id": string; "delivery"?: SubscriptionDeliveryRequestInput; "external_reference_id"?: string; "metadata"?: Record<string, string>; "payment_method_id"?: string; "quantity"?: number; "service_location"?: SubscriptionServiceLocationRequestInput; "subscription_plan_id": string; }) & (({ "billing_schedule": { "owner": "flint"; }; }) | (({ "billing_schedule": { "owner": "external"; }; }) & ({ "billing_anchor_day"?: never })) | ((({ "billing_schedule"?: never }) & ({ "billing_anchor_day"?: never }))))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<({ "billing_anchor_day"?: number; "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly"; "billing_interval_count"?: number; "billing_schedule"?: SubscriptionBillingScheduleRequestInput; "billing_start": SubscriptionBillingStartRequestInput; "customer_id": string; "delivery"?: SubscriptionDeliveryRequestInput; "external_reference_id"?: string; "metadata"?: Record<string, string>; "payment_method_id"?: string; "quantity"?: number; "service_location"?: SubscriptionServiceLocationRequestInput; "subscription_plan_id": string; }) & (({ "billing_schedule": { "owner": "flint"; }; }) | (({ "billing_schedule": { "owner": "external"; }; }) & ({ "billing_anchor_day"?: never })) | ((({ "billing_schedule"?: never }) & ({ "billing_anchor_day"?: never }))))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsCreateResponse>>;
    /**
 * Creates a link like the ones in Flint's subscription email, to put in buyer email or messages you send yourself. It opens the subscription in your Flint-hosted customer account without a sign-in. Changing it, such as pausing or canceling, needs the buyer to sign in. It works for 14 days or 5 opens, whichever comes first; after that the buyer signs in to see the subscription. The url is a bearer credential. Flint returns it only in this response and in a retry with the same Idempotency-Key, so send it only to the buyer and keep it out of logs. A call with a new key creates another link; earlier links keep working until they expire. When customer_account.mode is merchant_hosted it returns ACCESS_LINK_MERCHANT_HOSTED. Send no request body or an empty object ({}). Idempotency is scoped to the merchant, credential, environment, and this resource's route. A replay returns the original link without extending its lifetime or replenishing its opens. Without an Idempotency-Key, each call creates a new link and has no replay result. If Flint cannot retain a result after minting, contact support with X-Request-Id before sending a new request.
 * POST /v1/subscriptions/{subscription_id}/access-links
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.createAccessLink("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createAccessLink(subscription_id: InputValue<string>, params?: (InputValue<{  }> | {  }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<AccessLinkResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createAccessLinkWithResponse(subscription_id: InputValue<string>, params?: (InputValue<{  }> | {  }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsCreateAccessLinkResponse>>;
    /**
 * Adds a catalog variant or bundle to future subscription renewals. Current prices and delivery eligibility are checked before the line is saved. Already-created orders keep their lines.
 * POST /v1/subscriptions/{subscription_id}/line-items
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.createLineItem("sub_01J00000000000000000000001", {quantity: 1, variant_id: "var_01J00000000000000000000001"}, { idempotencyKey: idempotencyKey })
 */
    createLineItem(subscription_id: InputValue<string>, params: (InputValue<({ "bundle_id"?: string; "expected_version"?: string; "quantity": number; "variant_id"?: string; }) & ((({ "variant_id": unknown; "quantity": unknown; }) & (({ "bundle_id"?: never }))) | (({ "bundle_id": unknown; "quantity": unknown; }) & (({ "variant_id"?: never }))))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createLineItemWithResponse(subscription_id: InputValue<string>, params: (InputValue<({ "bundle_id"?: string; "expected_version"?: string; "quantity": number; "variant_id"?: string; }) & ((({ "variant_id": unknown; "quantity": unknown; }) & (({ "bundle_id"?: never }))) | (({ "bundle_id": unknown; "quantity": unknown; }) & (({ "variant_id"?: never }))))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsCreateLineItemResponse>>;
    /**
 * Starts one manual collection attempt on a past-due subscription. Send no body, or an empty object. Poll the returned retry for the outcome.
 * POST /v1/subscriptions/{subscription_id}/payment-retries
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.createPaymentRetry("example", undefined, { idempotencyKey: idempotencyKey })
 */
    createPaymentRetry(subscription_id: InputValue<string>, params?: (InputValue<{  }> | {  }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionPaymentRetryResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createPaymentRetryWithResponse(subscription_id: InputValue<string>, params?: (InputValue<{  }> | {  }) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsCreatePaymentRetryResponse>>;
    /**
 * Removes a line from future subscription renewals. The final line cannot be removed. Send expected_version as a query parameter to reject a concurrent change.
 * DELETE /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.deleteLineItem("example", "example", {}, { idempotencyKey: idempotencyKey })
 */
    deleteLineItem(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "expected_version"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    deleteLineItemWithResponse(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "expected_version"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsDeleteLineItemResponse>>;
    /**
 * Returns a single subscription by ID. A paid checkout session's credential can retrieve only the subscription created by its source order. Checkout credentials cannot expand related resources.
 * GET /v1/subscriptions/{subscription_id}
 * @example
 * client.subscriptions.get("example")
 */
    get(subscription_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(subscription_id: InputValue<string>, params?: { "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionsGetResponse>>;
    /**
 * Returns one durable manual subscription payment retry.
 * GET /v1/subscriptions/{subscription_id}/payment-retries/{subscription_payment_retry_id}
 * @example
 * client.subscriptions.getPaymentRetry("example", "example")
 */
    getPaymentRetry(subscription_id: InputValue<string>, subscription_payment_retry_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<SubscriptionPaymentRetryResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getPaymentRetryWithResponse(subscription_id: InputValue<string>, subscription_payment_retry_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionsGetPaymentRetryResponse>>;
    /**
 * Returns a subscription's manual payment retries, newest first.
 * GET /v1/subscriptions/{subscription_id}/payment-retries
 * @example
 * client.subscriptions.listPaymentRetries("example")
 */
    listPaymentRetries(subscription_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SubscriptionPaymentRetryListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listPaymentRetriesWithResponse(subscription_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionsListPaymentRetriesResponse>>;
    listPaymentRetriesPages(subscription_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SubscriptionPaymentRetryListResponse>;
    listPaymentRetriesPagesWithResponse(subscription_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<SubscriptionsListPaymentRetriesResponse>>;
    listPaymentRetriesItems(subscription_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SubscriptionPaymentRetry>;
    /**
 * Returns a paginated list of subscriptions for the authenticated merchant.
 * GET /v1/subscriptions
 * @example
 * client.subscriptions.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete">>; "billing_schedule_owner"?: InputValue<"flint" | "external">; "awaiting_billing_schedule"?: InputValue<boolean>; "cancel_at_period_end"?: InputValue<boolean>; "customer_id"?: InputValue<string>; "delivery_method_id"?: InputValue<string>; "hold_reason"?: InputValue<"method_unavailable" | "destination_not_served" | "rate_unavailable">; "subscription_offer_id"?: InputValue<string>; "subscription_plan_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "next_billing_at_after"?: InputValue<string | globalThis.Date>; "next_billing_at_before"?: InputValue<string | globalThis.Date>; "needs_attention"?: InputValue<boolean>; "expand"?: InputValue<Array<"customer" | "subscription_plan">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SubscriptionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete">>; "billing_schedule_owner"?: InputValue<"flint" | "external">; "awaiting_billing_schedule"?: InputValue<boolean>; "cancel_at_period_end"?: InputValue<boolean>; "customer_id"?: InputValue<string>; "delivery_method_id"?: InputValue<string>; "hold_reason"?: InputValue<"method_unavailable" | "destination_not_served" | "rate_unavailable">; "subscription_offer_id"?: InputValue<string>; "subscription_plan_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "next_billing_at_after"?: InputValue<string | globalThis.Date>; "next_billing_at_before"?: InputValue<string | globalThis.Date>; "needs_attention"?: InputValue<boolean>; "expand"?: InputValue<Array<"customer" | "subscription_plan">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete">>; "billing_schedule_owner"?: InputValue<"flint" | "external">; "awaiting_billing_schedule"?: InputValue<boolean>; "cancel_at_period_end"?: InputValue<boolean>; "customer_id"?: InputValue<string>; "delivery_method_id"?: InputValue<string>; "hold_reason"?: InputValue<"method_unavailable" | "destination_not_served" | "rate_unavailable">; "subscription_offer_id"?: InputValue<string>; "subscription_plan_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "next_billing_at_after"?: InputValue<string | globalThis.Date>; "next_billing_at_before"?: InputValue<string | globalThis.Date>; "needs_attention"?: InputValue<boolean>; "expand"?: InputValue<Array<"customer" | "subscription_plan">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SubscriptionListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete">>; "billing_schedule_owner"?: InputValue<"flint" | "external">; "awaiting_billing_schedule"?: InputValue<boolean>; "cancel_at_period_end"?: InputValue<boolean>; "customer_id"?: InputValue<string>; "delivery_method_id"?: InputValue<string>; "hold_reason"?: InputValue<"method_unavailable" | "destination_not_served" | "rate_unavailable">; "subscription_offer_id"?: InputValue<string>; "subscription_plan_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "next_billing_at_after"?: InputValue<string | globalThis.Date>; "next_billing_at_before"?: InputValue<string | globalThis.Date>; "needs_attention"?: InputValue<boolean>; "expand"?: InputValue<Array<"customer" | "subscription_plan">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<SubscriptionsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete">>; "billing_schedule_owner"?: InputValue<"flint" | "external">; "awaiting_billing_schedule"?: InputValue<boolean>; "cancel_at_period_end"?: InputValue<boolean>; "customer_id"?: InputValue<string>; "delivery_method_id"?: InputValue<string>; "hold_reason"?: InputValue<"method_unavailable" | "destination_not_served" | "rate_unavailable">; "subscription_offer_id"?: InputValue<string>; "subscription_plan_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "next_billing_at_after"?: InputValue<string | globalThis.Date>; "next_billing_at_before"?: InputValue<string | globalThis.Date>; "needs_attention"?: InputValue<boolean>; "expand"?: InputValue<Array<"customer" | "subscription_plan">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Subscription>;
    /**
 * Pauses a subscription immediately, optionally for a fixed number of billing cycles. A buyer's pause follows the store's customer_account.buyer_capabilities.
 * POST /v1/subscriptions/{subscription_id}/pause
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.pause("example", {}, { idempotencyKey: idempotencyKey })
 */
    pause(subscription_id: InputValue<string>, params: (InputValue<{ "pause_duration_cycles"?: number; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    pauseWithResponse(subscription_id: InputValue<string>, params: (InputValue<{ "pause_duration_cycles"?: number; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsPauseResponse>>;
    /**
 * Clears a pending period-end cancellation without changing the current billing period.
 * POST /v1/subscriptions/{subscription_id}/reactivate
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.reactivate("example", {}, { idempotencyKey: idempotencyKey })
 */
    reactivate(subscription_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    reactivateWithResponse(subscription_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsReactivateResponse>>;
    /**
 * Charges the next renewal now, ships it when the subscription has delivery, and moves the next billing date forward by one interval. Available while the subscription is active on a Flint-owned billing schedule (billing_schedule_owner is flint), is not set to cancel at the end of its period, is not in a trial, and has no delivery hold or renewal in progress. The subscription's payment method must be active and allow off-session charges. Requires Idempotency-Key; retry with the same key to recover the same attempt. Returns the resulting subscription after collection.
 * POST /v1/subscriptions/{subscription_id}/renew
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.renew("sub_01J00000000000000000000001", {}, { idempotencyKey: idempotencyKey })
 */
    renew(subscription_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    renewWithResponse(subscription_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsRenewResponse>>;
    /**
 * Requests resumption of a paused subscription. Processing is asynchronous, so the response can still show paused. Retrieve the subscription to follow its status. Paid access resumes only when the subscription is active; overdue payment must be collected first.
 * POST /v1/subscriptions/{subscription_id}/resume
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.resume("example", {}, { idempotencyKey: idempotencyKey })
 */
    resume(subscription_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    resumeWithResponse(subscription_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsResumeResponse>>;
    /**
 * Skips the next renewal: nothing is charged or shipped for it, and the next billing date moves forward by one of the subscription's billing intervals. Available while the subscription is active, is not set to cancel at the end of its period, and has a next billing date.
 * POST /v1/subscriptions/{subscription_id}/skip-cycle
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.skipCycle("example", {}, { idempotencyKey: idempotencyKey })
 */
    skipCycle(subscription_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "initiated_by"?: "buyer" | "merchant" | "integration"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    skipCycleWithResponse(subscription_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "initiated_by"?: "buyer" | "merchant" | "integration"; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsSkipCycleResponse>>;
    /**
 * Updates metadata, external_reference_id, delivery, billing interval and quantity. A delivery change is checked with a delivery preview before it is saved. Send billing_interval and billing_interval_count together. The billing interval and quantity must be offered by the subscription plan or frozen offer, and apply from the next renewal. Send expected_version to reject concurrent changes. Change the payment method with the payment-method route and undo a scheduled cancellation with the reactivate route.
 * PATCH /v1/subscriptions/{subscription_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(subscription_id: InputValue<string>, params: (InputValue<({ "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly"; "billing_interval_count"?: number; "delivery"?: SubscriptionDeliveryRequestInput; "expected_version"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; "quantity"?: number; })>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(subscription_id: InputValue<string>, params: (InputValue<({ "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly"; "billing_interval_count"?: number; "delivery"?: SubscriptionDeliveryRequestInput; "expected_version"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string | null> | null; "quantity"?: number; })>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsUpdateResponse>>;
    /**
 * Sets the next billing date, clears an external schedule while it awaits a date, or transfers schedule ownership. The response carries the updated subscription.
 * PATCH /v1/subscriptions/{subscription_id}/billing-schedule
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.updateBillingSchedule({subscription_id: "example", body: {owner: "flint", initiated_by: "buyer", next_billing_at: "2026-01-01T00:00:00Z"}}, { idempotencyKey: idempotencyKey })
 */
    updateBillingSchedule(input: SubscriptionsUpdateBillingScheduleInput, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateBillingScheduleWithResponse(input: SubscriptionsUpdateBillingScheduleInput, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsUpdateBillingScheduleResponse>>;
    /**
 * Updates a subscription line for future renewals. Send expected_version to reject a concurrent change. Already-created orders keep their lines.
 * PATCH /v1/subscriptions/{subscription_id}/line-items/{subscription_line_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptions.updateLineItem("sub_01J00000000000000000000001", "sli_01J00000000000000000000001", {quantity: 2}, { idempotencyKey: idempotencyKey })
 */
    updateLineItem(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "quantity"?: number; "variant_id"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateLineItemWithResponse(subscription_id: InputValue<string>, subscription_line_item_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "quantity"?: number; "variant_id"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionsUpdateLineItemResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly subscriptions: SubscriptionsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { SubscriptionResponse } from '../declarations/SubscriptionResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { SubscriptionsCancelResponse } from '../declarations/SubscriptionsCancelResponse.js';
export type { SubscriptionsChangePaymentMethodResponse } from '../declarations/SubscriptionsChangePaymentMethodResponse.js';
export type { SubscriptionBillingScheduleRequestInput } from '../declarations/SubscriptionBillingScheduleRequestInput.js';
export type { SubscriptionBillingStartRequestInput } from '../declarations/SubscriptionBillingStartRequestInput.js';
export type { SubscriptionDeliveryRequestInput } from '../declarations/SubscriptionDeliveryRequestInput.js';
export type { SubscriptionServiceLocationRequestInput } from '../declarations/SubscriptionServiceLocationRequestInput.js';
export type { SubscriptionsCreateResponse } from '../declarations/SubscriptionsCreateResponse.js';
export type { AccessLinkResponse } from '../declarations/AccessLinkResponse.js';
export type { SubscriptionsCreateAccessLinkResponse } from '../declarations/SubscriptionsCreateAccessLinkResponse.js';
export type { SubscriptionsCreateLineItemResponse } from '../declarations/SubscriptionsCreateLineItemResponse.js';
export type { SubscriptionPaymentRetryResponse } from '../declarations/SubscriptionPaymentRetryResponse.js';
export type { SubscriptionsCreatePaymentRetryResponse } from '../declarations/SubscriptionsCreatePaymentRetryResponse.js';
export type { SubscriptionsDeleteLineItemResponse } from '../declarations/SubscriptionsDeleteLineItemResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { SubscriptionsGetResponse } from '../declarations/SubscriptionsGetResponse.js';
export type { SubscriptionsGetPaymentRetryResponse } from '../declarations/SubscriptionsGetPaymentRetryResponse.js';
export type { SubscriptionPaymentRetryListResponse } from '../declarations/SubscriptionPaymentRetryListResponse.js';
export type { SubscriptionsListPaymentRetriesResponse } from '../declarations/SubscriptionsListPaymentRetriesResponse.js';
export type { SubscriptionPaymentRetry } from '../declarations/SubscriptionPaymentRetry.js';
export type { SubscriptionListResponse } from '../declarations/SubscriptionListResponse.js';
export type { SubscriptionsListResponse } from '../declarations/SubscriptionsListResponse.js';
export type { Subscription } from '../declarations/Subscription.js';
export type { SubscriptionsPauseResponse } from '../declarations/SubscriptionsPauseResponse.js';
export type { SubscriptionsReactivateResponse } from '../declarations/SubscriptionsReactivateResponse.js';
export type { SubscriptionsRenewResponse } from '../declarations/SubscriptionsRenewResponse.js';
export type { SubscriptionsResumeResponse } from '../declarations/SubscriptionsResumeResponse.js';
export type { SubscriptionsSkipCycleResponse } from '../declarations/SubscriptionsSkipCycleResponse.js';
export type { SubscriptionsUpdateResponse } from '../declarations/SubscriptionsUpdateResponse.js';
export type { SubscriptionsUpdateBillingScheduleInput } from '../declarations/SubscriptionsUpdateBillingScheduleInput.js';
export type { SubscriptionsUpdateBillingScheduleResponse } from '../declarations/SubscriptionsUpdateBillingScheduleResponse.js';
export type { SubscriptionsUpdateLineItemResponse } from '../declarations/SubscriptionsUpdateLineItemResponse.js';
export type { SubscriptionsCancelInput } from '../declarations/SubscriptionsCancelInput.js';
export type { SubscriptionsChangePaymentMethodInput } from '../declarations/SubscriptionsChangePaymentMethodInput.js';
export type { SubscriptionsCreateInput } from '../declarations/SubscriptionsCreateInput.js';
export type { SubscriptionsCreateAccessLinkInput } from '../declarations/SubscriptionsCreateAccessLinkInput.js';
export type { SubscriptionsCreateLineItemInput } from '../declarations/SubscriptionsCreateLineItemInput.js';
export type { SubscriptionsCreatePaymentRetryInput } from '../declarations/SubscriptionsCreatePaymentRetryInput.js';
export type { SubscriptionsDeleteLineItemInput } from '../declarations/SubscriptionsDeleteLineItemInput.js';
export type { SubscriptionsGetInput } from '../declarations/SubscriptionsGetInput.js';
export type { SubscriptionsGetPaymentRetryInput } from '../declarations/SubscriptionsGetPaymentRetryInput.js';
export type { SubscriptionsListPaymentRetriesInput } from '../declarations/SubscriptionsListPaymentRetriesInput.js';
export type { SubscriptionsListInput } from '../declarations/SubscriptionsListInput.js';
export type { SubscriptionsPauseInput } from '../declarations/SubscriptionsPauseInput.js';
export type { SubscriptionsReactivateInput } from '../declarations/SubscriptionsReactivateInput.js';
export type { SubscriptionsRenewInput } from '../declarations/SubscriptionsRenewInput.js';
export type { SubscriptionsResumeInput } from '../declarations/SubscriptionsResumeInput.js';
export type { SubscriptionsSkipCycleInput } from '../declarations/SubscriptionsSkipCycleInput.js';
export type { SubscriptionsUpdateInput } from '../declarations/SubscriptionsUpdateInput.js';
export type { SubscriptionsUpdateLineItemInput } from '../declarations/SubscriptionsUpdateLineItemInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { SubscriptionDeliveryDestinationRequestInput } from '../declarations/SubscriptionDeliveryDestinationRequestInput.js';
export type { OrderDeliveryDestinationAddressRequestInput } from '../declarations/OrderDeliveryDestinationAddressRequestInput.js';
export type { DeliverySelectionRecipientRequestInput } from '../declarations/DeliverySelectionRecipientRequestInput.js';
export type { PostalAddressInput } from '../declarations/PostalAddressInput.js';
export type { AccessLink } from '../declarations/AccessLink.js';
export type { SubscriptionPaymentRetryFailure } from '../declarations/SubscriptionPaymentRetryFailure.js';
export type { SubscriptionIntervalOption } from '../declarations/SubscriptionIntervalOption.js';
export type { BuyerAction } from '../declarations/BuyerAction.js';
export type { SubscriptionCancellationDetails } from '../declarations/SubscriptionCancellationDetails.js';
export type { SubscriptionDelivery } from '../declarations/SubscriptionDelivery.js';
export type { SubscriptionAddressVerification } from '../declarations/SubscriptionAddressVerification.js';
export type { SubscriptionDeliveryMethodSummary } from '../declarations/SubscriptionDeliveryMethodSummary.js';
export type { SubscriptionDeliveryDestination } from '../declarations/SubscriptionDeliveryDestination.js';
export type { PostalAddress } from '../declarations/PostalAddress.js';
export type { DeliveryRecipientResource } from '../declarations/DeliveryRecipientResource.js';
export type { SubscriptionDeliveryHold } from '../declarations/SubscriptionDeliveryHold.js';
export type { SubscriptionInventoryWait } from '../declarations/SubscriptionInventoryWait.js';
export type { SubscriptionLineItem } from '../declarations/SubscriptionLineItem.js';
export type { BundleComponent } from '../declarations/BundleComponent.js';
export type { BundleComponentVariantSummary } from '../declarations/BundleComponentVariantSummary.js';
export type { SelectedProductOption } from '../declarations/SelectedProductOption.js';
export type { CategoryReference } from '../declarations/CategoryReference.js';
export type { Image } from '../declarations/Image.js';
export type { OrderLineItemModifier } from '../declarations/OrderLineItemModifier.js';
export type { TextModifierRequest } from '../declarations/TextModifierRequest.js';
export type { CardDetails } from '../declarations/CardDetails.js';
export type { SubscriptionServiceLocation } from '../declarations/SubscriptionServiceLocation.js';
export type { SubscriptionPlanLineItem } from '../declarations/SubscriptionPlanLineItem.js';
export type { SubscriptionPlanSwapVariant } from '../declarations/SubscriptionPlanSwapVariant.js';
export type { OrderLineItemTax } from '../declarations/OrderLineItemTax.js';
export type { SubscriptionUpcomingDeliveryHold } from '../declarations/SubscriptionUpcomingDeliveryHold.js';
export type { UpdateSubscriptionBillingScheduleRequestInput } from '../declarations/UpdateSubscriptionBillingScheduleRequestInput.js';
export type { CancelSubscriptionRequestInput } from '../declarations/CancelSubscriptionRequestInput.js';
export type { ChangeSubscriptionPaymentMethodRequestInput } from '../declarations/ChangeSubscriptionPaymentMethodRequestInput.js';
export type { CreateSubscriptionRequestInput } from '../declarations/CreateSubscriptionRequestInput.js';
export type { CreateSubscriptionLineItemRequestInput } from '../declarations/CreateSubscriptionLineItemRequestInput.js';
export type { PauseSubscriptionRequestInput } from '../declarations/PauseSubscriptionRequestInput.js';
export type { InventoryCountTransitionRequestInput } from '../declarations/InventoryCountTransitionRequestInput.js';
export type { SkipSubscriptionCycleRequestInput } from '../declarations/SkipSubscriptionCycleRequestInput.js';
export type { UpdateSubscriptionRequestInput } from '../declarations/UpdateSubscriptionRequestInput.js';
export type { UpdateSubscriptionLineItemRequestInput } from '../declarations/UpdateSubscriptionLineItemRequestInput.js';
export { makeSubscriptionResponse } from '../declarations/makeSubscriptionResponse.js';
export { makeAccessLinkResponse } from '../declarations/makeAccessLinkResponse.js';
export { makeSubscriptionPaymentRetryResponse } from '../declarations/makeSubscriptionPaymentRetryResponse.js';
export { makeSubscriptionPaymentRetryListResponse } from '../declarations/makeSubscriptionPaymentRetryListResponse.js';
export { makeSubscriptionPaymentRetry } from '../declarations/makeSubscriptionPaymentRetry.js';
export { makeSubscriptionListResponse } from '../declarations/makeSubscriptionListResponse.js';
export { makeSubscription } from '../declarations/makeSubscription.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeAccessLink } from '../declarations/makeAccessLink.js';
export { makeSubscriptionPaymentRetryFailure } from '../declarations/makeSubscriptionPaymentRetryFailure.js';
export { makeSubscriptionIntervalOption } from '../declarations/makeSubscriptionIntervalOption.js';
export { makeBuyerAction } from '../declarations/makeBuyerAction.js';
export { makeSubscriptionCancellationDetails } from '../declarations/makeSubscriptionCancellationDetails.js';
export { makeSubscriptionDelivery } from '../declarations/makeSubscriptionDelivery.js';
export { makeSubscriptionAddressVerification } from '../declarations/makeSubscriptionAddressVerification.js';
export { makeSubscriptionDeliveryMethodSummary } from '../declarations/makeSubscriptionDeliveryMethodSummary.js';
export { makeSubscriptionDeliveryDestination } from '../declarations/makeSubscriptionDeliveryDestination.js';
export { makePostalAddress } from '../declarations/makePostalAddress.js';
export { makeDeliveryRecipientResource } from '../declarations/makeDeliveryRecipientResource.js';
export { makeSubscriptionDeliveryHold } from '../declarations/makeSubscriptionDeliveryHold.js';
export { makeSubscriptionInventoryWait } from '../declarations/makeSubscriptionInventoryWait.js';
export { makeSubscriptionLineItem } from '../declarations/makeSubscriptionLineItem.js';
export { makeBundleComponent } from '../declarations/makeBundleComponent.js';
export { makeBundleComponentVariantSummary } from '../declarations/makeBundleComponentVariantSummary.js';
export { makeSelectedProductOption } from '../declarations/makeSelectedProductOption.js';
export { makeCategoryReference } from '../declarations/makeCategoryReference.js';
export { makeImage } from '../declarations/makeImage.js';
export { makeOrderLineItemModifier } from '../declarations/makeOrderLineItemModifier.js';
export { makeTextModifierRequest } from '../declarations/makeTextModifierRequest.js';
export { makeCardDetails } from '../declarations/makeCardDetails.js';
export { makeSubscriptionServiceLocation } from '../declarations/makeSubscriptionServiceLocation.js';
export { makeSubscriptionPlanLineItem } from '../declarations/makeSubscriptionPlanLineItem.js';
export { makeSubscriptionPlanSwapVariant } from '../declarations/makeSubscriptionPlanSwapVariant.js';
export { makeOrderLineItemTax } from '../declarations/makeOrderLineItemTax.js';
export { makeSubscriptionUpcomingDeliveryHold } from '../declarations/makeSubscriptionUpcomingDeliveryHold.js';
