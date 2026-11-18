import { d229 as c0 } from '../descriptors/data/10.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9957 as c1, d9959 as c2, d9960 as c3, d9961 as c4, d9962 as c5, d9963 as c6, d9964 as c11, d9965 as c13 } from '../descriptors/data/457.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10092 as c7, d10094 as c8, d10095 as c9, d10096 as c10, d10099 as c12 } from '../descriptors/data/465.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d229 as d229 } from '../descriptors/data/10.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d229;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ConfirmPaymentIntentRequest"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec2249"]:c3(),["SharedCodec2250"]:c4(),["SharedCodec2251"]:c5(),["SharedCodec2252"]:c6(),["SharedCodec327"]:c7(),["SharedCodec328"]:c8(),["SharedCodec329"]:c9(),["SharedCodec330"]:c10(),["SharedCodec331"]:c11(),["SharedCodec332"]:c12(),["SharedCodec333"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeConfirmPaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
