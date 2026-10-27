import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryMethods.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["createDeliveryMethod"]:r0,["deleteDeliveryMethod"]:r0,["getDeliveryMethod"]:r0,["listDeliveryMethods"]:r0,["updateDeliveryMethod"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryMethods = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryMethod", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryMethod", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryMethod", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (delivery_method_id, params, options) => this.#runtime.request("deleteDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryMethod", result, path))),
      removeWithResponse: async (delivery_method_id, params, options) => this.#runtime.request("deleteDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_method_id, params, options) => this.#runtime.request("getDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryMethod", result, path))),
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
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryMethods", result, path))),
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
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryMethods", result, path)),
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
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryMethod", result, path))),
      updateWithResponse: async (delivery_method_id, params, options) => this.#runtime.request("updateDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddRiskListItemsRequest } from '../models/AddRiskListItemsRequest.js';
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeCreateDeliveryMethodRequest } from '../models/CreateDeliveryMethodRequest.js';
export { makeCreateDeliveryMethodRequestLocalDelivery } from '../models/CreateDeliveryMethodRequestLocalDelivery.js';
export { makeCreateDeliveryMethodRequestPickup } from '../models/CreateDeliveryMethodRequestPickup.js';
export { makeCreateDeliveryMethodRequestShipment } from '../models/CreateDeliveryMethodRequestShipment.js';
export { makeDeliveryAvailability } from '../models/DeliveryAvailability.js';
export { makeDeliveryBlackoutInterval } from '../models/DeliveryBlackoutInterval.js';
export { makeDeliveryBusinessDayRange } from '../models/DeliveryBusinessDayRange.js';
export { makeDeliveryCalculatedPricingStrategyRequest } from '../models/DeliveryCalculatedPricingStrategyRequest.js';
export { makeDeliveryCallbackPricingStrategyRequest } from '../models/DeliveryCallbackPricingStrategyRequest.js';
export { makeDeliveryCallerSuppliedPricingStrategyRequest } from '../models/DeliveryCallerSuppliedPricingStrategyRequest.js';
export { makeDeliveryCountryCondition } from '../models/DeliveryCountryCondition.js';
export { makeDeliveryCustomerBooleanCondition } from '../models/DeliveryCustomerBooleanCondition.js';
export { makeDeliveryCustomerSegmentCondition } from '../models/DeliveryCustomerSegmentCondition.js';
export { makeDeliveryDistance } from '../models/DeliveryDistance.js';
export { makeDeliveryDistanceUnitPriceRequest } from '../models/DeliveryDistanceUnitPriceRequest.js';
export { makeDeliveryEligibilityExpression } from '../models/DeliveryEligibilityExpression.js';
export { makeDeliveryEstimateRuleRequest } from '../models/DeliveryEstimateRuleRequest.js';
export { makeDeliveryFixedPricingStrategyRequest } from '../models/DeliveryFixedPricingStrategyRequest.js';
export { makeDeliveryMethodConfigurationCreateRequest } from '../models/DeliveryMethodConfigurationCreateRequest.js';
export { makeDeliveryMethodConfigurationPatchRequest } from '../models/DeliveryMethodConfigurationPatchRequest.js';
export { makeDeliveryMethodConfigurationRequest } from '../models/DeliveryMethodConfigurationRequest.js';
export { makeDeliveryMethodOriginSelectorInputAllocatedOriginGroup } from '../models/DeliveryMethodOriginSelectorInputAllocatedOriginGroup.js';
export { makeDeliveryMethodOriginSelectorInputFixedLocation } from '../models/DeliveryMethodOriginSelectorInputFixedLocation.js';
export { makeDeliveryMethodOriginSelectorInputPickupLocationCollection } from '../models/DeliveryMethodOriginSelectorInputPickupLocationCollection.js';
export { makeDeliveryMethodOriginSelectorRequest } from '../models/DeliveryMethodOriginSelectorRequest.js';
export { makeDeliveryPostalCodeCondition } from '../models/DeliveryPostalCodeCondition.js';
export { makeDeliveryPostalCodeValue } from '../models/DeliveryPostalCodeValue.js';
export { makeDeliveryPricingRateCreateRequest } from '../models/DeliveryPricingRateCreateRequest.js';
export { makeDeliveryPricingRateRequest } from '../models/DeliveryPricingRateRequest.js';
export { makeDeliveryPricingStrategyCreateInputCalculated } from '../models/DeliveryPricingStrategyCreateInputCalculated.js';
export { makeDeliveryPricingStrategyCreateInputCallback } from '../models/DeliveryPricingStrategyCreateInputCallback.js';
export { makeDeliveryPricingStrategyCreateInputCallerSupplied } from '../models/DeliveryPricingStrategyCreateInputCallerSupplied.js';
export { makeDeliveryPricingStrategyCreateInputFixed } from '../models/DeliveryPricingStrategyCreateInputFixed.js';
export { makeDeliveryPricingStrategyCreateInputRateTable } from '../models/DeliveryPricingStrategyCreateInputRateTable.js';
export { makeDeliveryPricingStrategyCreateInputTiered } from '../models/DeliveryPricingStrategyCreateInputTiered.js';
export { makeDeliveryPricingStrategyCreateRequest } from '../models/DeliveryPricingStrategyCreateRequest.js';
export { makeDeliveryPricingStrategyInputCalculated } from '../models/DeliveryPricingStrategyInputCalculated.js';
export { makeDeliveryPricingStrategyInputCallback } from '../models/DeliveryPricingStrategyInputCallback.js';
export { makeDeliveryPricingStrategyInputCallerSupplied } from '../models/DeliveryPricingStrategyInputCallerSupplied.js';
export { makeDeliveryPricingStrategyInputFixed } from '../models/DeliveryPricingStrategyInputFixed.js';
export { makeDeliveryPricingStrategyInputRateTable } from '../models/DeliveryPricingStrategyInputRateTable.js';
export { makeDeliveryPricingStrategyInputTiered } from '../models/DeliveryPricingStrategyInputTiered.js';
export { makeDeliveryPricingStrategyRequest } from '../models/DeliveryPricingStrategyRequest.js';
export { makeDeliveryPricingTierBandRequest } from '../models/DeliveryPricingTierBandRequest.js';
export { makeDeliveryRadiusCondition } from '../models/DeliveryRadiusCondition.js';
export { makeDeliveryRadiusOrigin } from '../models/DeliveryRadiusOrigin.js';
export { makeDeliveryRateTablePricingStrategyCreateRequest } from '../models/DeliveryRateTablePricingStrategyCreateRequest.js';
export { makeDeliveryRateTablePricingStrategyRequest } from '../models/DeliveryRateTablePricingStrategyRequest.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliveryScheduleWindowRuleRequest } from '../models/DeliveryScheduleWindowRuleRequest.js';
export { makeDeliveryStateCondition } from '../models/DeliveryStateCondition.js';
export { makeDeliveryTieredPricingStrategyInputQuantityOrMoney } from '../models/DeliveryTieredPricingStrategyInputQuantityOrMoney.js';
export { makeDeliveryTieredPricingStrategyInputWeight } from '../models/DeliveryTieredPricingStrategyInputWeight.js';
export { makeDeliveryTieredPricingStrategyRequest } from '../models/DeliveryTieredPricingStrategyRequest.js';
export { makeDeliveryTransitTimeRule } from '../models/DeliveryTransitTimeRule.js';
export { makeDeliveryWeeklyInterval } from '../models/DeliveryWeeklyInterval.js';
export { makeDeliveryWeightUnitPriceRequest } from '../models/DeliveryWeightUnitPriceRequest.js';
export { makeDeliveryWindowTimeCondition } from '../models/DeliveryWindowTimeCondition.js';
export { makeDeliveryZoneCondition } from '../models/DeliveryZoneCondition.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateDeliveryMethodRequest } from '../models/UpdateDeliveryMethodRequest.js';
