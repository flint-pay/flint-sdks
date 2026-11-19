import { d7747 as c0 } from '../descriptors/data/326.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d7747 as d7747 } from '../descriptors/data/326.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7747;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateInventoryLevelRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryLevelRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
