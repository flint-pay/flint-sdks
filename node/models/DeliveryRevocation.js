import { d659 as c0, d660 as c1, d674 as c2, d663 as c3, d662 as c4, d665 as c5, d664 as c6, d667 as c7, d666 as c8, d669 as c9, d668 as c10, d671 as c11, d670 as c12, d673 as c13, d672 as c14 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d659 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d659;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationTarget"]:c2(),["SharedCodec194"]:c3(),["SharedCodec195"]:c4(),["SharedCodec196"]:c5(),["SharedCodec197"]:c6(),["SharedCodec198"]:c7(),["SharedCodec199"]:c8(),["SharedCodec200"]:c9(),["SharedCodec201"]:c10(),["SharedCodec202"]:c11(),["SharedCodec203"]:c12(),["SharedCodec204"]:c13(),["SharedCodec205"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocation(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
