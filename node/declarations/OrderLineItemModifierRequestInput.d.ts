
import type { TextModifierRequestInput } from './TextModifierRequestInput.js';

export type OrderLineItemModifierRequestInput = ({ "metadata"?: Record<string, string>; /** pattern: ^mod_[0-9A-HJKMNP-TV-Z]{26}$. */ "modifier_id"?: string; /** Existing selection ID to retain during replacement. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. */ "order_line_item_modifier_id"?: string; /** Whole-number quantity; fractional quantities are not supported. Use an exact numeric string, not a floating-point number. Format: int64. */ "quantity"?: string; "text"?: TextModifierRequestInput; }) & ((({ "modifier_id": unknown; }) & ({ "text"?: never })) | (({ "text": unknown; }) & (({ "modifier_id"?: never }) & ({ "quantity"?: never }))));
