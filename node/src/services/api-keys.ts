import { BaseService, resolveEnum } from "./base";
import type { FlintList } from "../pagination";
import type { SortDirection } from "../generated/types/common";
import { SORT_DIRECTION_TO_PROTO } from "../generated/types/common";
import { fromTimestamp, type Raw } from "./parsing";

const SERVICE = "flint.v1.accounts.APIKeyService";

export type ApiScope = string;

const API_SCOPE_ENTRIES = [
  ["all", 1],
  ["accounts.api_keys.read", 2],
  ["accounts.api_keys.write", 3],
  ["accounts.devices.read", 35],
  ["accounts.devices.write", 36],
  ["accounts.locations.read", 4],
  ["accounts.locations.write", 5],
  ["accounts.merchants.read", 6],
  ["accounts.merchants.write", 7],
  ["accounts.organizations.read", 8],
  ["accounts.organizations.write", 9],
  ["accounts.users.read", 10],
  ["accounts.users.write", 11],
  ["checkouts.checkout_sessions.read", 12],
  ["checkouts.checkout_sessions.write", 13],
  ["commerce.coupons.read", 14],
  ["commerce.coupons.write", 15],
  ["commerce.items.read", 16],
  ["commerce.items.write", 17],
  ["commerce.orders.read", 18],
  ["commerce.orders.write", 19],
  ["commerce.refunds.read", 20],
  ["commerce.refunds.write", 21],
  ["customers.customers.read", 22],
  ["customers.customers.write", 23],
  ["payments.payment_intents.read", 25],
  ["payments.payment_intents.write", 26],
  ["settings.settings.read", 27],
  ["settings.settings.write", 28],
  ["payments.payment_methods.read", 29],
  ["payments.payment_methods.write", 30],
  ["commerce.subscription_plans.read", 31],
  ["commerce.subscription_plans.write", 32],
  ["commerce.subscriptions.read", 33],
  ["commerce.subscriptions.write", 34],
  ["checkouts.payment_links.read", 37],
  ["checkouts.payment_links.write", 38],
  ["analytics.read", 39],
  ["analytics.write", 40],
  ["webhooks.webhooks.read", 41],
  ["webhooks.webhooks.write", 42],
  ["commerce.invoices.read", 43],
  ["commerce.invoices.write", 44],
] as const;

const API_SCOPE_TO_PROTO: Record<string, number> = Object.fromEntries(API_SCOPE_ENTRIES);
const API_SCOPE_MAP: Record<number, ApiScope> = Object.fromEntries(
  API_SCOPE_ENTRIES.map(([scope, value]) => [value, scope])
) as Record<number, ApiScope>;
const API_SCOPE_PROTO_NAME_TO_PROTO: Record<string, number> = Object.fromEntries(
  API_SCOPE_ENTRIES.map(([scope, value]) => [
    `API_SCOPE_${scope.replaceAll(".", "_").toUpperCase()}`,
    value,
  ])
);

export type APIKeyStatus = "active" | "revoked";

export const API_KEY_STATUS_MAP: Record<number, APIKeyStatus> = {
  1: "active",
  2: "revoked",
};

export const API_KEY_STATUS_TO_PROTO: Record<APIKeyStatus, number> = {
  active: 1,
  revoked: 2,
};

export type APIKeyType = "internal" | "external";

export const API_KEY_TYPE_MAP: Record<number, APIKeyType> = {
  1: "internal",
  2: "external",
};

export const API_KEY_TYPE_TO_PROTO: Record<APIKeyType, number> = {
  internal: 1,
  external: 2,
};

export type APIKeySortField = "created_at" | "last_used_at" | "name";

export const API_KEY_SORT_FIELD_TO_PROTO: Record<APIKeySortField, number> = {
  created_at: 1,
  last_used_at: 2,
  name: 3,
};

export const API_KEY_SORT_FIELD_MAP: Record<number, APIKeySortField> = {
  1: "created_at",
  2: "last_used_at",
  3: "name",
};

export type APIKey = {
  apiKeyId: string;
  ownerUserId: string;
  name: string;
  keyPrefix: string;
  scopes: ApiScope[];
  keyType: APIKeyType;
  status: APIKeyStatus;
  lastUsedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateAPIKeyParams = {
  name: string;
  scopes: ApiScope[];
  keyType?: APIKeyType;
  idempotencyKey?: string;
};

export type CreateAPIKeyResult = {
  apiKey: APIKey;
  secretKey: string;
};

export type GetAPIKeyParams = {
  readMask?: string[];
};

export type APIKeyListParams = {
  status?: APIKeyStatus;
  limit?: number;
  pageToken?: string;
  sortField?: APIKeySortField;
  sortDirection?: SortDirection;
  readMask?: string[];
  createdAfter?: Date;
  createdBefore?: Date;
  updatedAfter?: Date;
  updatedBefore?: Date;
};

export type UpdateAPIKeyParams = {
  name?: string;
  scopes?: ApiScope[];
};

export type RevokeAPIKeyParams = {
  idempotencyKey?: string;
};

export class ApiKeyService extends BaseService {
  async create(params: CreateAPIKeyParams): Promise<CreateAPIKeyResult> {
    const res = await this.rpc<Record<string, unknown>, { apiKey: Raw; secretKey: string }>(
      SERVICE,
      "CreateAPIKey",
      {
        name: params.name,
        scopes: params.scopes.map(toProtoApiScope),
        keyType: params.keyType ? API_KEY_TYPE_TO_PROTO[params.keyType] : undefined,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return {
      apiKey: fromRawAPIKey(res.apiKey),
      secretKey: res.secretKey,
    };
  }

  async get(apiKeyId: string, params: GetAPIKeyParams = {}): Promise<APIKey> {
    const res = await this.rpc<Record<string, unknown>, { apiKey: Raw }>(
      SERVICE,
      "GetAPIKey",
      {
        apiKeyId,
        readMask: params.readMask ? this.toFieldMask(params.readMask) : undefined,
      }
    );

    return fromRawAPIKey(res.apiKey);
  }

  list(params: APIKeyListParams = {}): FlintList<APIKey> {
    return this.paginate((pageToken) => this.fetchPage(params, pageToken));
  }

  async update(apiKeyId: string, params: UpdateAPIKeyParams): Promise<APIKey> {
    const res = await this.rpc<Record<string, unknown>, { apiKey: Raw }>(
      SERVICE,
      "UpdateAPIKey",
      {
        apiKeyId,
        name: params.name,
        scopes: params.scopes?.map(toProtoApiScope),
      }
    );

    return fromRawAPIKey(res.apiKey);
  }

  async revoke(apiKeyId: string, params: RevokeAPIKeyParams = {}): Promise<APIKey> {
    const res = await this.rpc<Record<string, unknown>, { apiKey: Raw }>(
      SERVICE,
      "RevokeAPIKey",
      {
        apiKeyId,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return fromRawAPIKey(res.apiKey);
  }

  private async fetchPage(params: APIKeyListParams, pageToken?: string) {
    const res = await this.rpc<Record<string, unknown>, { apiKeys?: Raw[]; nextPageToken?: string }>(
      SERVICE,
      "ListAPIKeys",
      {
        status: params.status ? API_KEY_STATUS_TO_PROTO[params.status] : undefined,
        pageSize: params.limit,
        pageToken: pageToken ?? params.pageToken,
        sortField: params.sortField ? API_KEY_SORT_FIELD_TO_PROTO[params.sortField] : undefined,
        sortDirection: params.sortDirection
          ? SORT_DIRECTION_TO_PROTO[params.sortDirection]
          : undefined,
        readMask: params.readMask ? this.toFieldMask(params.readMask) : undefined,
        createdAfter: this.toTimestamp(params.createdAfter),
        createdBefore: this.toTimestamp(params.createdBefore),
        updatedAfter: this.toTimestamp(params.updatedAfter),
        updatedBefore: this.toTimestamp(params.updatedBefore),
      }
    );

    return this.toPage((res.apiKeys ?? []).map(fromRawAPIKey), res.nextPageToken);
  }
}

const fromRawAPIKey = (raw: Raw): APIKey => ({
  apiKeyId: (raw["apiKeyId"] as string) ?? "",
  ownerUserId: (raw["ownerUserId"] as string) ?? "",
  name: (raw["name"] as string) ?? "",
  keyPrefix: (raw["keyPrefix"] as string) ?? "",
  scopes: ((raw["scopes"] as unknown[]) ?? []).map((value) => {
    if (typeof value === "number") {
      return API_SCOPE_MAP[value] ?? String(value);
    }
    if (typeof value === "string") return value;
    return String(value);
  }),
  keyType: resolveEnum(raw["keyType"], API_KEY_TYPE_MAP, API_KEY_TYPE_TO_PROTO) ?? "external",
  status: resolveEnum(raw["status"], API_KEY_STATUS_MAP, API_KEY_STATUS_TO_PROTO) ?? "active",
  lastUsedAt: fromTimestamp(raw["lastUsedAt"]),
  createdAt: new Date(raw["createdAt"] as string),
  updatedAt: new Date(raw["updatedAt"] as string),
});

const toProtoApiScope = (scope: ApiScope): number => {
  const protoValue = API_SCOPE_TO_PROTO[scope] ?? API_SCOPE_PROTO_NAME_TO_PROTO[scope];
  if (protoValue == null) {
    throw new Error(`Unsupported API scope: ${scope}`);
  }
  return protoValue;
};
