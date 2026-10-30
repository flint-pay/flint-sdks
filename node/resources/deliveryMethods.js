import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryMethods.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createDeliveryMethod"]:r0,["deleteDeliveryMethod"]:r0,["getDeliveryMethod"]:r0,["listDeliveryMethods"]:r0,["updateDeliveryMethod"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryMethods = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryMethod", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryMethod", result, path))),
      delete: async (delivery_method_id, params, options) => this.#runtime.request("deleteDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryMethod", result, path))),
      get: async (delivery_method_id, params, options) => this.#runtime.request("getDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryMethod", result, path))),
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
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryMethods", result, path))),
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
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryMethods", result, path)),
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
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (delivery_method_id, params, options) => this.#runtime.request("updateDeliveryMethod", _sdkRequestInput([
  "delivery_method_id"
], [delivery_method_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryMethod", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddRiskListItemsRequest } from '../models/AddRiskListItemsRequest.js';
export { makeBuyerInstructionsConfigRequest } from '../models/BuyerInstructionsConfigRequest.js';
export { makeCreateDeliveryMethodRequest } from '../models/CreateDeliveryMethodRequest.js';
export { makeCreateDeliveryMethodRequestLocalDelivery } from '../models/CreateDeliveryMethodRequestLocalDelivery.js';
export { makeCreateDeliveryMethodRequestPickup } from '../models/CreateDeliveryMethodRequestPickup.js';
export { makeCreateDeliveryMethodRequestShipment } from '../models/CreateDeliveryMethodRequestShipment.js';
export { makeDeliveryAvailabilityRequest } from '../models/DeliveryAvailabilityRequest.js';
export { makeDeliveryBlackoutIntervalRequest } from '../models/DeliveryBlackoutIntervalRequest.js';
export { makeDeliveryBusinessDayRangeRequest } from '../models/DeliveryBusinessDayRangeRequest.js';
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
export { makeDeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet } from '../models/DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet.js';
export { makeDeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations } from '../models/DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations.js';
export { makeDeliveryMethodOriginSelectorInputFixedLocation } from '../models/DeliveryMethodOriginSelectorInputFixedLocation.js';
export { makeDeliveryMethodOriginSelectorInputPickupLocationCollection } from '../models/DeliveryMethodOriginSelectorInputPickupLocationCollection.js';
export { makeDeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet } from '../models/DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet.js';
export { makeDeliveryMethodOriginSelectorInputPickupLocationCollectionLocations } from '../models/DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations.js';
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
export { makeDeliveryTransitTimeRuleRequest } from '../models/DeliveryTransitTimeRuleRequest.js';
export { makeDeliveryWeeklyIntervalRequest } from '../models/DeliveryWeeklyIntervalRequest.js';
export { makeDeliveryWeightUnitPriceRequest } from '../models/DeliveryWeightUnitPriceRequest.js';
export { makeDeliveryWindowTimeCondition } from '../models/DeliveryWindowTimeCondition.js';
export { makeDeliveryZoneCondition } from '../models/DeliveryZoneCondition.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateDeliveryMethodRequest } from '../models/UpdateDeliveryMethodRequest.js';
