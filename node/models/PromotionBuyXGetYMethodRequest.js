import { d7640 as c0 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1599 as c1 } from '../descriptors/data/80.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10065 as c2, d10066 as c3, d10067 as c4, d10068 as c5, d10071 as c6, d10072 as c7, d10073 as c8, d10074 as c9, d10075 as c10 } from '../descriptors/data/469.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9345 as c11, d9346 as c12, d9347 as c13, d9348 as c14, d9349 as c15 } from '../descriptors/data/427.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10083 as c16, d10084 as c17, d10085 as c18, d10086 as c19 } from '../descriptors/data/470.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d1599 as d1599 } from '../descriptors/data/80.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1599;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionBuyXGetYMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2349"]:c6(),["SharedCodec2350"]:c7(),["SharedCodec2351"]:c8(),["SharedCodec2352"]:c9(),["SharedCodec2353"]:c10(),["SharedCodec2356"]:c11(),["SharedCodec2357"]:c12(),["SharedCodec2358"]:c13(),["SharedCodec2359"]:c14(),["SharedCodec2360"]:c15(),["SharedCodec2423"]:c16(),["SharedCodec2424"]:c17(),["SharedCodec2425"]:c18(),["SharedCodec2426"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionBuyXGetYMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
