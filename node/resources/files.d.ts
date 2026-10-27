import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateFileRequestInput } from '../declarations/types-6.js';
import type { File, FileResponse, FilesCompleteInput, FilesCreateInput, FilesGetInput } from '../declarations/types-17.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { File, FileResponse, FilesCompleteInput, FilesCreateInput, FilesGetInput, FileUpload } from '../declarations/types-17.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { CreateFileRequestInput } from '../declarations/types-6.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateFileRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface FilesResource {
    /**
 * After PUT succeeds, complete the file to process its image. Returns the ready file; completing a
 * ready file again returns it. Send no request body or {}. Completing before the bytes arrive
 * returns FILE_NOT_UPLOADED and leaves the file awaiting_upload. Attach the returned file_id as
 * images[].file_id before expires_at, 24 hours after processing. Completion requires the purpose's
 * write scope, with the same merchant-wide branding and environment boundaries as createFile.
 * Partner installs can upload commerce images but cannot upload merchant_logo or merchant_icon:
 * those purposes return INSUFFICIENT_SCOPE with scope_requirement because merchants.profile.write
 * is not grantable to installs. Idempotency is scoped to merchant, credential, environment, route,
 * and file_id. A replay returns the original result; it does not extend upload or attachment
 * deadlines. After a lost completion response, repeat this route with the same key and file_id.
 * @see reference/files.md#filescomplete
 * POST /v1/files/{file_id}/complete
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.files.complete("example", undefined, { idempotencyKey: idempotencyKey })
 */
    complete(file_id: InputValue<string>, params?: (InputValue<{}> | {}) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<File>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/files.md#filescomplete
     */
    completeWithResponse(file_id: InputValue<string>, params?: (InputValue<{}> | {}) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<FileResponse>>;
    /**
 * Upload a local image to Flint. Create a file, PUT the bytes to upload.url with upload.method and
 * every upload.headers value, then POST /v1/files/{file_id}/complete. The URL works for 15
 * minutes. Purpose requires its own write scope: product and product_variant use
 * commerce.products.write; bundle uses commerce.bundles.write; payment_link uses
 * checkouts.payment_links.write; subscription_plan uses commerce.subscription_plans.write;
 * merchant_logo and merchant_icon use merchants.profile.write. Logo and icon files are
 * merchant-wide; all other purposes belong to the authenticated environment. Partner installs can
 * upload commerce images but cannot upload merchant_logo or merchant_icon: those purposes return
 * INSUFFICIENT_SCOPE with scope_requirement because merchants.profile.write is not grantable to
 * installs. Idempotency is scoped to merchant, credential, environment, and route. A replay
 * returns the original upload target without extending its expiry. After a lost response, retry
 * with the same Idempotency-Key or create another file. Each upload URL expires 15 minutes after
 * creation.
 * @see reference/files.md#filescreate
 * POST /v1/files
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.files.create({purpose: "product", content_type: "image/jpeg", size_bytes: "1"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateFileRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<File>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/files.md#filescreate
     */
    createWithResponse(params: (InputValue<CreateFileRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<FileResponse>>;
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
 * @see reference/files.md#filesget
 * GET /v1/files/{file_id}
 * @example
 * client.files.get("example")
 */
    get(file_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<File>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/files.md#filesget
     */
    getWithResponse(file_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<FileResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly files: FilesResource;
}
