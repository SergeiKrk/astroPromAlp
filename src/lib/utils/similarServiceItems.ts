// similer products
const similarServiceItems = (currentItem: any, allItems: any, slug: string) => {
  let tags: string[] = [];

  // set tags
  if (currentItem.data.tags.length > 0) {
    tags = currentItem.data.tags;
  }

  // filter by tags
  const filterByTags = allItems.filter((item: { data: { tags: string } }) =>
    tags.find((tag) => item.data.tags.includes(tag))
  );

  // filter by slug
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similarServiceItems;
