interface Item {
  id: string;
}

// Input: (1) An array of type "T", (2) Object ID to be searched
// Output: Index of input item (identified by input ID) in given array
// Can be used to find index of a list, or index of a task in a list
export const findItemIndexById = <T extends Item>(items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id);
};
