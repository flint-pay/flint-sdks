import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    MerchantBillingBalance,
    MerchantBillingBalanceListResponse,
    MerchantBillingBalanceResponse,
    MerchantBillingBalancesGetParams,
    MerchantBillingBalancesListParams
} from '../declarations/types-37.js';
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
export type {
    MerchantBillingBalancesGetParams,
    MerchantBillingBalance,
    MerchantBillingBalanceResponse,
    MerchantBillingBalancesListParams,
    MerchantBillingBalanceListResponse
} from '../declarations/types-37.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MoneyValue, NextAction } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export interface MerchantBillingBalancesResource {
    /**
 * Returns what the merchant currently owes Flint and owns as account credit in one currency.
 *
 * `GET /v1/merchant-billing-balances/{merchant_billing_balance_id}`
 * @param merchant_billing_balance_id Flint merchant billing balance ID.
 * @see https://developers.withflintpay.com/docs/api/merchant-billing#getMerchantBillingBalance
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.merchantBillingBalances.get("mbbal_01KEZF7C002TWWZA70R4DRVJC9")
 */
    get(merchant_billing_balance_id: InputValue<string>, params?: MerchantBillingBalancesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<MerchantBillingBalance, MerchantBillingBalanceResponse>>;
    /**
 * Returns what the merchant currently owes Flint and owns as account credit by currency. All
 * balances fit on one page, so next_page_token is omitted. Default order:
 * merchant_billing_balance_id descending; this key uniquely orders the results.
 *
 * `GET /v1/merchant-billing-balances`
 * @see https://developers.withflintpay.com/docs/api/merchant-billing#listMerchantBillingBalances
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.merchantBillingBalances.list()
 */
    list(params?: MerchantBillingBalancesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<MerchantBillingBalanceListResponse, MerchantBillingBalanceListResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly merchantBillingBalances: MerchantBillingBalancesResource;
}
