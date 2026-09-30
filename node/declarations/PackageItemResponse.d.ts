
import type { PackageItem } from './PackageItem.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PackageItemResponse = { "data": PackageItem; "meta"?: ResponseMeta; "request_id"?: string; };
