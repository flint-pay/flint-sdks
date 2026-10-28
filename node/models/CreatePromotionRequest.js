import { d4756 as c0, d4760 as c3, d4764 as c4, d4766 as c5, d4769 as c7 } from '../descriptors/data/214.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d194 as c1 } from '../descriptors/data/10.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3013 as c2 } from '../descriptors/data/116.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4398 as c6, d4399 as c16, d4400 as c17, d4401 as c18, d4402 as c19, d4403 as c20 } from '../descriptors/data/192.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4770 as c8, d4772 as c9, d4773 as c10, d4779 as c11, d4780 as c12, d4781 as c13, d4782 as c14, d4783 as c15, d4785 as c21, d4786 as c22, d4787 as c23 } from '../descriptors/data/215.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4798 as c24, d4799 as c25, d4800 as c26, d4801 as c27 } from '../descriptors/data/216.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d194 as d194 } from '../descriptors/data/10.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d194;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreatePromotionCodeRequest"]:c0(),["CreatePromotionRequest"]:c1(),["MoneyValue"]:c2(),["PromotionApplicationMethodRequest"]:c3(),["PromotionCombinesWithRequest"]:c4(),["PromotionExclusivityRequest"]:c5(),["PromotionRecurrence"]:c6(),["PromotionRuleGroupRequest"]:c7(),["PromotionRuleRequest"]:c8(),["PromotionRuleValueRequest"]:c9(),["PromotionSchedule"]:c10(),["SharedCodec1023"]:c11(),["SharedCodec1024"]:c12(),["SharedCodec1025"]:c13(),["SharedCodec1026"]:c14(),["SharedCodec1027"]:c15(),["SharedCodec1029"]:c16(),["SharedCodec1030"]:c17(),["SharedCodec1031"]:c18(),["SharedCodec1032"]:c19(),["SharedCodec1033"]:c20(),["SharedCodec1034"]:c21(),["SharedCodec1035"]:c22(),["SharedCodec1036"]:c23(),["SharedCodec1049"]:c24(),["SharedCodec1050"]:c25(),["SharedCodec1051"]:c26(),["SharedCodec1052"]:c27()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreatePromotionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
