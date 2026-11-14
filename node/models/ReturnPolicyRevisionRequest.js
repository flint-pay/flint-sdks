import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8344 as c1, d8346 as c2 } from '../descriptors/data/406.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8348 as c3, d8350 as c4, d8352 as c5, d8355 as c6, d8356 as c7, d8357 as c8, d8358 as c9, d8359 as c10, d8360 as c11, d8361 as c12, d8362 as c13, d8363 as c14, d8364 as c15, d8365 as c16 } from '../descriptors/data/407.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8366 as c17, d8367 as c18, d8368 as c19, d8369 as c20 } from '../descriptors/data/408.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8344 as d8344 } from '../descriptors/data/406.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8344;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec1490"]:c6(),["SharedCodec1491"]:c7(),["SharedCodec1492"]:c8(),["SharedCodec1493"]:c9(),["SharedCodec1494"]:c10(),["SharedCodec1495"]:c11(),["SharedCodec1496"]:c12(),["SharedCodec1497"]:c13(),["SharedCodec1498"]:c14(),["SharedCodec1499"]:c15(),["SharedCodec1500"]:c16(),["SharedCodec1501"]:c17(),["SharedCodec1502"]:c18(),["SharedCodec1503"]:c19(),["SharedCodec1504"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
