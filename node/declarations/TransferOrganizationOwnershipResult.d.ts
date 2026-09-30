
import type { OrganizationMembership } from './OrganizationMembership.js';

export type TransferOrganizationOwnershipResult = { "membership": OrganizationMembership; "previous_owner_user_id"?: string; };
