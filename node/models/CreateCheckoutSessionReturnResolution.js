import { d8222 as c0, d8219 as c2, d8220 as c3, d8221 as c4 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d251 as c1 } from '../descriptors/data/12.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8067 as c5, d8068 as c6, d8069 as c7 } from '../descriptors/data/350.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8083 as c8, d8084 as c9 } from '../descriptors/data/352.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d251 as d251 } from '../descriptors/data/12.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d251;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionReturnResolution"]:c1(),["SharedCodec347"]:c2(),["SharedCodec348"]:c3(),["SharedCodec349"]:c4(),["SharedCodec350"]:c5(),["SharedCodec351"]:c6(),["SharedCodec352"]:c7(),["SharedCodec365"]:c8(),["SharedCodec366"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
