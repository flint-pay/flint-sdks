
import type { PartnerAuthorizePreviewPermission } from './PartnerAuthorizePreviewPermission.js';

export type PartnerAuthorizePreview = { "app_type": "server" | "plugin" | (string & {}); "client_id": string; "mode": "test" | "live" | (string & {}); "name": string; "partner_app_id": string; "redirect_uri": string; "requested_permission_ids": Array<string>; "requested_permissions": Array<PartnerAuthorizePreviewPermission>; };
