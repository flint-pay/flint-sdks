
import type { BundleComponentInput } from './BundleComponentInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type BundleComponentListResponseInput = { "data": Array<BundleComponentInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
