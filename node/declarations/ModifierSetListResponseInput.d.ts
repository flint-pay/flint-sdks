
import type { ModifierSetInput } from './ModifierSetInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type ModifierSetListResponseInput = { "data": Array<ModifierSetInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
