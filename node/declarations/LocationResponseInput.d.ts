
import type { LocationInput } from './LocationInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type LocationResponseInput = { "data": LocationInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
