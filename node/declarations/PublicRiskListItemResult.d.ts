
import type { RiskListItem } from './RiskListItem.js';

export type PublicRiskListItemResult = { "risk_list_item": RiskListItem; "status": "created" | "existing" | (string & {}); };
