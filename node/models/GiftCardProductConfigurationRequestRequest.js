import { d5014 as c0, d5015 as c1 } from '../descriptors/data/231.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d3384 as c2 } from '../descriptors/data/139.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d5015 as d5015 } from '../descriptors/data/231.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5015;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GiftCardCustomAmountBoundsRequestRequest"]:c0(),["GiftCardProductConfigurationRequestRequest"]:c1(),["SharedCodec409"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGiftCardProductConfigurationRequestRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
