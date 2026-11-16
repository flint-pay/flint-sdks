import { d7640 as c0 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10059 as c1, d10066 as c2, d10067 as c3, d10068 as c4, d10070 as c5, d10071 as c6, d10072 as c7, d10073 as c8, d10074 as c9, d10075 as c10, d10076 as c11, d10077 as c12 } from '../descriptors/data/469.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9345 as c13, d9346 as c14, d9347 as c15, d9348 as c16, d9349 as c17 } from '../descriptors/data/427.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10083 as c18, d10084 as c19, d10085 as c20, d10086 as c21 } from '../descriptors/data/470.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10059 as d10059 } from '../descriptors/data/469.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRuleGroupRequest"]:c2(),["PromotionRuleRequest"]:c3(),["PromotionRuleValueRequest"]:c4(),["SharedCodec2348"]:c5(),["SharedCodec2349"]:c6(),["SharedCodec2350"]:c7(),["SharedCodec2351"]:c8(),["SharedCodec2352"]:c9(),["SharedCodec2353"]:c10(),["SharedCodec2354"]:c11(),["SharedCodec2355"]:c12(),["SharedCodec2356"]:c13(),["SharedCodec2357"]:c14(),["SharedCodec2358"]:c15(),["SharedCodec2359"]:c16(),["SharedCodec2360"]:c17(),["SharedCodec2423"]:c18(),["SharedCodec2424"]:c19(),["SharedCodec2425"]:c20(),["SharedCodec2426"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
