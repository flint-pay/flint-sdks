
import type { CreatePackageRequestInput } from './CreatePackageRequestInput.js';

export type FulfillmentPackagingRequestInput = ({ /** Caller-owned identifier for this resource in an external system. maxLength: 255. */ "external_reference_id"?: string; "external_system"?: string; "metadata"?: Record<string, string>; "package"?: CreatePackageRequestInput; "packaging": string; }) & (({ "packaging": "single_package"; "package": unknown; }));
