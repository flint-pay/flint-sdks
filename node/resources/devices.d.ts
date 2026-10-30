import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    Device,
    DeviceListResponse,
    DeviceResponse,
    DevicesCreateParams,
    DevicesDeleteParams,
    DevicesGetParams,
    DevicesListParams,
    DevicesUpdateParams
} from '../declarations/types-20.js';
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
    DevicesCreateParams,
    Device,
    DeviceResponse,
    DevicesDeleteParams,
    DevicesGetParams,
    DevicesListParams,
    DeviceListResponse,
    DevicesUpdateParams
} from '../declarations/types-20.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateDeviceRequestInput } from '../declarations/types-7.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { UpdateDeviceRequestInput } from '../declarations/types-58.js';
export { makeCreateDeviceRequest } from '../declarations/types-63.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makeUpdateDeviceRequest } from '../declarations/types-73.js';
export interface DevicesResource {
    /**
 * Creates a device. If an active device already has the hardware_fingerprint, returns 409
 * ALREADY_EXISTS with reason hardware_fingerprint_already_exists and changes nothing. The
 * details[0].current_resource field names the existing device.
 *
 * `POST /v1/devices`
 * @see https://developers.withflintpay.com/docs/api/devices#createDevice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.devices.create({hardware_fingerprint: "ios-device-uuid-123", location_id:
 * "loc_01KEZF7C00G0VBJJ8VMFCQ5YVG", metadata: {register: "front_counter"}, name: "Front Counter
 * iPad"}, { idempotencyKey: idempotencyKey })
 */
    create(params: DevicesCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Device, DeviceResponse>>;
    /**
 * Archives a device and releases its hardware_fingerprint for reuse. The archived device no longer
 * returns hardware_fingerprint.
 *
 * `DELETE /v1/devices/{device_id}`
 * @param device_id Flint device ID.
 * @see https://developers.withflintpay.com/docs/api/devices#deleteDevice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.devices.delete("dev_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey: idempotencyKey })
 */
    delete(device_id: InputValue<string>, params?: DevicesDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Device, DeviceResponse>>;
    /**
 * Returns a single device by ID.
 *
 * `GET /v1/devices/{device_id}`
 * @param device_id Flint device ID.
 * @see https://developers.withflintpay.com/docs/api/devices#getDevice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.devices.get("dev_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(device_id: InputValue<string>, params?: DevicesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<Device, DeviceResponse>>;
    /**
 * Returns a paginated list of devices for the authenticated merchant. Default order: created_at
 * descending, then device_id descending.
 *
 * `GET /v1/devices`
 * @see https://developers.withflintpay.com/docs/api/devices#listDevices
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.devices.list()
 */
    list(params?: DevicesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeviceListResponse, DeviceListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/devices#listDevices
     */
    listPages(params?: DevicesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<DeviceListResponse, DeviceListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/devices#listDevices
     */
    listItems(params?: DevicesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Device>;
    /**
 * Applies a sparse update to a device. Send null to clear location_id or all metadata. The name
 * field cannot be null. Archived devices return ACTION_NOT_ALLOWED with reason archived and
 * current_status archived.
 *
 * `PATCH /v1/devices/{device_id}`
 * @param device_id Flint device ID.
 * @see https://developers.withflintpay.com/docs/api/devices#updateDevice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.devices.update("dev_01ARZ3NDEKTSV4RRFFQ69G5FAV", {name: "Front counter"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(device_id: InputValue<string>, params: DevicesUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<Device, DeviceResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly devices: DevicesResource;
}
