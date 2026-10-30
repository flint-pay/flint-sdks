import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returns.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelReturn"]:r0,["cancelReturnLineItem"]:r0,["completeReturn"]:r0,["createReturn"]:r0,["createReturnAccessLink"]:r0,["createReturnDisposition"]:r0,["createReturnInspection"]:r0,["createReturnLineItem"]:r0,["createReturnReceipt"]:r0,["createReturnResolution"]:r0,["decideReturn"]:r0,["deleteReturnLineItem"]:r0,["getReturn"]:r0,["getReturnLineItem"]:r0,["listReturnActivities"]:r0,["listReturnLineItems"]:r0,["listReturns"]:r0,["processReturn"]:r0,["reopenReturn"]:r0,["updateReturn"]:r0,["updateReturnLineItem"]:r0,["waiveReturnLineItemInspection"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.returns = Object.freeze({
      cancel: async (return_id, params, options) => this.#runtime.request("cancelReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturn", result, path))),
      cancelLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("cancelReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturnLineItem", result, path))),
      complete: async (return_id, params, options) => this.#runtime.request("completeReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("completeReturn", result, path))),
      create: async (params, options) => this.#runtime.request("createReturn", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturn", result, path))),
      createAccessLink: async (return_id, params, options) => this.#runtime.request("createReturnAccessLink", _sdkRequestInput([
  "return_id"
], [return_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnAccessLink", result, path))),
      createDisposition: async (return_id, params, options) => this.#runtime.request("createReturnDisposition", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnDisposition", result, path))),
      createInspection: async (return_id, params, options) => this.#runtime.request("createReturnInspection", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnInspection", result, path))),
      createLineItem: async (return_id, params, options) => this.#runtime.request("createReturnLineItem", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnLineItem", result, path))),
      createReceipt: async (return_id, params, options) => this.#runtime.request("createReturnReceipt", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnReceipt", result, path))),
      createResolution: async (return_id, params, options) => this.#runtime.request("createReturnResolution", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnResolution", result, path))),
      decide: async (return_id, params, options) => this.#runtime.request("decideReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("decideReturn", result, path))),
      deleteLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("deleteReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteReturnLineItem", result, path))),
      get: async (return_id, params, options) => this.#runtime.request("getReturn", _sdkRequestInput([
  "return_id"
], [return_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturn", result, path))),
      getLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("getReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnLineItem", result, path))),
      listActivities: async (return_id, params, options) => this.#runtime.request("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnActivities", result, path))),
      listActivitiesPages: (return_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnActivities", result, path)),
      listActivitiesItems: (return_id, params, options) => this.#runtime.items("listReturnActivities", _sdkRequestInput([
  "return_id"
], [return_id], [
  "page_size",
  "page_token",
  "sort_direction"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      listLineItems: async (return_id, params, options) => this.#runtime.request("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnLineItems", result, path))),
      listLineItemsPages: (return_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnLineItems", result, path)),
      listLineItemsItems: (return_id, params, options) => this.#runtime.items("listReturnLineItems", _sdkRequestInput([
  "return_id"
], [return_id], [
  "fulfillment_id",
  "merchandise_status",
  "order_line_item_id",
  "page_size",
  "page_token",
  "resolution_status",
  "return_reason_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      list: async (params, options) => this.#runtime.request("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "idempotency_key",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "sort_by",
  "sort_direction",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturns", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "idempotency_key",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "sort_by",
  "sort_direction",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturns", result, path)),
      listItems: (params, options) => this.#runtime.items("listReturns", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "customer_id",
  "decision_status",
  "external_reference_id",
  "idempotency_key",
  "merchandise_status",
  "order_id",
  "page_size",
  "page_token",
  "query",
  "receiving_location_id",
  "resolution_status",
  "resolution_type",
  "return_number",
  "return_reason_id",
  "sort_by",
  "sort_direction",
  "status",
  "updated_after",
  "updated_before",
  "work_type",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      process: async (return_id, params, options) => this.#runtime.request("processReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("processReturn", result, path))),
      reopen: async (return_id, params, options) => this.#runtime.request("reopenReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("reopenReturn", result, path))),
      update: async (return_id, params, options) => this.#runtime.request("updateReturn", _sdkRequestInput([
  "return_id"
], [return_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturn", result, path))),
      updateLineItem: async (return_id, return_line_item_id, params, options) => this.#runtime.request("updateReturnLineItem", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnLineItem", result, path))),
      waiveLineItemInspection: async (return_id, return_line_item_id, params, options) => this.#runtime.request("waiveReturnLineItemInspection", _sdkRequestInput([
  "return_id",
  "return_line_item_id"
], [return_id, return_line_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("waiveReturnLineItemInspection", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeAddReturnLineItemRequest } from '../models/AddReturnLineItemRequest.js';
export { makeCancelReturnLineItemRequest } from '../models/CancelReturnLineItemRequest.js';
export { makeCancelReturnRequest } from '../models/CancelReturnRequest.js';
export { makeCompleteReturnRequest } from '../models/CompleteReturnRequest.js';
export { makeCreateReturnDispositionRequest } from '../models/CreateReturnDispositionRequest.js';
export { makeCreateReturnDispositionRequestInspectionLine } from '../models/CreateReturnDispositionRequestInspectionLine.js';
export { makeCreateReturnDispositionRequestReceiptLine } from '../models/CreateReturnDispositionRequestReceiptLine.js';
export { makeCreateReturnInspectionRequest } from '../models/CreateReturnInspectionRequest.js';
export { makeCreateReturnReceiptRequest } from '../models/CreateReturnReceiptRequest.js';
export { makeCreateReturnRequest } from '../models/CreateReturnRequest.js';
export { makeCreateReturnResolutionRequest } from '../models/CreateReturnResolutionRequest.js';
export { makeCreateReturnResolutionRequestCorrection } from '../models/CreateReturnResolutionRequestCorrection.js';
export { makeCreateReturnResolutionRequestStandard } from '../models/CreateReturnResolutionRequestStandard.js';
export { makeDecideReturnRequest } from '../models/DecideReturnRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeProcessExistingReturnLineItemRequest } from '../models/ProcessExistingReturnLineItemRequest.js';
export { makeProcessExistingReturnRequest } from '../models/ProcessExistingReturnRequest.js';
export { makeReopenReturnRequest } from '../models/ReopenReturnRequest.js';
export { makeReturnInspectionLineItemRequest } from '../models/ReturnInspectionLineItemRequest.js';
export { makeReturnLineDecision } from '../models/ReturnLineDecision.js';
export { makeReturnLineItemRequest } from '../models/ReturnLineItemRequest.js';
export { makeReturnProcessDecision } from '../models/ReturnProcessDecision.js';
export { makeReturnProcessDispositionRequest } from '../models/ReturnProcessDispositionRequest.js';
export { makeReturnProcessInspectionRequest } from '../models/ReturnProcessInspectionRequest.js';
export { makeReturnProcessReceiptRequest } from '../models/ReturnProcessReceiptRequest.js';
export { makeReturnProcessResolutionRequest } from '../models/ReturnProcessResolutionRequest.js';
export { makeReturnReceiptLineItemInputExcess } from '../models/ReturnReceiptLineItemInputExcess.js';
export { makeReturnReceiptLineItemInputMatched } from '../models/ReturnReceiptLineItemInputMatched.js';
export { makeReturnReceiptLineItemInputUnverified } from '../models/ReturnReceiptLineItemInputUnverified.js';
export { makeReturnReceiptLineItemRequest } from '../models/ReturnReceiptLineItemRequest.js';
export { makeReturnReplacementLineItemInputBundle } from '../models/ReturnReplacementLineItemInputBundle.js';
export { makeReturnReplacementLineItemInputCustom } from '../models/ReturnReplacementLineItemInputCustom.js';
export { makeReturnReplacementLineItemInputVariant } from '../models/ReturnReplacementLineItemInputVariant.js';
export { makeReturnReplacementLineItemRequest } from '../models/ReturnReplacementLineItemRequest.js';
export { makeReturnResolutionAdjustmentRequest } from '../models/ReturnResolutionAdjustmentRequest.js';
export { makeReturnResolutionLineItemRequest } from '../models/ReturnResolutionLineItemRequest.js';
export { makeReturnSourceSystemRequest } from '../models/ReturnSourceSystemRequest.js';
export { makeReturnUnverifiedItem } from '../models/ReturnUnverifiedItem.js';
export { makeTextModifierRequest } from '../models/TextModifierRequest.js';
export { makeUpdateReturnLineItemRequest } from '../models/UpdateReturnLineItemRequest.js';
export { makeUpdateReturnRequest } from '../models/UpdateReturnRequest.js';
export { makeWaiveReturnLineInspectionRequest } from '../models/WaiveReturnLineInspectionRequest.js';
