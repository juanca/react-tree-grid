import { createRef } from 'react';

export const options = [
  { label: 'Apple', ref: createRef() },
  { label: 'Artichoke', ref: createRef() },
  { label: 'Asparagus', ref: createRef() },
  { label: 'Banana', ref: createRef() },
  { label: 'Beets', ref: createRef() },
  { label: 'Bell pepper', ref: createRef() },
  { label: 'Broccoli', ref: createRef() },
  { label: 'Brussels sprout', ref: createRef() },
  { label: 'Cabbage', ref: createRef() },
  { label: 'Carrot', ref: createRef() },
  { label: 'Cauliflower', ref: createRef() },
  { label: 'Celery', ref: createRef() },
  { label: 'Chard', ref: createRef() },
  { label: 'Chicory', ref: createRef() },
  { label: 'Corn', ref: createRef() },
  { label: 'Cucumber', ref: createRef() },
  { label: 'Daikon', ref: createRef() },
  { label: 'Date', ref: createRef() },
  { label: 'Edamame', ref: createRef() },
  { label: 'Eggplant', ref: createRef() },
  { label: 'Elderberry', ref: createRef() },
  { label: 'Fennel', ref: createRef() },
  { label: 'Fig', ref: createRef() },
  { label: 'Garlic', ref: createRef() },
  { label: 'Grape', ref: createRef() },
  { label: 'Honeydew melon', ref: createRef() },
  { label: 'Iceberg lettuce', ref: createRef() },
  { label: 'Jerusalem artichoke', ref: createRef() },
  { label: 'Kale', ref: createRef() },
  { label: 'Kiwi', ref: createRef() },
  { label: 'Leek', ref: createRef() },
  { label: 'Lemon', ref: createRef() },
  { label: 'Mango', ref: createRef() },
  { label: 'Mangosteen', ref: createRef() },
  { label: 'Melon', ref: createRef() },
  { label: 'Mushroom', ref: createRef() },
  { label: 'Nectarine', ref: createRef() },
  { label: 'Okra', ref: createRef() },
  { label: 'Olive', ref: createRef() },
  { label: 'Onion', ref: createRef() },
  { label: 'Orange', ref: createRef() },
  { label: 'Parship', ref: createRef() },
  { label: 'Pea', ref: createRef() },
  { label: 'Pear', ref: createRef() },
  { label: 'Pineapple', ref: createRef() },
  { label: 'Potato', ref: createRef() },
  { label: 'Pumpkin', ref: createRef() },
  { label: 'Quince', ref: createRef() },
  { label: 'Radish', ref: createRef() },
  { label: 'Rhubarb', ref: createRef() },
  { label: 'Shallot', ref: createRef() },
  { label: 'Spinach', ref: createRef() },
  { label: 'Squash', ref: createRef() },
  { label: 'Strawberry', ref: createRef() },
  { label: 'Sweet potato', ref: createRef() },
  { label: 'Tomato', ref: createRef() },
  { label: 'Turnip', ref: createRef() },
  { label: 'Ugli fruit', ref: createRef() },
  { label: 'Victoria plum', ref: createRef() },
  { label: 'Watercress', ref: createRef() },
  { label: 'Watermelon', ref: createRef() },
  { label: 'Yam', ref: createRef() },
  { label: 'Zucchini', ref: createRef() },
];

export function filterByText(array, text) {
  return text === '' ? [] : array.filter(option => RegExp(text, 'i').test(option.label));
}