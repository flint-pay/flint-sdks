import { d7154 as c0 } from '../descriptors/data/323.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6989 as c1, d6990 as c2, d6991 as c3, d6992 as c4 } from '../descriptors/data/314.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7154 as d7154 } from '../descriptors/data/323.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7154;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["SharedCodec614"]:c1(),["SharedCodec615"]:c2(),["SharedCodec616"]:c3(),["SharedCodec617"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerTaxExemptionCoverageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
