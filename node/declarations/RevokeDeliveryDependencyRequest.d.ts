
import type { DeliveryRevocationTarget } from './DeliveryRevocationTarget.js';

export type RevokeDeliveryDependencyRequest = { "merchant_note"?: string; "reason": "unsafe_configuration" | "location_unavailable" | "credential_compromise" | "legal_requirement" | "other" | (string & {}); "target": DeliveryRevocationTarget; };
