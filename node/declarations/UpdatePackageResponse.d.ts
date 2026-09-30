
import type { ResponseMeta } from './ResponseMeta.js';
import type { UpdatePackageResult } from './UpdatePackageResult.js';

export type UpdatePackageResponse = { "data": UpdatePackageResult; "meta"?: ResponseMeta; "request_id"?: string; };
