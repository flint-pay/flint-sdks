import type {
  ProtoEnum,
  ProtoField,
  ProtoMessage,
  ProtoOneof,
  ProtoService,
  TypeRegistry,
} from "../proto-parser";

// ============================================================================
// Configuration
// ============================================================================

export type ServiceConfig = {
  proto: string;
  sdk: string;
  entity: string;
  protoFile: string;
  excludeRpcs?: string[];
};

// ============================================================================
// Name helpers
// ============================================================================

export function snakeToCamel(s: string): string {
  return s.replace(/_([a-z0-9])/g, (_, c: string) => c.toUpperCase());
}

export function toConstName(pascalName: string): string {
  return pascalName
    .replace(/([A-Z])/g, "_$1")
    .toUpperCase()
    .replace(/^_/, "");
}

export function kebabCase(s: string): string {
  // camelCase → kebab-case
  return s.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
}

/**
 * Strip the common prefix from a proto enum value name.
 */
export function stripEnumPrefix(valueName: string, enumName: string): string {
  const prefix =
    enumName
      .replace(/([A-Z])/g, "_$1")
      .toUpperCase()
      .replace(/^_/, "") + "_";

  if (valueName.startsWith(prefix)) {
    return valueName.slice(prefix.length).toLowerCase();
  }
  return valueName.toLowerCase();
}

const ENUM_ZERO_VALUE_ALIASES: Record<string, string> = {
  PaymentLinkMode: "standard",
};

const OPTIONAL_ENTITY_FIELDS: Record<string, string[]> = {
  PaymentLinkLineItem: [
    "quantity",
    "key",
    "allow_quantity_adjustment",
    "allow_amount_adjustment",
  ],
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
// Proto type → TypeScript type mapping
// ============================================================================

const MONEY_TYPES = new Set([
  "Money",
  "PositiveMoney",
  "SignedMoney",
  "flint.v1.Money",
  "flint.v1.PositiveMoney",
  "flint.v1.SignedMoney",
]);

export function isMoney(type: string): boolean {
  return MONEY_TYPES.has(type);
}

export function isTimestamp(type: string): boolean {
  return type === "google.protobuf.Timestamp";
}

export function isFieldMask(type: string): boolean {
  return type === "google.protobuf.FieldMask";
}

const COMMON_ENUM_MAP: Record<string, string> = {
  "flint.v1.Source": "Source",
  "flint.v1.SortDirection": "SortDirection",
  "flint.v1.PaymentMethodType": "PaymentMethodType",
  "flint.v1.DigitalWallet": "DigitalWallet",
  "flint.v1.CardBrand": "CardBrand",
  // Short names (proto parser may not fully-qualify imported types)
  "Source": "Source",
  "SortDirection": "SortDirection",
  "PaymentMethodType": "PaymentMethodType",
  "DigitalWallet": "DigitalWallet",
  "CardBrand": "CardBrand",
};

const COMMON_MESSAGE_MAP: Record<string, string> = {
  "flint.v1.ProcessorDetails": "ProcessorDetails",
  "ProcessorDetails": "ProcessorDetails",
};

const CROSS_FILE_TYPE_IMPORTS: Record<string, { typeName: string; requestTypeName?: string; path: string }> = {
  Theme: { typeName: "Theme", path: "./checkout-sessions" },
  PaymentConfig: { typeName: "PaymentConfig", path: "./checkout-sessions" },
  TipConfig: { typeName: "TipConfig", path: "./checkout-sessions" },
  CustomerConfig: { typeName: "CustomerConfig", path: "./checkout-sessions" },
  TaxConfig: { typeName: "TaxConfig", path: "./checkout-sessions" },
  LegalConfig: { typeName: "LegalConfig", path: "./checkout-sessions" },
  ExpirationConfig: { typeName: "ExpirationConfig", path: "./checkout-sessions" },
  CustomTextConfig: { typeName: "CustomTextConfig", requestTypeName: "CustomTextConfigInput", path: "./checkout-sessions" },
  CouponConfig: { typeName: "CouponConfig", path: "./checkout-sessions" },
  Redirects: { typeName: "Redirects", path: "./checkout-sessions" },
};

export function isCommonEnum(type: string): boolean {
  return type in COMMON_ENUM_MAP;
}

export function getShortType(type: string): string {
  return type.includes(".") ? type.split(".").pop()! : type;
}

function resolveFieldType(
  field: ProtoField,
  localEnums: Map<string, ProtoEnum>,
  localMessages: Map<string, ProtoMessage>,
  pkg: string,
): string {
  if (field.type === "map") {
    const vt = mapScalarType(field.mapValueType ?? "string");
    return `Record<${mapScalarType(field.mapKeyType ?? "string")}, ${vt}>`;
  }

  if (field.type === "google.protobuf.Timestamp") return "Date";
  if (field.type === "google.protobuf.FieldMask") return "string[]";
  if (isMoney(field.type)) return "Money";
  if (field.type === "flint.v1.Address") return "Address";
  if (field.type === "flint.v1.NextAction") return "NextAction";
  if (COMMON_MESSAGE_MAP[field.type]) return COMMON_MESSAGE_MAP[field.type]!;
  if (CROSS_FILE_TYPE_IMPORTS[field.type]) return CROSS_FILE_TYPE_IMPORTS[field.type]!.typeName;
  if (COMMON_ENUM_MAP[field.type]) return COMMON_ENUM_MAP[field.type]!;

  const shortType = getShortType(field.type);
  if (localEnums.has(shortType)) return shortType;
  if (localMessages.has(shortType)) return shortType;

  return mapScalarType(field.type);
}

function mapScalarType(protoType: string): string {
  switch (protoType) {
    case "string": return "string";
    case "bool": return "boolean";
    case "int32": case "int64": case "uint32": case "uint64":
    case "sint32": case "sint64": case "fixed32": case "fixed64":
    case "sfixed32": case "sfixed64": case "float": case "double":
      return "number";
    case "bytes": return "Uint8Array";
    default: return protoType;
  }
}

function isLooseEntityMessage(msgName: string): boolean {
  return (
    msgName.endsWith("Config") ||
    (msgName.endsWith("Settings") && msgName !== "Settings") ||
    msgName.endsWith("Input") ||
    msgName === "PaymentLinkLineItem" ||
    msgName === "PaymentLinkCustomField" ||
    msgName === "ProcessingFeeRate" ||
    msgName === "FeeSettings" ||
    msgName === "PaymentLimitSettings"
  );
}

function shouldMakeEntityFieldOptional(msg: ProtoMessage, field: ProtoField): boolean {
  if (field.optional) return true;
  if (OPTIONAL_ENTITY_FIELDS[msg.name]?.includes(field.name)) return true;
  if (isLooseEntityMessage(msg.name) && (field.type === "map" || field.repeated)) return true;
  return false;
}

function isSimpleGetRequest(msg: ProtoMessage): boolean {
  const publicFields = msg.fields.filter(
    (field) =>
      !field.isInternal &&
      !field.isWriteInternal &&
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

function isPublicRequestField(field: ProtoField): boolean {
  return !field.isInternal && !field.isWriteInternal && !field.isOutputOnly && !field.isServiceOnly;
}

function hasRestrictedRequestFields(msg: ProtoMessage): boolean {
  return [...msg.fields, ...msg.oneofs.flatMap((oneof) => oneof.fields)].some(
    (field) => !isPublicRequestField(field),
  );
}

function deriveNestedRequestTypeName(msg: ProtoMessage): string | null {
  if (msg.name.endsWith("Input")) return null;
  if (!hasRestrictedRequestFields(msg)) return null;
  return `${msg.name}Input`;
}

function shouldMakeRequestFieldOptional(
  msg: ProtoMessage,
  field: ProtoField,
  isListRequest: boolean,
): boolean {
  if (REQUIRED_REQUEST_FIELDS[msg.name]?.includes(field.name)) return false;
  if (OPTIONAL_REQUEST_FIELDS[msg.name]?.includes(field.name)) return true;
  if (isListRequest) return true;
  if (field.type === "map" || field.optional || field.repeated) return true;
  if (msg.name.startsWith("Update") && !field.name.endsWith("_id") && !field.name.endsWith("_ids")) {
    return true;
  }
  if (field.name.startsWith("clear_")) return true;
  return false;
}

function resolveRequestFieldType(
  field: ProtoField,
  localEnums: Map<string, ProtoEnum>,
  localMessages: Map<string, ProtoMessage>,
  pkg: string,
): string {
  const crossFile = CROSS_FILE_TYPE_IMPORTS[field.type];
  if (crossFile?.requestTypeName) return crossFile.requestTypeName;

  const shortType = getShortType(field.type);
  const localMessage = localMessages.get(shortType);
  if (localMessage) {
    const requestTypeName = deriveNestedRequestTypeName(localMessage);
    if (requestTypeName) return requestTypeName;
  }

  return resolveFieldType(field, localEnums, localMessages, pkg);
}

function shouldMakeNestedRequestFieldOptional(field: ProtoField): boolean {
  return field.optional || field.repeated || field.type === "map";
}

// ============================================================================
// Generate types file for a service
// ============================================================================

export function generateTypesFile(
  config: ServiceConfig,
  service: ProtoService,
  registry: TypeRegistry,
  pkg: string,
  messages: ProtoMessage[],
  enums: ProtoEnum[],
): string {
  const lines: string[] = [];
  const commonImports = new Set<string>();
  const crossFileImports = new Map<string, Set<string>>();

  // Build lookup maps
  const localEnums = new Map<string, ProtoEnum>();
  const localMessages = new Map<string, ProtoMessage>();

  const collectTypes = (msgs: ProtoMessage[]) => {
    for (const msg of msgs) {
      localMessages.set(msg.name, msg);
      for (const e of msg.nestedEnums) localEnums.set(e.name, e);
      collectTypes(msg.nestedMessages);
    }
  };
  for (const e of enums) localEnums.set(e.name, e);
  collectTypes(messages);

  // Pre-scan all fields for common imports (including nested entity messages)
  const scannedMessages = new Set<string>();
  const scanFieldsSafe = (msgs: ProtoMessage[]) => {
    for (const msg of msgs) {
      if (scannedMessages.has(msg.name)) continue;
      scannedMessages.add(msg.name);
      for (const f of [...msg.fields, ...msg.oneofs.flatMap((o) => o.fields)]) {
        if (isMoney(f.type)) commonImports.add("Money");
        if (f.type === "flint.v1.Address") commonImports.add("Address");
        if (f.type === "flint.v1.NextAction") commonImports.add("NextAction");
        if (COMMON_MESSAGE_MAP[f.type]) commonImports.add(COMMON_MESSAGE_MAP[f.type]!);
        if (CROSS_FILE_TYPE_IMPORTS[f.type] && CROSS_FILE_TYPE_IMPORTS[f.type]!.path !== `./${kebabCase(config.sdk)}`) {
          const { path, typeName } = CROSS_FILE_TYPE_IMPORTS[f.type]!;
          const existing = crossFileImports.get(path) ?? new Set<string>();
          existing.add(typeName);
          crossFileImports.set(path, existing);
        }
        if (COMMON_ENUM_MAP[f.type]) commonImports.add(COMMON_ENUM_MAP[f.type]!);
        // Recurse into referenced message types
        const shortType = getShortType(f.type);
        if (localMessages.has(shortType)) {
          scanFieldsSafe([localMessages.get(shortType)!]);
        }
      }
      scanFieldsSafe(msg.nestedMessages);
    }
  };
  scanFieldsSafe(messages);

  const scanRequestImports = (msgs: ProtoMessage[]) => {
    for (const msg of msgs) {
      for (const f of [...msg.fields, ...msg.oneofs.flatMap((o) => o.fields)]) {
        const crossFile = CROSS_FILE_TYPE_IMPORTS[f.type];
        if (!crossFile || crossFile.path === `./${kebabCase(config.sdk)}`) continue;
        if (!crossFile.requestTypeName) continue;
        const existing = crossFileImports.get(crossFile.path) ?? new Set<string>();
        existing.add(crossFile.requestTypeName);
        crossFileImports.set(crossFile.path, existing);
      }
    }
  };

  const excludedRequestTypes = new Set(
    service.rpcs
      .filter((rpc) => config.excludeRpcs?.includes(rpc.name))
      .map((rpc) => rpc.requestType),
  );
  const requestMessages = messages.filter(
    (m) => m.name.endsWith("Request") && !excludedRequestTypes.has(m.name),
  );
  scanRequestImports(requestMessages);
  const requestViewMessageNames = new Set<string>();
  const collectRequestViewMessages = (msg: ProtoMessage) => {
    for (const field of [...msg.fields, ...msg.oneofs.flatMap((oneof) => oneof.fields)]) {
      const shortType = getShortType(field.type);
      const nested = localMessages.get(shortType);
      if (!nested || requestViewMessageNames.has(nested.name)) continue;
      requestViewMessageNames.add(nested.name);
      collectRequestViewMessages(nested);
    }
  };
  for (const requestMsg of requestMessages) {
    collectRequestViewMessages(requestMsg);
  }

  if (commonImports.size > 0) {
    lines.push(`import type { ${[...commonImports].sort().join(", ")} } from "./common";`);
    lines.push("");
  }

  for (const [path, names] of [...crossFileImports.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    lines.push(`import type { ${[...names].sort().join(", ")} } from "${path}";`);
    lines.push("");
  }

  // Generate enums (top-level + nested in entity messages)
  const allEnums = [...enums];
  for (const msg of messages) {
    for (const e of msg.nestedEnums) {
      if (!allEnums.find((x) => x.name === e.name)) allEnums.push(e);
    }
  }

  if (allEnums.length > 0) {
    lines.push("// ============================================================================");
    lines.push("// Enums");
    lines.push("// ============================================================================");
    lines.push("");

    for (const e of allEnums) {
      const { typeUnion, toProtoMap, fromProtoMap } = generateEnum(e);
      lines.push(typeUnion);
      lines.push("");
      lines.push(fromProtoMap);
      lines.push("");
      lines.push(toProtoMap);
      lines.push("");
    }
  }

  // Classify messages
  const entityMessages = messages.filter(
    (m) =>
      !m.name.endsWith("Request") &&
      !m.name.endsWith("Response") &&
      m.name !== "ResponseMeta",
  );

  // Generate entity types
  if (entityMessages.length > 0) {
    lines.push("// ============================================================================");
    lines.push("// Entities");
    lines.push("// ============================================================================");
    lines.push("");

    for (const msg of entityMessages) {
      lines.push(generateEntityType(msg, localEnums, localMessages, pkg));
      lines.push("");
    }

    for (const msg of entityMessages) {
      const requestTypeName = deriveNestedRequestTypeName(msg);
      if (!requestTypeName || !requestViewMessageNames.has(msg.name)) continue;
      lines.push(generateNestedRequestType(msg, localEnums, localMessages, pkg));
      lines.push("");
    }
  }

  // Generate params types from request messages
  const paramsTypes = requestMessages
    .map((m) => generateParamsType(m, localEnums, localMessages, pkg))
    .filter(Boolean);

  if (paramsTypes.length > 0) {
    lines.push("// ============================================================================");
    lines.push("// Request params");
    lines.push("// ============================================================================");
    lines.push("");
    for (const pt of paramsTypes) {
      lines.push(pt!);
      lines.push("");
    }
  }

  return lines.join("\n");
}

// ============================================================================
// Enum generation
// ============================================================================

function generateEnum(e: ProtoEnum): {
  typeUnion: string;
  fromProtoMap: string;
  toProtoMap: string;
} {
  const sdkValues = e.values
    .filter((v) => v.number !== 0 || ENUM_ZERO_VALUE_ALIASES[e.name])
    .map((v) => ({
      ...v,
      sdkName:
        v.number === 0 && ENUM_ZERO_VALUE_ALIASES[e.name]
          ? ENUM_ZERO_VALUE_ALIASES[e.name]!
          : stripEnumPrefix(v.name, e.name),
    }));

  const unionValues = sdkValues.map((v) => `  | "${v.sdkName}"`).join("\n");
  const typeUnion = `export type ${e.name} =\n${unionValues};`;

  const mapName = `${toConstName(e.name)}_MAP`;
  const mapEntries = sdkValues.map((v) => `  ${v.number}: "${v.sdkName}",`).join("\n");
  const fromProtoMap = `export const ${mapName}: Record<number, ${e.name}> = {\n${mapEntries}\n};`;

  const toMapName = `${toConstName(e.name)}_TO_PROTO`;
  const toMapEntries = sdkValues.map((v) => `  "${v.sdkName}": ${v.number},`).join("\n");
  const toProtoMap = `export const ${toMapName}: Record<string, number> = {\n${toMapEntries}\n};`;

  return { typeUnion, fromProtoMap, toProtoMap };
}

// ============================================================================
// Entity type generation
// ============================================================================

function generateEntityType(
  msg: ProtoMessage,
  localEnums: Map<string, ProtoEnum>,
  localMessages: Map<string, ProtoMessage>,
  pkg: string,
): string {
  const lines: string[] = [];
  lines.push(`export type ${msg.name} = {`);

  for (const field of msg.fields) {
    if (field.isInternal) continue;
    if (field.number === 100 && field.type.includes("ResponseMeta")) continue;

    const tsType = resolveFieldType(field, localEnums, localMessages, pkg);
    const tsName = snakeToCamel(field.name);
    const optional = shouldMakeEntityFieldOptional(msg, field) ? "?" : "";
    const arrayMod = field.repeated ? "[]" : "";

    lines.push(`  ${tsName}${optional}: ${tsType}${arrayMod};`);
  }

  // Flatten oneof fields as optional
  for (const oneof of msg.oneofs) {
    for (const field of oneof.fields) {
      if (field.isInternal) continue;
      const tsType = resolveFieldType(field, localEnums, localMessages, pkg);
      const tsName = snakeToCamel(field.name);
      lines.push(`  ${tsName}?: ${tsType};`);
    }
  }

  lines.push("};");
  return lines.join("\n");
}

// ============================================================================
// Params type generation
// ============================================================================

function generateParamsType(
  msg: ProtoMessage,
  localEnums: Map<string, ProtoEnum>,
  localMessages: Map<string, ProtoMessage>,
  pkg: string,
): string | null {
  const name = msg.name;

  // Skip simple Get*Request (ID-only lookup)
  if (/^Get\w+Request$/.test(name) && !name.includes("By") && isSimpleGetRequest(msg)) return null;
  // Skip GetByEmail/GetBySKU etc — they're handled as method params directly
  if (/^Get\w+By\w+Request$/.test(name)) return null;

  const paramsName = deriveParamsTypeName(name);
  if (!paramsName) return null;

  // Determine if this is an action that takes parentId as first method arg
  const isUpdateOrAction =
    name.startsWith("Update") ||
    name.startsWith("Close") ||
    name.startsWith("Cancel") ||
    name.startsWith("Pause") ||
    name.startsWith("Resume") ||
    name.startsWith("Add") ||
    name.startsWith("Remove") ||
    name.startsWith("Replace") ||
    name.startsWith("Apply") ||
    name.startsWith("Pay") ||
    name.startsWith("Confirm") ||
    name.startsWith("Capture") ||
    name.startsWith("Adjust") ||
    name.startsWith("Set") ||
    name.startsWith("Save") ||
    name.startsWith("Reorder");

  const isListRequest = name.startsWith("List");

  // The first non-optional ID field is typically the parent entity ID,
  // which the service method takes as a direct arg (not in params)
  const idField = isUpdateOrAction
    ? msg.fields.find((f) => f.name.endsWith("_id") && !f.optional)
    : null;

  const lines: string[] = [];
  lines.push(`export type ${paramsName} = {`);

  for (const field of msg.fields) {
    if (!isPublicRequestField(field)) continue;
    // Skip the parent ID field — it's a method arg, not a params field
    if (idField && field === idField) continue;

    const tsName = snakeToCamel(field.name);

    // Special field handling
    if (field.name === "page_size") {
      lines.push("  limit?: number;");
      continue;
    }
    if (field.name === "page_token") {
      lines.push("  pageToken?: string;");
      continue;
    }
    if (field.name === "idempotency_key") {
      lines.push("  idempotencyKey?: string;");
      continue;
    }
    if (isFieldMask(field.type)) {
      if (isListRequest || name.startsWith("Get")) {
        lines.push("  readMask?: string[];");
      } else {
        lines.push("  updateMask?: string[];");
      }
      continue;
    }

    const tsType = resolveRequestFieldType(field, localEnums, localMessages, pkg);
    const optional = shouldMakeRequestFieldOptional(msg, field, isListRequest) ? "?" : "";

    const arrayMod = field.repeated ? "[]" : "";
    lines.push(`  ${tsName}${optional}: ${tsType}${arrayMod};`);
  }

  // Flatten oneof fields as optional
  for (const oneof of msg.oneofs) {
    for (const field of oneof.fields) {
      if (!isPublicRequestField(field)) continue;
      const tsType = resolveRequestFieldType(field, localEnums, localMessages, pkg);
      const tsName = snakeToCamel(field.name);
      lines.push(`  ${tsName}?: ${tsType};`);
    }
  }

  lines.push("};");
  return lines.join("\n");
}

function generateNestedRequestType(
  msg: ProtoMessage,
  localEnums: Map<string, ProtoEnum>,
  localMessages: Map<string, ProtoMessage>,
  pkg: string,
): string {
  const requestTypeName = deriveNestedRequestTypeName(msg);
  if (!requestTypeName) return "";

  const lines: string[] = [];
  lines.push(`export type ${requestTypeName} = {`);

  for (const field of msg.fields) {
    if (!isPublicRequestField(field)) continue;

    const tsType = resolveRequestFieldType(field, localEnums, localMessages, pkg);
    const tsName = snakeToCamel(field.name);
    const optional = shouldMakeNestedRequestFieldOptional(field) ? "?" : "";
    const arrayMod = field.repeated ? "[]" : "";
    lines.push(`  ${tsName}${optional}: ${tsType}${arrayMod};`);
  }

  for (const oneof of msg.oneofs) {
    for (const field of oneof.fields) {
      if (!isPublicRequestField(field)) continue;
      const tsType = resolveRequestFieldType(field, localEnums, localMessages, pkg);
      const tsName = snakeToCamel(field.name);
      lines.push(`  ${tsName}?: ${tsType};`);
    }
  }

  lines.push("};");
  return lines.join("\n");
}

function deriveParamsTypeName(requestName: string): string | null {
  const base = requestName.replace(/Request$/, "");

  if (base.startsWith("Get")) return `${base}Params`;

  // Create → EntityCreateParams
  const createMatch = base.match(/^Create(\w+)$/);
  if (createMatch) return `${createMatch[1]}CreateParams`;

  // Update → EntityUpdateParams
  const updateMatch = base.match(/^Update(\w+)$/);
  if (updateMatch) return `${updateMatch[1]}UpdateParams`;

  // List → EntityListParams (singularize)
  if (base.startsWith("List")) {
    // ListCustomers → Customer, ListOrders → Order, etc.
    let entity = base.replace(/^List/, "");
    if (entity.endsWith("ies")) entity = entity.slice(0, -3) + "y";
    else if (entity.endsWith("ses")) entity = entity.slice(0, -2);
    else if (entity.endsWith("s")) entity = entity.slice(0, -1);
    return `${entity}ListParams`;
  }

  // Everything else: VerbEntityParams → VerbEntityParams
  return `${base}Params`;
}

// ============================================================================
// Common types file generation
// ============================================================================

export function generateCommonTypesFile(): string {
  return `// ============================================================================
// Common types shared across all Flint services
// ============================================================================

/**
 * Money amount in the smallest currency unit (e.g., cents for USD).
 * Example: { amount: 1500, currency: "USD" } = $15.00
 */
export type Money = {
  amount: number;
  currency: string;
};

/**
 * Physical address.
 */
export type Address = {
  line1: string;
  line2?: string;
  country: string;
  city: string;
  state: string;
  postalCode: string;
};

export type StripeDetails = {
  clientSecret?: string;
  accountId?: string;
};

export type ProcessorDetails = {
  stripe?: StripeDetails;
};

export type SortDirection = "asc" | "desc";

export const SORT_DIRECTION_MAP: Record<number, SortDirection> = {
  1: "asc",
  2: "desc",
};

export const SORT_DIRECTION_TO_PROTO: Record<string, number> = {
  asc: 1,
  desc: 2,
};

export type Source =
  | "virtual_terminal"
  | "payment_link"
  | "checkout"
  | "api"
  | "pos"
  | "subscription";

export const SOURCE_MAP: Record<number, Source> = {
  1: "virtual_terminal",
  2: "payment_link",
  3: "checkout",
  4: "api",
  5: "pos",
  6: "subscription",
};

export const SOURCE_TO_PROTO: Record<string, number> = {
  virtual_terminal: 1,
  payment_link: 2,
  checkout: 3,
  api: 4,
  pos: 5,
  subscription: 6,
};

export type PaymentMethodType = "card" | "affirm" | "link";

export const PAYMENT_METHOD_TYPE_MAP: Record<number, PaymentMethodType> = {
  1: "card",
  2: "affirm",
  3: "link",
};

export const PAYMENT_METHOD_TYPE_TO_PROTO: Record<string, number> = {
  card: 1,
  affirm: 2,
  link: 3,
};

export type DigitalWallet = "apple_pay" | "google_pay";

export const DIGITAL_WALLET_MAP: Record<number, DigitalWallet> = {
  1: "apple_pay",
  2: "google_pay",
};

export const DIGITAL_WALLET_TO_PROTO: Record<string, number> = {
  apple_pay: 1,
  google_pay: 2,
};

export type CardBrand =
  | "visa"
  | "mastercard"
  | "amex"
  | "discover"
  | "diners"
  | "jcb"
  | "unionpay";

export const CARD_BRAND_MAP: Record<number, CardBrand> = {
  1: "visa",
  2: "mastercard",
  3: "amex",
  4: "discover",
  5: "diners",
  6: "jcb",
  7: "unionpay",
};

export const CARD_BRAND_TO_PROTO: Record<string, number> = {
  visa: 1,
  mastercard: 2,
  amex: 3,
  discover: 4,
  diners: 5,
  jcb: 6,
  unionpay: 7,
};

/**
 * Response metadata included on all successful responses.
 */
export type ResponseMeta = {
  requestId?: string;
  idempotencyReplayed?: boolean;
  apiVersion?: string;
  traceId?: string;
  rateLimitRemaining?: number;
  rateLimitResetAt?: Date;
};

/**
 * Guidance for what action to take next, provided on some responses.
 */
export type NextAction = {
  method: string;
  reasonCode?: string;
  reasonMessage?: string;
  requiredFields?: string[];
  requiresHumanConfirmation?: boolean;
  suggestedDelayMs?: number;
};
`;
}
