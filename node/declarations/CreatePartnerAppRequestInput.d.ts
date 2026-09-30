
import type { PartnerAppPermissionManifestEntryInput } from './PartnerAppPermissionManifestEntryInput.js';

export type CreatePartnerAppRequestInput = { "api_version"?: string; "app_type"?: string; "default_requested_permissions"?: Array<string>; "name": string; "permission_manifest": Array<PartnerAppPermissionManifestEntryInput>; "redirect_uris": Array<string>; "visibility"?: string; };
