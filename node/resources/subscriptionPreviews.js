import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/subscriptionPreviews.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';

const _sdkDescriptors = new DescriptorSource(settings, {["createSubscriptionPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.subscriptionPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionPreview", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPreview", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddressRequest } from '../models/AddressRequest.js';
export { makeCreateSubscriptionPreviewRequest } from '../models/CreateSubscriptionPreviewRequest.js';
export { makeCreateSubscriptionPreviewRequestCreate } from '../models/CreateSubscriptionPreviewRequestCreate.js';
export { makeCreateSubscriptionPreviewRequestDeliveryMethodUpdate } from '../models/CreateSubscriptionPreviewRequestDeliveryMethodUpdate.js';
export { makeCreateSubscriptionPreviewRequestDeliveryOptions } from '../models/CreateSubscriptionPreviewRequestDeliveryOptions.js';
export { makeCreateSubscriptionPreviewRequestNextRenewal } from '../models/CreateSubscriptionPreviewRequestNextRenewal.js';
export { makeCreateSubscriptionPreviewRequestPlanChange } from '../models/CreateSubscriptionPreviewRequestPlanChange.js';
export { makeCreateSubscriptionPreviewRequestPromotionApply } from '../models/CreateSubscriptionPreviewRequestPromotionApply.js';
export { makeCreateSubscriptionPreviewRequestQuantityChange } from '../models/CreateSubscriptionPreviewRequestQuantityChange.js';
export { makeCreateSubscriptionRequest } from '../models/CreateSubscriptionRequest.js';
export { makeDeliveryAvailabilityRequest } from '../models/DeliveryAvailabilityRequest.js';
export { makeDeliveryBlackoutIntervalRequest } from '../models/DeliveryBlackoutIntervalRequest.js';
export { makeDeliveryBusinessDayRangeRequest } from '../models/DeliveryBusinessDayRangeRequest.js';
export { makeDeliveryCalculatedPricingStrategyRequest } from '../models/DeliveryCalculatedPricingStrategyRequest.js';
export { makeDeliveryCallbackPricingStrategyRequest } from '../models/DeliveryCallbackPricingStrategyRequest.js';
export { makeDeliveryCallerSuppliedPricingStrategyRequest } from '../models/DeliveryCallerSuppliedPricingStrategyRequest.js';
export { makeDeliveryCountryConditionRequest } from '../models/DeliveryCountryConditionRequest.js';
export { makeDeliveryCustomerBooleanCondition } from '../models/DeliveryCustomerBooleanCondition.js';
export { makeDeliveryCustomerSegmentCondition } from '../models/DeliveryCustomerSegmentCondition.js';
export { makeDeliveryDistanceRequest } from '../models/DeliveryDistanceRequest.js';
export { makeDeliveryDistanceUnitPriceRequest } from '../models/DeliveryDistanceUnitPriceRequest.js';
export { makeDeliveryEligibilityExpressionRequest } from '../models/DeliveryEligibilityExpressionRequest.js';
export { makeDeliveryFixedPricingStrategyRequest } from '../models/DeliveryFixedPricingStrategyRequest.js';
export { makeDeliveryMethodConfigurationPatchRequest } from '../models/DeliveryMethodConfigurationPatchRequest.js';
export { makeDeliveryMethodOriginSelectorInputAllocatedOriginGroup } from '../models/DeliveryMethodOriginSelectorInputAllocatedOriginGroup.js';
export { makeDeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet } from '../models/DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet.js';
export { makeDeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations } from '../models/DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations.js';
export { makeDeliveryMethodOriginSelectorInputFixedLocation } from '../models/DeliveryMethodOriginSelectorInputFixedLocation.js';
export { makeDeliveryMethodOriginSelectorInputPickupLocationCollection } from '../models/DeliveryMethodOriginSelectorInputPickupLocationCollection.js';
export { makeDeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet } from '../models/DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet.js';
export { makeDeliveryMethodOriginSelectorInputPickupLocationCollectionLocations } from '../models/DeliveryMethodOriginSelectorInputPickupLocationCollectionLocations.js';
export { makeDeliveryMethodOriginSelectorRequest } from '../models/DeliveryMethodOriginSelectorRequest.js';
export { makeDeliveryPostalCodeConditionRequest } from '../models/DeliveryPostalCodeConditionRequest.js';
export { makeDeliveryPostalCodeValueRequest } from '../models/DeliveryPostalCodeValueRequest.js';
export { makeDeliveryPricingRateRequest } from '../models/DeliveryPricingRateRequest.js';
export { makeDeliveryPricingStrategyInputCalculated } from '../models/DeliveryPricingStrategyInputCalculated.js';
export { makeDeliveryPricingStrategyInputCallback } from '../models/DeliveryPricingStrategyInputCallback.js';
export { makeDeliveryPricingStrategyInputCallerSupplied } from '../models/DeliveryPricingStrategyInputCallerSupplied.js';
export { makeDeliveryPricingStrategyInputFixed } from '../models/DeliveryPricingStrategyInputFixed.js';
export { makeDeliveryPricingStrategyInputRateTable } from '../models/DeliveryPricingStrategyInputRateTable.js';
export { makeDeliveryPricingStrategyInputTiered } from '../models/DeliveryPricingStrategyInputTiered.js';
export { makeDeliveryPricingStrategyRequest } from '../models/DeliveryPricingStrategyRequest.js';
export { makeDeliveryPricingTierBandRequest } from '../models/DeliveryPricingTierBandRequest.js';
export { makeDeliveryRadiusConditionRequest } from '../models/DeliveryRadiusConditionRequest.js';
export { makeDeliveryRadiusOrigin } from '../models/DeliveryRadiusOrigin.js';
export { makeDeliveryRateTablePricingStrategyRequest } from '../models/DeliveryRateTablePricingStrategyRequest.js';
export { makeDeliveryRecipientRequirementRequest } from '../models/DeliveryRecipientRequirementRequest.js';
export { makeDeliveryScheduleWindowRuleRequest } from '../models/DeliveryScheduleWindowRuleRequest.js';
export { makeDeliverySelectionRecipientRequest } from '../models/DeliverySelectionRecipientRequest.js';
export { makeDeliveryStateConditionRequest } from '../models/DeliveryStateConditionRequest.js';
export { makeDeliveryTieredPricingStrategyInputQuantityOrMoney } from '../models/DeliveryTieredPricingStrategyInputQuantityOrMoney.js';
export { makeDeliveryTieredPricingStrategyInputWeight } from '../models/DeliveryTieredPricingStrategyInputWeight.js';
export { makeDeliveryTieredPricingStrategyRequest } from '../models/DeliveryTieredPricingStrategyRequest.js';
export { makeDeliveryTransitTimeRuleRequest } from '../models/DeliveryTransitTimeRuleRequest.js';
export { makeDeliveryWeeklyIntervalRequest } from '../models/DeliveryWeeklyIntervalRequest.js';
export { makeDeliveryWeightUnitPriceRequest } from '../models/DeliveryWeightUnitPriceRequest.js';
export { makeDeliveryWindowTimeCondition } from '../models/DeliveryWindowTimeCondition.js';
export { makeDeliveryZoneConditionRequest } from '../models/DeliveryZoneConditionRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePromotionRefInputPromotionCode } from '../models/PromotionRefInputPromotionCode.js';
export { makePromotionRefInputPromotionID } from '../models/PromotionRefInputPromotionID.js';
export { makePromotionRefRequest } from '../models/PromotionRefRequest.js';
export { makeSubscriptionBillingScheduleInputExternal } from '../models/SubscriptionBillingScheduleInputExternal.js';
export { makeSubscriptionBillingScheduleInputFlint } from '../models/SubscriptionBillingScheduleInputFlint.js';
export { makeSubscriptionBillingScheduleRequest } from '../models/SubscriptionBillingScheduleRequest.js';
export { makeSubscriptionBillingStartInputImmediate } from '../models/SubscriptionBillingStartInputImmediate.js';
export { makeSubscriptionBillingStartInputImported } from '../models/SubscriptionBillingStartInputImported.js';
export { makeSubscriptionBillingStartInputScheduled } from '../models/SubscriptionBillingStartInputScheduled.js';
export { makeSubscriptionBillingStartRequest } from '../models/SubscriptionBillingStartRequest.js';
export { makeSubscriptionDeliveryDestinationInputAddress } from '../models/SubscriptionDeliveryDestinationInputAddress.js';
export { makeSubscriptionDeliveryDestinationInputCustomerAddress } from '../models/SubscriptionDeliveryDestinationInputCustomerAddress.js';
export { makeSubscriptionDeliveryDestinationRequest } from '../models/SubscriptionDeliveryDestinationRequest.js';
export { makeSubscriptionDeliveryRequest } from '../models/SubscriptionDeliveryRequest.js';
export { makeSubscriptionEndAfterCyclesRequest } from '../models/SubscriptionEndAfterCyclesRequest.js';
export { makeSubscriptionEndAfterDateRequest } from '../models/SubscriptionEndAfterDateRequest.js';
export { makeSubscriptionEndAfterRequest } from '../models/SubscriptionEndAfterRequest.js';
export { makeSubscriptionGiftRecipientRequest } from '../models/SubscriptionGiftRecipientRequest.js';
export { makeSubscriptionOfferLineItemRequest } from '../models/SubscriptionOfferLineItemRequest.js';
export { makeSubscriptionOfferTermsRequest } from '../models/SubscriptionOfferTermsRequest.js';
export { makeSubscriptionPlanChangeLineItemRequest } from '../models/SubscriptionPlanChangeLineItemRequest.js';
export { makeSubscriptionPlanTermsRequest } from '../models/SubscriptionPlanTermsRequest.js';
export { makeSubscriptionPromotionRequest } from '../models/SubscriptionPromotionRequest.js';
export { makeSubscriptionQuantityChangeLineItemRequest } from '../models/SubscriptionQuantityChangeLineItemRequest.js';
export { makeSubscriptionServiceLocationInputAddress } from '../models/SubscriptionServiceLocationInputAddress.js';
export { makeSubscriptionServiceLocationInputCustomerAddress } from '../models/SubscriptionServiceLocationInputCustomerAddress.js';
export { makeSubscriptionServiceLocationRequest } from '../models/SubscriptionServiceLocationRequest.js';
export { makeSubscriptionTaxCalculationRequest } from '../models/SubscriptionTaxCalculationRequest.js';
export { makeSubscriptionTaxRequest } from '../models/SubscriptionTaxRequest.js';
export { makeSubscriptionTermsRequest } from '../models/SubscriptionTermsRequest.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateDeliveryMethodRequest } from '../models/UpdateDeliveryMethodRequest.js';
