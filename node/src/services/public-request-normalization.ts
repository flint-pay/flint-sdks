import {
  DIGITAL_WALLET_MAP,
  PAYMENT_METHOD_TYPE_MAP,
  SORT_DIRECTION_MAP,
  SOURCE_MAP,
} from "../generated/types/common";
import { CUSTOMER_SORT_FIELD_MAP } from "../generated/types/customers";
import {
  COUPON_MUTABLE_STATUS_MAP,
  COUPON_SORT_FIELD_MAP,
  COUPON_STATUS_MAP,
  DISCOUNT_CALCULATION_BASIS_MAP,
} from "../generated/types/coupons";
import {
  CHECKOUT_SESSION_SORT_FIELD_MAP,
  CHECKOUT_SESSION_STATUS_MAP,
} from "../generated/types/checkout-sessions";
import { ITEM_SORT_FIELD_MAP, ITEM_STATUS_MAP, ITEM_TYPE_MAP, INVENTORY_CHANGE_REASON_MAP } from "../generated/types/items";
import { ORDER_SORT_FIELD_MAP, ORDER_STATUS_MAP } from "../generated/types/orders";
import {
  PAYMENT_INTENT_SORT_FIELD_MAP,
  PAYMENT_LIST_STATE_FILTER_MAP,
  PAYMENT_STATUS_MAP,
} from "../generated/types/payment-intents";
import {
  PAYMENT_LINK_CUSTOM_FIELD_TYPE_MAP,
  PAYMENT_LINK_MODE_MAP,
  PAYMENT_LINK_SORT_FIELD_MAP,
  PAYMENT_LINK_STATUS_MAP,
} from "../generated/types/payment-links";
import { PAYMENT_METHOD_STATUS_MAP } from "../generated/types/payment-methods";
import { REFUND_METHOD_MAP, REFUND_REASON_MAP, REFUND_SORT_FIELD_MAP, REFUND_STATUS_MAP } from "../generated/types/refunds";
import { DUNNING_END_ACTION_MAP, SETTINGS_SCOPE_MAP } from "../generated/types/settings";
import {
  BILLING_INTERVAL_MAP,
  SUBSCRIPTION_PLAN_SORT_FIELD_MAP,
  SUBSCRIPTION_PLAN_STATUS_MAP,
} from "../generated/types/subscription-plans";
import { SUBSCRIPTION_SORT_FIELD_MAP, SUBSCRIPTION_STATUS_MAP } from "../generated/types/subscriptions";

type RawRequest = Record<string, unknown>;
type EnumMap = Record<number, string>;
type EnumRule = {
  path: string;
  map: EnumMap;
};
type PathSegment = {
  key: string;
  array: boolean;
};

const ANALYTICS_TIME_RANGE_MAP: EnumMap = {
  1: "today",
  2: "last_7_days",
  3: "last_30_days",
};

const API_SCOPE_MAP: EnumMap = {
  1: "all",
  2: "accounts.api_keys.read",
  3: "accounts.api_keys.write",
  4: "accounts.locations.read",
  5: "accounts.locations.write",
  6: "accounts.merchants.read",
  7: "accounts.merchants.write",
  8: "accounts.organizations.read",
  9: "accounts.organizations.write",
  10: "accounts.users.read",
  11: "accounts.users.write",
  12: "checkouts.checkout_sessions.read",
  13: "checkouts.checkout_sessions.write",
  14: "commerce.coupons.read",
  15: "commerce.coupons.write",
  16: "commerce.items.read",
  17: "commerce.items.write",
  18: "commerce.orders.read",
  19: "commerce.orders.write",
  20: "commerce.refunds.read",
  21: "commerce.refunds.write",
  22: "customers.customers.read",
  23: "customers.customers.write",
  25: "payments.payment_intents.read",
  26: "payments.payment_intents.write",
  27: "settings.settings.read",
  28: "settings.settings.write",
  29: "payments.payment_methods.read",
  30: "payments.payment_methods.write",
  31: "commerce.subscription_plans.read",
  32: "commerce.subscription_plans.write",
  33: "commerce.subscriptions.read",
  34: "commerce.subscriptions.write",
  35: "accounts.devices.read",
  36: "accounts.devices.write",
  37: "checkouts.payment_links.read",
  38: "checkouts.payment_links.write",
  39: "analytics.read",
  40: "analytics.write",
  41: "webhooks.webhooks.read",
  42: "webhooks.webhooks.write",
  43: "commerce.invoices.read",
  44: "commerce.invoices.write",
};

const API_KEY_TYPE_MAP: EnumMap = {
  1: "internal",
  2: "external",
};

const API_KEY_STATUS_MAP: EnumMap = {
  1: "active",
  2: "revoked",
};

const API_KEY_SORT_FIELD_MAP: EnumMap = {
  1: "created_at",
  2: "last_used_at",
  3: "name",
};

const DEVICE_STATUS_MAP: EnumMap = {
  1: "active",
  2: "deleted",
};

const DEVICE_SORT_FIELD_MAP: EnumMap = {
  1: "name",
  2: "created_at",
  3: "updated_at",
};

const INVOICE_STATUS_MAP: EnumMap = {
  1: "draft",
  2: "open",
  3: "partially_paid",
  4: "paid",
  5: "void",
};

const MERCHANT_STATUS_MAP: EnumMap = {
  1: "active",
  2: "suspended",
  3: "restricted",
  4: "closed",
};

const MERCHANT_SORT_FIELD_MAP: EnumMap = {
  1: "created_at",
  2: "updated_at",
  3: "business_name",
};

const CONNECTED_ACCOUNT_TYPE_MAP: EnumMap = {
  1: "standard",
  2: "express",
  3: "custom",
};

const STRIPE_DASHBOARD_TYPE_MAP: EnumMap = {
  1: "full",
  2: "express",
  3: "none",
};

const ONBOARDING_SESSION_MODE_MAP: EnumMap = {
  1: "embedded",
  2: "hosted",
};

const USER_STATUS_MAP: EnumMap = {
  1: "active",
  2: "deactivated",
};

const USER_SORT_FIELD_MAP: EnumMap = {
  1: "created_at",
  2: "updated_at",
  3: "email",
};

const REQUEST_ENUM_RULES: Record<string, readonly EnumRule[]> = {
  "flint.v1.accounts.APIKeyService/CreateAPIKey": [
    { path: "scopes[]", map: API_SCOPE_MAP },
    { path: "keyType", map: API_KEY_TYPE_MAP },
  ],
  "flint.v1.accounts.APIKeyService/UpdateAPIKey": [
    { path: "scopes[]", map: API_SCOPE_MAP },
    { path: "keyType", map: API_KEY_TYPE_MAP },
  ],
  "flint.v1.accounts.APIKeyService/ListAPIKeys": [
    { path: "status", map: API_KEY_STATUS_MAP },
    { path: "sortField", map: API_KEY_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.accounts.DeviceService/ListDevices": [
    { path: "status", map: DEVICE_STATUS_MAP },
    { path: "sortField", map: DEVICE_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.accounts.UserService/ListUsers": [
    { path: "status", map: USER_STATUS_MAP },
    { path: "sortField", map: USER_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.accounts.merchants.MerchantOnboardingService/CreateMerchantOnboardingSession": [
    { path: "mode", map: ONBOARDING_SESSION_MODE_MAP },
  ],
  "flint.v1.accounts.merchants.MerchantService/ListMerchants": [
    { path: "status", map: MERCHANT_STATUS_MAP },
    { path: "sortField", map: MERCHANT_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.accounts.merchants.MerchantService/UpdateMerchant": [
    { path: "connectedAccountConfig.stripe.accountType", map: CONNECTED_ACCOUNT_TYPE_MAP },
    { path: "connectedAccountConfig.stripe.dashboardType", map: STRIPE_DASHBOARD_TYPE_MAP },
  ],
  "flint.v1.analytics.AnalyticsService/GetAnalyticsOverview": [
    { path: "range", map: ANALYTICS_TIME_RANGE_MAP },
  ],
  "flint.v1.analytics.AnalyticsService/GetPaymentVolumeTimeseries": [
    { path: "range", map: ANALYTICS_TIME_RANGE_MAP },
  ],
  "flint.v1.analytics.AnalyticsService/GetSubscriptionAnalytics": [
    { path: "range", map: ANALYTICS_TIME_RANGE_MAP },
  ],
  "flint.v1.checkouts.CheckoutSessionService/CreateCheckoutSession": [
    { path: "source", map: SOURCE_MAP },
    { path: "payments.allowedDigitalWallets[]", map: DIGITAL_WALLET_MAP },
    { path: "payments.allowedPaymentMethodTypes[]", map: PAYMENT_METHOD_TYPE_MAP },
  ],
  "flint.v1.checkouts.CheckoutSessionService/ListCheckoutSessions": [
    { path: "status", map: CHECKOUT_SESSION_STATUS_MAP },
    { path: "source", map: SOURCE_MAP },
    { path: "sortField", map: CHECKOUT_SESSION_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.checkouts.PaymentLinkService/CreatePaymentLink": [
    { path: "customFields[].type", map: PAYMENT_LINK_CUSTOM_FIELD_TYPE_MAP },
    { path: "mode", map: PAYMENT_LINK_MODE_MAP },
    { path: "payments.allowedDigitalWallets[]", map: DIGITAL_WALLET_MAP },
    { path: "payments.allowedPaymentMethodTypes[]", map: PAYMENT_METHOD_TYPE_MAP },
  ],
  "flint.v1.checkouts.PaymentLinkService/ListPaymentLinks": [
    { path: "status", map: PAYMENT_LINK_STATUS_MAP },
    { path: "sortField", map: PAYMENT_LINK_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
    { path: "mode", map: PAYMENT_LINK_MODE_MAP },
  ],
  "flint.v1.checkouts.PaymentLinkService/ReplaceCustomFields": [
    { path: "customFields[].type", map: PAYMENT_LINK_CUSTOM_FIELD_TYPE_MAP },
  ],
  "flint.v1.checkouts.PaymentLinkService/UpdatePaymentLink": [
    { path: "payments.allowedDigitalWallets[]", map: DIGITAL_WALLET_MAP },
    { path: "payments.allowedPaymentMethodTypes[]", map: PAYMENT_METHOD_TYPE_MAP },
  ],
  "flint.v1.commerce.CouponService/CreateCoupon": [
    { path: "status", map: COUPON_MUTABLE_STATUS_MAP },
    { path: "discountCalculationBasis", map: DISCOUNT_CALCULATION_BASIS_MAP },
  ],
  "flint.v1.commerce.CouponService/ListCoupons": [
    { path: "status", map: COUPON_STATUS_MAP },
    { path: "sortField", map: COUPON_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.commerce.CouponService/UpdateCoupon": [
    { path: "status", map: COUPON_MUTABLE_STATUS_MAP },
    { path: "discountCalculationBasis", map: DISCOUNT_CALCULATION_BASIS_MAP },
  ],
  "flint.v1.commerce.InvoiceService/ListInvoices": [
    { path: "status", map: INVOICE_STATUS_MAP },
  ],
  "flint.v1.commerce.ItemService/AdjustInventory": [
    { path: "changeReason", map: INVENTORY_CHANGE_REASON_MAP },
  ],
  "flint.v1.commerce.ItemService/CreateItem": [
    { path: "type", map: ITEM_TYPE_MAP },
    { path: "status", map: ITEM_STATUS_MAP },
  ],
  "flint.v1.commerce.ItemService/ListItems": [
    { path: "type", map: ITEM_TYPE_MAP },
    { path: "status", map: ITEM_STATUS_MAP },
    { path: "sortField", map: ITEM_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.commerce.ItemService/UpdateItem": [
    { path: "type", map: ITEM_TYPE_MAP },
    { path: "status", map: ITEM_STATUS_MAP },
  ],
  "flint.v1.commerce.OrderService/CreateOrder": [
    { path: "source", map: SOURCE_MAP },
  ],
  "flint.v1.commerce.OrderService/ListOrders": [
    { path: "status", map: ORDER_STATUS_MAP },
    { path: "source", map: SOURCE_MAP },
    { path: "sortField", map: ORDER_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.commerce.RefundService/CreateRefund": [
    { path: "reason", map: REFUND_REASON_MAP },
    { path: "refundMethod", map: REFUND_METHOD_MAP },
  ],
  "flint.v1.commerce.RefundService/ListRefunds": [
    { path: "status", map: REFUND_STATUS_MAP },
    { path: "reasons[]", map: REFUND_REASON_MAP },
    { path: "refundMethod", map: REFUND_METHOD_MAP },
    { path: "sortField", map: REFUND_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.commerce.SubscriptionPlanService/CreateSubscriptionPlan": [
    { path: "billingInterval", map: BILLING_INTERVAL_MAP },
  ],
  "flint.v1.commerce.SubscriptionPlanService/ListSubscriptionPlans": [
    { path: "status", map: SUBSCRIPTION_PLAN_STATUS_MAP },
    { path: "sortField", map: SUBSCRIPTION_PLAN_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.commerce.SubscriptionService/ListSubscriptions": [
    { path: "status", map: SUBSCRIPTION_STATUS_MAP },
    { path: "sortField", map: SUBSCRIPTION_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.customers.CustomerService/ListCustomers": [
    { path: "sortField", map: CUSTOMER_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.payments.PaymentIntentService/CreatePaymentIntent": [
    { path: "paymentMethodTypes[]", map: PAYMENT_METHOD_TYPE_MAP },
    { path: "digitalWallets[]", map: DIGITAL_WALLET_MAP },
    { path: "source", map: SOURCE_MAP },
  ],
  "flint.v1.payments.PaymentIntentService/ListPaymentIntents": [
    { path: "status", map: PAYMENT_STATUS_MAP },
    { path: "source", map: SOURCE_MAP },
    { path: "lifecycleFilter", map: PAYMENT_LIST_STATE_FILTER_MAP },
    { path: "sortField", map: PAYMENT_INTENT_SORT_FIELD_MAP },
    { path: "sortDirection", map: SORT_DIRECTION_MAP },
  ],
  "flint.v1.payments.PaymentMethodService/ListPaymentMethods": [
    { path: "type", map: PAYMENT_METHOD_TYPE_MAP },
    { path: "status", map: PAYMENT_METHOD_STATUS_MAP },
  ],
  "flint.v1.payments.PaymentMethodService/SavePaymentMethod": [
    { path: "type", map: PAYMENT_METHOD_TYPE_MAP },
  ],
  "flint.v1.settings.SettingsService/GetSettings": [
    { path: "scope", map: SETTINGS_SCOPE_MAP },
  ],
  "flint.v1.settings.SettingsService/GetEffectiveSettings": [
    { path: "scope", map: SETTINGS_SCOPE_MAP },
  ],
  "flint.v1.settings.SettingsService/UpdateSettings": [
    { path: "scope", map: SETTINGS_SCOPE_MAP },
    { path: "checkout.allowedPaymentMethodTypes[]", map: PAYMENT_METHOD_TYPE_MAP },
    { path: "checkout.allowedDigitalWallets[]", map: DIGITAL_WALLET_MAP },
    { path: "subscription.dunningEndAction", map: DUNNING_END_ACTION_MAP },
  ],
};

export function normalizePublicRequest(service: string, method: string, request: RawRequest): RawRequest {
  const rules = REQUEST_ENUM_RULES[`${service}/${method}`];
  if (!rules || rules.length === 0) {
    return request;
  }

  let next = request;
  for (const rule of rules) {
    next = applyRule(next, parsePath(rule.path), rule.map);
  }
  return next;
}

function parsePath(path: string): PathSegment[] {
  return path.split(".").map((segment) => ({
    key: segment.endsWith("[]") ? segment.slice(0, -2) : segment,
    array: segment.endsWith("[]"),
  }));
}

function applyRule(input: RawRequest, path: PathSegment[], map: EnumMap): RawRequest {
  const output = rewriteObjectPath(input, path, map);
  return output === input ? input : output;
}

function rewriteObjectPath(input: RawRequest, path: PathSegment[], map: EnumMap): RawRequest {
  const segment = path[0];
  if (!segment) return input;
  const rest = path.slice(1);
  const current = input[segment.key];
  if (current == null) {
    return input;
  }

  const rewritten = segment.array
    ? rewriteArraySegment(current, rest, map)
    : rewriteValueSegment(current, rest, map);

  if (rewritten === current) {
    return input;
  }

  return {
    ...input,
    [segment.key]: rewritten,
  };
}

function rewriteArraySegment(value: unknown, path: PathSegment[], map: EnumMap): unknown {
  if (!Array.isArray(value)) {
    return value;
  }

  let changed = false;
  const rewritten = value.map((entry) => {
    const next = path.length === 0 ? rewriteEnumValue(entry, map) : rewriteNestedValue(entry, path, map);
    if (next !== entry) {
      changed = true;
    }
    return next;
  });

  return changed ? rewritten : value;
}

function rewriteValueSegment(value: unknown, path: PathSegment[], map: EnumMap): unknown {
  if (path.length === 0) {
    return rewriteEnumValue(value, map);
  }
  return rewriteNestedValue(value, path, map);
}

function rewriteNestedValue(value: unknown, path: PathSegment[], map: EnumMap): unknown {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return value;
  }
  return rewriteObjectPath(value as RawRequest, path, map);
}

function rewriteEnumValue(value: unknown, map: EnumMap): unknown {
  if (typeof value === "number") {
    return map[value] ?? value;
  }
  return value;
}
