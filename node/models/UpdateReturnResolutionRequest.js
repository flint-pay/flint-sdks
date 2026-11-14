import { d6575 as c0, d6576 as c1 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c2 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6686 as c3 } from '../descriptors/data/311.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8404 as c4, d8405 as c5, d8406 as c6, d8407 as c7, d8408 as c8 } from '../descriptors/data/413.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5920 as c9 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6018 as c10 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6256 as c11 } from '../descriptors/data/287.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8440 as c12, d8441 as c13, d8442 as c14, d8443 as c15, d8444 as c16 } from '../descriptors/data/415.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8461 as c17, d8462 as c18, d8463 as c19 } from '../descriptors/data/416.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5698 as c20 } from '../descriptors/data/251.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5698 as d5698 } from '../descriptors/data/251.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5698;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["LineItemFulfillmentOriginRequestModel"]:c0(),["LineItemFulfillmentRequestModel"]:c1(),["MoneyValue"]:c2(),["SharedCodec121"]:c3(),["SharedCodec1520"]:c4(),["SharedCodec1521"]:c5(),["SharedCodec1522"]:c6(),["SharedCodec1523"]:c7(),["SharedCodec1524"]:c8(),["SharedCodec1692"]:c9(),["SharedCodec1695"]:c10(),["SharedCodec1696"]:c11(),["SharedCodec1790"]:c12(),["SharedCodec1791"]:c13(),["SharedCodec1792"]:c14(),["SharedCodec1793"]:c15(),["SharedCodec1794"]:c16(),["UpdateReturnReplacementLineItemRequest"]:c17(),["UpdateReturnResolutionAdjustmentRequest"]:c18(),["UpdateReturnResolutionLineItemRequest"]:c19(),["UpdateReturnResolutionRequest"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
