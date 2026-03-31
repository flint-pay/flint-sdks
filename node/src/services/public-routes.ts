type RawRequest = Record<string, unknown>;

export type ResolvedPublicRoute = {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  path: string;
  query?: RawRequest;
  body?: RawRequest;
  headers?: Record<string, string>;
  adaptResponse?: (payload: Record<string, unknown>, response: Response) => unknown;
};

type ResourceConfig = {
  service: string;
  entity: string;
  basePath: string;
  singularKey: string;
  pluralKey: string;
  idParam: string;
};

const RESOURCE_CONFIGS: Record<string, ResourceConfig> = {
  "flint.v1.customers.CustomerService": {
    service: "flint.v1.customers.CustomerService",
    entity: "Customer",
    basePath: "/v1/customers",
    singularKey: "customer",
    pluralKey: "customers",
    idParam: "customerId",
  },
  "flint.v1.commerce.OrderService": {
    service: "flint.v1.commerce.OrderService",
    entity: "Order",
    basePath: "/v1/orders",
    singularKey: "order",
    pluralKey: "orders",
    idParam: "orderId",
  },
  "flint.v1.commerce.ItemService": {
    service: "flint.v1.commerce.ItemService",
    entity: "Item",
    basePath: "/v1/items",
    singularKey: "item",
    pluralKey: "items",
    idParam: "itemId",
  },
  "flint.v1.commerce.CouponService": {
    service: "flint.v1.commerce.CouponService",
    entity: "Coupon",
    basePath: "/v1/coupons",
    singularKey: "coupon",
    pluralKey: "coupons",
    idParam: "couponId",
  },
  "flint.v1.checkouts.PaymentLinkService": {
    service: "flint.v1.checkouts.PaymentLinkService",
    entity: "PaymentLink",
    basePath: "/v1/payment-links",
    singularKey: "paymentLink",
    pluralKey: "paymentLinks",
    idParam: "paymentLinkId",
  },
  "flint.v1.payments.PaymentIntentService": {
    service: "flint.v1.payments.PaymentIntentService",
    entity: "PaymentIntent",
    basePath: "/v1/payment-intents",
    singularKey: "paymentIntent",
    pluralKey: "paymentIntents",
    idParam: "paymentIntentId",
  },
  "flint.v1.payments.PaymentMethodService": {
    service: "flint.v1.payments.PaymentMethodService",
    entity: "PaymentMethod",
    basePath: "/v1/payment-methods",
    singularKey: "paymentMethod",
    pluralKey: "paymentMethods",
    idParam: "paymentMethodId",
  },
  "flint.v1.commerce.RefundService": {
    service: "flint.v1.commerce.RefundService",
    entity: "Refund",
    basePath: "/v1/refunds",
    singularKey: "refund",
    pluralKey: "refunds",
    idParam: "refundId",
  },
  "flint.v1.checkouts.CheckoutSessionService": {
    service: "flint.v1.checkouts.CheckoutSessionService",
    entity: "CheckoutSession",
    basePath: "/v1/checkout-sessions",
    singularKey: "checkoutSession",
    pluralKey: "checkoutSessions",
    idParam: "checkoutSessionId",
  },
  "flint.v1.commerce.SubscriptionPlanService": {
    service: "flint.v1.commerce.SubscriptionPlanService",
    entity: "SubscriptionPlan",
    basePath: "/v1/subscription-plans",
    singularKey: "plan",
    pluralKey: "subscriptionPlans",
    idParam: "planId",
  },
  "flint.v1.commerce.SubscriptionService": {
    service: "flint.v1.commerce.SubscriptionService",
    entity: "Subscription",
    basePath: "/v1/subscriptions",
    singularKey: "subscription",
    pluralKey: "subscriptions",
    idParam: "subscriptionId",
  },
  "flint.v1.accounts.APIKeyService": {
    service: "flint.v1.accounts.APIKeyService",
    entity: "APIKey",
    basePath: "/v1/api-keys",
    singularKey: "apiKey",
    pluralKey: "apiKeys",
    idParam: "apiKeyId",
  },
  "flint.v1.accounts.DeviceService": {
    service: "flint.v1.accounts.DeviceService",
    entity: "Device",
    basePath: "/v1/devices",
    singularKey: "device",
    pluralKey: "devices",
    idParam: "deviceId",
  },
  "flint.v1.accounts.merchants.MerchantService": {
    service: "flint.v1.accounts.merchants.MerchantService",
    entity: "Merchant",
    basePath: "/v1/merchants",
    singularKey: "merchant",
    pluralKey: "merchants",
    idParam: "merchantId",
  },
  "flint.v1.accounts.UserService": {
    service: "flint.v1.accounts.UserService",
    entity: "User",
    basePath: "/v1/users",
    singularKey: "user",
    pluralKey: "users",
    idParam: "userId",
  },
  "flint.v1.commerce.InvoiceService": {
    service: "flint.v1.commerce.InvoiceService",
    entity: "Invoice",
    basePath: "/v1/invoices",
    singularKey: "invoice",
    pluralKey: "invoices",
    idParam: "invoiceId",
  },
  "flint.v1.webhooks.WebhookService": {
    service: "flint.v1.webhooks.WebhookService",
    entity: "WebhookEndpoint",
    basePath: "/v1/webhooks",
    singularKey: "webhookEndpoint",
    pluralKey: "webhookEndpoints",
    idParam: "webhookEndpointId",
  },
};

const resourceResponse = (key: string) => (payload: Record<string, unknown>) => ({
  [key]: payload.data ?? payload[key],
});

const listResponse = (key: string) => (payload: Record<string, unknown>) => ({
  [key]: Array.isArray(payload.data) ? payload.data : Array.isArray(payload[key]) ? payload[key] : [],
  nextPageToken: payload.nextPageToken,
});

const unwrapData = (payload: Record<string, unknown>) =>
  ((payload.data as Record<string, unknown>) ?? payload) as Record<string, unknown>;

const actionResponse = () => ({});

const createAPIKeyResponse = (payload: Record<string, unknown>) => ({
  apiKey: payload.data ?? payload.apiKey,
  secretKey: payload.secretKey,
});

const invoiceSendResponse = (payload: Record<string, unknown>) => {
  const data = (payload.data as Record<string, unknown>) ?? payload;
  return {
    invoice: data.invoice,
    publicUrl: data.publicUrl,
    deliveryAttempt: data.deliveryAttempt,
  };
};

const invoiceRegenerateLinkResponse = (payload: Record<string, unknown>) => {
  const data = (payload.data as Record<string, unknown>) ?? payload;
  return {
    invoice: data.invoice,
    publicUrl: data.publicUrl,
  };
};

const invoiceCheckoutSessionResponse = (payload: Record<string, unknown>) => {
  const data = (payload.data as Record<string, unknown>) ?? payload;
  return {
    invoice: data.invoice,
    invoicePaymentAttempt: data.invoicePaymentAttempt,
    checkoutSession: data.checkoutSession,
    checkoutAuthToken: data.checkoutAuthToken,
  };
};

const webhookRotateResponse = (payload: Record<string, unknown>) => ({
  secret:
    (payload.data as Record<string, unknown> | undefined)?.secret ??
    (payload.secret as string | undefined),
});

const invoicePDFResponse = (_payload: Record<string, unknown>, response: Response) => {
  const disposition = response.headers.get("Content-Disposition") ?? "";
  const fileNameMatch = disposition.match(/filename=\"?([^"]+)\"?/i);
  return {
    contentType: response.headers.get("Content-Type") ?? "application/pdf",
    fileName: fileNameMatch?.[1] ?? "invoice.pdf",
  };
};

const firstListItemResponse = (singularKey: string) => (payload: Record<string, unknown>) => {
  const data = Array.isArray(payload.data) ? payload.data : [];
  return {
    [singularKey]: (data[0] as Record<string, unknown> | undefined) ?? undefined,
  };
};

function genericRoute(config: ResourceConfig, methodName: string, request: RawRequest): ResolvedPublicRoute | null {
  if (methodName === `Create${config.entity}`) {
    return {
      method: "POST",
      path: config.basePath,
      body: request,
      adaptResponse: resourceResponse(config.singularKey),
    };
  }
  if (methodName === `Get${config.entity}`) {
    return {
      method: "GET",
      path: `${config.basePath}/{${config.idParam}}`,
      query: omit(request, [config.idParam]),
      adaptResponse: resourceResponse(config.singularKey),
    };
  }
  if (methodName === `Update${config.entity}`) {
    return {
      method: "PATCH",
      path: `${config.basePath}/{${config.idParam}}`,
      body: omit(request, [config.idParam]),
      adaptResponse: resourceResponse(config.singularKey),
    };
  }
  if (methodName === `Delete${config.entity}`) {
    return {
      method: "DELETE",
      path: `${config.basePath}/{${config.idParam}}`,
      adaptResponse: resourceResponse(config.singularKey),
    };
  }
  if (methodName === `List${config.entity}s`) {
    return {
      method: "GET",
      path: config.basePath,
      query: request,
      adaptResponse: listResponse(config.pluralKey),
    };
  }
  return null;
}

function specialRoute(service: string, method: string, request: RawRequest): ResolvedPublicRoute | null {
  switch (`${service}/${method}`) {
    case "flint.v1.commerce.OrderService/CloseOrder":
      return postAction("/v1/orders/{orderId}/close", "order", request);
    case "flint.v1.commerce.OrderService/PayOrder":
      return postAction("/v1/orders/{orderId}/pay", "order", request);
    case "flint.v1.commerce.OrderService/AddLineItems":
      return postAction("/v1/orders/{orderId}/line-items/add", "order", request);
    case "flint.v1.commerce.OrderService/UpdateLineItem":
      return {
        method: "PATCH",
        path: "/v1/orders/{orderId}/line-items/{orderLineItemId}",
        body: omit(request, ["orderId", "orderLineItemId"]),
        adaptResponse: resourceResponse("order"),
      };
    case "flint.v1.commerce.OrderService/RemoveLineItems":
      return postAction("/v1/orders/{orderId}/line-items/remove", "order", request);
    case "flint.v1.commerce.OrderService/ApplyCoupon":
      return postAction("/v1/orders/{orderId}/discounts/apply-coupon", "order", request);
    case "flint.v1.commerce.OrderService/RemoveDiscounts":
      return postAction("/v1/orders/{orderId}/discounts/remove", "order", request);
    case "flint.v1.commerce.OrderService/AddTips":
      return postAction("/v1/orders/{orderId}/tips/add", "order", request);
    case "flint.v1.commerce.OrderService/UpdateTip":
      return {
        method: "PATCH",
        path: "/v1/orders/{orderId}/tips/{tipId}",
        body: omit(request, ["orderId", "tipId"]),
        adaptResponse: resourceResponse("order"),
      };
    case "flint.v1.commerce.OrderService/RemoveTips":
      return postAction("/v1/orders/{orderId}/tips/remove", "order", request);
    case "flint.v1.commerce.OrderService/ApplyTax":
      return postAction("/v1/orders/{orderId}/tax/apply", "order", request);
    case "flint.v1.commerce.ItemService/ReplaceItemCategories":
      return postAction("/v1/items/{itemId}/categories/replace", "item", request);
    case "flint.v1.commerce.ItemService/AdjustInventory":
      return postAction("/v1/items/{itemId}/inventory/adjust", "item", request);
    case "flint.v1.commerce.ItemService/GetItemBySKU":
      return {
        method: "GET",
        path: "/v1/items",
        query: request,
        adaptResponse: firstListItemResponse("item"),
      };
    case "flint.v1.commerce.CouponService/ReplaceCouponLimitToItems":
      return postAction("/v1/coupons/{couponId}/limit-to-items/replace", "coupon", request);
    case "flint.v1.commerce.CouponService/GetCouponByCode":
      return {
        method: "GET",
        path: "/v1/coupons",
        query: { code: request.couponCode },
        adaptResponse: firstListItemResponse("coupon"),
      };
    case "flint.v1.checkouts.PaymentLinkService/ReplaceLineItems":
      return postAction("/v1/payment-links/{paymentLinkId}/line-items/replace", "paymentLink", request);
    case "flint.v1.checkouts.PaymentLinkService/ReplaceCustomFields":
      return postAction("/v1/payment-links/{paymentLinkId}/custom-fields/replace", "paymentLink", request);
    case "flint.v1.checkouts.PaymentLinkService/ActivatePaymentLink":
      return postAction("/v1/payment-links/{paymentLinkId}/activate", "paymentLink", request);
    case "flint.v1.checkouts.PaymentLinkService/DeactivatePaymentLink":
      return postAction("/v1/payment-links/{paymentLinkId}/deactivate", "paymentLink", request);
    case "flint.v1.checkouts.CheckoutSessionService/CloseCheckoutSession":
      return postAction("/v1/checkout-sessions/{checkoutSessionId}/close", "checkoutSession", request);
    case "flint.v1.payments.PaymentIntentService/ConfirmPaymentIntent":
      return postAction("/v1/payment-intents/{paymentIntentId}/confirm", "paymentIntent", request);
    case "flint.v1.payments.PaymentIntentService/CapturePaymentIntent":
      return postAction("/v1/payment-intents/{paymentIntentId}/capture", "paymentIntent", request);
    case "flint.v1.payments.PaymentIntentService/CancelPaymentIntent":
      return postAction("/v1/payment-intents/{paymentIntentId}/cancel", "paymentIntent", request);
    case "flint.v1.payments.PaymentMethodService/SavePaymentMethod":
      return {
        method: "POST",
        path: "/v1/payment-methods",
        body: request,
        adaptResponse: resourceResponse("paymentMethod"),
      };
    case "flint.v1.payments.PaymentMethodService/RemovePaymentMethod":
      return {
        method: "POST",
        path: "/v1/payment-methods/{paymentMethodId}/remove",
        adaptResponse: actionResponse,
      };
    case "flint.v1.payments.PaymentMethodService/SetDefaultPaymentMethod":
      return {
        method: "POST",
        path: "/v1/payment-methods/{paymentMethodId}/set-default",
        adaptResponse: resourceResponse("paymentMethod"),
      };
    case "flint.v1.commerce.SubscriptionPlanService/ArchiveSubscriptionPlan":
      return {
        method: "POST",
        path: "/v1/subscription-plans/{planId}/archive",
        adaptResponse: resourceResponse("plan"),
      };
    case "flint.v1.commerce.SubscriptionService/CancelSubscription":
      return postAction("/v1/subscriptions/{subscriptionId}/cancel", "subscription", request);
    case "flint.v1.commerce.SubscriptionService/PauseSubscription":
      return postAction("/v1/subscriptions/{subscriptionId}/pause", "subscription", request);
    case "flint.v1.commerce.SubscriptionService/ResumeSubscription":
      return {
        method: "POST",
        path: "/v1/subscriptions/{subscriptionId}/resume",
        adaptResponse: resourceResponse("subscription"),
      };
    case "flint.v1.settings.SettingsService/GetSettings":
      return {
        method: "GET",
        path: "/v1/settings",
        query: request,
        adaptResponse: resourceResponse("settings"),
      };
    case "flint.v1.settings.SettingsService/GetEffectiveSettings":
      return {
        method: "GET",
        path: "/v1/settings/effective",
        query: request,
        adaptResponse: resourceResponse("settings"),
      };
    case "flint.v1.settings.SettingsService/UpdateSettings":
      return {
        method: "PATCH",
        path: "/v1/settings",
        query: {
          scope: request.scope,
          organizationId: request.organizationId,
          locationId: request.locationId,
          deviceId: request.deviceId,
        },
        body: omit(request, ["scope", "organizationId", "locationId", "deviceId"]),
        adaptResponse: resourceResponse("settings"),
      };
    case "flint.v1.analytics.AnalyticsService/GetAnalyticsOverview":
      return {
        method: "GET",
        path: "/v1/analytics/overview",
        query: request,
        adaptResponse: resourceResponse("overview"),
      };
    case "flint.v1.analytics.AnalyticsService/GetPaymentVolumeTimeseries":
      return {
        method: "GET",
        path: "/v1/analytics/payment-volume-timeseries",
        query: request,
        adaptResponse: unwrapData,
      };
    case "flint.v1.analytics.AnalyticsService/GetSubscriptionAnalytics":
      return {
        method: "GET",
        path: "/v1/analytics/subscriptions",
        query: request,
        adaptResponse: resourceResponse("analytics"),
      };
    case "flint.v1.accounts.APIKeyService/CreateAPIKey":
      return {
        method: "POST",
        path: "/v1/api-keys",
        body: request,
        adaptResponse: createAPIKeyResponse,
      };
    case "flint.v1.accounts.APIKeyService/RevokeAPIKey":
      return {
        method: "POST",
        path: "/v1/api-keys/{apiKeyId}/revoke",
        adaptResponse: resourceResponse("apiKey"),
      };
    case "flint.v1.accounts.UserService/DeactivateUser":
      return postAction("/v1/users/{userId}/deactivate", "user", request);
    case "flint.v1.accounts.merchants.MerchantOnboardingService/BeginMerchantOnboarding":
      return {
        method: "POST",
        path: "/v1/merchants/{merchantId}/onboarding/begin",
        body: omit(request, ["merchantId"]),
        adaptResponse: unwrapData,
      };
    case "flint.v1.accounts.merchants.MerchantOnboardingService/CreateMerchantOnboardingSession":
      return {
        method: "POST",
        path: "/v1/merchants/{merchantId}/onboarding/session",
        body: omit(request, ["merchantId"]),
        adaptResponse: unwrapData,
      };
    case "flint.v1.accounts.merchants.MerchantOnboardingService/GetMerchantOnboardingStatus":
      return {
        method: "GET",
        path: "/v1/merchants/{merchantId}/onboarding/status",
        adaptResponse: unwrapData,
      };
    case "flint.v1.commerce.InvoiceService/CreateInvoiceDraft":
      return {
        method: "POST",
        path: "/v1/invoices",
        body: request,
        adaptResponse: resourceResponse("invoice"),
      };
    case "flint.v1.commerce.InvoiceService/UpdateInvoiceDraft":
      return {
        method: "PATCH",
        path: "/v1/invoices/{invoiceId}",
        body: omit(request, ["invoiceId"]),
        adaptResponse: resourceResponse("invoice"),
      };
    case "flint.v1.commerce.InvoiceService/SendInvoice":
      return {
        method: "POST",
        path: "/v1/invoices/{invoiceId}/send",
        adaptResponse: invoiceSendResponse,
      };
    case "flint.v1.commerce.InvoiceService/VoidInvoice":
      return {
        method: "POST",
        path: "/v1/invoices/{invoiceId}/void",
        adaptResponse: resourceResponse("invoice"),
      };
    case "flint.v1.commerce.InvoiceService/RegenerateInvoiceToken":
      return {
        method: "POST",
        path: "/v1/invoices/{invoiceId}/regenerate-public-link",
        adaptResponse: invoiceRegenerateLinkResponse,
      };
    case "flint.v1.commerce.InvoiceService/SendInvoiceReminder":
      return {
        method: "POST",
        path: "/v1/invoices/{invoiceId}/send-reminder",
        adaptResponse: invoiceSendResponse,
      };
    case "flint.v1.commerce.InvoiceService/ListInvoiceEvents":
      return {
        method: "GET",
        path: "/v1/invoices/{invoiceId}/events",
        query: omit(request, ["invoiceId"]),
        adaptResponse: listResponse("events"),
      };
    case "flint.v1.commerce.InvoiceService/ListInvoiceDeliveryAttempts":
      return {
        method: "GET",
        path: "/v1/invoices/{invoiceId}/delivery-attempts",
        query: omit(request, ["invoiceId"]),
        adaptResponse: listResponse("deliveryAttempts"),
      };
    case "flint.v1.commerce.InvoiceService/RecordManualInvoicePayment":
      return {
        method: "POST",
        path: "/v1/invoices/{invoiceId}/manual-payments",
        body: omit(request, ["invoiceId"]),
        adaptResponse: resourceResponse("invoice"),
      };
    case "flint.v1.commerce.InvoiceService/ReverseManualInvoicePayment":
      return {
        method: "POST",
        path: "/v1/invoices/{invoiceId}/manual-payments/reverse",
        body: omit(request, ["invoiceId"]),
        adaptResponse: resourceResponse("invoice"),
      };
    case "flint.v1.commerce.InvoiceService/GetOrCreateInvoiceCheckoutSession":
      return {
        method: "POST",
        path: "/v1/invoices/{invoiceId}/checkout-session",
        body: omit(request, ["invoiceId"]),
        adaptResponse: invoiceCheckoutSessionResponse,
      };
    case "flint.v1.commerce.InvoiceService/GetInvoicePdf":
      return {
        method: "GET",
        path: "/v1/invoices/{invoiceId}/pdf",
        adaptResponse: invoicePDFResponse,
      };
    case "flint.v1.webhooks.WebhookService/RotateWebhookSecret":
      return {
        method: "POST",
        path: "/v1/webhooks/{webhookEndpointId}/rotate-secret",
        adaptResponse: webhookRotateResponse,
      };
    case "flint.v1.webhooks.WebhookService/DeleteWebhookEndpoint":
      return {
        method: "DELETE",
        path: "/v1/webhooks/{webhookEndpointId}",
        adaptResponse: actionResponse,
      };
    case "flint.v1.webhooks.WebhookService/ListWebhookEvents":
      return {
        method: "GET",
        path: "/v1/webhook-events",
        query: request,
        adaptResponse: listResponse("webhookEvents"),
      };
    default:
      return null;
  }
}

function postAction(path: string, responseKey: string, request: RawRequest): ResolvedPublicRoute {
  const pathKeys = Array.from(path.matchAll(/\{([^}]+)\}/g)).map((match) => match[1] ?? "");
  return {
    method: "POST",
    path,
    body: omit(request, pathKeys),
    adaptResponse: resourceResponse(responseKey),
  };
}

function omit(input: RawRequest, keys: string[]): RawRequest {
  const next: RawRequest = {};
  for (const [key, value] of Object.entries(input)) {
    if (keys.includes(key)) continue;
    next[key] = value;
  }
  return next;
}

export function resolvePublicRoute(service: string, method: string, request: RawRequest): ResolvedPublicRoute {
  const special = specialRoute(service, method, request);
  if (special) return special;

  const config = RESOURCE_CONFIGS[service];
  if (config) {
    const generic = genericRoute(config, method, request);
    if (generic) return generic;
  }

  throw new Error(`No public HTTP route mapping exists for ${service}/${method}`);
}
