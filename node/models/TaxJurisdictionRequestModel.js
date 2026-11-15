import { d7263 as c0 } from '../descriptors/data/342.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7263 as d7263 } from '../descriptors/data/342.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7263;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["TaxJurisdictionRequestModel"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeTaxJurisdictionRequestModel(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
