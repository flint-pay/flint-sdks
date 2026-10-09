import { d1930 as c0, d811 as c1, d1923 as c2, d1924 as c3, d1925 as c4, d1926 as c5, d1927 as c6, d1928 as c7, d1929 as c8 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { d1930 } from '../descriptors/data.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1930;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec238"]:c1(),["SharedCodec484"]:c2(),["SharedCodec485"]:c3(),["SharedCodec486"]:c4(),["SharedCodec487"]:c5(),["SharedCodec488"]:c6(),["SharedCodec489"]:c7(),["SharedCodec490"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
