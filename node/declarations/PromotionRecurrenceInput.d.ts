


export type PromotionRecurrenceInput = ({ /** Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1. */ "period_count"?: number; /** Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. */ "type": "once" | "repeating" | "forever"; }) & ((({ "type": ("once") & ("once"); }) & ({ "period_count"?: never })) | ({ "type": ("repeating") & ("repeating"); "period_count": unknown; }) | (({ "type": ("forever") & ("forever"); }) & ({ "period_count"?: never })));
