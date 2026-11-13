import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    Reader,
    ReaderConnectionSession,
    ReaderConnectionSessionResponse,
    ReaderListResponse,
    ReaderResponse,
    ReadersCreateConnectionSessionParams,
    ReadersCreateParams,
    ReadersDeleteParams,
    ReadersGetParams,
    ReadersListParams,
    ReadersSimulateParams,
    ReadersUpdateParams
} from '../declarations/types-52.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    ReadersCreateParams,
    Reader,
    ReaderResponse,
    ReadersCreateConnectionSessionParams,
    ReaderConnectionSession,
    ReaderConnectionSessionResponse,
    ReadersDeleteParams,
    ReadersGetParams,
    ReadersListParams,
    ReaderListResponse,
    ReadersSimulateParams,
    ReadersUpdateParams,
    ReaderConnectivity,
    ReadinessMerchantAccountSession,
    ReaderConnectionSessionClientSession,
    ReaderConnectionSessionStripe
} from '../declarations/types-52.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateReaderRequestInput } from '../declarations/types-12.js';
export type { CreateSmartReaderRequestInput, CreateTapToPayReaderRequestInput } from '../declarations/types-13.js';
export type { MetadataRequestInput, NextAction, MoneyValue, MoneyValueInput } from '../declarations/types-38.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-37.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { SimulateReaderRequestInput } from '../declarations/types-59.js';
export type { UpdateReaderRequestInput } from '../declarations/types-67.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export { makeCreateReaderRequest } from '../declarations/types-73.js';
export { makeCreateSmartReaderRequest, makeCreateTapToPayReaderRequest } from '../declarations/types-74.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-78.js';
export { makeSimulateReaderRequest } from '../declarations/types-82.js';
export { makeUpdateReaderRequest } from '../declarations/types-83.js';
export interface ReadersResource {
    /**
 * Readers are payment hardware at a location: a Stripe Reader S710 or S700 your server sends
 * payments to through Flint (`smart_reader`), or a phone that takes Tap to Pay in your app with
 * the Stripe Terminal SDK (`tap_to_pay`). A reader is separate from a device, which records the
 * register or phone that runs your app. Registers a smart reader with its pairing code, or a Tap
 * to Pay reader for a phone, at a location with a complete US address. A pairing code works once,
 * so send an `Idempotency-Key`: a retry with the same key returns the same reader. Registering
 * needs no live payment readiness; payments on the reader do. Sends `reader.created`.
 *
 * `POST /v1/readers`
 * @see https://developers.withflintpay.com/docs/api/readers#createReader
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.readers.create({device_id: "dev_01KEZF7C0096ZG1YZWTWT30ZXN", location_id:
 * "loc_01KEZF7C00CMHRRYA3MV996JB2", name: "Front counter", registration_code:
 * "puppy-hamster-banana", type: "smart_reader"}, { idempotencyKey: idempotencyKey })
 */
    create(params: ReadersCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Reader, ReaderResponse>>;
    /**
 * Tap to Pay readers only. Creates a fresh single-use Stripe Terminal connection token for the
 * reader's location: return `client_session.stripe.connection_token` from the SDK's
 * `fetchConnectionToken` callback, and pass `client_session.stripe.location_id` to
 * `TapToPayConnectionConfiguration`. Each call creates a new token, including a retry with the
 * same `Idempotency-Key`. The token works with readers at the reader's location, not only this
 * phone, so your server decides which phone gets which session. Keep your credential on your
 * server.
 *
 * `POST /v1/readers/{reader_id}/connection-sessions`
 * @param reader_id Flint reader ID.
 * @see https://developers.withflintpay.com/docs/api/readers#createReaderConnectionSession
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.readers.createConnectionSession("rdr_01KEZF7C007JA0G24M7SD6P46C", {}, { idempotencyKey:
 * idempotencyKey })
 */
    createConnectionSession(reader_id: InputValue<string>, params?: ReadersCreateConnectionSessionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<ReaderConnectionSession, ReaderConnectionSessionResponse>>;
    /**
 * Archives a reader and returns it with `status: archived`. A smart reader is unregistered from
 * Stripe shortly after, so its hardware can be paired again; a Tap to Pay reader stops getting
 * connection sessions at once. Refused with `RESOURCE_IN_USE` while a payment is presented on the
 * reader. Archiving an archived reader returns it unchanged. Sends `reader.archived`.
 *
 * `DELETE /v1/readers/{reader_id}`
 * @param reader_id Flint reader ID.
 * @see https://developers.withflintpay.com/docs/api/readers#deleteReader
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.readers.delete("rdr_01KEZF7C007JA0G24M7SD6P46C", {}, { idempotencyKey: idempotencyKey })
 */
    delete(reader_id: InputValue<string>, params?: ReadersDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Reader, ReaderResponse>>;
    /**
 * Returns a reader, including an archived one, with the payment presented on it now in
 * `active_payment_intent_id`.
 *
 * `GET /v1/readers/{reader_id}`
 * @param reader_id Flint reader ID.
 * @see https://developers.withflintpay.com/docs/api/readers#getReader
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.readers.get("rdr_01KEZF7C007JA0G24M7SD6P46C")
 */
    get(reader_id: InputValue<string>, params?: ReadersGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Reader, ReaderResponse>>;
    /**
 * Lists readers newest first, then by `reader_id`. Archived readers are listed only when the
 * `status` filter names `archived`. Default order: created_at descending, then reader_id
 * descending.
 *
 * `GET /v1/readers`
 * @see https://developers.withflintpay.com/docs/api/readers#listReaders
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.readers.list()
 */
    list(params?: ReadersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<ReaderListResponse, ReaderListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/readers#listReaders
     */
    listPages(params?: ReadersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<ReaderListResponse, ReaderListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/readers#listReaders
     */
    listItems(params?: ReadersListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Reader>;
    /**
 * Sandbox only. Presents a Stripe test card on a simulated reader (registered with
 * `registration_code: simulated-s700`) for the payment presented on it, so the result arrives the
 * way a real tap's does. Returns the reader. A live credential gets `403 FORBIDDEN` with reason
 * `test_mode_required`.
 *
 * `POST /v1/readers/{reader_id}/simulate`
 * @param reader_id Flint reader ID.
 * @see https://developers.withflintpay.com/docs/api/readers#simulateReader
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.readers.simulate("rdr_01KEZF7C007JA0G24M7SD6P46C", {outcome: "approved"}, {
 * idempotencyKey: idempotencyKey })
 */
    simulate(reader_id: InputValue<string>, params: ReadersSimulateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Reader, ReaderResponse>>;
    /**
 * Changes a reader's `name`, `device_id` (`null` clears it) and `metadata` (merged by key). A
 * reader's `type` and `location_id` never change: to move a reader, archive it and register it
 * again at the new location. An archived reader can't change. Sends `reader.updated`.
 *
 * `PATCH /v1/readers/{reader_id}`
 * @param reader_id Flint reader ID.
 * @see https://developers.withflintpay.com/docs/api/readers#updateReader
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.readers.update("rdr_01KEZF7C007JA0G24M7SD6P46C", {expected_version: 1, name: "Back
 * counter"}, { idempotencyKey: idempotencyKey })
 */
    update(reader_id: InputValue<string>, params: ReadersUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Reader, ReaderResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly readers: ReadersResource;
}
