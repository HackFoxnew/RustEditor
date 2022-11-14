
// obtener propiedad css
function getCSSProperty (element, cssProperty) {
  return (
    getComputedStyle(element, null)
      .getPropertyValue(cssProperty)
  );
}