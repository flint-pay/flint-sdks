
import type { PackageItem } from './PackageItem.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PackageItemListResponse = { "data": Array<PackageItem>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
