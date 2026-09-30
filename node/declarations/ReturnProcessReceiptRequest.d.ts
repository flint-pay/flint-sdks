
import type { ReturnSourceSystem } from './ReturnSourceSystem.js';

export type ReturnProcessReceiptRequest = { "external_actor_id"?: string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; /** RFC3339 timestamp. Format: date-time. */ "received_at": string; "receiving_location_id": string; "source_system"?: ReturnSourceSystem; };
