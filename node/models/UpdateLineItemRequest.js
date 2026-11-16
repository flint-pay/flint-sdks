import { d6744 as c0, d6745 as c4 } from '../descriptors/data/303.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6617 as c1 } from '../descriptors/data/294.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8539 as c2 } from '../descriptors/data/406.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8548 as c3 } from '../descriptors/data/407.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6841 as c5 } from '../descriptors/data/309.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8586 as c6, d8587 as c7, d8588 as c8, d8589 as c9, d8590 as c10, d8591 as c11, d8592 as c12, d8593 as c13, d8594 as c14, d8595 as c16 } from '../descriptors/data/408.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8449 as c15 } from '../descriptors/data/401.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d7412 as c17, d7413 as c18, d7414 as c19, d7415 as c20, d7416 as c21 } from '../descriptors/data/340.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8636 as c22 } from '../descriptors/data/410.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d8637 as c23, d8638 as c24 } from '../descriptors/data/411.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6675 as c25 } from '../descriptors/data/298.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6488 as c26 } from '../descriptors/data/283.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { d6488 as d6488 } from '../descriptors/data/283.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d6488;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec2406"]:c4(),["SharedCodec2409"]:c5(),["SharedCodec2441"]:c6(),["SharedCodec2442"]:c7(),["SharedCodec2443"]:c8(),["SharedCodec2444"]:c9(),["SharedCodec2445"]:c10(),["SharedCodec2446"]:c11(),["SharedCodec2447"]:c12(),["SharedCodec2448"]:c13(),["SharedCodec2449"]:c14(),["SharedCodec2450"]:c15(),["SharedCodec2451"]:c16(),["SharedCodec417"]:c17(),["SharedCodec418"]:c18(),["SharedCodec419"]:c19(),["SharedCodec420"]:c20(),["SharedCodec421"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
