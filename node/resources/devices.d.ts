import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateDeviceRequestInput } from '../declarations/types-6.js';
import type {
    Device,
    DeviceListResponse,
    DeviceResponse,
    DevicesCreateInput,
    DevicesGetInput,
    DevicesListInput,
    DevicesRemoveInput,
    DevicesUpdateInput
} from '../declarations/types-16.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateDeviceRequestInput } from '../declarations/types-48.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
export type { CreateDeviceRequestInput, CreateDeviceRequest } from '../declarations/types-6.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    Device,
    DeviceResponse,
    DeviceListResponse,
    DevicesCreateInput,
    DevicesRemoveInput,
    DevicesGetInput,
    DevicesListInput,
    DevicesUpdateInput
} from '../declarations/types-16.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { UpdateDeviceRequestInput } from '../declarations/types-48.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export { makeCreateDeviceRequest } from '../declarations/types-63.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateDeviceRequest } from '../declarations/types-72.js';
export interface DevicesResource {
    /**
 * Creates a device. If an active device already has the hardware_fingerprint, returns 409
 * ALREADY_EXISTS with reason hardware_fingerprint_already_exists and changes nothing. The
 * details[0].current_resource field names the existing device.
 * @see reference/devices.md#devicescreate
 * POST /v1/devices
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.devices.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateDeviceRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Device>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/devices.md#devicescreate
     */
    createWithResponse(params: (InputValue<CreateDeviceRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeviceResponse>>;
    /**
 * Archives a device and releases its hardware_fingerprint for reuse. The archived device no longer
 * returns hardware_fingerprint.
 * @see reference/devices.md#devicesremove
 * DELETE /v1/devices/{device_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.devices.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(device_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Device>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/devices.md#devicesremove
     */
    removeWithResponse(device_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeviceResponse>>;
    /**
 * Returns a single device by ID.
 * @see reference/devices.md#devicesget
 * GET /v1/devices/{device_id}
 * @example
 * client.devices.get("example")
 */
    get(device_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Device>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/devices.md#devicesget
     */
    getWithResponse(device_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeviceResponse>>;
    /**
 * Returns a paginated list of devices for the authenticated merchant.
 * @see reference/devices.md#deviceslist
 * GET /v1/devices
 * @example
 * client.devices.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "location_id"?: InputValue<string>;
        "hardware_fingerprint"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeviceListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/devices.md#deviceslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "location_id"?: InputValue<string>;
        "hardware_fingerprint"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeviceListResponse>>;
    /** Iterate pages lazily.
     * @see reference/devices.md#deviceslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "location_id"?: InputValue<string>;
        "hardware_fingerprint"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeviceListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/devices.md#deviceslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "location_id"?: InputValue<string>;
        "hardware_fingerprint"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<DeviceListResponse>>;
    /** Iterate items lazily.
     * @see reference/devices.md#deviceslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "archived">>;
        "location_id"?: InputValue<string>;
        "hardware_fingerprint"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<Device>;
    /**
 * Applies a sparse update to a device. Send null to clear location_id or all metadata. The name
 * field cannot be null. Archived devices return DEVICE_ARCHIVED with current_status archived.
 * @see reference/devices.md#devicesupdate
 * PATCH /v1/devices/{device_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.devices.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(device_id: InputValue<string>, params: (InputValue<UpdateDeviceRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<Device>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/devices.md#devicesupdate
     */
    updateWithResponse(device_id: InputValue<string>, params: (InputValue<UpdateDeviceRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeviceResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly devices: DevicesResource;
}
