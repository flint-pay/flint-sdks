import { d1883 as c0, d790 as c1, d1876 as c2, d1877 as c3, d1878 as c4, d1879 as c5, d1880 as c6, d1881 as c7, d1882 as c8 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d1883 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1883;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec229"]:c1(),["SharedCodec466"]:c2(),["SharedCodec467"]:c3(),["SharedCodec468"]:c4(),["SharedCodec469"]:c5(),["SharedCodec470"]:c6(),["SharedCodec471"]:c7(),["SharedCodec472"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
