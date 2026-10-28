import { d4404 as c0, d4405 as c4, d4406 as c5 } from '../descriptors/data/192.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d209 as c1 } from '../descriptors/data/12.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4901 as c2, d4908 as c21, d4910 as c22, d4911 as c23, d4912 as c24 } from '../descriptors/data/222.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3013 as c3 } from '../descriptors/data/116.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4924 as c6, d4916 as c13, d4917 as c14, d4918 as c15, d4919 as c16, d4920 as c17, d4913 as c25, d4914 as c27 } from '../descriptors/data/223.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4925 as c7, d4926 as c18, d4927 as c19, d4928 as c20, d4929 as c26, d4930 as c28, d4931 as c29 } from '../descriptors/data/224.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d4416 as c8, d4408 as c9, d4409 as c10, d4410 as c11, d4411 as c12, d4417 as c31 } from '../descriptors/data/193.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3250 as c30 } from '../descriptors/data/130.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d209 as d209 } from '../descriptors/data/12.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d209;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequest"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["MoneyValue"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnReplacementLineItemRequest"]:c6(),["ReturnResolutionAdjustmentRequest"]:c7(),["ReturnResolutionLineItemRequest"]:c8(),["SharedCodec1070"]:c9(),["SharedCodec1071"]:c10(),["SharedCodec1072"]:c11(),["SharedCodec1073"]:c12(),["SharedCodec1104"]:c13(),["SharedCodec1105"]:c14(),["SharedCodec1106"]:c15(),["SharedCodec1107"]:c16(),["SharedCodec1108"]:c17(),["SharedCodec1109"]:c18(),["SharedCodec1110"]:c19(),["SharedCodec1111"]:c20(),["SharedCodec200"]:c21(),["SharedCodec202"]:c22(),["SharedCodec203"]:c23(),["SharedCodec204"]:c24(),["SharedCodec205"]:c25(),["SharedCodec206"]:c26(),["SharedCodec207"]:c27(),["SharedCodec208"]:c28(),["SharedCodec209"]:c29(),["SharedCodec38"]:c30(),["SharedCodec9"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
