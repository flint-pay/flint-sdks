import { d5789 as c0 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1288 as c1 } from '../descriptors/data/62.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8344 as c2, d8346 as c3 } from '../descriptors/data/406.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8348 as c4, d8350 as c5, d8352 as c6, d8355 as c7, d8356 as c8, d8357 as c9, d8358 as c10, d8359 as c11, d8360 as c12, d8361 as c13, d8362 as c14, d8363 as c15, d8364 as c16, d8365 as c17 } from '../descriptors/data/407.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8366 as c18, d8367 as c19, d8368 as c20, d8369 as c21 } from '../descriptors/data/408.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1288 as d1288 } from '../descriptors/data/62.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1288;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec1490"]:c7(),["SharedCodec1491"]:c8(),["SharedCodec1492"]:c9(),["SharedCodec1493"]:c10(),["SharedCodec1494"]:c11(),["SharedCodec1495"]:c12(),["SharedCodec1496"]:c13(),["SharedCodec1497"]:c14(),["SharedCodec1498"]:c15(),["SharedCodec1499"]:c16(),["SharedCodec1500"]:c17(),["SharedCodec1501"]:c18(),["SharedCodec1502"]:c19(),["SharedCodec1503"]:c20(),["SharedCodec1504"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
