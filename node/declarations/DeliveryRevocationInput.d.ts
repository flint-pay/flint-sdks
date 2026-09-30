
import type { DeliveryRevocationImpactInput } from './DeliveryRevocationImpactInput.js';
import type { DeliveryRevocationTargetInput } from './DeliveryRevocationTargetInput.js';

export type DeliveryRevocationInput = { /** RFC3339 timestamp. Format: date-time. */ "created_at": string | globalThis.Date; "delivery_revocation_id": string; "estimated_impact": DeliveryRevocationImpactInput; "merchant_note"?: string; "reason": "unsafe_configuration" | "location_unavailable" | "credential_compromise" | "legal_requirement" | "other"; "target": DeliveryRevocationTargetInput; };
