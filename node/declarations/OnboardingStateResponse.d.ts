
import type { OnboardingState } from './OnboardingState.js';
import type { ResponseMeta } from './ResponseMeta.js';

export type OnboardingStateResponse = { "data": OnboardingState; "meta"?: ResponseMeta; "request_id"?: string; };
