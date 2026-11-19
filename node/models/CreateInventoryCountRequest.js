import { d308 as c0 } from '../descriptors/data/16.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { d308 as d308 } from '../descriptors/data/16.js?sdk=28de873c3713c61c93d1cd1d4cf98eeb9205b09c8d03bd47e8c0d502249adc12';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d308;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateInventoryCountRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateInventoryCountRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
