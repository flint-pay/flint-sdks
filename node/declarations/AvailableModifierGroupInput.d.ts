
import type { AvailableModifierInput } from './AvailableModifierInput.js';
import type { AvailableModifierSelectionInput } from './AvailableModifierSelectionInput.js';
import type { TextModifierConfigInput } from './TextModifierConfigInput.js';

export type AvailableModifierGroupInput = { "modifier_group_id": string; "modifier_group_type": "list" | "text"; "modifiers"?: Array<AvailableModifierInput>; "name": string; /** Format: int32. */ "position": number; "selection"?: AvailableModifierSelectionInput; "show_on_fulfillment": boolean; "show_on_receipt": boolean; "text"?: TextModifierConfigInput; };
