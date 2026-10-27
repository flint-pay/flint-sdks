import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    FraudWarning,
    FraudWarningListResponse,
    FraudWarningResponse,
    FraudWarningsGetInput,
    FraudWarningsListInput
} from '../declarations/types-17.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
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
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    FraudWarning,
    FraudWarningResponse,
    FraudWarningListResponse,
    FraudWarningsGetInput,
    FraudWarningsListInput,
    FraudWarningPaymentSummary
} from '../declarations/types-17.js';
export type { SdkResponse, SettlementAmounts } from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { Dispute, ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from '../declarations/types-16.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { CheckoutBuyerContact } from '../declarations/types-3.js';
export type { PricingAmounts } from '../declarations/types-37.js';
export type { PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary } from '../declarations/types-36.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface FraudWarningsResource {
    /**
 * Retrieves an early fraud warning. Expand `payment_intent` or `dispute` to include them.
 * @see reference/fraudWarnings.md#fraudwarningsget
 * GET /v1/fraud-warnings/{fraud_warning_id}
 * @example
 * client.fraudWarnings.get("example")
 */
    get(fraud_warning_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"dispute" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<FraudWarning>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/fraudWarnings.md#fraudwarningsget
     */
    getWithResponse(fraud_warning_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"dispute" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<FraudWarningResponse>>;
    /**
 * Lists early fraud warnings that card networks reported on your payments, most recently reported
 * first. Filter with `is_actionable=true` to find warnings a full refund can still resolve before
 * a dispute.
 * @see reference/fraudWarnings.md#fraudwarningslist
 * GET /v1/fraud-warnings
 * @example
 * client.fraudWarnings.list()
 */
    list(params?: {
        "is_actionable"?: InputValue<boolean>;
        "payment_intent_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"dispute" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<FraudWarningListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/fraudWarnings.md#fraudwarningslist
     */
    listWithResponse(params?: {
        "is_actionable"?: InputValue<boolean>;
        "payment_intent_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"dispute" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<FraudWarningListResponse>>;
    /** Iterate pages lazily.
     * @see reference/fraudWarnings.md#fraudwarningslist
     */
    listPages(params?: {
        "is_actionable"?: InputValue<boolean>;
        "payment_intent_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"dispute" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<FraudWarningListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/fraudWarnings.md#fraudwarningslist
     */
    listPagesWithResponse(params?: {
        "is_actionable"?: InputValue<boolean>;
        "payment_intent_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"dispute" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<FraudWarningListResponse>>;
    /** Iterate items lazily.
     * @see reference/fraudWarnings.md#fraudwarningslist
     */
    listItems(params?: {
        "is_actionable"?: InputValue<boolean>;
        "payment_intent_id"?: InputValue<string>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"dispute" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<FraudWarning>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly fraudWarnings: FraudWarningsResource;
}
