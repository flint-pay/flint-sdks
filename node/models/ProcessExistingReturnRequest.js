import { d8433 as c0 } from '../descriptors/data/372.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8434 as c1 } from '../descriptors/data/373.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7767 as c2 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c3 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10337 as c4, d10336 as c29 } from '../descriptors/data/486.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1566 as c5 } from '../descriptors/data/78.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10344 as c6, d10345 as c7, d10346 as c8, d10347 as c9, d10348 as c10 } from '../descriptors/data/487.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10263 as c11, d10265 as c19, d10266 as c20, d10267 as c21 } from '../descriptors/data/481.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10198 as c12, d10201 as c14, d10202 as c15, d10203 as c16 } from '../descriptors/data/477.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8543 as c13 } from '../descriptors/data/379.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10353 as c17, d10354 as c18 } from '../descriptors/data/488.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10268 as c22, d10269 as c23, d10270 as c24, d10271 as c25, d10272 as c26, d10273 as c28 } from '../descriptors/data/482.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d8871 as c27 } from '../descriptors/data/399.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1566 as d1566 } from '../descriptors/data/78.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1566;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MetadataRequest"]:c2(),["MoneyValue"]:c3(),["ProcessExistingReturnLineItemRequest"]:c4(),["ProcessExistingReturnRequest"]:c5(),["ReturnProcessDecision"]:c6(),["ReturnProcessDispositionRequest"]:c7(),["ReturnProcessInspectionRequest"]:c8(),["ReturnProcessReceiptRequest"]:c9(),["ReturnProcessResolutionRequest"]:c10(),["ReturnReplacementLineItemRequest"]:c11(),["ReturnSourceSystemRequest"]:c12(),["SharedCodec185"]:c13(),["SharedCodec2590"]:c14(),["SharedCodec2591"]:c15(),["SharedCodec2592"]:c16(),["SharedCodec2613"]:c17(),["SharedCodec2614"]:c18(),["SharedCodec2687"]:c19(),["SharedCodec2688"]:c20(),["SharedCodec2689"]:c21(),["SharedCodec2690"]:c22(),["SharedCodec2691"]:c23(),["SharedCodec2693"]:c24(),["SharedCodec2694"]:c25(),["SharedCodec2695"]:c26(),["SharedCodec445"]:c27(),["SharedCodec545"]:c28(),["SharedCodec551"]:c29()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeProcessExistingReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
