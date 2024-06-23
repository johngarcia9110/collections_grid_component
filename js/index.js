const collectionsData = [
  {
    collection_id: "cozy",
    name: "Cozy Comfort",
    description: "Plush fabrics and soothing designs",
    image_url:
      "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/cozy-comfort.jpg",
    created_at: "2024-01-01",
  },
  {
    collection_id: "urban",
    name: "Urban Oasis",
    description: "For the city dwellers",
    image_url:
      "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/urban-oasis.jpg",
    created_at: "2024-01-01",
  },
  {
    collection_id: "fresh",
    name: "Fresh Fusion",
    description: "Contemporary styles and patterns",
    image_url:
      "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/collections/fresh-fusion.jpg",
    created_at: "2024-01-01",
  },
];

const collectionsGrid = document.getElementById("collections-grid");

const createCollectionCard = (collectionData, variant) => {
  const card = document.createElement("a");
  card.href = "#";

  const primaryClasses = ["row-span-1", "sm:row-span-2", "min-h-80"];
  const secondaryClasses = ["row-span-1", "min-h-40"];
  card.classList.add(
    "col-span-1",
    "w-full",
    "relative",
    "overflow-hidden",
    "rounded-lg",
    `bg-[url('${collectionData.image_url}')]`,
    "bg-cover",
    "bg-center",
    "focus:outline",
    "outline-[#E9EAFC]",
    ...(variant === "primary" ? primaryClasses : secondaryClasses)
  );
  card.innerHTML = `
      <div class="flex flex-col items-start justify-end h-full p-4 bg-gradient-to-t from-neutral-900/[0.40] to-neutral-900/[0.33] hover:from-neutral-900/[0.60] hover:to-neutral-900/[0.60] ease-in-out duration-300 cursor-pointer">
        <h2 class="text-sm-14 font-normal text-white">${collectionData.name}</h2>
        <p class="text-lg-18 font-medium text-white">${collectionData.description}</p>
      </div>
    `;
  return card;
};

const cardContainer = document.createElement("div");
cardContainer.classList.add(
  "grid",
  "grid-cols-1",
  "sm:grid-cols-2",
  "sm:grid-rows-2",
  "gap-4"
);

for (let i = 0; i < collectionsData.length; i++) {
  const collectionData = collectionsData[i];
  const card = createCollectionCard(
    collectionData,
    i === 0 ? "primary" : "secondary"
  );
  cardContainer.appendChild(card);
}
collectionsGrid.appendChild(cardContainer);
