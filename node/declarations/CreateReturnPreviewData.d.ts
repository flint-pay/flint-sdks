
import type { ReturnEligibilityCheck } from './ReturnEligibilityCheck.js';
import type { ReturnResolutionPreview } from './ReturnResolutionPreview.js';

export type CreateReturnPreviewData = ({ "eligibility"?: ReturnEligibilityCheck; "mode": "eligibility" | "resolution" | (string & {}); "resolution"?: ReturnResolutionPreview; }) & ((({ "mode": "eligibility"; "eligibility": unknown; })) | (({ "mode": "resolution"; "resolution": unknown; })) | (object));
