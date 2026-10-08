import { d680 as c0, d681 as c1, d682 as c2, d695 as c3, d323 as c4, d1820 as c5, d1821 as c6, d2162 as c7, d2163 as c8, d14 as c9, d684 as c10, d683 as c11, d686 as c12, d685 as c13, d688 as c14, d687 as c15, d690 as c16, d689 as c17, d692 as c18, d691 as c19, d694 as c20, d693 as c21, d1819 as c22 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d682 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d682;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRevocation"]:c0(),["DeliveryRevocationImpact"]:c1(),["DeliveryRevocationResponse"]:c2(),["DeliveryRevocationTarget"]:c3(),["MoneyValue"]:c4(),["NextAction"]:c5(),["NextActionMerchantAccountSession"]:c6(),["ResponseMeta"]:c7(),["ResponseWarning"]:c8(),["SharedCodec1"]:c9(),["SharedCodec203"]:c10(),["SharedCodec204"]:c11(),["SharedCodec205"]:c12(),["SharedCodec206"]:c13(),["SharedCodec207"]:c14(),["SharedCodec208"]:c15(),["SharedCodec209"]:c16(),["SharedCodec210"]:c17(),["SharedCodec211"]:c18(),["SharedCodec212"]:c19(),["SharedCodec213"]:c20(),["SharedCodec214"]:c21(),["SharedCodec466"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRevocationResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
