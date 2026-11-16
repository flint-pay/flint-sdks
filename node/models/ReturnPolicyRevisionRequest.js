import { d6617 as c0 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9185 as c1, d9187 as c2, d9189 as c3, d9191 as c4, d9193 as c5 } from '../descriptors/data/442.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9196 as c6, d9197 as c7, d9198 as c8, d9199 as c9, d9200 as c10, d9201 as c11, d9202 as c12, d9203 as c13, d9204 as c14, d9205 as c15, d9206 as c16, d9207 as c17, d9208 as c18, d9209 as c19, d9210 as c20 } from '../descriptors/data/443.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9185 as d9185 } from '../descriptors/data/442.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9185;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2113"]:c6(),["SharedCodec2114"]:c7(),["SharedCodec2115"]:c8(),["SharedCodec2116"]:c9(),["SharedCodec2117"]:c10(),["SharedCodec2118"]:c11(),["SharedCodec2119"]:c12(),["SharedCodec2120"]:c13(),["SharedCodec2121"]:c14(),["SharedCodec2122"]:c15(),["SharedCodec2123"]:c16(),["SharedCodec2124"]:c17(),["SharedCodec2125"]:c18(),["SharedCodec2126"]:c19(),["SharedCodec2127"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
