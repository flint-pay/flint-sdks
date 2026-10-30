import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/subscriptionPreviews.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createSubscriptionPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.subscriptionPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createSubscriptionPreview", _sdkRequestInput([], [], [], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createSubscriptionPreview", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddressRequest } from '../models/AddressRequest.js';
export { makeCreateMeSubscriptionPreviewRequestDeliveryOptions } from '../models/CreateMeSubscriptionPreviewRequestDeliveryOptions.js';
export { makeCreateMeSubscriptionPreviewRequestNextRenewal } from '../models/CreateMeSubscriptionPreviewRequestNextRenewal.js';
export { makeCreateSubscriptionPreviewRequest } from '../models/CreateSubscriptionPreviewRequest.js';
export { makeCreateSubscriptionPreviewRequestCreate } from '../models/CreateSubscriptionPreviewRequestCreate.js';
export { makeCreateSubscriptionPreviewRequestDeliveryMethodUpdate } from '../models/CreateSubscriptionPreviewRequestDeliveryMethodUpdate.js';
export { makeCreateSubscriptionPreviewRequestDeliveryOptions } from '../models/CreateSubscriptionPreviewRequestDeliveryOptions.js';
export { makeCreateSubscriptionPreviewRequestNextRenewal } from '../models/CreateSubscriptionPreviewRequestNextRenewal.js';
export { makeCreateSubscriptionPreviewRequestPlanChange } from '../models/CreateSubscriptionPreviewRequestPlanChange.js';
export { makeCreateSubscriptionRequest } from '../models/CreateSubscriptionRequest.js';
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
export { makeDeliveryPostalCodeCondition } from '../models/DeliveryPostalCodeCondition.js';
export { makeDeliveryPostalCodeValue } from '../models/DeliveryPostalCodeValue.js';
export { makeDeliveryPricingRateRequest } from '../models/DeliveryPricingRateRequest.js';
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
export { makeDeliveryRateTablePricingStrategyRequest } from '../models/DeliveryRateTablePricingStrategyRequest.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliveryScheduleWindowRuleRequest } from '../models/DeliveryScheduleWindowRuleRequest.js';
export { makeDeliverySelectionRecipientRequest } from '../models/DeliverySelectionRecipientRequest.js';
export { makeDeliveryStateCondition } from '../models/DeliveryStateCondition.js';
export { makeDeliveryTieredPricingStrategyInputQuantityOrMoney } from '../models/DeliveryTieredPricingStrategyInputQuantityOrMoney.js';
export { makeDeliveryTieredPricingStrategyInputWeight } from '../models/DeliveryTieredPricingStrategyInputWeight.js';
export { makeDeliveryTieredPricingStrategyRequest } from '../models/DeliveryTieredPricingStrategyRequest.js';
export { makeDeliveryTransitTimeRuleRequest } from '../models/DeliveryTransitTimeRuleRequest.js';
export { makeDeliveryWeeklyIntervalRequest } from '../models/DeliveryWeeklyIntervalRequest.js';
export { makeDeliveryWeightUnitPriceRequest } from '../models/DeliveryWeightUnitPriceRequest.js';
export { makeDeliveryWindowTimeCondition } from '../models/DeliveryWindowTimeCondition.js';
export { makeDeliveryZoneCondition } from '../models/DeliveryZoneCondition.js';
export { makeDimensions } from '../models/Dimensions.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeReturnResolutionLineItemRequest } from '../models/ReturnResolutionLineItemRequest.js';
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
export { makeSubscriptionOfferLineItemRequest } from '../models/SubscriptionOfferLineItemRequest.js';
export { makeSubscriptionOfferTermsRequest } from '../models/SubscriptionOfferTermsRequest.js';
export { makeSubscriptionPlanChangeLineItemRequest } from '../models/SubscriptionPlanChangeLineItemRequest.js';
export { makeSubscriptionPlanTermsRequest } from '../models/SubscriptionPlanTermsRequest.js';
export { makeSubscriptionServiceLocationInputAddress } from '../models/SubscriptionServiceLocationInputAddress.js';
export { makeSubscriptionServiceLocationInputCustomerAddress } from '../models/SubscriptionServiceLocationInputCustomerAddress.js';
export { makeSubscriptionServiceLocationRequest } from '../models/SubscriptionServiceLocationRequest.js';
export { makeSubscriptionTermsRequest } from '../models/SubscriptionTermsRequest.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateDeliveryMethodRequest } from '../models/UpdateDeliveryMethodRequest.js';
export { makeWeight } from '../models/Weight.js';
