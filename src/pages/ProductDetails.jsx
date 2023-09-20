import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../context";
import { BsArrowLeft } from "react-icons/bs";
import { GiPaperArrow } from "react-icons/gi";
import { Details, Loading } from "../components";

export default function ProductDetails() {
  const navigate = useNavigate();
  // get id from params
  const { id } = useParams();
  // product context
  const { products } = useContext(ProductContext);
  // filter the products to return the product with params id
  const filterProduct = products.find((item) => {
    return item.id === parseInt(id, 10);
  });
  // set loading animation
  if (!filterProduct) {
    return <Loading />;
  }

  return (
    <section className="w-full font-Nippo">
      <section className="w-full sm:px-5 px-2 sm:py-4 py-2 bg-gray-200 flex justify-between items-center text-slate-600">
        <div
          className="sm:text-[20px] text-lg flex justify-center items-center capitalize sm:gap-3 gap-1 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <BsArrowLeft />
          <p>back</p>
        </div>
        <div className="sm:text-[20px] text-base font-semibold">
          <p>{filterProduct.category}</p>
        </div>
        <div className="text-[20px] md:block hidden">
          <GiPaperArrow />
        </div>
      </section>
      <Details filterProduct={filterProduct} id={id} />
    </section>
  );
}
