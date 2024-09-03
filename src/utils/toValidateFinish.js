const toValidateFinish = (boxes) => {
  return boxes.flatMap((box) => box).every((box) => !!box);
};

export { toValidateFinish };
