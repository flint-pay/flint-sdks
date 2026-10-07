import { d659 as c0, d660 as c1, d661 as c2, d674 as c3, d314 as c4, d1775 as c5, d1776 as c6, d2112 as c7, d2113 as c8, d14 as c9, d663 as c10, d662 as c11, d665 as c12, d664 as c13, d667 as c14, d666 as c15, d669 as c16, d668 as c17, d671 as c18, d670 as c19, d673 as c20, d672 as c21, d1774 as c22 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { d661 } from '../descriptors/data.js?sdk=94d0201d0d4794f7d38785f27620d8e5bb6163ea5be7d564a21c40eb38a1581b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d661;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationResponse"]:c2(),["DeliveryRevocationTarget"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec194"]:c10(),["SharedCodec195"]:c11(),["SharedCodec196"]:c12(),["SharedCodec197"]:c13(),["SharedCodec198"]:c14(),["SharedCodec199"]:c15(),["SharedCodec200"]:c16(),["SharedCodec201"]:c17(),["SharedCodec202"]:c18(),["SharedCodec203"]:c19(),["SharedCodec204"]:c20(),["SharedCodec205"]:c21(),["SharedCodec448"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
