export default class BulletPoints {
 changeBulletPoints() {
  const skuObj = {
   "NP950QED-KB2UK" :   ["15.6' Screen size", "Intel i7 CPU" , "512GB Storage", "16GB Memory", "2-in-1 convertible"],
   "NP730QED-KB1UK" :   ["13.3' Screen size", "Intel i5 CPU" , "256GB Storage", "8GB Memory", "2-in-1 convertible"],
   "NP930XED-KB1UK" :   ["13.3' Screen size", "Intel i5 CPU" , "256GB Storage", "8GB Memory", "Intel® Iris® Xe Graphics"],
   "NP950XED-KB1UK" :   ["15.6' Screen size", "Intel i5 CPU" , "256GB Storage", "8GB Memory", "Intel® Iris® Xe Graphics"],
   "NP750XED-KB2UK" :   ["15.6' Screen size", "Intel i5 CPU" , "256GB Storage", "8GB Memory", "Intel® Iris® Xe Graphics"],
   "NP750XED-KC2UK" :   ["15.6' Screen size", "Intel i5 CPU" , "256GB Storage", "8GB Memory", "Intel® Iris® Xe Graphics"],
   "NP930QED-KA1UK" :   ["13'3' Screen size", "Intel i5 CPU" , "256GB Storage", "8GB Memory", "2-in-1 convertible"],
   "NP930QED-KB1UK" :   ["13'3' Screen size", "Intel i5 CPU" , "256GB Storage", "8GB Memory", "2-in-1 convertible"],
   "NP930QED-KB3UK" :   ["13.3' Screen size", "Intel i7 CPU" , "256GB Storage", "8GB Memory", "2-in-1 convertible"],
   "NP950QED-KB1UK" :   ["15.6' Screen size", "Intel i5 CPU" , "256GB Storage", "8GB Memory", "2-in-1 convertible"],
   "NP750XED-KC3UK" :   ["15.6' Screen size", "Intel i5 CPU" , "256GB Storage", "8GB Memory", "Intel® Iris® Xe Graphics"],
   "NP730QED-KB2UK" :   ["13.3' Screen size", "Intel i7 CPU" , "512GB Storage", "16GB Memory", "2-in-1 convertible"],
   "NP750XED-KC4UK" :   ["15.6' Screen size", "Intel i7 CPU" , "256GB Storage", "8GB Memory", "Intel® Iris® Xe Graphics"],
   "NP955XED-KA1UK" :   ["15.6' Screen size", "Intel i5 CPU" , "256GB Storage", "8GB Memory", "5G connectivity"],
   "NP950XED-KB2UK" :   ["15.6' Screen size", "Intel i7 CPU" , "512GB Storage", "16GB Memory", "Intel® Iris® Xe Graphics"],
   "NP930QED-KB4UK" :   ["13.3' Screen size", "Intel i7 CPU" , "512GB Storage", "16GB Memory", "2-in-1 convertible"],
   "NP930QED-KH1UK" :   ["13.3' Screen size", "Intel i7 CPU" , "512GB Storage", "16GB Memory", "2-in-1 convertible"],
   "NP950QED-KA2UK" :   ["15.6' Screen size", "Intel i7 CPU" , "512GB Storage", "16GB Memory", "2-in-1 convertible"],
  };

  const currentPopUpSku = document.querySelector("#myModal > div > div > div.product__info__content > small").textContent;
  const bulletPoints = document.querySelectorAll('.usp-text');
  for (const sku in skuObj) {
   if (Object.hasOwnProperty.call(skuObj, sku)) {
    const currentSpecs = skuObj[sku];

    if (currentPopUpSku === sku ) {
     bulletPoints.forEach((bulletPoint, x) => {
      currentSpecs.forEach((specs, y) => {
       (x === y) ? bulletPoint.innerText = specs : bulletPoint.innerText;
      });
     });
    }

   }
  }
 }
}