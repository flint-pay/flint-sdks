import { d1888 as c0, d821 as c1, d1881 as c2, d1882 as c3, d1883 as c4, d1884 as c5, d1885 as c6, d1886 as c7, d1887 as c8 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d1888 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1888;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec257"]:c1(),["SharedCodec492"]:c2(),["SharedCodec493"]:c3(),["SharedCodec494"]:c4(),["SharedCodec495"]:c5(),["SharedCodec496"]:c6(),["SharedCodec497"]:c7(),["SharedCodec498"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
