import { readFileSync } from "fs";
import { resolve, dirname } from "path";

// ============================================================================
// AST Types
// ============================================================================

export type ProtoFile = {
  syntax: string;
  package: string;
  imports: string[];
  messages: ProtoMessage[];
  enums: ProtoEnum[];
  services: ProtoService[];
};

export type ProtoMessage = {
  name: string;
  fields: ProtoField[];
  oneofs: ProtoOneof[];
  nestedMessages: ProtoMessage[];
  nestedEnums: ProtoEnum[];
};

export type ProtoField = {
  name: string;
  type: string;
  number: number;
  optional: boolean;
  repeated: boolean;
  mapKeyType?: string;
  mapValueType?: string;
  isOutputOnly: boolean;
  isInternal: boolean;
  isWriteInternal: boolean;
  isServiceOnly: boolean;
};

export type ProtoOneof = {
  name: string;
  fields: ProtoField[];
};

export type ProtoEnum = {
  name: string;
  values: { name: string; number: number }[];
};

export type ProtoService = {
  name: string;
  rpcs: ProtoRPC[];
};

export type ProtoRPC = {
  name: string;
  requestType: string;
  responseType: string;
  annotations: {
    operationType?: string;
    hasIdempotencyKey?: boolean;
    idempotencyKeyField?: string;
    supportsPagination?: boolean;
    supportsFieldMask?: boolean;
  };
};

// ============================================================================
// Type Registry — resolves cross-file references
// ============================================================================

export type TypeRegistry = {
  messages: Map<string, ProtoMessage>;
  enums: Map<string, ProtoEnum>;
  files: Map<string, ProtoFile>;
};

export function createTypeRegistry(): TypeRegistry {
  return { messages: new Map(), enums: new Map(), files: new Map() };
}

export function registerFile(registry: TypeRegistry, file: ProtoFile): void {
  const pkg = file.package;
  registry.files.set(pkg, file);

  const registerMessages = (msgs: ProtoMessage[], prefix: string) => {
    for (const msg of msgs) {
      const fqn = prefix ? `${prefix}.${msg.name}` : msg.name;
      registry.messages.set(fqn, msg);
      registerMessages(msg.nestedMessages, fqn);
      for (const e of msg.nestedEnums) {
        registry.enums.set(`${fqn}.${e.name}`, e);
      }
    }
  };

  registerMessages(file.messages, pkg);
  for (const e of file.enums) {
    registry.enums.set(`${pkg}.${e.name}`, e);
  }
}

// ============================================================================
// Parser
// ============================================================================

export function parseProtoFile(filePath: string): ProtoFile {
  const content = readFileSync(filePath, "utf-8");
  return parseProto(content);
}

export function parseProto(content: string): ProtoFile {
  // Strip comments
  const stripped = stripComments(content);

  const syntaxMatch = stripped.match(/syntax\s*=\s*"([^"]+)"/);
  const packageMatch = stripped.match(/package\s+([\w.]+)\s*;/);
  const imports: string[] = [];
  for (const m of stripped.matchAll(/import\s+"([^"]+)"\s*;/g)) {
    imports.push(m[1]!);
  }

  const file: ProtoFile = {
    syntax: syntaxMatch?.[1] ?? "proto3",
    package: packageMatch?.[1] ?? "",
    imports,
    messages: [],
    enums: [],
    services: [],
  };

  // Parse top-level blocks
  const topLevel = extractTopLevelBlocks(stripped);
  for (const block of topLevel) {
    if (block.type === "message") {
      file.messages.push(parseMessage(block.name, block.body));
    } else if (block.type === "enum") {
      file.enums.push(parseEnum(block.name, block.body));
    } else if (block.type === "service") {
      file.services.push(parseService(block.name, block.body));
    }
  }

  return file;
}

function stripComments(content: string): string {
  // Remove line comments but preserve strings
  let result = "";
  let i = 0;
  while (i < content.length) {
    // String literal
    if (content[i] === '"') {
      const end = content.indexOf('"', i + 1);
      if (end === -1) {
        result += content.slice(i);
        break;
      }
      result += content.slice(i, end + 1);
      i = end + 1;
      continue;
    }
    // Line comment
    if (content[i] === "/" && content[i + 1] === "/") {
      const end = content.indexOf("\n", i);
      if (end === -1) break;
      i = end;
      continue;
    }
    // Block comment
    if (content[i] === "/" && content[i + 1] === "*") {
      const end = content.indexOf("*/", i + 2);
      if (end === -1) break;
      i = end + 2;
      continue;
    }
    result += content[i];
    i++;
  }
  return result;
}

type Block = { type: string; name: string; body: string };

function extractTopLevelBlocks(content: string): Block[] {
  const blocks: Block[] = [];
  const regex = /\b(message|enum|service)\s+(\w+)\s*\{/g;
  let match;

  while ((match = regex.exec(content)) !== null) {
    const start = match.index + match[0].length;
    const body = extractBraceBlock(content, start);
    if (body !== null) {
      blocks.push({ type: match[1]!, name: match[2]!, body });
    }
  }

  return blocks;
}

function extractBraceBlock(content: string, startAfterOpenBrace: number): string | null {
  let depth = 1;
  let i = startAfterOpenBrace;
  while (i < content.length && depth > 0) {
    if (content[i] === "{") depth++;
    else if (content[i] === "}") depth--;
    if (depth > 0) i++;
  }
  if (depth !== 0) return null;
  return content.slice(startAfterOpenBrace, i);
}

// ============================================================================
// Message Parser
// ============================================================================

function parseMessage(name: string, body: string): ProtoMessage {
  const msg: ProtoMessage = {
    name,
    fields: [],
    oneofs: [],
    nestedMessages: [],
    nestedEnums: [],
  };

  // Extract nested blocks first, then parse fields from what remains
  const { remaining, blocks } = extractNestedBlocks(body);

  for (const block of blocks) {
    if (block.type === "message") {
      msg.nestedMessages.push(parseMessage(block.name, block.body));
    } else if (block.type === "enum") {
      msg.nestedEnums.push(parseEnum(block.name, block.body));
    } else if (block.type === "oneof") {
      msg.oneofs.push(parseOneof(block.name, block.body));
    }
  }

  // Parse fields from remaining text
  for (const field of parseFields(remaining)) {
    msg.fields.push(field);
  }

  return msg;
}

function extractNestedBlocks(body: string): { remaining: string; blocks: Block[] } {
  const blocks: Block[] = [];
  let remaining = body;

  // Keep extracting blocks until no more found
  // Process from end to start to avoid index shifting
  const blockRegex = /\b(message|enum|oneof)\s+(\w+)\s*\{/g;
  let match;
  const matches: { start: number; type: string; name: string; bodyStart: number }[] = [];

  while ((match = blockRegex.exec(body)) !== null) {
    matches.push({
      start: match.index,
      type: match[1]!,
      name: match[2]!,
      bodyStart: match.index + match[0].length,
    });
  }

  // Process in reverse to keep indices valid
  const processed: { start: number; end: number; block: Block }[] = [];
  for (const m of matches) {
    const blockBody = extractBraceBlock(body, m.bodyStart);
    if (blockBody !== null) {
      const end = m.bodyStart + blockBody.length + 1; // +1 for closing brace
      processed.push({
        start: m.start,
        end,
        block: { type: m.type, name: m.name, body: blockBody },
      });
    }
  }

  // Filter out nested blocks (blocks inside other blocks)
  const topLevel = processed.filter((p) => {
    return !processed.some(
      (other) => other !== p && p.start > other.start && p.end <= other.end
    );
  });

  // Remove blocks from remaining text (reverse order)
  const sorted = [...topLevel].sort((a, b) => b.start - a.start);
  for (const item of sorted) {
    remaining = remaining.slice(0, item.start) + remaining.slice(item.end);
    blocks.unshift(item.block);
  }

  return { remaining, blocks };
}

function parseOneof(name: string, body: string): ProtoOneof {
  const oneof: ProtoOneof = { name, fields: [] };
  for (const field of parseFields(body)) {
    oneof.fields.push(field);
  }
  return oneof;
}

// ============================================================================
// Field Parser
// ============================================================================

function parseFields(text: string): ProtoField[] {
  const fields: ProtoField[] = [];

  // Skip 'reserved' and 'option' lines
  const lines = text.split(";").map((l) => l.trim()).filter(Boolean);

  for (const line of lines) {
    // Skip reserved, option, extensions
    if (/^\s*(reserved|option|extensions)\b/.test(line)) continue;

    const field = parseFieldLine(line);
    if (field) fields.push(field);
  }

  return fields;
}

function parseFieldLine(line: string): ProtoField | null {
  // Map field: map<KeyType, ValueType> field_name = N [annotations];
  const mapMatch = line.match(
    /^\s*map\s*<\s*(\w+)\s*,\s*([\w.]+)\s*>\s+(\w+)\s*=\s*(\d+)/
  );
  if (mapMatch) {
    return {
      name: mapMatch[3]!,
      type: "map",
      number: parseInt(mapMatch[4]!, 10),
      optional: false,
      repeated: false,
      mapKeyType: mapMatch[1],
      mapValueType: mapMatch[2],
      isOutputOnly: isOutputOnly(line),
      isInternal: isInternal(line),
      isWriteInternal: isWriteInternal(line),
      isServiceOnly: isServiceOnlyWrite(line),
    };
  }

  // Regular field: [optional] [repeated] Type field_name = N [annotations];
  const fieldMatch = line.match(
    /^\s*(optional\s+|repeated\s+)?([\w.]+)\s+(\w+)\s*=\s*(\d+)/
  );
  if (fieldMatch) {
    const modifier = (fieldMatch[1] ?? "").trim();
    return {
      name: fieldMatch[3]!,
      type: fieldMatch[2]!,
      number: parseInt(fieldMatch[4]!, 10),
      optional: modifier === "optional",
      repeated: modifier === "repeated",
      isOutputOnly: isOutputOnly(line),
      isInternal: isInternal(line),
      isWriteInternal: isWriteInternal(line),
      isServiceOnly: isServiceOnlyWrite(line),
    };
  }

  return null;
}

function isOutputOnly(line: string): boolean {
  return (
    line.includes("OUTPUT_ONLY") ||
    line.includes("ACCESS_LEVEL_SERVICE_ONLY")
  );
}

function isInternal(line: string): boolean {
  return /read:\s*ACCESS_LEVEL_INTERNAL/.test(line);
}

function isWriteInternal(line: string): boolean {
  return /write:\s*ACCESS_LEVEL_INTERNAL/.test(line);
}

function isServiceOnlyWrite(line: string): boolean {
  return /write:\s*ACCESS_LEVEL_SERVICE_ONLY/.test(line);
}

// ============================================================================
// Enum Parser
// ============================================================================

function parseEnum(name: string, body: string): ProtoEnum {
  const values: { name: string; number: number }[] = [];
  const regex = /(\w+)\s*=\s*(-?\d+)/g;
  let match;
  while ((match = regex.exec(body)) !== null) {
    // Skip option lines
    const lineStart = body.lastIndexOf("\n", match.index);
    const lineText = body.slice(Math.max(0, lineStart), match.index);
    if (lineText.includes("option")) continue;

    values.push({
      name: match[1]!,
      number: parseInt(match[2]!, 10),
    });
  }
  return { name, values };
}

// ============================================================================
// Service Parser
// ============================================================================

function parseService(name: string, body: string): ProtoService {
  const service: ProtoService = { name, rpcs: [] };
  // Match the RPC signature, then use brace-counting for the body
  const rpcSigRegex = /rpc\s+(\w+)\s*\(\s*([\w.]+)\s*\)\s*returns\s*\(\s*([\w.]+)\s*\)\s*\{/g;

  let match;
  while ((match = rpcSigRegex.exec(body)) !== null) {
    const bodyStart = match.index + match[0].length;
    const rpcBody = extractBraceBlock(body, bodyStart) ?? "";
    service.rpcs.push({
      name: match[1]!,
      requestType: match[2]!,
      responseType: match[3]!,
      annotations: parseRPCAnnotations(rpcBody),
    });
  }

  return service;
}

function parseRPCAnnotations(body: string): ProtoRPC["annotations"] {
  const annotations: ProtoRPC["annotations"] = {};

  const opMatch = body.match(/operation_type:\s*(\w+)/);
  if (opMatch) annotations.operationType = opMatch[1];

  const idempMatch = body.match(/idempotency_key_field:\s*"([^"]+)"/);
  if (idempMatch) {
    annotations.hasIdempotencyKey = true;
    annotations.idempotencyKeyField = idempMatch[1];
  }

  if (body.includes("supports_pagination: true")) {
    annotations.supportsPagination = true;
  }

  if (body.includes("supports_field_mask: true")) {
    annotations.supportsFieldMask = true;
  }

  return annotations;
}

// ============================================================================
// Parse all protos for a project
// ============================================================================

export function parseProtoDirectory(
  protoRoot: string,
  files: string[]
): { registry: TypeRegistry; parsed: Map<string, ProtoFile> } {
  const registry = createTypeRegistry();
  const parsed = new Map<string, ProtoFile>();

  for (const file of files) {
    const fullPath = resolve(protoRoot, file);
    const proto = parseProtoFile(fullPath);
    parsed.set(file, proto);
    registerFile(registry, proto);
  }

  return { registry, parsed };
}
