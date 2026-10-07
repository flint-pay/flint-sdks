import { d1926 as c0, d839 as c1, d1919 as c2, d1920 as c3, d1921 as c4, d1922 as c5, d1923 as c6, d1924 as c7, d1925 as c8 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d1926 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1926;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec265"]:c1(),["SharedCodec504"]:c2(),["SharedCodec505"]:c3(),["SharedCodec506"]:c4(),["SharedCodec507"]:c5(),["SharedCodec508"]:c6(),["SharedCodec509"]:c7(),["SharedCodec510"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
