
import type { CategoryInput } from './CategoryInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CategoryListResponseInput = { "data": Array<CategoryInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
