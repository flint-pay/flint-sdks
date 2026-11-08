import { d930 as c0 } from '../descriptors/data/43.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6034 as c1, d6035 as c2, d6036 as c3, d6037 as c4 } from '../descriptors/data/278.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d930 as d930 } from '../descriptors/data/43.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d930;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestAuthorizationCode"]:c0(),["SharedCodec879"]:c1(),["SharedCodec880"]:c2(),["SharedCodec881"]:c3(),["SharedCodec882"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestAuthorizationCode(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
