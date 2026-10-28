import { d3537 as c0, d3538 as c1, d3539 as c2, d3540 as c3, d3541 as c4, d3542 as c5, d3543 as c6 } from '../descriptors/data/145.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3732 as c7, d3733 as c8, d3734 as c9, d3735 as c10, d3740 as c12, d3741 as c13, d3742 as c14, d3743 as c15 } from '../descriptors/data/155.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d3467 as c11 } from '../descriptors/data/141.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d2441 as c16 } from '../descriptors/data/97.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { d2441 as d2441 } from '../descriptors/data/97.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2441;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryCountryCondition"]:c0(),["DeliveryDistance"]:c1(),["DeliveryPostalCodeCondition"]:c2(),["DeliveryPostalCodeValue"]:c3(),["DeliveryRadiusCondition"]:c4(),["DeliveryRadiusOrigin"]:c5(),["DeliveryStateCondition"]:c6(),["DeliveryZoneConfiguration"]:c7(),["SharedCodec109"]:c8(),["SharedCodec110"]:c9(),["SharedCodec111"]:c10(),["SharedCodec1179"]:c11(),["SharedCodec337"]:c12(),["SharedCodec338"]:c13(),["SharedCodec339"]:c14(),["SharedCodec340"]:c15(),["UpdateDeliveryZoneRequest"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateDeliveryZoneRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
