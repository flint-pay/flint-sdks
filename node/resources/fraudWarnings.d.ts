import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    FraudWarning,
    FraudWarningListResponse,
    FraudWarningResponse,
    FraudWarningsGetParams,
    FraudWarningsListParams
} from '../declarations/types-21.js';
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
    FraudWarningsGetParams,
    FraudWarning,
    FraudWarningResponse,
    FraudWarningsListParams,
    FraudWarningListResponse,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    FraudWarningPaymentSummary
} from '../declarations/types-21.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { Dispute } from '../declarations/types-20.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type { CheckoutBuyerContact } from '../declarations/types-4.js';
export type { PricingAmounts, PaymentSourceSummary, PaymentSourceAchDebitSummary, PaymentSourceCardSummary } from '../declarations/types-43.js';
export type { SettlementAmounts } from '../declarations/types-53.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface FraudWarningsResource {
    /**
 * Retrieves an early fraud warning. Expand `payment_intent` or `dispute` to include them.
 *
 * `GET /v1/fraud-warnings/{fraud_warning_id}`
 * @param fraud_warning_id Flint fraud warning ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#getFraudWarning
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.fraudWarnings.get("frw_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(fraud_warning_id: InputValue<string>, params?: FraudWarningsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<FraudWarning, FraudWarningResponse>>;
    /**
 * Lists early fraud warnings that card networks reported on your payments, most recently reported
 * first. Filter with `is_actionable=true` to find warnings a full refund can still resolve before
 * a dispute. Default order: reported_at descending, then fraud_warning_id descending.
 *
 * `GET /v1/fraud-warnings`
 * @see https://developers.withflintpay.com/docs/api/risk-controls#listFraudWarnings
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.fraudWarnings.list()
 */
    list(params?: FraudWarningsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<FraudWarningListResponse, FraudWarningListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/risk-controls#listFraudWarnings
     */
    listPages(params?: FraudWarningsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<FraudWarningListResponse, FraudWarningListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/risk-controls#listFraudWarnings
     */
    listItems(params?: FraudWarningsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<FraudWarning>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly fraudWarnings: FraudWarningsResource;
}
