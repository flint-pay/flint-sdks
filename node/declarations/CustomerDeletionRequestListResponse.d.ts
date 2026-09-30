
import type { CustomerDeletionRequest } from './CustomerDeletionRequest.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type CustomerDeletionRequestListResponse = { "data": Array<CustomerDeletionRequest>; "meta"?: ResponseMeta; "next_page_token"?: string; "request_id"?: string; };
