import { d219 as c0 } from '../descriptors/data/11.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4281 as c1 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d5350 as c2, d5345 as c3 } from '../descriptors/data/240.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d219 as d219 } from '../descriptors/data/11.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d219;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateGiftCardRedemptionRequestAutomatic"]:c0(),["MoneyValue"]:c1(),["SharedCodec219"]:c2(),["SharedCodec224"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateGiftCardRedemptionRequestAutomatic(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
