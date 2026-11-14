import { d5919 as c0, d5920 as c4 } from '../descriptors/data/268.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5790 as c1 } from '../descriptors/data/259.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7707 as c2 } from '../descriptors/data/371.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7716 as c3 } from '../descriptors/data/372.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6018 as c5 } from '../descriptors/data/274.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7765 as c6, d7766 as c7, d7767 as c8, d7768 as c9, d7769 as c10, d7770 as c11, d7771 as c12, d7772 as c13, d7773 as c14, d7774 as c16 } from '../descriptors/data/374.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7620 as c15 } from '../descriptors/data/366.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d6577 as c17, d6578 as c18, d6579 as c19, d6580 as c20, d6581 as c21 } from '../descriptors/data/304.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7813 as c22, d7814 as c23, d7815 as c24 } from '../descriptors/data/376.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5850 as c25 } from '../descriptors/data/263.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5661 as c26 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5661 as d5661 } from '../descriptors/data/248.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5661;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MetadataRequest"]:c0(),["MoneyValue"]:c1(),["OrderCalculatedLineItemTaxRequest"]:c2(),["OrderLineItemModifierRequestModel"]:c3(),["SharedCodec1692"]:c4(),["SharedCodec1695"]:c5(),["SharedCodec1727"]:c6(),["SharedCodec1728"]:c7(),["SharedCodec1729"]:c8(),["SharedCodec1730"]:c9(),["SharedCodec1731"]:c10(),["SharedCodec1732"]:c11(),["SharedCodec1733"]:c12(),["SharedCodec1734"]:c13(),["SharedCodec1735"]:c14(),["SharedCodec1736"]:c15(),["SharedCodec1737"]:c16(),["SharedCodec333"]:c17(),["SharedCodec334"]:c18(),["SharedCodec335"]:c19(),["SharedCodec336"]:c20(),["SharedCodec337"]:c21(),["TaxCalculationRequestRequest"]:c22(),["TaxComponentRequestRequest"]:c23(),["TaxJurisdictionRequest"]:c24(),["TextModifierRequest"]:c25(),["UpdateLineItemRequest"]:c26()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
