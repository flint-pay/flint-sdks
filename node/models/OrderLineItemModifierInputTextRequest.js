import { d5913 as c0 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1036 as c1 } from '../descriptors/data/51.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d6584 as c2, d6585 as c3 } from '../descriptors/data/304.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5844 as c4 } from '../descriptors/data/262.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1036 as d1036 } from '../descriptors/data/51.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1036;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["OrderLineItemModifierInputTextRequest"]:c1(),["SharedCodec330"]:c2(),["SharedCodec331"]:c3(),["TextModifierRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderLineItemModifierInputTextRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
