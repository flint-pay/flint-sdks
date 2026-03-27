import { BaseService, resolveEnum } from "./base";
import type { FlintList } from "../pagination";
import type { SortDirection } from "../generated/types/common";
import { SORT_DIRECTION_TO_PROTO } from "../generated/types/common";
import { fromRawStringMap, type Raw } from "./parsing";

const SERVICE = "flint.v1.accounts.DeviceService";

export type DeviceStatus = "active" | "deleted";

export const DEVICE_STATUS_MAP: Record<number, DeviceStatus> = {
  1: "active",
  2: "deleted",
};

export const DEVICE_STATUS_TO_PROTO: Record<DeviceStatus, number> = {
  active: 1,
  deleted: 2,
};

export type DeviceSortField = "name" | "created_at" | "updated_at";

export const DEVICE_SORT_FIELD_MAP: Record<number, DeviceSortField> = {
  1: "name",
  2: "created_at",
  3: "updated_at",
};

export const DEVICE_SORT_FIELD_TO_PROTO: Record<DeviceSortField, number> = {
  name: 1,
  created_at: 2,
  updated_at: 3,
};

export type Device = {
  deviceId: string;
  name: string;
  status: DeviceStatus;
  merchantId: string;
  locationId?: string;
  hardwareFingerprint?: string;
  metadata: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateDeviceParams = {
  name: string;
  locationId?: string;
  metadata?: Record<string, string>;
  hardwareFingerprint?: string;
  idempotencyKey?: string;
};

export type CreateDeviceResult = {
  device: Device;
  alreadyExisted: boolean;
};

export type UpdateDeviceParams = {
  name?: string;
  locationId?: string;
  clearLocationId?: boolean;
  metadata?: Record<string, string>;
  idempotencyKey?: string;
};

export type DeviceListParams = {
  status?: DeviceStatus;
  locationId?: string;
  limit?: number;
  pageToken?: string;
  sortField?: DeviceSortField;
  sortDirection?: SortDirection;
};

export type DeleteDeviceParams = {
  idempotencyKey?: string;
};

export class DeviceService extends BaseService {
  async create(params: CreateDeviceParams): Promise<CreateDeviceResult> {
    const res = await this.rpc<Record<string, unknown>, { device: Raw; alreadyExisted?: boolean }>(
      SERVICE,
      "CreateDevice",
      {
        name: params.name,
        locationId: params.locationId,
        metadata: params.metadata,
        hardwareFingerprint: params.hardwareFingerprint,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return {
      device: fromRawDevice(res.device),
      alreadyExisted: Boolean(res.alreadyExisted),
    };
  }

  async get(deviceId: string): Promise<Device> {
    const res = await this.rpc<Record<string, unknown>, { device: Raw }>(
      SERVICE,
      "GetDevice",
      { deviceId }
    );
    return fromRawDevice(res.device);
  }

  list(params: DeviceListParams = {}): FlintList<Device> {
    return this.paginate((pageToken) => this.fetchPage(params, pageToken));
  }

  async update(deviceId: string, params: UpdateDeviceParams): Promise<Device> {
    if (params.locationId && params.clearLocationId) {
      throw new Error("Device update cannot include both locationId and clearLocationId");
    }

    const res = await this.rpc<Record<string, unknown>, { device: Raw }>(
      SERVICE,
      "UpdateDevice",
      {
        deviceId,
        name: params.name,
        locationId: params.clearLocationId ? "" : params.locationId,
        metadata: params.metadata,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return fromRawDevice(res.device);
  }

  async del(deviceId: string, params: DeleteDeviceParams = {}): Promise<Device> {
    const res = await this.rpc<Record<string, unknown>, { device: Raw }>(
      SERVICE,
      "DeleteDevice",
      {
        deviceId,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return fromRawDevice(res.device);
  }

  private async fetchPage(params: DeviceListParams, pageToken?: string) {
    const res = await this.rpc<Record<string, unknown>, { devices?: Raw[]; nextPageToken?: string }>(
      SERVICE,
      "ListDevices",
      {
        status: params.status ? DEVICE_STATUS_TO_PROTO[params.status] : undefined,
        locationId: params.locationId,
        pageSize: params.limit,
        pageToken: pageToken ?? params.pageToken,
        sortField: params.sortField ? DEVICE_SORT_FIELD_TO_PROTO[params.sortField] : undefined,
        sortDirection: params.sortDirection
          ? SORT_DIRECTION_TO_PROTO[params.sortDirection]
          : undefined,
      }
    );

    return this.toPage((res.devices ?? []).map(fromRawDevice), res.nextPageToken);
  }
}

const fromRawDevice = (raw: Raw): Device => ({
  deviceId: (raw["deviceId"] as string) ?? "",
  name: (raw["name"] as string) ?? "",
  status: resolveEnum(raw["status"], DEVICE_STATUS_MAP, DEVICE_STATUS_TO_PROTO) ?? "active",
  merchantId: (raw["merchantId"] as string) ?? "",
  locationId: raw["locationId"] as string | undefined,
  hardwareFingerprint: raw["hardwareFingerprint"] as string | undefined,
  metadata: fromRawStringMap(raw["metadata"]),
  createdAt: new Date(raw["createdAt"] as string),
  updatedAt: new Date(raw["updatedAt"] as string),
});
