import { d9265 as c0, d9266 as c2, d9267 as c3, d9268 as c4, d9269 as c5, d9270 as c6, d9271 as c7 } from '../descriptors/data/447.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9281 as c1 } from '../descriptors/data/448.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9265 as d9265 } from '../descriptors/data/447.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9265;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2131"]:c2(),["SharedCodec2132"]:c3(),["SharedCodec2133"]:c4(),["SharedCodec2134"]:c5(),["SharedCodec2135"]:c6(),["SharedCodec2136"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
