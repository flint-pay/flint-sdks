
import type { FulfillmentEventInput } from './FulfillmentEventInput.js';
import type { FulfillmentNotificationInput } from './FulfillmentNotificationInput.js';
import type { PackageInput } from './PackageInput.js';
import type { PackageStatusUpdateInput } from './PackageStatusUpdateInput.js';

export type PackageStatusUpdateResultInput = { "event"?: FulfillmentEventInput; "fulfillment_notifications"?: Array<FulfillmentNotificationInput>; "package": PackageInput; "package_status_update"?: PackageStatusUpdateInput; "unchanged"?: boolean; };
