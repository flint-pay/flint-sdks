
import type { BundleInput } from './BundleInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type BundleListResponseInput = { "data": Array<BundleInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
