import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/payoutSettings.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';

const _sdkDescriptors = new DescriptorSource(settings, {["deletePayoutDestination"]:r0,["getPayoutDestination"]:r0,["getPayoutSettings"]:r0,["listPayoutDestinations"]:r0,["updatePayoutDestination"]:r0,["updatePayoutSettings"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.payoutSettings = Object.freeze({
      deletePayoutDestination: async (payout_destination_id, params, options) => this.#runtime.request("deletePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      deletePayoutDestinationWithResponse: async (payout_destination_id, params, options) => this.#runtime.request("deletePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      getPayoutDestination: async (payout_destination_id, params, options) => this.#runtime.request("getPayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getPayoutDestinationWithResponse: async (payout_destination_id, params, options) => this.#runtime.request("getPayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      get: async (params, options) => this.#runtime.request("getPayoutSettings", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (params, options) => this.#runtime.request("getPayoutSettings", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPayoutDestinations: async (params, options) => this.#runtime.request("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "include_deleted",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listPayoutDestinationsWithResponse: async (params, options) => this.#runtime.request("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "include_deleted",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPayoutDestinationsPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "include_deleted",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options), []),
      listPayoutDestinationsPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "include_deleted",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options)),
      listPayoutDestinationsItems: (params, options) => this.#runtime.items("listPayoutDestinations", _sdkRequestInput([], [], [
  "currency",
  "type",
  "status",
  "available_payout_method",
  "default_for_currency",
  "include_deleted",
  "page_size",
  "page_token",
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options),
      updatePayoutDestination: async (payout_destination_id, params, options) => this.#runtime.request("updatePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updatePayoutDestinationWithResponse: async (payout_destination_id, params, options) => this.#runtime.request("updatePayoutDestination", _sdkRequestInput([
  "payout_destination_id"
], [payout_destination_id], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (params, options) => this.#runtime.request("updatePayoutSettings", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (params, options) => this.#runtime.request("updatePayoutSettings", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makePayoutDestinationResponse } from '../models/PayoutDestinationResponse.js';
export { makePayoutSettingsResponse } from '../models/PayoutSettingsResponse.js';
export { makePayoutDestinationListResponse } from '../models/PayoutDestinationListResponse.js';
export { makePayoutDestination } from '../models/PayoutDestination.js';
export { makePayoutSettings } from '../models/PayoutSettings.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeMoneyMovementListMeta } from '../models/MoneyMovementListMeta.js';
export { makeMoneyMovementHistoryMeta } from '../models/MoneyMovementHistoryMeta.js';
export { makeMoneyMovementBlockedReason } from '../models/MoneyMovementBlockedReason.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
