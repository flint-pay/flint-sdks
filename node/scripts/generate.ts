#!/usr/bin/env npx tsx
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import {
  parseProtoFile,
  createTypeRegistry,
  registerFile,
  type ProtoFile,
  type TypeRegistry,
} from "./proto-parser";
import {
  generateTypesFile,
  generateCommonTypesFile,
  type ServiceConfig,
} from "./generators/types-generator";
import { generateServiceFile } from "./generators/service-generator";
import {
  generateRegistryIndex,
  generateServiceRegistry,
} from "./generators/registry-generator";

// ============================================================================
// Service configuration — add new services here
// ============================================================================

const SERVICE_CONFIG: ServiceConfig[] = [
  {
    proto: "flint.v1.customers.CustomerService",
    sdk: "customers",
    entity: "Customer",
    protoFile: "protos/v1/customers/customers.proto",
  },
  {
    proto: "flint.v1.commerce.OrderService",
    sdk: "orders",
    entity: "Order",
    protoFile: "protos/v1/commerce/orders.proto",
  },
  {
    proto: "flint.v1.commerce.ItemService",
    sdk: "items",
    entity: "Item",
    protoFile: "protos/v1/commerce/items.proto",
    excludeRpcs: ["AddItemCategories", "RemoveItemCategories"],
  },
  {
    proto: "flint.v1.commerce.CouponService",
    sdk: "coupons",
    entity: "Coupon",
    protoFile: "protos/v1/commerce/coupons.proto",
    excludeRpcs: ["AddCouponLimitToItems", "RemoveCouponLimitToItems"],
  },
  {
    proto: "flint.v1.checkouts.PaymentLinkService",
    sdk: "paymentLinks",
    entity: "PaymentLink",
    protoFile: "protos/v1/checkouts/payment_links.proto",
    excludeRpcs: ["GetPaymentLinkPublic", "ResolvePaymentLink"],
  },
  {
    proto: "flint.v1.payments.PaymentIntentService",
    sdk: "paymentIntents",
    entity: "PaymentIntent",
    protoFile: "protos/v1/payments/payment_intents.proto",
    excludeRpcs: ["SendReceipt"],
  },
  {
    proto: "flint.v1.payments.PaymentMethodService",
    sdk: "paymentMethods",
    entity: "PaymentMethod",
    protoFile: "protos/v1/payments/payment_methods.proto",
  },
  {
    proto: "flint.v1.commerce.RefundService",
    sdk: "refunds",
    entity: "Refund",
    protoFile: "protos/v1/commerce/refunds.proto",
  },
  {
    proto: "flint.v1.checkouts.CheckoutSessionService",
    sdk: "checkoutSessions",
    entity: "CheckoutSession",
    protoFile: "protos/v1/checkouts/checkout_sessions.proto",
  },
  {
    proto: "flint.v1.commerce.SubscriptionPlanService",
    sdk: "subscriptionPlans",
    entity: "SubscriptionPlan",
    protoFile: "protos/v1/commerce/subscription_plans.proto",
  },
  {
    proto: "flint.v1.commerce.SubscriptionService",
    sdk: "subscriptions",
    entity: "Subscription",
    protoFile: "protos/v1/commerce/subscriptions.proto",
  },
  {
    proto: "flint.v1.settings.SettingsService",
    sdk: "settings",
    entity: "Settings",
    protoFile: "protos/v1/settings/settings.proto",
  },
];

// Webhooks are maintained separately because the service mixes webhook endpoint
// CRUD with webhook event listing and scalar secret rotation responses.

// ============================================================================
// Paths
// ============================================================================

const SDK_ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..");
const PROTO_ROOT = resolveProtoRoot();
const GENERATED_DIR = resolve(SDK_ROOT, "src/generated");
const TYPES_DIR = resolve(GENERATED_DIR, "types");
const SERVICES_DIR = resolve(GENERATED_DIR, "services");

// ============================================================================
// Main
// ============================================================================

function main() {
  console.log("🔧 Flint SDK Codegen");
  console.log("");

  // Create output directories
  mkdirSync(TYPES_DIR, { recursive: true });
  mkdirSync(SERVICES_DIR, { recursive: true });

  // Parse common proto first
  const commonProtoPath = resolve(PROTO_ROOT, "protos/v1/common.proto");
  const commonProto = parseProtoFile(commonProtoPath);
  const registry = createTypeRegistry();
  registerFile(registry, commonProto);

  // Parse all service proto files
  const parsedFiles = new Map<string, ProtoFile>();
  for (const config of SERVICE_CONFIG) {
    const protoPath = resolve(PROTO_ROOT, config.protoFile);
    if (!existsSync(protoPath)) {
      console.error(`  ✗ Proto file not found: ${protoPath}`);
      process.exit(1);
    }
    const proto = parseProtoFile(protoPath);
    parsedFiles.set(config.protoFile, proto);
    registerFile(registry, proto);
  }

  // Generate common types
  console.log("  → types/common.ts");
  writeFile(resolve(TYPES_DIR, "common.ts"), generateCommonTypesFile());

  // Generate per-service types and service files
  for (const config of SERVICE_CONFIG) {
    const proto = parsedFiles.get(config.protoFile)!;
    const service = proto.services.find((s) => s.name === config.entity + "Service");

    if (!service) {
      console.error(
        `  ✗ Service ${config.entity}Service not found in ${config.protoFile}`
      );
      console.error(
        `    Available services: ${proto.services.map((s) => s.name).join(", ")}`
      );
      process.exit(1);
    }

    const sdkKebab = kebabCase(config.sdk);

    // Generate types
    console.log(`  → types/${sdkKebab}.ts`);
    const typesContent = generateTypesFile(
      config,
      service,
      registry,
      proto.package,
      proto.messages,
      proto.enums,
    );
    writeFile(resolve(TYPES_DIR, `${sdkKebab}.ts`), typesContent);

    // Generate service
    console.log(`  → services/${sdkKebab}.ts`);
    const serviceContent = generateServiceFile(
      config,
      service,
      proto.messages,
      proto.enums,
      proto.package,
    );
    writeFile(resolve(SERVICES_DIR, `${sdkKebab}.ts`), serviceContent);
  }

  // Generate index file
  console.log("  → index.ts");
  writeFile(resolve(GENERATED_DIR, "index.ts"), withWebhookExports(generateRegistryIndex(SERVICE_CONFIG)));

  // Generate service registry
  console.log("  → service-registry.ts");
  writeFile(
    resolve(GENERATED_DIR, "service-registry.ts"),
    withManualServiceRegistry(generateServiceRegistry(SERVICE_CONFIG)),
  );

  console.log("");
  console.log("✅ Generated all files");
}

// ============================================================================
// Helpers
// ============================================================================

function writeFile(path: string, content: string) {
  const header = "// Auto-generated by scripts/generate.ts — do not edit manually\n\n";
  // Don't double-add header if content already has it
  const fullContent = content.startsWith("// Auto-generated")
    ? content
    : header + content;
  writeFileSync(path, fullContent, "utf-8");
}

function resolveProtoRoot() {
  const candidates = [
    process.env.FLINT_MONOREPO_ROOT ? resolve(process.env.FLINT_MONOREPO_ROOT, "server/monolith") : null,
    resolve(SDK_ROOT, "../../server/monolith"),
    resolve(SDK_ROOT, "../../flint/server/monolith"),
  ].filter((candidate): candidate is string => Boolean(candidate));

  for (const candidate of candidates) {
    if (existsSync(resolve(candidate, "protos/v1/common.proto"))) {
      return candidate;
    }
  }

  throw new Error(
    [
      "Unable to locate the Flint monorepo server for code generation.",
      "Set FLINT_MONOREPO_ROOT to the Flint repo root or place flint-sdks next to the Flint monorepo.",
    ].join(" "),
  );
}

function kebabCase(s: string): string {
  return s.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
}

function withWebhookExports(content: string): string {
  return `${content}export * from "./types/webhooks";\nexport { WebhookEndpointService } from "./services/webhooks";\n`;
}

function withManualServiceRegistry(content: string): string {
  return content
    .replace(
      'import { SettingsService } from "./services/settings";\n',
      'import { SettingsService } from "./services/settings";\nimport { AnalyticsService } from "../services/analytics";\nimport { ApiKeyService } from "../services/api-keys";\nimport { DeviceService } from "../services/devices";\nimport { InvoiceService } from "../services/invoices";\nimport { MerchantService } from "../services/merchants";\nimport { UserService } from "../services/users";\nimport { WebhookEndpointService } from "./services/webhooks";\n',
    )
    .replace(
      "  settings: SettingsService;\n};\n",
      "  settings: SettingsService;\n  analytics: AnalyticsService;\n  apiKeys: ApiKeyService;\n  devices: DeviceService;\n  invoices: InvoiceService;\n  merchants: MerchantService;\n  users: UserService;\n  webhooks: WebhookEndpointService;\n};\n",
    )
    .replace(
      "    settings: new SettingsService(config),\n  };\n}\n",
      "    settings: new SettingsService(config),\n    analytics: new AnalyticsService(config),\n    apiKeys: new ApiKeyService(config),\n    devices: new DeviceService(config),\n    invoices: new InvoiceService(config),\n    merchants: new MerchantService(config),\n    users: new UserService(config),\n    webhooks: new WebhookEndpointService(config),\n  };\n}\n",
    )
    .replace(
      'export { SettingsService } from "./services/settings";\n',
      'export { SettingsService } from "./services/settings";\nexport { AnalyticsService } from "../services/analytics";\nexport { ApiKeyService } from "../services/api-keys";\nexport { DeviceService } from "../services/devices";\nexport { InvoiceService } from "../services/invoices";\nexport { MerchantService } from "../services/merchants";\nexport { UserService } from "../services/users";\nexport { WebhookEndpointService } from "./services/webhooks";\n',
    );
}

// Run
main();
