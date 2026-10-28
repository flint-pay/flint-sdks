import { d3655 as c0, d3658 as c1, d3664 as c3, d3665 as c4, d3666 as c5, d3667 as c6, d3668 as c7, d3669 as c8, d3670 as c9, d3671 as c10, d3672 as c11, d3673 as c12 } from '../descriptors/data/151.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3467 as c2 } from '../descriptors/data/141.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d2439 as c13 } from '../descriptors/data/97.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d2439 as d2439 } from '../descriptors/data/97.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2439;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryProfileConfigurationRequest"]:c0(),["DeliveryProfileOriginPolicyRequest"]:c1(),["SharedCodec1179"]:c2(),["SharedCodec304"]:c3(),["SharedCodec305"]:c4(),["SharedCodec306"]:c5(),["SharedCodec307"]:c6(),["SharedCodec308"]:c7(),["SharedCodec309"]:c8(),["SharedCodec310"]:c9(),["SharedCodec311"]:c10(),["SharedCodec312"]:c11(),["SharedCodec313"]:c12(),["UpdateDeliveryProfileRequest"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryProfileRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
