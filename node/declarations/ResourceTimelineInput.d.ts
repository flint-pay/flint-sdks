
import type { ResourceTimelineEntryInput } from './ResourceTimelineEntryInput.js';

export type ResourceTimelineInput = { "entries": Array<ResourceTimelineEntryInput>; "environment_id"?: string; "resource_id": string; "resource_type": string; "test": boolean; };
