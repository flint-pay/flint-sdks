import { d6575 as c0, d6576 as c1 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6686 as c3 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8406 as c4 } from '../descriptors/data/413.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5695 as c5 } from '../descriptors/data/251.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5695 as d5695 } from '../descriptors/data/251.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5695;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["SharedCodec121"]:c3(),["SharedCodec1522"]:c4(),["UpdateReturnReplacementLineItemInputCustom"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnReplacementLineItemInputCustom(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
