import { d142 as c0 } from '../descriptors/data/6.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3537 as c1, d3538 as c2, d3539 as c3, d3540 as c4, d3541 as c5, d3542 as c6, d3543 as c7 } from '../descriptors/data/145.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3732 as c8, d3733 as c9, d3734 as c10, d3735 as c11, d3740 as c12, d3741 as c13, d3742 as c14, d3743 as c15 } from '../descriptors/data/155.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d142 as d142 } from '../descriptors/data/6.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d142;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryZoneRequest"]:c0(),["DeliveryCountryCondition"]:c1(),["DeliveryDistance"]:c2(),["DeliveryPostalCodeCondition"]:c3(),["DeliveryPostalCodeValue"]:c4(),["DeliveryRadiusCondition"]:c5(),["DeliveryRadiusOrigin"]:c6(),["DeliveryStateCondition"]:c7(),["DeliveryZoneConfiguration"]:c8(),["SharedCodec109"]:c9(),["SharedCodec110"]:c10(),["SharedCodec111"]:c11(),["SharedCodec337"]:c12(),["SharedCodec338"]:c13(),["SharedCodec339"]:c14(),["SharedCodec340"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
