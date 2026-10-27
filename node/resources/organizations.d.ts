import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateOrganizationRequestInput } from '../declarations/types-7.js';
import type { GrantOrganizationMembershipRequestInput } from '../declarations/types-19.js';
import type {
    Organization,
    OrganizationListResponse,
    OrganizationMembership,
    OrganizationMembershipListResponse,
    OrganizationMembershipResponse,
    OrganizationResponse,
    OrganizationsCreateInput,
    OrganizationsGetInput,
    OrganizationsGrantMembershipInput,
    OrganizationsListInput,
    OrganizationsListMembershipsInput,
    OrganizationsRemoveInput,
    OrganizationsRevokeMembershipInput,
    OrganizationsUpdateInput
} from '../declarations/types-34.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateOrganizationRequestInput } from '../declarations/types-48.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails
} from '../runtime.js';
export type { CreateOrganizationRequestInput, CreateOrganizationRequest } from '../declarations/types-7.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    Organization,
    OrganizationResponse,
    OrganizationMembership,
    OrganizationMembershipResponse,
    OrganizationMembershipListResponse,
    OrganizationListResponse,
    OrganizationsCreateInput,
    OrganizationsRemoveInput,
    OrganizationsGetInput,
    OrganizationsGrantMembershipInput,
    OrganizationsListMembershipsInput,
    OrganizationsListInput,
    OrganizationsRevokeMembershipInput,
    OrganizationsUpdateInput
} from '../declarations/types-34.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { GrantOrganizationMembershipRequestInput } from '../declarations/types-19.js';
export type { UpdateOrganizationRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { ExpandedOrganizationSummary } from '../declarations/types-16.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateOrganizationRequest } from '../declarations/types-64.js';
export { makeGrantOrganizationMembershipRequest } from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateOrganizationRequest } from '../declarations/types-73.js';
export interface OrganizationsResource {
    /**
 * Creates an organization under parent_organization_id. Flint creates each merchant's top-level
 * organization; the API creates organizations below it.
 * @see reference/organizations.md#organizationscreate
 * POST /v1/organizations
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.create({name: "example", parent_organization_id: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateOrganizationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Organization>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/organizations.md#organizationscreate
     */
    createWithResponse(params: (InputValue<CreateOrganizationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrganizationResponse>>;
    /**
 * Soft-deletes an organization and reports status archived. Refused while the organization has
 * active child organizations or a non-closed merchant belongs to it, including your merchant's own
 * organization. Conflicts include up to 10 blocking_resources and the total
 * blocking_resource_count. Current organization access and mutation permissions are checked before
 * idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and
 * organization.
 * @see reference/organizations.md#organizationsremove
 * DELETE /v1/organizations/{organization_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(organization_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Organization>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/organizations.md#organizationsremove
     */
    removeWithResponse(organization_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrganizationResponse>>;
    /**
 * Returns an accessible organization by ID. An inaccessible organization returns 404; an
 * inaccessible parent requested through expand returns 403 FORBIDDEN with reason
 * expansion_not_permitted.
 * @see reference/organizations.md#organizationsget
 * GET /v1/organizations/{organization_id}
 * @example
 * client.organizations.get("example")
 */
    get(organization_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"parent_organization">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Organization>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/organizations.md#organizationsget
     */
    getWithResponse(organization_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"parent_organization">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<OrganizationResponse>>;
    /**
 * Sets the role of a user who already belongs to this organization or one of its parent
 * organizations. Returns 201 when it adds a direct membership and 200 when it changes one. It
 * can't add new people; any other user_id returns 404. Current organization access and mutation
 * permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant,
 * mode, environment, and organization.
 * @see reference/organizations.md#organizationsgrantmembership
 * POST /v1/organizations/{organization_id}/memberships
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.grantMembership("example", {role: "admin", user_id: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    grantMembership(organization_id: InputValue<string>, params: (InputValue<GrantOrganizationMembershipRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<OrganizationMembership>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/organizations.md#organizationsgrantmembership
     */
    grantMembershipWithResponse(organization_id: InputValue<string>, params: (InputValue<GrantOrganizationMembershipRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrganizationMembershipResponse>>;
    /**
 * Returns the direct memberships for an organization.
 * @see reference/organizations.md#organizationslistmemberships
 * GET /v1/organizations/{organization_id}/memberships
 * @example
 * client.organizations.listMemberships("example")
 */
    listMemberships(organization_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<OrganizationMembershipListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/organizations.md#organizationslistmemberships
     */
    listMembershipsWithResponse(organization_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<OrganizationMembershipListResponse>>;
    /** Iterate pages lazily.
     * @see reference/organizations.md#organizationslistmemberships
     */
    listMembershipsPages(organization_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<OrganizationMembershipListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/organizations.md#organizationslistmemberships
     */
    listMembershipsPagesWithResponse(organization_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<OrganizationMembershipListResponse>>;
    /** Iterate items lazily.
     * @see reference/organizations.md#organizationslistmemberships
     */
    listMembershipsItems(organization_id: InputValue<string>, params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<OrganizationMembership>;
    /**
 * Returns the organizations accessible to the caller, filtered to the authenticated merchant's
 * organization subtree for external API keys. Pagination uses the last returned sort value and
 * organization_id, so inserting or deleting earlier rows does not shift later pages. Reuse
 * page_token with the same filters and sort; page_size may change.
 * @see reference/organizations.md#organizationslist
 * GET /v1/organizations
 * @example
 * client.organizations.list()
 */
    list(params?: {
        "parent_organization_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"parent_organization">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<OrganizationListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/organizations.md#organizationslist
     */
    listWithResponse(params?: {
        "parent_organization_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"parent_organization">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<OrganizationListResponse>>;
    /** Iterate pages lazily.
     * @see reference/organizations.md#organizationslist
     */
    listPages(params?: {
        "parent_organization_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"parent_organization">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<OrganizationListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/organizations.md#organizationslist
     */
    listPagesWithResponse(params?: {
        "parent_organization_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"parent_organization">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<OrganizationListResponse>>;
    /** Iterate items lazily.
     * @see reference/organizations.md#organizationslist
     */
    listItems(params?: {
        "parent_organization_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
        "expand"?: InputValue<Array<"parent_organization">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Organization>;
    /**
 * Removes a user's direct membership and returns it with status removed. A role the user holds in
 * a parent organization still applies. The owner can't be removed. Current organization access and
 * mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the
 * merchant, mode, environment, and organization.
 * @see reference/organizations.md#organizationsrevokemembership
 * DELETE /v1/organizations/{organization_id}/memberships/{user_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.revokeMembership("example", "example", {}, { idempotencyKey: idempotencyKey
 * })
 */
    revokeMembership(organization_id: InputValue<string>, user_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<OrganizationMembership>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/organizations.md#organizationsrevokemembership
     */
    revokeMembershipWithResponse(organization_id: InputValue<string>, user_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrganizationMembershipResponse>>;
    /**
 * Applies a sparse update to an accessible active organization. Send at least one field; metadata:
 * {} is a valid no-op patch. The name field cannot be null. parent_organization_id moves the
 * organization and can't be null. Set metadata to null to clear all metadata. Current organization
 * access and mutation permissions are checked before idempotent replay. Idempotency keys are
 * scoped to the merchant, mode, environment, and organization.
 * @see reference/organizations.md#organizationsupdate
 * PATCH /v1/organizations/{organization_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.update("example", {expected_version: "1"}, { idempotencyKey: idempotencyKey
 * })
 */
    update(organization_id: InputValue<string>, params: (InputValue<UpdateOrganizationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Organization>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/organizations.md#organizationsupdate
     */
    updateWithResponse(organization_id: InputValue<string>, params: (InputValue<UpdateOrganizationRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<OrganizationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly organizations: OrganizationsResource;
}
