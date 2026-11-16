import { d55 as c0 } from '../descriptors/data/2.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9131 as c1 } from '../descriptors/data/411.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9178 as c2 } from '../descriptors/data/417.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9351 as c3, d9353 as c4, d9355 as c5, d9372 as c6, d9361 as c11, d9363 as c12, d9364 as c13, d9365 as c14, d9370 as c15, d9373 as c16 } from '../descriptors/data/428.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9203 as c7, d9204 as c8, d9205 as c9, d9206 as c10 } from '../descriptors/data/420.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d55 as d55 } from '../descriptors/data/2.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d55;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestEligibility"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec160"]:c7(),["SharedCodec161"]:c8(),["SharedCodec162"]:c9(),["SharedCodec163"]:c10(),["SharedCodec2579"]:c11(),["SharedCodec2581"]:c12(),["SharedCodec2582"]:c13(),["SharedCodec2583"]:c14(),["SharedCodec92"]:c15(),["SharedCodec95"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestEligibility(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
