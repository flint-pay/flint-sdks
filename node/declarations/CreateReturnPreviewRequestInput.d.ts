
import type { CreateReturnEligibilityCheckRequestInput } from './CreateReturnEligibilityCheckRequestInput.js';
import type { CreateReturnResolutionPreviewRequestInput } from './CreateReturnResolutionPreviewRequestInput.js';

export type CreateReturnPreviewRequestInput = ({ "eligibility"?: CreateReturnEligibilityCheckRequestInput; "mode": "eligibility" | "resolution"; "resolution"?: CreateReturnResolutionPreviewRequestInput; }) & ((({ "mode": "eligibility"; "eligibility": unknown; }) & ({ "resolution"?: never })) | (({ "mode": "resolution"; "resolution": unknown; }) & ({ "eligibility"?: never })));
