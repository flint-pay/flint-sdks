
import type { PartnerAuthorizePreviewPermissionInput } from './PartnerAuthorizePreviewPermissionInput.js';

export type PartnerAuthorizePreviewInput = { "app_type": "server" | "plugin"; "client_id": string; "mode": "test" | "live"; "name": string; "partner_app_id": string; "redirect_uri": string; "requested_permission_ids": Array<string>; "requested_permissions": Array<PartnerAuthorizePreviewPermissionInput>; };
