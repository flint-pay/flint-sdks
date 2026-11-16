import { d7154 as c0 } from '../descriptors/data/323.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1063 as c1 } from '../descriptors/data/52.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d8076 as c2 } from '../descriptors/data/374.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6989 as c3, d6990 as c4, d6991 as c5, d6992 as c6 } from '../descriptors/data/314.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1063 as d1063 } from '../descriptors/data/52.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1063;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["OrderTaxExemptionInputOrder"]:c1(),["SharedCodec1490"]:c2(),["SharedCodec614"]:c3(),["SharedCodec615"]:c4(),["SharedCodec616"]:c5(),["SharedCodec617"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputOrder(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
