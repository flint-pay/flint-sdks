
import type { AvailableModifier } from './AvailableModifier.js';
import type { AvailableModifierSelection } from './AvailableModifierSelection.js';
import type { TextModifierConfig } from './TextModifierConfig.js';

export type AvailableModifierGroup = { "modifier_group_id": string; "modifier_group_type": "list" | "text" | (string & {}); "modifiers"?: Array<AvailableModifier>; "name": string; /** Format: int32. */ "position": number; "selection"?: AvailableModifierSelection; "show_on_fulfillment": boolean; "show_on_receipt": boolean; "text"?: TextModifierConfig; };
