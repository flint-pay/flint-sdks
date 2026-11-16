import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9036 as c1, d9039 as c2, d9043 as c3, d9044 as c4, d9045 as c5, d9047 as c6, d9048 as c7, d9049 as c8, d9050 as c9, d9051 as c10, d9052 as c11, d9053 as c12, d9054 as c13 } from '../descriptors/data/436.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8322 as c14, d8323 as c15, d8324 as c16, d8325 as c17, d8326 as c18 } from '../descriptors/data/394.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9060 as c19, d9061 as c20, d9062 as c21, d9063 as c22, d9064 as c25, d9065 as c26, d9066 as c27, d9067 as c28, d9068 as c29, d9069 as c30 } from '../descriptors/data/437.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6745 as c23 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6841 as c24 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6512 as c31 } from '../descriptors/data/285.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6512 as d6512 } from '../descriptors/data/285.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6512;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionCombinesWithPatch"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1877"]:c6(),["SharedCodec1878"]:c7(),["SharedCodec1879"]:c8(),["SharedCodec1880"]:c9(),["SharedCodec1881"]:c10(),["SharedCodec1882"]:c11(),["SharedCodec1883"]:c12(),["SharedCodec1884"]:c13(),["SharedCodec1885"]:c14(),["SharedCodec1886"]:c15(),["SharedCodec1887"]:c16(),["SharedCodec1888"]:c17(),["SharedCodec1889"]:c18(),["SharedCodec1937"]:c19(),["SharedCodec1938"]:c20(),["SharedCodec1939"]:c21(),["SharedCodec1940"]:c22(),["SharedCodec2406"]:c23(),["SharedCodec2409"]:c24(),["SharedCodec2497"]:c25(),["SharedCodec2498"]:c26(),["SharedCodec2499"]:c27(),["SharedCodec2500"]:c28(),["SharedCodec2501"]:c29(),["SharedCodec2502"]:c30(),["UpdatePromotionRequest"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
