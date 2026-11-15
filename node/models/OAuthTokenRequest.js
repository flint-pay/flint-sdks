import { d1001 as c0 } from '../descriptors/data/48.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7639 as c1, d7640 as c2, d7641 as c3, d7642 as c4, d7643 as c5, d7644 as c6, d7645 as c7 } from '../descriptors/data/366.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d7646 as c8, d7647 as c9, d7648 as c10 } from '../descriptors/data/367.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { d1001 as d1001 } from '../descriptors/data/48.js?sdk=513933eb08321b1bd31a508ce821abc4e8f5336e7471bda2d4342f2bcff1eef8';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1001;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1039"]:c1(),["SharedCodec1040"]:c2(),["SharedCodec1041"]:c3(),["SharedCodec1042"]:c4(),["SharedCodec1043"]:c5(),["SharedCodec1044"]:c6(),["SharedCodec1045"]:c7(),["SharedCodec1046"]:c8(),["SharedCodec1047"]:c9(),["SharedCodec1048"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
