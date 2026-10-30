import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { File, FileResponse, FilesCompleteParams, FilesCreateParams, FilesGetParams } from '../declarations/types-21.js';
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
export type { FilesCompleteParams, File, FileResponse, FilesCreateParams, FilesGetParams, FileUpload } from '../declarations/types-21.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { CreateFileRequestInput } from '../declarations/types-7.js';
export { makeCreateFileRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface FilesResource {
    /**
 * Completing a merchant_logo or merchant_icon file requires a live-mode credential or a Dashboard
 * session in any selected environment. Test credentials receive 403 FORBIDDEN with reason
 * live_mode_required. After PUT succeeds, complete the file to process its image. Returns the
 * ready file; completing a ready file again returns it. Send no request body or {}. Completing
 * before the bytes arrive returns ACTION_NOT_ALLOWED with reason status_not_reached and
 * current_status awaiting_upload. Attach the returned file_id as images[].file_id before
 * expires_at, 24 hours after processing. Completion requires the purpose's write scope, with the
 * same merchant-wide branding and environment boundaries as createFile. Partner installs can
 * upload commerce images but cannot upload merchant_logo or merchant_icon: live install
 * credentials receive INSUFFICIENT_SCOPE with scope_requirement because merchants.profile.write is
 * not grantable to installs. Idempotency is scoped to merchant, credential, environment, route,
 * and file_id. A replay returns the original result; it does not extend upload or attachment
 * deadlines. After a lost completion response, repeat this route with the same key and file_id.
 *
 * `POST /v1/files/{file_id}/complete`
 * @param file_id Flint file ID.
 * @see https://developers.withflintpay.com/docs/api/files#completeFile
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.files.complete("file_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    complete(file_id: InputValue<string>, params?: FilesCompleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<File, FileResponse>>;
    /**
 * Upload a local image to Flint. Create a file, PUT the bytes to upload.url with upload.method and
 * every upload.headers value, then `client.files.complete`. The URL works for 15 minutes. Purpose
 * requires its own write scope: product and product_variant use commerce.products.write; bundle
 * uses commerce.bundles.write; payment_link uses checkouts.payment_links.write; subscription_plan
 * uses commerce.subscription_plans.write; merchant_logo and merchant_icon use
 * merchants.profile.write. Logo and icon files are merchant-wide. Creating or completing them
 * requires a live-mode credential or a Dashboard session in any selected environment; test
 * credentials receive 403 FORBIDDEN with reason live_mode_required. All other purposes belong to
 * the authenticated environment. Partner installs can upload commerce images but cannot upload
 * merchant_logo or merchant_icon: live install credentials receive INSUFFICIENT_SCOPE with
 * scope_requirement because merchants.profile.write is not grantable to installs. Idempotency is
 * scoped to merchant, credential, environment, and route. A replay returns the original upload
 * target without extending its expiry. After a lost response, retry with the same Idempotency-Key
 * or create another file. Each upload URL expires 15 minutes after creation.
 *
 * `POST /v1/files`
 * @see https://developers.withflintpay.com/docs/api/files#createFile
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.files.create({content_type: "image/png", purpose: "product", size_bytes: 12345}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: FilesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<File, FileResponse>>;
    /**
 * Returns a file's current status without upload credentials. Purpose requires its own read scope:
 * product and product_variant use commerce.products.read; bundle uses commerce.bundles.read;
 * payment_link uses checkouts.payment_links.read; subscription_plan uses
 * commerce.subscription_plans.read; merchant_logo and merchant_icon use merchants.profile.read.
 * The matching write scope also grants read access. Dashboard sessions require the purpose's
 * manage capability. Logo and icon files are merchant-wide; other files belong to the
 * authenticated environment. Partner installs can read commerce files but cannot read
 * merchant_logo or merchant_icon. Expired deadlines are reflected immediately. Only ready files
 * include url, width, and height. The response uses Cache-Control: no-store.
 *
 * `GET /v1/files/{file_id}`
 * @param file_id Flint file ID.
 * @see https://developers.withflintpay.com/docs/api/files#getFile
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.files.get("file_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(file_id: InputValue<string>, params?: FilesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<File, FileResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly files: FilesResource;
}
