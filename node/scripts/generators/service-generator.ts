import type {
  ProtoEnum,
  ProtoField,
  ProtoMessage,
  ProtoOneof,
  ProtoRPC,
  ProtoService,
} from "../proto-parser";
import type { ServiceConfig } from "./types-generator";
import {
  snakeToCamel,
  toConstName,
  kebabCase,
  getShortType,
  isMoney,
  isTimestamp,
  isFieldMask,
  isCommonEnum,
  stripEnumPrefix,
} from "./types-generator";

// ============================================================================
// Common enum → const name mapping
// ============================================================================

const COMMON_ENUM_TO_PROTO: Record<string, string> = {
  "flint.v1.Source": "SOURCE_TO_PROTO",
  "flint.v1.SortDirection": "SORT_DIRECTION_TO_PROTO",
  "flint.v1.PaymentMethodType": "PAYMENT_METHOD_TYPE_TO_PROTO",
  "flint.v1.DigitalWallet": "DIGITAL_WALLET_TO_PROTO",
  "flint.v1.CardBrand": "CARD_BRAND_TO_PROTO",
  "Source": "SOURCE_TO_PROTO",
  "SortDirection": "SORT_DIRECTION_TO_PROTO",
  "PaymentMethodType": "PAYMENT_METHOD_TYPE_TO_PROTO",
  "DigitalWallet": "DIGITAL_WALLET_TO_PROTO",
  "CardBrand": "CARD_BRAND_TO_PROTO",
};

const COMMON_ENUM_FROM_PROTO: Record<string, string> = {
  "flint.v1.Source": "SOURCE_MAP",
  "flint.v1.SortDirection": "SORT_DIRECTION_MAP",
  "flint.v1.PaymentMethodType": "PAYMENT_METHOD_TYPE_MAP",
  "flint.v1.DigitalWallet": "DIGITAL_WALLET_MAP",
  "flint.v1.CardBrand": "CARD_BRAND_MAP",
  "Source": "SOURCE_MAP",
  "SortDirection": "SORT_DIRECTION_MAP",
  "PaymentMethodType": "PAYMENT_METHOD_TYPE_MAP",
  "DigitalWallet": "DIGITAL_WALLET_MAP",
  "CardBrand": "CARD_BRAND_MAP",
};

const COMMON_ENUM_DEFAULTS: Record<string, string> = {
  "flint.v1.Source": "api",
  "flint.v1.SortDirection": "asc",
  "flint.v1.PaymentMethodType": "card",
  "flint.v1.DigitalWallet": "apple_pay",
  "flint.v1.CardBrand": "visa",
  "Source": "api",
  "SortDirection": "asc",
  "PaymentMethodType": "card",
  "DigitalWallet": "apple_pay",
  "CardBrand": "visa",
};

const CHECKOUT_CONFIG_TYPES = new Set([
  "Theme",
  "PaymentConfig",
  "TipConfig",
  "CustomerConfig",
  "PrefilledCustomerInfo",
  "TaxConfig",
  "LegalConfig",
  "ExpirationConfig",
  "CustomTextConfig",
  "CouponConfig",
  "Redirects",
]);

const ENUM_ZERO_VALUE_ALIASES: Record<string, string> = {
  PaymentLinkMode: "standard",
};

const OPTIONAL_REQUEST_FIELDS: Record<string, string[]> = {
  CreatePaymentLinkRequest: ["mode", "event_config"],
  CreateSubscriptionPlanRequest: ["billing_interval_count"],
};

const REQUIRED_REQUEST_FIELDS: Record<string, string[]> = {
  GetSettingsRequest: ["scope"],
  UpdateSettingsRequest: ["scope"],
};

// ============================================================================
// Params type name derivation — must match types-generator exactly
// ============================================================================

function isSimpleGetRequest(requestMsg: ProtoMessage): boolean {
  const publicFields = requestMsg.fields.filter(
    (field) =>
      !field.isInternal &&
      !field.isOutputOnly &&
      !field.isServiceOnly &&
      !isFieldMask(field.type),
  );

  return (
    publicFields.length === 1 &&
    publicFields[0]?.name.endsWith("_id") === true &&
    publicFields[0].optional === false
  );
}

function deriveParamsTypeNameFromRpc(
  rpc: ProtoRPC,
  entity: string,
  requestMsg?: ProtoMessage,
): string | null {
  const reqName = rpc.requestType;

  // Simple Get — no params type
  if (/^Get\w+$/.test(reqName) && !reqName.includes("By") && requestMsg && isSimpleGetRequest(requestMsg)) {
    return null;
  }
  // GetByX — no params type (method takes value directly)
  if (/^Get\w+By\w+$/.test(reqName)) return null;

  // These match the types-generator deriveParamsTypeName() logic:
  const base = reqName.replace(/Request$/, "");

  // Create → EntityCreateParams
  const createMatch = base.match(/^Create(\w+)$/);
  if (createMatch) return `${createMatch[1]}CreateParams`;

  // Update → EntityUpdateParams
  const updateMatch = base.match(/^Update(\w+)$/);
  if (updateMatch) return `${updateMatch[1]}UpdateParams`;

  // List → EntityListParams (singularize)
  if (base.startsWith("List")) {
    let entityName = base.replace(/^List/, "");
    if (entityName.endsWith("ies")) entityName = entityName.slice(0, -3) + "y";
    else if (entityName.endsWith("ses")) entityName = entityName.slice(0, -2);
    else if (entityName.endsWith("s")) entityName = entityName.slice(0, -1);
    return `${entityName}ListParams`;
  }

  // Everything else: VerbEntityParams → VerbEntityParams
  return `${base}Params`;
}

function isRequestFieldOptional(
  requestMsg: ProtoMessage,
  field: ProtoField,
  isListRequest: boolean,
): boolean {
  if (REQUIRED_REQUEST_FIELDS[requestMsg.name]?.includes(field.name)) return false;
  if (OPTIONAL_REQUEST_FIELDS[requestMsg.name]?.includes(field.name)) return true;
  if (isListRequest) return true;
  if (field.type === "map" || field.optional || field.repeated) return true;
  if (requestMsg.name.startsWith("Update") && !field.name.endsWith("_id") && !field.name.endsWith("_ids")) {
    return true;
  }
  if (field.name.startsWith("clear_")) return true;
  return false;
}

function hasRequiredRequestFields(
  requestMsg: ProtoMessage,
  fields: ProtoField[],
  isListRequest = false,
): boolean {
  return fields.some((field) => {
    if (field.isOutputOnly || field.isServiceOnly || field.isInternal) return false;
    if (field.name === "idempotency_key") return false;
    if (isFieldMask(field.type)) return false;
    return !isRequestFieldOptional(requestMsg, field, isListRequest);
  });
}

// ============================================================================
// Service file generator
// ============================================================================

export function generateServiceFile(
  config: ServiceConfig,
  service: ProtoService,
  messages: ProtoMessage[],
  enums: ProtoEnum[],
  pkg: string,
): string {
  const lines: string[] = [];
  const includedRpcs = service.rpcs.filter((rpc) => !config.excludeRpcs?.includes(rpc.name));

  // Build lookup maps
  const messageMap = new Map<string, ProtoMessage>();
  const enumMap = new Map<string, ProtoEnum>();

  const collectAll = (msgs: ProtoMessage[]) => {
    for (const msg of msgs) {
      messageMap.set(msg.name, msg);
      collectAll(msg.nestedMessages);
      for (const e of msg.nestedEnums) enumMap.set(e.name, e);
    }
  };
  collectAll(messages);
  for (const e of enums) enumMap.set(e.name, e);

  const entityMsg = messageMap.get(config.entity);

  // Collect all needed imports
  const typeImports = new Set<string>();
  const commonImports = new Set<string>();
  const commonTypeImports = new Set<string>();
  const enumMapImports = new Set<string>();

  typeImports.add(config.entity);

  // Add nested entity types needed for fromRaw converters
  if (entityMsg) {
    for (const nested of findNestedEntities(entityMsg, messageMap)) {
      typeImports.add(nested.name);
    }
  }

  // Scan RPCs for params types and enums needed
  for (const rpc of includedRpcs) {
    // Only import params types that the method actually uses
    // Delete<Entity> methods just take an ID, no params type needed
    // Simple ID-only actions also don't need params
    const isDeleteEntity = rpc.annotations.operationType === "OPERATION_TYPE_DELETE" && rpc.name === `Delete${config.entity}`;
    const reqMsg = messageMap.get(rpc.requestType);
    if (!isDeleteEntity) {
      const paramsType = deriveParamsTypeNameFromRpc(rpc, config.entity, reqMsg);
      if (paramsType) {
        // Check if the method will actually use this type
        // ID-only methods (no extra params) don't need a params type
        if (reqMsg) {
          const idField = reqMsg.fields.find((f) => f.name.endsWith("_id") && !f.optional);
          const extraFields = reqMsg.fields.filter(
            (f) => f !== idField && f.name !== "idempotency_key" && !isFieldMask(f.type) && !f.isOutputOnly && !f.isServiceOnly && !f.isInternal,
          );
          const hasExtras = extraFields.length > 0 || reqMsg.oneofs.length > 0 ||
            reqMsg.fields.some((f) => isFieldMask(f.type)) ||
            reqMsg.fields.some((f) => f.name === "idempotency_key");
          // For create/update and list RPCs, always import params
          const isCreate = rpc.name === `Create${config.entity}`;
          const isUpdate = rpc.name === `Update${config.entity}`;
          const isList = rpc.annotations.supportsPagination;
          if (isCreate || isUpdate || isList || hasExtras || !idField) {
            typeImports.add(paramsType);
          }
        }
      }
    }

    // Scan request messages for enum conversions needed
    if (reqMsg) {
      for (const f of reqMsg.fields) {
        if (COMMON_ENUM_TO_PROTO[f.type]) {
          commonImports.add(COMMON_ENUM_TO_PROTO[f.type]!);
        }
        const st = getShortType(f.type);
        if (enumMap.has(st)) {
          enumMapImports.add(`${toConstName(st)}_TO_PROTO`);
        }
      }
    }
  }

  // Scan entity for fromRaw converters needed
  if (entityMsg) {
    scanEntityForImports(entityMsg, messageMap, enumMap, commonImports, enumMapImports);
  }

  // Check what helpers are needed
  const hasList = includedRpcs.some((r) => r.annotations.supportsPagination);
  const needsMoney = entityMsg ? hasMoneyType(entityMsg, messageMap) : false;
  const needsAddress = entityMsg ? hasType(entityMsg, "flint.v1.Address", messageMap) : false;
  const needsAddressToProto = hasAddressInRequests(includedRpcs, messageMap);
  const needsPaymentLinkCustomFieldToProto = hasRequestFieldType(includedRpcs, messageMap, "PaymentLinkCustomField");
  const needsNextAction = entityMsg ? hasType(entityMsg, "flint.v1.NextAction", messageMap) : false;
  const needsProcessorDetails = entityMsg
    ? hasType(entityMsg, "flint.v1.ProcessorDetails", messageMap) || hasType(entityMsg, "ProcessorDetails", messageMap)
    : false;
  const needsCheckoutSessionConfigConverters = config.sdk === "paymentLinks" && entityMsg
    ? hasCheckoutConfigType(entityMsg, messageMap)
    : false;
  const needsResolveEnum = entityMsg ? hasEnumType(entityMsg, messageMap, enumMap) : false;

  if (needsProcessorDetails) {
    commonTypeImports.add("ProcessorDetails");
  }
  if (needsCheckoutSessionConfigConverters) {
    commonImports.add("DIGITAL_WALLET_MAP");
    commonImports.add("DIGITAL_WALLET_TO_PROTO");
    commonImports.add("PAYMENT_METHOD_TYPE_MAP");
    commonImports.add("PAYMENT_METHOD_TYPE_TO_PROTO");
  }

  // Write imports
  lines.push(
    needsResolveEnum
      ? `import { BaseService, resolveEnum } from "../../services/base";`
      : `import { BaseService } from "../../services/base";`,
  );

  if (typeImports.size > 0) {
    lines.push(`import type {`);
    for (const imp of [...typeImports].sort()) {
      lines.push(`  ${imp},`);
    }
    lines.push(`} from "../types/${kebabCase(config.sdk)}";`);
  }

  if (commonImports.size > 0) {
    lines.push(`import {`);
    for (const imp of [...commonImports].sort()) {
      lines.push(`  ${imp},`);
    }
    lines.push(`} from "../types/common";`);
  }

  if (commonTypeImports.size > 0) {
    lines.push(`import type { ${[...commonTypeImports].sort().join(", ")} } from "../types/common";`);
  }

  if (hasList) {
    lines.push(`import type { FlintList } from "../../pagination";`);
  }

  if (enumMapImports.size > 0) {
    lines.push(`import {`);
    for (const imp of [...enumMapImports].sort()) {
      lines.push(`  ${imp},`);
    }
    lines.push(`} from "../types/${kebabCase(config.sdk)}";`);
  }

  lines.push("");
  lines.push(`const SERVICE = "${config.proto}";`);
  lines.push("");

  // Service class
  lines.push(`export class ${config.entity}Service extends BaseService {`);

  for (const rpc of includedRpcs) {
    const method = generateMethod(rpc, config, messageMap, enumMap);
    if (method) {
      lines.push(method);
      lines.push("");
    }
  }

  // Private fetchPage
  const listRpc = includedRpcs.find((r) => r.annotations.supportsPagination);
  if (listRpc) {
    lines.push(generateFetchPage(listRpc, config, messageMap, enumMap));
    lines.push("");
  }

  lines.push("}");
  lines.push("");

  // Converters
  lines.push("// ============================================================================");
  lines.push("// Proto ↔ Clean type converters");
  lines.push("// ============================================================================");
  lines.push("");
  lines.push("type Raw = Record<string, unknown>;");
  lines.push("");

  if (entityMsg) {
    lines.push(generateFromRaw(entityMsg, config.entity, messageMap, enumMap));
    lines.push("");

    for (const nested of findNestedEntities(entityMsg, messageMap)) {
      lines.push(generateFromRaw(nested, nested.name, messageMap, enumMap));
      lines.push("");
    }
  }

  // Only emit fromRawMoney if actually used
  if (needsMoney) {
    lines.push(`const fromRawMoney = (raw: Raw | undefined) => ({`);
    lines.push(`  amount: Number((raw?.["amount"] as string | number) ?? 0),`);
    lines.push(`  currency: (raw?.["currency"] as string) ?? "USD",`);
    lines.push(`});`);
    lines.push("");
  }

  if (needsNextAction) {
    lines.push(`const fromRawNextAction = (raw: Raw) => ({`);
    lines.push(`  method: raw["method"] as string,`);
    lines.push(`  reasonCode: raw["reasonCode"] as string | undefined,`);
    lines.push(`  reasonMessage: raw["reasonMessage"] as string | undefined,`);
    lines.push(`  requiredFields: raw["requiredFields"] as string[] | undefined,`);
    lines.push(`  requiresHumanConfirmation: raw["requiresHumanConfirmation"] as boolean | undefined,`);
    lines.push(`  suggestedDelayMs: raw["suggestedDelayMs"] as number | undefined,`);
    lines.push(`});`);
    lines.push("");
  }

  if (needsProcessorDetails) {
    lines.push(`const fromRawProcessorDetails = (raw: Raw): ProcessorDetails => ({`);
    lines.push(`  stripe: raw["stripe"] ? fromRawStripeDetails(raw["stripe"] as Raw) : undefined,`);
    lines.push(`});`);
    lines.push("");
    lines.push(`const fromRawStripeDetails = (raw: Raw) => ({`);
    lines.push(`  clientSecret: raw["clientSecret"] as string | undefined,`);
    lines.push(`  accountId: raw["accountId"] as string | undefined,`);
    lines.push(`});`);
    lines.push("");
  }

  if (needsCheckoutSessionConfigConverters) {
    lines.push(`const fromRawTheme = (raw: Raw) => ({`);
    lines.push(`  primaryColor: raw["primaryColor"] as string | undefined,`);
    lines.push(`  accentColor: raw["accentColor"] as string | undefined,`);
    lines.push(`  title: raw["title"] as string | undefined,`);
    lines.push(`});`);
    lines.push("");
    lines.push(`const fromRawPaymentConfig = (raw: Raw) => ({`);
    lines.push(`  allowedDigitalWallets: ((raw["allowedDigitalWallets"] as unknown[]) ?? []).map((v) => resolveEnum(v, DIGITAL_WALLET_MAP, DIGITAL_WALLET_TO_PROTO) ?? "apple_pay"),`);
    lines.push(`  allowedPaymentMethodTypes: ((raw["allowedPaymentMethodTypes"] as unknown[]) ?? []).map((v) => resolveEnum(v, PAYMENT_METHOD_TYPE_MAP, PAYMENT_METHOD_TYPE_TO_PROTO) ?? "card"),`);
    lines.push(`  paymentNote: raw["paymentNote"] as string | undefined,`);
    lines.push(`  externalReferenceId: raw["externalReferenceId"] as string | undefined,`);
    lines.push(`});`);
    lines.push("");
    lines.push(`const fromRawTipConfig = (raw: Raw) => ({`);
    lines.push(`  isEnabled: raw["isEnabled"] as boolean | undefined,`);
    lines.push(`  isSmartTipsEnabled: raw["isSmartTipsEnabled"] as boolean | undefined,`);
    lines.push(`  smartTipAmounts: ((raw["smartTipAmounts"] as Raw[]) ?? []).map(fromRawMoney),`);
    lines.push(`  defaultSmartTipAmount: raw["defaultSmartTipAmount"] ? fromRawMoney(raw["defaultSmartTipAmount"] as Raw) : undefined,`);
    lines.push(`  tipPercentages: (raw["tipPercentages"] as number[]) ?? [],`);
    lines.push(`  defaultTipPercentage: raw["defaultTipPercentage"] as number | undefined,`);
    lines.push(`  isCustomTipEnabled: raw["isCustomTipEnabled"] as boolean | undefined,`);
    lines.push(`});`);
    lines.push("");
    lines.push(`const fromRawCustomerConfig = (raw: Raw) => ({`);
    lines.push(`  customerId: raw["customerId"] as string | undefined,`);
    lines.push(`  externalReferenceId: raw["externalReferenceId"] as string | undefined,`);
    lines.push(`  prefilledCustomerInfo: raw["prefilledCustomerInfo"] ? fromRawPrefilledCustomerInfo(raw["prefilledCustomerInfo"] as Raw) : undefined,`);
    lines.push(`  enableAddressAutocomplete: raw["enableAddressAutocomplete"] as boolean | undefined,`);
    lines.push(`  customerNote: raw["customerNote"] as string | undefined,`);
    lines.push(`  requireEmail: raw["requireEmail"] as boolean | undefined,`);
    lines.push(`  requirePhone: raw["requirePhone"] as boolean | undefined,`);
    lines.push(`  requireShippingAddress: raw["requireShippingAddress"] as boolean | undefined,`);
    lines.push(`  requireBillingAddress: raw["requireBillingAddress"] as boolean | undefined,`);
    lines.push(`});`);
    lines.push("");
    lines.push(`const fromRawPrefilledCustomerInfo = (raw: Raw) => ({`);
    lines.push(`  shippingAddress: raw["shippingAddress"] ? fromRawAddress(raw["shippingAddress"] as Raw) : undefined,`);
    lines.push(`  billingAddress: raw["billingAddress"] ? fromRawAddress(raw["billingAddress"] as Raw) : undefined,`);
    lines.push(`  email: raw["email"] as string | undefined,`);
    lines.push(`  phoneNumber: raw["phoneNumber"] as string | undefined,`);
    lines.push(`});`);
    lines.push("");
    lines.push(`const fromRawTaxConfig = (raw: Raw) => ({`);
    lines.push(`  isEnabled: raw["isEnabled"] as boolean | undefined,`);
    lines.push(`});`);
    lines.push("");
    lines.push(`const fromRawRedirects = (raw: Raw) => ({`);
    lines.push(`  successRedirectUrl: raw["successRedirectUrl"] as string | undefined,`);
    lines.push(`  onLoadRedirectUrl: raw["onLoadRedirectUrl"] as string | undefined,`);
    lines.push(`  cancelRedirectUrl: raw["cancelRedirectUrl"] as string | undefined,`);
    lines.push(`});`);
    lines.push("");
    lines.push(`const fromRawLegalConfig = (raw: Raw) => ({`);
    lines.push(`  termsOfServiceUrl: raw["termsOfServiceUrl"] as string | undefined,`);
    lines.push(`  requiresTermsOfService: raw["requiresTermsOfService"] as boolean | undefined,`);
    lines.push(`  refundPolicyUrl: raw["refundPolicyUrl"] as string | undefined,`);
    lines.push(`  shippingPolicyUrl: raw["shippingPolicyUrl"] as string | undefined,`);
    lines.push(`  contractUrl: raw["contractUrl"] as string | undefined,`);
    lines.push(`});`);
    lines.push("");
    lines.push(`const fromRawExpirationConfig = (raw: Raw) => ({`);
    lines.push(`  expirationSeconds: raw["expirationSeconds"] != null ? Number(raw["expirationSeconds"]) : undefined,`);
    lines.push(`  expirationUrl: raw["expirationUrl"] as string | undefined,`);
    lines.push(`});`);
    lines.push("");
    lines.push(`const fromRawCustomTextConfig = (raw: Raw) => ({`);
    lines.push(`  shippingAddressLabel: raw["shippingAddressLabel"] as string | undefined,`);
    lines.push(`  checkoutButtonText: raw["checkoutButtonText"] as string | undefined,`);
    lines.push(`});`);
    lines.push("");
    lines.push(`const fromRawCouponConfig = (raw: Raw) => ({`);
    lines.push(`  isEnabled: raw["isEnabled"] as boolean | undefined,`);
    lines.push(`  autoApplyCouponCodes: (raw["autoApplyCouponCodes"] as string[]) ?? [],`);
    lines.push(`});`);
    lines.push("");
  }

  if (needsAddress || needsCheckoutSessionConfigConverters) {
    lines.push(`const fromRawAddress = (raw: Raw) => ({`);
    lines.push(`  line1: raw["line1"] as string,`);
    lines.push(`  line2: raw["line2"] as string | undefined,`);
    lines.push(`  country: raw["country"] as string,`);
    lines.push(`  city: raw["city"] as string,`);
    lines.push(`  state: raw["state"] as string,`);
    lines.push(`  postalCode: raw["postalCode"] as string,`);
    lines.push(`});`);
    lines.push("");
  }

  if (needsAddressToProto) {
    lines.push(`const toProtoAddress = (addr: { line1: string; line2?: string; country: string; city: string; state: string; postalCode: string }) => ({`);
    lines.push(`  line1: addr.line1,`);
    lines.push(`  line2: addr.line2,`);
    lines.push(`  country: addr.country,`);
    lines.push(`  city: addr.city,`);
    lines.push(`  state: addr.state,`);
    lines.push(`  postalCode: addr.postalCode,`);
    lines.push(`});`);
    lines.push("");
  }

  if (needsPaymentLinkCustomFieldToProto) {
    lines.push(`const toProtoPaymentLinkCustomField = (field: PaymentLinkCustomField) => ({`);
    lines.push(`  key: field.key,`);
    lines.push(`  label: field.label,`);
    lines.push(`  type: PAYMENT_LINK_CUSTOM_FIELD_TYPE_TO_PROTO[field.type],`);
    lines.push(`  isRequired: field.isRequired,`);
    lines.push(`  placeholder: field.placeholder,`);
    lines.push(`  options: field.options,`);
    lines.push(`  maxLength: field.maxLength,`);
    lines.push(`  sortOrder: field.sortOrder,`);
    lines.push(`});`);
    lines.push("");
  }

  return lines.join("\n");
}

// ============================================================================
// Method generation
// ============================================================================

function generateMethod(
  rpc: ProtoRPC,
  config: ServiceConfig,
  messageMap: Map<string, ProtoMessage>,
  enumMap: Map<string, ProtoEnum>,
): string | null {
  const requestMsg = messageMap.get(rpc.requestType);
  const responseMsg = messageMap.get(rpc.responseType);
  if (!requestMsg || !responseMsg) return null;

  const entityField = findEntityFieldInResponse(responseMsg, config.entity);

  // List
  if (rpc.annotations.supportsPagination) {
    const paramsType = deriveParamsTypeNameFromRpc(rpc, config.entity, requestMsg) ?? `${config.entity}ListParams`;
    return [
      `  list(params: ${paramsType} = {}): FlintList<${config.entity}> {`,
      `    return this.paginate((pageToken) => this.fetchPage(params, pageToken));`,
      `  }`,
    ].join("\n");
  }

  // Get by X (e.g., GetCustomerByEmail, GetItemBySKU)
  const byMatch = rpc.name.match(/^Get\w+By(\w+)$/);
  if (byMatch) {
    const byField = byMatch[1]!;
    const methodName = `getBy${byField}`;
    const paramName = byField.charAt(0).toLowerCase() + byField.slice(1);
    const firstField = requestMsg.fields[0];
    return [
      `  async ${methodName}(${paramName}: string): Promise<${config.entity}> {`,
      `    const res = await this.rpc<Record<string, unknown>, { ${entityField}: Raw }>(`,
      `      SERVICE,`,
      `      "${rpc.name}",`,
      `      { ${snakeToCamel(firstField?.name ?? paramName)}: ${paramName} }`,
      `    );`,
      `    return fromRaw${config.entity}(res.${entityField});`,
      `  }`,
    ].join("\n");
  }

  // Get (single ID lookup)
  if (rpc.annotations.operationType === "OPERATION_TYPE_READ" && rpc.name.startsWith("Get")) {
    const methodName = deriveMethodName(rpc.name, config.entity);
    if (!entityField) return "";

    if (isSimpleGetRequest(requestMsg)) {
      const idField = requestMsg.fields[0];
      if (!idField) return null;
      const idParam = snakeToCamel(idField.name);
      return [
        `  async ${methodName}(${idParam}: string): Promise<${config.entity}> {`,
        `    const res = await this.rpc<Record<string, unknown>, { ${entityField}: Raw }>(`,
        `      SERVICE,`,
        `      "${rpc.name}",`,
        `      { ${idParam} }`,
        `    );`,
        `    return fromRaw${config.entity}(res.${entityField});`,
        `  }`,
      ].join("\n");
    }

    const paramsType = deriveParamsTypeNameFromRpc(rpc, config.entity, requestMsg);
    const hasRequired = hasRequiredRequestFields(requestMsg, requestMsg.fields);
    return [
      `  async ${methodName}(params: ${paramsType}${hasRequired ? "" : " = {}"}): Promise<${config.entity}> {`,
      `    const res = await this.rpc<Record<string, unknown>, { ${entityField}: Raw }>(`,
      `      SERVICE,`,
      `      "${rpc.name}",`,
      `      {`,
      ...requestMsg.fields
        .filter((field) => !field.isOutputOnly && !field.isServiceOnly && !field.isInternal)
        .map((field) => `        ${genReqField(field, "params", enumMap)}`),
      `      }`,
      `    );`,
      `    return fromRaw${config.entity}(res.${entityField});`,
      `  }`,
    ].join("\n");
  }

  // Create — only for Create<Entity> RPCs
  if (rpc.annotations.operationType === "OPERATION_TYPE_CREATE" && rpc.name === `Create${config.entity}`) {
    return generateCreateOrAction(rpc, config, requestMsg, entityField, enumMap, messageMap, "create");
  }

  // Update — only for Update<Entity> RPCs (not UpdateLineItem, UpdateTip, etc.)
  if (rpc.annotations.operationType === "OPERATION_TYPE_UPDATE" && rpc.name === `Update${config.entity}`) {
    return generateCreateOrAction(rpc, config, requestMsg, entityField, enumMap, messageMap, "update");
  }

  // Delete — only for Delete<Entity> RPCs
  if (rpc.annotations.operationType === "OPERATION_TYPE_DELETE" && rpc.name === `Delete${config.entity}`) {
    const idField = requestMsg.fields.find((f) => f.name.endsWith("_id") && !f.optional);
    const idParam = snakeToCamel(idField?.name ?? toSnakeCase(config.entity) + "_id");
    if (!entityField) {
      return [
        `  async del(${idParam}: string): Promise<void> {`,
        `    await this.rpc<Record<string, unknown>, Record<string, unknown>>(`,
        `      SERVICE,`,
        `      "${rpc.name}",`,
        `      { ${idParam} }`,
        `    );`,
        `  }`,
      ].join("\n");
    }
    return [
      `  async del(${idParam}: string): Promise<${config.entity}> {`,
      `    const res = await this.rpc<Record<string, unknown>, { ${entityField}: Raw }>(`,
      `      SERVICE,`,
      `      "${rpc.name}",`,
      `      { ${idParam} }`,
      `    );`,
      `    return fromRaw${config.entity}(res.${entityField});`,
      `  }`,
    ].join("\n");
  }

  // Action (Close, Cancel, Pay, Add*, Remove*, etc.)
  return generateCreateOrAction(rpc, config, requestMsg, entityField, enumMap, messageMap);
}

function generateCreateOrAction(
  rpc: ProtoRPC,
  config: ServiceConfig,
  requestMsg: ProtoMessage,
  entityField: string,
  enumMap: Map<string, ProtoEnum>,
  messageMap: Map<string, ProtoMessage>,
  overrideName?: string,
): string {
  const lines: string[] = [];
  const methodName = overrideName ?? deriveMethodName(rpc.name, config.entity);
  const returnsEntity = entityField != null;
  const responseType = returnsEntity ? `{ ${entityField}: Raw }` : `Record<string, unknown>`;
  const returnType = returnsEntity ? `Promise<${config.entity}>` : `Promise<void>`;

  // Find the primary ID field (first non-optional *_id field)
  const idField = requestMsg.fields.find((f) => f.name.endsWith("_id") && !f.optional);

  // Check if there are non-ID, non-infrastructure fields
  const paramsFields = requestMsg.fields.filter(
    (f) =>
      f !== idField &&
      f.name !== "idempotency_key" &&
      !isFieldMask(f.type) &&
      !f.isOutputOnly &&
      !f.isServiceOnly &&
      !f.isInternal,
  );
  const hasOneofs = requestMsg.oneofs.length > 0;
  const hasFieldMask = requestMsg.fields.some((f) => isFieldMask(f.type));
  const hasIdempotency = requestMsg.fields.some((f) => f.name === "idempotency_key");
  const hasExtraParams = paramsFields.length > 0 || hasOneofs || hasFieldMask || hasIdempotency;

  const isCreate = overrideName === "create";
  const isUpdate = overrideName === "update";

  // Use the same naming logic as the types generator
  const paramsType = deriveParamsTypeNameFromRpc(rpc, config.entity, requestMsg);

  if (isCreate && paramsType) {
    const hasRequired = hasRequiredRequestFields(requestMsg, requestMsg.fields);
    if (!entityField) return "";
    lines.push(`  async create(params: ${paramsType}${hasRequired ? "" : " = {}"}): Promise<${config.entity}> {`);
    lines.push(`    const res = await this.rpc<Record<string, unknown>, { ${entityField}: Raw }>(`);
    lines.push(`      SERVICE,`);
    lines.push(`      "${rpc.name}",`);
    lines.push(`      {`);
    for (const field of requestMsg.fields) {
      if (field.isOutputOnly || field.isServiceOnly || field.isInternal) continue;
      lines.push(`        ${genReqField(field, "params", enumMap)}`);
    }
    for (const oneof of requestMsg.oneofs) {
      for (const field of oneof.fields) {
        lines.push(`        ${genReqField(field, "params", enumMap)}`);
      }
    }
    lines.push(`      }`);
    lines.push(`    );`);
    lines.push(`    return fromRaw${config.entity}(res.${entityField});`);
    lines.push(`  }`);
    return lines.join("\n");
  }

  if (isUpdate && idField && paramsType) {
    const idParam = snakeToCamel(idField.name);
    if (!entityField) return null;
    lines.push(`  async update(${idParam}: string, params: ${paramsType}): Promise<${config.entity}> {`);
    lines.push(`    const res = await this.rpc<Record<string, unknown>, { ${entityField}: Raw }>(`);
    lines.push(`      SERVICE,`);
    lines.push(`      "${rpc.name}",`);
    lines.push(`      {`);
    lines.push(`        ${idParam},`);
    for (const field of requestMsg.fields) {
      if (field === idField) continue;
      if (field.isOutputOnly || field.isServiceOnly || field.isInternal) continue;
      lines.push(`        ${genReqField(field, "params", enumMap)}`);
    }
    for (const oneof of requestMsg.oneofs) {
      for (const field of oneof.fields) {
        lines.push(`        ${genReqField(field, "params", enumMap)}`);
      }
    }
    lines.push(`      }`);
    lines.push(`    );`);
    lines.push(`    return fromRaw${config.entity}(res.${entityField});`);
    lines.push(`  }`);
    return lines.join("\n");
  }

  // Action method
  if (idField && !hasExtraParams) {
    // Simple ID-only action
    const idParam = snakeToCamel(idField.name);
    lines.push(`  async ${methodName}(${idParam}: string): ${returnType} {`);
    lines.push(`    ${returnsEntity ? "const res = await " : "await "}this.rpc<Record<string, unknown>, ${responseType}>(`);
    lines.push(`      SERVICE,`);
    lines.push(`      "${rpc.name}",`);
    lines.push(`      { ${idParam} }`);
    lines.push(`    );`);
    if (returnsEntity) {
      lines.push(`    return fromRaw${config.entity}(res.${entityField});`);
    }
    lines.push(`  }`);
    return lines.join("\n");
  }

  if (idField && hasExtraParams && paramsType) {
    const idParam = snakeToCamel(idField.name);
    const hasRequired =
      hasRequiredRequestFields(
        requestMsg,
        paramsFields,
      ) ||
      hasOneofs;
    lines.push(`  async ${methodName}(${idParam}: string, params: ${paramsType}${hasRequired ? "" : " = {}"}): ${returnType} {`);
    lines.push(`    ${returnsEntity ? "const res = await " : "await "}this.rpc<Record<string, unknown>, ${responseType}>(`);
    lines.push(`      SERVICE,`);
    lines.push(`      "${rpc.name}",`);
    lines.push(`      {`);
    lines.push(`        ${idParam},`);
    for (const field of requestMsg.fields) {
      if (field === idField) continue;
      if (field.isOutputOnly || field.isServiceOnly || field.isInternal) continue;
      lines.push(`        ${genReqField(field, "params", enumMap)}`);
    }
    for (const oneof of requestMsg.oneofs) {
      for (const field of oneof.fields) {
        lines.push(`        ${genReqField(field, "params", enumMap)}`);
      }
    }
    lines.push(`      }`);
    lines.push(`    );`);
    if (returnsEntity) {
      lines.push(`    return fromRaw${config.entity}(res.${entityField});`);
    }
    lines.push(`  }`);
    return lines.join("\n");
  }

  // No ID field — params-only action (e.g., SavePaymentMethod)
  if (hasExtraParams && paramsType) {
    lines.push(`  async ${methodName}(params: ${paramsType}): ${returnType} {`);
    lines.push(`    ${returnsEntity ? "const res = await " : "await "}this.rpc<Record<string, unknown>, ${responseType}>(`);
    lines.push(`      SERVICE,`);
    lines.push(`      "${rpc.name}",`);
    lines.push(`      {`);
    for (const field of requestMsg.fields) {
      if (field.isOutputOnly || field.isServiceOnly || field.isInternal) continue;
      lines.push(`        ${genReqField(field, "params", enumMap)}`);
    }
    lines.push(`      }`);
    lines.push(`    );`);
    if (returnsEntity) {
      lines.push(`    return fromRaw${config.entity}(res.${entityField});`);
    }
    lines.push(`  }`);
    return lines.join("\n");
  }

  return lines.join("\n");
}

function generateFetchPage(
  rpc: ProtoRPC,
  config: ServiceConfig,
  messageMap: Map<string, ProtoMessage>,
  enumMap: Map<string, ProtoEnum>,
): string {
  const lines: string[] = [];
  const requestMsg = messageMap.get(rpc.requestType);
  const responseMsg = messageMap.get(rpc.responseType);
  if (!requestMsg || !responseMsg) return "";

  const listField = findListFieldInResponse(responseMsg, config.entity);
  const paramsType = deriveParamsTypeNameFromRpc(rpc, config.entity, requestMsg) ?? `${config.entity}ListParams`;

  lines.push(`  private async fetchPage(params: ${paramsType}, pageToken?: string) {`);
  lines.push(`    const res = await this.rpc<`);
  lines.push(`      Record<string, unknown>,`);
  lines.push(`      { ${listField}?: Raw[]; nextPageToken?: string }`);
  lines.push(`    >(SERVICE, "${rpc.name}", {`);

  for (const field of requestMsg.fields) {
    if (field.isOutputOnly || field.isServiceOnly || field.isInternal) continue;
    const cn = snakeToCamel(field.name);

    if (field.name === "page_size") {
      lines.push(`      pageSize: params.limit,`);
    } else if (field.name === "page_token") {
      lines.push(`      pageToken: pageToken ?? params.pageToken,`);
    } else if (isFieldMask(field.type)) {
      // In list requests, FieldMask is an optional readMask
      lines.push(`      ${cn}: params.readMask ? this.toFieldMask(params.readMask) : undefined,`);
    } else if (isTimestamp(field.type)) {
      lines.push(`      ${cn}: this.toTimestamp(params.${cn}),`);
    } else if (field.repeated && (isCommonEnum(field.type) || enumMap.has(getShortType(field.type)))) {
      const mapName = COMMON_ENUM_TO_PROTO[field.type] ?? `${toConstName(getShortType(field.type))}_TO_PROTO`;
      lines.push(`      ${cn}: params.${cn}?.map((v: string) => ${mapName}[v]),`);
    } else if (isCommonEnum(field.type) && COMMON_ENUM_TO_PROTO[field.type]) {
      lines.push(`      ${cn}: params.${cn} ? ${COMMON_ENUM_TO_PROTO[field.type]}[params.${cn}] : undefined,`);
    } else if (enumMap.has(getShortType(field.type))) {
      lines.push(`      ${cn}: params.${cn} ? ${toConstName(getShortType(field.type))}_TO_PROTO[params.${cn}] : undefined,`);
    } else {
      lines.push(`      ${cn}: params.${cn},`);
    }
  }

  lines.push(`    });`);
  lines.push("");
  lines.push(`    return this.toPage(`);
  lines.push(`      (res.${listField} ?? []).map(fromRaw${config.entity}),`);
  lines.push(`      res.nextPageToken`);
  lines.push(`    );`);
  lines.push(`  }`);
  return lines.join("\n");
}

// ============================================================================
// Request field line generation
// ============================================================================

function genReqField(
  field: ProtoField,
  source: string,
  enumMap: Map<string, ProtoEnum>,
): string {
  const cn = snakeToCamel(field.name);

  if (field.name === "idempotency_key")
    return `idempotencyKey: this.ensureIdempotencyKey(${source}.idempotencyKey),`;
  if (field.name === "read_mask")
    return `readMask: ${source}.readMask ? this.toFieldMask(${source}.readMask) : undefined,`;
  if (isFieldMask(field.type))
    return `updateMask: this.toFieldMask(${source}.updateMask),`;
  if (isTimestamp(field.type))
    return `${cn}: this.toTimestamp(${source}.${cn}),`;
  if (field.type === "flint.v1.Address" || field.type === "Address")
    return `${cn}: ${source}.${cn} ? toProtoAddress(${source}.${cn}) : undefined,`;
  if (field.type === "PaymentLinkCustomField") {
    return field.repeated
      ? `${cn}: ${source}.${cn}?.map(toProtoPaymentLinkCustomField),`
      : `${cn}: ${source}.${cn} ? toProtoPaymentLinkCustomField(${source}.${cn}) : undefined,`;
  }

  // For repeated enum fields, map the array
  const st = getShortType(field.type);
  if (field.repeated && (enumMap.has(st) || COMMON_ENUM_TO_PROTO[field.type])) {
    const mapName = COMMON_ENUM_TO_PROTO[field.type] ?? `${toConstName(st)}_TO_PROTO`;
    return `${cn}: ${source}.${cn}?.map((v: string) => ${mapName}[v]),`;
  }

  if (enumMap.has(st))
    return `${cn}: ${source}.${cn} ? ${toConstName(st)}_TO_PROTO[${source}.${cn}] : undefined,`;
  if (COMMON_ENUM_TO_PROTO[field.type])
    return `${cn}: ${source}.${cn} ? ${COMMON_ENUM_TO_PROTO[field.type]}[${source}.${cn}] : undefined,`;

  return `${cn}: ${source}.${cn},`;
}

// ============================================================================
// fromRaw converter generation
// ============================================================================

function generateFromRaw(
  msg: ProtoMessage,
  typeName: string,
  messageMap: Map<string, ProtoMessage>,
  enumMap: Map<string, ProtoEnum>,
): string {
  const lines: string[] = [];
  lines.push(`const fromRaw${typeName} = (raw: Raw): ${typeName} => ({`);

  for (const field of msg.fields) {
    if (field.isInternal) continue;
    if (field.number === 100 && field.type.includes("ResponseMeta")) continue;
    const line = genFromRawField(field, messageMap, enumMap, false);
    if (line) lines.push(`  ${line}`);
  }

  for (const oneof of msg.oneofs) {
    for (const field of oneof.fields) {
      if (field.isInternal) continue;
      const line = genFromRawField(field, messageMap, enumMap, true);
      if (line) lines.push(`  ${line}`);
    }
  }

  lines.push(`});`);
  return lines.join("\n");
}

function genFromRawField(
  field: ProtoField,
  messageMap: Map<string, ProtoMessage>,
  enumMap: Map<string, ProtoEnum>,
  isOneof: boolean,
): string | null {
  const cn = snakeToCamel(field.name);
  const opt = field.optional || isOneof;
  const st = getShortType(field.type);

  // Map fields — always default to {} so the entity type can be non-optional
  if (field.type === "map") {
    return genFromRawMapField(field, cn, messageMap, enumMap);
  }
  if (isMoney(field.type)) {
    if (field.repeated) return `${cn}: ((raw["${cn}"] as Raw[]) ?? []).map(fromRawMoney),`;
    return opt
      ? `${cn}: raw["${cn}"] ? fromRawMoney(raw["${cn}"] as Raw) : undefined,`
      : `${cn}: fromRawMoney(raw["${cn}"] as Raw),`;
  }
  if (isTimestamp(field.type))
    return opt
      ? `${cn}: raw["${cn}"] ? new Date(raw["${cn}"] as string) : undefined,`
      : `${cn}: new Date(raw["${cn}"] as string),`;
  if (field.type === "flint.v1.Address" || field.type === "Address")
    return opt
      ? `${cn}: raw["${cn}"] ? fromRawAddress(raw["${cn}"] as Raw) : undefined,`
      : `${cn}: fromRawAddress(raw["${cn}"] as Raw),`;
  if (field.type === "flint.v1.NextAction" || field.type === "NextAction") {
    if (field.repeated) return `${cn}: ((raw["${cn}"] as Raw[]) ?? []).map(fromRawNextAction),`;
    return opt
      ? `${cn}: raw["${cn}"] ? fromRawNextAction(raw["${cn}"] as Raw) : undefined,`
      : `${cn}: fromRawNextAction(raw["${cn}"] as Raw),`;
  }
  if (CHECKOUT_CONFIG_TYPES.has(field.type))
    return opt
      ? `${cn}: raw["${cn}"] ? fromRaw${field.type}(raw["${cn}"] as Raw) : undefined,`
      : `${cn}: fromRaw${field.type}((raw["${cn}"] as Raw) ?? {}),`;
  if (field.type === "flint.v1.ProcessorDetails" || field.type === "ProcessorDetails")
    return opt
      ? `${cn}: raw["${cn}"] ? fromRawProcessorDetails(raw["${cn}"] as Raw) : undefined,`
      : `${cn}: fromRawProcessorDetails((raw["${cn}"] as Raw) ?? {}),`;

  if (enumMap.has(st)) {
    const mapName = `${toConstName(st)}_MAP`;
    const toProtoName = `${toConstName(st)}_TO_PROTO`;
    const defaultVal = getEnumDefault(enumMap.get(st)!, st);
    if (field.repeated) return `${cn}: ((raw["${cn}"] as unknown[]) ?? []).map((v) => resolveEnum(v, ${mapName}, ${toProtoName}) ?? "${defaultVal}"),`;
    return opt
      ? `${cn}: resolveEnum(raw["${cn}"], ${mapName}, ${toProtoName}),`
      : `${cn}: resolveEnum(raw["${cn}"], ${mapName}, ${toProtoName}) ?? "${defaultVal}",`;
  }

  if (isCommonEnum(field.type)) {
    const mapName = COMMON_ENUM_FROM_PROTO[field.type]!;
    const toProtoName = COMMON_ENUM_TO_PROTO[field.type]!;
    const def = COMMON_ENUM_DEFAULTS[field.type]!;
    if (field.repeated) return `${cn}: ((raw["${cn}"] as unknown[]) ?? []).map((v) => resolveEnum(v, ${mapName}, ${toProtoName}) ?? "${def}"),`;
    return opt
      ? `${cn}: resolveEnum(raw["${cn}"], ${mapName}, ${toProtoName}),`
      : `${cn}: resolveEnum(raw["${cn}"], ${mapName}, ${toProtoName}) ?? "${def}",`;
  }

  if (messageMap.has(st)) {
    if (field.repeated) return `${cn}: ((raw["${cn}"] as Raw[]) ?? []).map(fromRaw${st}),`;
    return opt
      ? `${cn}: raw["${cn}"] ? fromRaw${st}(raw["${cn}"] as Raw) : undefined,`
      : `${cn}: fromRaw${st}((raw["${cn}"] as Raw) ?? {}),`;
  }

  if (field.type === "int64" || field.type === "uint64")
    return opt
      ? `${cn}: raw["${cn}"] != null ? Number(raw["${cn}"]) : undefined,`
      : `${cn}: Number(raw["${cn}"] ?? 0),`;

  // Handle all repeated scalar types
  if (field.repeated) {
    const cast = field.type === "bool" ? "boolean" : field.type === "double" || field.type === "float" || field.type === "int32" || field.type === "int64" || field.type === "uint64" ? "number" : "string";
    return `${cn}: (raw["${cn}"] as ${cast}[]) ?? [],`;
  }

  const cast = field.type === "bool" ? "boolean" : field.type === "double" || field.type === "float" || field.type === "int32" ? "number" : "string";
  return opt
    ? `${cn}: raw["${cn}"] as ${cast} | undefined,`
    : `${cn}: raw["${cn}"] as ${cast},`;
}

// ============================================================================
// Helpers
// ============================================================================

function getEnumDefault(e: ProtoEnum, enumName: string): string {
  if (ENUM_ZERO_VALUE_ALIASES[enumName]) {
    return ENUM_ZERO_VALUE_ALIASES[enumName]!;
  }
  const first = e.values.find((v) => v.number !== 0);
  return first ? stripEnumPrefix(first.name, enumName) : "unknown";
}

function findEntityFieldInResponse(responseMsg: ProtoMessage, entityName: string): string | null {
  for (const field of responseMsg.fields) {
    if (field.number === 100) continue;
    if (getShortType(field.type) === entityName && !field.repeated) {
      return snakeToCamel(field.name);
    }
  }
  return null;
}

function findListFieldInResponse(responseMsg: ProtoMessage, entityName: string): string {
  for (const field of responseMsg.fields) {
    if (field.repeated && getShortType(field.type) === entityName) {
      return snakeToCamel(field.name);
    }
  }
  // Fallback: pluralize
  const base = entityName.charAt(0).toLowerCase() + entityName.slice(1);
  return base + "s";
}

function findNestedEntities(msg: ProtoMessage, messageMap: Map<string, ProtoMessage>): ProtoMessage[] {
  const result: ProtoMessage[] = [];
  const seen = new Set<string>();

  const collect = (m: ProtoMessage) => {
    for (const field of [...m.fields, ...m.oneofs.flatMap((o) => o.fields)]) {
      const referencedType = field.type === "map" ? (field.mapValueType ?? "") : field.type;
      const st = getShortType(referencedType);
      if (messageMap.has(st) && !seen.has(st) && st !== msg.name) {
        // Skip common well-known types that have their own helper converters
        if (st === "Money" || st === "PositiveMoney" || st === "SignedMoney" ||
            st === "Address" || st === "NextAction" || st === "ResponseMeta") continue;
        seen.add(st);
        const nested = messageMap.get(st)!;
        result.push(nested);
        collect(nested);
      }
    }
  };

  collect(msg);
  return result;
}

function hasType(msg: ProtoMessage, type: string, messageMap: Map<string, ProtoMessage>): boolean {
  for (const f of msg.fields) {
    if (f.type === type) return true;
  }
  for (const nested of findNestedEntities(msg, messageMap)) {
    for (const f of nested.fields) {
      if (f.type === type) return true;
    }
  }
  return false;
}

function hasMoneyType(msg: ProtoMessage, messageMap: Map<string, ProtoMessage>): boolean {
  const checkFields = (m: ProtoMessage): boolean => {
    for (const f of [...m.fields, ...m.oneofs.flatMap((o) => o.fields)]) {
      if (isMoney(f.type)) return true;
    }
    return false;
  };
  if (checkFields(msg)) return true;
  for (const nested of findNestedEntities(msg, messageMap)) {
    if (checkFields(nested)) return true;
  }
  return false;
}

function hasCheckoutConfigType(msg: ProtoMessage, messageMap: Map<string, ProtoMessage>): boolean {
  const checkFields = (m: ProtoMessage): boolean => {
    for (const f of [...m.fields, ...m.oneofs.flatMap((o) => o.fields)]) {
      if (CHECKOUT_CONFIG_TYPES.has(f.type)) return true;
    }
    return false;
  };
  if (checkFields(msg)) return true;
  for (const nested of findNestedEntities(msg, messageMap)) {
    if (checkFields(nested)) return true;
  }
  return false;
}

function hasEnumType(
  msg: ProtoMessage,
  messageMap: Map<string, ProtoMessage>,
  enumMap: Map<string, ProtoEnum>,
): boolean {
  const checkFields = (m: ProtoMessage): boolean => {
    for (const f of [...m.fields, ...m.oneofs.flatMap((o) => o.fields)]) {
      if (isCommonEnum(f.type) || enumMap.has(getShortType(f.type))) return true;
    }
    return false;
  };
  if (checkFields(msg)) return true;
  for (const nested of findNestedEntities(msg, messageMap)) {
    if (checkFields(nested)) return true;
  }
  return false;
}

function hasAddressInRequests(rpcs: ProtoRPC[], messageMap: Map<string, ProtoMessage>): boolean {
  for (const rpc of rpcs) {
    const reqMsg = messageMap.get(rpc.requestType);
    if (reqMsg) {
      for (const f of reqMsg.fields) {
        if (f.type === "flint.v1.Address") return true;
      }
    }
  }
  return false;
}

function hasRequestFieldType(
  rpcs: ProtoRPC[],
  messageMap: Map<string, ProtoMessage>,
  typeName: string,
): boolean {
  for (const rpc of rpcs) {
    const reqMsg = messageMap.get(rpc.requestType);
    if (!reqMsg) continue;
    for (const field of reqMsg.fields) {
      if (getShortType(field.type) === typeName) {
        return true;
      }
    }
    for (const oneof of reqMsg.oneofs) {
      for (const field of oneof.fields) {
        if (getShortType(field.type) === typeName) {
          return true;
        }
      }
    }
  }
  return false;
}

function genFromRawMapField(
  field: ProtoField,
  camelName: string,
  messageMap: Map<string, ProtoMessage>,
  enumMap: Map<string, ProtoEnum>,
): string {
  const valueType = field.mapValueType ?? "string";
  const shortValueType = getShortType(valueType);
  const rawAccess = `(raw["${camelName}"] as Record<string, unknown>) ?? {}`;

  if (valueType === "string") {
    return `${camelName}: (raw["${camelName}"] as Record<string, string>) ?? {},`;
  }

  if (valueType === "bool") {
    return `${camelName}: Object.fromEntries(Object.entries(${rawAccess}).map(([key, value]) => [key, Boolean(value)])),`;
  }

  if (valueType === "int32" || valueType === "int64" || valueType === "uint32" || valueType === "uint64" || valueType === "double" || valueType === "float") {
    return `${camelName}: Object.fromEntries(Object.entries(${rawAccess}).map(([key, value]) => [key, Number(value)])),`;
  }

  if (isMoney(valueType)) {
    return `${camelName}: Object.fromEntries(Object.entries(${rawAccess}).map(([key, value]) => [key, fromRawMoney(value as Raw)])),`;
  }

  if (messageMap.has(shortValueType)) {
    return `${camelName}: Object.fromEntries(Object.entries(${rawAccess}).map(([key, value]) => [key, fromRaw${shortValueType}(value as Raw)])),`;
  }

  if (enumMap.has(shortValueType)) {
    const mapName = `${toConstName(shortValueType)}_MAP`;
    const toProtoName = `${toConstName(shortValueType)}_TO_PROTO`;
    const defaultVal = getEnumDefault(enumMap.get(shortValueType)!, shortValueType);
    return `${camelName}: Object.fromEntries(Object.entries(${rawAccess}).map(([key, value]) => [key, resolveEnum(value, ${mapName}, ${toProtoName}) ?? "${defaultVal}"])),`;
  }

  if (isCommonEnum(valueType)) {
    const mapName = COMMON_ENUM_FROM_PROTO[valueType]!;
    const toProtoName = COMMON_ENUM_TO_PROTO[valueType]!;
    const defaultVal = COMMON_ENUM_DEFAULTS[valueType]!;
    return `${camelName}: Object.fromEntries(Object.entries(${rawAccess}).map(([key, value]) => [key, resolveEnum(value, ${mapName}, ${toProtoName}) ?? "${defaultVal}"])),`;
  }

  return `${camelName}: ${rawAccess} as Record<string, unknown>,`;
}

function scanEntityForImports(
  msg: ProtoMessage,
  messageMap: Map<string, ProtoMessage>,
  enumMap: Map<string, ProtoEnum>,
  commonImports: Set<string>,
  enumMapImports: Set<string>,
) {
  const scan = (m: ProtoMessage) => {
    for (const f of [...m.fields, ...m.oneofs.flatMap((o) => o.fields)]) {
      if (COMMON_ENUM_FROM_PROTO[f.type]) commonImports.add(COMMON_ENUM_FROM_PROTO[f.type]!);
      if (COMMON_ENUM_TO_PROTO[f.type]) commonImports.add(COMMON_ENUM_TO_PROTO[f.type]!);
      const st = getShortType(f.type);
      if (enumMap.has(st)) {
        enumMapImports.add(`${toConstName(st)}_MAP`);
        enumMapImports.add(`${toConstName(st)}_TO_PROTO`);
      }
    }
  };
  scan(msg);
  for (const nested of findNestedEntities(msg, messageMap)) scan(nested);
}

function deriveMethodName(rpcName: string, entityName: string): string {
  if (rpcName === `Get${entityName}`) return "get";
  if (rpcName === `Create${entityName}`) return "create";
  if (rpcName === `Update${entityName}`) return "update";
  if (rpcName === `Delete${entityName}`) return "del";
  if (rpcName === `Close${entityName}`) return "close";
  if (rpcName === `Cancel${entityName}`) return "cancel";
  if (rpcName === `Pause${entityName}`) return "pause";
  if (rpcName === `Resume${entityName}`) return "resume";

  // Verb+Entity → verb (e.g., PayOrder → pay)
  const verbEntityMatch = rpcName.match(new RegExp(`^(\\w+?)${entityName}$`));
  if (verbEntityMatch) {
    return verbEntityMatch[1]!.charAt(0).toLowerCase() + verbEntityMatch[1]!.slice(1);
  }

  // Sub-entity action: AddLineItems → addLineItems
  return rpcName.charAt(0).toLowerCase() + rpcName.slice(1);
}

function toSnakeCase(s: string): string {
  return s.replace(/([A-Z])/g, "_$1").toLowerCase().replace(/^_/, "");
}
