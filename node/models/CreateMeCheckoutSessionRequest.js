import { d8222 as c0, d8219 as c2, d8220 as c3, d8221 as c4 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d323 as c1 } from '../descriptors/data/17.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9584 as c5, d9585 as c6, d9586 as c7, d9587 as c8, d9588 as c9 } from '../descriptors/data/438.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d323 as d323 } from '../descriptors/data/17.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d323;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionRequest"]:c1(),["SharedCodec347"]:c2(),["SharedCodec348"]:c3(),["SharedCodec349"]:c4(),["SharedCodec463"]:c5(),["SharedCodec464"]:c6(),["SharedCodec465"]:c7(),["SharedCodec466"]:c8(),["SharedCodec467"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
