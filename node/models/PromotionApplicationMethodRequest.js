import { d3013 as c0 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4760 as c1, d4769 as c3 } from '../descriptors/data/214.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4398 as c2, d4399 as c11, d4400 as c12, d4401 as c13, d4402 as c14, d4403 as c15 } from '../descriptors/data/192.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4770 as c4, d4772 as c5, d4779 as c6, d4780 as c7, d4781 as c8, d4782 as c9, d4783 as c10, d4785 as c16, d4786 as c17, d4787 as c18 } from '../descriptors/data/215.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4798 as c19, d4799 as c20, d4800 as c21, d4801 as c22 } from '../descriptors/data/216.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4760 as d4760 } from '../descriptors/data/214.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4760;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodRequest"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1023"]:c6(),["SharedCodec1024"]:c7(),["SharedCodec1025"]:c8(),["SharedCodec1026"]:c9(),["SharedCodec1027"]:c10(),["SharedCodec1029"]:c11(),["SharedCodec1030"]:c12(),["SharedCodec1031"]:c13(),["SharedCodec1032"]:c14(),["SharedCodec1033"]:c15(),["SharedCodec1034"]:c16(),["SharedCodec1035"]:c17(),["SharedCodec1036"]:c18(),["SharedCodec1049"]:c19(),["SharedCodec1050"]:c20(),["SharedCodec1051"]:c21(),["SharedCodec1052"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
