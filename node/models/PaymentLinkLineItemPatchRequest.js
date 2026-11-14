import { d5790 as c0 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6136 as c1 } from '../descriptors/data/281.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7991 as c2 } from '../descriptors/data/386.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8017 as c3 } from '../descriptors/data/388.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8022 as c4, d8023 as c5, d8025 as c6, d8026 as c7, d8027 as c8, d8028 as c9, d8029 as c10, d8030 as c11 } from '../descriptors/data/389.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d8031 as c12, d8032 as c13, d8033 as c14 } from '../descriptors/data/390.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7991 as d7991 } from '../descriptors/data/386.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7991;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec1194"]:c3(),["SharedCodec1199"]:c4(),["SharedCodec1200"]:c5(),["SharedCodec1202"]:c6(),["SharedCodec1203"]:c7(),["SharedCodec1204"]:c8(),["SharedCodec1205"]:c9(),["SharedCodec1206"]:c10(),["SharedCodec1207"]:c11(),["SharedCodec1208"]:c12(),["SharedCodec1209"]:c13(),["SharedCodec1210"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
