import { BaseService, resolveEnum } from "./base";
import type { FlintList } from "../pagination";
import type { Address, SortDirection } from "../generated/types/common";
import { SORT_DIRECTION_TO_PROTO } from "../generated/types/common";
import {
  fromRawAddress,
  fromRawStringMap,
  toProtoAddress,
  fromTimestamp,
  type Raw,
} from "./parsing";

const MERCHANT_SERVICE = "flint.v1.accounts.merchants.MerchantService";
const ONBOARDING_SERVICE = "flint.v1.accounts.merchants.MerchantOnboardingService";

export type ProcessorType = "stripe";

export const PROCESSOR_TYPE_MAP: Record<number, ProcessorType> = {
  1: "stripe",
};

export const PROCESSOR_TYPE_TO_PROTO: Record<ProcessorType, number> = {
  stripe: 1,
};

export type OnboardingStatus = "not_started" | "in_progress" | "completed";

export const ONBOARDING_STATUS_MAP: Record<number, OnboardingStatus> = {
  1: "not_started",
  2: "in_progress",
  3: "completed",
};

export const ONBOARDING_STATUS_TO_PROTO: Record<OnboardingStatus, number> = {
  not_started: 1,
  in_progress: 2,
  completed: 3,
};

export type MerchantTier = "free" | "growth";

export const MERCHANT_TIER_MAP: Record<number, MerchantTier> = {
  1: "free",
  2: "growth",
};

export const MERCHANT_TIER_TO_PROTO: Record<MerchantTier, number> = {
  free: 1,
  growth: 2,
};

export type MerchantStatus = "active" | "suspended" | "restricted" | "closed";

export const MERCHANT_STATUS_MAP: Record<number, MerchantStatus> = {
  1: "active",
  2: "suspended",
  3: "restricted",
  4: "closed",
};

export const MERCHANT_STATUS_TO_PROTO: Record<MerchantStatus, number> = {
  active: 1,
  suspended: 2,
  restricted: 3,
  closed: 4,
};

export type MerchantSortField = "created_at" | "updated_at" | "business_name";

export const MERCHANT_SORT_FIELD_MAP: Record<number, MerchantSortField> = {
  1: "created_at",
  2: "updated_at",
  3: "business_name",
};

export const MERCHANT_SORT_FIELD_TO_PROTO: Record<MerchantSortField, number> = {
  created_at: 1,
  updated_at: 2,
  business_name: 3,
};

export type BannerVariant = "info" | "warning" | "error" | "success";

export const BANNER_VARIANT_MAP: Record<number, BannerVariant> = {
  1: "info",
  2: "warning",
  3: "error",
  4: "success",
};

export const BANNER_VARIANT_TO_PROTO: Record<BannerVariant, number> = {
  info: 1,
  warning: 2,
  error: 3,
  success: 4,
};

export type ConnectedAccountType = "standard" | "express" | "custom";

export const CONNECTED_ACCOUNT_TYPE_TO_PROTO: Record<ConnectedAccountType, number> = {
  standard: 1,
  express: 2,
  custom: 3,
};

export type OnboardingSessionMode = "embedded" | "hosted";

export const ONBOARDING_SESSION_MODE_MAP: Record<number, OnboardingSessionMode> = {
  1: "embedded",
  2: "hosted",
};

export const ONBOARDING_SESSION_MODE_TO_PROTO: Record<OnboardingSessionMode, number> = {
  embedded: 1,
  hosted: 2,
};

export type StripeDashboardType = "full" | "express" | "none";

export const STRIPE_DASHBOARD_TYPE_TO_PROTO: Record<StripeDashboardType, number> = {
  full: 1,
  express: 2,
  none: 3,
};

export type ProcessorAccount = {
  processorType: ProcessorType;
  accountId: string;
};

export type Banner = {
  message: string;
  variant: BannerVariant;
  actionLabel?: string;
  actionHref?: string;
  dismissibleId?: string;
};

export type Merchant = {
  merchantId: string;
  email: string;
  onboardingStatus: OnboardingStatus;
  processorAccount?: ProcessorAccount;
  status: MerchantStatus;
  metadata: Record<string, string>;
  imageUrl?: string;
  phone?: string;
  address?: Address;
  ownerId: string;
  banners: Banner[];
  createdAt: Date;
  updatedAt: Date;
  businessName?: string;
  chargesEnabled?: boolean;
  payoutsEnabled?: boolean;
  detailsSubmitted?: boolean;
  hasPastDue?: boolean;
  supportEmail?: string;
  supportPhone?: string;
  supportUrl?: string;
  websiteUrl?: string;
  tier?: MerchantTier;
};

export type GetMerchantParams = {
  readMask?: string[];
};

export type MerchantListParams = {
  status?: MerchantStatus;
  limit?: number;
  pageToken?: string;
  sortField?: MerchantSortField;
  sortDirection?: SortDirection;
  createdAfter?: Date;
  createdBefore?: Date;
  updatedAfter?: Date;
  updatedBefore?: Date;
  readMask?: string[];
};

export type UpdateMerchantParams = {
  email?: string;
  imageUrl?: string;
  metadata?: Record<string, string>;
  phone?: string;
  address?: Address;
  supportEmail?: string;
  supportPhone?: string;
  supportUrl?: string;
  websiteUrl?: string;
  clearAddress?: boolean;
  idempotencyKey?: string;
};

export type CapabilityRequest = {
  capability: string;
  requested?: boolean;
  experimental?: boolean;
};

export type CapabilityStatus = {
  capability: string;
  status: string;
};

export type OnboardingRequirement = {
  field: string;
};

export type OnboardingRequirements = {
  currentlyDue: OnboardingRequirement[];
  pastDue: OnboardingRequirement[];
  eventuallyDue: OnboardingRequirement[];
  pendingVerification: OnboardingRequirement[];
  currentDeadline?: Date;
  disabledReason?: string;
};

export type StripeConnectedAccountConfig = {
  accountType?: ConnectedAccountType;
  dashboardType?: StripeDashboardType;
  feesPayer?: string;
  lossesPayments?: string;
  requirementCollection?: string;
  accountToken?: string;
};

export type ProcessorConnectedAccountConfig = {
  stripe?: StripeConnectedAccountConfig;
};

export type BeginMerchantOnboardingParams = {
  email?: string;
  country?: string;
  capabilityRequests?: CapabilityRequest[];
  connectedAccountConfig?: ProcessorConnectedAccountConfig;
  idempotencyKey?: string;
};

export type BeginMerchantOnboardingResult = {
  merchant: Merchant;
  createdProcessorAccount: boolean;
  requirements: OnboardingRequirements;
};

export type CreateMerchantOnboardingSessionParams = {
  mode: OnboardingSessionMode;
  includeFutureRequirements?: boolean;
  returnUrl?: string;
  refreshUrl?: string;
  idempotencyKey?: string;
};

export type OnboardingSession = {
  mode: OnboardingSessionMode;
  clientSecret?: string;
  url?: string;
  expiresAt?: Date;
};

export type CreateMerchantOnboardingSessionResult = {
  session: OnboardingSession;
  requirements: OnboardingRequirements;
};

export type MerchantOnboardingStatus = {
  isComplete: boolean;
  onboardingStatus: OnboardingStatus;
  detailsSubmitted: boolean;
  chargesEnabled: boolean;
  payoutsEnabled: boolean;
  capabilities: CapabilityStatus[];
  requirements: OnboardingRequirements;
};

export class MerchantService extends BaseService {
  async get(merchantId: string, params: GetMerchantParams = {}): Promise<Merchant> {
    const res = await this.rpc<Record<string, unknown>, { merchant: Raw }>(
      MERCHANT_SERVICE,
      "GetMerchant",
      {
        merchantId,
        readMask: params.readMask ? this.toFieldMask(params.readMask) : undefined,
      }
    );

    return fromRawMerchant(res.merchant);
  }

  list(params: MerchantListParams = {}): FlintList<Merchant> {
    return this.paginate((pageToken) => this.fetchPage(params, pageToken));
  }

  async update(merchantId: string, params: UpdateMerchantParams): Promise<Merchant> {
    if (params.address && params.clearAddress) {
      throw new Error("Merchant update cannot include both address and clearAddress");
    }

    const res = await this.rpc<Record<string, unknown>, { merchant: Raw }>(
      MERCHANT_SERVICE,
      "UpdateMerchant",
      {
        merchantId,
        email: params.email,
        imageUrl: params.imageUrl,
        metadata: params.metadata,
        phone: params.phone,
        address: params.address ? toProtoAddress(params.address) : undefined,
        supportEmail: params.supportEmail,
        supportPhone: params.supportPhone,
        supportUrl: params.supportUrl,
        websiteUrl: params.websiteUrl,
        clearAddress: params.clearAddress,
        idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
      }
    );

    return fromRawMerchant(res.merchant);
  }

  async beginOnboarding(
    merchantId: string,
    params: BeginMerchantOnboardingParams = {}
  ): Promise<BeginMerchantOnboardingResult> {
    const res = await this.rpc<
      Record<string, unknown>,
      { merchant: Raw; createdProcessorAccount?: boolean; requirements: Raw }
    >(ONBOARDING_SERVICE, "BeginMerchantOnboarding", {
      merchantId,
      email: params.email,
      country: params.country,
      capabilityRequests: params.capabilityRequests,
      connectedAccountConfig: toProtoConnectedAccountConfig(params.connectedAccountConfig),
      idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
    });

    return {
      merchant: fromRawMerchant(res.merchant),
      createdProcessorAccount: Boolean(res.createdProcessorAccount),
      requirements: fromRawOnboardingRequirements(res.requirements),
    };
  }

  async createOnboardingSession(
    merchantId: string,
    params: CreateMerchantOnboardingSessionParams
  ): Promise<CreateMerchantOnboardingSessionResult> {
    const res = await this.rpc<
      Record<string, unknown>,
      { session: Raw; requirements: Raw }
    >(ONBOARDING_SERVICE, "CreateMerchantOnboardingSession", {
      merchantId,
      mode: ONBOARDING_SESSION_MODE_TO_PROTO[params.mode],
      includeFutureRequirements: params.includeFutureRequirements,
      returnUrl: params.returnUrl,
      refreshUrl: params.refreshUrl,
      idempotencyKey: this.ensureIdempotencyKey(params.idempotencyKey),
    });

    return {
      session: fromRawOnboardingSession(res.session),
      requirements: fromRawOnboardingRequirements(res.requirements),
    };
  }

  async getOnboardingStatus(merchantId: string): Promise<MerchantOnboardingStatus> {
    const res = await this.rpc<Record<string, unknown>, Raw>(
      ONBOARDING_SERVICE,
      "GetMerchantOnboardingStatus",
      { merchantId }
    );

    return fromRawMerchantOnboardingStatus(res);
  }

  private async fetchPage(params: MerchantListParams, pageToken?: string) {
    const res = await this.rpc<
      Record<string, unknown>,
      { merchants?: Raw[]; nextPageToken?: string }
    >(MERCHANT_SERVICE, "ListMerchants", {
      status: params.status ? MERCHANT_STATUS_TO_PROTO[params.status] : undefined,
      pageSize: params.limit,
      pageToken: pageToken ?? params.pageToken,
      sortField: params.sortField ? MERCHANT_SORT_FIELD_TO_PROTO[params.sortField] : undefined,
      sortDirection: params.sortDirection
        ? SORT_DIRECTION_TO_PROTO[params.sortDirection]
        : undefined,
      createdAfter: this.toTimestamp(params.createdAfter),
      createdBefore: this.toTimestamp(params.createdBefore),
      updatedAfter: this.toTimestamp(params.updatedAfter),
      updatedBefore: this.toTimestamp(params.updatedBefore),
      readMask: params.readMask ? this.toFieldMask(params.readMask) : undefined,
    });

    return this.toPage((res.merchants ?? []).map(fromRawMerchant), res.nextPageToken);
  }
}

const fromRawProcessorAccount = (raw: Raw | undefined): ProcessorAccount | undefined => {
  if (!raw) return undefined;
  return {
    processorType: resolveEnum(raw["processorType"], PROCESSOR_TYPE_MAP, PROCESSOR_TYPE_TO_PROTO) ?? "stripe",
    accountId: (raw["accountId"] as string) ?? "",
  };
};

const fromRawBanner = (raw: Raw): Banner => ({
  message: (raw["message"] as string) ?? "",
  variant: resolveEnum(raw["variant"], BANNER_VARIANT_MAP, BANNER_VARIANT_TO_PROTO) ?? "info",
  actionLabel: raw["actionLabel"] as string | undefined,
  actionHref: raw["actionHref"] as string | undefined,
  dismissibleId: raw["dismissibleId"] as string | undefined,
});

const fromRawMerchant = (raw: Raw): Merchant => ({
  merchantId: (raw["merchantId"] as string) ?? "",
  email: (raw["email"] as string) ?? "",
  onboardingStatus:
    resolveEnum(raw["onboardingStatus"], ONBOARDING_STATUS_MAP, ONBOARDING_STATUS_TO_PROTO) ??
    "not_started",
  processorAccount: fromRawProcessorAccount(raw["processorAccount"] as Raw | undefined),
  status: resolveEnum(raw["status"], MERCHANT_STATUS_MAP, MERCHANT_STATUS_TO_PROTO) ?? "active",
  metadata: fromRawStringMap(raw["metadata"]),
  imageUrl: raw["imageUrl"] as string | undefined,
  phone: raw["phone"] as string | undefined,
  address: fromRawAddress(raw["address"] as Raw | undefined),
  ownerId: (raw["ownerId"] as string) ?? "",
  banners: ((raw["banners"] as Raw[]) ?? []).map(fromRawBanner),
  createdAt: new Date(raw["createdAt"] as string),
  updatedAt: new Date(raw["updatedAt"] as string),
  businessName: raw["businessName"] as string | undefined,
  chargesEnabled: raw["chargesEnabled"] as boolean | undefined,
  payoutsEnabled: raw["payoutsEnabled"] as boolean | undefined,
  detailsSubmitted: raw["detailsSubmitted"] as boolean | undefined,
  hasPastDue: raw["hasPastDue"] as boolean | undefined,
  supportEmail: raw["supportEmail"] as string | undefined,
  supportPhone: raw["supportPhone"] as string | undefined,
  supportUrl: raw["supportUrl"] as string | undefined,
  websiteUrl: raw["websiteUrl"] as string | undefined,
  tier: raw["tier"] != null ? resolveEnum(raw["tier"], MERCHANT_TIER_MAP, MERCHANT_TIER_TO_PROTO) : undefined,
});

const fromRawRequirement = (raw: Raw): OnboardingRequirement => ({
  field: (raw["field"] as string) ?? "",
});

const fromRawOnboardingRequirements = (raw: Raw): OnboardingRequirements => ({
  currentlyDue: ((raw["currentlyDue"] as Raw[]) ?? []).map(fromRawRequirement),
  pastDue: ((raw["pastDue"] as Raw[]) ?? []).map(fromRawRequirement),
  eventuallyDue: ((raw["eventuallyDue"] as Raw[]) ?? []).map(fromRawRequirement),
  pendingVerification: ((raw["pendingVerification"] as Raw[]) ?? []).map(fromRawRequirement),
  currentDeadline: fromTimestamp(raw["currentDeadline"]),
  disabledReason: raw["disabledReason"] as string | undefined,
});

const fromRawOnboardingSession = (raw: Raw): OnboardingSession => ({
  mode:
    resolveEnum(raw["mode"], ONBOARDING_SESSION_MODE_MAP, ONBOARDING_SESSION_MODE_TO_PROTO) ??
    "hosted",
  clientSecret: (raw["embedded"] as Raw | undefined)?.["clientSecret"] as string | undefined,
  url: (raw["hosted"] as Raw | undefined)?.["url"] as string | undefined,
  expiresAt: fromTimestamp(raw["expiresAt"]),
});

const fromRawCapabilityStatus = (raw: Raw): CapabilityStatus => ({
  capability: (raw["capability"] as string) ?? "",
  status: (raw["status"] as string) ?? "",
});

const fromRawMerchantOnboardingStatus = (raw: Raw): MerchantOnboardingStatus => ({
  isComplete: Boolean(raw["isComplete"]),
  onboardingStatus:
    resolveEnum(raw["onboardingStatus"], ONBOARDING_STATUS_MAP, ONBOARDING_STATUS_TO_PROTO) ??
    "not_started",
  detailsSubmitted: Boolean(raw["detailsSubmitted"]),
  chargesEnabled: Boolean(raw["chargesEnabled"]),
  payoutsEnabled: Boolean(raw["payoutsEnabled"]),
  capabilities: ((raw["capabilities"] as Raw[]) ?? []).map(fromRawCapabilityStatus),
  requirements: fromRawOnboardingRequirements((raw["requirements"] as Raw) ?? {}),
});

const toProtoConnectedAccountConfig = (
  config: ProcessorConnectedAccountConfig | undefined
): Raw | undefined => {
  if (!config?.stripe) return undefined;
  return {
    stripe: {
      accountType: config.stripe.accountType
        ? CONNECTED_ACCOUNT_TYPE_TO_PROTO[config.stripe.accountType]
        : undefined,
      dashboardType: config.stripe.dashboardType
        ? STRIPE_DASHBOARD_TYPE_TO_PROTO[config.stripe.dashboardType]
        : undefined,
      feesPayer: config.stripe.feesPayer,
      lossesPayments: config.stripe.lossesPayments,
      requirementCollection: config.stripe.requirementCollection,
      accountToken: config.stripe.accountToken,
    },
  };
};
