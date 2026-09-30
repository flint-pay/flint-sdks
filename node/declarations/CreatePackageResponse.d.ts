
import type { CreatePackageResult } from './CreatePackageResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CreatePackageResponse = { "data": CreatePackageResult; "meta"?: ResponseMeta; "request_id"?: string; };
