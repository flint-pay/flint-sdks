import { d195 as c0 } from '../descriptors/data/10.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4815 as c2, d4816 as c3, d4817 as c4, d4818 as c5, d4820 as c6, d4821 as c7, d4822 as c8, d4823 as c9, d4824 as c10, d4825 as c11, d4826 as c12, d4827 as c13, d4828 as c14, d4833 as c16 } from '../descriptors/data/217.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3941 as c15 } from '../descriptors/data/167.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4834 as c17, d4835 as c18, d4836 as c19, d4837 as c20, d4838 as c21, d4839 as c22 } from '../descriptors/data/218.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d195 as d195 } from '../descriptors/data/10.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d195;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateRefundRequest"]:c0(),["MoneyValue"]:c1(),["RefundAdjustmentAudit"]:c2(),["RefundAdjustmentReasonRequest"]:c3(),["RefundCharge"]:c4(),["RefundDestinations"]:c5(),["RefundLineItem"]:c6(),["RefundLineItemAdjustmentIn"]:c7(),["RefundLineItemAdjustmentRefundIn"]:c8(),["RefundTaxBreakdownRefundIn"]:c9(),["RefundTenderAllocationRequest"]:c10(),["SharedCodec1053"]:c11(),["SharedCodec1054"]:c12(),["SharedCodec1055"]:c13(),["SharedCodec1056"]:c14(),["SharedCodec139"]:c15(),["SharedCodec191"]:c16(),["SharedCodec192"]:c17(),["SharedCodec193"]:c18(),["SharedCodec194"]:c19(),["SharedCodec195"]:c20(),["SharedCodec196"]:c21(),["SharedCodec197"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
