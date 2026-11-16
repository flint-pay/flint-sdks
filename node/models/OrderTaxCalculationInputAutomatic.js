import { d1059 as c0 } from '../descriptors/data/52.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { d1059 as d1059 } from '../descriptors/data/52.js?sdk=463b7ee2b27f6903a58bf01aff26d1d854fe2c26aab70e40c0514cdc6ad62453';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1059;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxCalculationInputAutomatic"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxCalculationInputAutomatic(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
