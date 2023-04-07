import { IItem } from '../models/item.model';

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

export default fetchItems;

// .then((data) => data.json())
// .then((data) =>
//   data.map((item) => {
//     const transformedItem = {
//       id: item.id,
//       enTitle: item.enTitle,
//       beTitle: item.beTitle,
//       ltnTitle: item.ltnTitle,
//       imagePath: `https://mock-server-api-seven.vercel.app/${item.imagePath}`,
//       soundPath: item.soundPath,
//       category: item.category,
//     };
//     return transformedItem;
//   }),
// )
// .catch((err) => console.error(err));
