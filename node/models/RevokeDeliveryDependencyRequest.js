import { d674 as c0, d2230 as c1, d663 as c2, d662 as c3, d665 as c4, d664 as c5, d667 as c6, d666 as c7, d669 as c8, d668 as c9, d671 as c10, d670 as c11, d673 as c12, d672 as c13 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d2230 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2230;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocationTarget"]:c0(),["RevokeDeliveryDependencyRequest"]:c1(),["SharedCodec194"]:c2(),["SharedCodec195"]:c3(),["SharedCodec196"]:c4(),["SharedCodec197"]:c5(),["SharedCodec198"]:c6(),["SharedCodec199"]:c7(),["SharedCodec200"]:c8(),["SharedCodec201"]:c9(),["SharedCodec202"]:c10(),["SharedCodec203"]:c11(),["SharedCodec204"]:c12(),["SharedCodec205"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRevokeDeliveryDependencyRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
