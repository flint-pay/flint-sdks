import { d157 as c0 } from '../descriptors/data/8.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d10068 as c1 } from '../descriptors/data/463.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d7885 as c2 } from '../descriptors/data/338.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8227 as c3, d8226 as c4 } from '../descriptors/data/359.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d8994 as c5 } from '../descriptors/data/403.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d157 as d157 } from '../descriptors/data/8.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d157;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CapturePaymentIntentRequest"]:c0(),["CapturePaymentSplitRequest"]:c1(),["MoneyValue"]:c2(),["PlatformFeeMoney"]:c3(),["PlatformFeeRequest"]:c4(),["SharedCodec216"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCapturePaymentIntentRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
