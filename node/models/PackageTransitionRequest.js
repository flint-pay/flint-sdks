import { d1932 as c0, d845 as c1, d1925 as c2, d1926 as c3, d1927 as c4, d1928 as c5, d1929 as c6, d1930 as c7, d1931 as c8 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { d1932 } from '../descriptors/data.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1932;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec269"]:c1(),["SharedCodec508"]:c2(),["SharedCodec509"]:c3(),["SharedCodec510"]:c4(),["SharedCodec511"]:c5(),["SharedCodec512"]:c6(),["SharedCodec513"]:c7(),["SharedCodec514"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
