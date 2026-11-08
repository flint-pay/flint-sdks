import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { RequestOptions, ResourceTimeline, ResourceTimelineResponse, ResourceTimelinesGetParams } from '../declarations/types-51.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
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
    ResourceTimelinesGetParams,
    RequestOptions,
    ResourceTimeline,
    ResourceTimelineResponse,
    ResourceTimelineEntry,
    ResourceTimelineAPIRequestEntry,
    ResourceReference,
    ResourceTimelineWebhookEventEntry,
    ResourceTimelineWebhookDeliveryAttemptEntry,
    ResourceTimelineImageMutationEntry,
    ResponseMeta,
    ResponseWarning
} from '../declarations/types-51.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { NextAction, MoneyValue } from '../declarations/types-37.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export interface ResourceTimelinesResource {
    /**
 * Returns summary-only API request, webhook event, webhook delivery attempt, and image mutation
 * entries for a single public API resource. The caller must have developer.resource_timelines.read
 * and the matching read scope for the requested resource type. Default order: occurred_at
 * descending, then resource_timeline_entry_id descending.
 *
 * `GET /v1/resource-timelines/{resource_id}`
 * @param resource_id Flint public API resource ID.
 * @see https://developers.withflintpay.com/docs/api/api-request-logs#getResourceTimeline
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.resourceTimelines.get("ord_01KEZF7C0054GQKJ142A8X367A")
 */
    get(resource_id: InputValue<string>, params?: ResourceTimelinesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ResourceTimeline, ResourceTimelineResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly resourceTimelines: ResourceTimelinesResource;
}
