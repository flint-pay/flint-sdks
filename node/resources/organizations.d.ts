export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { Organization } from '../declarations/Organization.js';
import type { OrganizationListResponse } from '../declarations/OrganizationListResponse.js';
import type { OrganizationMembership } from '../declarations/OrganizationMembership.js';
import type { OrganizationMembershipListResponse } from '../declarations/OrganizationMembershipListResponse.js';
import type { OrganizationMembershipResponse } from '../declarations/OrganizationMembershipResponse.js';
import type { OrganizationResponse } from '../declarations/OrganizationResponse.js';
import type { OrganizationsCreateInput } from '../declarations/OrganizationsCreateInput.js';
import type { OrganizationsCreateResponse } from '../declarations/OrganizationsCreateResponse.js';
import type { OrganizationsGetInput } from '../declarations/OrganizationsGetInput.js';
import type { OrganizationsGetResponse } from '../declarations/OrganizationsGetResponse.js';
import type { OrganizationsGrantMembershipInput } from '../declarations/OrganizationsGrantMembershipInput.js';
import type { OrganizationsGrantMembershipResponse } from '../declarations/OrganizationsGrantMembershipResponse.js';
import type { OrganizationsListInput } from '../declarations/OrganizationsListInput.js';
import type { OrganizationsListMembershipsInput } from '../declarations/OrganizationsListMembershipsInput.js';
import type { OrganizationsListMembershipsResponse } from '../declarations/OrganizationsListMembershipsResponse.js';
import type { OrganizationsListResponse } from '../declarations/OrganizationsListResponse.js';
import type { OrganizationsRemoveInput } from '../declarations/OrganizationsRemoveInput.js';
import type { OrganizationsRemoveResponse } from '../declarations/OrganizationsRemoveResponse.js';
import type { OrganizationsRevokeMembershipInput } from '../declarations/OrganizationsRevokeMembershipInput.js';
import type { OrganizationsRevokeMembershipResponse } from '../declarations/OrganizationsRevokeMembershipResponse.js';
import type { OrganizationsTransferOwnershipInput } from '../declarations/OrganizationsTransferOwnershipInput.js';
import type { OrganizationsTransferOwnershipResponse } from '../declarations/OrganizationsTransferOwnershipResponse.js';
import type { OrganizationsUpdateInput } from '../declarations/OrganizationsUpdateInput.js';
import type { OrganizationsUpdateResponse } from '../declarations/OrganizationsUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { RevokeOrganizationMembershipResponse } from '../declarations/RevokeOrganizationMembershipResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { TransferOrganizationOwnershipResponse } from '../declarations/TransferOrganizationOwnershipResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface OrganizationsResource {
    /**
 * Creates a child organization within the caller's accessible organization hierarchy.
 * POST /v1/organizations
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.create({name: "example", "Idempotency-Key": idempotencyKey})
 */
    create(params: (InputValue<{ "metadata"?: Record<string, string>; "name": string; "parent_organization_id"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrganizationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "metadata"?: Record<string, string>; "name": string; "parent_organization_id"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrganizationsCreateResponse>>;
    /**
 * Soft-deletes an organization when it has no active descendants or merchant links.
 * DELETE /v1/organizations/{organization_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.remove("example", {"Idempotency-Key": idempotencyKey})
 */
    remove(organization_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrganizationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(organization_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrganizationsRemoveResponse>>;
    /**
 * Returns an accessible organization by ID.
 * GET /v1/organizations/{organization_id}
 * @example
 * client.organizations.get("example", {})
 */
    get(organization_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"parent_organization">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<OrganizationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(organization_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"parent_organization">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<OrganizationsGetResponse>>;
    /**
 * Adds or updates a direct organization membership for a user.
 * POST /v1/organizations/{organization_id}/memberships
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.grantMembership("example", {role: "owner", user_id: "example", "Idempotency-Key": idempotencyKey})
 */
    grantMembership(organization_id: InputValue<string>, params: (InputValue<{ "role": "owner" | "admin" | "operator" | "viewer"; "user_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrganizationMembershipResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    grantMembershipWithResponse(organization_id: InputValue<string>, params: (InputValue<{ "role": "owner" | "admin" | "operator" | "viewer"; "user_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrganizationsGrantMembershipResponse>>;
    /**
 * Returns the direct memberships for an organization.
 * GET /v1/organizations/{organization_id}/memberships
 * @example
 * client.organizations.listMemberships("example", {})
 */
    listMemberships(organization_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<OrganizationMembershipListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listMembershipsWithResponse(organization_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<OrganizationsListMembershipsResponse>>;
    listMembershipsPages(organization_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<OrganizationMembershipListResponse>;
    listMembershipsPagesWithResponse(organization_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<OrganizationsListMembershipsResponse>>;
    listMembershipsItems(organization_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<OrganizationMembership>;
    /**
 * Returns the organizations accessible to the caller, filtered to the authenticated merchant's organization subtree for external API keys.
 * GET /v1/organizations
 * @example
 * client.organizations.list({})
 */
    list(params?: { "parent_organization_id"?: InputValue<string>; "status"?: InputValue<"active" | "deleted">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<OrganizationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "parent_organization_id"?: InputValue<string>; "status"?: InputValue<"active" | "deleted">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<OrganizationsListResponse>>;
    listPages(params?: { "parent_organization_id"?: InputValue<string>; "status"?: InputValue<"active" | "deleted">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<OrganizationListResponse>;
    listPagesWithResponse(params?: { "parent_organization_id"?: InputValue<string>; "status"?: InputValue<"active" | "deleted">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<OrganizationsListResponse>>;
    listItems(params?: { "parent_organization_id"?: InputValue<string>; "status"?: InputValue<"active" | "deleted">; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Organization>;
    /**
 * Revokes a direct organization membership for a user.
 * DELETE /v1/organizations/{organization_id}/memberships/{user_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.revokeMembership("example", "example", {"Idempotency-Key": idempotencyKey})
 */
    revokeMembership(organization_id: InputValue<string>, user_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<RevokeOrganizationMembershipResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    revokeMembershipWithResponse(organization_id: InputValue<string>, user_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrganizationsRevokeMembershipResponse>>;
    /**
 * Transfers the organization owner role to another user.
 * POST /v1/organizations/{organization_id}/transfer-ownership
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.transferOwnership("example", {new_owner_user_id: "example", "Idempotency-Key": idempotencyKey})
 */
    transferOwnership(organization_id: InputValue<string>, params: (InputValue<{ "new_owner_user_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<TransferOrganizationOwnershipResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    transferOwnershipWithResponse(organization_id: InputValue<string>, params: (InputValue<{ "new_owner_user_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrganizationsTransferOwnershipResponse>>;
    /**
 * Applies a sparse update to an accessible organization.
 * PATCH /v1/organizations/{organization_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.update("example", {"Idempotency-Key": idempotencyKey})
 */
    update(organization_id: InputValue<string>, params: (InputValue<{ "metadata"?: Record<string, string | null> | null; "name"?: string; "parent_organization_id"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<OrganizationResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(organization_id: InputValue<string>, params: (InputValue<{ "metadata"?: Record<string, string | null> | null; "name"?: string; "parent_organization_id"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<OrganizationsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly organizations: OrganizationsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { OrganizationResponse } from '../declarations/OrganizationResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { OrganizationsCreateResponse } from '../declarations/OrganizationsCreateResponse.js';
export type { OrganizationsRemoveResponse } from '../declarations/OrganizationsRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { OrganizationsGetResponse } from '../declarations/OrganizationsGetResponse.js';
export type { OrganizationMembershipResponse } from '../declarations/OrganizationMembershipResponse.js';
export type { OrganizationsGrantMembershipResponse } from '../declarations/OrganizationsGrantMembershipResponse.js';
export type { OrganizationMembershipListResponse } from '../declarations/OrganizationMembershipListResponse.js';
export type { OrganizationsListMembershipsResponse } from '../declarations/OrganizationsListMembershipsResponse.js';
export type { OrganizationMembership } from '../declarations/OrganizationMembership.js';
export type { OrganizationListResponse } from '../declarations/OrganizationListResponse.js';
export type { OrganizationsListResponse } from '../declarations/OrganizationsListResponse.js';
export type { Organization } from '../declarations/Organization.js';
export type { RevokeOrganizationMembershipResponse } from '../declarations/RevokeOrganizationMembershipResponse.js';
export type { OrganizationsRevokeMembershipResponse } from '../declarations/OrganizationsRevokeMembershipResponse.js';
export type { TransferOrganizationOwnershipResponse } from '../declarations/TransferOrganizationOwnershipResponse.js';
export type { OrganizationsTransferOwnershipResponse } from '../declarations/OrganizationsTransferOwnershipResponse.js';
export type { OrganizationsUpdateResponse } from '../declarations/OrganizationsUpdateResponse.js';
export type { OrganizationsCreateInput } from '../declarations/OrganizationsCreateInput.js';
export type { OrganizationsRemoveInput } from '../declarations/OrganizationsRemoveInput.js';
export type { OrganizationsGetInput } from '../declarations/OrganizationsGetInput.js';
export type { OrganizationsGrantMembershipInput } from '../declarations/OrganizationsGrantMembershipInput.js';
export type { OrganizationsListMembershipsInput } from '../declarations/OrganizationsListMembershipsInput.js';
export type { OrganizationsListInput } from '../declarations/OrganizationsListInput.js';
export type { OrganizationsRevokeMembershipInput } from '../declarations/OrganizationsRevokeMembershipInput.js';
export type { OrganizationsTransferOwnershipInput } from '../declarations/OrganizationsTransferOwnershipInput.js';
export type { OrganizationsUpdateInput } from '../declarations/OrganizationsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { RevokeOrganizationMembershipResult } from '../declarations/RevokeOrganizationMembershipResult.js';
export type { TransferOrganizationOwnershipResult } from '../declarations/TransferOrganizationOwnershipResult.js';
export type { CreateOrganizationRequestInput } from '../declarations/CreateOrganizationRequestInput.js';
export type { GrantOrganizationMembershipRequestInput } from '../declarations/GrantOrganizationMembershipRequestInput.js';
export type { TransferOrganizationOwnershipRequestInput } from '../declarations/TransferOrganizationOwnershipRequestInput.js';
export type { UpdateOrganizationRequestInput } from '../declarations/UpdateOrganizationRequestInput.js';
export { makeOrganizationResponse } from '../declarations/makeOrganizationResponse.js';
export { makeOrganizationMembershipResponse } from '../declarations/makeOrganizationMembershipResponse.js';
export { makeOrganizationMembershipListResponse } from '../declarations/makeOrganizationMembershipListResponse.js';
export { makeOrganizationMembership } from '../declarations/makeOrganizationMembership.js';
export { makeOrganizationListResponse } from '../declarations/makeOrganizationListResponse.js';
export { makeOrganization } from '../declarations/makeOrganization.js';
export { makeRevokeOrganizationMembershipResponse } from '../declarations/makeRevokeOrganizationMembershipResponse.js';
export { makeTransferOrganizationOwnershipResponse } from '../declarations/makeTransferOrganizationOwnershipResponse.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeRevokeOrganizationMembershipResult } from '../declarations/makeRevokeOrganizationMembershipResult.js';
export { makeTransferOrganizationOwnershipResult } from '../declarations/makeTransferOrganizationOwnershipResult.js';
