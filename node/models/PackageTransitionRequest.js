import { d1886 as c0, d819 as c1, d1879 as c2, d1880 as c3, d1881 as c4, d1882 as c5, d1883 as c6, d1884 as c7, d1885 as c8 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { d1886 } from '../descriptors/data.js?sdk=41ea09ad124ffa3bdfba4a8208bd0391cd6fb609c70d062a00cb64936b55a83b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1886;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec257"]:c1(),["SharedCodec492"]:c2(),["SharedCodec493"]:c3(),["SharedCodec494"]:c4(),["SharedCodec495"]:c5(),["SharedCodec496"]:c6(),["SharedCodec497"]:c7(),["SharedCodec498"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
