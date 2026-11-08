import { d933 as c0 } from '../descriptors/data/44.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6034 as c1, d6035 as c2, d6036 as c3, d6037 as c4, d6042 as c5 } from '../descriptors/data/278.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d933 as d933 } from '../descriptors/data/44.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d933;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequestTokenExchange"]:c0(),["SharedCodec879"]:c1(),["SharedCodec880"]:c2(),["SharedCodec881"]:c3(),["SharedCodec882"]:c4(),["SharedCodec887"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequestTokenExchange(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
