import { d8533 as c0 } from '../descriptors/data/406.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7604 as c1 } from '../descriptors/data/351.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c2 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6945 as c3, d6946 as c4, d6947 as c5 } from '../descriptors/data/315.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8533 as d8533 } from '../descriptors/data/406.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8533;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ApplyDiscountRequestManual"]:c0(),["ManualDiscountRequest"]:c1(),["MoneyValue"]:c2(),["PromotionRefInputPromotionCode"]:c3(),["PromotionRefInputPromotionID"]:c4(),["PromotionRefRequest"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeApplyDiscountRequestManual(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
