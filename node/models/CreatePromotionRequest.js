import { d359 as c0 } from '../descriptors/data/21.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7767 as c1 } from '../descriptors/data/336.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d7640 as c2 } from '../descriptors/data/327.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10060 as c3, d10061 as c4, d10063 as c5, d10064 as c6, d10065 as c7, d10066 as c8, d10067 as c9, d10068 as c10, d10069 as c11, d10071 as c12, d10072 as c13, d10073 as c14, d10074 as c15, d10075 as c16, d10078 as c22, d10079 as c23 } from '../descriptors/data/469.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d9345 as c17, d9346 as c18, d9347 as c19, d9348 as c20, d9349 as c21 } from '../descriptors/data/427.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d10080 as c24, d10083 as c25, d10084 as c26, d10085 as c27, d10086 as c28 } from '../descriptors/data/470.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { d359 as d359 } from '../descriptors/data/21.js?sdk=7316ebc4368cae4fb21e9dd0206c4938f4c5a57a259afde4b2f0fbd075469ada';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d359;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethodRequest"]:c3(),["PromotionCodeRequest"]:c4(),["PromotionCombinesWithRequest"]:c5(),["PromotionExclusivityRequest"]:c6(),["PromotionRecurrenceRequest"]:c7(),["PromotionRuleGroupRequest"]:c8(),["PromotionRuleRequest"]:c9(),["PromotionRuleValueRequest"]:c10(),["PromotionScheduleRequest"]:c11(),["SharedCodec2349"]:c12(),["SharedCodec2350"]:c13(),["SharedCodec2351"]:c14(),["SharedCodec2352"]:c15(),["SharedCodec2353"]:c16(),["SharedCodec2356"]:c17(),["SharedCodec2357"]:c18(),["SharedCodec2358"]:c19(),["SharedCodec2359"]:c20(),["SharedCodec2360"]:c21(),["SharedCodec2362"]:c22(),["SharedCodec2363"]:c23(),["SharedCodec2364"]:c24(),["SharedCodec2423"]:c25(),["SharedCodec2424"]:c26(),["SharedCodec2425"]:c27(),["SharedCodec2426"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
