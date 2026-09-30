
import type { DeliveryRevocationImpact } from './DeliveryRevocationImpact.js';
import type { DeliveryRevocationTarget } from './DeliveryRevocationTarget.js';

export type DeliveryRevocation = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "delivery_revocation_id": string; "estimated_impact": DeliveryRevocationImpact; "merchant_note"?: string; "reason": "unsafe_configuration" | "location_unavailable" | "credential_compromise" | "legal_requirement" | "other" | (string & {}); "target": DeliveryRevocationTarget; };
