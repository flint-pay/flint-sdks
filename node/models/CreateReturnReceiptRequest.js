import { d390 as c0 } from '../descriptors/data/23.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10615 as c1, d10616 as c7, d10617 as c8, d10618 as c9, d10619 as c10, d10620 as c11, d10621 as c12 } from '../descriptors/data/499.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10522 as c2, d10525 as c4, d10526 as c5, d10527 as c6 } from '../descriptors/data/493.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d10631 as c3 } from '../descriptors/data/500.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d9112 as c13 } from '../descriptors/data/408.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { d390 as d390 } from '../descriptors/data/23.js?sdk=d3c76bf16b3cbedefee26daadf6e0346518a62c461a7867b1008aa91b458e940';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d390;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnReceiptRequest"]:c0(),["ReturnReceiptLineItemRequest"]:c1(),["ReturnSourceSystemRequest"]:c2(),["ReturnUnverifiedItem"]:c3(),["SharedCodec2680"]:c4(),["SharedCodec2681"]:c5(),["SharedCodec2682"]:c6(),["SharedCodec2754"]:c7(),["SharedCodec2755"]:c8(),["SharedCodec2756"]:c9(),["SharedCodec2761"]:c10(),["SharedCodec2762"]:c11(),["SharedCodec2763"]:c12(),["SharedCodec451"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnReceiptRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
