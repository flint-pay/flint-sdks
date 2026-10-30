import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/organizations.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createOrganization"]:r0,["deleteOrganization"]:r0,["getOrganization"]:r0,["grantOrganizationMembership"]:r0,["listOrganizationMemberships"]:r0,["listOrganizations"]:r0,["removeOrganizationMembership"]:r0,["updateOrganization"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.organizations = Object.freeze({
      create: async (params, options) => this.#runtime.request("createOrganization", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createOrganization", result, path))),
      delete: async (organization_id, params, options) => this.#runtime.request("deleteOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteOrganization", result, path))),
      get: async (organization_id, params, options) => this.#runtime.request("getOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getOrganization", result, path))),
      grantMembership: async (organization_id, params, options) => this.#runtime.request("grantOrganizationMembership", _sdkRequestInput([
  "organization_id"
], [organization_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("grantOrganizationMembership", result, path))),
      listMemberships: async (organization_id, params, options) => this.#runtime.request("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrganizationMemberships", result, path))),
      listMembershipsPages: (organization_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrganizationMemberships", result, path)),
      listMembershipsItems: (organization_id, params, options) => this.#runtime.items("listOrganizationMemberships", _sdkRequestInput([
  "organization_id"
], [organization_id], [
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
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
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listOrganizations", result, path))),
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
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listOrganizations", result, path)),
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
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      removeMembership: async (organization_id, user_id, params, options) => this.#runtime.request("removeOrganizationMembership", _sdkRequestInput([
  "organization_id",
  "user_id"
], [organization_id, user_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("removeOrganizationMembership", result, path))),
      update: async (organization_id, params, options) => this.#runtime.request("updateOrganization", _sdkRequestInput([
  "organization_id"
], [organization_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateOrganization", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateOrganizationRequest } from '../models/CreateOrganizationRequest.js';
export { makeGrantOrganizationMembershipRequest } from '../models/GrantOrganizationMembershipRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateOrganizationRequest } from '../models/UpdateOrganizationRequest.js';
