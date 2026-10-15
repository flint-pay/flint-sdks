import { d1941 as c0, d821 as c1, d1934 as c2, d1935 as c3, d1936 as c4, d1937 as c5, d1938 as c6, d1939 as c7, d1940 as c8 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d1941 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1941;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec244"]:c1(),["SharedCodec489"]:c2(),["SharedCodec490"]:c3(),["SharedCodec491"]:c4(),["SharedCodec492"]:c5(),["SharedCodec493"]:c6(),["SharedCodec494"]:c7(),["SharedCodec495"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
