import { useParams } from "react-router-dom";
import { config } from "../../config";
import { useEffect, useState } from "react";
import { ProductProps } from "../../type";
import { getData } from "../lib";
import Loading from "../ui/Loading";
import Container from "../ui/Container";
import _ from "lodash";
import PriceTag from "../ui/PriceTag";
import { MdOutlineStarOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import FormattedPrice from "../ui/FormattedPrice";
import { IoClose } from "react-icons/io5";

const Product = () => {
  const [productData, SetProductData] = useState<ProductProps | null>(null);
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [imgURL, setImgURL] = useState("");
  const [color, setColor] = useState("");
  const { id } = useParams();

  const endpoint = id
    ? `${config.baseURL}/products/${id}`
    : `${config.baseURL}/products/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getData(endpoint);
        if (id) {
          SetProductData(data);
          setAllProducts([]);
        } else {
          // In else statement we prevent confict data between single and all products data.
          setAllProducts(data);
          SetProductData(null);
        }
      } catch (error) {
        console.log("error while fetching Data from API", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, endpoint]);

  useEffect(() => {
    if (productData) {
      setImgURL(productData?.images[0]);
      setColor(productData?.colors[0]);
    }
  }, [productData]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {!!id && productData && _.isEmpty(allProducts) ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-start">
                <div>
                  {productData?.images?.map((item, index) => (
                    <img
                      src={item}
                      alt="img"
                      key={index}
                      className={`w-24 cursor-pointer opacity-80 hover:opacity-100 duration-300 ${
                        imgURL === item &&
                        "border border-gray-500 rounded-md opacity-100"
                      }`}
                      onClick={() => setImgURL(item)}
                    />
                  ))}
                </div>
                <div>
                  <img src={imgURL} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">{productData?.name}</h2>
                <div className="flex  items-center justify-between">
                  <PriceTag
                    regularPrice={productData?.regularPrice}
                    discountedPrice={productData?.discountedPrice}
                    className="text-xl"
                  />
                  <div className="flex items-center gap-1">
                    <div className="text-base text-lightText flex items-center">
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                      <MdOutlineStarOutline />
                    </div>
                    <div className="font-semibold">
                      ({productData?.reviews} reviews)
                    </div>
                  </div>
                </div>
                <p className="flex items-center gap-2">
                  <FaRegEye />{" "}
                  <span className="font-semibold">{productData?.reviews}</span>{" "}
                  people are viewing this right now
                </p>
                <p>
                  Your are saving{" "}
                  <span className="text-base font-semibold text-green-500">
                    <FormattedPrice
                      amount={
                        productData?.regularPrice! -
                        productData?.discountedPrice!
                      }
                    />
                  </span>{" "}
                  uppon purchase
                </p>
                <div>
                  {color && (
                    <p>
                      Color:{" "}
                      <span
                        className="font-semibold capitalize"
                        style={{ color: color }}
                      >
                        {color}
                      </span>
                    </p>
                  )}
                  <div className="flex items-center gap-x-3">
                    {productData?.colors.map((item, index) => (
                      <div
                        key={index}
                        className={`${
                          item === color
                            ? "border border-black p-1 rounded-full"
                            : "border-tra"
                        } `}
                      >
                        <div
                          className="w-10 h-10 rounded-full cursor-pointer"
                          style={{ backgroundColor: item }}
                          onClick={() => setColor(item)}
                        />
                      </div>
                    ))}
                  </div>
                  {color && (
                    <button onClick={() => setColor('')} className="font-semibold mt-1 flex items-center gap-1 hover:text-red-600 duration-200">
                      <IoClose /> Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div>All Products</div>
          )}
        </Container>
      )}
    </div>
  );
};

export default Product;
