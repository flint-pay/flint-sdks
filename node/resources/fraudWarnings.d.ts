import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { FraudWarning, FraudWarningListResponse, FraudWarningResponse } from '../declarations/types-24.js';
import type { FraudWarningsGetParams, FraudWarningsListParams } from '../declarations/types-25.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
export type { FraudWarningsGetParams, FraudWarningsListParams } from '../declarations/types-25.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type {
    FraudWarning,
    FraudWarningResponse,
    FraudWarningListResponse,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    FraudWarningPaymentSummary
} from '../declarations/types-24.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { Dispute } from '../declarations/types-23.js';
export type { MoneyValue, NextAction } from '../declarations/types-39.js';
export type { CheckoutBuyerContact } from '../declarations/types-5.js';
export type { DeferredPromotion } from '../declarations/types-17.js';
export type { PricingAmounts } from '../declarations/types-49.js';
export type { OrderSettlementAmounts } from '../declarations/types-41.js';
export type { SettlementAmounts } from '../declarations/types-59.js';
export type {
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentSourceCardPresentDetails
} from '../declarations/types-47.js';
export type { SplitReversalReference } from '../declarations/types-60.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeMoneyValue } from '../declarations/types-79.js';
export interface FraudWarningsResource {
    /**
 * Retrieves an early fraud warning. Expand `payment_intent` or `dispute` to include them.
 *
 * `GET /v1/fraud-warnings/{fraud_warning_id}`
 * @param fraud_warning_id Flint fraud warning ID.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#getFraudWarning
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.fraudWarnings.get("frw_01KEZF7C00WD6W4TAFS0FH851W")
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
