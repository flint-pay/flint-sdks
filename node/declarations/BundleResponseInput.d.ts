
import type { BundleInput } from './BundleInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type BundleResponseInput = { "data": BundleInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
