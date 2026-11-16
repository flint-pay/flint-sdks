import { d352 as c0 } from '../descriptors/data/21.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9265 as c1, d9266 as c7, d9267 as c8, d9268 as c9, d9269 as c10, d9270 as c11, d9271 as c12 } from '../descriptors/data/447.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9175 as c2, d9178 as c4, d9179 as c5, d9180 as c6 } from '../descriptors/data/441.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d9281 as c3 } from '../descriptors/data/448.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7848 as c13 } from '../descriptors/data/363.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d352 as d352 } from '../descriptors/data/21.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d352;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec2087"]:c4(),["SharedCodec2088"]:c5(),["SharedCodec2089"]:c6(),["SharedCodec2131"]:c7(),["SharedCodec2132"]:c8(),["SharedCodec2133"]:c9(),["SharedCodec2134"]:c10(),["SharedCodec2135"]:c11(),["SharedCodec2136"]:c12(),["SharedCodec388"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
