
import type { OnboardingStartResult } from './OnboardingStartResult.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OnboardingStartResponse = { "data": OnboardingStartResult; "meta"?: ResponseMeta; "request_id"?: string; };
