import { d373 as c0 } from '../descriptors/data/22.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7767 as c1 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c2 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10208 as c3, d10210 as c4, d10212 as c5, d10214 as c6, d10216 as c7 } from '../descriptors/data/478.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10219 as c8, d10220 as c9, d10221 as c10, d10222 as c11, d10223 as c12, d10224 as c13, d10225 as c14, d10226 as c15, d10227 as c16, d10228 as c17, d10229 as c18, d10230 as c19, d10231 as c20, d10232 as c21, d10233 as c22 } from '../descriptors/data/479.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d373 as d373 } from '../descriptors/data/22.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d373;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec2644"]:c8(),["SharedCodec2645"]:c9(),["SharedCodec2646"]:c10(),["SharedCodec2647"]:c11(),["SharedCodec2648"]:c12(),["SharedCodec2649"]:c13(),["SharedCodec2650"]:c14(),["SharedCodec2651"]:c15(),["SharedCodec2652"]:c16(),["SharedCodec2653"]:c17(),["SharedCodec2654"]:c18(),["SharedCodec2655"]:c19(),["SharedCodec2656"]:c20(),["SharedCodec2657"]:c21(),["SharedCodec2658"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
