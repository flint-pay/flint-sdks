
import type { CreateReturnEligibilityCheckRequest } from './CreateReturnEligibilityCheckRequest.js';
import type { CreateReturnResolutionPreviewRequest } from './CreateReturnResolutionPreviewRequest.js';

export type CreateReturnPreviewRequest = ({ "eligibility"?: CreateReturnEligibilityCheckRequest; "mode": "eligibility" | "resolution" | (string & {}); "resolution"?: CreateReturnResolutionPreviewRequest; }) & ((({ "mode": "eligibility"; "eligibility": unknown; })) | (({ "mode": "resolution"; "resolution": unknown; })) | (object));
