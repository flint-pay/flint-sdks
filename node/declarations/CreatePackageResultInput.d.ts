
import type { FulfillmentEventInput } from './FulfillmentEventInput.js';
import type { FulfillmentNotificationInput } from './FulfillmentNotificationInput.js';
import type { PackageInput } from './PackageInput.js';

export type CreatePackageResultInput = { "fulfillment_event"?: FulfillmentEventInput; "fulfillment_notifications"?: Array<FulfillmentNotificationInput>; "package": PackageInput; "replayed"?: boolean; };
