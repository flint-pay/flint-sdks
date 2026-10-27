import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryQuotes.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["getDeliveryQuote"]:r0,["listDeliveryQuotes"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryQuotes = Object.freeze({
      get: async (delivery_quote_id, params, options) => this.#runtime.request("getDeliveryQuote", _sdkRequestInput([
  "delivery_quote_id"
], [delivery_quote_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryQuote", result, path))),
      getWithResponse: async (delivery_quote_id, params, options) => this.#runtime.request("getDeliveryQuote", _sdkRequestInput([
  "delivery_quote_id"
], [delivery_quote_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryQuotes", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryQuotes", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryQuotes", _sdkRequestInput([], [], [
  "checkout_session_id",
  "order_id",
  "status",
  "evaluation_status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeBuyerInstructionsConfig } from '../models/BuyerInstructionsConfig.js';
export { makeDeliveryAddressRequest } from '../models/DeliveryAddressRequest.js';
export { makeDeliveryBuyerLocationInputAddress } from '../models/DeliveryBuyerLocationInputAddress.js';
export { makeDeliveryBuyerLocationInputCoordinate } from '../models/DeliveryBuyerLocationInputCoordinate.js';
export { makeDeliveryBuyerLocationRequest } from '../models/DeliveryBuyerLocationRequest.js';
export { makeDeliveryRecipientRequirement } from '../models/DeliveryRecipientRequirement.js';
export { makeDeliveryWindowRequest } from '../models/DeliveryWindowRequest.js';
export { makeLocationCoordinate } from '../models/LocationCoordinate.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
