import { d1899 as c0, d827 as c1, d1892 as c2, d1893 as c3, d1894 as c4, d1895 as c5, d1896 as c6, d1897 as c7, d1898 as c8 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { d1899 } from '../descriptors/data.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1899;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec264"]:c1(),["SharedCodec501"]:c2(),["SharedCodec502"]:c3(),["SharedCodec503"]:c4(),["SharedCodec504"]:c5(),["SharedCodec505"]:c6(),["SharedCodec506"]:c7(),["SharedCodec507"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
