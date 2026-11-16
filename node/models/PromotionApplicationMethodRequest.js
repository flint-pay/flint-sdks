import { d6617 as c0 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9037 as c1, d9042 as c2, d9043 as c3, d9044 as c4, d9045 as c5, d9048 as c6, d9049 as c7, d9050 as c8, d9051 as c9, d9052 as c10, d9055 as c16, d9056 as c17 } from '../descriptors/data/436.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8322 as c11, d8323 as c12, d8324 as c13, d8325 as c14, d8326 as c15 } from '../descriptors/data/394.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9057 as c18, d9060 as c19, d9061 as c20, d9062 as c21, d9063 as c22 } from '../descriptors/data/437.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9037 as d9037 } from '../descriptors/data/436.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9037;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodRequest"]:c1(),["PromotionRecurrenceRequest"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1878"]:c6(),["SharedCodec1879"]:c7(),["SharedCodec1880"]:c8(),["SharedCodec1881"]:c9(),["SharedCodec1882"]:c10(),["SharedCodec1885"]:c11(),["SharedCodec1886"]:c12(),["SharedCodec1887"]:c13(),["SharedCodec1888"]:c14(),["SharedCodec1889"]:c15(),["SharedCodec1890"]:c16(),["SharedCodec1891"]:c17(),["SharedCodec1892"]:c18(),["SharedCodec1937"]:c19(),["SharedCodec1938"]:c20(),["SharedCodec1939"]:c21(),["SharedCodec1940"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
