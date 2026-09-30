
import type { ReturnSourceSystemInput } from './ReturnSourceSystemInput.js';

export type ReturnProcessReceiptRequestInput = { "external_actor_id"?: string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; /** RFC3339 timestamp. Format: date-time. */ "received_at": string | globalThis.Date; "receiving_location_id": string; "source_system"?: ReturnSourceSystemInput; };
