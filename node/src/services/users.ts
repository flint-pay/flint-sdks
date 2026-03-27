import { BaseService, resolveEnum } from "./base";
import type { FlintList } from "../pagination";
import type { SortDirection } from "../generated/types/common";
import { SORT_DIRECTION_TO_PROTO } from "../generated/types/common";
import {
  BANNER_VARIANT_MAP,
  BANNER_VARIANT_TO_PROTO,
  type Banner,
} from "./merchants";
import { type Raw } from "./parsing";

const SERVICE = "flint.v1.accounts.UserService";

export type UserStatus = "active" | "deactivated";

export const USER_STATUS_MAP: Record<number, UserStatus> = {
  1: "active",
  2: "deactivated",
};

export const USER_STATUS_TO_PROTO: Record<UserStatus, number> = {
  active: 1,
  deactivated: 2,
};

export type UserSortField = "created_at" | "updated_at" | "email";

export const USER_SORT_FIELD_MAP: Record<number, UserSortField> = {
  1: "created_at",
  2: "updated_at",
  3: "email",
};

export const USER_SORT_FIELD_TO_PROTO: Record<UserSortField, number> = {
  created_at: 1,
  updated_at: 2,
  email: 3,
};

export type AuthProvider = "clerk";

export const AUTH_PROVIDER_MAP: Record<number, AuthProvider> = {
  1: "clerk",
};

export const AUTH_PROVIDER_TO_PROTO: Record<AuthProvider, number> = {
  clerk: 1,
};

export type AuthProviderInfo = {
  authProvider: AuthProvider;
  userId: string;
};

export type User = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  status: UserStatus;
  merchantId: string;
  authProviderInfo: AuthProviderInfo;
  banners: Banner[];
  createdAt: Date;
  updatedAt: Date;
};

export type GetUserParams = {
  readMask?: string[];
};

export type UpdateUserParams = {
  firstName?: string;
  lastName?: string;
  idempotencyKey?: string;
};

export type DeactivateUserParams = {
  reason?: string;
  idempotencyKey?: string;
};

export type UserListParams = {
  status?: UserStatus;
  limit?: number;
  pageToken?: string;
  sortField?: UserSortField;
  sortDirection?: SortDirection;
  createdAfter?: Date;
  createdBefore?: Date;
  updatedAfter?: Date;
  updatedBefore?: Date;
  readMask?: string[];
};

export class UserService extends BaseService {
  async get(userId: string, params: GetUserParams = {}): Promise<User> {
    const res = await this.rpc<Record<string, unknown>, { user: Raw }>(
      SERVICE,
      "GetUser",
      {
        userId,
        readMask: params.readMask ? this.toFieldMask(params.readMask) : undefined,
      }
    );

    return fromRawUser(res.user);
  }

  list(params: UserListParams = {}): FlintList<User> {
    return this.paginate((pageToken) => this.fetchPage(params, pageToken));
  }

  async update(userId: string, params: UpdateUserParams): Promise<User> {
    const res = await this.rpc<Record<string, unknown>, { user: Raw }>(
      SERVICE,
      "UpdateUser",
      {
        userId,
        firstName: params.firstName,
        lastName: params.lastName,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return fromRawUser(res.user);
  }

  async deactivate(userId: string, params: DeactivateUserParams = {}): Promise<User> {
    const res = await this.rpc<Record<string, unknown>, { user: Raw }>(
      SERVICE,
      "DeactivateUser",
      {
        userId,
        reason: params.reason,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return fromRawUser(res.user);
  }

  private async fetchPage(params: UserListParams, pageToken?: string) {
    const res = await this.rpc<Record<string, unknown>, { users?: Raw[]; nextPageToken?: string }>(
      SERVICE,
      "ListUsers",
      {
        status: params.status ? USER_STATUS_TO_PROTO[params.status] : undefined,
        pageSize: params.limit,
        pageToken: pageToken ?? params.pageToken,
        sortField: params.sortField ? USER_SORT_FIELD_TO_PROTO[params.sortField] : undefined,
        sortDirection: params.sortDirection
          ? SORT_DIRECTION_TO_PROTO[params.sortDirection]
          : undefined,
        createdAfter: this.toTimestamp(params.createdAfter),
        createdBefore: this.toTimestamp(params.createdBefore),
        updatedAfter: this.toTimestamp(params.updatedAfter),
        updatedBefore: this.toTimestamp(params.updatedBefore),
        readMask: params.readMask ? this.toFieldMask(params.readMask) : undefined,
      }
    );

    return this.toPage((res.users ?? []).map(fromRawUser), res.nextPageToken);
  }
}

const fromRawAuthProviderInfo = (raw: Raw): AuthProviderInfo => ({
  authProvider: resolveEnum(raw["authProvider"], AUTH_PROVIDER_MAP, AUTH_PROVIDER_TO_PROTO) ?? "clerk",
  userId: (raw["userId"] as string) ?? "",
});

const fromRawBanner = (raw: Raw): Banner => ({
  message: (raw["message"] as string) ?? "",
  variant: resolveEnum(raw["variant"], BANNER_VARIANT_MAP, BANNER_VARIANT_TO_PROTO) ?? "info",
  actionLabel: raw["actionLabel"] as string | undefined,
  actionHref: raw["actionHref"] as string | undefined,
  dismissibleId: raw["dismissibleId"] as string | undefined,
});

const fromRawUser = (raw: Raw): User => ({
  userId: (raw["userId"] as string) ?? "",
  firstName: (raw["firstName"] as string) ?? "",
  lastName: (raw["lastName"] as string) ?? "",
  email: (raw["email"] as string) ?? "",
  status: resolveEnum(raw["status"], USER_STATUS_MAP, USER_STATUS_TO_PROTO) ?? "active",
  merchantId: (raw["merchantId"] as string) ?? "",
  authProviderInfo: fromRawAuthProviderInfo((raw["authProviderInfo"] as Raw) ?? {}),
  banners: ((raw["banners"] as Raw[]) ?? []).map(fromRawBanner),
  createdAt: new Date(raw["createdAt"] as string),
  updatedAt: new Date(raw["updatedAt"] as string),
});
