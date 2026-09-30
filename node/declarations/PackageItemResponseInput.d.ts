
import type { PackageItemInput } from './PackageItemInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PackageItemResponseInput = { "data": PackageItemInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
