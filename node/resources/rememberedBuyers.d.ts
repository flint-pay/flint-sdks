import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { RememberedBuyer, RememberedBuyerResponse } from '../declarations/types-53.js';
import type { RememberedBuyersLookupParams, RememberedBuyersRevokeParams, RequestOptions } from '../declarations/types-54.js';
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
    RememberedBuyersLookupParams,
    RequestOptions,
    RememberedBuyersRevokeParams,
    RememberedBuyerTokenRequestInput,
    ResponseMeta,
    ResponseWarning,
    ResourceReference,
    RememberedBuyerTokenRequest
} from '../declarations/types-54.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RememberedBuyer, RememberedBuyerResponse } from '../declarations/types-53.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export { makeRememberedBuyerTokenRequest } from '../declarations/types-81.js';
export interface RememberedBuyersResource {
    /**
 * Resolves a remembered buyer token without sending a code. Only a checkout credential can call
 * this route, including after the checkout ends. A merchant key is refused. The email is always
 * masked. code_channel is sms or email when this checkout can request a recognition code for the
 * buyer, and null otherwise; it does not consider code caps. An unknown, expired, ended, replaced,
 * other business's, or other sandbox's token returns the same 404 RESOURCE_NOT_FOUND.
 *
 * `POST /v1/remembered-buyers/lookup`
 * @see https://developers.withflintpay.com/docs/api/remembered-buyers#lookupRememberedBuyer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.rememberedBuyers.lookup({remembered_buyer_token:
 * "rbt_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"})
 */
    lookup(params: RememberedBuyersLookupParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout">>): Promise<WithResponseInfo<RememberedBuyer, RememberedBuyerResponse>>;
    /**
 * Ends the remembered identity named by the body token and returns its final masked resource with
 * no supported actions. Only a checkout credential can call this route, including after the
 * checkout ends. A repeat without an idempotency replay returns 404 RESOURCE_NOT_FOUND. Forgetting
 * never changes saved cards.
 *
 * `POST /v1/remembered-buyers/revoke`
 * @see https://developers.withflintpay.com/docs/api/remembered-buyers#revokeRememberedBuyer
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.rememberedBuyers.revoke({remembered_buyer_token:
 * "rbt_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}, { idempotencyKey: idempotencyKey })
 */
    revoke(params: RememberedBuyersRevokeParams, options?: RequestOptions<"checkout">): Promise<WithResponseInfo<RememberedBuyer, RememberedBuyerResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly rememberedBuyers: RememberedBuyersResource;
}
