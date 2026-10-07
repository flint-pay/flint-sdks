export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateDeviceResponse } from '../declarations/CreateDeviceResponse.js';
import type { Device } from '../declarations/Device.js';
import type { DeviceListResponse } from '../declarations/DeviceListResponse.js';
import type { DeviceResponse } from '../declarations/DeviceResponse.js';
import type { DevicesCreateInput } from '../declarations/DevicesCreateInput.js';
import type { DevicesCreateResponse } from '../declarations/DevicesCreateResponse.js';
import type { DevicesGetInput } from '../declarations/DevicesGetInput.js';
import type { DevicesGetResponse } from '../declarations/DevicesGetResponse.js';
import type { DevicesListInput } from '../declarations/DevicesListInput.js';
import type { DevicesListResponse } from '../declarations/DevicesListResponse.js';
import type { DevicesRemoveInput } from '../declarations/DevicesRemoveInput.js';
import type { DevicesRemoveResponse } from '../declarations/DevicesRemoveResponse.js';
import type { DevicesUpdateInput } from '../declarations/DevicesUpdateInput.js';
import type { DevicesUpdateResponse } from '../declarations/DevicesUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface DevicesResource {
    /**
 * Creates a device for the authenticated merchant. If hardware_fingerprint matches an existing device, the existing device is returned with 200 OK and data.already_existed=true.
 * POST /v1/devices
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.devices.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "hardware_fingerprint"?: string; "location_id"?: string; "metadata"?: Record<string, string>; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateDeviceResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "hardware_fingerprint"?: string; "location_id"?: string; "metadata"?: Record<string, string>; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DevicesCreateResponse>>;
    /**
 * Marks a device as deleted and returns its final state.
 * DELETE /v1/devices/{device_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.devices.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(device_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeviceResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(device_id: InputValue<string>, params?: { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DevicesRemoveResponse>>;
    /**
 * Returns a single device by ID.
 * GET /v1/devices/{device_id}
 * @example
 * client.devices.get("example")
 */
    get(device_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<DeviceResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(device_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DevicesGetResponse>>;
    /**
 * Returns a paginated list of devices for the authenticated merchant.
 * GET /v1/devices
 * @example
 * client.devices.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "deleted">; "location_id"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<DeviceListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "deleted">; "location_id"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<DevicesListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "deleted">; "location_id"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<DeviceListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "deleted">; "location_id"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<DevicesListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "deleted">; "location_id"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Device>;
    /**
 * Applies a sparse update to a device. Send location_id=null to unassign a location.
 * PATCH /v1/devices/{device_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.devices.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(device_id: InputValue<string>, params: (InputValue<{ "location_id"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<DeviceResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(device_id: InputValue<string>, params: (InputValue<{ "location_id"?: string; "metadata"?: Record<string, string | null> | null; "name"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<DevicesUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly devices: DevicesResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CreateDeviceResponse } from '../declarations/CreateDeviceResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { DevicesCreateResponse } from '../declarations/DevicesCreateResponse.js';
export type { DeviceResponse } from '../declarations/DeviceResponse.js';
export type { DevicesRemoveResponse } from '../declarations/DevicesRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { DevicesGetResponse } from '../declarations/DevicesGetResponse.js';
export type { DeviceListResponse } from '../declarations/DeviceListResponse.js';
export type { DevicesListResponse } from '../declarations/DevicesListResponse.js';
export type { Device } from '../declarations/Device.js';
export type { DevicesUpdateResponse } from '../declarations/DevicesUpdateResponse.js';
export type { DevicesCreateInput } from '../declarations/DevicesCreateInput.js';
export type { DevicesRemoveInput } from '../declarations/DevicesRemoveInput.js';
export type { DevicesGetInput } from '../declarations/DevicesGetInput.js';
export type { DevicesListInput } from '../declarations/DevicesListInput.js';
export type { DevicesUpdateInput } from '../declarations/DevicesUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { CreateDeviceResult } from '../declarations/CreateDeviceResult.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { CreateDeviceRequestInput } from '../declarations/CreateDeviceRequestInput.js';
export type { UpdateDeviceRequestInput } from '../declarations/UpdateDeviceRequestInput.js';
export { makeCreateDeviceResponse } from '../declarations/makeCreateDeviceResponse.js';
export { makeDeviceResponse } from '../declarations/makeDeviceResponse.js';
export { makeDeviceListResponse } from '../declarations/makeDeviceListResponse.js';
export { makeDevice } from '../declarations/makeDevice.js';
export { makeCreateDeviceResult } from '../declarations/makeCreateDeviceResult.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
