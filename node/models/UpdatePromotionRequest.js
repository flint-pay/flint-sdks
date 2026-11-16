import { d7640 as c0 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10059 as c1, d10062 as c2, d10066 as c3, d10067 as c4, d10068 as c5, d10070 as c6, d10071 as c7, d10072 as c8, d10073 as c9, d10074 as c10, d10075 as c11, d10076 as c12, d10077 as c13 } from '../descriptors/data/469.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9345 as c14, d9346 as c15, d9347 as c16, d9348 as c17, d9349 as c18 } from '../descriptors/data/427.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10083 as c19, d10084 as c20, d10085 as c21, d10086 as c22, d10087 as c25, d10088 as c26, d10089 as c27, d10090 as c28, d10091 as c29, d10092 as c30 } from '../descriptors/data/470.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7768 as c23 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7864 as c24 } from '../descriptors/data/342.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7534 as c31 } from '../descriptors/data/318.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7534 as d7534 } from '../descriptors/data/318.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7534;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec2348"]:c6(),["SharedCodec2349"]:c7(),["SharedCodec2350"]:c8(),["SharedCodec2351"]:c9(),["SharedCodec2352"]:c10(),["SharedCodec2353"]:c11(),["SharedCodec2354"]:c12(),["SharedCodec2355"]:c13(),["SharedCodec2356"]:c14(),["SharedCodec2357"]:c15(),["SharedCodec2358"]:c16(),["SharedCodec2359"]:c17(),["SharedCodec2360"]:c18(),["SharedCodec2423"]:c19(),["SharedCodec2424"]:c20(),["SharedCodec2425"]:c21(),["SharedCodec2426"]:c22(),["SharedCodec2977"]:c23(),["SharedCodec2980"]:c24(),["SharedCodec3068"]:c25(),["SharedCodec3069"]:c26(),["SharedCodec3070"]:c27(),["SharedCodec3071"]:c28(),["SharedCodec3072"]:c29(),["SharedCodec3073"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
