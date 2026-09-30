
import type { PackageInput } from './PackageInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PackageResponseInput = { "data": PackageInput; "meta"?: ResponseMetaInput; "request_id"?: string; };
