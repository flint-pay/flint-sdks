import { d2473 as c0, d2474 as c1, d2330 as c2, d2331 as c3, d2475 as c4 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d2475 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2475;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec661"]:c0(),["SharedCodec662"]:c1(),["ShippingDimensions"]:c2(),["ShippingWeight"]:c3(),["UpdatePackageRequest"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdatePackageRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
