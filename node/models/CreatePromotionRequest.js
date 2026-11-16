import { d328 as c0 } from '../descriptors/data/19.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6744 as c1 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c2 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9037 as c3, d9038 as c4, d9040 as c5, d9041 as c6, d9042 as c7, d9043 as c8, d9044 as c9, d9045 as c10, d9046 as c11, d9048 as c12, d9049 as c13, d9050 as c14, d9051 as c15, d9052 as c16, d9055 as c22, d9056 as c23 } from '../descriptors/data/436.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8322 as c17, d8323 as c18, d8324 as c19, d8325 as c20, d8326 as c21 } from '../descriptors/data/394.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d9057 as c24, d9060 as c25, d9061 as c26, d9062 as c27, d9063 as c28 } from '../descriptors/data/437.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d328 as d328 } from '../descriptors/data/19.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d328;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethodRequest"]:c3(),["PromotionCodeRequest"]:c4(),["PromotionCombinesWithRequest"]:c5(),["PromotionExclusivityRequest"]:c6(),["PromotionRecurrenceRequest"]:c7(),["PromotionRuleGroupRequest"]:c8(),["PromotionRuleRequest"]:c9(),["PromotionRuleValueRequest"]:c10(),["PromotionScheduleRequest"]:c11(),["SharedCodec1878"]:c12(),["SharedCodec1879"]:c13(),["SharedCodec1880"]:c14(),["SharedCodec1881"]:c15(),["SharedCodec1882"]:c16(),["SharedCodec1885"]:c17(),["SharedCodec1886"]:c18(),["SharedCodec1887"]:c19(),["SharedCodec1888"]:c20(),["SharedCodec1889"]:c21(),["SharedCodec1890"]:c22(),["SharedCodec1891"]:c23(),["SharedCodec1892"]:c24(),["SharedCodec1937"]:c25(),["SharedCodec1938"]:c26(),["SharedCodec1939"]:c27(),["SharedCodec1940"]:c28()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
