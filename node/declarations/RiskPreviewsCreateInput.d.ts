import type { InputValue } from '../runtime.js';
import type { CreateRiskPreviewRequestInput } from './CreateRiskPreviewRequestInput.js';

export type RiskPreviewsCreateInput = { "X-Request-Id"?: InputValue<string>; /** Format: date. */ "Flint-Version"?: InputValue<string>; "body": InputValue<CreateRiskPreviewRequestInput>; };
