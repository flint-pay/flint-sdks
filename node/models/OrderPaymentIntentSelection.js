import { d9868 as c0 } from '../descriptors/data/453.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9957 as c1, d9959 as c2, d9960 as c3, d9961 as c4, d9962 as c5, d9963 as c6 } from '../descriptors/data/457.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9868 as d9868 } from '../descriptors/data/453.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9868;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderPaymentIntentSelection"]:c0(),["PaymentSourceCredential"]:c1(),["ReaderPaymentSourceTip"]:c2(),["SharedCodec2249"]:c3(),["SharedCodec2250"]:c4(),["SharedCodec2251"]:c5(),["SharedCodec2252"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderPaymentIntentSelection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
