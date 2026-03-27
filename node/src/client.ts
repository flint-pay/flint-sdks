import type { RequestConfig } from "./services/base";
import { createServices, type ServiceInstances } from "./generated/service-registry";

const DEFAULT_BASE_URL = "https://api.withflintpay.com";
const DEFAULT_MAX_RETRIES = 2;
const DEFAULT_TIMEOUT_MS = 30_000;

export type FlintConfig = {
  apiKey: string;
  baseUrl?: string;
  maxRetries?: number;
  timeoutMs?: number;
};

/**
 * The main Flint SDK client. All API resources are accessed as properties.
 *
 * @example
 * ```ts
 * const flint = new Flint({ apiKey: "flint_test_..." });
 *
 * const order = await flint.orders.create({
 *   lineItems: [{ name: "Coffee", quantity: 1, unitPriceMoney: { amount: 500, currency: "USD" } }],
 * });
 *
 * for await (const customer of flint.customers.list({ limit: 25 })) {
 *   console.log(customer.name);
 * }
 * ```
 */
export class Flint {
  readonly orders: ServiceInstances["orders"];
  readonly customers: ServiceInstances["customers"];
  readonly items: ServiceInstances["items"];
  readonly coupons: ServiceInstances["coupons"];
  readonly paymentLinks: ServiceInstances["paymentLinks"];
  readonly paymentIntents: ServiceInstances["paymentIntents"];
  readonly paymentMethods: ServiceInstances["paymentMethods"];
  readonly refunds: ServiceInstances["refunds"];
  readonly checkoutSessions: ServiceInstances["checkoutSessions"];
  readonly subscriptionPlans: ServiceInstances["subscriptionPlans"];
  readonly subscriptions: ServiceInstances["subscriptions"];
  readonly settings: ServiceInstances["settings"];
  readonly analytics: ServiceInstances["analytics"];
  readonly apiKeys: ServiceInstances["apiKeys"];
  readonly devices: ServiceInstances["devices"];
  readonly invoices: ServiceInstances["invoices"];
  readonly merchants: ServiceInstances["merchants"];
  readonly users: ServiceInstances["users"];
  readonly webhooks: ServiceInstances["webhooks"];

  constructor(config: FlintConfig) {
    if (!config.apiKey) {
      throw new Error(
        "Flint API key is required. Get one at https://dashboard.withflintpay.com/settings/api-keys"
      );
    }
    if (
      config.timeoutMs !== undefined &&
      (!Number.isFinite(config.timeoutMs) || config.timeoutMs <= 0)
    ) {
      throw new Error("Flint timeoutMs must be a positive number of milliseconds");
    }
    if (
      config.maxRetries !== undefined &&
      (!Number.isInteger(config.maxRetries) || config.maxRetries < 0)
    ) {
      throw new Error("Flint maxRetries must be a non-negative integer");
    }

    const requestConfig: RequestConfig = {
      apiKey: config.apiKey,
      baseUrl: (config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/$/, ""),
      maxRetries: config.maxRetries ?? DEFAULT_MAX_RETRIES,
      timeoutMs: config.timeoutMs ?? DEFAULT_TIMEOUT_MS,
    };

    const services = createServices(requestConfig);
    this.orders = services.orders;
    this.customers = services.customers;
    this.items = services.items;
    this.coupons = services.coupons;
    this.paymentLinks = services.paymentLinks;
    this.paymentIntents = services.paymentIntents;
    this.paymentMethods = services.paymentMethods;
    this.refunds = services.refunds;
    this.checkoutSessions = services.checkoutSessions;
    this.subscriptionPlans = services.subscriptionPlans;
    this.subscriptions = services.subscriptions;
    this.settings = services.settings;
    this.analytics = services.analytics;
    this.apiKeys = services.apiKeys;
    this.devices = services.devices;
    this.invoices = services.invoices;
    this.merchants = services.merchants;
    this.users = services.users;
    this.webhooks = services.webhooks;
  }
}
