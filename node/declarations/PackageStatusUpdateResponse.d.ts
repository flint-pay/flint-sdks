
import type { PackageStatusUpdateResult } from './PackageStatusUpdateResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type PackageStatusUpdateResponse = { "data": PackageStatusUpdateResult; "meta"?: ResponseMeta; "request_id"?: string; };
