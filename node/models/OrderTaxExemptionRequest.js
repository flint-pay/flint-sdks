import { d7154 as c0 } from '../descriptors/data/323.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8066 as c1 } from '../descriptors/data/373.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8074 as c2, d8075 as c3, d8076 as c4, d8077 as c5, d8078 as c6, d8079 as c7, d8080 as c8 } from '../descriptors/data/374.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6989 as c9, d6990 as c10, d6991 as c11, d6992 as c12 } from '../descriptors/data/314.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8066 as d8066 } from '../descriptors/data/373.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8066;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionRequest"]:c1(),["SharedCodec1488"]:c2(),["SharedCodec1489"]:c3(),["SharedCodec1490"]:c4(),["SharedCodec1491"]:c5(),["SharedCodec1492"]:c6(),["SharedCodec1493"]:c7(),["SharedCodec1494"]:c8(),["SharedCodec614"]:c9(),["SharedCodec615"]:c10(),["SharedCodec616"]:c11(),["SharedCodec617"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
