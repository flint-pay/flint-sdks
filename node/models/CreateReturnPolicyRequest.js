import { d344 as c0 } from '../descriptors/data/21.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5918 as c1 } from '../descriptors/data/265.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d5789 as c2 } from '../descriptors/data/256.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8344 as c3, d8346 as c4 } from '../descriptors/data/406.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8348 as c5, d8350 as c6, d8352 as c7, d8355 as c8, d8356 as c9, d8357 as c10, d8358 as c11, d8359 as c12, d8360 as c13, d8361 as c14, d8362 as c15, d8363 as c16, d8364 as c17, d8365 as c18 } from '../descriptors/data/407.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d8366 as c19, d8367 as c20, d8368 as c21, d8369 as c22 } from '../descriptors/data/408.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d344 as d344 } from '../descriptors/data/21.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d344;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnPolicyRequest"]:c0(),["MetadataRequest"]:c1(),["MoneyValue"]:c2(),["ReturnPolicyRevisionRequest"]:c3(),["ReturnPolicyScopeRequest"]:c4(),["ReturnRestockingFeePolicyRequest"]:c5(),["ReturnShippingPolicyRequest"]:c6(),["ReturnWindowRequest"]:c7(),["SharedCodec1490"]:c8(),["SharedCodec1491"]:c9(),["SharedCodec1492"]:c10(),["SharedCodec1493"]:c11(),["SharedCodec1494"]:c12(),["SharedCodec1495"]:c13(),["SharedCodec1496"]:c14(),["SharedCodec1497"]:c15(),["SharedCodec1498"]:c16(),["SharedCodec1499"]:c17(),["SharedCodec1500"]:c18(),["SharedCodec1501"]:c19(),["SharedCodec1502"]:c20(),["SharedCodec1503"]:c21(),["SharedCodec1504"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPolicyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
