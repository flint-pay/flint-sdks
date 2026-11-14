import { d1002 as c0 } from '../descriptors/data/49.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7640 as c1, d7641 as c2, d7642 as c3, d7643 as c4, d7644 as c5, d7645 as c6, d7646 as c7, d7647 as c8, d7648 as c9 } from '../descriptors/data/365.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d7649 as c10 } from '../descriptors/data/366.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { d1002 as d1002 } from '../descriptors/data/49.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1002;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1038"]:c1(),["SharedCodec1039"]:c2(),["SharedCodec1040"]:c3(),["SharedCodec1041"]:c4(),["SharedCodec1042"]:c5(),["SharedCodec1043"]:c6(),["SharedCodec1044"]:c7(),["SharedCodec1045"]:c8(),["SharedCodec1046"]:c9(),["SharedCodec1047"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
