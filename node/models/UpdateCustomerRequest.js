import { d7161 as c0, d7152 as c3, d7153 as c4, d7162 as c8, d7163 as c9 } from '../descriptors/data/323.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6842 as c1, d6843 as c2 } from '../descriptors/data/306.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6746 as c5, d6747 as c6, d6745 as c7 } from '../descriptors/data/300.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d7120 as c10, d7121 as c11, d7122 as c12 } from '../descriptors/data/321.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6469 as c13 } from '../descriptors/data/279.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d6469 as d6469 } from '../descriptors/data/279.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6469;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DocumentTaxIDRequest"]:c0(),["SharedCodec0"]:c1(),["SharedCodec1"]:c2(),["SharedCodec1321"]:c3(),["SharedCodec1322"]:c4(),["SharedCodec2404"]:c5(),["SharedCodec2405"]:c6(),["SharedCodec2406"]:c7(),["SharedCodec2411"]:c8(),["SharedCodec2412"]:c9(),["SharedCodec2413"]:c10(),["SharedCodec2414"]:c11(),["SharedCodec2415"]:c12(),["UpdateCustomerRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateCustomerRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
