import { d8590 as c0 } from '../descriptors/data/422.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8590 as d8590 } from '../descriptors/data/422.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8590;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerAccountPresentationRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCustomerAccountPresentationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
