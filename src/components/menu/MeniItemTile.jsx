import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice, sizes, extraIngredientPrices } =
    item;
  const hasSizesOrExtras =
    sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className="bg-gray-200/50 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-xl hover:shadow-black/25">
      <div className="text-center">
        <img
          src={image}
          className="max-h-auto max-w-28 block mx-auto"
          alt="pizza"
        />
      </div>
      <h4 className="font-semibold my-3 text-xl">{name}</h4>
      <p className="text-gray-500 text-sm max-h-[60px] line-clamp-3">
        {description}
      </p>
      <AddToCartButton
        hasSizesOrExtras={hasSizesOrExtras}
        onClick={onAddToCart}
        basePrice={basePrice}
      />
    </div>
  );
}
