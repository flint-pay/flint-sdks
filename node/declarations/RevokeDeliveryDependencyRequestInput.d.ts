
import type { DeliveryRevocationTargetInput } from './DeliveryRevocationTargetInput.js';

export type RevokeDeliveryDependencyRequestInput = { /** maxLength: 2048. */ "merchant_note"?: string; "reason": "unsafe_configuration" | "location_unavailable" | "credential_compromise" | "legal_requirement" | "other"; "target": DeliveryRevocationTargetInput; };
