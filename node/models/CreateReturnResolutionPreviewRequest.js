import { d10247 as c0 } from '../descriptors/data/480.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8433 as c1 } from '../descriptors/data/372.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8434 as c2 } from '../descriptors/data/373.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c3 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10263 as c4, d10259 as c5, d10265 as c8, d10266 as c9, d10267 as c10, d10257 as c17, d10260 as c18, d10258 as c19, d10261 as c20, d10262 as c21 } from '../descriptors/data/481.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9372 as c6, d9373 as c22 } from '../descriptors/data/428.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8543 as c7 } from '../descriptors/data/379.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10268 as c11, d10269 as c12, d10270 as c13, d10271 as c14, d10272 as c15, d10273 as c16 } from '../descriptors/data/482.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10247 as d10247 } from '../descriptors/data/480.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10247;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["ReturnReplacementLineItemRequest"]:c4(),["ReturnResolutionAdjustmentRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec185"]:c7(),["SharedCodec2687"]:c8(),["SharedCodec2688"]:c9(),["SharedCodec2689"]:c10(),["SharedCodec2690"]:c11(),["SharedCodec2691"]:c12(),["SharedCodec2693"]:c13(),["SharedCodec2694"]:c14(),["SharedCodec2695"]:c15(),["SharedCodec545"]:c16(),["SharedCodec546"]:c17(),["SharedCodec547"]:c18(),["SharedCodec548"]:c19(),["SharedCodec549"]:c20(),["SharedCodec550"]:c21(),["SharedCodec95"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
