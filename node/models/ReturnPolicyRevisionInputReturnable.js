import { d7640 as c0 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1766 as c1 } from '../descriptors/data/88.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10210 as c2, d10212 as c3, d10214 as c4, d10216 as c5 } from '../descriptors/data/478.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10221 as c6, d10222 as c7, d10223 as c8, d10224 as c9, d10225 as c10, d10226 as c11, d10227 as c12, d10230 as c13, d10231 as c14, d10232 as c15, d10233 as c16 } from '../descriptors/data/479.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1766 as d1766 } from '../descriptors/data/88.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1766;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2646"]:c6(),["SharedCodec2647"]:c7(),["SharedCodec2648"]:c8(),["SharedCodec2649"]:c9(),["SharedCodec2650"]:c10(),["SharedCodec2651"]:c11(),["SharedCodec2652"]:c12(),["SharedCodec2655"]:c13(),["SharedCodec2656"]:c14(),["SharedCodec2657"]:c15(),["SharedCodec2658"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
