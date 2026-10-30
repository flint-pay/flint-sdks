import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { ResourceTimeline, ResourceTimelineResponse, ResourceTimelinesGetParams } from '../declarations/types-48.js';
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
    ResourceTimelinesGetParams,
    ResourceTimeline,
    ResourceTimelineResponse,
    ResourceTimelineEntry,
    ResourceTimelineAPIRequestEntry,
    ResourceType,
    ResourceTimelineWebhookEventEntry,
    ResourceTimelineWebhookDeliveryAttemptEntry,
    ResourceTimelineImageMutationEntry,
    ResponseMeta,
    ResponseWarning
} from '../declarations/types-48.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
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
 * client.resourceTimelines.get("ord_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(resource_id: InputValue<string>, params?: ResourceTimelinesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ResourceTimeline, ResourceTimelineResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly resourceTimelines: ResourceTimelinesResource;
}
