import { IItem, IItemDescription } from '../models/item.model';

const fetchItems = async (searchValue: string) => {
  const response = await fetch(
    `https://mock-server-api-seven.vercel.app/catalog?enTitle_like=${searchValue}`,
  );

  const parsedResponse = await response.json();
  const searchedItems = parsedResponse.map((item: IItem) => {
    const transformedItem = {
      id: item.id,
      enTitle: item.enTitle,
      beTitle: item.beTitle,
      ltnTitle: item.ltnTitle,
      imagePath: `https://mock-server-api-seven.vercel.app/${item.imagePath}`,
      soundPath: item.soundPath,
      category: item.category,
    };
    return transformedItem;
  });

  return searchedItems;
};

const fetchItemDescription = async (id: string) => {
  const response = await fetch(`https://mock-server-api-seven.vercel.app/catalog?id=${id}`);

  const parsedResponse = await response.json();
  const itemDescription: IItemDescription = {
    id: parsedResponse[0].id,
    beTitle: parsedResponse[0].beTitle,
    ltnTitle: parsedResponse[0].ltnTitle,
    enTitle: parsedResponse[0].enTitle,
    imagePath: `https://mock-server-api-seven.vercel.app/${parsedResponse[0].imagePath}`,
    category: parsedResponse[0].category,
    addedAt: parsedResponse[0].addedAt,
    description: parsedResponse[0].description,
    additional: parsedResponse[0].additional,
    examples: parsedResponse[0].examples,
  };

  // throw new Error(`smth went wrong`);

  return itemDescription;
};

export { fetchItems, fetchItemDescription };
