export default function AddToCartButton({
  hasSizesOrExtras,
  onClick,
  basePrice,
}) {
  if (!hasSizesOrExtras) {
    return (
      <button
        type="button"
        className="mt-4 bg-primary text-white rounded-full px-8 py-2"
        onClick={onClick}
      >
        Add to cart ${basePrice}
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-4 bg-primary text-white rounded-full px-8 py-2"
    >
      <span>Add to cart (from ${basePrice})</span>
    </button>
  );
}
