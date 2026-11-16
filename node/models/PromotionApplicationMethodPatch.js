import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9036 as c1, d9043 as c2, d9044 as c3, d9045 as c4, d9047 as c5, d9048 as c6, d9049 as c7, d9050 as c8, d9051 as c9, d9052 as c10, d9053 as c11, d9054 as c12 } from '../descriptors/data/436.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8322 as c13, d8323 as c14, d8324 as c15, d8325 as c16, d8326 as c17 } from '../descriptors/data/394.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9060 as c18, d9061 as c19, d9062 as c20, d9063 as c21 } from '../descriptors/data/437.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9036 as d9036 } from '../descriptors/data/436.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9036;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRuleGroupRequest"]:c2(),["PromotionRuleRequest"]:c3(),["PromotionRuleValueRequest"]:c4(),["SharedCodec1877"]:c5(),["SharedCodec1878"]:c6(),["SharedCodec1879"]:c7(),["SharedCodec1880"]:c8(),["SharedCodec1881"]:c9(),["SharedCodec1882"]:c10(),["SharedCodec1883"]:c11(),["SharedCodec1884"]:c12(),["SharedCodec1885"]:c13(),["SharedCodec1886"]:c14(),["SharedCodec1887"]:c15(),["SharedCodec1888"]:c16(),["SharedCodec1889"]:c17(),["SharedCodec1937"]:c18(),["SharedCodec1938"]:c19(),["SharedCodec1939"]:c20(),["SharedCodec1940"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
