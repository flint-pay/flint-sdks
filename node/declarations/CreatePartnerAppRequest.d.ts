
import type { PartnerAppPermissionManifestEntry } from './PartnerAppPermissionManifestEntry.js';

export type CreatePartnerAppRequest = { "api_version"?: string; "app_type"?: string; "default_requested_permissions"?: Array<string>; "name": string; "permission_manifest": Array<PartnerAppPermissionManifestEntry>; "redirect_uris": Array<string>; "visibility"?: string; };
