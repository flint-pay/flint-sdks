import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/organizations.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';

const _sdkDescriptors = new DescriptorSource(settings, {["createOrganization"]:r0,["deleteOrganization"]:r0,["getOrganization"]:r0,["grantOrganizationMembership"]:r0,["listOrganizationMemberships"]:r0,["listOrganizations"]:r0,["removeOrganizationMembership"]:r0,["updateOrganization"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.organizations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createOrganization", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrganization", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createOrganization", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (organization_id, params, options) => this.#runtime.request("deleteOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteOrganization", result, path))),
      removeWithResponse: async (organization_id, params, options) => this.#runtime.request("deleteOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (organization_id, params, options) => this.#runtime.request("getOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrganization", result, path))),
      getWithResponse: async (organization_id, params, options) => this.#runtime.request("getOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      grantMembership: async (organization_id, params, options) => this.#runtime.request("grantOrganizationMembership", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("grantOrganizationMembership", result, path))),
      grantMembershipWithResponse: async (organization_id, params, options) => this.#runtime.request("grantOrganizationMembership", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      listMemberships: async (organization_id, params, options) => this.#runtime.request("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrganizationMemberships", result, path))),
      listMembershipsWithResponse: async (organization_id, params, options) => this.#runtime.request("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listMembershipsPages: (organization_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listOrganizationMemberships", result, path)),
      listMembershipsPagesWithResponse: (organization_id, params, options) => _sdkResponsePages(this.#runtime.pages("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params), options)),
      listMembershipsItems: (organization_id, params, options) => this.#runtime.items("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listOrganizations", _sdkRequestInput([], [], [
  "parent_organization_id",
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrganizations", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listOrganizations", _sdkRequestInput([], [], [
  "parent_organization_id",
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listOrganizations", _sdkRequestInput([], [], [
  "parent_organization_id",
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listOrganizations", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listOrganizations", _sdkRequestInput([], [], [
  "parent_organization_id",
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listOrganizations", _sdkRequestInput([], [], [
  "parent_organization_id",
  "status",
  "page_size",
  "page_token",
  "sort_by",
  "sort_direction",
  "created_after",
  "created_before",
  "updated_after",
  "updated_before",
  "expand"
], false, false, params), options),
      revokeMembership: async (organization_id, user_id, params, options) => this.#runtime.request("removeOrganizationMembership", _sdkRequestInput([
  "organization_id",
  "user_id"
], [organization_id, user_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeOrganizationMembership", result, path))),
      revokeMembershipWithResponse: async (organization_id, user_id, params, options) => this.#runtime.request("removeOrganizationMembership", _sdkRequestInput([
  "organization_id",
  "user_id"
], [organization_id, user_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      update: async (organization_id, params, options) => this.#runtime.request("updateOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrganization", result, path))),
      updateWithResponse: async (organization_id, params, options) => this.#runtime.request("updateOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateOrganizationRequest } from '../models/CreateOrganizationRequest.js';
export { makeGrantOrganizationMembershipRequest } from '../models/GrantOrganizationMembershipRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateOrganizationRequest } from '../models/UpdateOrganizationRequest.js';
