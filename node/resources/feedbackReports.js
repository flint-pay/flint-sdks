import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/feedbackReports.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';

const _sdkDescriptors = new DescriptorSource(settings, {["createFeedbackReport"]:r0,["getFeedbackReport"]:r0,["listFeedbackReports"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.feedbackReports = Object.freeze({
      create: async (params, options) => this.#runtime.request("createFeedbackReport", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createFeedbackReport", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createFeedbackReport", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (feedback_report_id, params, options) => this.#runtime.request("getFeedbackReport", _sdkRequestInput([
  "feedback_report_id"
], [feedback_report_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFeedbackReport", result, path))),
      getWithResponse: async (feedback_report_id, params, options) => this.#runtime.request("getFeedbackReport", _sdkRequestInput([
  "feedback_report_id"
], [feedback_report_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFeedbackReports", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listFeedbackReports", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateFeedbackReportNarrative } from '../models/CreateFeedbackReportNarrative.js';
export { makeCreateFeedbackReportRating } from '../models/CreateFeedbackReportRating.js';
export { makeCreateFeedbackReportRequest } from '../models/CreateFeedbackReportRequest.js';
export { makeFeedbackReportingClient } from '../models/FeedbackReportingClient.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
