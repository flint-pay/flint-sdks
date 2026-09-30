
import type { CreateInlineModifierGroupRequest } from './CreateInlineModifierGroupRequest.js';
import type { ModifierOverride } from './ModifierOverride.js';

export type CreateModifierSetGroupRequest = ({ "display_name"?: string; /** Format: int32. */ "max_selected"?: number; /** Format: int32. */ "min_selected"?: number; "modifier_group"?: CreateInlineModifierGroupRequest; /** pattern: ^mg_[0-9A-HJKMNP-TV-Z]{26}$. */ "modifier_group_id"?: string; "modifier_overrides"?: Array<ModifierOverride>; /** Format: int32. */ "position"?: number; "required"?: boolean; "show_on_fulfillment"?: boolean; "show_on_receipt"?: boolean; /** Use inline for a modifier group owned by this modifier set, or existing to reference an independent modifier group. */ "source": "existing" | "inline" | (string & {}); }) & ((({ "source": "existing"; "modifier_group_id": unknown; })) | (({ "source": "inline"; "modifier_group": unknown; })) | (object));
