import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1377 as c1 } from '../descriptors/data/66.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8346 as c2 } from '../descriptors/data/406.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8348 as c3, d8350 as c4, d8352 as c5, d8357 as c6, d8358 as c7, d8359 as c8, d8360 as c9, d8361 as c10, d8362 as c11, d8363 as c12 } from '../descriptors/data/407.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8366 as c13, d8367 as c14, d8368 as c15, d8369 as c16 } from '../descriptors/data/408.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1377 as d1377 } from '../descriptors/data/66.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1377;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1492"]:c6(),["SharedCodec1493"]:c7(),["SharedCodec1494"]:c8(),["SharedCodec1495"]:c9(),["SharedCodec1496"]:c10(),["SharedCodec1497"]:c11(),["SharedCodec1498"]:c12(),["SharedCodec1501"]:c13(),["SharedCodec1502"]:c14(),["SharedCodec1503"]:c15(),["SharedCodec1504"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
