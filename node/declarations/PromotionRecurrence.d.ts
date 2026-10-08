


export type PromotionRecurrence = ({ /** Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1. */ "period_count"?: number; /** Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. */ "type": "once" | "repeating" | "forever" | (string & {}); }) & ((({ "type": unknown; })) | ({ "type": unknown; "period_count": unknown; }) | (({ "type": unknown; })) | (object));
