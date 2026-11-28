import { d8553 as c0 } from '../descriptors/data/381.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9464 as c1, d9468 as c3, d9469 as c4, d9470 as c5, d9471 as c6, d9472 as c7, d9473 as c8, d9474 as c9, d9475 as c10 } from '../descriptors/data/431.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8003 as c2 } from '../descriptors/data/348.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9476 as c11, d9477 as c12, d9478 as c13, d9479 as c14, d9480 as c15, d9481 as c16, d9482 as c17, d9483 as c18, d9484 as c19, d9485 as c20, d9486 as c21, d9487 as c22, d9488 as c23, d9489 as c24, d9490 as c25, d9491 as c26, d9492 as c27, d9497 as c33, d9498 as c34 } from '../descriptors/data/432.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9122 as c28 } from '../descriptors/data/414.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d8388 as c29, d8389 as c30, d8390 as c31, d8391 as c32 } from '../descriptors/data/372.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9475 as d9475 } from '../descriptors/data/431.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9475;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CustomerTaxExemptionCoverageRequest"]:c0(),["DeliveryChargeTaxCalculationRequestModel"]:c1(),["MoneyValue"]:c2(),["OrderTaxCalculationRequest"]:c3(),["OrderTaxComponentRequest"]:c4(),["OrderTaxExemptionRequest"]:c5(),["OrderTaxJurisdictionRequest"]:c6(),["OrderTaxLocationFullAddressRequest"]:c7(),["OrderTaxLocationPostalAddressRequest"]:c8(),["OrderTaxLocationRequest"]:c9(),["OrderTaxRequest"]:c10(),["SharedCodec1996"]:c11(),["SharedCodec1997"]:c12(),["SharedCodec1998"]:c13(),["SharedCodec1999"]:c14(),["SharedCodec2000"]:c15(),["SharedCodec2001"]:c16(),["SharedCodec2005"]:c17(),["SharedCodec2006"]:c18(),["SharedCodec2007"]:c19(),["SharedCodec2008"]:c20(),["SharedCodec2009"]:c21(),["SharedCodec2012"]:c22(),["SharedCodec2013"]:c23(),["SharedCodec2021"]:c24(),["SharedCodec2022"]:c25(),["SharedCodec2023"]:c26(),["SharedCodec2024"]:c27(),["SharedCodec219"]:c28(),["SharedCodec719"]:c29(),["SharedCodec720"]:c30(),["SharedCodec721"]:c31(),["SharedCodec722"]:c32(),["TaxComponentRequestModel"]:c33(),["TaxJurisdictionRequestModel"]:c34()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
