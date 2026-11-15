import { d949 as c0 } from '../descriptors/data/46.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d949 as d949 } from '../descriptors/data/46.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d949;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MarkFulfillmentPickedRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMarkFulfillmentPickedRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
