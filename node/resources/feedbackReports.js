import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/feedbackReports.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';

const _sdkDescriptors = new DescriptorSource(settings, {["createFeedbackReport"]:r0,["getFeedbackReport"]:r0,["listFeedbackReports"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.feedbackReports = Object.freeze({
      create: async (params, options) => this.#runtime.request("createFeedbackReport", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createFeedbackReport", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(_sdkResponse),
      get: async (feedback_report_id, params, options) => this.#runtime.request("getFeedbackReport", _sdkRequestInput([
  "feedback_report_id"
], [feedback_report_id], [
  "X-Request-Id"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (feedback_report_id, params, options) => this.#runtime.request("getFeedbackReport", _sdkRequestInput([
  "feedback_report_id"
], [feedback_report_id], [
  "X-Request-Id"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFeedbackReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options),
    });
}
close() { return this.#runtime.close(); }
}
export { makeFeedbackReportResponse } from '../models/FeedbackReportResponse.js';
export { makeFeedbackReportListResponse } from '../models/FeedbackReportListResponse.js';
export { makeFeedbackReport } from '../models/FeedbackReport.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeFeedbackReportingClient } from '../models/FeedbackReportingClient.js';
