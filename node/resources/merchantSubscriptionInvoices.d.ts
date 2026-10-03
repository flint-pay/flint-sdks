export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { MerchantSubscriptionInvoice } from '../declarations/MerchantSubscriptionInvoice.js';
import type { MerchantSubscriptionInvoiceListResponse } from '../declarations/MerchantSubscriptionInvoiceListResponse.js';
import type { MerchantSubscriptionInvoiceResponse } from '../declarations/MerchantSubscriptionInvoiceResponse.js';
import type { MerchantSubscriptionInvoicesGetInput } from '../declarations/MerchantSubscriptionInvoicesGetInput.js';
import type { MerchantSubscriptionInvoicesGetResponse } from '../declarations/MerchantSubscriptionInvoicesGetResponse.js';
import type { MerchantSubscriptionInvoicesListInput } from '../declarations/MerchantSubscriptionInvoicesListInput.js';
import type { MerchantSubscriptionInvoicesListResponse } from '../declarations/MerchantSubscriptionInvoicesListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface MerchantSubscriptionInvoicesResource {
    /**
 * Returns one invoice issued by Flint for the authenticated merchant environment.
 * GET /v1/merchant-subscription-invoices/{merchant_subscription_invoice_id}
 * @example
 * client.merchantSubscriptionInvoices.get("example")
 */
    get(merchant_subscription_invoice_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<MerchantSubscriptionInvoiceResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(merchant_subscription_invoice_id: InputValue<string>, params?: { "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<MerchantSubscriptionInvoicesGetResponse>>;
    /**
 * Returns invoices issued by Flint for the authenticated merchant environment.
 * GET /v1/merchant-subscription-invoices
 * @example
 * client.merchantSubscriptionInvoices.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<MerchantSubscriptionInvoiceListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<MerchantSubscriptionInvoicesListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<MerchantSubscriptionInvoiceListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<MerchantSubscriptionInvoicesListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<MerchantSubscriptionInvoice>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly merchantSubscriptionInvoices: MerchantSubscriptionInvoicesResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { MerchantSubscriptionInvoiceResponse } from '../declarations/MerchantSubscriptionInvoiceResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { MerchantSubscriptionInvoicesGetResponse } from '../declarations/MerchantSubscriptionInvoicesGetResponse.js';
export type { MerchantSubscriptionInvoiceListResponse } from '../declarations/MerchantSubscriptionInvoiceListResponse.js';
export type { MerchantSubscriptionInvoicesListResponse } from '../declarations/MerchantSubscriptionInvoicesListResponse.js';
export type { MerchantSubscriptionInvoice } from '../declarations/MerchantSubscriptionInvoice.js';
export type { MerchantSubscriptionInvoicesGetInput } from '../declarations/MerchantSubscriptionInvoicesGetInput.js';
export type { MerchantSubscriptionInvoicesListInput } from '../declarations/MerchantSubscriptionInvoicesListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { MerchantSubscriptionInvoiceLine } from '../declarations/MerchantSubscriptionInvoiceLine.js';
export { makeMerchantSubscriptionInvoiceResponse } from '../declarations/makeMerchantSubscriptionInvoiceResponse.js';
export { makeMerchantSubscriptionInvoiceListResponse } from '../declarations/makeMerchantSubscriptionInvoiceListResponse.js';
export { makeMerchantSubscriptionInvoice } from '../declarations/makeMerchantSubscriptionInvoice.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeMerchantSubscriptionInvoiceLine } from '../declarations/makeMerchantSubscriptionInvoiceLine.js';
