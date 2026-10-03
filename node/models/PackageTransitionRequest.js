import { d1885 as c0, d819 as c1, d1878 as c2, d1879 as c3, d1880 as c4, d1881 as c5, d1882 as c6, d1883 as c7, d1884 as c8 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { d1885 } from '../descriptors/data.js?sdk=a6b376902242b69271e8ff7d7046c24b4e5476233434e4180a046d09fed7dde4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1885;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec257"]:c1(),["SharedCodec492"]:c2(),["SharedCodec493"]:c3(),["SharedCodec494"]:c4(),["SharedCodec495"]:c5(),["SharedCodec496"]:c6(),["SharedCodec497"]:c7(),["SharedCodec498"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
