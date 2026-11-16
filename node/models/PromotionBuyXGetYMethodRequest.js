import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1263 as c1 } from '../descriptors/data/61.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9042 as c2, d9043 as c3, d9044 as c4, d9045 as c5, d9048 as c6, d9049 as c7, d9050 as c8, d9051 as c9, d9052 as c10 } from '../descriptors/data/436.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8322 as c11, d8323 as c12, d8324 as c13, d8325 as c14, d8326 as c15 } from '../descriptors/data/394.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9060 as c16, d9061 as c17, d9062 as c18, d9063 as c19 } from '../descriptors/data/437.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d1263 as d1263 } from '../descriptors/data/61.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1263;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionBuyXGetYMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1878"]:c6(),["SharedCodec1879"]:c7(),["SharedCodec1880"]:c8(),["SharedCodec1881"]:c9(),["SharedCodec1882"]:c10(),["SharedCodec1885"]:c11(),["SharedCodec1886"]:c12(),["SharedCodec1887"]:c13(),["SharedCodec1888"]:c14(),["SharedCodec1889"]:c15(),["SharedCodec1937"]:c16(),["SharedCodec1938"]:c17(),["SharedCodec1939"]:c18(),["SharedCodec1940"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionBuyXGetYMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
