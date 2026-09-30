
import type { PublicRiskAttributeRegistry } from './PublicRiskAttributeRegistry.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type RiskRuleAttributeRegistryResponse = { "data": PublicRiskAttributeRegistry; "meta"?: ResponseMeta; "request_id"?: string; };
