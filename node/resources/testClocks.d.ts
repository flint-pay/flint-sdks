import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    TestClock,
    TestClockListResponse,
    TestClockResponse,
    TestClocksAdvanceParams,
    TestClocksCreateParams,
    TestClocksDeleteParams,
    TestClocksGetParams,
    TestClocksListParams
} from '../declarations/types-57.js';
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
    TestClocksAdvanceParams,
    TestClock,
    TestClockResponse,
    TestClocksCreateParams,
    TestClocksDeleteParams,
    TestClocksGetParams,
    TestClocksListParams,
    TestClockListResponse
} from '../declarations/types-57.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AdvanceTestClockRequestInput, AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { CreateTestClockRequestInput } from '../declarations/types-11.js';
export { makeAdvanceTestClockRequest } from '../declarations/types-61.js';
export { makeCreateTestClockRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface TestClocksResource {
    /**
 * Sandbox only. Moves the test clock forward to `frozen_at`. Flint returns `202` with the clock in
 * status `advancing`, then moves the clock's customers and their subscriptions to `frozen_at`,
 * running the billing that falls due along the way, in order. Flint sends `test_clock.ready` when
 * the advance finishes, or `test_clock.failed` if it can't finish. You can also read the clock
 * with `client.testClocks.get` until its status is `ready` or `failed`. One advance reaches at
 * most two years, or two billing intervals of any subscription on the clock that isn't canceled,
 * whichever is earlier.
 *
 * `POST /v1/test-clocks/{test_clock_id}/advance`
 * @param test_clock_id ID of the test clock.
 * @see https://developers.withflintpay.com/docs/api/test-clocks#advanceTestClock
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.testClocks.advance("tclk_01ARZ3NDEKTSV4RRFFQ69G5FAV", {expected_version: 1, frozen_at:
 * "2026-12-01T00:00:00Z"}, { idempotencyKey: idempotencyKey })
 */
    advance(test_clock_id: InputValue<string>, params: TestClocksAdvanceParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TestClock, TestClockResponse>>;
    /**
 * Sandbox only. Creates a test clock stopped at `frozen_at`, with status `ready`. Customers
 * created on it, and their subscriptions, read its time instead of real time.
 *
 * `POST /v1/test-clocks`
 * @see https://developers.withflintpay.com/docs/api/test-clocks#createTestClock
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.testClocks.create(undefined, { idempotencyKey: idempotencyKey })
 */
    create(params?: TestClocksCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TestClock, TestClockResponse>>;
    /**
 * Sandbox only. Archives the test clock. It stays readable by ID, never advances again, and no new
 * customer can be created on it. Customers and subscriptions already on it are not changed: they
 * keep the clock's `frozen_at` as their current time, so their subscriptions don't bill again.
 * Cancel those subscriptions first if you want them canceled, or reset the sandbox to remove
 * everything. Deleting an archived clock returns it unchanged.
 *
 * `DELETE /v1/test-clocks/{test_clock_id}`
 * @param test_clock_id ID of the test clock.
 * @see https://developers.withflintpay.com/docs/api/test-clocks#deleteTestClock
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.testClocks.delete("tclk_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey
 * })
 */
    delete(test_clock_id: InputValue<string>, params?: TestClocksDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<TestClock, TestClockResponse>>;
    /**
 * Sandbox only. Returns a test clock in this sandbox, including an archived one.
 *
 * `GET /v1/test-clocks/{test_clock_id}`
 * @param test_clock_id ID of the test clock.
 * @see https://developers.withflintpay.com/docs/api/test-clocks#getTestClock
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.testClocks.get("tclk_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(test_clock_id: InputValue<string>, params?: TestClocksGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<TestClock, TestClockResponse>>;
    /**
 * Sandbox only. Lists the sandbox's test clocks, newest first, then by `test_clock_id`. Archived
 * clocks are listed only when the `status` filter names `archived`. Default order: created_at
 * descending, then test_clock_id descending.
 *
 * `GET /v1/test-clocks`
 * @see https://developers.withflintpay.com/docs/api/test-clocks#listTestClocks
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.testClocks.list()
 */
    list(params?: TestClocksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<TestClockListResponse, TestClockListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/test-clocks#listTestClocks
     */
    listPages(params?: TestClocksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<TestClockListResponse, TestClockListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/test-clocks#listTestClocks
     */
    listItems(params?: TestClocksListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<TestClock>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly testClocks: TestClocksResource;
}
