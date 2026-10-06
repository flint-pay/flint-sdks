import { d1925 as c0, d839 as c1, d1918 as c2, d1919 as c3, d1920 as c4, d1921 as c5, d1922 as c6, d1923 as c7, d1924 as c8 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { d1925 } from '../descriptors/data.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1925;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PackageTransitionRequest"]:c0(),["SharedCodec265"]:c1(),["SharedCodec503"]:c2(),["SharedCodec504"]:c3(),["SharedCodec505"]:c4(),["SharedCodec506"]:c5(),["SharedCodec507"]:c6(),["SharedCodec508"]:c7(),["SharedCodec509"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePackageTransitionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
