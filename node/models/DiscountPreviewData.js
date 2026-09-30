import { d699 as c0, d700 as c1, d69 as c2, d1869 as c3, d1875 as c4, d1876 as c5 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { d700 } from '../descriptors/data.js?sdk=bef5952824dbe0867acb5a07673ca91102b136eda21794fff718a3addd296a2a';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d700;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DiscountPreview"]:c0(),["DiscountPreviewData"]:c1(),["MoneyValue"]:c2(),["PromotionCandidate"]:c3(),["PromotionCombinesWith"]:c4(),["PromotionExclusivity"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDiscountPreviewData(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
