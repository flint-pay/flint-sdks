


export type ReturnReason = { "category_handles": Array<string>; /** RFC3339 timestamp. Format: date-time. */ "created_at": string; "description"?: string; /** Caller-owned identifier for this resource in an external system. maxLength: 255. */ "external_reference_id"?: string; "handle": string; "is_note_required": boolean; "name": string; "return_reason_id": string; "source": "flint" | "merchant" | (string & {}); "status": "active" | "archived" | (string & {}); "supported_actions": Array<string>; /** RFC3339 timestamp. Format: date-time. */ "updated_at": string; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 0. */ "version": string; };
