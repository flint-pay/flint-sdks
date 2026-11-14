import { d8483 as c0 } from '../descriptors/data/418.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8439 as c1 } from '../descriptors/data/415.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8493 as c2, d8494 as c3, d8495 as c4, d8496 as c5, d8497 as c6, d8498 as c7 } from '../descriptors/data/419.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8483 as d8483 } from '../descriptors/data/418.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8483;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec1503"]:c2(),["SharedCodec1504"]:c3(),["SharedCodec1505"]:c4(),["SharedCodec1506"]:c5(),["SharedCodec1507"]:c6(),["SharedCodec1508"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
