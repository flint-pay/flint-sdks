import { d3013 as c0 } from '../descriptors/data/116.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4759 as c1, d4769 as c3 } from '../descriptors/data/214.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4398 as c2, d4399 as c13, d4400 as c14, d4401 as c15, d4402 as c16, d4403 as c17 } from '../descriptors/data/192.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4770 as c4, d4772 as c5, d4778 as c6, d4779 as c7, d4780 as c8, d4781 as c9, d4782 as c10, d4783 as c11, d4784 as c12 } from '../descriptors/data/215.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4798 as c18, d4799 as c19, d4800 as c20, d4801 as c21 } from '../descriptors/data/216.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { d4759 as d4759 } from '../descriptors/data/214.js?sdk=ebff27e81aec9bdd0f095cae8c1add08bcdfa885028bf0eb87e3396a43a44aab';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4759;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PromotionApplicationMethodPatch"]:c1(),["PromotionRecurrence"]:c2(),["PromotionRuleGroupRequest"]:c3(),["PromotionRuleRequest"]:c4(),["PromotionRuleValueRequest"]:c5(),["SharedCodec1022"]:c6(),["SharedCodec1023"]:c7(),["SharedCodec1024"]:c8(),["SharedCodec1025"]:c9(),["SharedCodec1026"]:c10(),["SharedCodec1027"]:c11(),["SharedCodec1028"]:c12(),["SharedCodec1029"]:c13(),["SharedCodec1030"]:c14(),["SharedCodec1031"]:c15(),["SharedCodec1032"]:c16(),["SharedCodec1033"]:c17(),["SharedCodec1049"]:c18(),["SharedCodec1050"]:c19(),["SharedCodec1051"]:c20(),["SharedCodec1052"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePromotionApplicationMethodPatch(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
