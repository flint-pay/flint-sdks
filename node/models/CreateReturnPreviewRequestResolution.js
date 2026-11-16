import { d9351 as c0, d9353 as c6, d9355 as c7, d9372 as c10, d9361 as c12, d9363 as c13, d9364 as c14, d9365 as c15, d9371 as c30, d9373 as c31 } from '../descriptors/data/428.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d379 as c1 } from '../descriptors/data/23.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10247 as c2 } from '../descriptors/data/480.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8433 as c3 } from '../descriptors/data/372.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8434 as c4 } from '../descriptors/data/373.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c5 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10263 as c8, d10259 as c9, d10265 as c16, d10266 as c17, d10267 as c18, d10257 as c25, d10260 as c26, d10258 as c27, d10261 as c28, d10262 as c29 } from '../descriptors/data/481.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8543 as c11 } from '../descriptors/data/379.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10268 as c19, d10269 as c20, d10270 as c21, d10271 as c22, d10272 as c23, d10273 as c24 } from '../descriptors/data/482.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d379 as d379 } from '../descriptors/data/23.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d379;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestResolution"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["ReturnEligibilityLineItemRequestModel"]:c6(),["ReturnEligibilitySelectionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec185"]:c11(),["SharedCodec2579"]:c12(),["SharedCodec2581"]:c13(),["SharedCodec2582"]:c14(),["SharedCodec2583"]:c15(),["SharedCodec2687"]:c16(),["SharedCodec2688"]:c17(),["SharedCodec2689"]:c18(),["SharedCodec2690"]:c19(),["SharedCodec2691"]:c20(),["SharedCodec2693"]:c21(),["SharedCodec2694"]:c22(),["SharedCodec2695"]:c23(),["SharedCodec545"]:c24(),["SharedCodec546"]:c25(),["SharedCodec547"]:c26(),["SharedCodec548"]:c27(),["SharedCodec549"]:c28(),["SharedCodec550"]:c29(),["SharedCodec94"]:c30(),["SharedCodec95"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
