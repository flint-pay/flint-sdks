
import type { CreatePackageRequest } from './CreatePackageRequest.js';

export type FulfillmentPackagingRequest = ({ /** Caller-owned identifier for this resource in an external system. maxLength: 255. */ "external_reference_id"?: string; "external_system"?: string; "metadata"?: Record<string, string>; "package"?: CreatePackageRequest; "packaging": string; }) & (({ "packaging": "single_package"; "package": unknown; }) | (object));
