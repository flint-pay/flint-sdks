
import type { LocationInput } from './LocationInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type LocationListResponseInput = { "data": Array<LocationInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
