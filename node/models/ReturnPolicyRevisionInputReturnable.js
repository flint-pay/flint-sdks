import { d6617 as c0 } from '../descriptors/data/291.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1379 as c1 } from '../descriptors/data/65.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9187 as c2, d9189 as c3, d9191 as c4, d9193 as c5 } from '../descriptors/data/442.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9198 as c6, d9199 as c7, d9200 as c8, d9201 as c9, d9202 as c10, d9203 as c11, d9204 as c12, d9207 as c13, d9208 as c14, d9209 as c15, d9210 as c16 } from '../descriptors/data/443.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1379 as d1379 } from '../descriptors/data/65.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1379;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnPolicyRevisionInputReturnable"]:c1(),["ReturnPolicyScopeRequest"]:c2(),["ReturnRestockingFeePolicyRequest"]:c3(),["ReturnShippingPolicyRequest"]:c4(),["ReturnWindowRequest"]:c5(),["SharedCodec2115"]:c6(),["SharedCodec2116"]:c7(),["SharedCodec2117"]:c8(),["SharedCodec2118"]:c9(),["SharedCodec2119"]:c10(),["SharedCodec2120"]:c11(),["SharedCodec2121"]:c12(),["SharedCodec2124"]:c13(),["SharedCodec2125"]:c14(),["SharedCodec2126"]:c15(),["SharedCodec2127"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyRevisionInputReturnable(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
