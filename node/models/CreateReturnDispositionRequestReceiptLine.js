import { d8318 as c0 } from '../descriptors/data/406.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d5913 as c1 } from '../descriptors/data/267.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d8318 as d8318 } from '../descriptors/data/406.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8318;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnDispositionRequestReceiptLine"]:c0(),["MetadataRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnDispositionRequestReceiptLine(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
