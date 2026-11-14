import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6136 as c1 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7992 as c2 } from '../descriptors/data/387.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8017 as c3 } from '../descriptors/data/388.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8022 as c4, d8023 as c5, d8025 as c6, d8026 as c7, d8027 as c8, d8028 as c9, d8029 as c10 } from '../descriptors/data/389.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8034 as c11, d8035 as c12 } from '../descriptors/data/390.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8036 as c13, d8037 as c14 } from '../descriptors/data/391.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7992 as d7992 } from '../descriptors/data/387.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7992;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec1194"]:c3(),["SharedCodec1199"]:c4(),["SharedCodec1200"]:c5(),["SharedCodec1202"]:c6(),["SharedCodec1203"]:c7(),["SharedCodec1204"]:c8(),["SharedCodec1205"]:c9(),["SharedCodec1206"]:c10(),["SharedCodec1211"]:c11(),["SharedCodec1212"]:c12(),["SharedCodec1213"]:c13(),["SharedCodec1214"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
