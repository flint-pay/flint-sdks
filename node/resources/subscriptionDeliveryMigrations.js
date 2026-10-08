import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/subscriptionDeliveryMigrations.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';

const _sdkDescriptors = new DescriptorSource(settings, {["createSubscriptionDeliveryMigration"]:r0,["getSubscriptionDeliveryMigration"]:r0,["listSubscriptionDeliveryMigrationFailures"]:r0,["listSubscriptionDeliveryMigrations"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.subscriptionDeliveryMigrations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionDeliveryMigration", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createSubscriptionDeliveryMigration", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (subscription_delivery_migration_id, params, options) => this.#runtime.request("getSubscriptionDeliveryMigration", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (subscription_delivery_migration_id, params, options) => this.#runtime.request("getSubscriptionDeliveryMigration", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listFailures: async (subscription_delivery_migration_id, params, options) => this.#runtime.request("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listFailuresWithResponse: async (subscription_delivery_migration_id, params, options) => this.#runtime.request("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listFailuresPages: (subscription_delivery_migration_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason",
  "Flint-Version"
], false, false, params), options), []),
      listFailuresPagesWithResponse: (subscription_delivery_migration_id, params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason",
  "Flint-Version"
], false, false, params), options)),
      listFailuresItems: (subscription_delivery_migration_id, params, options) => this.#runtime.items("listSubscriptionDeliveryMigrationFailures", _sdkRequestInput([
  "subscription_delivery_migration_id"
], [subscription_delivery_migration_id], [
  "page_size",
  "page_token",
  "reason",
  "Flint-Version"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listSubscriptionDeliveryMigrations", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "from_delivery_method_id",
  "status",
  "Flint-Version"
], false, false, params), options),
    });
}
close() { return this.#runtime.close(); }
}
export { makeSubscriptionDeliveryMigrationResponse } from '../models/SubscriptionDeliveryMigrationResponse.js';
export { makeSubscriptionDeliveryMigrationFailureListResponse } from '../models/SubscriptionDeliveryMigrationFailureListResponse.js';
export { makeSubscriptionDeliveryMigrationFailure } from '../models/SubscriptionDeliveryMigrationFailure.js';
export { makeSubscriptionDeliveryMigrationListResponse } from '../models/SubscriptionDeliveryMigrationListResponse.js';
export { makeSubscriptionDeliveryMigration } from '../models/SubscriptionDeliveryMigration.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeSubscriptionDeliveryMigrationFailureReasonCount } from '../models/SubscriptionDeliveryMigrationFailureReasonCount.js';
