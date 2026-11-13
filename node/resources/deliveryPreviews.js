import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryPreviews.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';

const _sdkDescriptors = new DescriptorSource(settings, {["createDeliveryPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryPreviews = Object.freeze({
      create: async (params, options) => this.#runtime.request("createDeliveryPreview", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryPreview", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateDeliveryOptionsPreviewRequest } from '../models/CreateDeliveryOptionsPreviewRequest.js';
export { makeCreateDeliveryPickupLocationsPreviewRequest } from '../models/CreateDeliveryPickupLocationsPreviewRequest.js';
export { makeCreateDeliveryPreviewRequest } from '../models/CreateDeliveryPreviewRequest.js';
export { makeCreateOrderLineItemInputBundle } from '../models/CreateOrderLineItemInputBundle.js';
export { makeCreateOrderLineItemInputCustom } from '../models/CreateOrderLineItemInputCustom.js';
export { makeCreateOrderLineItemInputVariant } from '../models/CreateOrderLineItemInputVariant.js';
export { makeCreateOrderLineItemRequest } from '../models/CreateOrderLineItemRequest.js';
export { makeDeliveryAddressRequest } from '../models/DeliveryAddressRequest.js';
export { makeDeliveryBuyerLocationInputAddress } from '../models/DeliveryBuyerLocationInputAddress.js';
export { makeDeliveryBuyerLocationInputCoordinate } from '../models/DeliveryBuyerLocationInputCoordinate.js';
export { makeDeliveryBuyerLocationRequest } from '../models/DeliveryBuyerLocationRequest.js';
export { makeDeliveryCoordinateRequest } from '../models/DeliveryCoordinateRequest.js';
export { makeDeliveryPickupAvailabilityMaximumDistanceRequest } from '../models/DeliveryPickupAvailabilityMaximumDistanceRequest.js';
export { makeDeliveryWindowRequest } from '../models/DeliveryWindowRequest.js';
export { makeDimensionsRequest } from '../models/DimensionsRequest.js';
export { makeGiftCardPurchaseDetailsRequest } from '../models/GiftCardPurchaseDetailsRequest.js';
export { makeGiftCardPurchaseRecipientRequest } from '../models/GiftCardPurchaseRecipientRequest.js';
export { makeImageReferenceRequest } from '../models/ImageReferenceRequest.js';
export { makeInventoryRoutingSourceInputFixedLocation } from '../models/InventoryRoutingSourceInputFixedLocation.js';
export { makeInventoryRoutingSourceInputPolicy } from '../models/InventoryRoutingSourceInputPolicy.js';
export { makeInventoryRoutingSourceInputPolicyRevision } from '../models/InventoryRoutingSourceInputPolicyRevision.js';
export { makeInventoryRoutingSourceRequest } from '../models/InventoryRoutingSourceRequest.js';
export { makeLineItemFulfillmentOriginRequestModel } from '../models/LineItemFulfillmentOriginRequestModel.js';
export { makeLineItemFulfillmentRequestModel } from '../models/LineItemFulfillmentRequestModel.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeOrderDraftLineItemInventoryDemandRequest } from '../models/OrderDraftLineItemInventoryDemandRequest.js';
export { makeOrderDraftLineItemTaxCalculationRequestModel } from '../models/OrderDraftLineItemTaxCalculationRequestModel.js';
export { makeOrderDraftLineItemTaxRequestModel } from '../models/OrderDraftLineItemTaxRequestModel.js';
export { makeOrderDraftTaxComponentRequestModel } from '../models/OrderDraftTaxComponentRequestModel.js';
export { makeOrderDraftTaxJurisdictionRequestModel } from '../models/OrderDraftTaxJurisdictionRequestModel.js';
export { makeOrderLineItemModifierInputCatalogRequest } from '../models/OrderLineItemModifierInputCatalogRequest.js';
export { makeOrderLineItemModifierInputTextRequest } from '../models/OrderLineItemModifierInputTextRequest.js';
export { makeOrderLineItemModifierRequestModel } from '../models/OrderLineItemModifierRequestModel.js';
export { makeSubscribedLineRequestModel } from '../models/SubscribedLineRequestModel.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeWeightRequest } from '../models/WeightRequest.js';
