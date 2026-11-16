import { d6617 as c0 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1290 as c1 } from '../descriptors/data/62.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9185 as c2, d9187 as c3, d9189 as c4, d9191 as c5, d9193 as c6 } from '../descriptors/data/442.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9196 as c7, d9197 as c8, d9198 as c9, d9199 as c10, d9200 as c11, d9201 as c12, d9202 as c13, d9203 as c14, d9204 as c15, d9205 as c16, d9206 as c17, d9207 as c18, d9208 as c19, d9209 as c20, d9210 as c21 } from '../descriptors/data/443.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1290 as d1290 } from '../descriptors/data/62.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1290;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PublishReturnPolicyRevisionRequest"]:c1(),["ReturnPolicyRevisionRequest"]:c2(),["ReturnPolicyScopeRequest"]:c3(),["ReturnRestockingFeePolicyRequest"]:c4(),["ReturnShippingPolicyRequest"]:c5(),["ReturnWindowRequest"]:c6(),["SharedCodec2113"]:c7(),["SharedCodec2114"]:c8(),["SharedCodec2115"]:c9(),["SharedCodec2116"]:c10(),["SharedCodec2117"]:c11(),["SharedCodec2118"]:c12(),["SharedCodec2119"]:c13(),["SharedCodec2120"]:c14(),["SharedCodec2121"]:c15(),["SharedCodec2122"]:c16(),["SharedCodec2123"]:c17(),["SharedCodec2124"]:c18(),["SharedCodec2125"]:c19(),["SharedCodec2126"]:c20(),["SharedCodec2127"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePublishReturnPolicyRevisionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
