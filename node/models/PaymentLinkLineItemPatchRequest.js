import { d5764 as c0 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6091 as c1 } from '../descriptors/data/275.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7947 as c2 } from '../descriptors/data/380.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7973 as c3 } from '../descriptors/data/382.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7978 as c4, d7979 as c5, d7981 as c6, d7982 as c7, d7983 as c8, d7984 as c9, d7985 as c10, d7986 as c11, d7987 as c12, d7988 as c13 } from '../descriptors/data/383.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7989 as c14 } from '../descriptors/data/384.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7947 as d7947 } from '../descriptors/data/380.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7947;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec1193"]:c3(),["SharedCodec1198"]:c4(),["SharedCodec1199"]:c5(),["SharedCodec1201"]:c6(),["SharedCodec1202"]:c7(),["SharedCodec1203"]:c8(),["SharedCodec1204"]:c9(),["SharedCodec1205"]:c10(),["SharedCodec1206"]:c11(),["SharedCodec1207"]:c12(),["SharedCodec1208"]:c13(),["SharedCodec1209"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
