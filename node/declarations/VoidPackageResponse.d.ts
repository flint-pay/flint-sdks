
import type { ResponseMeta } from './ResponseMeta.js';
import type { VoidPackageResult } from './VoidPackageResult.js';

export type VoidPackageResponse = { "data": VoidPackageResult; "meta"?: ResponseMeta; "request_id"?: string; };
