
import type { BundleComponent } from './BundleComponent.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type BundleComponentListResponse = { "data": Array<BundleComponent>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
