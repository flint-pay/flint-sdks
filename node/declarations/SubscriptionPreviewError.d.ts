
import type { ErrorDetail } from './ErrorDetail.js';

export type SubscriptionPreviewError = { "code": string; "details"?: Array<ErrorDetail>; "message": string; "param"?: string; };
