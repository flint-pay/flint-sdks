
import type { ReturnEligibilityCheckInput } from './ReturnEligibilityCheckInput.js';
import type { ReturnResolutionPreviewInput } from './ReturnResolutionPreviewInput.js';

export type CreateReturnPreviewDataInput = ({ "eligibility"?: ReturnEligibilityCheckInput; "mode": "eligibility" | "resolution"; "resolution"?: ReturnResolutionPreviewInput; }) & ((({ "mode": "eligibility"; "eligibility": unknown; }) & ({ "resolution"?: never })) | (({ "mode": "resolution"; "resolution": unknown; }) & ({ "eligibility"?: never })));
