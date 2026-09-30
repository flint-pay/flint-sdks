
import type { APIKeyInput } from './APIKeyInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type APIKeyResponseInput = { "data": APIKeyInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
