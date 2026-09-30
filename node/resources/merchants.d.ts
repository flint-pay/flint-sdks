export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { ImageRequestInput } from '../declarations/ImageRequestInput.js';
import type { MerchantResponse } from '../declarations/MerchantResponse.js';
import type { MerchantsGetInput } from '../declarations/MerchantsGetInput.js';
import type { MerchantsGetResponse } from '../declarations/MerchantsGetResponse.js';
import type { MerchantsUpdateInput } from '../declarations/MerchantsUpdateInput.js';
import type { MerchantsUpdateResponse } from '../declarations/MerchantsUpdateResponse.js';
import type { PostalAddressInput } from '../declarations/PostalAddressInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface MerchantsResource {
    /**
 * Returns the authenticated merchant by ID.
 * GET /v1/merchants/{merchant_id}
 * @example
 * client.merchants.get("example", {})
 */
    get(merchant_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"organization">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<MerchantResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(merchant_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"organization">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<MerchantsGetResponse>>;
    /**
 * Applies a sparse update to the authenticated merchant's public business profile fields.
 * PATCH /v1/merchants/{merchant_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.merchants.update("example", {"Idempotency-Key": idempotencyKey})
 */
    update(merchant_id: InputValue<string>, params: (InputValue<{ "address"?: PostalAddressInput; "api_version"?: string; "business_name"?: string; "email"?: string; "expected_version"?: string; "logo"?: ImageRequestInput; "metadata"?: Record<string, string | null> | null; "organization_id"?: string; "phone"?: string; "reporting_timezone"?: string; "support_email"?: string; "support_phone"?: string; "support_url"?: string; "website_url"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<MerchantResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(merchant_id: InputValue<string>, params: (InputValue<{ "address"?: PostalAddressInput; "api_version"?: string; "business_name"?: string; "email"?: string; "expected_version"?: string; "logo"?: ImageRequestInput; "metadata"?: Record<string, string | null> | null; "organization_id"?: string; "phone"?: string; "reporting_timezone"?: string; "support_email"?: string; "support_phone"?: string; "support_url"?: string; "website_url"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<MerchantsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly merchants: MerchantsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { MerchantResponse } from '../declarations/MerchantResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { MerchantsGetResponse } from '../declarations/MerchantsGetResponse.js';
export type { PostalAddressInput } from '../declarations/PostalAddressInput.js';
export type { ImageRequestInput } from '../declarations/ImageRequestInput.js';
export type { MerchantsUpdateResponse } from '../declarations/MerchantsUpdateResponse.js';
export type { MerchantsGetInput } from '../declarations/MerchantsGetInput.js';
export type { MerchantsUpdateInput } from '../declarations/MerchantsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { Merchant } from '../declarations/Merchant.js';
export type { PostalAddress } from '../declarations/PostalAddress.js';
export type { Banner } from '../declarations/Banner.js';
export type { Image } from '../declarations/Image.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { UpdateMerchantRequestInput } from '../declarations/UpdateMerchantRequestInput.js';
export { makeMerchantResponse } from '../declarations/makeMerchantResponse.js';
export { makeMerchant } from '../declarations/makeMerchant.js';
export { makePostalAddress } from '../declarations/makePostalAddress.js';
export { makeBanner } from '../declarations/makeBanner.js';
export { makeImage } from '../declarations/makeImage.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
