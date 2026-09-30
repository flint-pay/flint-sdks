
import type { InventoryAssignmentInput } from './InventoryAssignmentInput.js';
import type { InventoryReservationOwnerInput } from './InventoryReservationOwnerInput.js';
import type { InventoryRoutingDemandInput } from './InventoryRoutingDemandInput.js';
import type { InventoryRoutingSourceRequestInput } from './InventoryRoutingSourceRequestInput.js';

export type CreateInventoryReservationRequestInput = { "assignments"?: Array<InventoryAssignmentInput>; "demands": Array<InventoryRoutingDemandInput>; "destination_fingerprint"?: string; "inventory_routing_source": InventoryRoutingSourceRequestInput; "owner": InventoryReservationOwnerInput; };
