import { d3013 as c0 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4769 as c1 } from '../descriptors/data/214.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4770 as c2, d4772 as c3, d4779 as c4, d4780 as c5, d4781 as c6, d4782 as c7, d4783 as c8 } from '../descriptors/data/215.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4798 as c9, d4799 as c10, d4800 as c11, d4801 as c12 } from '../descriptors/data/216.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4769 as d4769 } from '../descriptors/data/214.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4769;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionRuleGroupRequest"]:c1(),["PromotionRuleRequest"]:c2(),["PromotionRuleValueRequest"]:c3(),["SharedCodec1023"]:c4(),["SharedCodec1024"]:c5(),["SharedCodec1025"]:c6(),["SharedCodec1026"]:c7(),["SharedCodec1027"]:c8(),["SharedCodec1049"]:c9(),["SharedCodec1050"]:c10(),["SharedCodec1051"]:c11(),["SharedCodec1052"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionRuleGroupRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
