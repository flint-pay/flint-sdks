
import type { PackageInput } from './PackageInput.js';
import type { ResponseMetaInput } from './ResponseMetaInput.js';

export type PackageListResponseInput = { "data": Array<PackageInput>; "meta"?: ResponseMetaInput; "next_page_token"?: string; "request_id"?: string; };
