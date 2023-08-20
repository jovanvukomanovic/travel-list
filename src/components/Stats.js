export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start addding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / numItems) * 100);

  console.log(packedPercentage);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! You are ready to go!"
          : `💼 You have ${numItems} items on your list, and you already packed: ${packedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
