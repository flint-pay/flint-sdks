
import type { InventoryAssignment } from './InventoryAssignment.js';
import type { InventoryReservationOwner } from './InventoryReservationOwner.js';
import type { InventoryRoutingDemand } from './InventoryRoutingDemand.js';
import type { InventoryRoutingSourceRequest } from './InventoryRoutingSourceRequest.js';

export type CreateInventoryReservationRequest = { "assignments"?: Array<InventoryAssignment>; "demands": Array<InventoryRoutingDemand>; "destination_fingerprint"?: string; "inventory_routing_source": InventoryRoutingSourceRequest; "owner": InventoryReservationOwner; };
