import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/reports.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';

const _sdkDescriptors = new DescriptorSource(settings, {["createReport"]:r0,["getReport"]:r0,["listReports"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.reports = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReport", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createReport", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "X-Request-Id"
], true, true, params), options).then(_sdkResponse),
      get: async (report_id, params, options) => this.#runtime.request("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [
  "X-Request-Id"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (report_id, params, options) => this.#runtime.request("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [
  "X-Request-Id"
], false, false, params), options).then(_sdkResponse),
      getWait: (report_id, params, options) => this.#runtime.wait("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [
  "X-Request-Id"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWaitWithResponse: (report_id, params, options) => this.#runtime.wait("getReport", _sdkRequestInput([
  "report_id"
], [report_id], [
  "X-Request-Id"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReports", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "X-Request-Id"
], false, false, params), options),
    });
}
close() { return this.#runtime.close(); }
}
export { makeReportResponse } from '../models/ReportResponse.js';
export { makeReportListResponse } from '../models/ReportListResponse.js';
export { makeReport } from '../models/Report.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makePublicDownload } from '../models/PublicDownload.js';
