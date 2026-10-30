import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    Organization,
    OrganizationListResponse,
    OrganizationMembership,
    OrganizationMembershipListResponse,
    OrganizationMembershipResponse,
    OrganizationResponse,
    OrganizationsCreateParams,
    OrganizationsDeleteParams,
    OrganizationsGetParams,
    OrganizationsGrantMembershipParams,
    OrganizationsListMembershipsParams,
    OrganizationsListParams,
    OrganizationsRemoveMembershipParams,
    OrganizationsUpdateParams
} from '../declarations/types-38.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    OrganizationsCreateParams,
    Organization,
    OrganizationResponse,
    OrganizationsDeleteParams,
    OrganizationsGetParams,
    OrganizationsGrantMembershipParams,
    OrganizationMembership,
    OrganizationMembershipResponse,
    OrganizationsListMembershipsParams,
    OrganizationMembershipListResponse,
    OrganizationsListParams,
    OrganizationListResponse,
    OrganizationsRemoveMembershipParams,
    OrganizationsUpdateParams
} from '../declarations/types-38.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions, CheckoutSessionsListDeliverySelectionsParams } from '../declarations/types-5.js';
export type { CreateOrganizationRequestInput } from '../declarations/types-9.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ExpandedOrganizationSummary } from '../declarations/types-21.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { GrantOrganizationMembershipRequestInput } from '../declarations/types-25.js';
export type { UpdateOrganizationRequestInput } from '../declarations/types-59.js';
export { makeCreateOrganizationRequest } from '../declarations/types-64.js';
export { makeGrantOrganizationMembershipRequest } from '../declarations/types-67.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateOrganizationRequest } from '../declarations/types-74.js';
export interface OrganizationsResource {
    /**
 * Creates an organization under parent_organization_id. Flint creates each merchant's top-level
 * organization; the API creates organizations below it.
 *
 * `POST /v1/organizations`
 * @see https://developers.withflintpay.com/docs/api/organizations#createOrganization
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.create({metadata: {segment: "enterprise"}, name: "Northeast Region",
 * parent_organization_id: "org_01JQ4X2R0W0RTM8VJQ8YQ7P9AB"}, { idempotencyKey: idempotencyKey })
 */
    create(params: OrganizationsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Organization, OrganizationResponse>>;
    /**
 * Soft-deletes an organization and reports status archived. Refused while the organization has
 * active child organizations or a non-closed merchant belongs to it, including your merchant's own
 * organization. Conflicts include up to 10 blocking_resources and the total
 * blocking_resource_count. Current organization access and mutation permissions are checked before
 * idempotent replay. Idempotency keys are scoped to the merchant, mode, environment, and
 * organization.
 *
 * `DELETE /v1/organizations/{organization_id}`
 * @param organization_id Flint organization ID.
 * @see https://developers.withflintpay.com/docs/api/organizations#deleteOrganization
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.delete("org_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(organization_id: InputValue<string>, params?: OrganizationsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Organization, OrganizationResponse>>;
    /**
 * Returns an accessible organization by ID. An inaccessible organization returns 404; an
 * inaccessible parent requested through expand returns 403 FORBIDDEN with reason
 * expansion_not_permitted.
 *
 * `GET /v1/organizations/{organization_id}`
 * @param organization_id Flint organization ID.
 * @see https://developers.withflintpay.com/docs/api/organizations#getOrganization
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.organizations.get("org_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(organization_id: InputValue<string>, params?: OrganizationsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Organization, OrganizationResponse>>;
    /**
 * Sets the role of a user who already belongs to this organization or one of its parent
 * organizations. Returns 201 when it adds a direct membership and 200 when it changes one. It
 * can't add new people; any other user_id returns 404. Current organization access and mutation
 * permissions are checked before idempotent replay. Idempotency keys are scoped to the merchant,
 * mode, environment, and organization.
 *
 * `POST /v1/organizations/{organization_id}/memberships`
 * @param organization_id Flint organization ID.
 * @see https://developers.withflintpay.com/docs/api/organizations#grantOrganizationMembership
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.grantMembership("org_01ARZ3NDEKTSV4RRFFQ69G5FAV", {role: "admin", user_id:
 * "usr_01JQ4X9G7C2R9M18D1T9EAV1KX"}, { idempotencyKey: idempotencyKey })
 */
    grantMembership(organization_id: InputValue<string>, params: OrganizationsGrantMembershipParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<OrganizationMembership, OrganizationMembershipResponse>>;
    /**
 * Returns the direct memberships for an organization. Default order: user_id ascending; this key
 * uniquely orders the results.
 *
 * `GET /v1/organizations/{organization_id}/memberships`
 * @param organization_id Flint organization ID.
 * @see https://developers.withflintpay.com/docs/api/organizations#listOrganizationMemberships
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.organizations.listMemberships("org_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    listMemberships(organization_id: InputValue<string>, params?: OrganizationsListMembershipsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<OrganizationMembershipListResponse, OrganizationMembershipListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/organizations#listOrganizationMemberships
     */
    listMembershipsPages(organization_id: InputValue<string>, params?: OrganizationsListMembershipsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<OrganizationMembershipListResponse, OrganizationMembershipListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/organizations#listOrganizationMemberships
     */
    listMembershipsItems(organization_id: InputValue<string>, params?: OrganizationsListMembershipsParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<OrganizationMembership>;
    /**
 * Returns the organizations accessible to the caller, filtered to the authenticated merchant's
 * organization subtree for external API keys. Pagination uses the last returned sort value and
 * organization_id, so inserting or deleting earlier rows does not shift later pages. Reuse
 * page_token with the same filters and sort; page_size may change. Default order: created_at
 * descending, then organization_id descending.
 *
 * `GET /v1/organizations`
 * @see https://developers.withflintpay.com/docs/api/organizations#listOrganizations
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.organizations.list()
 */
    list(params?: OrganizationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<OrganizationListResponse, OrganizationListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/organizations#listOrganizations
     */
    listPages(params?: OrganizationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<OrganizationListResponse, OrganizationListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/organizations#listOrganizations
     */
    listItems(params?: OrganizationsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Organization>;
    /**
 * Removes a user's direct membership and returns it with status removed. A role the user holds in
 * a parent organization still applies. The owner can't be removed. Current organization access and
 * mutation permissions are checked before idempotent replay. Idempotency keys are scoped to the
 * merchant, mode, environment, and organization.
 *
 * `DELETE /v1/organizations/{organization_id}/memberships/{user_id}`
 * @param organization_id Flint organization ID.
 * @param user_id Flint user ID.
 * @see https://developers.withflintpay.com/docs/api/organizations#removeOrganizationMembership
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.removeMembership("org_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * "usr_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    removeMembership(organization_id: InputValue<string>, user_id: InputValue<string>, params?: OrganizationsRemoveMembershipParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<OrganizationMembership, OrganizationMembershipResponse>>;
    /**
 * Applies a sparse update to an accessible active organization. Send at least one field; metadata:
 * {} is a valid no-op patch. The name field cannot be null. parent_organization_id moves the
 * organization and can't be null. Set metadata to null to clear all metadata. Current organization
 * access and mutation permissions are checked before idempotent replay. Idempotency keys are
 * scoped to the merchant, mode, environment, and organization.
 *
 * `PATCH /v1/organizations/{organization_id}`
 * @param organization_id Flint organization ID.
 * @see https://developers.withflintpay.com/docs/api/organizations#updateOrganization
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.organizations.update("org_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Example Retail"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(organization_id: InputValue<string>, params: OrganizationsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Organization, OrganizationResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly organizations: OrganizationsResource;
}
