
import type { PackageItemInput } from './PackageItemInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PackageItemListResponseInput = { "data": Array<PackageItemInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
