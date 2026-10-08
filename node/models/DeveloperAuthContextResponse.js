import { d729 as c0, d730 as c1, d323 as c2, d1820 as c3, d1821 as c4, d2162 as c5, d2163 as c6, d14 as c7, d725 as c8, d726 as c9, d727 as c10, d728 as c11, d205 as c12, d1819 as c13 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { d730 } from '../descriptors/data.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d730;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeveloperAuthContext"]:c0(),["DeveloperAuthContextResponse"]:c1(),["MoneyValue"]:c2(),["NextAction"]:c3(),["NextActionMerchantAccountSession"]:c4(),["ResponseMeta"]:c5(),["ResponseWarning"]:c6(),["SharedCodec1"]:c7(),["SharedCodec217"]:c8(),["SharedCodec218"]:c9(),["SharedCodec219"]:c10(),["SharedCodec220"]:c11(),["SharedCodec36"]:c12(),["SharedCodec466"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeveloperAuthContextResponse(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
