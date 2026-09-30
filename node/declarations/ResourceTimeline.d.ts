
import type { ResourceTimelineEntry } from './ResourceTimelineEntry.js';

export type ResourceTimeline = { "entries": Array<ResourceTimelineEntry>; "environment_id"?: string; "resource_id": string; "resource_type": string; "test": boolean; };
