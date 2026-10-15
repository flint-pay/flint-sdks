import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryMethods.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';

const _sdkDescriptors = new DescriptorSource(settings, {["createDeliveryMethod"]:r0,["deleteDeliveryMethod"]:r0,["getDeliveryMethod"]:r0,["listDeliveryMethods"]:r0,["updateDeliveryMethod"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryMethods = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryMethod", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryMethod", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_method_id, params, options) => this.#runtime.request("deleteDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      removeWithResponse: async (delivery_method_id, params, options) => this.#runtime.request("deleteDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_method_id, params, options) => this.#runtime.request("getDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (delivery_method_id, params, options) => this.#runtime.request("getDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "type",
  "delivery_zone_id",
  "delivery_location_set_id",
  "delivery_rate_callback_id",
  "location_id"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "type",
  "delivery_zone_id",
  "delivery_location_set_id",
  "delivery_rate_callback_id",
  "location_id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "type",
  "delivery_zone_id",
  "delivery_location_set_id",
  "delivery_rate_callback_id",
  "location_id"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "type",
  "delivery_zone_id",
  "delivery_location_set_id",
  "delivery_rate_callback_id",
  "location_id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryMethods", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "type",
  "delivery_zone_id",
  "delivery_location_set_id",
  "delivery_rate_callback_id",
  "location_id"
], false, false, params), options),
      update: async (delivery_method_id, params, options) => this.#runtime.request("updateDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (delivery_method_id, params, options) => this.#runtime.request("updateDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeDeliveryMethodResponse } from '../models/DeliveryMethodResponse.js';
export { makeDeliveryMethodListResponse } from '../models/DeliveryMethodListResponse.js';
export { makeDeliveryMethod } from '../models/DeliveryMethod.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeDeliveryMethodConfiguration } from '../models/DeliveryMethodConfiguration.js';
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeDeliveryEligibilityExpression } from '../models/DeliveryEligibilityExpression.js';
export { makeDeliveryCountryCondition } from '../models/DeliveryCountryCondition.js';
export { makeDeliveryStateCondition } from '../models/DeliveryStateCondition.js';
export { makeDeliveryCustomerGroupCondition } from '../models/DeliveryCustomerGroupCondition.js';
export { makeDeliveryCustomerBooleanCondition } from '../models/DeliveryCustomerBooleanCondition.js';
export { makeDeliveryPostalCodeCondition } from '../models/DeliveryPostalCodeCondition.js';
export { makeDeliveryPostalCodeValue } from '../models/DeliveryPostalCodeValue.js';
export { makeDeliveryRadiusCondition } from '../models/DeliveryRadiusCondition.js';
export { makeDeliveryDistance } from '../models/DeliveryDistance.js';
export { makeDeliveryRadiusOrigin } from '../models/DeliveryRadiusOrigin.js';
export { makeDeliveryWindowTimeCondition } from '../models/DeliveryWindowTimeCondition.js';
export { makeDeliveryZoneCondition } from '../models/DeliveryZoneCondition.js';
export { makeDeliveryEstimateRule } from '../models/DeliveryEstimateRule.js';
export { makeDeliveryScheduleWindowRule } from '../models/DeliveryScheduleWindowRule.js';
export { makeDeliveryAvailability } from '../models/DeliveryAvailability.js';
export { makeDeliveryBlackoutInterval } from '../models/DeliveryBlackoutInterval.js';
export { makeDeliveryWeeklyInterval } from '../models/DeliveryWeeklyInterval.js';
export { makeDeliveryTransitTimeRule } from '../models/DeliveryTransitTimeRule.js';
export { makeDeliveryBusinessDayRange } from '../models/DeliveryBusinessDayRange.js';
export { makeDeliveryMethodOriginSelector } from '../models/DeliveryMethodOriginSelector.js';
export { makeDeliveryPricingStrategy } from '../models/DeliveryPricingStrategy.js';
export { makeDeliveryCalculatedPricingStrategy } from '../models/DeliveryCalculatedPricingStrategy.js';
export { makeDeliveryDistanceUnitPrice } from '../models/DeliveryDistanceUnitPrice.js';
export { makeDeliveryDistanceUnitPriceRequest } from '../models/DeliveryDistanceUnitPriceRequest.js';
export { makeDeliveryWeightUnitPrice } from '../models/DeliveryWeightUnitPrice.js';
export { makeDeliveryWeightUnitPriceRequest } from '../models/DeliveryWeightUnitPriceRequest.js';
export { makeDeliveryExternalPricingStrategy } from '../models/DeliveryExternalPricingStrategy.js';
export { makeDeliveryFixedPricingStrategy } from '../models/DeliveryFixedPricingStrategy.js';
export { makeDeliveryFixedPricingStrategyRequest } from '../models/DeliveryFixedPricingStrategyRequest.js';
export { makeDeliveryRateTablePricingStrategy } from '../models/DeliveryRateTablePricingStrategy.js';
export { makeDeliveryPricingRate } from '../models/DeliveryPricingRate.js';
export { makeDeliveryTieredPricingStrategy } from '../models/DeliveryTieredPricingStrategy.js';
export { makeDeliveryTieredPricingStrategyRequest } from '../models/DeliveryTieredPricingStrategyRequest.js';
export { makeDeliveryPricingTierBandRequest } from '../models/DeliveryPricingTierBandRequest.js';
export { makeDeliveryPricingTierBand } from '../models/DeliveryPricingTierBand.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeSubscriptionCounts } from '../models/SubscriptionCounts.js';
