


export type ReturnProcessInspectionRequestInput = { "acceptance_status": "accepted" | "rejected" | "review_required"; "condition": "new" | "unopened" | "opened" | "used" | "damaged" | "defective" | "incomplete" | "unknown"; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "finding_codes"?: Array<"matches_expected_item" | "wrong_item" | "damaged" | "defective" | "used" | "missing_parts" | "empty_package" | "counterfeit_suspected" | "other">; /** RFC3339 timestamp. Format: date-time. */ "inspected_at": string | globalThis.Date; "internal_note"?: string; };
