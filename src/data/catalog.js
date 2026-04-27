import data from "./catalog.json";

export const slugify = (s) => {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

export const catalog = data;

export const getItemBySlug = (slug) =>
  catalog.find((it) => slugify(it.itemname) === slug);

export const groupByCategory = () => {
  return catalog.reduce((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});
};
