import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d871 as c1 } from '../descriptors/data/38.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4398 as c2, d4399 as c11, d4400 as c12, d4401 as c13, d4402 as c14, d4403 as c15 } from '../descriptors/data/192.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4769 as c3 } from '../descriptors/data/214.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4770 as c4, d4772 as c5, d4779 as c6, d4780 as c7, d4781 as c8, d4782 as c9, d4783 as c10 } from '../descriptors/data/215.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4798 as c16, d4799 as c17, d4800 as c18, d4801 as c19 } from '../descriptors/data/216.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d871 as d871 } from '../descriptors/data/38.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d871;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionBuyXGetYMethodRequest"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1023"]:c6(),["SharedCodec1024"]:c7(),["SharedCodec1025"]:c8(),["SharedCodec1026"]:c9(),["SharedCodec1027"]:c10(),["SharedCodec1029"]:c11(),["SharedCodec1030"]:c12(),["SharedCodec1031"]:c13(),["SharedCodec1032"]:c14(),["SharedCodec1033"]:c15(),["SharedCodec1049"]:c16(),["SharedCodec1050"]:c17(),["SharedCodec1051"]:c18(),["SharedCodec1052"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionBuyXGetYMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
