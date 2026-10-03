import { d691 as c0, d692 as c1, d693 as c2, d706 as c3, d74 as c4, d1786 as c5, d1785 as c6, d2121 as c7, d2122 as c8, d695 as c9, d694 as c10, d697 as c11, d696 as c12, d699 as c13, d698 as c14, d701 as c15, d700 as c16, d703 as c17, d702 as c18, d705 as c19, d704 as c20 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { d693 } from '../descriptors/data.js?sdk=40abaf2a2616e8b74370ab25f8d4a8faced3f68b7d58057fcd11631bbc8038f0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d693;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationResponse"]:c2(),["DeliveryRevocationTarget"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec220"]:c9(),["SharedCodec221"]:c10(),["SharedCodec222"]:c11(),["SharedCodec223"]:c12(),["SharedCodec224"]:c13(),["SharedCodec225"]:c14(),["SharedCodec226"]:c15(),["SharedCodec227"]:c16(),["SharedCodec228"]:c17(),["SharedCodec229"]:c18(),["SharedCodec230"]:c19(),["SharedCodec231"]:c20()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
