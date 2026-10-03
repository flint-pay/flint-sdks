import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/subscriptions.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelSubscription"]:r0,["changeSubscriptionPaymentMethod"]:r0,["createSubscription"]:r0,["createSubscriptionPaymentRetry"]:r0,["getSubscription"]:r0,["getSubscriptionPaymentRetry"]:r0,["listSubscriptionPaymentRetries"]:r0,["listSubscriptions"]:r0,["pauseSubscription"]:r0,["reactivateSubscription"]:r0,["resumeSubscription"]:r0,["skipSubscriptionCycle"]:r0,["updateSubscription"]:r0,["updateSubscriptionBillingSchedule"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.subscriptions = Object.freeze({
      cancel: async (subscription_id, params, options) => this.#runtime.request("cancelSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (subscription_id, params, options) => this.#runtime.request("cancelSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      changePaymentMethod: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      changePaymentMethodWithResponse: async (subscription_id, params, options) => this.#runtime.request("changeSubscriptionPaymentMethod", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createSubscription", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createSubscription", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      createPaymentRetry: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      createPaymentRetryWithResponse: async (subscription_id, params, options) => this.#runtime.request("createSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
      get: async (subscription_id, params, options) => this.#runtime.request("getSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (subscription_id, params, options) => this.#runtime.request("getSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      getPaymentRetry: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPaymentRetryWithResponse: async (subscription_id, subscription_payment_retry_id, params, options) => this.#runtime.request("getSubscriptionPaymentRetry", _sdkRequestInput([
  "subscription_id",
  "subscription_payment_retry_id"
], [subscription_id, subscription_payment_retry_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPaymentRetries: async (subscription_id, params, options) => this.#runtime.request("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPaymentRetriesWithResponse: async (subscription_id, params, options) => this.#runtime.request("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPaymentRetriesPages: (subscription_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options), []),
      listPaymentRetriesPagesWithResponse: (subscription_id, params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options)),
      listPaymentRetriesItems: (subscription_id, params, options) => this.#runtime.items("listSubscriptionPaymentRetries", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "page_size",
  "page_token",
  "idempotency_key",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "plan_id",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "expand",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "plan_id",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "expand",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "plan_id",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "expand",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "plan_id",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "expand",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listSubscriptions", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "billing_schedule_owner",
  "awaiting_billing_schedule",
  "cancel_at_period_end",
  "customer_id",
  "plan_id",
  "external_reference_id",
  "query",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "next_billing_at_after",
  "next_billing_at_before",
  "needs_attention",
  "expand",
  "Flint-Version"
], false, false, params), options),
      pause: async (subscription_id, params, options) => this.#runtime.request("pauseSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      pauseWithResponse: async (subscription_id, params, options) => this.#runtime.request("pauseSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      reactivate: async (subscription_id, params, options) => this.#runtime.request("reactivateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      reactivateWithResponse: async (subscription_id, params, options) => this.#runtime.request("reactivateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      resume: async (subscription_id, params, options) => this.#runtime.request("resumeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      resumeWithResponse: async (subscription_id, params, options) => this.#runtime.request("resumeSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      skipCycle: async (subscription_id, params, options) => this.#runtime.request("skipSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      skipCycleWithResponse: async (subscription_id, params, options) => this.#runtime.request("skipSubscriptionCycle", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (subscription_id, params, options) => this.#runtime.request("updateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (subscription_id, params, options) => this.#runtime.request("updateSubscription", _sdkRequestInput([
  "subscription_id"
], [subscription_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      updateBillingSchedule: (input = {}, options) => this.#runtime.request("updateSubscriptionBillingSchedule", input, options).then(result => _sdkPayload(result, ["data"])),
      updateBillingScheduleWithResponse: (input = {}, options) => this.#runtime.request("updateSubscriptionBillingSchedule", input, options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeCancelSubscriptionResponse } from '../models/CancelSubscriptionResponse.js';
export { makeSubscriptionResponse } from '../models/SubscriptionResponse.js';
export { makeSubscriptionPaymentRetryResponse } from '../models/SubscriptionPaymentRetryResponse.js';
export { makeSubscriptionPaymentRetryListResponse } from '../models/SubscriptionPaymentRetryListResponse.js';
export { makeSubscriptionPaymentRetry } from '../models/SubscriptionPaymentRetry.js';
export { makeSubscriptionListResponse } from '../models/SubscriptionListResponse.js';
export { makeSubscription } from '../models/Subscription.js';
export { makeCancelSubscriptionResult } from '../models/CancelSubscriptionResult.js';
export { makeBuyerAction } from '../models/BuyerAction.js';
export { makeContractInfo } from '../models/ContractInfo.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeSubscriptionLineItem } from '../models/SubscriptionLineItem.js';
export { makeBundleComponent } from '../models/BundleComponent.js';
export { makeSelectedProductOption } from '../models/SelectedProductOption.js';
export { makeCategoryReference } from '../models/CategoryReference.js';
export { makeImage } from '../models/Image.js';
export { makeOrderLineItemModifier } from '../models/OrderLineItemModifier.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeCardDetails } from '../models/CardDetails.js';
export { makeSubscriptionServiceLocation } from '../models/SubscriptionServiceLocation.js';
export { makePostalAddress } from '../models/PostalAddress.js';
export { makeSubscriptionPlanLineItem } from '../models/SubscriptionPlanLineItem.js';
export { makeOrderLineItemTax } from '../models/OrderLineItemTax.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeSubscriptionPaymentRetryFailure } from '../models/SubscriptionPaymentRetryFailure.js';
