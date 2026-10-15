import type { InputValue } from '../runtime.js';
import type { PublishLocationGeographyRequestInput } from './PublishLocationGeographyRequestInput.js';

export type LocationsPublishGeographyInput = { "Idempotency-Key"?: InputValue<string>; "location_id": InputValue<string>; "body": InputValue<PublishLocationGeographyRequestInput>; };
