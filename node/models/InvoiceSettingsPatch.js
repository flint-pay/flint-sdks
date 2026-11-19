import { d9405 as c0 } from '../descriptors/data/426.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10883 as c1 } from '../descriptors/data/516.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1156 as c2 } from '../descriptors/data/58.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7918 as c3 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10827 as c4, d10828 as c5, d10829 as c6, d10830 as c7, d10831 as c8, d10832 as c9 } from '../descriptors/data/514.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8459 as c10, d8460 as c11 } from '../descriptors/data/375.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8144 as c12, d8145 as c13 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1156 as d1156 } from '../descriptors/data/58.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1156;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoicePaymentOptionLimitRequest"]:c0(),["InvoiceReminderRule"]:c1(),["InvoiceSettingsPatch"]:c2(),["MoneyValue"]:c3(),["SharedCodec1711"]:c4(),["SharedCodec1712"]:c5(),["SharedCodec1713"]:c6(),["SharedCodec1714"]:c7(),["SharedCodec1715"]:c8(),["SharedCodec1716"]:c9(),["SharedCodec1717"]:c10(),["SharedCodec1718"]:c11(),["SharedCodec2"]:c12(),["SharedCodec3"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceSettingsPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
