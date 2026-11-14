import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6136 as c1 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1141 as c2 } from '../descriptors/data/57.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8017 as c3 } from '../descriptors/data/388.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8028 as c4, d8029 as c5 } from '../descriptors/data/389.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d1141 as d1141 } from '../descriptors/data/57.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1141;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemInputVariant"]:c2(),["SharedCodec1194"]:c3(),["SharedCodec1205"]:c4(),["SharedCodec1206"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemInputVariant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
