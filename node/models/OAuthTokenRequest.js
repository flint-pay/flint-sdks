import { d929 as c0 } from '../descriptors/data/43.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d6034 as c1, d6035 as c2, d6036 as c3, d6037 as c4, d6038 as c5, d6039 as c6, d6040 as c7, d6041 as c8, d6042 as c9 } from '../descriptors/data/278.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { d929 as d929 } from '../descriptors/data/43.js?sdk=5d52a1e5def284d74a4776bf9579736739feb879cd55107c7fc2677195d75c51';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d929;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec879"]:c1(),["SharedCodec880"]:c2(),["SharedCodec881"]:c3(),["SharedCodec882"]:c4(),["SharedCodec883"]:c5(),["SharedCodec884"]:c6(),["SharedCodec885"]:c7(),["SharedCodec886"]:c8(),["SharedCodec887"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
