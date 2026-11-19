import { d10615 as c0, d10616 as c2, d10617 as c3, d10618 as c4, d10619 as c5, d10620 as c6, d10621 as c7 } from '../descriptors/data/499.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10631 as c1 } from '../descriptors/data/500.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10615 as d10615 } from '../descriptors/data/499.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10615;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnReceiptLineItemRequest"]:c0(),["ReturnUnverifiedItem"]:c1(),["SharedCodec2754"]:c2(),["SharedCodec2755"]:c3(),["SharedCodec2756"]:c4(),["SharedCodec2761"]:c5(),["SharedCodec2762"]:c6(),["SharedCodec2763"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnReceiptLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
