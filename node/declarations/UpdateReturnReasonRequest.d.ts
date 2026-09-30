


export type UpdateReturnReasonRequest = ({ "category_handles"?: Array<string>; "description"?: string | null; /** Use an exact numeric string, not a floating-point number. Format: int64. minimum: 1. */ "expected_version"?: string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string | null; "is_note_required"?: boolean; "name"?: string; }) & (((unknown) | ({ "expected_version": unknown; }) | (object)));
