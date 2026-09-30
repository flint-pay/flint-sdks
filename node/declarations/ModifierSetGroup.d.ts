
import type { ModifierGroup } from './ModifierGroup.js';
import type { ModifierOverride } from './ModifierOverride.js';

export type ModifierSetGroup = ({ "display_name"?: string; /** Format: int32. */ "max_selected"?: number; /** Format: int32. */ "min_selected"?: number; "modifier_group"?: ModifierGroup; "modifier_group_id"?: string; /** Current name of the referenced modifier group. */ "modifier_group_name"?: string; "modifier_overrides"?: Array<ModifierOverride>; "modifier_set_group_id": string; /** Format: int32. */ "position": number; "required"?: boolean; "show_on_fulfillment"?: boolean; "show_on_receipt"?: boolean; /** Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. */ "source": "existing" | "inline" | (string & {}); }) & ((({ "source": "existing"; "modifier_group_id": unknown; "modifier_group_name": unknown; })) | (({ "source": "inline"; "modifier_group": unknown; })) | (object));
