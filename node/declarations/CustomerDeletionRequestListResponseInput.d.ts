
import type { CustomerDeletionRequestInput } from './CustomerDeletionRequestInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type CustomerDeletionRequestListResponseInput = { "data": Array<CustomerDeletionRequestInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
