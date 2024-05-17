const Cards = ({ item }) => {
  return (
    <>
      <div className="card mt-8 mb-10 ml-3 w-80 bg-base-100 shadow-xl mx-4 hover:scale-105 hover:duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline px-3 py-3">${item.price}</div>
            <div className="badge badge-outline cursor-pointer px-3 py-3 hover:bg-pink-500 hover:text-white">Buy now</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
