import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryQuotes.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';

const _sdkDescriptors = new DescriptorSource(settings, {["listDeliveryQuotes"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryQuotes = Object.freeze({
      list: async (params, options) => this.#runtime.request("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
    });
}
close() { return this.#runtime.close(); }
}
export { makeDeliveryQuoteListResponse } from '../models/DeliveryQuoteListResponse.js';
export { makeDeliveryQuote } from '../models/DeliveryQuote.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeDeliveryBuyerLocationResource } from '../models/DeliveryBuyerLocationResource.js';
export { makeDeliveryAddressResource } from '../models/DeliveryAddressResource.js';
export { makeDeliveryCoordinateRequest } from '../models/DeliveryCoordinateRequest.js';
export { makeDeliveryQuoteChoiceGroupResource } from '../models/DeliveryQuoteChoiceGroupResource.js';
export { makeDeliveryCandidateOutcomeResource } from '../models/DeliveryCandidateOutcomeResource.js';
export { makeDeliveryAddressAdvisoryResource } from '../models/DeliveryAddressAdvisoryResource.js';
export { makeDeliveryAddressRequest } from '../models/DeliveryAddressRequest.js';
export { makeDeliveryInputRequirement } from '../models/DeliveryInputRequirement.js';
export { makeDeliveryInputConstraint } from '../models/DeliveryInputConstraint.js';
export { makeDeliveryWindowResource } from '../models/DeliveryWindowResource.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeDeliveryOptionProjection } from '../models/DeliveryOptionProjection.js';
export { makeDeliveryArrivalEstimate } from '../models/DeliveryArrivalEstimate.js';
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeDeliveryPlan } from '../models/DeliveryPlan.js';
export { makeDeliveryQuoteExecutionLegResource } from '../models/DeliveryQuoteExecutionLegResource.js';
export { makeDeliveryShipmentDetails } from '../models/DeliveryShipmentDetails.js';
export { makeDeliveryPickupDetails } from '../models/DeliveryPickupDetails.js';
export { makeDeliveryLocationSummaryResource } from '../models/DeliveryLocationSummaryResource.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliveryQuoteLineItemResource } from '../models/DeliveryQuoteLineItemResource.js';
export { makeDeliveryMerchantDiagnostic } from '../models/DeliveryMerchantDiagnostic.js';
export { makeDeliveryEligibilityMismatch } from '../models/DeliveryEligibilityMismatch.js';
export { makeDeliveryQuoteMethodResource } from '../models/DeliveryQuoteMethodResource.js';
export { makeDeliveryPendingCallerRateRequest } from '../models/DeliveryPendingCallerRateRequest.js';
