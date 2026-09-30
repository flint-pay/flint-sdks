
import type { APIRequestLogQueryParamInput } from './APIRequestLogQueryParamInput.js';

export type APIRequestLogReproductionInput = { "body"?: string; "curl": string; "headers": Record<string, string>; "http_method": string; "path": string; "query_params": Array<APIRequestLogQueryParamInput>; "recommended_environment": string; "redactions_present": boolean; "reproduction_complete": boolean; "safe_to_reproduce": boolean; "warnings"?: Array<string>; };
