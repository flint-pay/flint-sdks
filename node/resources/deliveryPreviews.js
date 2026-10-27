import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryPreviews.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';

const _sdkDescriptors = new DescriptorSource(settings, {["createDeliveryPreview"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryPreviews = Object.freeze({
      create: (input = {}, options) => this.#runtime.request("createDeliveryPreview", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryPreview", result, path))),
      createWithResponse: (input = {}, options) => this.#runtime.request("createDeliveryPreview", input, options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeCreateDeliveryOptionsPreviewRequest } from '../models/CreateDeliveryOptionsPreviewRequest.js';
export { makeCreateDeliveryPickupLocationsPreviewRequest } from '../models/CreateDeliveryPickupLocationsPreviewRequest.js';
export { makeCreateDeliveryPreviewRequest } from '../models/CreateDeliveryPreviewRequest.js';
export { makeCreateOrderLineItemRequest } from '../models/CreateOrderLineItemRequest.js';
export { makeDeliveryAddressRequest } from '../models/DeliveryAddressRequest.js';
export { makeDeliveryBuyerLocationInputAddress } from '../models/DeliveryBuyerLocationInputAddress.js';
export { makeDeliveryBuyerLocationInputCoordinate } from '../models/DeliveryBuyerLocationInputCoordinate.js';
export { makeDeliveryBuyerLocationRequest } from '../models/DeliveryBuyerLocationRequest.js';
export { makeDeliveryCoordinateRequest } from '../models/DeliveryCoordinateRequest.js';
export { makeDeliveryPickupAvailabilityMaximumDistanceRequest } from '../models/DeliveryPickupAvailabilityMaximumDistanceRequest.js';
export { makeDeliveryPreviewRoutingSource } from '../models/DeliveryPreviewRoutingSource.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliveryWindowRequest } from '../models/DeliveryWindowRequest.js';
export { makeDimensions } from '../models/Dimensions.js';
export { makeGiftCardPurchaseDetailsRequest } from '../models/GiftCardPurchaseDetailsRequest.js';
export { makeGiftCardPurchaseRecipientRequest } from '../models/GiftCardPurchaseRecipientRequest.js';
export { makeImageReferenceRequest } from '../models/ImageReferenceRequest.js';
export { makeLineItemFulfillmentOriginRequest } from '../models/LineItemFulfillmentOriginRequest.js';
export { makeLineItemFulfillmentRequest } from '../models/LineItemFulfillmentRequest.js';
export { makeLocationCoordinate } from '../models/LocationCoordinate.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeOrderCalculatedLineItemTax } from '../models/OrderCalculatedLineItemTax.js';
export { makeOrderDraftLineItemInventoryDemandRequest } from '../models/OrderDraftLineItemInventoryDemandRequest.js';
export { makeOrderDraftLineItemTaxCalculationRequest } from '../models/OrderDraftLineItemTaxCalculationRequest.js';
export { makeOrderDraftLineItemTaxRequest } from '../models/OrderDraftLineItemTaxRequest.js';
export { makeOrderDraftTaxComponentRequest } from '../models/OrderDraftTaxComponentRequest.js';
export { makeOrderDraftTaxJurisdictionRequest } from '../models/OrderDraftTaxJurisdictionRequest.js';
export { makeOrderLineItemModifierRequest } from '../models/OrderLineItemModifierRequest.js';
export { makeSubscribedLineRequest } from '../models/SubscribedLineRequest.js';
export { makeTaxCalculationRequest } from '../models/TaxCalculationRequest.js';
export { makeTaxComponentRequest } from '../models/TaxComponentRequest.js';
export { makeTaxJurisdiction } from '../models/TaxJurisdiction.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeWeight } from '../models/Weight.js';
